// SPDX-License-Identifier: MIT

/****************************************************************
 ######                                    #    ######  ####### 
 #     # ######  ####  ###### #    #      # #   #     # #       
 #     # #      #    # #      ##   #     #   #  #     # #       
 #     # #####  #      #####  # #  #    #     # ######  #####   
 #     # #      #  ### #      #  # #    ####### #       #       
 #     # #      #    # #      #   ##    #     # #       #       
 ######  ######  ####  ###### #    #    #     # #       ####### 
*****************************************************************/

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

contract GolfPunks is ERC721, ERC721Enumerable, Ownable, Pausable {
    using SafeMath for uint256;
    using Strings for uint256;

    string  private baseURI;
    bool    public  isRevealation = true; 
    
    uint256 public MAX_NFT_COUNT = 5555;
    uint256 public NFT_PRICE = 0.07 ether;
    uint256 public BUY_LIMIT_PER_TX = 10;

    constructor() ERC721("GolfPunks", "MILF") {}

    /*
     * Function to withdraw collected amount during minting
    */
    function withdraw(address _to) public onlyOwner {
        uint balance = address(this).balance;
        payable(_to).transfer(balance);
    }

    /*
     * Function to mint new NFTs
     * It is payable. Amount is calculated as per (NFT_PRICE * _numOfTokens)
    */
    function mintNFT(uint256 _numOfTokens) public payable whenNotPaused {
        require(_numOfTokens <= BUY_LIMIT_PER_TX, "Can't mint above limit");
        require(totalSupply().add(_numOfTokens) <= MAX_NFT_COUNT, "Purchase would exceed max supply of NFTs");
        require(NFT_PRICE.mul(_numOfTokens) == msg.value, "Ether value sent is not correct");

        for(uint i=0; i < _numOfTokens; i++) {
            _safeMint(msg.sender, totalSupply());
        }
    }

    /*
     * Function to get token URI of given token ID
     * URI will be blank untill totalSupply reaches MAX_NFT_COUNT
    */
    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(isRevealation, "Can't see it");
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
        require(bytes(baseURI).length > 0, "BaseURI is not correct");
    
        return string(abi.encodePacked(baseURI, tokenId.toString()));
    }

    /*
     * Function to set Base URI 
    */
    function setURI(string memory _baseURI) external onlyOwner {
        baseURI = _baseURI;
    }

    /*
     * Function to pause 
    */
    function pause() external onlyOwner {
        _pause();
    }

    /*
     * Function to unpause 
    */
    function unpause() external onlyOwner {
        _unpause();
    }

    /*
     * Function to get revealation
    */
    function revealation() public view returns (bool) {
        return isRevealation;
    }

    /*
     * Function to active revealation
    */
    function activeRevealation() external onlyOwner {
        isRevealation = true;
    }

    /*
     * Function to unactive revealation
    */
    function unactiveRevealation() external onlyOwner {
        isRevealation = false;
    }

    // Standard functions to be overridden 
    function _beforeTokenTransfer(address from, address to, uint256 tokenId) internal override(ERC721, 
    ERC721Enumerable) {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function supportsInterface(bytes4 interfaceId) public view override(ERC721, ERC721Enumerable) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}