import React, {Component} from 'react';
import Photowall from './Photowall';
import Title from './Title';
import AddPhoto from './AddPhoto'

class Main extends Component{
    constructor(){
        super();
        this.state = {
            posts: [],
            screen: 'wall'// wall; addPhoto;
        }
        this.removePhoto = this.removePhoto.bind(this);
        this.addPhoto = this.addPhoto.bind(this);
        console.log('constructor');
    };
    addPhoto(){
        this.setState({
            screen: 'addPhoto'
        });
    };
    removePhoto(postRemoved){
        console.log(postRemoved.description);
        this.setState((state) => ({
            posts: state.posts.filter(post => post !== postRemoved )
        }));
    };
    componentDidMount(){
        const data = SimulateFetchFromDatabase();
        this.setState({
            posts: data
        });
        console.log('componentDidMount');
    }
    componentDidUpdate(prevProps, prevState){
        console.log('componentDidUpdate');
        console.log(prevState.posts);
        console.log(this.state);
    }
    render(){
        console.log('render');
        return(
            <div>
                {
                    this.state.screen === 'wall' && (
                    <div>
                        <Title title='Photowall' />
                        <Photowall posts={this.state.posts}
                                   onPhotoRemoved={this.removePhoto}
                                   addPhoto={this.addPhoto}/>
                    </div>
                    )
                }
                {
                    this.state.screen === 'addPhoto' && (
                    <div>
                        <AddPhoto/>
                    </div>
                    )
                }
            </div>
        );
    }
}

function SimulateFetchFromDatabase(){
    return [{
        id: "0",
        description: "Alien??",
        imageLink: "http://media1.santabanta.com/full/hollywood%20movies/alien/ali2d.jpg"
    }, {
        id: "1",
        description: "Universe!",
        imageLink: "http://media1.santabanta.com/full2/Nature/Universe/universe-71a.jpg"
    }, {
        id: "2",
        description: "On a vacation!",
        imageLink: "http://media1.santabanta.com/full4/Nature/Architectural/architectural-85a.jpg"
    }, {
        id: "3",
        description: "My Photography!",
        imageLink: "http://media1.santabanta.com/full2/Nature/Birds/birds-305a.jpg"
    }, {
        id: "4",
        description: "Kareena Kapoor!",
        imageLink: "http://media1.santabanta.com/full2/Indian%20%20Celebrities(F)/Kareena%20Kapoor/kareena-kapoor-246a.jpg"
    }]
}
export default Main;