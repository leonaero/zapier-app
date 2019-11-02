type Zapier = {
  request: <B, R>(url: string, options: ZapierRequestOptions<B>) => Promise<R>,
  JSON: ZJSON
};

type ZJSON = {
  parse: <R>(text: string) => R
};

type ZapierRequestOptions<B> = {
  headers?: Headers,
  method: string,
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
    from: DateTime
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
    from: DateTime,
    end: DateTime
  }
};
