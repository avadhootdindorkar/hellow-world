import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import RenderPropsCounter from './components/RenderPropsCounter';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/Context';

function App() {
  return (
    <div className="App">
      <UserProvider value="Avadhoot">
        <ComponentC />
      </UserProvider>

      {/* <RenderPropsCounter render={(count, incrementCount) => (
        <ClickCounterTwo count={count} incrementCount={incrementCount} />
      )} />

      <RenderPropsCounter render={(count, incrementCount) => (
        <HoverCounterTwo count={count} incrementCount={incrementCount} />
      )} /> */}

      {/* <ClickCounterTwo />
      <HoverCounterTwo /> */}
      {/* <Form/> */}
    </div>
  );
}

export default App;
