import Image from "next/image"

{/* <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Xplore Skill - Sagar Developer</title>
    <Link rel="stylesheet" href="style.css">
    <Link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <Link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;600;700&display=swap">
</head> */}

<body>
    !-- Created BY - Sagar Developer --
    <section className ="header">
        <div>
            <a href="index.html" className ="logo">Xplore
                <i className ="fab fa-staylinked"></i>kill
            </a>
            <div className ="navlinks" id="navLinks">
                !-- Reposnive bar open and close --
                <i className ="fa fa-times"></i>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="course.html">Course</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </div>
            <i className ="fa fa-bars" ></i>
            !-- Reposnive bar open and close --
        </div>

        <div className ="text_box">
            <h2 className="heading">GET READY</h2>
            <p id="headtext">TO DISCOVER CAMPUS</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit consequuntur corrupti sapiente aut porro
                <br/> esse blanditiis in quae perspiciatis quo.
            </p>
            <a href="#" className ="hero_btn">Visit Us To Know More</a>
        </div>
    </section>

    !-- Course Section Start --
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
    !-- Course Section End --

    !-- Campus Section Start--

    <section className ="campus">
        <div className ="PageBlock">
            <div className ="verticalLine"></div>
            <div className ="Clear"></div>
        </div>
        <h1>TAKE OUR VIRTUAL TOUR</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className ="row">
            <div className ="campus-col">
                
                <Image src= "public/img/Campus1.png" alt='LogoL width={100} height={100} /ogo' width={200} height={200} />
                <div className ="layer">
                    <h3>DELHI</h3>
                </div>
            </div>
            <div className ="campus-col">
                <Image src="public/img/Campus2.png" alt="Logo" width={100} height={100} />
                <div className ="layer">
                    <h3>HYDERABAD</h3>
                </div>
            </div>
            <div className ="campus-col">
                <Image src="img/Campus3.png" alt="Logo" width={100} height={100} />
                <div className ="layer">
                    <h3>MUMBAI</h3>
                </div>
            </div>
        </div>
    </section>
    !-- Campus Section End --

    !-- Facilities Section Start --
    <section className ="facilities">
        <div className ="PageBlock">
            <div className ="verticalLine"></div>
            <div className ="Clear"></div>
        </div>
        <h1>Our Facilities</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className ="row">
            <div className ="facilities-col">
                <Image src="img/libary.png" alt="Logo" width={100} height={100} />
                <h3>Best Libary</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                </p>
            </div>
            <div className ="facilities-col">
                <Image src="img/playground.png" alt="Logo" width={100} height={100} />
                <h3>Athletics</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                </p>
            </div>
            <div className ="facilities-col">
                <Image src="img/food.png" alt="Logo" width={100} height={100} />
                <h3>Tasty and Healthy Food</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                </p>
            </div>
        </div>
    </section>
    !-- Facilities Section End --

    !-- Testimonials Section Start --
    <section className ="testimonials">
        <div className ="PageBlock">
            <div className ="verticalLine"></div>
            <div className ="Clear"></div>
        </div>
        <h1>What Our Student Says</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className ="row">
            <div className ="testimonials-col">
                <Image src="img/user.png" alt="Logoo width={100} height={100} o.." />
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
                <Image src="img/user.png" alt="Logoo width={100} height={100} o.." />
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
    !-- Testimonials Section End --

    !-- Call To Action Section Start --
    <section className ="cta">
        <h1>GET READY FOR A BR/IGHT FUTURE</h1>
        <a href="contact.html" className ="hero_btn">CONTACT US</a>
    </section>
    !-- Call To Action Section End --

    !-- Footer Section Start --
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
        <p>Copyright © 2021 <a href="index.html">Xplore Skill</a>. All Rights Reserved</p>
    </section>
    !-- Footer Section End --

    <Image src="script.js" alt="scr" />
</body>