import { useNavigate } from 'react-router-dom'
import './galleryAdd.scss'

const GalleryAdd = () => {
    const navigate = useNavigate();

    const addPhotoToGallery = () => {
        navigate('/addImage')
    }

    return(
        <div className="galleryAdd" onClick={addPhotoToGallery}>
            <h1>+</h1>
        </div>
    )
}
export default GalleryAdd