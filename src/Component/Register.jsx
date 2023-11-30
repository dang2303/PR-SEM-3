import Footer from "./footer.";
import Header from "./header";

export default function Register() {
    return (
        <>
        <Header/>    
        <form class="form">
            <p class="title">Register </p>
            <p class="message">Register now and get full access to our web. </p>
            <div class="flex">
                <label>
                    <input required="" placeholder="" type="text" class="input"/>
                    <span>Firstname</span>
                </label>
    
                <label>
                    <input required="" placeholder="" type="text" class="input"/>
                    <span>Lastname</span>
                </label>
            </div>
    
            <label>
                <input required="" placeholder="" type="email" class="input"/>
                <span>Email</span>
            </label>
    
            <label>
                <input required="" placeholder="" type="password" class="input"/>
                <span>Password</span>
            </label>
            <label>
                <input required="" placeholder="" type="password" class="input"/>
                <span>Confirm password</span>
            </label>
            <button class="submit">Submit</button>
            <p class="signin">Have a acount ? <a href="./Login.html">Login</a> </p>
        </form>
    
    
        <Footer/>
        </>
);
}