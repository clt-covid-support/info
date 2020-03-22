import React from 'react';

import {
  FormField,
  MaskedInput,
  RadioButtonGroup,
  RangeInput,
  Select,
  TextArea,
  TextInput
} from 'grommet';

const LocalBusiness = () => {
  return (
    <>
      <FormField label="Business Name" name="name" required>
        <TextInput name="name" />
      </FormField>
      <FormField label="Email" name="email" required>
        <MaskedInput
          name="email"
          mask={[
            { regexp: /^[\w\-_.]+$/, placeholder: 'example' },
            { fixed: '@' },
            { regexp: /^[\w]+$/, placeholder: 'my' },
            { fixed: '.' },
            { regexp: /^[\w]+$/, placeholder: 'com' }
          ]}
        />
      </FormField>
      <FormField name="ampm">
        <RadioButtonGroup
          name="ampm"
          options={['curbside', 'delivery', 'curbside & delivery']}
        />
      </FormField>
      <FormField label="Size" name="size">
        <Select name="size" options={['small', 'medium', 'large']} />
      </FormField>
      <FormField label="Comments" name="comments">
        <TextArea name="comments" />
      </FormField>
      <FormField label="Age" name="age" pad>
        <RangeInput name="age" min={15} max={75} />
      </FormField>
    </>
  );
};

export default LocalBusiness;
