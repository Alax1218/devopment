import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import SessionTable from '../../Workout/Session/SessionTable'
import './index.scss'
import { estimatedWorkoutTime } from '../../../../utilities/utilities'
import SessionThemePicker from '../../Workout/Session/SessionThemePicker'
import SessionThemeCard from '../../Workout/Session/SessionThemePicker/SessionThemeCard'
import { Icon } from '@iconify/react'

const DayDetails = ({
    routine,
    setRoutine,
    exerciseError,
    exerciseErrorMessage,
    sessionThemes,
    global,
    isThisClient,
}) => {
    const [workoutTime, setWorkoutTime] = useState(0)
    const [selectedSessionTheme, setSelectedSessionTheme] = useState(
        routine?.sessionThemeRef,
    )
    useEffect(() => {
        setWorkoutTime(estimatedWorkoutTime(routine?.exercises))
        setSelectedSessionTheme(routine?.sessionThemeRef)
    }, [routine])
    useEffect(() => {
        const updatedRoutine = { ...routine }
        updatedRoutine['sessionThemeRef'] = selectedSessionTheme
        setRoutine(updatedRoutine)
    }, [selectedSessionTheme])
    const changeRoutineName = (value) => {
        const updatedRoutine = { ...routine }
        updatedRoutine.name = value
        setRoutine(updatedRoutine)
    }

    const setExercises = (exercises) => {
        const updatedRoutine = { ...routine }
        updatedRoutine.exercises = exercises
        setRoutine(updatedRoutine)
    }
    return routine?.restDay ? (
        <div className="cycle-routine-container rest-day">
            <span>Rest Day</span>
        </div>
    ) : (
        <>
            {global ? (
                <SessionThemeCard
                    sessionTheme={
                        sessionThemes?.filter(
                            (sessionTheme) =>
                                sessionTheme?._id == selectedSessionTheme,
                        )[0]
                    }
                />
            ) : (
                <SessionThemePicker
                    slidesToShow={8}
                    selectedCard={selectedSessionTheme}
                    setSelectedCard={setSelectedSessionTheme}
                    sessionThemes={sessionThemes}
                    breakpoints={[1024, 900, 800, 600, 520, 380, 100]}
                />
            )}
            <div className="cycle-routine-container">
                <div className="routine-summary">
                    {global ? (
                        <div className="routine-name">{routine?.name}</div>
                    ) : (
                        <input
                            className="routine-name"
                            type="text"
                            value={routine?.name}
                            onChange={(evt) =>
                                changeRoutineName(evt?.target?.value)
                            }
                        />
                    )}
                    <div className="footer-container">
                        <div className="summary-row">
                            {/* <img
                                src="/images/weightlifting.svg"
                                alt=""
                                height={18}
                            /> */}
                            <Icon icon={'mdi:weight-lifter'} height={18} />
                            <span>
                                {routine?.exercises?.length} exercise(s)
                            </span>
                        </div>
                        <div className="summary-row">
                            <Icon icon={'mdi:arm-flex-outline'} height={18} />
                            {/* <img
                                src="/images/male-flexing.svg"
                                alt=""
                                height={18}
                            /> */}
                            <span>
                                {routine?.exercises?.reduce(
                                    (sum, curr) =>
                                        sum + curr?.exerciseSets?.length,
                                    0,
                                )}
                                {' set(s)'}
                            </span>
                        </div>
                        <div className="summary-row">
                            <Icon icon={'fa6-solid:clock'} height={18} />
                            {/* <img src="/images/clock.svg" alt="" height={18} /> */}
                            <span>{workoutTime} min</span>
                        </div>
                    </div>
                </div>
                <SessionTable
                    key={routine?._id}
                    exercises={routine?.exercises}
                    setExercises={setExercises}
                    isEditing={!global}
                    completed={false}
                    isError={exerciseError}
                    errorMessage={exerciseErrorMessage}
                    modal={true}
                    autoPrefill={isThisClient}
                />
            </div>
        </>
    )
}

DayDetails.propTypes = {
    routine: PropTypes.object,
    setRoutine: PropTypes.func,
}

export default DayDetails
