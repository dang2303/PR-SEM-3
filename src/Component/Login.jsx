import Footer from "./footer.";
import Header from "./header";

export default function Login() {
    return (
        <>
            <Header/>
            <form class="form">
                <p class="title">Login </p>
                <p class="message">Login now and get full access to our web. </p>

                <label>
                    <input required="" placeholder="" type="email" class="input" />
                    <span>Email</span>
                </label>

                <label>
                    <input required="" placeholder="" type="password" class="input" />
                    <span>Password</span>
                </label>
                <button class="submit">Submit</button>
                <p class="signin">Already have an acount? <a href="./Register.html">Register</a> </p>
            </form>


            <Footer/>
        </>
    );
}