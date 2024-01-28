// Code scrolling effects of the page header:
let header = document.querySelector("#page-header");
let msg = document.querySelector("#page-msg");
let topSection = document.querySelector(".top-section");
let sponsorSection = this.document.querySelector(".events-items");
let initialTopPaddingForMsg = "10px";

const resetPositions = () => {
  header.style.transition = "0.1s font-size, 0.3s padding, top 0.3s linear";
  header.style.fontSize = "2.5rem";
  header.style.position = "sticky";
  header.style.paddingLeft = "40px";
  msg.style.opacity = "1";
  msg.style.paddingTop = initialTopPaddingForMsg;
  topSection.style.height = "45%";
  topSection.style.minHeight = "300px";
  sponsorSection.style.paddingTop = "70px";
  header.classList.remove("transparent-glass-bg-top");
};

document.querySelector(".mobile").addEventListener("scroll", function () {
  let msgPositionFromTop = msg.getBoundingClientRect().top;
  // console.log(msgPositionFromTop);
  if (msg.style.paddingTop == "65px") {
    if (msgPositionFromTop > 50) {
      resetPositions();
    }
  }
  if (msgPositionFromTop < 110) {
    header.style.paddingLeft = "90px";
    header.style.transition =
      "0.1s font-size, 0.025s padding, top 0.3s linear, 0.3s box-shadow";
    if (msgPositionFromTop < 85) {
      header.style.fontSize = "1.8rem";
      msg.style.transition = "none";
    }
    if (msgPositionFromTop < 55) {
      header.classList.add("transparent-glass-bg-top");
    }
    if (msgPositionFromTop <= 0) {
      msg.style.paddingTop = "65px";
      header.style.position = "fixed";
    }
  } else {
    resetPositions();
  }
  setTimeout(() => {
    let msgPositionFromTop = msg.getBoundingClientRect().top;
    console.log(msgPositionFromTop);
    if (msgPositionFromTop > 110) {
      resetPositions();
    }
  }, 100);
});

const eventDetails = [
  {
    name: "Codeplay",
    description:
      "Experience the mesmerizing spectacle of diverse rhythms colliding on one stage in Xavotsav.",
    modalDescription:
      "Immerse in the rhythmic world of dance at Xavotsav 2024, where movement reigns supreme, stirring hearts and sparking expressive passion. This vibrant genre promises a kaleidoscope of performances, showcasing the dynamic diversity within the dance community.<br><br>Join us in celebrating the artistry, dedication, and sheer brilliance that dance brings to life at Xavotsav 2024. <ul><li>Eastern solo</li><li>Bollywood Dance</li><li>Street Battle</li><li>Western Duet</li><li>Western Group</li></ul>",
    formLink: "https://google.com",
    icon: "data_object",
  },
  {
    name: "Codeplay",
    description:
      "Experience the mesmerizing spectacle of diverse rhythms colliding on one stage in Xavotsav.",
    modalDescription:
      "Immerse in the rhythmic world of dance at Xavotsav 2024, where movement reigns supreme, stirring hearts and sparking expressive passion. This vibrant genre promises a kaleidoscope of performances, showcasing the dynamic diversity within the dance community.<br><br>Join us in celebrating the artistry, dedication, and sheer brilliance that dance brings to life at Xavotsav 2024. <ul><li>Eastern solo</li><li>Bollywood Dance</li><li>Street Battle</li><li>Western Duet</li><li>Western Group</li></ul>",
    formLink: "https://google.com",
    icon: "data_object",
  },
  {
    name: "Codeplay",
    description:
      "Experience the mesmerizing spectacle of diverse rhythms colliding on one stage in Xavotsav.",
    modalDescription:
      "Immerse in the rhythmic world of dance at Xavotsav 2024, where movement reigns supreme, stirring hearts and sparking expressive passion. This vibrant genre promises a kaleidoscope of performances, showcasing the dynamic diversity within the dance community.<br><br>Join us in celebrating the artistry, dedication, and sheer brilliance that dance brings to life at Xavotsav 2024. <ul><li>Eastern solo</li><li>Bollywood Dance</li><li>Street Battle</li><li>Western Duet</li><li>Western Group</li></ul>",
    formLink: "https://google.com",
    icon: "data_object",
  },
  {
    name: "Codeplay",
    description:
      "Experience the mesmerizing spectacle of diverse rhythms colliding on one stage in Xavotsav.",
    modalDescription:
      "Immerse in the rhythmic world of dance at Xavotsav 2024, where movement reigns supreme, stirring hearts and sparking expressive passion. This vibrant genre promises a kaleidoscope of performances, showcasing the dynamic diversity within the dance community.<br><br>Join us in celebrating the artistry, dedication, and sheer brilliance that dance brings to life at Xavotsav 2024. <ul><li>Eastern solo</li><li>Bollywood Dance</li><li>Street Battle</li><li>Western Duet</li><li>Western Group</li></ul>",
    formLink: "https://google.com",
    icon: "data_object",
  },
  {
    name: "Codeplay",
    description:
      "Experience the mesmerizing spectacle of diverse rhythms colliding on one stage in Xavotsav.",
    modalDescription:
      "Immerse in the rhythmic world of dance at Xavotsav 2024, where movement reigns supreme, stirring hearts and sparking expressive passion. This vibrant genre promises a kaleidoscope of performances, showcasing the dynamic diversity within the dance community.<br><br>Join us in celebrating the artistry, dedication, and sheer brilliance that dance brings to life at Xavotsav 2024. <ul><li>Eastern solo</li><li>Bollywood Dance</li><li>Street Battle</li><li>Western Duet</li><li>Western Group</li></ul>",
    formLink: "https://google.com",
    icon: "data_object",
  },
  {
    name: "Codeplay",
    description:
      "Experience the mesmerizing spectacle of diverse rhythms colliding on one stage in Xavotsav.",
    modalDescription:
      "Immerse in the rhythmic world of dance at Xavotsav 2024, where movement reigns supreme, stirring hearts and sparking expressive passion. This vibrant genre promises a kaleidoscope of performances, showcasing the dynamic diversity within the dance community.<br><br>Join us in celebrating the artistry, dedication, and sheer brilliance that dance brings to life at Xavotsav 2024. <ul><li>Eastern solo</li><li>Bollywood Dance</li><li>Street Battle</li><li>Western Duet</li><li>Western Group</li></ul>",
    formLink: "https://google.com",
    icon: "data_object",
  },
  {
    name: "Codeplay",
    description:
      "Experience the mesmerizing spectacle of diverse rhythms colliding on one stage in Xavotsav.",
    modalDescription:
      "Immerse in the rhythmic world of dance at Xavotsav 2024, where movement reigns supreme, stirring hearts and sparking expressive passion. This vibrant genre promises a kaleidoscope of performances, showcasing the dynamic diversity within the dance community.<br><br>Join us in celebrating the artistry, dedication, and sheer brilliance that dance brings to life at Xavotsav 2024. <ul><li>Eastern solo</li><li>Bollywood Dance</li><li>Street Battle</li><li>Western Duet</li><li>Western Group</li></ul>",
    formLink: "https://google.com",
    icon: "data_object",
  },
  {
    name: "Codeplay",
    description:
      "Experience the mesmerizing spectacle of diverse rhythms colliding on one stage in Xavotsav.",
    modalDescription:
      "Immerse in the rhythmic world of dance at Xavotsav 2024, where movement reigns supreme, stirring hearts and sparking expressive passion. This vibrant genre promises a kaleidoscope of performances, showcasing the dynamic diversity within the dance community.<br><br>Join us in celebrating the artistry, dedication, and sheer brilliance that dance brings to life at Xavotsav 2024. <ul><li>Eastern solo</li><li>Bollywood Dance</li><li>Street Battle</li><li>Western Duet</li><li>Western Group</li></ul>",
    formLink: "https://google.com",
    icon: "data_object",
  },
  {
    name: "Codeplay",
    description:
      "Experience the mesmerizing spectacle of diverse rhythms colliding on one stage in Xavotsav.",
    modalDescription:
      "Immerse in the rhythmic world of dance at Xavotsav 2024, where movement reigns supreme, stirring hearts and sparking expressive passion. This vibrant genre promises a kaleidoscope of performances, showcasing the dynamic diversity within the dance community.<br><br>Join us in celebrating the artistry, dedication, and sheer brilliance that dance brings to life at Xavotsav 2024. <ul><li>Eastern solo</li><li>Bollywood Dance</li><li>Street Battle</li><li>Western Duet</li><li>Western Group</li></ul>",
    formLink: "https://google.com",
    icon: "data_object",
  },

  {
    name: "Codeplay",
    description:
      "Experience the mesmerizing spectacle of diverse rhythms colliding on one stage in Xavotsav.",
    modalDescription:
      "Immerse in the rhythmic world of dance at Xavotsav 2024, where movement reigns supreme, stirring hearts and sparking expressive passion. This vibrant genre promises a kaleidoscope of performances, showcasing the dynamic diversity within the dance community.<br><br>Join us in celebrating the artistry, dedication, and sheer brilliance that dance brings to life at Xavotsav 2024. <ul><li>Eastern solo</li><li>Bollywood Dance</li><li>Street Battle</li><li>Western Duet</li><li>Western Group</li></ul>",
    formLink: "https://google.com",
    icon: "data_object",
  },
];

let eventSection = document.querySelector(".events-items");
let eventSectionDesktop = document.querySelector(".event-items-desktop");

eventDetails.forEach((event, index) => {
  let newEventDivDesktop = document.createElement("div");
  newEventDivDesktop.className = "nft relative z-3";
  newEventDivDesktop.innerHTML = `
    <div class="main">
          <img
          class="tokenImage black-bg"
          src="/assets/images/events/bytetales1.jpg"
          />
      <div class="flex flex-col">
        <span class="text-lg font-bold p-1rem" style="padding-left: 0px"
        >Event Name #${index + 1}</span
        >
      </div>
      <p class="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
      harum odit tempore reprehenderit vitae delectus.
      </p>
<hr />
      <div class="cta flex justify-center">
        <span class="text-lg" style="padding: 0.5rem 0">Register Now</span>
    </div>
    </div>
      `;
  eventSectionDesktop.appendChild(newEventDivDesktop);
  let newEventDiv = document.createElement("div");
  newEventDiv.className = "nft relative z-3";
  newEventDiv.innerHTML = `
    <div class="main">
          <img
          class="tokenImage black-bg"
          src="/assets/images/events/bytetales1.jpg"
          />
      <div class="flex flex-col">
        <span class="text-lg font-bold p-1rem" style="padding-left: 0px"
        >Event Name #${index + 1}</span
        >
      </div>
      <p class="description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
      harum odit tempore reprehenderit vitae delectus.
      </p>
<hr />
      <div class="cta flex justify-center">
        <span class="text-lg" style="padding: 0.5rem 0">Register Now</span>
    </div>
    </div>
      `;
  eventSection.appendChild(newEventDiv);
})

function setVideoDims() {
  let desktopBackground = document.querySelector(".desktop .background")
  let desktopVideo = document.querySelector(".desktop video")

  desktopVideo.style.width = desktopBackground.clientHeight + "px"
  desktopVideo.style.height = desktopBackground.clientWidth + "px"
  desktopVideo.style.top = (desktopBackground.clientHeight - desktopBackground.clientWidth) / 2 + "px"
  desktopVideo.style.left = (desktopBackground.clientWidth - desktopBackground.clientHeight) / 2 + "px"
}
setVideoDims()
window.addEventListener("resize", setVideoDims)