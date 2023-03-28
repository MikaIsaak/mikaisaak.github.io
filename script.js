const tokenContractInput = document.querySelector("#tokenContract");
const addressofRecepeintInput = document.querySelectorAll(".address");
const amountInput = document.querySelectorAll(".amount");

const contractAddress = "0x75c1A77Fab841D7AFE9fECCCd1a46A5B39d72361"; //Замените вашим контрактом

const abi = [
  {
    inputs: [
      {
        internalType: "contract IToken",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "_addressArray",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_amountArray",
        type: "uint256[]",
      },
    ],
    name: "airdropWithTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const provider = new ethers.providers.Web3Provider(window.ethereum, 97);

let signer;
let contract;

provider.send("eth_requestAccounts", []).then(() => {
  provider.listAccounts().then((accounts) => {
    signer = provider.getSigner(accounts[0]);
    //Создаем объект контракта
    contract = new ethers.Contract(contractAddress, abi, signer);
    console.log(contract);
  });
});

async function airdropWithTransfer() {
  const tokenContract = tokenContractInput.value;
  const addresses = [];
  const values = [];

  for (let index = 0; index < addressofRecepeintInput.length; index++) {
    addresses.push(addressofRecepeintInput[index].value);
  }

  for (let index = 0; index < amountInput.length; index++) {
    values.push(amountInput[index].value);
  }

  const call = await contract.airdropWithTransfer(
    tokenContract,
    addresses,
    values
  );
}

async function airdropWithTransfer1() {
  const tokenContract1 = "0x3ae40b8b92011a767c78d113f1c0dfe424b0a4c0";
  const addresses1 = ["0x40ec05f7e75ad235b9edd3f61a0e3b3c79ac64f8"];
  const value1 = [87];
  const calling = await contract.airdropWithTransfer(
    tokenContract1,
    addresses1,
    value1
  );
}
