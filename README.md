# Blockchain Development Environment

This project sets up a comprehensive blockchain development environment using Docker, Solidity, Rust, and VSCode.

## Essential Tools and Technologies

1. **Node.js & npm**: JavaScript runtime and package manager.
2. **Hardhat**: Modern Ethereum development environment.
3. **Ganache CLI**: Local Ethereum blockchain emulator.
4. **Solidity Compiler**: Latest Solidity compiler.
5. **Rust & cargo**: For Rust-based blockchain development.
6. **OpenZeppelin**: Secure smart contract library.
7. **VSCode**: Code editor with extensions for blockchain development.
8. **Docker**: Containerization platform.
9. **Foundry**: Fast, portable, and modular toolkit for Ethereum application development.

## Getting Started

### Step 1: Clone the Repository

Clone this repository to your local machine using the following command:

```sh
git clone https://github.com/yourusername/blockchain-dev-environment.git
cd blockchain-dev-environment
```

### Step 2: Install Docker

Ensure Docker is installed on your system. You can download Docker from the official [Docker website](https://www.docker.com/get-started) and follow the installation instructions for your operating system.

### Step 3: Build Docker Image

Build the Docker image using the following command:

```sh
docker build -t blockchain-dev ./docker
```

### Step 4: Run Docker Container

Run the Docker container with port mapping and volume mounting for VSCode integration:

```sh
docker run -it -p 8545:8545 -v $(pwd):/usr/src/app --name BlockChainDevelopmentEnvironment blockchain-dev
```

### Step 5: VSCode Integration

Install the **Remote - Containers** extension in VSCode. This allows you to use Docker containers as development environments.

1. **Install the Remote - Containers Extension**:
   - Open VSCode, go to the Extensions view by clicking the Extensions icon or pressing `Ctrl+Shift+X`, and search for `Remote - Containers`. Install it.

2. **Open Folder in Container**:
   - Open your project folder in VSCode.
   - Press `Ctrl+Shift+P` and type `Remote-Containers: Open Folder in Container`.
   - Select your project folder. This will start a new VSCode instance inside the Docker container.

### Step 6: Project Initialization

1. **Create a New Hardhat Project**:
   - Inside the VSCode terminal, run:
     ```sh
     npx hardhat
     ```
   - Follow the prompts to create a new Hardhat project.

2. **Set Up Rust Environment**:
   - Rust is already installed inside the Docker container. You can create and manage Rust projects as needed. For example, to create a new Rust project, run:
     ```sh
     cargo new my_rust_project
     ```

### Step 7: Writing Smart Contracts

1. **Solidity Contracts**:
   - Inside the `contracts` directory of your Hardhat project, create and edit your Solidity files.
   - Use the VSCode Solidity extension for syntax highlighting and other features.

2. **Rust Contracts (for Substrate or other Rust-based blockchains)**:
   - Inside your Rust project, create and edit Rust files.
   - Use the Rust extension in VSCode for better development experience.

### Step 8: Compiling and Deploying Contracts

1. **Compile Solidity Contracts**:
   - Inside the VSCode terminal, run:
     ```sh
     npx hardhat compile
     ```

2. **Deploy Contracts Using Hardhat**:
   - Inside the VSCode terminal, create a deployment script and run:
     ```sh
     npx hardhat run scripts/deploy.js --network localhost
     ```

3. **Compile and Build Rust Contracts**:
   - Inside your Rust project, run:
     ```sh
     cargo build
     ```

### Step 9: Interacting with Deployed Contracts

1. **Using Hardhat Console**:
   - Inside the VSCode terminal, run:
     ```sh
     npx hardhat console --network localhost
     ```
   - You can interact with your deployed contracts using JavaScript commands in the Hardhat console.

2. **Using Web3.js**:
   - Install Web3.js if you haven’t already:
     ```sh
     npm install web3
     ```
   - Create a JavaScript file to interact with your contracts using Web3.js.

### Step 10: Testing Your Contracts

1. **Writing Tests for Solidity Contracts**:
   - Inside the `test` directory of your Hardhat project, create test files using Mocha and Chai (Hardhat’s default testing framework).
   - Example test file (`test/MyContract.test.js`):
     ```javascript
     const { expect } = require("chai");

     describe("MyContract", function() {
       it("should do something", async function() {
         const MyContract = await ethers.getContractFactory("MyContract");
         const myContract = await MyContract.deploy();
         await myContract.deployed();

         expect(await myContract.myFunction()).to.equal(expectedValue);
       });
     });
     ```

2. **Running Tests**:
   - Inside the VSCode terminal, run:
     ```sh
     npx hardhat test
     ```

### Step 11: Managing Dependencies

1. **Installing Node.js Packages**:
   - Use `npm` to manage Node.js dependencies. Inside the VSCode terminal, run:
     ```sh
     npm install <package-name>
     ```

2. **Managing Rust Crates**:
   - Use `cargo` to manage Rust dependencies. Inside the `Cargo.toml` file of your Rust project, add the desired dependencies.

### Step 12: Additional Tools and Extensions

1. **VSCode Extensions**:
   - Make sure you have the following VSCode extensions installed:
     - Solidity by Juan Blanco
     - Rust Analyzer by rust-lang
     - Prettier - Code formatter by Esben Petersen
     - ESLint by Dirk Baeumer

2. **Other Useful Tools**:
   - **MetaMask**: Use MetaMask for interacting with your dApps. Install it as a browser extension and connect it to your local Ganache network.

## Directory Structure

- `.devcontainer/`: VSCode development container configuration.
- `docker/`: Dockerfile for setting up the environment.
- `solidity/`: Solidity project files.
- `rust/`: Rust project files.

### Summary

By following this guide, you will have a modern and comprehensive blockchain development environment set up using Docker, integrated with VSCode, and equipped with all necessary tools for Solidity and Rust development. This setup ensures a consistent and isolated development environment, leveraging the latest technologies and best practices. You can modify the `Dockerfile` and `devcontainer.json` to suit your specific needs and add any other tools or dependencies required for your blockchain projects.
