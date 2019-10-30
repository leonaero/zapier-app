const getAccessToken = (z, bundle) => {
  const promise = z.request({
    method: "POST",
    url: `https://${bundle.authData.operatorDomain}/access_token/refresh/`,
    body: {
      refresh_token: bundle.authData.refresh_token
    }
  });

  return promise.then(response => {
    return {
      sessionKey: response.content
    };
  });
};

const attachAccessToken = (request, z, bundle) => {
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
