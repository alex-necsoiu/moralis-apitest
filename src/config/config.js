require('dotenv').config();

module.exports = {
  moralisApiKey: process.env.MORALIS_API_KEY,
  port: process.env.PORT || 3000,
  chainId: process.env.CHAIN_ID || 'eth'
};