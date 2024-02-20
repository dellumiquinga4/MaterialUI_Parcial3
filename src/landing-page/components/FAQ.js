import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Formulario from './Form';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQ() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container
      id="faq"
      sx={{
        pt: { xs: 4, sm: 12 },
        py: { xs: 8, sm: 16 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
    <Typography
        component="h2"
        variant="h4"
        color="text.primary"
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        Contacto y Preguntas Frecuentes
      </Typography>
    <Grid container spacing={6}>
      <Grid item xs={12} md={6}>
        <Box sx={{ width: '100%' }}>
          <Accordion
            expanded={expanded === 'panel1'}
            onChange={handleChange('panel1')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography component="h3" variant="subtitle2">
                ¿Cuáles son tus áreas de especialización o habilidades principales?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ maxWidth: { sm: '100%', md: '70%' } }}
              >
                Mi enfoque principal se centra en desarrollo web, redes, etc. Tengo experiencia en .Net, Node.js, Python, React, y estoy constantemente aprendiendo y mejorando mis habilidades para ofrecer soluciones efectivas.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel2'}
            onChange={handleChange('panel2')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography component="h3" variant="subtitle2">
              ¿Cómo puedo contactarte para colaborar en un proyecto?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ maxWidth: { sm: '100%', md: '70%' } }}
              >
                Me pueden contactar mediante el siguinte correo institucional
                <Link> dellumiquinga4@espe.edu.ec </Link>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel3'}
            onChange={handleChange('panel3')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography component="h3" variant="subtitle2">
              ¿Qué proyectos destacados has realizado anteriormente?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ maxWidth: { sm: '100%', md: '70%' } }}
              >
                Tengo realizado de proyectos destacados incluyen Proyecto Veris lo hice en ph y .Net. Demuestro mi capacidad para el manejo de .Net y base de datos como SQL Server. Puedes explorar más detalles sobre estos proyectos en la sección de "Proyectos" de este portafolio.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel4'}
            onChange={handleChange('panel4')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4d-content"
              id="panel4d-header"
            >
              <Typography component="h3" variant="subtitle2">
              ¿Estás disponible para empleo a tiempo completo?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ maxWidth: { sm: '100%', md: '70%' } }}
              >
                Sí,  estoy disponible a oportunidades de empleo a tiempo completo. Mi disponibilidad puede variar, así que te recomiendo que me contactes para discutir los detalles específicos y ver cómo puedo adaptarme a tus necesidades requeridas ya que soy una chica que se adapta rapido.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
        </Grid>
        <Grid item xs={12} md={6}>
        <Box sx={{ width: '100%' }}>
          <Formulario></Formulario>
        </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
