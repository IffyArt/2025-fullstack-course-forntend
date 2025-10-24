export type ApiPaginatedResponse<T> = {
  results: T[];
  count: number;
  next: string | null;
  previous: string | null;
};

export type BaseApiResponse<T extends object> = T & {
  created_at: string;
  id: number;
  updated_at: string;
  owner: {
    email: string;
    id: number;
    username: string;
  };
};
