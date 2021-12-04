import React from 'react';
import {useEffect} from 'react';
import { connect } from 'react-redux'
import * as actionCreators from './../../actions';

const UserSagaComponent = (props) => {

    const {users, isFetching, error, getUsers} = props;

    useEffect(() => {
        getUsers();
    },[]);


    return (
            <>
            {isError && <div>Error load</div>}
            {isFetching && <div>Load...</div>}
            <ul>
                {users.map((user,index) => (
                    <li key={index}>{JSON.stringify(user)}</li>
                ))}
            </ul>
            </>
        );
    }

    const mapStateToProps = state => state.user;

    const mapDispatchToProps = dispatch => ({
        getUsers: () => dispatch(actionCreators.getUsersAction()),
    })

    export default connect(mapStateToProps, mapDispatchToProps) (UserSagaComponent);