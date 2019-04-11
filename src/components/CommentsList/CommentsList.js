import React from 'react';

import Comment from '../../containers/CommentContainer';

const CommentsList = ({comments}) => (
    <ul style={{listStyleType: 'none'}}>
        {comments.map(
            comment => <Comment key={comment.id} {...comment}/>
        )}
    </ul>
);

export default CommentsList;