import axios from "axios"

export class ApiConnection{

    static url= 'https://localhost:7178';


    static getAll(){

     let dataUrl=this.url +'/Expense' ;

    
      return axios.get(dataUrl);
      
    }
    static Delete(id){
      console.log(id);
      let dataUrl=this.url + '/Expense/' +id ;

      return axios.delete(dataUrl)
    }





}