export type AuthJwtCreateParams = {
  username: string;
  password: string;
};

export type AuthJwtTokenResponse = {
  access: string;
  refresh: string;
};
