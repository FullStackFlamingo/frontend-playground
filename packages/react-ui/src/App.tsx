import { useDispatch, useSelector } from 'react-redux';
import { increment } from './store/counterSlice';
import reactLogo from './assets/react.svg';
import './App.css';
import { RootState } from './store';

function App() {
  const count = useSelector((state: RootState) => state.counter.value);

  const dispatch = useDispatch();

  const onClickIncrement = () => dispatch(increment());
  increment();
  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={onClickIncrement}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
