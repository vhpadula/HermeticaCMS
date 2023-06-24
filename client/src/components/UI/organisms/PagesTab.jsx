import PageCard from "./PageCard";
import PagesHeader from "../molecules/PagesHeader";
import { useState } from "react";

import { Container } from "react-bootstrap";
export default function PagesTab() {
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 4;
    const pageCards = [
        {
            id: 1,
            title: "Page 1",
            status: "published",
            publishedDate: "Published Date 1",
            content: "Page 1 content",
        },
        {
            id: 2,
            title: "Page 2",
            status: "draft",
            publishedDate: "Published Date 2",
            content: "Page 2 content",
        },
        {
            id: 3,
            title: "Page 3",
            status: "scheduled",
            publishedDate: "Published Date 3",
            content: "Page 3 content",
        },
        {
            id: 4,
            title: "Page 4",
            status: "scheduled",
            publishedDate: "Published Date 4",
            content: "Page 4 content",
        },
        {
            id: 5,
            title: "Page 5",
            status: "scheduled",
            publishedDate: "Published Date 5",
            content: "Page 5 content",
        },
        {
            id: 6,
            title: "Page 6",
            status: "scheduled",
            publishedDate: "Published Date 6",
            content: "Page 6 content",
        },
        {
            id: 7,
            title: "Page 7",
            status: "scheduled",
            publishedDate: "Published Date 7",
            content: "Page 7 content",
        },
        // Add more page card objects as needed
    ];

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = pageCards.slice(indexOfFirstCard, indexOfLastCard);

    const totalPages = Math.ceil(pageCards.length / cardsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    return (
        <Container
            style={{
                width: "75%",
                justifyContent: "center",
                padding: 0,
                margin: "5px",
            }}
        >
            <PagesHeader />

            <Container
                style={{
                    width: "80%",
                    justifyContent: "center",
                    padding: 0,
                    marginTop: "10px",
                }}
            >
                {currentCards.map((page) => (
                    <PageCard
                        key={page.id}
                        title={page.title}
                        status={page.status}
                        publishedDate={page.publishedDate}
                        content={page.content}
                    />
                ))}
            </Container>

            {totalPages > 1 && (
                <Container className="justify-content-center d-flex mt-2">
                    {[...Array(totalPages).keys()].map((pageNumber) => (
                        <button
                            key={pageNumber}
                            className={`page-button ${
                                pageNumber + 1 === currentPage ? "active" : ""
                            }`}
                            onClick={() => handlePageChange(pageNumber + 1)}
                            style={{
                                width: "1vw",
                                height: "1vw",
                                borderRadius: "100%", // Make the button round
                                backgroundColor:
                                    pageNumber + 1 === currentPage
                                        ? "var(--primary-color)"
                                        : "grey", // Color when toggled
                                color: "white", // Text color
                                border: "none", // Remove the border
                                padding: "3% 3%", // Adjust padding as needed
                                margin: "5px", // Adjust margin as needed
                                cursor: "pointer", // Show pointer cursor on hover
                                alignItems: "center",
                                justifyContent: "center",
                                display: "flex",
                                fontSize: "2vw",
                            }}
                        >
                            {pageNumber + 1}
                        </button>
                    ))}
                </Container>
            )}
        </Container>
    );
}
