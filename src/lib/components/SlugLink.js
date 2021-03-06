import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { generateLinkParams } from '../helpers';

const styles = theme => ({
  textLink: {
    textDecoration: 'none',
    color: 'rgba(0, 0, 0, 0.87)'
  },

  tile: {
    height: 150,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'block',
    textIndent: -5000,
    marginLeft : '20%',
    marginRight : '20%',

    [theme.breakpoints.down('sm')]: {
      maxHeight: 100,
    }


  },


});

const SlugLink = ({ name, href, as, id, classes, src, highlighted}) => {
  const style = src ? { backgroundImage: `url(${src})` } : {};
  
  //const params = generateLinkParams(name, subpage, id);
  return (
    <Link key={href} href={href} as={as}>
      <a
        className={classNames({
          [classes.tile]: src,
          [classes.textLink]: !src
        })}
        style={style}
      >
        {name} {highlighted}
      </a>
    </Link>
  );
};

SubPageLink.defaultProps = {
  src: '',
  name: '',
  id: 0,
  highlighted : null
};

SubPageLink.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  as: PropTypes.string,
  src: PropTypes.string
};

export default withStyles(styles)(SubPageLink);
