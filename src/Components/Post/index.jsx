import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import styles from './styles.module.css';

export function Post() {

  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: '',
        name: '',
        role: ''
      }
    }
  ]

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder={true} src='https://github.com/NatanaelSaymon.png'/>
          <div className={styles.authorInfo}>
            <strong>Natanael Saymon</strong>
            <span>Front-End Developer</span>
          </div>
        </div>

        <time title="19 de Junho às 11:05" dateTime="2022-05-11 08:13:30">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>
          <a href="#">👉 jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto</a>{' '}
          <a href="#">#rocketseat</a>{' '}
          <a href="#">#nlw</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe seu feedback" />

        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
      </div>
    </article>
  )
}
