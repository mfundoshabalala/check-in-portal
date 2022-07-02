module.exports = {
	testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
	setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
	transform: {
		"^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
	},
	moduleNameMapper: {
		"\\.(css|less|scss|sass)$": "<rootDir>/styles/__mocks__/styleMock.js",
		"^pages/(.*)$": "<rootDir>/pages/$1",
		"^components/(.*)$": "<rootDir>/components/$1",
	},
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
	modulePathIgnorePatterns: ["<rootDir>/node_modules/"],
	testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
	testEnvironment: "node",
	testURL: "http://localhost",
	coverageDirectory: "coverage",
	collectCoverageFrom: ["pages/**/*.{js,jsx,ts,tsx}", "components/**/*.{js,jsx,ts,tsx}"],
	coverageReporters: ["json", "lcov", "text", "clover"],
	coveragePathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/coverage/"],
	watchPathIgnorePatterns: ["<rootDir>/node_modules/"],
	globals: {
		"ts-jest": {
			tsConfig: "tsconfig.json",
		},
	},
	verbose: true,
	watch: false,
};
