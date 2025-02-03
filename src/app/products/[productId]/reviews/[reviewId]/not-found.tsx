"use client"
import { usePathname } from "next/navigation"

function NotFound() {
  const pathname = usePathname();
  const productId = pathname.split('/')[2];
  const reviewId = pathname.split('/')[4];
  return (
    <div>Review {reviewId} Not Found for product {productId}</div>
  )
}

export default NotFound