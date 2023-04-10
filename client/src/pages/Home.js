import ListGroup from 'react-bootstrap/ListGroup'

import PlantCard from "../components/PlantCard"

function Home({ plants }) {
    return(
        <h1>Welcome!</h1>
        // <ListGroup> 
        //     {plants.map((plant) => <PlantCard key={plant.id} plant={plant} />)}
        // </ListGroup>
    )
}

export default Home