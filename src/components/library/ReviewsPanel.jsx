import starIcon from '../../assets/icons/starIcon.svg';

const ReviewsPanel = ({ reviews }) => {
  console.log(reviews);
  console.log(Array.from({ length: reviews[0].rating }));
  return (
    <div className="rev_cont" id="rev">
      <div className="book__det">
        <h2 className="review__head">Reviews</h2>
        {reviews.map((review) => (
          <div key={review.id} className="review-content">
            <div className="each_rev">
              <div>{review.employee.name}</div>
              {/* <img src={starIcon} alt="star" /> */}
              <div>
                {Array.from({ length: review.rating }).map((something, i) => (
                  <img key={i} src={starIcon} alt="star" />
                ))}
              </div>
            </div>
            <div>{review.comment}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsPanel;
