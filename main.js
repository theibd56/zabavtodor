import {Fancybox} from "@fancyapps/ui";
import {Mask, MaskInput} from "maska"

import './sass/app.scss';
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import * as isvek from "bvi";
import 'bvi/dist/css/bvi.min.css';
import Swiper from "swiper";

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
                    target: "body",
                    theme: "white",
                    font: "arial",
                    letterSpacing: "normal",
                    lineHeight: "normal",
                    images: true,
                    reload: false
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
});

