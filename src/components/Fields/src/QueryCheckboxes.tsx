/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldProps } from '..';

export const QueryCheckboxes = ({ field, methods }: FieldProps) => {
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
      {data?.results?.map((item: any) => (
        <label key={item.id} htmlFor={`${name}-${item.id}`}>
          <input
            type='checkbox'
            value={item.id}
            id={`${name}-${item.id}`}
            {...register(name, { required: field.required })}
          />
          {item.name}
        </label>
      ))}
      {errors[name] && <p>{errors[name]?.message}</p>}
    </section>
  );
};
