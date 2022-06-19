import { Header } from "./Components/Header";
import { Post } from "./Components/Post";
import { Sidebar } from "./Components/Sidebar";
import './global.css';
import styles from './App.module.css';


export function App() {
  return(
    <div>
      <Header/>
      
      <div className={styles.wrapper}>
        <Sidebar/>
        
        <main>
          <Post 
            author="Natanael Saymon"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />

          <Post 
            author="Suellen de Souza"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </main>
      </div>
    </div>
  )
}
