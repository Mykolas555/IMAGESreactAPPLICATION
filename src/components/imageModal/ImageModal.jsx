import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ImageModal = ({ image, onDelete, onClose }) => {
    const handleDelete = async () => {
        try {
            await onDelete(image.id);
            onClose();
        } catch (error) {
            console.error(error);
        }
    };

    return (
            <Modal show={true} onHide={onClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{image.description}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={image.url} alt={image.description} style={{ width: '100%' }} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleDelete}>Ištrinti</Button>
                </Modal.Footer>
            </Modal>
    );
};

export default ImageModal;
