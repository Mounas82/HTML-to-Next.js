import React from 'react'
import Image from "next/image"
import Link from 'next/link'
// import styles from "./page.modules.css"



    
const Home1 = () => {
    return (
        
        
        // <head>
        //     <meta charset="UTF-8">
    //     <meta http-equiv="X-UA-Compatible" content="IE=edge">
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //     <title>Xplore Skill - Sagar Developer</title>
    //     
    //     
    // </head>
<body>
    <section className ="header">
        <div className='flex flex-row w-screen '>
            <a href="index.html" className ="logo">Xplore
                <i className ="fab fa-staylinked"></i>kill
            </a>
            <div className ="nav-links flex flex-row gap-6 text-white uppercase text-left w-screen mr-10 justify-end font-bold text-1.5xl " id="navLinks">
                {/* <i className ="fa fa-times"></i> */}
                {/* <ul> */}
                    <div><Link href="/Home"> Home </Link> </div>
                    <div><Link href="/Course">Course </Link></div>
                    <div><Link href="/Blog"> Blog </Link></div>
                    <div><Link href="/About">About </Link></div>
                    <div><Link href="/Contact"> </Link>Contact</div>
                {/* </ul> */}
            </div>
            {/* <i className ="fa fa-bars" ></i> */}
        </div>

        <div className ="text_box">
            <h2>GET READY</h2>
            <p id="headtext">TO DISCOVER CAMPUS</p>
            <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit consequuntur corrupti sapiente aut porro
                <br/> esse blanditiis in quae perspiciatis quo.
            </p>
            <a href="#" className ="hero_btn">Visit Us To Know More</a>
        </div>
    </section>

    <section className ="course">
        <div className ="PageBlock">
            <div className ="verticalLine"></div>
            <div className ="Clear"></div>
        </div>
        <h1>EXPLORE OUR 60+ <br/> MAJOR PROGRAMS</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className ="row">
            <div className ="course-col">
                <h3>Undergraduate Programs</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
                    soluta labore quisquam impedi distinctio explicabo aut minima quos pariatur unde aliquam earum
                    laborum velit non.</p>
            </div>
            <div className ="course-col">
                <h3>Graduate Programs</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
                    soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum
                    laborum velit non.</p>
            </div>
            <div className ="course-col">
                <h3>Adult Learning & Degree Completion</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
                    soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum
                    laborum velit non.</p>
            </div>
        </div>
    </section>


    <section className ="campus">
        <div className ="PageBlock">
            <div className ="verticalLine"></div>
            <div className ="Clear"></div>
        </div>
        <h1>TAKE OUR VIRTUAL TOUR</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className ="row">
            <div className ="campus-col">
                
            <Image src= "/img/Campus1.png" alt='Logo' width={200} height={200} />
                <div className ="layer">
                    <h3>DELHI</h3>
                </div>
            </div>
            <div className ="campus-col">
                <Image src="/img/Campus2.png" alt="Logo" width={100} height={100} />
                <div className ="layer">
                    <h3>HYDERABAD</h3>
                </div>
            </div>
            <div className ="campus-col">
                <Image src="/img/Campus3.png" alt="Logo" width={100} height={100} />
                <div className ="layer">
                    <h3>MUMBAI</h3>
                </div>
            </div>
        </div>
    </section>

    <section className ="facilities">
        <div className ="PageBlock">
            <div className ="verticalLine"></div>
            <div className ="Clear"></div>
        </div>
        <h1>Our Facilities</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className ="row">
            <div className ="facilities-col">
                <Image src="/img/libary.png" alt="Logo" width={100} height={100} />
                <h3>Best Libary</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                </p>
            </div>
            <div className ="facilities-col">
                <Image src="/img/playground.png" alt="Logo" width={100} height={100} />
                <h3>Athletics</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                </p>
            </div>
            <div className ="facilities-col">
                <Image src="/img/food.png" alt="Logo" width={100} height={100} />
                <h3>Tasty and Healthy Food</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                </p>
            </div>
        </div>
    </section>
    {/* !-- Facilities Section End -- */}

    {/* !-- Testimonials Section Start -- */}
    <section className ="testimonials">
        <div className ="PageBlock">
            <div className ="verticalLine"></div>
            <div className ="Clear"></div>
        </div>
        <h1>What Our Student Says</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className ="row">
            <div className ="testimonials-col">
                <Image src="/img/user.png" alt="Logo" width={100} height={100} />
                
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maiores in nostrum rerum voluptatem
                        praesentium veritatis alias omnis voluptate nisi aperiam, voluptatum quibusdam itaque a
                        deserunt. In quia repellat maxime.</p>
                    <h3>Student Name</h3>
                    <i className ="fa fa-star"></i>
                    <i className ="fa fa-star"></i>
                    <i className ="fa fa-star"></i>
                    <i className ="fa fa-star"></i>
                    <i className ="fa fa-star"></i>
                </div>
            </div>
            <div className ="testimonials-col">
                <Image src="/img/user.png" alt="Logo" width={100} height={100} />
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maiores in nostrum rerum voluptatem
                        praesentium veritatis alias omnis voluptate nisi aperiam, voluptatum quibusdam itaque a
                        deserunt. In quia repellat maxime.</p>
                    <h3>Student Name</h3>
                    <i className ="fa fa-star"></i>
                    <i className ="fa fa-star"></i>
                    <i className ="fa fa-star"></i>
                    <i className ="fa fa-star"></i>
                    <i className ="fa fa-star-half-alt">Logo</i>
                </div>
            </div>
        </div>
    </section>
    {/* !-- Testimonials Section End -- */}

    {/* !-- Call To Action Section Start -- */}
    <section className ="cta">
        <h1>GET READY FOR A BR/IGHT FUTURE</h1>
        <Link href="contact.html" className ="hero_btn">CONTACT US</Link>
    </section>
    {/* !-- Call To Action Section End -- */}

    {/* !-- Footer Section Start -- */}
    <section className ="footer">
        <br/>
        <h4>About Us</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima incidunt odio nam facilis, eligendi
            Itaque fugiat cupiditate consectetur. Aliquid ab deserunt exercitationem, illum molestiae dolorem.
        </p>

        <div className ="icons">
            <i className ="fab fa-facebook-f"></i>
            <i className ="fab fa-instagram"></i>
            <i className ="fab fa-twitter"></i>
            <i className ="fab fa-linkedin"></i>
        </div>
        <p>Made with <i className ="fas fa-heart"></i> by <a href="index.html">Sagar Developer</a></p>
        <p>Copyright © 2021 <link href="index.html"/>  Xplore Skill. All Rights Reserved</p>
    </section>
    {/* !-- Footer Section End -- */}

    {/* <Image src="script.js" alt="scr" width={100} height={100} /> */}
</body>

  )
}

export default Home1