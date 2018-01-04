import React from 'react';

import Wrapper from '../Wrapper/Wrapper';
import Toolbar from './Toolbar/Toolbar';

import classes from './Layout.css';

const layout = (props) => {
  let attachedClasses = [];
  if(props.mode !== '') {
    attachedClasses.push(classes.Lowered)
  }
  return (
    <Wrapper>
      <Toolbar mode={props.mode}/>
      <div className={attachedClasses.join(' ')}>
        {props.children}
      </div>
    </Wrapper>
  );
};

export default layout;