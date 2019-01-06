pragma solidity ^0.4.17;

contract ProsperJournal {
  struct HashedJournal {
    uint submissionDate;
    uint lenderLegalEntityId;
    uint indexAmountCatagory;
    string hashContent;
  }

  mapping(uint => HashedJournal) private hashedJournals;

  uint[] private journalIndex;

  function insertJournal(
  	uint companyRegIdInsertDateTime,
    uint submissionDate,
    uint lenderLegalEntityId,
    uint indexAmountCatagory,
    string hashContent)     public
  {
    hashedJournals[journalIndex.length].submissionDate = submissionDate;
    hashedJournals[journalIndex.length].lenderLegalEntityId   = lenderLegalEntityId;
    hashedJournals[journalIndex.length].indexAmountCatagory     = indexAmountCatagory;
    hashedJournals[journalIndex.length].hashContent     = hashContent;
    journalIndex.push(companyRegIdInsertDateTime);

  }

  function getSubmissionDate(uint index) public view returns (uint){
    return hashedJournals[index].submissionDate;
  }

  function getLenderLegalEntityId(uint index) public view returns (uint){
    return hashedJournals[index].lenderLegalEntityId;
  }

  function getIndexAmountCatagory(uint index) public view returns (uint){
    return hashedJournals[index].indexAmountCatagory;
  }

  function getHashedContent(uint index) public view returns (string){
    return hashedJournals[index].hashContent;
  }

  function getIndexCount() public view returns (uint){
    return journalIndex.length;
  }

    function getAllIndex() public view returns (uint[]){
    return journalIndex;
  }
}
