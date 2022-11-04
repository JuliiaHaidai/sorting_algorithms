import classNames from 'classnames';

import classes from './CustomGraph.module.scss';

const CustomGraph = ({ array, animation, isSorted, transformLength }) => {
  function getTransformLength(i) {
    if (animation.type === 'swap' && animation.data[0] === i) {
      return transformLength.firstElem;
    } else if (animation.type === 'swap' && animation.data[1] === i) {
      return transformLength.secondElem;
    } else {
      return '0';
    }
  }

  return (
    <div className={classes.bars}>
      {array.map((number, i) => (
        <div
          key={i}
          id={`bar-${i}`}
          className={
            animation.type === 'select' &&
            animation.data.includes(i) &&
            !isSorted
              ? classNames(classes.bar, classes.select)
              : animation.type === 'swap' &&
                animation.data.includes(i) &&
                !isSorted
              ? classNames(classes.bar, classes.swap)
              : classes.bar
          }
          style={{
            height: `${number + 40}px`,
            transform: `translate(${getTransformLength(i)}px)`,
          }}
        >
          {number}
        </div>
      ))}
    </div>
  );
};

export default CustomGraph;
