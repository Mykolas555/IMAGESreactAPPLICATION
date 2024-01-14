import { XCircle } from "react-bootstrap-icons";
import './images.scss';

const Images = ({ image, onDelete }) => {
    const deleteHandler = async () => {
        try {
            await onDelete(image.id);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <img className="imagesInContent" src={image.url} alt={image.description} />      
            {/*<p>{image.description}</p>
            <XCircle onClick={deleteHandler} />*/}
      </>
    );
};

export default Images;
