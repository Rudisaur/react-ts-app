import React from "react";
import CreateShopPage from "./CreateShopPage";
import { connect, ConnectedProps, ConnectProps } from "react-redux";
import { setCreateShopExamplesAC } from "../../../redux-store/shopsReducer";
import { RootDispatch, RootState } from "../../../redux-store/store";


function mapDispatchToProps (dispatch:RootDispatch){
    return {
        setCreateShopExamples: (createShopExamples: any) => {dispatch(setCreateShopExamplesAC(createShopExamples))}
    }
}
function mapStateToProps (state:RootState) {
    return {
        createShopExamples: state.shopsPage.createShopExamples,
        createShopData: state.shopsPage.createShopData
    }
}

 function CreateShopAPI (props:any){

        return (
            <div><CreateShopPage createShopData={props.createShopData} createShopExamples = {props.createShopExamples}/></div>
        )
}




let CreateShopContainer = connect(mapStateToProps, mapDispatchToProps)(CreateShopAPI)
type CSType = ConnectedProps<typeof CreateShopContainer>


export default CreateShopContainer