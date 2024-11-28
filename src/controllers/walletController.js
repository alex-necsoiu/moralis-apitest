const moralisService = require('../services/moralisService');
const ResponseFormatter = require('../utils/responseFormatter');

class WalletController {
  async getWalletHistory(req, res, next) {
    try {
      const { address } = req.params;
      const history = await moralisService.getWalletHistory(address);
      res.json(history);
    } catch (error) {
      next(error);
    }
  }

  async getWalletTokenBalances(req, res, next) {
    try {
      const { address } = req.params;
      const balances = await moralisService.getWalletTokenBalances(address);
      res.json(balances);
    } catch (error) {
      next(error);
    }
  }

  async getWalletTokenApprovals(req, res, next) {
    try {
      const { address } = req.params;
      const approvals = await moralisService.getWalletTokenApprovals(address);
      res.json(approvals);
    } catch (error) {
      next(error);
    }
  }

  async getWalletNFTBalances(req, res, next) {
    try {
      const { address } = req.params;
      const nfts = await moralisService.getWalletNFTBalances(address);
      res.json(nfts);
    } catch (error) {
      next(error);
    }
  }

  async getWalletDefiPositions(req, res, next) {
    try {
      const { address } = req.params;
      const positions = await moralisService.getWalletDefiPositions(address);
      res.json(positions);
    } catch (error) {
      next(error);
    }
  }

  async getWalletNetWorth(req, res, next) {
    try {
      const { address } = req.params;
      const netWorth = await moralisService.getWalletNetWorth(address);
      res.json(netWorth);
    } catch (error) {
      next(error);
    }
  }

  async getWalletPnL(req, res, next) {
    try {
      const { address } = req.params;
      const pnl = await moralisService.getWalletPnL(address);
      res.json(pnl);
    } catch (error) {
      next(error);
    }
  }

  async getWalletDetails(req, res, next) {
    try {
      const { address } = req.params;
      const details = await moralisService.getWalletDetails(address);
      res.json(details);
    } catch (error) {
      next(error);
    }
  }

  async getWalletDomains(req, res, next) {
    try {
      const { address } = req.params;
      const domains = await moralisService.getWalletDomains(address);
      res.json(domains);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new WalletController();