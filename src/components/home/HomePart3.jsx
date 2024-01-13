import { Fader } from "../Fader.jsx";

export function HomePart3 () {

   return (
      <div className="home-part3">

         <Fader>
         <div className={'part1'}>
            <img src="/public/images/home/desktop/illustration-easy-to-implement.svg" alt="a" />
            <div>
               <h1>Easy to implement</h1>
               <p>Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation page to integrate payments functionality with ease.</p>
            </div>
         </div>
         </Fader>


   <Fader>
         <div className={"part2"}>
            <div>
               <h1>Simple UI & UX</h1>
               <p>Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion. </p>
            </div>
            <img src="/public/images/home/desktop/illustration-simple-ui.svg" alt="a" />
         </div>
   </Fader>


   <Fader>

         <div className={'part3'}>
            <div>
               <img src="/public/images/home/desktop/icon-personal-finances.svg" alt="a" />
               <h2>Personal Finances</h2>
               <p>Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account.</p>
            </div>

            <div>
               <img src="/public/images/home/desktop/icon-banking-and-coverage.svg" alt="a" />
               <h2>Banking & Coverage</h2>
               <p>With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.</p>
            </div>

            <div>
               <img src="/public/images/home/desktop/icon-consumer-payments.svg" alt="a" />
               <h2>Consumer Payments</h2>
               <p>It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.</p>
            </div>
         </div>
   </Fader>

      </div>
   )
}
