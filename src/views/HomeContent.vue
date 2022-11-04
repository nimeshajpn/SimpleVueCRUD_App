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

    <div class=" row col-12">
        <div class="container-fluid col-6 text" >
           <List/>
           <Card/>
    </div>
    <div class="container-fluid col-6 text" >
          
    </div>
    </div>
</template>  
<script>

import List from '@/components/List.vue';
import Card from "@/components/Card.vue";


export default{  

 components:{ List,Card}

}
</script>
