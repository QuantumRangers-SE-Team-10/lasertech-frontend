import axios, { AxiosRequestConfig, RawAxiosRequestConfig } from 'axios';

const query = async (route: string, httpMethod: string, id: Number | null, params: any) => {
  const baseUrl = 'http://127.0.0.1:5243/api/';
  const requestHeaders = {
    Accept: 'application/json',
  };

  const queryUrl = `${baseUrl}${route}/`;

  queryUrl.concat(id ? `/${id}` : '');

  if (params.length > 0) {
    const queryString = params.keys()
      .map((key: string) => { `${key}=${params[key]}` })
      .join('&');
    queryUrl.concat(`?${queryString}`);
  }

  let response: any;
  try {
    response = await axios({
      url: queryUrl,
      method: httpMethod,
      headers: requestHeaders,
    });
  } catch (error) {
    response = error.response;
  }

  return response;
}

export default query;