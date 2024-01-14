import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { fetchPages } from "../../API";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import UpperBar from "../UI/organisms/UpperBar";
import ColorButton from "../UI/atoms/buttons/ColorButton";
import { Link } from "react-router-dom";
const Website = () => {
    const [pages, setPages] = useState([]);
    const cardsPerRow = 3;
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const pagesData = await fetchPages();
            const parsedPages = parseBlocks(pagesData);
            setPages(parsedPages);
        } catch (error) {
            console.error("Error fetching pages:", error);
        }
    };

    const parseBlocks = (pagesData) => {
        return pagesData.map((page) => {
            const parsedBlocks = JSON.parse(page.blocks);
            return {
                ...page,
                blocks: parsedBlocks,
            };
        });
    };

    const renderBlock = (block, index) => {
        switch (block.type) {
            case "header":
                return <h3 key={index}>{block.content}</h3>;
            case "paragraph":
                return <p key={index}>{block.content}</p>;
            case "image":
                return (
                    <img key={index} src={block.content} alt="Block Image" />
                );
            default:
                return null;
        }
    };

    const getPagePreview = (blocks) => {
        let firstParagraph = blocks.find((block) => block.type === "paragraph");
        let firstImage = blocks.find((block) => block.type === "image");

        let previewText = firstParagraph ? firstParagraph.content : "";
        let imageSrc = firstImage ? firstImage.content : "";

        return { previewText, imageSrc };
    };

    return (
        <div style={{ height: "100%" }}>
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 0,
                    margin: "1rem 0",
                }}
            >
                <h1 style={{ textAlign: "center" }}>Website name</h1>
            </div>

            <Container
                style={{
                    width: "75%",
                    justifyContent: "center",
                    padding: 0,
                    margin: "rem 2rem",
                }}
            >
                <Row>
                    {pages.map((page, pageIndex) => {
                        const { previewText, imageSrc } = getPagePreview(
                            page.blocks
                        );

                        // Calculate the column size for each card based on the number of cards per row
                        const columnSize = 12 / cardsPerRow;

                        return (
                            <Col
                                key={pageIndex}
                                xlx={columnSize}
                                style={{
                                    marginBottom: "1rem",
                                }}
                            >
                                <Card style={{ width: "25rem" }}>
                                    {imageSrc && (
                                        <Card.Img
                                            variant="top"
                                            src={imageSrc}
                                        />
                                    )}
                                    <Card.Body>
                                        <Card.Title>{page.title}</Card.Title>
                                        <p>{previewText}</p>
                                        <Link to={"/" + page.title}>
                                            <ColorButton
                                                variant="primary"
                                                className="w-30"
                                                text="Read More"
                                            />
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Container>

            <div
                style={{
                    position: "relative",
                    top: "0",
                    marginTop: "20vh",
                }}
            >
                <UpperBar />
            </div>
        </div>
    );
};

export default Website;
