import React from 'react';
import Text from './Text'

const HeaderPastel = (props) => {
  return ( 
    <header className={props.className}>
      <Text text={"My Music App"} className={"headerText"}/>
    </header>
  );
}
 
export default HeaderPastel;