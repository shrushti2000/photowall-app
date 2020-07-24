import React from 'react';
import {Link} from 'react-router-dom';
class  AddPhoto extends React.Component{
    constructor(){
        super()
        this.handleSubmit=this.handleSubmit.bind(this)
    }



    handleSubmit(event){
        event.preventDefault();
        const imageLink=event.target.elements.Link.value;
        const description=event.target.elements.description.value;
        const post={
            id:Number(new Date()),
            description:description,
            imageLink:imageLink
        }
        if(description && imageLink){
            this.props.startAddingPost(post)
            this.props.onHistory.push('/')
        }

    }



    render(){
        return (
            <div>
                
                <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Link" name="Link"/>
                    <input type="text" placeholder="description" name="description"/>
                    <button className="remove-btn">Post</button>
                </form>
                </div>
                
            </div>
        )
    }
}
export default AddPhoto;