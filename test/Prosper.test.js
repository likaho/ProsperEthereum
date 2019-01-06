const assert = require('assert');
const ganache = require('ganache-cli')
const Web3 = require('web3');

// UPDATE THESE TWO LINES RIGHT HERE!!!!! <-----------------
const provider = ganache.provider();
const web3 = new Web3(provider);

const {interface, bytecode} = require('../compile');

let accounts;
let prosper;

beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();
  // Use one of those accounts to deploy the contract
  prosper = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ from: accounts[0], gas: '1000000' });

  // ADD THIS ONE LINE RIGHT HERE!!!!! <---------------------
  prosper.setProvider(provider);
});


describe('Prosper', ()=>{
  it('deploy a contract', ()=>{
      assert.ok(prosper.options.address);
  });

  it('has a default contract', async ()=>{
    const count = await prosper.methods.getIndexCount().call();
    assert.equal(count, 0);
  });

  const changedMessage = 'bye';
  it('can change a message', async ()=>{
     var transactionId = await prosper.methods.insertJournal(123, 222, 23, 3, 'abc').send({ from: accounts[0], gas: '144487' });
     console.log(transactionId);
     const count = await prosper.methods.getIndexCount().call();
     assert.equal(count, 1);
  });
});
