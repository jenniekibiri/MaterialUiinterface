
import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Grid,Paper,Typography,Link } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter'
  const useStyles = makeStyles((theme) => ({
sidebarSection: {
    marginTop: theme.spacing(3),
  },
    sidebarAboutBox: {
    padding: theme.spacing(3),
    backgroundColor: theme.palette.grey[200],
  },
}));
export const Sidebar = () => {
    const classes= useStyles()
    return (
       <Grid item xs={12} md={4}>
<Paper className={classes.sidebarAboutBox}>
<Typography variant="h6" gutterBottom>
          About
        </Typography>
        <Typography>Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</Typography>
</Paper>
<Typography  variant="h6" className={classes.sidebarSection}>Archives</Typography>
<Link display='block'  variant="body1" href='#'>March 2020</Link>
<Link display='block'  variant="body1" href='#'>March 2020</Link>
<Link display='block'  variant="body1" href='#'>March 2020</Link>
<Link display='block'  variant="body1" href='#'>March 2020</Link>
<Link display='block' variant="body1" href='#'>March 2020</Link>
 <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Social
      </Typography>
    
       <Link>
      <Grid spacing={1} direction="row" align='center' container>
<Grid item><GitHubIcon/></Grid>
<Grid item>Github</Grid>
      </Grid>
      </Link>
    
      <Link>
      <Grid spacing={1} direction="row" align='center' container>
<Grid item><FacebookIcon/></Grid>
<Grid item>Facebook</Grid>
      </Grid>
      </Link>
      <Link>
      <Grid spacing={1} direction="row" align='center' container>
<Grid item><TwitterIcon/></Grid>
<Grid item>Twitter</Grid>
      </Grid>
      </Link>
       </Grid>
    )
}
