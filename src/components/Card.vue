<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Div class="container">
    <p>{{ DataList }}</p>
    <Div class="m-2 p-2 card col-7 bg-light" style="height: 150px">
      <Div class="col-12 p-1">
        <div class="text-end">
          <a> <i class="p-1 fa fa-cogs fa-1x"></i> </a>
          <a><i class="p-1 pe-0 fa fa-close fa-1x"></i> </a>
        </div>
      </Div>
      <div class="row m-0">
        <div class="text-start col-6">
          <label>Home</label>
        </div>
        <div class="text-end col-6">
          <label>2022/05/25</label>
        </div>
      </div>
      <div class="row m-0">
        <div class="text-start col-6">
          <label>Amount : <i>100</i></label>
        </div>
        <div class="text-end col-6">
          <label>Income</label>
        </div>
      </div>
      <div class="row m-0">
        <div class="text-start col-6">
          <label
            >Description : <i>{{ DataList }}</i></label
          >
          <button v-on:click="click"> Show Data</button>
        </div>
      </div>
    </Div>
  </Div>
</template>
<script>
import { ApiConnection } from "@/services/ApiConnection";

export default {
  constructor() {},

  data: function () {
    return {
      DataList: [],
    };
  },
  created: async function () {
    let Response = await ApiConnection.getAll();

    this.DataList = Response.data;

    
  },
  methods:{

    click(){

      let Response =  ApiConnection.getAll();

this.DataList = Response.data;


    }


  }
};
</script>
