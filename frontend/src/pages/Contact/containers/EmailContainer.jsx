import { useEffect, useState, useCallback } from 'react';
import emailjs from '@emailjs/browser';
import { Typography } from '@mui/material';
import ContactUI from '../components/ContactUI';
import { Modal } from '../../../shared/components/Modal';

export const EmailContainer = () => {
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [refs, setRefs] = useState({});

  useEffect(() => emailjs.init('U9sCxq8aC60I3J1e3'), []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const updateParentRefs = useCallback((references) => {
    setRefs((prevRefs) => ({ ...prevRefs, ...references }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = 'service_bry4wr4';
    const templateId = 'template_ss0xccj';
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        from_name: refs.nameRef.current.value,
        from_email: refs.emailRef.current.value,
        message: refs.messageRef.current.value,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setIsModalOpen(true);
    }
  };

  return (
    <>
      EMAIL UI HERE
      <ContactUI onSubmit={handleSubmit} loading={loading} updateParentRefs={updateParentRefs} />
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <Typography variant='headline'>Hurra! 🎉</Typography>
          <Typography variant='paragraph'>Twoja wiadomosc zostala wyslana.📨 ✨</Typography>
        </Modal>
      )}
    </>
  );
};
