const { ethers, upgrades } = require("hardhat");

async function main() {
  const addr = "0x70997970c51812dc3a010c7d01b50e0d17dc79c8";
  console.log("Upgrading Box admin...");
  await upgrades.admin.transferProxyAdminOwnership("0x9fe46736679d2d9a65f0992f2272de9f3c7fa6e0");
  console.log("Box Admin upgraded");
}

main();