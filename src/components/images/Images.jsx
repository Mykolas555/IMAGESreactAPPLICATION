import React, { useState } from 'react';
import ImageModal from '../imageModal/ImageModal';

const Images = ({ image, onDelete }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openImageInModal = () => {
        setModalOpen(true);
    };

    return (
        <>
            <img onClick={openImageInModal} className="imageItem" src={image.url} alt={image.description} />
            {isModalOpen && <ImageModal image={image} onDelete={onDelete} onClose={() => setModalOpen(false)} />}
        </>
    );
};

export default Images;
