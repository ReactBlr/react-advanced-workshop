### Higher Order Components

Nitish Kumar
[@nitishk88](https://twitter.com/nitishk88)

---

### Introduction

A higher-order component(HOC) is a technique in React for reusing component logic.
A HOC is a pure function that takes a compoenent and returns a new component.

```js
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```

---

### Concept and Usage

HOCs should be used for cross-cutting concerns.

* Patterns that repeat can be identified, abstracted and shared across multiple components.
* A function can be written that takes a component, applies the re-usable logic and returns a new
  component with original and additional calculated props.
* HOC neither modifies the input component, nor does it use inheritance to copy its behavior. Rather,
  it composes the original component by wrapping it in a container component.

---

### Convention - Pass unrelated props through to the Wrapped Component

To avoid altering the contract of a component, HOCs should pass through props that are
unrelated to its specific concern.

---

```js
render() {
  // Filter out extra props that are specific to this HOC and shouldn't be
  // passed through
  const { extraProp, ...passThroughProps } = this.props;

  // Inject props into the wrapped component. These are usually state values or
  // instance methods.
  const injectedProp = someStateOrInstanceMethod;

  // Pass props to wrapped component
  return (
    <WrappedComponent
      injectedProp={injectedProp}
      {...passThroughProps}
    />
  );
}
```

---

### Convention - Design HOC for maximum composability

HOCs can be designed to accept multiple arguments with the wrapped component.

```js
const NavbarWithRouter = withRouter(Navbar);
const CommentWithRelay = Relay.createContainer(Comment, config);
```

Single-argument HOCs have the signature `Component => Component`. These kind of functions are really
easy to compose together.

```js
compose(f, g, h); // same as (...args) => f(g(h(...args)))
```
---

In case where a HOC requires argument(s) other than the wrapped component, a higher-order function that returns a HOC can be utilized.

```js
// connect is a function that returns another function
const enhance = connect(commentListSelector, commentListActions);
// The returned function is a HOC, which returns a component that is connected
// to the Redux store
const ConnectedComment = enhance(CommentList);
```

Function composition becomes feasible again in this case.

```js
const enhance = compose(
  // These are both single-argument HOCs
  withRouter,
  connect(commentSelector)
);
const EnhancedComponent = enhance(WrappedComponent);
```

---

### Convention - Wrap the Display Name for Easy Debugging

Containers created by HOCs show up in the React Developer Tools like any other component.
A display name that depicts the usage of HOC can be used to ease debugging.

---

```js
const withSubscription = WrappedComponent => {
  class WithSubscription extends React.Component {
    /* ... */
  }
  WithSubscription.displayName = `WithSubscription(${getDisplayName(
    WrappedComponent
  )})`;
  return WithSubscription;
};

const getDisplayName = WrappedComponent => {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
};
```

---

### Caveats - Applying HOCs Inside the render Method

```js
render() {
  // A new version of EnhancedComponent is created on every render
  // EnhancedComponent1 !== EnhancedComponent2
  const EnhancedComponent = enhance(MyComponent);
  // That causes the entire subtree to unmount/remount each time!
  return <EnhancedComponent />;
}
```

---

* Instead, apply HOCs outside the component definition so that the resulting component is created only once.
  Its identity will be consistent across renders in that case.

* In cases where you need to apply a HOC dynamically, you can also do it inside a component’s lifecycle methods or its constructor.

---

### Caveats - Static Methods Must be Copied Over

```js
const enhance = WrappedComponent => {
  class Enhance extends React.Component {
    /*...*/
  }
  // Must know exactly which method(s) to copy :(
  Enhance.staticMethod = WrappedComponent.staticMethod;
  return Enhance;
};
```
---

Use `hoist-non-react-statics` to automatically copy all non-React static methods:

```js
import hoistNonReactStatic from "hoist-non-react-statics";
const enhance = WrappedComponent => {
  class Enhance extends React.Component {
    /*...*/
  }
  hoistNonReactStatic(Enhance, WrappedComponent);
  return Enhance;
};
```

---

## Exercise

* Create a HOC that logs the Wrapped Component's old props and new props to console.
* It should be displayed as ```LogProps``` in the React Dev Tools.