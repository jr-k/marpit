module.exports = {
  collectCoverageFrom: ['src/**/*.js'],
  coverageThreshold: { global: { lines: 95 } },
  restoreMocks: true,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'node',
  testRegex: '(/(test|__tests__)/(?!_).*|(\\.|/)(test|spec))\\.js$',
  moduleFileExtensions: ['js', 'json', 'node'],
  prettierPath: null,
}
