import { FormField } from '@/models/form-field';
import { Box, Button, VStack } from '@chakra-ui/react';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Field from '../FieldCase';

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
      <Box
        as='form'
        layerStyle='card-elevated'
        p='4'
        onSubmit={methods.handleSubmit(handleSubmit)}
      >
        <VStack gap='4'>
          {fields.map((field) => (
            <Field key={field.name} field={field} />
          ))}
        </VStack>
        <Button type='submit' mt='4'>
          Submit
        </Button>
      </Box>
    </FormProvider>
  );
};
