const {
    Connection,
    PublicKey,
    clusterApiUrl,
    Keypair,
    LAMPORTS_PER_SOL
} = require("@solana/web3.js")

const wallet = new Keypair()

const publicKey = nwallet._keypair.publicKey
const secretKey = wallet._keypair.secretKey

console.log(publicKey)
console.log(secretKey)