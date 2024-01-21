import { useEffect, useState, useCallback } from 'react';
import emailjs from '@emailjs/browser';
import ContactUI from '../components/ContactUI';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [refs, setRefs] = useState({});

  useEffect(() => emailjs.init('U9sCxq8aC60I3J1e3'), []);

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
      alert('Sukces wysłania emaila');
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContactUI onSubmit={handleSubmit} loading={loading} updateParentRefs={updateParentRefs} />
  );
};

export default Contact;
