# Counter Application with ReactJS (Redux Architecture)
  Simple Application to understand the Redux Architcture with ReactJS
  
# Run
- npm install
- npm start

# Test
http://localhost:7000


#Technical Information

**Principle 1 :**
- Everything that changes in your application, including the data and the UI state, is contained in a single object, we call the state or the state tree.

**Principle 2 :**
-Redux -- the state is read only. The only way to change the state tree is by dispatching an action. An action is a plain JavaScript object, describing in the minimal way what changed in the application. Whether it is initiated by a **network request or by user interaction**, any data that gets into the Redux application gets there by actions.

**Principle 3 :**
-Third and the last principle of Redux. To describe state mutations, you have to write a function that takes the previous state of the app, the action being dispatched, and returns the next state of the app. This function has to be pure. This function is called the "Reducer."

-reducer function must be a pure function.
-We can create a impure functions(database calls across network access) as a middleware and wrap with reducers
