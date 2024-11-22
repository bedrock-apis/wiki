// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
//import BaseLayout from './BaseLayout.vue'

export default {
  extends: DefaultTheme,
  Layout: (data)=>{
    data
    return h(DefaultTheme.Layout, null, {});
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    console.log(app, router, siteData);
  }
} satisfies Theme
