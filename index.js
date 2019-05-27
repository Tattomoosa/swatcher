import '/swatches.css'
import Pickr from '/node_modules/@simonwep/pickr/dist/pickr.min'
import tingle from './node_modules/tingle.js/dist/tingle'

const name = 'Swatch.in'

const white = '#cfcfcf'
const black = '#222222'
let defaultColor = '#2A9663'

const infoElement = document.querySelector('.info');
const backgroundStyle = document.body.style;
const titleStyle = document.querySelector('h1').style;
const infoStyle = infoElement.style;
const swatch = document.querySelector('#swatch');
const swatchImg = document.querySelector('#swatchimg');
const madeByStyle = document.querySelector('h6').style;
const canvasContainerStyle = document.querySelector('.canvas-container').style
let lastPaint = 0

let urlColors = getURLVars()
if (urlColors != "") defaultColor = urlColors[0]

const infoModal = new tingle.modal({
	closeMethods: ['overlay', 'button', 'escape'],
	closeLabel: 'Close',
})
infoModal.setContent(
	'<h1>About ' + name + '</h1>' +
	'<br/>' + 
	'<p>' +
	name +
	' is a tiny tool that helps you share color swatches by generating little thumbnail images.' +
	'</p>'
)
infoElement.onclick = () => infoModal.open()

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
	console.log(color)
	backgroundStyle.backgroundColor = color.toHEXA();
	let textColor = white
	if (color.v > 58.0)
		textColor = black
	titleStyle.color = textColor
	infoStyle.color = textColor
	infoStyle.borderColor = textColor
	madeByStyle.color = textColor
	canvasContainerStyle.backgroundColor = textColor
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
	swatchImg.src = c.canvas.toDataURL('image/png')
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

function getURLVars() {
	return new URL(window.location.href).pathname.split('/').slice(1)
}
