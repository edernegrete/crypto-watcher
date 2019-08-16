import React from 'react'
import styled from 'styled-components'

const StyledBanner = styled.div`
  background: var(--warning);
`
function Banner() {
  return (
    <StyledBanner>
      <p>Data updated</p>
    </StyledBanner>
  )

}


export default Banner