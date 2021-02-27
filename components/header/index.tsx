import styles from './Header.module.css';

export default function Header(){
    return(
        <header className={styles.container}>
            <h1 className={styles.title}>Site</h1>
        </header>
    );
}