<br>
<div align="center">
    <h1>🧪 With primitives</h1>
    <strong>Experiment cross framework component implementation on top of shared framework agnostic logic</strong>
</div>
<br>
<br>

```ts
// Low level primitives without internal state management
// @note: process either html or react-native attributes
// No state management -> pure mapper function framework-agnostic which reacts to input change
const attributes = useBox({
    display: "flex",
    accessibilityHidden: true
})

// Medium level primitives with internal state management (they use low level ones)
// attributes can returns reactive attributes (eg. isFocused, isPressed states...)
// Those primitives uses internally low level primitives.
const attributes = useButton({
    onPress() {}
})

// High level primitives (optional -> can be implemented on each framework)
// createElement is a framework-agnostic adapter for the JSX pragma. 
// The `createElement` is injected in the framework world to adapt the framework signature with the expected adapter API contract
const createButton = (createElement, props) => {
    const attributes = useButton(props)

    return createElement("button", attributes, props.children)
}

// Framework world (Vue for example)
import { h } from "vue"

const createVueElement = (tag, props, children) => h(tag, props, children)
const Button = (props) => createButton(createVueElement, props)
```
