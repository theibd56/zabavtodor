import {Fancybox} from "@fancyapps/ui";
import {Mask, MaskInput} from "maska"

import './sass/app.scss';
import "@fancyapps/ui/dist/fancybox/fancybox.css";

new MaskInput("[data-maska]")

//fancybox (может конфликтовать)
Fancybox.bind("[data-fancybox]", {
    // Your custom options
});