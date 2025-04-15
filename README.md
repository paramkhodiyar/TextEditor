## What does useState return : 
Usestate returns an array of state variable and a function to update that state variable.

## What is useState :
usestate is a react hook that allows us to add state to functional components. The initial state of the component is passed as an argument to the useState function. The state variable can be used in the component like any other variable, and the update function can be called to update the state whenever needed.

## What is StateVariable :

Statevariable allows react to store and manage data that changes over time. unlike normal variable, statevariable triggers a re-render of the component where their value is changed. 

Difference between state variable and normal variable is that state variable is reactive, meaning that when the value of the state variable changes, react will automatically re-render the component to reflect the new value. Normal variables do not have this behavior, and changing their value will not trigger a re-render of the component.

## Why and when to use statevariable :
State variables are used when we need to store and manage data that changes over time in a functional component. They are particularly useful when we need to keep track of user input, form data, or any other data that may change during the lifecycle of the component. State variables allow us to create dynamic and interactive components that can respond to user actions and update the UI accordingly.

## Difference between render and re-render :
Render is the initial process of creating the component and displaying it on the screen. Re-render is the process of updating the component when its state or props change. When a component is re-rendered, React will compare the new virtual DOM with the previous one and update only the parts of the actual DOM that have changed. This process is called reconciliation and helps to optimize performance by minimizing unnecessary updates to the DOM.
