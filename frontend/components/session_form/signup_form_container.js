import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = state => ({
    errors: state.errors.session,
    formType: 'Signup'
})

const mdp = disaptch => ({
    actionForm: (user) => dispatch(signup(user)),
    // otherForm: (
    //     <button onClick={() => dispatch(openModal('login'))}>
    //         Login
    //   </button>
    // ),
    // closeModal: () => dispatch(closeModal())
})


export default connect(msp, mdp)(SessionForm);