import { useState } from "react";
import { Modal } from "../../UI/Modal";
import emailjs from "@emailjs/browser";
import classNames from "classnames";
import StorysetSVG from "./StorysetSVG";

const isEmpty = (value: string) => value.trim() === "";

const emailValidation = (value: string) => {
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (value.match(pattern)) {
    return true;
  } else {
    return false;
  }
};

type UserLoginIn = {
  name: string;
  email: string;
  phone: string;
  message: string;

  touched: {
    name: boolean;
    email: boolean;
    phone: boolean;
    message: boolean;
  };
  valid: {
    name: boolean;
    email: boolean;
    phone: boolean;
    message: boolean;
  };
};

const intialFormState = {
  name: "",
  email: "",
  phone: "",
  message: "",

  touched: {
    name: false,
    email: false,
    phone: false,
    message: false,
  },
  valid: {
    name: true,
    email: true,
    phone: true,
    message: true,
  },
};

const Form = () => {
  const [form, setForm] = useState<UserLoginIn>(intialFormState);
  // const [ref, inView] = useInView();

  // useEffect(() => {
  //   const links = document.getElementsByName("li");

  //   const target = document.getElementById("navLink-Contact");
  //   links.forEach((link) => link.classList.add("removeStyle"));
  //   if (inView) {
  //     target!.classList.add("contactStyle");
  //   } else {
  //     target!.classList.remove("contactStyle");
  //   }
  // }, [inView]);

  const [renderModal, setRenderModal] = useState(false);

  function onClose() {
    setRenderModal(false);
  }

  const formSubmit = (e: React.FormEvent) => {
    const target = e.target as HTMLFormElement;
    e.preventDefault();

    const emailIsValid = emailValidation(form.email);
    const nameIsValid = !isEmpty(form.name);
    const phoneIsValid = !isEmpty(form.phone);
    const messageIsValid = !isEmpty(form.message);

    setForm((current) => ({
      ...current,
      valid: {
        email: emailIsValid,
        name: nameIsValid,
        phone: phoneIsValid,
        message: messageIsValid,
      },
    }));

    const formIsValid =
      emailIsValid && nameIsValid && phoneIsValid && messageIsValid;

    if (!formIsValid) {
      console.log("here");
      console.log(form.email, form.message, form.name, form.phone);

      return;
    } else {
      setRenderModal(true);
    }

    emailjs
      .sendForm(
        "contact_service",
        "template_qs5g2xu",
        target,
        "user_kwfk7unP7jS9DOSbszb09"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setForm(intialFormState);
  };

  const inputContainerStyles = "pt-4";

  return (
    <>
      <div className="md:flex md:justify-evenly md:items-center">
        <form onSubmit={formSubmit}>
          <p className="py-4 md:w-[350px] lg:w-[500px]">
            Feel free to contact me in regards to any serious work
            opportunities. I'm always open to collab on new & exisiting
            projects. Whether you have a project you'd like to discuss, want to
            share your work, or just say hi — please don't hesitate to
            reach out!
          </p>
          <div className="pt-4">
            <label htmlFor="name" />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              className={classNames({
                "p-4 rounded-md w-[300px] md:w-[30vw] outline-none text-black":
                  form.valid.name || form.touched.name,
                "p-4 rounded-md w-[300px] md:w-[30vw] border-2 border-red-800":
                  !form.valid.name && !form.touched.name,
              })}
              onChange={(e) =>
                setForm((current) => ({
                  ...current,
                  name: e.target.value,
                  touched: {
                    ...current.touched,
                    name: true,
                  },
                }))
              }
              value={form.name}
            />
          </div>

          <div className={inputContainerStyles}>
            <label htmlFor="email" />
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              className={classNames({
                "p-4 rounded-md w-[300px] md:w-[30vw] outline-none text-black":
                  form.valid.email || form.touched.email,
                "p-4 rounded-md  w-[300px] md:w-[30vw] border-2 border-red-800":
                  !form.valid.email && !form.touched.email,
              })}
              onChange={(e) =>
                setForm((current) => ({
                  ...current,
                  email: e.target.value,
                  touched: {
                    ...current.touched,
                    email: true,
                  },
                }))
              }
              value={form.email}
            />
          </div>
          <div className={inputContainerStyles}>
            <label htmlFor="phoneNumber" />
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Phone Number"
              className={classNames({
                "p-4 rounded-md w-[300px] md:w-[30vw] outline-none text-black":
                  form.valid.phone || form.touched.phone,
                "p-4 rounded-md w-[300px] md:w-[30vw] border-2 border-red-800":
                  !form.valid.phone && !form.touched.phone,
              })}
              onChange={(e) =>
                setForm((current) => ({
                  ...current,
                  phone: e.target.value,
                  touched: {
                    ...current.touched,
                    phone: true,
                  },
                }))
              }
              value={form.phone}
            />
          </div>

          <div className={inputContainerStyles}>
            <textarea
              name="message"
              rows={3}
              cols={20}
              placeholder="Message"
              className={classNames({
                "p-4 rounded-md w-[300px] md:w-[30vw] outline-none text-black":
                  form.valid.message || form.touched.message,
                "p-4 rounded-md w-[300px] md:w-[30vw] border-2 border-red-800":
                  !form.valid.message && !form.touched.message,
              })}
              onChange={(e) =>
                setForm((current) => ({
                  ...current,
                  message: e.target.value,
                  touched: {
                    ...current.touched,
                    message: true,
                  },
                }))
              }
              value={form.message}
            />
          </div>

          <button
            type="submit"
            className="h-10 mt-4 text-black bg-white rounded-md shadow-lg w-28 hover:bg-slate-200"
          >
            Submit
          </button>
        </form>
        <StorysetSVG />
      </div>
      <Modal show={renderModal} onClose={onClose}>
        Thank you for your inquiry. I'll be in contact within the next 24 hours.
      </Modal>
    </>
  );
};

export default Form;
