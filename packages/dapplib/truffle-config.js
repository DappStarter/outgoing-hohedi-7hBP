require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'hunt produce border tell notice crime remember assume half clinic bottom gift'; 
let testAccounts = [
"0xae55c222d32443b60e3fc0bc84ae1a0eab6a6405ba036993b8b83059bc3abd48",
"0x9e91504ec8455c030fc5e9d8ce10b3ed8965b417f8e0279ea18aaf61f5a3bd4e",
"0x85955dfd0c33928d0ca48acd00cf6c234de9452ed812f30d2e22f3f644009dc4",
"0x7758c5b376ef0c5826559047c3daa05cf9c46c6c73160e4a6241aedc1fdd04d4",
"0xfe6713aea78eb72533dae62f2ae9ab8798b0630c7dc39afc15e62d5c8439fb05",
"0x8cb83ee90073ff97055390ae90e924411fe464d5c234a1c51db1feca1abe66bd",
"0xbc19ff750ea3daa1d4ba63bae78fc8ecf9900b349e64d6da15641fd4b6c712a4",
"0xf281acc2bf0fe46cdc41a0c2981ea0bf87dfc85f4c50fffe1ee937efe8d2ae67",
"0xa76ca3ea2ddfbd89716cf103058f7af4b77351c175e1793a29e5b354b5fb1c69",
"0x6532a7531bde331f29380e409a469c1d13bc1afcb966e5920803ab66a24da135"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


