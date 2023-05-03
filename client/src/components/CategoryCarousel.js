import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

import PlantCard from "../components/PlantCard"
import florumlogo from "../img/florumlogo.png";

export default function CategoryCarousel({ plants, categoryType }) {
    const [hover, setHover] = useState(false)
    const history = useHistory()

    function splitCarousel(){
        const renderObj = {}
        const firstArr = plants.filter((p,index) => index < 4)
        const secondArr = plants.filter((p,index) => index >= 4 && index <= 6)
        renderObj[0] = firstArr
        renderObj[1] = secondArr
        return renderObj
    }

    if(splitCarousel()[0].length === 4) return (
        <Carousel interval={null} wrap={false}>
            <Carousel.Item>
                <Stack direction="horizontal" className="h-100 align-items-center" gap={3}>
                    {splitCarousel()[0].map(plant => <PlantCard key={plant.id} plant={plant} />)}
                </Stack>
            </Carousel.Item>
            <Carousel.Item>
                <Stack direction="horizontal" className="h-100 align-items-center" gap={3}>
                    {splitCarousel()[1].map(plant => <PlantCard key={plant.id} plant={plant} />)}
                    <Card style={{opacity: hover ? 0.8 : 1}} 
                        onMouseOver={() => setHover(true)}
                        onMouseOut={() => setHover(false)}
                        onClick={() => history.push(`/categories-${categoryType}`)}>
                        <Card.Img className="d-block w-100" variant="top" src={florumlogo} alt="test" />
                        <Card.Body>
                            <Card.Text>See all</Card.Text>
                        </Card.Body>
                    </Card>
                </Stack>
            </Carousel.Item>
        </Carousel>
    )
    else return (
        <Carousel interval={null} wrap={false}>
            <Carousel.Item>
                <Stack direction="horizontal" className="h-100 align-items-center" gap={3}>
                    {splitCarousel()[0].map(plant => <PlantCard key={plant.id} plant={plant} />)}
                    <Card style={{opacity: hover ? 0.8 : 1}} 
                        onMouseOver={() => setHover(true)}
                        onMouseOut={() => setHover(false)}
                        onClick={() => history.push(`/categories-${categoryType}`)}>
                        <Card.Img className="d-block w-100" variant="top" src={florumlogo} alt="test" />
                        <Card.Body>
                            <Card.Text>See all</Card.Text>
                        </Card.Body>
                    </Card>
                </Stack>
            </Carousel.Item>
        </Carousel>
    )
}