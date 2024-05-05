import BinaryDecimalConverter from './components/Converter'; // Adjust the path to match the actual location of your component
import  './App.css';
import logo from "./logo.png";
import './logo-animation.css';

function App() {
  return (
    <div>
      <h1>Number system Converter</h1>
      <img src={logo} alt="Image Description" className="custom-image rotate-logo" />
      <BinaryDecimalConverter />
    </div>
  );
}

export default App;
