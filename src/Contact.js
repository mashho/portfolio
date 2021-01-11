import React from 'react'
import emailjs from 'emailjs-com';
import { useHistory } from 'react-router-dom';
const Contact=()=> {
    const history =useHistory()
    const submit=(e)=>{
        
        e.preventDefault();

    emailjs.sendForm('service_ync7x8a', 'template_40pbto9', e.target, 'user_nGJLXgjnvUxIw3ZivQWXn')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      window.alert("Thankyou , I have recieved your mail, Shortly will contact to you.")
      history.push("/");
    }
    return (
        <div className="container my-5 py-5">
            <div className="jumbotron">
            <form onSubmit={submit}>
            <div className="form-group">
                <label for="exampleFormControlInput1">Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" required placeholder="Rahul.." name="name"/>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" required aria-describedby="emailHelp" name="email" placeholder="Enter email"/>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Mobile No.</label>
                <input type="number" class="form-control" id="exampleInputPassword1" required name="subject" placeholder="Mobile No."/>
            </div>
            
            <div className="form-group">
                <label for="exampleFormControlTextarea1">Your message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" name="message" required rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            </div>
        </div>
    )
}

export default Contact
