import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';
import "swiper/css";
import "swiper/css/bundle";
import 'swiper/css/navigation';

const Slider = () => {
    return (
        <div className="lg:mt-16 mt-32">
            <Swiper

                navigation={true}
                modules={[Navigation, Autoplay, Pagination]}
                loop={true}
                autoplay={
                    { delay: 2000 }
                }
                pagination={{
                    clickable: true,
                }}


            >
                <SwiperSlide>
                    <div className="mt-12">
                        <div className="hero p-8 rounded-3xl bg-base-200">
                            <div className="hero-content lg:h-[400px] md:h-[400px]  flex-col flex md:flex-row-reverse lg:flex-row-reverse ">
                                <div className="lg:ml-36">
                                    <img width={'1050px'} src="photo1.avif" className=" rounded-lg shadow-2xl" />
                                </div>
                                <div className="space-y-4 pl-12">
                                    <h1 className="text-5xl font-bold mb-12">Welcome to SleepWell</h1>
                                    <p>Showcase your range of accommodations, from cozy rooms to lavish suites, emphasizing comfort, style, and amenities.</p>
                                    <button className="btn text-white font-bold bg-blue-400">Explore More</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mt-12">
                        <div className="hero p-8 rounded-3xl bg-base-200">
                            <div className="hero-content lg:h-[400px]  flex-col flex md:flex-row-reverse lg:flex-row-reverse">
                                <div className="lg:ml-36">
                                    <img width={'1050px'} src="photo3.jpeg" className=" w-[1050px] rounded-lg shadow-2xl" />
                                </div>
                                <div className="space-y-4 pl-12">
                                    <h1 className="text-5xl font-bold mb-12">Impeccable Service</h1>
                                    <p>Highlight your commitment to exceptional service, ensuring guests feel pampered and well-cared for throughout their stay.</p>
                                    <button className="btn text-white font-bold bg-blue-400">Explore More</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mt-12">
                        <div className="hero p-8 rounded-3xl bg-base-200">
                            <div className="hero-content lg:h-[400px] flex-col flex md:flex-row-reverse lg:flex-row-reverse ">
                                <div className="lg:ml-36">
                                    <img width={'1050px'} src="photo4.jpeg" className=" w-[1050px] rounded-lg shadow-2xl" />
                                </div>
                                <div className="space-y-4 pl-12">
                                    <h1 className="text-5xl font-bold mb-12">Exquisite Dining Experience</h1>
                                    <p>Feature your on-site dining options, whether its a gourmet restaurant, cozy café, or stylish bar, focusing on the culinary delights and ambiance.</p>
                                    <button className="btn text-white font-bold bg-blue-400">Explore More</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mt-12">
                        <div className="hero p-8 rounded-3xl bg-base-200">
                            <div className="hero-content lg:h-[400px] flex-col flex md:flex-row-reverse lg:flex-row-reverse ">
                                <div className="lg:ml-36">
                                    <img width={'1050px'} src="photo5.jpeg" className=" w-[1050px] rounded-lg shadow-2xl" />
                                </div>
                                <div className="space-y-4 pl-12">
                                    <h1 className="text-5xl font-bold mb-12">Local Experiences</h1>
                                    <p>Promote nearby attractions, activities, and experiences that guests can enjoy during their stay, enhancing their overall visit.</p>
                                    <button className="btn text-white font-bold bg-blue-400">Explore More</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mt-12">
                        <div className="hero p-8 rounded-3xl bg-base-200">
                            <div className="hero-content lg:h-[400px] flex-col flex md:flex-row-reverse lg:flex-row-reverse ">
                                <div className="lg:ml-36">
                                    <img width={'1050px'} src="photo6.jpg" className=" w-[1050px] rounded-lg shadow-2xl" />
                                </div>
                                <div className="space-y-4 pl-12">
                                    <h1 className="text-5xl font-bold mb-12">Special Offers and Packages</h1>
                                    <p>Present any current promotions, deals, or packages available to entice visitors to book their stay with you.</p>
                                    <button className="btn text-white font-bold bg-blue-400">Explore More</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mt-12">
                        <div className="hero p-8 rounded-3xl bg-base-200">
                            <div className="hero-content lg:h-[400px] flex-col flex md:flex-row-reverse lg:flex-row-reverse ">
                                <div className="lg:ml-36">
                                    <img width={'1050px'} src="photo7.jpg" className=" w-[1050px] rounded-lg shadow-2xl" />
                                </div>
                                <div className="space-y-4 pl-12">
                                    <h1 className="text-5xl font-bold mb-12">Guest Reviews and Testimonials</h1>
                                    <p>Share positive feedback from previous guests, building trust and credibility by showcasing real experiences and satisfaction.</p>
                                    <button className="btn text-white font-bold bg-blue-400">Explore More</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Slider;