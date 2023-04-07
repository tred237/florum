import PlantCard from "../components/PlantCard"

function Home({ plants }) {
    return(
        <ul>
            {plants.map((plant) => <PlantCard key={plant.id} plant={plant} />)}
        </ul>
    )
}

export default Home