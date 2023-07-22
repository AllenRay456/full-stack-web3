require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: "https://polygon-mumbai.infura.io/v3/4c6ab311f61749c087a62d58ca91f1b3",
      accounts: [process.env.PRIVATE_KEY]
    },
    // polygon: {
    //   url: "https://polygon-rpc.com/",
    //   accounts: [process.env.PRIVATE_KEY]
    // }
    matic: {
      // Infura
      // url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
      // url: "https://rpc-mainnet.maticvigil.com",
      url: "https://polygon-mainnet.infura.io/v3/4c6ab311f61749c087a62d58ca91f1b3",
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};