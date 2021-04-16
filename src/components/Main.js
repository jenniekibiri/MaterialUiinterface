import React from 'react'
import  Grid from '@material-ui/core/Grid'
import { Divider, Typography } from '@material-ui/core'
export const Main = () => {
    return (
       <Grid container xs={12} md={4}   >

           <Typography variant="h6" gutterBottom>
               From the firehose
           </Typography>
           <Divider/>
       </Grid>
    )
}
