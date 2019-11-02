//@flow
const getAccessToken = (z: Zapier, bundle: AuthRequestBundle) => {
  const promise = z.request(
    `https://${bundle.authData.operatorDomain}/access_token/refresh/`,
    {
      method: "POST",
      body: {
        refresh_token: bundle.authData.refresh_token
      }
    }
  );

  return promise.then(response => {
    return {
      sessionKey: response.content
    };
  });
};

const attachAccessToken = (
  request: Request,
  z: Zapier,
  bundle: AuthResponseBundle
) => {
  const access_token = bundle.authData.sessionKey;
  request.headers = request.headers || {};
  request.headers["Authorization"] = `Bearer ${access_token}`;
  return request;
};

const definition = {
  type: "session",
  test: getAccessToken,
  fields: [
    {
      key: "operatorDomain",
      type: "string",
      required: true,
      helpText: "Your operator domain without ending slash (ex. man.leon.aero)"
    },
    {
      key: "refresh_token",
      type: "string",
      required: true,
      helpText: "Token generated on API keys page"
    }
  ],

  sessionConfig: {
    perform: getAccessToken
  }
};

module.exports = {
  definition,
  attachAccessToken
};
