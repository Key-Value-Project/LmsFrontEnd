import '../../assets/styles/Library/library.style.scss';
import { useState } from 'react';

const ShowModalReview = ({ onclose, isbn }) => {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <span className="close" onClick={onclose}>
              x
            </span>
          </div>
          <div className="modal-body">
            <h2 className="rating">Rate and review</h2>
            <form onSubmit={handleSubmit}>
              <div className="rate">
                <label htmlFor="rating">Rating (1-5):</label>
                <input type="number" id="rating" name="rating" min="1" max="5" value={rating} onChange={(e) => setRating(e.target.value)} />
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
