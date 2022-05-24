<br>
<div align="center">
    <h1>🧪 With primitives</h1>
    <strong>Experiment cross-framework component implementation on top of shared framework agnostic logic</strong>
</div>
<br>
<br>

## 🚀 Quickstart

```bash
# hoisting necessary to make Nuxt example works 
pnpm install --shamefully-hoist
pnpm start
```

<br>

## 🌟 Architecture

Primitives are framework agnostic building blocks that hide framework implementation complexity.  
They allow to build high-level components without dealing with framework specificities.  
Each primitive acts as [an adapter](https://refactoring.guru/design-patterns/adapter) to plug framework dependent logic:

![Primitive architecture](https://user-images.githubusercontent.com/10498826/169863417-5217bf14-f408-45fe-8012-e13aeed6aa6a.png)

<br>
