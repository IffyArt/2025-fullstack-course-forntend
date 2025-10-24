import { FormField } from '@/models/form-field';
import { FormProvider, useForm } from 'react-hook-form';
import { TextField } from '../Fields';

type Props = {
  fields: FormField[];
  onSubmit: (data: Record<string, unknown>) => void;
};

export const Form = ({ fields, onSubmit }: Props) => {
  const methods = useForm<Record<string, unknown>>();

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
