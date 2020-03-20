import React from 'react';
import { WorldMap } from 'grommet'

const Map = () => {
  return (
    <div>
      <WorldMap
        color="status-critical"
        continents={[
          {
            name: 'North America',
            color: 'status-warning',
            onClick: name => {}
          }
        ]}
        onSelectPlace={(lat, lon) => {}}
        places={[
          {
            name: 'Charlotte',
            location: [-35.2271, 80.8431],
            color: 'accent-2',
            onClick: name => {}
          }
        ]}
        selectColor="accent-2"
      />
    </div>
  );
};

export default Map;
