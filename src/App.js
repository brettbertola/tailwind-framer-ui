//import logo from './logo.svg';
import './App.css';
import Button from "./components/Button"
import Switch from "./components/Switch"

function App() {
  return (
    <div>
      <Button label="HELLO" className="p-10"></Button>
    <Switch label="SO Sweet!!"></Switch>
    <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
  </div>
  );
}

export default App;
