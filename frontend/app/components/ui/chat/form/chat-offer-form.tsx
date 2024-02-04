"use client";

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
    offerHtmlStr?: string;
}

export const ChatOfferForm = ({}: ChatOfferFormProps) => {
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


    const markdownHtml = <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
                
            
</Dialog>;

const markdownHtml2 = (<div dangerouslySetInnerHTML={{ __html: `<pre><code># California Residential Purchase Agreement\n</code></pre>\n<p><strong>1. OFFER:</strong><br />\nYina Qiao (&quot;Buyer&quot;) offers to buy the property at the address provided, subject to the terms and conditions set forth in this agreement.</p>\n<p><strong>2. PURCHASE PRICE:</strong><br />\nThe purchase price shall be One Million Six Hundred Fifty Thousand Dollars ($1,650,000).</p>\n<p><strong>3. FINANCING:</strong></p>\n<ul>\n<li><strong>3.1 INITIAL DEPOSIT:</strong> Buyer shall deposit the sum of Three Hundred Thirty Thousand Dollars ($330,000) into escrow within 3 business days following acceptance of this offer.</li>\n<li><strong>3.2 BALANCE OF DOWN PAYMENT:</strong> The balance of the down payment, in addition to the initial deposit, to comply with the financing terms below.</li>\n<li><strong>3.3 LOAN:</strong> Buyer intends to obtain a loan for the balance of the purchase price.</li>\n</ul>\n<p><strong>4. TERMS OF LOAN:</strong></p>\n<ul>\n<li><strong>4.1 LOAN AMOUNT:</strong> The loan amount will be the difference between the purchase price and the sum of the initial deposit and balance of down payment.</li>\n<li><strong>4.2 LOAN TYPE:</strong> Conventional, Fixed Rate.</li>\n</ul>\n<p><strong>5. CONTINGENCIES:</strong></p>\n<ul>\n<li><strong>5.1 FINANCING CONTINGENCY:</strong> This offer is contingent upon Buyer obtaining a loan approval for the financing described above within 21 days of acceptance.</li>\n<li><strong>5.2 APPRAISAL CONTINGENCY:</strong> This offer is contingent upon the property appraising at or above the purchase price within 17 days of acceptance.</li>\n<li><strong>5.3 INSPECTION CONTINGENCY:</strong> Buyer has the right to conduct inspections of the property within 17 days of acceptance.</li>\n</ul>\n<p><strong>6. CLOSING AND POSSESSION:</strong></p>\n<ul>\n<li><strong>6.1 CLOSING DATE:</strong> Closing shall occur no later than 30 days after acceptance of this offer or 5 days after removal of all contingencies, whichever is later.</li>\n<li><strong>6.2 POSSESSION:</strong> Buyer shall take possession of the property upon closing.</li>\n</ul>\n<p><strong>7. SELLER’S DISCLOSURES:</strong><br />\nSeller shall provide all disclosures required by law regarding the condition of the property and any known material facts that may affect the property's value.</p>\n<p><strong>8. FINAL WALK-THROUGH:</strong><br />\nBuyer shall have the right to a final walk-through of the property within 5 days before closing.</p>\n<p><strong>9. OFFER EXPIRATION:</strong><br />\nThis offer shall expire if not accepted by the seller within 3 days of its date.</p>\n<p><strong>10. ADDITIONAL TERMS:</strong></p>\n<ul>\n<li><strong>10.1 PRICE NEGOTIATION:</strong> Buyer is open to negotiating the price based on the property's condition or appraisal.</li>\n<li><strong>10.2 OTHER:</strong> Any additional terms or conditions will be attached as addenda to this agreement.</li>\n</ul>\n<p><strong>11. ACCEPTANCE:</strong><br />\nThis offer is hereby submitted on [insert date of submission]. Buyer awaits seller's acceptance.</p>\n<p><strong>Buyer:</strong></p>\n<ul>\n<li>Name: Yina Qiao</li>\n<li>Signature: ______________________</li>\n<li>Date: ______________________</li>\n</ul>\n<p><strong>Seller:</strong></p>\n<ul>\n<li>Signature: ______________________</li>\n<li>Date: ______________________</li>\n</ul>\n` }} />);

    return (
        <>
            {
            showMessage ?  markdownHtml2 :
        <div className="form-container">
            <div className=" max-w-2xl">
                <h2 className="text-xl tracking-tight text-gray-900">Offer Information </h2>
                {/* <p className="mt-2 text-lg leading-8 text-gray-600">Text who ever you want where ever you want any time you want enjoy contacting freinds and families.</p> */}
            </div>
            <div className="flex justify-center items-center">
                <div className="card">
                    <Form onSubmit={onSubmit} initialValues={{ name: '', email: '', password: '', date: null, country: null, accept: false }} render={({ handleSubmit }) => (
                        <form onSubmit={handleSubmit} className="p-fluid">

                            <h3 className="text-lg">Parties Involved</h3>
                            <Field name="name" render={({ input, meta }) => (
                                <div className="field">
                                    <label htmlFor="name" className='block'>What are the fullname of buyers?</label>
                                    <InputText id="name" {...input} autoFocus className="border border-gray-300 rounded block" />
                                </div>
                            )} />
                            <Field name="name" render={({ input, meta }) => (
                                <div className="field">
                                    <label htmlFor="name" className='block'>Are there co-owners involved in this transaction? full names?</label>
                                    <InputText id="name" {...input} autoFocus className="border border-gray-300 rounded block" />
                                </div>
                            )} />
                            <Field name="name" render={({ input, meta }) => (
                                <div className="field">
                                    <label htmlFor="name" className='block'>Should any party be listed with a specific title (e.g., as a trustee)?</label>
                                    <InputText id="name" {...input} autoFocus className="border border-gray-300  rounded block" />
                                </div>
                            )} />

                            <h3 className="text-lg">Offer Price and Financing Terms</h3>
                            <Field name="name" render={({ input, meta }) => (
                                <div className="field">
                                    <label htmlFor="name" className='block'>What purchase price are you offering? </label>
                                    <InputText id="name" {...input} autoFocus className="border border-gray-300 rounded block" />
                                </div>
                            )} />

                            <div className="flex flex-row space-x-4">
                                <span className="center relative inline-block select-none whitespace-nowrap rounded-lg bg- py-2 px-3.5 align-baseline font-sans text-xs border border-solid border-gray-300">
                                    <div className="mt-px">chip gradient</div>
                                </span>
                                <span className="center relative inline-block select-none whitespace-nowrap rounded-lg bg- py-2 px-3.5 align-baseline font-sans text-xs border border-solid border-gray-300">
                                    <div className="mt-px">Closing Costs</div>
                                </span>
                                <span className="center relative inline-block select-none whitespace-nowrap rounded-lg bg- py-2 px-3.5 align-baseline font-sans text-xs border border-solid border-gray-300">
                                    <div className="mt-px">Closing and Possession Dates</div>
                                </span>
                                <span className="center relative inline-block select-none whitespace-nowrap rounded-lg bg- py-2 px-3.5 align-baseline font-sans text-xs border border-solid border-gray-300">
                                    <div className="mt-px">Inspection Rights</div>
                                </span>
                            </div>

                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="w-20 p-2 mt-5 text-white rounded-xl shadow-xl bg-gradient-to-r from-cyan-500 to-sky-500 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    )} />
                </div>
            </div>
        </div>}
        </>
        
    );
}