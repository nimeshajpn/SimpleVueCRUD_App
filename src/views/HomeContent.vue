<template>
    <Div class="container-fluid  mt-3 ">
        <div class=" row">
            <div class="col">
                <p class="h3  fw-bold" style="color: #880E4F;" > Add New Expense  
                    <router-link to="/" style="background-color: #880E4F;" v-on:click="openCreate()" class="btn btn-success btn-sm m-2"><i class=" fa fa-plus-circle"></i> New </router-link>
                </p>
            </div>
        </div>
    </Div>

    
    <div class=" row col-12 ">
        
        <div class="container-fluid   col-0    col-sm-7 col-md-8 col-lg-8   col-xl-8  text" >
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

    
</template>  
<script>


import Card from "@/components/Card.vue";
import Create from "@/components/Create.vue";
import Update from "@/components/Update.vue";

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

    }
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
