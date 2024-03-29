import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import * as service from '../../services/CrudServices';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../services/AuthServices';
import { useNavigate } from 'react-router-dom';

const AddImage = () => {
  const [showModal, setShowModal] = useState(true);

  const navigate = useNavigate();

  const [user] = useAuthState(auth);

  const [items, setItems] = useState({
    description: '',
    url: '',
    uid: '',
  });

  const handleChange = (e) => {
    setItems({
      ...items,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    if (!items.url.startsWith('https://') && !items.url.startsWith('http://')) {
      alert('Neiteisinga nuoroda į nuotrauką...')
      return
    }
    service.addImage({ ...items, uid: user.uid });
    navigate('/gallery');
    setShowModal(false);
  };

  const handleClose = () => {
    setShowModal(false);
    navigate('/gallery');
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Pridėkite nuotrauką</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="card-body">
          <form className="form" onSubmit={handleSaveChanges}>
            <div className="mb-3">
              <label htmlFor="input">Nuotraukos komentaras</label>
              <input className="form-control" type="input"
                name="description" onChange={handleChange} value={items.description}/>
            </div>
            <div className="mb-3">
              <label htmlFor="input">Nuotraukos URL</label>
              <input className="form-control" type="input"
                name="url" onChange={handleChange} value={items.url}/>
            </div>
          </form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit" onClick={handleSaveChanges}>Išsaugoti</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddImage;
