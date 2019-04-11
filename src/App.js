import React from 'react';

import './App.css';
import CommentsListContainer from './containers/CommentsListContainer';
import DevTools from './DevTools';
import AddCommentContainer from './containers/AddCommentContainer';

const App = () => {
  return (
    <div className="App">
        <AddCommentContainer />
        <CommentsListContainer />
        <DevTools />
    </div>
  );
}

export default App;