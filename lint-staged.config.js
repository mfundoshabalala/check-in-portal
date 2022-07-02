module.exports = {
	// This will lint and format TypeScript and JavaScript files
	"**/*.(ts|tsx|js|jsx)": (/** @type {any[]} */ filenames) => [
		`npm run lint:fix --max-warnings=0 ${filenames.join(" ")}`,
		`npm run format ${filenames.join(" ")}`,
		() => "tsc-files --noEmit",
	],

	// this will Format MarkDown and JSON
	"**/*.(md|json)": (/** @type {any[]} */ filenames) => [
		`npm run format ${filenames.join(" ")}`,
	],
};
