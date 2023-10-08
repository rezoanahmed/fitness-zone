
import Hero from '../../components/Hero/Hero';
import Services from '../Services/Services';
import Plans from '../Plans/Plans';
import Sponsors from '../Sponsors/Sponsors'
import Footer from '../../components/Footer/Footer';
import Clients from '../Clients/Clients';

const Home = () => {
    return (
        <>
            <div>

                <Hero></Hero>
                <Services></Services>
                <Clients></Clients>
                <Sponsors></Sponsors>
                <Plans></Plans>
                <Footer></Footer>
            </div>
        </>
    );
};

export default Home;