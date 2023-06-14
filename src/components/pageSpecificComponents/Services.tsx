import React, { useState } from "react";
import { Card } from "../smallComponents/Card";
import { Modal } from "../common/Modal"; // Assuming you have a Modal component
import "./Services.scss";

interface ServiceProps {
  title: string;
}

interface CardData {
  id: number;
  bgImageUrl: string;
  category: string;
  heading: string;
  modalContent: string;
}

const cardData: CardData[] = [
  {
    id: 1,
    bgImageUrl:
      "https://images.unsplash.com/photo-1557187666-4fd70cf76254?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    category: "Click to read more",
    heading: "Heading 1",
    modalContent: "This is the modal content for card 1",
  },
  {
    id: 2,
    bgImageUrl:
      "https://images.unsplash.com/photo-1557177324-56c542165309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    category: "Click to read more",
    heading: "Heading 2",
    modalContent: "This is the modal content for card 2",
  },
  {
    id: 3,
    bgImageUrl:
      "https://images.unsplash.com/photo-1556680262-9990363a3e6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    category: "Click to read more",
    heading: "Heading 3",
    modalContent: "This is the modal content for card 3",
  },
  {
    id: 4,
    bgImageUrl:
      "https://images.unsplash.com/photo-1557004396-66e4174d7bf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    category: "Click to read more",
    heading: "Heading 4",
    modalContent: "This is the modal content for card 4",
  },
];

export const Services: React.FC<ServiceProps> = ({ title }) => {
  const [modalContent, setModalContent] = useState<string | null>(null);

  const handleCardClick = (id: number) => {
    const card = cardData.find((data) => data.id === id);
    if (card) {
      setModalContent(card.modalContent);
    }
  };

  return (
    <div className="servicesContainer">
      <div className="servicesTitle">
        <h2>{title}</h2>
      </div>
      <div className="cardContainer">
        <div className="cardGrid">
          {cardData.map((data) => (
            <div onClick={() => handleCardClick(data.id)}>
              <Card
                bgImageUrl={data.bgImageUrl}
                category={data.category}
                heading={data.heading}
              />
            </div>
          ))}
        </div>
      </div>
      {modalContent && (
        <Modal onClose={() => setModalContent(null)}>{modalContent}</Modal>
      )}
    </div>
  );
};
