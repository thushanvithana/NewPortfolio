const Contact = () => {
  return (
    <section className="contact-section" id="contact"  style={{height:'150px', marginTop:'50px', marginLeft:'50px'}}>
      <div className="contact-description">
        <div className="contact-description">
          <h2 className="area1">Contact Me</h2>
          <br></br>
          <p>
            Use the form below to send me a quick message / request CV. I ll get
            back to you as soon as possible.
          </p>
          <h1 data-aos="slide-right">Contact</h1>
          <p>
            {" "}
            <b>Email:</b> thushan2271@gmail.com
          </p>
          <p>
            <b>Phone: </b>+94772940951
          </p>
        </div>
        <div className="contact-form-wrapper">
          <form
            action="https://formsubmit.co/4f101deaf8ccd98050bb698ca358c0ee"
            method="POST"
          >
            <span>Please fill out the below form to get Resume</span>
            <br></br>
            <input
              type="text"
              className="name1"
              name="name"
              placeholder="Name"
              style={{ width: "360px" }}
              required
            />
            <input
              type="text"
              className="email1"
              name="email"
              placeholder="Email"
              style={{ width: "360px" }}
              required
            />
            <br></br>
            <input
              type="text"
              className="subject1"
              name="Subject"
              placeholder="Subject"
              style={{ width: "360px" }}
              required
            />

            <input
              type="text"
              className="message1"
              name="Message"
              placeholder="Send A Message...."
              style={{ width: "360px" }}
              required
            />
            <br></br>

            <button
              type="submit"
              className="text"
              style={{
                background: "#E87EFF",
                padding: "10px",
                borderRadius: "10px",
                width: "170px",
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
