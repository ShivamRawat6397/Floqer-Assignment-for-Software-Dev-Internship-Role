// src/components/LineGraph.tsx
import React from 'react';
import { Line } from '@ant-design/charts';
import { AggregatedData } from '../utils/loadData';

interface LineGraphProps {
  data: AggregatedData[];
}

const LineGraph: React.FC<LineGraphProps> = ({ data }) => {
  // Logging the data for debugging
  console.log('LineGraph data:', data);

  // Filter out any invalid data
  const filteredData = data.filter(d => d && typeof d.year === 'number' && typeof d.totalJobs === 'number');

  // Configuration for the Line chart
  const config = {
    data: filteredData.map(d => ({ year: d.year.toString(), value: d.totalJobs })),
    xField: 'year',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
    },
  };

  return <Line {...config} />;
};

export default LineGraph;
