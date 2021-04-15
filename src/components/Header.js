import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    //change the divider color
    borderBottom: `1px solid ${theme.palette.divider}`,

  },
   toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary:{
justifyContent:'space-between',
overflow:'auto'
  },
  toolbarLink:{
     flexShrink:0,
     padding:theme.spacing(1)

  }
}));
//check 
//flexshrink
//noWrap
//inherit

export const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <React.Fragment>
        <Toolbar className={classes.toolbar}>
          <Button>Subscribe</Button>
          <Typography component="h2" variant="h5" color="inherit" align="center"  noWrap className={classes.toolbarTitle} >
            Blog
          </Typography>
          <IconButton>
              <SearchIcon/>
          </IconButton>
          <Button variant='outlined' size='small'>SIGN UP</Button>
        </Toolbar>
        
        <Toolbar component='nav' variant="dense" className={classes.toolbarSecondary} >
<Link color='inherit' noWrap variant='body2' href='#' className={classes.toolbarLink}>Technology</Link>
<Link color='inherit' noWrap variant='body2' href='#' className={classes.toolbarLink}>Design</Link>
<Link color='inherit' noWrap variant='body2' href='#' className={classes.toolbarLink}>Culture</Link>
<Link color='inherit' noWrap variant='body2' href='#' className={classes.toolbarLink}>Business</Link>
<Link color='inherit' noWrap variant='body2' href='#' className={classes.toolbarLink}>Politics</Link>
<Link color='inherit' noWrap variant='body2' href='#' className={classes.toolbarLink}>Opinions</Link>
<Link color='inherit' noWrap variant='body2' href='#' className={classes.toolbarLink}>Science</Link>
<Link color='inherit' noWrap variant='body2' href='#' className={classes.toolbarLink}>Style</Link>
<Link color='inherit' noWrap variant='body2' href='#' className={classes.toolbarLink}>Travel</Link>
        </Toolbar>
      </React.Fragment>
    </div>
  );
};
