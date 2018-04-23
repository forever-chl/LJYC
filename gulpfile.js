/**
 * 组件安装
 * npm install gulp-util gulp-imagemin gulp-ruby-sass gulp-minify-css gulp-minify-html gulp-load-plugins gulp-jshint gulp-uglify gulp-rename gulp-concat gulp-clean gulp.spritesmith --save-dev
 * imagemin 图片压缩
 * rubySass sass压缩
 * minifyCss css压缩
 * jshint js检查
 * uglify js压缩
 * minifyHtml  html压缩
 * rename 文件重命名
 * concat 文件合并
 * clean  清空文件夹
 * gulp-load-plugins  自动加载
 */

var gulp = require('gulp'),
        // cleanCss = require('gulp-clean-css'),
        // concat = require('gulp-concat'),
        // babel = require('gulp-babel'),
        // jshint = require('gulp-jshint'),
        // rename = require('gulp-rename'),
        // uglify = require('gulp-uglify'),
        // autoprefixer = require('gulp-autoprefixer'),
        // plugins = require('gulp-load-plugins')(),
        spritesmith = require('gulp.spritesmith');
        // minifyCss = require("gulp-minify-css");


//压缩，合并 js
// gulp.task('jsmin', function () {
//     gulp.src(['src/js/*.js', '!test/js/**/{min}.js'])
//         .pipe(uglify({
//             mangle: true,//类型：Boolean 默认：true 是否修改变量名
//             compress: true,//类型：Boolean 默认：true 是否完全压缩
//             preserveComments: 'all' //保留所有注释
//         }))
//         .pipe(plugins.rename({ suffix: '.min' }))
//         .pipe(gulp.dest('dist/min'));
// });

//css文件压缩
// gulp.task('minify-css', function () {
//     gulp.src('test/css/*.css') // 要压缩的css文件
//     .pipe(minifyCss()) //压缩css
//     .pipe(gulp.dest('dist/css'));
// });

//html文件压缩
// gulp.task('minify-html', function () {
//     gulp.src('test/*.html') // 要压缩的html文件
//     .pipe(minifyHtml()) //压缩
//     .pipe(gulp.dest('dist/html'));
// });

//js代码检查
// gulp.task('jsLint', function () {
//     gulp.src('test/js/*.js')
//     .pipe(jshint())
//     .pipe(jshint.reporter()); // 输出检查结果
// });

//less编译
// gulp.task('compile-less', function () {
//     gulp.src('less/*.less')
//     .pipe(less())
//     .pipe(gulp.dest('dist/css'));
// });

//图片压缩
// gulp.task('default', function () {
//     return gulp.src('src/assets/icon/*')
//         .pipe(imagemin({
//             progressive: true,
//             use: [pngquant()] //使用pngquant来压缩png图片
//         }))
//         .pipe(gulp.dest('dist'));
// });

//图片精灵
gulp.task('sprite', function () {
    return gulp.src('src/images/*.png')//需要合并的图片地址
        .pipe(spritesmith({
            imgName: 'sprite.png',//保存合并后图片的地址
            cssName: 'css/sprite.css',//保存合并后对于css样式的地址
            padding:5,//合并时两个图片的间距
        }))
        .pipe(gulp.dest('src/images/dist'));
});