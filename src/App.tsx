import React, { Suspense } from "react";
import Loading from "./features/Loading";

import UserList from "./features/UserList";
import MyInfo from "./features/MyInfo";

function App() {
    return (
        <div className="App">
            <Suspense fallback={<Loading />}>
                <UserList />
            </Suspense>
            <Suspense fallback={<Loading />}>
                <MyInfo />
            </Suspense>
        </div>
    );
}

export default App;
