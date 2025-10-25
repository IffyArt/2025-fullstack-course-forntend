export type AuthJwtCreateParams = {
  username: string;
  password: string;
};

export type AuthJwtCreateResponse = {
  access: string;
  refresh: string;
};
