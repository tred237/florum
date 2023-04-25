import ListGroup from 'react-bootstrap/ListGroup';

export default function ResponseError({ responseItem }) {
    return (
        <p className='error-message'>{responseItem}</p>
    )
}