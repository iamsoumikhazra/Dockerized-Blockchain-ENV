require("@nomiclabs/hardhat-ganache");

module.exports = {
  solidity: "0.8.4",
  networks: {
    ganache: {
      url: "http://127.0.0.1:8545"
    }
  }
};

