1. `npm i`
2. Use the `{{ renderTemplate 'md' }}` shortcode in a file.
3. `npm run dev`

```
npm run dev

> 11ty-vento@1.0.0 dev
> npx @11ty/eleventy --serve --quiet --incremental --port=1313

[11ty] Problem writing Eleventy templates:
[11ty] 1. Having trouble rendering vto template ./src/content/index.vto (via TemplateContentRenderError)
[11ty] 2. Having trouble compiling template ./src/content/index.vto (via TemplateContentCompileError)
[11ty] 3. Error in template src/content/index.vto:2:1
[11ty]
[11ty] {{ renderTemplate 'md' }} (via TemplateError)
[11ty] 4. [meriyah] [3:37-3:41]: Expected ')' while parsing compiled template function:
[11ty]
[11ty] 3 __exports.content += (renderTemplate 'md') ?? "";
[11ty]                                      ^ (via TransformError)
[11ty]
[11ty] Original error stack trace: TransformError: [meriyah] [3:37-3:41]: Expected ')' while parsing compiled template function:
[11ty]
[11ty] 3 __exports.content += (renderTemplate 'md') ?? "";
[11ty]                                      ^
[11ty]     at transformTemplateCode (file:///Users/ckn/Documents/CKN%20Design/Work/_projects/11ty-vento/node_modules/ventojs/esm/src/transformer.js:113:15)
[11ty]     at Environment.compile (file:///Users/ckn/Documents/CKN%20Design/Work/_projects/11ty-vento/node_modules/ventojs/esm/src/environment.js:48:24)
[11ty]     at Object.getTemplateFunction (file:///Users/ckn/Documents/CKN%20Design/Work/_projects/11ty-vento/node_modules/eleventy-plugin-vento/dist/plugin.js:98:22)
[11ty]     at Object.compile (file:///Users/ckn/Documents/CKN%20Design/Work/_projects/11ty-vento/node_modules/eleventy-plugin-vento/dist/plugin.js:224:31)
[11ty]     at CustomEngine.compile (file:///Users/ckn/Documents/CKN%20Design/Work/_projects/11ty-vento/node_modules/@11ty/eleventy/src/Engines/Custom.js:239:5)
```
