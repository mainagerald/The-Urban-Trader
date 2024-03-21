import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SearchPage from "../Pages/SearchPage/SearchPage";
import CompanyPage from "../Pages/CompanyPage/CompanyPage";
import CompanyProfile from "../Components/CompanyProfile/CompanyProfile";
import IncomeStatement from "../Components/IncomeStatement/IncomeStatement";
import DesignPage from "../Pages/DesignGuide/DesignPage";
import HomePage from "../Pages/HomePage/HomePage";
import BalanceSheet from "../Components/BalanceSheet/BalanceSheet";
import CashFlowStatement from "../Components/CashFlowStatement/CashFlowStatement";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import ProtectedRoutes from "./ProtectedRoutes";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        children:[
            {path: "", element: <HomePage/>},
            {path: "login", element: <LoginPage/>},
            {path: "register", element: <RegisterPage/>},
            {path: "search", element: <ProtectedRoutes><SearchPage/></ProtectedRoutes>},
            {path: "design-guide", element: <ProtectedRoutes><DesignPage/></ProtectedRoutes>},
            {path: "company/:ticker", element: <ProtectedRoutes><CompanyPage/></ProtectedRoutes>,
            children:[
                {path: "company-profile", element: < CompanyProfile/>},
                {path: "income-statement", element: <IncomeStatement/>},
                {path : "balance-sheet", element: <BalanceSheet/>},
                {path : "cashflow-statement", element: <CashFlowStatement/>}
            ]},
        ]
    }
])