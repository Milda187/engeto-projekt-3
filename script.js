// Menu icon

const menuIcon = document.querySelector(".menu-icon")
const menuList = document.querySelector(".hamIcon")
const hamIcon = document.querySelector(".fa-solid")

menuIcon.addEventListener("click", () => {
    if (hamIcon.classList[1] === "fa-bars") {
        hamIcon.classList.add("fa-xmark")
        hamIcon.classList.remove("fa-bars")
        menuList.style.display = "block"
    } else {
        hamIcon.classList.add("fa-bars")
        hamIcon.classList.remove("fa-xmark")
        menuList.style.display = "none"
    }   
})

// Dark/Light mode

const switcher = document.querySelector(".switch input");
const themeIcon = document.querySelector(".switcher-description i");

const darkMode = () => {
    themeIcon.classList.replace('fa-sun', 'fa-moon');
}

const lightMode = () => {
    themeIcon.classList.replace('fa-moon', 'fa-sun');
}

const switchTheme = (event) => {
    console.log(event.target.checked);
    if (event.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        darkMode();
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        lightMode() 
    }
}

switcher.addEventListener("change", switchTheme)    

// Images - click, mouseenter, mouseleave

// Images playground

const right1Img = document.querySelector(".playground-right-1");

right1Img.addEventListener("mouseenter", () => {
    right1Img.style.transform = "scale(1.06)"
})

right1Img.addEventListener("mouseleave", () => {
    right1Img.style.transform = "scale(1)"
})

// The best player

const galleryItem1 = document.querySelector(".gallery-item-1");
const galleryItem2 = document.querySelector(".gallery-item-2");
const galleryItem3 = document.querySelector(".gallery-item-3");
const galleryItem4 = document.querySelector(".gallery-item-4");

galleryItem1.addEventListener("mouseenter", () => {
    galleryItem1.style.transform = "scale(1.1)"
})

galleryItem2.addEventListener("mouseenter", () => {
    galleryItem2.style.transform = "scale(1.1)"
})

galleryItem3.addEventListener("mouseenter", () => {
    galleryItem3.style.transform = "scale(1.1)"
})

galleryItem4.addEventListener("mouseenter", () => {
    galleryItem4.style.transform = "scale(1.1)"
})

galleryItem1.addEventListener("mouseleave", () => {
    galleryItem1.style.transform = "scale(1)"
})

galleryItem2.addEventListener("mouseleave", () => {
    galleryItem2.style.transform = "scale(1)"
})

galleryItem3.addEventListener("mouseleave", () => {
    galleryItem3.style.transform = "scale(1)"
})

galleryItem4.addEventListener("mouseleave", () => {
    galleryItem4.style.transform = "scale(1)"
})


// Czechia

const czechia = document.querySelector(".about-right");

czechia.addEventListener("mouseenter", () => {
    czechia.style.transform = "scale(1.05)"
})

czechia.addEventListener("mouseleave", () => {
    czechia.style.transform = "scale(1)"
})

// Scroll

window.addEventListener("scroll", function(){
    let scrolled = window.scrollY
    let scrollable = document.documentElement.scrollHeight - window.innerHeight

    if (Math.ceil(scrolled) === scrollable){
        let toTop = document.querySelector(".top-page")
        toTop.style.display = "block"

        toTop.addEventListener("click", function(){
            toTop.style.display = "none"
        })
    }
})


// Form

// Name and Email

const form = document.querySelector("#form")
const fullName = document.querySelector(".fullName")
const email = document.querySelector(".email")
const informationfullName = document.querySelector(".information-fullName")
const informationEmail = document.querySelector(".information-email")

form.addEventListener("submit", (event) => {
    event.preventDefault()
   
    if (fullName.value === "") {
        informationfullName.style.display = "block"
    }

    if (email.value === "") {
        informationEmail.style.display = "block"
    }
})


// Password checker

const password1 = document.querySelector(".password-first")
const password2 = document.querySelector(".password-second")
const paragraphText = document.querySelector(".result-text")

password1.addEventListener("input", () => {
    const password1Value = password1.value
    const password2Value = password2.value

    if (password1Value === password2Value){
        paragraphText.textContent = "Passwords are the same"
        paragraphText.classList.add("true")
        paragraphText.classList.remove("false")
    } else {
        paragraphText.textContent = "Passwords don´t same"
        paragraphText.classList.add("false")
        paragraphText.classList.remove("true")
    }
})

password2.addEventListener("input", () => {
    const password1Value = password1.value
    const password2Value = password2.value

    if(password1Value === password2Value){
        paragraphText.textContent = "Passwords are the same"
        paragraphText.classList.add("true")
        paragraphText.classList.remove("false")
    } else {
        paragraphText.textContent = "Passwords don´t same"
        paragraphText.classList.add("false")
        paragraphText.classList.remove("true")
    }
})

// Check email

const emailInput = document.querySelector(".email")

const pattern = /^([a-z\d\.\-]+)@([a-z\d\-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/

emailInput.addEventListener("input", () => {
    const emailValue = emailInput.value
    
    if (emailValue.match(pattern)){
        form.classList.add("valid")
        form.classList.remove("invalid")
        
    } else {
        form.classList.add("invalid")
        form.classList.remove("valid")
       
    } if (emailValue === ""){
        form.classList.remove("invalid")
        form.classList.remove("valid")
    }
})