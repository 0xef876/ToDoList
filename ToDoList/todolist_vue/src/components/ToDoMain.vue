<template>
  <div class="page">
      <header><h1>Vue Fire todo1</h1></header>
      <main>
        <div class="todos">
          
          <div class="write" v-if="writeState === 'add'">
            <input type="text" v-model="content" @keyup.enter="addItemText" ref="writeArea"/>
            <button class="btn add" v-on:click="addItemText">Add</button>
          </div>
          
          <div class="edit" v-else>
            <input type="text" v-model="editcontent" @keyup.enter="editSave" ref="writeArea"/>
            <button class="btn add" v-on:click="editSave">SAVE</button>
          </div>

          <ul class="list" v-for="(data,i) in todos" :key="data.text">
            <li id = "text" >
            <i @click="box_check(i)" :class="[data.state === 'yet' ? 'far' : 'fas', 'fa-check-square']"></i>
              <span>
                {{ data.text }}
                <b>
                  <a href="" @click.prevent="editshow(i)">Edit</a>
                  <a href="" @click.prevent="remove_task(i)">Del</a>
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
        writeState : 'add',
        crrEditItem : '',
        editcontent : '',
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
    },
    
    box_check(idx)
    {
      if (this.todos[idx].state === 'yet')
      {
        this.todos[idx].state = 'done'
      }
      else if (this.todos[idx].state ==='done')
      {
        this.todos[idx].state = 'yet'
      }
    },
    editshow(index)
    {
      this.crrEditItem = index;
      this.writeState = 'edit'
      this.editcontent = this.todos[index].text

    },
    editSave(){
      this.todos[this.crrEditItem].text = this.editcontent;
      this.writeState = 'add'
      this.crrEditItem = '';
      this.editcontent = '';
    },
    remove_task(idx){
      this.todos.splice(idx,1);
      console.log(this.todos[idx])
    }
    },mounted()
  {
    this.$refs.writeArea.focus();
  }}
  </script>
  
  <style>
  </style>