// WhatsApp number with country code, without + or spaces.
const DEALER_WHATSAPP = "923356290131";

const form = document.getElementById("accountForm");
const toast = document.getElementById("toast");
const whatsappButton = document.getElementById("whatsappButton");
document.getElementById("year").textContent = new Date().getFullYear();

const showToast = (message) => {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 6000);
};

whatsappButton.addEventListener("click", (event) => {
  event.preventDefault();

  const chatMessage = "Hello, I would like to discuss an account enquiry.";
  window.open(`https://wa.me/${DEALER_WHATSAPP}?text=${encodeURIComponent(chatMessage)}`, "_blank", "noopener");
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;

  const data = Object.fromEntries(new FormData(form).entries());
  const message = [
    "*New Account Enquiry*",
    "",
    `*Contact:* ${data.name}`,
    `*Phone:* ${data.phone}`,
    `*Email:* ${data.email || "Not provided"}`,
    "",
    `*Account name / identifier:* ${data.accountName}`,
    `*Category:* ${data.category}`,
    `*Account age:* ${data.age}`,
    `*Audience size:* ${data.audience}`,
    `*Activity:* ${data.activity}`,
    `*Primary region:* ${data.region}`,
    `*Available from:* ${data.available || "To discuss"}`,
    `*Original owner:* ${data.ownership}`,
    `*Additional details:* ${data.details || "Not provided"}`
  ].join("\n");

  window.open(`https://wa.me/${DEALER_WHATSAPP}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
  showToast("Your details are ready. Please send the WhatsApp message to complete your enquiry.");
});
