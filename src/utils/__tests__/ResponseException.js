import ResponseException from '../ResponseException';

it('Should handle ResponseException', async () => {
  const mockResolvedError = { message: 'message' };
  const response = {
    json: jest.fn(() => Promise.resolve(mockResolvedError)),
    status: 'status'
  };

  await ResponseException.prepare(response);
  expect(response.json).toHaveBeenCalled();
  expect(ResponseException.message).toEqual(mockResolvedError.message);
  expect(ResponseException.status).toEqual(response.status);
});
