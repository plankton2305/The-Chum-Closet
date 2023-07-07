import { useState, useEffect } from 'react';
import Ratings from './Ratings/index.jsx';
import ReviewsList from './Reviews/index.jsx';

const Review = ({ productId }) => {

  return (
    // Someting For Ratings
    // Something For Reviews
    <section className="m-10" id="ratings-and-reviews">
      <h2 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-inherit mt-5 mb-5">Ratings & Reviews</h2>
      <div className="mx-auto py-16 w-[66%] flex">
        <Ratings productId={productId} />
        <ReviewsList productId={productId} />
      </div>
    </section>
  );
}

export default Review;6