const Token = artifacts.require('./Token')


require('chai')
.use(require('chai-as-promised'))
.should()

contract('Token', (accounts) => {
	const name = 'DApp Token'
	const symbol = 'DApp'
	const decimals = '18'
	const totalsupply = "1000000000000000000000000"
	let token
	beforeEach(async () => {
		token = await Token.new()
	})

	describe('deployment', () => {
		it('tracks the name', async () => {
			
			const result = await token.name()
			result.should.equal(name)
			//Fetch token from blockchain
			//Read token name here ...
			//Check he token name is 'My Name'
		})

		it('tracks the symbol', async () => {
			const result = await token.symbol()
			result.should.equal(symbol)
		})

		it('tracks the decimals', async () => {
			const result = await token.decimals()
			result.toString().should.equal(decimals)
		})

		it('tracks the supply', async () => {
			const result = await token.totalSupply()
			result.toString().should.equal(totalsupply)
		})
	})
})