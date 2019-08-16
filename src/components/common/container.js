import React from 'react'
import Background from './background'
import Nav from './nav'
function Container({ children, ...props }) {
 return (
   <Background {...props}>
     <Nav />
     { children }
   </Background>
 )
}

export default Container