import React, {Component} from 'react';

class AddPhoto extends Component{
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        const imgLink = event.target.elements.link.value;
        const description = event.target.elements.description.value;
        const post = {
            id: 6,
            description: description,
            imageLink: imgLink
        }
        if(description && imgLink){
            this.props.onAddPhoto(post);
        }
    }
    render(){
    return (
        <div>
            <h1> Photowall </h1>
            <div>
                <form className="form" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Link" name="link"/>
                    <input type="text" placeholder="Description" name="description"/>
                    <div className="button-container">
                        <button>Post</button>
                    </div>
                </form>
            </div>
        </div>
        );
    }
}

export default AddPhoto;