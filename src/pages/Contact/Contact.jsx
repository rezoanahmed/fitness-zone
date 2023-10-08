import Aos from "aos";
import { useEffect } from "react";

const Contact = () => {
    useEffect(()=>{
        Aos.init({
            duration: 1500
        })
    },[])
    return (
        <>
        
        <div data-aos='zoom-in'>
            <section className="mt-8 p-4 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-4 border-b pb-2 border-red-600">Contact Us</h2>
            
            <div className="mt-4">
                <p className="leading-relaxed mb-4">
                    Got questions or feedback? We'd love to hear from you! Reach out using the contact form below or find our contact details provided.
                </p>

                
               

                
                <div className="mt-8">
                    <p><strong>Email:</strong> support@gymzonebd.com</p>
                    <p className="mt-2"><strong>Phone:</strong> +880 1800000001</p>
                    <p className="mt-2"><strong>Address:</strong> Bashundhara R/A, Dhaka, Bangladesh</p>
                </div>
            </div>
        </section>
        </div>
        </>
    );
};

export default Contact;