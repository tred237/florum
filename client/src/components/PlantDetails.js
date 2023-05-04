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
        setPlant(updatedPlant)
        
        const contextPlant = [...plants].find(p => p.id === plant.id)
        contextPlant.forum_entries = [entry, ...contextPlant.forum_entries]
        const updatedPlants = [...plants].filter(p => p.id !== plant.id)
        setPlants([contextPlant, ...updatedPlants])
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
            {plant.forum_entries ? <PlantForum plant={plant} onForumEntrySubmit={handleForumEntrySubmit} />  : null}
        </Container>
    )
}