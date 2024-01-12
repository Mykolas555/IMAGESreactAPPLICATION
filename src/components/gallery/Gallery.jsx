import { Container, Row, Col } from "react-bootstrap";
import './gallery.scss';
import Images from "../images/Images";
import { useState, useEffect } from "react";
import * as service from "../../services/TimesCrudServices";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../../services/AuthServices";
import './galleryP1.scss';

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [user, loading] = useAuthState(auth);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                if (user) {
                    const fetchedImages = await service.getAllImages(user);
                    setImages(fetchedImages);
                }
            } catch (error) {
                console.error(error);
            }
        };

        if (!loading) {fetchImages();}
    }, [user, loading]);

    const handleDelete = async (imageId) => {
        try {
            await service.deleteImage(imageId);
            setImages(prevImages => prevImages.filter(image => image.id !== imageId));
        } catch (error) {
            console.error("Error deleting image:", error);
        }
    };

    return (
        <>
            <Container className="gallery">
                <Row>
                    <Col xl={12} sm={12} className="gallery__header">
                        <h2>Jūsų Galerija</h2>
                    </Col>
                </Row>
            </Container>
            <div className="gallery__content">
                {images.map(image => (
                    <Images key={image.id} image={image} onDelete={handleDelete} />
                ))}
            </div>
        </>
    );
};

export default Gallery;
