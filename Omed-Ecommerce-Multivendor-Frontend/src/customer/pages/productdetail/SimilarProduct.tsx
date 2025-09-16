import React from 'react'

import SimilarProductCard from './SimilarProductCard'

const SimilarProduct = () => {
    return (
        <div className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1
        justify-between gap-y-8 gap-x-6'>

            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item) => <SimilarProductCard />)}

        </div>

    )
}

export default SimilarProduct;
