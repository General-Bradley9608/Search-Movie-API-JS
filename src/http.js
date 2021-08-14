/* eslint-disable class-methods-use-this */
class EasyHTTP {
  // Make an HTTP GET Request
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }

  // Make an HTTP POST Request
  async post(url, data) {
    // console.log(data);
    // console.log(url);
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(data),
    });

    // const resData = await response.json();
    // console.log(response);
    return response;
  }
}

const http = new EasyHTTP();
export default http;
