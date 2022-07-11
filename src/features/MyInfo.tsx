import React, { useEffect, useState } from "react";

interface MyInfoType {
    name: string;
    age: number;
    job: string;
}

function MyInfo() {
    const [myInfo, setMyInfo] = useState<MyInfoType>();

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/myuserinfo");
            const json = await res.json();

            setMyInfo(json);
        };
        fetchData();
    }, []);

    return (
        <>
            <p>name: {myInfo?.name}</p>
            <p>age: {myInfo?.age}</p>
            <p>job: {myInfo?.job}</p>
        </>
    );
}

export default MyInfo;
