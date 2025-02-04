import { Metadata } from "next"

type Props = {
  params: Promise<{ productId: string }>
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).productId;
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve('iphone')
    }, 1000);
  })
  return {
    title: `Product ${id}: ${title}`,
    description: `Description of product ${id}`
  }
}

async function ProductDetails({ params }: Props) {
  const productId = (await params).productId
  return (
    <div>Product {productId} Details</div>
  )
}

export default ProductDetails