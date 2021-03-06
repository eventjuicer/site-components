import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { onlyUpdateForKeys, compose } from 'recompose';
import boothStyles from './boothStyles'

const Booth = ({
  status,
  data,
  classes,
  onClick,
  selected,
  zoom,
  buyer,
  groupId,
  defaultSize,
  legend,
  style
}) => {

  if(!data.ti){
    status = "unavailable"
  }

  const width = data.dw > 0 ? data.dw : defaultSize;
  const height = data.dh > 0 ? data.dh : defaultSize;

  zoom = Math.max(1, zoom);


  return (
    <li
      onClick={() => onClick(data.id, data.g, data.ti)}
      className={
        classNames(
        classes.booth,
        classes[style],
      {
        [classes.boothSold]: status === 'sold',
        [classes.boothHold]: status === 'hold',
        [classes.boothUnavailable]: status === 'unavailable',
        [classes.boothSelected]: selected,
        [classes.boothOnLegend] : legend
      }
      )}
      style={{
        height: height * zoom,
        width: width * zoom,
        top: "dt" in data ? data.dt * zoom : "auto",
        left: "dl" in data ? data.dl * zoom : "auto",
      //  lineHeight: `${data.dh}px`,
      }}
    >
      <span
        className={classNames(classes.boothText, {
          [classes.boothLogotype]: buyer && 'logotype' in buyer && buyer.logotype
        })}
      >
        {status === 'hold' ? "R" : data.ti}
  
        {buyer && 'cname2' in buyer && zoom > 1 ? (
          <span className={classes.cname}>{buyer.cname2}</span>
        ) : null}
      </span>
    </li>
  );

}

Booth.defaultProps = {
  selected: false,
  zoom: 1,
  legend : false
};

Booth.propTypes = {
  groupId: PropTypes.number.isRequired,
  defaultSize : PropTypes.number.isRequired,
  zoom: PropTypes.number,
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  status: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  data: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  style: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};

const enhance = compose(
 // onlyUpdateForKeys(['status', 'selected', 'groupId', 'defaultSize']),
  withStyles(boothStyles)
);

export default enhance(Booth);
