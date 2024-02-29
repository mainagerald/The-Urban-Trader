import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { CompanyProfile } from '../../CoDataTypes';
import { getCompanyProflie } from '../../API';
import Sidebar from '../../Components/Sidebar/Sidebar';
import CompanyDashboard from '../../Components/CompanyDashboard/CompanyDashboard';
import Tile from '../../Components/Tiles/Tiles';
import Spinner from '../../Components/Spinner/Spinner';
import CompFinder from '../../Components/CompFinder/CompFinder';
import TenKFinder from '../../Components/TenK/TenKFinder';

interface Props {}

const CompanyPage = (props: Props) => {
    let {ticker} = useParams();
    const [company, setCompany]=useState<CompanyProfile>();

    useEffect(()=> {
        const getCompanyProflieInit = async() => {
            const result = await getCompanyProflie(ticker!);
            setCompany(result?.data[0]);
        }
        getCompanyProflieInit();
    }, []);


  return (
    <>
    {company? (
        <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
        <Sidebar/>
        <CompanyDashboard ticker={ticker!}>
            <Tile title='Corp.' subTitle={company.companyName}></Tile>
            <Tile title='Price' subTitle={"$" + company.price.toString()}></Tile>
            <Tile title='Sector' subTitle={company.sector}></Tile>
            <Tile title='DCF' subTitle={"$" + company.dcf.toString()}></Tile>
            <CompFinder ticker={company.symbol}/>
            <TenKFinder ticker={company.symbol}/>
            {/* <p className="bg-white shadow-rounded text-medium text-gray-900 p-3 mt-1 mb-1">{company.description}</p> */}
            </CompanyDashboard>
        </div>
    ):(
        <Spinner/>
    )}
    </>
  )
}


export default CompanyPage;