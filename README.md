1. `npm i`
2. `npm run dev`
3. While the server is running, save the `.eleventy.js` file, regardless of changes, it should trigger a rebuild

```
npm run dev

> 11ty-vento@1.0.0 dev
> npx @11ty/eleventy --serve --quiet --incremental --port=1313

[11ty] Wrote 1 file in 0.07 seconds (v3.0.0)
[11ty] Watching…
[11ty] Server at http://localhost:1313/
[11ty] File changed: .eleventy.js
[11ty] Problem writing Eleventy templates:
[11ty] 1. Having trouble writing to "./_site/index.html" from "./src/content/index.vto" (via EleventyTemplateError)
[11ty] 2. Error in template src/_includes/layouts/base.vto:1:193
[11ty]
[11ty] <empty file> (via TemplateError)
[11ty]
[11ty] Original error stack trace: TemplateError: Error in template src/_includes/layouts/base.vto:1:193
[11ty]
[11ty] <empty file>
[11ty]
[11ty]
[11ty]     at eval (eval at compile (.../11ty-vento/node_modules/ventojs/esm/src/environment.js:57:29), <anonymous>:30:17)
[11ty]     at async renderVentoTemplate (.../11ty-vento/node_modules/eleventy-plugin-vento/dist/plugin.js:120:23)
[11ty]     at async Object.<anonymous> (.../11ty-vento/node_modules/eleventy-plugin-vento/dist/plugin.js:222:30)
[11ty]     at async TemplateLayout.renderPageEntry (.../11ty-vento/node_modules/@11ty/eleventy/src/TemplateLayout.js:225:22)
[11ty]     at async #renderPageEntryWithLayoutsAndTransforms (.../11ty-vento/node_modules/@11ty/eleventy/src/Template.js:856:14)
[11ty]     at async Template.generateMapEntry (.../11ty-vento/node_modules/@11ty/eleventy/src/Template.js:896:15)
[11ty]     at async Promise.all (index 1)
[11ty]     at async Eleventy.executeBuild (.../11ty-vento/node_modules/@11ty/eleventy/src/Eleventy.js:1345:19)
[11ty]     at async #watch (.../11ty-vento/node_modules/@11ty/eleventy/src/Eleventy.js:944:57)
[11ty]     at async watchRun (.../11ty-vento/node_modules/@11ty/eleventy/src/Eleventy.js:1185:5)
[11ty] Wrote 0 files in 0.01 seconds (v3.0.0)
```
