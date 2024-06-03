
import React from 'react';
import emailjs from '@emailjs/browser';

import { useReducer, useRef } from "react";
import Footer from "../components/Footer";
import PageNav from "../components/PageNav";
import styles from './Contact.module.css'
import {Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
// import { useDispatch } from 'react-redux';


function reducer(state, action){
switch(action.type){
    case 'SET_FIELD':
        return{
            ...state,
              [action.field]: action.value
        };


        case 'SET_ERROR':
            return{
                ...state, 
                errors: {
                    ...state.errors,
                    [action.field]: action.errorMessage
                }
             
            };

            case 'CLEAR_ERROR':
                return {
                    ...state,
               errors: {
                ...state.errors,
                [action.field] : ''
               }
                };

                 case 'RESET_FORM':
            return {
                ...initialState  // Resetting all fields to the initial state
            };

            case 'IS_SUBMITTED':
                return {
                    ...state,
                    isSubmitted: true
                }

            

                default:
                    return state;
}
}

const initialState = {
    nameInput: '',
    emailInput: '',
    phoneNumberInput: '',
    message: '',
    isSubmitted: false,
    errors: {
        nameInput: '',
        emailInput: '',
        phoneNumberInput: '',
        message: ''
    }
}

function Contact(){
   

    const [{nameInput, emailInput, phoneNumberInput, message, isSubmitted, errors}, dispatch] = useReducer(reducer, initialState)
    const form = useRef(null);
    let hasErrors = false;

   async function handleSubmit(e) {
        e.preventDefault();

    

     
    
        if (!nameInput || !emailInput || !phoneNumberInput || !message) {
            // Dispatch an error for each field to ensure clarity
            if (!nameInput) dispatch({ type: 'SET_ERROR', field: 'nameInput', errorMessage: 'Name is required.' });
            if (!emailInput) dispatch({ type: 'SET_ERROR', field: 'emailInput', errorMessage: 'Email is required.' });
            if (!phoneNumberInput) dispatch({ type: 'SET_ERROR', field: 'phoneNumberInput', errorMessage: 'Phone number is required.' });
            if (!message) dispatch({ type: 'SET_ERROR', field: 'message', errorMessage: 'Message is required.' });
        hasErrors = true
        
        } else {
            // Clear all errors if every field is filled
            dispatch({ type: 'CLEAR_ERROR', field: 'nameInput' });
            dispatch({ type: 'CLEAR_ERROR', field: 'emailInput' });
            dispatch({ type: 'CLEAR_ERROR', field: 'phoneNumberInput' });
            dispatch({ type: 'CLEAR_ERROR', field: 'message' });
        }


        if(!hasErrors){
            // dispatch ({type: "RESET_FORM"})

            const serviceId = 'service_b5ovkc3'
            const templateId = 'template_l2no6m3'
            const publicKey = 'fVZxDuAdm-q4X2Tch'
          
            try {
                const result = await emailjs.sendForm(serviceId, templateId, form.current, publicKey);

                console.log('SUCCESS!', result);
                dispatch({ type: 'IS_SUBMITTED' });
              } catch (error) {
                console.log('FAILED...', error.text);
              }
            
        }
    }
    

 



    function handleChange(field) {
        return function (e) {
            const value = e.target.value;
            dispatch({ type: 'SET_FIELD', field, value });
            
            // Optionally validate on change
            let error = '';
            switch (field) {
                case 'nameInput':
                    error = validateFullName(value);
                    break;
                case 'emailInput':
                    error = validateEmail(value);
                    break;
                case 'phoneNumberInput':
                    error = validateContactNumber(value);
                    break;
                case 'message':
                    error = validateMessage(value);
                    break;
                default:
                    break;
            }
    
            if (error) {
                dispatch({ type: 'SET_ERROR', field, errorMessage: error });
            
            } else {
                dispatch({ type: 'CLEAR_ERROR', field });
            }
        };
    }
    
  
    function validateFullName(nameInput) {
        // Example: Full name should be at least two words
        const regex = /^[a-zA-Z]+ [a-zA-Z]+$/;
        return regex.test(nameInput) ? null : 'Please enter your full first and last name.';
    }
    
    function validateEmail(emailInput) {
        // Simple emailInput validation pattern
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(emailInput) ? null : 'Please enter a valid email address.';
    }
    
    function validateContactNumber(phoneNumberInput) {
        // Example: US phone number format
        const regex = /^[0-9]{11}$/;
        return regex.test(phoneNumberInput) ? null : 'Please enter a valid contact number';
    }
    
    function validateMessage(message) {
        // Example: Message should not be empty and should be at least 10 characters
        return message.length >= 10 ? null : 'Message must be at least 10 characters long.';
    }
    

    return(
        <div>
            <PageNav/>
            <section className={!isSubmitted ? styles.sectionOne : styles.submitted}>
            <div className={styles.textCont}>
                <h2>Contact Us</h2>
                <h3>Got any questions? </h3>
                <p>
                Either fill out the form with your inquiry or check our our 
                <HashLink smooth to="/#Q%26A">
                    <span> Q&A </span>
                </HashLink>
                section. 
                </p>
                <h4 >
                 Looking for a quick estimate? </h4>
                   <HashLink to="/services#quote">
                      <button>Get a Quote</button>
                 </HashLink>
            </div>
            <form id="myForm" ref={form} className={styles.form} action="#"  onSubmit={handleSubmit}>
            {isSubmitted && <h2 className={styles.submittedMsg}>Thank you for your message!</h2>}

                {!isSubmitted ? <fieldset>
             {/* <legend>
               Contact Us
             </legend> */}
             {/* <span ><p>{errors.allFields}</p></span> */}
             <label  htmlFor='name'>Full name*</label>
             <input name="name" value={nameInput} onChange={handleChange('nameInput')} type="text"/>
             <span className={`${errors.nameInput? styles.show : styles.error}`}><p >{errors.nameInput}</p></span>
           
             <label  htmlFor='email'>Email address*</label>
             <input name="email"  value={emailInput} onChange={handleChange('emailInput')} type="text"/>
             <span className={`${errors.emailInput? styles.show : styles.error}`}><p >{errors.emailInput}</p></span>
            
             <label  htmlFor='number'>Contact number*</label>
             <input name="number" value={phoneNumberInput} onChange={handleChange('phoneNumberInput')} type="text"/>
            <span className={`${errors.phoneNumberInput? styles.show : styles.error}`}><p > {errors.phoneNumberInput}</p></span>

             <label htmlFor='message'> Message*</label>
           <textarea name="message" value={message} onChange={handleChange('message')}></textarea>
           <span className={`${errors.message? styles.show : styles.error}`}><p > {errors.message}</p></span>

           <button className={styles.submitBtn} type="submit" name="btnSubmit" >Submit Form</button>

             </fieldset> : null}

            </form>
          
           
            </section>
            <Footer/>
        </div>
    )
}

export default Contact