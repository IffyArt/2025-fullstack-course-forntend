/* eslint-disable @typescript-eslint/no-explicit-any */
import { Checkbox, CheckboxGroup, Fieldset } from '@chakra-ui/react';
import { useController, useFormContext } from 'react-hook-form';
import { FieldProps } from '..';

const QueryCheckboxes = ({ field }: FieldProps) => {
  const { query } = field;
  const { label, name } = field;
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const queryResult = query?.();
  const data =
    queryResult && 'data' in queryResult
      ? (queryResult.data as any)
      : undefined;

  const options = data?.results?.map((item: any) => ({
    label: item.name,
    value: item.id,
  }));

  const framework = useController({
    control,
    name: name,
    defaultValue: [],
  });

  return (
    <Fieldset.Root invalid={!!errors[name]}>
      <Fieldset.Legend>{label}</Fieldset.Legend>
      <CheckboxGroup
        invalid={!!errors[name]}
        value={framework.field.value}
        onValueChange={framework.field.onChange}
        name={framework.field.name}
      >
        <Fieldset.Content flexWrap='wrap' flexDirection='row'>
          {options?.map((item: any) => (
            <Checkbox.Root key={item.value} value={item.value}>
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label>{item.label}</Checkbox.Label>
            </Checkbox.Root>
          ))}
        </Fieldset.Content>
      </CheckboxGroup>

      {typeof errors[name]?.message === 'string' ? errors[name]?.message : ''}
    </Fieldset.Root>
  );
};

export default QueryCheckboxes;
