import React from "react";
//count
import CountUp from "react-countup";
// intersection observer
import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variants";

const About = () => {
	const [ref, inView] = useInView({
		threshold: 0.5,
	});
	return (
		<section className='section' id='about' ref={ref}>
			<div className='container mx-auto'>
				<div>
					{/* img */}
					<div className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'></div>
					{/* text */}
					<div>
						<h2>About me.</h2>
						<h3>
							I'm a Freelance Front-end Developer with over 5 years of
							experience.
						</h3>
						<p>
							I'm a passionate Front-end Developer with a background in Web
							Design and Development. I'm a self-taught developer who loves to
							learn new technologies and build projects. I'm currently working
							as a Front-end Developer at
						</p>
						{/* stats  */}
						<div className='flex gap-x-6 lg:gap-x-10 mb-12'>
							<div>
								<div className='text-[40px] font-tertiary text-gradient mb-2'>
									{inView ? <CountUp start={0} end={5} duration={3} /> : null} 
								</div>
								<div className='font-primary text-sm tracking-[2px]'>
									Years of <br />
									Experience
								</div>
							</div>
							<div>
								<div className='text-[40px] font-tertiary text-gradient mb-2'>
									{inView ? <CountUp start={0} end={15} duration={3} /> : null} k+
								</div>
								<div className='font-primary text-sm tracking-[2px]'>
									Projects <br />
									Completed
								</div>
							</div>
							<div>
								<div className='text-[40px] font-tertiary text-gradient mb-2'>
									{inView ? <CountUp start={0} end={12} duration={3} /> : null} k+
								</div>
								<div className='font-primary text-sm tracking-[2px]'>
									Satisfied <br />
									Clients
								</div>
							</div>
            </div>
            <button className="">Contact me</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
