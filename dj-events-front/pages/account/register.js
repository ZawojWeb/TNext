import { FaUser } from "react-icons/fa"
import { ToastContainer, toast } from 'react-toastify';
import { useState, useEffect, useContext } from "react"
import { Layout } from "@/components/Layout";
import 'react-toastify/dist/ReactToastify.css'
import Link from "next/link";
import styles from '@/styles/AuthForm.module.css'
import AuthContext from "@/context/AuthContext";


const Register = () => {

    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

    const {register, error} = useContext(AuthContext)


    const handlerSubmit = (e) => {
        e.preventDefault();

        if(password !== passwordConfirm){
            toast.error("Password do not match")
            return
        }

        register({userName, email, password});
    }

    return (
        <Layout title="User Registration">
            <div className={styles.auth}>
                <h1><FaUser/> Register</h1>
                <ToastContainer/>

                <form onSubmit={handlerSubmit}>
                    <div>
                        <label htmlFor="userName">Name</label>
                        <input type="text" id="userName" value={userName} onChange={(e) => {setUserName(e.target.value)}} />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" value={email} onChange={(e) => {setEmail(e.target.value)}} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={password} onChange={(e) => {setPassword(e.target.value)}} />
                    </div>
                    <div>
                        <label htmlFor="passwordConfirm">Confirm Password</label>
                        <input type="password" id="passwordConfirm" value={passwordConfirm} onChange={(e) => {setPasswordConfirm(e.target.value)}} />
                    </div>
                    <input type="submit" value="Login" className="btn" />
                </form>

                <p>Already have a account? <Link href="/account/login" >Login</Link></p>
            </div>
        </Layout>
    )
}

export default Register