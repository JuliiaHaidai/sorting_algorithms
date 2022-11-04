import { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  convertInputToArrayString,
  convertArrayStringToArray,
} from '../../helperFunctions/inputValidation';
import getRandomArray from '../../helperFunctions/getRandomArray';
import { stop } from '../../helperFunctions/stop';

import classes from './SetArrayButton.module.scss';

const SetArrayButton = ({
  arrayInput,
  setArrayInput,
  setNumbersArray,
  setIsSorted,
  setAnimation,
}) => {
  const dispatch = useDispatch();

  const [error, setError] = useState(null);

  const arrayDataChangeHandler = (event) => {
    const arrStr = convertInputToArrayString(event.target.value);
    setArrayInput(arrStr);
  };

  return (
    <div className={classes.setButtons}>
      <button
        className={classes.generateBtn}
        onClick={() => {
          stop();
          setIsSorted(true);
          setAnimation({ animation: null });
          dispatch(setNumbersArray(getRandomArray()));
        }}
      >
        Generate Random Array
      </button>
      <div>
        <label>
          New Array:
          <input onChange={arrayDataChangeHandler} value={arrayInput} />
        </label>
        <button
          className={classes.setArray}
          onClick={() => {
            stop();
            setIsSorted(true);
            setAnimation({ animation: null });
            const numArr = convertArrayStringToArray(arrayInput);
            numArr.some((item) => item > 200)
              ? setError(`The numbers can't exceed 200.`)
              : numArr.length === 0
              ? setError(`The field can't be empty`)
              : dispatch(setNumbersArray(numArr)) && setError(null);
          }}
        >
          Set
        </button>
        {error ? <div className={classes.error}>{error}</div> : null}
      </div>
    </div>
  );
};

export default SetArrayButton;
