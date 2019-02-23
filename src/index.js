import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import Counter from './components/Counter';
import './styles.css';

const App = () => {
  return (
    <store.Provider initialValue={{ count: 0 }}>
      <Counter />
    </store.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
