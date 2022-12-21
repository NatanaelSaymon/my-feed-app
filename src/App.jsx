import { Header } from "./Components/Header";
import { Post } from "./Components/Post";
import { Sidebar } from "./Components/Sidebar";

import styles from './App.module.css';
import './global.css';


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/NatanaelSaymon.png',
      name: 'Natanael Saymon',
      role: 'Frontend Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-12-18 11:00:00')
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/Daniel-Rangel.png',
      name: 'Daniel Fernandes',
      role: 'Frontend Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. O nome do projeto é Dadadario 🚀🚀🚀'},
      { type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-12-18 11:00:00')
  },
]


export function App() {
  return(
    <div>
      <Header/>
      
      <div className={styles.wrapper}>
        <Sidebar/>
        
        <main>
          {posts.map(post => {
            return(
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
