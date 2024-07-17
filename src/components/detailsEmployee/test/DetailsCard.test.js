/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import { render, screen } from "@testing-library/react";
import DetailsCard from "../DetailsCard";

describe("Check Details Card", () => {
	test("Rendered", () => {
		const { getByTestId } = render(<DetailsCard />);
		const card = getByTestId("test-details-card");
		expect(card).toBeTruthy();
	});
	test("Details Displayed", () => {
		const emp = {
			id: 1,
			name: "Test User",
			email: "test@example.com",
			createdAt: "2021-01-01",
			role: "Developer",
			status: "Active",
			experience: "5 years",
			address: {
				line1: "123 Test St",
				pincode: "12345",
			},
		};

		const card = render(<DetailsCard emp={emp} />);
		expect(screen.getByText("1")).toBeInTheDocument();
		expect(screen.getByText("Test User")).toBeInTheDocument();
		expect(screen.getByText("test@example.com")).toBeInTheDocument();
		expect(screen.getByText("Developer")).toBeInTheDocument();
		expect(screen.getByText("Active")).toBeInTheDocument();
		expect(screen.getByText("5 years")).toBeInTheDocument();
		expect(screen.getByText("123 Test St, 12345")).toBeInTheDocument();
	});
});
