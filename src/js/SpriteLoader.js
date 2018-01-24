const SpriteLoader = function(data, callback) {

	const loader = new PIXI.loaders.Loader();

	for (let frame = 0; frame < data.frames; frame += 1) {
		loader.add(`${data.folder}/${frame}.jpg`);
	}

	loader.onComplete.add(callback);

	return loader;
};

export default SpriteLoader;
