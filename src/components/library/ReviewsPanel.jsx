import starIcon from '../../assets/icons/starIcon.svg';

const ReviewsPanel = ({ isbn }) => { 

    return (
        <div className="rev_cont" id="rev">
        <div className="book__det">
          <h2 className="review__head">Reviews</h2>
          <div className="review-content">
            <div className="each_rev">
              <div>John</div>

              <img src={starIcon} alt="star" />
            </div>

            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam debitis molestias vitae cumque nesciunt. Quos consequuntur aliquam
              inventore quae mollitia quo autem ullam soluta totam, voluptate voluptatem, similique placeat voluptatibus.
            </div>
          </div>
          <div className="review-content">
            <div className="each_rev">
              <div>John</div>

              <img src={starIcon} alt="star" />
            </div>

            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam debitis molestias vitae cumque nesciunt. Quos consequuntur aliquam
              inventore quae mollitia quo autem ullam soluta totam, voluptate voluptatem, similique placeat voluptatibus.
            </div>
          </div>
          <div className="review-content">
            <div className="each_rev">
              <div>John</div>

              <img src={starIcon} alt="star" />
            </div>

            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam debitis molestias vitae cumque nesciunt. Quos consequuntur aliquam
              inventore quae mollitia quo autem ullam soluta totam, voluptate voluptatem, similique placeat voluptatibus.
            </div>
          </div>
          <div className="review-content">
            <div className="each_rev">
              <div>John</div>

              <img src={starIcon} alt="star" />
            </div>

            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam debitis molestias vitae cumque nesciunt. Quos consequuntur aliquam
              inventore quae mollitia quo autem ullam soluta totam, voluptate voluptatem, similique placeat voluptatibus.
            </div>
          </div>
        </div>
      </div>
    )
};

export default ReviewsPanel;