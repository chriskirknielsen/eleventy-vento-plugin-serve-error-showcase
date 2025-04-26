//* Imports
import { VentoPlugin } from 'eleventy-plugin-vento';

const rootDir = 'src'; // Root folder
const outputDir = '_site'; // Build destination folder
const includesDir = '_includes'; // Includes folder
const layoutsDir = `${includesDir}/layouts`; // Layouts folder

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default async function (eleventyConfig) {
	//* Shortcodes
	eleventyConfig.addPairedShortcode('alphagroup', function (content) {
		return `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(2ch, 1fr)); gap: 1em;">${content}</div>`;
	});
	eleventyConfig.addPairedShortcode('lettergroup', function (content) {
		return `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(2ch, 1fr)); gap: 1em;">${content}</div>`;
	});
	eleventyConfig.addShortcode('letter', function (content) {
		return `<kbd>${content}</kbd>`;
	});

	//* Plugins
	eleventyConfig.addPlugin(VentoPlugin, {
		// plugins: [],
		shortcodes: true,
		pairedShortcodes: true,
		filters: true,
		autotrim: true,
		autoescape: false,
		ventoOptions: {
			includes: `src/${eleventyConfig.directories.includes}`,
		},
	});

	eleventyConfig.setServerOptions({
		domDiff: false,
	});

	return {
		pathPrefix: '/',
		markdownTemplateEngine: 'vto',
		htmlTemplateEngine: 'vto',
		passthroughFileCopy: true,
		dir: {
			input: rootDir,
			output: outputDir,
			includes: includesDir,
			layouts: layoutsDir,
		},
	};
}
