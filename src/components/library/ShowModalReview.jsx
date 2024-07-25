import '../../assets/styles/Library/library.style.scss';
import { useState } from 'react';
import { useCreateReviewMutation } from '../../api/library/api.reviews';
import { notifyError, notifySuccess } from '../../utils/Toast';

const ShowModalReview = ({ onclose, isbn }) => {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  console.log(isbn);
  const [createReviewApi] = useCreateReviewMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reviewData = {
      comment: review,
      rating: parseInt(rating),
      isbn: parseInt(isbn),
    };
    const CreateReviewResponse = await createReviewApi(reviewData);
    if (CreateReviewResponse.error) {
      const notification =
        CreateReviewResponse.error.data.message +
        (CreateReviewResponse.error.data.errors.length > 0 ? ': ' + CreateReviewResponse.error.data.errors.join(', ') : '');
      notifyError(notification);
    } else if (CreateReviewResponse.data) {
      notifySuccess('successfully created review');
      onclose();
    }
  };

  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <span
              className="close"
              onClick={(e) => {
                e.preventDefault();
                onclose();
              }}
            >
              x
            </span>
          </div>
          <div className="modal-body">
            <h2 className="rating">Rate and review</h2>
            <form onSubmit={handleSubmit}>
              <div className="rate">
                <label htmlFor="rating">Rating (1-10):</label>
                <input type="number" id="rating" name="rating" min="1" max="10" value={rating} onChange={(e) => setRating(e.target.value)} />
              </div>

              <div className="review">
                <label htmlFor="review">Your Review:</label>
                <textarea id="review" name="review" rows="5" cols="30" value={review} onChange={(e) => setReview(e.target.value)}></textarea>
              </div>

              <input className="btn" type="submit" value="Submit Review" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowModalReview;
