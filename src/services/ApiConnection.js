import axios from "axios"

export class ApiConnection{

    static url= 'https://localhost:7178';


    static getAll(){

     const dataUrl=this.url + '/Expense' ;

     return axios.get(dataUrl);


    }





}