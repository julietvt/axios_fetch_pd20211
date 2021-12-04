import React from 'react';
import {useState, useEffect, useReducer} from 'react';
import { loadUsers } from '../../api';

const initialState = {currentPage: 1};

const reducer = (state, action) => {
    switch(action.type) {
        case 'NEXT': return {currentPage: state.currentPage + 1};
        case 'PREV': return( state.currentPage > 1 ? {currentPage: state.currentPage - 1} : {currentPage: 1});
        default: throw new Error();
    }
};

const UserLoaderWithReducer = (props) => {
    const [users, setUsers] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [isError, setIsError] = useState(false);
    
    //const [currentPage, setCurrentPage] = useState(1);    
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect( () => {
        setIsFetching(true);
        loadUsers({page: state.currentPage}).then(data => setUsers(data.results));
    }, [state.currentPage]);

    return (
            <>
            {isError && <div>Error load</div>}
            {!isFetching && <div>Load...</div>}
            <button onClick={() => dispatch({type: 'PREV'})}>prev page</button>
            <button onClick={() => dispatch({type: 'NEXT'})}>next page</button>
            <ul>
                {users.map((user,index) => (
                    <li key={index}>{JSON.stringify(user)}</li>
                ))}
            </ul>
            </>
        );
    }

    export default UserLoaderWithReducer;