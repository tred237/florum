import Container from "react-bootstrap/Container";
import PlantDetails from "../components/PlantDetails";

import { PlantProvider } from "../context/Plant";

export default function PlantPage() {
    return (
        <PlantProvider>
            <Container>
                <PlantDetails />
            </Container>
        </PlantProvider>
    )
}