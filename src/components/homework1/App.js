import { useState } from 'react'
import './App.css'
import OrderList from './components/OrderList'
import Summary from './components/Summary'

// 產品訂購的項目 因為 Product summary 都需要 放在父層App.js
const products = [
  {
    id: 1,
    name: '咖啡色 T-shirt',
    category: 'Shirt',
    image: 'https://i.imgur.com/1GrakTl.jpg',
    price: 300,
  },
  {
    id: 2,
    name: '白色 T-shirt',
    category: 'Shirt',
    image: 'https://i.imgur.com/ba3tvGm.jpg',
    price: 200,
  },
  {
    id: 3,
    name: '黑色 T-shirt',
    category: 'Shirt',
    image: 'https://i.imgur.com/pHQ3xT3.jpg',
    price: 450,
  },
]
const initStateWithObjcet = (products) => {
  const state = []

  for (let i = 0; i < products.length; i++) {
    state.push({ ...products[i], count: 1 })
  }

  return state
}

function App() {
  // const [myProducts, setMyProducts] = useState(products)
  const [productsInOrder, setProductsInOrder] = useState(
    initStateWithObjcet(products)
  )

  // Summary
  // 計算目前所有的商品數量
  const productCount = () => {
    let totalCount = 0

    for (let i = 0; i < productsInOrder.length; i++) {
      totalCount += productsInOrder[i].count
    }

    return totalCount
  }

  // 計算目前所有的商品總價
  const total = () => {
    let sum = 0

    for (let i = 0; i < productsInOrder.length; i++) {
      sum += productsInOrder[i].count * productsInOrder[i].price
    }

    return sum
  }

  return (
    <>
      <div className="card">
        <div className="row">
          <OrderList
            productsInOrder={productsInOrder}
            setProductsInOrder={setProductsInOrder}
          />
          <Summary productCount={productCount()} total={total()} />
        </div>
      </div>
    </>
  )
}

export default App
