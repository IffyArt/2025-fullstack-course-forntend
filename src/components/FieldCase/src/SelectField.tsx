/* eslint-disable @typescript-eslint/no-explicit-any */
import { Field, NativeSelect } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import { FieldProps } from '..';

const SelectField = ({ field }: FieldProps) => {
  const { options, label, name } = field;
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Field.Root invalid={!!errors[name]} w='100%'>
      <Field.Label>{label}</Field.Label>
      <NativeSelect.Root size='md'>
        <NativeSelect.Field
          w='100%'
          placeholder={`請選擇 ${label}`}
          {...register(name, { required: field.required })}
        >
          {options?.map((item: any) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </NativeSelect.Field>
        <NativeSelect.Indicator />
      </NativeSelect.Root>
      <Field.ErrorText>
        {typeof errors[name]?.message === 'string' ? errors[name]?.message : ''}
      </Field.ErrorText>
    </Field.Root>
  );
};

export default SelectField;
