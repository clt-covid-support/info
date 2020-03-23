import React from 'react';

import { Box, Chart, Text } from 'grommet';

const LabelledChart = ({ color, label, value }) => (
  <Box flex={false} basis="xsmall" align="center" gap="small">
    <Chart
      bounds={[
        [0, 2],
        [0, 339029]
      ]}
      type="bar"
      values={[{ value: [1, value] }]}
      color={color}
      round
      size={{ height: 'medium', width: 'xsmall' }}
    />
    <Box align="center">
      <Text>{label}</Text>
      <Text weight="bold">{value}</Text>
    </Box>
  </Box>
);

const DataChart = ({data}) => (
      <Box pad="large" direction="row" gap="medium">
        <LabelledChart
          scope="World"
          label="Cases"
          value={339029}
          color="status-warning"
        />
        <LabelledChart
          scope="World"
          label="Deaths"
          value={14698}
          color="status-critical"
        />
        <LabelledChart label="Recovered" value={99014} />
      </Box>

  );


export default DataChart;
