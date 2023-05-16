import { useState, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { UserContext } from '../context/User';

export default function AddForumEntry({ entryInfo, onCloseModal, onForumEntryEdit }) {
    const { user } = useContext(UserContext)
    const [formData, setFormData] = useState(entryInfo.entry)
    const [editEntryError, setEditEntryError] = useState([])

    const handleChange = (e) => setFormData(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()

        if(entryInfo.user_id === user.id && entryInfo.entry !== formData) {
            fetch(`/forum_entries/${entryInfo.id}`, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    "entry": formData
                })
            })
            .then(r => {
                if(r.ok) r.json().then(entry => {
                    onForumEntryEdit(entry)
                    onCloseModal()
                })
                else r.json().then(err => setEditEntryError(err.errors))
            })
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
           <Form.Group className="pb-2">
                <Form.Control required 
                            as="textarea"
                            name="entry" 
                            value={formData}
                            onChange={handleChange} />
            </Form.Group>
            <p className="error-message pb-2">{editEntryError ? editEntryError[0] : null}</p>
            <Button variant="success" type="submit">Edit Comment</Button>
        </Form>
    )
}