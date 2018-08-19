var OathToken = artifacts.require("./OathToken")

module.exports = function(deployer) {
  deployer.deploy(OathToken);
}
