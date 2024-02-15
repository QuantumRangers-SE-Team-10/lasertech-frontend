import axios from 'axios';

const query = async (route: string, httpMethod: string, id: Number | null, params: any) => {
  const baseUrl = 'http://127.0.0.1:5243/api/';
  const requestHeaders = {
    Accept: 'application/json',
  };

  let queryUrl = `${baseUrl}${route}`;

  queryUrl = queryUrl.concat(id != null ? `/${id}` : '');

  if (params.length > 0 || true) {
    const queryString = Object.keys(params)
      .map((key: string) => { return `${key}=${params[key]}`; })
      .join('&');
    queryUrl = queryUrl.concat(`?${queryString}`);
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