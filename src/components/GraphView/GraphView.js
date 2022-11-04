import classes from './GraphView.module.scss';

import customGraph from '../../img/graph-line.png';
import lineGraph from '../../img/line-graph.png';

const GraphView = ({ setTypeGraph, typeGraph, isSorted }) => {

  return (
    <div className={classes.graphImplementation}>
      <div>Type of graph:</div>
      <input
        className={typeGraph ? classes.active : ''}
        onClick={() => setTypeGraph(true)}
        type="image"
        src={customGraph}
        alt="custom graph"
        disabled={!isSorted && !typeGraph ? true : false}
      />
      <input
        className={!typeGraph ? classes.active : ''}
        onClick={() => setTypeGraph(false)}
        type="image"
        src={lineGraph}
        alt="line graph"
        disabled={!isSorted && typeGraph ? true : false}
      />
    </div>
  );
};

export default GraphView;
