// Import the Moralis service and response formatter utility
const moralisService = require('../services/moralisService'); // Service for interacting with Moralis API
const ResponseFormatter = require('../utils/responseFormatter'); // Utility for formatting API responses

// Define the WalletController class to handle wallet-related requests
class WalletController {
  // Method to get the transaction history of a specified wallet address
  async getWalletHistory(req, res, next) {
    try {
      const { address } = req.params; // Extract wallet address from request parameters
      const history = await moralisService.getWalletHistory(address); // Fetch wallet history using the service
      res.json(history); // Send the history as a JSON response
    } catch (error) {
      next(error); // Pass any errors to the next middleware
    }
  }

  // Method to get the token balances of a specified wallet address
  async getWalletTokenBalances(req, res, next) {
    try {
      const { address } = req.params; // Extract wallet address from request parameters
      const balances = await moralisService.getWalletTokenBalances(address); // Fetch token balances using the service
      res.json(balances); // Send the balances as a JSON response
    } catch (error) {
      next(error); // Pass any errors to the next middleware
    }
  }

  // Method to get the token approvals of a specified wallet address
  async getWalletTokenApprovals(req, res, next) {
    try {
      const { address } = req.params; // Extract wallet address from request parameters
      const approvals = await moralisService.getWalletTokenApprovals(address); // Fetch token approvals using the service
      res.json(approvals); // Send the approvals as a JSON response
    } catch (error) {
      next(error); // Pass any errors to the next middleware
    }
  }

  // Method to get the NFT balances of a specified wallet address
  async getWalletNFTBalances(req, res, next) {
    try {
      const { address } = req.params; // Extract wallet address from request parameters
      const nfts = await moralisService.getWalletNFTBalances(address); // Fetch NFT balances using the service
      res.json(nfts); // Send the NFTs as a JSON response
    } catch (error) {
      next(error); // Pass any errors to the next middleware
    }
  }

  // Method to get the DeFi positions of a specified wallet address
  async getWalletDefiPositions(req, res, next) {
    try {
      const { address } = req.params; // Extract wallet address from request parameters
      const positions = await moralisService.getWalletDefiPositions(address); // Fetch DeFi positions using the service
      res.json(positions); // Send the positions as a JSON response
    } catch (error) {
      next(error); // Pass any errors to the next middleware
    }
  }

  // Method to get the net worth of a specified wallet address
  async getWalletNetWorth(req, res, next) {
    try {
      const { address } = req.params; // Extract wallet address from request parameters
      const netWorth = await moralisService.getWalletNetWorth(address); // Fetch net worth using the service
      res.json(netWorth); // Send the net worth as a JSON response
    } catch (error) {
      next(error); // Pass any errors to the next middleware
    }
  }

  // Method to get the profit and loss of a specified wallet address
  async getWalletPnL(req, res, next) {
    try {
      const { address } = req.params; // Extract wallet address from request parameters
      const pnl = await moralisService.getWalletPnL(address); // Fetch profit and loss using the service
      res.json(pnl); // Send the PnL as a JSON response
    } catch (error) {
      next(error); // Pass any errors to the next middleware
    }
  }

  // Method to get detailed statistics of a specified wallet address
  async getWalletDetails(req, res, next) {
    try {
      const { address } = req.params; // Extract wallet address from request parameters
      const details = await moralisService.getWalletDetails(address); // Fetch wallet details using the service
      res.json(details); // Send the details as a JSON response
    } catch (error) {
      next(error); // Pass any errors to the next middleware
    }
  }

  // Method to resolve wallet domains to their corresponding addresses
  async getWalletDomains(req, res, next) {
    try {
      const { address } = req.params; // Extract wallet address from request parameters
      const domains = await moralisService.getWalletDomains(address); // Fetch wallet domains using the service
      res.json(domains); // Send the domains as a JSON response
    } catch (error) {
      next(error); // Pass any errors to the next middleware
    }
  }
}

// Export an instance of WalletController for use in other parts of the application
module.exports = new WalletController();