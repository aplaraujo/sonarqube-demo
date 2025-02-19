module.exports = {
    transform: {
        "^.+\\.js$": "babel-jest",
    },
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageReporters: ['lcov', 'text']
};