import { resetAll, resetMocks } from '../test-helpers/helper.mocks';
import { mockStdOut, verifyStdOut } from './mocks/stdout';

describe(`Test 'info'`, () => {
  const mocks: { [id: string]: jest.SpyInstance } = {};

  async function runInfoCommand() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires,global-require
    const infoCommand = require('../../src/commands/info');
    await infoCommand.default.run();
  }

  function verifyInfo() {
    verifyStdOut(mocks.writeLine);
  }

  beforeEach(() => {
    resetAll(mocks);

    Object.assign(mocks, mockStdOut());
  });

  afterEach(() => {
    resetMocks(mocks);
  });

  test(`should work`, async () => {
    await runInfoCommand();
    verifyInfo();
  });
});
