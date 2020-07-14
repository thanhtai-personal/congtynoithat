import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import MouseAnimate from 'root/components/commons/mouseAnimate'
import CarouselSlider from './carouselSlider'
import {
  Paper,
  Button,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  '@global': {
    overflowX: 'hidden',
    overflowY: 'auto',
    '*::-webkit-scrollbar-thumb': {
      background: 'steelblue',
      borderRadius: '10px',
      display: 'none'
    },
    '*::-webkit-scrollbar': {
      width: '10px',
      display: 'none'
    },
    '*::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 5px grey',
      borderRadius: '10px',
      display: 'none'
    }
  },
  root: {
    cursor: 'grab',
    ':active': {
      cursor: 'grabing'
    }
  },
  green: {
    width: 'calc(100vw - 0px)', height: '100vh', backgroundColor: 'green',
    // animation: `$slideEffect 3000ms ${theme.transitions.easing.easeInOut}`
  },
  red: {
    width: 'calc(100vw - 0px)', height: '20vh', backgroundColor: 'red'
  },
  white: {
    width: 'calc(100vw - 0px)', height: '30vh', backgroundColor: 'white'
  },
  yellow: {
    width: 'calc(100vw - 0px)', height: '20vh', backgroundColor: 'yellow'
  },
  steelblue: {
    width: 'calc(100vw - 0px)', height: '50vh', backgroundColor: 'steelblue'
  },
  pink: {
    width: 'calc(100vw - 0px)', height: '35vh', backgroundColor: 'pink'
  },
  follower: {
    position: 'absolute',
    top: '0%',
    left: '0%'
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
  project: {
    position: 'relative',
    height: '100vh',
    overflow: 'hidden',
    padding: '20px',
  },
  checkButton: {
      marginTop: '40px',
      color: 'white',
      fontSize: '25px',
      border: '3px solid white',
      textTransform: 'capitalize',
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
  }
}))

const items = [
  {
      name: 'Lear Music Reader',
      description: 'A PDF Reader specially designed for musicians.',
      color: '#64ACC8'
  },
  {
      name: 'Hash Code 2019',
      description: 'My Solution on the 2019 Hash Code by Google Slideshow problem.',
      color: '#7D85B1'
  },
  {
      name: 'Terrio',
      description: 'A exciting mobile game game made in the Unity Engine.',
      color: '#CE7E78'
  },
  {
      name: 'React Carousel',
      description: 'A Generic carousel UI component for React using material ui.',
      color: '#C9A27E'
  }
]


const HomeComponent = (props: any, state: any) => {
  const classes = useStyles()
  const { } = props

  return (
    <div className={classes.root}>
      <MouseAnimate />
      <CarouselSlider
        id='carousel-slider'
        className={classes.green}
        autoPlay={false}
        timer={500}
        animation={'slide'}
        indicators={true}
        timeout={500}
        navButtonsAlwaysVisible={false}
      >
        {
          items.map((item, index) => {
            return (<Paper 
              key={index}
            className={classes.project}
            style={{
                backgroundColor: item.color, 
            }}
            elevation={10}
        >
            <h2>{item.name}</h2>
            <p>{item.description}</p>

            <Button className={classes.checkButton}>
                Check it out!
            </Button>
        </Paper>)
          })
        }
      </CarouselSlider>
      {/* <Projects /> */}
      {/* <CompanyInfo /> */}
      {/* <Footer /> */}
      <div style={{
        position: 'fixed',
        float: 'right',
        top: '30px',
        right: '30px',
        backgroundColor: 'red'
      }}>
      </div>
      <div id='red' className={classes.red}></div>
      <div id='white' className={classes.white}></div>
      <div id='yellow' className={classes.yellow}></div>
      <div id='steelblue' className={classes.steelblue}></div>
      <div id='pink' className={classes.pink}></div>
    </div>
  )
}


interface RootState {
}

const mapState = (state: RootState) => ({
})

const mapDispatch = {
}

export default connect(mapState, mapDispatch)(HomeComponent)