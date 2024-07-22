const LibHead = ({ heads, Role }) => {
  return (
    <div className="employee-list-head list-book">
      {heads.map((head) => (
        <div className={"item"}>{head}</div>
      ))}
    </div>
  );
};

export default LibHead;
