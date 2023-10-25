import ButtonGoogle from "components/button/ButtonGoogle";
import FormGroup from "components/common/FormGroup";
import { IconEyeToggle } from "components/icon";
import { Input } from "components/input";
import { Label } from "components/label";
import useToggleValue from "hooks/useToggleValue";
import LayoutAuthentication from "layout/LayoutAuthentication";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "components/button";

const SignInPage = () => {
  const schema = yup
    .object({
      email: yup.string().email("").required("This field is required"),
      password: yup
        .string()
        .required("This field is required")
        .min(8, "Password must be 8 character "),
    })
    .required();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const handleSignIn = (values) => {};
  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue();
  return (
    <LayoutAuthentication heading="Welcome Back!">
      <p className="mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8">
        Dont have an account? {""}
        <Link to="/register" className="font-medium underline text-primary">
          Sign up
        </Link>
      </p>
      <ButtonGoogle text="Sign In with google"></ButtonGoogle>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <FormGroup>
          <Label onSubmit={handleSubmit()}>Email *</Label>
          <Input
            control={control}
            name="email"
            type="email"
            placeholder="jonhdoe@gmail.com"
            error={errors.email?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label onSubmit={handleSubmit()}>Password *</Label>
          <Input
            control={control}
            name="password"
            type={`${showPassword ? "text" : "password"}`}
            placeholder="Create a password"
            error={errors.password?.message}
          >
            <IconEyeToggle
              open={showPassword}
              onClick={handleTogglePassword}
            ></IconEyeToggle>
          </Input>
        </FormGroup>
        <FormGroup>
        <div className="text-right">
        <span className="inline-block text-sm font-medium text-primary">Forgot password</span>
        </div>
          
        </FormGroup>
        <Button className="w-full" kind="primary"  type="button" isLoading={false}>
          Sign in
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignInPage;
