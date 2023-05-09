### Project 說明
### 使用 Vue 搭配 Vite 環境建置開發，分別建立：
- HomeView.vue ：作為 RouterView 和加入元件 FooterComponent
- IndexView.vue ：作為首頁 layout
- OrderView.vue ：作為 RouterView 點餐頁面 layout ，以及加入 OrderComponent 菜單元件 、 InputComponent 點餐輸入元件。

### Vue Components 元件管理：
- FooterComponent.vue ：因路由表 HomeView.vue 內有設定子路由，因此子路由的元件都會顯示 Footer 。
- InputComponent.vue ：將點餐輸入拆成元件，方便後續沿用及維護。
- OrderComponent.vue ：將菜單拆成元件，方便後續沿用及維護。

### 總結：
- 將 IndexView.vue 首頁和 OrderView.vue 點餐頁面，設為 HomeView.vue 的子路由，讓後續子路由可以一併顯示 HomeView.vue 中加入的元件（如： Navbar 、 Footer ）

- 建立的 Components 元件管理，讓這些元件可在不同頁面中使用，方便後續專案及開發上的沿用與維護性，並可提升開發效率。


---
# vite-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

```
vite-project

```
```
vite-project

```