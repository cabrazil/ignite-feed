import { Header } from "./components/Header";

import styles from './App.module.css';

import './global.css';
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <h1>Aqui irão os posts</h1>
        </main>
      </div>
    </div>
  )
}

export default App
