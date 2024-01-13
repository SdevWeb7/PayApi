import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import { Fader } from "../components/Fader.jsx";

export function About () {

   return (
      <>
      <Header />


         <div className="about">

            <Fader>
            <h1>We empower innovators by delivering access to the financial system</h1>
            </Fader>


            <Fader>
            <div className={'grid-about'}>
               <h2>Our Vision</h2>
               <p>Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology.</p>
            </div>
            </Fader>

            <Fader>
            <div className={'grid-about'}>
               <h2>Our Business</h2>
               <p>At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers.</p>
            </div>
            </Fader>


            <Fader>
            <img src="/public/images/about/desktop/image-team-members.jpg" alt="a" className={'max600:hidden block'} />
            <img src="/public/images/about/mobile/image-team-members.jpg" alt="a" className={'max600:block hidden'} />
            </Fader>


            <Fader>
            <div className="final-about">
               <div>
                  <hr/>
                  <p>Team Members</p>
                  <h3>300+</h3>
                  <hr/>
               </div>
               <div>
                  <hr/>
                  <p>Offices in the US</p>
                  <h3>3</h3>
                  <hr/>
               </div>
               <div>
                  <hr/>
                  <p>Transactions analyzed</p>
                  <h3>10M+</h3>
                  <hr/>
               </div>
            </div>
            </Fader>


            <Fader>
            <div className={'grid-about'}>
               <h2>The Culture</h2>
               <p>We strongly believe there's always an opportunity to learn from each other outside of day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration and diversity of thought, no matter the job title.</p>
            </div>
            </Fader>

            <Fader>
            <div className={'grid-about'}>
               <h2>The People</h2>
               <p>We're all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diverse backgrounds and skills.</p>
            </div>
            </Fader>

         </div>


      <Footer />

         <div className="bg-pattern-normal"></div>
      </>
   )
}