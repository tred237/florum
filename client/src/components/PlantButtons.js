import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function PlantButtons({ plant }) {
    return (
        <>
            <Col>
                <Button>Edit</Button>
            </Col>
            <Col>
                <Button>Delete</Button>
            </Col>
        </>
    )
}