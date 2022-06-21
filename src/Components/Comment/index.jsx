import { Trash, ThumbsUp } from 'phosphor-react';
import styles from './styles.module.css';

export function Comment() {

    const avatar = 'https://avatars.githubusercontent.com/u/59451978?v=4';

    return(
        <div  className={styles.comment}>
            <img src={avatar} alt="Natanael Saymon" />

            <div className={styles.commentBox}>

                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Natanael Saymon</strong>
                            <time title="19 de Junho às 11:05" dateTime={new Date().toLocaleDateString()}>Cerca de 1h atrás</time>
                        </div>

                        <button titile="Deletar comentário">
                            <Trash size={20}/>
                        </button>
                    </header>

                    <p>Muito bom Natan, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}