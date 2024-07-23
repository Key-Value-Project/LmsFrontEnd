const LibHead = ({ heads, Role }) => {
    return (
        <div className="employee-list-head list-book">
            {heads.map((head, index) => (
                <div className={"item"} key={index}>
                    {head}
                </div>
            ))}
        </div>
    );
};

export default LibHead;
