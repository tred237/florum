import SearchedPlants from "../components/SearchedPlants";
import CarouselPlants from '../components/CarouselPlants';

export default function HomePage({ searchedPlants }) {

    if(!searchedPlants) return <CarouselPlants />     
    else return <SearchedPlants searchedPlants={searchedPlants} />
}
