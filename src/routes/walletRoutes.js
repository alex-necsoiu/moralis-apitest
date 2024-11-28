const express = require('express'); // Import the Express framework
const router = express.Router(); // Create a new router instance
const walletController = require('../controllers/walletController'); // Import the wallet controller

// Define routes for wallet-related requests
router.get('/:address/history', walletController.getWalletHistory); // Get transaction history for a wallet
router.get('/:address/token-balances', walletController.getWalletTokenBalances); // Get token balances for a wallet
router.get('/:address/token-approvals', walletController.getWalletTokenApprovals); // Get token approvals for a wallet
router.get('/:address/nft-balances', walletController.getWalletNFTBalances); // Get NFT balances for a wallet
router.get('/:address/defi-positions', walletController.getWalletDefiPositions); // Get DeFi positions for a wallet
router.get('/:address/net-worth', walletController.getWalletNetWorth); // Get net worth for a wallet
router.get('/:address/pnl', walletController.getWalletPnL); // Get profit and loss for a wallet
router.get('/:address/details', walletController.getWalletDetails); // Get detailed statistics for a wallet
router.get('/:address/domains', walletController.getWalletDomains); // Resolve wallet domains to addresses

module.exports = router; // Export the router for use in the application