import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Photowall (props){
    return(
        <div>
            <Link className="addIcon" to="/AddPhoto"></Link>
            {/*<a onClick={props.addPhoto} className="addIcon" href="#AddPhoto"></a>*/}
            {/*<button onClick={props.addPhoto} className="addIcon"></button>*/}
            <div className="photoGrid">
            {props.posts
                .sort(function(x,y){
                    return y.id - x.id;
                })
                .map((post, index) => <Photo key={index}
                                                     post={post}
                                                     onPhotoRemoved={props.onPhotoRemoved} />)}
            </div>
        </div>
    );
}

Photowall.propTypes = {
    posts: PropTypes.array.isRequired,
    onPhotoRemoved: PropTypes.func.isRequired
}
export default Photowall;