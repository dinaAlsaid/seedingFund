import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";

export const LoginForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
      //API CALL TO LOGIN
      //IF TOKEN => logged in and redirect 
      //ELSE SETERRORR 
      console.log(data)};

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="userName">
        <Form.Label>User Name</Form.Label>
        <Form.Control
          placeholder="user name"
          {...register("userName", {
            required: { value: true, message: "This field is required" },
          })}
        />
        {errors.userName && (
          <span className="text-danger">{errors.userName.message}</span>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="Password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          {...register("Password", {
            required: { value: true, message: "This field is required" }
          })}
        />
        {errors.Password && (
          <span className="text-danger">{errors.Password.message}</span>
        )}
      </Form.Group>

      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
};

LoginForm.defaultProps = {
  isAdmin: false,
};
