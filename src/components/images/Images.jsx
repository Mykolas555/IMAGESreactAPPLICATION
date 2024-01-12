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
            <div className="images">
                <div className="images__image">
                    <img src={image.url} alt={image.description} />
                </div>
                <div className="images__description">
                    <p>{image.description}</p>
                    <XCircle onClick={deleteHandler} />
                </div>
            </div>
      </>
    );
};

export default Images;
