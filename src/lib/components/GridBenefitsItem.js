import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from './MyTypography'
import Markdown from './Markdown'


const styles = theme => ({

  container : {
    display: 'flex',
    flexDirection : 'row',
  //  alignItems : 'center'
    marginBottom : 30,
    [theme.breakpoints.up('md')]: {
      marginBottom : 60,
    },
  },

  iconContainer : {

  //  width: 150
  },



  texts : {
    marginLeft : 30
  }

})

const GridBenefitsItem = ({classes, icon, label}) => {


    return (

      <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>

        <div className={classes.container}>

          <div className={classes.iconContainer}>
         {icon}
          </div>

          <div className={classes.texts}>
            
            <Typography template="benefitsTitle" label={`${label}.title`} />

            {/* <Typography template="benefitsText" label={`${label}.description`} /> */}

            <Markdown label={`${label}.description`} />

          </div>

        </div>

      </Grid>

    ) 

}


GridBenefitsItem.defaultProps = {
  label : ""
}

export default withStyles(styles)(GridBenefitsItem)
