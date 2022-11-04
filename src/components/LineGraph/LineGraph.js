import { ResponsiveLine } from '@nivo/line';

const LineGraph = ({ array }) => {
  const data = [{ id: 'line1', data: [] }];
  for (let i = 0; i < array.length; i++) {
    const obj = { x: i, y: array[i] };
    data[0].data.push(obj);
  }

  return (
    <ResponsiveLine
      pointSize={12}
      data={data}
      margin={{ top: 15, right: 20, bottom: 40, left: 40 }}
      xScale={{ type: 'point' }}
      yScale={{ type: 'linear' }}
      colors="rgb(2, 75, 26)"
      pointColor={{
        from: 'color',
        modifiers: [
          ['darker', 0.6],
          ['opacity', 0.5],
        ],
      }}
      pointLabelYOffset={-12}
    />
  );
};

export default LineGraph;
