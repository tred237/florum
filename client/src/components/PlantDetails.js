import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import { PlantsContext } from '../context/Plants';
import PlantInformation from './PlantInformation';
import PlantForum from './PlantForum';
import Loading from "./Loading";
import florumlogo from "../img/florumlogo.png";

export default function PlantDetails({ plant, setPlant }) {
    const { plants, setPlants } = useContext(PlantsContext)

    const handleForumEntrySubmit = (entry) => {
        const updatedPlant = {...plant}
        updatedPlant.forum_entries = [entry, ...updatedPlant.forum_entries]
        const filteredPlants = plants.filter(p => p.id !== plant.id)
        setPlant(updatedPlant)
        setPlants([updatedPlant, ...filteredPlants])
    }

    const handleForumEntryEdit = (entry) => {
        const updatedPlant = {...plant}
        const filteredForumEntries = updatedPlant.forum_entries.filter(e => e.id !== entry.id)
        updatedPlant.forum_entries = [entry, ...filteredForumEntries]
        updatedPlant.forum_entries = updatedPlant.forum_entries.sort((a,b) =>  b.id - a.id)
        const filteredPlants = [...plants].filter(p => p.id !== plant.id)
        setPlant(updatedPlant)
        setPlants([updatedPlant, ...filteredPlants])
    }

    if(!plant.name) <Loading />
    else return (
        <Container>
            <Container className='d-flex justify-content-center'>
                <Image className="w-35 h-25" src={florumlogo} />
            </Container>
            <Container className='d-flex justify-content-center'>
                <PlantInformation plant={plant} setPlant={setPlant} />
            </Container>
            <h2>{plant.description ? "Description" : null}</h2>
            {plant.description}
            <hr className="hr" />
            <h2>Comments</h2>
            {plant.forum_entries ? <PlantForum plant={plant} onForumEntrySubmit={handleForumEntrySubmit} onForumEntryEdit={handleForumEntryEdit} /> : null}
        </Container>
    )
}