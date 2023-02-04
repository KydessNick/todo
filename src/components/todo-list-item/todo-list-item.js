import React from "react";

import './todo-list-item.css'

// const TodoListItem = ({label, important = false, mapped = 0} ) =>{

export default class TodoListItem extends React.Component {

    // ================== Создание объекта State ==================================
// 1. Version
    // constructor(){
    //     super();
    //     this.state ={
    //         done: false
    //     }
    // }

    // state = {
    //     done: false,
    //     important: false,
    // }


    // ================== Создание функции слушателя ==================================
    // constructor(){
    //     super()
    // 2 способ    this.onLabelClick = () =>{
    //     console.log(`click : ${this.props.label}`)
    //     }
    // }
    
    // 3.sposob
    // onLabelClick = () =>{
    //         console.log(`click : ${this.props.label}`)

    //         this.setState(({done}) => {
    //            return {
    //             done: !done
    //            }
    //         })
    //     }
    // onBtnImportant = () => {
    //     console.log('clicked')

    //     this.setState((state) => {
    //         return {
    //             important: !state.important
    //         }
    //     })
    // }


        // }

    // 1.sposob onLabelClick(){
    // console.log(`click : ${this.props.label}`)
    // }
    // + onClick={this.onLabelClick.bind(this)}>

    // ========Выше варианты создания функции слушателя ===========


    render(){
       const {label, onDeleted,
              onDone, onImportant,
              done,  important } = this.props;


    //    const {done,  important = false} = this.state \ деструктурируем из state


        let classNameDone = 'todo-list-item';
        if(done){
            classNameDone += ' done'
        }

        if(important){
            classNameDone += ' important'
        }

// Можно прописывать стили при помощи отдельной переменной 
        // const liStyle ={
        //         color : important ? 'steelblue':'black',
        //         fontWeight : important ? 'bold':'normal'
        //     }
        
            return (
                <span 
                    className={classNameDone}> 
                    <span 
                        className="todo-list-item__label" 
                        // style={liStyle}
                        // onClick={this.onLabelClick} 
                        onClick={onDone} >
                        {label}
                    </span>
        
                    <button
                        type="button"
                        className="btn btn-outline-success btn-sm float-right"
                        onClick={onImportant} >
                        <i className="fa fa-exclamation"></i>
                    </button>
        
                    <button type="button"
                            className="btn btn-outline-danger btn-sm float-right"
                            onClick={onDeleted}>
                            <i className="fa fa-trash-o" />
                    </button>
                </span>
        
            )
        
    }

}

// const TodoListItemFunc = ({label, important = false} ) =>{

//     const liStyle ={
//         color : important ? 'steelblue':'black',
//         fontWeight : important ? 'bold':'normal'
//     }

//     return (
//         <span
//             className="todo-list-item"> 
//             <span
//                 className="todo-list-item__label" 
//                 style={liStyle}>
//                 {label}
//             </span>

//             <button
//                 type="button"
//                 className="btn btn-outline-success btn-sm float-right">
//                 <i className="fa fa-exclamation"></i>
//             </button>

//             <button type="button"
//                     className="btn btn-outline-danger btn-sm float-right">
//                     <i className="fa fa-trash-o" />
//             </button>
//         </span>

//     )
// }
// export default TodoListItem;