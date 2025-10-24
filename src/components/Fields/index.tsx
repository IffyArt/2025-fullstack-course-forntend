import { FormField } from '@/models/form-field';
import { UseFormReturn } from 'react-hook-form';

type Props = {
  field: FormField;
  methods: UseFormReturn<Record<string, unknown>>;
};
export const TextField = ({ field, methods }: Props) => {
  const { label, name, type } = field;
  const {
    register,
    formState: { errors },
  } = methods;

  switch (type) {
    case 'text':
      return (
        <section>
          <label htmlFor={name}>{label}</label>
          <input
            type='text'
            placeholder={`請輸入 ${label}`}
            {...register(name, { required: field.required })}
          />
          {errors[name] && <p>{errors[name]?.message}</p>}
        </section>
      );
    case 'number':
      return (
        <section>
          <label htmlFor={name}>{label}</label>
          <input
            type='number'
            placeholder={`請輸入 ${label}`}
            {...register(name, { required: field.required })}
          />
          {errors[name] && <p>{errors[name]?.message}</p>}
        </section>
      );
    case 'email':
      return (
        <section>
          <label htmlFor={name}>{label}</label>
          <input
            type='email'
            placeholder={`請輸入 ${label}`}
            {...register(name, { required: field.required })}
          />
          {errors[name] && <p>{errors[name]?.message}</p>}
        </section>
      );
    case 'boolean':
      return (
        <section>
          <label htmlFor={name}>
            <input
              type='checkbox'
              {...register(name, { required: field.required })}
            />
            {label}
          </label>
          {errors[name] && <p>{errors[name]?.message}</p>}
        </section>
      );
    case 'select':
      return (
        <section>
          <label htmlFor={name}>{label}</label>
          <select {...register(name, { required: field.required })}>
            <option value=''>請選擇 {label}</option>
            {field.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors[name] && <p>{errors[name]?.message}</p>}
        </section>
      );
    case 'textarea':
      return (
        <section>
          <label htmlFor={name}>{label}</label>
          <textarea
            placeholder={`請輸入 ${label}`}
            {...register(name, { required: field.required })}
          />
        </section>
      );
    default:
      return null;
  }
};
