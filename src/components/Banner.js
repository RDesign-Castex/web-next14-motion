import React from 'react';
// images
import Image from '../assets/avatar.svg'
// icons
import { FaGithub, FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa'
// type animation
import { TypeAnimation } from 'react-type-animation'
// motion
import { motion } from 'framer-motion'
// variants
import { fadeIn } from '../variants'

const Banner = () => {
  return (
		<section className='section' id='home'>
			<div className='container mx-auto'>
				{/*text*/}
				<div>
					<h1>
						BEN
						<span>AIDEN</span>
					</h1>
					<div className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
						<span className='text-white mr-4'>
							I am a
						</span>
            <TypeAnimation sequence={[
              'Web Developer',
              2000,
              'Front-End Developer',
              2000,
              'Back-End Developer',
              2000,
              'Full-Stack Developer',
              2000,
            ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
            />
           
          </div>
            <p>
              Trabajando con la mejor tecnologia para un futuro mejor gracias por visitarnos y elegirnos 
            </p>
				</div>
				{/*image*/}
				<div>
					<img src={Image} alt='' />
				</div>
			</div>
		</section>
	);
};

export default Banner;
