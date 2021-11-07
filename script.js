const faqAccordHeading = document.getElementsByClassName("faq-accord-heading")

for (let i = 0, j = faqAccordHeading.length; i < j; i++) {
  faqAccordHeading[i].addEventListener("click", () => {
    faqAccordHeading[i].classList.toggle("faq-accord-heading-bold")

    const hideSection = faqAccordHeading[i].nextElementSibling
    const iconArrow = faqAccordHeading[i].firstElementChild

    iconArrow.classList.toggle("icon-arrow-up")
    hideSection.classList.toggle("show")
  })
}



