import {src, dest} from 'gulp';
import changed from 'gulp-changed';
import ttf2woff2 from 'gulp-ttftowoff2';

function ttf() {
    return src('src/fonts/**/*.ttf')
        .pipe(changed('build/fonts', {
            extension: '.woff2',
            hasChanged: changed.compareLastModifiedTime
        }))
        .pipe(ttf2woff2())
        .pipe(dest('build/fonts'))
}

export default ttf;