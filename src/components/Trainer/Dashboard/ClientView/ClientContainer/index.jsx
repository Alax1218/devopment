import React from 'react'
import PropTypes from 'prop-types'
import ClientRow from '../ClientRow'
import { Icon } from '@iconify/react'
import './index.scss'

const ClientContainer = ({
    clientList,
    showBackButton,
    showAccordian,
    showContainer,
    showStepsCount,
    showLastWorkout,
    showWorkoutButton,
}) => {
    return (
        <div
            className={`client-container ${!showContainer && 'display-hidden'}`}
        >
            {showAccordian && (
                <div className="headings">
                    <span className="empty" />
                    <h3 className="steps">
                        <Icon fontSize={25} icon="bx:walk" /> Steps
                    </h3>
                    <h3 className="workout">
                        <Icon fontSize={25} icon="uil:dumbbell" /> Workout
                    </h3>
                    {/* <h3 className="nutrition">
                        <Icon fontSize={30} icon="fluent:food-16-filled" />{' '}
                        Nutrition
                    </h3> */}
                </div>
            )}
            {clientList?.map((item, id) => {
                return (
                    <div key={id} style={{ marginBottom: '5px' }}>
                        {showAccordian ? (
                            <div>{item[0] == 'NoProgram' ? null : item[0]}</div>
                        ) : null}
                        {item[1]?.map((cl, idx) => (
                            <ClientRow
                                key={idx}
                                fullName={cl?.name}
                                email={cl?.email}
                                photoUrl={cl?.photoUrl}
                                //inviteAccepted={cl?.hasAccepedTrainer}
                                //lastSession={cl?.lastSession}
                                //nextSession={cl?.nextSession}
                                clientId={cl?.clientId ? cl?.clientId : cl?._id}
                                targetSteps={cl?.targetSteps ?? 0}
                                stepsWalked7Days={cl?.stepsWalked7Days}
                                lastUpdatedWorkoutDate={
                                    cl?.lastUpdatedWorkoutDate
                                }
                                lastUpdatedFeedbackDate={
                                    cl?.lastUpdatedFeedbackDate
                                }
                                lastCompletedWorkoutDate={
                                    cl?.lastCompletedWorkoutdate
                                }
                                lastNotUpdatedFeedbackDate={
                                    cl?.lastNotUpdatedFeedbackDate
                                }
                                showLastWorkout={showLastWorkout}
                                showBackButton={showBackButton}
                                showAccordian={showAccordian}
                                showWorkoutButton={showWorkoutButton}
                                showStepsCount={showStepsCount}
                            />
                        ))}
                    </div>
                )
            })}
        </div>
    )
}

ClientContainer.propTypes = {
    clientList: PropTypes.array,
    showBackButton: PropTypes.bool,
    showAccordian: PropTypes.bool,
    showContainer: PropTypes.bool,
    showWorkoutButton: PropTypes.bool,
}

export default ClientContainer
