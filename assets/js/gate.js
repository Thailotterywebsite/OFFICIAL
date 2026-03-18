function checkCode() {
    var code = document.getElementById("accessCode").value.trim();

    // Multiple valid codes
    var validCodes = ["MVP007", "THAII26", "PER001"];

    if (validCodes.includes(code)) {
        localStorage.setItem("access_granted", "yes");
        window.location.href = "index.html";
    } else {
        alert("Invalid referral code");
    }
}
