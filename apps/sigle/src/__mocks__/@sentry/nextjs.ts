export const captureException = jest.fn();
export const flush = jest.fn();
const scope = { setExtras: jest.fn() };
export const withScope = jest.fn((callback) => callback(scope));
export const withSentry = jest.fn();
export const captureUnderscoreErrorException = jest.fn();
