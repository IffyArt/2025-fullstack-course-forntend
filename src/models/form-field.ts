import { UseQueryResult } from '@tanstack/react-query';
import { ApiPaginatedResponse, BaseApiResponse } from './api';

export type FormField = {
  label: string;
  name: string;
  type:
    | 'text'
    | 'number'
    | 'email'
    | 'boolean'
    | 'select'
    | 'date'
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
