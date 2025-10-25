import { FormField } from '@/models/form-field';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { TextField } from '../Fields';

type Props = {
  fields: FormField[];
  onSubmit: (data: Record<string, unknown>) => void;
  resetData?: Record<string, unknown>;
};

export const Form = ({ fields, onSubmit, resetData }: Props) => {
  const methods = useForm<Record<string, unknown>>();

  useEffect(() => {
    if (resetData) {
      fields.forEach((field) => {
        methods.setValue(field.name, resetData[field.name]);
      });
    }
  }, [fields, resetData, methods]);

  const handleSubmit = (data: Record<string, unknown>) => {
    onSubmit(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(handleSubmit)}
        style={{ border: '1px solid #000', padding: '1rem' }}
      >
        <article>
          {fields.map((field) => (
            <TextField key={field.name} field={field} methods={methods} />
          ))}
        </article>
        <footer>
          <button type='submit'>Submit</button>
        </footer>
      </form>
    </FormProvider>
  );
};
