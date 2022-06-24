import styles from './styles.module.css';
import { PencilLine } from 'phosphor-react';
import { Avatar } from '../Avatar';

export function Sidebar() {
    const cover = 'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80';
    
    return(
        <aside className={styles.sidebar}>
            <img 
                src={cover} 
                className={styles.cover}
            />

            <div className={styles.profile}>
                <Avatar hasBorder={true} src='https://github.com/NatanaelSaymon.png'/>
                <strong>Natanael Saymon</strong>
                <span>Front-End Developer</span>
            </div>

            <footer>
                <a href="#"><PencilLine size={20} /> Editar seu perfil</a>
            </footer>
        </aside>
    )
}