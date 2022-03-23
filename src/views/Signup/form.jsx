import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";

export const SignupForm = (props) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    //API CALL TO LOGIN
    //IF TOKEN => logged in and redirect
    //ELSE SETERRORR
    console.log(data);
  };

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
        {errors.userName && <span className="text-danger">{errors.userName.message}</span>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="Password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          {...register("Password", {
            required: { value: true, message: "This field is required" },
            validate: {
              checkMatch: (val) => (val === getValues("ConfirmPassword") ? true : "passwords don't match"),
            },
          })}
        />
        {errors.Password && <span className="text-danger">{errors.Password.message}</span>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="ConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirm Password"
          {...register("ConfirmPassword", {
            required: { value: true, message: "This field is required" },
            validate: {
              checkMatch: (val) => (val === getValues("Password") ? true : "passwords don't match"),
            },
          })}
        />
        {errors.ConfirmPassword && <span className="text-danger">{errors.ConfirmPassword.message}</span>}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Account Type</Form.Label>
        <Form.Check type="radio" defaultChecked value="Admin" name="AccountType" label={`Admin`} {...register("AccountType")}/>
        <Form.Check type="radio" value="Project Owner" name="AccountType" label={`Project Owner`} {...register("AccountType")}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Sign up
      </Button>
    </Form>
  );
};

SignupForm.defaultProps = {
  isAdmin: false,
};
