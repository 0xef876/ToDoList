
<template>
<div class="page">
    <header><h1>Vue Fire todo1</h1></header>
    <main>
      <div class="todos">
        <div class="write">
          <input type="text" v-model="content" @keyup.enter="addItemText" ref="writeArea"/>
          <button class="btn add" v-on:click="addItemText">Add</button>
        </div>
        <ul class="list" v-for="data in todos" :key="data.text">
          <li id = "text" >
            <i :class="[data.state ==='yet' ? 'far ' : 'fas ', 'fa-check-square']"></i>
            <span>
              {{ data.text }}
              <b>
                <a href="">Edit</a>
                <a href="">Del</a>
              </b>
            </span>
          </li>
        </ul>
      </div>
    </main>
    </div>
</template>

<script>
export default {
  data(){
    return {
      content : '',
  todos:[
        {text: '공부하기', state: 'yet'},
        {text: '운동하기', state: 'done'},
        {text: '글쓰기', state: 'done'},
      ]
  }},
  methods:{
  addItemText()
  {
    this.todos.push({text: this.content, state : 'yet'})
    this.content = ''
  }
  
  }
,mounted()
{
  this.$refs.writeArea.focus();
}

}

</script>

<style>

</style>