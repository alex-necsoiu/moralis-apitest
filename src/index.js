const express = require('express'); // Import the Express framework
const cors = require('cors'); // Import CORS middleware for handling cross-origin requests
const config = require('./config/config'); // Import configuration settings
const walletRoutes = require('./routes/walletRoutes'); // Import wallet-related routes
const errorMiddleware = require('./middleware/errorMiddleware'); // Import error handling middleware
const requestLogger = require('./middleware/requestLogger'); // Import request logging middleware

const app = express(); // Create an Express application

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse incoming JSON requests
app.use(requestLogger); // Log incoming requests

// Set view engine
app.set('view engine', 'ejs'); // Set EJS as the templating engine
app.set('views', './src/views'); // Set the directory for view templates

// Root route with API documentation
app.get('/', (req, res) => {
  const endpoints = [ // Define available API endpoints
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

  // Render the index view with API documentation
  res.render('index', { 
    endpoints,
    version: '1.0.0', // API version
    description: 'API for retrieving wallet information using Moralis' // API description
  });
});

// API routes
app.use('/api/wallet', walletRoutes); // Use wallet routes for API requests

// Error handling middleware
app.use(errorMiddleware); // Use error handling middleware

// Start server
app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`); // Log server start message
  console.log(`Visit http://localhost:${config.port} for API documentation`); // Log API documentation URL
});