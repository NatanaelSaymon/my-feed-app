import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useState } from "react";

import { Avatar } from '../Avatar';
import { Comment } from '../Comment';

import styles from './styles.module.css';

export function Post({ author, publishedAt, content }) {

  const [comments, setComments] = useState(['Post muito bacana, hein?!']);

  const [newCommentText, setNewCommentText] = useState('');

  //data de publicação do post
  const publishedAtDateFormatted = format(publishedAt, "dd 'de' MMMM 'às' H:mm'h'", {
    locale: ptBR
  })

  //armazena a data do post relativa ou agora
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  
  function HandleNewCommentChange() {
    setNewCommentText(event.target.value)
  }

  function handleCreateNewComment(e) {
    e.preventDefault();

    //adiciona mais um comentario no array de comentarios
    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder={true} src={author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedAtDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(item => {
          if(item.type === 'paragraph') {
            return(
              <p key={item.content}>{item.content}</p>
            )
          } else if(item.type === 'link'){
            return(
              <p key={item.content}>
                <a href="#">{item.content}</a>
              </p>
            )
          }

        })}
      </div>

      <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          name="comment"
          placeholder="Deixe seu feedback" 
          value={newCommentText}
          onChange={HandleNewCommentChange}
        />

        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return(
            <Comment key={comment} content={comment} />
          )
        })}
      </div>
    </article>
  )
}
