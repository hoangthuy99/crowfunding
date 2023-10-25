import useToggleValue from "hooks/useToggleValue";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import FormGroup from "components/common/FormGroup";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Label } from "components/label";
import { Input } from "components/input";
import { IconEyeToggle } from "components/icon";
import { Checkbox } from "components/checkbox";
import { Button } from "components/button";
import ButtonGoogle from "components/button/ButtonGoogle";
import { useDispatch } from "react-redux";
import { authRegister } from "store/auth/auth-slice";

const schema = yup
  .object({
    name: yup.string().required("This field is required"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("This field is required"),
    password: yup
      .string()
      .required("This field is required")
      .min(8, "Password must be 8 character ")

  })
  .required();

const SignUpPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    model: "onSubmit",
  });
  const dispatch = useDispatch();
  const handleSignUp = (values) => {
    dispatch(authRegister(values));
  };
  const {value:acceptIterm, handleToggleValue:handleToggleTerm}=useToggleValue();
  const {value:showPassword, handleToggleValue:handleTogglePassword}=useToggleValue();
  
  console.log(errors);
  return (
    <LayoutAuthentication heading="SignUp">
      <p className="mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8">
        Already have an account?{" "}
        <Link to="/login" className="font-medium underline text-primary">
          Sign in
        </Link>
      </p>
     <ButtonGoogle text="Sign in with google"></ButtonGoogle>
      <p className="mb-4 text-xs font-normal text-center lg:text-sm lg:mb-8 text-text2 dark:text-white">
        Or sign up with email
      </p>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <FormGroup>
          <Label onSubmit={handleSubmit()}>Full Name *</Label>
          <Input
            control={control}
            name="name"
            placeholder="Jonh Doe"
            error={errors.name?.message}
          ></Input>
        </FormGroup>
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
            type={`${showPassword ? 'text' : 'password'}`}
            placeholder="Create a password"
            error={errors.password?.message}
          >
            <IconEyeToggle open= {showPassword} onClick={handleTogglePassword}></IconEyeToggle>
          </Input>
        </FormGroup>
        <div className="flex items-start mb-5 gap-x-5">
          <Checkbox
            name="term"
            checked={acceptIterm}
            onClick={handleToggleTerm}
          >
            <p className="flex-1 text-sm text-text2 dark:text-text3">
              I agree to the{" "}
              <span className="underline text-secondar y"> Terms of Use </span>
              and have read and understand the
              <span className="underline text-secondary"> Privacy policy.</span>
            </p>
          </Checkbox>
        </div>
        <Button className="w-full" type="submit" kind="primary" isLoading={false}>
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
