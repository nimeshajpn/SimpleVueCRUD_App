import axios from "axios"

export class ApiConnection{

    static url= 'https://localhost:7178';


    static getAll(){

     let dataUrl=this.url +'/Expense' ;

    
      return axios.get(dataUrl);
      
    }
    static Delete(id){
    
      let dataUrl=this.url + '/Expense/' +id ;

      return axios.delete(dataUrl)
    }
    static Create(obj){
      
    
      let dataUrl=this.url + '/Expense/' ;
      return axios.post(dataUrl,obj);
    }
    static Update(obj){
      
      console.log(obj);
      let dataUrl=this.url + '/Expense/'+obj.id ;
      return axios.put(dataUrl,obj);
    }





}