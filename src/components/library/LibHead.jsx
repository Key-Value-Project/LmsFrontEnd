const LibHead = ({ heads, Role }) => {
  return (
    <div className="employee-list-head list-book">
      {heads.map((head, index) =>
        head !== "Action" || Role === "ADMIN" ? (
          <div
            key={index}
            className={head === "Action" ? "item Action" : "item"}
          >
            {head}
          </div>
        ) : (
          <></>
        )
      )}
    </div>
  );
};

export default LibHead;
