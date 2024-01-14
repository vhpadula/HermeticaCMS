import { useState } from "react";

import { Container } from "react-bootstrap";
import ImageCard from "./ImageCard";
import ImagesHeader from "../molecules/ImagesHeader";
export default function ImagesTab() {
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 3;
    const imageCards = [
        {
            id: 1,
            title: "Page 1",
            publishedDate: "Published Date 1",
        },
        {
            id: 2,
            title: "Page 2",
            publishedDate: "Published Date 2",
        },
        {
            id: 3,
            title: "Page 3",
            publishedDate: "Published Date 3",
            content: "Page 3 content",
        },
        {
            id: 4,
            title: "Page 4",
            publishedDate: "Published Date 4",
        },
        {
            id: 5,
            title: "Page 5",
            publishedDate: "Published Date 5",
        },
        {
            id: 6,
            title: "Page 6",
            publishedDate: "Published Date 6",
        },
        {
            id: 7,
            title: "Page 7",

            publishedDate: "Published Date 7",
        },
    ];

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = imageCards.slice(indexOfFirstCard, indexOfLastCard);

    const totalPages = Math.ceil(imageCards.length / cardsPerPage);

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
            <ImagesHeader />

            <Container
                style={{
                    width: "80%",
                    justifyContent: "center",
                    padding: 0,
                    marginTop: "10px",
                }}
            >
                {currentCards.map((image) => (
                    <ImageCard
                        key={image.id}
                        title={image.title}
                        publishedDate={image.publishedDate}
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
