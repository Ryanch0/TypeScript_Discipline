"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profile = Profile;
const react_1 = require("react");
require("./App.css");
let box = <div></div>;
function App() {
    const [user, setUser] = (0, react_1.useState)('Kim');
    return (<div>
    <Profile name='Ryan' age='40'></Profile>
  </div>);
}
function Profile(props) {
    const { name, age } = props;
    return (<>
    <div>{name}</div>
    <div>{age}</div>
    </>);
}
exports.default = App;
