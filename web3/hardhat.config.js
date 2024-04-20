// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: {
//     version: '0.8.9',
//     defaultNetwork: 'sepolia',
//     networks: {
//       hardhat: {},
//       sepolia: {
//         url: 'https://blast-sepolia.infura.io/v3/0d5db8f3603443d7bf368bd8964a693b',
//         accounts: [`0x${process.env.PRIVATE_KEY}`]
//       }
//     },
//     settings: {
//       optimizer: {
//         enabled: true,
//         runs: 200,
//       },
//     },
//   },
// };


/** @type import('hardhat/config').HardhatUserConfig */ 
module.exports = {
  solidity: {
    version: "0.8.9",
    defaultNetwork: "sepolia",
    networks: {
    hardhat: {},
    sepolia: {
    url: "https://sepolia.rpc.thirdweb.com",
    accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
    },
    settings: {
    optimizer: {
    enabled: true,
    runs: 200,
    },
    },
    },
    };