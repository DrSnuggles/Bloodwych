/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
String.prototype.replaceAt = function(index, character) {
	return this.substr(0, index) + character + this.substr(index + character.length);
};
//Sets a hex value at a certain index
function setHexToBinaryPosition(s, index, length, to) {
	var bin = hex2bin(s);
	if (typeof to === "undefined" || to === '') {
		from = bin.substr(index, 1);
		to = '' + (1 - from);
	}
	to = hex2bin(to, length);
	to = to.substr(to.length - length);
	bin = bin.substr(0, index) + to + bin.substr(index + to.length);
	var ret = bin2hex(bin);
	return ret;
}
//Gets a hex value at a certain index, and a certain length
function getHexToBinaryPosition(s, index, length) {
	if (typeof length === 'undefined') {
		length = 1;
	}
	var bin = hex2bin(s);
	bin = bin.substr(index, length);
	var ret = bin2hex(bin);
	return ret;
}

function hex2bin(num, l) {
	if (typeof l === "undefined") l = 4;
	var ret = parseInt(num, 16).toString(2);
	var zeros = Array(Math.floor(num.length * l - ret.length) + 1).join('0');
	return zeros + ret;
}

function bin2hex(num, l) {
	if (typeof l === "undefined") l = 4;
	var ret = parseInt(num, 2).toString(16).toUpperCase();
	var zeros = Array(Math.floor(num.length / l - ret.length) + 1).join('0');
	return zeros + ret;
}

function hex2dec(num) {
	var ret = parseInt(num, 16).toString(10).toUpperCase();
	return ret;
}

function dec2hex(num) {
	var ret = parseInt(num, 10).toString(16).toUpperCase();
	return ret;
}

function convertBase(num) {
	this.from = function(baseFrom) {
		this.to = function(baseTo) {
			return parseInt(num, baseFrom).toString(baseTo);
		};
		return this;
	};
	return this;
}

function getArmourNotation(num) {
	var s = getSpellNotation(num);
	if (num >= 0) {
		s = "+" + s;
	} else {
		s = "-" + s;
	}
	return s;
}

function getSpellNotation(num) {
	var s = "0" + Math.abs(num);
	s = s.substr(s.length - 2);
	return s;
}

function seededRandom(seed) {
	max = 1.0;
	min = 0.0;
	seed = (seed * 9301 + 49297) % 233280;
	var rnd = seed / 233280.0;
	return min + rnd * (max - min);
}
/*
1  3  4  2  0

6  8  9  7  5

  11 12 10

  14 15 13

  17>18<16

     19
*/
//Given a specific position (0 - 19) relative to an x, y and d(irection), return the x and y coordinates
function posToCoordinates(pos, x, y, d) {
	var newx, newy;
	xy = getOffsetByRotation(d);
	switch (pos) {
		case 0:
			newy = y + (4 * xy.y) + (2 * xy.x);
			newx = x + (4 * xy.x) - (2 * xy.y);
			break; //-4 +2
		case 1:
			newy = y + (4 * xy.y) - (2 * xy.x);
			newx = x + (4 * xy.x) + (2 * xy.y);
			break; //-4 -2
		case 2:
			newy = y + (4 * xy.y) + (1 * xy.x);
			newx = x + (4 * xy.x) - (1 * xy.y);
			break; //-4 +1
		case 3:
			newy = y + (4 * xy.y) - (1 * xy.x);
			newx = x + (4 * xy.x) + (1 * xy.y);
			break; //-4 -1
		case 4:
			newy = y + (4 * xy.y) - (0 * xy.x);
			newx = x + (4 * xy.x) + (0 * xy.y);
			break; //-4 0
		case 5:
			newy = y + (3 * xy.y) + (2 * xy.x);
			newx = x + (3 * xy.x) - (2 * xy.y);
			break; //-3 +2
		case 6:
			newy = y + (3 * xy.y) - (2 * xy.x);
			newx = x + (3 * xy.x) + (2 * xy.y);
			break; //-3 -2
		case 7:
			newy = y + (3 * xy.y) + (1 * xy.x);
			newx = x + (3 * xy.x) - (1 * xy.y);
			break; //-3 +1
		case 8:
			newy = y + (3 * xy.y) - (1 * xy.x);
			newx = x + (3 * xy.x) + (1 * xy.y);
			break; //-3 -1
		case 9:
			newy = y + (3 * xy.y) - (0 * xy.x);
			newx = x + (3 * xy.x) - (0 * xy.y);
			break; //-3 0
		case 10:
			newy = y + (2 * xy.y) + (1 * xy.x);
			newx = x + (2 * xy.x) - (1 * xy.y);
			break; //-2 +1
		case 11:
			newy = y + (2 * xy.y) - (1 * xy.x);
			newx = x + (2 * xy.x) + (1 * xy.y);
			break; //-2 -1
		case 12:
			newy = y + (2 * xy.y) - (0 * xy.x);
			newx = x + (2 * xy.x) + (0 * xy.y);
			break; //-2 0
		case 13:
			newy = y + (1 * xy.y) + (1 * xy.x);
			newx = x + (1 * xy.x) - (1 * xy.y);
			break; //-1 +1
		case 14:
			newy = y + (1 * xy.y) - (1 * xy.x);
			newx = x + (1 * xy.x) + (1 * xy.y);
			break; //-1 -1
		case 15:
			newy = y + (1 * xy.y) - (0 * xy.x);
			newx = x + (1 * xy.x) + (0 * xy.y);
			break; //-1 0
		case 16:
			newy = y + (0 * xy.y) + (1 * xy.x);
			newx = x + (0 * xy.x) - (1 * xy.y);
			break; //0 +1
		case 17:
			newy = y + (0 * xy.y) - (1 * xy.x);
			newx = x + (0 * xy.x) + (1 * xy.y);
			break; //0 -1
		case 18:
			newy = y;
			newx = x;
			break; //0 0
		case 19:
			newy = y - (1 * xy.y) - (0 * xy.x);
			newx = x - (1 * xy.x) + (0 * xy.y);
			break; //-1 0
		default:
			break;
	}
	return {
		x: newx,
		y: newy
	};
}
//Given a specific xt and yt, relative to another x, y and d(irection), return the position
//Returns -1 when not in range of 0-19
function coordinatesToPos(xt, yt, x, y, d) {
	var pos = -1;
	xy = getOffsetByRotation(d);
	if (yt == y + (4 * xy.y) + (2 * xy.x) && xt == x + (4 * xy.x) - (2 * xy.y)) return 0; //-4 +2
	if (yt == y + (4 * xy.y) - (2 * xy.x) && xt == x + (4 * xy.x) + (2 * xy.y)) return 1; //-4 -2
	if (yt == y + (4 * xy.y) + (1 * xy.x) && xt == x + (4 * xy.x) - (1 * xy.y)) return 2; //-4 +1
	if (yt == y + (4 * xy.y) - (1 * xy.x) && xt == x + (4 * xy.x) + (1 * xy.y)) return 3; //-4 -1
	if (yt == y + (4 * xy.y) - (0 * xy.x) && xt == x + (4 * xy.x) + (0 * xy.y)) return 4; //-4 0
	if (yt == y + (3 * xy.y) + (2 * xy.x) && xt == x + (3 * xy.x) - (2 * xy.y)) return 5; //-3 +2
	if (yt == y + (3 * xy.y) - (2 * xy.x) && xt == x + (3 * xy.x) + (2 * xy.y)) return 6; //-3 -2
	if (yt == y + (3 * xy.y) + (1 * xy.x) && xt == x + (3 * xy.x) - (1 * xy.y)) return 7; //-3 +1
	if (yt == y + (3 * xy.y) - (1 * xy.x) && xt == x + (3 * xy.x) + (1 * xy.y)) return 8; //-3 -1
	if (yt == y + (3 * xy.y) - (0 * xy.x) && xt == x + (3 * xy.x) - (0 * xy.y)) return 9; //-3 0
	if (yt == y + (2 * xy.y) + (1 * xy.x) && xt == x + (2 * xy.x) - (1 * xy.y)) return 10; //-2 +1
	if (yt == y + (2 * xy.y) - (1 * xy.x) && xt == x + (2 * xy.x) + (1 * xy.y)) return 11; //-2 -1
	if (yt == y + (2 * xy.y) - (0 * xy.x) && xt == x + (2 * xy.x) + (0 * xy.y)) return 12; //-2 0
	if (yt == y + (1 * xy.y) + (1 * xy.x) && xt == x + (1 * xy.x) - (1 * xy.y)) return 13; //-1 +1
	if (yt == y + (1 * xy.y) - (1 * xy.x) && xt == x + (1 * xy.x) + (1 * xy.y)) return 14; //-1 -1
	if (yt == y + (1 * xy.y) - (0 * xy.x) && xt == x + (1 * xy.x) + (0 * xy.y)) return 15; //-1 0
	if (yt == y + (0 * xy.y) + (1 * xy.x) && xt == x + (0 * xy.x) - (1 * xy.y)) return 16; //0 +1
	if (yt == y + (0 * xy.y) - (1 * xy.x) && xt == x + (0 * xy.x) + (1 * xy.y)) return 17; //0 -1
	if (yt == y && xt == x) return 18; //0 0
	if (yt == y - (1 * xy.y) - (0 * xy.x) && xt == x - (1 * xy.x) + (0 * xy.y)) return 19; //-1 0
	return -1;
}

function getOffsetByRotation(r) {
	xo = 0, yo = 0;
	switch (r) {
		case 0:
			xo = 0;
			yo = -1;
			break;
		case 1:
			xo = 1;
			yo = 0;
			break;
		case 2:
			xo = 0;
			yo = 1;
			break;
		case 3:
			xo = -1;
			yo = 0;
			break;
		default:
			break;
	}
	return {
		x: xo,
		y: yo
	};
}

function decimalToHex(d) {
	var hex = Number(d).toString(16);
	hex = "".substr(0, 2 - hex.length) + hex;
	hex = hex.toUpperCase();
	if (hex.length === 1) {
		hex = "0" + hex;
	}
	return hex;
}

function PrintLog(myString, log) {
	if (debug) {
		if(typeof log === "undefined" || log) {
			console.log(getTimeStamp() + " Debug: " + myString);
		} else {
			console.log(myString);
		}
	}
}

function grabImageAt(image, startX, startY, width, height, flip, offsetX, offsetY) {
	//try {
	if (typeof offsetX === "undefined") {
		offsetX = 0;
	}
	if (typeof offsetY === "undefined") {
		offsetY = 0;
	}
	var can = document.createElement('canvas');
	can.width = width + offsetX;
	can.height = height + offsetY;
	var flipcontext = can.getContext("2d");
	if (flip) {
		flipcontext.translate(width, 0);
		flipcontext.scale(-1, 1);
		flipcontext.drawImage(image, startX, startY, width, height, -offsetX, 0, width, height);
	} else {
		flipcontext.scale(1, 1);
		flipcontext.drawImage(image, startX, startY, width, height, 0, 0, width, height);
	}
	//flipcontext.strokeStyle="red";
	//flipcontext.rect(0,0,can.width - 1,can.height - 1);
	//flipcontext.stroke();
	flipcontext.save();
	return can;
	//} catch (e) {
	//	PrintLog("grabImageAt Error: " + e.toString());
	//}
};

function flipImage(image) {
	var can = document.createElement('canvas');
	can.width = image.width;
	can.height = image.height;
	var flipcontext = can.getContext("2d");
	flipcontext.translate(image.width, 0);
	flipcontext.scale(-1, 1);
	flipcontext.drawImage(image, 0, 0, image.width, image.height);
	flipcontext.save();
	return can;
};

function flipImageVert(image) {
	var can = document.createElement('canvas');
	can.width = image.width;
	can.height = image.height;
	var flipcontext = can.getContext("2d");
	//flipcontext.translate(image.width, 0);
	flipcontext.scale(1, -1);
	flipcontext.drawImage(image, 0, (image.height * -1), image.width, image.height);
	flipcontext.save();
	return can;
};
String.prototype.contains = function(it) {
	return this.indexOf(it) !== -1;
};

function swapElement(array, indexA, indexB) {
	var tmp = array[indexA];
	array[indexA] = array[indexB];
	array[indexB] = tmp;
}

function mathSign(n) {
	return n ? n < 0 ? -1 : 1 : 0;
}

function doubleDigits(v) {
	if (v < 10) {
		return "0" + v.toString();
	} else {
		return v.toString();
	}
}

function isCyclic(obj) {
	var seenObjects = [];

	function detect(obj) {
		if (typeof obj === 'object') {
			if (seenObjects.indexOf(obj) !== -1) {
				return true;
			}
			seenObjects.push(obj);
			for (var key in obj) {
				if (obj.hasOwnProperty(key) && detect(obj[key])) {
					PrintLog(obj, 'cycle at ' + key);
					return true;
				}
			}
		}
		return false;
	}
	return detect(obj);
}

function dropClasses(o) {
	for (var p in o) {
		if (o[p] instanceof jQuery || o[p] instanceof HTMLElement) {
			o[p] = null;
		} else if (typeof o[p] === 'object') dropClasses(o[p]);
	}
	return o;
};

function hexToRgb(hex) {
	// Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
	var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
	hex = hex.replace(shorthandRegex, function(m, r, g, b) {
		return r + r + g + g + b + b;
	});
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result ? {
		r: parseInt(result[1], 16),
		g: parseInt(result[2], 16),
		b: parseInt(result[3], 16)
	} : null;
}

function getObjectByKey(obj, key, val) {
	var ret = [];
	for(var i in obj) {
		if (obj.hasOwnProperty(i)) {
			if (i == key && (typeof val === "undefined" || obj[key] == val)) {
				ret.push(obj[i]);
			} else if (typeof obj[i] === 'object') {
				ret = ret.concat(getObjectByKey(obj[i], key, val));
			}
		}
	}
	return ret;
}

function getObjectRootByKey(obj, key, val) {
	var ret = [];
	for(var i in obj) {
		if (obj.hasOwnProperty(i)) {
			if (i == key && (typeof val === "undefined" || obj[key] == val)) {
				ret.push(obj);
			} else if (typeof obj[i] === 'object') {
				ret = ret.concat(getObjectRootByKey(obj[i], key, val));
			}
		}
	}
	return ret;
}

function getObjectByKeys(obj1, key1, key2, key3) {
	if(typeof obj1 !== "undefined") {
		var obj2 = getObjectByKey(obj1, key1)[0];
		if(typeof obj2 !== "undefined" && typeof key2 !== "undefined") {
			var obj3 = getObjectByKey(obj2, key2)[0];
			if(typeof obj3 !== "undefined" && typeof key3 !== "undefined") {
				return getObjectByKey(obj3, key3)[0];
			}
			return obj3;
		}
		return obj2;
	}
	return undefined;
}

String.prototype.getVar = function() {
	if(typeof this !== "undefined") {
		eval('var t = ' + this);
		return t;
	}
	return undefined;
}

function getVarArray(arr) {
	if(typeof arr !== "undefined") {
		return arr.map(function(x) {
	        return x.getVar();
	    });
	}
	return undefined;
}

function clone(o) {
	//var j = $.extend(true, {}, o);
	var j = Object.assign({}, o);
	return j;
}

//
// DrSnuggles added
//

// will move and/or structure later
var DrS = {
	useZIP: true,
	startTime: new Date(),
};
DrS.mouse = [{x:0,y:0}, {x:0,y:0}]; // player0 and player1
DrS.get = function(url, type, cb) {
	if (DrS.useZIP) {
		var tmp;

		// get path = gametype from url
		if (url.indexOf('data/BW/') !== -1) {
			tmp = DrS.BW[ url.substr(8) ];
		}
		if (url.indexOf('data/EXT/') !== -1) {
			tmp = DrS.EXT[ url.substr(9) ];
		}
		if (url.indexOf('data/BOS/') !== -1) {
			tmp = DrS.BOS[ url.substr(9) ];
		}

		// not found
		if (typeof tmp === 'undefined') {
			console.log('Resource '+ url +' not found');
			return;
		}

		// return types
		if (type === 'str') {
			tmp = DrS.u8ToRaw(tmp);
		}
		if (type === 'json') {
			tmp = JSON.parse( DrS.u8ToRaw(tmp) );
		}
		if (type === 'img') {
			var t = String.fromCharCode.apply(null, tmp); // string
			t = btoa(t); // base64
			tmp = new Image();
			tmp.src = 'data:image/png;base64,'+ t;
			if (cb) {
				tmp.onload = function(){
					cb( tmp );
				};
			}
		}
		if (type === 'aud') {
			var t = DrS.u8ToRaw(tmp); // other method (see above) blows stack
			t = btoa(t); // base64
			tmp = new Audio();
			tmp.src = 'data:audio/wav;base64,'+ t;
			if (cb) {
				tmp.onload = function(){
					cb( tmp );
				};
			}
		}

		// callback or return
		if (cb) {
			if (type !== 'img') cb( tmp );
		} else {
			return tmp;
		}

	} else {
		xhr(url, cb, type);
	}
};
DrS.xhr = function(url, cb, type) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	xhr.responseType = type;
	xhr.onload = function() {
		if (cb) {
			if (type === 'arraybuffer') {
				cb(xhr.response);
			} else {
				cb(xhr.responseText);
			}
		}
	}
	xhr.onerror = function() {
		console.error('XHR load error');
	};
	xhr.send(null);
};
DrS.loadZIP = function(zip, cb) {
	//loadingScreen();
	DrS.xhr('./data/'+ zip +'.zip', function(zdat){
		DrS[zip] = UZIP.parse(zdat);
		if (cb) cb();
	}, 'arraybuffer');
};
DrS.u8ToRaw = function(arr) {
  var ret = [];
  for (var i = 0; i < arr.length; i++) {
    ret.push( String.fromCharCode( arr[i] ) );
  }
  return ret.join("");
}
DrS.download = function(content, fileName, mimeType) {
	var a = document.createElement('a');
	mimeType = mimeType || 'application/octet-stream';
	if (navigator.msSaveBlob) { // IE10
		navigator.msSaveBlob(new Blob([content], {
			type: mimeType
		}), fileName);
	} else if (URL && 'download' in a) { //html5 A[download]
		a.href = URL.createObjectURL(new Blob([content], {
			type: mimeType
		}));
		a.setAttribute('download', fileName);
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	} else {
		location.href = 'data:application/octet-stream,' + encodeURIComponent(content); // only this mime type is supported
	}
};

//
// Init
//
(function(){
	// i preload std BW
	DrS.loadZIP('BW', function(){
		// fade out loading screen
		var toWait = 2000 - (new Date() - DrS.startTime);
		toWait = Math.max(toWait, 0);
		setTimeout(function(){
			scrLoader.classList.add("fadeOut");
			setTimeout(function(){
				document.body.removeChild(scrLoader);
			},1000);
		}, toWait);
	});
})();
