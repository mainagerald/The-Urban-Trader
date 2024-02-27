import React from 'react'
import Table from '../../Components/Tables/Table'
import RatioList from '../../Components/RatioList/RatioList'
import { testIncomeStatementData } from '../../Components/Tables/testData'
import { config } from 'dotenv'
import IncomeStatement from '../../Components/IncomeStatement/IncomeStatement'

type Props = {}

const tableConfig =[
  {
    label: "Market Cap",
    render: (company: any)=> company.marketCapTTM,
    subTitle: "Total value of a company's share of stock."
  }
]

const DesignPage = (props: Props) => {
  return (
    <>
    <h1>Urban Trader Blueprint</h1>
    <RatioList data={testIncomeStatementData} config={tableConfig}/>
    <Table configs={config} data={IncomeStatement}/>
    <h4>Table takes a configuration object and company data as parameters. Config to style your table!</h4>
    </>
  )
}

export default DesignPage