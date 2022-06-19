import sytles from './styles.module.css';
import igniteLogo from '../../assets/svg/ignite-icon.svg';

export function Header() {
    return(
        <div className={sytles.header}>
            <img src={igniteLogo} alt="Ignite Logo"/>
        </div>
    )
}