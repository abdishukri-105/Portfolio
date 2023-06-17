const Services = () => {
    return ( 
        <section id="services">
            <div className="container lg:pt-5">
                <div className="text-center">
                    <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
                        what do i help
                    </h2>
                    <p className="lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur sunt quia distinctio libero laboriosam numquam. Reprehenderit id consectetur quibusdam non tempore. Sequi architecto inventore consectetur?
                    </p>
                </div>

                <div className="flex flex-col justify-center sm:py-12">
                    <div className="w-full py-3 sm:max-w-xl sm:mx-auto sm:px-0">
                         <div className="relative text-gray-700 antialiased text-sm font-semibold">
                            {/* ======= vertical line through the middle ======== */}
                            <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform -translate-x-1/2"></div>
                        </div> 
                    </div>
                </div>
                

            </div>
        </section>
     );
}
 
export default Services;