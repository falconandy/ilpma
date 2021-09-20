export type StdOutMocks = {
  writeLine: jest.Mock;
};

export function mockStdOut(): StdOutMocks {
  const writeLine = jest.fn();

  jest.mock('../../../src/stdout', () => ({
    default: class {
      public static writeLine(text?: string) {
        writeLine(text);
      }
    },
  }));

  return {
    writeLine,
  };
}

export function verifyStdOut(writeLine: jest.SpyInstance) {
  expect(writeLine.mock.calls).toMatchSnapshot('writeLine');
}
