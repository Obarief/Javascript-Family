import CardProducts from "../Components/Fragments/CardProduct";
import Button from "../Components/Elements/Button/index";
import Counter from "../Components/Fragments/Counter";

const products = [
  {
    id: 1,
    name: "Stiker",
    price: "100.000",
    image: "/img/stiker-1.jpg",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil odit",
  },
  {
    id: 2,
    name: "Stiker",
    price: "500.000",
    image: "/img/stiker-1.jpg",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil odit atque deleniti possimus molestias adipisci esse assumenda impedit id inventore voluptatibus expedita explicabo distinctio dolorem modi quis, dolore unde error?",
  },
  {
    id: 3,
    name: "Stiker",
    price: "500.000",
    image: "/img/stiker-1.jpg",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil odit atque deleniti possimus molestias adipisci esse assumenda impedit id inventore voluptatibus expedita explicabo distinctio dolorem modi quis, dolore unde error?",
  },
];

const email = localStorage.getItem('email');


const ProductPage = () => {
  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    window.location.href = '/login';
  }

    return (
      <fragment>
        <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
          {email}
          <Button className="ml-5 bg-red-500" onClick={handleLogout}>Logout</Button>
        </div>

      <div className="flex justify-center py-1">
        {products.map((product) => (
          <CardProducts key={product.id}>
            <CardProducts.Header img={product.image}/>
            <CardProducts.Body title={product.name}>
              {product.description}
            </CardProducts.Body>
            <CardProducts.Footer price={`Rp. ${product.price}`} />
          </CardProducts>
        ))}
      </div>
      <Counter></Counter>
      </fragment>
    );
}

export default ProductPage;