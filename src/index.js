const express = require('express');
const cors = require('cors');
const config = require('./config/config');
const walletRoutes = require('./routes/walletRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');
const requestLogger = require('./middleware/requestLogger');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(requestLogger);

// Set view engine
app.set('view engine', 'ejs');
app.set('views', './src/views');

// Root route with API documentation
app.get('/', (req, res) => {
  const endpoints = [
    {
      path: '/api/wallet/:address/history',
      description: 'Get wallet transaction history'
    },
    {
      path: '/api/wallet/:address/token-balances',
      description: 'Get wallet token balances'
    },
    {
      path: '/api/wallet/:address/nft-balances',
      description: 'Get wallet NFT balances'
    },
    {
      path: '/api/wallet/:address/net-worth',
      description: 'Get wallet net worth'
    },
    {
      path: '/api/wallet/:address/details',
      description: 'Get wallet details'
    },
    {
      path: '/api/wallet/:address/token-approvals',
      description: 'Get wallet token approvals'
    },
    {
      path: '/api/wallet/:address/defi-positions',
      description: 'Get wallet DeFi positions'
    },
    {
      path: '/api/wallet/:address/pnl',
      description: 'Get wallet profit and loss'
    },

    {
      path: '/api/wallet/:address/domains',
      description: 'Get wallet domains'
    }
  ];

  res.render('index', { 
    endpoints,
    version: '1.0.0',
    description: 'API for retrieving wallet information using Moralis'
  });
});

// API routes
app.use('/api/wallet', walletRoutes);

// Error handling middleware
app.use(errorMiddleware);

// Start server
app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
  console.log(`Visit http://localhost:${config.port} for API documentation`);
});