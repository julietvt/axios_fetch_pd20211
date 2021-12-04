import React from 'react';
import {useState, useEffect} from 'react';

const UserLoaderH = (props) => {
    const [users, setUsers] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [isError, setIsError] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const load = () => {
        setIsFetching(true);
        fetch(`https://randomuser.me/api/?seed=pd2021&results=5&inc=name,email&page=${currentPage}`)
        .then(response => response.json())
        .then(data => { 
            setUsers(data.results);
            //console.log(data.results);
            }
            )
        .catch(error => {setIsError(true)})
        .finally(() => {setIsFetching(false)});
    }

    useEffect( () => {
        load();
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