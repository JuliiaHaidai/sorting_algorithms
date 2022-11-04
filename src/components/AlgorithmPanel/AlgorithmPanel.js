import classes from './AlgorithmPanel.module.scss';

const algorithms = [
  { title: 'Bubble Sort', name: 'bubble' },
  { title: 'Insertion Sort', name: 'insertion' },
  { title: 'Quick Sort', name: 'quick' },
];

const AlgorithmPanel = ({ setAlgorithmName, algorithmName }) => {

  return (
    <div className={classes.algorithmPanel}>
      {algorithms.map((algo, i) => (
        <span
          className={algo.name === algorithmName ? classes.chosenAlgo : ''}
          key={i}
          onClick={() => setAlgorithmName(algo.name)}
        >
          {algo.title}
        </span>
      ))}
    </div>
  );
};

export default AlgorithmPanel;
