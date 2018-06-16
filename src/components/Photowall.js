import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';


function Photowall (props){
    return(
        <div className="photoGrid">
            {props.posts.map((post, index) => <Photo key={index}
                                                     post={post}
                                                     onPhotoRemoved={props.onPhotoRemoved} />)}
        </div>
    );
}

Photowall.propTypes = {
    posts: PropTypes.array.isRequired,
    onPhotoRemoved: PropTypes.func.isRequired
}
export default Photowall;