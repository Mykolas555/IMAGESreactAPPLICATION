import { Col } from "react-bootstrap";
import { XCircle } from "react-bootstrap-icons";

const Images = ({ image, onDelete }) => {
    const deleteHandler = async () => {
        try {
            await onDelete(image.id);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Col>
            <img src={image.url} alt={image.description} />
            <p>{image.description}</p>
            <XCircle onClick={deleteHandler} />
        </Col>
    );
};

export default Images;
