module.exports = {
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testRegex: '(/test/.*|(\\.|/)(test|spec))\\.(test.ts?)$',
  testPathIgnorePatterns: [
    '/lib/',
    '/node_modules/',
    '/test/test-helpers/',
    '/test/commands/src/'
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: false,
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['dotenv/config'], // see overrides in jest.setup.js as well
  setupFilesAfterEnv: ['./jest.setup.js'],
};
