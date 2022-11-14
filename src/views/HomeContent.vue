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
            <Card/>
           
        </div>
    <div class="container-fluid col-4 text" >
        <Create/>
    </div>
    </div>

    
</template>  
<script>


import Card from "@/components/Card.vue";
import Create from "@/components/Create.vue";

export default{  

 components:{ Card,Create}

}
</script>
