const profileForm = document.getElementById("profile-form");

let profile = JSON.parse(localStorage.getItem("foodProfile")) || {
  username: "",
  email: "",
  phone: ""
};

username.value = profile.username;
email.value = profile.email;
phone.value = profile.phone;

profileForm.addEventListener("submit", e => {
  e.preventDefault();

  profile = {
    username: username.value,
    email: email.value,
    phone: phone.value
  };

  localStorage.setItem("foodProfile", JSON.stringify(profile));
  alert("Profile updated successfully!");
});
