const express = require('express');
const router = express.Router();
const walletController = require('../controllers/walletController');

router.get('/:address/history', walletController.getWalletHistory);
router.get('/:address/token-balances', walletController.getWalletTokenBalances);
router.get('/:address/token-approvals', walletController.getWalletTokenApprovals);
router.get('/:address/nft-balances', walletController.getWalletNFTBalances);
router.get('/:address/defi-positions', walletController.getWalletDefiPositions);
router.get('/:address/net-worth', walletController.getWalletNetWorth);
router.get('/:address/pnl', walletController.getWalletPnL);
router.get('/:address/details', walletController.getWalletDetails);
router.get('/:address/domains', walletController.getWalletDomains);

module.exports = router;