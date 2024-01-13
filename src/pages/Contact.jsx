import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import { Fader } from "../components/Fader.jsx";
import { useForm } from "react-hook-form"
import { useState } from "react";

export function Contact () {
   const { register, handleSubmit, formState: { errors } } = useForm({
      mode: 'onBlur'
   })
   const [stayUpdated, setStayUpdated] = useState(false)

   const onSubmit = (data) => console.log(data)

   const handleStayUpdated = () => {
      if (Object.keys(errors).length > 0) {
         return
      }
      setStayUpdated(v => !v)
   }

   return (
      <>
      <Header />

         <div className="contact">

            <Fader>
            <h1>Submit a help request and we’ll get in touch shortly.</h1>
            </Fader>

            <div className="grid-contact">

               <Fader>
               <form action="" onSubmit={handleSubmit(onSubmit)}>

                  <input placeholder={'Name'} {...register("name", { required: true })} className={errors.name ? "form-error" : ""} />
                  <hr className={errors.name ? "form-error" : ""} />
                  {errors.name && <span>This field is required</span>}

                  <input placeholder={'Email Address'} {...register("email", { required: true })} className={errors.email ? "form-error" : ""} />
                  <hr className={errors.email ? "form-error" : ""} />
                  {errors.email && <span>This field is required</span>}

                  <input placeholder={'Company Name'} {...register("company", { required: true })} className={errors.company ? "form-error" : ""} />
                  <hr className={errors.company ? "form-error" : ""} />
                  {errors.company && <span>This field is required</span>}

                  <input placeholder={'Title'} {...register("title", { required: true })} className={errors.title ? "form-error" : ""} />
                  <hr className={errors.title ? "form-error" : ""} />
                  {errors.title && <span>This field is required</span>}

                  <textarea placeholder={'Message'} {...register("message", { required: true })} className={errors.message ? "form-error" : ""} />
                  <hr className={errors.message ? "form-error" : ""} />
                  {errors.message && <span>This field is required</span>}

                  <div className={'flex mt-[1.5rem] items-center'}>
                     <div className={`checkbox ${Object.keys(errors).length > 0 ? 'disabled' : ''} ${stayUpdated ? 'active' : ''}`} onClick={handleStayUpdated}></div>
                     <p>Stay up-to-date with company announcements and updates to our API</p>
                  </div>

                  <button className="btn btn-secondary btn-dark" disabled={Object.keys(errors).length > 0 ? true : false}>Submit</button>
               </form>
               </Fader>


               <Fader>
               <div className="collabs">
                  <h2>Join the thousands of innovators already building with us</h2>

                  <div className="collabs-grid">
                     <img src="/public/images/shared/desktop/tesla-dark.svg" alt="a" />
                     <img src="/public/images/shared/desktop/microsoft-dark.svg" alt="a" />
                     <img src="/public/images/shared/desktop/hewlett-packard-dark.svg" alt="a" />
                     <img src="/public/images/shared/desktop/oracle-dark.svg" alt="a" />
                     <img src="/public/images/shared/desktop/google-dark.svg" alt="a" />
                     <img src="/public/images/shared/desktop/nvidia-dark.svg" alt="a" />
                  </div>
               </div>
               </Fader>
            </div>

         </div>

      <Footer />

      <div className="bg-pattern-normal"></div>
      </>
   )
}