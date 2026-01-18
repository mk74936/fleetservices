const customerTypeSelect = document.getElementById("customerType");
const fleetFields = document.getElementById("fleet-fields");
const serviceSelect = document.getElementById("service");
const bookingForm = document.getElementById("booking-form");
const successMessage = document.getElementById("success-message");

const setFleetVisibility = (value) => {
  const showFleet = value === "Fleet";
  fleetFields.hidden = !showFleet;
};

const preselectService = () => {
  const params = new URLSearchParams(window.location.search);
  const serviceParam = params.get("service");

  if (!serviceParam) {
    return;
  }

  const options = Array.from(serviceSelect.options);
  const match = options.find(
    (option) => option.value.toLowerCase() === serviceParam.toLowerCase()
  );

  if (match) {
    serviceSelect.value = match.value;
  }
};

customerTypeSelect.addEventListener("change", (event) => {
  setFleetVisibility(event.target.value);
});

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  successMessage.hidden = false;
  bookingForm.reset();
  setFleetVisibility(customerTypeSelect.value);
});

setFleetVisibility(customerTypeSelect.value);
preselectService();
