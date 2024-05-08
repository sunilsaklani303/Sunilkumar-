const Form = document.querySelector("form");
const fullName =document.getElementById("name");
const email1 =document.getElementById("email");
const phone =document.getElementById("phone");
const message =document.getElementById("textarea");
function emailSend() {
  const bodyMessage = `Name : ${fullName.value}<br> Email: ${email1.value}<br> Mobile :  ${phone.value}<br> Message:  ${message.value}`;
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "saklanisunil53@gmail.com",
    Password : "5599C976907A3FCF61109BAACE0558247952",
    To : 'saklanisunil53@gmail.com',
    From : "saklanisunil53@gmail.com",
    Subject : "Someone checked your profile",
    Body : bodyMessage
}).then(
  message => {
    if(message=='OK'){
      swal({
        title: "Good job!",
        text: "Thank You for Contacting!",
        icon: "success",
        button: "Aww yiss!",
      });

    }
    else{
      swal("error", "You clicked the button!", "error");

    }

  }
);
}
Form.addEventListener("submit", (e) => {
  e.preventDefault();
});

function scrolltop() {
  let a = window.document;
  a = location.href = '#home';
};
setInterval(() => {
    // get time indicator elements
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let secondes = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');
  
    // digits time indicator
    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss');
  
  
    // dot time indicator
    let dotH = document.querySelector('.h_dot');
    let dotM = document.querySelector('.m_dot');
    let dotS = document.querySelector('.s_dot');
  
    // get current time
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ap = h >= 12 ? 'PM' : 'AM';
  
    // convert to 12 hour format
    if (h > 12) {
      h = h - 12;
    }
  
    // add 0 before single digit
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
  
    // set time and label
    hours.innerHTML = h + 'Hours';
    minutes.innerHTML = m + 'Minutes';
    secondes.innerHTML = s + 'Seconds';
    ampm.innerHTML = ap;
  
    // set time circular indicator
    hh.style.strokeDashoffset = 440 - (440 * h) / 12;
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;
  
    // set dot time position indicator
    dotH.style.transform = `rotate(${h * 30}deg)`;
    dotM.style.transform = `rotate(${m * 6}deg)`;
    dotS.style.transform = `rotate(${s * 6}deg)`;
  }, 1000);