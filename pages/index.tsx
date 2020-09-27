import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    window.fetch('/api/avo')
    .then(response => response.json())
    .then(({ data }) => setProductList(data))
  }, [])

  return (
    <div>
      <Navbar />
      <h1>Hello!</h1>
      {productList.map(product => (
        <div>{product.name}</div>
      ))}
    </div>
  )
}

export default HomePage
