"use client"
import { useRouter } from "next/navigation"

function OrderProductPage() {

  const router = useRouter();
  const handleClick = () => {
    console.log("Botão clicado");
    router.push("/")
  }
  return (
    <div>
      <h1>Order page</h1>
      <button onClick={handleClick} >Place Order</button>
    </div>
  )
}

export default OrderProductPage