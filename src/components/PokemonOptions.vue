<template>
  <div class="options-container">
    <ul>
      <li v-for="poknames in pokeNames" :key="poknames.id" @click="$emit('selected', poknames.id)">
      {{ poknames.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
props:{
  pokeNames:{
    type:Array,
    required:true,
  },
  
}
}



</script>

<style scoped>
.options-container {
  justify-content: center;
  display: flex;
}
ul{
  list-style: none;
  width: 300px;
}
li{
  border-radius: 5px;
  margin-top:10px;
  padding: 10px 0px;
  background-color: rgb(255, 255, 255);
}
li:hover{
  background-color:rgba(204, 204, 204, 0.459);
}
</style>