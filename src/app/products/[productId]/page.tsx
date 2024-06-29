import React from 'react'


type ProductDetailProps = {
  params: {
    productId: string
  }
}
export default function ProductDetail({params}: ProductDetailProps) {
  return (
    <div>Product Detail of Product {params.productId}</div>
  )
}
