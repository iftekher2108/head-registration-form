console.log('for testing purposes')

// log section
let log_body = document.querySelector('.log-section')

// log in
let log_btn = document.querySelector('.btn.log'),
    log_section = document.querySelector('.log-form');

// close 
let close = document.querySelector('.close');

// registration
let reg_btn = document.querySelector('.btn.reg'),
    reg_section = document.querySelector('.reg-form');


// log in 
log_btn.onclick = () => {
    log_body.style.transform = "scaleY(1)";
    log_body.style.opacity = "1"
    log_section.style.display = "block";
    log_section.style.transform = "scaleY(1)";
    reg_section.style.transform = "scaleY(0)";
    reg_section.style.display = "none";

}

// registration
reg_btn.onclick = () => {
    log_body.style.transform = "scaleY(1)";
    log_body.style.opacity = "1"
    reg_section.style.display = "block";
    reg_section.style.transform = "scaleY(1)";
    log_section.style.transform = "scaleY(0)";
    log_section.style.display = "none";

}

// close
close.onclick = () => {
    log_body.style.opacity = "0";
    log_body.style.transform = "scaleY(0)";
}