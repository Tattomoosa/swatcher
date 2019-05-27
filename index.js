import '/swatches.css'
import Pickr from '/node_modules/@simonwep/pickr/dist/pickr.min'

const white = 'white'
const black = '#444'
const defaultColor = '#2A9663'

const backgroundStyle = document.body.style;
const titleStyle = document.querySelector('h1').style;
const infoStyle = document.querySelector('.info').style;
const swatch = document.querySelector('#swatch');
let lastPaint = 0
/*
document.querySelector('.copy-button')
	.addEventListener('click', () => copyCanvasAsImage(swatch), false)
*/


const pickr = Pickr.create({
	el: '.color-picker',
	showAlways: true,
	position: 'middle',
	useAsButton: true,
	inline: true,
	default: defaultColor,

	components: {
		preview: false,
		opacity: false,
		hue: true,

		interaction: {
			hex: true,
			rgba: true,
			hsla: true,
			hsva: true,
			cmyk: true,
			input: true,
			clear: false,
			save: false,
		}
	}
})

pickr.on('init', (...args) => {
	let color = args[0]._color
	updateUi(color)
}).on('change', (...args) => {
	let color = args[1]._color
	updateUi(color)
})

function updateUi(color) {
	backgroundStyle.backgroundColor = color.toHEXA();
	if (color.v < 80.0) {
		titleStyle.color = white
		infoStyle.color = white
		infoStyle.borderColor = white
	} else {
		titleStyle.color = black
		infoStyle.color = black
		infoStyle.borderColor = black
	}
	window.cancelAnimationFrame(lastPaint)
	lastPaint = window.requestAnimationFrame(() => updateSwatch(color))
}

function updateSwatch(color) {
	let c = swatch.getContext('2d')
	let height = c.canvas.height
	let width = c.canvas.width
	c.beginPath();
	c.rect(0, 0, width, height)
	c.fillStyle = color.toHEXA()
	c.fill()
	c.font = "14px Arial"
	c.fillStyle = color.v < 80.0 ? white : black;
	c.fillText(color.toHEXA(), 10, height - 10);
}

function copyCanvasAsImage() {
	let canvas = swatch.getContext('2d').canvas
	let img = document.createElement('img')
	img.src = canvas.toDataURL()
	let div = document.createElement('div')
	div.contentEditable = true
	div.appendChild(img)
	document.body.appendChild(div)
	selectText(div)
	document.execCommand('copy')
	document.body.removeChild(div)
}

function selectText(element) {
	var doc = document;
	if (doc.body.createTextRange) {
		var range = document.body.createTextRange();
		range.moveToElementText(element);
		range.select();
	} else if (window.getSelection) {
		var selection = window.getSelection();
		var range = document.createRange();
		range.selectNodeContents(element);
		selection.removeAllRanges();
		selection.addRange(range);
	}
}
