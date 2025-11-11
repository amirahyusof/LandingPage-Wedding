
import contactImage from '../assets/contact.jpg';

function Contact(){
    return(
        <div className="w-full text-white py-10" id="contact" >
            <div className="flex flex-col lg:flex-row m-auto p-10">
                <img className="w-[380px] lg:w-[500px] mx-auto rounded-3xl" src={contactImage} alt="" />

                <div className="py-8 text-center mx-auto">
                    <h3 className="text-2xl text-bold uppercase lg:mt-16">Love our work?</h3>
                    <p className="py-4 lg:py-0 font-medium">Find out if we're available for you date and get all questions answered.</p>
                    <button className="w-[150px] bg-[#F5EEE6] text-l uppercase text-[#E6A4B4] rounded-md my-4 py-2  hover:bg-[#F3D7CA] hover:text-white">Contact Us</button>
                </div>
            </div>
        </div>
    )
}

export default Contact;