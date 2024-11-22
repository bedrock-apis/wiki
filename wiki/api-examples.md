---
outline: deep
---

# Runtime API Examples

This page demonstrates usage of some of the runtime APIs provided by VitePress.

The main `useData()` API can be used to access site, theme, and page data for the current page. It works in both `.md` and `.vue` files:

```md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

## Results

### Theme Data
<pre>{{ theme }}</pre>

### Page Data
<pre>{{ page }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre>
```

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData();

async function handleClick(){
    const response = await fetch("https://raw.githubusercontent.com/bedrock-apis/bds-docs/refs/heads/preview/metadata/script_modules/mojang-minecraft-ui_0.1.0.json");
    alert("Lmao");
    console.log("Fuck off", response);
}
</script>

## Results

### Theme Data
<pre>{{ theme }}</pre>

### Page Data
<pre>{{ page }}</pre>

### Page Frontmatter

<pre>{{ frontmatter }}</pre>

## More

Check out the documentation for the [full list of runtime APIs](https://vitepress.dev/reference/runtime-api#usedata).

# Welcome to My VitePress Site

This is a sample page with some client-side code.

<style module>
.button {
  color: red;
  opacity: 0.6;
  font-weight: bold;
}
</style>

::: warning
Some data

<button :class="$style.button" @click="handleClick">
    Click
</button>
:::