import Stack from 'react-bootstrap/Stack';
import Carousel from 'react-bootstrap/Carousel';

import PlantCard from "../components/PlantCard"

export default function CategoryCarousel({ plants, categoryType }) {

    function splitCarousel(){
        const renderObj = {}
        const firstArr = plants.filter((p,index) => index < 4)
        const secondArr = plants.filter((p,index) => index >= 4 && index <= 6)
        renderObj[0] = firstArr
        renderObj[1] = secondArr
        return renderObj
    }

    if(splitCarousel()[0].length === 4) return (
        <Carousel className='carousel-outer' interval={null} wrap={false}>
            <Carousel.Item className='carousel-inner'>
                <Stack direction="horizontal" gap={3}>
                    {splitCarousel()[0].map(plant => <PlantCard key={plant.id} plant={plant} isCarousel={true} />)}
                </Stack>
            </Carousel.Item>
            <Carousel.Item className='carousel-inner'>
                <Stack direction="horizontal" gap={3}>
                    {splitCarousel()[1].map(plant => <PlantCard key={plant.id} plant={plant} isCarousel={true} />)}
                    <PlantCard categoryType={categoryType} isCarousel={true} />
                </Stack>
            </Carousel.Item>
        </Carousel>
    )
    else return (
        <Carousel interval={null} wrap={false}>
            <Carousel.Item className='carousel-inner'>
                <Stack direction="horizontal" gap={3}>
                    {splitCarousel()[0].map(plant => <PlantCard key={plant.id} plant={plant} isCarousel={true} />)}
                    <PlantCard categoryType={categoryType} />
                </Stack>
            </Carousel.Item>
        </Carousel>
    )
}