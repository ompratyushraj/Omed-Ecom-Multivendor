import React, { useEffect, useState } from 'react'
import StarIcon from '@mui/icons-material/Star';
import { Button, Divider } from '@mui/material';
import { Add, AddShoppingCart, FavoriteBorder, LocalShipping, Remove, Shield, Wallet, WorkspacePremium } from '@mui/icons-material';
import { teal } from '@mui/material/colors';
import SimilarProduct from '../../components/product/SimilarProduct';
import ReviewCard from '../../components/review/ReviewCard';
import { useAppDispatch, useAppSelector } from '../../state/Store';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../../state/user/customerProductSlice';

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useAppDispatch();
  const {productId} = useParams();
  const {product} = useAppSelector(store => store.customerProduct)
  const [activeImage, setActiveImgae] = useState(0);

  useEffect(() => {
    dispatch(fetchProductById(Number(productId)))
  }, [productId]);

  const handleActiveImage = (value:number) => () => {
    setActiveImgae(value);
  }
  return (
    <div className='px-5 lg:px-20 pt-10'>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>

        <section className='flex flex-col lg:flex-row gap-5'>
          <div className='w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3'>
            {product?.images.map((item, index) => <img onClick={handleActiveImage(index)} className='lg:w-full w-[50px] bg-neutral-400
          cursor-pointer rounded-md' src={item} alt="productsecondaryimage" />)}
          </div>
          <div className='w-full lg:w-[85%]'>
            <img className='w-full rounded-md bg-slate-400' src={product?.images[activeImage]} alt="productprimaryimage" />
          </div>
        </section>

        <section>
          <h1 className="font-bold text-lg text-primary-color">
            {product?.seller?.businessDetails.businessName}
          </h1>
          <p className="text-gray-500 font-semibold">{product?.productTitle}</p>
          <div className="flex justify-between items-center py-2 border w-[180px] px-3 mt-5">
            <div className="flex gap-1 items-center">
              <span>4</span>
              <StarIcon sx={{ color: "teal[500]", fontSize: "17px" }} />
            </div>
            <Divider orientation='vertical' flexItem />
            <span>
              234 Ratings
            </span>
          </div>

          <div
            className='price flex items-center gap-3 mt-5 text-2xl'>
            <span className="font-sans text-gray-800">
              ₹ {product?.sellingPrice}
            </span>
            <span className="line-through text-gray-400">
              ₹ {product?.mrpPrice}
            </span>
            <span className='text-primary-color font-semibold'>
              {product?.discountPercent}%
            </span>
          </div>
          <p>Inclusive of all taxes. Free Shipping above ₹1500.</p>

          <div className='mt-7 space-y-3'>

            <div className='flex items-center gap-4'>
              <Shield sx={{ color: teal[500] }} />
              <p>Authentic & Quality Assured</p>
            </div>

            <div className='flex items-center gap-4'>
              <WorkspacePremium sx={{ color: teal[500] }} />
              <p>100% money back guarantee</p>
            </div>

            <div className='flex items-center gap-4'>
              <LocalShipping sx={{ color: teal[500] }} />
              <p>Free Shipping & Returns</p>
            </div>

            <div className='flex items-center gap-4'>
              <Wallet sx={{ color: teal[500] }} />
              <p>Pay on delivery might be available</p>
            </div>
          </div>

          <div className='mt-7 space-y-2'>

            <h1>
              QUANTITY
            </h1>
            <div className='flex items-center gap-2 w-[140px] justify-between'>
              <Button disabled={quantity === 1} onClick={() => setQuantity(quantity - 1)}>
                <Remove />
              </Button>
              <span>
                {quantity}
              </span>
              <Button onClick={() => setQuantity(quantity + 1)}>
                <Add />
              </Button>
            </div>

          </div>

          <div className='mt-5 flex items-center gap-5'>
            <Button
              fullWidth
              variant='contained'
              startIcon={<AddShoppingCart />}
              sx={{ py: "1rem" }}
            >
              Add To Bag
            </Button>

            <Button
              fullWidth
              variant='outlined'
              startIcon={<FavoriteBorder />}
              sx={{ py: "1rem" }}
            >
              Wishlist
            </Button>
          </div>


          <div className='mt-5'>
            <p>{product?.description}</p>
          </div>

          <div className='mt-7'>
            <ReviewCard />
            <Divider />
          </div>



        </section>

      </div>

      <div className='mt-7 space-y-5'>
        <h1 className="text-2xl font-bold ms-9">
          Similar Product
        </h1>
        <div className='pt-5 pb-10'>
          <SimilarProduct />
        </div>
      </div>

    </div>
  );
}

export default ProductDetail;
