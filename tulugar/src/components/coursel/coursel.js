
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import c1 from '../../assets/img/coursel/8A_1.jpg';
import c2 from '../../assets/img/coursel/8A_2.jpg';
import c3 from '../../assets/img/coursel/Alvarado2A_1.jpg';
import c4 from '../../assets/img/coursel/Alvarado2A_2.jpg';
import c5 from '../../assets/img/coursel/Alvarado3A_1.jpg';
import c6 from '../../assets/img/coursel/Alvarado3A_2.jpg';
import c7 from '../../assets/img/coursel/Gorriti5D_1.jpg';
import c8 from '../../assets/img/coursel/Gorriti5D_2.jpg';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: '8A_1',
    imgPath: c1,
  },
  {
    label: '8A_2',
    imgPath: c2,
  },
  {
    label: 'Alvarado2A_1',
    imgPath: c3,
  },
  {
    label: 'Alvarado2A_2',
    imgPath: c4,
  },
  {
    label: 'Alvarado3A_1',
    imgPath: c5,
  },
  {
    label: 'Alvarado3A_2',
    imgPath: c6,
  },
  {
    label: 'Gorriti5D_1',
    imgPath: c7,
  },
  {
    label: 'Gorriti5D_2',
    imgPath: c8,
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <React.Fragment>
      <Container>
        <Grid container justifyContent="center" >
          <AutoPlaySwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Card> 
                <CardMedia
                  component="img"
                  image={step.imgPath}
                  alt={step.label}
                />
              </Card>
            ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
      </Grid>
      <Grid container justifyContent="center">
        <MobileStepper
        steps={maxSteps}
        position="center"
        activeStep={activeStep}
        />
      </Grid>
     </Container>
   </React.Fragment>
  );
}

export default SwipeableTextMobileStepper;
