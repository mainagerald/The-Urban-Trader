import React, { useEffect, useState } from 'react'
import { CompanyTenK } from '../../CoDataTypes';
import { getTenK } from '../../API';
import TenKFinderItem from './TenKFinderItem/TenKFinderItem';
import Spinner from '../Spinner/Spinner';

type Props = {
    ticker: string;
}

const TenKFinder = ({ticker}: Props) => {
const[companyData, setCompanyData] = useState<CompanyTenK[]>();

useEffect(()=>{
    const getTenKData = async() =>{
        const result = await getTenK(ticker);
        setCompanyData(result?.data)
    };
    getTenKData();
}, [ticker])

  return (
    <div className='inline-flex rounded-md shadow-sm m-4'>
        {companyData?(
            companyData.slice(0,7).map((tenK)=>{
                return <TenKFinderItem tenK={tenK}/>
            })
        ):(
            <Spinner/>
        )}
    </div>
  )
}

export default TenKFinder