import React, { useEffect, useState } from "react";
import fetchData from "../api/fetchData";

interface MyInfoType {
    name: string;
    age: number;
    job: string;
}

const resource = fetchData("/myuserinfo");

function MyInfo() {
    const myInfo = resource.read();

    return (
        <>
            <p>name: {myInfo?.name}</p>
            <p>age: {myInfo?.age}</p>
            <p>job: {myInfo?.job}</p>
        </>
    );
}

export default MyInfo;
