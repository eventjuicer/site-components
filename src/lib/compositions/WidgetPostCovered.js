import React from 'react';
import Wrapper from '../components/Wrapper'
import {TwoColsLayout} from '../components/MyLayouts'
import CardMedia from '@material-ui/core/CardMedia';
import { DiscussionEmbed } from 'disqus-react';
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import SvgFilter from '../components/svg/Black'
import Box from '@material-ui/core/Box';
import { resizeCloudinaryImage } from '../helpers';

const useStyles = makeStyles(theme => ({

  container: {
    position: 'relative'
  },

  cover: {
    width: '100vw',
    height: '100vh',
    filter: 'url(#svgFilter)',
    backgroundPosition: "center right"
  },

  texts: {
    top: '20vh',
    left: '10vw',
    marginRight: '5vw',
    position: 'absolute',
  },

  headline: {
    color: "#ffffff",

    [theme.breakpoints.down('lg')]: {
      fontSize: theme.typography.pxToRem(70),
    },
    [theme.breakpoints.down('md')]: {
      fontSize: theme.typography.pxToRem(60),
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.pxToRem(50),
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.pxToRem(40),
    }

  },


  quote: {
    color: "#ffffff",
    marginTop: '5vh',
    maxWidth: 800,

    [theme.breakpoints.down('lg')]: {
      fontSize: theme.typography.pxToRem(40),
    },

    [theme.breakpoints.down('md')]: {
      fontSize: theme.typography.pxToRem(32),
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.pxToRem(22),
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.pxToRem(20),
    }

  },


  // mark: {
  //   margin: '0 -0.4em',
  //   padding: '0.1em 0.4em',
  //   borderRadius: '0.8em 0.3em',
  //   background: 'transparent',
  //   backgroundImage: 'linear-gradient(
  //     to right,
  //     rgba(255, 225, 0, 0.1),
  //     rgba(255, 225, 0, 0.7) 4%,
  //     rgba(255, 225, 0, 0.3)
  //   )',
  //   boxDecorationBreak: 'clone'
  // }

  content: {
    position: "relative",
    top: -200
  }

}))

const WidgetPost = ({id, wrapperProps, headline, cover, quote, publisher, content, isOld, other}) => {

  const classes = useStyles();

  return (
    <React.Fragment>
    
      <SvgFilter />

      {cover && <Box className={classes.container}>
    
          <CardMedia image={resizeCloudinaryImage(cover, 2000, 1500)} title="" className={classes.cover} />

          <Box className={classes.texts}>
          <Typography variant="h1" className={classes.headline} align="left">{headline}</Typography>
          {!isOld && <Typography variant="h3" className={classes.quote} align="left">{quote}</Typography>}
          </Box>

       </Box>}
       
           <Wrapper {...wrapperProps} classes={{
             root: classes.content
           }} >
            <TwoColsLayout
                leftSize={8}
                left={
                    <Wrapper first={false}>
                    {content}
                    {other}

                    <DiscussionEmbed
                    shortname='fp20'
                    config={
                      {
                      //url: this.props.article.url,
                      identifier: `post${id}`,
                      title: headline,
                      language: 'pl_PL'
                      }
                    }
                  />

                    </Wrapper>
                }
                right={
                  <div style={{position: 'relative', top: 200}}>{
                    publisher
                  }</div>}
            />
        </Wrapper>
    </React.Fragment>)
}


export default WidgetPost
