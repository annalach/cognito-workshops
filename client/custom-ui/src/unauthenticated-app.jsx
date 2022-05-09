import SignIn from './sign-in';
import { useAuth } from './context/auth-context';

function UnauthenticatedApp() {
    const { signIn } = useAuth();

    return (
        <div><SignIn signIn={signIn}/></div>
    );
};

export default UnauthenticatedApp;
