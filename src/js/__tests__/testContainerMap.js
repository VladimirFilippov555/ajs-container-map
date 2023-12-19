import ErrorRepository from '../containerMap';

test.each([
  [404, 'Not Found'],
  [500, 'Internal Server Error'],
])('error if message for error code', (code, expected) => {
  const test = new ErrorRepository();
  expect(test.translate(code)).toBe(expected);
});

test('return "Unknown error" for unknown code errors', () => {
  const errorRepository = new ErrorRepository();

  expect(errorRepository.translate(222)).toBe('Unknown error');
});