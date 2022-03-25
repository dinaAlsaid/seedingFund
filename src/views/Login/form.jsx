import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";

export const LoginForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Form onSubmit={handleSubmit(props.onSubmit)}>
      <fieldset>
        <legend>Sign in</legend>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            placeholder="user name"
            {...register("username", {
              required: { value: true, message: "This field is required" },
            })}
          />
          {errors.username && <span className="text-danger">{errors.username.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>password</Form.Label>
          <Form.Control
            type="password"
            placeholder="password"
            {...register("password", {
              required: { value: true, message: "This field is required" },
            })}
          />
          {errors.password && <span className="text-danger">{errors.password.message}</span>}
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </fieldset>
    </Form>
  );
};

export const SignupForm = (props) => {

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  return (
    <Form onSubmit={handleSubmit(props.onSubmit)}>
      <fieldset>
        <legend>Sign up</legend>

        <Form.Group className="mb-3" controlId="username">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            placeholder="user name"
            {...register("username", {
              required: { value: true, message: "This field is required" },
            })}
          />
          {errors.username && <span className="text-danger">{errors.username.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>password</Form.Label>
          <Form.Control
            type="password"
            placeholder="password"
            {...register("password", {
              required: { value: true, message: "This field is required" },
              validate: {
                checkMatch: (val) => (val === getValues("Confirmpassword") ? true : "passwords don't match"),
              },
            })}
          />
          {errors.password && <span className="text-danger">{errors.password.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="Confirmpassword">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm password"
            {...register("Confirmpassword", {
              required: { value: true, message: "This field is required" },
              validate: {
                checkMatch: (val) => (val === getValues("password") ? true : "passwords don't match"),
              },
            })}
          />
          {errors.Confirmpassword && <span className="text-danger">{errors.Confirmpassword.message}</span>}
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
