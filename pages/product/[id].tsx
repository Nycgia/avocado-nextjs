import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const Product = () => {
  const { query: { id }} = useRouter()
  const [product, setProduct] = useState<TProduct>()
  const [displayError, setDisplayError] = useState<boolean>(false)

  useEffect(() => {
    if (id) {
      window.fetch(`/api/avo/${id}`)
        .then(response => {
          if (response.ok) {
            return response.json()
          } else {
            throw 'not found?'
          }
        })
        .then(data => setProduct(data))
        .catch(_error => setDisplayError(true))
    }
  }, [id])

  return (
    <section>
      {displayError
      ? <h1>Not Found!</h1>
      : (
        <>
          <span>Name: {product?.name}</span>
        </>
      )}
    </section>
  )
}

export default Product
