import { connect } from 'react-redux';

import AddComment from '../components/AddComment/AddComment';
import { addComment } from '../redux/actions';

const mapDispatchToProps = (dispatch) => ({
    addComment: (text) => dispatch(addComment(text))
});

export default connect(null,mapDispatchToProps)(AddComment);

