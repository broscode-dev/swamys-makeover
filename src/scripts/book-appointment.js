const bookAppointmentBtn = document.getElementById("bookAppointmentBtn");
const name = docuemnt.getElementById("name");
const email = document.getElementById("email");
const contactNumber = document.getElementById("contactNumber");
const date = document.getElementById("date");
const time = document.getElementById("time");
const service = document.getElementById("service");

// TODO: get the values from the form and make the API call

const bookAppointmentHandler = async () => {
  console.log("Called!");

  const emailJsEndpoint = "https://api.emailjs.com/api/v1.0/email/send";

  const payload = {
    service_id: "service_hxq2tsb",
    template_id: "template_cnxmzks",
    user_id: "44slipXTy9Jr1XoIs",
    template_params: {
      to_name: "Swamy",
      sender_name: `${firstname.value} ${lastname.value}`,
      location: "Swamy's Makeover, Nellad",
      date: "Today",
      time: "12:00PM",
      service: "Haircut",
      senderEmail: email.value,
      phone: contactNumber.value,
    },
  };

  try {
    const response = await fetch(emailJsEndpoint, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Reserved!");
  } catch (error) {
    console.error("Could not send the reservation!");
    console.log(error.message);
  }
};

bookAppointmentBtn.addEventListener("click", bookAppointmentHandler);
