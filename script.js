// =========================
// ELITE PLUMBING WEBSITE JS
// Conversion Optimization Layer
// =========================


// 🔥 1. WhatsApp Auto Popup (Conversion Trigger)
setTimeout(() => {
    const popup = document.createElement("div");
    popup.innerHTML = `
        <div style="
            position:fixed;
            bottom:20px;
            right:20px;
            background:#0b1f3a;
            color:#fff;
            padding:15px;
            border-radius:12px;
            box-shadow:0 10px 30px rgba(0,0,0,0.3);
            z-index:9999;
            max-width:260px;
            font-family:sans-serif;
        ">
            <p style="margin:0 0 10px;font-size:14px;">
                ⚡ Need urgent plumbing help in East London?
            </p>
            <a href="https://wa.me/27740652144?text=Hi,%20I%20need%20urgent%20plumbing%20help"
               style="
                   display:block;
                   text-align:center;
                   background:#25D366;
                   color:white;
                   padding:10px;
                   border-radius:8px;
                   text-decoration:none;
                   font-weight:bold;
               ">
               💬 WhatsApp Now
            </a>

            <button onclick="this.parentElement.remove()"
                style="
                    margin-top:8px;
                    width:100%;
                    background:transparent;
                    border:1px solid #fff;
                    color:#fff;
                    padding:6px;
                    border-radius:6px;
                    cursor:pointer;
                ">
                Close
            </button>
        </div>
    `;
    document.body.appendChild(popup);
}, 5000);



// 🔥 2. Smooth Scroll for Premium Feel
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});



// 🔥 3. Click Tracking (Future Google Ads / Analytics Ready)
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function() {
        console.log("Click tracked:", this.href);

        // If Google Analytics is added later
        if (typeof gtag !== "undefined") {
            gtag('event', 'click', {
                'event_category': 'engagement',
                'event_label': this.href
            });
        }
    });
});



// 🔥 4. Convert Contact Form → WhatsApp Message (NO LOST LEADS)
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = form.querySelector("input[type='text']").value;
        const phone = form.querySelector("input[type='tel']").value;
        const message = form.querySelector("textarea").value;

        const whatsappMessage =
            `Hi, my name is ${name}.%0A` +
            `Phone: ${phone}%0A` +
            `Issue: ${message}`;

        window.open(
            `https://wa.me/27740652144?text=${whatsappMessage}`,
            "_blank"
        );
    });
}



// 🔥 5. Sticky Button Boost (Mobile Conversion Trick)
window.addEventListener("scroll", function() {
    const btn = document.querySelector(".whatsapp");

    if (btn) {
        if (window.scrollY > 200) {
            btn.style.transform = "scale(1.2)";
            btn.style.transition = "0.3s";
        } else {
            btn.style.transform = "scale(1)";
        }
    }
});
