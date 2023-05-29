import { useState, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import { UserContext } from '../context/User';
import { PlantContext } from '../context/Plant';
import ResponseError from './ResponseError';

export default function AddForumEntry({ onCloseModal, onForumEntrySubmit }) {
    const { user } = useContext(UserContext)
    const { plant } = useContext(PlantContext)
    const formDefault = ''
    const [formData, setFormData] = useState(formDefault)
    const [entryError, setEntryError] = useState([])

    const handleChange = (e) => setFormData(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch('/forum_entries', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                "user_id": user.id,
                "plant_id": plant.id,
                "entry": formData
            })
        })
        .then(r => {
            if(r.ok) r.json().then(entry => {                
                onForumEntrySubmit(entry)
                onCloseModal()
            })
            else r.json().then(err => setEntryError(err.errors))
        })
    }

    return (
        <Form onSubmit={handleSubmit}>
           <Form.Group className="pb-2">
                <Form.Control required 
                            as="textarea"
                            placeholder="" 
                            name="entry" 
                            value={formData}
                            onChange={handleChange} />
            </Form.Group>
            <Container className="pb-2">
                {entryError ? entryError.map((e, index) => <ResponseError key={index} responseItem={e} />) : null}
            </Container>
            <Button variant="success" type="submit">Add Comment</Button>
        </Form>
    )
}