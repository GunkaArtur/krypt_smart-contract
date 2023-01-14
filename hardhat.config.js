// https://eth-goerli.g.alchemy.com/v2/FyfIkOL3617RCuv0MndoyeitiY9RXfnC

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/FyfIkOL3617RCuv0MndoyeitiY9RXfnC",
      accounts: [
        "b5c58a47167c1d3313965e127c0b781962a5a8cb7be6bb1a40b4ed8a07c32a18",
      ],
    },
  },
};
