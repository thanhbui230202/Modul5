import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.css';
export function Health(){
    const healthInit = {
        name: "",
        idCard: "",
        birthday: "",
        gender: "0",
        national: "",
        company: "",
        workingPart: "",
        healthInsurance: [],
        city: "",
        district: "",
        wards: "",
        houseNumber: "",
        phone: "",
        email: "",
        
    }
}