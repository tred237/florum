import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'

import PlantInformation from './PlantInformation';
import PlantForum from './PlantForum';
import Loading from "./Loading";
import florumlogo from "../img/florumlogo.png";

export default function PlantDetails({ plant, setPlant }) {
    const handleForumEntrySubmit = (entry) => {
        const updatedPlant = {...plant}
        updatedPlant.forum_entries = [entry, ...updatedPlant.forum_entries]
        setPlant(updatedPlant)
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