import { Modal, Box } from '@mui/material';
import Button from '../Button';

export const CustomModal = ({ isOpen, onClose, children }) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 4,
          border: 'none',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'white',
          height: '22rem',
          width: '46rem',
          boxShadow: 24,
          p: 4,
          borderRadius: '8px',
        }}
      >
        {children}
        <Button onClick={onClose} variant='regular' label='Zamknij' />
      </Box>
    </Modal>
  );
};
