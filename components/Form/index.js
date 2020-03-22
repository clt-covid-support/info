import React from 'react';

import {
  Box,
  Button,
  Form as GrommetForm,
  FormField,
  RadioButtonGroup,
} from 'grommet';

const Form = () => {
  return (
    <Box fill align="center" justify="center">
      <Box width="medium">
        <GrommetForm
          onReset={event => console.log(event)}
          onSubmit={({ value }) => console.log('Submit', value)}
        >
          <FormField label="I am" name="I am">
            <RadioButtonGroup
              name="ampm"
              options={['Restaurant', 'Local Business', 'Citizen with Idea']}
            />
          </FormField>

          <Box direction="row" justify="between" margin={{ top: 'medium' }}>
            <Button label="Cancel" />
            <Button type="reset" label="Reset" />
            <Button type="submit" label="Submit" primary />
          </Box>
        </GrommetForm>
      </Box>
    </Box>
  );
};

export default Form;
