import { Layout } from "@/components/Layout"
import { API_URL } from "@/config/index"

const MyEventPage = ({evt}) => {
    return (
        <Layout>
            <h1>{evt.name}</h1>
        </Layout>
    )
}

export default MyEventPage

export async function getServerSideProps({query : {slug}}) {

    const res = await fetch(`${API_URL}/api/events/${slug}`)
    const events = await res.json();

    return{
        props:{
            evt: events[0]
        },
    }
}


//! SSG 

// export async function getStaticPaths(){

//     const res = await fetch(`${API_URL}/api/events`)
//     const events = await res.json()

//     const paths = events.map( evt => ({
//         params:{slug : evt.slug}
//     }));

//     return{
//         paths,
//         fallback: false
//     }
// }

// export async function getStaticProps({params : {slug}}) {

//     const res = await fetch(`${API_URL}/api/events/${slug}`)
//     const events = await res.json();

//     return{
//         props:{
//             evt: events[0],
//         },
//         revalidate: 1,
//     }
// }