import { Trash, ThumbsUp } from 'phosphor-react';
import { Avatar } from '../Avatar';
import styles from './styles.module.css';

export function Comment() {

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src='https://github.com/NatanaelSaymon.png'/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Natanael Saymon</strong>
                            <time title="19 de Junho às 11:05" dateTime={new Date().toLocaleDateString()}>Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24}/>
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