<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <div v-show="createClose"  class="p-2 col-12 ">
        <form class="form-group  " >
            <div class="form-control form-col col-12 p-3"  >
                <div class="text-end">
                   
                     <a ><i  v-on:click="closeCreate" class=" p-1 pe-1 fa fa-close fa-1x"></i> </a>
        
                  </div>
                <div class="text-center form"  style="margin-top: 0px;">
                        <h3>{{formName}}</h3>
                </div>

                <div class=" form"  style="margin-top: 10px;">
                    <input type="number" class="form-control" name="Amount" placeholder="Amount" v-model="dataModel.amount" >
                </div>
                <div class="form"  style="margin-top: 10px;">
                    <input  class="form-control" name="Amount" placeholder="Description"  v-model="dataModel.description">
                </div>
                <div class="form"  style="margin-top: 10px;">
                      <select class="form-control" name="Category"  v-model="dataModel.category">

                                        <option>Food</option>
                                        <option>Clothing</option>
                                        <option>Fruits</option>
                                        <option>Shopping</option>
                                        <option>Transport</option>
                                        <option>Home</option>
                                        <option>Pet</option>
                                        <option>Others</option>
    
    
    
                                    </select>
                </div>
                <div class="form"  style="margin-top: 10px;">
                    <select class="form-control" name="Type"    v-model="dataModel.type"  >

                                        <option>Income</option>
                                        <option>Expense</option>



                    </select>
                </div>    
                <div class="form"  style="margin-top: 10px;">
                    <input type="datetime-local" class="form-control" name="Date"  v-model="dataModel.date">
                </div>
                <div class="form col-12  text-center"  style="margin-top: 10px;">
                   <input type="submit"   v-on:click="createE" class=" col-5 text-center form-group btn btn-primary m-1" >
                   <button type="button"   v-on:click="Clear" class=" col-5 text-center form-group btn btn-secondary m-1" >Clear</button>
                </div>
            </div>
           
        </form>
  <pre>{{upModel}}</pre>
  <pre>{{remodel}}</pre>
    </div>
</template>
<script>

import { ApiConnection } from "@/services/ApiConnection";
export default {
    props:['upModel'],
    data: function(){
        return{
         dataModel : {
            category:'',
            type:'',
            date:'',
            amount:0,
            description:'',

         },
         remodel:this.upModel,
         createClose : true,
         updateClose : false,
         formName:'Create Form',

            
        }
    },
    beforeCreate:  function() {
 
        console.log("s");
       

 
},
    methods:{

        async createE(){
            
            ApiConnection.Create(this.dataModel)
            window.location.reload();
        },
        closeCreate(){

            this.createClose=false;
        },
        Clear(){


            this.dataModel=null;
            window.location.reload();
        }




    }


}
</script>
