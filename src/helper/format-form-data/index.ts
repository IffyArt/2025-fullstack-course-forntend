import { FormField } from '@/models/form-field';

export type FormatFormDataProps = {
  data: Record<string, unknown>;
  fieldConfig: FormField[];
};

export const formatFormData = ({ data, fieldConfig }: FormatFormDataProps) => {
  const formattedData = {};

  fieldConfig.forEach((field) => {
    switch (field.type) {
      default:
        (formattedData as Record<string, unknown>)[field.name] =
          data[field.name];
        break;
    }
  });

  return formattedData;
};
