<br>
<div align="center">
    <h1>🧪 Cross framework component</h1>
    <strong>Experiment of cross framework component implementation with different approaches</strong>
</div>
<br>
<br>

## 🤔 Motivation

This repository aims to experiment several approaches to foster cross framework component usage.
All experimentations must be framework agnostic.

<br>

## 🧪 Experimentations

- [Web component](web-component): it consists of implementing a framework agnostic component using the Web components standard. To preserve the developer experience, several Web component friendly framework (Stencil.js, Preact with custom element interoperability layer...) are tested to implement the underlying web component logic and output to web components. **It relies on web standards**: while it can be future-proof, it can come with several challenges (eg. SEO: rendering web component is not possible natively server side (ie. without extra tool such as DOM emulation or headless browser for prerendering purposes) since the standard relies on web client APIs).
- [Primitive](primitive): it consists of building frameworkless components (arbitrary called primitives) to manage core framework agnostic constraints and logic (such as accessibility, dom representation, styling...) and adapting them to the targetted framework through adapters to manage UI specific lifecycle and rendering concerns. **It doesn't rely on web standards but rather on framework standards** making easier to manage framework decisions and solutions (such as server-side rendering, ...). 

<br>

## 📕 Resources

*Empty*