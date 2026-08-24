/**
 * The anti-flash theme snippet, inlined in `<head>`.
 *
 * VivekUI exports this same string as `themeScript`, but that export lives in a
 * `'use client'` module — so importing it into the root layout (a Server
 * Component) would hand back a client reference, not a string. It is reproduced
 * here instead, byte-identical in behaviour and matching the library's defaults:
 * storage key `vk-theme`, attribute `data-theme`, default `system`. Change either
 * side and you have to change both, so ThemeProvider is given the same values
 * explicitly in components/providers.tsx.
 */
export const THEME_STORAGE_KEY = 'vk-theme'
export const THEME_ATTRIBUTE = 'data-theme'

export const themeScript = `!function(){try{var s=localStorage.getItem("${THEME_STORAGE_KEY}"),t=s==="light"||s==="dark"||s==="system"?s:"system",r=t==="system"?(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"):t,e=document.documentElement;e.setAttribute("${THEME_ATTRIBUTE}",r);e.style.colorScheme=r}catch(_){}}()`
