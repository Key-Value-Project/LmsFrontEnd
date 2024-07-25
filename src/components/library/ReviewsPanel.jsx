import starIcon from '../../assets/icons/starIcon.svg';

const ReviewsPanel = ({ reviews }) => {
  console.log(reviews);
  console.log(Array.from({ length: reviews[0].rating }));
  return (
    <div className="rev_cont" id="rev" style={{ padding: '30px' }}>
      <div className="book__dett">
        <h2 className="review__head">Reviews</h2>
        <div className="ratings_list">
          {reviews.map((review) => (
            <div key={review.id} className="reviewcontent">
              <div className="each_rev">
                <div>
                  <p>{review.employee.name}</p>
                </div>
                {/* <img src={starIcon} alt="star" /> */}
                <div style={{ display: 'Flex', gap: '5px' }}>
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
    </div>
  );
};

export default ReviewsPanel;
