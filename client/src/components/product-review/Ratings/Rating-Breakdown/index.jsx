import { useState, useEffect } from 'react';
import GraphBar from './Graph-Bar.jsx';
import Recommended from './Recommended.jsx';


const getPercentage = (ratings = {}) => {
  // get percentage of ratings
  let percentages = {};

  const sum = Object.values(ratings).reduce((runningSum, value) => {
    return runningSum + Number(value);
  }, 0);

  for (const key in ratings) {
    const percentage = Math.round((ratings[key] / sum) * 100);
    console.log(`PERCENTAGE::::: ${percentage}\nRATING:::::${ratings[key]}`)
    percentages[key] = `${percentage}%`;
  }

  console.table(percentages);
  return percentages;
}

//TODO: Add recommendation tracker
const RatingBreakdown = ({ reviewMeta }) => {

  const renderRating = (ratings) => {
    let elements = [];

    const percentages = getPercentage(ratings);

    for (const rating in ratings) {
      elements.push(<tr className="rating-breakdown-row">
          <td>
            {rating} star
          </td>
          <td>
            <GraphBar shadedVal={percentages[rating]}/>
          </td>
          <td>
            {percentages[rating]}
          </td>
        </tr>)
    }

    return elements;
  }

  return (
    // Display Rating Display by number of Ratings
    <div>
      <table className="rating-breakdown-table">
        {
          renderRating(reviewMeta.ratings)
        }
      </table>
      <Recommended recommendedVals={reviewMeta.recommended}/>
    </div>
  );
};

export default RatingBreakdown;