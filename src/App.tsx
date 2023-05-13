import { ReactElement, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '../public/vite.svg';
import './App.css';

const App = (): ReactElement => {
  const [count, setCount] = useState(0);
  const increaseCount = (): void => {
    setCount((count) => count + 1);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>링구링구</h1>
      <div className="card">
        <button onClick={increaseCount}>
          count is
          {count}
        </button>
        <p>Edit src/App.tsx and save to test HMR</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

export default App;
