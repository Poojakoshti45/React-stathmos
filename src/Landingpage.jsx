import css3 from './assets/css3.png';
import elementor from './assets/elementor.png';
import html5 from './assets/html5.png';
import js from './assets/js.png';
import woo from './assets/woo.png';
import wp from './assets/wp.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; 

function LandingPage() {
    return (
        <div>
            {/* Landing Page Section */}
            <div className="flex items-center justify-between text-white gap-4 md:flex-row flex-col">
                <div className="header-content md:w-1/2 ">
                    <h1 className="text-4xl font-bold mb-8 font-montserrat">Empowering Your WordPress Presence</h1>
                    <p className="text-lg font-lato">Custom WordPress solutions to take your business to the next level.</p>
                </div>
                <div className="contact-form-wrapper md:w-1/2  bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold mb-6 font-lato">Let's Collaborate to Bring Your Vision to Life</h3>
                    <form className="contact-form flex flex-col">
                        <div className="form__group field mb-6 flex items-center gap-4">
                            <label htmlFor="name" className="form__label w-1/6">Name</label>
                            <input 
                                type="text" 
                                className="form__field w-full p-2 rounded border border-gray-600 bg-gray-700 text-white transition-transform duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 transform focus:scale-105" 
                                placeholder="Name" 
                                name="name" 
                                id="name" 
                                required 
                            />
                        </div>
                        <div className="form__group field mb-6 flex items-center gap-4">
                            <label htmlFor="email" className="form__label w-1/6">Email</label>
                            <input 
                                type="email" 
                                className="form__field w-full p-2 rounded border border-gray-600 bg-gray-700 text-white transition-transform duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 transform focus:scale-105" 
                                placeholder="Email" 
                                name="email" 
                                id="email" 
                                required 
                            />
                        </div>
                        <div className="form__group field mb-6 flex items-center gap-4">
                            <label htmlFor="message" className="form__label w-1/6">Message</label>
                            <textarea 
                                className="form__field w-full p-2 rounded border border-gray-600 bg-gray-700 text-white transition-transform duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 transform focus:scale-105" 
                                placeholder="Message" 
                                required
                            ></textarea>
                        </div>
                        <div className="flex justify-center">
                            <button 
                                type="submit" 
                                className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg group focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                                <span className="absolute inset-0 bg-blue-800 rounded-lg transition-transform duration-300 ease-in-out scale-125 group-hover:scale-100"></span>
                                <span className="relative z-10">Get a Free Quote</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* About Technologies Section */}
            <section className="text-white mt-20 mb-20">
                <div className="container mx-auto flex flex-col md:flex-row gap-4">
                    <div className="technologies-content w-full md:w-1/2 border-solid border-4 border-blue-600 p-6 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-bold mb-4 font-montserrat">About Us</h2>
                        <p className="mb-4 font-lato">
                            We are an India-based agency specializing in WordPress projects. Our mission is to create cutting-edge
                            websites that are visually stunning, highly functional, and tailored to meet your specific needs.
                            With a focus on user experience, performance, and scalability, we bring your ideas to life with
                            precision and creativity.
                        </p>
                        <p>
                            Whether you need a custom WordPress solution, a powerful eCommerce platform, or an optimized
                            performance boost, our experienced team is here to help you every step of the way.
                        </p>
                    </div>
                    <div className="technologies-content w-full md:w-1/2 border-solid border-4 border-blue-600 p-6 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-bold mb-4">Technologies &amp; Tools</h2>
                        <div className="technologies-list grid grid-cols-3 gap-4">
                            <div className="technology-item flex flex-col items-center transition-transform duration-300 hover:scale-110">
                                <img src={wp} alt="WordPress" className="w-20 h-auto rounded text-center mx-auto" />
                                <p>WordPress</p>
                            </div>
                            <div className="technology-item flex flex-col items-center transition-transform duration-300 hover:scale-110">
                                <img src={woo} alt="WooCommerce" className="w-20 h-auto rounded text-center mx-auto" />
                                <p>WooCommerce</p>
                            </div>
                            <div className="technology-item flex flex-col items-center transition-transform duration-300 hover:scale-110">
                                <img src={elementor} alt="Elementor" className="w-20 h-auto rounded text-center mx-auto" />
                                <p>Elementor</p>
                            </div>
                            <div className="technology-item flex flex-col items-center transition-transform duration-300 hover:scale-110">
                                <img src={html5} alt="HTML5" className="w-20 h-auto rounded text-center mx-auto" />
                                <p>HTML5</p>
                            </div>
                            <div className="technology-item flex flex-col items-center transition-transform duration-300 hover:scale-110">
                                <img src={css3} alt="CSS3" className="w-20 h-auto rounded text-center mx-auto" />
                                <p>CSS3</p>
                            </div>
                            <div className="technology-item flex flex-col items-center transition-transform duration-300 hover:scale-110">
                                <img src={js} alt="JavaScript" className="w-20 h-auto rounded text-center mx-auto" />
                                <p>JavaScript</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our WordPress Services Section */}
            <section className="services-section">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-10 font-montserrat text-white">Our WordPress Services</h2>
                    <div className="services-cards flex gap-4 flex-wrap">
                        <div className="service-card border-4 border-blue-600 rounded-lg p-6 w-1/2">
                            <div className="title flex items-center mb-2">
                                <span className="it-work__item--steps bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">01</span>
                                <h3 className="text-xl font-semibold font-montserrat text-white">Custom WordPress Development</h3>
                            </div>
                            <p className="font-lato text-white">We offer customized WordPress solutions tailored to your business requirements. Our experienced developers transform your vision into websites that are not only beautiful but also fully functional.</p>
                        </div>
                        <div className="service-card border-4 border-blue-600 rounded-lg p-6 w-1/2">
                            <div className="title flex items-center mb-2">
                                <span className="it-work__item--steps bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">02</span>
                                <h3 className="text-xl font-semibold font-montserrat text-white">WordPress Maintenance & Support</h3>
                            </div>
                            <p className="font-lato text-white">Our maintenance services keep your site secure with the latest updates, security patches, and backups. You can trust us to handle the technical details.</p>
                        </div>
                        <div className="service-card border-4 border-blue-600 rounded-lg p-6 w-1/2">
                            <div className="title flex items-center mb-2">
                                <span className="it-work__item--steps bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">03</span>
                                <h3 className="text-xl font-semibold font-montserrat text-white">SEO-Optimized WordPress Design</h3>
                            </div>
                            <p className="font-lato text-white">Our SEO-optimized designs will help increase your organic traffic. We optimize your site to impress search engine algorithms.</p>
                        </div>
                        <div className="service-card border-4 border-blue-600 rounded-lg p-6 w-1/2">
                            <div className="title flex items-center mb-2">
                                <span className="it-work__item--steps bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">04</span>
                                <h3 className="text-xl font-semibold font-montserrat text-white">E-Commerce Solutions</h3>
                            </div>
                            <p className="font-lato text-white">We create user-friendly e-commerce websites that promise high conversion rates. Whether you need simple product listings or complex payment gateways, we’re here to help.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <div className="testimonials-section bg-gray-800 p-6 rounded-lg mt-20 shadow-lg mb-20">
                <h2 className="text-3xl font-bold mb-10 font-montserrat text-white">What our awesome clients say.</h2>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={2} 
                    pagination={{ clickable: true }} 
                >
                    {[ 
                        {
                            quote: "Stathmos helped us build a WordPress website that not only looks amazing but also drives traffic and sales. Highly recommended!",
                            name: "Jane Doe",
                            title: "CEO of InnovateCorp"
                        },
                        {
                            quote: "Their WooCommerce integration was flawless. We now have a fully functional online store, and the support from Stathmos has been outstanding.",
                            name: "John Smith",
                            title: "Founder of Techify"
                        },
                        {
                            quote: "Stathmos delivered a custom theme that perfectly matches our brand. The level of detail and dedication to our project was incredible.",
                            name: "Sarah Lee",
                            title: "COO of FutureTech"
                        },
                        {
                            quote: "We had performance issues with our website, but Stathmos optimized everything and improved the loading speed significantly. Great job!",
                            name: "Michael Brown",
                            title: "Director at GrowthCorp"
                        },
                    ].map((testimonial, index) => (
                        <SwiperSlide key={index} className="testimonial bg-gray-700 p-4 rounded-lg mb-4  transition-transform duration-300 hover:scale-105">
                            <p className="text-white mb-4 font-lato"><span className='text-blue-500 mb-1 '>"</span>{testimonial.quote}<span className='text-teal-500 mb-1'>"</span></p>
                            <p className="font-bold text-white font-lato"><span className='text-blue-500 mb-1 text-xl'>{testimonial.name},</span> <br /><span className="font-normal">{testimonial.title}</span></p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default LandingPage;
