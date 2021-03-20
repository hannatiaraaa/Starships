import axios from "axios";

// url
export const BASE_URL = "https://swapi.dev/api";

function* doRequest(endpoint, options) {
  try {
    let response;
    const { method, body, headers } = options;
    const result = yield axios({
      url: `${BASE_URL}${endpoint}`,
      method,
      data: body,
      headers: headers,
      validateStatus: (status) => status < 500,
    });

    if (result.status === 200 || result.status === 201) {
      response = {
        ...result,
        status: true,
      };
    } else {
      response = {
        ...result,
        status: false,
      };
    }
    return response;
  } catch (error) {
    console.log(error);
    return {
      messages: "There's an error in our server, try again later",
      status: false,
    };
  }
}

export function* request(endpoint, method, config) {
  return yield doRequest(endpoint, { method, ...config });
}
