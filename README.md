<br>
<div align="center">
    <h1>🧪 Cross framework component</h1>
    <strong>Experiment of cross framework component implementation with different approaches</strong>
</div>
<br>
<br>

## 🤔 Motivation

This repository aims to experiment several approaches to implement cross framework components.

<br>

## ✅ Constraints

Each experimentation must tick following constraints:

- Consistent API across frameworks
- Shared core logic (accessibility, state, styling, ...)
- SSR friendly
- Encapsulation (style isolation)
- Developer experience

<br>

## 🧪 Experimentations

Two approaches have been tested:

- [Wrapper](wrapper): packages existing framework dependent components with a thin interoperability layer to create framework agnostic components consumable by any frontend stack. This layer acts as [a decorator](https://refactoring.guru/design-patterns/decorator) to generate standard custom elements with added superpowers (eg. adding server side rendering support by letting the underlying framework manages it). 
This approach can be interesting to explore if we need to deal with the existing (ie. already developped components) or if the team wants to use (for developer experience concerns...) a specific UI framework.
- [Primitive](primitive): is framework agnostic low-level building block to build high-level components without dealing with framework specificities. Each primitive acts as [an adapter](https://refactoring.guru/design-patterns/adapter) to hide/abstract framework dependent logic.
This approach can be interesting to explore if constraints must be supported in an optimal way consumer side (eg. no extra size footprint...).

Others have also been considered but are not suited to our defined constraints:

- Implementing the component library using web standards only (web component): out of scope (ie. developer experience, server side support...). While it can be future-proof, it can come with several challenges (eg. SEO: rendering web component is not natively possible server side since the standard relies on web client APIs. By natively, we mean without introducing extra tool such as DOM emulation or headless browser for prerendering purposes).
- Re-implementing the whole component library per framework: out of scope. We would like to share as much as possible the core logic.

<br>

## 📕 Resources

*Empty*