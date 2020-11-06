import React, { useEffect } from 'react';
import { useObserver } from 'mobx-react';
import Todos from '../store/store';
import '../App.css';

function App() {
  const name = useObserver(() => Todos.name);

  useEffect(() => {
    Todos.changeList();
  });

  return (
    <div className="App">
      {name}
    </div>
  );
}

export default App;
