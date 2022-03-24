import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { RegisterContext } from "../../context/registration";

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
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <legend>Sign in</legend>
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
            })}
          />
          {errors.Password && <span className="text-danger">{errors.Password.message}</span>}
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </fieldset>
    </Form>
  );
};

export const SignupForm = (props) => {
  const registration = useContext(RegisterContext);

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
    registration.signup({ usename: data.username, password: data.password });
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <legend>Sign up</legend>

        <Form.Group className="mb-3" controlId="userName">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            placeholder="user name"
            {...register("username", {
              required: { value: true, message: "This field is required" },
            })}
          />
          {errors.username && <span className="text-danger">{errors.username.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="Password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="password"
            {...register("password", {
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
                checkMatch: (val) => (val === getValues("password") ? true : "passwords don't match"),
              },
            })}
          />
          {errors.ConfirmPassword && <span className="text-danger">{errors.ConfirmPassword.message}</span>}
        </Form.Group>

        <Form.Label>Account Type</Form.Label>
        <Form.Group className="mb-3">
          <Form.Check
            inline
            type="radio"
            defaultChecked
            value="Admin"
            name="AccountType"
            label={`Admin`}
            {...register("AccountType")}
          />
          <Form.Check
            inline
            type="radio"
            value="Project Owner"
            name="AccountType"
            label={`Project Owner`}
            {...register("AccountType")}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Sign up
        </Button>
      </fieldset>
    </Form>
  );
};
