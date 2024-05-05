
import Image from "next/image"
import Link from 'next/link'

const About = () => {
  return (
    
    <section className="about-us">
        <div className="flex flex-col" >
            <div className="flex flex-col justify-center text-center">
                <div> <h1>We are the world's largest University</h1></div>
                <div> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cumque in accusantium molestias maiores fuga vitae eos, ducimus officiis repudiandae voluptatem error. Laboriosam, numquam blanditiis aspernatur, nobis tempora consequatur id aliquam asperiores voluptatum iste animi voluptatem fugiat totam excepturi dolor.</p></div>
                <div> <Link href="/Home" className="hero_btn btn"> EXPLORE NOW </Link></div>
            </div>
            <div className="about-col">
                <div> <Image src="/img/about.png" alt="About" width={100} height={100}/></div>
            </div>
        </div>
    </section>
    

    
  )
}

export default About;