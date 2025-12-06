1. Create a new file using the defined template engine (in my demo: `njk`)
2. Set up the frontmatter to use `templateEngineOverride: 'md'` and set up a simple Markdown content
3. Create a filter to output the content of the page somewhere (console or escaped code — or both!)
4. Run Eleventy and notice the output wraps the content with a CDATA syntax

```
<![CDATA[STARTRAW<h2>I am a heading</h2>
<h3>Sub-head</h3>
<ul>
<li>A list?</li>
<li>In this economy??</li>
</ul>
ENDRAW]]>
```
