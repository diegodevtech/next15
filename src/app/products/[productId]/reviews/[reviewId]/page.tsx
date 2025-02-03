import { 
  // notFound, 
  redirect 
} from "next/navigation";

async function ProductReview({
  params,
}: {
  params: Promise<{ reviewId: string; productId: string }>;
}) {
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
