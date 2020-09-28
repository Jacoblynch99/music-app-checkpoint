import React from 'react'
import LoginIn from './LoginIn'

const MainPastel = (props) => {
  return ( 
    <main className={props.className}>
      <LoginIn className={"front-page-login grid-container"}/>
    </main>
   );
}
 
export default MainPastel;