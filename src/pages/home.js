import React, { useEffect } from 'react';
import ExchangeCard from '../components/common/exchange-card';
import Banner from '../components/common/banner';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllData, setCurrentCrypto } from '../actions-creators/crypto';
import styled from 'styled-components';

const ListStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 80%;
  margin: 1rem auto;
  justify-content: space-between;
`
function Home({ match }) {
  const dispatch = useDispatch();
  const cryptourl = match.params.id
  useEffect(() => {
    if(cryptourl) dispatch(setCurrentCrypto(cryptourl))
    dispatch(fetchAllData());
  }, cryptourl);
  const data = useSelector(state => state.getIn(['cryptos', 'data']))
  const updated = useSelector(state => state.getIn(['cryptos', 'updated']))
  const cryptoInfo = [data.get('bitso'), data.get('coinlore'), data.get('coincap')]
  return (
    <div>
      {
       updated && <Banner/>
      }
      <ListStyled>
        {
          cryptoInfo.map(item => item && <ExchangeCard 
            key={item.get('id')}
            title={item.get('title')} 
            value={item.get('value')} 
            change={item.get('change')} 
            logo={item.get('image')}/>
          )
        }
      </ListStyled>
    </div>
  );
}

export default Home;
