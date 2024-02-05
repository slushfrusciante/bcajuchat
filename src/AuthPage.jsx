import axios from "axios";

const AuthPage = (props) => {
    const onSubmit = (e) => {
        e.preventDefault();
        const { value } = e.target[0];
        axios.post(
            'http://localhost:3001/authenticate',
            { username: value }
        )
        props.onAuth({ username: value, secret: value })
    }

    return (
        <div className="background">
            <form onSubmit={onSubmit} className="form-card">
                <div className="form-title">
                    Olá Bem-Vindo ao Login Bcaju 👋
                </div>

                <div className="form-subtitle">
                    Insira seu nome para entrar
                </div>

                <div className="auth">
                    <div className="auth-label">Nome</div>
                    <input className="auth-input" name="username" />
                    <button className="auth-button" type="submit">Entrar</button>
                </div>
            </form>
        </div>
    );
}

export default AuthPage