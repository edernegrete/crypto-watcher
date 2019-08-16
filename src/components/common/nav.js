import React from 'react';
import styled from 'styled-components'
import Link from './link'
const NavStyled = styled.nav`
  color: var(--white);
`
const ListStyled = styled.ul`
  list-style: none;
`
const ListItemStyled = styled.li`
  display: inline-block;
  margin-right: 20px;
`
function Nav() {
 return(
   <NavStyled>
     <ListStyled>
       <ListItemStyled>
         <Link to='/btc'>Bitcoin</Link>
        </ListItemStyled>
       <ListItemStyled>
         <Link to='/xrp'>Ripple</Link>
        </ListItemStyled>
       <ListItemStyled>
         <Link to='/eth'>Etherium</Link>
        </ListItemStyled>
     </ListStyled>
   </NavStyled>
 )
}

export default Nav