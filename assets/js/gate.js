function checkCode() {
    var code = document.getElementById("accessCode").value.trim();

    // Multiple valid codes
    var validCodes = ["Thai707", "VVIP2026", "PERSONAL101"];

    if (validCodes.includes(code)) {
        localStorage.setItem("access_granted", "yes");
        window.location.href = "index.html";
    } else {
        alert("Invalid referral code");
    }
}
