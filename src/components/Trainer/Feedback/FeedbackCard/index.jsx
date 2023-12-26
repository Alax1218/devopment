import React, { useState, useEffect } from 'react'
import { Image } from 'react-bootstrap'
import PropTypes from 'prop-types'
import './index.scss'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import VideoPlayer from 'react-player'
import { ReactMediaRecorder } from 'react-media-recorder'
import AudioRecorder from '../../../Common/AudioRecorder'

const attributeHeading = ['Sets', 'Load', 'Reps', 'RIR']

const FeedbackCard = ({
    exercise,
    setExercise,
    modifier = (data) => {
        return data
    },
    setDisableSave,
}) => {
    const [form, setForm] = useState(exercise?.formRating ?? 0)
    const [comment, setComment] = useState(exercise?.feedbackComment)
    let [audioUrl, isRecording, startRecording, stopRecording, audioFile] =
        AudioRecorder()
    const getDashOrValue = (value) => (!value || value === -1 ? '-' : value)
    useEffect(() => {
        setDisableSave(isRecording)
    }, [isRecording])
    if (audioFile) modifier({ audioFile, audioUrl })
    return (
        <div className="feedback-card-container">
            <div className="content">
                <div className="routine pb-4">
                    {exercise?.exerciseInfoRef?.name}
                </div>
                <div>
                    <div className="heading">
                        <div className="set">Sets</div>
                        <div className="weight">Weight</div>
                        <div className="rep">Reps</div>
                        <div className="rir">RIR</div>
                    </div>
                    <div className="body">
                        {exercise?.exerciseSets?.map((s, idx) => (
                            <div className="set-row" key={idx}>
                                <div className="set m-1">
                                    {getDashOrValue(idx + 1)}
                                </div>
                                <div className="weight">
                                    <div className="left">
                                        {getDashOrValue(
                                            s?.suggestedWeightRange?.join('-'),
                                        )}
                                    </div>
                                    <div className="right">
                                        {getDashOrValue(s?.performedWeight)}
                                    </div>
                                </div>
                                <div className="rep">
                                    <div className="left">
                                        {getDashOrValue(
                                            s?.suggestedRepRange?.join('-'),
                                        )}
                                    </div>
                                    <div className="right">
                                        {getDashOrValue(s?.performedReps)}
                                    </div>
                                </div>
                                <div className="rep">
                                    <div className="left">
                                        {getDashOrValue(
                                            s?.suggestedRIRRange?.join('-'),
                                        )}
                                    </div>
                                    <div className="right">
                                        {getDashOrValue(s?.performedRIR)}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {exercise?.videoUrl ? (
                    <>
                        {' '}
                        <div className="d-flex video-container">
                            <VideoPlayer
                                url={exercise?.videoUrl}
                                controls
                                height={'200px'}
                            />
                        </div>
                        <div className="row form-row pt-2 px-2">
                            <div className="feedback-heading">
                                FORM
                                {form ? (
                                    <img
                                        className="col-md-2"
                                        src="/images/tick.svg"
                                        height="20px"
                                    />
                                ) : null}
                            </div>
                            <div className="form-row">
                                <Slider
                                    //TODO : Change styling to match theme
                                    max={10}
                                    min={1}
                                    defaultValue={form}
                                    onChange={(value) => {
                                        setForm(value)
                                        setExercise({
                                            ...exercise,
                                            formRating: value,
                                        })
                                    }}
                                    style={{
                                        width: '80%',
                                    }}
                                />
                                <div className="col-md-2 attribute-heading">
                                    {form}/10
                                </div>
                            </div>
                        </div>
                        <div className="row pt-4 px-2">
                            <div className="feedback-heading m-0 pb-2 form-row">
                                RECORD
                                {exercise?.feedbackVoiceNoteUrl ? (
                                    <img
                                        className="col-md-2"
                                        src="/images/tick.svg"
                                        height="20px"
                                    />
                                ) : null}
                            </div>
                            <div className="form-row">
                                {isRecording == false ? (
                                    <img
                                        src="/images/record.svg"
                                        height="25px"
                                        onClick={startRecording}
                                        style={{ marginLeft: '10px' }}
                                    />
                                ) : (
                                    <img
                                        // className="col-md-2"
                                        src="/images/stop.svg"
                                        style={{ marginLeft: '10px' }}
                                        height="25px"
                                        onClick={() => {
                                            stopRecording()
                                            setExercise({
                                                ...exercise,
                                                feedbackVoiceNoteUrl: audioFile,
                                            })
                                        }}
                                    />
                                )}
                                <audio
                                    className="audio-player"
                                    src={
                                        // audioUrl == ''
                                        exercise?.feedbackVoiceNoteUrl
                                        // : audioUrl
                                    }
                                    controls
                                />
                            </div>
                        </div>
                        <div className="row px-2 pt-4">
                            <div className="feedback-heading  form-row">
                                COMMENTS
                                {comment ? (
                                    <img
                                        className="col-md-2"
                                        src="/images/tick.svg"
                                        height="20px"
                                    />
                                ) : null}
                            </div>
                        </div>
                        <textarea
                            rows={3}
                            value={comment}
                            className="comment-box"
                            onChange={(event) => {
                                setComment(event?.target?.value)
                                setExercise({
                                    ...exercise,
                                    feedbackComment: event?.target?.value,
                                })
                            }}
                        />
                    </>
                ) : null}
            </div>
        </div>
    )
}

FeedbackCard.propTypes = {}

export default FeedbackCard
