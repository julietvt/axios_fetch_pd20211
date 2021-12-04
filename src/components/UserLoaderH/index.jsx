import React from 'react';
import {useState, useEffect} from 'react';
import { loadUsers } from '../../api';

const UserLoaderH = (props) => {
    const [users, setUsers] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [isError, setIsError] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);    

    useEffect( () => {
        setIsFetching(true);
        loadUsers({page: currentPage}).then(data => setUsers(data.results));
    }, [currentPage]);

    const prevPage = () => {
        if(currentPage > 1) setCurrentPage(currentPage - 1); 
    }

    const nextPage = () => {
        setCurrentPage(currentPage + 1);       
    }

    return (
            <>
            {isError && <div>Error load</div>}
            {isFetching && <div>Load...</div>}
            <button onClick={prevPage}>prev page</button>
            <button onClick={nextPage}>next page</button>
            <ul>
                {users.map((user,index) => (
                    <li key={index}>{JSON.stringify(user)}</li>
                ))}
            </ul>
            </>
        );
    }

    export default UserLoaderH;