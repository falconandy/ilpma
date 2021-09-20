// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

process.env.JEST_TEST_ROOT = path.join(__dirname); // TODO: join(__dirname, 'test');

// eslint-disable-next-line no-undef
jest.setTimeout(60000);
