import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Card, Accordion, Image } from 'react-bootstrap'
import EvolvButton from '../../../../Common/Button'
import { Link, useHistory } from 'react-router-dom'
import Completed from '../../../Workout/Completed'
import './index.scss'
import axios from '../../../../../store/axios-secure'
import { Icon } from '@iconify/react'
import AccordionComponent from '../../../../Common/AccordionComponent'
import StepsTracker from '../ClientContainer/StepsTracker'
import Button from '../../../../Common/Button'
import moment from 'moment/moment'

const ClientRow = ({
    fullName,
    email,
    photoUrl,
    lastSession,
    nextSession,
    clientId,
    showAccordian = true,
    showBackButton = true,
    showWorkoutButton = true,
    showStepsCount = false,
    showLastWorkout = true,
    lastUpdatedWorkoutDate,
    lastCompletedWorkoutDate,
    lastUpdatedFeedbackDate,
    lastNotUpdatedFeedbackDate,
    targetSteps,
    stepsWalked7Days,
}) => {
    const history = useHistory()
    const [stepsData, setStepsData] = useState(targetSteps)
    const [editable, setEditable] = useState(false)

    let workoutNotScheduled = false
    if (
        !lastUpdatedWorkoutDate ||
        moment().isSameOrAfter(lastUpdatedWorkoutDate, 'day')
    ) {
        workoutNotScheduled = true
    }

    const fetchData = async () => {
        try {
            const response = await axios.post(`trainers/targetSteps`, {
                targetSteps: Number(stepsData),
                clientId: clientId,
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="client-details-row">
            {/* <AccordionComponent
                disabled={!showAccordian}
                headClick={false}
                data={{
                    parent: ( */}
            <Card className="client-card">
                <Card.Header className="client-card-header">
                    <div className="client-heading">
                        <div className="col-md-4 client-details">
                            {showBackButton && (
                                <div className={`col-md-1 back-container`}>
                                    <Link to="/">
                                        <Icon
                                            color="white"
                                            icon={'eva:arrow-ios-back-fill'}
                                            height={40}
                                            width={40}
                                        />
                                    </Link>
                                </div>
                            )}
                            <div className="client-name-details">
                                <div className="col-md-2 image-container">
                                    <Image
                                        src={
                                            photoUrl ??
                                            'https://storage.googleapis.com/evolv-store/icons/auth/profile.jpg'
                                        }
                                        roundedCircle
                                        width="40px"
                                        height="40px"
                                    />
                                </div>
                                <div className="col client-details-text">
                                    <p className="client-name">{fullName}</p>
                                    <p className="last-session">{email}</p>
                                    <p className="last-session">
                                        {lastSession &&
                                            `Last: ${lastSession?.name} on ${lastSession?.actualPerformDate}`}
                                    </p>
                                </div>
                            </div>
                            {/* session  scheduling */}
                        </div>
                        {showStepsCount && (
                            <StepsTracker
                                targetSteps={targetSteps}
                                stepsWalked7Days={stepsWalked7Days}
                                clientId={clientId}
                            />
                        )}
                        {showLastWorkout && (
                            <div className="col-md-2 date-alerts-container">
                                <div className="date-alerts-left">
                                    <div
                                        className={`date  ${
                                            lastNotUpdatedFeedbackDate.length >
                                            0
                                                ? 'date-alert'
                                                : ''
                                        }`}
                                    >
                                        <div className="date-alert-icon">
                                            <Icon
                                                fontWeight={'bold'}
                                                icon="bx:user-check"
                                            />
                                        </div>
                                        <div className="date-text">
                                            {!lastNotUpdatedFeedbackDate ? (
                                                lastUpdatedFeedbackDate ? (
                                                    <h5>
                                                        {moment(
                                                            lastUpdatedFeedbackDate,
                                                        ).format('D')}{' '}
                                                        {moment(
                                                            lastUpdatedFeedbackDate,
                                                        ).format('MMM')}
                                                    </h5>
                                                ) : (
                                                    <h5 className="no-date">
                                                        -
                                                    </h5>
                                                )
                                            ) : lastNotUpdatedFeedbackDate.length >
                                              0 ? (
                                                <h5>
                                                    {moment(
                                                        lastNotUpdatedFeedbackDate,
                                                    ).format('D')}{' '}
                                                    {moment(
                                                        lastNotUpdatedFeedbackDate,
                                                    ).format('MMM')}
                                                </h5>
                                            ) : (
                                                <h5 className="no-date">-</h5>
                                            )}
                                        </div>
                                    </div>
                                    <div
                                        className={`date  ${
                                            workoutNotScheduled
                                                ? 'date-alert'
                                                : ''
                                        }`}
                                    >
                                        {' '}
                                        <div className="date-alert-icon check">
                                            <Icon
                                                fontWeight={'bold'}
                                                icon="carbon:event-schedule"
                                            />
                                        </div>
                                        <div className="date-text">
                                            {lastUpdatedWorkoutDate.length >
                                            0 ? (
                                                <h5>
                                                    {moment(
                                                        lastUpdatedWorkoutDate,
                                                    ).format('D')}{' '}
                                                    {moment(
                                                        lastUpdatedWorkoutDate,
                                                    ).format('MMM')}
                                                </h5>
                                            ) : (
                                                <h5 className="no-date">-</h5>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <Button
                                    iconComponent={'ic:baseline-navigate-next'}
                                    classNames="next-button"
                                    onClick={() =>
                                        history.push({
                                            pathname: `workout/${clientId}`,
                                            state: {
                                                name: fullName,
                                                email: email,
                                                photoUrl: photoUrl,
                                                clientId: clientId,
                                                targetSteps: Number(stepsData),
                                            },
                                        })
                                    }
                                />
                            </div>
                        )}
                        {/* {showLastWorkout ? (
                            <div className="col-md-2 last-updated-workout-time">
                                <p className="last-updated-workout-time-text">
                                    {lastUpdatedFeedbackDate &&
                                    lastUpdatedFeedbackDate != ''
                                        ? 'Feedback till ' +
                                          new Date(
                                              lastUpdatedFeedbackDate,
                                          )?.toLocaleDateString('en-IN', {
                                              year: 'numeric',
                                              month: 'short',
                                              day: 'numeric',
                                          })
                                        : 'Feedback not updated yet'}
                                </p>
                                <p className="last-updated-workout-time-text">
                                    {lastCompletedWorkoutDate &&
                                    lastCompletedWorkoutDate != ''
                                        ? 'Completed till ' +
                                          new Date(
                                              lastCompletedWorkoutDate,
                                          )?.toLocaleDateString('en-IN', {
                                              year: 'numeric',
                                              month: 'short',
                                              day: 'numeric',
                                          })
                                        : 'No workouts performed'}
                                </p>
                                <p className="last-updated-workout-time-text">
                                    {lastUpdatedWorkoutDate &&
                                    lastUpdatedWorkoutDate != ''
                                        ? 'Updated till ' +
                                          new Date(
                                              lastUpdatedWorkoutDate,
                                          )?.toLocaleDateString('en-IN', {
                                              year: 'numeric',
                                              month: 'short',
                                              day: 'numeric',
                                          })
                                        : 'No workouts scheduled'}
                                </p>
                            </div>
                        ) : null} */}

                        {/* <div className="col-md-2 button-container mr-auto"> */}
                        {/* <EvolvButton
                                    classNames="no-word-wrap"
                                    icon={NotificationIcon}
                                    text="Notify"
                                    color="green"
                                    size="s"
                                    removeIconOn={'md'}
                                ></EvolvButton> */}
                        {/* {lastSession && (
                                        <EvolvButton
                                            classNames="col-md-4 no-word-wrap"
                                            icon={FeedbackIcon}
                                            text="Feedback"
                                            color="green"
                                            size="s"
                                            removeIconOn={'md'}
                                        ></EvolvButton>
                                    )} */}
                        {/* {showWorkoutButton && (
                                <EvolvButton
                                    classNames="no-word-wrap"
                                    // icon={WorkoutsIcon}
                                    iconComponent={'iconoir:gym'}
                                    removeIconOn={'xs'}
                                    text="Workouts"
                                    color="green"
                                    size="s"
                                    iconSize={23}
                                    onClick={() =>
                                        history.push({
                                            pathname: `workout/${clientId}`,
                                            state: {
                                                name: fullName,
                                                email: email,
                                                photoUrl: photoUrl,
                                                clientId: clientId,
                                                targetSteps: Number(stepsData),
                                            },
                                        })
                                    }
                                ></EvolvButton>
                            )} */}
                        {/* </div> */}

                        {/* <div className="col-md-2 performance">
                                        {showAccordian && (
                                            <Accordion.Toggle
                                                as={Button}
                                                eventKey="0"
                                                className="d-flex"
                                            >
                                                <span className="performance-text">
                                                    Performance
                                                </span>
                                                <Icon
                                                    icon={
                                                        'akar-icons:chevron-down'
                                                    }
                                                    color="white"
                                                    // className="down-carret"
                                                    height={22}
                                                />
                                            </Accordion.Toggle>
                                        )}
                                    </div> */}
                    </div>
                </Card.Header>
            </Card>
            {/* ),
                    child: (
                        <Completed
                            clientId={clientId}
                            showTitle={false}
                            client={{
                                name: fullName,
                                email: email,
                                photoUrl: photoUrl,
                            }}
                            breakpoints={[1407, 950]}
                        />
                    ),
                }}
            ></AccordionComponent> */}
        </div>
    )
}

ClientRow.propTypes = {
    fullName: PropTypes.string,
    inviteAccepted: PropTypes.bool,
    lastSession: PropTypes.object,
    nextSession: PropTypes.object,
    clientId: PropTypes.string,
    showAccordian: PropTypes.bool,
    showBackButton: PropTypes.bool,
    showWorkoutButton: PropTypes.bool,
    targetSteps: PropTypes.number,
}

export default ClientRow
