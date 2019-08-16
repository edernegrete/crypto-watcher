import React from 'react'
import styled from 'styled-components'

const FigureStyled = styled.figure`
  width: 50px;
  margin: 0;
`
const ImageStyled = styled.img`
 width: 100%;
 border-radius: 50%;
`

const ValueStyled = styled.p`
 font-size: 2rem;
 color: var(--white);
 text-overflow: ellipsis; 
`

const CardStyled = styled.div`
 background: var(--lightblue);
 display: flex;
 max-width: 223px;
 padding: 1rem;
 margin-bottom: 1rem;
`

const InfoStyled = styled.div`
  >* {
    margin: 10px;
  }
`

const TitleStyled = styled.p`
  color: var(--gray);
`

const ChangeStyled = styled.p`
  color: ${({ type }) => type === 'danger' ? 'var(--danger)' : 'var(--success)'};
`
function ExchangeCard ( {
  title,
  value,
  change,
  logo
} ) {
  return (
    <CardStyled>
      <FigureStyled>
        <ImageStyled src={`/images${logo}`} alt=""/>
      </FigureStyled>
      <InfoStyled>
        <TitleStyled>{title}</TitleStyled>
        <ValueStyled>${value}</ValueStyled>
        <ChangeStyled type={Number(change) > 0 ? 'success' : 'danger'}>{change}</ChangeStyled>
      </InfoStyled>
    </CardStyled>
  )
}

export default ExchangeCard