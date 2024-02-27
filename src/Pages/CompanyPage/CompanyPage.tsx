import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { CompanyProfile } from '../../CoDataTypes';
import { getCompanyProflie } from '../../API';
import Sidebar from '../../Components/Sidebar/Sidebar';
import CompanyDashboard from '../../Components/CompanyDashboard/CompanyDashboard';
import Tile from '../../Components/Tiles/Tiles';

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
            </CompanyDashboard>
        </div>
    ):(
        <div>Company not</div>
    )}
    </>
  )
}

export default CompanyPage