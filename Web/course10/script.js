const ACCESS_KEY = 'your key goes here';
function init() {
const fetchPromise = fetch(`http://data.fixer.io/api/symbols?access_key=${ACCESS_KEY}`);
console.log(fetchPromise);
}

async function loadCurrencies() {
  const url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json";

  try {
      // Fetch data from API
      const response = await fetch(url);
      const data = await response.json();
      readSuccess(data);  

      // Select all dropdowns with currency selection
      const selectElements = document.querySelectorAll(".currency-select");

      // Clear existing options in all dropdowns
      selectElements.forEach(select => {
          select.innerHTML = ""; // Clear previous options
          const defaultOption = document.createElement("option");
          defaultOption.value = "";
          defaultOption.textContent = "Select a Currency";
          select.appendChild(defaultOption);
      });

      // Populate options in all dropdowns
      for (const [code, name] of Object.entries(data)) {
          selectElements.forEach(select => {
              const option = document.createElement("option");
              option.value = code;
              option.textContent = `${code.toUpperCase()} - ${name}`;
              select.appendChild(option);
          });
      }
    } catch (error) {
      console.error("Failed to fetch currency data:", error);
      document.querySelectorAll(".currency-select").forEach(select => {
          select.innerHTML = "<option value=''>Error loading currencies</option>";
      });
  }
}

function readSuccess(jsonData) {
  console.log("Fetched Currency Data:", jsonData);
}

// Load currencies when the page loads
window.onload = () => {
  loadCurrencies();
};
