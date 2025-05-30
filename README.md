1. `npm i`
2. Use a `markdown` filter in `echo` to render a code block
3. Give the codeblock some JavaScript defining a function explicitly (`function foo(bar) {...}`)
4. `npm run dev`
5. The Vento engine attempts to parse this function as a real function in the template
6. If you use the fat arrow notation, the issue does not occur (`const foo = (bar => { ... })`)

````
npm run dev

> 11ty-vento@1.0.0 dev
> npx @11ty/eleventy --serve --quiet --incremental --port=1313

[11ty] Problem writing Eleventy templates:
[11ty] 1. Having trouble rendering vto template ./src/content/index.vto (via TemplateContentRenderError)
[11ty] 2. Having trouble compiling template ./src/content/index.vto (via TemplateContentCompileError)
[11ty] 3. Invalid function: echo "\n```js\nfunction myFunc(a, b, c) {\n    return a + b - c;\n}\n```\n"
[11ty]
[11ty] Original error stack trace: Error: Invalid function: echo "\n```js\nfunction myFunc(a, b, c) {\n    return a + b - c;\n}\n```\n"
[11ty]     at functionTag (.../11ty-vento/node_modules/ventojs/esm/plugins/function.js:12:15)
[11ty]     at Environment.compileTokens (.../11ty-vento/node_modules/ventojs/esm/src/environment.js:124:41)
[11ty]     at Environment.compile (.../11ty-vento/node_modules/ventojs/esm/src/environment.js:44:25)
[11ty]     at Object.getTemplateFunction (.../11ty-vento/node_modules/eleventy-plugin-vento/dist/plugin.js:98:22)
[11ty]     at Object.compile (.../11ty-vento/node_modules/eleventy-plugin-vento/dist/plugin.js:224:31)
[11ty]     at CustomEngine.compile (.../11ty-vento/node_modules/@11ty/eleventy/src/Engines/Custom.js:239:5)
[11ty] Wrote 0 files in 0.02 seconds (v3.1.0)
````
