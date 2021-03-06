import React from 'react';
import Sharer from './Sharer';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import compose from 'recompose/compose';
import _get from 'lodash/get';

import { translate } from '../i18n';
import { getInviteOgImage } from '../helpers';
import MyTypography from './MyTypography';

const styles = theme => ({
  root: {
    marginTop: 50
  },

  image: {
    width: '100%',
    height: 'auto',
    margin: 20,
   // filter: 'grayscale(100%)',

    [theme.breakpoints.down('sm')]: {
      //    maxWidth : 300,
    }
  }
});

const Invite = ({ person, classes }) => {
  return (
    <div className={classes.root}>
      <Grid container spacing={6}>
        <Grid item md={5} sm={6} xs={12}>
          <div style={{ marginTop: 20 }}>
            <MyTypography template="subtitle">
              {_get(person, 'fname')}, 
              let your friends know that you support E-commerce Berlin Expo! 
            </MyTypography>

            <Sharer url={`/invite,${person.id}`} />
          </div>
        </Grid>

        <Grid item md={7} sm={6} xs={12}>
          <img
            src={getInviteOgImage(
              `See You! ${_get(person, 'fname', '')} from ${_get(person, 'cname2')}.`
            )}
            alt=""
            className={classes.image}
          />
        </Grid>
      </Grid>
    </div>
  );
};

Invite.defaultProps = {
  person: {}
};

const enhance = compose(
  withStyles(styles),
  translate
);

export default enhance(Invite);
