# Limitations

an issue? [https://component-model.bytecodealliance.org/design/why-component-model.html](https://component-model.bytecodealliance.org/design/why-component-model.html)

> a component interacts with a runtime or other components only by calling its imports and having its exports called. Specifically, unlike core modules, a component may not export Wasm memory, and thus it cannot indirectly communicate to others by writing to its memory and having others read from that memory.

[https://component-model.bytecodealliance.org/design/wit.html](https://component-model.bytecodealliance.org/design/wit.html):

> User-defined records can't be generic (that is, parameterised by type). Only built-in types can be generic.

[https://component-model.bytecodealliance.org/language-support/javascript.html\#running-a-component-from-javascript-applications-including-the-browser](https://component-model.bytecodealliance.org/language-support/javascript.html#running-a-component-from-javascript-applications-including-the-browser):

> While JavaScript runtimes available in browsers can execute WebAssembly core modules, they cannot yet execute WebAssembly components, so WebAssembly components \(JavaScript or otherwise\) must be "transpiled" into a JavaScript wrapper and one or more [WebAssembly core modules](https://webassembly.github.io/spec/core/binary/modules.html) which can be run by available WebAssembly engines.  


# Misc

Package -> World -> Interface

# Questions

Relationship between Arrow and WIT? Particularly [resources](https://component-model.bytecodealliance.org/design/wit.html#resources) e.g. how are arrow arrays passed between components efficiently?

# Try it out

Rust components, based on [https://component-model.bytecodealliance.org/language-support/rust.html\#building-a-component-with-cargo-component](https://component-model.bytecodealliance.org/language-support/rust.html#building-a-component-with-cargo-component)
```
cargo install --locked wasm-tools
cargo install --locked cargo-component
brew install wasmtime # using brew rather than piping to shell. brew version looks up-to-date, so use that instead
```

JS side:
```
npm install @bytecodealliance/jco
```

See commit comments on [rust-to-browser spike](spikes/rust-to-browser) for rest ...