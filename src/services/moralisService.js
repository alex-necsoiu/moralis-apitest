const Moralis = require('moralis').default; // Moralis SDK for blockchain interactions
const config = require('../config/config'); // Configuration settings
const ResponseFormatter = require('../utils/responseFormatter'); // Utility for formatting responses

// Define the MoralisService class
class MoralisService {
  constructor() {
    this.initialize(); // Initialize the Moralis SDK
  }
  
  // Method to initialize Moralis with the API key
  async initialize() {
    await Moralis.start({
      apiKey: config.moralisApiKey // Set the API key from the config
    });
  }

  // Method to get the transaction history of a wallet
  async getWalletHistory(address) {
    const result = await Moralis.EvmApi.transaction.getWalletTransactions({
      address, // Wallet address to fetch transactions for
      chain: 1, // Specify the blockchain (1 for Ethereum mainnet)
    });
    return ResponseFormatter.success(result); // Format and return the result
  }

  // Method to get the token balances of a wallet
  async getWalletTokenBalances(address) {
    const result = await Moralis.EvmApi.token.getWalletTokenBalances({
      address, // Wallet address to fetch token balances for
      chain: 1 // Specify the blockchain
    });
    return ResponseFormatter.success(result); // Format and return the result
  }

  // Method to get the token approvals of a wallet
  async getWalletTokenApprovals(address) {
    const result = await Moralis.EvmApi.token.getWalletTokenApprovals({
      address, // Wallet address to fetch token approvals for
      chain: 1 // Specify the blockchain
    });
    return ResponseFormatter.success(result); // Format and return the result
  }

  // Method to get the NFT balances of a wallet
  async getWalletNFTBalances(address) {
    const result = await Moralis.EvmApi.nft.getWalletNFTs({
      address, // Wallet address to fetch NFT balances for
      chain: 1 // Specify the blockchain
    });
    return ResponseFormatter.success(result); // Format and return the result
  }

  // Method to get the DeFi positions of a wallet
  async getWalletDefiPositions(address) {
    const result = await Moralis.EvmApi.defi.getWalletActiveChains({
      address, // Wallet address to fetch DeFi positions for
      chain: 1 // Specify the blockchain
    });
    return ResponseFormatter.success(result); // Format and return the result
  }

  // Method to get the net worth of a wallet
  async getWalletNetWorth(address) {
    const result = await Moralis.EvmApi.wallets.getWalletNetWorth({
      address, // Wallet address to fetch net worth for
      chain: 1 // Specify the blockchain
    });
    return ResponseFormatter.success(result); // Format and return the result
  }

  // Method to get the profit and loss of a wallet
  async getWalletPnL(address) {
    const result = await Moralis.EvmApi.wallets.getWalletPnL({
      address, // Wallet address to fetch PnL for
      chain: 1 // Specify the blockchain
    });
    return ResponseFormatter.success(result); // Format and return the result
  }

  // Method to get detailed statistics of a wallet
  async getWalletDetails(address) {
    const result = await Moralis.EvmApi.wallets.getWalletStats({
      address, // Wallet address to fetch details for
      chain: 1 // Specify the blockchain
    });
    return ResponseFormatter.success(result); // Format and return the result
  }

  // Method to resolve wallet domains
  async getWalletDomains(address) {
    const result = await Moralis.EvmApi.resolve.resolveAddress({
      address, // Wallet address to resolve
      chain: 1 // Specify the blockchain
    });
    return ResponseFormatter.success(result); // Format and return the result
  }
}

// Export an instance of MoralisService for use in other parts of the application
module.exports = new MoralisService();