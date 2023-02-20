
import Button from "../common/Button"
import LinkDecorated from "../common/LinkDecorated"




function Sidebar (props: any) {
    return (
        <div>
            <div><LinkDecorated link='shops/create-shop' nameOfLink='Create shop'/></div>
            <div><LinkDecorated link='shops' nameOfLink='shops'/></div>
            <div><LinkDecorated link='my-shops' nameOfLink='my shops'/></div>
            <div><LinkDecorated link='other-shops' nameOfLink='other shops?'/></div>
        </div>
    )
}


export default Sidebar