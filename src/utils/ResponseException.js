export default class ResponseException {
  static async prepare(response) {
    // get response body as json
    let responseBody = await response.json();
    // get the api message returned
    ResponseException.message = responseBody.message;
    ResponseException.status = response.status;

    return ResponseException;
  }
}