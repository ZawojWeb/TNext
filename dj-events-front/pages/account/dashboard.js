import DashboardEvent from "@/components/DashboardEvent"
import { Layout } from "@/components/Layout"
import { API_URL } from "@/config/index"
import { parseCookies } from "@/helpers/index"
import styles from '@/styles/Dashboard.module.css'

const DashboardPage = ({events}) => {
    const deleteEvent = (id) =>{
        console.log(id)
    }
    return (
        <Layout title="User Dashboard">
            <div className={styles.dash}>
                <h1>Dashboard</h1>
                <h3>My events</h3>
                {events.map((evt) => (
                    <DashboardEvent key={evt.id} evt={evt} handleDelete={deleteEvent}/>
                ))}
            </div>
        </Layout>
    )
}

export default DashboardPage


export async function getServerSideProps({req}){
    const {token} = parseCookies(req)

    const res = await fetch(`${API_URL}/events/me`, {
        method: "GET",
        headers:{
            Authorization: `Bearer ${token}`,
        }
    })
    const events = await res.json();
    
    return {
        props:{
            events
        },
    }
}