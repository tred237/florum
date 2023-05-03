import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'

import { UserContext } from '../context/User';
import PlantInformation from './PlantInformation';
import PlantForum from './PlantForum';
import Loading from "./Loading";
import florumlogo from "../img/florumlogo.png";

export default function PlantDetails({ plant, setPlant }) {
    const { user } = useContext(UserContext)

    const handleForumEntrySubmit = (entry) => {
        const updatedPlant = {...plant}
        updatedPlant.forum_entries = [entry, ...updatedPlant.forum_entries]
        setPlant(updatedPlant)
    }

    if(!plant.name) <Loading />
    else return (
        <Container className='w-85'>
            <Container className='d-flex justify-content-center'>
                <Image className="w-35 h-25" src={florumlogo} />
            </Container>
            <Container className='d-flex justify-content-center'>
                <PlantInformation plant={plant} setPlant={setPlant} />
            </Container>
            <h2>Description</h2>
            {plant.description}
            {plant.forum_entries ? <PlantForum plant={plant} onForumEntrySubmit={handleForumEntrySubmit} />  : null}
        </Container>
    )
}