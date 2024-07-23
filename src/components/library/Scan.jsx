import scan from '../../assets/icons/scan.svg';

const Scan = () => {
  return (
    <div className="scan__form">
      <div className="icon">
        <img src={scan} />
      </div>
      <div className="scan__input">
        <input type="text" placeholder="Enter ISBN" />
        <input type="text" placeholder="Enter Shelf no." />
      </div>
      <button className="btn">Submit</button>
    </div>
  );
};

export default Scan;
