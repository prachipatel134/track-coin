import * as React from 'react';
import { LinearProgress, Typography, Container, Box } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import parse from "html-react-parser";
import CoinInfo from '../components/CoinInfo';
import { SingleCoin } from '../config/api';
import { numberWithCommas } from '../components/CoinsTable';
import { CryptoState } from '../CryptoContext';
import Header from '../components/Header';

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();

  const { currency, symbol } = CryptoState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));

    setCoin(data);
  };

  useEffect(() => {
    fetchCoin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!coin) return <LinearProgress style={{ backgroundColor: 'gold' }} />;

  return (
    <>
    <Header />
    <Container>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, width: '100%', maxWidth: 1140 }}>
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={coin?.image.large} alt={coin?.name} height="200" style={{ marginBottom: 20,marginTop:40}} />
            <Typography variant="h3" component="h3" align="center">
              {coin?.name}
            </Typography>
            <Typography variant="body1" color="textSecondary" align="center">
              {parse(coin?.description.en.split('. ')[0])}.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                <Typography variant="body1" component="span" sx={{ fontWeight: 'bold' }}>
                  Rank:
                </Typography>
                <Typography variant="body1" component="span" sx={{ marginLeft: 1 }}>
                  {numberWithCommas(coin?.market_cap_rank)}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                <Typography variant="body1" component="span" sx={{ fontWeight: 'bold' }}>
                  Current Price:
                </Typography>
                <Typography variant="body1" component="span" sx={{ marginLeft: 1 }}>
                  {symbol} {numberWithCommas(coin?.market_data.current_price[currency.toLowerCase()])}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="body1" component="span" sx={{ fontWeight: 'bold' }}>
                  Market Cap:
                </Typography>
                <Typography variant="body1" component="span" sx={{ marginLeft: 1 }}>
                  {symbol} {numberWithCommas(coin?.market_data.market_cap[currency.toLowerCase()].toString().slice(0, -6))} M
                </Typography>
              </Box>
            </Box>
          </Box>
          <CoinInfo coin={coin} />
        </Box>
      </Box>
    </Container>
    </>
  );
};

export default CoinPage;
