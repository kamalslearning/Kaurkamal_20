// create a variable to hold your NFT's
const NFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(_name, _eyecolor, _shirtType, _bling) {
  const NFT = {
    "name": _name,
    "eyecolor": _eyecolor,
    "shirtType": _shirtType,
    "bling": _bling
  };
  NFTs.push(NFT);
  console.log("Minted: " + _name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
  for (let i = 0; i < NFTs.length; i++) {
    console.log("Name: " + NFTs[i].name);
    console.log("Eye Color: " + NFTs[i].eyecolor);
    console.log("Shirt Type: " + NFTs[i].shirtType);
    console.log("Bling: " + NFTs[i].bling);
  }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log(NFTs.length);
}

// call your functions below this line
mintNFT("Charlie", "black", "Jacket", "silverchain");
listNFTs();
getTotalSupply();
