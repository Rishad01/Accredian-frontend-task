import * as React from 'react';
import {
  Box,
  Select,
  MenuItem,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  Input,
} from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import data2 from '../assets/table2.js';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function FormModal(props) {
  const [form, setForm] = React.useState({
    referrerName: '',
    referrerEmail: '',
    refereeEmail: '',
    program: '',
  });

  const [errors, setErrors] = React.useState({
    referrerName: '',
    referrerEmail: '',
    refereeEmail: '',
    program: '',
    submit: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Clear the specific field error when user starts typing
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      referrerName: '',
      referrerEmail: '',
      refereeEmail: '',
      program: '',
    };

    // Validate referrerName
    if (!form.referrerName.trim()) {
      newErrors.referrerName = 'Referrer Name is required';
      valid = false;
    }

    // Validate referrerEmail
    if (!form.referrerEmail.trim()) {
      newErrors.referrerEmail = 'Referrer Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(form.referrerEmail)) {
      newErrors.referrerEmail = 'Invalid email format';
      valid = false;
    }

    // Validate refereeEmail (optional)
    if (form.refereeEmail.trim()) {
      newErrors.refereeEmail = 'Referrer Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(form.refereeEmail)) {
      newErrors.refereeEmail = 'Invalid email format';
      valid = false;
    }


    // Validate program
    if (!form.program.trim()) {
      newErrors.program = 'Program is required';
      valid = false;
    }

    setErrors({ ...errors, ...newErrors });

    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await axios.post('https://accredian-backend-task-1gk1.onrender.com/referrals', form);
        console.log('Referral submitted successfully:', response.data);
        props.handleClose();
      } catch (error) {
        console.error('Error submitting referral:', error);
        setErrors({ ...errors, submit: 'Error submitting referral. Please try again.' });
      }
    }
  };

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FormControl fullWidth sx={{ mb: 2 }} error={!!errors.referrerName}>
            <InputLabel htmlFor="referrerName">Referrer Name</InputLabel>
            <Input
              id="referrerName"
              name="referrerName"
              value={form.referrerName}
              onChange={handleChange}
            />
            <FormHelperText>{errors.referrerName}</FormHelperText>
          </FormControl>
          <FormControl fullWidth sx={{ mb: 2 }} error={!!errors.referrerEmail}>
            <InputLabel htmlFor="referrerEmail">Referrer Email</InputLabel>
            <Input
              id="referrerEmail"
              name="referrerEmail"
              value={form.referrerEmail}
              onChange={handleChange}
            />
            <FormHelperText>{errors.referrerEmail}</FormHelperText>
          </FormControl>
          <FormControl fullWidth sx={{ mb: 2 }} error={!!errors.refereeEmail}>
            <InputLabel htmlFor="refereeEmail">Referee Email</InputLabel>
            <Input
              id="refereeEmail"
              name="refereeEmail"
              value={form.refereeEmail}
              onChange={handleChange}
            />
            <FormHelperText>{errors.refereeEmail}</FormHelperText>
          </FormControl>
          <FormControl fullWidth sx={{ mb: 2 }} error={!!errors.program}>
            <InputLabel id="program-label">Program</InputLabel>
            <Select
              labelId="program-label"
              id="program"
              name="program"
              value={form.program}
              label="Program"
              onChange={handleChange}
            >
              {data2.map((data) => (
                <MenuItem key={data.program} value={data.program}>
                  {data.program}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>{errors.program}</FormHelperText>
          </FormControl>
          <Button variant="contained" color="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
          {errors.submit && (
            <Typography variant="body2" color="error">
              {errors.submit}
            </Typography>
          )}
        </Box>
      </Modal>
    </div>
  );
}
