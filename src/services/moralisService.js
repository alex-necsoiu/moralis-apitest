

const Moralis = require('moralis').default;
const config = require('../config/config');
const ResponseFormatter = require('../utils/responseFormatter');


class MoralisService {
  constructor() {
    this.initialize();
  }
  
  async initialize() {
    await Moralis.start({
      apiKey: config.moralisApiKey
    });

  }

  

  async getWalletHistory(address) {
    const result = await Moralis.EvmApi.transaction.getWalletTransactions({
      address,
      chain: 1,

    });
    return ResponseFormatter.success(result);
  }

  async getWalletTokenBalances(address) {
    const result = await Moralis.EvmApi.token.getWalletTokenBalances({
      address,
      chain: 1
    });
    return ResponseFormatter.success(result);
  }

  async getWalletTokenApprovals(address) {
    const result = await Moralis.EvmApi.token.getWalletTokenApprovals({
      address,
      chain: 1
    });
    return ResponseFormatter.success(result);
  }

  async getWalletNFTBalances(address) {
    const result = await Moralis.EvmApi.nft.getWalletNFTs({
      address,
      chain: 1
    });
    return ResponseFormatter.success(result);
  }

  async getWalletDefiPositions(address) {
    const result = await Moralis.EvmApi.defi.getWalletActiveChains({
      address,
      chain: 1
    });
    return ResponseFormatter.success(result);
  }

  async getWalletNetWorth(address) {
    const result = await Moralis.EvmApi.wallets.getWalletNetWorth({
      address,
      chain: 1
    });
    return ResponseFormatter.success(result);
  }

  async getWalletPnL(address) {
    const result = await Moralis.EvmApi.wallets.getWalletPnL({
      address,
      chain: 1
    });
    return ResponseFormatter.success(result);
  }

  async getWalletDetails(address) {
    const result = await Moralis.EvmApi.wallets.getWalletStats({
      address,
      chain: 1
    });
    return ResponseFormatter.success(result);
  }

  async getWalletDomains(address) {
    const result = await Moralis.EvmApi.resolve.resolveAddress({
      address,
      chain: 1
    });
    return ResponseFormatter.success(result);
  }
}

module.exports = new MoralisService();