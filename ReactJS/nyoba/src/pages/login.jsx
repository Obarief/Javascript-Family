import AuthLayout from "../Components/Layouts/AuthLayouts";
import FormLogin from "../Components/Fragments/FormLogin";


const LoginPage = () => {
    return (
        <AuthLayout title="Login" type="login">
            <FormLogin />
                
        </AuthLayout>
    )

}

export default LoginPage;