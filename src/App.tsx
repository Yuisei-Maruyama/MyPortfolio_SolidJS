import { Component, createSignal } from 'solid-js';

import styles from './App.module.css';

const [text, setText] = createSignal<string>('')

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <input type="text" value={text()} onChange={(e) => setText(e.currentTarget.value)} />
        <p>テキスト：{ text() }</p>
      </header>
    </div>
  );
};

export default App;
