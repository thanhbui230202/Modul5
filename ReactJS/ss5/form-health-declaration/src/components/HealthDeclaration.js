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
        description: "",
        symptom: [],
        contact: []
    };
    const symptoms = ["Sốt","Ho","Khó thở","Viêm phổi","Đau họng", "Mệt mỏi"];
    const contacts = [
        "Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19",
        "Người từ nước có bệnh COVID-19",
        "Người có biểu hiện (Sốt, ho, khó thở, viêm phổi)"
    ];
    const healthValidation = {
        name: Yup.string()
            .required("Required"),
        idCard: Yup.string()
            .required("Required"),
        birthday: Yup.number()
            .required("Required")
            .min(1900, ">=1900"),
        national: Yup.string()
            .required("Required"),
        city: Yup.string()
            .required("Required"),
        district: Yup.string()
            .required("Required"),
        wards: Yup.string()
            .required("Required"),
        houseNumber: Yup.string()
            .required("Required"),
        phone: Yup.string()
            .required("Required"),
        email: Yup.string()
            .required("Required")
            .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Invalid Email"),
    }
    return(
        <>
        <Formik
            initialValues={healthInit}
            onSubmit={(values) =>{
                console.log(values);
                alert("Khai báo thành công!");
            }}
            validationSchema={
                Yup.object(healthValidation)
            }
        >
            <div className='container'>
                <h1>Tờ khai báo y tế</h1>
                <Form>
                        <div className='mb-3'>
                            <label htmlFor='studentName' className='form-label'>Họ tên</label>
                            <Field type='text' className='form-control' name="name" id='studentName'/>
                            <ErrorMessage name="name" component="span" className="form-err"></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='studentName' className='form-label'>Sổ hộ chiếu /CMND</label>
                            <Field type='number' className='form-control' name="idCard" id='studentName'/>
                            <ErrorMessage name="idCard" component="span" className="form-err"></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='studentName' className='form-label'>Năm sinh</label>
                            <Field type='number' className='form-control' name="birthday" id='studentName'/>
                            <ErrorMessage name="birthday" component="span" className="form-err"></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='studentName' className='form-label'>Giới tính </label>
                            <div className="form-check form-check-inline">
                                <Field className="form-check-input" type="radio" name="gender" id="inlineRadio1"
                                       value="1"/>
                                <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <Field className="form-check-input" type="radio" name="gender" id="inlineRadio2"
                                       value="0"/>
                                <label className="form-check-label" htmlFor="inlineRadio2">FeMale</label>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='studentName' className='form-label'>Quốc tịch</label>
                            <Field type='text' className='form-control' name="national" id='studentName'/>
                            <ErrorMessage name="national" component="span" className="form-err"></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='studentName' className='form-label'>Công ty làm việc</label>
                            <Field type='text' className='form-control' name="company" id='studentName'/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='studentName' className='form-label'>Bộ phận làm việc</label>
                            <Field type='text' className='form-control' name="workingPart" id='studentName'/>
                        </div>
                        <div className="form-check">
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Có thẻ bảo hiểm y tế
                            </label>
                            <Field className="form-check-input" name="languages" type="checkbox" value="Có thẻ bảo hiểm y tế"
                                   id="flexCheckDefault"/>
                        </div>
                        <br></br>
                        <h2> Địa chỉ liên lạc tại Việt Nam</h2>
                        <div className='mb-3'>
                            <label htmlFor='studentName' className='form-label'>Tỉnh thành</label>
                            <Field type='text' className='form-control' name="city" id='studentName'/>
                            <ErrorMessage name="city" component="span" className="form-err"></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='studentName' className='form-label'>Quận /huyện</label>
                            <Field type='text' className='form-control' name="district" id='studentName'/>
                            <ErrorMessage name="district" component="span" className="form-err"></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='studentName' className='form-label'>Phường /xã</label>
                            <Field type='text' className='form-control' name="wards" id='studentName'/>
                            <ErrorMessage name="wards" component="span" className="form-err"></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='studentName' className='form-label'>Số nhà, phố, tổ dân phố /thôn /đội</label>
                            <Field type='text' className='form-control' name="houseNumber" id='studentName'/>
                            <ErrorMessage name="houseNumber" component="span" className="form-err"></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='studentName' className='form-label'>Phone</label>
                            <Field type='text' className='form-control' name="phone" id='studentName'/>
                            <ErrorMessage name="phone" component="span" className="form-err"></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='studentName' className='form-label'>Email</label>
                            <Field type='text' className='form-control' name="email" id='studentName'/>
                            <ErrorMessage name="email" component="span" className="form-err"></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <h2>Trong vòng 14 ngày qua, Anh /Chị có đến quốc gia /vùng lãnh thổ nào(Có thể đi qua nhiều quốc gia)</h2>
                            <Field as='textarea' className='form-control' name="description" id='studentName'/>
                            <ErrorMessage name="description" component="span" className="form-err"></ErrorMessage>
                        </div>
                        <div role="group" aria-labelledby="checkbox-group">
                            <h2>Trong vòng 14 ngày qua, Anh /Chị có thấy xuất hiện dấu hiệu nào sau đây không ?</h2>
                            {symptoms.map(value => 
                            <label key={value} style={{display:'block'}}>
                                <Field key={value} type='checkbox' name="symptom" value={value} id='studentName'/>
                                {value}
                            </label>)
                            }
                        </div>
                        <div role="group" aria-labelledby="checkbox-group">
                            <h2>Trong vòng 14 ngày qua, Anh /Chị có tiếp xúc với ?</h2>
                            {contacts.map(value => 
                            <label key={value} style={{display:'block'}}>
                                <Field key={value} type='checkbox' name="contact" value={value} id='studentName'/>
                                {value}
                            </label>)}
                        </div>
                        <br></br>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                </Form>
            </div>
        </Formik>
        </>
    )
}