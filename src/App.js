import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Deployment test</h1>
      <p>Check the changes</p>
      <button>Click me</button>
      <button onClick={() => console.log('Button clicked!')}>Click me!</button>
    </div>
  );
}

export default App;
