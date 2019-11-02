type Response = {
  content: string
};

type Zapier = {
  request: <B>(
    url: string,
    options: ZapierRequestOptions<B>
  ) => Promise<Response>,
  JSON: ZJSON
};

type ZJSON = {
  parse: <R>(text: string) => R
};

type ZapierRequestOptions<B> = {
  headers?: Headers,
  method: "GET" | "POST",
  body: B
};

type AuthRequestData = {|
  operatorDomain: string,
  refresh_token: string
|};

type AuthRequestBundle = {
  authData: AuthRequestData
};

type AuthResponseData = {|
  sessionKey: string
|};

type AuthResponseBundle = {
  authData: AuthResponseData
};

type Headers = {
  [string]: string
};

type Request = {
  headers: Headers
};

type GetEmptyLegsBundle = {
  ...AuthRequestBundle,
  inputData: {
    from: string
  }
};

type GetAircraftBundle = {
  ...AuthRequestBundle,
  inputData: {
    id: number
  }
};

type GetScheduleBundle = {
  ...AuthRequestBundle,
  inputData: {
    from: string,
    end: string
  }
};

type GQLResponse<T> = {
  data: T
};

type GQLRequestBody<V> = {|
  query: string,
  variables: V
|};
