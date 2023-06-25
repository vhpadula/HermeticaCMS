import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { fetchPages } from "../../API";

const Website = () => {
    const [pages, setPages] = useState([]);

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

    return (
        <Container
            style={{
                width: "75%",
                justifyContent: "center",
                padding: 0,
                margin: "5px",
            }}
        >
            {pages.map((page, pageIndex) => (
                <div className="m-3" key={pageIndex}>
                    <h2>{page.title}</h2>
                    {page.blocks.map((block, blockIndex) =>
                        renderBlock(block, blockIndex)
                    )}
                </div>
            ))}
        </Container>
    );
};

export default Website;
