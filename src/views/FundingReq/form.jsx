import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Badge } from "react-bootstrap";

export const RequestForm = (props) => {
  const [disableForm, setdisableForm] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    if (props.screenBehaviour === "register") {
      setdisableForm(false);
    } else {
      setdisableForm(true);
      setValue("projectName", props.projectData?.projectName);
      setValue("sector", props.projectData?.sector);
      setValue("description", props.projectData?.description);
    }
  }, [props.screenBehaviour, props.projectData]);

  const onSubmit = (data) => {
    props.onSubmit(data);
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="border p-5">
        <legend>{props.screenBehaviour}</legend>
        {disableForm && (
          <>
            <Form.Label className="me-2">Request Status</Form.Label>
            <Badge
              pill
              bg={
                props.projectData?.status === "pending"
                  ? "warning"
                  : props.projectData?.status === "rejected"
                  ? "danger"
                  : "success"
              }
              text="dark"
            >
              {props.projectData?.status}
            </Badge>{" "}
          </>
        )}

        <Form.Group className="mb-3" controlId="userName">
          <Form.Label>Project Name</Form.Label>
          <Form.Control
            disabled={disableForm}
            placeholder="Project Name"
            {...register("projectName", {
              required: { value: true, message: "This field is required" },
            })}
          />
          {errors.projectName && (
            <span className="text-danger">{errors.projectName.message}</span>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="Sector">
          <Form.Label>Sector</Form.Label>
          <Form.Select
            disabled={disableForm}
            aria-label="Sector select"
            {...register("sector", {
              required: { value: true, message: "This field is required" },
            })}
          >
            <option value="private">Private</option>
            <option value="government">Government</option>
          </Form.Select>
          {errors.sector && (
            <span className="text-danger">{errors.sector.message}</span>
          )}
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
          {errors.description && (
            <span className="text-danger">{errors.description.message}</span>
          )}
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
