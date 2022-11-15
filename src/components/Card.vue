<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Div class="container row">
   
  <div v-for="list of DataList" :key="list" class="col col-12         col-xl-6  col-sm-12 col-md-6 col-lg-6 ">
    <Div  class="m-2 p-2 card col-12 bg-light" style="height: *">
      <Div class="col-12 p-1">
        <div class="text-end">
          <a> <i v-on:click="btnUpdate(list)" class="p-1 fa fa-cogs fa-1x"></i> </a>
          <a ><i  v-on:click="btnDelete(list.id)" class=" p-1 pe-0 fa fa-close fa-1x"></i> </a>
        
        </div>
      </Div>
      <div class="row m-0">
        <div class="text-start col-6">
          <label>{{list.category}}</label>
        </div>
        <div class=" text-end col-6">
          <label>{{list.date}}</label>
        </div>
      </div>
      <div class="row m-0">
        <div class="text-start col-6"> 
          <label>Amount : <a>{{list.amount}}</a></label>
        </div>
        <div class="text-end col-6">
          <label>{{list.type}}</label>
        </div>
      </div>
      <div class="row m-0">
        <div class="text-start col-">
          <label
            >Description : <a>{{list.description}}</a></label
          >
         
        </div>
      </div>
    </Div>
  </div>
  </Div>
</template>
<script>
import { ApiConnection } from "@/services/ApiConnection";

export default {
  constructor() {},

  data: function () {
    return {
      DataList: [],
      DataList2: [],
      
    };
  },
  created: async function () {
 
    let Response =await ApiConnection.getAll();
    this.DataList2 = Response.data;

     for(let b = 0 , a =  this.DataList2.length; a >0;a--,b++){
     

      this.DataList[b]=this.DataList2[a-1];

     

     


     }
     

    
  },
  methods:{
    async loading(){
        
      let Response =await ApiConnection.getAll();
      this.DataList = Response.data;


    },
     async btnDelete(id){

      
      ApiConnection.Delete(id);

      
      window.location.reload();

    },
     btnUpdate(obj){
      

      this.$emit('reUpdateModel',obj)


}


  }
};
</script>
