import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import { UserContext } from '../context/User';
import { PlantsContext } from '../context/Plants';
import { PlantContext } from '../context/Plant';
import PlantInformation from './PlantInformation';
import PlantForum from './PlantForum';
import Loading from "./Loading";
import florumlogo from "../img/florumlogo.png";
import sortArray from '../helpers/sort';

export default function PlantDetails() {
    const { user, setUser } = useContext(UserContext)
    const { plants, setPlants } = useContext(PlantsContext)
    const { plant, setPlant, errorMessage } = useContext(PlantContext)

    const handleForumEntrySubmit = (entry) => {
        const updatedPlant = {...plant}
        updatedPlant.forum_entries = [entry, ...updatedPlant.forum_entries]
        const filteredPlants = plants.filter(p => p.id !== plant.id)
        setPlant(updatedPlant)
        setPlants([updatedPlant, ...filteredPlants])

        const updatedUser = {...user}
        if(!updatedUser.commented_plants.find(p => p.id === updatedPlant.id)) updatedUser.commented_plants = sortArray([updatedPlant,...updatedUser.commented_plants], false, 'name')
        setUser(updatedUser)
    }

    const handleForumEntryEdit = (entry) => {
        const updatedPlant = {...plant}
        const filteredForumEntries = updatedPlant.forum_entries.filter(e => e.id !== entry.id)
        updatedPlant.forum_entries = sortArray([entry, ...filteredForumEntries], true)

        const filteredPlants = [...plants].filter(p => p.id !== plant.id)
        setPlant(updatedPlant)
        setPlants([updatedPlant, ...filteredPlants])
    }

    const plantImage = () => {
        let errored = false
        try {
            require(`../img/${plant.image}`)
        }
        catch(err) {
            errored = true
        }

        if(errored) return plant.image 
        else return require(`../img/${plant.image}`)
    }

    if(errorMessage) return <p>{errorMessage}</p>
    else if(!plant.name) <Loading />
    else return (
        <Container>
            <Container className='d-flex justify-content-center p-4 w-50 h-25'>
                <Image className="img-fluid " src={plantImage()} alt={plant.name} onError={(e) => e.target.src = florumlogo} />
            </Container>
            <Container className='d-flex justify-content-center'>
                <PlantInformation />
            </Container>
            <h2>{plant.description ? "Description" : null}</h2>
            {plant.description}
            <hr className="hr" />
            <h2>Comments</h2>
            {plant.forum_entries ? <PlantForum onForumEntrySubmit={handleForumEntrySubmit} onForumEntryEdit={handleForumEntryEdit} /> : null}
        </Container>
    )
}