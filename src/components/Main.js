import React from 'react'
import  Grid from '@material-ui/core/Grid'
import { Divider, Typography } from '@material-ui/core'
export const Main = () => {
    return (
     
           <Grid item xs={12} md={8}   >

           <Typography variant="h6" gutterBottom>
               From the firehose
           </Typography>
           <Divider/>

           <main>
               <Typography variant="h4" >Sample blog post</Typography>
                 <Typography variant='subtitle1'>April 1, 2020 by Olivier</Typography>
               This blog post shows a few different types of content that are supported and styled with Material styles. Basic typography, images, and code are all supported. You can extend these by modifying Markdown.js.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.

Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.

Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
           </main>
          </Grid>
      
    )
}
