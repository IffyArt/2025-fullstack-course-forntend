import { FormField } from '@/models/form-field';
import { Field, Input, Switch } from '@chakra-ui/react';
import { Controller, useFormContext } from 'react-hook-form';
import QueryCheckboxes from './src/QueryCheckboxes';
import QuerySelect from './src/QuerySelect';
import SelectField from './src/SelectField';

export type FieldProps = {
  field: FormField;
};

const FieldCase = ({ field }: FieldProps) => {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext();
  const { label, name, type } = field;

  switch (type) {
    case 'boolean':
      return (
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Field.Root invalid={!!errors[name]}>
              <Switch.Root
                name={field.name}
                checked={field.value as boolean}
                onCheckedChange={({ checked }) => field.onChange(checked)}
              >
                <Switch.HiddenInput onBlur={field.onBlur} />
                <Switch.Control />
                <Switch.Label>{label}</Switch.Label>
              </Switch.Root>
              <Field.ErrorText>
                {typeof errors[name]?.message === 'string'
                  ? errors[name]?.message
                  : ''}
              </Field.ErrorText>
            </Field.Root>
          )}
        />
      );

    case 'query-select':
      return <QuerySelect field={field} />;
    case 'query-checkboxes':
      return <QueryCheckboxes field={field} />;
    case 'select':
      return <SelectField field={field} />;
    default:
      return (
        <Field.Root>
          <Field.Label>{label}</Field.Label>
          <Input
            type={type}
            placeholder={`請輸入 ${label}`}
            w='100%'
            {...register(name, { required: field.required })}
          />
        </Field.Root>
      );
  }
};

export default FieldCase;
