const { expect } = require("chai");
const {deployProgram} = require("../scripts/deploy");

describe("Test", () => {
    before(async () => {
        programId = await deployProgram('./programs/hello_world/target/deploy/hello_world.so');
    });
    it("ttt", async () => {
        console.log(programId);
    })
})