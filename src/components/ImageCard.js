import React from 'react';
import { Card } from 'react-bootstrap';

const ImageCard = (props) => {
    return (
        <>
            <Card className="bg-dark text-white mb-4" onClick={props.click}>
                <Card.Img src="https://images.unsplash.com/photo-1664470622113-af42e093b93d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
        </>
    )
}

export default ImageCard
