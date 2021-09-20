import Link from "next/link"
import Image from 'next/image'
import styles from '@/styles/EventItem.module.css'

const EventItem = ({evt}) => {
    return (
        <div className={styles.event}>
            <div className={styles.img}>
                <Image src={evt.image ? evt.image : '/image/event-default.png'} width={170} height={100} />
            </div>
            <div className={styles.info}>
                <p>{evt.date} at {evt.time}</p>
                <h3>{evt.name}</h3>
            </div>

            <div className={styles.link} >
                <Link href={`/events/${evt.slug}`}>
                    <a className="btn">Details</a>
                </Link>
            </div>
        </div>
    )
}

export default EventItem
