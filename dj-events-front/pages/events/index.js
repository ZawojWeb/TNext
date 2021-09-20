import { Layout } from "@/components/Layout"
import { API_URL } from '@/config/index'
import EventItem from '@/components/EventItem';
const EventsPage = ({events}) => {
    return (
        <Layout>
            <h1>Evnets</h1>
            {events.lenght === 0 && <h3>No events to show</h3>}

            {events.map(evt =>(
                <EventItem key={evt.id} evt={evt} />
            ))}
        </Layout>
    )
}

export default EventsPage

export async function getStaticProps() {
    const res = await fetch(`${API_URL}/api/events`)
    const events = await res.json()
  
  
    return {
      props: {events},
      revalidate: 1,
    }
  }