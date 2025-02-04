import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  follower: {
    position: 'absolute',
    top: '0%',
    left: '0%',
    zIndex: 99999,
  },
  circle: {
    position: 'absolute',
    borderRadius: '50%',
    border: 'solid 1px',
    height: '0em',
    width: '0em',
    marginTop: '0em',
    marginLeft: '0em',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    background: '#7fcdff',
    borderColor: 'steelblue'
  },
  circle1: {
    animation: `$pulse 1.8s ${theme.transitions.duration.enteringScreen}`,
  },
  circle2: {
    animation: `$pulse 2s ${theme.transitions.duration.enteringScreen}`,
  },
  circle3: {
    animation: `$pulse 2.2s ${theme.transitions.duration.enteringScreen}`,
  },
  circle4: {
    animation: `$pulse 2.4s ${theme.transitions.duration.enteringScreen}`,
  },
  circle5: {
    animation: `$pulse 2.6s ${theme.transitions.duration.enteringScreen}`,
  },
  circle6: {
    animation: `$pulse 2.8s ${theme.transitions.duration.enteringScreen}`,
  },
  circle7: {
    animation: `$pulse 3s ${theme.transitions.duration.enteringScreen}`,
  },
  '@keyframes slideEffect': {
    '0%': {
      opacity: 0.2,
      height: 0
    },
    '100%': {
      opacity: 1,
      height: '100vh'
    }
  },
  '@keyframes pulse': {
    '0%': {
      opacity: 0.2,
      height: '0.5em',
      width: '0.5em',
      marginTop: '-0.5em',
      marginLeft: '-0.5em',
    },
    '50%': {
      opacity: 0.9,
      height: '1.5em',
      width: '1.5em',
      marginTop: '-1.5em',
      margiLeft: '-1.5em',
    },
    '100%': {
      opacity: 0.2,
      height: '0.5em',
      width: '0.5em',
      marginTop: '-0.5em',
      marginLeft: '-0.5em',
    }
  }
}))
const MouseAnimate = (props: any, state: any) => {
  const classes = useStyles()
  useEffect(() => {
    let follower = document.getElementById('follower') || { style: { top: '', left: '' } }
    let mouseX = (event: any) => {
      return (window.scrollX || 0) + event.clientX
    }
    let mouseY = (event: any) => {
      return (window.scrollY || 0) + event.clientY
    }

    let positionElement = (event: any, isScroll = false) => {
      let mouse = {
        x: mouseX(event),
        y: mouseY(event)
      }
      follower.style.top = `${mouse.y}px`
      return follower.style.left = `${mouse.x}px`
    }
    window.addEventListener('mousemove', (event: any) => {
      let _event = event
      return setTimeout(() => {
        return positionElement(_event)
      }, 100)
    })
    return () => {
      window.removeEventListener('mousemove', (event: any) => {
        let _event = event
        return setTimeout(() => {
          return positionElement(_event)
        }, 100)
      })
    }
  }, [])

  const keyDownOnRoot = (event: any) => {

  }

  return (
    <div id='follower' className={classes.follower} onKeyDown={keyDownOnRoot}>
      <div className={`${classes.circle} ${classes.circle1}`}></div>
      <div className={`${classes.circle} ${classes.circle2}`}></div>
      <div className={`${classes.circle} ${classes.circle3}`}></div>
      <div className={`${classes.circle} ${classes.circle4}`}></div>
      <div className={`${classes.circle} ${classes.circle5}`}></div>
      <div className={`${classes.circle} ${classes.circle6}`}></div>
      <div className={`${classes.circle} ${classes.circle7}`}></div>
    </div>
  )
}

export default MouseAnimate