import axios from "axios"
import { CompanyBalanceSheet, CompanyCashFlow, CompanyComparisonData, CompanyIncomeStatement, CompanyKeyMetrics, CompanyProfile, CompanySearch, CompanyTenK } from "./CoDataTypes";

interface SearchResponse {
    data: CompanySearch[];
};

export const searchCompanies = async (query:string) => {
    console.log('started');
    try{
        const data = await axios.get<SearchResponse>(
            `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=JQ4cRTJbMx5CmzVicDYb1vcYeA5cG4cw`
        );
        // console.log(data);
        return data;
    }
    catch (error){
        if(axios.isAxiosError(error)){
            console.log("error: ", error.message)
            return error.message;
        }else{
            console.log("unexpected error: ", error);
            return "Unexpected error occurred!"
        }
    }
};

export const getCompanyProflie = async (query: string) => {
    try {
        const data = await axios.get<CompanyProfile[]>(`https://financialmodelingprep.com/api/v3/profile/${query}?apikey=JQ4cRTJbMx5CmzVicDYb1vcYeA5cG4cw`)

        return data;
    } catch (error: any){
        console.log("Unexpected error: ", error.message)
    }
};

export const getKeyMetrics = async (query: string) => {
    try {
        const data = await axios.get<CompanyKeyMetrics[]>(`https://financialmodelingprep.com/api/v3/key-metrics-ttm/${query}?apikey=JQ4cRTJbMx5CmzVicDYb1vcYeA5cG4cw`)

        return data;
    } catch (error: any){
        console.log("Unexpected error: ", error.message)
    }
};

export const getIncomeStatement = async (query: string) => {
    try {
        const data = await axios.get<CompanyIncomeStatement[]>(`https://financialmodelingprep.com/api/v3/income-statement/${query}?apikey=JQ4cRTJbMx5CmzVicDYb1vcYeA5cG4cw`)

        return data;
    } catch (error: any){
        console.log("Unexpected error: ", error.message)
    }
};

export const getBalanceSheet = async (query: string) => {
    try {
        const data = await axios.get<CompanyBalanceSheet[]>(`https://financialmodelingprep.com/api/v3/balance-sheet-statement/${query}?apikey=JQ4cRTJbMx5CmzVicDYb1vcYeA5cG4cw`)

        return data;
    } catch (error: any){
        console.log("Unexpected error: ", error.message)
    }
};

export const getCashFlowStatement = async (query: string) => {
    try {
        const data = await axios.get<CompanyCashFlow[]>(`https://financialmodelingprep.com/api/v3/cash-flow-statement/${query}?apikey=JQ4cRTJbMx5CmzVicDYb1vcYeA5cG4cw`)

        return data;
    } catch (error: any){
        console.log("Unexpected error: ", error.message)
    }
};

export const getComparableData = async (query: string) => {
    try {
        const data = await axios.get<CompanyComparisonData[]>(`https://financialmodelingprep.com/api/v4/stock_peers?symbol=${query}&apikey=JQ4cRTJbMx5CmzVicDYb1vcYeA5cG4cw`)

        return data;
    } catch (error: any){
        console.log("Unexpected error: ", error.message)
    }
};

export const getTenK = async (query: string) => {
    try {
        const data = await axios.get<CompanyTenK[]>(`https://financialmodelingprep.com/api/v3/sec_filings/${query}?type=10-K&page=0&apikey=JQ4cRTJbMx5CmzVicDYb1vcYeA5cG4cw`)

        return data;
    } catch (error: any){
        console.log("Unexpected error: ", error.message)
    }
};