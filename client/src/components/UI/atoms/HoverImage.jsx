import PropTypes from "prop-types";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

export default function HoverImage({ src, text }) {
    return (
        <div className="container">
            <Row>
                <Col className="d-flex align-items-center justify-content-center m-2">
                    <Image
                        src={src}
                        alt="User Placeholder"
                        roundedCircle
                        fluid
                        className="image"
                    />
                    <div className="middle">
                        <div className="text text-center">{text}</div>
                    </div>
                </Col>
            </Row>

            <style>
                {`
          .container {
            position: relative;
            width: 15vw;
            height: 15vw;
          }

          .image {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%;
            transition: opacity 0.5s ease;
          }

          .middle {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.5s ease;
            background-color: rgba(0, 0, 0, 0.6);
            border-radius: 50%;
          }

          .container:hover .image {
            opacity: 0.7;
          }

          .container:hover .middle {
            opacity: 1;
          }

          .text {
            color: white;
            font-size: 16px;
          }
        `}
            </style>
        </div>
    );
}

HoverImage.propTypes = {
    src: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};
