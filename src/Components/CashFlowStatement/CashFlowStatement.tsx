import React, { useEffect, useState } from 'react'
import { CompanyCashFlow } from '../../CoDataTypes';
import { useOutletContext } from 'react-router';
import { getCashFlowStatement } from '../../API';
import Table from '../Tables/Table';
import Spinner from '../Spinner/Spinner';
import { formatLargeMonetaryNumber } from '../Helpers/NumberFormats';


type Props = {}

const config = [
  {
    label: "Date",
    render: (company: CompanyCashFlow) => company.date,
  },
  {
    label: "Operating Cashflow",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.operatingCashFlow),
  },
  {
    label: "Investing Cashflow",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.netCashUsedForInvestingActivites),
  },
  {
    label: "Financing Cashflow",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(
        company.netCashUsedProvidedByFinancingActivities
      ),
  },
  {
    label: "Cash At End of Period",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.cashAtEndOfPeriod),
  },
  {
    label: "CapEX",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.capitalExpenditure),
  },
  {
    label: "Issuance Of Stock",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.commonStockIssued),
  },
  {
    label: "Free Cash Flow",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.freeCashFlow),
  },
];

  

const CashFlowStatement = (props: Props) => {
    const ticker = useOutletContext<string>();
    const [cashFlowData, setCashFlowData] = useState<CompanyCashFlow[]>();

    useEffect(() =>{
        const getCompanyCashFlows = async () =>{
            const result = await getCashFlowStatement(ticker);
            setCashFlowData(result!.data);
        };
        getCompanyCashFlows();
    }, []);

  return (
    <>
    {cashFlowData? (
        <Table configs={config} data={cashFlowData}></Table>
    ):(
      <Spinner/>
      )}
    </>
  )
}

export default CashFlowStatement