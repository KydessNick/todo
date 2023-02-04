import React, {Component} from "react";

import AppHeader from "../app-header/app-header";
import AppSearch from "../app-search/app-search";
import TodoList  from '../todo-list/todo-list';
import ItemStatusFilter from '../item-status/item-status-filter';
import ItemAddFolder from "../item-add-folder";

import './app.css';

export default class App extends Component{
    maxId = 100;

    state ={
        todoData : [
          this.createTodoItem('Function abobusfactor  Горнило Циркумфлекс'),
          this.createTodoItem('Drink abobusfactor Func'),
          this.createTodoItem('Function these points were build by mapping an array1'),
          this.createTodoItem('Function abobusfactor  Горнило Циркумфлекс'),
          // {label : 'Drink abobusfacto1',  important:false, id:'1',},
          // {label: 'these points were build by mapping an array1', important:false, id:'3'},
      ],
      term : '',
      filter : 'all'
    } 
    // console.log(AppHeader.todo)
    // console.log(done)
    // console.log(todo={1})
    // console.log(done={3})


    createTodoItem(label){
      return{
        label,
        important : false,
        done : false, 
        id : ++this.maxId
      }
    }

    deleteItem = (id) => {
      console.log('del: ', id)

      this.setState(({todoData})=>{
        
        const idx = todoData.findIndex((el) => el.id === id)
        console.log(idx)
        // todoData.splice(idx, 1); изменяет массив в state
        const before = todoData.slice(0, idx)
        const after = todoData.slice(idx + 1)
        const newArr = [...before, ...after]
        return{
          todoData : newArr
        }
      })
     
    }

    onAddItem = (text) =>{
      console.log(text + ' => btn wes clicked')

      // generate id? ==> maxid
      // array length? 
      // const newItem = {
      //   label: text,
      //   important: false,
      //   id: this.maxId++,
      // }

      // 2 варианта создания элемента в массиве данных ==> через отдельную функцию и ручками)
      const newItem =this.createTodoItem(text)

      // add element in array?
      // push / id: {array.length} 
      this.setState( ({todoData})=>{

        // todoData.push(newItem) так нельзя т.к будет изменен исходный массив

        const newArr = [
          ...todoData,
          newItem
        ]

        return {
           todoData : newArr
          }
      })

    }

    // создаем фукнцию, чтобы уменьшить количество кода
    toggleProperty(arr, id, propName){
      const idx = arr.findIndex((el)=>el.id === id);

    const oldItem = arr[idx];
    const value = !oldItem[propName];

    const item = { ...arr[idx], [propName]: value } ;
    return [
      ...arr.slice(0, idx),
      item,
      ...arr.slice(idx + 1)
      ];
    }
    // toggleProperty(arr, id, propName){
           // const oldItem.done = !oldItem.done / присваеваем state новое значение => изменение стейта делать нельзя
      //1. update data
      // const oldItem = arr[idx];
      // const newItem = {...oldItem, 
      //                     [propName]: !oldItem[propName]}
      //2. constract new arr
      // 1. version
      // const before = arr.slice(0, idx)
      // const after = arr.slice(idx + 1)
      // const newArr = [...before,
      //                 newItem,
      //                 ...after];
      //2. version
    //    const newArr = [
    //     ...arr.slice(0, idx),
    //     newItem,
    //     ...arr.slice(idx + 1)
    //    ]

    // return {
    //   todoData : newArr
    //   }
    // }

    onToggleImportant = (id) =>{
      console.log('Toggle Доне', id)

      this.setState(({todoData})=>{
      return {
        todoData : this.toggleProperty(todoData , id, 'important')
        }
      })
    }

    onToggleDone =(id)=>{
      console.log('Toggle Доне', id)

      this.setState(({todoData})=>{
      return {
        todoData : this.toggleProperty(todoData, id, 'done')
       }
      })
    }

    onSearchChange = (term)=> {
      this.setState({term})
    }
    
    onFilterChange = (filter)=> {
      this.setState({filter})
    }

    search(items, term){
      if(term.length === 0){
        return items
      }

      return items.filter((item)=>{
        return item.label
                        .toLowerCase().indexOf(term.toLowerCase()) > -1
      })
    }

    filter(items, filter){
      switch(filter){
        case 'all':
          return items;
        case 'active':
          return items.filter((item)=> !item.done);
        case 'done':
          return items.filter((item)=> item.done);
        default: 
         return items;
      }
    }

    render(){
      const {todoData , term, filter} = this.state

      const visibleItems = this.filter(
        this.search(todoData, term), filter)

      const doneCount = todoData.filter((el)=> el.done).length;
      const todoCount = todoData.length - doneCount;
    // toDo={todoCount} done={doneCount}
    // console.log(this.state.todoData)

      return (
        <div className='todo-app'>
          <AppHeader toDo= {doneCount} done={todoCount}/>
          <div className='top-panel d-flex'>
            <AppSearch 
            onSearchChange = {this.onSearchChange}/>
            <ItemStatusFilter 
              filter = {filter}
              onFilterChange={this.onFilterChange}
            />
          </div>
    
          <TodoList 
          todos={visibleItems} 
          onDeleted ={this.deleteItem }
          onImportant = {this.onToggleImportant}
          onDone = {this.onToggleDone} />

        <ItemAddFolder 
          onAddElement = {this.onAddItem}/>
        </div>
      )
    }
    
  }
