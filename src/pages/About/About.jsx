import Aos from "aos";

const About = () => {
    Aos.init({duration: 1500})
    return (
        <>
        
        <div data-aos='zoom-in'>
            <section className="mt-8 p-4 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-4 border-b pb-2 border-red-600">About Us</h2>
            <p className="mt-4 leading-relaxed">
                Welcome to <span className="text-red-600">Gym Zone</span> - your ultimate destination for fitness and well-being. Our establishment focuses on the overall development of our members, helping them achieve their fitness goals and aspirations. With state-of-the-art equipment, certified trainers, and a vibrant community, we ensure a premium workout experience.
            </p>
            <p className="mt-4 leading-relaxed">
                At <span className="text-red-600">Gym Zone</span>, we believe in promoting a healthy lifestyle, pushing limits, and breaking barriers. Whether you're a beginner or an athlete, our wide range of training programs and classNamees are tailored to meet individual needs.
            </p>
            <p className="mt-4 leading-relaxed">
                So, what are you waiting for? Join us today and embark on a transformative fitness journey with <span className="text-red-600">Gym Zone</span>!
            </p>
        </section>
        </div>
         </>
    );
};

export default About;