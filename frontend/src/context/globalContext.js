import React from "react";

export default React.createContext({
    authUser: null,
    checkedAuth: false, // bool if check for authentication done
    board: null, // The board being viwed currently
    setBoard: null, // The setter returned by useAxioGet
});
