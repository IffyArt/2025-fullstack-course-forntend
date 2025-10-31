import { FormField } from '@/models/form-field';

export const authFormFieldConfig: FormField[] = [
  {
    label: 'Username',
    name: 'username',
    type: 'text',
    required: true,
  },
  {
    label: 'Password',
    name: 'password',
    type: 'password',
    required: true,
  },
];
