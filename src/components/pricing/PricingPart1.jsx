import { IconCheck } from "../../svg/IconCheck.jsx";
import { Link } from "react-router-dom";
import { Fader } from "../Fader.jsx";

export function PricingPart1 () {

   return (
      <>
      <h1 className={'title'}>Pricing</h1>

      <div className="pricing-part1">

         <Fader>
            <div className={'plan'}>
            <h2>Free Plan</h2>
            <p>Build and test using our core set of products with up to 100 API requests</p>

            <h1>$0.00</h1>

            <hr/>

            <div className={'flex items-center contracts'}>
               <IconCheck />
               <p className={'ml-[1.5rem]'}>Transactions</p>
            </div>
            <div className={'flex items-center contracts'}>
               <IconCheck />
               <p className={'ml-[1.5rem]'}>Auth</p>
            </div>
            <div className={'flex items-center contracts'}>
               <IconCheck />
               <p className={'ml-[1.5rem]'}>Identity</p>
            </div>

            <p className={'opacity-[.4] ml-[2.3rem] no-contracts'}>Investments</p>
            <p className={'opacity-[.4] ml-[2.3rem] no-contracts'}>Assets</p>
            <p className={'opacity-[.4] ml-[2.3rem] no-contracts'}>Liabilities</p>
            <p className={'opacity-[.4] ml-[2.3rem] no-contracts'}>Income</p>

            <hr className={'mt-[1.5rem]'}/>

            <Link to={'/pricing'} className={'btn btn-secondary btn-dark'}>
               Request Access
            </Link>
         </div>
         </Fader>


      <Fader>
         <div className={'plan'}>
            <h2>Basic Plan</h2>
            <p>Launch your project with unlimited requests and no contractual minimums</p>

            <h1>$249.00</h1>

            <hr/>

            <div className={'flex items-center contracts'}>
               <IconCheck />
               <p className={'ml-[1.5rem]'}>Transactions</p>
            </div>
            <div className={'flex items-center contracts'}>
               <IconCheck />
               <p className={'ml-[1.5rem]'}>Auth</p>
            </div>
            <div className={'flex items-center contracts'}>
               <IconCheck />
               <p className={'ml-[1.5rem]'}>Identity</p>
            </div>
            <div className={'flex items-center contracts'}>
               <IconCheck />
               <p className={'ml-[1.5rem]'}>Investments</p>
            </div>
            <div className={'flex items-center contracts'}>
               <IconCheck />
               <p className={'ml-[1.5rem]'}>Assets</p>
            </div>

            <p className={'opacity-[.4] ml-[2.3rem] no-contracts'}>Liabilities</p>
            <p className={'opacity-[.4] ml-[2.3rem] no-contracts'}>Income</p>

            <hr className={'mt-[1.5rem]'}/>

            <Link to={'/pricing'} className={'btn btn-secondary btn-dark'}>
               Request Access
            </Link>
         </div>
      </Fader>

         <Fader>
         <div className={'plan'}>
            <h2>Premium Plan</h2>
            <p>Get tailored solutions, volume pricing, and dedicated support for your team</p>

            <h1>$499.00</h1>

            <hr/>

            <div className={'flex items-center contracts'}>
               <IconCheck />
               <p className={'ml-[1.5rem]'}>Transactions</p>
            </div>
            <div className={'flex items-center contracts'}>
               <IconCheck />
               <p className={'ml-[1.5rem]'}>Auth</p>
            </div>
            <div className={'flex items-center contracts'}>
               <IconCheck />
               <p className={'ml-[1.5rem]'}>Identity</p>
            </div>
            <div className={'flex items-center contracts'}>
               <IconCheck />
               <p className={'ml-[1.5rem]'}>Investments</p>
            </div>
            <div className={'flex items-center contracts'}>
               <IconCheck />
               <p className={'ml-[1.5rem]'}>Assets</p>
            </div>
            <div className={'flex items-center contracts'}>
               <IconCheck />
               <p className={'ml-[1.5rem]'}>Liabilities</p>
            </div>
            <div className={'flex items-center contracts'}>
               <IconCheck />
               <p className={'ml-[1.5rem]'}>Income</p>
            </div>

            <hr/>

            <Link to={'/pricing'} className={'btn btn-secondary btn-dark'}>
               Request Access
            </Link>
         </div>
         </Fader>
      </div>
      </>
   )
}