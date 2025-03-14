// Common function to get element by ID
const get_Element = (id) => document.getElementById(id);

// Function to show error messages
function showError(id, message) {
    get_Element(id).innerText = message;
}

// Function to handle form submission and validation
function handleclicker(event) {
    event.preventDefault(); // Prevent form submission if there are errors
    let isValid = true;

    // ✅ Name Validation (at least 3 characters)
    const name_Type = get_Element('name').value.trim();
    if (name_Type.length < 3) {
        showError("nameError", "Name must be at least 3 characters.");
        isValid = false;
    } else {
        showError("nameError", "");
    }

    // ✅ Year of Birth Validation (between 1900 and current year - 1)
    const cur_Year = new Date().getFullYear();
    const min_Date = new Date("1900-01-01");
    const max_Date = new Date(`${cur_Year - 1}-12-31`);
    const date_Input = get_Element('birth').value;
    const select_Date = new Date(date_Input);

    if (select_Date < min_Date || select_Date > max_Date || isNaN(select_Date.getTime())) {
        showError("birthError", `Date must be between 1900 and ${cur_Year - 1}.`);
        isValid = false;
    } else {
        showError("birthError", "");
    }

    // ✅ Zipcode Validation (Only if the checkbox is checked)
    const is_live = get_Element("live").checked;
    const zip_digits = get_Element('zipcode').value.trim();
    if (is_live && !/^\d{5}$/.test(zip_digits)) {
        showError("zipError", "Zipcode must be exactly 5 digits.");
        isValid = false;
    } else {
        showError("zipError", "");
    }

    // ✅ Password Validation (at least 8 characters)
    const password = get_Element("password").value.trim();
    if (password.length < 8) {
        showError("passwordError", "Password must be at least 8 characters.");
        isValid = false;
    } else {
        showError("passwordError", "");
    }

    // ✅ Pizza Selection Validation (Ensure at least one option is selected)
    const pizzaSelected = document.querySelector('input[name="type"]:checked');
    if (!pizzaSelected) {
        showError("pizzaError", "Please select a pizza preference.");
        isValid = false;
    } else {
        showError("pizzaError", "");
    }

    // ✅ If all validations pass, show success message
    if (isValid) {
        alert("✅ Accepted! Form submitted successfully.");
        get_Element("pizzaForm").submit(); // Submit the form
    }
}

// ✅ Attach `handleclicker()` to the form submit event
document.querySelector("form").addEventListener("submit", handleclicker);

// ✅ Function to Show/Hide Zipcode Field Based on Checkbox
function is_live() {
    const zip = document.querySelector('.zip_code');
    zip.style.display = get_Element("live").checked ? "block" : "none";
}

// ✅ Initialize the Zipcode field on page load
document.addEventListener("DOMContentLoaded", () => {
    is_live(); // Hide Zipcode field if checkbox is unchecked
});
