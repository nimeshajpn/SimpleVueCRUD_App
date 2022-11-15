<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <div v-show="createClose"  class="p-2 col-12 ">
        <form class="form-group  " >
            <div class="form-control form-col col-12 p-3  bg-light"  >
                <div class="text-end">
                   
                     <a ><i  v-on:click="closeCreate" class=" p-1 pe-1 fa fa-close fa-1x"></i> </a>
        
                  </div>
                <div class="text-center form"  style="margin-top: 0px;">
                        <h3>{{formName}}</h3>
                </div>

                <div class=" form"  style="margin-top: 10px;">
                    <input type="number" class="form-control" name="Amount" placeholder="Amount" v-model="dataModel.amount" >
                    <p class="card text-center m-auto text-bg-secondary" v-show="ErrorFind">Empty !!</p>
                </div>
                <div class="form"  style="margin-top: 10px;">
                    <input  class="form-control" name="Amount" placeholder="Description"  v-model="dataModel.description">
                    <p class="card text-center m-auto text-bg-secondary" v-show="ErrorFind">Empty !!</p>
                </div>
                <div class="form"  style="margin-top: 10px;">
                      <select class="form-control" name="Category" placeholder="Category" v-model="dataModel.category">
                        <option selected disabled>Category</option>
                                        <option>Food</option>
                                        <option>Clothing</option>
                                        <option>Fruits</option>
                                        <option>Shopping</option>
                                        <option>Transport</option>
                                        <option>Home</option>
                                        <option>Pet</option>
                                        <option>Others</option>
                                    </select>
                                    <p class="card text-center m-auto text-bg-secondary" v-show="ErrorFind">Empty !!</p>
                </div>
                <div class="form"  style="margin-top: 10px;">
                    <select class="form-control" name="Type"  placeholder="Type"  v-model="dataModel.type"  >

                                        <option>Income</option>
                                        <option>Expense</option>



                    </select>
                    <p class="card text-center m-auto text-bg-secondary" v-show="ErrorFind">Empty !!</p>
                </div>    
                <div class="form"  style="margin-top: 10px;">
                    <input type="datetime-local" class="form-control" name="Date"  v-model="dataModel.date">
                    <p class="card text-center m-auto text-bg-secondary" v-show="ErrorFind">Empty !!</p>
                </div>
                <div class="form col-12  text-center"  style="margin-top: 10px;">
                   <input type="submit"   v-on:click="createE" class=" col-5 text-center form-group btn btn-primary m-1" >
                   <button type="button"   v-on:click="Clear" class=" col-5 text-center form-group btn btn-secondary m-1" >Clear</button>
                </div>
            </div>
           
        </form>
  
    </div>
</template>
<script>

import { ApiConnection } from "@/services/ApiConnection";

export default {
   
    data: function(){
        return{
         dataModel : {
            category:'',
            type:'',
            date:'',
            amount:'',
            description:'',

         },
         
         createClose : true,
         updateClose : false,
         formName:'Create Form',
         ErrorFind:false,

            
        }
    },
    
    methods:{

        async createE(){
            if(this.dataModel.amount=='' || this.dataModel.description=='' || this.dataModel.category=='' ||this.dataModel.type==''|| this.dataModel.date=='' )
            {
                this.ErrorFind=true;

            }
            else
            {
                ApiConnection.Create(this.dataModel)
                window.location.reload();
             }
            
        },
        closeCreate(){

            this.createClose=false;
        },
        Clear(){


            this.dataModel='';
            window.location.reload();
        },


       



    }


}
</script>
