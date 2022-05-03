"use strict";
import { contacts } from "../utils/contacts.js";
console.log(contacts);

const documentReady = () => {
  const footerNavLinkList = document.querySelector(".footer-nav__link-list");
  const footerNavCredits = document.querySelector(".footer-nav__credits");

  const filtrado = contacts.filter((element) => {
    return element.main === 1;
  });
  filtrado.forEach((element) => {
    footerNavLinkList.innerHTML += `
        <li class="footer-nav__link-item">
                <a href="${element.urlContact}" class="footer-nav__link">
                  <img src="${element.urlImage}" alt="${element.name}" class="footer-nav__link-image" />
                </a>
              </li>
        `;
  });

  footerNavCredits.innerHTML=`🦄Copyright &copy; ${new Date().getFullYear()} <a href="https://www.linkedin.com/in/elliotgaramendi/"
  class="footer-nav__credits-author" target="_blank" rel="noreferrer">Elliot Garamendi.</a> Todos los derechos
reservados.🦄`
};

document.addEventListener("DOMContentLoaded", documentReady);
