"use client";

// import { PropertyDetail } from "../../chat-section";
// import ChatAvatar from "./chat-avatar";
// import { Message } from "./chat-messages";
// import MessageItemCard from "./message-item-card";


// export default function ChatOfferForm({ }: ChatOfferFormProps) {

//   // const propertyDetails = message?.data?.propertyDetails as PropertyDetail[];

//   return (
//     <>

//     </>
//   );
// }


import React, { useEffect, useState } from 'react';
import { Form, Field } from 'react-final-form';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Password } from 'primereact/password';
import { Checkbox } from 'primereact/checkbox';
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { classNames } from 'primereact/utils';
// import { CountryService } from '../service/CountryService';
import './form.css';

export interface ChatOfferFormProps {
    // propertyDetails: PropertyDetail[];
}

export const ChatOfferForm = () => {
    const [countries, setCountries] = useState([]);
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});
    // const countryservice = new CountryService();

    useEffect(() => {
        // countryservice.getCountries().then(data => setCountries(data));
    }, []);

    const onSubmit = (data, form) => {
        setFormData(data);
        setShowMessage(true);

        form.restart();
    };

    // const isFormFieldValid = (meta) => !!(meta.touched && meta.error);
    // const getFormErrorMessage = (meta) => {
    //     return isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>;
    // };

    const dialogFooter = <div className="flex justify-content-center"><Button label="OK" className="p-button-text" autoFocus onClick={() => setShowMessage(false)} /></div>;
    const passwordHeader = <h6>Pick a password</h6>;
    const passwordFooter = (
        <React.Fragment>
            <Divider />
            <p className="mt-2">Suggestions</p>
            <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: '1.5' }}>
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
            </ul>
        </React.Fragment>
    );

    return (
        <div className="form-container">
            <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
                <div className="flex align-items-center flex-column pt-6 px-3">
                    <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--green-500)' }}></i>
                    <h5>Registration Successful!</h5>
                    <p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
                        Your account is registered under name <b>{formData.name}</b> ; it'll be valid next 30 days without activation. Please check <b>{formData.email}</b> for activation instructions.
                    </p>
                </div>
            </Dialog>
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Offer Information </h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">Text who ever you want where ever you want any time you want enjoy contacting freinds and families.</p>
            </div>
            <div className="flex justify-center items-center">
                <div className="card">
                    <h5 className="text-center">Parties Involved</h5>
                    <Form onSubmit={onSubmit} initialValues={{ name: '', email: '', password: '', date: null, country: null, accept: false }} render={({ handleSubmit }) => (
                        <form onSubmit={handleSubmit} className="p-fluid">
                            <h5>What are the fullname of buyers?</h5>
                            <Field name="name" render={({ input, meta }) => (
                                <div className="field">
                                    <label htmlFor="name" className='block'>Name*</label>
                                    <InputText id="name" {...input} autoFocus className="border border-gray-300 p-2 rounded block" />
                                </div>
                            )} />
                            <Field name="name" render={({ input, meta }) => (
                                <div className="field">
                                    <label htmlFor="name" className='block'>Name*</label>
                                    <InputText id="name" {...input} autoFocus className="border border-gray-300 p-2 rounded block" />
                                </div>
                            )} />
                            <Field name="name" render={({ input, meta }) => (
                                <div className="field">
                                    <label htmlFor="name" className='block'>Name*</label>
                                    <InputText id="name" {...input} autoFocus className="border border-gray-300 p-2 rounded block" />
                                </div>
                            )} />
                            {/* <Field name="email" render={({ input, meta }) => (
                                <div className="field">
                                    <span className="p-float-label p-input-icon-right">
                                        <i className="pi pi-envelope" />
                                        <InputText id="email" {...input} className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                        <label htmlFor="email" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Email*</label>
                                    </span>
                                    {getFormErrorMessage(meta)}
                                </div>
                            )} />
                            <Field name="password" render={({ input, meta }) => (
                                <div className="field">
                                    <span className="p-float-label">
                                        <Password id="password" {...input} toggleMask className={classNames({ 'p-invalid': isFormFieldValid(meta) })} header={passwordHeader} footer={passwordFooter} />
                                        <label htmlFor="password" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Password*</label>
                                    </span>
                                    {getFormErrorMessage(meta)}
                                </div>
                            )} />
                            <Field name="date" render={({ input }) => (
                                <div className="field">
                                    <span className="p-float-label">
                                        <Calendar id="date" {...input} dateFormat="dd/mm/yy" mask="99/99/9999" showIcon />
                                        <label htmlFor="date">Birthday</label>
                                    </span>
                                </div>
                            )} />
                            <Field name="country" render={({ input }) => (
                                <div className="field">
                                    <span className="p-float-label">
                                        <Dropdown id="country" {...input} options={countries} optionLabel="name" />
                                        <label htmlFor="country">Country</label>
                                    </span>
                                </div>
                            )} />
                            <Field name="accept" type="checkbox" render={({ input, meta }) => (
                                <div className="field-checkbox">
                                    <Checkbox inputId="accept" {...input} className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                    <label htmlFor="accept" className={classNames({ 'p-error': isFormFieldValid(meta) })}>I agree to the terms and conditions*</label>
                                </div>
                            )} /> */}

                            <Button type="submit" label="Submit" className="mt-2" />
                        </form>
                    )} />
                </div>
            </div>
        </div>
    );
}
