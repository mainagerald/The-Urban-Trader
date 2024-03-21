import axios from "axios";
import { string } from "yup";
import { CommentPost } from "../Models/CommentPost";
import { handleError } from "../Helpers/ErrorHandler";

const api = "http://localhost:5101/api/v3/comment/";

export const commentPostApi=async (title:string, content:string, symbol:string)=>{
    try{
        const data=await axios.post<CommentPost>(api+ `${symbol}`,{
            title:title,
            content:content,
        })
        return data;
    }catch(error){
        handleError(error);
    }
}
