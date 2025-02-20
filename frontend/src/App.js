import React from "react";
import {Typography,Table,TableBody,TableCell,TableRow,TableHead,MenuItem,Link,Box,AppBar,Toolbar,IconButton,Button, Container} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Logo from './assets/logo.png';
import Refer from './assets/Anniversary.png';
import Process from './assets/mainImg.png';
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
import data1 from './assets/table1.js';
import data2 from './assets/table2.js';
import FormModal from './Components/modalForm.jsx';
import SchoolIcon from '@mui/icons-material/School';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import DescriptionIcon from '@mui/icons-material/Description';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

function App() {
  const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <img alt="Company Logo" src={Logo}  />
          <Button variant="contained" sx={{ml:2}} color="primary" size="small">
          <Typography  sx={{textTransform:'none'}} variant="button">
          Courses 
          </Typography><ArrowDropDownSharpIcon /></Button>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Link href="#" underline="none">
            <Typography  variant="body2" color="black" sx={{textTransform:'none'}} variant="link">
            Refer & Earn
            </Typography></Link>
            <Link href="#" underline="none">
            <Typography  variant="body2" color="black" sx={{textTransform:'none'}} variant="link">Resources</Typography></Link>
            <Link href="#" underline="none">
            <Typography  variant="body2" color="black" sx={{textTransform:'none'}} variant="link">About Us</Typography></Link>
            <Button variant="contained" color="secondary" size="small">
            <Typography  sx={{textTransform:'none'}} variant="button">
            Login</Typography>
            </Button> 
            <Button variant="contained" color="primary" size="small">
            <Typography  sx={{textTransform:'none'}} variant="button">
            Try for free
            </Typography></Button>
          </Box>
        </Toolbar>
      </AppBar>
      {/*hero*/}
      <Box>
      <Container maxWidth="sm">
        <AppBar
          position="relative"
          sx={{
            boxShadow: 10,
            mt: 2,
            borderRadius: "999px",
          }}
        >
          <Toolbar
            variant="regular"
            sx={{
              display: "flex",
              alignItems: "center",
              bgcolor: "#EEF5FF",
              justifyContent: "center",
              flexShrink: 0,
              borderRadius: "999px",
              maxHeight: 40,
              border: "1px solid",
              borderColor: "divider",
              
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                width: "100%",
              }}
            >
              <MenuItem sx={{ py: "2px", px: "12px"}}>
                <Typography variant="body2" sx={{color: 'text.primary',
                  '&:hover': {
                    color: 'primary.main',
                  }}}>
                  Refer
                </Typography>
              </MenuItem>
              <MenuItem sx={{ py: "2px", px: "12px" }}>
              <Typography variant="body2" sx={{color: 'text.primary',
                  '&:hover': {
                    color: 'primary.main',
                  }}}>
                  Benefits
                </Typography>
              </MenuItem>
              <MenuItem sx={{ py: "2px", px: "12px" }}>
              <Typography variant="body2" sx={{color: 'text.primary',
                  '&:hover': {
                    color: 'primary.main',
                  }}}>
                  FAQs
                </Typography>
              </MenuItem>
              <MenuItem sx={{ py: "2px", px: "12px" }}>
              <Typography variant="body2" sx={{color: 'text.primary',
                  '&:hover': {
                    color: 'primary.main',
                  }}}>
                  Support
                </Typography>
              </MenuItem>
            </Box>
          </Toolbar>
        </AppBar>
      </Container>
    </Box>
    {/*banner*/}
    <Box sx={{ mt: 2 }}>
      <Container
        maxWidth="md"
        sx={{
          boxShadow: 3,
          borderRadius: '16px',
          overflow: 'hidden',
          p: 2,
          bgcolor: '#EEF5FF',
        }}
      >
        <Grid container>
          <Grid item xs={5}>
            <Grid container spacing={2} direction="column" justifyContent="center">
              <Grid item xs={12}>
                <Typography color="black" variant="h3" sx={{ textTransform: 'none' }}>
                  Let's Learn
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography color="black" variant="h3" sx={{ textTransform: 'none' }}>
                  & Earn
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography color="black" variant="h5" sx={{ textTransform: 'none' }}>
                  Get a chance to win
                </Typography>
              </Grid>
              <Grid item xs={12} container spacing={1} alignItems="center">
                <Grid item>
                  <Typography color="black" variant="h5" sx={{ textTransform: 'none' }}>
                    up-to
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography color="primary" variant="h4" sx={{ textTransform: 'none' }}>
                    Rs. 15,000
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={12} sx={{ mt: 3 }}>
                <Button  onClick={handleOpen} variant="contained" color="primary" size="medium">
                  <Typography sx={{ textTransform: 'none' }} variant="button">
                    Refer Now
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={7}>
            <Box
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                style={{
                  width: '100%',
                  position: 'relative',
                  bottom: '-30px',
                  objectFit: 'cover',
                }}
                src={Refer}
                alt="Refer Image"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
    {/*process*/}
    <Box sx={{ mt: 2, py: 3, bgcolor: '#EEF5FF', width: '100%' }}>
  <Container maxWidth="md" sx={{ position: 'relative' }}>
    <Box component="img"
      src={Process}
      alt="processImg"
      sx={{
        width: '100%',
        position: 'relative',
        objectFit: 'cover',
        mt: 5,
        mb: 5,
      }}
    />

    {/* Content for the first circle */}
    <Box sx={{
      position: 'absolute',
      display:'flex',
      top: '40%',
      left: '23%',
      transform: 'translate(-50%, -50%)',
      p: 2,
      borderRadius: '50%',
      textAlign: 'center'
    }}>
      <PersonAddAlt1Icon color="primary" size="large"/>
    </Box>

    {/* Content for the second circle */}
    <Box sx={{
      position: 'absolute',
      display:'flex',
      top: '40%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      p: 2,
      borderRadius: '50%',
      textAlign: 'center'
    }}>
      <DescriptionIcon color="primary" size="large"/>
    </Box>

    {/* Content for the third circle */}
    <Box sx={{
      position: 'absolute',
      display:'flex',
      top: '40%',
      left: '76%',
      transform: 'translate(-50%, -50%)',
      p: 2,
      borderRadius: '50%',
      textAlign: 'center'
    }}>
      <AccountBalanceWalletIcon color="primary" size="large"/>
    </Box>

    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
      <Button onClick={handleOpen} variant="contained" color="primary" size="medium">
        <Typography sx={{ textTransform: 'none' }} variant="button">
          Refer Now
        </Typography>
      </Button>
    </Box>
  </Container>
</Box>

    {/*benefits*/}
    <Box sx=
       {{mt:2, width: '100%' }}>
        <Container maxWidth="md" sx={{mt:5}}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, mb:5}}>
            <Typography sx={{ textTransform: 'none' }} variant="h5">
              What are the  
            </Typography>
            <Typography sx={{ textTransform: 'none' ,ml:1}} variant="h5" color="primary">
              Referral Benefits?
            </Typography>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={4}>
          <Box
          sx={{
            boxShadow: 10,
            mt: 2,
            borderRadius: '20px',
            overflow: 'hidden',
          }}
        >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell  sx={{ bgcolor: 'primary.main' }}>All Programs</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data1.map((row) => (
                  <TableRow key={row.index}>
                    <TableCell>{row.name}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            </Box>
          </Grid>
          <Grid item xs={8}>
          <Box
          sx={{
            boxShadow: 10,
            mt: 2,
            borderRadius: '20px',
            overflow: 'hidden',
          }}
        >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell  sx={{ bgcolor: 'primary.main' }}>Programs</TableCell>
                  <TableCell  sx={{ bgcolor: 'primary.main' }}>Referrer Bonus</TableCell>
                  <TableCell  sx={{ bgcolor: 'primary.main' }}>Referee Bonus</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data2.map((row) => (
                  <TableRow key={row.index}>
                    <TableCell><SchoolIcon/> {row.program}</TableCell>
                    <TableCell>{row.referrerBonus}</TableCell>
                    <TableCell>{row.refereeBonus}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            </Box>
          </Grid>
        </Grid>

        </Container>
       </Box>

       <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6, mb:3}}>
          <Button  onClick={handleOpen} variant="contained" color="primary" size="medium">
            <Typography sx={{ textTransform: 'none' }} variant="button">
              Refer Now
            </Typography>
          </Button>
        </Box>
        {open && <FormModal 
          open={open}
          handleClose={handleClose}
        />}

<Box
  sx={{
    width: '100%',
    bgcolor: 'black',
    py: 3,
    mt: 5,
  }}
>
  <Container maxWidth="md">
    <Typography variant="body2" color="white" align="center">
      © {new Date().getFullYear()} Your Company. All rights reserved.
    </Typography>
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
      <Link href="#" sx={{ color: 'transparent', mx: 1 }}>
        <Typography color='white' sx={{textTransform:'none', mx: 1 }} variant="body2">Privacy Policy</Typography>
      </Link>
      <Link href="#" sx={{ color: 'transparent', mx: 1 }}>
        <Typography color='white' sx={{textTransform:'none', mx: 1 }} variant="body2">Terms of Service</Typography>
      </Link>
      <Link href="#">
        <Typography color='white' sx={{textTransform:'none', mx: 1 }} variant="body2">Contact Us</Typography>
      </Link>
    </Box>
  </Container>
</Box>

    </Box>
  );
}

export default App;
