import emaijs from "emailjs-com";
import React from 'react';

export default function EmailSend() {


      function sendEmail(e) {
            e.preventDefault();

            emaijs.sendForm('service_3hmhlvx', 'template_j57onor', e.target, 'user_xybrFSQSULyS71kBVHmzl')
                  .then((result) => {
                        console.log(result.text);
                  }, (error) => {
                        console.log(error.text);
                  });
      }

      return (
            <div>
                  <div className="container">
                        <h1>Send Email Using Emailjs</h1>
                        <form onSubmit={sendEmail}>
                              <div className="row pt-5 mx-auto">
                                    <div className="col-8 form-group mx-auto">
                                          <input type="text" className="form-control" placeholder="Name" name="name" />
                                    </div>
                                    <div className="col-8 form-group pt-2 mx-auto">
                                          <input type="email" className="form-control" placeholder="Email Address" name="email" />
                                    </div>
                                    <div className="col-8 form-group pt-2 mx-auto">
                                          <input type="text" className="form-control" placeholder="Subject" name="subject" />
                                    </div>
                                    <div className="col-8 form-group pt-2 mx-auto">
                                          <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                                    </div>
                                    <div className="col-8 pt-3 mx-auto">
                                          <input type="submit" className="btn btn-info" value="Send Message"></input>
                                    </div>
                              </div>
                        </form>
                  </div>
            </div>
      )
}