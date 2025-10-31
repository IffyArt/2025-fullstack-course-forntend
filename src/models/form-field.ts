import { UseQueryResult } from '@tanstack/react-query';
import { ApiPaginatedResponse, BaseApiResponse } from './api';

export type FormField = {
  label: string;
  name: string;
  type:
    | 'text'
    | 'password'
    | 'email'
    | 'boolean'
    | 'date'
    | 'number'
    | 'select'
    | 'textarea'
    | 'query-select'
    | 'query-checkboxes';
  required?: boolean;
  options?: { label: string; value: string }[];
  query?: () => UseQueryResult<
    ApiPaginatedResponse<BaseApiResponse<object>>,
    Error
  >;
};
