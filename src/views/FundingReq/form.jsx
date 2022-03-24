import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Badge } from "react-bootstrap";

export const RequestForm = (props) => {
  const [disableForm, setdisableForm] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    if (props.screenBehaviour === "register") {
      setdisableForm(false);
    } else {
      setdisableForm(true);
    }
  }, [props.screenBehaviour]);

  const onSubmit = (data) => {
    props.onSubmit(data);
    console.log(data);
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="border p-5">
        <legend>{props.screenBehaviour}</legend>
        {disableForm&&(<>
          <Form.Label className="me-2">Request Status</Form.Label>
          <Badge pill bg="warning" text="dark">
            Pending
          </Badge>{" "}
        </>)}

        <Form.Group className="mb-3" controlId="userName">
          <Form.Label>Project Name</Form.Label>
          <Form.Control
            disabled={disableForm}
            placeholder="Project Name"
            {...register("projectName", {
              required: { value: true, message: "This field is required" },
            })}
          />
          {errors.projectName && <span className="text-danger">{errors.projectName.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="Sector">
          <Form.Label>Sector</Form.Label>
          <Form.Select
            disabled={disableForm}
            aria-label="Sector select"
            {...register("Sector", {
              required: { value: true, message: "This field is required" },
            })}
          >
            <option value="Private">Private</option>
            <option value="Government">Government</option>
          </Form.Select>
          {errors.Sector && <span className="text-danger">{errors.Sector.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Project description</Form.Label>
          <Form.Control
            disabled={disableForm}
            as="textarea"
            rows={3}
            {...register("description", {
              required: { value: true, message: "This field is required" },
            })}
          />
          {errors.description && <span className="text-danger">{errors.description.message}</span>}
        </Form.Group>
        {!disableForm && (
          <Button variant="primary" type="submit">
            Submit Request
          </Button>
        )}
      </fieldset>
    </Form>
  );
};

RequestForm.defaultProps = {
  onSubmit: () => {},
};
