# Blockchain Development Environment

This project sets up a comprehensive blockchain development environment using Docker, Solidity, Rust, and VSCode.

## Getting Started

1. **Build the Docker Image**:
    ```sh
    docker build -t blockchain-dev ./docker
    ```

2. **Run the Docker Container**:
    ```sh
    docker run -it -p 8545:8545 -v $(pwd):/usr/src/app blockchain-dev
    ```

3. **Open Project in VSCode**:
    - Install the Remote - Containers extension.
    - Open your project folder in VSCode.
    - Use `Remote-Containers: Open Folder in Container` to start the development environment.

4. **Initialize and Compile Solidity Contracts**:
    ```sh
    npx hardhat compile
    ```

5. **Deploy Contracts**:
    ```sh
    npx hardhat run scripts/deploy.js --network localhost
    ```

6. **Test Contracts**:
    ```sh
    npx hardhat test
    ```

## Directory Structure

- `.devcontainer/`: VSCode development container configuration.
- `docker/`: Dockerfile for setting up the environment.
- `solidity/`: Solidity project files.
- `rust/`: Rust project files.

## Additional Tools

- **MetaMask**: Browser extension for interacting with your dApps.
- **Prettier**: Code formatter.
- **ESLint**: Linting tool for JavaScript/TypeScript.
