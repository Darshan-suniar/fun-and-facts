export const Contact = () => {
  const handleFormSubmit = (FormData) => {
    const formInputData = Object.fromEntries(FormData.entries());
    console.log(formInputData);
  };
  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>
      <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
          <input
            type="text"
            required
            autoComplete="false"
            placeholder="Enter Your Name"
            name="username"
            className="form-control"
          />
          <input
            type="email"
            required
            autoComplete="false"
            placeholder="Enter Your Emial"
            name="email"
            className="form-control"
          />
          <textarea
            className="form-control"
            rows="10"
            placeholder="Enter Your Message"
            name="message"
            required
            autoComplete="off"
          ></textarea>
          <button type="Submit" value="send">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};
