import React, { useEffect, useState } from 'react'
import { CompanyComparisonData } from '../../CoDataTypes';
import { getComparableData } from '../../API';
import CompFinderItem from './CompFinderItem/CompFinderItem';

type Props = {
    ticker: string;
}

const CompFinder = ({ticker}: Props) => {
    const[companyCompData, setCompanyCompData] = useState<CompanyComparisonData>();
    useEffect(()=>{
        const getComparisons = async() => {
            const value = await getComparableData(ticker);
            setCompanyCompData(value?.data[0]);
        };
        getComparisons();
    }, [ticker]);
  return (
    <div className='inline-flex rounded-md shadow-sm m-4'>
        {companyCompData?.peersList.map((ticker)=>{
            return<CompFinderItem ticker={ticker}/>
        })}
    </div>
  )
}

export default CompFinder