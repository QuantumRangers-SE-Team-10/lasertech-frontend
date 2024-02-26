import axios from "axios";

const query = async (
  route: string,
  httpMethod: string,
  id: Number | null,
  data: any
) => {
  const baseUrl = "http://127.0.0.1:5243/api/";
  const requestHeaders = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  let queryUrl = `${baseUrl}${route}`;
  queryUrl = queryUrl.concat(id != null ? `/${id}` : "");

  const body = JSON.stringify(data);

  let response: any;
  try {
    response = await axios({
      url: queryUrl,
      method: httpMethod,
      headers: requestHeaders,
      data: body,
    });
  } catch (error) {
    response = { error: error.response, data: null };
  }

  return response;
};

export default query;
