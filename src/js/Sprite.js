class Sprite extends PIXI.Sprite {
	constructor(textures) {
		super(frames[0]);

		this._currentFrame = 0;
		this._textures = textures;
	}

	set frame(value) {

		if (value < 0 || value > this._textures.length)
		{
			throw new Error('Invalid frame number');
		}

		value = Math.round(value);
		this._currentFrame = value;
		this.texture = this._textures[this._currentFrame];
	}

	get frame() {
		return this._currentFrame;
	}

	get frames() {
		return this._textures.length;
	}

	static fromSpritesheetFolder({folder, frames, columns, rows, frameWidth, frameHeight}) {

		let textures = [];

		for(let frame = 0; frame < frames; frame += 1) {

			let baseTexture = PIXI.BaseTexture.fromImage(`${folder}/${frame}.jpg`);

			for (let column = 0; column < columns; column += 1) {
				for (let row = 0; row < rows; row += 1) {

					let textureFrame = new PIXI.Rectangle(column * frameWidth, row * frameHeight, frameWidth, frameHeight);
					let texture      = new PIXI.Texture(baseTexture, textureFrame);

					textures.push(texture);
				}
			}
		}

		return new Sprite(textures);
	}
}

export default Sprite;
