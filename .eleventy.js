//* Imports
import markdownIt from 'markdown-it';
import { EleventyRenderPlugin } from '@11ty/eleventy';

const rootDir = 'src'; // Root folder
const outputDir = '_site'; // Build destination folder
const includesDir = '_includes'; // Includes folder
const layoutsDir = `${includesDir}/layouts`; // Layouts folder
const md = new markdownIt({ html: true, breaks: true, linkify: true }).disable('code');

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default async function (eleventyConfig) {
	eleventyConfig.addFilter('markdown', (content) => md.render(content));
	eleventyConfig.addFilter('toTOC', (content) => {
		console.log(content);
		return content;
	});
	eleventyConfig.addPlugin(EleventyRenderPlugin, { accessGlobalData: true });

	eleventyConfig.setServerOptions({
		domDiff: false,
	});

	return {
		pathPrefix: '/',
		markdownTemplateEngine: 'njk',
		htmlTemplateEngine: 'njk',
		passthroughFileCopy: true,
		dir: {
			input: rootDir,
			output: outputDir,
			includes: includesDir,
			layouts: layoutsDir,
		},
	};
}
