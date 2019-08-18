1. What problem does the context API help solve?
prop drilling, we now store data on the context object

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
actions handle user input and manipulation on the actual application, reducers check actions and create an updated state tree, store holds the whole state tree of your application 

because there is only one place which represents the state of the application and the ui listens to that only 

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
you would use application state when you have multiple repeating cases of certain data over and over again

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
redux thunk is a middleware that allows you to write action creators that return a function in place of an action

1. What is your favorite state management system you've learned and this sprint? Please explain why!
redux most likely because i know its scale in comparison to other that may be aleady existing additions of libraries/frameworks