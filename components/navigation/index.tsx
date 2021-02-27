import {useRouter} from 'next/router';
import Link from 'next/link';
import {ReactNode} from 'react';
import styles from './Navigation.module.css';
const LINKS = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'About',
        path: '/about'
    }
]

interface NavAnchor {path: string, children: ReactNode}

function NavAnchor ({path, children}: NavAnchor){
    return(
        <Link href={path}>
            <a className={styles.navAnchor}>{children}</a>
        </Link>
    );
}

export default function Navigation(){

    const {pathname} = useRouter();

    return(
        <nav>
            <ul className={styles.list}>
                {
                    LINKS.map(({path, name}) => (

                        <li key={path}>{path === pathname ? <span>{name}</span> : <NavAnchor path={path}>{name}</NavAnchor>}</li>
                    ))
                }
            </ul>
        </nav>
    );
}