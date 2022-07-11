import React, { useEffect, useState } from "react";
import fetchData from '../api/fetchData';

interface MemberType {
    name: string;
    age: number;
}

const resource = fetchData('/userlist');

function UserList() {
    const member = resource.read();
    
    return (
        <>
            <ul>
                {member.map((el: MemberType, i: number) => (
                    <li key={i}>
                        <div>name: {el.name}</div>
                        <div>age: {el.age}</div>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default UserList;
