<br>
<div align="center">
    <h1>🧪 With wrapper</h1>
    <strong>Experiment cross framework component implementation by wrapping framework dependent components</strong>
</div>
<br>
<br>

## 🚀 Quickstart

```bash
# hoisting necessary to make Nuxt and preact/compat example works 
pnpm install --shamefully-hoist
pnpm start
```

<br>

## 🌟 Architecture

The approach packages existing framework dependent components with a thin interoperability layer to create framework agnostic components consumable by any frontend stack. This layer acts as [a decorator](https://refactoring.guru/design-patterns/decorator) to generate standard custom elements with added superpowers (eg. adding server side rendering support by letting the underlying framework manages it).  
A similar approach is fostered by the Angular community with [@angular/elements package](https://angular.io/guide/elements):

![Wrapper architecture](https://user-images.githubusercontent.com/10498826/169863424-801689e1-fddf-4743-b973-ab79a4753595.png)

<br>

## 🙋‍♂️ Questions

### Why using a framework underneath?

Using only the standard web component API is optimal when we refer to the size constraint (no framework runtime) but the barrier of entry can be too high. Indeed, the vanilla approach is more verbose, with a lack of huge ecosystem (if we compare with popular UI frameworks) and all design constraints need to be managed in a custom way with some (painful) challenges (such as [server side rendering](https://dev.to/steveblue/server-side-rendering-web-components-320g), [SEO](https://leofavre.github.io/web-components-seo/), state management...

By using a framework, the developer experience (and so the maintenance) can be greatly improved while letting the framework manages non trivial tasks (performance diffing, rendering lifecycle, server side rendering, ...).  
One of the challenge is to choose one that achieves the best trade-off regarding frontend constraints (size, performance, SSR friendly, ...). Whatever the framework used, it's important to also note that each of them (even compiler based one such as Stencil and Svelte) includes more or less a tiny runtime to manage their design constraints (eg. for handling [virtual dom](https://github.com/ionic-team/stencil/tree/main/src/runtime), async rendering, or [component lifecycle](https://github.com/sveltejs/svelte/blob/467ba0a920d9b9902a2059085bac2662c6813b9a/src/runtime/internal/lifecycle.ts)...):

- [React](https://preactjs.com/): it offers the best developer experience for React developers. However, the size footprint for one component can be important since it includes the whole runtime whatever the number of components (in constrast to a compiler-based framework which optimizes the runtime for each component). Though, this disadvantage can be mitigated by using [Preact with its React compatibility layer](https://www.npmjs.com/package/@preact/compat) (you can see the size reduction impact [here](packages/adapter/README.md)) and this footprint is reduced with the number of components (the runtime size is the same if we create one or thousand components while the size of runtime increased crescendo with compiler-based frameworks).
- [Stencil](https://stenciljs.com/): like the vanilla approach, the developer experience is worst (new paradigm should be learned). However, the size cost is quite optimal and optimized on a per component basis through a compilation step (a tiny runtime is added to manage virtual dom). In contrast to a non compiler approach (such as React, Preact), the size cost is proportional to the number of components (the more components, the more size increases).

For React developers, Preact with `@preact/compat` seems to be the right trade-off to manage web component compatibility layer while providing **a tiny runtime** and **preserving the same good developer experience**.

> For a deeper look at bundle size and rendering performance benchmarks for multiple framework integration, a great ressource can be found [here](https://webcomponents.dev/blog/all-the-ways-to-make-a-web-component/#bundle-size). 

### Why not using shadow DOM to create encapsulate web component logic?

While shadow DOM is a key part to enforce encapsulation (for markup structure (DOM tree), style (CSS) and behavior (JavaScript)), it comes with several limitations tied to its features:
- Global styles cannot be applied making it difficult to cascade styles (style encapsulation could be done in a non standard way (eg. via CSS in JS, CSS Modules...))
- The internal shadow DOM tree is inaccessible by third-parties and non web clients (the shadow DOM API must be emulated server side and/or prerender the page with a web client to allow server side rendering)
- Event propagation is different inside and outside the shadow DOM (the event is retargeted outside to preserve shadow DOM encapsulation) and can be incompatible with some UI framework abstraction (such as React dealing with synthetic events)

By keeping a light DOM (ie. using the plain old DOM instead of the shadow DOM tree), we can avoid shadow DOM limitations and fulfill [our defined constraints](../README.md) while still benefiting from the custom element API to handle attribute change management in an interoperable way.
