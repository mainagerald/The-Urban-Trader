import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import CardList from '../../Components/CardList/CardList'
import PortfolioList from '../../Components/Portfolio/PortfolioList/PortfolioList'
import Search from '../../Components/Search/Search'
import { searchCompanies } from '../../API'
import { CompanySearch } from '../../CoDataTypes'

interface Props {}

const SearchPage = (props: Props) => {
    const[search, setSearch]=useState<string>("");
  const[searchResult, setSearchResult]= useState<CompanySearch[]>([]);
  const[portfolioValues, setPortfolioValues]=useState<string[]>([]);
  const[serverError, setServerError]=useState<string | null>(null);

  const handleSearchChange = (e:ChangeEvent<HTMLInputElement>)=>{
      setSearch(e.target.value);
      console.log(e);
  };
  
  const onSearchSubmit =async (event: SyntheticEvent) => {
    event.preventDefault();
    const result = await searchCompanies(search);
    if (typeof result=== "string"){
      setServerError(result);
    } else if (Array.isArray(result.data)){
      setSearchResult(result.data);
    }
    console.log(searchResult);
  };
  

  const onPortfolioCreate = (e: any) => {
    e.preventDefault();
    const exists = portfolioValues.find((value)=> value === e.target[0].value);
    if (exists) return;
    const updatedPortfolio =[...portfolioValues, e.target[0].value];
    setPortfolioValues(updatedPortfolio);
  }

  const onPortfolioDelete = (e: any) => {
    e.preventDefault();
    const removed = portfolioValues.filter((value)=> {
      return value !==e.target[0].value;
    });
    setPortfolioValues(removed);
  }


  return (
    <>
    <Search onSearchSubmit={onSearchSubmit} search={search} handleSearchChange ={handleSearchChange}/>

    <PortfolioList 
    portfolioValues={portfolioValues}
    onPortfolioDelete={onPortfolioDelete}
    />

    <CardList 
    searchResults={searchResult}
    onPortfolioCreate={onPortfolioCreate}/>
    {serverError && <div>Unable to connect!</div>}
    </>
  )
}

export default SearchPage