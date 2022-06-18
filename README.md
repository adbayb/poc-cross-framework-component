<br>
<div align="center">
    <h1>🧪 Cross-framework component</h1>
    <strong>Experiment several approaches to consume components in a framework agnostic way</strong>
</div>
<br>
<br>

## 🤔 Motivation

This repository aims to experiment several approaches to implement cross-framework components.  
By cross-framework, we mean a component compatible with several frameworks.

<br>

## ✅ Requirements

Following minimum requirements have been identified:

- Consistent API across frameworks
- Shared core logic (accessibility, state, styling, ...)
- SSR friendly
- Encapsulation (style isolation)
- Developer experience

<br>

## 🧪 Experimentations

Three approaches have been tested:

- **[Wrapper](wrapper) (top-down runtime approach)**: packages existing framework dependent components with a thin interoperability layer to create framework agnostic components consumable by any frontend stack. This layer acts as [a decorator](https://refactoring.guru/design-patterns/decorator) to generate standard custom elements with added superpowers (eg. adding server side rendering support by letting the underlying framework manages it). 
This approach can be interesting to explore if we need to deal with the existing (ie. already developped components) or if the team wants to use (for developer experience concerns...) a specific UI framework.
- **[Primitive](primitive) (bottom-up runtime approach)**: framework agnostic low-level building blocks. They allow to build high-level components without dealing with framework specificities. Each primitive acts as [an adapter](https://refactoring.guru/design-patterns/adapter) to plug framework dependent logic.
This approach can be interesting to explore if requirements must be supported in an optimal way consumer side (eg. no extra size footprint...).
- **[Compiler](compiler) (build time approach)**: Use a build tool to generate, from a single source code, either web component (eg. via [Stencil](https://stenciljs.com/)) or per framework implementations (eg. via [Mitosis](https://github.com/BuilderIO/mitosis)). 

Others approaches have also been considered but are not suited to our defined requirements:

- Use web standards only (web component): while it's future-proof, it can come with several challenges (developer experience, server side support...). For example, SEO constraints: rendering web component is not natively possible server side since the standard relies on web client APIs. By natively, we mean without introducing extra tool such as DOM emulation or headless browser for prerendering purposes.
- Re-implement the whole library per framework: we would like to share as much as possible the core logic.

<br>

**TODO:**

- [ ] Add compiler implementation
- [ ] Add rendering benchmark (wrapper approach)
- [ ] Fix reactive props Vue side (primitive approach)
