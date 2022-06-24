import styles from './styles.module.css';

export function Avatar(props) {
    return(
        <img 
            src={props.src} 
            alt="Natanael Saymon" 
            className={props.hasBorder ? styles.avatarWithBorder : styles.avatar}
        />
    )
}