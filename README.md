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

## 🧪 Experimentations

There're basically, at least, three ways to implement cross framework components:

- [Web component](web-component): it consists of implementing a framework agnostic component using the Web components standard. To preserve the developer experience, several Web component friendly framework (Stencil.js, Preact with custom element interoperability layer...) are tested to implement the underlying web component logic and output to web components. **It relies on web standards**: while it can be future-proof, it can come with several challenges (eg. SEO: rendering web component is not possible natively server side (ie. without extra tool such as DOM emulation or headless browser for prerendering purposes) since the standard relies on web client APIs).
- [Primitive](primitive): it consists of building frameworkless components (arbitrary called primitives) to manage core framework agnostic constraints and logic (such as accessibility, dom representation, styling...) and adapting them to the targetted framework through adapters to manage UI specific lifecycle and rendering concerns. **It doesn't rely on web standards but rather on framework standards** making easier to manage framework decisions and solutions (such as server-side rendering, ...). 
- Reimplementing the whole component library per framework: out of scope since it doesn't match our constraints (ie. sharing core logic as much/needed as possible).

<br>

## ✅ Constraints

Each experimentation must tick following constraints:

- Consistent API across frameworks
- Shared core logic (accessibility, state, styling, ...)
- SSR friendly
- Encapsulation (style isolation)
- Developer experience

<br>

## TODO

- [ ] General: Add pros/cons section for all experimentations (when to use X experimentation instead of Y => shim can be a good match if there's an existing codebase and/or the library relies on core libraries that are framework dependent (such as react-aria for a11y requirements))
- [ ] Web-component: Benchmark web-component integration vs vanilla react vs vanilla shadow dom

<br>

## 📕 Resources

*Empty*