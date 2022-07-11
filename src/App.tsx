import React, { Suspense } from "react";
import Loading from "./features/Loading";

import UserList from "./features/UserList";
import MyInfo from "./features/MyInfo";

function App() {
    return (
        <div className="App">
            <UserList />
            <MyInfo />
        </div>
    );
}

export default App;
