import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Toolbar.css';

import links from '../../../Constants/Navigation/Navigation';

const toolbar = (props) => {
  let attachedClasses = [];
  let navigation = null;
  switch(props.mode) {
    case 'admin':
      attachedClasses.push(classes.Toolbar);
      navigation = (
        links.map((link) => {
          return(
            <NavLink to={link.to} exact={link.exact} activeClassName={classes.Active}>{link.title}</NavLink>
          );
        })
      );
      break;
    case 'agent':
      attachedClasses.push(classes.Toolbar);
      let filteredLinks = links.filter((link) => {return link.title !== 'Admin'});
      navigation = (
        filteredLinks.map((link) => {
          return(
            <NavLink to={link.to} exact={link.exact} activeClassName={classes.Active}>{link.title}</NavLink>
          );
        })
      );
      break;
    default:
      console.log('Components/Layout/Toolbar::Mode is null');
      break;
  }
  return(
    <div className={attachedClasses.join(' ')}>
      {navigation}
    </div>
  );
};

export default toolbar;