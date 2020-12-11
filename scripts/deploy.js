const { ethers, upgrades } = require("hardhat");

async function main() {
  const Box = await ethers.getContractFactory("BEP20TokenImplementation");
  console.log("Deploying BEP20Token...");
  const box = await upgrades.deployProxy(Box, ['ETC','ETC',18,"100000000000000000000000",true,'0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266'], { unsafeAllowCustomTypes: true  });
  await box.deployed();
  console.log("Box deployed to:", box.address);
}

main();