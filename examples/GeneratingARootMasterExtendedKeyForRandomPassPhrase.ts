import {MnemonicPassPhrase} from 'nem2-hd-wallets';

// Example 1: generate BIP32 master seed for random pass phrase
const mnemonic = MnemonicPassPhrase.createRandom();
const bip32Seed = mnemonic.toSeed();
