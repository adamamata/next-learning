import { useRouter } from 'next/router'

function productDetails() {
    const router = useRouter(); //define the router
    const productId = router.query.productId; //get product id from the router
  return (
    <div>
        <h1>Details about product {productId}</h1>
    </div>
  )
}

export default productDetails