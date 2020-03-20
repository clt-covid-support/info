import React, {useState} from 'react'
import { deepMerge } from "grommet/utils";
import { Box, Calendar as GrommetCalendar, Grommet, grommet } from "grommet";

const customHeading = deepMerge(grommet, {
  calendar: {
    heading: {
      level: "3"
    }
  }
});

const Calendar = () => {
  const [date, setDate] = useState();

  const onSelect = nextDate => {
    setDate(nextDate !== date ? nextDate : undefined);
  };

  return (
    <Grommet theme={customHeading}>
      <Box align="center" pad="large">
        <GrommetCalendar
          date={date}
          onSelect={onSelect}
          bounds={["2018-09-08", "2020-12-13"]}
        />
      </Box>
    </Grommet>
  );
};
export default Calendar;