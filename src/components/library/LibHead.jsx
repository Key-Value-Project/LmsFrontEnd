const LibHead = ({ heads }) => {
  return (
    <div className="employee-list-head list-book">
      {heads.map((head, index) => (
        <div className="headi item" key={index}>
          {head}
        </div>
      ))}
    </div>
  );
};

export default LibHead;
