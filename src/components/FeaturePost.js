import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import image from '../assets/pic.jfif'
const useStyles = makeStyles({
 card:{
     display:'flex'
 },
 cardDetails:{
    flex:1
 }
});

export const FeaturePost = () => {
    const classes = useStyles()
    return (
      
           <Grid container direction='row' spacing={2}>
                <Grid item xs={12} md={6}>

                
                <CardActionArea component='a' href='#'>
                    <Card className={classes.card}>
<div className={classes.cardDetails}>
    <CardContent>
    <Typography component='h2' variant='h5'>Feature Post</Typography>
    <Typography variant='subtitle1' color='textSecondary'>Nov12</Typography>
     <Typography variant='subtitle1' paragraph>This is a wider card with supporting text below as a natural lead-in to additional content</Typography>
      <Typography variant="subtitle1" color="primary">
                Continue reading...
              </Typography>
</CardContent>
</div>
<Hidden xsDown>
    <CardMedia className={classes.cardMedia} image={`${'https://source.unsplash.com/random'}`} title='some image' />
</Hidden>
                    </Card>
                </CardActionArea>
                
            </Grid>
             <Grid item xs={12} md={6}>

                
                <CardActionArea component='a' href='#'>
                    <Card className={classes.card}>
<div className={classes.cardDetails}>
    <CardContent>
    <Typography component='h2' variant='h5'>Feature Post</Typography>
    <Typography variant='subtitle1' color='textSecondary'>Nov12</Typography>
     <Typography variant='subtitle1' paragraph>This is a wider card with supporting text below as a natural lead-in to additional content</Typography>
      <Typography variant="subtitle1" color="primary">
                Continue reading...
              </Typography>
</CardContent>
</div>
<Hidden xsDown>
    <CardMedia className={classes.cardMedia} image={`${'https://source.unsplash.com/random'}`} title='some image' />
</Hidden>
                    </Card>
                </CardActionArea>
                
            </Grid>
           </Grid>
       
    )
}
