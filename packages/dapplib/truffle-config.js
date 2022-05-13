require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom clog other security notice birth pulse coast hunt kite broken twelve'; 
let testAccounts = [
"0xffecb49001bf3c125f47d3bda4672d169d39f2372adbbcaefa7de30251a50994",
"0x50ee1019ed53e7726b472ea1cd2e1de88e848108d99b1ff738461778bd180202",
"0x95d64a9425bb5f24c70d2abdf8f383696670fff0996221565d5e28eeb83cc5f0",
"0x3f77517dd87223d93f28f11150423d92f51ced4f7c97ae70ef823fb3f1d264b5",
"0x08665bb115b04f33aae6b32ae6c95aae46329e16ac4f5d81822278fd19f72a69",
"0x5e67b2d42878a8a19cdb3b6953af2a8a07444e8ffa9a46aa2f875e28f17d9b71",
"0x1a5de89913e6de34e071ad0257b5e6c51a16136709237d97f1ad62157bf5ba82",
"0xc11cc2a70240de0ef4e0da8681657c00ba781c748899d697a2c866e7aef44949",
"0x24571f3314f644fb043879de5a46fdfb1c7273b513ae3c2fae640521b8ae92df",
"0x988fa988ac3d2082cec3222b2a707c288b336c3a97bc51344c39bfa0d34918bb"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


