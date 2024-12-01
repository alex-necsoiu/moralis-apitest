# Moralis Wallet API Documentation

## Introduction

This project provides a web interface for the Moralis Wallet API, enabling users to retrieve comprehensive wallet information using various API endpoints. It demonstrates how to set up a server-side dApp to query blockchain data (e.g., NFTs, tokens, balances, transfers, transactions, etc.) from any NodeJS application and supports multiple blockchains like Ethereum, Polygon, BNB Chain, Avalanche, Cronos, and more.
## Features

- View detailed information about wallet transactions, balances, and more.
- Interactive "Try It Out" functionality for testing API endpoints.
- Responsive design with Tailwind CSS for a modern user experience.

## Table of Contents

- [Architecture](#architecture)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Architecture

Clean and maintainable architecture for the Moralis API integration. Here's a breakdown of the structure:

- **Config Layer (config/config.js)**:
  - Manages environment variables and configuration settings
  - Centralizes API keys and other constants

- **HTTP Client (utils/httpClient.js)**:
  - Generic HTTP client using Axios
  - Handles requests and error responses
  - Supports all HTTP methods with consistent error handling

- **Service Layer (services/moralisService.js)**:
  - Implements all Moralis API functionalities
  - Encapsulates Moralis-specific logic
  - Provides clean interfaces for wallet operations

- **Controller Layer (controllers/walletController.js)**:
  - Handles HTTP request/response logic
  - Manages error handling for API endpoints
  - Coordinates between routes and services

- **Routes (routes/walletRoutes.js)**:
  - Defines API endpoints
  - Maps routes to controller methods


## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/alex-necsoiu/moralis-apitest.git
   cd moralis-wallet-api-docs
   ```

2. **Install dependencies**:
   ```bash
   yarn add moralis express @moralisweb3/common-evm-utils
   yarn install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add the following configuration settings:
   ```
   MORALIS_API_KEY=your_api_key_here
   PORT=3000
   CHAIN_ID=1
   ```
   Make sure to replace `your_api_key_here` with your actual Moralis API key.

4. **Start the server**:
   ```bash
   yarn start
   ```

5. **Open your browser**:
   Navigate to `http://localhost:3000` (replace `PORT` with the port number specified in your configuration).


## Usage

- Enter a valid Ethereum wallet address in the input field.
- Click "Send Request" to retrieve wallet information.
- Use the "Clear" button to reset the input field and hide the response.
- Click "Toggle Response" to show or hide the response section.


## API Endpoints

The following API endpoints are available:

- **GET** `/api/wallet/:address/history`: Get wallet transaction history
- **GET** `/api/wallet/:address/token-balances`: Get wallet token balances
- **GET** `/api/wallet/:address/nft-balances`: Get wallet NFT balances
- **GET** `/api/wallet/:address/net-worth`: Get wallet net worth
- **GET** `/api/wallet/:address/details`: Get wallet details
- **GET** `/api/wallet/:address/token-approvals`: Get wallet token approvals
- **GET** `/api/wallet/:address/defi-positions`: Get wallet DeFi positions
- **GET** `/api/wallet/:address/pnl`: Get wallet profit and loss
- **GET** `/api/wallet/:address/domains`: Get wallet domains

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

