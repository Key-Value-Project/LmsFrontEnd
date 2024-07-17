import { render } from "@testing-library/react";
import { Status } from "../status";
import React from "react";

describe("Check Status Component", () => { 
    test("Rendered", () => {
        const { getByTestId } = render(<Status />);
        const status = getByTestId("test-status");
        expect(status).toBeTruthy();
    });
    test("Status Displayed", () => {
        const status = "Active";
        const { getByText } = render(<Status status={status} />);
        expect(getByText("Active")).toBeInTheDocument();
    });
    test("Status Color", () => {
        const status = "Active";
        const { getByText } = render(<Status status={status} />);
        const statusElement = getByText("Active");
        expect(statusElement.style.backgroundColor).toBe("rgb(198, 245, 176)");
    });
    test("Status Color", () => {
        const status = "In Active";
        const { getByText } = render(<Status status={status} />);
        const statusElement = getByText("In Active");
        expect(statusElement.style.backgroundColor).toBe("rgb(242, 189, 193)");
    });
    test("Status Color", () => {
        const status = "On Leave";
        const { getByText } = render(<Status status={status} />);
        const statusElement = getByText("On Leave");
        expect(statusElement.style.backgroundColor).toBe("rgb(245, 235, 169)");
    });
    test("Snapshot", () => {
        const status = "Active";
        const { asFragment } = render(<Status status={status} />);
        expect(asFragment()).toMatchSnapshot();
    });
});


