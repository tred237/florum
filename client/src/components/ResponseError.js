import ListGroup from 'react-bootstrap/ListGroup';

export default function ResponseError({ responseItem }) {
    return (
        <ListGroup.Item>{responseItem}</ListGroup.Item>
    )
}