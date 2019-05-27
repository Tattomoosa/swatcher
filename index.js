import '/swatches.css'
import Pickr from '/node_modules/@simonwep/pickr/dist/pickr.min'
import tingle from './node_modules/tingle.js/dist/tingle'
import clipboard from './node_modules/clipboard/dist/clipboard.min'

const name = 'Swatch.in'

const white = '#cfcfcf'
const black = '#222222'
let defaultColor = '#2A9663'

const uiColorPivotValue = 58.0
const infoElement = document.querySelector('.info');
const backgroundStyle = document.body.style;
const titleStyle = document.querySelector('h1').style;
const infoStyle = infoElement.style;
const swatch = document.querySelector('#swatch');
const containerStyle = document.querySelector('.container').style
const swatchImg = document.querySelector('#swatchimg');
const canvasContainerStyle = document.querySelector('.canvas-container').style
const textFields = document.querySelectorAll('h6');
let buttons = document.querySelectorAll('input[type="button"]')
let lastPaint = 0

let urlColors = getURLVars()
if (urlColors != "") defaultColor = urlColors[0]

const infoModal = new tingle.modal({
	closeMethods: ['overlay', 'button', 'escape'],
	closeLabel: 'Close',
})

console.log(clipboard)
console.log(clipboard.isSupported())
let clip = new clipboard('.copy')
clip.on('success', (e) => {
	console.log("SUCCESS")
	console.info('Action: ', e.action)
	console.info('Text: ', e.text)
	console.info('Trigger: ', e.trigger)
	e.clearSelection()
})
clip.on('error', () => console.log("failure"))

const infoTextElement = document.querySelector('.info-text')
const infoText = infoTextElement.innerHTML
infoTextElement.parentNode.removeChild(infoTextElement)

infoModal.setContent(infoText)
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
	buttons = document.querySelectorAll('input[type="button"]')
	let color = args[0]._color
	updateUi(color)
}).on('change', (...args) => {
	let color = args[1]._color
	updateUi(color)
})

function updateUi(color) {
	backgroundStyle.backgroundColor = color.toHEXA();
	let textColor = white
	let altColor = black
	if (color.v > uiColorPivotValue) {
		textColor = black
		altColor = white
	}
	titleStyle.color = color.toHEXA();
	titleStyle['-webkit-text-stroke'] = '1px ' + textColor
	titleStyle['text-stroke'] = '1px ' + textColor
	infoStyle.color = textColor
	infoStyle.borderColor = textColor
	for (let i = 0; i < textFields.length; ++i)
		textFields[i].style.color = textColor
	canvasContainerStyle.backgroundColor = textColor
	containerStyle.borderColor = textColor
	window.cancelAnimationFrame(lastPaint)
	lastPaint = window.requestAnimationFrame(() => updateSwatch(color))

	for (let i = 0; i < buttons.length; ++i) {
		let button = buttons[i]
		if (!button.classList.contains('active'))
			button.style.background = 'transparent'
		else
			button.style.background = altColor
		button.style.color = textColor
		button.style.borderColor = textColor
	}
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
	c.fillStyle = color.v < uiColorPivotValue ? white : black;
	c.fillText(color.toHEXA(), 10, height - 10);
	swatchImg.src = c.canvas.toDataURL('image/png')
	swatchImg.setAttribute('download', color.toHEXA() + '.png')
	swatchImg.setAttribute('title', color.toHEXA() + '.png')
	swatchImg.setAttribute('alt', color.toHEXA() + '.png')
	// swatchImg['data-clipboard-text'] = c.canvas.toDataURL('image/png')
	// swatchImg.setAttribute('data-clipboard-text', color.toHEXA())
	// swatchImg.value = color.toHEXA()
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
