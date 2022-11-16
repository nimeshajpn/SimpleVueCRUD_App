<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <div v-if="DataModel!='null'"> 
       
    
    <div v-show="createClose"  class="p-2 col-12 ">
        <form class="form-group  " >
            <div class="form-control form-col col-12 p-3 bg-light shadow"  >
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
                    <input  class="form-control" name="Amount" placeholder="Description"   v-model="dataModel.description">
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
 
    </div>
</div>
</template>
<script>

import { ApiConnection } from "@/services/ApiConnection";
export default {
   props:[
           'DataModel'
          ],
    data: function(){
        return{
         dataModel : {
            category:'',
            type:'',
            date:'',
            amount:'',
            description:'',
            id:''

         },
         
         createClose : true,
         updateClose : false,
         formName:'Update Form',

            
        }
    },beforeCreate: function(){

        console.log("before");
        this.dataModel=this.DataModel;
    },
    created: function(){

        this.dataModel=this.DataModel;


    },beforeMount: function(){

    console.log("beforeMount");
    this.dataModel=this.DataModel;
    },
    mounted: function(){

    console.log("mount");
    this.dataModel=this.DataModel;

    },
    beforeUpdate: function(){



   
        
            this.dataModel=this.DataModel;
        
       
      
       

    },
    














    methods:{

        async createE(){
            
            ApiConnection.Update(this.dataModel)
            window.location.reload();
            this.createClose=false;
        },
        closeCreate(){

            this.createClose=false;
            window.location.reload();
        },
        Clear(){

            
            
            this.dataModel = {
            category:'',
            type:'',
            date:'',
            amount:'',
            description:'',
            id:this.dataModel.id

         }
        }




    }


}
</script>
