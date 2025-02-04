import { 
  // notFound, 
  redirect 
} from "next/navigation";

// function getRandomInt(count: number) {
//   return Math.floor(Math.random() * count)
// }

async function ProductReview({
  params,
}: {
  params: Promise<{ reviewId: string; productId: string }>;
}) {
  // const random = getRandomInt(2);
  // if( random === 1 ){
  //   throw new Error("Error loading reviewX")
  // }
  const { reviewId, productId } = await params;
  if (parseInt(reviewId) > 1000) {
    // notFound()
    redirect("/");
  }
  return (
    <div>
      Review {reviewId} for product {productId}
    </div>
  );
}

export default ProductReview;
