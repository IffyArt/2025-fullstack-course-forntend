/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldProps } from '..';

export const QuerySelect = ({ field, methods }: FieldProps) => {
  const { query } = field;
  const { label, name } = field;
  const {
    register,
    formState: { errors },
  } = methods;

  const queryResult = query?.();
  const data =
    queryResult && 'data' in queryResult
      ? (queryResult.data as any)
      : undefined;

  return (
    <section>
      <label htmlFor={name}>{label}</label>
      <select {...register(name, { required: field.required })}>
        <option value=''>請選擇 {label}</option>
        {data?.results?.map((item: any) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      {errors[name] && <p>{errors[name]?.message}</p>}
    </section>
  );
};
