import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  AppBar, Toolbar, Typography, IconButton, Grid, Switch, useMediaQuery
} from '@material-ui/core'
import LinkButton from 'root/components/commons/linkButton'
import CONSTANTS from 'root/constants/constants'
import { ThemeContext } from 'root/customMiddleware/multiThemeProvider'
import { CenterWidthStyled } from 'root/constants/commonStyled'

const { themeEnum } = CONSTANTS

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    minHeight: '50px',
    height: '50px',
    fontSize: '0.5em'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  contactText: {
    color: 'steelblue'
  }
}))

interface HeaderProps {
  history: any,
  lang: any,
}

const Header = (props: HeaderProps) => {
  const classes = useStyles()
  const { lang } = props
  const text = lang?.headerComponent
  const setTheme = useContext(ThemeContext)
  const onChangeTheme = (e: any) => {
    const checked = e?.target?.checked
    if (checked) {
      setTheme(themeEnum.dark)
    } else {
      setTheme(themeEnum.light)
    }
  }
  const matches = useMediaQuery('(max-width:450px)')
  return (
    <AppBar position='fixed' className={classes.root}>
      <Toolbar>
        <CenterWidthStyled><Typography variant='h6' className={classes.contactText}>Liên hệ - TP Hồ Chí Minh - 097.2828.264 </Typography></CenterWidthStyled>
      </Toolbar>
    </AppBar>
  )
}

export default Header