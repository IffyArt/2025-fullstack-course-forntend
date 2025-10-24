export type FormField = {
  label: string;
  name: string;
  type: 'text' | 'number' | 'email' | 'boolean' | 'select' | 'textarea';
  required?: boolean;
  options?: { label: string; value: string }[];
};
