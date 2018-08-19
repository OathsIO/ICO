const OathToken = artifacts.require('OathToken');
contract('OathToken', accounts => {
		let token;
		const creator = accounts[0];
		beforeEach(async function () {
			token = await OathToken.new({ from: creator });
		});
		it('has a name', async function () {
			const name = await token.name();
			assert.equal(name, 'Oath Token');
		});
		it('has a symbol', async function () {
			const symbol = await token.symbol();
			assert.equal(symbol, 'OATH');
		});
		it('has 18 decimals', async function () {
			const decimals = await token.decimals();
			assert(decimals.eq(18));
		});
});
