import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import {Button} from '../ButtonElement';
import {HeroContainer,HeroBg,VideoBg,
    HeroH1,HeroP1,HeroBtnWrapper,
    ArrowForward,ArrowRight,HeroContent
} 
from './HeroElement';


const HeroSection =()=>{
    const [hover,setHover] = useState(false)
   
    const onHover = ()=>{
        setHover(!hover)
    }
    return(
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Customized Single Page Web Template</HeroH1>
                <HeroP1>
                    Sign up to get more template for your website created with ReactJs...
                </HeroP1>
                <HeroBtnWrapper>
                    <Button to="signup"
                    primary='true'
                    dark='true'
                     onMouseEnter={onHover} onMouseLeave={onHover}>
                        Get Started {hover ? <ArrowForward />:<ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}


export default HeroSection;