const web3 = require("@solana/web3.js");
require('dotenv').config();
const { expect } = require("chai");

const {deployProgram} = require("../scripts/deploy");

const payer = web3.Keypair.fromSecretKey(Buffer.from(process.env.PRIVATE_KEY, 'hex'));
const connection = new web3.Connection(process.env.API_KEY, "confirmed");

describe("Test", () => {
    before(async () => {
        programId = await deployProgram('hello_world');
    });
    it("ttt", async () => {
        console.log(programId);
        console.log("Balance:", await connection.getBalance(payer.publicKey))
    })
})