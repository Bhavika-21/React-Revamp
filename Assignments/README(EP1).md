Here are the same answers in professional but simple English, ready to say in an interview.

**1. What is Emmet?**
Emmet is a shortcut tool in code editors that turns short abbreviations into full HTML or CSS code. For example, typing `ul>li*3` creates a list with three items. It helps developers write code faster.

**2. Library vs Framework**
A library is a collection of tools that I call when I need them, so I stay in control of the application's structure. A framework provides a fixed structure and calls my code at the right time. React is a library, and Angular is a framework.

**3. What is a CDN and why do we use it?**
A CDN, or Content Delivery Network, is a network of servers around the world that store copies of files. When a user loads a file from a CDN, it is delivered from the nearest server, which makes loading faster. It also reduces the load on my own server.

**4. Why is React called React?**
React is called React because it reacts to changes in data. When the state changes, React automatically updates the user interface, so developers do not need to change the DOM manually.

**5. What is `crossorigin` in the script tag?**
The `crossorigin` attribute tells the browser how to load a script from a different domain, such as a CDN. It also allows the browser to show detailed error messages for that script instead of a generic "Script error."

**6. React vs ReactDOM**
React is the core library that is used to create components, elements, and hooks. ReactDOM is the package that renders those React elements into the browser's DOM. This separation allows React to work on other platforms, such as React Native.

**7. `react.development.js` vs `react.production.js`**
The development build is larger and includes helpful warnings and error messages, so it is used while building the app. The production build is minified and optimized, so it is smaller and faster, and it is used when the app is deployed.

**8. `async` vs `defer`**
Both attributes let the browser download a script without blocking the HTML parsing. With `async`, the script runs as soon as it is downloaded, and the execution order is not guaranteed. With `defer`, the script runs only after the HTML is fully parsed, and the scripts run in the order they are written. I use `defer` for scripts that depend on the DOM or on each other.

**Tip for the interview:** Answer in two parts, first the definition, then one short example. For instance: "A CDN delivers files from the nearest server, so, for example, I can load React through a CDN link instead of installing it." This keeps your answers clear and confident.
