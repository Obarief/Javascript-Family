import Button from "../Elements/Button"

const CardProducts = (props) => {
    const {children} = props
    return (
        <div className="w-full max-w-sm bg-blue-800 border border-gray-700 rounded-lg shadow mx-8 flex flex-col ">
            {children}
        </div>
    )
}


const Header = (props) => {
    const {img} = props
    return (

        <a href="#">
            <img src={img} alt="stiker-1" className="p-8 rounded-t-lg" />
        </a>
        
    )
}

const Body = (props) => {
    const {children, name} = props
    return (
        <div className="px-5 pb-5 flex-1 ">
            <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-white py-2" >
                    {name}
                </h5>
                <p className="text-s text-white">{children}</p>
            </a>
        </div>
    )
}

const Footer = (props) => {
    const {price} = props
    return (
        <div className="flex items-center justify-between px-5 py-3">
            <span className="text-xl font-bold text-white">{price}</span>
            <Button className="bg-blue-600">Add To Cart</Button>
        </div>
    )
}

CardProducts.Header = Header
CardProducts.Body = Body
CardProducts.Footer = Footer

export default CardProducts;