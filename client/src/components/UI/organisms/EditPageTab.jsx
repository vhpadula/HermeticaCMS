import { Container } from "react-bootstrap";
import EditPageHeader from "../molecules/EditPageHeader";
import EditPageCard from "./EditPageCard";
import { useState } from "react";
import PageHeaderCard from "./PageHeaderCard";

export default function EditPageTab() {
    const [cards, setCards] = useState([]);

    const createCard = () => {
        const newCardId = cards.length + 1;
        const newCardPosition = cards.length;
        const newCard = { id: newCardId, position: newCardPosition };
        setCards((prevCards) => [...prevCards, newCard]);
    };

    const deleteCard = (cardId) => {
        setCards((prevCards) => {
            const updatedCards = prevCards.filter((card) => card.id !== cardId);
            return updatedCards;
        });
    };

    const updateCardPosition = (cardId, newPosition, oldPosition) => {
        setCards((prevCards) => {
            const updatedCards = prevCards.map((card) => {
                if (card.id === cardId) {
                    // Limit the newPosition within the range of 0 and n-1
                    const limitedPosition = Math.max(
                        0,
                        Math.min(newPosition, prevCards.length)
                    );
                    return { ...card, position: limitedPosition };
                }

                if (card.position === newPosition) {
                    return { ...card, position: oldPosition };
                }
                return card;
            });
            return updatedCards.sort((a, b) => a.position - b.position);
        });
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
            <EditPageHeader createCard={createCard} />

            <Container
                style={{
                    width: "90%",
                    justifyContent: "center",
                    padding: 0,
                    marginTop: "10px",
                }}
            >
                <PageHeaderCard />
                {cards
                    .sort((a, b) => a.position - b.position)
                    .map((card) => (
                        <EditPageCard
                            key={card.id}
                            cardId={Number(card.id)}
                            initialPosition={Number(card.position)}
                            updateCardPosition={updateCardPosition}
                            deleteCard={deleteCard}
                        />
                    ))}
            </Container>
        </Container>
    );
}
