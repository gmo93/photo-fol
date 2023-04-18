import React, { useState } from "react";
import styles from "@/styles/Home.module.css";

export default function ContactUs() {
  // States for contact form fields
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  //   Form validation state
  const [errors, setErrors] = useState({});

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState("Send");

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  // Validation check method
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
      console.log("name invalid");
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
      console.log("email invalid");
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
      console.log("message invalid");
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors ? errors : 'none');
    return isValid;
  };

  //   Handling form submit
  const [submit, setSubmit] = useState(false);
  const handleClick = () => {
    setSubmit(false);
    setEmail("");
    setFullName("");
    setMessage("");
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();
    setSubmit(true);

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      // setSubmit(true);

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
    }
  };
  return (
    <div className = {styles.contactContainer}>
        {submit && 
            <div className={styles.submitTest}>
                <span onClick={handleClick} className={styles.thankYouExit}>X</span>
                <h1 className={styles.thankYouTest}>Your message was sent!</h1>
        </div>}
        <form onSubmit={handleSubmit} className={styles.contactForm}>
        <h1 className={styles.contactFormTitle}>Send a message</h1>

        <label htmlFor="fullname" className={styles.contactLabel}>
            Name
        </label>
        <input
            onChange={(e) => {
            setFullName(e.target.value);
            }}
            type="text"
            name="fullname"
            value={fullname}
            className={styles.inputLabel}
        />

        <label htmlFor="email" className={styles.contactLabel}>
            E-mail
        </label>
        <input
            type="email"
            name="email"
            onChange={(e) => {
            setEmail(e.target.value);
            }}
            value={email}
            className={styles.inputLabel}
        />

        <label htmlFor="message" className={styles.contactLabel}>
            Message
        </label>
        <textarea
            onChange={(e) => {
            setMessage(e.target.value);
            }}
            name="message"
            value={message}
            className={styles.inputLabel}
        >

        </textarea>
        <div className={styles.buttonBox}>
            <button
                type="submit"
                className={styles.submitButton}
            >
                Send
                <path
                    d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                    fill="currentColor"
                />
            </button>
        </div>
        </form>
    </div>
  );
}
