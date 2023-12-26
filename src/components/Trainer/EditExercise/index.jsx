import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "../../../store/axios-secure";
import "./index.scss";
import { getRange, getInputRange } from "../../../utilities/utilities";
import Loader from "../../Common/Loader";
import InternalServerErrorPage from "../../Common/ErrorPage/InternalServerErrorPage";
import Button from "../../Common/Button";
import { propTypes } from "react-bootstrap/esm/Image";
import { Icon } from "@iconify/react";
import TextArea from "../../Common/Form/TextArea";

const EditExercise = ({
  exercise,
  setExercise,
  deleteExercise,
  autoPrefill = true,
}) => {
  let invalidChars = ["-", "+", "e"];
  const [exerciseText, setExerciseText] = useState({
    name: exercise?.exerciseInfoRef?.name,
    gifUrl: exercise?.exerciseInfoRef?.gifUrl,
  });
  const [loading, setLoading] = useState(false);
  const [tableLoading, setTableLoading] = useState(false);
  const [error, setError] = useState(false);
  const [options, setOptions] = useState([]);
  const [fieldRange, setFieldRange] = useState({
    suggestedWeightRange: getInputRange(
      exercise?.exerciseSets?.map((set) => set.suggestedWeightRange)
    ),
    suggestedRepRange: getInputRange(
      exercise?.exerciseSets?.map((set) => set.suggestedRepRange)
    ),
    suggestedRIRRange: getInputRange(
      exercise?.exerciseSets?.map((set) => set.suggestedRIRRange)
    ),
  });
  // useEffect(() => {
  //     const newFieldRange = {
  //         weightRange: getInputRange(
  //             exercise?.exerciseSets?.map((set) => set.suggestedWeightRange),
  //         ),
  //         repsRange: getInputRange(
  //             exercise?.exerciseSets?.map((set) => set.suggestedRepRange),
  //         ),
  //         RIRRange: getInputRange(
  //             exercise?.exerciseSets?.map((set) => set.suggestedRIRRange),
  //         ),
  //     }
  //     setFieldRange(newFieldRange)
  // }, [])
  const selectOption = (option) => {
    setExerciseText({ name: option?.name, gifUrl: option?.gifUrl });
    exercise.exerciseInfoRef = option;
    if (autoPrefill) {
      prefillSet(option._id, exercise);
    }
    setOptions([]);
  };
  const prefillSet = async (exerciseId, exercise) => {
    const clientId = window.location.pathname.split("/")[2];
    try {
      setTableLoading(true);
      const response = await axios.get(
        `/workoutpnp/cycles/exerciseSet?clientId=${clientId}&exerciseId=${exerciseId}`
      );
      exercise.exerciseSets = response.data;
      setExercise(exercise);
      updateFieldRange();
      setTableLoading(false);
    } catch (error) {
      setError("Error 500");
    }
  };
  const updateFieldRange = () => {
    const newFieldRange = {
      suggestedWeightRange: getInputRange(
        exercise?.exerciseSets?.map((set) => set.suggestedWeightRange)
      ),
      suggestedRepRange: getInputRange(
        exercise?.exerciseSets?.map((set) => set.suggestedRepRange)
      ),
      suggestedRIRRange: getInputRange(
        exercise?.exerciseSets?.map((set) => set.suggestedRIRRange)
      ),
    };
    setFieldRange(newFieldRange);
  };
  const updateOptions = async (searchText) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `/workoutpnp/cycles/exercise?name=${searchText}`
      );
      setOptions(response?.data?.exercises);
      setLoading(false);
      setError(false);
    } catch (error) {
      setError("Error 500");
    }
  };

  const onChangeHandler = (evt) => {
    const searchText = evt.target.value;
    setExerciseText(searchText);
    updateOptions(searchText);
  };
  const fieldValueChange = (value, fieldName, range) => {
    let isDecimal = false;
    if (
      value[value.length - 1] == "." &&
      fieldName === "suggestedWeightRange"
    ) {
      isDecimal = true;
    }
    let newRange = fieldRange[fieldName];
    newRange[range] = isNaN(value)
      ? null
      : value === ""
      ? null
      : parseFloat(value);
    if (range == 0 && newRange[range] == null) {
      newRange[1] = null;
    }
    let newFieldRange = { ...fieldRange };
    let newExercise = JSON.parse(JSON.stringify(exercise));
    newExercise.exerciseSets.map((set) => {
      set[fieldName][range] =
        newRange[range] == null
          ? null
          : JSON.parse(JSON.stringify(newRange[range]));
      if (range == 0 && newRange[range] == null) {
        set[fieldName][1] = null;
      }
    });
    setExercise(newExercise);
    if (isDecimal && newRange[range] !== null) {
      newRange[range] += ".";
    }
    if (value[value?.length - 2] == "." && value[value?.length - 1] == "0") {
      newRange[range] += ".0";
    } else if (value.includes(".") && value[value?.length - 1] == "0") {
      newRange[range] += "0";
    }

    newFieldRange[fieldName] = newRange;
    setFieldRange(newFieldRange);
  };

  const onBlurFieldHandler = (range) => {
    let val = fieldRange["suggestedWeightRange"][range];
    const newFieldRange = { ...fieldRange };
    if (val?.[val?.length - 1] === ".") {
      val = val.split(".")[0];
    }
    newFieldRange["suggestedWeightRange"][range] = isNaN(parseFloat(val))
      ? null
      : parseFloat(val);
    setFieldRange(newFieldRange);
  };

  const onBlurValueHandler = (idx, range) => {
    const setD = [...exercise.exerciseSets];
    let val = setD[idx]["suggestedWeightRange"][range];
    if (val?.[val?.length - 1] === ".") {
      val = val.split(".")[0];
    }
    setD[idx]["suggestedWeightRange"][range] = isNaN(parseFloat(val))
      ? null
      : parseFloat(val);

    setExercise({ ...exercise, exerciseSets: setD });
  };
  const onValueChange = (idx, value, fieldname, range) => {
    const setD = [...exercise.exerciseSets];
    let isDecimal = false;
    if (
      value[value?.length - 1] === "." &&
      fieldname === "suggestedWeightRange"
    ) {
      isDecimal = true;
    }
    if (isNaN(value)) {
      if (value == "" || isNaN(value[0])) {
        setD[idx][fieldname][range] = null;
        setExercise({ ...exercise, exerciseSets: setD });
      }
      return;
    }
    if (value === "" || value === ".") {
      setD[idx][fieldname][range] = null;
      if (range == 0) {
        setD[idx][fieldname][1] = null;
      }
    } else {
      let newValue = parseFloat(value);
      if (isDecimal && setD[idx][fieldname][range] !== null) {
        newValue += ".";
      }
      if (value[value?.length - 2] == "." && value[value?.length - 1] == "0") {
        newValue += ".0";
      } else if (value.includes(".") && value[value.length - 1] == "0") {
        newValue += "0";
      }
      setD[idx][fieldname][range] = newValue;
      // parseFloat(value)
    }
    if (
      range == 0 &&
      setD[idx][fieldname][1] != null &&
      Number(setD[idx][fieldname][1]) <= Number(value)
    ) {
      setD[idx][fieldname][1] = (Number(value) + 1)?.toString();
    }
    setExercise({ ...exercise, exerciseSets: setD });
    let newFieldRange = {
      ...fieldRange,
    };
    newFieldRange[fieldname] = getInputRange(
      exercise?.exerciseSets?.map((set) => set[fieldname])
    );
    setFieldRange(newFieldRange);
  };

  const onCommentChange = (inputComment) => {
    const comment = inputComment.trim();
    if (comment.length) {
      setExercise({ ...exercise, exerciseComment: comment });
    } else {
      if (exercise.exerciseComment) {
        setExercise({ ...exercise, exerciseComment: undefined });
      }
    }
  };

  const resetSetNumber = (setD) => {
    return setD.map((set, idx) => {
      return { ...set, number: idx + 1 };
    });
  };

  const deleteRow = (idx) => {
    var setD = exercise?.exerciseSets;
    setD.splice(idx, 1);
    setD = resetSetNumber(setD);
    setExercise({ ...exercise, exerciseSets: setD });
  };

  const addRow = () => {
    // console.log({...exercise})
    // var setD = [
    //     ...exercise?.exerciseSets,
    //     {
    //         //setNumber: exercise?.exerciseSets?.length + 1,
    //         suggestedWeightRange: [],
    //         suggestedRepRange: [10,15],
    //         suggestedRIRRange: [1,3],
    //     },
    // ]
    exercise?.exerciseSets?.length != 0
      ? exercise?.exerciseSets.push({
          number: exercise?.exerciseSets?.length + 1,
          suggestedWeightRange: JSON.parse(
            JSON.stringify(
              exercise?.exerciseSets[exercise?.exerciseSets?.length - 1]
                ?.suggestedWeightRange
            )
          ),
          suggestedRepRange: JSON.parse(
            JSON.stringify(
              exercise?.exerciseSets[exercise?.exerciseSets?.length - 1]
                ?.suggestedRepRange
            )
          ),
          suggestedRIRRange: JSON.parse(
            JSON.stringify(
              exercise?.exerciseSets[exercise?.exerciseSets?.length - 1]
                ?.suggestedRIRRange
            )
          ),
        })
      : exercise?.exerciseSets.push({
          number: exercise?.exerciseSets?.length + 1,
          suggestedWeightRange: [],
          suggestedRepRange: [10, 15],
          suggestedRIRRange: [1, 3],
        });
    setExercise(exercise);
    //setExercise({ ...exercise, exerciseSets: setD })
  };

  return (
    <>
      <div className="table-edit-exercise-mobile">
        <input
          className="exercise-input"
          value={exerciseText?.name}
          placeholder="Exercise name"
          onChange={onChangeHandler}
        />
        {/* Unfixed Warning here {console.log(exerciseText?.name)} */}
        {loading ? (
          <Loader />
        ) : error ? (
          <InternalServerErrorPage />
        ) : (
          options?.map((o, idx) => (
            <div
              key={idx}
              className="exercise-option"
              onClick={() => selectOption(o)}
            >
              {o?.name}
            </div>
          ))
        )}
      </div>

      <div className="table-row-container table-editable-body">
        <div className="table-exercise">
          <div className="selected-option">
            {exerciseText?.name == null ? null : (
              <video
                className="exercise-video"
                src={exerciseText?.gifUrl}
                autoPlay
                loop
              />
            )}
            <input
              className="exercise-input"
              value={exerciseText?.name}
              placeholder="Exercise name"
              onChange={onChangeHandler}
            />
          </div>
          {loading ? (
            <Loader />
          ) : error ? (
            <InternalServerErrorPage />
          ) : (
            options?.map((o, idx) => (
              <div
                key={idx}
                className="exercise-option"
                onClick={() => selectOption(o)}
              >
                <video
                  className="exercise-video"
                  src={o?.gifUrl}
                  autoPlay
                  loop
                />
                {o?.name}
              </div>
            ))
          )}
        </div>
        {tableLoading ? (
          <div
            className="table-details"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Loader />
          </div>
        ) : (
          <div className="table-details">
            <div className="table-detail-row table-head">
              <div className="table-sets">{exercise?.exerciseSets?.length}</div>
              <div
                className={`table-weights input-container ${
                  fieldRange?.suggestedWeightRange[0]
                    ?.toString()
                    ?.includes(".") && "table-weights-dec"
                }`}
              >
                <input
                  className={`table-weights table-weights-input header-input ${
                    fieldRange?.suggestedWeightRange[0]
                      ?.toString()
                      ?.includes(".") && "table-weights-input-dec"
                  }`}
                  value={
                    fieldRange?.suggestedWeightRange[0] == null
                      ? ""
                      : fieldRange?.suggestedWeightRange[0]
                  }
                  onChange={(e) => {
                    fieldValueChange(e.target.value, "suggestedWeightRange", 0);
                  }}
                  onBlur={() => {
                    onBlurFieldHandler(0);
                  }}
                  type="text"
                  maxLength={
                    fieldRange?.suggestedWeightRange[0]
                      ?.toString()
                      ?.includes(".")
                      ? fieldRange.suggestedWeightRange[0]
                          .toString()
                          .split(".")[0].length + 3
                      : 3
                    // 5
                  }
                  onKeyDown={(e) => {
                    if (e.key != "." && invalidChars.includes(e.key)) {
                      e.preventDefault();
                    }
                  }}
                />
                {fieldRange?.suggestedWeightRange[0] == null ? (
                  <></>
                ) : (
                  <input
                    className={`table-weights table-weights-input header-input ${
                      fieldRange?.suggestedWeightRange[1]
                        ?.toString()
                        ?.includes(".") && "table-weights-input-dec"
                    }`}
                    value={
                      fieldRange?.suggestedWeightRange[1] == null
                        ? ""
                        : fieldRange?.suggestedWeightRange[1]
                    }
                    onChange={(e) => {
                      fieldValueChange(
                        e.target.value,
                        "suggestedWeightRange",
                        1
                      );
                    }}
                    onBlur={() => {
                      onBlurFieldHandler(1);
                    }}
                    type="text"
                    maxLength={
                      fieldRange?.suggestedWeightRange[1]
                        ?.toString()
                        ?.includes(".")
                        ? fieldRange.suggestedWeightRange[1]
                            .toString()
                            .split(".")[0].length + 3
                        : 3
                      // 5
                    }
                    onKeyDown={(e) => {
                      if (e.key != "." && invalidChars.includes(e.key)) {
                        e.preventDefault();
                      }
                    }}
                  />
                )}
              </div>
              <div className="table-reps input-container">
                <input
                  className="table-weights header-input table-weights-input"
                  value={
                    fieldRange?.suggestedRepRange[0] == null
                      ? ""
                      : fieldRange?.suggestedRepRange[0]
                  }
                  onChange={(e) => {
                    fieldValueChange(e.target.value, "suggestedRepRange", 0);
                  }}
                  onKeyDown={(e) => {
                    if (invalidChars.includes(e.key)) {
                      e.preventDefault();
                    }
                  }}
                  onInput={(e) => {
                    e.target.value = e.target.value.slice(0, 2);
                  }}
                />
                {fieldRange?.suggestedRepRange[0] == null ? (
                  <></>
                ) : (
                  <input
                    className="table-weights header-input table-weights-input"
                    value={
                      fieldRange?.suggestedRepRange[1] == null
                        ? ""
                        : fieldRange?.suggestedRepRange[1]
                    }
                    onChange={(e) => {
                      fieldValueChange(e.target.value, "suggestedRepRange", 1);
                    }}
                    onKeyDown={(e) => {
                      if (invalidChars.includes(e.key)) {
                        e.preventDefault();
                      }
                    }}
                    onInput={(e) => {
                      e.target.value = e.target.value.slice(0, 2);
                    }}
                  />
                )}
              </div>
              <div className="table-reps input-container">
                <input
                  className="table-weights header-input table-weights-input"
                  value={
                    fieldRange?.suggestedRIRRange[0] == null
                      ? ""
                      : fieldRange?.suggestedRIRRange[0]
                  }
                  onChange={(e) => {
                    fieldValueChange(e.target.value, "suggestedRIRRange", 0);
                  }}
                  onKeyDown={(e) => {
                    if (invalidChars.includes(e.key)) {
                      e.preventDefault();
                    }
                  }}
                  onInput={(e) => {
                    e.target.value = e.target.value.slice(0, 2);
                  }}
                />
                {fieldRange?.suggestedRIRRange[0] == null ? (
                  <></>
                ) : (
                  <input
                    className="table-weights header-input table-weights-input"
                    value={
                      fieldRange?.suggestedRIRRange[1] == null
                        ? ""
                        : fieldRange?.suggestedRIRRange[1]
                    }
                    onChange={(e) => {
                      fieldValueChange(e.target.value, "suggestedRIRRange", 1);
                    }}
                    onKeyDown={(e) => {
                      if (invalidChars.includes(e.key)) {
                        e.preventDefault();
                      }
                    }}
                    onInput={(e) => {
                      e.target.value = e.target.value.slice(0, 2);
                    }}
                  />
                )}
              </div>
              <div className="table-action">
                <Icon
                  icon={"ep:close-bold"}
                  onClick={deleteExercise}
                  className="close-rest-img ms-1"
                  height={13}
                />
              </div>
            </div>
            {exercise?.exerciseSets?.map((set, idx) => (
              <div key={idx} className="table-detail-row">
                <div className="table-sets">{idx + 1}</div>
                <div
                  className={`table-weights input-container ${
                    fieldRange?.suggestedWeightRange[0]
                      ?.toString()
                      ?.includes(".") && "table-weights-dec"
                  }`}
                >
                  <input
                    min="0"
                    className={`table-weights table-weights-input ${
                      set?.suggestedWeightRange[0]?.toString()?.includes(".") &&
                      "table-weights-input-dec"
                    }`}
                    value={
                      set?.suggestedWeightRange[0] == null
                        ? ""
                        : set?.suggestedWeightRange[0]
                    }
                    onChange={(evt) => {
                      onValueChange(
                        idx,
                        evt?.target?.value,
                        "suggestedWeightRange",
                        0
                      );
                    }}
                    onBlur={() => {
                      onBlurValueHandler(idx, 0);
                    }}
                    type="text"
                    maxLength={
                      set?.suggestedWeightRange[0]?.toString()?.includes(".")
                        ? set.suggestedWeightRange[0].toString().split(".")[0]
                            .length + 3
                        : 3
                      // 5
                    }
                    onKeyDown={(e) => {
                      if (e.key != "." && invalidChars.includes(e.key)) {
                        e.preventDefault();
                      }
                    }}
                  />
                  {set.suggestedWeightRange[0] != null ? (
                    <input
                      type="text"
                      maxLength={
                        set?.suggestedWeightRange[1]?.toString()?.includes(".")
                          ? set.suggestedWeightRange[1].toString().split(".")[0]
                              .length + 3
                          : 3
                      }
                      min={Number(set.suggestedWeightRange[0]) + 1}
                      className={`table-weights table-weights-input ${
                        fieldRange?.suggestedWeightRange[1]
                          ?.toString()
                          ?.includes(".") && "table-weights-input-dec"
                      }`}
                      value={
                        set?.suggestedWeightRange[1] == null
                          ? ""
                          : set?.suggestedWeightRange[1]
                      }
                      onChange={(evt) =>
                        onValueChange(
                          idx,
                          evt?.target?.value,
                          "suggestedWeightRange",
                          1
                        )
                      }
                      onBlur={() => {
                        onBlurValueHandler(idx, 1);
                      }}
                      onKeyDown={(e) => {
                        if (e.key != "." && invalidChars.includes(e.key)) {
                          e.preventDefault();
                        }
                      }}
                    />
                  ) : null}
                </div>
                <div className="input-container">
                  <input
                    //required
                    type="number"
                    min={0}
                    className="table-reps table-reps-input"
                    value={
                      set?.suggestedRepRange[0] == null
                        ? ""
                        : set?.suggestedRepRange[0]
                    }
                    onChange={(evt) =>
                      onValueChange(
                        idx,
                        evt?.target?.value,
                        "suggestedRepRange",
                        0
                      )
                    }
                    onKeyDown={(e) => {
                      if (invalidChars.includes(e.key)) {
                        e.preventDefault();
                      }
                    }}
                    onInput={(e) => {
                      e.target.value = e.target.value.slice(0, 2);
                    }}
                  />
                  {set.suggestedRepRange[0] != null ? (
                    <input
                      //required
                      type="number"
                      min={0}
                      className="table-reps table-reps-input"
                      value={
                        set?.suggestedRepRange[1] == null
                          ? ""
                          : set?.suggestedRepRange[1]
                      }
                      onChange={(evt) =>
                        onValueChange(
                          idx,
                          evt?.target?.value,
                          "suggestedRepRange",
                          1
                        )
                      }
                      onKeyDown={(e) => {
                        if (invalidChars.includes(e.key)) {
                          e.preventDefault();
                        }
                      }}
                      onInput={(e) => {
                        e.target.value = e.target.value.slice(0, 2);
                      }}
                    />
                  ) : null}
                </div>

                <div className="input-container">
                  <input
                    type="number"
                    min={0}
                    className="table-reps table-reps-input"
                    value={
                      set?.suggestedRIRRange[0] == null
                        ? ""
                        : set?.suggestedRIRRange[0]
                    }
                    onChange={(evt) =>
                      onValueChange(
                        idx,
                        evt?.target?.value,
                        "suggestedRIRRange",
                        0
                      )
                    }
                    onKeyDown={(e) => {
                      if (invalidChars.includes(e.key)) {
                        e.preventDefault();
                      }
                    }}
                    onInput={(e) => {
                      e.target.value = e.target.value.slice(0, 2);
                    }}
                  />
                  {set.suggestedRIRRange[0] != null ? (
                    <input
                      //required
                      type="number"
                      min={0}
                      className="table-reps table-reps-input"
                      value={
                        set?.suggestedRIRRange[1] == null
                          ? ""
                          : set?.suggestedRIRRange[1]
                      }
                      onChange={(evt) =>
                        onValueChange(
                          idx,
                          evt?.target?.value,
                          "suggestedRIRRange",
                          1
                        )
                      }
                      onKeyDown={(e) => {
                        if (invalidChars.includes(e.key)) {
                          e.preventDefault();
                        }
                      }}
                      onInput={(e) => {
                        e.target.value = e.target.value.slice(0, 2);
                      }}
                    />
                  ) : null}
                </div>
                <div className="table-action">
                  <Icon
                    icon={"ep:close-bold"}
                    className="close-rest-img ms-1"
                    onClick={() => deleteRow(idx)}
                    height={13}
                  />
                </div>
              </div>
            ))}
            <Button
              classNames="add-session-btn"
              onClick={() => addRow()}
              text={"+ Add Set"}
              size={"s"}
            />
          </div>
        )}
        <div className="comment-container">
          <div>
            <Icon icon="fa-regular:sticky-note" height={25} color="white" />
          </div>
          <TextArea
            divClassNames={"comment-textarea-container"}
            inputClassNames={"comment-textarea"}
            onChange={(e) => onCommentChange(e.target.value)}
            rows="1"
            cols="500"
            placeholder={"Write your comment here"}
            initialValue={exercise?.exerciseComment || ""}
            maxLength={200}
          />
        </div>
      </div>
    </>
  );
};

EditExercise.propTypes = {
  exercise: PropTypes.object,
  setExercise: PropTypes.func,
  deleteExercise: PropTypes.func,
};

export default EditExercise;
