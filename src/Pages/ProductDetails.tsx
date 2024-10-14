import { useParams } from "react-router"
import CardData from "../components/Cards/CardData"


const ProductDetails = () => {
    const {id} = useParams()

    const product = CardData.find((item)=>item.id === Number(id))


  return (
    <div>
        <h1>{product?.title} ProductDetails</h1>
    
    <img src={product?.img} />
    </div>
  )
}

export default ProductDetails