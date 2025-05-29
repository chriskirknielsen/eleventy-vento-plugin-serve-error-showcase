//* Imports
import { EleventyRenderPlugin } from '@11ty/eleventy';
import { VentoPlugin } from 'eleventy-plugin-vento';

const rootDir = 'src'; // Root folder
const outputDir = '_site'; // Build destination folder
const includesDir = '_includes'; // Includes folder
const layoutsDir = `${includesDir}/layouts`; // Layouts folder

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default async function (eleventyConfig) {
	eleventyConfig.addPlugin(EleventyRenderPlugin, { accessGlobalData: true });
	eleventyConfig.addPlugin(VentoPlugin);

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
