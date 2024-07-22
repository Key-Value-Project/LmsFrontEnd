import "../../assets/styles/Library/library.style.scss";
import { useState, useEffect } from "react";
import LibCard from "./LibCard.jsx";
import Searchicon from "../../assets/icons/search-icon.svg";
import LibHead from "./LibHead.jsx";
import notify from "../../assets/icons/notify.svg";
import { Link } from "react-router-dom";
import { useGetUserDetailsQuery } from "../../api/employee/api.employee.jsx";
import { useGetBookDetailsListQuery } from "../../api/library/api.library.jsx";
import { useRef } from "react";

export const booksData = [
    {
        id: 1,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        status: "Available",
        isbn: "9780061120084",
        description:
            "A classic novel about racial injustice, tolerance, and the loss of innocence in a small Alabama town during the 1930s.",
        shelfCode: ["A01", "E05", "D04"],
    },
    {
        id: 2,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        status: "Available",
        isbn: "9780743273565",
        description:
            "A novel set in the 1920s about the American Dream, love, and the corrupting influence of wealth, as seen through the eyes of Nick Carraway.",
        shelfCode: ["B02", "A01"],
    },
    {
        id: 3,
        title: "1984",
        author: "George Orwell",
        status: "Not-Available",
        isbn: "9780451524935",
        description:
            "A dystopian novel depicting a totalitarian future society where independent thought is discouraged and citizens are constantly surveilled.",
    },
    {
        id: 4,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        status: "Available",
        isbn: "9780486280511",
        description:
            "A romantic novel about the complex relationships between the Bennett sisters and their various love interests in 19th-century England.",
        shelfCode: ["C03"],
    },
    {
        id: 5,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        status: "Available",
        isbn: "9780316769174",
        description:
            "A coming-of-age novel about alienation, rebellion, and the struggles of growing up, as seen through the eyes of Holden Caulfield.",
        shelfCode: ["E05"],
    },
];

const LibSearch = () => {
    const { data: userDetails } = useGetUserDetailsQuery();
    const { data: booksDetail } = useGetBookDetailsListQuery();
    useEffect(() => {
        if (booksDetail) console.log(booksDetail);
    }, [booksDetail]);
    const [down, setDown] = useState(false);
    const boxRef = useRef(null);
    const Role = userDetails?.role;

    var box = document.getElementById("box");

    function toggleNotifi() {
        setDown(!down);
        if (boxRef.current) {
            if (down) {
                boxRef.current.style.height = "0px";
                boxRef.current.style.opacity = 0;
            } else {
                boxRef.current.style.height = "510px";
                boxRef.current.style.opacity = 1;
            }
        }
    }
    return (
        <div className="main__body">
            <div className="main__head">
                <div className="button-class">
                    <Link to="borrow">
                        <button className="btn">Borrowed Books</button>
                    </Link>

                    {Role === "ADMIN" ? (
                        <div>
                            <Link to="create">
                                <button className="btn">Add Books</button>
                            </Link>
                            <Link to="shelf">
                                <button className="btn">Add Shelf</button>
                            </Link>
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
                <div className="notify-bar">
                    <img src={notify} className="notify" onClick={toggleNotifi} />
                    <div
                        className="notify-body"
                        ref={boxRef}
                        id="box"
                        style={{
                            height: down ? "510px" : "0px",
                            opacity: down ? 1 : 0,
                        }}
                    >
                        <h1>Notifications</h1>
                    </div>
                </div>
            </div>
            <div className="lib__container">
                <form>
                    <input type="text" placeholder="Search Books" />
                    <button type="submit">
                        <span>
                            <img src={Searchicon} alt="Search icon" />
                        </span>
                    </button>
                </form>
            </div>
            <div className="book-list">
                <LibHead heads={["Book ID", "Title", "Author", "Availability", "Action"]} Role={Role} />
                <div className="employee-list">
                    {booksDetail && booksDetail.map((book, index) => <LibCard key={index} {...book} Role={Role} />)}
                </div>
            </div>
        </div>
    );
};

export default LibSearch;
