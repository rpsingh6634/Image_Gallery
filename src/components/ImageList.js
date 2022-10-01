import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    const arr = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true,];
    return (
        <>
            <Container fluid className="mt-4">
                <Row>
                    {arr.map((singleImage, idx) => {
                        // console.log(singleImage);
                        return <Col sm={4} key={idx}><ImageCard click={props.cardClick} image_details={singleImage}/></Col>
                    })}
                </Row>
            </Container>
        </>
    )
}

export default ImageList
