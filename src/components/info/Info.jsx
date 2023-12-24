import './Info.css';
import React from 'react';

export default function Info(
    {
        transformX
    }) {

    return (
        <div>
             <div className="info-container" id='info' style={{transform: `translateX(${transformX}%)`}}>
                    <div className='info'> 
                    <h1> About us </h1> 
                    <div>
                        <h1> HOW IT ALL STARTED </h1>
                        <p>Our story began in 2000 when Robert Blackwell Jr. decided to sponsor the Ping Pong Festival in Chicago. He got fascinated by the amount of people that were lining up to play at the event and he realized that table tennis is a great way to disconnect from technology and connect with people instead. In 2001, Robert started Killerspin, a luxury table tennis company that creates engaging experiences with people you care about. 
                        </p>
                    </div>

                    <h2>We are dedicated to creating a cutting edge table tennis brand focused on developing strong relationships.
                    </h2>

                    <div>
                        <h1>OUR MISSION IS SIMPLE:</h1>
                        <p>Bring style and intensity to table tennis.
                        Hundreds of millions of people play table tennis. They play in their basements, clubs, parks, even on their dining table. Killerspin carefully designed table tennis equipment in order to bring excitement to the sport.
                        </p>
                    </div>

                    <h2>We use technology to bring you the best table tennis experience.
                    </h2>

                    <div>
                        <h1>THE KILLERSPIN DIFFERENCE</h1>
                        <p>At Killerspin, we not only make top of the line ping pong equipment, we also help build and support engaged communities of avid players with events, content, training, education and inspiration.
                        </p>
                    </div>

                    <div>
                        <h1>Get in touch</h1>
                        <div className="socials">
                            <a target='blank' href="https://instagram.com/killerspin/">
                                Instagram
                            </a>
                            <a target='blank' href="https://www.facebook.com/killerspin">
                                Facebook
                            </a>
                            <a target='blank' href="https://twitter.com/killerspin">
                                Twitter
                            </a>
                            <a target='blank' href="https://www.youtube.com/user/killerspin">
                                Youtube
                            </a>
                            <a href="mailto:31alla.min10@gmail.com?body=Hello!&subject=Killerspin Store"> Contact via email</a>

                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    )
}