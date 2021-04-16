
import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Grid,Paper,Typography } from '@material-ui/core'

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
       </Grid>
    )
}
