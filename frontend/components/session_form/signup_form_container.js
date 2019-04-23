import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';
import React from 'react';

const msp = state => ({
    errors: state.errors.session,
    formType: 'Signup',
    otherForm: "Login"

})

const mdp = disaptch => ({
    demoLogin: (user) => dispatch(login(user)),
    actionForm: (user) => dispatch(signup(user)),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
})


export default connect(msp, mdp)(SessionForm);