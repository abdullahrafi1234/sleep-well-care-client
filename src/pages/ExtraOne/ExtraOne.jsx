import { Typewriter } from 'react-simple-typewriter'

const ExtraOne = () => {
    return (
        <div>

            <div className="text-4xl mt-16 p-18 text-stone-700 text-center font-bold">
                <Typewriter
                    words={['Frequently Asked Questions']}
                    loop={true}
                    cursor
                    cursorStyle='.'
                    typeSpeed={350}
                    deleteSpeed={50}
                    delaySpeed={2000}
                />
            </div>

            {/* <div className='p-10'>
                <h1 className='text-center text-rose-950 mt-10 text-5xl font-semibold'>Frequently Asked Questions</h1>
            </div> */}
            <div className="join join-vertical w-full p-10">
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title font-bold">
                        What is the check-in/check-out policy?
                    </div>
                    <div className="collapse-content">
                        <p>Our standard check-in time is 10.00 AM, and check-out time is 6.00 PM Early check-in and late check-out options may be available upon request, subject to availability and additional charges.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title font-bold ">
                        What amenities are included with the accommodation?
                    </div>
                    <div className="collapse-content">
                        <p>Our accommodations come with a range of amenities to ensure a comfortable stay, including parking, sports facilities. Additionally, guests have access to hotel jym.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title font-bold">
                        Is parking available at the property?
                    </div>
                    <div className="collapse-content">
                        <p>We understand that pets are part of the family, and some of our properties are pet-friendly. Please check the propertys pet policy before booking, as restrictions and additional fees may apply.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title font-bold">
                        What is the cancellation policy?
                    </div>
                    <div className="collapse-content">
                        <p>Our cancellation policy varies depending on the type of booking and the property. Generally, if you cancel your booking before 3 days we pay 75% money. </p>
                    </div>
                </div>

                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title font-bold">
                        <a className="">Are pets allowed at the property?</a>

                    </div>
                    <div className="collapse-content">
                        <p> We understand that pets are part of the family, and some of our properties are pet-friendly. Please check the propertys pet policy before booking, as restrictions and additional fees may apply.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title font-bold">
                        How can I contact customer support for assistance during my stay?
                    </div>
                    <div className="collapse-content">
                        <p>Our dedicated customer support team is available 24 hours to assist you with any inquiries or concerns during your stay. You can reach us by telephone, email, or live chat, and we will be happy to help.</p>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default ExtraOne;