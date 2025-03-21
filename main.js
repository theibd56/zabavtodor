import {Fancybox} from "@fancyapps/ui";
import {Mask, MaskInput} from "maska"

import './sass/app.scss';
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import * as isvek from "bvi";
import 'bvi/dist/css/bvi.min.css';

new MaskInput("[data-maska]")

//fancybox (может конфликтовать)
Fancybox.bind("[data-fancybox]", {
    // Your custom options
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.js-body-bvi').forEach(item => {
        item.addEventListener("click", function () {
            if (typeof isvek !== "undefined" && typeof isvek.Bvi === "function") {
                new isvek.Bvi({
                    target: '.js-body-bvi',
                    fontSize: 24,
                    theme: 'white'
                });
                console.log("BVI успешно запущен!");
            } else {
                console.error("Ошибка: isvek.Bvi не найден. Проверьте подключение скрипта.");
            }
        });
    })
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".page-menu .has-child").forEach(function (item) {
        let link = item.querySelector("a");
        if (link) {
            link.addEventListener("click", function (event) {
                event.preventDefault();
            });
        }
        item.addEventListener("click", function () {
            this.classList.toggle("active");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("fileInput")) {
        const fileInput = document.getElementById("fileInput");
        const fileNameDisplay = document.getElementById("fileName");

        fileInput.addEventListener("change", function () {
            if (fileInput.files.length > 0) {
                const file = fileInput.files[0];

                if (file.size > 5 * 1024 * 1024) {
                    alert("Файл слишком большой! Максимальный размер 5MB.");
                    fileInput.value = "";
                    fileNameDisplay.textContent = "";
                    return;
                }

                fileNameDisplay.textContent = file.name;
            } else {
                fileNameDisplay.textContent = "";
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.page-menu')) {
        const menu = document.querySelector('.page-menu');
        const firstItem = menu.querySelector('li:first-child');
        const firstLink = firstItem.querySelector('a');

        const originalHref = firstLink.getAttribute('href');

        function checkWidth() {
            return window.innerWidth <= 992;
        }

        firstItem.addEventListener('click', function(e) {
            if (checkWidth()) {
                if (!menu.classList.contains('active')) {
                    e.preventDefault();
                }

                menu.classList.toggle('active');

                if (menu.classList.contains('active')) {
                    firstLink.setAttribute('href', originalHref);
                } else {
                    firstLink.setAttribute('href', 'javascript:void(0)');
                }
            }
        });

        window.addEventListener('resize', function() {
            if (!checkWidth()) {
                menu.classList.remove('active');
                firstLink.setAttribute('href', originalHref);
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const burgerTrigger = document.getElementById('js-burger-trigger');
    const burgerMenu = document.getElementById('js-burger-menu');
    const burgerClose = document.getElementById('js-burger-close');
    const htmlElement = document.documentElement;

    burgerTrigger.addEventListener('click', () => {
        burgerMenu.classList.add('active');
        htmlElement.classList.add('lock');
    });

    burgerClose.addEventListener('click', () => {
        burgerMenu.classList.remove('active');
        htmlElement.classList.remove('lock');
    });
})