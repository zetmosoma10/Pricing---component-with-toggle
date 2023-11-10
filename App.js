const toggleBtn = document.querySelector(".toggle");
const toggleBadge = document.querySelector(".toggle__badge");
const planDOM = document.querySelector(".plan");

const prices = [
  {
    plan: "Basic",
    monthly: 19.9,
    annually: 199.99,
    features: ["500 GB Storage", "2 User Allowed", "Send up to 3 GB"],
  },
  {
    plan: "Professional",
    monthly: 24.9,
    annually: 249.99,
    features: ["1 TB Storage", "5 User Allowed", "Send up to 10 GB"],
  },
  {
    plan: "Master",
    monthly: 39.9,
    annually: 399.99,
    features: ["2 TB Storage", "10 User Allowed", "Send up to 20 GB"],
  },
];

let isMonthly = true; //setting state for monthly price

toggleBtn.addEventListener("click", () => {
  toggleBadge.classList.toggle("active-toggle");
  isMonthly = !isMonthly; //change the monthly state to annually state
  displayCard(); //invoke the function on click
});

window.addEventListener("DOMContentLoaded", () => {
  displayCard();
});

const displayCard = () => {
  const priceState = isMonthly ? "monthly" : "annually";
  const monthPrice = prices
    .map((card) => {
      return `
        <div class="card ${
          card.plan === "Professional" ? "card--popular" : ""
        }">
          <header class="card__header">
            <h3>${card.plan}</h3>
            <div class="price">
              <span class="currency">$</span>
              <span class="amount">${card[priceState]}</span>
            </div>
          </header>
          <ul class="list">
            <li class="list__item">${card.features[0]}</li>
            <li class="list__item">${card.features[1]}</li>
            <li class="list__item last">${card.features[2]}</li>
          </ul>
          <button class="btn btn--${
            card.plan === "Professional" ? "secondary" : "primary"
          }">Learn more</button>
        </div>
    `;
    })
    .join("");
  planDOM.innerHTML = monthPrice;
};
