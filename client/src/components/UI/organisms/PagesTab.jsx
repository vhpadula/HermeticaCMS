import PageCard from "./PageCard";
import PagesHeader from "../molecules/PagesHeader";
import { useState, useEffect } from "react";
import { fetchPages } from "../../../API";
import { Container } from "react-bootstrap";
export default function PagesTab() {
    const [pageCards, setPageCards] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 4;
    useEffect(() => {
        fetchPagesFromAPI();
    }, []);

    const fetchPagesFromAPI = async () => {
        try {
            const pages = await fetchPages();
            setPageCards(pages);
            console.log("Pages fetched successfully:", pages);
        } catch (error) {
            console.error("Error fetching pages:", error);
        }
    };

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
                        publishedDate={page.published_date}
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
