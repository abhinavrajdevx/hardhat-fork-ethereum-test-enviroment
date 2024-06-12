require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    // Ganache cli forked ethereum instance
    fork: {
      chainId: 1337,
      url: "http://127.0.0.1:7545",
    },
  },
  solidity: "0.8.24",
};
