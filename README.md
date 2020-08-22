# Fun with React Suspense

[React Suspense](https://reactjs.org/docs/react-api.html#reactsuspense) allows you to provide a loading indicator for a tree of components that kinda act like an async function.

## Fun Facts

- In order to catch exceptions with `React.Suspense` you need to wrap it with an [Error Boundary](https://reactjs.org/docs/error-boundaries.html#introducing-error-boundaries)

- As of today `React.Suspense` is primarily used for code-splitting when client-side rendering. To enable a component to be split into another file, you would use `React.lazy`.

- In a future version of React, you will be able to use the Suspense feature for more things, like data fetching and also server rendering.

## Code Splitting
