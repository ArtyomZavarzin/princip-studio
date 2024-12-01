import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';

const chatId = '-1002385660054';
const token = '7727678973:AAHAiRvpUsSRVEl0Qhgnrj2-6EA7sAMfCQk';
const apiUrl = `https://api.telegram.org/bot${token}/sendMessage`;

export const OrderBtn = ({ large = false }) => {
  const [number, setNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [open, setOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };

  useEffect(() => {
    if (open) {
      setNumber('');
    }
  }, [open]);
  const onSend = () => {
    handleCloseSnackbar();
    setIsError(false);

    const message = `У вас новая заявка!\n\nТелефон: ${number}`;
    setIsLoading(true);
    axios
      .post(apiUrl, {
        chat_id: chatId,
        parse_mod: 'html',
        text: message,
      })
      .then(() => {})
      .catch((error) => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
        handleClose();
        setOpenSnackbar(true);
      });
  };

  return (
    <>
      <Typography
        sx={{
          width: 'fit-content',
          fontSize: large ? '2.5rem' : '1.5rem',
          fontWeight: '700',
          background: '-webkit-linear-gradient(#933AFF, #46009C)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          cursor: 'pointer',
        }}
        onClick={handleOpen}
      >
        Оставить заявку
      </Typography>
      <Dialog
        maxWidth='sm'
        open={open}
        onClose={handleClose}
        PaperProps={{
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
          sx: {
            borderRadius: '26px',
          },
        }}
      >
        <DialogTitle>Оставьте заявку</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Добавьте информацию о себе и мы с свяжемя вами
          </DialogContentText>
          <TextField
            color='gray'
            autoFocus
            margin='dense'
            id='phone'
            name='phone'
            label='Телефон'
            fullWidth
            variant='standard'
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color='gray'
            sx={{
              textTransform: 'initial',
            }}
          >
            Отмена
          </Button>
          <Button
            variant='contained'
            sx={{
              backgroundColor: '#933AFF',
              borderRadius: '30px',
              marginLeft: '20px !important',
              textTransform: 'initial',
            }}
            onClick={onSend}
            disabled={number.length === 0 || isLoading}
          >
            {isLoading ? 'Отправка...' : 'Отправить'}
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={!isError ? 'success' : 'error'}
          variant='filled'
          sx={{ width: '100%', borderRadius: '30px' }}
        >
          {!isError ? 'Заявка отправлена' : 'Ошибка'}
        </Alert>
      </Snackbar>
    </>
  );
};
