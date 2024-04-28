<<<<<<< HEAD
# PasswordGenerator
A simple password generator using three React Hooks (useEffect,useCallback,UseRef)

Let's have some knowledge about react hooks

**a)UseEffect**

-used when we need to perform some side effects

-used when we need to interact outside the components

some side effects are:

-requesting an API for data

-timing functions 

**Basic syntax**

-import useEffect from react

-call it above the returned JSX in our component

-pass it two arguments: a function and an array

**useEffect ( function, dependency )**

The function passed is a Callback function which is called after the component renders.

The second argument is an array (dependencies array) which includes  all those values that our side effects rely on.


**b)UseCallback**

-returns a memoized callback functions
here memoizations simply means caching something so that it doesnot need to be calculated again and again

**useCallback( function , dependencies )**

**c)UseRef**

-lets you reference a value that's not needed for rendering 

**Basic syntax**

useRef ( initialValue )

=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
>>>>>>> 96f849b (my-password-generator)
