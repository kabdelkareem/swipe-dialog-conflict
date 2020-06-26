import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css'; 
import 'slick-carousel/slick/slick.css';
import SimpleDialog from './SimpleDialog';

const withStyle = (theme) => ({
  main: {
      zIndex: 0,
      width: '100%',
      overflow: 'hidden',
  },
  slideContainer: {
      height: '90%'
  },
  slideItem: {
    display: 'flex !important',
    flexDirection: 'column',
    margin: '3rem'
  },
  center: {
    display: 'flex',
    justifyContent: 'center'
  }
});

function App({classes}) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState('Please select an email from the dialog');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };
  
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: classes.slideContainer
  };

  return (
    <React.Fragment>
      <Slider {...settings}>
        { 
          [1, 2, 3, 4, 5].map(ele => {
            return (
              <div key={ele} className={classes.slideItem}>
                <Typography variant="subtitle1" className={classes.center}>Selected: {selectedValue}</Typography>
                <div className={classes.center}>
                  <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                    Open simple dialog {ele}
                  </Button>
                </div>
              </div>
            );
          })
        }
      </Slider>
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
    </React.Fragment>
  );
}

export default withStyles(withStyle)(App);
