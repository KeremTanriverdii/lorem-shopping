import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { db } from '../store/Firebase';
const ProductCard = React.lazy(() => import('../components/ProductCard'))

function CategoryPage() {
    // Get categoryId paramater url (/category/:categoryId)
    const { categoryId } = useParams();
    // 'Products' react state was created to retrieve and assign the queried products.
    const [products, setProducts] = useState([]);


    // Firestore products get fetch with query
    useEffect(() => {
        const fetchData = async () => {
            try {
                const q = query(collection(db, 'products'), where('productsObj.categoryId', '==', categoryId))
                const querySnapshot = await getDocs(q);
                const getProducts = querySnapshot.docs.map((doc) => {
                    const data = doc.data()
                    return data.productsObj
                })
                setProducts(getProducts);
            } catch (error) {
                console.log('Get a Error ', error)
            }
        }
        fetchData()
    }, [categoryId, db])

    return (
        <div className='product-list'>
            {products.map((product, productIdx) => (
                <Link key={productIdx} to={`/product/${product.slug}`}>
                    <React.Suspense fallback={<div>Loading...</div>}>
                        <ProductCard productDetails={product} />
                    </React.Suspense>
                </Link>
            ))}
        </div>
    )
}

export default CategoryPage