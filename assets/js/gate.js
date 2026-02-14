function checkCode() {
    var code = document.getElementById("accessCode").value.trim();

    // Multiple valid codes
    var validCodes = ["VIP123", "THAI2026", "AGENT001"];

    if (validCodes.includes(code)) {
        localStorage.setItem("access_granted", "yes");
        window.location.href = "index.html";
    } else {
        alert("Invalid referral code");
    }
}
