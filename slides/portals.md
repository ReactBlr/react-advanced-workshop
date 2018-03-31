### React Portals

Souvik Basu
[@souvikbasu](https://twitter.com/souvikbasu)

---

### Introduction

Portals are a way to render a react element out of the parent DOM hierarchy

```js
ReactDOM.createPortal(
      <div style={modalStyle} >
        {this.props.children}
      </div>,
      document.getElementById('modal'),
    );
```

---

### When to use Portals?

* Always on Top
* Child bigger than Parent

---

### Clean design using Portals

* Virtual DOM abstraction
* Portal enforces to think in terms of React Elements and not DOM

---

