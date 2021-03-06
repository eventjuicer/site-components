import React from 'react';
import Link from 'next/link';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
//import classNames from 'classnames'
//import MyTypography from './MyTypography';
import { translate } from '../i18n';
import Button from '@material-ui/core/Button';

const styles = {
  dumb: {},

  textLink: {
    textDecoration: 'none',
    color: 'rgba(0, 0, 0, 0.87)'
  }
};

const MyLink = ({
  as,
  label,
  href,
  classes,
  translate,
  variant,
  color,
  size,
  icon,
  className,
  disabled,
  children
}) => {


  if(!href){
    return null
  }


  return (
    <Link as={as} href={href}>
      <Button
        size={size}
        variant={variant}
        color={color}
        disabled={disabled}
        className={className}>
        {label ? translate(label) : children}
      </Button>
    </Link>
  );
};

MyLink.defaultProps = {
  label: null,
  href : "/",
  variant: 'text',
  size: 'small',
  color: 'default',
  icon: false,
  disabled : false
};



const enhance = compose(
  translate,
  withStyles(styles)
);

export default enhance(MyLink);
