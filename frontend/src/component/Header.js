import React from "react";
import {AppBar, IconButton, List, ListItem, Toolbar, makeStyles, createStyles} from "@material-ui/core";
import {
  AccountBalance,
  AccountCircle,
  Close,
  MenuOpen
} from "@material-ui/icons";
import Drawer from "@material-ui/core/Drawer";
import ListItemText from "@material-ui/core/ListItemText";
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => createStyles({
  navBar: {
    left: 0,
    transition: .2 + 's linear',
  },
  navBarOpened: {
    left: 220 + "px",
    transition: .1 + 's linear',
  },

  drawer: {
    backgroundColor: 'unset'
  },

  sidebarList: {
    paddingTop: 0,
    marginTop: 64 + 'px',
    width: 220 + 'px',
    borderTop: 1 + 'px solid #efefef',
  },

  listItem: {
    borderBottom: 1 + 'px solid #efefef',

  },

  listIcon: {
    marginRight: 10 + 'px'
  },

  languageSelect: {
    marginLeft: "auto",
    marginRight: 0,
    transition: .2 + 's linear',
    color: "#fff",
    '&:before': {
      borderColor: "#fff",
      '&:hover': {
        borderColor: "#fff",
      }
    },
    '&:after': {
      borderColor: "#fff",
      '&:hover': {
        borderColor: "#fff",
      }
    }
  },
  withNavbarOpened: {
    marginRight: 220 + 'px',
    transition: .1 + 's linear',
  },

  icon: {
    fill: "#fff",
  },
}))


function Header(props) {
  const {isOpen, handleOpen} = props;
  const classes = useStyles();

  const [ t, i18n ] = useTranslation();

  function handleChangeLang(event) {
    i18n.changeLanguage(event.target.value);
  }

  return (
    <AppBar className={isOpen ? classes.navBarOpened : classes.navBar}>
      <Toolbar>
        <IconButton onClick={() => {
          handleOpen(!isOpen);
        }} edge="start" color="inherit" aria-label="menu">
          {isOpen ? <Close/> : <MenuOpen/>}
        </IconButton>


        <Select
          className={classes.languageSelect + (isOpen ? ' ' + classes.withNavbarOpened : '')}
          inputProps={{
            classes: {
              icon: classes.icon,
            },
          }}
          name="language-select"
          value={i18n.language}
          onChange={handleChangeLang}
          input={<Input/>}
        >
            <MenuItem value={'ru'}>Ru</MenuItem>
            <MenuItem value={'uk'}>Uk</MenuItem>
            <MenuItem value={'en'}>En</MenuItem>
            <MenuItem value={'pl'}>Pl</MenuItem>
        </Select>

      </Toolbar>
      <Drawer variant="persistent" className={classes.drawer} anchor={'left'} open={isOpen} onClose={() => {
        handleOpen(false);
      }}>
        <List className={classes.sidebarList}>
          <NavLink style={{textDecoration: 'none', color: 'unset'}} to="/customers">
            <ListItem className={classes.listItem} button><AccountCircle className={classes.listIcon}/><ListItemText className={classes.listItemText} primary={t("Клиенты")}></ListItemText></ListItem>
          </NavLink>
          <NavLink style={{textDecoration: 'none', color: 'unset'}} to="/accounts">
            <ListItem className={classes.listItem} button><AccountBalance className={classes.listIcon}/> <ListItemText className={classes.listItemText} primary={t("Счета")}/></ListItem>
          </NavLink>
        </List>
      </Drawer>
    </AppBar>
  )
}

export default Header;


