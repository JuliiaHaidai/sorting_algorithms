import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CustomGraph from './components/CustomGraph/CustomGraph';
import LineGraph from './components/LineGraph/LineGraph';
import AlgorithmPanel from './components/AlgorithmPanel/AlgorithmPanel';
import GraphView from './components/GraphView/GraphView';
import SetArrayButton from './components/SetArrayButton/SetArrayButton';

import sleep from './helperFunctions/sleep';
import getRandomArray from './helperFunctions/getRandomArray';
import { stop } from './helperFunctions/stop';

import getInsertionSortAnimations from './algorithms/insertionSort';
import getBubbleSortAnimations from './algorithms/bubbleSort';
import getQuickSortAnimations from './algorithms/quickSort';

import { setNumbersArray } from './slices/numbersArraySlice';
import classes from './App.module.scss';

function App() {
  const dispatch = useDispatch();

  const numbersArray = useSelector((state) => state.numbersArray.numbersArray);

  const [arrayInput, setArrayInput] = useState('10,77,44,55,3');
  const [algorithmName, setAlgorithmName] = useState('bubble');
  const [delay, setDelay] = useState('1');
  const [typeGraph, setTypeGraph] = useState(true);
  const [animation, setAnimation] = useState({ animation: null });
  const [isSorted, setIsSorted] = useState(true);
  const [transformLength, setTransformLength] = useState({
    firstElem: null,
    secondElem: null,
  });

  useEffect(() => {
    stop();
    setAnimation({ animation: null });
    // dispatch(setNumbersArray(getRandomArray()));
    setIsSorted(true);
  }, [algorithmName, delay]);

  useEffect(() => {
    dispatch(setNumbersArray(getRandomArray()));
  }, [algorithmName, dispatch]);

  async function parseAnimations(animations) {
    for (const animation of animations) {
      const { type, data, arr } = animation;
      const [i, j] = data;
      if (typeGraph) {
        const childA = document.getElementById(`bar-${i}`);
        const childB = document.getElementById(`bar-${j}`);
        setTransformLength({
          firstElem:
            childB.getBoundingClientRect().right -
            childA.getBoundingClientRect().right,
          secondElem:
            childA.getBoundingClientRect().right -
            childB.getBoundingClientRect().right,
        });
      }
      setAnimation(animation);
      await sleep(+delay * 1000);
      if (type === 'swap' && arr) {
        dispatch(setNumbersArray(arr));
      }
    }
  }

  async function sort(alg) {
    setIsSorted(false);
    let animations = [];
    if (alg === 'insertion') {
      animations = getInsertionSortAnimations(numbersArray);
    } else if (alg === 'bubble') {
      animations = getBubbleSortAnimations(numbersArray);
    } else if (alg === 'quick') {
      animations = getQuickSortAnimations(numbersArray);
    }
    await parseAnimations(animations);
    setAnimation({ animation: null });
    setIsSorted(true);
  }

  return (
    <div className={classes.app}>
      <AlgorithmPanel
        setAlgorithmName={setAlgorithmName}
        algorithmName={algorithmName}
      />
      <div className={classes.changeView}>
        <label>
          Time between changes:
          <select
            value={delay}
            onChange={(event) => setDelay(event.target.value)}
          >
            <option>0</option>
            <option>0.25</option>
            <option>0.5</option>
            <option>1</option>
            <option>1.5</option>
            <option>2</option>
          </select>
          sec
        </label>
        <GraphView
          setTypeGraph={setTypeGraph}
          typeGraph={typeGraph}
          isSorted={isSorted}
        />
      </div>
      <div className={classes.mainContainer}>
        <span>{algorithmName + ' Sort'}</span>
        {typeGraph ? (
          <CustomGraph
            array={numbersArray}
            animation={animation}
            isSorted={isSorted}
            transformLength={transformLength}
          />
        ) : (
          <LineGraph array={numbersArray} />
        )}
      </div>
      <div className={classes.controlButtons}>
        <SetArrayButton
          setArrayInput={setArrayInput}
          arrayInput={arrayInput}
          setNumbersArray={setNumbersArray}
          setIsSorted={setIsSorted}
          setAnimation={setAnimation}
        />
        <button className={classes.sortButton}
          disabled={!isSorted ? true : false}
          onClick={() => {
            sort(algorithmName);
          }}
        >
          Sort
        </button>
      </div>
    </div>
  );
}

export default App;
