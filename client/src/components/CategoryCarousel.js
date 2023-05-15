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
        <Carousel className='pb-3' interval={null} wrap={false}>
            <Carousel.Item>
                <Stack direction="horizontal" className="align-items-center" gap={3} style={{height: '320px'}}>
                    {splitCarousel()[0].map(plant => <PlantCard key={plant.id} plant={plant} />)}
                </Stack>
            </Carousel.Item>
            <Carousel.Item>
                <Stack direction="horizontal" className="align-items-center" gap={3} style={{height: '320px'}}>
                    {splitCarousel()[1].map(plant => <PlantCard key={plant.id} plant={plant} />)}
                    <PlantCard categoryType={categoryType} />
                </Stack>
            </Carousel.Item>
        </Carousel>
    )
    else return (
        <Carousel className='p-1' interval={null} wrap={false}>
            <Carousel.Item>
                <Stack direction="horizontal" className="h-100 align-items-center" gap={3} style={{height: '320px'}}>
                    {splitCarousel()[0].map(plant => <PlantCard key={plant.id} plant={plant} />)}
                    <PlantCard categoryType={categoryType} />
                </Stack>
            </Carousel.Item>
        </Carousel>
    )
}