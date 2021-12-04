import React from 'react';
import {useState, useEffect} from 'react';
import { loadUsers } from '../../api';
import { useDataLoad } from '../../hooks';

const UserLoaderCustomHook = (props) => {

    const {data, isFetching, isError} = useDataLoad(loadUsers);

    return (
            <>
            {isError && <div>Error load</div>}
            {isFetching && <div>Load...</div>}
            <ul>
                {data.map((user,index) => (
                    <li key={index}>{JSON.stringify(user)}</li>
                ))}
            </ul>
            </>
        );
    }

    export default UserLoaderCustomHook;