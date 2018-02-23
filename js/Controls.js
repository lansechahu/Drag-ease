var Controls = function(__camera, __target,domElement) {
	this.speed = 1;
	this.domElement = (domElement !== undefined) ? domElement : document;

	var scope = this;
	var camera = __camera;
	var target = __target;
	var radius = Math.abs(camera.position.z - target.position.z);
	var angle = 0;

	this.init = function() {
		console.log(scope.domElement.width);
	}

	this.update = function(__delta) {
		//angle+=1*Math.PI/180;
		//camera.position.x = target.position.x + Math.cos(angle) * radius;
		//camera.position.y = target.position.y + Math.sin(angle) * radius;
		//camera.position.z = target.position.z + Math.sin(angle) * radius;
	}
};