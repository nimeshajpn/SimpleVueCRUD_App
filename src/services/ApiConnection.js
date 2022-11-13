import axios from "axios"

export class ApiConnection{

    static url= 'https://localhost:7178';


    static getAll(){

     let dataUrl=this.url + '/Expense' ;

    
      var a=  axios.get(dataUrl);
      var b=a.data
        return b
    }





}