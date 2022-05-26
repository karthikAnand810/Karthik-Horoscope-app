import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { Image } from 'primereact/image';
import './Form.css';
import { SelectButton } from 'primereact/selectbutton';
import { getSigns } from '../services/api';

export const Form = ({ formFilled }) => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    const sunSign1 = ['aries', 'taurus', 'gemini', 'cancer'];
    const sunSign2 = ['leo', 'virgo', 'libra', 'scorpio',];
    const sunSign3 = ['sagittarius', 'capricorn', 'aquarius', 'pisces']
    const timeFrame = ['yesterday', 'today', 'tomorrow'];
    const [signs, setSigns] = useState([])

    useEffect(() => {
        getSigns().then(setSigns)
    }, [])
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            date: date,
            sign: '',
            day: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.name) {
                errors.name = 'Name is required.';
            }

            if (!data.email) {
                errors.email = 'Email is required.';
            }
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
                errors.email = 'Invalid email address. E.g. example@email.com';
            }
            if (!data.sign) {
                errors.sign = 'Select a Sign.';
            }

            return errors;
        },
        onSubmit: (data) => {
            formFilled(data)
            formik.resetForm();
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
    };



    return (
        <div className="form-demo">
            <div className='header'><Image src="../horoscope.png" alt="Image" width="230" />
                <h4>Horoscope App</h4>
            </div>

            <div className="flex justify-content-center ">
                <div className="card form-card">
                    <form onSubmit={formik.handleSubmit} className="p-fluid">
                        <div className="field">
                            <span className="p-float-label p-input-icon-left">
                                <i className='pi pi-user'></i>
                                <InputText id="name" name="name" value={formik.values.name} onChange={formik.handleChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('name') })} />
                                <label htmlFor="name" className={classNames({ 'p-error': isFormFieldValid('name') })}>Name*</label>
                            </span>
                            {getFormErrorMessage('name')}
                        </div>
                        <div className="field">
                            <span className="p-float-label p-input-icon-left">
                                <i className="pi pi-envelope" />
                                <InputText id="email" name="email" value={formik.values.email} onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('email') })} />
                                <label htmlFor="email" className={classNames({ 'p-error': isFormFieldValid('email') })}>Email*</label>
                            </span>
                            {getFormErrorMessage('email')}
                        </div>

                        <div className="field">
                            <span className="p-float-label">
                                {/* <i className="pi pi-envelope" /> */}
                                <InputText id="date" name="date" value={date} disabled />
                                <label htmlFor="date">date*</label>
                            </span>

                        </div>

                        <div className="sign-select sign ">
                            <label htmlFor="sign">Select Sign</label>
                            <div>
                                <SelectButton id="sign" name="sign" key={signs} options={sunSign1} value={formik.values.sign} onChange={formik.handleChange} style={{ marginBottom: "10px" }} className="sun-sign-lable" />
                            </div>
                            <div>
                                <SelectButton id="sign" name="sign" key={signs} options={sunSign2} value={formik.values.sign} onChange={formik.handleChange}
                                    style={{ marginBottom: "10px" }} />
                            </div>
                            <div>
                                <SelectButton id="sign" name="sign" key={signs} options={sunSign3} value={formik.values.sign} onChange={formik.handleChange} />
                            </div>
                        </div>

                        <div className='sign sign-select'>
                            <label htmlFor="sign" >Select Timeframe</label>
                            <SelectButton id="day" name="day" key={timeFrame} options={timeFrame} value={formik.values.day} onChange={formik.handleChange} style={{ gap: "10px" }} />
                        </div>


                        <Button type="submit" label="Submit" className="mt-2" />
                    </form>
                </div>
            </div>
        </div>
    );
}
