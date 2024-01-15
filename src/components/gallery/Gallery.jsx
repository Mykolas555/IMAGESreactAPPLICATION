import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../drag/Layout";
import Images from "../images/Images";
import * as service from "../../services/CrudServices";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../../services/AuthServices";
import './gallery.scss'
import GalleryAdd from "../galleryAdd/GalleryAdd";

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [user, loading] = useAuthState(auth);
    const [selectedStyle, setSelectedStyle] = useState("");

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
        if (!loading) {
            fetchImages();
        }
    }, [user, loading]);

    const handleStyleClick = (style) => {
        setSelectedStyle(style);
    };

    const handleDelete = async (imageId) => {
        try {
            await service.deleteImage(imageId);
            setImages(prevImages => prevImages.filter(image => image.id !== imageId));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
        <Layout selectedStyle={selectedStyle} onStyleClick={handleStyleClick} />
            <Container className="gallery">
                <Row className="mx-4">
                    <Col sm={12} className="gallery__header mb-2">
                        <h2>Jūsų Galerija</h2>
                    </Col>
                    <div className="gallery__frame">
                    <GalleryAdd/>
                        <Col className={`gallery__content${selectedStyle} mb-4`}>
                            {images.map(image => (
                                <Images key={image.id} image={image} onDelete={handleDelete} />
                                ))}
                        </Col>
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default Gallery;
