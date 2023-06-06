### What is React? When and why would you use it?

React is a JavaScript framework that empowers developers to construct structured and efficient web interfaces using reusable components, following a declarative approach. These components encapsulate the application's UI logic and can be composed together to create complex interfaces based on the application's current state.

With React, you can easily develop interactive and dynamic web interfaces, making it particularly suitable for single-page applications and complex UIs that require frequent updates. Its component-based architecture promotes code reusability, maintainability, and scalability, making it an excellent choice for large-scale projects.

### What is Babel?

Babel is a JavaScript transpiler that converts modern JavaScript and JSX syntax into browser-compatible JavaScript, ensuring consistent functionality across various browsers. It enables developers to write code using the latest JavaScript features and syntax while ensuring backward compatibility.

### What is JSX?

JSX, which stands for JavaScript XML, is an extension to JavaScript syntax that allows developers to write HTML-like code within JavaScript

### How is a Component created in React?

In React, a component is typically created as a JavaScript function or a class. The function or class represents a reusable piece of UI logic that can be composed together with other components to build a complete user interface.

### What are some difference between state and props?

Props are attributes of a single compenant and can be passed down to children they are immutable. Where as state is used to control the data/state of the application. State represents the information or variables that can change over time and affect the behavior or appearance of the application.

### What does "downward data flow" refer to in React?

In React, "downward data flow" refers to the practice of passing data from a parent component to its child component(s) through props.

### What is a controlled component?

A controlled component in React is a component that receives its state and behavior from the parent component's state via props, allowing the parent component to fully control the data and behavior of the controlled component by passing values and event handlers.

### What is an uncontrolled component?

An uncontrolled component in React is a component that manages its own internal state without relying on the parent component's state or passing values through props. It maintains its own state and handles user input independently.

### What is the purpose of the `key` prop when rendering a list of components?

The key prop is used when rendering a list of components in React to provide a unique identifier for each individual element in the list. The purpose of the key prop is to help React efficiently track and manage the rendered components within the list ensuring the intended behavior.

### Why is using an array index a poor choice for a `key` prop when rendering a list of components?

Using an array index as the key prop when rendering a list of components is discouraged as it can lead to unpredictable behavior, inefficient reconciliation, and difficulty in tracking individual components, making it preferable to use unique and stable identifiers for accurate rendering and optimal performance.

### Describe useEffect. What use cases is it used for in React components?

useEffect is a hook in React that enables handling side effects, such as data fetching, integrating with external systems, or performing cleanup operations. It runs after the component has rendered and can be configured to execute based on specified dependencies, making it a versatile tool for managing component lifecycle and incorporating imperative logic in functional components.

### What does useRef do? Does a change to a ref value cause a rerender of a component?

useRef in React allows you to store mutable values, including references to DOM elements, and access them across renders. While it provides a way to access the DOM directly, it is recommended to use it only when necessary. Changing the value of a ref does not trigger a re-render of the component.

### When would you use a ref? When wouldn't you use one?

Refs are useful for direct DOM access or storing mutable values, but should be used sparingly and not as a workaround for React's patterns. Use them when accessing local files or specific inaccessible DOM elements, but avoid overusing them and neglecting React's ecosystem.

### What is a custom hook in React? When would you want to write one?

A custom hook in React is a reusable function that encapsulates logic and state management, allowing you to eliminate duplicate code and promote code reusability. It is useful when you notice similar logic applied to multiple components, enabling you to create a separate function to handle that logic and share it across components, resulting in lean and efficient code.
