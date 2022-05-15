<br>
<div align="center">
    <h1>🧪 With primitives</h1>
    <strong>Experiment cross framework component implementation on top of shared framework agnostic logic</strong>
</div>
<br>
<br>

```ts
// Primitives: framework-agnostic building blocks (each building block implements, underneath, framework specific logic): 
createComponent (renderFunction) // → responsibilities: manage component creation specificity (including ref management)
createElement (tagName, props) // → responsibilities: manage core logic across elements (tokens management, platform specificities, responsive attribute mapping, style API...)
createHandler (props, hooks: { useState, useEffect, useMemo, useContext }) // → responsibilities: manage stateful logic and, as output, map public props API to the allowed createElement props
```
