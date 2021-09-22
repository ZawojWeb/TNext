import { Layout } from "@/components/Layout"
import { API_URL } from '@/config/index'
import { useRouter } from "next/router";
import EventItem from '@/components/EventItem';
import qs from 'qs'
import Link from "next/link";


const SearchPage = ({events}) => {

    const router = useRouter();

    return (
        <Layout title="Search Results">
            <Link href="/events"><a>Go Back</a></Link>
            <h1>Search Evnets Result for <b>{router.query.term}</b></h1>
            {events.lenght === 0 && <h3>No events to show</h3>}
            {events.map(evt =>(
                <EventItem key={evt.id} evt={evt} />
            ))}
        </Layout>
    )
}

export default SearchPage

export async function getServerSideProps({query: {term}}) {

    const query = qs.stringify({
        _where:{
            _or:[
                {name_contains: term},
                {performers_contains: term},
                {description_contains: term},
                {venue_contains: term},
            ]
        } 
    })

    const res = await fetch(`${API_URL}/events?${query}`)
    const events = await res.json()
  
  
    return {
      props: {events}
    }
  }