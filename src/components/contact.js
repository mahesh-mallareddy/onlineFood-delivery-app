export let Contact = () => {
    return (
        <>
            <form>
                <div className="formfeedback">
                <div className="head"> <h2>FeedBack</h2></div>
                    <div className="form1">
                        <div  >
                            <input label="Email" placeholder="Enter your email address" required />
                        </div>
                    </div>
                    <div className="form2">
                        <div >
                            <input label="State" placeholder="Select your state" required />
                        </div>
                        <div  >
                            <input label="Town" placeholder="Enter your town/city" required />
                        </div>
                        <div  >
                            <textarea rows="3" cols="26" required>
                            </textarea>
                        </div>
                    </div>
                    <div className="btn">
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export let Footer = () => {
    return (
        <div className="mainfooter">
        <div className="footer">
            <div className="EAT-GOinfo" >
                <h2 >GO-EAT</h2>
                <p>We are provide High Quality Foods <br/>through online and Dine at Resto </p>
            </div>
            <div className="foterlist">
                <ul>
                    <li>Support</li>
                    <li>Blog</li>
                    <li>About us</li>
                    <li>Contact us</li>
                </ul>
            </div>
            <div className="register">
                <h4>Sign In</h4>
                <h4>Sign Up</h4>
            </div>
        </div>
        </div>
    )
}