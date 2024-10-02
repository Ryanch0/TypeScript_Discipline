"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const client_1 = require("react-dom/client");
require("./index.css");
const App_1 = require("./App");
const react_redux_1 = require("react-redux");
const redux_1 = require("redux");
const 초기값 = { count: 0 };
function reducer(state = 초기값, action) {
    if (action.type === '증가') {
        return { count: state.count + 1 };
    }
    else if (action.type === '감소') {
        return { count: state.count - 1 };
    }
    else {
        return 초기값;
    }
}
const store = (0, redux_1.createStore)(reducer);
client_1.default.render(<react_1.default.StrictMode>
    <react_redux_1.Provider store={store}>
      <App_1.default />
    </react_redux_1.Provider>
  </react_1.default.StrictMode>, document.getElementById('root'));
