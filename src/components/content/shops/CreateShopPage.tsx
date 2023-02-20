import InputText from "../../common/InputText"


type CSType = {
    createShopData: any,
    createShopExamples: any
}

function CreateShopPage ({createShopData, createShopExamples}:CSType) {
    return(
        <div>
            <InputText nameFor='num1' nameOfLabel='назовите магазин/сервис' valueOfInput={createShopData.nameOfShop}/>
            <InputText nameFor='num2' nameOfLabel='выберите основную категорию' valueOfInput={createShopData.chosenCategory}/>
            <InputText nameFor='num3' nameOfLabel='тип товара' valueOfInput={createShopData.chosenTypeOfProduct}/>
            <InputText nameFor='num4' nameOfLabel='тип услуги' valueOfInput={createShopData.chosenTypeOfService}/>
            <InputText nameFor='num5' nameOfLabel='Город' valueOfInput={createShopData.chosenCity}/>
        </div>
    )
}


export default CreateShopPage