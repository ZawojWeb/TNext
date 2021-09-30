import { useState } from "react"
import { API_URL } from "@/config/index"
import styles from '@/styles/Form.module.css'

const ImageUpload = ({evtId, imageUploaded, token}) => {

    const [Image, setImage] = useState(null)

    const hanldeSubmit = async(e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('files', Image)
        formData.append('ref', 'events')
        formData.append('refId', evtId)
        formData.append('field', 'image')

        const res = await fetch(`${API_URL}/upload` , {
            method: 'POST',
            headers:{
                Authorization: `Bearer ${token}`
            },
            body: formData,
        })

        if(res.ok){
            imageUploaded();
        }
    }

    const hanldeFileChange = (e) =>{
        e.preventDefault();
        setImage(e.target.files[0])
    }

    return (
        <div className={styles.form}>
            <h1>Upload Event Image</h1>
            <form onSubmit={hanldeSubmit} >
                <div className={styles.file}>
                    <input type="file" onChange={hanldeFileChange}/>
                </div>
                <input type="submit" value="Upload" className="btn" />
            </form>
        </div>
    )
}

export default ImageUpload
