export function resetAll(mocks: { [id: string]: jest.SpyInstance }) {
  jest.resetModules();
  resetMocks(mocks);
  // eslint-disable-next-line no-param-reassign
  Object.entries(mocks).forEach(([id]) => {
    // eslint-disable-next-line no-param-reassign
    delete mocks[id];
  });
}

export function resetMocks(mocks: { [id: string]: jest.SpyInstance }) {
  // reset all mocks
  Object.entries(mocks).forEach(mock => {
    mock[1].mockClear();
    mock[1].mockRestore();
  });
}
