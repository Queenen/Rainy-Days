const sendMessage = document.querySelector(".send_message");
const form = document.querySelector("#contact_form");

sendMessage.addEventListener("click", () => {
  form.innerHTML = `
    <div class="contact_message_sent">
    <p class="title bold">Your message got sent!</p>
    <p>We will get back to you as soon as possible!</p>
    </div>`;
});
