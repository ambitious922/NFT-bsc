var Migrations = artifacts.require("./GolfPunks.sol");

module.exports = async function(deployer) {
  await deployer.deploy(Migrations);
};
