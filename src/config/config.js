require('dotenv').config(); // Load environment variables from a .env file

module.exports = {
  moralisApiKey: process.env.MORALIS_API_KEY, // API key for Moralis from environment variables
  port: process.env.PORT || 3000, // Port for the application, defaulting to 3000 if not specified
  chainId: process.env.CHAIN_ID || 'eth' // Chain ID, defaulting to 'eth' if not specified
};