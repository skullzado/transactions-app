import { Box, Modal, Typography } from '@mui/material';

type Props = {
  title: string;
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
};

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: 2,
};

const ModalContainer = ({ title, open, handleClose, children }: Props) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
    >
      <Box sx={style}>
        <Typography
          variant="body1"
          fontSize={24}
          fontWeight={700}
        >
          {title}
        </Typography>
        {children}
      </Box>
    </Modal>
  );
};

export default ModalContainer;
