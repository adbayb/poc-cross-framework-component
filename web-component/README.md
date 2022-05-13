<br>
<div align="center">
    <h1>🧪 With web components</h1>
    <strong>Experiment cross framework component implementation on top of Web components standard</strong>
</div>
<br>
<br>

## 🤔 Motivation

All approaches are based on web component standard as a thin interoperability layer to create custom elements that can be used anywhere without being tied to a specific framework.

<br>

## 🌟 Architecture

A web component adapter is built on top of Preact component to make it work in the web component world and let the browser register it as a custom element and used with any framework.
A similar approach is fostered by the Angular community with [@angular/elements package](https://angular.io/guide/elements):

<br>

## 🙋‍♂️ Questions

#### Why using a framework underneath?

Using only the standard web component API is optimal when we refer to the size constraint (no framework runtime) but the barrier of entry can be too high. Indeed, the vanilla approach is more verbose, with a lack of huge ecosystem (if we compare with popular UI frameworks) and all design constraints need to be managed in a custom way with some (painful) challenges (such as [server side rendering](https://dev.to/steveblue/server-side-rendering-web-components-320g), [SEO](https://leofavre.github.io/web-components-seo/), state management...

By using a framework, the developer experience (and so the maintenance) can be greatly improved while letting the framework manages non trivial tasks (performance diffing, rendering lifecycle, server side rendering, ...).  
One of the challenge is to choose one that achieves the best trade-off regarding frontend constraints (size, performance, SSR friendly, ...). Whatever the framework used, it's important to also note that each of them (even compiler based one such as Stencil and Svelte) includes more or less a tiny runtime to manage their design constraints (eg. for handling [virtual dom](https://github.com/ionic-team/stencil/tree/main/src/runtime), async rendering, or [component lifecycle](https://github.com/sveltejs/svelte/blob/467ba0a920d9b9902a2059085bac2662c6813b9a/src/runtime/internal/lifecycle.ts)...):

- [React](https://preactjs.com/): it offers the best developer experience for React developers. However, the size footprint for one component can be important since it includes the whole runtime whatever the number of components (in constrast to a compiler-based framework which optimizes the runtime for each component). Though, this disadvantage can be mitigated by using [Preact with its React compatibility layer](https://www.npmjs.com/package/@preact/compat) (you can see the size reduction impact [here](packages/adapter/README.md)) and this footprint is reduced with the number of components (the runtime size is the same if we create one or thousand components while the size of runtime increased crescendo with compiler-based frameworks).
- [Stencil](https://stenciljs.com/): like the vanilla approach, the developer experience is worst (new paradigm should be learned). However, the size cost is quite optimal and optimized on a per component basis through a compilation step (a tiny runtime is added to manage virtual dom). In contrast to a non compiler approach (such as React, Preact), the size cost is proportional to the number of components (the more components, the more size increases).

For React developers, Preact with `@preact/compat` seems to be the right trade-off to manage web component compatibility layer while providing **a tiny runtime** and **preserving the same good developer experience**.

#### Why not using shadow DOM to create self-contained / encapsulate web component?

No shadow dom API has been used, we rely on a light dom to fulfill [our defined constraints](../README.md) (including SSR). 
**TODO**
