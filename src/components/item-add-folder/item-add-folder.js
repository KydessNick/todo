import React, {Component} from 'react';
import './item-add-folder.css'

export default class ItemAddFolder extends Component {
    
    // Мой вариант с функцией на кнопке. 
    // onAddItem(){
    //     console.log('clicked')
    // }

    state ={
        label : ''
    }

    onLabelChange =(e)=>{
        // console.log(e.target.value)
        this.setState({
            label : e.target.value
        })
    }

    onSubmit =(e)=>{
        e.preventDefault();
        this.props.onAddElement(this.state.label)
        this.setState({
            label : ' '
        })
    }

    render(){
        return(
            <form   className="item-add-form d-flex"
                    onSubmit={this.onSubmit}>
                <input  type="text"
                        className='form-control'
                        onChange={this.onLabelChange}
                        placeholder="What needs to be done"
                        value={this.state.label}>
                </input>
                <button className='btn btn-outline-secondary'
                >
                Dobavitb element
                </button>
            </form>
        )
    }

}