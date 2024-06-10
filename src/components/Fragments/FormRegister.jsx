import Button from "../Elements/Button/Index";
import InputForm from "../Elements/Input/Index";

const FormRegister = () => {
    return (
    <form action="">
        <InputForm label="Fullname" name="fullname" type="text" placeholder="Insert your name here..." />
        <InputForm label="Email" name="email" type="email" placeholder="example@mail.com" />
        <InputForm label="Password" name="password" type="password" placeholder="********" />
        <InputForm label="Confirm Password" name="confirmPassword" type="password" placeholder="********" />
        <Button classname="bg-blue-600 hover:bg-blue-900">Register</Button>
    </form>
    )
}

export default FormRegister;