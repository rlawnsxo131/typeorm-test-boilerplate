module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['dotenv/config'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'json'],
  testMatch: [
    '<rootDir>/src/**/test/*.test.(ts|tsx)',
    '<rootDir>/src/domain/**/test/*.test.(ts|tsx)',
  ],
};
