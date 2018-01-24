const textStyle = {
	fontSize: 15,
	fill    : 'white',
	align   : 'center'
};

class Button extends PIXI.Container {
	constructor(text, onClickCallback) {

		super();

		this.interactive = true;
		this._graphics = this.addChild( new PIXI.Graphics() );

		this._graphics.beginFill(0x0000ff);
		this._graphics.lineStyle(2, 0x000000, 1);
		this._graphics.drawRect(0, 0, 100, 30);
		this._graphics.endFill();

		this._text = this.addChild( new PIXI.Text(text, textStyle) );
		this._text.position.set(50, 15);
		this._text.anchor.set(0.5);

		this.click = onClickCallback;
	}
}

export default Button;
