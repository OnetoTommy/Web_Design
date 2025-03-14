function handleclicker(){
  // Prevents form submission if validation fails
  let is_Date = true;
  let is_Name = true;
  let is_Zip = true;
  let is_Password = true;
  // Year of Birth
  // const cur_Year = new Date().getFullYear();
  // const date_Input = document.getElementById('birth');
  // date_Input.setAttribute("min", `${min_Date}`);
  // date_Input.setAttribute("max",`${max_Date}`);
  // // Validate Selected
  // date_Input.addEventListener("change", () =>{
  //   const select_Date =  new Date(date_Input.value);
  //   const error_Span = document.getElementById("birthError");
  //   if (select_Date < min_Date || select_Date > max_Date){
  //     error_Span.innerHTML = `Date must be between 1990 and ${cur_Year-1}.`;
  //     isValid = false;  
  //   }else{
  //     error_Span.innerHTML = "";
  //   }
  // }
  // )

    // Year of Birth Validation
    const cur_Year = new Date().getFullYear();
    const min_Date = new Date("1900-01-01");
    const max_Date = new Date(`${cur_Year - 1}-12-31`);
    const date_Input = document.getElementById('birth');

    // Ensure min/max attributes are correctly set
    date_Input.setAttribute("min", min_Date.toISOString().split("T")[0]);
    date_Input.setAttribute("max", max_Date.toISOString().split("T")[0]);

    // Validate Selected Date
    const select_Date = new Date(date_Input.value);
    const error_Span = document.getElementById("birthError");

    if (select_Date < min_Date || select_Date > max_Date || isNaN(select_Date.getTime())) {
        error_Span.innerHTML = `Date must be between 1900 and ${cur_Year - 1}.`;
        is_Date = false;  
    } else {
        error_Span.innerHTML = "";
    }

  // Section_Name
  const name_Type = document.getElementById('name').value.trim();
  const error_Name = document.getElementById("nameError");
  if (name_Type.length < 3){
    error_Name.innerHTML = "Name must be at least 3 characters."
    is_Name = false;
  }else{
    error_Name.innerHTML = "";
  }

  // Section_Zipcode
  const is_live = document.getElementById("live");
  const zip_digits = document.getElementById('zipcode').value.trim();
  const zipError = document.getElementById("zipError");
  if(is_live.checked){
    if (!/^\d{5}$/.test(zip_digits)) {
      zipError.innerText = "Zipcode must be exactly 5 digits.";
      isValid = false;
    } else if(zip_digits === "00000"){
      zipError.innerText = "No Exist";
      isValid = false;
    }else {
      zipError.innerText = ""; 
      is_Zip = true
    }
  }else{
    isValid = true
  }
  
// Section_Password
  const password = get_Element("password").value.trim();
  const passwordError = get_Element("passwordError");
  if(password.length < 8){
    passwordError.innerHTML = "Password must be at least 8 characters."
    is_Dates_Password = false;
  }
  if(is_Date & is_Name & is_Zip & is_Password){
    alert("Accecpted!")
  }
}
function is_live(){
  const is_live = document.getElementById("live");
  const zip = document.getElementsByClassName('zip_code')[0];
  if (is_live.checked){
    zip.style.display = "Block"
  }else{
    zip.style.display = "None"
  }
}

// Common Function
const get_Element = (temp) => document.getElementById(temp);