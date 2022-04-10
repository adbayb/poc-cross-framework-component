<br>
<div align="center">
    <h1>🧪 Cross framework component (POC)</h1>
    <strong>POC of cross framework component with different approaches based on web components API</strong>
</div>
<br>
<br>

## 🤔 Motivation

This repository aims to experiment several approaches to foster cross framework components.
All approaches are based on web component API to create custom components that can be used anywhere without being tied to a specific framework.

One of the objectives is to test the impact on performance and size footprint (all frameworks expected vanilla (even compiler based one such as Stencil and Svelte) include more or less a tiny runtime to manage their design constraints (eg. for handling [virtual dom](https://github.com/ionic-team/stencil/tree/main/src/runtime), async rendering, or [component lifecycle](https://github.com/sveltejs/svelte/blob/467ba0a920d9b9902a2059085bac2662c6813b9a/src/runtime/internal/lifecycle.ts)...))

<br>

## ⚙️ Frameworks

Following frameworks are tested:

- [Vanilla](frameworks/vanilla): the size cost is optimal (no framework runtime) but the barrier of entry can be too high. The vanilla approach is more verbose, with a lack of huge ecosystem (if we compare with popular UI frameworks) and all design constraints need to be managed in a custom way with some (painful) challenges (such as [server side rendering](https://dev.to/steveblue/server-side-rendering-web-components-320g), [SEO](https://leofavre.github.io/web-components-seo/), state management...)
- [Preact](frameworks/preact): the size cost for one component is the worst since it includes the whole runtime whatever the number of components (in constrast to compiler-based frameworks which include an optimized runtime for each component). The runtime injection is mitigated by the number of components (the runtime size is the same if we create one or thousand components while the size of runtime increased crescendo with compiler-based frameworks)
- [Stencil](frameworks/stencil): the size cost is quite optimal and optimized on a per component basis through a compilation step (a tiny runtime is added to manage virtual dom). In contrast to a non compiler approach (such as React, Preact), the size cost is proportional to the number of components (the more components, the more size increases)
- [Svelte](frameworks/svelte): TODO

## 🌟 Conclusion

For all concerns regarding the vanilla approach, the favored approach will be to use, **for now**, a popular UI framework (such as React) to build components and create a web component adapter / a thin compatibility layer on top of React component to make it work in the web component world and let the browser register it as a custom element and used with any framework.
A similar approach is fostered by the Angular community with [@angular/elements package](https://angular.io/guide/elements).
For this purpose, the Preact UI library seems to be the ideal candidate to manage web component compatibility layer while providing a tiny runtime in contrast to React and preserving the same good React DX and design constraints.
