import { FaUser } from "react-icons/fa"
import { ToastContainer, toast } from 'react-toastify';
import { useState, useEffect, useContext } from "react"
import { Layout } from "@/components/Layout";
import 'react-toastify/dist/ReactToastify.css'
import Link from "next/link";
import styles from '@/styles/AuthForm.module.css'


const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handlerSubmit = (e) => {
        e.preventDefault();
        console.log({email, password});
    }

    return (
        <Layout title="User Login">
            <div className={styles.auth}>
                <h1><FaUser/> Log In</h1>
                <ToastContainer/>

                <form onSubmit={handlerSubmit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" value={email} onChange={(e) => {setEmail(e.target.value)}} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={password} onChange={(e) => {setPassword(e.target.value)}} />
                    </div>
                    <input type="submit" value="Login" className="btn" />
                </form>

                <p>Don't have a account? <Link href="/account/register" >Register</Link></p>
            </div>
        </Layout>
    )
}

export default Login
