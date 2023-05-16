import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { UserContext } from '../context/User';
import PlantCard from "../components/PlantCard"
import Loading from '../components/Loading';

export default function SeeAllUserPlants({ searchedPlants, category }) {
    const { user } = useContext(UserContext)

    if(!user[category]) <Loading />
    else return(
        <Container className='w-75 p-4'>
            <h1 className='see-all-header'>{category === 'owned_plants' ? "My Plants" : "Commented Plants"}</h1>
            <Container className="see-all-container">
                <Row className="see-all-row" md={3}>
                    {user[category] ? user[category].filter(plant => !searchedPlants || plant.name.toLowerCase().startsWith(searchedPlants.toLowerCase())).map((plant) => {
                        return <Col className="see-all-col" key={plant.id}>
                                    <PlantCard plant={plant} />
                                </Col> 
                    }) : null}
                </Row>
            </Container>
        </Container>
    )
}