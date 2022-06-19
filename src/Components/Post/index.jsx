import styles from './styles.module.css';

export function Post({ author, content }) {
  return (
    <div className={styles.post}>
      <strong>{author}</strong>
      <p>{content}</p>
    </div>
  )
}
