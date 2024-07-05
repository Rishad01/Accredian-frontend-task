import * as React from 'react';
import {Box,Select,MenuItem,FormControl,FormControlLabel,FormHelperText,InputLabel,Input} from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import data2 from '../assets/table2.js';

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
        program: ''
      });

      const [errors, setErrors] = React.useState({});

      const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        //if (validate()) {
          // Handle form submission
          console.log(form);
          props.handleClose();
        //}
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
          <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel htmlFor="referrerName">Referrer Name</InputLabel>
              <Input id="referrerName" name="referrerName" value={form.referrerName} onChange={handleChange} />
              <FormHelperText error={!!errors.referrerName}>{errors.referrerName}</FormHelperText>
          </FormControl>
          <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel htmlFor="referrerEmail">Referrer Email</InputLabel>
              <Input id="referrerEmail" name="referrerEmail" value={form.referrerEmail} onChange={handleChange} />
              <FormHelperText error={!!errors.referrerEmail}>{errors.referrerEmail}</FormHelperText>
            </FormControl>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel htmlFor="refereeEmail">Referee Email</InputLabel>
              <Input id="refereeEmail" name="refereeEmail" value={form.refereeEmail} onChange={handleChange} />
              <FormHelperText error={!!errors.refereeEmail}>{errors.refereeEmail}</FormHelperText>
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
          </Box>
        </Modal>
      </div>
    );
  }