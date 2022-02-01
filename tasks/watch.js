import {
  watch,
  parallel,
  series
} from 'gulp';

import html from "./html";
import modules from "./modules";
import style from "./style";
import rastr from "./rastr";
import webp from "./webp";
import ttf from "./ttf";
import ttf2 from "./ttf2";
import fonts from "./fonts";
import copyFavicon from "./favicon";

function watching() {
  watch('src/**/*.html', series(html));
  watch('src/favicon/**.*', series(copyFavicon));
  watch('src/**/*.scss', parallel(style));
  watch('src/**/*.js', parallel(modules));
  watch('src/img/**/*.+(png|jpg|jpeg|gif)', series(rastr, webp));
  watch('src/fonts/**/*.ttf', series(ttf, ttf2, fonts));
}

export default watching;