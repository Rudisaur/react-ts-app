import React from "react";
import { Route, Routes } from "react-router-dom";
import Shops from "./Shops";



class ShopsContainer extends React.Component {

componentDidMount() {
    
}

render () {
    return (
        <Routes>
            <Route><Shops /></Route>
        </Routes>
       
        )
}
}



