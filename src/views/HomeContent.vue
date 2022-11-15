<template>
    <Div class="container-fluid  mt-3 ">
        <div class=" row">
            <div class="col">
                <p class="h3 text-success fw-bold" > Add New Expense  
                    <router-link to="/" class="btn btn-success btn-sm m-2"><i class=" fa fa-plus-circle"></i> New </router-link>
                </p>
            </div>
        </div>
    </Div>

    
    <div class=" row col-12 ">
        
        <div class="container-fluid col-8 text" >
            <Card v-on:reUpdateModel="upDateModelF($event)"/>
           
        </div>
    <div class="container-fluid col-4 text border-start border-3" >
        
        <div  v-if="updateModel == null" >
            <Create/>
        </div>
        <div v-else>
            <Create v-bind:upModel=updateM />
        </div>

      
        

    </div>
    </div>

    
</template>  
<script>


import Card from "@/components/Card.vue";
import Create from "@/components/Create.vue";

export default{  

 components:{ Card,Create},
 

 data: function(){
    return{

        updateModel : {
            category:'',
            type:'',
            date:'',
            amount:0,
            description:'',

         },
         updateM:'',

    }
 },
 methods: {

    upDateModelF(obj){
        console.log(obj)

    this.updateModel=obj
    console.log("change")
    console.log(this.updateModel)

    console.log("change22")
    this.updateM=this.updateModel
    console.log(this.updateM)
    }



 }

}
</script>
