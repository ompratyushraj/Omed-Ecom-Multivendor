import React, { useEffect, useState } from 'react';
import ReviewCard from '../../components/review/ReviewCard';

import LinearProgress from '@mui/material/LinearProgress';
import type { LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid, Rating } from '@mui/material';

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

const Review = () => {
  const [progress, setProgress] = useState(10);

  return (
    <div className="p-10 ms-10 lg:px-20 flex flex-col lg:flex-row gap-20 justify-normal">

      {/* Left Product Section */}
      <section className="w-full md:w-1/2 lg:w-[35%] space-y-2">
        <img
          className="reviewpageimage rounded-3xl"
          src="https://plus.unsplash.com/premium_vector-1726512295927-f776509c6b27?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="reviewpageimage"
        />
        <div className="ps-4 pt-4">
          <p className="font-bold text-xl">Amoxiline 500 mg</p>
          <p className="text-lg text-gray-600">Men's HealthCare</p>
        </div>
        <div className="ps-4">
          <div className="price flex items-center gap-3 mt-1 text-2xl">
            <span className="font-sans text-gray-800">Rs. 400</span>
            <span className="line-through text-gray-400">Rs. 999</span>
            <span className="text-primary-color font-semibold">60%</span>
          </div>
        </div>
      </section>

      {/* Right Review Cards */}
      <div className='w-[50%]'>
        {/* Middle Progress Section */}
        <section className="reviewlineprogress space-y-6 w-full border-2 rounded-3xl my-5 pb-5">
          <h1 className="text-lg m-5 font-semibold">Review and Rating</h1>

          <div className="flex items-center gap-3 ps-8">
            <Rating readOnly value={4} precision={1} />
            <span>Ratings</span>
          </div>

          <div>
            {["Excellent", "Very Good", "Good", "Average", "Poor"].map((label, index) => (
              <Box
                key={index}
                className={`flex items-center gap-4 w-[90%] mx-auto py-2 ${index === label.length - 1 ? 'pb-0' : ''}`}
              >
                <span className="whitespace-nowrap w-28">{label}</span>
                <Box className="flex-1">
                  <LinearProgressWithLabel value={progress} />
                </Box>
              </Box>
            ))}
          </div>


        </section>


        {/* Right Review Cards */}
        <section className="space-y-6 w-full">
          {[1, 1, 1, 1, 1, 1, 1].map((_, index) => (
            <div className="space-y-3" key={index}>
              <ReviewCard />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Review;
