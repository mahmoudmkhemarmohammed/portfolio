/* eslint-disable jsx-a11y/iframe-has-title */
import "./Contact.css";
function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="special-headinges">
          <h2>Contact</h2>
        </div>
        <div className="content">
          <div className="con">
            <input type="text" placeholder="Frist Name" id="fname" />
            <input type="text" placeholder="Last Name" id="lname" />
            <input type="gmail" placeholder="Enter Your Gemail" id="gmail" />
            <input
              type="phone"
              placeholder="Enter Your Phone Number"
              id="phone"
              name="phone"
            />
            <textarea id="tarea" />
            <input type="submit" value="Send" id="submit" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
