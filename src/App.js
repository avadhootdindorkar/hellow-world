import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';

function App() {
  return (
    <div className="App">
      <ClickCounter name = 'Avadhoot'/>
      <HoverCounter name = 'Bhavana'/>
      {/* <Form/> */}
    </div>
  );
}

export default App;
