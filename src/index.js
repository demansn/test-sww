import loadSprite from './js/SpriteLoader.js';
import Sprite     from './js/Sprite.js';
import Button     from './js/Button.js';

const gameCanvas = document.getElementById('game-canvas');
const app        = new PIXI.Application(800, 600, {backgroundColor:0x1099bb, view: gameCanvas});

const spriteData = {
	folder     : './assets/back/',
	frames     : 6,
	columns    : 6,
	rows       : 2,
	frameWidth : 144,
	frameHeight: 365
};

const initTest = function() {

	let back = Sprite.fromSpritesheetFolder(spriteData);
	back.position.set(400, 20);
	back.anchor.x = 0.5;
	app.stage.addChild(back);

	let tween = createSriteTween(back);

	let toggleButton = new Button('Play/Pause', () => tween.paused() ? tween.resume() : tween.pause() );
	toggleButton.position.set(410, 550);
	app.stage.addChild(toggleButton);

	let stopButton = new Button('start over', () => tween.progress(0) );
	stopButton.position.set(290, 550);
	app.stage.addChild(stopButton);
};

const createSriteTween = function(sprite) {
	return TweenMax.to(sprite, 1, {frame:sprite.frames - 1, ease:SteppedEase.config(sprite.frames), repeat: -1});
};

loadSprite(spriteData, initTest).load();
