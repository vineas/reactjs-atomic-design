import Button from "../Elements/Button/Index";
import InputForm from "../Elements/Input/Index";

const FormLogin = () => {
    const handleLogin = (event) => {
        event.preventDefault();
        localStorage.setItem("email", event.target.email.value);
        localStorage.setItem("password", event.target.password.value);
        window.location.href = "/products";
    }
    return (
    <form onSubmit={handleLogin}>
        <InputForm label="Email" name="email" type="email" placeholder="example@mail.com" />
        <InputForm label="Password" name="password" type="password" placeholder="********" />
        <Button classname="bg-blue-600 hover:bg-blue-900" type="submit">Login</Button>
    </form>
    )
}

export default FormLogin;