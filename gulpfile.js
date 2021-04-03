const gulp = require("gulp")
const series = gulp.series
const parallel = gulp.parallel
const sass = require("gulp-sass")
const uglifyHTML = require("gulp-htmlmin")
const uglifyCSS = require("gulp-uglifycss")
const uglify = require("gulp-uglify")
const concat = require("gulp-concat")


//TASK1
function transformarHTML (){
    return gulp.src("./src/home.html")
        .pipe(uglifyHTML({collapseWhitespace:true}))
        .pipe(concat("index.html"))
        .pipe(gulp.dest("."))
}

//TASK2
function transformarCSS (){
    return gulp.src("./src/sass/index.scss")
        .pipe(sass())
        .pipe(uglifyCSS())
        .pipe(concat("style.min.css"))
        .pipe(gulp.dest("./build/assets/css"))
}

//TASK3
function transformarJS (){
    return gulp.src("./src/script.js")
        .pipe(uglify())
        .pipe(concat("script.min.js"))
        .pipe(gulp.dest("./build/assets/script"))
}

function copiarIMG (){
    return gulp.src("./src/img/newLogo.svg")
    .pipe(gulp.dest("./build/assets/img"))
}


module.exports.default = series(
    parallel(transformarHTML, transformarCSS),
    transformarJS,
    copiarIMG
)