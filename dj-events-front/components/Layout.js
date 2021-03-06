import Head from "next/head"
import styles from '@/styles/Layout.module.css'
import {Header} from "./Header"
import { Footer } from "./Footer"
import Showcase from "./Showcase"
import { useRouter } from "next/router"
export const Layout = ({title,keywords,description, children}) => {

    const router = useRouter();

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{title}</title>
                <meta name="description" content={description}/>
                <meta name="keywords" content={keywords}/>
            </Head>
            <Header/>
            { router.pathname === '/' && <Showcase/>}
            <main>
                <div className={styles.container}>
                    {children}
                </div>
            </main>
            <Footer/>
        </>
    )
}


Layout.defaultProps = {
    title : 'DJ Events',
    keywords: 'music, tag, keyword',
    description: 'Description of this page',
}