import {src, dest} from 'gulp';
import changed from 'gulp-changed';
import ttf2woff from 'gulp-ttf2woff';

function ttf2() {
    return src('src/fonts/**/*.ttf')
        .pipe(changed('build/fonts', {
            extension: 'woff',
            hasChanged: changed.compareLastModifiedTime
        }))
        .pipe(ttf2woff())
        .pipe(dest('build/fonts'))
}

export default ttf2;