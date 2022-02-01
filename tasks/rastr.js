import { src, dest } from 'gulp';
import changed from 'gulp-changed';
import plumber from 'gulp-plumber';
import imagemin from 'gulp-imagemin';
import browserSync from 'browser-sync';

function rastr() {
	return src('src/img/**/*.+(png|jpg|jpeg|gif|svg|ico)')
		.pipe(plumber())
		.pipe(changed('build/img'))
		.pipe(imagemin([
			imagemin.gifsicle({interlaced: true}),
			imagemin.mozjpeg({quality: 90, progressive: true}),
			imagemin.optipng({optimizationLevel: 5}),
		]))
		.pipe(dest('build/img'))
		.pipe(browserSync.stream())
}

export default rastr;