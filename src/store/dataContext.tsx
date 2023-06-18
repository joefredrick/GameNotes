import React from "react";

const DataContext = React.createContext({
    signIn: (data) => {},
    signOut: () => {},
})

export default DataContext;