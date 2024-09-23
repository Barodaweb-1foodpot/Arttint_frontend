import React from "react";
import { Label, Row, Form, Input, Col, Button } from "reactstrap";
import { useFormik } from "formik";
import * as Yup from "yup"; // For validation schema
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

export const Inquiry = (props) => {
    console.log(props.id)
  // Initial values
  const initialValues = {
    name: "",
    phone: "",
    email: "",
    countryCode: "",
    desc: "",
    isActive: true,
    artName:props.id
  };

  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .required("Name is required"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Phone number must contain only digits")
      .min(8, "Phone number must be at least 8 digits")
      .required("Phone number is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    countryCode: Yup.string()
      .matches(/^\+[0-9]{1,4}$/, "Invalid country code, e.g., +91")
      .required("ISD code is required"),
  });

  // Formik Hook
  const formik = useFormik({
    initialValues,
    validationSchema, // Add validation schema here
    onSubmit: (values) => {
      console.log("Submitted Values:", values);
      axios.post(`${process.env.REACT_APP_URL}/api/auth/create/Inquiry`,values).then((res)=>{
        console.log(res)
        if(res.data.isOk)
        {
          toast.success(res.data.message)
            alert(res.data.message)
            props.setInquiryModel(false)
        }
      })

    },
  });

  return (
    <div>
        {/* <ToastContainer /> */}
      <Form onSubmit={formik.handleSubmit}>
        <div>
          <Row>
            <Col lg={12} sm={12}>
              <Label>Name&nbsp;<span className="text-danger">*</span> </Label>
              <Input
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Please Enter your Name"
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-danger error-msg">{formik.errors.name}</div>
              ) : null}
            </Col>
            <Col lg={12} sm={12}>
              <Label>Email &nbsp;<span className="text-danger">*</span> </Label>
              <Input
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Please Enter your Email Id"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-danger error-msg">{formik.errors.email}</div>
              ) : null}
            </Col>
         
            <Col lg={4} sm={4}>
              <Label>Country Code&nbsp;<span className="text-danger">*</span> </Label>
              <Input
                name="countryCode"
                value={formik.values.countryCode}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="ISD Code (e.g., +91)"
              />
              {formik.touched.countryCode && formik.errors.countryCode ? (
                <div className="text-danger error-msg">{formik.errors.countryCode}</div>
              ) : null}
            </Col>
            <Col lg={8} sm={8}>
              <Label>Contact Number&nbsp;<span className="text-danger">*</span> </Label>
              <Input
                type="tel"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Please Enter your Contact Number"
              />
              {formik.touched.phone && formik.errors.phone ? (
                <div className="text-danger error-msg">{formik.errors.phone}</div>
              ) : null}
            </Col>
         
            <Col lg={12} sm={12} className="pb-3">
              <Label>Message</Label>
              <Input
                type="text"
                name="desc"
                value={formik.values.desc}
                onChange={formik.handleChange}
                placeholder="Message"
              />
            </Col>
          </Row>
        </div>

        <div>
          <Row>
            <Button type="submit" className="submit-btn">Submit Inquiry</Button>
          </Row>
        </div>
      </Form>
    </div>
  );
};
