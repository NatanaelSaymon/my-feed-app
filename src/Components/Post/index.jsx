import { Comment } from '../Comment';
import styles from './styles.module.css';

export function Post() {

  const avatar = 'https://avatars.githubusercontent.com/u/59451978?v=4';

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src={avatar} alt="Natanael Saymon" />
          <div className={styles.authorInfo}>
            <strong>Natanael Saymon</strong>
            <span>Front-End Developer</span>
          </div>
        </div>

        <time title="19 de Junho às 11:05" dateTime={new Date().toLocaleDateString()}>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p><a href="#">👉 jane.design/doctorcare</a></p>

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
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
