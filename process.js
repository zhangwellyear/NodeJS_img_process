const sharp = require('sharp')

const img_name = './images/cat_rabbit.jpg'
const resize_img_name = './images/resize_img.jpg'
const rotate_img_name = './images/rotate_img.jpg'
const flatten_img_name = './images/flatten_img.png'
const composite_img_name = './images/composite_img.png'

sharp(img_name)
    .resize(300, 200)
    .toFile(resize_img_name, err => {
        if (err) console.log(err)
    })

sharp(img_name)
    .rotate(180)
    .toFile(rotate_img_name, err => {
        if (err) console.log(err)
    })


const flower_img = './images/flower.png'

sharp(flower_img)
    .flatten({
        background: '#ff6600'
    })
    .toFile(flatten_img_name, err => {
        if (err) console.log(err)
    })

sharp(flower_img)
    .composite([{
        input: './images/cat_rabbit.jpg',
        gravity: 'southeast'
    }])
    .toFile(composite_img_name, err => {
        if (err) console.log(err)
    })

sharp(img_name)
    .sharpen()
    .toFile('./images/sharpen_img.jpg', err => {
        if (err) console.log(err)
    })

sharp(img_name)
    .toBuffer()
    .then(outputBuffer => {
        console.log(outputBuffer)
    })

sharp(img_name)
    .flip(true)
    .toFile('./images/flip_img.jpg', err => {
        if (err) console.log(err)
    })

sharp(img_name)
    .flop(true)
    .toFile('./images/flop_img.jpg', err => {
        if (err) console.log(err)
    })

sharp(img_name)
    .convolve({
        width: 3,
        height: 3,
        kernel: [-1, 0, 1, -2, 0, 2, -1, 0, 1]  // 索伯尔滤波
    })
    .toFile('./images/convolve_img.jpg', err => {
        if (err) console.log(err)
    })

sharp(img_name)
    .normalise(true)
    .toFile('./images/normalize_img.jpg', err => {
        if (err) console.log(err)
    })

sharp(img_name)
    .threshold(128)
    .toFile('./images/threshold_img.jpg', err => {
        if (err) console.log(err);
    })

let sharp_tint = sharp(img_name)
sharp(img_name)
    .tint(sharp_tint.Color)
    .toFile('./images/tint_img.jpg', err => {
        if (err) console.log(err)
    })

sharp(img_name)
    .grayscale(true)
    .toFile('./images/grayscale_img.jpg', err => {
        if (err) console.log(err)
    })

sharp(img_name)
    .extractChannel('green')
    .toFile('./images/green_img.png', (err, info) => {
        console.log(info)
    })