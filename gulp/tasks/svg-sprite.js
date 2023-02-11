// import svgSprite from "gulp-svg-sprite";
// export const svgSpriteTask = () => {
// 	return app.gulp.src(`${app.path.src.svgicons}`, {})
// 		.pipe(app.plugins.plumber(
// 			app.plugins.notify.onError({
// 				title: "SVG",
// 				message: "Error: <%= error.message %>"
// 			}))
// 		)
// 		.pipe(svgSprite({
// 			mode: {
// 				stack: {
// 					sprite: `../icons/icons.svg`,
// 					// Создавать страницу с перечнем иконок
// 					example: true
// 				}
// 			},
// 		}
// 		))
// 		.pipe(app.gulp.dest(`${app.path.build.images}`));
// }

import svgSprite from 'gulp-svg-sprite';
import cheerio from 'gulp-cheerio';

export const svgSpriteTask = () => {
  return app.gulp.src(`${app.path.src.svgicons}`, {})
    .pipe(app.plugins.plumber())
    .pipe(svgSprite({
      mode: {
        symbol: {
          sprite: `../icons/icons.svg`,
          example: true,
          inline: true
        },
      }
    }))
    .pipe(cheerio({
      run: function ($) {
        $('[fill^="#"]').attr('fill', 'currentColor');
        $('[stroke^="#"]').attr('stroke', 'currentColor');
      },
      parserOptions: { xmlMode: true }
    }))
    // .pipe(app.gulp.dest(app.path.build.images));
    .pipe(app.gulp.dest(`${app.path.build.images}`));
};