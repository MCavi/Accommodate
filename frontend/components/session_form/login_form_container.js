import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = state => ({
    errors: state.errors.session,
    formType: 'Login'
})

const mdp = dispatch => ({
    actionForm: (user) => dispatch(login(user)),
    // otherForm: (
    //     <button onClick={() => dispatch(openModal('signup'))}>
    //         Signup
    //   </button>
    // ),
    // closeModal: () => dispatch(closeModal())
})

export default connect(msp, mdp)(SessionForm);