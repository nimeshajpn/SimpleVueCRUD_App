<template>
    <div class="container-fluid">
    <Div class="container-fluid   mt-3 ">
        <div class=" row col-12  m-auto p-2">
            <div class="col-0 col-sm-4 col-md-6 col-lg-7  col-xl-7 ">
                <p class="h3  col-12 fw-bold" style="color: #880E4F;" > Add New Expense  
                    <router-link to="/" style="background-color: #880E4F;" v-on:click="openCreate()" class="btn btn-success btn-sm m-2"><i class=" fa fa-plus-circle"></i> New </router-link>
                </p>
                
            </div>
            <div class=" row card col-12 col-sm-8 col-md-6 col-lg-5  col-xl-5 p-2 "  style="background-color: #880E4F;"  >
                             <div class=" row col-12 m-auto " >
                                <p class="text-center text-light  col-4  p-1 fw-bold m-auto  " style="background-color: #880E4F;" > Saving : {{total}} </p>
                            
                             
                                <p class="text-center  m-auto col-4 p-1 fw-bold text-light  " style="background-color: #880E4F;" > Income : {{income}} </p>
                                <p class="text-center  m-auto col-4 p-1 fw-bold text-light " style="background-color: #880E4F;" > Expense : {{expense}} </p>
                            </div>
            </div>
           
            
        </div>
    </Div>

    
    <div class="  ">
        <div class=" m-auto   row col-12 ">
        
                 <div class="container-fluid   col-0 col-sm-7 col-md-8 col-lg-8  col-xl-8  text" >
                   

                     <Card v-on:reUpdateModel="upDateModelF($event)"/>
           
                 </div>
                    <div class="container-fluid   col-12    col-sm-5 col-md-4 col-lg-4  col-xl-4   text border-start border-3" >
        
                           <div v-if="updateM=='null'" >
                                 <Create/>
                          </div>

                          <div  v-else>
                                 <Update v-bind:DataModel="updateM"/>
                        </div>
                     </div>
    </div>
    </div>

</div>
</template>  
<script>


import Card from "@/components/Card.vue";
import Create from "@/components/Create.vue";
import Update from "@/components/Update.vue";
import { ApiConnection } from "@/services/ApiConnection";
export default{  

 components:{ Card,Create,Update},
 

 data: function(){
    return{

        updateModel : {
            category:'',
            type:'',
            date:'',
            amount:0,
            description:'',

         },
         updateM:'null',

         listClose:true,
         createClose:true,
         updateClose:true,
         DataList:[],
         total:0,
         income:0,
         expense:0

    }
 },created: async function () {
 
 let Response =await ApiConnection.getAll();
 this.DataList = Response.data;


  

 for(let a of this.DataList)
    {
        console.log(a.type);

        if(a.type =='Income'){

           this.income=this.income+a.amount;
          }
        else{

            this.expense=this.expense+a.amount;
        }


    }
    this.total=0;
    this.total=this.income-this.expense;




  
  

 
},
beforeUpdate: function(){




},
updated(){

},
 methods: {

    upDateModelF(obj){
        

    this.updateModel=obj



    this.updateM=this.updateModel
    
    },
    openCreate(){

        
        window.location.reload();

    },




 }

}
</script>
