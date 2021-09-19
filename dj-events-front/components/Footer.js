import Link from "next/link"
import styles from '@/styles/Footer.module.css'
export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>Copyright &copy; DJ Events {new Date().getFullYear()}</p>
            <p>
                <Link href="/about">About website</Link>
            </p>
        </footer>
    )
}
