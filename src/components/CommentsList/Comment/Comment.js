import React from 'react';

import { thumbUpComment, thumbDownComment } from '../../../redux/actions';
import './Comment.css';


const Comment = ({text, votesUp, votesDown, id, thumbUpComment, thumbDownComment}) => (
    <li className='Comment'>
        {text}  
        <div>
            votes: 
            <span className='Up'>{votesUp}</span><button onClick={() => thumbUpComment(id)}>THUMB UP!</button>
            <span className='Down'>{votesDown}</span> <button onClick={() => thumbDownComment(id)}>THUMB DOWN...</button>
        </div>
    </li>
);


export default Comment;