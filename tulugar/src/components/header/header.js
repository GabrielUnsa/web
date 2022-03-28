import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './header.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className="navbar">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Tu Lugar en Salta
          </Typography>
          <Button color="inherit">Departamentos</Button>
          <Button color="inherit">Ubicaciones</Button>
          <Button color="inherit">Servicios</Button>
          <Button color="inherit">Quienes Somos</Button>
          <Button color="inherit">Contactenos</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

