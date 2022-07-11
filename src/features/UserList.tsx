import React, { useEffect, useState } from "react";

interface MemberType {
    name: string;
    age: number;
}

function UserList() {
    const [member, setMember] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/userlist");
            const json = await res.json();

            setMember(json);
        };
        fetchData();
    }, []);

    return (
        <>
            <ul>
                {member.map((el: MemberType, i) => (
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
