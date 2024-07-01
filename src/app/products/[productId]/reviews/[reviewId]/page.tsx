import React from 'react'
import { notFound } from 'next/navigation';

type ProductReviewProps = {
    params: {
        reviewId: number;
        productId: number;
    }
}

export default function ProductReview({params}: ProductReviewProps) {
    const {reviewId, productId} = params;
    if(productId < 5 && reviewId < 100){
        return(
                <>
                <div>Review for {reviewId} for product id {productId}</div>
                <br />
                <div className='flex items-center justify-center'>
                    <div className='animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-blue-500'></div>
                    <span>Loading...</span>
                </div>
                </>            
        )
    } else {
        notFound();
    }
  

}
