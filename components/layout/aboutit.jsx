const AboutSection = () => (
    <div className="relative mx-auto flex w-full max-w-[1300px] flex-col gap-16 overflow-hidden  leading-relaxed text-blue-100 mt-16 p-16">
        <section id="" className="flex flex-col gap-12 text-slate-300">
            <div id="about" className="absolute top-0 max-md:-top-16"></div>
            <div>
                <h1 className="relative flex text-4xl leading-none text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        height="37"
                        className="right-full mr-2 text-teal-500 md:absolute"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"></path>
                    </svg>
                    About
                </h1>
                <br />
                <p>
                    FlashbackAI is an innovative and heartfelt
                    project that concentrates around the exploration
                    and revival of long-lost memories, imbuing them with
                    life once more. The core essence of this app lies
                    in its commitment to assisting users in overcoming
                    various obstacles and showcasing personal growth through time
                    that they can miss.
                </p>
                <br />
                <p>
                    The central focus of this project is to create an interactive
                    platform that encourages users to revisit their memories,
                    no matter how distant or buried they may seem. Through cutting-edge
                    artificial intelligence, FlashBackAI allows
                    users to try to think of past activities and recreate them.
                </p>
                <br />
            </div>

            <div id="team" className="flex flex-col gap-12 opacity-95">

                <div id="thanks">
                    <h1 className="relative mb-4 flex text-2xl leading-none text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            aria-hidden="true"
                            height="24"
                            className="right-full mr-2 text-red-300 md:absolute"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
                        </svg>
                        Special Thanks to
                    </h1>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div>
                            <h3 className="font-medium">Donations</h3>
                            <p className="text-sm italic text-slate-400">For giving me opportunity to create the app</p>
                        </div>
                        <div>
                            <h3 className="font-medium">Midjourney</h3>
                            <p className="text-sm italic text-slate-400">Most of the design ideas used from their website</p>
                        </div>
                        <div>
                            <h3 className="font-medium">Mentors</h3>
                            <p className="text-sm italic text-slate-400">helping me with any questions, even not project related</p>
                        </div>
                        <div>
                            <h3 className="font-medium">Colleagues/Friends</h3>
                            <p className="text-sm italic text-slate-400">For the best summer coding sessions!</p>
                        </div>

                    </div>
                </div>

                <section className="relative flex flex-col gap-8 text-slate-300">
                    <div id="contact" className="absolute max-md:-top-16"></div>
                    <div>
                        <h1 className="relative flex text-2xl leading-none text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                aria-hidden="true"
                                height="24"
                                className="right-full mr-2 text-amber-600 md:absolute"
                            >
                                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                            Contact
                        </h1>
                        <br />
                        <div className='grid grid-cols-2 '>
                            <div>
                                <p>
                                    For product support or questions: </p>
                                <a href="https://t.me/dannydeadd" className="text-blue-400 underline hover:underline-offset-2">
                                    message me on telegram
                                </a>{' '}
                            </div>
                            <div>
                                <p className="">For billing support:</p>
                                <a href="mailto:danny.barmanbekov@gmail.com" className="text-blue-400 underline transition-all hover:underline-offset-2">
                                    danny.barmanbekov@gmail.com
                                </a>
                            </div>

                        </div>
                        <br />

                    </div>
                </section>

                <section className="flex justify-center gap-[55px] mt-[80px]">
                    <p>
                        <a className="underline-offset-2 opacity-70 hover:underline" href="https://www.instagram.com/iamnotdead_/">
                            Danny
                        </a>
                    </p>
                    <p>
                        <a className="underline-offset-2 opacity-70 hover:underline" href="/terms-of-service">
                            Terms of Service
                        </a>

                    </p>

                    <p>
                        <a className="underline-offset-2 opacity-70 hover:underline" href="/privacy-policy">
                            Privacy Policy
                        </a>

                    </p>

                </section>


            </div>
        </section >
    </div>
);

export default AboutSection;
