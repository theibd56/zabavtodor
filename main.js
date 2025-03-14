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
    document.getElementById("js-header-bvi").addEventListener("click", function () {
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
});