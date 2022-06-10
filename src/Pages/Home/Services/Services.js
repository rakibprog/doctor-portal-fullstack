import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import  fluoride from '../../../images/fluoride.png';
import  cavitiy from '../../../images/cavity.png';
import  whitening from '../../../images/whitening.png';
import Service from '../Service/Service';
import Typography from '@mui/material/Typography'

  const services = [
      {
            name:'Fluoride Treatment',
            description:'Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a person s teeth to improve health and reduce the risk of cavities. These in-office treatments may take the form of a solution, gel, foam, or varnish',
            img:fluoride

      },
      {
          name:'Cavity Filling',
          description:'Fillings treat tooth decay, preventing further damage and tooth loss, as well as the possibility of pain and infection. A filling seals a hole, or cavity, in the tooth',
          img:cavitiy

      },
       {
           name:'Teath Whitening',
           description:'There are many teeth whitening systems and products, including whitenin',
           img:whitening
       }
       
  ]

const Services = () => {
    return (
    <Box sx={{ flexGrow: 1 }}>
        <Container>
            <Typography sx={{ textAlign: 'center' }} variant="h5" component="div">
                        Our Services
            </Typography>
            <Typography sx={{ textAlign: 'center'}} variant="h2" component="div">
                        Services We Provide
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {services.map(service=> <Service key={service.name} service={service}></Service>)}
             </Grid>
    </Container>
      
    </Box>
    );
};

export default Services;