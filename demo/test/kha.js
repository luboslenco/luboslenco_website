(function (console, $hx_exports) { "use strict";
$hx_exports.kha = $hx_exports.kha || {};
$hx_exports.kha.input = $hx_exports.kha.input || {};
var $hxClasses = {},$estr = function() { return js_Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var EReg = function(r,opt) {
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
};
$hxClasses["EReg"] = EReg;
EReg.__name__ = ["EReg"];
EReg.prototype = {
	r: null
	,match: function(s) {
		if(this.r.global) this.r.lastIndex = 0;
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	}
	,matched: function(n) {
		if(this.r.m != null && n >= 0 && n < this.r.m.length) return this.r.m[n]; else throw new js__$Boot_HaxeError("EReg::matched");
	}
	,__class__: EReg
};
var HxOverrides = function() { };
$hxClasses["HxOverrides"] = HxOverrides;
HxOverrides.__name__ = ["HxOverrides"];
HxOverrides.strDate = function(s) {
	var _g = s.length;
	switch(_g) {
	case 8:
		var k = s.split(":");
		var d = new Date();
		d.setTime(0);
		d.setUTCHours(k[0]);
		d.setUTCMinutes(k[1]);
		d.setUTCSeconds(k[2]);
		return d;
	case 10:
		var k1 = s.split("-");
		return new Date(k1[0],k1[1] - 1,k1[2],0,0,0);
	case 19:
		var k2 = s.split(" ");
		var y = k2[0].split("-");
		var t = k2[1].split(":");
		return new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
	default:
		throw new js__$Boot_HaxeError("Invalid date format : " + s);
	}
};
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
};
HxOverrides.substr = function(s,pos,len) {
	if(pos != null && pos != 0 && len != null && len < 0) return "";
	if(len == null) len = s.length;
	if(pos < 0) {
		pos = s.length + pos;
		if(pos < 0) pos = 0;
	} else if(len < 0) len = s.length + len - pos;
	return s.substr(pos,len);
};
HxOverrides.indexOf = function(a,obj,i) {
	var len = a.length;
	if(i < 0) {
		i += len;
		if(i < 0) i = 0;
	}
	while(i < len) {
		if(a[i] === obj) return i;
		i++;
	}
	return -1;
};
HxOverrides.remove = function(a,obj) {
	var i = HxOverrides.indexOf(a,obj,0);
	if(i == -1) return false;
	a.splice(i,1);
	return true;
};
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
};
var Lambda = function() { };
$hxClasses["Lambda"] = Lambda;
Lambda.__name__ = ["Lambda"];
Lambda.array = function(it) {
	var a = [];
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var i = $it0.next();
		a.push(i);
	}
	return a;
};
Lambda.has = function(it,elt) {
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(x == elt) return true;
	}
	return false;
};
var List = function() {
	this.length = 0;
};
$hxClasses["List"] = List;
List.__name__ = ["List"];
List.prototype = {
	h: null
	,q: null
	,length: null
	,add: function(item) {
		var x = [item];
		if(this.h == null) this.h = x; else this.q[1] = x;
		this.q = x;
		this.length++;
	}
	,remove: function(v) {
		var prev = null;
		var l = this.h;
		while(l != null) {
			if(l[0] == v) {
				if(prev == null) this.h = l[1]; else prev[1] = l[1];
				if(this.q == l) this.q = prev;
				this.length--;
				return true;
			}
			prev = l;
			l = l[1];
		}
		return false;
	}
	,iterator: function() {
		return new _$List_ListIterator(this.h);
	}
	,__class__: List
};
var _$List_ListIterator = function(head) {
	this.head = head;
	this.val = null;
};
$hxClasses["_List.ListIterator"] = _$List_ListIterator;
_$List_ListIterator.__name__ = ["_List","ListIterator"];
_$List_ListIterator.prototype = {
	head: null
	,val: null
	,hasNext: function() {
		return this.head != null;
	}
	,next: function() {
		this.val = this.head[0];
		this.head = this.head[1];
		return this.val;
	}
	,__class__: _$List_ListIterator
};
var Main = function() { };
$hxClasses["Main"] = Main;
Main.__name__ = ["Main"];
Main.main = function() {
	
			function loadScript(url, callback) {
				var head = document.getElementsByTagName('head')[0];
				var script = document.createElement('script');
				script.type = 'text/javascript';
				script.src = url;
				script.onreadystatechange = callback;
				script.onload = callback;
				head.appendChild(script);
			}
		;
	loadScript("ammo.js",Main.start);
};
Main.start = function() {
	kha_System.init({ title : "cycles_game", width : 1136, height : 640, samplesPerPixel : 1},function() {
		new lue_App(cycles_Root);
	});
};
Math.__name__ = ["Math"];
var Reflect = function() { };
$hxClasses["Reflect"] = Reflect;
Reflect.__name__ = ["Reflect"];
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( e ) {
		if (e instanceof js__$Boot_HaxeError) e = e.val;
		return null;
	}
};
Reflect.setField = function(o,field,value) {
	o[field] = value;
};
Reflect.getProperty = function(o,field) {
	var tmp;
	if(o == null) return null; else if(o.__properties__ && (tmp = o.__properties__["get_" + field])) return o[tmp](); else return o[field];
};
Reflect.setProperty = function(o,field,value) {
	var tmp;
	if(o.__properties__ && (tmp = o.__properties__["set_" + field])) o[tmp](value); else o[field] = value;
};
Reflect.callMethod = function(o,func,args) {
	return func.apply(o,args);
};
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) a.push(f);
		}
	}
	return a;
};
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && !(f.__name__ || f.__ename__);
};
Reflect.deleteField = function(o,field) {
	if(!Object.prototype.hasOwnProperty.call(o,field)) return false;
	delete(o[field]);
	return true;
};
var Std = function() { };
$hxClasses["Std"] = Std;
Std.__name__ = ["Std"];
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
Std["int"] = function(x) {
	return x | 0;
};
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
};
Std.parseFloat = function(x) {
	return parseFloat(x);
};
Std.random = function(x) {
	if(x <= 0) return 0; else return Math.floor(Math.random() * x);
};
var StringBuf = function() {
	this.b = "";
};
$hxClasses["StringBuf"] = StringBuf;
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype = {
	b: null
	,add: function(x) {
		this.b += Std.string(x);
	}
	,__class__: StringBuf
};
var StringTools = function() { };
$hxClasses["StringTools"] = StringTools;
StringTools.__name__ = ["StringTools"];
StringTools.endsWith = function(s,end) {
	var elen = end.length;
	var slen = s.length;
	return slen >= elen && HxOverrides.substr(s,slen - elen,elen) == end;
};
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
};
StringTools.fastCodeAt = function(s,index) {
	return s.charCodeAt(index);
};
var ValueType = $hxClasses["ValueType"] = { __ename__ : ["ValueType"], __constructs__ : ["TNull","TInt","TFloat","TBool","TObject","TFunction","TClass","TEnum","TUnknown"] };
ValueType.TNull = ["TNull",0];
ValueType.TNull.toString = $estr;
ValueType.TNull.__enum__ = ValueType;
ValueType.TInt = ["TInt",1];
ValueType.TInt.toString = $estr;
ValueType.TInt.__enum__ = ValueType;
ValueType.TFloat = ["TFloat",2];
ValueType.TFloat.toString = $estr;
ValueType.TFloat.__enum__ = ValueType;
ValueType.TBool = ["TBool",3];
ValueType.TBool.toString = $estr;
ValueType.TBool.__enum__ = ValueType;
ValueType.TObject = ["TObject",4];
ValueType.TObject.toString = $estr;
ValueType.TObject.__enum__ = ValueType;
ValueType.TFunction = ["TFunction",5];
ValueType.TFunction.toString = $estr;
ValueType.TFunction.__enum__ = ValueType;
ValueType.TClass = function(c) { var $x = ["TClass",6,c]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; };
ValueType.TEnum = function(e) { var $x = ["TEnum",7,e]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; };
ValueType.TUnknown = ["TUnknown",8];
ValueType.TUnknown.toString = $estr;
ValueType.TUnknown.__enum__ = ValueType;
var Type = function() { };
$hxClasses["Type"] = Type;
Type.__name__ = ["Type"];
Type.getClassName = function(c) {
	var a = c.__name__;
	if(a == null) return null;
	return a.join(".");
};
Type.getEnumName = function(e) {
	var a = e.__ename__;
	return a.join(".");
};
Type.resolveClass = function(name) {
	var cl = $hxClasses[name];
	if(cl == null || !cl.__name__) return null;
	return cl;
};
Type.resolveEnum = function(name) {
	var e = $hxClasses[name];
	if(e == null || !e.__ename__) return null;
	return e;
};
Type.createInstance = function(cl,args) {
	var _g = args.length;
	switch(_g) {
	case 0:
		return new cl();
	case 1:
		return new cl(args[0]);
	case 2:
		return new cl(args[0],args[1]);
	case 3:
		return new cl(args[0],args[1],args[2]);
	case 4:
		return new cl(args[0],args[1],args[2],args[3]);
	case 5:
		return new cl(args[0],args[1],args[2],args[3],args[4]);
	case 6:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5]);
	case 7:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);
	case 8:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
	default:
		throw new js__$Boot_HaxeError("Too many arguments");
	}
	return null;
};
Type.createEmptyInstance = function(cl) {
	function empty() {}; empty.prototype = cl.prototype;
	return new empty();
};
Type.createEnum = function(e,constr,params) {
	var f = Reflect.field(e,constr);
	if(f == null) throw new js__$Boot_HaxeError("No such constructor " + constr);
	if(Reflect.isFunction(f)) {
		if(params == null) throw new js__$Boot_HaxeError("Constructor " + constr + " need parameters");
		return Reflect.callMethod(e,f,params);
	}
	if(params != null && params.length != 0) throw new js__$Boot_HaxeError("Constructor " + constr + " does not need parameters");
	return f;
};
Type.createEnumIndex = function(e,index,params) {
	var c = e.__constructs__[index];
	if(c == null) throw new js__$Boot_HaxeError(index + " is not a valid enum constructor index");
	return Type.createEnum(e,c,params);
};
Type.getInstanceFields = function(c) {
	var a = [];
	for(var i in c.prototype) a.push(i);
	HxOverrides.remove(a,"__class__");
	HxOverrides.remove(a,"__properties__");
	return a;
};
Type.getEnumConstructs = function(e) {
	var a = e.__constructs__;
	return a.slice();
};
Type["typeof"] = function(v) {
	var _g = typeof(v);
	switch(_g) {
	case "boolean":
		return ValueType.TBool;
	case "string":
		return ValueType.TClass(String);
	case "number":
		if(Math.ceil(v) == v % 2147483648.0) return ValueType.TInt;
		return ValueType.TFloat;
	case "object":
		if(v == null) return ValueType.TNull;
		var e = v.__enum__;
		if(e != null) return ValueType.TEnum(e);
		var c = js_Boot.getClass(v);
		if(c != null) return ValueType.TClass(c);
		return ValueType.TObject;
	case "function":
		if(v.__name__ || v.__ename__) return ValueType.TObject;
		return ValueType.TFunction;
	case "undefined":
		return ValueType.TNull;
	default:
		return ValueType.TUnknown;
	}
};
var _$UInt_UInt_$Impl_$ = {};
$hxClasses["_UInt.UInt_Impl_"] = _$UInt_UInt_$Impl_$;
_$UInt_UInt_$Impl_$.__name__ = ["_UInt","UInt_Impl_"];
_$UInt_UInt_$Impl_$.gt = function(a,b) {
	var aNeg = a < 0;
	var bNeg = b < 0;
	if(aNeg != bNeg) return aNeg; else return a > b;
};
_$UInt_UInt_$Impl_$.gte = function(a,b) {
	var aNeg = a < 0;
	var bNeg = b < 0;
	if(aNeg != bNeg) return aNeg; else return a >= b;
};
_$UInt_UInt_$Impl_$.toFloat = function(this1) {
	var $int = this1;
	if($int < 0) return 4294967296.0 + $int; else return $int + 0.0;
};
var cycles_Root = function() {
	var sceneNode = lue_Eg.addScene("Scene");
	this.cam = lue_node_RootNode.cameras[0];
	cycles_Root.physics = new cycles_trait_PhysicsWorld();
	lue_Eg.addNodeTrait(sceneNode,cycles_Root.physics);
	lue_App.requestRender($bind(this,this.render));
};
$hxClasses["cycles.Root"] = cycles_Root;
cycles_Root.__name__ = ["cycles","Root"];
cycles_Root.prototype = {
	cam: null
	,render: function(g) {
		lue_Eg.render(g,this.cam);
	}
	,__class__: cycles_Root
};
var cycles_node_Node = function() {
	this.inputs = [];
	this.parents = [];
};
$hxClasses["cycles.node.Node"] = cycles_node_Node;
cycles_node_Node.__name__ = ["cycles","node","Node"];
cycles_node_Node.prototype = {
	executor: null
	,parents: null
	,inputs: null
	,start: function(executor,parent) {
		this.executor = executor;
		if(parent != null) this.parents.push(parent);
		var _g = 0;
		var _g1 = this.inputs;
		while(_g < _g1.length) {
			var inp = _g1[_g];
			++_g;
			inp.start(executor,this);
		}
		this.inputChanged();
	}
	,inputChanged: function() {
		var _g = 0;
		var _g1 = this.parents;
		while(_g < _g1.length) {
			var p = _g1[_g];
			++_g;
			p.inputChanged();
		}
	}
	,__class__: cycles_node_Node
};
var cycles_node_BoolNode = function() {
	cycles_node_Node.call(this);
};
$hxClasses["cycles.node.BoolNode"] = cycles_node_BoolNode;
cycles_node_BoolNode.__name__ = ["cycles","node","BoolNode"];
cycles_node_BoolNode.create = function(_b) {
	var n = new cycles_node_BoolNode();
	n.b = _b;
	return n;
};
cycles_node_BoolNode.__super__ = cycles_node_Node;
cycles_node_BoolNode.prototype = $extend(cycles_node_Node.prototype,{
	b: null
	,__class__: cycles_node_BoolNode
});
var cycles_node_FloatNode = function() {
	cycles_node_Node.call(this);
};
$hxClasses["cycles.node.FloatNode"] = cycles_node_FloatNode;
cycles_node_FloatNode.__name__ = ["cycles","node","FloatNode"];
cycles_node_FloatNode.create = function(_f) {
	var n = new cycles_node_FloatNode();
	n.f = _f;
	return n;
};
cycles_node_FloatNode.__super__ = cycles_node_Node;
cycles_node_FloatNode.prototype = $extend(cycles_node_Node.prototype,{
	f: null
	,__class__: cycles_node_FloatNode
});
var cycles_node_TimeNode = function() {
	cycles_node_FloatNode.call(this);
};
$hxClasses["cycles.node.TimeNode"] = cycles_node_TimeNode;
cycles_node_TimeNode.__name__ = ["cycles","node","TimeNode"];
cycles_node_TimeNode.create = function(startTime,stopTime,enabled,loop,reflect) {
	var n = new cycles_node_TimeNode();
	n.inputs.push(cycles_node_FloatNode.create(startTime));
	n.inputs.push(cycles_node_FloatNode.create(stopTime));
	n.inputs.push(cycles_node_BoolNode.create(enabled));
	n.inputs.push(cycles_node_BoolNode.create(loop));
	n.inputs.push(cycles_node_BoolNode.create(reflect));
	return n;
};
cycles_node_TimeNode.__super__ = cycles_node_FloatNode;
cycles_node_TimeNode.prototype = $extend(cycles_node_FloatNode.prototype,{
	start: function(executor,parent) {
		cycles_node_FloatNode.prototype.start.call(this,executor,parent);
		this.f = this.inputs[0].f;
		executor.registerUpdate($bind(this,this.update));
	}
	,update: function() {
		if(this.inputs[3].b) {
			this.f += lue_sys_Time.delta * this.inputs[2].f;
			if(this.inputs[1].f > 0) {
				if(this.inputs[2].f > 0 && this.f >= this.inputs[1].f || this.inputs[2].f < 0 && this.f <= this.inputs[0].f) {
					if(this.inputs[4].b) {
						if(this.inputs[5].b) {
							if(this.inputs[2].f > 0) this.f = this.inputs[1].f; else this.f = this.inputs[0].f;
							this.inputs[2].f *= -1;
						} else this.f = this.inputs[0].f;
					} else {
						this.f = this.inputs[1].f;
						this.inputs[3].b = false;
					}
				}
			}
			this.inputChanged();
		}
	}
	,__class__: cycles_node_TimeNode
});
var kha_math_FastMatrix4 = function(_00,_10,_20,_30,_01,_11,_21,_31,_02,_12,_22,_32,_03,_13,_23,_33) {
	this._00 = _00;
	this._10 = _10;
	this._20 = _20;
	this._30 = _30;
	this._01 = _01;
	this._11 = _11;
	this._21 = _21;
	this._31 = _31;
	this._02 = _02;
	this._12 = _12;
	this._22 = _22;
	this._32 = _32;
	this._03 = _03;
	this._13 = _13;
	this._23 = _23;
	this._33 = _33;
};
$hxClasses["kha.math.FastMatrix4"] = kha_math_FastMatrix4;
kha_math_FastMatrix4.__name__ = ["kha","math","FastMatrix4"];
kha_math_FastMatrix4.fromMatrix4 = function(m) {
	return new kha_math_FastMatrix4(m._00,m._10,m._20,m._30,m._01,m._11,m._21,m._31,m._02,m._12,m._22,m._32,m._03,m._13,m._23,m._33);
};
kha_math_FastMatrix4.orthogonalProjection = function(left,right,bottom,top,zn,zf) {
	var tx = -(right + left) / (right - left);
	var ty = -(top + bottom) / (top - bottom);
	var tz = -(zf + zn) / (zf - zn);
	return new kha_math_FastMatrix4(2 / (right - left),0,0,tx,0,2 / (top - bottom),0,ty,0,0,-2 / (zf - zn),tz,0,0,0,1);
};
kha_math_FastMatrix4.perspectiveProjection = function(fovY,aspect,zn,zf) {
	var uh = 1.0 / Math.tan(fovY / 2 * (Math.PI / 180));
	var uw = uh / aspect;
	return new kha_math_FastMatrix4(uw,0,0,0,0,uh,0,0,0,0,(zf + zn) / (zn - zf),2 * zf * zn / (zn - zf),0,0,-1,0);
};
kha_math_FastMatrix4.lookAt = function(eye,at,up) {
	var zaxis = new kha_math_FastVector3(at.x - eye.x,at.y - eye.y,at.z - eye.z);
	zaxis.set_length(1);
	var xaxis;
	var _x1 = zaxis.y * up.z - zaxis.z * up.y;
	var _y1 = zaxis.z * up.x - zaxis.x * up.z;
	var _z1 = zaxis.x * up.y - zaxis.y * up.x;
	xaxis = new kha_math_FastVector3(_x1,_y1,_z1);
	xaxis.set_length(1);
	var _x = xaxis.y * zaxis.z - xaxis.z * zaxis.y;
	var _y = xaxis.z * zaxis.x - xaxis.x * zaxis.z;
	var _z = xaxis.x * zaxis.y - xaxis.y * zaxis.x;
	var yaxis_x = _x;
	var yaxis_y = _y;
	var yaxis_z = _z;
	return new kha_math_FastMatrix4(xaxis.x,xaxis.y,xaxis.z,-(xaxis.x * eye.x + xaxis.y * eye.y + xaxis.z * eye.z),yaxis_x,yaxis_y,yaxis_z,-(yaxis_x * eye.x + yaxis_y * eye.y + yaxis_z * eye.z),-zaxis.x,-zaxis.y,-zaxis.z,zaxis.x * eye.x + zaxis.y * eye.y + zaxis.z * eye.z,0,0,0,1);
};
kha_math_FastMatrix4.prototype = {
	_00: null
	,_10: null
	,_20: null
	,_30: null
	,_01: null
	,_11: null
	,_21: null
	,_31: null
	,_02: null
	,_12: null
	,_22: null
	,_32: null
	,_03: null
	,_13: null
	,_23: null
	,_33: null
	,__class__: kha_math_FastMatrix4
};
var lue_math_Mat4 = function(_00,_10,_20,_30,_01,_11,_21,_31,_02,_12,_22,_32,_03,_13,_23,_33) {
	kha_math_FastMatrix4.call(this,_00,_10,_20,_30,_01,_11,_21,_31,_02,_12,_22,_32,_03,_13,_23,_33);
};
$hxClasses["lue.math.Mat4"] = lue_math_Mat4;
lue_math_Mat4.__name__ = ["lue","math","Mat4"];
lue_math_Mat4.identity = function() {
	return new lue_math_Mat4(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);
};
lue_math_Mat4.fromArray = function(a) {
	return new lue_math_Mat4(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13],a[14],a[15]);
};
lue_math_Mat4.perspective = function(fovY,aspectRatio,zNear,zFar) {
	var f = 1.0 / Math.tan(fovY / 2);
	var t = 1.0 / (zNear - zFar);
	return new lue_math_Mat4(f / aspectRatio,0.0,0.0,0.0,0.0,f,0.0,0.0,0.0,0.0,(zFar + zNear) * t,2 * zFar * zNear * t,0.0,0.0,-1.0,0.0);
};
lue_math_Mat4.orthogonal = function(left,right,bottom,top,near,far,orthoScale) {
	if(orthoScale == null) orthoScale = 7.314;
	var w = right - left;
	var h = top - bottom;
	var p = far - near;
	var x = (right + left) / w;
	var y = (top + bottom) / h;
	var z = (far + near) / p;
	return new lue_math_Mat4(orthoScale / w,0,0,-x,0,orthoScale / h,0,-y,0,0,-orthoScale / p,-z,0,0,0,1);
};
lue_math_Mat4.lookAt = function(_eye,_centre,_up) {
	var eye = _eye;
	var centre = _centre;
	var up = _up;
	var e0 = eye.x;
	var e1 = eye.y;
	var e2 = eye.z;
	var u0;
	if(up == null) u0 = 0; else u0 = up.x;
	var u1;
	if(up == null) u1 = 1; else u1 = up.y;
	var u2;
	if(up == null) u2 = 0; else u2 = up.z;
	var f0 = centre.x - e0;
	var f1 = centre.y - e1;
	var f2 = centre.z - e2;
	var n = 1 / Math.sqrt(f0 * f0 + f1 * f1 + f2 * f2);
	f0 *= n;
	f1 *= n;
	f2 *= n;
	var s0 = f1 * u2 - f2 * u1;
	var s1 = f2 * u0 - f0 * u2;
	var s2 = f0 * u1 - f1 * u0;
	n = 1 / Math.sqrt(s0 * s0 + s1 * s1 + s2 * s2);
	s0 *= n;
	s1 *= n;
	s2 *= n;
	u0 = s1 * f2 - s2 * f1;
	u1 = s2 * f0 - s0 * f2;
	u2 = s0 * f1 - s1 * f0;
	var d0 = -e0 * s0 - e1 * s1 - e2 * s2;
	var d1 = -e0 * u0 - e1 * u1 - e2 * u2;
	var d2 = e0 * f0 + e1 * f1 + e2 * f2;
	return new lue_math_Mat4(s0,s1,s2,d0,u0,u1,u2,d1,-f0,-f1,-f2,d2,0.0,0.0,0.0,1.0);
};
lue_math_Mat4.__super__ = kha_math_FastMatrix4;
lue_math_Mat4.prototype = $extend(kha_math_FastMatrix4.prototype,{
	compose: function(position,quaternion,sc) {
		this.makeRotationFromQuaternion(quaternion);
		this.scale(sc);
		this.setPosition(position);
		return this;
	}
	,decompose: function(position,quaternion,scale) {
		var vector = new lue_math_Vec4(0,0,0,0);
		var matrix = lue_math_Mat4.identity();
		var sx = vector.set(this._00,this._01,this._02).length();
		var sy = vector.set(this._10,this._11,this._12).length();
		var sz = vector.set(this._20,this._21,this._22).length();
		var det;
		var c00;
		var m3 = this._12;
		var m4 = this._22;
		var m5 = this._32;
		var m6 = this._13;
		var m7 = this._23;
		var m8 = this._33;
		c00 = this._11 * (m4 * m8 - m5 * m7) - this._21 * (m3 * m8 - m5 * m6) + this._31 * (m3 * m7 - m4 * m6);
		var c01;
		var m31 = this._12;
		var m41 = this._22;
		var m51 = this._32;
		var m61 = this._13;
		var m71 = this._23;
		var m81 = this._33;
		c01 = this._10 * (m41 * m81 - m51 * m71) - this._20 * (m31 * m81 - m51 * m61) + this._30 * (m31 * m71 - m41 * m61);
		var c02;
		var m32 = this._11;
		var m42 = this._21;
		var m52 = this._31;
		var m62 = this._13;
		var m72 = this._23;
		var m82 = this._33;
		c02 = this._10 * (m42 * m82 - m52 * m72) - this._20 * (m32 * m82 - m52 * m62) + this._30 * (m32 * m72 - m42 * m62);
		var c03;
		var m33 = this._11;
		var m43 = this._21;
		var m53 = this._31;
		var m63 = this._12;
		var m73 = this._22;
		var m83 = this._32;
		c03 = this._10 * (m43 * m83 - m53 * m73) - this._20 * (m33 * m83 - m53 * m63) + this._30 * (m33 * m73 - m43 * m63);
		det = this._00 * c00 - this._01 * c01 + this._02 * c02 - this._03 * c03;
		if(det < 0) sx = -sx;
		position.x = this._30;
		position.y = this._31;
		position.z = this._32;
		matrix._00 = this._00;
		matrix._10 = this._10;
		matrix._20 = this._20;
		matrix._30 = this._30;
		matrix._01 = this._01;
		matrix._11 = this._11;
		matrix._21 = this._21;
		matrix._31 = this._31;
		matrix._02 = this._02;
		matrix._12 = this._12;
		matrix._22 = this._22;
		matrix._32 = this._32;
		matrix._03 = this._03;
		matrix._13 = this._13;
		matrix._23 = this._23;
		matrix._33 = this._33;
		var invSX = 1 / sx;
		var invSY = 1 / sy;
		var invSZ = 1 / sz;
		matrix._00 *= invSX;
		matrix._01 *= invSX;
		matrix._02 *= invSX;
		matrix._03 = 0;
		matrix._10 *= invSY;
		matrix._11 *= invSY;
		matrix._12 *= invSY;
		matrix._13 = 0;
		matrix._20 *= invSZ;
		matrix._21 *= invSZ;
		matrix._22 *= invSZ;
		matrix._23 = 0;
		matrix._30 = 0;
		matrix._31 = 0;
		matrix._32 = 0;
		matrix._33 = 0;
		quaternion.setFromRotationMatrix(matrix);
		scale.x = sx;
		scale.y = sy;
		scale.z = sz;
		return this;
	}
	,setPosition: function(v) {
		this._30 = v.x;
		this._31 = v.y;
		this._32 = v.z;
		return this;
	}
	,makeRotationFromQuaternion: function(q) {
		var x = q.x;
		var y = q.y;
		var z = q.z;
		var w = q.w;
		var x2 = x + x;
		var y2 = y + y;
		var z2 = z + z;
		var xx = x * x2;
		var xy = x * y2;
		var xz = x * z2;
		var yy = y * y2;
		var yz = y * z2;
		var zz = z * z2;
		var wx = w * x2;
		var wy = w * y2;
		var wz = w * z2;
		this._00 = 1 - (yy + zz);
		this._10 = xy - wz;
		this._20 = xz + wy;
		this._01 = xy + wz;
		this._11 = 1 - (xx + zz);
		this._21 = yz - wx;
		this._02 = xz - wy;
		this._12 = yz + wx;
		this._22 = 1 - (xx + yy);
		this._03 = 0;
		this._13 = 0;
		this._23 = 0;
		this._30 = 0;
		this._31 = 0;
		this._32 = 0;
		this._33 = 1;
		return this;
	}
	,setIdentity: function() {
		this._00 = 1.0;
		this._01 = 0.0;
		this._02 = 0.0;
		this._03 = 0.0;
		this._10 = 0.0;
		this._11 = 1.0;
		this._12 = 0.0;
		this._13 = 0.0;
		this._20 = 0.0;
		this._21 = 0.0;
		this._22 = 1.0;
		this._23 = 0.0;
		this._30 = 0.0;
		this._31 = 0.0;
		this._32 = 0.0;
		this._33 = 1.0;
	}
	,initTranslate: function(x,y,z) {
		if(z == null) z = 0.0;
		if(y == null) y = 0.0;
		if(x == null) x = 0.0;
		this._00 = 1.0;
		this._01 = 0.0;
		this._02 = 0.0;
		this._03 = 0.0;
		this._10 = 0.0;
		this._11 = 1.0;
		this._12 = 0.0;
		this._13 = 0.0;
		this._20 = 0.0;
		this._21 = 0.0;
		this._22 = 1.0;
		this._23 = 0.0;
		this._30 = x;
		this._31 = y;
		this._32 = z;
		this._33 = 1.0;
	}
	,translate: function(x,y,z) {
		if(z == null) z = 0.0;
		if(y == null) y = 0.0;
		if(x == null) x = 0.0;
		this._00 += x * this._03;
		this._01 += y * this._03;
		this._02 += z * this._03;
		this._10 += x * this._13;
		this._11 += y * this._13;
		this._12 += z * this._13;
		this._20 += x * this._23;
		this._21 += y * this._23;
		this._22 += z * this._23;
		this._30 += x * this._33;
		this._31 += y * this._33;
		this._32 += z * this._33;
	}
	,scale: function(v) {
		this._00 *= v.x;
		this._01 *= v.x;
		this._02 *= v.x;
		this._03 *= v.x;
		this._10 *= v.y;
		this._11 *= v.y;
		this._12 *= v.y;
		this._13 *= v.y;
		this._20 *= v.z;
		this._21 *= v.z;
		this._22 *= v.z;
		this._23 *= v.z;
	}
	,multiply3x4: function(a,b) {
		var m11 = a._00;
		var m12 = a._01;
		var m13 = a._02;
		var m21 = a._10;
		var m22 = a._11;
		var m23 = a._12;
		var a31 = a._20;
		var a32 = a._21;
		var a33 = a._22;
		var a41 = a._30;
		var a42 = a._31;
		var a43 = a._32;
		var b11 = b._00;
		var b12 = b._01;
		var b13 = b._02;
		var b21 = b._10;
		var b22 = b._11;
		var b23 = b._12;
		var b31 = b._20;
		var b32 = b._21;
		var b33 = b._22;
		var b41 = b._30;
		var b42 = b._31;
		var b43 = b._32;
		this._00 = m11 * b11 + m12 * b21 + m13 * b31;
		this._01 = m11 * b12 + m12 * b22 + m13 * b32;
		this._02 = m11 * b13 + m12 * b23 + m13 * b33;
		this._03 = 0;
		this._10 = m21 * b11 + m22 * b21 + m23 * b31;
		this._11 = m21 * b12 + m22 * b22 + m23 * b32;
		this._12 = m21 * b13 + m22 * b23 + m23 * b33;
		this._13 = 0;
		this._20 = a31 * b11 + a32 * b21 + a33 * b31;
		this._21 = a31 * b12 + a32 * b22 + a33 * b32;
		this._22 = a31 * b13 + a32 * b23 + a33 * b33;
		this._23 = 0;
		this._30 = a41 * b11 + a42 * b21 + a43 * b31 + b41;
		this._31 = a41 * b12 + a42 * b22 + a43 * b32 + b42;
		this._32 = a41 * b13 + a42 * b23 + a43 * b33 + b43;
		this._33 = 1;
	}
	,mult2: function(b) {
		this.multiply(this,b);
	}
	,multiply: function(a,b) {
		var a11 = a._00;
		var a12 = a._01;
		var a13 = a._02;
		var a14 = a._03;
		var a21 = a._10;
		var a22 = a._11;
		var a23 = a._12;
		var a24 = a._13;
		var a31 = a._20;
		var a32 = a._21;
		var a33 = a._22;
		var a34 = a._23;
		var a41 = a._30;
		var a42 = a._31;
		var a43 = a._32;
		var a44 = a._33;
		var b11 = b._00;
		var b12 = b._01;
		var b13 = b._02;
		var b14 = b._03;
		var b21 = b._10;
		var b22 = b._11;
		var b23 = b._12;
		var b24 = b._13;
		var b31 = b._20;
		var b32 = b._21;
		var b33 = b._22;
		var b34 = b._23;
		var b41 = b._30;
		var b42 = b._31;
		var b43 = b._32;
		var b44 = b._33;
		this._00 = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
		this._01 = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
		this._02 = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
		this._03 = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;
		this._10 = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
		this._11 = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
		this._12 = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
		this._13 = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;
		this._20 = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
		this._21 = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
		this._22 = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
		this._23 = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;
		this._30 = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
		this._31 = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
		this._32 = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
		this._33 = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;
	}
	,inverse2: function(m) {
		var m11 = m._00;
		var m12 = m._01;
		var m13 = m._02;
		var m14 = m._03;
		var m21 = m._10;
		var m22 = m._11;
		var m23 = m._12;
		var m24 = m._13;
		var m31 = m._20;
		var m32 = m._21;
		var m33 = m._22;
		var m34 = m._23;
		var m41 = m._30;
		var m42 = m._31;
		var m43 = m._32;
		var m44 = m._33;
		this._00 = m22 * m33 * m44 - m22 * m34 * m43 - m32 * m23 * m44 + m32 * m24 * m43 + m42 * m23 * m34 - m42 * m24 * m33;
		this._01 = -m12 * m33 * m44 + m12 * m34 * m43 + m32 * m13 * m44 - m32 * m14 * m43 - m42 * m13 * m34 + m42 * m14 * m33;
		this._02 = m12 * m23 * m44 - m12 * m24 * m43 - m22 * m13 * m44 + m22 * m14 * m43 + m42 * m13 * m24 - m42 * m14 * m23;
		this._03 = -m12 * m23 * m34 + m12 * m24 * m33 + m22 * m13 * m34 - m22 * m14 * m33 - m32 * m13 * m24 + m32 * m14 * m23;
		this._10 = -m21 * m33 * m44 + m21 * m34 * m43 + m31 * m23 * m44 - m31 * m24 * m43 - m41 * m23 * m34 + m41 * m24 * m33;
		this._11 = m11 * m33 * m44 - m11 * m34 * m43 - m31 * m13 * m44 + m31 * m14 * m43 + m41 * m13 * m34 - m41 * m14 * m33;
		this._12 = -m11 * m23 * m44 + m11 * m24 * m43 + m21 * m13 * m44 - m21 * m14 * m43 - m41 * m13 * m24 + m41 * m14 * m23;
		this._13 = m11 * m23 * m34 - m11 * m24 * m33 - m21 * m13 * m34 + m21 * m14 * m33 + m31 * m13 * m24 - m31 * m14 * m23;
		this._20 = m21 * m32 * m44 - m21 * m34 * m42 - m31 * m22 * m44 + m31 * m24 * m42 + m41 * m22 * m34 - m41 * m24 * m32;
		this._21 = -m11 * m32 * m44 + m11 * m34 * m42 + m31 * m12 * m44 - m31 * m14 * m42 - m41 * m12 * m34 + m41 * m14 * m32;
		this._22 = m11 * m22 * m44 - m11 * m24 * m42 - m21 * m12 * m44 + m21 * m14 * m42 + m41 * m12 * m24 - m41 * m14 * m22;
		this._23 = -m11 * m22 * m34 + m11 * m24 * m32 + m21 * m12 * m34 - m21 * m14 * m32 - m31 * m12 * m24 + m31 * m14 * m22;
		this._30 = -m21 * m32 * m43 + m21 * m33 * m42 + m31 * m22 * m43 - m31 * m23 * m42 - m41 * m22 * m33 + m41 * m23 * m32;
		this._31 = m11 * m32 * m43 - m11 * m33 * m42 - m31 * m12 * m43 + m31 * m13 * m42 + m41 * m12 * m33 - m41 * m13 * m32;
		this._32 = -m11 * m22 * m43 + m11 * m23 * m42 + m21 * m12 * m43 - m21 * m13 * m42 - m41 * m12 * m23 + m41 * m13 * m22;
		this._33 = m11 * m22 * m33 - m11 * m23 * m32 - m21 * m12 * m33 + m21 * m13 * m32 + m31 * m12 * m23 - m31 * m13 * m22;
		var det = m11 * this._00 + m12 * this._10 + m13 * this._20 + m14 * this._30;
		if((det < 0?-det:det) < 1e-10) {
			this._00 = this._01 = this._02 = this._03 = this._10 = this._11 = this._12 = this._13 = this._20 = this._21 = this._22 = this._23 = this._30 = this._31 = this._32 = this._33 = 0.0;
			return;
		}
		det = 1.0 / det;
		this._00 *= det;
		this._01 *= det;
		this._02 *= det;
		this._03 *= det;
		this._10 *= det;
		this._11 *= det;
		this._12 *= det;
		this._13 *= det;
		this._20 *= det;
		this._21 *= det;
		this._22 *= det;
		this._23 *= det;
		this._30 *= det;
		this._31 *= det;
		this._32 *= det;
		this._33 *= det;
	}
	,transpose2: function() {
		var tmp;
		tmp = this._01;
		this._01 = this._10;
		this._10 = tmp;
		tmp = this._02;
		this._02 = this._20;
		this._20 = tmp;
		tmp = this._03;
		this._03 = this._30;
		this._30 = tmp;
		tmp = this._12;
		this._12 = this._21;
		this._21 = tmp;
		tmp = this._13;
		this._13 = this._31;
		this._31 = tmp;
		tmp = this._23;
		this._23 = this._32;
		this._32 = tmp;
	}
	,clone: function() {
		var m = lue_math_Mat4.identity();
		m._00 = this._00;
		m._01 = this._01;
		m._02 = this._02;
		m._03 = this._03;
		m._10 = this._10;
		m._11 = this._11;
		m._12 = this._12;
		m._13 = this._13;
		m._20 = this._20;
		m._21 = this._21;
		m._22 = this._22;
		m._23 = this._23;
		m._30 = this._30;
		m._31 = this._31;
		m._32 = this._32;
		m._33 = this._33;
		return m;
	}
	,load: function(a) {
		this._00 = a[0];
		this._10 = a[1];
		this._20 = a[2];
		this._30 = a[3];
		this._01 = a[4];
		this._11 = a[5];
		this._21 = a[6];
		this._31 = a[7];
		this._02 = a[8];
		this._12 = a[9];
		this._22 = a[10];
		this._32 = a[11];
		this._03 = a[12];
		this._13 = a[13];
		this._23 = a[14];
		this._33 = a[15];
	}
	,loadFrom: function(m) {
		this._00 = m._00;
		this._01 = m._01;
		this._02 = m._02;
		this._03 = m._03;
		this._10 = m._10;
		this._11 = m._11;
		this._12 = m._12;
		this._13 = m._13;
		this._20 = m._20;
		this._21 = m._21;
		this._22 = m._22;
		this._23 = m._23;
		this._30 = m._30;
		this._31 = m._31;
		this._32 = m._32;
		this._33 = m._33;
	}
	,pos: function(v) {
		if(v == null) return new lue_math_Vec4(this._30,this._31,this._32,this._33); else {
			v.x = this._30;
			v.y = this._31;
			v.z = this._32;
			v.w = this._33;
			return v;
		}
	}
	,scaleV: function() {
		return new lue_math_Vec4(Math.sqrt(this._00 * this._00 + this._10 * this._10 + this._20 * this._20),Math.sqrt(this._01 * this._01 + this._11 * this._11 + this._21 * this._21),Math.sqrt(this._02 * this._02 + this._12 * this._12 + this._22 * this._22));
	}
	,up: function(v) {
		if(v == null) return new lue_math_Vec4(this._20,this._21,this._22,this._23); else {
			v.x = this._20;
			v.y = this._21;
			v.z = this._22;
			v.w = this._23;
			return v;
		}
	}
	,at: function(v) {
		if(v == null) return new lue_math_Vec4(this._10,this._11,this._12,this._13); else {
			v.x = this._10;
			v.y = this._11;
			v.z = this._12;
			v.w = this._13;
			return v;
		}
	}
	,right: function(v) {
		if(v == null) return new lue_math_Vec4(this._00,this._01,this._02,this._03); else {
			v.x = this._00;
			v.y = this._01;
			v.z = this._02;
			v.w = this._03;
			return v;
		}
	}
	,getInverse: function(m) {
		var n11 = m._00;
		var n12 = m._10;
		var n13 = m._20;
		var n14 = m._30;
		var n21 = m._01;
		var n22 = m._11;
		var n23 = m._21;
		var n24 = m._31;
		var n31 = m._02;
		var n32 = m._12;
		var n33 = m._22;
		var n34 = m._32;
		var n41 = m._03;
		var n42 = m._13;
		var n43 = m._23;
		var n44 = m._33;
		this._00 = n23 * n34 * n42 - n24 * n33 * n42 + n24 * n32 * n43 - n22 * n34 * n43 - n23 * n32 * n44 + n22 * n33 * n44;
		this._10 = n14 * n33 * n42 - n13 * n34 * n42 - n14 * n32 * n43 + n12 * n34 * n43 + n13 * n32 * n44 - n12 * n33 * n44;
		this._20 = n13 * n24 * n42 - n14 * n23 * n42 + n14 * n22 * n43 - n12 * n24 * n43 - n13 * n22 * n44 + n12 * n23 * n44;
		this._30 = n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34;
		this._01 = n24 * n33 * n41 - n23 * n34 * n41 - n24 * n31 * n43 + n21 * n34 * n43 + n23 * n31 * n44 - n21 * n33 * n44;
		this._11 = n13 * n34 * n41 - n14 * n33 * n41 + n14 * n31 * n43 - n11 * n34 * n43 - n13 * n31 * n44 + n11 * n33 * n44;
		this._21 = n14 * n23 * n41 - n13 * n24 * n41 - n14 * n21 * n43 + n11 * n24 * n43 + n13 * n21 * n44 - n11 * n23 * n44;
		this._31 = n13 * n24 * n31 - n14 * n23 * n31 + n14 * n21 * n33 - n11 * n24 * n33 - n13 * n21 * n34 + n11 * n23 * n34;
		this._02 = n22 * n34 * n41 - n24 * n32 * n41 + n24 * n31 * n42 - n21 * n34 * n42 - n22 * n31 * n44 + n21 * n32 * n44;
		this._12 = n14 * n32 * n41 - n12 * n34 * n41 - n14 * n31 * n42 + n11 * n34 * n42 + n12 * n31 * n44 - n11 * n32 * n44;
		this._22 = n12 * n24 * n41 - n14 * n22 * n41 + n14 * n21 * n42 - n11 * n24 * n42 - n12 * n21 * n44 + n11 * n22 * n44;
		this._32 = n14 * n22 * n31 - n12 * n24 * n31 - n14 * n21 * n32 + n11 * n24 * n32 + n12 * n21 * n34 - n11 * n22 * n34;
		this._03 = n23 * n32 * n41 - n22 * n33 * n41 - n23 * n31 * n42 + n21 * n33 * n42 + n22 * n31 * n43 - n21 * n32 * n43;
		this._13 = n12 * n33 * n41 - n13 * n32 * n41 + n13 * n31 * n42 - n11 * n33 * n42 - n12 * n31 * n43 + n11 * n32 * n43;
		this._23 = n13 * n22 * n41 - n12 * n23 * n41 - n13 * n21 * n42 + n11 * n23 * n42 + n12 * n21 * n43 - n11 * n22 * n43;
		this._33 = n12 * n23 * n31 - n13 * n22 * n31 + n13 * n21 * n32 - n11 * n23 * n32 - n12 * n21 * n33 + n11 * n22 * n33;
		var det = n11 * this._00 + n21 * this._10 + n31 * this._20 + n41 * this._30;
		if(det == 0) {
			this.setIdentity();
			return this;
		}
		this.multiplyScalar(1 / det);
		return this;
	}
	,multiplyScalar: function(s) {
		this._00 *= s;
		this._10 *= s;
		this._20 *= s;
		this._30 *= s;
		this._01 *= s;
		this._11 *= s;
		this._21 *= s;
		this._31 *= s;
		this._02 *= s;
		this._12 *= s;
		this._22 *= s;
		this._32 *= s;
		this._03 *= s;
		this._13 *= s;
		this._23 *= s;
		this._33 *= s;
		return this;
	}
	,multiplyMatrices: function(a,b) {
		var a11 = a._00;
		var a12 = a._10;
		var a13 = a._20;
		var a14 = a._30;
		var a21 = a._01;
		var a22 = a._11;
		var a23 = a._21;
		var a24 = a._31;
		var a31 = a._02;
		var a32 = a._12;
		var a33 = a._22;
		var a34 = a._32;
		var a41 = a._03;
		var a42 = a._13;
		var a43 = a._23;
		var a44 = a._33;
		var b11 = b._00;
		var b12 = b._10;
		var b13 = b._20;
		var b14 = b._30;
		var b21 = b._01;
		var b22 = b._11;
		var b23 = b._21;
		var b24 = b._31;
		var b31 = b._02;
		var b32 = b._12;
		var b33 = b._22;
		var b34 = b._32;
		var b41 = b._03;
		var b42 = b._13;
		var b43 = b._23;
		var b44 = b._33;
		this._00 = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
		this._10 = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
		this._20 = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
		this._30 = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;
		this._01 = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
		this._11 = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
		this._21 = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
		this._31 = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;
		this._02 = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
		this._12 = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
		this._22 = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
		this._32 = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;
		this._03 = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
		this._13 = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
		this._23 = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
		this._33 = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;
		return this;
	}
	,toRotation: function() {
		var v1 = new lue_math_Vec4();
		var scaleX = 1 / v1.set(this._00,this._01,this._02).length();
		var scaleY = 1 / v1.set(this._10,this._11,this._12).length();
		var scaleZ = 1 / v1.set(this._20,this._21,this._22).length();
		this._00 = this._00 * scaleX;
		this._01 = this._01 * scaleX;
		this._02 = this._02 * scaleX;
		this._03 = 0;
		this._10 = this._10 * scaleY;
		this._11 = this._11 * scaleY;
		this._12 = this._12 * scaleY;
		this._13 = 0;
		this._20 = this._20 * scaleZ;
		this._21 = this._21 * scaleZ;
		this._22 = this._22 * scaleZ;
		this._23 = 0;
		this._30 = 0;
		this._31 = 0;
		this._32 = 0;
		this._33 = 1;
		return this;
	}
	,getQuat: function() {
		var m = this.clone();
		m.toRotation();
		var q = new lue_math_Quat();
		var m11 = this._00;
		var m12 = this._10;
		var m13 = this._20;
		var m21 = this._01;
		var m22 = this._11;
		var m23 = this._21;
		var m31 = this._02;
		var m32 = this._12;
		var m33 = this._22;
		var ftrace = m11 + m22 + m33;
		var s = 0;
		if(ftrace > 0) {
			s = 0.5 / Math.sqrt(ftrace + 1.0);
			q.w = 0.25 / s;
			q.x = (m32 - m23) * s;
			q.y = (m13 - m31) * s;
			q.z = (m21 - m12) * s;
		} else if(m11 > m22 && m11 > m33) {
			s = 2.0 * Math.sqrt(1.0 + m11 - m22 - m33);
			q.w = (m32 - m23) / s;
			q.x = 0.25 * s;
			q.y = (m12 + m21) / s;
			q.z = (m13 + m31) / s;
		} else if(m22 > m33) {
			s = 2.0 * Math.sqrt(1.0 + m22 - m11 - m33);
			q.w = (m13 - m31) / s;
			q.x = (m12 + m21) / s;
			q.y = 0.25 * s;
			q.z = (m23 + m32) / s;
		} else {
			s = 2.0 * Math.sqrt(1.0 + m33 - m11 - m22);
			q.w = (m21 - m12) / s;
			q.x = (m13 + m31) / s;
			q.y = (m23 + m32) / s;
			q.z = 0.25 * s;
		}
		return q;
	}
	,getMaxScaleOnAxis: function() {
		var m = this;
		var scaleXSq = m._00 * m._00 + m._01 * m._01 + m._02 * m._02;
		var scaleYSq = m._10 * m._10 + m._11 * m._11 + m._12 * m._12;
		var scaleZSq = m._20 * m._20 + m._21 * m._21 + m._22 * m._22;
		return Math.sqrt(lue_math_Math.max(scaleXSq,scaleYSq < scaleZSq?scaleZSq:scaleYSq));
	}
	,getScale: function() {
		var sx = Math.sqrt(this._00 * this._00 + this._01 * this._01 + this._02 * this._02);
		var sy = Math.sqrt(this._10 * this._10 + this._11 * this._11 + this._12 * this._12);
		var sz = Math.sqrt(this._20 * this._20 + this._21 * this._21 + this._22 * this._22);
		return new lue_math_Vec4(sx,sy,sz);
	}
	,__class__: lue_math_Mat4
});
var cycles_node_TransformNode = function() {
	cycles_node_Node.call(this);
	this.matrix = lue_math_Mat4.identity();
	this.pos = new lue_math_Vec4();
	this.rot = new lue_math_Quat();
	this.scale = new lue_math_Vec4();
};
$hxClasses["cycles.node.TransformNode"] = cycles_node_TransformNode;
cycles_node_TransformNode.__name__ = ["cycles","node","TransformNode"];
cycles_node_TransformNode.create = function(positionX,positionY,positionZ,rotationX,rotationY,rotationZ,scaleX,scaleY,scaleZ) {
	var n = new cycles_node_TransformNode();
	n.inputs.push(cycles_node_VectorNode.create(positionX,positionY,positionZ));
	n.inputs.push(cycles_node_VectorNode.create(rotationX,rotationY,rotationZ));
	n.inputs.push(cycles_node_VectorNode.create(scaleX,scaleY,scaleZ));
	return n;
};
cycles_node_TransformNode.__super__ = cycles_node_Node;
cycles_node_TransformNode.prototype = $extend(cycles_node_Node.prototype,{
	transform: null
	,matrix: null
	,pos: null
	,rot: null
	,scale: null
	,inputChanged: function() {
		this.pos.set(this.inputs[0].inputs[0].f,this.inputs[0].inputs[1].f,this.inputs[0].inputs[2].f);
		this.rot.initRotate(this.inputs[1].inputs[0].f,this.inputs[1].inputs[1].f,this.inputs[1].inputs[2].f);
		this.scale.set(this.inputs[2].inputs[0].f,this.inputs[2].inputs[1].f,this.inputs[2].inputs[2].f);
		this.matrix.compose(this.pos,this.rot,this.scale);
		this.transform.append = this.matrix;
		this.transform.dirty = true;
		cycles_node_Node.prototype.inputChanged.call(this);
	}
	,__class__: cycles_node_TransformNode
});
var cycles_node_VectorNode = function() {
	cycles_node_Node.call(this);
};
$hxClasses["cycles.node.VectorNode"] = cycles_node_VectorNode;
cycles_node_VectorNode.__name__ = ["cycles","node","VectorNode"];
cycles_node_VectorNode.create = function(x,y,z) {
	var n = new cycles_node_VectorNode();
	n.inputs.push(cycles_node_FloatNode.create(x));
	n.inputs.push(cycles_node_FloatNode.create(y));
	n.inputs.push(cycles_node_FloatNode.create(z));
	return n;
};
cycles_node_VectorNode.__super__ = cycles_node_Node;
cycles_node_VectorNode.prototype = $extend(cycles_node_Node.prototype,{
	__class__: cycles_node_VectorNode
});
var lue_trait_Trait = function() {
	this._render2D = null;
	this._render = null;
	this._update = null;
	this._remove = null;
	this._init = null;
	this._add = null;
	this.name = "";
};
$hxClasses["lue.trait.Trait"] = lue_trait_Trait;
lue_trait_Trait.__name__ = ["lue","trait","Trait"];
lue_trait_Trait.prototype = {
	name: null
	,node: null
	,_add: null
	,_init: null
	,_remove: null
	,_update: null
	,_render: null
	,_render2D: null
	,remove: function() {
		this.node.removeTrait(this);
	}
	,requestAdd: function(f) {
		this._add = f;
	}
	,requestInit: function(f) {
		lue_App.requestInit(f);
		this._init = f;
	}
	,requestRemove: function(f) {
		this._remove = f;
	}
	,requestUpdate: function(f) {
		lue_App.requestUpdate(f);
		this._update = f;
	}
	,requestRender: function(f) {
		lue_App.requestRender(f);
		this._render = f;
	}
	,requestRender2D: function(f) {
		lue_App.requestRender2D(f);
		this._render2D = f;
	}
	,__class__: lue_trait_Trait
};
var cycles_trait_Animation = function(startTrack,names,starts,ends) {
	lue_trait_Trait.call(this);
	this.startTrack = startTrack;
	this.names = names;
	this.starts = starts;
	this.ends = ends;
	this.requestAdd($bind(this,this.add));
	this.requestUpdate($bind(this,this.update));
};
$hxClasses["cycles.trait.Animation"] = cycles_trait_Animation;
cycles_trait_Animation.__name__ = ["cycles","trait","Animation"];
cycles_trait_Animation.__super__ = lue_trait_Trait;
cycles_trait_Animation.prototype = $extend(lue_trait_Trait.prototype,{
	model: null
	,startTrack: null
	,names: null
	,starts: null
	,ends: null
	,add: function() {
		this.model = js_Boot.__cast(this.node , lue_node_ModelNode);
		lue_Eg.setupAnimation(this.model,this.startTrack,this.names,this.starts,this.ends);
	}
	,update: function() {
		lue_Eg.setAnimationParams(this.model,lue_sys_Time.delta);
	}
	,play: function(trackName,loop,speed,onTrackComplete) {
		if(speed == null) speed = 1.0;
		if(loop == null) loop = true;
		this.model.skinning.animation.play(trackName,loop,speed,onTrackComplete);
	}
	,pause: function() {
		this.model.skinning.animation.pause();
	}
	,__class__: cycles_trait_Animation
});
var cycles_trait_NodeExecutor = function() {
	this.nodeUpdates = [];
	lue_trait_Trait.call(this);
	this.requestUpdate($bind(this,this.update));
};
$hxClasses["cycles.trait.NodeExecutor"] = cycles_trait_NodeExecutor;
cycles_trait_NodeExecutor.__name__ = ["cycles","trait","NodeExecutor"];
cycles_trait_NodeExecutor.__super__ = lue_trait_Trait;
cycles_trait_NodeExecutor.prototype = $extend(lue_trait_Trait.prototype,{
	baseNode: null
	,nodeUpdates: null
	,start: function(baseNode) {
		this.baseNode = baseNode;
		baseNode.start(this);
	}
	,update: function() {
		var _g = 0;
		var _g1 = this.nodeUpdates;
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			f();
		}
	}
	,registerUpdate: function(f) {
		this.nodeUpdates.push(f);
	}
	,__class__: cycles_trait_NodeExecutor
});
var cycles_trait_PathTracer = function() {
	lue_trait_Trait.call(this);
	this.requestInit($bind(this,this.init));
	this.requestUpdate($bind(this,this.update));
};
$hxClasses["cycles.trait.PathTracer"] = cycles_trait_PathTracer;
cycles_trait_PathTracer.__name__ = ["cycles","trait","PathTracer"];
cycles_trait_PathTracer.__super__ = lue_trait_Trait;
cycles_trait_PathTracer.prototype = $extend(lue_trait_Trait.prototype,{
	context: null
	,eyeLocation: null
	,lightLocation: null
	,ray00Location: null
	,ray01Location: null
	,ray10Location: null
	,ray11Location: null
	,objectLocations: null
	,transformMap: null
	,init: function() {
		this.context = lue_resource_Resource.getMaterial("pt_material","").getContext("pt_trace_pass");
		this.context.resource.bind_constants.push({ id : "eye", vec3 : [0.0,0.0,0.0]});
		this.eyeLocation = this.context.resource.bind_constants.length - 1;
		this.context.resource.bind_constants.push({ id : "light", vec3 : [0.9,0.6,1.1]});
		this.lightLocation = this.context.resource.bind_constants.length - 1;
		this.context.resource.bind_constants.push({ id : "glossiness", 'float' : 0.6});
		this.context.resource.bind_constants.push({ id : "ray00", vec3 : [0.0,0.0,0.0]});
		this.ray00Location = this.context.resource.bind_constants.length - 1;
		this.context.resource.bind_constants.push({ id : "ray01", vec3 : [0.0,0.0,0.0]});
		this.ray01Location = this.context.resource.bind_constants.length - 1;
		this.context.resource.bind_constants.push({ id : "ray10", vec3 : [0.0,0.0,0.0]});
		this.ray10Location = this.context.resource.bind_constants.length - 1;
		this.context.resource.bind_constants.push({ id : "ray11", vec3 : [0.0,0.0,0.0]});
		this.ray11Location = this.context.resource.bind_constants.length - 1;
		this.objectLocations = [];
		this.transformMap = new haxe_ds_IntMap();
		var sphereNum = 0;
		var _g = 0;
		var _g1 = lue_node_RootNode.models;
		while(_g < _g1.length) {
			var n = _g1[_g];
			++_g;
			if(n.id.split(".")[0] == "Sphere") {
				this.context.resource.bind_constants.push({ id : "sphereCenter" + sphereNum, vec3 : [0.0,0.0,0.0]});
				var loc = this.context.resource.bind_constants.length - 1;
				this.objectLocations.push(loc);
				this.transformMap.h[loc] = n.transform;
				this.context.resource.bind_constants.push({ id : "sphereRadius" + sphereNum, 'float' : 0.288});
				sphereNum++;
			}
		}
	}
	,update: function() {
		var camera = lue_node_RootNode.cameras[0];
		var eye = camera.transform.pos;
		var mvp = lue_math_Mat4.identity();
		mvp.mult2(camera.V);
		mvp.mult2(camera.P);
		var inverse = lue_math_Mat4.identity();
		inverse.inverse2(mvp);
		var matrix = inverse;
		this.context.resource.bind_constants[this.eyeLocation].vec3 = [eye.x,eye.y,eye.z];
		var v = this.getEyeRay(matrix,-1,-1,eye);
		this.context.resource.bind_constants[this.ray00Location].vec3 = [v.x,v.y,v.z];
		var v1 = this.getEyeRay(matrix,-1,1,eye);
		this.context.resource.bind_constants[this.ray01Location].vec3 = [v1.x,v1.y,v1.z];
		var v2 = this.getEyeRay(matrix,1,-1,eye);
		this.context.resource.bind_constants[this.ray10Location].vec3 = [v2.x,v2.y,v2.z];
		var v3 = this.getEyeRay(matrix,1,1,eye);
		this.context.resource.bind_constants[this.ray11Location].vec3 = [v3.x,v3.y,v3.z];
		var _g = 0;
		var _g1 = this.objectLocations;
		while(_g < _g1.length) {
			var loc = _g1[_g];
			++_g;
			var t = this.transformMap.h[loc];
			this.context.resource.bind_constants[loc].vec3[0] = t.matrix._30;
			this.context.resource.bind_constants[loc].vec3[1] = t.matrix._31;
			this.context.resource.bind_constants[loc].vec3[2] = t.matrix._32;
		}
	}
	,getEyeRay: function(matrix,x,y,eye) {
		var v = new lue_math_Vec4();
		var vv = new kha_math_FastVector4(x,y,0,1);
		var product = new kha_math_FastVector4();
		product.x = matrix._00 * vv.x + matrix._10 * vv.y + matrix._20 * vv.z + matrix._30 * vv.w;
		product.y = matrix._01 * vv.x + matrix._11 * vv.y + matrix._21 * vv.z + matrix._31 * vv.w;
		product.z = matrix._02 * vv.x + matrix._12 * vv.y + matrix._22 * vv.z + matrix._32 * vv.w;
		product.w = matrix._03 * vv.x + matrix._13 * vv.y + matrix._23 * vv.z + matrix._33 * vv.w;
		vv = product;
		v.x = vv.x;
		v.y = vv.y;
		v.z = vv.z;
		v.w = vv.w;
		v.x /= v.w;
		v.y /= v.w;
		v.z /= v.w;
		v.w /= v.w;
		v.sub(eye);
		return v;
	}
	,__class__: cycles_trait_PathTracer
});
var cycles_trait_PhysicsDrag = function() {
	this.pickedBody = null;
	this.pickConstraint = null;
	lue_trait_Trait.call(this);
	this.requestInit($bind(this,this.init));
	this.requestUpdate($bind(this,this.update));
};
$hxClasses["cycles.trait.PhysicsDrag"] = cycles_trait_PhysicsDrag;
cycles_trait_PhysicsDrag.__name__ = ["cycles","trait","PhysicsDrag"];
cycles_trait_PhysicsDrag.__super__ = lue_trait_Trait;
cycles_trait_PhysicsDrag.prototype = $extend(lue_trait_Trait.prototype,{
	physics: null
	,pickConstraint: null
	,pickDist: null
	,pickedBody: null
	,rayFrom: null
	,rayTo: null
	,init: function() {
		this.physics = cycles_Root.physics;
	}
	,update: function() {
		if(this.pickedBody != null) this.pickedBody.body.activate(false);
		if(lue_sys_Input.started) {
			var b = this.physics.pickClosest(lue_sys_Input.x,lue_sys_Input.y);
			if(b != null && b.mass > 0 && !b.body.isKinematicObject()) {
				this.rayFrom = this.physics.getRayFrom();
				this.rayTo = this.physics.getRayTo(lue_sys_Input.x,lue_sys_Input.y);
				this.pickedBody = b;
				var pickPos = this.physics.rayCallback.get_m_hitPointWorld();
				var ct = b.body.getCenterOfMassTransform();
				var inv = ct.inverse();
				var localPivot = inv.mulVec(pickPos);
				var tr = new Ammo.btTransform();
				tr.setIdentity();
				tr.setOrigin(localPivot);
				this.pickConstraint = new Ammo.btGeneric6DofConstraint(b.body,tr,false);
				this.pickConstraint.setLinearLowerLimit((function($this) {
					var $r;
					var _this = new Ammo.btVector3(0,0,0);
					$r = _this;
					return $r;
				}(this)));
				this.pickConstraint.setLinearUpperLimit((function($this) {
					var $r;
					var _this1 = new Ammo.btVector3(0,0,0);
					$r = _this1;
					return $r;
				}(this)));
				this.pickConstraint.setAngularLowerLimit((function($this) {
					var $r;
					var _this2 = new Ammo.btVector3(-10,-10,-10);
					$r = _this2;
					return $r;
				}(this)));
				this.pickConstraint.setAngularUpperLimit((function($this) {
					var $r;
					var _this3 = new Ammo.btVector3(10,10,10);
					$r = _this3;
					return $r;
				}(this)));
				this.physics.world.addConstraint(this.pickConstraint,false);
				var v;
				var x = pickPos.x() - this.rayFrom.x();
				var y = pickPos.y() - this.rayFrom.y();
				var z = pickPos.z() - this.rayFrom.z();
				v = new Ammo.btVector3(x,y,z);
				this.pickDist = v.length();
			}
		} else if(lue_sys_Input.released) {
			if(this.pickConstraint != null) {
				this.physics.world.removeConstraint(this.pickConstraint);
				this.pickConstraint = null;
				this.pickedBody = null;
			}
		} else if(lue_sys_Input.touch) {
			if(this.pickConstraint != null) {
				this.rayFrom = this.physics.getRayFrom();
				this.rayTo = this.physics.getRayTo(lue_sys_Input.x,lue_sys_Input.y);
				var btRayTo;
				var x1 = this.rayTo.x();
				var y1 = this.rayTo.y();
				var z1 = this.rayTo.z();
				btRayTo = new Ammo.btVector3(x1,y1,z1);
				var btRayFrom;
				var x2 = this.rayFrom.x();
				var y2 = this.rayFrom.y();
				var z2 = this.rayFrom.z();
				btRayFrom = new Ammo.btVector3(x2,y2,z2);
				var dir;
				var x3 = btRayTo.x() - btRayFrom.x();
				var y3 = btRayTo.y() - btRayFrom.y();
				var z3 = btRayTo.z() - btRayFrom.z();
				dir = new Ammo.btVector3(x3,y3,z3);
				var bt = dir.normalize();
				bt.setX(bt.x() * this.pickDist);
				bt.setY(bt.y() * this.pickDist);
				bt.setZ(bt.z() * this.pickDist);
				var newPivotB;
				var x4 = btRayFrom.x() + bt.x();
				var y4 = btRayFrom.y() + bt.y();
				var z4 = btRayFrom.z() + bt.z();
				newPivotB = new Ammo.btVector3(x4,y4,z4);
				this.pickConstraint.getFrameOffsetA().setOrigin(newPivotB);
			}
		}
	}
	,updateRays: function() {
		this.rayFrom = this.physics.getRayFrom();
		this.rayTo = this.physics.getRayTo(lue_sys_Input.x,lue_sys_Input.y);
	}
	,__class__: cycles_trait_PhysicsDrag
});
var cycles_trait_ContactPair = function(a,b) {
	this.a = a;
	this.b = b;
};
$hxClasses["cycles.trait.ContactPair"] = cycles_trait_ContactPair;
cycles_trait_ContactPair.__name__ = ["cycles","trait","ContactPair"];
cycles_trait_ContactPair.prototype = {
	a: null
	,b: null
	,__class__: cycles_trait_ContactPair
};
var cycles_trait_PhysicsWorld = function() {
	this.contacts = [];
	lue_trait_Trait.call(this);
	this.rbMap = new haxe_ds_IntMap();
	var broadphase = new Ammo.btDbvtBroadphase();
	var collisionConfiguration = new Ammo.btDefaultCollisionConfiguration();
	this.dispatcher = new Ammo.btCollisionDispatcher(collisionConfiguration);
	var solver = new Ammo.btSequentialImpulseConstraintSolver();
	this.world = new Ammo.btDiscreteDynamicsWorld(this.dispatcher,broadphase,solver,collisionConfiguration);
	this.world.setGravity((function($this) {
		var $r;
		var _this = new Ammo.btVector3(0,0,-9.81);
		$r = _this;
		return $r;
	}(this)));
	this.requestUpdate($bind(this,this.update));
};
$hxClasses["cycles.trait.PhysicsWorld"] = cycles_trait_PhysicsWorld;
cycles_trait_PhysicsWorld.__name__ = ["cycles","trait","PhysicsWorld"];
cycles_trait_PhysicsWorld.__super__ = lue_trait_Trait;
cycles_trait_PhysicsWorld.prototype = $extend(lue_trait_Trait.prototype,{
	world: null
	,dispatcher: null
	,contacts: null
	,rbMap: null
	,addRigidBody: function(body) {
		this.world.addRigidBody(body.body);
		this.rbMap.h[body.id] = body;
	}
	,removeRigidBody: function(body) {
		this.world.removeRigidBody(body.body);
		Ammo.destroy(body.body);
		this.rbMap.remove(body.id);
	}
	,getContacts: function(body) {
		if(this.contacts.length == 0) return null;
		var res = [];
		var _g1 = 0;
		var _g = this.contacts.length;
		while(_g1 < _g) {
			var i = _g1++;
			var c = this.contacts[i];
			if(c.a == body.body.userIndex) res.push(this.rbMap.h[c.b]); else if(c.b == body.body.userIndex) res.push(this.rbMap.h[c.a]);
		}
		return res;
	}
	,update: function() {
		this.world.stepSimulation(0.0166666666666666664);
		this.updateContacts();
	}
	,updateContacts: function() {
		this.contacts = [];
		var numManifolds = this.dispatcher.getNumManifolds();
		var _g = 0;
		while(_g < numManifolds) {
			var i = _g++;
			var contactManifold = this.dispatcher.getManifoldByIndexInternal(i);
			var obA = contactManifold.getBody0();
			var obB = contactManifold.getBody1();
			var bodyA = Ammo.btRigidBody.prototype.upcast(obA);
			var bodyB = Ammo.btRigidBody.prototype.upcast(obB);
			var cp = new cycles_trait_ContactPair(bodyA.userIndex,bodyB.userIndex);
			var numContacts = contactManifold.getNumContacts();
			var _g1 = 0;
			while(_g1 < numContacts) {
				var j = _g1++;
				var pt = contactManifold.getContactPoint(j);
				if(pt.getDistance() < 0) {
					this.contacts.push(cp);
					break;
				}
			}
		}
	}
	,rayCallback: null
	,pickClosest: function(inputX,inputY) {
		var rayFrom = this.getRayFrom();
		var rayTo = this.getRayTo(inputX,inputY);
		this.rayCallback = new Ammo.ClosestRayResultCallback(rayFrom,rayTo);
		this.world.rayTest(rayFrom,rayTo,this.rayCallback);
		if(this.rayCallback.hasHit()) {
			var co = this.rayCallback.get_m_collisionObject();
			var body = Ammo.btRigidBody.prototype.upcast(co);
			return this.rbMap.h[body.userIndex];
		} else return null;
	}
	,getRayFrom: function() {
		var camera = lue_node_RootNode.cameras[0];
		return new Ammo.btVector3(camera.transform.pos.x,camera.transform.pos.y,camera.transform.pos.z);
	}
	,getRayTo: function(inputX,inputY) {
		var camera = lue_node_RootNode.cameras[0];
		var start = new lue_math_Vec4();
		var end = new lue_math_Vec4();
		lue_math_RayCaster.getDirection(start,end,inputX,inputY,camera);
		return new Ammo.btVector3(end.x,end.y,end.z);
	}
	,__class__: cycles_trait_PhysicsWorld
});
var cycles_trait_RigidBody = function(mass,shape,friction) {
	if(friction == null) friction = 0.5;
	if(shape == null) shape = 0;
	if(mass == null) mass = 1;
	this.onCreated = null;
	this.id = 0;
	this.body = null;
	lue_trait_Trait.call(this);
	this.mass = mass;
	this.shape = shape;
	this.friction = friction;
	this.requestInit($bind(this,this.init));
	this.requestUpdate($bind(this,this.update));
	this.requestRemove($bind(this,this.removeFromWorld));
};
$hxClasses["cycles.trait.RigidBody"] = cycles_trait_RigidBody;
cycles_trait_RigidBody.__name__ = ["cycles","trait","RigidBody"];
cycles_trait_RigidBody.__super__ = lue_trait_Trait;
cycles_trait_RigidBody.prototype = $extend(lue_trait_Trait.prototype,{
	shape: null
	,physics: null
	,transform: null
	,mass: null
	,friction: null
	,body: null
	,id: null
	,onCreated: null
	,init: function() {
		this.transform = this.node.transform;
		this.physics = cycles_Root.physics;
		if(this.body != null) return;
		var _shape = null;
		var _shapeConvex = null;
		if(this.shape == 0) {
			var boxHalfExtents;
			var _this = new Ammo.btVector3(this.transform.size.x / 2,this.transform.size.y / 2,this.transform.size.z / 2);
			boxHalfExtents = _this;
			_shape = new Ammo.btBoxShape(boxHalfExtents);
		} else if(this.shape == 1) _shape = new Ammo.btSphereShape(this.transform.size.x / 2); else if(this.shape == 2 || this.shape == 3) {
			_shapeConvex = new Ammo.btConvexHullShape();
			this.addPointsToConvexHull(_shapeConvex);
		} else if(this.shape == 4) _shape = new Ammo.btConeShapeZ(this.transform.size.x / 2,this.transform.size.z); else if(this.shape == 5) {
			var halfExtents;
			var _this1 = new Ammo.btVector3(this.transform.size.x / 2,this.transform.size.y / 2,this.transform.size.z / 2);
			halfExtents = _this1;
			_shape = new Ammo.btCylinderShapeZ(halfExtents);
		} else if(this.shape == 6) _shape = new Ammo.btCapsuleShapeZ(this.transform.size.x / 2,this.transform.size.z); else if(this.shape == 8 || this.shape == 7) {
			var meshInterface = new Ammo.btTriangleMesh(true,true);
			this.fillTriangleMesh(meshInterface);
			_shape = new Ammo.btBvhTriangleMeshShape(meshInterface,true,true);
		}
		var _transform = new Ammo.btTransform();
		_transform.setIdentity();
		_transform.setOrigin((function($this) {
			var $r;
			var _this2 = new Ammo.btVector3($this.transform.pos.x,$this.transform.pos.y,$this.transform.pos.z);
			$r = _this2;
			return $r;
		}(this)));
		_transform.setRotation((function($this) {
			var $r;
			var _this3 = new Ammo.btQuaternion($this.transform.rot.x,$this.transform.rot.y,$this.transform.rot.z,$this.transform.rot.w);
			$r = _this3;
			return $r;
		}(this)));
		var _centerOfMassOffset = new Ammo.btTransform();
		_centerOfMassOffset.setIdentity();
		var _motionState = new Ammo.btDefaultMotionState(_transform,_centerOfMassOffset);
		var _inertia = new Ammo.btVector3(0,0,0);
		if(_shapeConvex == null) {
			if(this.shape != 8 && this.shape != 7) _shape.calculateLocalInertia(this.mass,_inertia);
			var _bodyCI = new Ammo.btRigidBodyConstructionInfo(this.mass,_motionState,_shape,_inertia);
			this.body = new Ammo.btRigidBody(_bodyCI);
			this.body.setFriction(this.friction);
			this.body.setRollingFriction(this.friction);
		} else {
			_shapeConvex.calculateLocalInertia(this.mass,_inertia);
			var _bodyCI1 = new Ammo.btRigidBodyConstructionInfo(this.mass,_motionState,_shapeConvex,_inertia);
			this.body = new Ammo.btRigidBody(_bodyCI1);
		}
		this.id = cycles_trait_RigidBody.nextId;
		cycles_trait_RigidBody.nextId++;
		this.body.userIndex = this.id;
		this.physics.addRigidBody(this);
		if(this.onCreated != null) this.onCreated();
	}
	,update: function() {
		var trans = this.body.getWorldTransform();
		var p = trans.getOrigin();
		var q = trans.getRotation();
		this.transform.pos.set(p.x(),p.y(),p.z());
		this.transform.rot.set(q.x(),q.y(),q.z(),q.w());
		this.transform.dirty = true;
		this.transform.update();
	}
	,removeFromWorld: function() {
		this.physics.removeRigidBody(this);
	}
	,activate: function() {
		this.body.activate(false);
	}
	,disableGravity: function() {
		this.setLinearFactor(0,0,0);
		this.setAngularFactor(0,0,0);
	}
	,applyImpulse: function(impulse,pos) {
		if(pos == null) this.body.applyCentralImpulse((function($this) {
			var $r;
			var _this = new Ammo.btVector3(impulse.x,impulse.y,impulse.z);
			$r = _this;
			return $r;
		}(this))); else this.body.applyImpulse((function($this) {
			var $r;
			var _this1 = new Ammo.btVector3(impulse.x,impulse.y,impulse.z);
			$r = _this1;
			return $r;
		}(this)),(function($this) {
			var $r;
			var _this2 = new Ammo.btVector3(pos.x,pos.y,pos.z);
			$r = _this2;
			return $r;
		}(this)));
	}
	,setLinearFactor: function(x,y,z) {
		this.body.setLinearFactor((function($this) {
			var $r;
			var _this = new Ammo.btVector3(x,y,z);
			$r = _this;
			return $r;
		}(this)));
	}
	,setAngularFactor: function(x,y,z) {
		this.body.setAngularFactor((function($this) {
			var $r;
			var _this = new Ammo.btVector3(x,y,z);
			$r = _this;
			return $r;
		}(this)));
	}
	,setLinearVelocity: function(x,y,z) {
		this.body.setLinearVelocity((function($this) {
			var $r;
			var _this = new Ammo.btVector3(x,y,z);
			$r = _this;
			return $r;
		}(this)));
	}
	,setAngularVelocity: function(x,y,z) {
		this.body.setAngularVelocity((function($this) {
			var $r;
			var _this = new Ammo.btVector3(x,y,z);
			$r = _this;
			return $r;
		}(this)));
	}
	,syncTransform: function() {
		var trans = new Ammo.btTransform();
		trans.setOrigin((function($this) {
			var $r;
			var _this = new Ammo.btVector3($this.transform.pos.x,$this.transform.pos.y,$this.transform.pos.z);
			$r = _this;
			return $r;
		}(this)));
		trans.setRotation((function($this) {
			var $r;
			var _this1 = new Ammo.btQuaternion($this.transform.rot.x,$this.transform.rot.y,$this.transform.rot.z,$this.transform.rot.w);
			$r = _this1;
			return $r;
		}(this)));
		this.body.setCenterOfMassTransform(trans);
	}
	,addPointsToConvexHull: function(shape) {
		var positions;
		positions = (js_Boot.__cast(this.node , lue_node_ModelNode)).resource.geometry.positions;
		var _g1 = 0;
		var _g = positions.length / 3 | 0;
		while(_g1 < _g) {
			var i = _g1++;
			shape.addPoint((function($this) {
				var $r;
				var _this = new Ammo.btVector3(positions[i * 3],positions[i * 3 + 1],positions[i * 3 + 2]);
				$r = _this;
				return $r;
			}(this)),true);
		}
	}
	,fillTriangleMesh: function(triangleMesh) {
		var positions;
		positions = (js_Boot.__cast(this.node , lue_node_ModelNode)).resource.geometry.positions;
		var indices;
		indices = (js_Boot.__cast(this.node , lue_node_ModelNode)).resource.geometry.indices;
		var _g1 = 0;
		var _g = indices[0].length / 3 | 0;
		while(_g1 < _g) {
			var i = _g1++;
			triangleMesh.addTriangle((function($this) {
				var $r;
				var _this = new Ammo.btVector3(positions[indices[0][i * 3] * 3],positions[indices[0][i * 3] * 3 + 1],positions[indices[0][i * 3] * 3 + 2]);
				$r = _this;
				return $r;
			}(this)),(function($this) {
				var $r;
				var _this1 = new Ammo.btVector3(positions[indices[0][i * 3 + 1] * 3],positions[indices[0][i * 3 + 1] * 3 + 1],positions[indices[0][i * 3 + 1] * 3 + 2]);
				$r = _this1;
				return $r;
			}(this)),(function($this) {
				var $r;
				var _this2 = new Ammo.btVector3(positions[indices[0][i * 3 + 2] * 3],positions[indices[0][i * 3 + 2] * 3 + 1],positions[indices[0][i * 3 + 2] * 3 + 2]);
				$r = _this2;
				return $r;
			}(this)));
		}
	}
	,__class__: cycles_trait_RigidBody
});
var cycles_trait_SceneInstance = function(sceneId) {
	var _g = this;
	lue_trait_Trait.call(this);
	this.requestInit(function() {
		lue_Eg.addScene(sceneId,_g.node);
	});
};
$hxClasses["cycles.trait.SceneInstance"] = cycles_trait_SceneInstance;
cycles_trait_SceneInstance.__name__ = ["cycles","trait","SceneInstance"];
cycles_trait_SceneInstance.__super__ = lue_trait_Trait;
cycles_trait_SceneInstance.prototype = $extend(lue_trait_Trait.prototype,{
	__class__: cycles_trait_SceneInstance
});
var cycles_trait_VehicleBody = function(wheelName1,wheelName2,wheelName3,wheelName4) {
	this.right = false;
	this.left = false;
	this.down = false;
	this.up = false;
	this.maxBreakingForce = 100.0;
	this.maxEngineForce = 3000.0;
	this.gVehicleSteering = 0.0;
	this.gBreakingForce = 0.0;
	this.gEngineForce = 0.0;
	this.m_vehicle = null;
	this.wheels = [];
	lue_trait_Trait.call(this);
	this.wheelNames = [wheelName1,wheelName2,wheelName3,wheelName4];
	this.requestInit($bind(this,this.init));
	this.requestUpdate($bind(this,this.update));
	kha_input_Keyboard.get().notify($bind(this,this.onKeyDown),$bind(this,this.onKeyUp));
};
$hxClasses["cycles.trait.VehicleBody"] = cycles_trait_VehicleBody;
cycles_trait_VehicleBody.__name__ = ["cycles","trait","VehicleBody"];
cycles_trait_VehicleBody.__super__ = lue_trait_Trait;
cycles_trait_VehicleBody.prototype = $extend(lue_trait_Trait.prototype,{
	physics: null
	,transform: null
	,camera: null
	,wheels: null
	,wheelNames: null
	,m_vehicle: null
	,m_carChassis: null
	,startTransform: null
	,gEngineForce: null
	,gBreakingForce: null
	,gVehicleSteering: null
	,maxEngineForce: null
	,maxBreakingForce: null
	,up: null
	,down: null
	,left: null
	,right: null
	,onKeyDown: function(key,$char) {
		if(key == kha_Key.UP) this.up = true; else if(key == kha_Key.DOWN) this.down = true; else if(key == kha_Key.LEFT) this.left = true; else if(key == kha_Key.RIGHT) this.right = true;
	}
	,onKeyUp: function(key,$char) {
		if(key == kha_Key.UP) this.up = false; else if(key == kha_Key.DOWN) this.down = false; else if(key == kha_Key.LEFT) this.left = false; else if(key == kha_Key.RIGHT) this.right = false;
	}
	,init: function() {
		this.physics = cycles_Root.physics;
		this.transform = this.node.transform;
		this.camera = lue_node_RootNode.cameras[0];
		var _g = 0;
		var _g1 = this.wheelNames;
		while(_g < _g1.length) {
			var n = _g1[_g];
			++_g;
			this.wheels.push(lue_Eg.root.getChild(n).getTrait(cycles_trait_VehicleWheel));
		}
		var rightIndex = 0;
		var upIndex = 2;
		var forwardIndex = 1;
		var wheelDirectionCS0 = new Ammo.btVector3(0,0,-1);
		var wheelAxleCS = new Ammo.btVector3(1,0,0);
		var wheelFriction = 1000;
		var suspensionStiffness = 20.0;
		var suspensionDamping = 2.3;
		var suspensionCompression = 4.4;
		var suspensionRestLength = 0.6;
		var rollInfluence = 0.1;
		var chassisShape;
		var boxHalfExtents;
		var _this = new Ammo.btVector3(this.transform.size.x / 2,this.transform.size.y / 2,this.transform.size.z / 2);
		boxHalfExtents = _this;
		chassisShape = new Ammo.btBoxShape(boxHalfExtents);
		var compound = new Ammo.btCompoundShape(true);
		var localTrans = new Ammo.btTransform();
		localTrans.setIdentity();
		localTrans.setOrigin((function($this) {
			var $r;
			var _this1 = new Ammo.btVector3(0,0,1);
			$r = _this1;
			return $r;
		}(this)));
		compound.addChildShape(localTrans,chassisShape);
		var tr = new Ammo.btTransform();
		tr.setIdentity();
		tr.setOrigin((function($this) {
			var $r;
			var _this2 = new Ammo.btVector3($this.transform.pos.x,$this.transform.pos.y,$this.transform.pos.z);
			$r = _this2;
			return $r;
		}(this)));
		tr.setRotation((function($this) {
			var $r;
			var _this3 = new Ammo.btQuaternion($this.transform.rot.x,$this.transform.rot.y,$this.transform.rot.z,$this.transform.rot.w);
			$r = _this3;
			return $r;
		}(this)));
		this.startTransform = tr;
		this.m_carChassis = this.createRigidBody(500,compound);
		var m_tuning = new Ammo.btVehicleTuning();
		var m_vehicleRayCaster = new Ammo.btDefaultVehicleRaycaster(this.physics.world);
		this.m_vehicle = new Ammo.btRaycastVehicle(m_tuning,this.m_carChassis,m_vehicleRayCaster);
		this.m_carChassis.setActivationState(4);
		this.m_vehicle.setCoordinateSystem(rightIndex,upIndex,forwardIndex);
		var _g2 = 0;
		var _g11 = this.wheels;
		while(_g2 < _g11.length) {
			var w = _g11[_g2];
			++_g2;
			this.m_vehicle.addWheel(w.connectionPointCS0,wheelDirectionCS0,wheelAxleCS,suspensionRestLength,w.wheelRadius,m_tuning,w.isFrontWheel);
		}
		var _g12 = 0;
		var _g3 = this.m_vehicle.getNumWheels();
		while(_g12 < _g3) {
			var i = _g12++;
			var wheel = this.m_vehicle.getWheelInfo(i);
			wheel.m_suspensionStiffness = suspensionStiffness;
			wheel.m_wheelsDampingRelaxation = suspensionDamping;
			wheel.m_wheelsDampingCompression = suspensionCompression;
			wheel.m_frictionSlip = wheelFriction;
			wheel.m_rollInfluence = rollInfluence;
		}
		this.physics.world.addAction(this.m_vehicle);
	}
	,update: function() {
		if(this.m_vehicle == null) return;
		if(this.up) this.gEngineForce = this.maxEngineForce; else if(this.down) this.gEngineForce = -this.maxEngineForce; else {
			this.gEngineForce = 0;
			this.gBreakingForce = 20;
		}
		if(this.left) this.gVehicleSteering = 0.3; else if(this.right) this.gVehicleSteering = -0.3; else this.gVehicleSteering = 0;
		this.m_vehicle.applyEngineForce(this.gEngineForce,2);
		this.m_vehicle.setBrake(this.gBreakingForce,2);
		this.m_vehicle.applyEngineForce(this.gEngineForce,3);
		this.m_vehicle.setBrake(this.gBreakingForce,3);
		this.m_vehicle.setSteeringValue(this.gVehicleSteering,0);
		this.m_vehicle.setSteeringValue(this.gVehicleSteering,1);
		var _g1 = 0;
		var _g = this.m_vehicle.getNumWheels();
		while(_g1 < _g) {
			var i = _g1++;
			this.m_vehicle.updateWheelTransform(i,true);
			var trans1 = this.m_vehicle.getWheelTransformWS(i);
			var p1 = trans1.getOrigin();
			var q1 = trans1.getRotation();
			this.wheels[i].node.transform.pos.set(p1.x(),p1.y(),p1.z());
			this.wheels[i].node.transform.rot.set(q1.x(),q1.y(),q1.z(),q1.w());
			this.wheels[i].node.transform.dirty = true;
		}
		var trans = this.m_carChassis.getWorldTransform();
		var p = trans.getOrigin();
		var q = trans.getRotation();
		this.transform.pos.set(p.x(),p.y(),p.z());
		this.transform.rot.set(q.x(),q.y(),q.z(),q.w());
		var up = this.transform.matrix.up(null);
		this.transform.pos.add(up);
		this.transform.dirty = true;
		this.camera.updateMatrix();
	}
	,createRigidBody: function(mass,shape) {
		var localInertia = new Ammo.btVector3(0,0,0);
		shape.calculateLocalInertia(mass,localInertia);
		var centerOfMassOffset = new Ammo.btTransform();
		centerOfMassOffset.setIdentity();
		var myMotionState = new Ammo.btDefaultMotionState(this.startTransform,centerOfMassOffset);
		var cInfo;
		var _this = new Ammo.btRigidBodyConstructionInfo(mass,myMotionState,shape,localInertia);
		cInfo = _this;
		var body = new Ammo.btRigidBody(cInfo);
		body.setLinearVelocity((function($this) {
			var $r;
			var _this1 = new Ammo.btVector3(0,0,0);
			$r = _this1;
			return $r;
		}(this)));
		body.setAngularVelocity((function($this) {
			var $r;
			var _this2 = new Ammo.btVector3(0,0,0);
			$r = _this2;
			return $r;
		}(this)));
		this.physics.world.addRigidBody(body);
		return body;
	}
	,__class__: cycles_trait_VehicleBody
});
var cycles_trait_VehicleWheel = function(id) {
	this.wheelWidth = 0.53;
	this.wheelRadius = 0.75;
	lue_trait_Trait.call(this);
	this.id = id;
	var VEHICLE_FRONT_X = 1.75;
	var VEHICLE_BACK_X = 2.05;
	var VEHICLE_FRONT_Y = 3.6;
	var VEHICLE_BACK_Y = 3.5;
	var CONNECTION_HEIGHT_FRONT = 0.3;
	var CONNECTION_HEIGHT_BACK = 0.4;
	if(id == 0) {
		this.isFrontWheel = true;
		this.connectionPointCS0 = new Ammo.btVector3(VEHICLE_FRONT_X - 0.3 * this.wheelWidth,VEHICLE_FRONT_Y - this.wheelRadius,CONNECTION_HEIGHT_FRONT);
	} else if(id == 1) {
		this.isFrontWheel = true;
		this.connectionPointCS0 = new Ammo.btVector3(-VEHICLE_FRONT_X + 0.3 * this.wheelWidth,VEHICLE_FRONT_Y - this.wheelRadius,CONNECTION_HEIGHT_FRONT);
	} else if(id == 2) {
		this.isFrontWheel = false;
		this.connectionPointCS0 = new Ammo.btVector3(-VEHICLE_BACK_X + 0.3 * this.wheelWidth,-VEHICLE_BACK_Y + this.wheelRadius,CONNECTION_HEIGHT_BACK);
	} else if(id == 3) {
		this.isFrontWheel = false;
		this.connectionPointCS0 = new Ammo.btVector3(VEHICLE_BACK_X - 0.3 * this.wheelWidth,-VEHICLE_BACK_Y + this.wheelRadius,CONNECTION_HEIGHT_BACK);
	}
};
$hxClasses["cycles.trait.VehicleWheel"] = cycles_trait_VehicleWheel;
cycles_trait_VehicleWheel.__name__ = ["cycles","trait","VehicleWheel"];
cycles_trait_VehicleWheel.__super__ = lue_trait_Trait;
cycles_trait_VehicleWheel.prototype = $extend(lue_trait_Trait.prototype,{
	connectionPointCS0: null
	,isFrontWheel: null
	,wheelRadius: null
	,wheelWidth: null
	,id: null
	,__class__: cycles_trait_VehicleWheel
});
var game_ArcBall = function() {
	lue_trait_Trait.call(this);
	this.origin = new lue_math_Vec4();
	this.requestInit($bind(this,this.init));
	this.requestUpdate($bind(this,this.update));
};
$hxClasses["game.ArcBall"] = game_ArcBall;
game_ArcBall.__name__ = ["game","ArcBall"];
game_ArcBall.__super__ = lue_trait_Trait;
game_ArcBall.prototype = $extend(lue_trait_Trait.prototype,{
	camera: null
	,origin: null
	,pitchRad: null
	,init: function() {
		this.camera = lue_node_RootNode.cameras[0];
		var r = this.camera.transform.rot;
		var q = new lue_math_Quat(r.x,r.y,r.z,r.w);
		q.inverse(q);
		var e = q.getEuler();
		this.pitchRad = 1.57079632679489656 - e.x;
	}
	,update: function() {
	}
	,__class__: game_ArcBall
});
var game_FlyCamera = function() {
	this.strafeRight = false;
	this.strafeLeft = false;
	this.moveBackward = false;
	this.moveForward = false;
	lue_trait_Trait.call(this);
	kha_input_Keyboard.get().notify($bind(this,this.onKeyDown),$bind(this,this.onKeyUp));
	this.requestInit($bind(this,this.init));
	this.requestUpdate($bind(this,this.update));
};
$hxClasses["game.FlyCamera"] = game_FlyCamera;
game_FlyCamera.__name__ = ["game","FlyCamera"];
game_FlyCamera.__super__ = lue_trait_Trait;
game_FlyCamera.prototype = $extend(lue_trait_Trait.prototype,{
	camera: null
	,pitchRad: null
	,moveForward: null
	,moveBackward: null
	,strafeLeft: null
	,strafeRight: null
	,init: function() {
		this.camera = lue_node_RootNode.cameras[0];
		var r = this.camera.transform.rot;
		var q = new lue_math_Quat(r.x,r.y,r.z,r.w);
		q.inverse(q);
		var e = q.getEuler();
		this.pitchRad = 1.57079632679489656 - e.x;
	}
	,update: function() {
		var d = lue_sys_Time.delta * 5;
		if(this.moveForward) this.camera.move(this.camera.look(),d); else if(this.moveBackward) this.camera.move(this.camera.look(),-d);
		if(this.strafeRight) this.camera.move(this.camera.right(),-d); else if(this.strafeLeft) this.camera.move(this.camera.right(),d);
		if(lue_sys_Input.touch) {
			this.camera.rotate(this.camera.up(),lue_sys_Input.deltaX / 200);
			this.camera.rotate(this.camera.right(),lue_sys_Input.deltaY / 200);
		}
	}
	,onKeyDown: function(key,$char) {
		if($char == "w") this.moveForward = true; else if($char == "s") this.moveBackward = true; else if($char == "a") this.strafeLeft = true; else if($char == "d") this.strafeRight = true;
	}
	,onKeyUp: function(key,$char) {
		if($char == "w") this.moveForward = false; else if($char == "s") this.moveBackward = false; else if($char == "a") this.strafeLeft = false; else if($char == "d") this.strafeRight = false;
	}
	,__class__: game_FlyCamera
});
var game_node_NodeTree = function() {
	cycles_trait_NodeExecutor.call(this);
	this.requestAdd($bind(this,this.add));
};
$hxClasses["game.node.NodeTree"] = game_node_NodeTree;
game_node_NodeTree.__name__ = ["game","node","NodeTree"];
game_node_NodeTree.__super__ = cycles_trait_NodeExecutor;
game_node_NodeTree.prototype = $extend(cycles_trait_NodeExecutor.prototype,{
	add: function() {
		var _Transform = new cycles_node_TransformNode();
		_Transform.transform = this.node.transform;
		_Transform.inputs.push(cycles_node_VectorNode.create(0.0,0.0,0.0));
		var _Vector = new cycles_node_VectorNode();
		_Vector.inputs.push(cycles_node_FloatNode.create(0.0));
		_Vector.inputs.push(cycles_node_FloatNode.create(0.0));
		var _Time = new cycles_node_TimeNode();
		_Time.inputs.push(cycles_node_FloatNode.create(0.0));
		_Time.inputs.push(cycles_node_FloatNode.create(-1.0));
		_Time.inputs.push(cycles_node_FloatNode.create(0.20000000298023224));
		_Time.inputs.push(cycles_node_BoolNode.create(true));
		_Time.inputs.push(cycles_node_BoolNode.create(false));
		_Time.inputs.push(cycles_node_BoolNode.create(false));
		_Vector.inputs.push(_Time);
		_Transform.inputs.push(_Vector);
		_Transform.inputs.push(cycles_node_VectorNode.create(1.0,1.0,1.0));
		this.start(_Transform);
	}
	,__class__: game_node_NodeTree
});
var haxe_IMap = function() { };
$hxClasses["haxe.IMap"] = haxe_IMap;
haxe_IMap.__name__ = ["haxe","IMap"];
haxe_IMap.prototype = {
	get: null
	,set: null
	,exists: null
	,__class__: haxe_IMap
};
var haxe_Log = function() { };
$hxClasses["haxe.Log"] = haxe_Log;
haxe_Log.__name__ = ["haxe","Log"];
haxe_Log.trace = function(v,infos) {
	js_Boot.__trace(v,infos);
};
var haxe_Serializer = function() {
	this.buf = new StringBuf();
	this.cache = [];
	this.useCache = haxe_Serializer.USE_CACHE;
	this.useEnumIndex = haxe_Serializer.USE_ENUM_INDEX;
	this.shash = new haxe_ds_StringMap();
	this.scount = 0;
};
$hxClasses["haxe.Serializer"] = haxe_Serializer;
haxe_Serializer.__name__ = ["haxe","Serializer"];
haxe_Serializer.run = function(v) {
	var s = new haxe_Serializer();
	s.serialize(v);
	return s.toString();
};
haxe_Serializer.prototype = {
	buf: null
	,cache: null
	,shash: null
	,scount: null
	,useCache: null
	,useEnumIndex: null
	,toString: function() {
		return this.buf.b;
	}
	,serializeString: function(s) {
		var x = this.shash.get(s);
		if(x != null) {
			this.buf.b += "R";
			if(x == null) this.buf.b += "null"; else this.buf.b += "" + x;
			return;
		}
		this.shash.set(s,this.scount++);
		this.buf.b += "y";
		s = encodeURIComponent(s);
		if(s.length == null) this.buf.b += "null"; else this.buf.b += "" + s.length;
		this.buf.b += ":";
		if(s == null) this.buf.b += "null"; else this.buf.b += "" + s;
	}
	,serializeRef: function(v) {
		var vt = typeof(v);
		var _g1 = 0;
		var _g = this.cache.length;
		while(_g1 < _g) {
			var i = _g1++;
			var ci = this.cache[i];
			if(typeof(ci) == vt && ci == v) {
				this.buf.b += "r";
				if(i == null) this.buf.b += "null"; else this.buf.b += "" + i;
				return true;
			}
		}
		this.cache.push(v);
		return false;
	}
	,serializeFields: function(v) {
		var _g = 0;
		var _g1 = Reflect.fields(v);
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			this.serializeString(f);
			this.serialize(Reflect.field(v,f));
		}
		this.buf.b += "g";
	}
	,serialize: function(v) {
		{
			var _g = Type["typeof"](v);
			switch(_g[1]) {
			case 0:
				this.buf.b += "n";
				break;
			case 1:
				var v1 = v;
				if(v1 == 0) {
					this.buf.b += "z";
					return;
				}
				this.buf.b += "i";
				if(v1 == null) this.buf.b += "null"; else this.buf.b += "" + v1;
				break;
			case 2:
				var v2 = v;
				if(isNaN(v2)) this.buf.b += "k"; else if(!isFinite(v2)) if(v2 < 0) this.buf.b += "m"; else this.buf.b += "p"; else {
					this.buf.b += "d";
					if(v2 == null) this.buf.b += "null"; else this.buf.b += "" + v2;
				}
				break;
			case 3:
				if(v) this.buf.b += "t"; else this.buf.b += "f";
				break;
			case 6:
				var c = _g[2];
				if(c == String) {
					this.serializeString(v);
					return;
				}
				if(this.useCache && this.serializeRef(v)) return;
				switch(c) {
				case Array:
					var ucount = 0;
					this.buf.b += "a";
					var l = v.length;
					var _g1 = 0;
					while(_g1 < l) {
						var i = _g1++;
						if(v[i] == null) ucount++; else {
							if(ucount > 0) {
								if(ucount == 1) this.buf.b += "n"; else {
									this.buf.b += "u";
									if(ucount == null) this.buf.b += "null"; else this.buf.b += "" + ucount;
								}
								ucount = 0;
							}
							this.serialize(v[i]);
						}
					}
					if(ucount > 0) {
						if(ucount == 1) this.buf.b += "n"; else {
							this.buf.b += "u";
							if(ucount == null) this.buf.b += "null"; else this.buf.b += "" + ucount;
						}
					}
					this.buf.b += "h";
					break;
				case List:
					this.buf.b += "l";
					var v3 = v;
					var _g1_head = v3.h;
					var _g1_val = null;
					while(_g1_head != null) {
						var i1;
						_g1_val = _g1_head[0];
						_g1_head = _g1_head[1];
						i1 = _g1_val;
						this.serialize(i1);
					}
					this.buf.b += "h";
					break;
				case Date:
					var d = v;
					this.buf.b += "v";
					this.buf.add(d.getTime());
					break;
				case haxe_ds_StringMap:
					this.buf.b += "b";
					var v4 = v;
					var $it0 = v4.keys();
					while( $it0.hasNext() ) {
						var k = $it0.next();
						this.serializeString(k);
						this.serialize(__map_reserved[k] != null?v4.getReserved(k):v4.h[k]);
					}
					this.buf.b += "h";
					break;
				case haxe_ds_IntMap:
					this.buf.b += "q";
					var v5 = v;
					var $it1 = v5.keys();
					while( $it1.hasNext() ) {
						var k1 = $it1.next();
						this.buf.b += ":";
						if(k1 == null) this.buf.b += "null"; else this.buf.b += "" + k1;
						this.serialize(v5.h[k1]);
					}
					this.buf.b += "h";
					break;
				case haxe_ds_ObjectMap:
					this.buf.b += "M";
					var v6 = v;
					var $it2 = v6.keys();
					while( $it2.hasNext() ) {
						var k2 = $it2.next();
						var id = Reflect.field(k2,"__id__");
						Reflect.deleteField(k2,"__id__");
						this.serialize(k2);
						k2.__id__ = id;
						this.serialize(v6.h[k2.__id__]);
					}
					this.buf.b += "h";
					break;
				case haxe_io_Bytes:
					var v7 = v;
					var i2 = 0;
					var max = v7.length - 2;
					var charsBuf = new StringBuf();
					var b64 = haxe_Serializer.BASE64;
					while(i2 < max) {
						var b1 = v7.get(i2++);
						var b2 = v7.get(i2++);
						var b3 = v7.get(i2++);
						charsBuf.add(b64.charAt(b1 >> 2));
						charsBuf.add(b64.charAt((b1 << 4 | b2 >> 4) & 63));
						charsBuf.add(b64.charAt((b2 << 2 | b3 >> 6) & 63));
						charsBuf.add(b64.charAt(b3 & 63));
					}
					if(i2 == max) {
						var b11 = v7.get(i2++);
						var b21 = v7.get(i2++);
						charsBuf.add(b64.charAt(b11 >> 2));
						charsBuf.add(b64.charAt((b11 << 4 | b21 >> 4) & 63));
						charsBuf.add(b64.charAt(b21 << 2 & 63));
					} else if(i2 == max + 1) {
						var b12 = v7.get(i2++);
						charsBuf.add(b64.charAt(b12 >> 2));
						charsBuf.add(b64.charAt(b12 << 4 & 63));
					}
					var chars = charsBuf.b;
					this.buf.b += "s";
					if(chars.length == null) this.buf.b += "null"; else this.buf.b += "" + chars.length;
					this.buf.b += ":";
					if(chars == null) this.buf.b += "null"; else this.buf.b += "" + chars;
					break;
				default:
					if(this.useCache) this.cache.pop();
					if(v.hxSerialize != null) {
						this.buf.b += "C";
						this.serializeString(Type.getClassName(c));
						if(this.useCache) this.cache.push(v);
						v.hxSerialize(this);
						this.buf.b += "g";
					} else {
						this.buf.b += "c";
						this.serializeString(Type.getClassName(c));
						if(this.useCache) this.cache.push(v);
						this.serializeFields(v);
					}
				}
				break;
			case 4:
				if(js_Boot.__instanceof(v,Class)) {
					var className = Type.getClassName(v);
					this.buf.b += "A";
					this.serializeString(className);
				} else if(js_Boot.__instanceof(v,Enum)) {
					this.buf.b += "B";
					this.serializeString(Type.getEnumName(v));
				} else {
					if(this.useCache && this.serializeRef(v)) return;
					this.buf.b += "o";
					this.serializeFields(v);
				}
				break;
			case 7:
				var e = _g[2];
				if(this.useCache) {
					if(this.serializeRef(v)) return;
					this.cache.pop();
				}
				if(this.useEnumIndex) this.buf.b += "j"; else this.buf.b += "w";
				this.serializeString(Type.getEnumName(e));
				if(this.useEnumIndex) {
					this.buf.b += ":";
					this.buf.b += Std.string(v[1]);
				} else this.serializeString(v[0]);
				this.buf.b += ":";
				var l1 = v.length;
				this.buf.b += Std.string(l1 - 2);
				var _g11 = 2;
				while(_g11 < l1) {
					var i3 = _g11++;
					this.serialize(v[i3]);
				}
				if(this.useCache) this.cache.push(v);
				break;
			case 5:
				throw new js__$Boot_HaxeError("Cannot serialize function");
				break;
			default:
				throw new js__$Boot_HaxeError("Cannot serialize " + Std.string(v));
			}
		}
	}
	,__class__: haxe_Serializer
};
var haxe_Unserializer = function(buf) {
	this.buf = buf;
	this.length = buf.length;
	this.pos = 0;
	this.scache = [];
	this.cache = [];
	var r = haxe_Unserializer.DEFAULT_RESOLVER;
	if(r == null) {
		r = Type;
		haxe_Unserializer.DEFAULT_RESOLVER = r;
	}
	this.setResolver(r);
};
$hxClasses["haxe.Unserializer"] = haxe_Unserializer;
haxe_Unserializer.__name__ = ["haxe","Unserializer"];
haxe_Unserializer.initCodes = function() {
	var codes = [];
	var _g1 = 0;
	var _g = haxe_Unserializer.BASE64.length;
	while(_g1 < _g) {
		var i = _g1++;
		codes[haxe_Unserializer.BASE64.charCodeAt(i)] = i;
	}
	return codes;
};
haxe_Unserializer.run = function(v) {
	return new haxe_Unserializer(v).unserialize();
};
haxe_Unserializer.prototype = {
	buf: null
	,pos: null
	,length: null
	,cache: null
	,scache: null
	,resolver: null
	,setResolver: function(r) {
		if(r == null) this.resolver = { resolveClass : function(_) {
			return null;
		}, resolveEnum : function(_1) {
			return null;
		}}; else this.resolver = r;
	}
	,get: function(p) {
		return this.buf.charCodeAt(p);
	}
	,readDigits: function() {
		var k = 0;
		var s = false;
		var fpos = this.pos;
		while(true) {
			var c = this.buf.charCodeAt(this.pos);
			if(c != c) break;
			if(c == 45) {
				if(this.pos != fpos) break;
				s = true;
				this.pos++;
				continue;
			}
			if(c < 48 || c > 57) break;
			k = k * 10 + (c - 48);
			this.pos++;
		}
		if(s) k *= -1;
		return k;
	}
	,readFloat: function() {
		var p1 = this.pos;
		while(true) {
			var c = this.buf.charCodeAt(this.pos);
			if(c >= 43 && c < 58 || c == 101 || c == 69) this.pos++; else break;
		}
		return Std.parseFloat(HxOverrides.substr(this.buf,p1,this.pos - p1));
	}
	,unserializeObject: function(o) {
		while(true) {
			if(this.pos >= this.length) throw new js__$Boot_HaxeError("Invalid object");
			if(this.buf.charCodeAt(this.pos) == 103) break;
			var k = this.unserialize();
			if(!(typeof(k) == "string")) throw new js__$Boot_HaxeError("Invalid object key");
			var v = this.unserialize();
			o[k] = v;
		}
		this.pos++;
	}
	,unserializeEnum: function(edecl,tag) {
		if(this.get(this.pos++) != 58) throw new js__$Boot_HaxeError("Invalid enum format");
		var nargs = this.readDigits();
		if(nargs == 0) return Type.createEnum(edecl,tag);
		var args = [];
		while(nargs-- > 0) args.push(this.unserialize());
		return Type.createEnum(edecl,tag,args);
	}
	,unserialize: function() {
		var _g = this.get(this.pos++);
		switch(_g) {
		case 110:
			return null;
		case 116:
			return true;
		case 102:
			return false;
		case 122:
			return 0;
		case 105:
			return this.readDigits();
		case 100:
			return this.readFloat();
		case 121:
			var len = this.readDigits();
			if(this.get(this.pos++) != 58 || this.length - this.pos < len) throw new js__$Boot_HaxeError("Invalid string length");
			var s = HxOverrides.substr(this.buf,this.pos,len);
			this.pos += len;
			s = decodeURIComponent(s.split("+").join(" "));
			this.scache.push(s);
			return s;
		case 107:
			return NaN;
		case 109:
			return -Infinity;
		case 112:
			return Infinity;
		case 97:
			var buf = this.buf;
			var a = [];
			this.cache.push(a);
			while(true) {
				var c = this.buf.charCodeAt(this.pos);
				if(c == 104) {
					this.pos++;
					break;
				}
				if(c == 117) {
					this.pos++;
					var n = this.readDigits();
					a[a.length + n - 1] = null;
				} else a.push(this.unserialize());
			}
			return a;
		case 111:
			var o = { };
			this.cache.push(o);
			this.unserializeObject(o);
			return o;
		case 114:
			var n1 = this.readDigits();
			if(n1 < 0 || n1 >= this.cache.length) throw new js__$Boot_HaxeError("Invalid reference");
			return this.cache[n1];
		case 82:
			var n2 = this.readDigits();
			if(n2 < 0 || n2 >= this.scache.length) throw new js__$Boot_HaxeError("Invalid string reference");
			return this.scache[n2];
		case 120:
			throw new js__$Boot_HaxeError(this.unserialize());
			break;
		case 99:
			var name = this.unserialize();
			var cl = this.resolver.resolveClass(name);
			if(cl == null) throw new js__$Boot_HaxeError("Class not found " + name);
			var o1 = Type.createEmptyInstance(cl);
			this.cache.push(o1);
			this.unserializeObject(o1);
			return o1;
		case 119:
			var name1 = this.unserialize();
			var edecl = this.resolver.resolveEnum(name1);
			if(edecl == null) throw new js__$Boot_HaxeError("Enum not found " + name1);
			var e = this.unserializeEnum(edecl,this.unserialize());
			this.cache.push(e);
			return e;
		case 106:
			var name2 = this.unserialize();
			var edecl1 = this.resolver.resolveEnum(name2);
			if(edecl1 == null) throw new js__$Boot_HaxeError("Enum not found " + name2);
			this.pos++;
			var index = this.readDigits();
			var tag = Type.getEnumConstructs(edecl1)[index];
			if(tag == null) throw new js__$Boot_HaxeError("Unknown enum index " + name2 + "@" + index);
			var e1 = this.unserializeEnum(edecl1,tag);
			this.cache.push(e1);
			return e1;
		case 108:
			var l = new List();
			this.cache.push(l);
			var buf1 = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) l.add(this.unserialize());
			this.pos++;
			return l;
		case 98:
			var h = new haxe_ds_StringMap();
			this.cache.push(h);
			var buf2 = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) {
				var s1 = this.unserialize();
				h.set(s1,this.unserialize());
			}
			this.pos++;
			return h;
		case 113:
			var h1 = new haxe_ds_IntMap();
			this.cache.push(h1);
			var buf3 = this.buf;
			var c1 = this.get(this.pos++);
			while(c1 == 58) {
				var i = this.readDigits();
				h1.set(i,this.unserialize());
				c1 = this.get(this.pos++);
			}
			if(c1 != 104) throw new js__$Boot_HaxeError("Invalid IntMap format");
			return h1;
		case 77:
			var h2 = new haxe_ds_ObjectMap();
			this.cache.push(h2);
			var buf4 = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) {
				var s2 = this.unserialize();
				h2.set(s2,this.unserialize());
			}
			this.pos++;
			return h2;
		case 118:
			var d;
			if(this.buf.charCodeAt(this.pos) >= 48 && this.buf.charCodeAt(this.pos) <= 57 && this.buf.charCodeAt(this.pos + 1) >= 48 && this.buf.charCodeAt(this.pos + 1) <= 57 && this.buf.charCodeAt(this.pos + 2) >= 48 && this.buf.charCodeAt(this.pos + 2) <= 57 && this.buf.charCodeAt(this.pos + 3) >= 48 && this.buf.charCodeAt(this.pos + 3) <= 57 && this.buf.charCodeAt(this.pos + 4) == 45) {
				var s3 = HxOverrides.substr(this.buf,this.pos,19);
				d = HxOverrides.strDate(s3);
				this.pos += 19;
			} else {
				var t = this.readFloat();
				var d1 = new Date();
				d1.setTime(t);
				d = d1;
			}
			this.cache.push(d);
			return d;
		case 115:
			var len1 = this.readDigits();
			var buf5 = this.buf;
			if(this.get(this.pos++) != 58 || this.length - this.pos < len1) throw new js__$Boot_HaxeError("Invalid bytes length");
			var codes = haxe_Unserializer.CODES;
			if(codes == null) {
				codes = haxe_Unserializer.initCodes();
				haxe_Unserializer.CODES = codes;
			}
			var i1 = this.pos;
			var rest = len1 & 3;
			var size;
			size = (len1 >> 2) * 3 + (rest >= 2?rest - 1:0);
			var max = i1 + (len1 - rest);
			var bytes = haxe_io_Bytes.alloc(size);
			var bpos = 0;
			while(i1 < max) {
				var c11 = codes[StringTools.fastCodeAt(buf5,i1++)];
				var c2 = codes[StringTools.fastCodeAt(buf5,i1++)];
				bytes.set(bpos++,c11 << 2 | c2 >> 4);
				var c3 = codes[StringTools.fastCodeAt(buf5,i1++)];
				bytes.set(bpos++,c2 << 4 | c3 >> 2);
				var c4 = codes[StringTools.fastCodeAt(buf5,i1++)];
				bytes.set(bpos++,c3 << 6 | c4);
			}
			if(rest >= 2) {
				var c12 = codes[StringTools.fastCodeAt(buf5,i1++)];
				var c21 = codes[StringTools.fastCodeAt(buf5,i1++)];
				bytes.set(bpos++,c12 << 2 | c21 >> 4);
				if(rest == 3) {
					var c31 = codes[StringTools.fastCodeAt(buf5,i1++)];
					bytes.set(bpos++,c21 << 4 | c31 >> 2);
				}
			}
			this.pos += len1;
			this.cache.push(bytes);
			return bytes;
		case 67:
			var name3 = this.unserialize();
			var cl1 = this.resolver.resolveClass(name3);
			if(cl1 == null) throw new js__$Boot_HaxeError("Class not found " + name3);
			var o2 = Type.createEmptyInstance(cl1);
			this.cache.push(o2);
			o2.hxUnserialize(this);
			if(this.get(this.pos++) != 103) throw new js__$Boot_HaxeError("Invalid custom data");
			return o2;
		case 65:
			var name4 = this.unserialize();
			var cl2 = this.resolver.resolveClass(name4);
			if(cl2 == null) throw new js__$Boot_HaxeError("Class not found " + name4);
			return cl2;
		case 66:
			var name5 = this.unserialize();
			var e2 = this.resolver.resolveEnum(name5);
			if(e2 == null) throw new js__$Boot_HaxeError("Enum not found " + name5);
			return e2;
		default:
		}
		this.pos--;
		throw new js__$Boot_HaxeError("Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos);
	}
	,__class__: haxe_Unserializer
};
var haxe_ds_IntMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.IntMap"] = haxe_ds_IntMap;
haxe_ds_IntMap.__name__ = ["haxe","ds","IntMap"];
haxe_ds_IntMap.__interfaces__ = [haxe_IMap];
haxe_ds_IntMap.prototype = {
	h: null
	,set: function(key,value) {
		this.h[key] = value;
	}
	,get: function(key) {
		return this.h[key];
	}
	,exists: function(key) {
		return this.h.hasOwnProperty(key);
	}
	,remove: function(key) {
		if(!this.h.hasOwnProperty(key)) return false;
		delete(this.h[key]);
		return true;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key | 0);
		}
		return HxOverrides.iter(a);
	}
	,iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref[i];
		}};
	}
	,__class__: haxe_ds_IntMap
};
var haxe_ds_ObjectMap = function() {
	this.h = { };
	this.h.__keys__ = { };
};
$hxClasses["haxe.ds.ObjectMap"] = haxe_ds_ObjectMap;
haxe_ds_ObjectMap.__name__ = ["haxe","ds","ObjectMap"];
haxe_ds_ObjectMap.__interfaces__ = [haxe_IMap];
haxe_ds_ObjectMap.prototype = {
	h: null
	,set: function(key,value) {
		var id = key.__id__ || (key.__id__ = ++haxe_ds_ObjectMap.count);
		this.h[id] = value;
		this.h.__keys__[id] = key;
	}
	,get: function(key) {
		return this.h[key.__id__];
	}
	,exists: function(key) {
		return this.h.__keys__[key.__id__] != null;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h.__keys__ ) {
		if(this.h.hasOwnProperty(key)) a.push(this.h.__keys__[key]);
		}
		return HxOverrides.iter(a);
	}
	,__class__: haxe_ds_ObjectMap
};
var haxe_ds_StringMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.StringMap"] = haxe_ds_StringMap;
haxe_ds_StringMap.__name__ = ["haxe","ds","StringMap"];
haxe_ds_StringMap.__interfaces__ = [haxe_IMap];
haxe_ds_StringMap.prototype = {
	h: null
	,rh: null
	,set: function(key,value) {
		if(__map_reserved[key] != null) this.setReserved(key,value); else this.h[key] = value;
	}
	,get: function(key) {
		if(__map_reserved[key] != null) return this.getReserved(key);
		return this.h[key];
	}
	,exists: function(key) {
		if(__map_reserved[key] != null) return this.existsReserved(key);
		return this.h.hasOwnProperty(key);
	}
	,setReserved: function(key,value) {
		if(this.rh == null) this.rh = { };
		this.rh["$" + key] = value;
	}
	,getReserved: function(key) {
		if(this.rh == null) return null; else return this.rh["$" + key];
	}
	,existsReserved: function(key) {
		if(this.rh == null) return false;
		return this.rh.hasOwnProperty("$" + key);
	}
	,keys: function() {
		var _this = this.arrayKeys();
		return HxOverrides.iter(_this);
	}
	,arrayKeys: function() {
		var out = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) out.push(key);
		}
		if(this.rh != null) {
			for( var key in this.rh ) {
			if(key.charCodeAt(0) == 36) out.push(key.substr(1));
			}
		}
		return out;
	}
	,__class__: haxe_ds_StringMap
};
var haxe_io_Bytes = function(data) {
	this.length = data.byteLength;
	this.b = new Uint8Array(data);
	this.b.bufferValue = data;
	data.hxBytes = this;
	data.bytes = this.b;
};
$hxClasses["haxe.io.Bytes"] = haxe_io_Bytes;
haxe_io_Bytes.__name__ = ["haxe","io","Bytes"];
haxe_io_Bytes.alloc = function(length) {
	return new haxe_io_Bytes(new ArrayBuffer(length));
};
haxe_io_Bytes.ofString = function(s) {
	var a = [];
	var i = 0;
	while(i < s.length) {
		var c = StringTools.fastCodeAt(s,i++);
		if(55296 <= c && c <= 56319) c = c - 55232 << 10 | StringTools.fastCodeAt(s,i++) & 1023;
		if(c <= 127) a.push(c); else if(c <= 2047) {
			a.push(192 | c >> 6);
			a.push(128 | c & 63);
		} else if(c <= 65535) {
			a.push(224 | c >> 12);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		} else {
			a.push(240 | c >> 18);
			a.push(128 | c >> 12 & 63);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		}
	}
	return new haxe_io_Bytes(new Uint8Array(a).buffer);
};
haxe_io_Bytes.ofData = function(b) {
	var hb = b.hxBytes;
	if(hb != null) return hb;
	return new haxe_io_Bytes(b);
};
haxe_io_Bytes.prototype = {
	length: null
	,b: null
	,data: null
	,get: function(pos) {
		return this.b[pos];
	}
	,set: function(pos,v) {
		this.b[pos] = v & 255;
	}
	,sub: function(pos,len) {
		if(pos < 0 || len < 0 || pos + len > this.length) throw new js__$Boot_HaxeError(haxe_io_Error.OutsideBounds);
		return new haxe_io_Bytes(this.b.buffer.slice(pos + this.b.byteOffset,pos + this.b.byteOffset + len));
	}
	,getDouble: function(pos) {
		if(this.data == null) this.data = new DataView(this.b.buffer,this.b.byteOffset,this.b.byteLength);
		return this.data.getFloat64(pos,true);
	}
	,getFloat: function(pos) {
		if(this.data == null) this.data = new DataView(this.b.buffer,this.b.byteOffset,this.b.byteLength);
		return this.data.getFloat32(pos,true);
	}
	,setDouble: function(pos,v) {
		if(this.data == null) this.data = new DataView(this.b.buffer,this.b.byteOffset,this.b.byteLength);
		this.data.setFloat64(pos,v,true);
	}
	,getUInt16: function(pos) {
		if(this.data == null) this.data = new DataView(this.b.buffer,this.b.byteOffset,this.b.byteLength);
		return this.data.getUint16(pos,true);
	}
	,getInt32: function(pos) {
		if(this.data == null) this.data = new DataView(this.b.buffer,this.b.byteOffset,this.b.byteLength);
		return this.data.getInt32(pos,true);
	}
	,setInt32: function(pos,v) {
		if(this.data == null) this.data = new DataView(this.b.buffer,this.b.byteOffset,this.b.byteLength);
		this.data.setInt32(pos,v,true);
	}
	,getString: function(pos,len) {
		if(pos < 0 || len < 0 || pos + len > this.length) throw new js__$Boot_HaxeError(haxe_io_Error.OutsideBounds);
		var s = "";
		var b = this.b;
		var fcc = String.fromCharCode;
		var i = pos;
		var max = pos + len;
		while(i < max) {
			var c = b[i++];
			if(c < 128) {
				if(c == 0) break;
				s += fcc(c);
			} else if(c < 224) s += fcc((c & 63) << 6 | b[i++] & 127); else if(c < 240) {
				var c2 = b[i++];
				s += fcc((c & 31) << 12 | (c2 & 127) << 6 | b[i++] & 127);
			} else {
				var c21 = b[i++];
				var c3 = b[i++];
				var u = (c & 15) << 18 | (c21 & 127) << 12 | (c3 & 127) << 6 | b[i++] & 127;
				s += fcc((u >> 10) + 55232);
				s += fcc(u & 1023 | 56320);
			}
		}
		return s;
	}
	,toString: function() {
		return this.getString(0,this.length);
	}
	,__class__: haxe_io_Bytes
};
var haxe_io_BytesBuffer = function() {
	this.b = [];
};
$hxClasses["haxe.io.BytesBuffer"] = haxe_io_BytesBuffer;
haxe_io_BytesBuffer.__name__ = ["haxe","io","BytesBuffer"];
haxe_io_BytesBuffer.prototype = {
	b: null
	,addBytes: function(src,pos,len) {
		if(pos < 0 || len < 0 || pos + len > src.length) throw new js__$Boot_HaxeError(haxe_io_Error.OutsideBounds);
		var b1 = this.b;
		var b2 = src.b;
		var _g1 = pos;
		var _g = pos + len;
		while(_g1 < _g) {
			var i = _g1++;
			this.b.push(b2[i]);
		}
	}
	,getBytes: function() {
		var bytes = new haxe_io_Bytes(new Uint8Array(this.b).buffer);
		this.b = null;
		return bytes;
	}
	,__class__: haxe_io_BytesBuffer
};
var haxe_io_Input = function() { };
$hxClasses["haxe.io.Input"] = haxe_io_Input;
haxe_io_Input.__name__ = ["haxe","io","Input"];
haxe_io_Input.prototype = {
	bigEndian: null
	,readByte: function() {
		throw new js__$Boot_HaxeError("Not implemented");
	}
	,readBytes: function(s,pos,len) {
		var k = len;
		var b = s.b;
		if(pos < 0 || len < 0 || pos + len > s.length) throw new js__$Boot_HaxeError(haxe_io_Error.OutsideBounds);
		while(k > 0) {
			b[pos] = this.readByte();
			pos++;
			k--;
		}
		return len;
	}
	,readFullBytes: function(s,pos,len) {
		while(len > 0) {
			var k = this.readBytes(s,pos,len);
			pos += k;
			len -= k;
		}
	}
	,read: function(nbytes) {
		var s = haxe_io_Bytes.alloc(nbytes);
		var p = 0;
		while(nbytes > 0) {
			var k = this.readBytes(s,p,nbytes);
			if(k == 0) throw new js__$Boot_HaxeError(haxe_io_Error.Blocked);
			p += k;
			nbytes -= k;
		}
		return s;
	}
	,readInt32: function() {
		var ch1 = this.readByte();
		var ch2 = this.readByte();
		var ch3 = this.readByte();
		var ch4 = this.readByte();
		if(this.bigEndian) return ch4 | ch3 << 8 | ch2 << 16 | ch1 << 24; else return ch1 | ch2 << 8 | ch3 << 16 | ch4 << 24;
	}
	,readString: function(len) {
		var b = haxe_io_Bytes.alloc(len);
		this.readFullBytes(b,0,len);
		return b.toString();
	}
	,__class__: haxe_io_Input
};
var haxe_io_BytesInput = function(b,pos,len) {
	if(pos == null) pos = 0;
	if(len == null) len = b.length - pos;
	if(pos < 0 || len < 0 || pos + len > b.length) throw new js__$Boot_HaxeError(haxe_io_Error.OutsideBounds);
	this.b = b.b;
	this.pos = pos;
	this.len = len;
	this.totlen = len;
};
$hxClasses["haxe.io.BytesInput"] = haxe_io_BytesInput;
haxe_io_BytesInput.__name__ = ["haxe","io","BytesInput"];
haxe_io_BytesInput.__super__ = haxe_io_Input;
haxe_io_BytesInput.prototype = $extend(haxe_io_Input.prototype,{
	b: null
	,pos: null
	,len: null
	,totlen: null
	,set_position: function(p) {
		if(p < 0) p = 0; else if(p > this.totlen) p = this.totlen;
		this.len = this.totlen - p;
		return this.pos = p;
	}
	,readByte: function() {
		if(this.len == 0) throw new js__$Boot_HaxeError(new haxe_io_Eof());
		this.len--;
		return this.b[this.pos++];
	}
	,readBytes: function(buf,pos,len) {
		if(pos < 0 || len < 0 || pos + len > buf.length) throw new js__$Boot_HaxeError(haxe_io_Error.OutsideBounds);
		if(this.len == 0 && len > 0) throw new js__$Boot_HaxeError(new haxe_io_Eof());
		if(this.len < len) len = this.len;
		var b1 = this.b;
		var b2 = buf.b;
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			b2[pos + i] = b1[this.pos + i];
		}
		this.pos += len;
		this.len -= len;
		return len;
	}
	,__class__: haxe_io_BytesInput
	,__properties__: {set_position:"set_position"}
});
var haxe_io_Output = function() { };
$hxClasses["haxe.io.Output"] = haxe_io_Output;
haxe_io_Output.__name__ = ["haxe","io","Output"];
haxe_io_Output.prototype = {
	bigEndian: null
	,writeByte: function(c) {
		throw new js__$Boot_HaxeError("Not implemented");
	}
	,writeBytes: function(s,pos,len) {
		var k = len;
		var b = s.b.bufferValue;
		if(pos < 0 || len < 0 || pos + len > s.length) throw new js__$Boot_HaxeError(haxe_io_Error.OutsideBounds);
		while(k > 0) {
			this.writeByte(b[pos]);
			pos++;
			k--;
		}
		return len;
	}
	,write: function(s) {
		var l = s.length;
		var p = 0;
		while(l > 0) {
			var k = this.writeBytes(s,p,l);
			if(k == 0) throw new js__$Boot_HaxeError(haxe_io_Error.Blocked);
			p += k;
			l -= k;
		}
	}
	,writeInt32: function(x) {
		if(this.bigEndian) {
			this.writeByte(x >>> 24);
			this.writeByte(x >> 16 & 255);
			this.writeByte(x >> 8 & 255);
			this.writeByte(x & 255);
		} else {
			this.writeByte(x & 255);
			this.writeByte(x >> 8 & 255);
			this.writeByte(x >> 16 & 255);
			this.writeByte(x >>> 24);
		}
	}
	,__class__: haxe_io_Output
};
var haxe_io_BytesOutput = function() {
	this.b = new haxe_io_BytesBuffer();
};
$hxClasses["haxe.io.BytesOutput"] = haxe_io_BytesOutput;
haxe_io_BytesOutput.__name__ = ["haxe","io","BytesOutput"];
haxe_io_BytesOutput.__super__ = haxe_io_Output;
haxe_io_BytesOutput.prototype = $extend(haxe_io_Output.prototype,{
	b: null
	,writeByte: function(c) {
		this.b.b.push(c);
	}
	,writeBytes: function(buf,pos,len) {
		this.b.addBytes(buf,pos,len);
		return len;
	}
	,getBytes: function() {
		return this.b.getBytes();
	}
	,__class__: haxe_io_BytesOutput
});
var haxe_io_Eof = function() {
};
$hxClasses["haxe.io.Eof"] = haxe_io_Eof;
haxe_io_Eof.__name__ = ["haxe","io","Eof"];
haxe_io_Eof.prototype = {
	toString: function() {
		return "Eof";
	}
	,__class__: haxe_io_Eof
};
var haxe_io_Error = $hxClasses["haxe.io.Error"] = { __ename__ : ["haxe","io","Error"], __constructs__ : ["Blocked","Overflow","OutsideBounds","Custom"] };
haxe_io_Error.Blocked = ["Blocked",0];
haxe_io_Error.Blocked.toString = $estr;
haxe_io_Error.Blocked.__enum__ = haxe_io_Error;
haxe_io_Error.Overflow = ["Overflow",1];
haxe_io_Error.Overflow.toString = $estr;
haxe_io_Error.Overflow.__enum__ = haxe_io_Error;
haxe_io_Error.OutsideBounds = ["OutsideBounds",2];
haxe_io_Error.OutsideBounds.toString = $estr;
haxe_io_Error.OutsideBounds.__enum__ = haxe_io_Error;
haxe_io_Error.Custom = function(e) { var $x = ["Custom",3,e]; $x.__enum__ = haxe_io_Error; $x.toString = $estr; return $x; };
var haxe_io_FPHelper = function() { };
$hxClasses["haxe.io.FPHelper"] = haxe_io_FPHelper;
haxe_io_FPHelper.__name__ = ["haxe","io","FPHelper"];
haxe_io_FPHelper.floatToI32 = function(f) {
	if(f == 0) return 0;
	var af;
	if(f < 0) af = -f; else af = f;
	var exp = Math.floor(Math.log(af) / 0.6931471805599453);
	if(exp < -127) exp = -127; else if(exp > 128) exp = 128;
	var sig = Math.round((af / Math.pow(2,exp) - 1) * 8388608) & 8388607;
	return (f < 0?-2147483648:0) | exp + 127 << 23 | sig;
};
var js__$Boot_HaxeError = function(val) {
	Error.call(this);
	this.val = val;
	this.message = String(val);
	if(Error.captureStackTrace) Error.captureStackTrace(this,js__$Boot_HaxeError);
};
$hxClasses["js._Boot.HaxeError"] = js__$Boot_HaxeError;
js__$Boot_HaxeError.__name__ = ["js","_Boot","HaxeError"];
js__$Boot_HaxeError.__super__ = Error;
js__$Boot_HaxeError.prototype = $extend(Error.prototype,{
	val: null
	,__class__: js__$Boot_HaxeError
});
var js_Boot = function() { };
$hxClasses["js.Boot"] = js_Boot;
js_Boot.__name__ = ["js","Boot"];
js_Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
};
js_Boot.__trace = function(v,i) {
	var msg;
	if(i != null) msg = i.fileName + ":" + i.lineNumber + ": "; else msg = "";
	msg += js_Boot.__string_rec(v,"");
	if(i != null && i.customParams != null) {
		var _g = 0;
		var _g1 = i.customParams;
		while(_g < _g1.length) {
			var v1 = _g1[_g];
			++_g;
			msg += "," + js_Boot.__string_rec(v1,"");
		}
	}
	var d;
	if(typeof(document) != "undefined" && (d = document.getElementById("haxe:trace")) != null) d.innerHTML += js_Boot.__unhtml(msg) + "<br/>"; else if(typeof console != "undefined" && console.log != null) console.log(msg);
};
js_Boot.getClass = function(o) {
	if((o instanceof Array) && o.__enum__ == null) return Array; else {
		var cl = o.__class__;
		if(cl != null) return cl;
		var name = js_Boot.__nativeClassName(o);
		if(name != null) return js_Boot.__resolveNativeClass(name);
		return null;
	}
};
js_Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str2 = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i1 = _g1++;
					if(i1 != 2) str2 += "," + js_Boot.__string_rec(o[i1],s); else str2 += js_Boot.__string_rec(o[i1],s);
				}
				return str2 + ")";
			}
			var l = o.length;
			var i;
			var str1 = "[";
			s += "\t";
			var _g2 = 0;
			while(_g2 < l) {
				var i2 = _g2++;
				str1 += (i2 > 0?",":"") + js_Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
};
js_Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0;
		var _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js_Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js_Boot.__interfLoop(cc.__super__,cl);
};
js_Boot.__instanceof = function(o,cl) {
	if(cl == null) return false;
	switch(cl) {
	case Int:
		return (o|0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return typeof(o) == "boolean";
	case String:
		return typeof(o) == "string";
	case Array:
		return (o instanceof Array) && o.__enum__ == null;
	case Dynamic:
		return true;
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(o instanceof cl) return true;
				if(js_Boot.__interfLoop(js_Boot.getClass(o),cl)) return true;
			} else if(typeof(cl) == "object" && js_Boot.__isNativeObj(cl)) {
				if(o instanceof cl) return true;
			}
		} else return false;
		if(cl == Class && o.__name__ != null) return true;
		if(cl == Enum && o.__ename__ != null) return true;
		return o.__enum__ == cl;
	}
};
js_Boot.__cast = function(o,t) {
	if(js_Boot.__instanceof(o,t)) return o; else throw new js__$Boot_HaxeError("Cannot cast " + Std.string(o) + " to " + Std.string(t));
};
js_Boot.__nativeClassName = function(o) {
	var name = js_Boot.__toStr.call(o).slice(8,-1);
	if(name == "Object" || name == "Function" || name == "Math" || name == "JSON") return null;
	return name;
};
js_Boot.__isNativeObj = function(o) {
	return js_Boot.__nativeClassName(o) != null;
};
js_Boot.__resolveNativeClass = function(name) {
	return (Function("return typeof " + name + " != \"undefined\" ? " + name + " : null"))();
};
var js_html_compat_ArrayBuffer = function(a) {
	if((a instanceof Array) && a.__enum__ == null) {
		this.a = a;
		this.byteLength = a.length;
	} else {
		var len = a;
		this.a = [];
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			this.a[i] = 0;
		}
		this.byteLength = len;
	}
};
$hxClasses["js.html.compat.ArrayBuffer"] = js_html_compat_ArrayBuffer;
js_html_compat_ArrayBuffer.__name__ = ["js","html","compat","ArrayBuffer"];
js_html_compat_ArrayBuffer.sliceImpl = function(begin,end) {
	var u = new Uint8Array(this,begin,end == null?null:end - begin);
	var result = new ArrayBuffer(u.byteLength);
	var resultArray = new Uint8Array(result);
	resultArray.set(u);
	return result;
};
js_html_compat_ArrayBuffer.prototype = {
	byteLength: null
	,a: null
	,slice: function(begin,end) {
		return new js_html_compat_ArrayBuffer(this.a.slice(begin,end));
	}
	,__class__: js_html_compat_ArrayBuffer
};
var js_html_compat_Uint8Array = function() { };
$hxClasses["js.html.compat.Uint8Array"] = js_html_compat_Uint8Array;
js_html_compat_Uint8Array.__name__ = ["js","html","compat","Uint8Array"];
js_html_compat_Uint8Array._new = function(arg1,offset,length) {
	var arr;
	if(typeof(arg1) == "number") {
		arr = [];
		var _g = 0;
		while(_g < arg1) {
			var i = _g++;
			arr[i] = 0;
		}
		arr.byteLength = arr.length;
		arr.byteOffset = 0;
		arr.buffer = new js_html_compat_ArrayBuffer(arr);
	} else if(js_Boot.__instanceof(arg1,js_html_compat_ArrayBuffer)) {
		var buffer = arg1;
		if(offset == null) offset = 0;
		if(length == null) length = buffer.byteLength - offset;
		if(offset == 0) arr = buffer.a; else arr = buffer.a.slice(offset,offset + length);
		arr.byteLength = arr.length;
		arr.byteOffset = offset;
		arr.buffer = buffer;
	} else if((arg1 instanceof Array) && arg1.__enum__ == null) {
		arr = arg1.slice();
		arr.byteLength = arr.length;
		arr.byteOffset = 0;
		arr.buffer = new js_html_compat_ArrayBuffer(arr);
	} else throw new js__$Boot_HaxeError("TODO " + Std.string(arg1));
	arr.subarray = js_html_compat_Uint8Array._subarray;
	arr.set = js_html_compat_Uint8Array._set;
	return arr;
};
js_html_compat_Uint8Array._set = function(arg,offset) {
	var t = this;
	if(js_Boot.__instanceof(arg.buffer,js_html_compat_ArrayBuffer)) {
		var a = arg;
		if(arg.byteLength + offset > t.byteLength) throw new js__$Boot_HaxeError("set() outside of range");
		var _g1 = 0;
		var _g = arg.byteLength;
		while(_g1 < _g) {
			var i = _g1++;
			t[i + offset] = a[i];
		}
	} else if((arg instanceof Array) && arg.__enum__ == null) {
		var a1 = arg;
		if(a1.length + offset > t.byteLength) throw new js__$Boot_HaxeError("set() outside of range");
		var _g11 = 0;
		var _g2 = a1.length;
		while(_g11 < _g2) {
			var i1 = _g11++;
			t[i1 + offset] = a1[i1];
		}
	} else throw new js__$Boot_HaxeError("TODO");
};
js_html_compat_Uint8Array._subarray = function(start,end) {
	var t = this;
	var a = js_html_compat_Uint8Array._new(t.slice(start,end));
	a.byteOffset = start;
	return a;
};
var kha_ImageList = function() {
	this.envmap_brdfDescription = { files : ["envmap_brdf.png"], original_height : 128, type : "image", original_width : 128, name : "envmap_brdf"};
	this.envmap_brdfName = "envmap_brdf";
	this.envmap_brdf = null;
	this.envmapDescription = { files : ["envmap.jpg"], original_height : 2048, type : "image", original_width : 4096, name : "envmap"};
	this.envmapName = "envmap";
	this.envmap = null;
	this.envmap_radiance_9Description = { files : ["envmap_radiance_9.jpg"], original_height : 1, type : "image", original_width : 2, name : "envmap_radiance_9"};
	this.envmap_radiance_9Name = "envmap_radiance_9";
	this.envmap_radiance_9 = null;
	this.envmap_radiance_8Description = { files : ["envmap_radiance_8.jpg"], original_height : 2, type : "image", original_width : 4, name : "envmap_radiance_8"};
	this.envmap_radiance_8Name = "envmap_radiance_8";
	this.envmap_radiance_8 = null;
	this.envmap_radiance_7Description = { files : ["envmap_radiance_7.jpg"], original_height : 4, type : "image", original_width : 8, name : "envmap_radiance_7"};
	this.envmap_radiance_7Name = "envmap_radiance_7";
	this.envmap_radiance_7 = null;
	this.envmap_radiance_6Description = { files : ["envmap_radiance_6.jpg"], original_height : 8, type : "image", original_width : 16, name : "envmap_radiance_6"};
	this.envmap_radiance_6Name = "envmap_radiance_6";
	this.envmap_radiance_6 = null;
	this.envmap_radiance_5Description = { files : ["envmap_radiance_5.jpg"], original_height : 16, type : "image", original_width : 32, name : "envmap_radiance_5"};
	this.envmap_radiance_5Name = "envmap_radiance_5";
	this.envmap_radiance_5 = null;
	this.envmap_radiance_4Description = { files : ["envmap_radiance_4.jpg"], original_height : 32, type : "image", original_width : 64, name : "envmap_radiance_4"};
	this.envmap_radiance_4Name = "envmap_radiance_4";
	this.envmap_radiance_4 = null;
	this.envmap_radiance_3Description = { files : ["envmap_radiance_3.jpg"], original_height : 64, type : "image", original_width : 128, name : "envmap_radiance_3"};
	this.envmap_radiance_3Name = "envmap_radiance_3";
	this.envmap_radiance_3 = null;
	this.envmap_radiance_2Description = { files : ["envmap_radiance_2.jpg"], original_height : 128, type : "image", original_width : 256, name : "envmap_radiance_2"};
	this.envmap_radiance_2Name = "envmap_radiance_2";
	this.envmap_radiance_2 = null;
	this.envmap_radiance_10Description = { files : ["envmap_radiance_10.jpg"], original_height : 1, type : "image", original_width : 1, name : "envmap_radiance_10"};
	this.envmap_radiance_10Name = "envmap_radiance_10";
	this.envmap_radiance_10 = null;
	this.envmap_radiance_1Description = { files : ["envmap_radiance_1.jpg"], original_height : 256, type : "image", original_width : 512, name : "envmap_radiance_1"};
	this.envmap_radiance_1Name = "envmap_radiance_1";
	this.envmap_radiance_1 = null;
	this.envmap_radiance_0Description = { files : ["envmap_radiance_0.jpg"], original_height : 512, type : "image", original_width : 1024, name : "envmap_radiance_0"};
	this.envmap_radiance_0Name = "envmap_radiance_0";
	this.envmap_radiance_0 = null;
	this.envmap_radianceDescription = { files : ["envmap_radiance.jpg"], original_height : 1024, type : "image", original_width : 2048, name : "envmap_radiance"};
	this.envmap_radianceName = "envmap_radiance";
	this.envmap_radiance = null;
	this.envmap_irradianceDescription = { files : ["envmap_irradiance.jpg"], original_height : 512, type : "image", original_width : 1024, name : "envmap_irradiance"};
	this.envmap_irradianceName = "envmap_irradiance";
	this.envmap_irradiance = null;
};
$hxClasses["kha.ImageList"] = kha_ImageList;
kha_ImageList.__name__ = ["kha","ImageList"];
kha_ImageList.prototype = {
	envmap_irradiance: null
	,envmap_irradianceName: null
	,envmap_irradianceDescription: null
	,envmap_irradianceLoad: function(done) {
		kha_Assets.loadImage("envmap_irradiance",function(image) {
			done();
		});
	}
	,envmap_irradianceUnload: function() {
		this.envmap_irradiance.unload();
		this.envmap_irradiance = null;
	}
	,envmap_radiance: null
	,envmap_radianceName: null
	,envmap_radianceDescription: null
	,envmap_radianceLoad: function(done) {
		kha_Assets.loadImage("envmap_radiance",function(image) {
			done();
		});
	}
	,envmap_radianceUnload: function() {
		this.envmap_radiance.unload();
		this.envmap_radiance = null;
	}
	,envmap_radiance_0: null
	,envmap_radiance_0Name: null
	,envmap_radiance_0Description: null
	,envmap_radiance_0Load: function(done) {
		kha_Assets.loadImage("envmap_radiance_0",function(image) {
			done();
		});
	}
	,envmap_radiance_0Unload: function() {
		this.envmap_radiance_0.unload();
		this.envmap_radiance_0 = null;
	}
	,envmap_radiance_1: null
	,envmap_radiance_1Name: null
	,envmap_radiance_1Description: null
	,envmap_radiance_1Load: function(done) {
		kha_Assets.loadImage("envmap_radiance_1",function(image) {
			done();
		});
	}
	,envmap_radiance_1Unload: function() {
		this.envmap_radiance_1.unload();
		this.envmap_radiance_1 = null;
	}
	,envmap_radiance_10: null
	,envmap_radiance_10Name: null
	,envmap_radiance_10Description: null
	,envmap_radiance_10Load: function(done) {
		kha_Assets.loadImage("envmap_radiance_10",function(image) {
			done();
		});
	}
	,envmap_radiance_10Unload: function() {
		this.envmap_radiance_10.unload();
		this.envmap_radiance_10 = null;
	}
	,envmap_radiance_2: null
	,envmap_radiance_2Name: null
	,envmap_radiance_2Description: null
	,envmap_radiance_2Load: function(done) {
		kha_Assets.loadImage("envmap_radiance_2",function(image) {
			done();
		});
	}
	,envmap_radiance_2Unload: function() {
		this.envmap_radiance_2.unload();
		this.envmap_radiance_2 = null;
	}
	,envmap_radiance_3: null
	,envmap_radiance_3Name: null
	,envmap_radiance_3Description: null
	,envmap_radiance_3Load: function(done) {
		kha_Assets.loadImage("envmap_radiance_3",function(image) {
			done();
		});
	}
	,envmap_radiance_3Unload: function() {
		this.envmap_radiance_3.unload();
		this.envmap_radiance_3 = null;
	}
	,envmap_radiance_4: null
	,envmap_radiance_4Name: null
	,envmap_radiance_4Description: null
	,envmap_radiance_4Load: function(done) {
		kha_Assets.loadImage("envmap_radiance_4",function(image) {
			done();
		});
	}
	,envmap_radiance_4Unload: function() {
		this.envmap_radiance_4.unload();
		this.envmap_radiance_4 = null;
	}
	,envmap_radiance_5: null
	,envmap_radiance_5Name: null
	,envmap_radiance_5Description: null
	,envmap_radiance_5Load: function(done) {
		kha_Assets.loadImage("envmap_radiance_5",function(image) {
			done();
		});
	}
	,envmap_radiance_5Unload: function() {
		this.envmap_radiance_5.unload();
		this.envmap_radiance_5 = null;
	}
	,envmap_radiance_6: null
	,envmap_radiance_6Name: null
	,envmap_radiance_6Description: null
	,envmap_radiance_6Load: function(done) {
		kha_Assets.loadImage("envmap_radiance_6",function(image) {
			done();
		});
	}
	,envmap_radiance_6Unload: function() {
		this.envmap_radiance_6.unload();
		this.envmap_radiance_6 = null;
	}
	,envmap_radiance_7: null
	,envmap_radiance_7Name: null
	,envmap_radiance_7Description: null
	,envmap_radiance_7Load: function(done) {
		kha_Assets.loadImage("envmap_radiance_7",function(image) {
			done();
		});
	}
	,envmap_radiance_7Unload: function() {
		this.envmap_radiance_7.unload();
		this.envmap_radiance_7 = null;
	}
	,envmap_radiance_8: null
	,envmap_radiance_8Name: null
	,envmap_radiance_8Description: null
	,envmap_radiance_8Load: function(done) {
		kha_Assets.loadImage("envmap_radiance_8",function(image) {
			done();
		});
	}
	,envmap_radiance_8Unload: function() {
		this.envmap_radiance_8.unload();
		this.envmap_radiance_8 = null;
	}
	,envmap_radiance_9: null
	,envmap_radiance_9Name: null
	,envmap_radiance_9Description: null
	,envmap_radiance_9Load: function(done) {
		kha_Assets.loadImage("envmap_radiance_9",function(image) {
			done();
		});
	}
	,envmap_radiance_9Unload: function() {
		this.envmap_radiance_9.unload();
		this.envmap_radiance_9 = null;
	}
	,envmap: null
	,envmapName: null
	,envmapDescription: null
	,envmapLoad: function(done) {
		kha_Assets.loadImage("envmap",function(image) {
			done();
		});
	}
	,envmapUnload: function() {
		this.envmap.unload();
		this.envmap = null;
	}
	,envmap_brdf: null
	,envmap_brdfName: null
	,envmap_brdfDescription: null
	,envmap_brdfLoad: function(done) {
		kha_Assets.loadImage("envmap_brdf",function(image) {
			done();
		});
	}
	,envmap_brdfUnload: function() {
		this.envmap_brdf.unload();
		this.envmap_brdf = null;
	}
	,__class__: kha_ImageList
};
var kha_SoundList = function() {
};
$hxClasses["kha.SoundList"] = kha_SoundList;
kha_SoundList.__name__ = ["kha","SoundList"];
kha_SoundList.prototype = {
	__class__: kha_SoundList
};
var kha_BlobList = function() {
	this.forward_jsonDescription = { files : ["forward.json"], type : "blob", name : "forward_json"};
	this.forward_jsonName = "forward_json";
	this.forward_json = null;
	this.env_map_jsonDescription = { files : ["env_map.json"], type : "blob", name : "env_map_json"};
	this.env_map_jsonName = "env_map_json";
	this.env_map_json = null;
	this.pathtrace_pipeline_jsonDescription = { files : ["pathtrace_pipeline.json"], type : "blob", name : "pathtrace_pipeline_json"};
	this.pathtrace_pipeline_jsonName = "pathtrace_pipeline_json";
	this.pathtrace_pipeline_json = null;
	this.forward_pipeline_jsonDescription = { files : ["forward_pipeline.json"], type : "blob", name : "forward_pipeline_json"};
	this.forward_pipeline_jsonName = "forward_pipeline_json";
	this.forward_pipeline_json = null;
	this.deferred_pipeline_jsonDescription = { files : ["deferred_pipeline.json"], type : "blob", name : "deferred_pipeline_json"};
	this.deferred_pipeline_jsonName = "deferred_pipeline_json";
	this.deferred_pipeline_json = null;
	this.World_material_jsonDescription = { files : ["World_material.json"], type : "blob", name : "World_material_json"};
	this.World_material_jsonName = "World_material_json";
	this.World_material_json = null;
	this.geom_Sphere_jsonDescription = { files : ["geom_Sphere.json"], type : "blob", name : "geom_Sphere_json"};
	this.geom_Sphere_jsonName = "geom_Sphere_json";
	this.geom_Sphere_json = null;
	this.geom_Plane_jsonDescription = { files : ["geom_Plane.json"], type : "blob", name : "geom_Plane_json"};
	this.geom_Plane_jsonName = "geom_Plane_json";
	this.geom_Plane_json = null;
	this.geom_Cube_jsonDescription = { files : ["geom_Cube.json"], type : "blob", name : "geom_Cube_json"};
	this.geom_Cube_jsonName = "geom_Cube_json";
	this.geom_Cube_json = null;
	this.Scene_jsonDescription = { files : ["Scene.json"], type : "blob", name : "Scene_json"};
	this.Scene_jsonName = "Scene_json";
	this.Scene_json = null;
	this.ssao_material_jsonDescription = { files : ["ssao_material.json"], type : "blob", name : "ssao_material_json"};
	this.ssao_material_jsonName = "ssao_material_json";
	this.ssao_material_json = null;
	this.fxaa_material_jsonDescription = { files : ["fxaa_material.json"], type : "blob", name : "fxaa_material_json"};
	this.fxaa_material_jsonName = "fxaa_material_json";
	this.fxaa_material_json = null;
	this.deferred_material_jsonDescription = { files : ["deferred_material.json"], type : "blob", name : "deferred_material_json"};
	this.deferred_material_jsonName = "deferred_material_json";
	this.deferred_material_json = null;
	this.blur_material_jsonDescription = { files : ["blur_material.json"], type : "blob", name : "blur_material_json"};
	this.blur_material_jsonName = "blur_material_json";
	this.blur_material_json = null;
};
$hxClasses["kha.BlobList"] = kha_BlobList;
kha_BlobList.__name__ = ["kha","BlobList"];
kha_BlobList.prototype = {
	blur_material_json: null
	,blur_material_jsonName: null
	,blur_material_jsonDescription: null
	,blur_material_jsonLoad: function(done) {
		kha_Assets.loadBlob("blur_material_json",function(blob) {
			done();
		});
	}
	,blur_material_jsonUnload: function() {
		this.blur_material_json.unload();
		this.blur_material_json = null;
	}
	,deferred_material_json: null
	,deferred_material_jsonName: null
	,deferred_material_jsonDescription: null
	,deferred_material_jsonLoad: function(done) {
		kha_Assets.loadBlob("deferred_material_json",function(blob) {
			done();
		});
	}
	,deferred_material_jsonUnload: function() {
		this.deferred_material_json.unload();
		this.deferred_material_json = null;
	}
	,fxaa_material_json: null
	,fxaa_material_jsonName: null
	,fxaa_material_jsonDescription: null
	,fxaa_material_jsonLoad: function(done) {
		kha_Assets.loadBlob("fxaa_material_json",function(blob) {
			done();
		});
	}
	,fxaa_material_jsonUnload: function() {
		this.fxaa_material_json.unload();
		this.fxaa_material_json = null;
	}
	,ssao_material_json: null
	,ssao_material_jsonName: null
	,ssao_material_jsonDescription: null
	,ssao_material_jsonLoad: function(done) {
		kha_Assets.loadBlob("ssao_material_json",function(blob) {
			done();
		});
	}
	,ssao_material_jsonUnload: function() {
		this.ssao_material_json.unload();
		this.ssao_material_json = null;
	}
	,Scene_json: null
	,Scene_jsonName: null
	,Scene_jsonDescription: null
	,Scene_jsonLoad: function(done) {
		kha_Assets.loadBlob("Scene_json",function(blob) {
			done();
		});
	}
	,Scene_jsonUnload: function() {
		this.Scene_json.unload();
		this.Scene_json = null;
	}
	,geom_Cube_json: null
	,geom_Cube_jsonName: null
	,geom_Cube_jsonDescription: null
	,geom_Cube_jsonLoad: function(done) {
		kha_Assets.loadBlob("geom_Cube_json",function(blob) {
			done();
		});
	}
	,geom_Cube_jsonUnload: function() {
		this.geom_Cube_json.unload();
		this.geom_Cube_json = null;
	}
	,geom_Plane_json: null
	,geom_Plane_jsonName: null
	,geom_Plane_jsonDescription: null
	,geom_Plane_jsonLoad: function(done) {
		kha_Assets.loadBlob("geom_Plane_json",function(blob) {
			done();
		});
	}
	,geom_Plane_jsonUnload: function() {
		this.geom_Plane_json.unload();
		this.geom_Plane_json = null;
	}
	,geom_Sphere_json: null
	,geom_Sphere_jsonName: null
	,geom_Sphere_jsonDescription: null
	,geom_Sphere_jsonLoad: function(done) {
		kha_Assets.loadBlob("geom_Sphere_json",function(blob) {
			done();
		});
	}
	,geom_Sphere_jsonUnload: function() {
		this.geom_Sphere_json.unload();
		this.geom_Sphere_json = null;
	}
	,World_material_json: null
	,World_material_jsonName: null
	,World_material_jsonDescription: null
	,World_material_jsonLoad: function(done) {
		kha_Assets.loadBlob("World_material_json",function(blob) {
			done();
		});
	}
	,World_material_jsonUnload: function() {
		this.World_material_json.unload();
		this.World_material_json = null;
	}
	,deferred_pipeline_json: null
	,deferred_pipeline_jsonName: null
	,deferred_pipeline_jsonDescription: null
	,deferred_pipeline_jsonLoad: function(done) {
		kha_Assets.loadBlob("deferred_pipeline_json",function(blob) {
			done();
		});
	}
	,deferred_pipeline_jsonUnload: function() {
		this.deferred_pipeline_json.unload();
		this.deferred_pipeline_json = null;
	}
	,forward_pipeline_json: null
	,forward_pipeline_jsonName: null
	,forward_pipeline_jsonDescription: null
	,forward_pipeline_jsonLoad: function(done) {
		kha_Assets.loadBlob("forward_pipeline_json",function(blob) {
			done();
		});
	}
	,forward_pipeline_jsonUnload: function() {
		this.forward_pipeline_json.unload();
		this.forward_pipeline_json = null;
	}
	,pathtrace_pipeline_json: null
	,pathtrace_pipeline_jsonName: null
	,pathtrace_pipeline_jsonDescription: null
	,pathtrace_pipeline_jsonLoad: function(done) {
		kha_Assets.loadBlob("pathtrace_pipeline_json",function(blob) {
			done();
		});
	}
	,pathtrace_pipeline_jsonUnload: function() {
		this.pathtrace_pipeline_json.unload();
		this.pathtrace_pipeline_json = null;
	}
	,env_map_json: null
	,env_map_jsonName: null
	,env_map_jsonDescription: null
	,env_map_jsonLoad: function(done) {
		kha_Assets.loadBlob("env_map_json",function(blob) {
			done();
		});
	}
	,env_map_jsonUnload: function() {
		this.env_map_json.unload();
		this.env_map_json = null;
	}
	,forward_json: null
	,forward_jsonName: null
	,forward_jsonDescription: null
	,forward_jsonLoad: function(done) {
		kha_Assets.loadBlob("forward_json",function(blob) {
			done();
		});
	}
	,forward_jsonUnload: function() {
		this.forward_json.unload();
		this.forward_json = null;
	}
	,__class__: kha_BlobList
};
var kha_FontList = function() {
};
$hxClasses["kha.FontList"] = kha_FontList;
kha_FontList.__name__ = ["kha","FontList"];
kha_FontList.prototype = {
	__class__: kha_FontList
};
var kha_VideoList = function() {
};
$hxClasses["kha.VideoList"] = kha_VideoList;
kha_VideoList.__name__ = ["kha","VideoList"];
kha_VideoList.prototype = {
	__class__: kha_VideoList
};
var kha_Assets = function() { };
$hxClasses["kha.Assets"] = kha_Assets;
kha_Assets.__name__ = ["kha","Assets"];
kha_Assets.__properties__ = {get_videoFormats:"get_videoFormats",get_fontFormats:"get_fontFormats",get_soundFormats:"get_soundFormats",get_imageFormats:"get_imageFormats"}
kha_Assets.loadEverything = function(callback) {
	var filesLeft = 0;
	var _g = 0;
	var _g1 = Type.getInstanceFields(kha_BlobList);
	while(_g < _g1.length) {
		var blob = _g1[_g];
		++_g;
		if(StringTools.endsWith(blob,"Load")) ++filesLeft;
	}
	var _g2 = 0;
	var _g11 = Type.getInstanceFields(kha_ImageList);
	while(_g2 < _g11.length) {
		var image = _g11[_g2];
		++_g2;
		if(StringTools.endsWith(image,"Load")) ++filesLeft;
	}
	var _g3 = 0;
	var _g12 = Type.getInstanceFields(kha_SoundList);
	while(_g3 < _g12.length) {
		var sound = _g12[_g3];
		++_g3;
		if(StringTools.endsWith(sound,"Load")) ++filesLeft;
	}
	var _g4 = 0;
	var _g13 = Type.getInstanceFields(kha_FontList);
	while(_g4 < _g13.length) {
		var font = _g13[_g4];
		++_g4;
		if(StringTools.endsWith(font,"Load")) ++filesLeft;
	}
	var _g5 = 0;
	var _g14 = Type.getInstanceFields(kha_VideoList);
	while(_g5 < _g14.length) {
		var video = _g14[_g5];
		++_g5;
		if(StringTools.endsWith(video,"Load")) ++filesLeft;
	}
	if(filesLeft == 0) {
		callback();
		return;
	}
	var _g6 = 0;
	var _g15 = Type.getInstanceFields(kha_BlobList);
	while(_g6 < _g15.length) {
		var blob1 = _g15[_g6];
		++_g6;
		if(StringTools.endsWith(blob1,"Load")) (Reflect.field(kha_Assets.blobs,blob1))(function() {
			--filesLeft;
			if(filesLeft == 0) callback();
		});
	}
	var _g7 = 0;
	var _g16 = Type.getInstanceFields(kha_ImageList);
	while(_g7 < _g16.length) {
		var image1 = _g16[_g7];
		++_g7;
		if(StringTools.endsWith(image1,"Load")) (Reflect.field(kha_Assets.images,image1))(function() {
			--filesLeft;
			if(filesLeft == 0) callback();
		});
	}
	var _g8 = 0;
	var _g17 = Type.getInstanceFields(kha_SoundList);
	while(_g8 < _g17.length) {
		var sound1 = _g17[_g8];
		++_g8;
		if(StringTools.endsWith(sound1,"Load")) (Reflect.field(kha_Assets.sounds,sound1))(function() {
			--filesLeft;
			if(filesLeft == 0) callback();
		});
	}
	var _g9 = 0;
	var _g18 = Type.getInstanceFields(kha_FontList);
	while(_g9 < _g18.length) {
		var font1 = _g18[_g9];
		++_g9;
		if(StringTools.endsWith(font1,"Load")) (Reflect.field(kha_Assets.fonts,font1))(function() {
			--filesLeft;
			if(filesLeft == 0) callback();
		});
	}
	var _g10 = 0;
	var _g19 = Type.getInstanceFields(kha_VideoList);
	while(_g10 < _g19.length) {
		var video1 = _g19[_g10];
		++_g10;
		if(StringTools.endsWith(video1,"Load")) (Reflect.field(kha_Assets.videos,video1))(function() {
			--filesLeft;
			if(filesLeft == 0) callback();
		});
	}
};
kha_Assets.loadImage = function(name,done) {
	var description = Reflect.field(kha_Assets.images,name + "Description");
	kha_LoaderImpl.loadImageFromDescription(description,function(image) {
		kha_Assets.images[name] = image;
		done(image);
	});
};
kha_Assets.loadImageFromPath = function(path,readable,done) {
	var description = { files : [path], readable : readable};
	kha_LoaderImpl.loadImageFromDescription(description,done);
};
kha_Assets.get_imageFormats = function() {
	return kha_LoaderImpl.getImageFormats();
};
kha_Assets.loadBlob = function(name,done) {
	var description = Reflect.field(kha_Assets.blobs,name + "Description");
	kha_LoaderImpl.loadBlobFromDescription(description,function(blob) {
		kha_Assets.blobs[name] = blob;
		done(blob);
	});
};
kha_Assets.loadBlobFromPath = function(path,done) {
	var description = { files : [path]};
	kha_LoaderImpl.loadBlobFromDescription(description,done);
};
kha_Assets.loadSound = function(name,done) {
	var description = Reflect.field(kha_Assets.sounds,name + "Description");
	kha_LoaderImpl.loadSoundFromDescription(description,function(sound) {
		kha_Assets.sounds[name] = sound;
		done(sound);
	});
	return;
};
kha_Assets.loadSoundFromPath = function(path,done) {
	var description = { files : [path]};
	kha_LoaderImpl.loadSoundFromDescription(description,done);
	return;
};
kha_Assets.get_soundFormats = function() {
	return kha_LoaderImpl.getSoundFormats();
};
kha_Assets.loadFont = function(name,done) {
	var description = Reflect.field(kha_Assets.fonts,name + "Description");
	kha_LoaderImpl.loadFontFromDescription(description,function(font) {
		kha_Assets.fonts[name] = font;
		done(font);
	});
	return;
};
kha_Assets.loadFontFromPath = function(path,done) {
	var description = { files : [path]};
	kha_LoaderImpl.loadFontFromDescription(description,done);
	return;
};
kha_Assets.get_fontFormats = function() {
	return ["ttf"];
};
kha_Assets.loadVideo = function(name,done) {
	var description = Reflect.field(kha_Assets.videos,name + "Description");
	kha_LoaderImpl.loadVideoFromDescription(description,function(video) {
		kha_Assets.videos[name] = video;
		done(video);
	});
	return;
};
kha_Assets.loadVideoFromPath = function(path,done) {
	var description = { files : [path]};
	kha_LoaderImpl.loadVideoFromDescription(description,done);
	return;
};
kha_Assets.get_videoFormats = function() {
	return kha_LoaderImpl.getVideoFormats();
};
var kha_Canvas = function() { };
$hxClasses["kha.Canvas"] = kha_Canvas;
kha_Canvas.__name__ = ["kha","Canvas"];
kha_Canvas.prototype = {
	get_width: null
	,get_height: null
	,get_g1: null
	,get_g2: null
	,get_g4: null
	,width: null
	,height: null
	,g1: null
	,g2: null
	,g4: null
	,__class__: kha_Canvas
	,__properties__: {get_g4:"get_g4",get_g2:"get_g2",get_g1:"get_g1",get_height:"get_height",get_width:"get_width"}
};
var kha_Resource = function() { };
$hxClasses["kha.Resource"] = kha_Resource;
kha_Resource.__name__ = ["kha","Resource"];
kha_Resource.prototype = {
	unload: null
	,__class__: kha_Resource
};
var kha_Image = function() { };
$hxClasses["kha.Image"] = kha_Image;
kha_Image.__name__ = ["kha","Image"];
kha_Image.__interfaces__ = [kha_Resource,kha_Canvas];
kha_Image.__properties__ = {get_nonPow2Supported:"get_nonPow2Supported",get_maxSize:"get_maxSize"}
kha_Image.create = function(width,height,format,usage) {
	if(format == null) format = kha_graphics4_TextureFormat.RGBA32;
	if(usage == null) usage = kha_graphics4_Usage.StaticUsage;
	if(kha_SystemImpl.gl == null) return new kha_CanvasImage(width,height,format,false); else return new kha_WebGLImage(width,height,format,false,0);
};
kha_Image.createRenderTarget = function(width,height,format,depthStencil,antiAliasingSamples,contextId) {
	if(contextId == null) contextId = 0;
	if(antiAliasingSamples == null) antiAliasingSamples = 1;
	if(depthStencil == null) depthStencil = 0;
	if(format == null) format = kha_graphics4_TextureFormat.RGBA32;
	if(kha_SystemImpl.gl == null) return new kha_CanvasImage(width,height,format,true); else return new kha_WebGLImage(width,height,format,true,depthStencil);
};
kha_Image.fromImage = function(image,readable) {
	if(kha_SystemImpl.gl == null) {
		var img = new kha_CanvasImage(image.width,image.height,kha_graphics4_TextureFormat.RGBA32,false);
		img.image = image;
		img.createTexture();
		return img;
	} else {
		var img1 = new kha_WebGLImage(image.width,image.height,kha_graphics4_TextureFormat.RGBA32,false,0);
		img1.image = image;
		img1.createTexture();
		return img1;
	}
};
kha_Image.fromVideo = function(video) {
	if(kha_SystemImpl.gl == null) {
		var img = new kha_CanvasImage(video.element.videoWidth,video.element.videoHeight,kha_graphics4_TextureFormat.RGBA32,false);
		img.video = video.element;
		img.createTexture();
		return img;
	} else {
		var img1 = new kha_WebGLImage(video.element.videoWidth,video.element.videoHeight,kha_graphics4_TextureFormat.RGBA32,false,0);
		img1.video = video.element;
		img1.createTexture();
		return img1;
	}
};
kha_Image.get_maxSize = function() {
	if(kha_SystemImpl.gl == null) return 8192; else return kha_SystemImpl.gl.getParameter(3379);
};
kha_Image.get_nonPow2Supported = function() {
	return kha_SystemImpl.gl != null;
};
kha_Image.prototype = {
	isOpaque: function(x,y) {
		return false;
	}
	,at: function(x,y) {
		return kha__$Color_Color_$Impl_$.Black;
	}
	,unload: function() {
	}
	,lock: function(level) {
		if(level == null) level = 0;
		return null;
	}
	,unlock: function() {
	}
	,generateMipmaps: function(levels) {
	}
	,setMipmaps: function(mipmaps) {
	}
	,width: null
	,get_width: function() {
		return 0;
	}
	,height: null
	,get_height: function() {
		return 0;
	}
	,realWidth: null
	,get_realWidth: function() {
		return 0;
	}
	,realHeight: null
	,get_realHeight: function() {
		return 0;
	}
	,g1: null
	,get_g1: function() {
		return null;
	}
	,g2: null
	,get_g2: function() {
		return null;
	}
	,g4: null
	,get_g4: function() {
		return null;
	}
	,__class__: kha_Image
	,__properties__: {get_g4:"get_g4",get_g2:"get_g2",get_g1:"get_g1",get_realHeight:"get_realHeight",get_realWidth:"get_realWidth",get_height:"get_height",get_width:"get_width"}
};
var kha_CanvasImage = function(width,height,format,renderTarget) {
	this.g2canvas = null;
	this.myWidth = width;
	this.myHeight = height;
	this.format = format;
	this.renderTarget = renderTarget;
	this.image = null;
	this.video = null;
	if(renderTarget) this.createTexture();
};
$hxClasses["kha.CanvasImage"] = kha_CanvasImage;
kha_CanvasImage.__name__ = ["kha","CanvasImage"];
kha_CanvasImage.init = function() {
	var canvas = window.document.createElement("canvas");
	if(canvas != null) {
		kha_CanvasImage.context = canvas.getContext("2d");
		canvas.width = 2048;
		canvas.height = 2048;
		kha_CanvasImage.context.globalCompositeOperation = "copy";
	}
};
kha_CanvasImage.upperPowerOfTwo = function(v) {
	v--;
	v |= v >>> 1;
	v |= v >>> 2;
	v |= v >>> 4;
	v |= v >>> 8;
	v |= v >>> 16;
	v++;
	return v;
};
kha_CanvasImage.__super__ = kha_Image;
kha_CanvasImage.prototype = $extend(kha_Image.prototype,{
	image: null
	,video: null
	,data: null
	,myWidth: null
	,myHeight: null
	,format: null
	,renderTarget: null
	,frameBuffer: null
	,graphics1: null
	,g2canvas: null
	,get_g1: function() {
		if(this.graphics1 == null) this.graphics1 = new kha_graphics2_Graphics1(this);
		return this.graphics1;
	}
	,get_g2: function() {
		if(this.g2canvas == null) {
			var canvas = window.document.createElement("canvas");
			this.image = canvas;
			var context = canvas.getContext("2d");
			canvas.width = this.get_width();
			canvas.height = this.get_height();
			this.g2canvas = new kha_js_CanvasGraphics(context,this.get_width(),this.get_height());
		}
		return this.g2canvas;
	}
	,get_g4: function() {
		return null;
	}
	,get_width: function() {
		return this.myWidth;
	}
	,get_height: function() {
		return this.myHeight;
	}
	,get_realWidth: function() {
		return this.myWidth;
	}
	,get_realHeight: function() {
		return this.myHeight;
	}
	,isOpaque: function(x,y) {
		if(this.data == null) {
			if(kha_CanvasImage.context == null) return true; else this.createImageData();
		}
		return this.data.data[y * Std["int"](this.image.width) * 4 + x * 4 + 3] != 0;
	}
	,at: function(x,y) {
		if(this.data == null) {
			if(kha_CanvasImage.context == null) return kha__$Color_Color_$Impl_$.Black; else this.createImageData();
		}
		var value = this.data.data[y * Std["int"](this.image.width) * 4 + x * 4];
		return kha__$Color_Color_$Impl_$._new(value);
	}
	,createImageData: function() {
		kha_CanvasImage.context.strokeStyle = "rgba(0,0,0,0)";
		kha_CanvasImage.context.fillStyle = "rgba(0,0,0,0)";
		kha_CanvasImage.context.fillRect(0,0,this.image.width,this.image.height);
		kha_CanvasImage.context.drawImage(this.image,0,0,this.image.width,this.image.height,0,0,this.image.width,this.image.height);
		this.data = kha_CanvasImage.context.getImageData(0,0,this.image.width,this.image.height);
	}
	,texture: null
	,createTexture: function() {
		if(kha_SystemImpl.gl == null) return;
		this.texture = kha_SystemImpl.gl.createTexture();
		kha_SystemImpl.gl.bindTexture(3553,this.texture);
		kha_SystemImpl.gl.texParameteri(3553,10240,9729);
		kha_SystemImpl.gl.texParameteri(3553,10241,9729);
		kha_SystemImpl.gl.texParameteri(3553,10242,33071);
		kha_SystemImpl.gl.texParameteri(3553,10243,33071);
		if(this.renderTarget) {
			this.frameBuffer = kha_SystemImpl.gl.createFramebuffer();
			kha_SystemImpl.gl.bindFramebuffer(36160,this.frameBuffer);
			kha_SystemImpl.gl.texImage2D(3553,0,6408,this.get_realWidth(),this.get_realHeight(),0,6408,5121,null);
			kha_SystemImpl.gl.framebufferTexture2D(36160,36064,3553,this.texture,0);
			kha_SystemImpl.gl.bindFramebuffer(36160,null);
		} else if(this.video != null) kha_SystemImpl.gl.texImage2D(3553,0,6408,6408,5121,this.video); else kha_SystemImpl.gl.texImage2D(3553,0,6408,6408,5121,this.image);
		kha_SystemImpl.gl.bindTexture(3553,null);
	}
	,set: function(stage) {
		kha_SystemImpl.gl.activeTexture(33984 + stage);
		kha_SystemImpl.gl.bindTexture(3553,this.texture);
		if(this.video != null) kha_SystemImpl.gl.texImage2D(3553,0,6408,6408,5121,this.video);
	}
	,bytes: null
	,lock: function(level) {
		if(level == null) level = 0;
		this.bytes = haxe_io_Bytes.alloc(this.format == kha_graphics4_TextureFormat.RGBA32?4 * this.get_width() * this.get_height():this.get_width() * this.get_height());
		return this.bytes;
	}
	,unlock: function() {
		if(kha_SystemImpl.gl != null) {
			this.texture = kha_SystemImpl.gl.createTexture();
			kha_SystemImpl.gl.bindTexture(3553,this.texture);
			kha_SystemImpl.gl.texParameteri(3553,10240,9729);
			kha_SystemImpl.gl.texParameteri(3553,10241,9729);
			kha_SystemImpl.gl.texParameteri(3553,10242,33071);
			kha_SystemImpl.gl.texParameteri(3553,10243,33071);
			kha_SystemImpl.gl.texImage2D(3553,0,6409,this.get_width(),this.get_height(),0,6409,5121,new Uint8Array(this.bytes.b.bufferValue));
			if(kha_SystemImpl.gl.getError() == 1282) {
				var rgbaBytes = haxe_io_Bytes.alloc(this.get_width() * this.get_height() * 4);
				var _g1 = 0;
				var _g = this.get_height();
				while(_g1 < _g) {
					var y = _g1++;
					var _g3 = 0;
					var _g2 = this.get_width();
					while(_g3 < _g2) {
						var x = _g3++;
						var value = this.bytes.get(y * this.get_width() + x);
						rgbaBytes.set(y * this.get_width() * 4 + x * 4,value);
						rgbaBytes.set(y * this.get_width() * 4 + x * 4 + 1,value);
						rgbaBytes.set(y * this.get_width() * 4 + x * 4 + 2,value);
						rgbaBytes.set(y * this.get_width() * 4 + x * 4 + 3,255);
					}
				}
				kha_SystemImpl.gl.texImage2D(3553,0,6408,this.get_width(),this.get_height(),0,6408,5121,new Uint8Array(rgbaBytes.b.bufferValue));
			}
			kha_SystemImpl.gl.bindTexture(3553,null);
			this.bytes = null;
		}
	}
	,unload: function() {
	}
	,__class__: kha_CanvasImage
});
var kha__$Color_Color_$Impl_$ = {};
$hxClasses["kha._Color.Color_Impl_"] = kha__$Color_Color_$Impl_$;
kha__$Color_Color_$Impl_$.__name__ = ["kha","_Color","Color_Impl_"];
kha__$Color_Color_$Impl_$.__properties__ = {set_value:"set_value",get_value:"get_value",set_A:"set_A",get_A:"get_A",set_B:"set_B",get_B:"get_B",set_G:"set_G",get_G:"get_G",set_R:"set_R",get_R:"get_R",set_Ab:"set_Ab",get_Ab:"get_Ab",set_Bb:"set_Bb",get_Bb:"get_Bb",set_Gb:"set_Gb",get_Gb:"get_Gb",set_Rb:"set_Rb",get_Rb:"get_Rb"}
kha__$Color_Color_$Impl_$.fromValue = function(value) {
	return kha__$Color_Color_$Impl_$._new(value);
};
kha__$Color_Color_$Impl_$.fromBytes = function(r,g,b,a) {
	if(a == null) a = 255;
	return kha__$Color_Color_$Impl_$._new(a << 24 | r << 16 | g << 8 | b);
};
kha__$Color_Color_$Impl_$.fromFloats = function(r,g,b,a) {
	if(a == null) a = 1;
	return kha__$Color_Color_$Impl_$._new((a * 255 | 0) << 24 | (r * 255 | 0) << 16 | (g * 255 | 0) << 8 | (b * 255 | 0));
};
kha__$Color_Color_$Impl_$.fromString = function(value) {
	if((value.length == 7 || value.length == 9) && value.charCodeAt(0) == 35) {
		var colorValue = Std.parseInt("0x" + HxOverrides.substr(value,1,null));
		if(value.length == 7) colorValue += -16777216;
		return kha__$Color_Color_$Impl_$._new(colorValue);
	} else throw new js__$Boot_HaxeError("Invalid Color string: '" + value + "'");
};
kha__$Color_Color_$Impl_$._new = function(value) {
	return value;
};
kha__$Color_Color_$Impl_$.get_value = function(this1) {
	return this1;
};
kha__$Color_Color_$Impl_$.set_value = function(this1,value) {
	this1 = value;
	return this1;
};
kha__$Color_Color_$Impl_$.get_Rb = function(this1) {
	return (this1 & 16711680) >>> 16;
};
kha__$Color_Color_$Impl_$.get_Gb = function(this1) {
	return (this1 & 65280) >>> 8;
};
kha__$Color_Color_$Impl_$.get_Bb = function(this1) {
	return this1 & 255;
};
kha__$Color_Color_$Impl_$.get_Ab = function(this1) {
	return this1 >>> 24;
};
kha__$Color_Color_$Impl_$.set_Rb = function(this1,i) {
	this1 = kha__$Color_Color_$Impl_$.get_Ab(this1) << 24 | i << 16 | kha__$Color_Color_$Impl_$.get_Gb(this1) << 8 | kha__$Color_Color_$Impl_$.get_Bb(this1);
	return i;
};
kha__$Color_Color_$Impl_$.set_Gb = function(this1,i) {
	this1 = kha__$Color_Color_$Impl_$.get_Ab(this1) << 24 | kha__$Color_Color_$Impl_$.get_Rb(this1) << 16 | i << 8 | kha__$Color_Color_$Impl_$.get_Bb(this1);
	return i;
};
kha__$Color_Color_$Impl_$.set_Bb = function(this1,i) {
	this1 = kha__$Color_Color_$Impl_$.get_Ab(this1) << 24 | kha__$Color_Color_$Impl_$.get_Rb(this1) << 16 | kha__$Color_Color_$Impl_$.get_Gb(this1) << 8 | i;
	return i;
};
kha__$Color_Color_$Impl_$.set_Ab = function(this1,i) {
	this1 = i << 24 | kha__$Color_Color_$Impl_$.get_Rb(this1) << 16 | kha__$Color_Color_$Impl_$.get_Gb(this1) << 8 | kha__$Color_Color_$Impl_$.get_Bb(this1);
	return i;
};
kha__$Color_Color_$Impl_$.get_R = function(this1) {
	return kha__$Color_Color_$Impl_$.get_Rb(this1) * 0.00392156862745098;
};
kha__$Color_Color_$Impl_$.get_G = function(this1) {
	return kha__$Color_Color_$Impl_$.get_Gb(this1) * 0.00392156862745098;
};
kha__$Color_Color_$Impl_$.get_B = function(this1) {
	return kha__$Color_Color_$Impl_$.get_Bb(this1) * 0.00392156862745098;
};
kha__$Color_Color_$Impl_$.get_A = function(this1) {
	return kha__$Color_Color_$Impl_$.get_Ab(this1) * 0.00392156862745098;
};
kha__$Color_Color_$Impl_$.set_R = function(this1,f) {
	this1 = Std["int"](kha__$Color_Color_$Impl_$.get_Ab(this1) * 0.00392156862745098 * 255) << 24 | (f * 255 | 0) << 16 | Std["int"](kha__$Color_Color_$Impl_$.get_Gb(this1) * 0.00392156862745098 * 255) << 8 | Std["int"](kha__$Color_Color_$Impl_$.get_Bb(this1) * 0.00392156862745098 * 255);
	return f;
};
kha__$Color_Color_$Impl_$.set_G = function(this1,f) {
	this1 = Std["int"](kha__$Color_Color_$Impl_$.get_Ab(this1) * 0.00392156862745098 * 255) << 24 | Std["int"](kha__$Color_Color_$Impl_$.get_Rb(this1) * 0.00392156862745098 * 255) << 16 | (f * 255 | 0) << 8 | Std["int"](kha__$Color_Color_$Impl_$.get_Bb(this1) * 0.00392156862745098 * 255);
	return f;
};
kha__$Color_Color_$Impl_$.set_B = function(this1,f) {
	this1 = Std["int"](kha__$Color_Color_$Impl_$.get_Ab(this1) * 0.00392156862745098 * 255) << 24 | Std["int"](kha__$Color_Color_$Impl_$.get_Rb(this1) * 0.00392156862745098 * 255) << 16 | Std["int"](kha__$Color_Color_$Impl_$.get_Gb(this1) * 0.00392156862745098 * 255) << 8 | (f * 255 | 0);
	return f;
};
kha__$Color_Color_$Impl_$.set_A = function(this1,f) {
	this1 = (f * 255 | 0) << 24 | Std["int"](kha__$Color_Color_$Impl_$.get_Rb(this1) * 0.00392156862745098 * 255) << 16 | Std["int"](kha__$Color_Color_$Impl_$.get_Gb(this1) * 0.00392156862745098 * 255) << 8 | Std["int"](kha__$Color_Color_$Impl_$.get_Bb(this1) * 0.00392156862745098 * 255);
	return f;
};
var kha_EnvironmentVariables = function() {
};
$hxClasses["kha.EnvironmentVariables"] = kha_EnvironmentVariables;
kha_EnvironmentVariables.__name__ = ["kha","EnvironmentVariables"];
kha_EnvironmentVariables.prototype = {
	getVariable: function(name) {
		return "";
	}
	,__class__: kha_EnvironmentVariables
};
var kha_Font = function() { };
$hxClasses["kha.Font"] = kha_Font;
kha_Font.__name__ = ["kha","Font"];
kha_Font.__interfaces__ = [kha_Resource];
kha_Font.prototype = {
	height: null
	,width: null
	,baseline: null
	,__class__: kha_Font
};
var kha_FontStyle = function(bold,italic,underlined) {
	this.bold = bold;
	this.italic = italic;
	this.underlined = underlined;
};
$hxClasses["kha.FontStyle"] = kha_FontStyle;
kha_FontStyle.__name__ = ["kha","FontStyle"];
kha_FontStyle.prototype = {
	bold: null
	,italic: null
	,underlined: null
	,getBold: function() {
		return this.bold;
	}
	,getItalic: function() {
		return this.italic;
	}
	,getUnderlined: function() {
		return this.underlined;
	}
	,__class__: kha_FontStyle
};
var kha_Framebuffer = function(windowId,g1,g2,g4) {
	this.windowId = windowId;
	this.graphics1 = g1;
	this.graphics2 = g2;
	this.graphics4 = g4;
};
$hxClasses["kha.Framebuffer"] = kha_Framebuffer;
kha_Framebuffer.__name__ = ["kha","Framebuffer"];
kha_Framebuffer.__interfaces__ = [kha_Canvas];
kha_Framebuffer.prototype = {
	windowId: null
	,graphics1: null
	,graphics2: null
	,graphics4: null
	,init: function(g1,g2,g4) {
		this.graphics1 = g1;
		this.graphics2 = g2;
		this.graphics4 = g4;
	}
	,g1: null
	,get_g1: function() {
		return this.graphics1;
	}
	,g2: null
	,get_g2: function() {
		return this.graphics2;
	}
	,g4: null
	,get_g4: function() {
		return this.graphics4;
	}
	,width: null
	,get_width: function() {
		return kha_System.windowWidth(this.windowId);
	}
	,height: null
	,get_height: function() {
		return kha_System.windowHeight(this.windowId);
	}
	,__class__: kha_Framebuffer
	,__properties__: {get_height:"get_height",get_width:"get_width",get_g4:"get_g4",get_g2:"get_g2",get_g1:"get_g1"}
};
var kha_Key = $hxClasses["kha.Key"] = { __ename__ : ["kha","Key"], __constructs__ : ["BACKSPACE","TAB","ENTER","SHIFT","CTRL","ALT","CHAR","ESC","DEL","UP","DOWN","LEFT","RIGHT","BACK"] };
kha_Key.BACKSPACE = ["BACKSPACE",0];
kha_Key.BACKSPACE.toString = $estr;
kha_Key.BACKSPACE.__enum__ = kha_Key;
kha_Key.TAB = ["TAB",1];
kha_Key.TAB.toString = $estr;
kha_Key.TAB.__enum__ = kha_Key;
kha_Key.ENTER = ["ENTER",2];
kha_Key.ENTER.toString = $estr;
kha_Key.ENTER.__enum__ = kha_Key;
kha_Key.SHIFT = ["SHIFT",3];
kha_Key.SHIFT.toString = $estr;
kha_Key.SHIFT.__enum__ = kha_Key;
kha_Key.CTRL = ["CTRL",4];
kha_Key.CTRL.toString = $estr;
kha_Key.CTRL.__enum__ = kha_Key;
kha_Key.ALT = ["ALT",5];
kha_Key.ALT.toString = $estr;
kha_Key.ALT.__enum__ = kha_Key;
kha_Key.CHAR = ["CHAR",6];
kha_Key.CHAR.toString = $estr;
kha_Key.CHAR.__enum__ = kha_Key;
kha_Key.ESC = ["ESC",7];
kha_Key.ESC.toString = $estr;
kha_Key.ESC.__enum__ = kha_Key;
kha_Key.DEL = ["DEL",8];
kha_Key.DEL.toString = $estr;
kha_Key.DEL.__enum__ = kha_Key;
kha_Key.UP = ["UP",9];
kha_Key.UP.toString = $estr;
kha_Key.UP.__enum__ = kha_Key;
kha_Key.DOWN = ["DOWN",10];
kha_Key.DOWN.toString = $estr;
kha_Key.DOWN.__enum__ = kha_Key;
kha_Key.LEFT = ["LEFT",11];
kha_Key.LEFT.toString = $estr;
kha_Key.LEFT.__enum__ = kha_Key;
kha_Key.RIGHT = ["RIGHT",12];
kha_Key.RIGHT.toString = $estr;
kha_Key.RIGHT.__enum__ = kha_Key;
kha_Key.BACK = ["BACK",13];
kha_Key.BACK.toString = $estr;
kha_Key.BACK.__enum__ = kha_Key;
var kha_AlignedQuad = function() {
};
$hxClasses["kha.AlignedQuad"] = kha_AlignedQuad;
kha_AlignedQuad.__name__ = ["kha","AlignedQuad"];
kha_AlignedQuad.prototype = {
	x0: null
	,y0: null
	,s0: null
	,t0: null
	,x1: null
	,y1: null
	,s1: null
	,t1: null
	,xadvance: null
	,__class__: kha_AlignedQuad
};
var kha_KravurImage = function(size,ascent,descent,lineGap,width,height,chars,pixels) {
	this.mySize = size;
	this.width = width;
	this.height = height;
	this.chars = chars;
	this.baseline = ascent;
	var _g = 0;
	while(_g < chars.length) {
		var $char = chars[_g];
		++_g;
		$char.yoff += this.baseline;
	}
	this.texture = kha_Image.create(width,height,kha_graphics4_TextureFormat.L8);
	var bytes = this.texture.lock();
	var pos = 0;
	var _g1 = 0;
	while(_g1 < height) {
		var y = _g1++;
		var _g11 = 0;
		while(_g11 < width) {
			var x = _g11++;
			bytes.set(pos,pixels.readU8(pos));
			++pos;
		}
	}
	this.texture.unlock();
};
$hxClasses["kha.KravurImage"] = kha_KravurImage;
kha_KravurImage.__name__ = ["kha","KravurImage"];
kha_KravurImage.prototype = {
	mySize: null
	,chars: null
	,texture: null
	,width: null
	,height: null
	,baseline: null
	,getTexture: function() {
		return this.texture;
	}
	,getBakedQuad: function(char_index,xpos,ypos) {
		if(char_index >= this.chars.length) return null;
		var ipw = 1.0 / this.width;
		var iph = 1.0 / this.height;
		var b = this.chars[char_index];
		if(b == null) return null;
		var round_x = Math.round(xpos + b.xoff);
		var round_y = Math.round(ypos + b.yoff);
		var q = new kha_AlignedQuad();
		q.x0 = round_x;
		q.y0 = round_y;
		q.x1 = round_x + b.x1 - b.x0;
		q.y1 = round_y + b.y1 - b.y0;
		q.s0 = b.x0 * ipw;
		q.t0 = b.y0 * iph;
		q.s1 = b.x1 * ipw;
		q.t1 = b.y1 * iph;
		q.xadvance = b.xadvance;
		return q;
	}
	,getCharWidth: function(charIndex) {
		if(charIndex < 32) return 0;
		if(charIndex - 32 >= this.chars.length) return 0;
		return this.chars[charIndex - 32].xadvance;
	}
	,getHeight: function() {
		return this.mySize;
	}
	,stringWidth: function(string) {
		var str = new String(string);
		var width = 0;
		var _g1 = 0;
		var _g = str.length;
		while(_g1 < _g) {
			var c = _g1++;
			width += this.getCharWidth(HxOverrides.cca(str,c));
		}
		return width;
	}
	,getBaselinePosition: function() {
		return this.baseline;
	}
	,__class__: kha_KravurImage
};
var kha_Kravur = function(blob) {
	this.images = new haxe_ds_IntMap();
	this.blob = blob;
};
$hxClasses["kha.Kravur"] = kha_Kravur;
kha_Kravur.__name__ = ["kha","Kravur"];
kha_Kravur.__interfaces__ = [kha_Font];
kha_Kravur.prototype = {
	blob: null
	,images: null
	,_get: function(fontSize) {
		if(!this.images.h.hasOwnProperty(fontSize)) {
			var width = 64;
			var height = 32;
			var baked;
			var this1;
			this1 = new Array(224);
			baked = this1;
			var _g1 = 0;
			var _g = baked.length;
			while(_g1 < _g) {
				var i = _g1++;
				var val = new kha_graphics2_truetype_Stbtt_$bakedchar();
				baked[i] = val;
			}
			var pixels = null;
			var status = -1;
			while(status < 0) {
				if(height < width) height *= 2; else width *= 2;
				pixels = kha_internal_BytesBlob.alloc(width * height);
				status = kha_graphics2_truetype_StbTruetype.stbtt_BakeFontBitmap(this.blob,0,fontSize,pixels,width,height,32,224,baked);
			}
			var info = new kha_graphics2_truetype_Stbtt_$fontinfo();
			kha_graphics2_truetype_StbTruetype.stbtt_InitFont(info,this.blob,0);
			var metrics = kha_graphics2_truetype_StbTruetype.stbtt_GetFontVMetrics(info);
			var scale = kha_graphics2_truetype_StbTruetype.stbtt_ScaleForPixelHeight(info,fontSize);
			var ascent = Math.round(metrics.ascent * scale);
			var descent = Math.round(metrics.descent * scale);
			var lineGap = Math.round(metrics.lineGap * scale);
			var image = new kha_KravurImage(fontSize | 0,ascent,descent,lineGap,width,height,baked,pixels);
			{
				this.images.h[fontSize] = image;
				image;
			}
			return image;
		}
		return this.images.h[fontSize];
	}
	,height: function(fontSize) {
		return this._get(fontSize).getHeight();
	}
	,width: function(fontSize,str) {
		return this._get(fontSize).stringWidth(str);
	}
	,baseline: function(fontSize) {
		return this._get(fontSize).getBaselinePosition();
	}
	,unload: function() {
		this.blob = null;
		this.images = null;
	}
	,__class__: kha_Kravur
};
var kha_LoaderImpl = function() { };
$hxClasses["kha.LoaderImpl"] = kha_LoaderImpl;
kha_LoaderImpl.__name__ = ["kha","LoaderImpl"];
kha_LoaderImpl.getImageFormats = function() {
	return ["png","jpg"];
};
kha_LoaderImpl.loadImageFromDescription = function(desc,done) {
	var img = window.document.createElement("img");
	img.src = desc.files[0];
	var readable;
	if(Object.prototype.hasOwnProperty.call(desc,"readable")) readable = desc.readable; else readable = false;
	img.onload = function(event) {
		done(kha_Image.fromImage(img,readable));
	};
};
kha_LoaderImpl.getSoundFormats = function() {
	if(kha_SystemImpl._hasWebAudio) return ["ogg"]; else return ["mp4","ogg"];
};
kha_LoaderImpl.loadSoundFromDescription = function(desc,done) {
	if(kha_SystemImpl._hasWebAudio) {
		var _g1 = 0;
		var _g = desc.files.length;
		while(_g1 < _g) {
			var i = _g1++;
			var file = desc.files[i];
			if(StringTools.endsWith(file,".ogg")) {
				new kha_js_WebAudioSound(file,done);
				break;
			}
		}
	} else new kha_js_Sound(desc.files,done);
};
kha_LoaderImpl.getVideoFormats = function() {
	return ["mp4","webm"];
};
kha_LoaderImpl.loadVideoFromDescription = function(desc,done) {
	var video = new kha_js_Video(desc.files,done);
};
kha_LoaderImpl.loadBlobFromDescription = function(desc,done) {
	var request = new XMLHttpRequest();
	request.open("GET",desc.files[0],true);
	request.responseType = "arraybuffer";
	request.onreadystatechange = function() {
		if(request.readyState != 4) return;
		if(request.status >= 200 && request.status < 400) {
			var bytes = null;
			var arrayBuffer = request.response;
			if(arrayBuffer != null) {
				var byteArray = new Uint8Array(arrayBuffer);
				bytes = haxe_io_Bytes.alloc(byteArray.byteLength);
				var _g1 = 0;
				var _g = byteArray.byteLength;
				while(_g1 < _g) {
					var i = _g1++;
					bytes.b[i] = byteArray[i] & 255;
				}
			} else if(request.responseBody != null) {
				var data = VBArray(request.responseBody).toArray();
				bytes = haxe_io_Bytes.alloc(data.length);
				var _g11 = 0;
				var _g2 = data.length;
				while(_g11 < _g2) {
					var i1 = _g11++;
					bytes.b[i1] = data[i1] & 255;
				}
			} else {
				haxe_Log.trace("Error loading " + desc.files[0],{ fileName : "LoaderImpl.hx", lineNumber : 90, className : "kha.LoaderImpl", methodName : "loadBlobFromDescription"});
				window.console.log("loadBlob failed");
			}
			done(new kha_internal_BytesBlob(bytes));
		} else {
			haxe_Log.trace("Error loading " + desc.files[0],{ fileName : "LoaderImpl.hx", lineNumber : 96, className : "kha.LoaderImpl", methodName : "loadBlobFromDescription"});
			window.console.log("loadBlob failed");
		}
	};
	request.send(null);
};
kha_LoaderImpl.loadFontFromDescription = function(desc,done) {
	kha_LoaderImpl.loadBlobFromDescription(desc,function(blob) {
		if(kha_SystemImpl.gl == null) done(new kha_js_Font(new kha_Kravur(blob))); else done(new kha_Kravur(blob));
	});
};
var kha_Rotation = function(center,angle) {
	this.center = center;
	this.angle = angle;
};
$hxClasses["kha.Rotation"] = kha_Rotation;
kha_Rotation.__name__ = ["kha","Rotation"];
kha_Rotation.prototype = {
	center: null
	,angle: null
	,__class__: kha_Rotation
};
var kha_TimeTask = function() {
};
$hxClasses["kha.TimeTask"] = kha_TimeTask;
kha_TimeTask.__name__ = ["kha","TimeTask"];
kha_TimeTask.prototype = {
	task: null
	,start: null
	,period: null
	,duration: null
	,next: null
	,id: null
	,groupId: null
	,active: null
	,paused: null
	,__class__: kha_TimeTask
};
var kha_FrameTask = function(task,priority,id) {
	this.task = task;
	this.priority = priority;
	this.id = id;
	this.active = true;
	this.paused = false;
};
$hxClasses["kha.FrameTask"] = kha_FrameTask;
kha_FrameTask.__name__ = ["kha","FrameTask"];
kha_FrameTask.prototype = {
	task: null
	,priority: null
	,id: null
	,active: null
	,paused: null
	,__class__: kha_FrameTask
};
var kha_Scheduler = function() { };
$hxClasses["kha.Scheduler"] = kha_Scheduler;
kha_Scheduler.__name__ = ["kha","Scheduler"];
kha_Scheduler.init = function() {
	kha_Scheduler.deltas = [];
	var _g1 = 0;
	var _g = kha_Scheduler.DIF_COUNT;
	while(_g1 < _g) {
		var i = _g1++;
		kha_Scheduler.deltas[i] = 0;
	}
	kha_Scheduler.stopped = true;
	kha_Scheduler.frame_tasks_sorted = true;
	kha_Scheduler.current = kha_Scheduler.realTime();
	kha_Scheduler.lastTime = kha_Scheduler.realTime();
	kha_Scheduler.currentFrameTaskId = 0;
	kha_Scheduler.currentTimeTaskId = 0;
	kha_Scheduler.currentGroupId = 0;
	kha_Scheduler.timeTasks = [];
	kha_Scheduler.frameTasks = [];
	kha_Scheduler.toDeleteTime = [];
	kha_Scheduler.toDeleteFrame = [];
};
kha_Scheduler.start = function(restartTimers) {
	if(restartTimers == null) restartTimers = false;
	kha_Scheduler.vsync = kha_System.get_vsync();
	var hz = kha_System.get_refreshRate();
	if(hz >= 57 && hz <= 63) hz = 60;
	kha_Scheduler.onedifhz = 1.0 / hz;
	kha_Scheduler.stopped = false;
	kha_Scheduler.resetTime();
	kha_Scheduler.lastTime = kha_Scheduler.realTime();
	var _g1 = 0;
	var _g = kha_Scheduler.DIF_COUNT;
	while(_g1 < _g) {
		var i = _g1++;
		kha_Scheduler.deltas[i] = 0;
	}
	if(restartTimers) {
		var _g2 = 0;
		var _g11 = kha_Scheduler.timeTasks;
		while(_g2 < _g11.length) {
			var timeTask = _g11[_g2];
			++_g2;
			timeTask.paused = false;
		}
		var _g3 = 0;
		var _g12 = kha_Scheduler.frameTasks;
		while(_g3 < _g12.length) {
			var frameTask = _g12[_g3];
			++_g3;
			frameTask.paused = false;
		}
	}
};
kha_Scheduler.stop = function() {
	kha_Scheduler.stopped = true;
};
kha_Scheduler.isStopped = function() {
	return kha_Scheduler.stopped;
};
kha_Scheduler.back = function(time) {
	kha_Scheduler.lastTime = time;
	var _g = 0;
	var _g1 = kha_Scheduler.timeTasks;
	while(_g < _g1.length) {
		var timeTask = _g1[_g];
		++_g;
		if(timeTask.start >= time) timeTask.next = timeTask.start; else {
			timeTask.next = timeTask.start;
			while(timeTask.next < time) timeTask.next += timeTask.period;
		}
	}
};
kha_Scheduler.executeFrame = function() {
	var now = kha_Scheduler.realTime();
	var delta = now - kha_Scheduler.lastNow;
	kha_Scheduler.lastNow = now;
	var frameEnd = kha_Scheduler.current;
	if(delta < 0) return;
	if(delta > kha_Scheduler.maxframetime) {
		delta = kha_Scheduler.maxframetime;
		frameEnd += delta;
	} else if(kha_Scheduler.vsync) {
		var realdif = kha_Scheduler.onedifhz;
		while(realdif < delta - kha_Scheduler.onedifhz) realdif += kha_Scheduler.onedifhz;
		delta = realdif;
		var _g1 = 0;
		var _g = kha_Scheduler.DIF_COUNT - 2;
		while(_g1 < _g) {
			var i = _g1++;
			delta += kha_Scheduler.deltas[i];
			kha_Scheduler.deltas[i] = kha_Scheduler.deltas[i + 1];
		}
		delta += kha_Scheduler.deltas[kha_Scheduler.DIF_COUNT - 2];
		delta /= kha_Scheduler.DIF_COUNT;
		kha_Scheduler.deltas[kha_Scheduler.DIF_COUNT - 2] = realdif;
		frameEnd += delta;
	} else {
		var _g11 = 0;
		var _g2 = kha_Scheduler.DIF_COUNT - 1;
		while(_g11 < _g2) {
			var i1 = _g11++;
			kha_Scheduler.deltas[i1] = kha_Scheduler.deltas[i1 + 1];
		}
		kha_Scheduler.deltas[kha_Scheduler.DIF_COUNT - 1] = delta;
		var next = 0;
		var _g12 = 0;
		var _g3 = kha_Scheduler.DIF_COUNT;
		while(_g12 < _g3) {
			var i2 = _g12++;
			next += kha_Scheduler.deltas[i2];
		}
		next /= kha_Scheduler.DIF_COUNT;
		frameEnd += next;
	}
	kha_Scheduler.lastTime = frameEnd;
	if(!kha_Scheduler.stopped) kha_Scheduler.current = frameEnd;
	var _g4 = 0;
	var _g13 = kha_Scheduler.timeTasks;
	while(_g4 < _g13.length) {
		var t = _g13[_g4];
		++_g4;
		kha_Scheduler.activeTimeTask = t;
		if(kha_Scheduler.stopped || kha_Scheduler.activeTimeTask.paused) kha_Scheduler.activeTimeTask.next += delta; else if(kha_Scheduler.activeTimeTask.next <= frameEnd) {
			kha_Scheduler.activeTimeTask.next += t.period;
			HxOverrides.remove(kha_Scheduler.timeTasks,kha_Scheduler.activeTimeTask);
			if(kha_Scheduler.activeTimeTask.active && kha_Scheduler.activeTimeTask.task()) {
				if(kha_Scheduler.activeTimeTask.period > 0 && (kha_Scheduler.activeTimeTask.duration == 0 || kha_Scheduler.activeTimeTask.duration >= kha_Scheduler.activeTimeTask.start + kha_Scheduler.activeTimeTask.next)) kha_Scheduler.insertSorted(kha_Scheduler.timeTasks,kha_Scheduler.activeTimeTask);
			} else kha_Scheduler.activeTimeTask.active = false;
		}
	}
	kha_Scheduler.activeTimeTask = null;
	var _g5 = 0;
	var _g14 = kha_Scheduler.timeTasks;
	while(_g5 < _g14.length) {
		var timeTask = _g14[_g5];
		++_g5;
		if(!timeTask.active) kha_Scheduler.toDeleteTime.push(timeTask);
	}
	while(kha_Scheduler.toDeleteTime.length > 0) {
		var x = kha_Scheduler.toDeleteTime.pop();
		HxOverrides.remove(kha_Scheduler.timeTasks,x);
	}
	kha_Scheduler.sortFrameTasks();
	var _g6 = 0;
	var _g15 = kha_Scheduler.frameTasks;
	while(_g6 < _g15.length) {
		var frameTask = _g15[_g6];
		++_g6;
		if(!kha_Scheduler.stopped && !frameTask.paused) {
			if(!frameTask.task()) frameTask.active = false;
		}
	}
	var _g7 = 0;
	var _g16 = kha_Scheduler.frameTasks;
	while(_g7 < _g16.length) {
		var frameTask1 = _g16[_g7];
		++_g7;
		if(!frameTask1.active) kha_Scheduler.toDeleteFrame.push(frameTask1);
	}
	while(kha_Scheduler.toDeleteFrame.length > 0) {
		var x1 = kha_Scheduler.toDeleteFrame.pop();
		HxOverrides.remove(kha_Scheduler.frameTasks,x1);
	}
};
kha_Scheduler.time = function() {
	return kha_Scheduler.current;
};
kha_Scheduler.realTime = function() {
	return kha_System.get_time() - kha_Scheduler.startTime;
};
kha_Scheduler.resetTime = function() {
	var now = kha_System.get_time();
	kha_Scheduler.lastNow = 0;
	var dif = now - kha_Scheduler.startTime;
	kha_Scheduler.startTime = now;
	var _g = 0;
	var _g1 = kha_Scheduler.timeTasks;
	while(_g < _g1.length) {
		var timeTask = _g1[_g];
		++_g;
		timeTask.start -= dif;
		timeTask.next -= dif;
	}
	var _g11 = 0;
	var _g2 = kha_Scheduler.DIF_COUNT;
	while(_g11 < _g2) {
		var i = _g11++;
		kha_Scheduler.deltas[i] = 0;
	}
	kha_Scheduler.current = 0;
	kha_Scheduler.lastTime = 0;
};
kha_Scheduler.addBreakableFrameTask = function(task,priority) {
	kha_Scheduler.frameTasks.push(new kha_FrameTask(task,priority,++kha_Scheduler.currentFrameTaskId));
	kha_Scheduler.frame_tasks_sorted = false;
	return kha_Scheduler.currentFrameTaskId;
};
kha_Scheduler.addFrameTask = function(task,priority) {
	return kha_Scheduler.addBreakableFrameTask(function() {
		task();
		return true;
	},priority);
};
kha_Scheduler.pauseFrameTask = function(id,paused) {
	var _g = 0;
	var _g1 = kha_Scheduler.frameTasks;
	while(_g < _g1.length) {
		var frameTask = _g1[_g];
		++_g;
		if(frameTask.id == id) {
			frameTask.paused = paused;
			break;
		}
	}
};
kha_Scheduler.removeFrameTask = function(id) {
	var _g = 0;
	var _g1 = kha_Scheduler.frameTasks;
	while(_g < _g1.length) {
		var frameTask = _g1[_g];
		++_g;
		if(frameTask.id == id) {
			frameTask.active = false;
			HxOverrides.remove(kha_Scheduler.frameTasks,frameTask);
			break;
		}
	}
};
kha_Scheduler.generateGroupId = function() {
	return ++kha_Scheduler.currentGroupId;
};
kha_Scheduler.addBreakableTimeTaskToGroup = function(groupId,task,start,period,duration) {
	if(duration == null) duration = 0;
	if(period == null) period = 0;
	var t = new kha_TimeTask();
	t.active = true;
	t.task = task;
	t.id = ++kha_Scheduler.currentTimeTaskId;
	t.groupId = groupId;
	t.start = kha_Scheduler.current + start;
	t.period = 0;
	if(period != 0) t.period = period;
	t.duration = 0;
	if(duration != 0) t.duration = t.start + duration;
	t.next = t.start;
	kha_Scheduler.insertSorted(kha_Scheduler.timeTasks,t);
	return t.id;
};
kha_Scheduler.addTimeTaskToGroup = function(groupId,task,start,period,duration) {
	if(duration == null) duration = 0;
	if(period == null) period = 0;
	return kha_Scheduler.addBreakableTimeTaskToGroup(groupId,function() {
		task();
		return true;
	},start,period,duration);
};
kha_Scheduler.addBreakableTimeTask = function(task,start,period,duration) {
	if(duration == null) duration = 0;
	if(period == null) period = 0;
	return kha_Scheduler.addBreakableTimeTaskToGroup(0,task,start,period,duration);
};
kha_Scheduler.addTimeTask = function(task,start,period,duration) {
	if(duration == null) duration = 0;
	if(period == null) period = 0;
	return kha_Scheduler.addTimeTaskToGroup(0,task,start,period,duration);
};
kha_Scheduler.getTimeTask = function(id) {
	if(kha_Scheduler.activeTimeTask != null && kha_Scheduler.activeTimeTask.id == id) return kha_Scheduler.activeTimeTask;
	var _g = 0;
	var _g1 = kha_Scheduler.timeTasks;
	while(_g < _g1.length) {
		var timeTask = _g1[_g];
		++_g;
		if(timeTask.id == id) return timeTask;
	}
	return null;
};
kha_Scheduler.pauseTimeTask = function(id,paused) {
	var timeTask = kha_Scheduler.getTimeTask(id);
	if(timeTask != null) timeTask.paused = paused;
};
kha_Scheduler.pauseTimeTasks = function(groupId,paused) {
	var _g = 0;
	var _g1 = kha_Scheduler.timeTasks;
	while(_g < _g1.length) {
		var timeTask = _g1[_g];
		++_g;
		if(timeTask.groupId == groupId) timeTask.paused = paused;
	}
	if(kha_Scheduler.activeTimeTask != null && kha_Scheduler.activeTimeTask.groupId == groupId) kha_Scheduler.activeTimeTask.paused = true;
};
kha_Scheduler.removeTimeTask = function(id) {
	var timeTask = kha_Scheduler.getTimeTask(id);
	if(timeTask != null) {
		timeTask.active = false;
		HxOverrides.remove(kha_Scheduler.timeTasks,timeTask);
	}
};
kha_Scheduler.removeTimeTasks = function(groupId) {
	var _g = 0;
	var _g1 = kha_Scheduler.timeTasks;
	while(_g < _g1.length) {
		var timeTask = _g1[_g];
		++_g;
		if(timeTask.groupId == groupId) {
			timeTask.active = false;
			kha_Scheduler.toDeleteTime.push(timeTask);
		}
	}
	if(kha_Scheduler.activeTimeTask != null && kha_Scheduler.activeTimeTask.groupId == groupId) kha_Scheduler.activeTimeTask.paused = false;
	while(kha_Scheduler.toDeleteTime.length > 0) {
		var x = kha_Scheduler.toDeleteTime.pop();
		HxOverrides.remove(kha_Scheduler.timeTasks,x);
	}
};
kha_Scheduler.numTasksInSchedule = function() {
	return kha_Scheduler.timeTasks.length + kha_Scheduler.frameTasks.length;
};
kha_Scheduler.insertSorted = function(list,task) {
	var _g1 = 0;
	var _g = list.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(list[i].next > task.next) {
			list.splice(i,0,task);
			return;
		}
	}
	list.push(task);
};
kha_Scheduler.sortFrameTasks = function() {
	if(kha_Scheduler.frame_tasks_sorted) return;
	kha_Scheduler.frameTasks.sort(function(a,b) {
		if(a.priority > b.priority) return 1; else if(a.priority < b.priority) return -1; else return 0;
	});
	kha_Scheduler.frame_tasks_sorted = true;
};
var kha_ScreenRotation = $hxClasses["kha.ScreenRotation"] = { __ename__ : ["kha","ScreenRotation"], __constructs__ : ["RotationNone","Rotation90","Rotation180","Rotation270"] };
kha_ScreenRotation.RotationNone = ["RotationNone",0];
kha_ScreenRotation.RotationNone.toString = $estr;
kha_ScreenRotation.RotationNone.__enum__ = kha_ScreenRotation;
kha_ScreenRotation.Rotation90 = ["Rotation90",1];
kha_ScreenRotation.Rotation90.toString = $estr;
kha_ScreenRotation.Rotation90.__enum__ = kha_ScreenRotation;
kha_ScreenRotation.Rotation180 = ["Rotation180",2];
kha_ScreenRotation.Rotation180.toString = $estr;
kha_ScreenRotation.Rotation180.__enum__ = kha_ScreenRotation;
kha_ScreenRotation.Rotation270 = ["Rotation270",3];
kha_ScreenRotation.Rotation270.toString = $estr;
kha_ScreenRotation.Rotation270.__enum__ = kha_ScreenRotation;
var kha_Shaders = function() { };
$hxClasses["kha.Shaders"] = kha_Shaders;
kha_Shaders.__name__ = ["kha","Shaders"];
kha_Shaders.init = function() {
	var data = Reflect.field(kha_Shaders,"env_map_fragData");
	var bytes = haxe_Unserializer.run(data);
	kha_Shaders.env_map_frag = new kha_graphics4_FragmentShader(kha_internal_BytesBlob.fromBytes(bytes));
	var data1 = Reflect.field(kha_Shaders,"env_map_vertData");
	var bytes1 = haxe_Unserializer.run(data1);
	kha_Shaders.env_map_vert = new kha_graphics4_VertexShader(kha_internal_BytesBlob.fromBytes(bytes1));
	var data2 = Reflect.field(kha_Shaders,"forward_fragData");
	var bytes2 = haxe_Unserializer.run(data2);
	kha_Shaders.forward_frag = new kha_graphics4_FragmentShader(kha_internal_BytesBlob.fromBytes(bytes2));
	var data3 = Reflect.field(kha_Shaders,"forward_vertData");
	var bytes3 = haxe_Unserializer.run(data3);
	kha_Shaders.forward_vert = new kha_graphics4_VertexShader(kha_internal_BytesBlob.fromBytes(bytes3));
	var data4 = Reflect.field(kha_Shaders,"shadowmap_fragData");
	var bytes4 = haxe_Unserializer.run(data4);
	kha_Shaders.shadowmap_frag = new kha_graphics4_FragmentShader(kha_internal_BytesBlob.fromBytes(bytes4));
	var data5 = Reflect.field(kha_Shaders,"shadowmap_vertData");
	var bytes5 = haxe_Unserializer.run(data5);
	kha_Shaders.shadowmap_vert = new kha_graphics4_VertexShader(kha_internal_BytesBlob.fromBytes(bytes5));
	var data6 = Reflect.field(kha_Shaders,"painter_colored_fragData");
	var bytes6 = haxe_Unserializer.run(data6);
	kha_Shaders.painter_colored_frag = new kha_graphics4_FragmentShader(kha_internal_BytesBlob.fromBytes(bytes6));
	var data7 = Reflect.field(kha_Shaders,"painter_colored_vertData");
	var bytes7 = haxe_Unserializer.run(data7);
	kha_Shaders.painter_colored_vert = new kha_graphics4_VertexShader(kha_internal_BytesBlob.fromBytes(bytes7));
	var data8 = Reflect.field(kha_Shaders,"painter_image_fragData");
	var bytes8 = haxe_Unserializer.run(data8);
	kha_Shaders.painter_image_frag = new kha_graphics4_FragmentShader(kha_internal_BytesBlob.fromBytes(bytes8));
	var data9 = Reflect.field(kha_Shaders,"painter_image_vertData");
	var bytes9 = haxe_Unserializer.run(data9);
	kha_Shaders.painter_image_vert = new kha_graphics4_VertexShader(kha_internal_BytesBlob.fromBytes(bytes9));
	var data10 = Reflect.field(kha_Shaders,"painter_text_fragData");
	var bytes10 = haxe_Unserializer.run(data10);
	kha_Shaders.painter_text_frag = new kha_graphics4_FragmentShader(kha_internal_BytesBlob.fromBytes(bytes10));
	var data11 = Reflect.field(kha_Shaders,"painter_text_vertData");
	var bytes11 = haxe_Unserializer.run(data11);
	kha_Shaders.painter_text_vert = new kha_graphics4_VertexShader(kha_internal_BytesBlob.fromBytes(bytes11));
	var data12 = Reflect.field(kha_Shaders,"painter_video_fragData");
	var bytes12 = haxe_Unserializer.run(data12);
	kha_Shaders.painter_video_frag = new kha_graphics4_FragmentShader(kha_internal_BytesBlob.fromBytes(bytes12));
	var data13 = Reflect.field(kha_Shaders,"painter_video_vertData");
	var bytes13 = haxe_Unserializer.run(data13);
	kha_Shaders.painter_video_vert = new kha_graphics4_VertexShader(kha_internal_BytesBlob.fromBytes(bytes13));
};
var kha_Sound = function() {
};
$hxClasses["kha.Sound"] = kha_Sound;
kha_Sound.__name__ = ["kha","Sound"];
kha_Sound.__interfaces__ = [kha_Resource];
kha_Sound.prototype = {
	data: null
	,compressed: null
	,unload: function() {
	}
	,__class__: kha_Sound
};
var kha_StorageFile = function() { };
$hxClasses["kha.StorageFile"] = kha_StorageFile;
kha_StorageFile.__name__ = ["kha","StorageFile"];
kha_StorageFile.prototype = {
	read: function() {
		return null;
	}
	,write: function(data) {
	}
	,append: function(data) {
	}
	,canAppend: function() {
		return false;
	}
	,maxSize: function() {
		return -1;
	}
	,writeString: function(data) {
		var bytes = haxe_io_Bytes.ofString(data);
		this.write(kha_internal_BytesBlob.fromBytes(bytes));
	}
	,appendString: function(data) {
		var bytes = haxe_io_Bytes.ofString(data);
		this.append(kha_internal_BytesBlob.fromBytes(bytes));
	}
	,readString: function() {
		var blob = this.read();
		if(blob == null) return null; else return blob.toString();
	}
	,writeObject: function(object) {
		this.writeString(haxe_Serializer.run(object));
	}
	,readObject: function() {
		var s = this.readString();
		if(s == null) return null;
		try {
			return haxe_Unserializer.run(s);
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			return null;
		}
	}
	,__class__: kha_StorageFile
};
var kha_LocalStorageFile = function(name) {
	this.name = name;
};
$hxClasses["kha.LocalStorageFile"] = kha_LocalStorageFile;
kha_LocalStorageFile.__name__ = ["kha","LocalStorageFile"];
kha_LocalStorageFile.encode = function(source) {
	var reserved = [0,10,13,61];
	var output = "";
	var converted;
	var ele;
	var bytes = new Uint8Array(source);
	var _g1 = 0;
	var _g = bytes.length;
	while(_g1 < _g) {
		var i = _g1++;
		ele = bytes[i];
		converted = (ele + 42) % 256;
		if(!Lambda.has(reserved,converted)) output += String.fromCharCode(converted); else {
			converted = (converted + 64) % 256;
			output += "=" + String.fromCharCode(converted);
		}
	}
	return output;
};
kha_LocalStorageFile.decode = function(source) {
	var output = new haxe_io_BytesBuffer();
	var ck = false;
	var c;
	var _g1 = 0;
	var _g = source.length;
	while(_g1 < _g) {
		var i = _g1++;
		c = source.charCodeAt(i);
		if(c == 13 || c == 10) continue;
		if(c == 61 && !ck) {
			ck = true;
			continue;
		}
		if(ck) {
			ck = false;
			c = c - 64;
		}
		if(c < 42 && c > 0) output.b.push(c + 214); else output.b.push(c - 42);
	}
	return output.getBytes();
};
kha_LocalStorageFile.__super__ = kha_StorageFile;
kha_LocalStorageFile.prototype = $extend(kha_StorageFile.prototype,{
	name: null
	,read: function() {
		var storage = window.localStorage;
		if(storage == null) return null;
		var value = storage.getItem(this.name);
		if(value == null) return null; else return kha_internal_BytesBlob.fromBytes(kha_LocalStorageFile.decode(value));
	}
	,write: function(data) {
		var storage = window.localStorage;
		if(storage == null) return;
		storage.setItem(this.name,kha_LocalStorageFile.encode(data.bytes.b.bufferValue));
	}
	,__class__: kha_LocalStorageFile
});
var kha_Storage = function() { };
$hxClasses["kha.Storage"] = kha_Storage;
kha_Storage.__name__ = ["kha","Storage"];
kha_Storage.namedFile = function(name) {
	return new kha_LocalStorageFile(name);
};
kha_Storage.defaultFile = function() {
	return kha_Storage.namedFile("default.kha");
};
var kha_System = function() { };
$hxClasses["kha.System"] = kha_System;
kha_System.__name__ = ["kha","System"];
kha_System.__properties__ = {get_systemId:"get_systemId",get_refreshRate:"get_refreshRate",get_vsync:"get_vsync",get_screenRotation:"get_screenRotation",get_time:"get_time"}
kha_System.init = function(options,callback) {
	if(options.title == null) options.title = "Kha";
	if(options.width == null) options.width = 800;
	if(options.height == null) options.height = 600;
	if(options.samplesPerPixel == null) options.samplesPerPixel = 1;
	kha_SystemImpl.init(options,callback);
};
kha_System.initEx = function(title,options,windowCallback,callback) {
	kha_SystemImpl.initEx(title,options,windowCallback,callback);
};
kha_System.notifyOnRender = function(listener,id) {
	if(id == null) id = 0;
	while(id >= kha_System.renderListeners.length) kha_System.renderListeners.push([]);
	kha_System.renderListeners[id].push(listener);
};
kha_System.notifyOnApplicationState = function(foregroundListener,resumeListener,pauseListener,backgroundListener,shutdownListener) {
	kha_System.foregroundListeners.push(foregroundListener);
	kha_System.resumeListeners.push(resumeListener);
	kha_System.pauseListeners.push(pauseListener);
	kha_System.backgroundListeners.push(backgroundListener);
	kha_System.shutdownListeners.push(shutdownListener);
};
kha_System.render = function(id,framebuffer) {
	if(kha_System.renderListeners.length == 0) return;
	var _g = 0;
	var _g1 = kha_System.renderListeners[id];
	while(_g < _g1.length) {
		var listener = _g1[_g];
		++_g;
		listener(framebuffer);
	}
};
kha_System.foreground = function() {
	var _g = 0;
	var _g1 = kha_System.foregroundListeners;
	while(_g < _g1.length) {
		var listener = _g1[_g];
		++_g;
		listener();
	}
};
kha_System.resume = function() {
	var _g = 0;
	var _g1 = kha_System.resumeListeners;
	while(_g < _g1.length) {
		var listener = _g1[_g];
		++_g;
		listener();
	}
};
kha_System.pause = function() {
	var _g = 0;
	var _g1 = kha_System.pauseListeners;
	while(_g < _g1.length) {
		var listener = _g1[_g];
		++_g;
		listener();
	}
};
kha_System.background = function() {
	var _g = 0;
	var _g1 = kha_System.backgroundListeners;
	while(_g < _g1.length) {
		var listener = _g1[_g];
		++_g;
		listener();
	}
};
kha_System.shutdown = function() {
	var _g = 0;
	var _g1 = kha_System.shutdownListeners;
	while(_g < _g1.length) {
		var listener = _g1[_g];
		++_g;
		listener();
	}
};
kha_System.get_time = function() {
	return kha_SystemImpl.getTime();
};
kha_System.windowWidth = function(windowId) {
	if(windowId == null) windowId = 0;
	return kha_SystemImpl.windowWidth(windowId);
};
kha_System.windowHeight = function(windowId) {
	if(windowId == null) windowId = 0;
	return kha_SystemImpl.windowHeight(windowId);
};
kha_System.get_screenRotation = function() {
	return kha_SystemImpl.getScreenRotation();
};
kha_System.get_vsync = function() {
	return kha_SystemImpl.getVsync();
};
kha_System.get_refreshRate = function() {
	return kha_SystemImpl.getRefreshRate();
};
kha_System.get_systemId = function() {
	return kha_SystemImpl.getSystemId();
};
kha_System.requestShutdown = function() {
	kha_SystemImpl.requestShutdown();
};
kha_System.changeResolution = function(width,height) {
	kha_SystemImpl.changeResolution(width,height);
};
kha_System.loadUrl = function(url) {
};
var kha_GamepadStates = function() {
	this.axes = [];
	this.buttons = [];
};
$hxClasses["kha.GamepadStates"] = kha_GamepadStates;
kha_GamepadStates.__name__ = ["kha","GamepadStates"];
kha_GamepadStates.prototype = {
	axes: null
	,buttons: null
	,__class__: kha_GamepadStates
};
var kha_SystemImpl = function() { };
$hxClasses["kha.SystemImpl"] = kha_SystemImpl;
kha_SystemImpl.__name__ = ["kha","SystemImpl"];
kha_SystemImpl.initPerformanceTimer = function() {
	if(window.performance != null) kha_SystemImpl.performance = window.performance; else kha_SystemImpl.performance = window.Date;
};
kha_SystemImpl.init = function(options,callback) {
	kha_SystemImpl.options = options;
	kha_SystemImpl.init2();
	callback();
};
kha_SystemImpl.initEx = function(title,options,windowCallback,callback) {
	haxe_Log.trace("initEx is not supported on the html5 target, running init() with first window options",{ fileName : "SystemImpl.hx", lineNumber : 67, className : "kha.SystemImpl", methodName : "initEx"});
	kha_SystemImpl.init({ title : title, width : options[0].width, height : options[0].height},callback);
	if(windowCallback != null) windowCallback(0);
};
kha_SystemImpl.windowWidth = function(windowId) {
	if(windowId == null) windowId = 0;
	return kha_SystemImpl.khanvas.width;
};
kha_SystemImpl.windowHeight = function(windowId) {
	if(windowId == null) windowId = 0;
	return kha_SystemImpl.khanvas.height;
};
kha_SystemImpl.setCanvas = function(canvas) {
	kha_SystemImpl.khanvas = canvas;
};
kha_SystemImpl.getScreenRotation = function() {
	return kha_ScreenRotation.RotationNone;
};
kha_SystemImpl.getTime = function() {
	return kha_SystemImpl.performance.now() / 1000;
};
kha_SystemImpl.getVsync = function() {
	return true;
};
kha_SystemImpl.getRefreshRate = function() {
	return 60;
};
kha_SystemImpl.getSystemId = function() {
	return "HTML5";
};
kha_SystemImpl.requestShutdown = function() {
	window.close();
};
kha_SystemImpl.init2 = function(backbufferFormat) {
	haxe_Log.trace = js_Boot.__trace;
	kha_SystemImpl.keyboard = new kha_input_Keyboard();
	kha_SystemImpl.mouse = new kha_input_Mouse();
	kha_SystemImpl.surface = new kha_input_Surface();
	kha_SystemImpl.gamepads = [];
	kha_SystemImpl.gamepadStates = [];
	var _g1 = 0;
	var _g = kha_SystemImpl.maxGamepads;
	while(_g1 < _g) {
		var i = _g1++;
		kha_SystemImpl.gamepads[i] = new kha_input_Gamepad(i);
		kha_SystemImpl.gamepadStates[i] = new kha_GamepadStates();
	}
	kha_SystemImpl.pressedKeys = [];
	var _g2 = 0;
	while(_g2 < 256) {
		var i1 = _g2++;
		kha_SystemImpl.pressedKeys.push(false);
	}
	var _g3 = 0;
	while(_g3 < 256) {
		var i2 = _g3++;
		kha_SystemImpl.pressedKeys.push(null);
	}
	kha_SystemImpl.buttonspressed = [];
	var _g4 = 0;
	while(_g4 < 10) {
		var i3 = _g4++;
		kha_SystemImpl.buttonspressed.push(false);
	}
	kha_CanvasImage.init();
	kha_SystemImpl.initPerformanceTimer();
	kha_Scheduler.init();
	kha_SystemImpl.loadFinished();
	kha_EnvironmentVariables.instance = new kha_js_EnvironmentVariables();
};
kha_SystemImpl.getMouse = function(num) {
	if(num != 0) return null;
	return kha_SystemImpl.mouse;
};
kha_SystemImpl.getKeyboard = function(num) {
	if(num != 0) return null;
	return kha_SystemImpl.keyboard;
};
kha_SystemImpl.checkGamepadButton = function(pad,num) {
	if(kha_SystemImpl.buttonspressed[num]) {
		if(pad.buttons[num] < 0.5) kha_SystemImpl.buttonspressed[num] = false;
	} else if(pad.buttons[num] > 0.5) kha_SystemImpl.buttonspressed[num] = true;
};
kha_SystemImpl.checkGamepad = function(pad) {
	var _g1 = 0;
	var _g = pad.axes.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(pad.axes[i] != null) {
			if(kha_SystemImpl.gamepadStates[pad.index].axes[i] != pad.axes[i]) {
				var axis = pad.axes[i];
				if(i % 2 == 1) axis = -axis;
				kha_SystemImpl.gamepadStates[pad.index].axes[i] = axis;
				kha_SystemImpl.gamepads[pad.index].sendAxisEvent(i,axis);
			}
		}
	}
	var _g11 = 0;
	var _g2 = pad.buttons.length;
	while(_g11 < _g2) {
		var i1 = _g11++;
		if(pad.buttons[i1] != null) {
			if(kha_SystemImpl.gamepadStates[pad.index].buttons[i1] != pad.buttons[i1].value) {
				kha_SystemImpl.gamepadStates[pad.index].buttons[i1] = pad.buttons[i1].value;
				kha_SystemImpl.gamepads[pad.index].sendButtonEvent(i1,pad.buttons[i1].value);
			}
		}
	}
	if(pad.axes.length <= 4 && pad.buttons.length > 7) {
		kha_SystemImpl.gamepadStates[pad.index].axes[4] = pad.buttons[6].value;
		kha_SystemImpl.gamepads[pad.index].sendAxisEvent(4,pad.buttons[6].value);
		kha_SystemImpl.gamepadStates[pad.index].axes[5] = pad.buttons[7].value;
		kha_SystemImpl.gamepads[pad.index].sendAxisEvent(5,pad.buttons[7].value);
	}
};
kha_SystemImpl.loadFinished = function() {
	var canvas = window.document.getElementById("khanvas");
	var gl = false;
	try {
		kha_SystemImpl.gl = canvas.getContext("experimental-webgl",{ alpha : false, antialias : kha_SystemImpl.options.samplesPerPixel > 1, stencil : true});
		if(kha_SystemImpl.gl != null) {
			kha_SystemImpl.gl.pixelStorei(37441,1);
			kha_SystemImpl.gl.getExtension("OES_texture_float");
			kha_SystemImpl.gl.getExtension("OES_texture_float_linear");
			kha_SystemImpl.depthTexture = kha_SystemImpl.gl.getExtension("WEBGL_depth_texture");
			kha_SystemImpl.gl.getExtension("EXT_shader_texture_lod");
			kha_SystemImpl.gl.getExtension("OES_standard_derivatives");
			kha_SystemImpl.anisotropicFilter = kha_SystemImpl.gl.getExtension("EXT_texture_filter_anisotropic");
			if(kha_SystemImpl.anisotropicFilter == null) kha_SystemImpl.anisotropicFilter = kha_SystemImpl.gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
			kha_SystemImpl.drawBuffers = kha_SystemImpl.gl.getExtension("WEBGL_draw_buffers");
			gl = true;
			kha_Shaders.init();
		}
	} catch( e ) {
		if (e instanceof js__$Boot_HaxeError) e = e.val;
		haxe_Log.trace(e,{ fileName : "SystemImpl.hx", lineNumber : 242, className : "kha.SystemImpl", methodName : "loadFinished"});
	}
	kha_SystemImpl.setCanvas(canvas);
	if(gl) {
		var g4;
		if(gl) g4 = new kha_js_graphics4_Graphics(); else g4 = null;
		kha_SystemImpl.frame = new kha_Framebuffer(0,null,null,g4);
		kha_SystemImpl.frame.init(new kha_graphics2_Graphics1(kha_SystemImpl.frame),new kha_js_graphics4_Graphics2(kha_SystemImpl.frame),g4);
	} else {
		var g2 = new kha_js_CanvasGraphics(canvas.getContext("2d"),kha_System.windowWidth(),kha_System.windowHeight());
		kha_SystemImpl.frame = new kha_Framebuffer(0,null,g2,null);
		kha_SystemImpl.frame.init(new kha_graphics2_Graphics1(kha_SystemImpl.frame),g2,null);
	}
	if(kha_audio2_Audio._init()) {
		kha_SystemImpl._hasWebAudio = true;
		kha_audio2_Audio1._init();
	} else {
		kha_SystemImpl._hasWebAudio = false;
		kha_js_AudioElementAudio._compile();
		kha_audio2_Audio1 = kha_js_AudioElementAudio;
	}
	kha_Scheduler.start();
	var $window = window;
	var requestAnimationFrame = $window.requestAnimationFrame;
	if(requestAnimationFrame == null) requestAnimationFrame = $window.mozRequestAnimationFrame;
	if(requestAnimationFrame == null) requestAnimationFrame = $window.webkitRequestAnimationFrame;
	if(requestAnimationFrame == null) requestAnimationFrame = $window.msRequestAnimationFrame;
	var animate;
	var animate1 = null;
	animate1 = function(timestamp) {
		var window1 = window;
		if(requestAnimationFrame == null) window1.setTimeout(animate1,16.6666666666666679); else requestAnimationFrame(animate1);
		var sysGamepads = (navigator.getGamepads && navigator.getGamepads()) || (navigator.webkitGetGamepads && navigator.webkitGetGamepads());
		if(sysGamepads != null) {
			var _g1 = 0;
			var _g = sysGamepads.length;
			while(_g1 < _g) {
				var i = _g1++;
				var pad = sysGamepads[i];
				if(pad != null) {
					kha_SystemImpl.checkGamepadButton(pad,0);
					kha_SystemImpl.checkGamepadButton(pad,1);
					kha_SystemImpl.checkGamepadButton(pad,12);
					kha_SystemImpl.checkGamepadButton(pad,13);
					kha_SystemImpl.checkGamepadButton(pad,14);
					kha_SystemImpl.checkGamepadButton(pad,15);
					kha_SystemImpl.checkGamepad(pad);
				}
			}
		}
		kha_Scheduler.executeFrame();
		if(canvas.getContext) {
			var displayWidth = canvas.clientWidth;
			var displayHeight = canvas.clientHeight;
			if(canvas.width != displayWidth || canvas.height != displayHeight) {
				canvas.width = displayWidth;
				canvas.height = displayHeight;
			}
			kha_System.render(0,kha_SystemImpl.frame);
			if(kha_SystemImpl.gl != null) {
				kha_SystemImpl.gl.clearColor(1,1,1,1);
				kha_SystemImpl.gl.colorMask(false,false,false,true);
				kha_SystemImpl.gl.clear(16384);
				kha_SystemImpl.gl.colorMask(true,true,true,true);
			}
		}
	};
	animate = animate1;
	if(requestAnimationFrame == null) $window.setTimeout(animate,16.6666666666666679); else requestAnimationFrame(animate);
	if(canvas.getAttribute("tabindex") == null) canvas.setAttribute("tabindex","0");
	canvas.focus();
	canvas.oncontextmenu = function(event) {
		event.stopPropagation();
		event.preventDefault();
	};
	canvas.onmousedown = kha_SystemImpl.mouseDown;
	canvas.onmousemove = kha_SystemImpl.mouseMove;
	canvas.onkeydown = kha_SystemImpl.keyDown;
	canvas.onkeyup = kha_SystemImpl.keyUp;
	canvas.onblur = kha_SystemImpl.onBlur;
	canvas.onfocus = kha_SystemImpl.onFocus;
	if(canvas.onwheel) canvas.onwheel = kha_SystemImpl.mouseWheel; else if(canvas.onmousewheel) canvas.onmousewheel = kha_SystemImpl.mouseWheel;
	canvas.addEventListener("wheel mousewheel",kha_SystemImpl.mouseWheel,false);
	canvas.addEventListener("touchstart",kha_SystemImpl.touchDown,false);
	canvas.addEventListener("touchend",kha_SystemImpl.touchUp,false);
	canvas.addEventListener("touchmove",kha_SystemImpl.touchMove,false);
	window.addEventListener("unload",kha_SystemImpl.unload);
};
kha_SystemImpl.lockMouse = function() {
	if(($_=kha_SystemImpl.khanvas,$bind($_,$_.requestPointerLock))) kha_SystemImpl.khanvas.requestPointerLock(); else if(canvas.mozRequestPointerLock) kha_SystemImpl.khanvas.mozRequestPointerLock(); else if(canvas.webkitRequestPointerLock) kha_SystemImpl.khanvas.webkitRequestPointerLock();
};
kha_SystemImpl.unlockMouse = function() {
	if(document.exitPointerLock) document.exitPointerLock(); else if(document.mozExitPointerLock) document.mozExitPointerLock(); else if(document.webkitExitPointerLock) document.webkitExitPointerLock();
};
kha_SystemImpl.canLockMouse = function() {
	return 'pointerLockElement' in document ||
        'mozPointerLockElement' in document ||
        'webkitPointerLockElement' in document;
};
kha_SystemImpl.isMouseLocked = function() {
	return document.pointerLockElement === kha_Sys.khanvas ||
  			document.mozPointerLockElement === kha_Sys.khanvas ||
  			document.webkitPointerLockElement === kha_Sys.khanvas;
};
kha_SystemImpl.notifyOfMouseLockChange = function(func,error) {
	window.document.addEventListener("pointerlockchange",func,false);
	window.document.addEventListener("mozpointerlockchange",func,false);
	window.document.addEventListener("webkitpointerlockchange",func,false);
	window.document.addEventListener("pointerlockerror",error,false);
	window.document.addEventListener("mozpointerlockerror",error,false);
	window.document.addEventListener("webkitpointerlockerror",error,false);
};
kha_SystemImpl.removeFromMouseLockChange = function(func,error) {
	window.document.removeEventListener("pointerlockchange",func,false);
	window.document.removeEventListener("mozpointerlockchange",func,false);
	window.document.removeEventListener("webkitpointerlockchange",func,false);
	window.document.removeEventListener("pointerlockerror",error,false);
	window.document.removeEventListener("mozpointerlockerror",error,false);
	window.document.removeEventListener("webkitpointerlockerror",error,false);
};
kha_SystemImpl.unload = function(_) {
};
kha_SystemImpl.setMouseXY = function(event) {
	var rect = kha_SystemImpl.khanvas.getBoundingClientRect();
	var borderWidth = kha_SystemImpl.khanvas.clientLeft;
	var borderHeight = kha_SystemImpl.khanvas.clientTop;
	kha_SystemImpl.mouseX = (event.clientX - rect.left - borderWidth) * kha_SystemImpl.khanvas.width / (rect.width - 2 * borderWidth) | 0;
	kha_SystemImpl.mouseY = (event.clientY - rect.top - borderHeight) * kha_SystemImpl.khanvas.height / (rect.height - 2 * borderHeight) | 0;
};
kha_SystemImpl.mouseWheel = function(event) {
	kha_SystemImpl.mouse.sendWheelEvent(0,event.deltaY | 0);
};
kha_SystemImpl.mouseDown = function(event) {
	window.document.addEventListener("mouseup",kha_SystemImpl.mouseUp);
	kha_SystemImpl.setMouseXY(event);
	if(event.which == 1) {
		if(event.ctrlKey) {
			kha_SystemImpl.leftMouseCtrlDown = true;
			kha_SystemImpl.mouse.sendDownEvent(0,1,kha_SystemImpl.mouseX,kha_SystemImpl.mouseY);
		} else {
			kha_SystemImpl.leftMouseCtrlDown = false;
			kha_SystemImpl.mouse.sendDownEvent(0,0,kha_SystemImpl.mouseX,kha_SystemImpl.mouseY);
		}
	} else if(event.which == 2) kha_SystemImpl.mouse.sendDownEvent(0,2,kha_SystemImpl.mouseX,kha_SystemImpl.mouseY); else if(event.which == 3) kha_SystemImpl.mouse.sendDownEvent(0,1,kha_SystemImpl.mouseX,kha_SystemImpl.mouseY);
};
kha_SystemImpl.mouseUp = function(event) {
	window.document.removeEventListener("mouseup",kha_SystemImpl.mouseUp);
	kha_SystemImpl.setMouseXY(event);
	if(event.which == 1) {
		if(kha_SystemImpl.leftMouseCtrlDown) kha_SystemImpl.mouse.sendUpEvent(0,1,kha_SystemImpl.mouseX,kha_SystemImpl.mouseY); else kha_SystemImpl.mouse.sendUpEvent(0,0,kha_SystemImpl.mouseX,kha_SystemImpl.mouseY);
		kha_SystemImpl.leftMouseCtrlDown = false;
	} else if(event.which == 2) kha_SystemImpl.mouse.sendUpEvent(0,2,kha_SystemImpl.mouseX,kha_SystemImpl.mouseY); else if(event.which == 3) kha_SystemImpl.mouse.sendUpEvent(0,1,kha_SystemImpl.mouseX,kha_SystemImpl.mouseY);
};
kha_SystemImpl.mouseMove = function(event) {
	var lastMouseX = kha_SystemImpl.mouseX;
	var lastMouseY = kha_SystemImpl.mouseY;
	kha_SystemImpl.setMouseXY(event);
	var movementX = event.movementX || event.mozMovementX || event.webkitMovementX || kha_SystemImpl.mouseX - lastMouseX;
	var movementY = event.movementY || event.mozMovementY || event.webkitMovementY || kha_SystemImpl.mouseY - lastMouseY;
	kha_SystemImpl.mouse.sendMoveEvent(0,kha_SystemImpl.mouseX,kha_SystemImpl.mouseY,movementX,movementY);
};
kha_SystemImpl.setTouchXY = function(touch) {
	var rect = kha_SystemImpl.khanvas.getBoundingClientRect();
	var borderWidth = kha_SystemImpl.khanvas.clientLeft;
	var borderHeight = kha_SystemImpl.khanvas.clientTop;
	kha_SystemImpl.touchX = (touch.clientX - rect.left - borderWidth) * kha_SystemImpl.khanvas.width / (rect.width - 2 * borderWidth) | 0;
	kha_SystemImpl.touchY = (touch.clientY - rect.top - borderHeight) * kha_SystemImpl.khanvas.height / (rect.height - 2 * borderHeight) | 0;
};
kha_SystemImpl.touchDown = function(event) {
	var _g = 0;
	var _g1 = event.changedTouches;
	while(_g < _g1.length) {
		var touch = _g1[_g];
		++_g;
		kha_SystemImpl.setTouchXY(touch);
		kha_SystemImpl.mouse.sendDownEvent(0,0,kha_SystemImpl.touchX,kha_SystemImpl.touchY);
		kha_SystemImpl.surface.sendTouchStartEvent(touch.identifier,kha_SystemImpl.touchX,kha_SystemImpl.touchY);
	}
};
kha_SystemImpl.touchUp = function(event) {
	var _g = 0;
	var _g1 = event.changedTouches;
	while(_g < _g1.length) {
		var touch = _g1[_g];
		++_g;
		kha_SystemImpl.setTouchXY(touch);
		kha_SystemImpl.mouse.sendUpEvent(0,0,kha_SystemImpl.touchX,kha_SystemImpl.touchY);
		kha_SystemImpl.surface.sendTouchEndEvent(touch.identifier,kha_SystemImpl.touchX,kha_SystemImpl.touchY);
	}
};
kha_SystemImpl.touchMove = function(event) {
	var index = 0;
	var _g = 0;
	var _g1 = event.changedTouches;
	while(_g < _g1.length) {
		var touch = _g1[_g];
		++_g;
		kha_SystemImpl.setTouchXY(touch);
		if(index == 0) {
			var movementX = kha_SystemImpl.touchX - kha_SystemImpl.lastFirstTouchX;
			var movementY = kha_SystemImpl.touchY - kha_SystemImpl.lastFirstTouchY;
			kha_SystemImpl.lastFirstTouchX = kha_SystemImpl.touchX;
			kha_SystemImpl.lastFirstTouchY = kha_SystemImpl.touchY;
			kha_SystemImpl.mouse.sendMoveEvent(0,kha_SystemImpl.touchX,kha_SystemImpl.touchY,movementX,movementY);
		}
		kha_SystemImpl.surface.sendMoveEvent(touch.identifier,kha_SystemImpl.touchX,kha_SystemImpl.touchY);
		index++;
	}
};
kha_SystemImpl.onBlur = function() {
	kha_System.background();
};
kha_SystemImpl.onFocus = function() {
	kha_System.foreground();
};
kha_SystemImpl.keycodeToChar = function(key,keycode,shift) {
	if(key != null) {
		if(key.length == 1) return key;
		switch(key) {
		case "Add":
			return "+";
		case "Subtract":
			return "-";
		case "Multiply":
			return "*";
		case "Divide":
			return "/";
		}
	}
	switch(keycode) {
	case 187:
		if(shift) return "*"; else return "+";
		break;
	case 188:
		if(shift) return ";"; else return ",";
		break;
	case 189:
		if(shift) return "_"; else return "-";
		break;
	case 190:
		if(shift) return ":"; else return ".";
		break;
	case 191:
		if(shift) return "'"; else return "#";
		break;
	case 226:
		if(shift) return ">"; else return "<";
		break;
	case 106:
		return "*";
	case 107:
		return "+";
	case 109:
		return "-";
	case 111:
		return "/";
	case 49:
		if(shift) return "!"; else return "1";
		break;
	case 50:
		if(shift) return "\""; else return "2";
		break;
	case 51:
		if(shift) return "§"; else return "3";
		break;
	case 52:
		if(shift) return "$"; else return "4";
		break;
	case 53:
		if(shift) return "%"; else return "5";
		break;
	case 54:
		if(shift) return "&"; else return "6";
		break;
	case 55:
		if(shift) return "/"; else return "7";
		break;
	case 56:
		if(shift) return "("; else return "8";
		break;
	case 57:
		if(shift) return ")"; else return "9";
		break;
	case 48:
		if(shift) return "="; else return "0";
		break;
	case 219:
		if(shift) return "?"; else return "ß";
		break;
	case 212:
		if(shift) return "`"; else return "´";
		break;
	}
	if(keycode >= 96 && keycode <= 105) return String.fromCharCode(-48 + keycode);
	if(keycode >= 65 && keycode <= 90) {
		if(shift) return String.fromCharCode(keycode); else return String.fromCharCode(keycode - 65 + 97);
	}
	return String.fromCharCode(keycode);
};
kha_SystemImpl.keyDown = function(event) {
	event.stopPropagation();
	if(kha_SystemImpl.pressedKeys[event.keyCode]) {
		event.preventDefault();
		return;
	}
	kha_SystemImpl.pressedKeys[event.keyCode] = true;
	var _g = event.keyCode;
	switch(_g) {
	case 8:
		kha_SystemImpl.keyboard.sendDownEvent(kha_Key.BACKSPACE,"");
		event.preventDefault();
		break;
	case 9:
		kha_SystemImpl.keyboard.sendDownEvent(kha_Key.TAB,"");
		event.preventDefault();
		break;
	case 13:
		kha_SystemImpl.keyboard.sendDownEvent(kha_Key.ENTER,"");
		event.preventDefault();
		break;
	case 16:
		kha_SystemImpl.keyboard.sendDownEvent(kha_Key.SHIFT,"");
		event.preventDefault();
		break;
	case 17:
		kha_SystemImpl.keyboard.sendDownEvent(kha_Key.CTRL,"");
		event.preventDefault();
		break;
	case 18:
		kha_SystemImpl.keyboard.sendDownEvent(kha_Key.ALT,"");
		event.preventDefault();
		break;
	case 27:
		kha_SystemImpl.keyboard.sendDownEvent(kha_Key.ESC,"");
		event.preventDefault();
		break;
	case 32:
		kha_SystemImpl.keyboard.sendDownEvent(kha_Key.CHAR," ");
		event.preventDefault();
		break;
	case 46:
		kha_SystemImpl.keyboard.sendDownEvent(kha_Key.DEL,"");
		event.preventDefault();
		break;
	case 38:
		kha_SystemImpl.keyboard.sendDownEvent(kha_Key.UP,"");
		event.preventDefault();
		break;
	case 40:
		kha_SystemImpl.keyboard.sendDownEvent(kha_Key.DOWN,"");
		event.preventDefault();
		break;
	case 37:
		kha_SystemImpl.keyboard.sendDownEvent(kha_Key.LEFT,"");
		event.preventDefault();
		break;
	case 39:
		kha_SystemImpl.keyboard.sendDownEvent(kha_Key.RIGHT,"");
		event.preventDefault();
		break;
	default:
		if(!event.altKey) {
			var $char = kha_SystemImpl.keycodeToChar(event.key,event.keyCode,event.shiftKey);
			kha_SystemImpl.keyboard.sendDownEvent(kha_Key.CHAR,$char);
		}
	}
};
kha_SystemImpl.keyUp = function(event) {
	event.preventDefault();
	event.stopPropagation();
	kha_SystemImpl.pressedKeys[event.keyCode] = false;
	var _g = event.keyCode;
	switch(_g) {
	case 8:
		kha_SystemImpl.keyboard.sendUpEvent(kha_Key.BACKSPACE,"");
		break;
	case 9:
		kha_SystemImpl.keyboard.sendUpEvent(kha_Key.TAB,"");
		break;
	case 13:
		kha_SystemImpl.keyboard.sendUpEvent(kha_Key.ENTER,"");
		break;
	case 16:
		kha_SystemImpl.keyboard.sendUpEvent(kha_Key.SHIFT,"");
		break;
	case 17:
		kha_SystemImpl.keyboard.sendUpEvent(kha_Key.CTRL,"");
		break;
	case 18:
		kha_SystemImpl.keyboard.sendUpEvent(kha_Key.ALT,"");
		break;
	case 27:
		kha_SystemImpl.keyboard.sendUpEvent(kha_Key.ESC,"");
		break;
	case 32:
		kha_SystemImpl.keyboard.sendUpEvent(kha_Key.CHAR," ");
		break;
	case 46:
		kha_SystemImpl.keyboard.sendUpEvent(kha_Key.DEL,"");
		break;
	case 38:
		kha_SystemImpl.keyboard.sendUpEvent(kha_Key.UP,"");
		break;
	case 40:
		kha_SystemImpl.keyboard.sendUpEvent(kha_Key.DOWN,"");
		break;
	case 37:
		kha_SystemImpl.keyboard.sendUpEvent(kha_Key.LEFT,"");
		break;
	case 39:
		kha_SystemImpl.keyboard.sendUpEvent(kha_Key.RIGHT,"");
		break;
	default:
		if(!event.altKey) {
			var $char = kha_SystemImpl.keycodeToChar(event.key,event.keyCode,event.shiftKey);
			kha_SystemImpl.keyboard.sendUpEvent(kha_Key.CHAR,$char);
		}
	}
};
kha_SystemImpl.canSwitchFullscreen = function() {
	return 'fullscreenElement ' in document ||
        'mozFullScreenElement' in document ||
        'webkitFullscreenElement' in document ||
        'msFullscreenElement' in document
        ;
};
kha_SystemImpl.isFullscreen = function() {
	return document.fullscreenElement === this.khanvas ||
  			document.mozFullScreenElement === this.khanvas ||
  			document.webkitFullscreenElement === this.khanvas ||
  			document.msFullscreenElement === this.khanvas ;
};
kha_SystemImpl.requestFullscreen = function() {
	if(($_=kha_SystemImpl.khanvas,$bind($_,$_.requestFullscreen))) kha_SystemImpl.khanvas.requestFullscreen(); else if(kha_SystemImpl.khanvas.msRequestFullscreen) kha_SystemImpl.khanvas.msRequestFullscreen(); else if(kha_SystemImpl.khanvas.mozRequestFullScreen) kha_SystemImpl.khanvas.mozRequestFullScreen(); else if(kha_SystemImpl.khanvas.webkitRequestFullscreen) kha_SystemImpl.khanvas.webkitRequestFullscreen();
};
kha_SystemImpl.exitFullscreen = function() {
	if(document.exitFullscreen) document.exitFullscreen(); else if(document.msExitFullscreen) document.msExitFullscreen(); else if(document.mozCancelFullScreen) document.mozCancelFullScreen(); else if(document.webkitExitFullscreen) document.webkitExitFullscreen();
};
kha_SystemImpl.changeResolution = function(width,height) {
};
kha_SystemImpl.prototype = {
	notifyOfFullscreenChange: function(func,error) {
		window.document.addEventListener("fullscreenchange",func,false);
		window.document.addEventListener("mozfullscreenchange",func,false);
		window.document.addEventListener("webkitfullscreenchange",func,false);
		window.document.addEventListener("MSFullscreenChange",func,false);
		window.document.addEventListener("fullscreenerror",error,false);
		window.document.addEventListener("mozfullscreenerror",error,false);
		window.document.addEventListener("webkitfullscreenerror",error,false);
		window.document.addEventListener("MSFullscreenError",error,false);
	}
	,removeFromFullscreenChange: function(func,error) {
		window.document.removeEventListener("fullscreenchange",func,false);
		window.document.removeEventListener("mozfullscreenchange",func,false);
		window.document.removeEventListener("webkitfullscreenchange",func,false);
		window.document.removeEventListener("MSFullscreenChange",func,false);
		window.document.removeEventListener("fullscreenerror",error,false);
		window.document.removeEventListener("mozfullscreenerror",error,false);
		window.document.removeEventListener("webkitfullscreenerror",error,false);
		window.document.removeEventListener("MSFullscreenError",error,false);
	}
	,__class__: kha_SystemImpl
};
var kha_Video = function() {
};
$hxClasses["kha.Video"] = kha_Video;
kha_Video.__name__ = ["kha","Video"];
kha_Video.__interfaces__ = [kha_Resource];
kha_Video.prototype = {
	width: function() {
		return 100;
	}
	,height: function() {
		return 100;
	}
	,play: function(loop) {
		if(loop == null) loop = false;
	}
	,pause: function() {
	}
	,stop: function() {
	}
	,getLength: function() {
		return 0;
	}
	,getCurrentPos: function() {
		return 0;
	}
	,getVolume: function() {
		return 1;
	}
	,setVolume: function(volume) {
	}
	,isFinished: function() {
		return this.getCurrentPos() >= this.getLength();
	}
	,unload: function() {
	}
	,__class__: kha_Video
};
var kha_WebGLImage = function(width,height,format,renderTarget,depthStencilFormat) {
	this.myWidth = width;
	this.myHeight = height;
	this.format = format;
	this.renderTarget = renderTarget;
	this.image = null;
	this.video = null;
	this.depthStencilFormat = depthStencilFormat;
	if(renderTarget) this.createTexture();
};
$hxClasses["kha.WebGLImage"] = kha_WebGLImage;
kha_WebGLImage.__name__ = ["kha","WebGLImage"];
kha_WebGLImage.init = function() {
	var canvas = window.document.createElement("canvas");
	if(canvas != null) {
		kha_WebGLImage.context = canvas.getContext("2d");
		canvas.width = 2048;
		canvas.height = 2048;
		kha_WebGLImage.context.globalCompositeOperation = "copy";
	}
};
kha_WebGLImage.upperPowerOfTwo = function(v) {
	v--;
	v |= v >>> 1;
	v |= v >>> 2;
	v |= v >>> 4;
	v |= v >>> 8;
	v |= v >>> 16;
	v++;
	return v;
};
kha_WebGLImage.__super__ = kha_Image;
kha_WebGLImage.prototype = $extend(kha_Image.prototype,{
	image: null
	,video: null
	,data: null
	,myWidth: null
	,myHeight: null
	,format: null
	,renderTarget: null
	,frameBuffer: null
	,renderBuffer: null
	,texture: null
	,graphics1: null
	,graphics2: null
	,graphics4: null
	,depthStencilFormat: null
	,bytes: null
	,get_g1: function() {
		if(this.graphics1 == null) this.graphics1 = new kha_graphics2_Graphics1(this);
		return this.graphics1;
	}
	,get_g2: function() {
		if(this.graphics2 == null) this.graphics2 = new kha_js_graphics4_Graphics2(this);
		return this.graphics2;
	}
	,get_g4: function() {
		if(this.graphics4 == null) this.graphics4 = new kha_js_graphics4_Graphics(this);
		return this.graphics4;
	}
	,get_width: function() {
		return this.myWidth;
	}
	,get_height: function() {
		return this.myHeight;
	}
	,get_realWidth: function() {
		return this.myWidth;
	}
	,get_realHeight: function() {
		return this.myHeight;
	}
	,isOpaque: function(x,y) {
		if(this.data == null) {
			if(kha_WebGLImage.context == null) return true; else this.createImageData();
		}
		return this.data.data[y * Std["int"](this.image.width) * 4 + x * 4 + 3] != 0;
	}
	,at: function(x,y) {
		if(this.data == null) {
			if(kha_WebGLImage.context == null) return kha__$Color_Color_$Impl_$.Black; else this.createImageData();
		}
		var value = this.data.data[y * Std["int"](this.image.width) * 4 + x * 4];
		return kha__$Color_Color_$Impl_$._new(value);
	}
	,createImageData: function() {
		kha_WebGLImage.context.strokeStyle = "rgba(0,0,0,0)";
		kha_WebGLImage.context.fillStyle = "rgba(0,0,0,0)";
		kha_WebGLImage.context.fillRect(0,0,this.image.width,this.image.height);
		kha_WebGLImage.context.drawImage(this.image,0,0,this.image.width,this.image.height,0,0,this.image.width,this.image.height);
		this.data = kha_WebGLImage.context.getImageData(0,0,this.image.width,this.image.height);
	}
	,createTexture: function() {
		if(kha_SystemImpl.gl == null) return;
		this.texture = kha_SystemImpl.gl.createTexture();
		kha_SystemImpl.gl.bindTexture(3553,this.texture);
		kha_SystemImpl.gl.texParameteri(3553,10240,9729);
		kha_SystemImpl.gl.texParameteri(3553,10241,9729);
		kha_SystemImpl.gl.texParameteri(3553,10242,33071);
		kha_SystemImpl.gl.texParameteri(3553,10243,33071);
		if(this.renderTarget) {
			this.frameBuffer = kha_SystemImpl.gl.createFramebuffer();
			kha_SystemImpl.gl.bindFramebuffer(36160,this.frameBuffer);
			var _g = this.format;
			switch(_g[1]) {
			case 3:
				kha_SystemImpl.gl.texImage2D(3553,0,6402,this.get_realWidth(),this.get_realHeight(),0,6402,5123,null);
				break;
			case 2:
				kha_SystemImpl.gl.texImage2D(3553,0,6408,this.get_realWidth(),this.get_realHeight(),0,6408,5126,null);
				break;
			case 0:
				break;
			default:
				kha_SystemImpl.gl.texImage2D(3553,0,6408,this.get_realWidth(),this.get_realHeight(),0,6408,5121,null);
			}
			if(this.format == kha_graphics4_TextureFormat.DEPTH16) {
				var colortex = kha_SystemImpl.gl.createTexture();
				kha_SystemImpl.gl.framebufferTexture2D(36160,36096,3553,this.texture,0);
			} else kha_SystemImpl.gl.framebufferTexture2D(36160,36064,3553,this.texture,0);
			var _g1 = this.depthStencilFormat;
			switch(_g1) {
			case 0:
				break;
			case 1:
				this.renderBuffer = kha_SystemImpl.gl.createRenderbuffer();
				kha_SystemImpl.gl.bindRenderbuffer(36161,this.renderBuffer);
				kha_SystemImpl.gl.renderbufferStorage(36161,33189,this.get_realWidth(),this.get_realHeight());
				kha_SystemImpl.gl.framebufferRenderbuffer(36160,36096,36161,this.renderBuffer);
				break;
			case 2:
				break;
			case 3:
				break;
			case 4:
				this.createDepthStencilBuffer();
				break;
			}
			kha_SystemImpl.gl.bindRenderbuffer(36161,null);
			kha_SystemImpl.gl.bindFramebuffer(36160,null);
		} else if(this.video != null) kha_SystemImpl.gl.texImage2D(3553,0,6408,6408,5121,this.video); else kha_SystemImpl.gl.texImage2D(3553,0,6408,6408,this.format == kha_graphics4_TextureFormat.RGBA128?5126:5121,this.image);
		kha_SystemImpl.gl.bindTexture(3553,null);
	}
	,createDepthStencilBuffer: function() {
		this.renderBuffer = kha_SystemImpl.gl.createRenderbuffer();
		kha_SystemImpl.gl.bindRenderbuffer(36161,this.renderBuffer);
		kha_SystemImpl.gl.renderbufferStorage(36161,34041,this.get_realWidth(),this.get_realHeight());
		kha_SystemImpl.gl.framebufferRenderbuffer(36160,33306,36161,this.renderBuffer);
	}
	,set: function(stage) {
		kha_SystemImpl.gl.activeTexture(33984 + stage);
		kha_SystemImpl.gl.bindTexture(3553,this.texture);
		if(this.video != null) kha_SystemImpl.gl.texImage2D(3553,0,6408,6408,5121,this.video);
	}
	,lock: function(level) {
		if(level == null) level = 0;
		this.bytes = haxe_io_Bytes.alloc(this.format == kha_graphics4_TextureFormat.RGBA32?4 * this.get_width() * this.get_height():this.format == kha_graphics4_TextureFormat.RGBA128?16 * this.get_width() * this.get_height():this.get_width() * this.get_height());
		return this.bytes;
	}
	,unlock: function() {
		if(kha_SystemImpl.gl != null) {
			this.texture = kha_SystemImpl.gl.createTexture();
			kha_SystemImpl.gl.bindTexture(3553,this.texture);
			kha_SystemImpl.gl.texParameteri(3553,10240,9729);
			kha_SystemImpl.gl.texParameteri(3553,10241,9729);
			kha_SystemImpl.gl.texParameteri(3553,10242,33071);
			kha_SystemImpl.gl.texParameteri(3553,10243,33071);
			var _g = this.format;
			switch(_g[1]) {
			case 1:
				kha_SystemImpl.gl.texImage2D(3553,0,6409,this.get_width(),this.get_height(),0,6409,5121,new Uint8Array(this.bytes.b.bufferValue));
				if(kha_SystemImpl.gl.getError() == 1282) {
					var rgbaBytes = haxe_io_Bytes.alloc(this.get_width() * this.get_height() * 4);
					var _g2 = 0;
					var _g1 = this.get_height();
					while(_g2 < _g1) {
						var y = _g2++;
						var _g4 = 0;
						var _g3 = this.get_width();
						while(_g4 < _g3) {
							var x = _g4++;
							var value = this.bytes.get(y * this.get_width() + x);
							rgbaBytes.set(y * this.get_width() * 4 + x * 4,value);
							rgbaBytes.set(y * this.get_width() * 4 + x * 4 + 1,value);
							rgbaBytes.set(y * this.get_width() * 4 + x * 4 + 2,value);
							rgbaBytes.set(y * this.get_width() * 4 + x * 4 + 3,255);
						}
					}
					kha_SystemImpl.gl.texImage2D(3553,0,6408,this.get_width(),this.get_height(),0,6408,5121,new Uint8Array(rgbaBytes.b.bufferValue));
				}
				break;
			case 2:
				kha_SystemImpl.gl.texImage2D(3553,0,6408,this.get_width(),this.get_height(),0,6408,5126,new Uint8Array(this.bytes.b.bufferValue));
				break;
			case 0:
				break;
			default:
				kha_SystemImpl.gl.texImage2D(3553,0,6408,this.get_width(),this.get_height(),0,6408,5121,new Uint8Array(this.bytes.b.bufferValue));
			}
			kha_SystemImpl.gl.bindTexture(3553,null);
			this.bytes = null;
		}
	}
	,unload: function() {
	}
	,generateMipmaps: function(levels) {
		kha_SystemImpl.gl.bindTexture(3553,this.texture);
		kha_SystemImpl.gl.generateMipmap(3553);
	}
	,setMipmaps: function(mipmaps) {
		kha_SystemImpl.gl.bindTexture(3553,this.texture);
		var _g1 = 0;
		var _g = mipmaps.length;
		while(_g1 < _g) {
			var i = _g1++;
			kha_SystemImpl.gl.texImage2D(3553,i + 1,6408,6408,this.format == kha_graphics4_TextureFormat.RGBA128?5126:5121,(js_Boot.__cast(mipmaps[i] , kha_WebGLImage)).image);
		}
	}
	,__class__: kha_WebGLImage
});
var kha_Mode = $hxClasses["kha.Mode"] = { __ename__ : ["kha","Mode"], __constructs__ : ["Window","BorderlessWindow","Fullscreen"] };
kha_Mode.Window = ["Window",0];
kha_Mode.Window.toString = $estr;
kha_Mode.Window.__enum__ = kha_Mode;
kha_Mode.BorderlessWindow = ["BorderlessWindow",1];
kha_Mode.BorderlessWindow.toString = $estr;
kha_Mode.BorderlessWindow.__enum__ = kha_Mode;
kha_Mode.Fullscreen = ["Fullscreen",2];
kha_Mode.Fullscreen.toString = $estr;
kha_Mode.Fullscreen.__enum__ = kha_Mode;
var kha_Position = $hxClasses["kha.Position"] = { __ename__ : ["kha","Position"], __constructs__ : ["Center","Fixed"] };
kha_Position.Center = ["Center",0];
kha_Position.Center.toString = $estr;
kha_Position.Center.__enum__ = kha_Position;
kha_Position.Fixed = function(v) { var $x = ["Fixed",1,v]; $x.__enum__ = kha_Position; $x.toString = $estr; return $x; };
var kha_TargetDisplay = $hxClasses["kha.TargetDisplay"] = { __ename__ : ["kha","TargetDisplay"], __constructs__ : ["Primary","ById"] };
kha_TargetDisplay.Primary = ["Primary",0];
kha_TargetDisplay.Primary.toString = $estr;
kha_TargetDisplay.Primary.__enum__ = kha_TargetDisplay;
kha_TargetDisplay.ById = function(id) { var $x = ["ById",1,id]; $x.__enum__ = kha_TargetDisplay; $x.toString = $estr; return $x; };
var kha_arrays__$Float32Array_Float32Array_$Impl_$ = {};
$hxClasses["kha.arrays._Float32Array.Float32Array_Impl_"] = kha_arrays__$Float32Array_Float32Array_$Impl_$;
kha_arrays__$Float32Array_Float32Array_$Impl_$.__name__ = ["kha","arrays","_Float32Array","Float32Array_Impl_"];
kha_arrays__$Float32Array_Float32Array_$Impl_$.__properties__ = {get_length:"get_length"}
kha_arrays__$Float32Array_Float32Array_$Impl_$._new = function(elements) {
	return new Float32Array(elements);
};
kha_arrays__$Float32Array_Float32Array_$Impl_$.get_length = function(this1) {
	return this1.length;
};
kha_arrays__$Float32Array_Float32Array_$Impl_$.set = function(this1,index,value) {
	return this1[index] = value;
};
kha_arrays__$Float32Array_Float32Array_$Impl_$.get = function(this1,index) {
	return this1[index];
};
kha_arrays__$Float32Array_Float32Array_$Impl_$.data = function(this1) {
	return this1;
};
var kha_audio1_AudioChannel = function() { };
$hxClasses["kha.audio1.AudioChannel"] = kha_audio1_AudioChannel;
kha_audio1_AudioChannel.__name__ = ["kha","audio1","AudioChannel"];
kha_audio1_AudioChannel.prototype = {
	play: null
	,pause: null
	,stop: null
	,length: null
	,get_length: null
	,position: null
	,get_position: null
	,get_volume: null
	,set_volume: null
	,finished: null
	,get_finished: null
	,__class__: kha_audio1_AudioChannel
	,__properties__: {get_finished:"get_finished",set_volume:"set_volume",get_volume:"get_volume",get_position:"get_position",get_length:"get_length"}
};
var kha_audio2_Audio = function() { };
$hxClasses["kha.audio2.Audio"] = kha_audio2_Audio;
kha_audio2_Audio.__name__ = ["kha","audio2","Audio"];
kha_audio2_Audio.initContext = function() {
	try {
		kha_audio2_Audio._context = new AudioContext();
		return;
	} catch( e ) {
		if (e instanceof js__$Boot_HaxeError) e = e.val;
	}
	try {
		this._context = new webkitAudioContext();
		return;
	} catch( e1 ) {
		if (e1 instanceof js__$Boot_HaxeError) e1 = e1.val;
	}
};
kha_audio2_Audio._init = function() {
	kha_audio2_Audio.initContext();
	if(kha_audio2_Audio._context == null) return false;
	var bufferSize = 2048;
	kha_audio2_Audio.buffer = new kha_audio2_Buffer(bufferSize * 4,2,kha_audio2_Audio._context.sampleRate | 0);
	kha_audio2_Audio.processingNode = kha_audio2_Audio._context.createScriptProcessor(bufferSize,0,2);
	kha_audio2_Audio.processingNode.onaudioprocess = function(e) {
		var output1 = e.outputBuffer.getChannelData(0);
		var output2 = e.outputBuffer.getChannelData(1);
		if(kha_audio2_Audio.audioCallback != null) {
			kha_audio2_Audio.audioCallback(e.outputBuffer.length * 2,kha_audio2_Audio.buffer);
			var _g1 = 0;
			var _g = e.outputBuffer.length;
			while(_g1 < _g) {
				var i = _g1++;
				output1[i] = kha_audio2_Audio.buffer.data[kha_audio2_Audio.buffer.readLocation];
				kha_audio2_Audio.buffer.readLocation += 1;
				output2[i] = kha_audio2_Audio.buffer.data[kha_audio2_Audio.buffer.readLocation];
				kha_audio2_Audio.buffer.readLocation += 1;
				if(kha_audio2_Audio.buffer.readLocation >= kha_audio2_Audio.buffer.size) kha_audio2_Audio.buffer.readLocation = 0;
			}
		} else {
			var _g11 = 0;
			var _g2 = e.outputBuffer.length;
			while(_g11 < _g2) {
				var i1 = _g11++;
				output1[i1] = 0;
				output2[i1] = 0;
			}
		}
	};
	kha_audio2_Audio.processingNode.connect(kha_audio2_Audio._context.destination);
	return true;
};
kha_audio2_Audio.play = function(sound,loop) {
	if(loop == null) loop = false;
	return null;
};
var kha_audio2_Audio1 = function() { };
$hxClasses["kha.audio2.Audio1"] = kha_audio2_Audio1;
kha_audio2_Audio1.__name__ = ["kha","audio2","Audio1"];
kha_audio2_Audio1._init = function() {
	var this1;
	this1 = new Array(16);
	kha_audio2_Audio1.soundChannels = this1;
	var this2;
	this2 = new Array(16);
	kha_audio2_Audio1.internalSoundChannels = this2;
	var this3;
	this3 = new Array(512);
	kha_audio2_Audio1.sampleCache1 = this3;
	var this4;
	this4 = new Array(512);
	kha_audio2_Audio1.sampleCache2 = this4;
	kha_audio2_Audio.audioCallback = kha_audio2_Audio1._mix;
};
kha_audio2_Audio1.max = function(a,b) {
	if(a > b) return a; else return b;
};
kha_audio2_Audio1.min = function(a,b) {
	if(a < b) return a; else return b;
};
kha_audio2_Audio1._mix = function(samples,buffer) {
	if(kha_audio2_Audio1.sampleCache1.length < samples) {
		var this1;
		this1 = new Array(samples);
		kha_audio2_Audio1.sampleCache1 = this1;
		var this2;
		this2 = new Array(samples);
		kha_audio2_Audio1.sampleCache2 = this2;
	}
	var _g = 0;
	while(_g < samples) {
		var i = _g++;
		kha_audio2_Audio1.sampleCache2[i] = 0;
	}
	var _g1 = 0;
	while(_g1 < 16) {
		var i1 = _g1++;
		kha_audio2_Audio1.internalSoundChannels[i1] = kha_audio2_Audio1.soundChannels[i1];
	}
	var _g2 = 0;
	var _g11 = kha_audio2_Audio1.internalSoundChannels;
	while(_g2 < _g11.length) {
		var channel = _g11[_g2];
		++_g2;
		if(channel == null || channel.get_finished()) continue;
		channel.nextSamples(kha_audio2_Audio1.sampleCache1,samples,buffer.samplesPerSecond);
		var _g21 = 0;
		while(_g21 < samples) {
			var i2 = _g21++;
			var _g3 = i2;
			var val = kha_audio2_Audio1.sampleCache2[_g3] + kha_audio2_Audio1.sampleCache1[i2] * channel.get_volume();
			kha_audio2_Audio1.sampleCache2[_g3] = val;
		}
	}
	var _g4 = 0;
	while(_g4 < samples) {
		var i3 = _g4++;
		var val1 = kha_audio2_Audio1.max(kha_audio2_Audio1.min(kha_audio2_Audio1.sampleCache2[i3],1.0),-1.0);
		buffer.data[buffer.writeLocation] = val1;
		buffer.writeLocation += 1;
		if(buffer.writeLocation >= buffer.size) buffer.writeLocation = 0;
	}
};
kha_audio2_Audio1.play = function(sound,loop,stream) {
	if(stream == null) stream = false;
	if(loop == null) loop = false;
	var channel = null;
	var _g = 0;
	while(_g < 16) {
		var i = _g++;
		if(kha_audio2_Audio1.soundChannels[i] == null || kha_audio2_Audio1.soundChannels[i].get_finished()) {
			channel = new kha_audio2_AudioChannel(loop);
			channel.data = sound.data;
			kha_audio2_Audio1.soundChannels[i] = channel;
			break;
		}
	}
	return channel;
};
var kha_audio2_AudioChannel = function(looping) {
	this.paused = false;
	this.looping = looping;
	this.myVolume = 1;
	this.myPosition = 0;
};
$hxClasses["kha.audio2.AudioChannel"] = kha_audio2_AudioChannel;
kha_audio2_AudioChannel.__name__ = ["kha","audio2","AudioChannel"];
kha_audio2_AudioChannel.__interfaces__ = [kha_audio1_AudioChannel];
kha_audio2_AudioChannel.prototype = {
	data: null
	,myVolume: null
	,myPosition: null
	,paused: null
	,looping: null
	,nextSamples: function(samples,length,sampleRate) {
		if(this.paused) {
			var _g = 0;
			while(_g < length) {
				var i = _g++;
				samples[i] = 0;
			}
			return;
		}
		var _g1 = 0;
		while(_g1 < length) {
			var i1 = _g1++;
			if(this.myPosition >= this.data.length && this.looping) this.myPosition = 0;
			if(this.myPosition < this.data.length) samples[i1] = this.data[this.myPosition]; else samples[i1] = 0;
			++this.myPosition;
		}
	}
	,play: function() {
		this.paused = false;
	}
	,pause: function() {
		this.paused = true;
	}
	,stop: function() {
		this.myPosition = this.data.length;
	}
	,length: null
	,get_length: function() {
		return this.data.length / 44100 / 2;
	}
	,position: null
	,get_position: function() {
		return this.myPosition / 44100 / 2;
	}
	,get_volume: function() {
		return this.myVolume;
	}
	,set_volume: function(value) {
		return this.myVolume = value;
	}
	,finished: null
	,get_finished: function() {
		return this.myPosition >= this.data.length;
	}
	,__class__: kha_audio2_AudioChannel
	,__properties__: {get_finished:"get_finished",set_volume:"set_volume",get_volume:"get_volume",get_position:"get_position",get_length:"get_length"}
};
var kha_audio2_Buffer = function(size,channels,samplesPerSecond) {
	this.size = size;
	var this1;
	this1 = new Array(size);
	this.data = this1;
	this.channels = channels;
	this.samplesPerSecond = samplesPerSecond;
	this.readLocation = 0;
	this.writeLocation = 0;
};
$hxClasses["kha.audio2.Buffer"] = kha_audio2_Buffer;
kha_audio2_Buffer.__name__ = ["kha","audio2","Buffer"];
kha_audio2_Buffer.prototype = {
	channels: null
	,samplesPerSecond: null
	,data: null
	,size: null
	,readLocation: null
	,writeLocation: null
	,__class__: kha_audio2_Buffer
};
var kha_audio2_ogg_tools_Crc32 = function() { };
$hxClasses["kha.audio2.ogg.tools.Crc32"] = kha_audio2_ogg_tools_Crc32;
kha_audio2_ogg_tools_Crc32.__name__ = ["kha","audio2","ogg","tools","Crc32"];
kha_audio2_ogg_tools_Crc32.init = function() {
	if(kha_audio2_ogg_tools_Crc32.table != null) return;
	var this1;
	this1 = new Array(256);
	kha_audio2_ogg_tools_Crc32.table = this1;
	var _g = 0;
	while(_g < 256) {
		var i = _g++;
		var s = i << 24;
		var _g1 = 0;
		while(_g1 < 8) {
			var j = _g1++;
			var b;
			if(_$UInt_UInt_$Impl_$.gte(s,1 << 31)) b = 79764919; else b = 0;
			s = s << 1 ^ b;
		}
		kha_audio2_ogg_tools_Crc32.table[i] = s;
	}
};
kha_audio2_ogg_tools_Crc32.update = function(crc,$byte) {
	return crc << 8 ^ kha_audio2_ogg_tools_Crc32.table[$byte ^ crc >>> 24];
};
var kha_audio2_ogg_tools_MathTools = function() { };
$hxClasses["kha.audio2.ogg.tools.MathTools"] = kha_audio2_ogg_tools_MathTools;
kha_audio2_ogg_tools_MathTools.__name__ = ["kha","audio2","ogg","tools","MathTools"];
kha_audio2_ogg_tools_MathTools.ilog = function(n) {
	var log2_4 = [0,1,2,2,3,3,3,3,4,4,4,4,4,4,4,4];
	if(n < 16384) {
		if(n < 16) return log2_4[n]; else if(n < 512) return 5 + log2_4[n >> 5]; else return 10 + log2_4[n >> 10];
	} else if(n < 16777216) {
		if(n < 524288) return 15 + log2_4[n >> 15]; else return 20 + log2_4[n >> 20];
	} else if(n < 536870912) return 25 + log2_4[n >> 25]; else if(n < -2147483648) return 30 + log2_4[n >> 30]; else return 0;
};
var kha_audio2_ogg_tools_Mdct = function() { };
$hxClasses["kha.audio2.ogg.tools.Mdct"] = kha_audio2_ogg_tools_Mdct;
kha_audio2_ogg_tools_Mdct.__name__ = ["kha","audio2","ogg","tools","Mdct"];
kha_audio2_ogg_tools_Mdct.inverseTransform = function(buffer,n,a,b,c,bitReverse) {
	var n2 = n >> 1;
	var n4 = n >> 2;
	var n8 = n >> 3;
	var buf2;
	var this1;
	this1 = new Array(n2);
	buf2 = this1;
	var dOffset = n2 - 2;
	var aaOffset = 0;
	var eOffset = 0;
	var eStopOffset = n2;
	while(eOffset != eStopOffset) {
		buf2[dOffset + 1] = buffer[eOffset] * a[aaOffset] - buffer[eOffset + 2] * a[aaOffset + 1];
		buf2[dOffset] = buffer[eOffset] * a[aaOffset + 1] + buffer[eOffset + 2] * a[aaOffset];
		dOffset -= 2;
		aaOffset += 2;
		eOffset += 4;
	}
	eOffset = n2 - 3;
	while(dOffset >= 0) {
		buf2[dOffset + 1] = -buffer[eOffset + 2] * a[aaOffset] - -buffer[eOffset] * a[aaOffset + 1];
		buf2[dOffset] = -buffer[eOffset + 2] * a[aaOffset + 1] + -buffer[eOffset] * a[aaOffset];
		dOffset -= 2;
		aaOffset += 2;
		eOffset -= 4;
	}
	var u = buffer;
	var v = buf2;
	var aaOffset1 = n2 - 8;
	var eOffset0 = n4;
	var eOffset1 = 0;
	var dOffset0 = n4;
	var dOffset1 = 0;
	while(aaOffset1 >= 0) {
		var v41_21 = v[eOffset0 + 1] - v[eOffset1 + 1];
		var v40_20 = v[eOffset0] - v[eOffset1];
		u[dOffset0 + 1] = v[eOffset0 + 1] + v[eOffset1 + 1];
		u[dOffset0] = v[eOffset0] + v[eOffset1];
		u[dOffset1 + 1] = v41_21 * a[aaOffset1 + 4] - v40_20 * a[aaOffset1 + 5];
		u[dOffset1] = v40_20 * a[aaOffset1 + 4] + v41_21 * a[aaOffset1 + 5];
		v41_21 = v[eOffset0 + 3] - v[eOffset1 + 3];
		v40_20 = v[eOffset0 + 2] - v[eOffset1 + 2];
		u[dOffset0 + 3] = v[eOffset0 + 3] + v[eOffset1 + 3];
		u[dOffset0 + 2] = v[eOffset0 + 2] + v[eOffset1 + 2];
		u[dOffset1 + 3] = v41_21 * a[aaOffset1] - v40_20 * a[aaOffset1 + 1];
		u[dOffset1 + 2] = v40_20 * a[aaOffset1] + v41_21 * a[aaOffset1 + 1];
		aaOffset1 -= 8;
		dOffset0 += 4;
		dOffset1 += 4;
		eOffset0 += 4;
		eOffset1 += 4;
	}
	var ld = kha_audio2_ogg_tools_MathTools.ilog(n) - 1;
	kha_audio2_ogg_tools_Mdct.step3Iter0Loop(n >> 4,u,n2 - 1 - n4 * 0,-(n >> 3),a);
	kha_audio2_ogg_tools_Mdct.step3Iter0Loop(n >> 4,u,n2 - 1 - n4,-(n >> 3),a);
	kha_audio2_ogg_tools_Mdct.step3InnerRLoop(n >> 5,u,n2 - 1 - n8 * 0,-(n >> 4),a,16);
	kha_audio2_ogg_tools_Mdct.step3InnerRLoop(n >> 5,u,n2 - 1 - n8,-(n >> 4),a,16);
	kha_audio2_ogg_tools_Mdct.step3InnerRLoop(n >> 5,u,n2 - 1 - n8 * 2,-(n >> 4),a,16);
	kha_audio2_ogg_tools_Mdct.step3InnerRLoop(n >> 5,u,n2 - 1 - n8 * 3,-(n >> 4),a,16);
	var _g1 = 2;
	var _g = ld - 3 >> 1;
	while(_g1 < _g) {
		var l = _g1++;
		var k0 = n >> l + 2;
		var k0_2 = k0 >> 1;
		var lim = 1 << l + 1;
		var _g2 = 0;
		while(_g2 < lim) {
			var i = _g2++;
			kha_audio2_ogg_tools_Mdct.step3InnerRLoop(n >> l + 4,u,n2 - 1 - k0 * i,-k0_2,a,1 << l + 3);
		}
	}
	var _g11 = ld - 3 >> 1;
	var _g3 = ld - 6;
	while(_g11 < _g3) {
		var l1 = _g11++;
		var k01 = n >> l1 + 2;
		var k1 = 1 << l1 + 3;
		var k0_21 = k01 >> 1;
		var rlim = n >> l1 + 6;
		var lim1 = 1 << l1 + 1;
		var aOffset = 0;
		var i_off = n2 - 1;
		var r = rlim + 1;
		while(--r > 0) {
			kha_audio2_ogg_tools_Mdct.step3InnerSLoop(lim1,u,i_off,-k0_21,a,aOffset,k1,k01);
			aOffset += k1 * 4;
			i_off -= 8;
		}
	}
	kha_audio2_ogg_tools_Mdct.step3InnerSLoopLd654(n >> 5,u,n2 - 1,a,n);
	var brOffset = 0;
	var dOffset01 = n4 - 4;
	var dOffset11 = n2 - 4;
	while(dOffset01 >= 0) {
		var k4 = bitReverse[brOffset];
		v[dOffset11 + 3] = u[k4];
		v[dOffset11 + 2] = u[k4 + 1];
		v[dOffset01 + 3] = u[k4 + 2];
		v[dOffset01 + 2] = u[k4 + 3];
		k4 = bitReverse[brOffset + 1];
		v[dOffset11 + 1] = u[k4];
		v[dOffset11] = u[k4 + 1];
		v[dOffset01 + 1] = u[k4 + 2];
		v[dOffset01] = u[k4 + 3];
		dOffset01 -= 4;
		dOffset11 -= 4;
		brOffset += 2;
	}
	var cOffset = 0;
	var dOffset2 = 0;
	var eOffset2 = n2 - 4;
	while(dOffset2 < eOffset2) {
		var a02 = v[dOffset2] - v[eOffset2 + 2];
		var a11 = v[dOffset2 + 1] + v[eOffset2 + 3];
		var b0 = c[cOffset + 1] * a02 + c[cOffset] * a11;
		var b1 = c[cOffset + 1] * a11 - c[cOffset] * a02;
		var b2 = v[dOffset2] + v[eOffset2 + 2];
		var b3 = v[dOffset2 + 1] - v[eOffset2 + 3];
		v[dOffset2] = b2 + b0;
		v[dOffset2 + 1] = b3 + b1;
		v[eOffset2 + 2] = b2 - b0;
		v[eOffset2 + 3] = b1 - b3;
		a02 = v[dOffset2 + 2] - v[eOffset2];
		a11 = v[dOffset2 + 3] + v[eOffset2 + 1];
		b0 = c[cOffset + 3] * a02 + c[cOffset + 2] * a11;
		b1 = c[cOffset + 3] * a11 - c[cOffset + 2] * a02;
		b2 = v[dOffset2 + 2] + v[eOffset2];
		b3 = v[dOffset2 + 3] - v[eOffset2 + 1];
		v[dOffset2 + 2] = b2 + b0;
		v[dOffset2 + 3] = b3 + b1;
		v[eOffset2] = b2 - b0;
		v[eOffset2 + 1] = b1 - b3;
		cOffset += 4;
		dOffset2 += 4;
		eOffset2 -= 4;
	}
	var bOffset = n2 - 8;
	var eOffset3 = n2 - 8;
	var dOffset02 = 0;
	var dOffset12 = n2 - 4;
	var dOffset21 = n2;
	var dOffset3 = n - 4;
	while(eOffset3 >= 0) {
		var p3 = buf2[eOffset3 + 6] * b[bOffset + 7] - buf2[eOffset3 + 7] * b[bOffset + 6];
		var p2 = -buf2[eOffset3 + 6] * b[bOffset + 6] - buf2[eOffset3 + 7] * b[bOffset + 7];
		buffer[dOffset02] = p3;
		buffer[dOffset12 + 3] = -p3;
		buffer[dOffset21] = p2;
		buffer[dOffset3 + 3] = p2;
		var p1 = buf2[eOffset3 + 4] * b[bOffset + 5] - buf2[eOffset3 + 5] * b[bOffset + 4];
		var p0 = -buf2[eOffset3 + 4] * b[bOffset + 4] - buf2[eOffset3 + 5] * b[bOffset + 5];
		buffer[dOffset02 + 1] = p1;
		buffer[dOffset12 + 2] = -p1;
		buffer[dOffset21 + 1] = p0;
		buffer[dOffset3 + 2] = p0;
		p3 = buf2[eOffset3 + 2] * b[bOffset + 3] - buf2[eOffset3 + 3] * b[bOffset + 2];
		p2 = -buf2[eOffset3 + 2] * b[bOffset + 2] - buf2[eOffset3 + 3] * b[bOffset + 3];
		buffer[dOffset02 + 2] = p3;
		buffer[dOffset12 + 1] = -p3;
		buffer[dOffset21 + 2] = p2;
		buffer[dOffset3 + 1] = p2;
		p1 = buf2[eOffset3] * b[bOffset + 1] - buf2[eOffset3 + 1] * b[bOffset];
		p0 = -buf2[eOffset3] * b[bOffset] - buf2[eOffset3 + 1] * b[bOffset + 1];
		buffer[dOffset02 + 3] = p1;
		buffer[dOffset12] = -p1;
		buffer[dOffset21 + 3] = p0;
		buffer[dOffset3] = p0;
		bOffset -= 8;
		eOffset3 -= 8;
		dOffset02 += 4;
		dOffset21 += 4;
		dOffset12 -= 4;
		dOffset3 -= 4;
	}
};
kha_audio2_ogg_tools_Mdct.step3Iter0Loop = function(n,e,i_off,k_off,a) {
	var eeOffset0 = i_off;
	var eeOffset2 = i_off + k_off;
	var aOffset = 0;
	var i = (n >> 2) + 1;
	while(--i > 0) {
		var k00_20 = e[eeOffset0] - e[eeOffset2];
		var k01_21 = e[eeOffset0 + -1] - e[eeOffset2 + -1];
		var _g = eeOffset0;
		e[_g] = e[_g] + e[eeOffset2];
		var _g1 = eeOffset0 + -1;
		e[_g1] = e[_g1] + e[eeOffset2 + -1];
		e[eeOffset2] = k00_20 * a[aOffset] - k01_21 * a[aOffset + 1];
		e[eeOffset2 + -1] = k01_21 * a[aOffset] + k00_20 * a[aOffset + 1];
		aOffset += 8;
		k00_20 = e[eeOffset0 + -2] - e[eeOffset2 + -2];
		k01_21 = e[eeOffset0 + -3] - e[eeOffset2 + -3];
		var _g2 = eeOffset0 + -2;
		e[_g2] = e[_g2] + e[eeOffset2 + -2];
		var _g3 = eeOffset0 + -3;
		e[_g3] = e[_g3] + e[eeOffset2 + -3];
		e[eeOffset2 + -2] = k00_20 * a[aOffset] - k01_21 * a[aOffset + 1];
		e[eeOffset2 + -3] = k01_21 * a[aOffset] + k00_20 * a[aOffset + 1];
		aOffset += 8;
		k00_20 = e[eeOffset0 + -4] - e[eeOffset2 + -4];
		k01_21 = e[eeOffset0 + -5] - e[eeOffset2 + -5];
		var _g4 = eeOffset0 + -4;
		e[_g4] = e[_g4] + e[eeOffset2 + -4];
		var _g5 = eeOffset0 + -5;
		e[_g5] = e[_g5] + e[eeOffset2 + -5];
		e[eeOffset2 + -4] = k00_20 * a[aOffset] - k01_21 * a[aOffset + 1];
		e[eeOffset2 + -5] = k01_21 * a[aOffset] + k00_20 * a[aOffset + 1];
		aOffset += 8;
		k00_20 = e[eeOffset0 + -6] - e[eeOffset2 + -6];
		k01_21 = e[eeOffset0 + -7] - e[eeOffset2 + -7];
		var _g6 = eeOffset0 + -6;
		e[_g6] = e[_g6] + e[eeOffset2 + -6];
		var _g7 = eeOffset0 + -7;
		e[_g7] = e[_g7] + e[eeOffset2 + -7];
		e[eeOffset2 + -6] = k00_20 * a[aOffset] - k01_21 * a[aOffset + 1];
		e[eeOffset2 + -7] = k01_21 * a[aOffset] + k00_20 * a[aOffset + 1];
		aOffset += 8;
		eeOffset0 -= 8;
		eeOffset2 -= 8;
	}
};
kha_audio2_ogg_tools_Mdct.step3InnerRLoop = function(lim,e,d0,k_off,a,k1) {
	var aOffset = 0;
	var eOffset0 = d0;
	var eOffset2 = d0 + k_off;
	var i = (lim >> 2) + 1;
	while(--i > 0) {
		var k00_20 = e[eOffset0] - e[eOffset2];
		var k01_21 = e[eOffset0 + -1] - e[eOffset2 + -1];
		var _g = eOffset0;
		e[_g] = e[_g] + e[eOffset2];
		var _g1 = eOffset0 + -1;
		e[_g1] = e[_g1] + e[eOffset2 + -1];
		e[eOffset2] = k00_20 * a[aOffset] - k01_21 * a[aOffset + 1];
		e[eOffset2 + -1] = k01_21 * a[aOffset] + k00_20 * a[aOffset + 1];
		aOffset += k1;
		k00_20 = e[eOffset0 + -2] - e[eOffset2 + -2];
		k01_21 = e[eOffset0 + -3] - e[eOffset2 + -3];
		var _g2 = eOffset0 + -2;
		e[_g2] = e[_g2] + e[eOffset2 + -2];
		var _g3 = eOffset0 + -3;
		e[_g3] = e[_g3] + e[eOffset2 + -3];
		e[eOffset2 + -2] = k00_20 * a[aOffset] - k01_21 * a[aOffset + 1];
		e[eOffset2 + -3] = k01_21 * a[aOffset] + k00_20 * a[aOffset + 1];
		aOffset += k1;
		k00_20 = e[eOffset0 + -4] - e[eOffset2 + -4];
		k01_21 = e[eOffset0 + -5] - e[eOffset2 + -5];
		var _g4 = eOffset0 + -4;
		e[_g4] = e[_g4] + e[eOffset2 + -4];
		var _g5 = eOffset0 + -5;
		e[_g5] = e[_g5] + e[eOffset2 + -5];
		e[eOffset2 + -4] = k00_20 * a[aOffset] - k01_21 * a[aOffset + 1];
		e[eOffset2 + -5] = k01_21 * a[aOffset] + k00_20 * a[aOffset + 1];
		aOffset += k1;
		k00_20 = e[eOffset0 + -6] - e[eOffset2 + -6];
		k01_21 = e[eOffset0 + -7] - e[eOffset2 + -7];
		var _g6 = eOffset0 + -6;
		e[_g6] = e[_g6] + e[eOffset2 + -6];
		var _g7 = eOffset0 + -7;
		e[_g7] = e[_g7] + e[eOffset2 + -7];
		e[eOffset2 + -6] = k00_20 * a[aOffset] - k01_21 * a[aOffset + 1];
		e[eOffset2 + -7] = k01_21 * a[aOffset] + k00_20 * a[aOffset + 1];
		eOffset0 -= 8;
		eOffset2 -= 8;
		aOffset += k1;
	}
};
kha_audio2_ogg_tools_Mdct.step3InnerSLoop = function(n,e,i_off,k_off,a,aOffset0,aOffset1,k0) {
	var A0 = a[aOffset0];
	var A1 = a[aOffset0 + 1];
	var A2 = a[aOffset0 + aOffset1];
	var A3 = a[aOffset0 + aOffset1 + 1];
	var A4 = a[aOffset0 + aOffset1 * 2];
	var A5 = a[aOffset0 + aOffset1 * 2 + 1];
	var A6 = a[aOffset0 + aOffset1 * 3];
	var A7 = a[aOffset0 + aOffset1 * 3 + 1];
	var eeOffset0 = i_off;
	var eeOffset2 = i_off + k_off;
	var i = n + 1;
	while(--i > 0) {
		var k00 = e[eeOffset0] - e[eeOffset2];
		var k11 = e[eeOffset0 + -1] - e[eeOffset2 + -1];
		e[eeOffset0] = e[eeOffset0] + e[eeOffset2];
		e[eeOffset0 + -1] = e[eeOffset0 + -1] + e[eeOffset2 + -1];
		e[eeOffset2] = k00 * A0 - k11 * A1;
		e[eeOffset2 + -1] = k11 * A0 + k00 * A1;
		k00 = e[eeOffset0 + -2] - e[eeOffset2 + -2];
		k11 = e[eeOffset0 + -3] - e[eeOffset2 + -3];
		e[eeOffset0 + -2] = e[eeOffset0 + -2] + e[eeOffset2 + -2];
		e[eeOffset0 + -3] = e[eeOffset0 + -3] + e[eeOffset2 + -3];
		e[eeOffset2 + -2] = k00 * A2 - k11 * A3;
		e[eeOffset2 + -3] = k11 * A2 + k00 * A3;
		k00 = e[eeOffset0 + -4] - e[eeOffset2 + -4];
		k11 = e[eeOffset0 + -5] - e[eeOffset2 + -5];
		e[eeOffset0 + -4] = e[eeOffset0 + -4] + e[eeOffset2 + -4];
		e[eeOffset0 + -5] = e[eeOffset0 + -5] + e[eeOffset2 + -5];
		e[eeOffset2 + -4] = k00 * A4 - k11 * A5;
		e[eeOffset2 + -5] = k11 * A4 + k00 * A5;
		k00 = e[eeOffset0 + -6] - e[eeOffset2 + -6];
		k11 = e[eeOffset0 + -7] - e[eeOffset2 + -7];
		e[eeOffset0 + -6] = e[eeOffset0 + -6] + e[eeOffset2 + -6];
		e[eeOffset0 + -7] = e[eeOffset0 + -7] + e[eeOffset2 + -7];
		e[eeOffset2 + -6] = k00 * A6 - k11 * A7;
		e[eeOffset2 + -7] = k11 * A6 + k00 * A7;
		eeOffset0 -= k0;
		eeOffset2 -= k0;
	}
};
kha_audio2_ogg_tools_Mdct.iter54 = function(e,zOffset) {
	var t0 = e[zOffset];
	var t1 = e[zOffset + -4];
	var k00 = t0 - t1;
	var y0 = t0 + t1;
	t0 = e[zOffset + -2];
	t1 = e[zOffset + -6];
	var y2 = t0 + t1;
	var k22 = t0 - t1;
	e[zOffset] = y0 + y2;
	e[zOffset + -2] = y0 - y2;
	var k33 = e[zOffset + -3] - e[zOffset + -7];
	e[zOffset + -4] = k00 + k33;
	e[zOffset + -6] = k00 - k33;
	t0 = e[zOffset + -1];
	t1 = e[zOffset + -5];
	var k11 = t0 - t1;
	var y1 = t0 + t1;
	var y3 = e[zOffset + -3] + e[zOffset + -7];
	e[zOffset + -1] = y1 + y3;
	e[zOffset + -3] = y1 - y3;
	e[zOffset + -5] = k11 - k22;
	e[zOffset + -7] = k11 + k22;
};
kha_audio2_ogg_tools_Mdct.step3InnerSLoopLd654 = function(n,e,i_off,a,baseN) {
	var A2 = a[baseN >> 3];
	var zOffset = i_off;
	var baseOffset = i_off - 16 * n;
	while(zOffset > baseOffset) {
		var t0 = e[zOffset];
		var t1 = e[zOffset + -8];
		e[zOffset + -8] = t0 - t1;
		e[zOffset] = t0 + t1;
		t0 = e[zOffset + -1];
		t1 = e[zOffset + -9];
		e[zOffset + -9] = t0 - t1;
		e[zOffset + -1] = t0 + t1;
		t0 = e[zOffset + -2];
		t1 = e[zOffset + -10];
		var k00 = t0 - t1;
		e[zOffset + -2] = t0 + t1;
		t0 = e[zOffset + -3];
		t1 = e[zOffset + -11];
		var k11 = t0 - t1;
		e[zOffset + -3] = t0 + t1;
		e[zOffset + -10] = (k00 + k11) * A2;
		e[zOffset + -11] = (k11 - k00) * A2;
		t0 = e[zOffset + -4];
		t1 = e[zOffset + -12];
		k00 = t1 - t0;
		e[zOffset + -4] = t0 + t1;
		t0 = e[zOffset + -5];
		t1 = e[zOffset + -13];
		k11 = t0 - t1;
		e[zOffset + -5] = t0 + t1;
		e[zOffset + -12] = k11;
		e[zOffset + -13] = k00;
		t0 = e[zOffset + -6];
		t1 = e[zOffset + -14];
		k00 = t1 - t0;
		e[zOffset + -6] = t0 + t1;
		t0 = e[zOffset + -7];
		t1 = e[zOffset + -15];
		k11 = t0 - t1;
		e[zOffset + -7] = t0 + t1;
		e[zOffset + -14] = (k00 + k11) * A2;
		e[zOffset + -15] = (k00 - k11) * A2;
		kha_audio2_ogg_tools_Mdct.iter54(e,zOffset);
		kha_audio2_ogg_tools_Mdct.iter54(e,zOffset - 8);
		zOffset -= 16;
	}
};
var kha_audio2_ogg_vorbis_Reader = function(input,seekFunc,inputLength) {
	this.seekFunc = seekFunc;
	this.inputLength = inputLength;
	this.decoder = kha_audio2_ogg_vorbis_VorbisDecoder.start(input);
	this.decoder.setupSampleNumber(seekFunc,inputLength);
	this.loopStart = this.get_header().comment.get_loopStart();
	this.loopLength = this.get_header().comment.get_loopLength();
};
$hxClasses["kha.audio2.ogg.vorbis.Reader"] = kha_audio2_ogg_vorbis_Reader;
kha_audio2_ogg_vorbis_Reader.__name__ = ["kha","audio2","ogg","vorbis","Reader"];
kha_audio2_ogg_vorbis_Reader.openFromBytes = function(bytes) {
	var input = new haxe_io_BytesInput(bytes);
	return new kha_audio2_ogg_vorbis_Reader(input,(function(f,a1) {
		return function(a2) {
			f(a1,a2);
		};
	})(kha_audio2_ogg_vorbis_Reader.seekBytes,input),bytes.length);
};
kha_audio2_ogg_vorbis_Reader.seekBytes = function(bytes,pos) {
	bytes.set_position(pos);
};
kha_audio2_ogg_vorbis_Reader.readAll = function(bytes,output,useFloat) {
	if(useFloat == null) useFloat = false;
	var input = new haxe_io_BytesInput(bytes);
	var decoder = kha_audio2_ogg_vorbis_VorbisDecoder.start(input);
	decoder.setupSampleNumber((function(f,a1) {
		return function(a2) {
			f(a1,a2);
		};
	})(kha_audio2_ogg_vorbis_Reader.seekBytes,input),bytes.length);
	var header = decoder.header;
	var count = 0;
	var bufferSize = 4096;
	var buffer;
	var this1;
	this1 = new Array(bufferSize * header.channel);
	buffer = this1;
	while(true) {
		var n = decoder.read(buffer,bufferSize,header.channel,header.sampleRate,useFloat);
		var _g1 = 0;
		var _g = n * header.channel;
		while(_g1 < _g) {
			var i = _g1++;
			output.writeInt32(haxe_io_FPHelper.floatToI32(buffer[i]));
		}
		if(n == 0) break;
		count += n;
	}
	return decoder.header;
};
kha_audio2_ogg_vorbis_Reader.prototype = {
	decoder: null
	,get_header: function() {
		return this.decoder.header;
	}
	,get_totalSample: function() {
		return this.decoder.totalSample;
	}
	,get_totalMillisecond: function() {
		return this.sampleToMillisecond(this.decoder.totalSample);
	}
	,get_currentSample: function() {
		return this.decoder.currentSample;
	}
	,set_currentSample: function(value) {
		this.decoder.seek(this.seekFunc,this.inputLength,value);
		return this.decoder.currentSample;
	}
	,get_currentMillisecond: function() {
		return this.sampleToMillisecond(this.get_currentSample());
	}
	,set_currentMillisecond: function(value) {
		this.set_currentSample(this.millisecondToSample(value));
		return this.get_currentMillisecond();
	}
	,loopStart: null
	,loopLength: null
	,seekFunc: null
	,inputLength: null
	,read: function(output,samples,channels,sampleRate,useFloat) {
		if(useFloat == null) useFloat = false;
		this.decoder.ensurePosition(this.seekFunc);
		if(samples == null) samples = this.decoder.totalSample;
		if(channels == null) channels = this.get_header().channel;
		if(sampleRate == null) sampleRate = this.get_header().sampleRate;
		return this.decoder.read(output,samples,channels,sampleRate,useFloat);
	}
	,clone: function() {
		var reader = Type.createEmptyInstance(kha_audio2_ogg_vorbis_Reader);
		reader.seekFunc = this.seekFunc;
		reader.inputLength = this.inputLength;
		reader.decoder = this.decoder.clone(this.seekFunc);
		reader.loopStart = this.loopStart;
		reader.loopLength = this.loopLength;
		return reader;
	}
	,sampleToMillisecond: function(samples) {
		return (function($this) {
			var $r;
			var b = $this.get_header().sampleRate;
			$r = _$UInt_UInt_$Impl_$.toFloat(samples) / _$UInt_UInt_$Impl_$.toFloat(b);
			return $r;
		}(this)) * 1000;
	}
	,millisecondToSample: function(millseconds) {
		return Math.floor((function($this) {
			var $r;
			var _g = millseconds / 1000;
			var _g1 = $this.get_header().sampleRate;
			$r = _$UInt_UInt_$Impl_$.toFloat(_g1) * _g;
			return $r;
		}(this)));
	}
	,__class__: kha_audio2_ogg_vorbis_Reader
	,__properties__: {set_currentMillisecond:"set_currentMillisecond",get_currentMillisecond:"get_currentMillisecond",set_currentSample:"set_currentSample",get_currentSample:"get_currentSample",get_totalMillisecond:"get_totalMillisecond",get_totalSample:"get_totalSample",get_header:"get_header"}
};
var kha_audio2_ogg_vorbis_VorbisDecodeState = function(input) {
	this.nextSeg = 0;
	this.firstDecode = false;
	this.bytesInSeg = 0;
	this.validBits = 0;
	this.input = input;
	this.inputPosition = 0;
	this.page = new kha_audio2_ogg_vorbis_data_Page();
	kha_audio2_ogg_tools_Crc32.init();
};
$hxClasses["kha.audio2.ogg.vorbis.VorbisDecodeState"] = kha_audio2_ogg_vorbis_VorbisDecodeState;
kha_audio2_ogg_vorbis_VorbisDecodeState.__name__ = ["kha","audio2","ogg","vorbis","VorbisDecodeState"];
kha_audio2_ogg_vorbis_VorbisDecodeState.prototype = {
	page: null
	,eof: null
	,pFirst: null
	,pLast: null
	,validBits: null
	,inputPosition: null
	,input: null
	,discardSamplesDeferred: null
	,segments: null
	,bytesInSeg: null
	,channelBuffers: null
	,channelBufferStart: null
	,channelBufferEnd: null
	,currentSample: null
	,previousWindow: null
	,previousLength: null
	,finalY: null
	,firstDecode: null
	,nextSeg: null
	,acc: null
	,lastSeg: null
	,lastSegWhich: null
	,endSegWithKnownLoc: null
	,knownLocForPacket: null
	,error: null
	,currentLoc: null
	,currentLocValid: null
	,firstAudioPageOffset: null
	,setup: function(loc0,loc1) {
		var segmentCount;
		this.inputPosition += 1;
		segmentCount = this.input.readByte();
		this.segments = this.read(segmentCount);
		this.endSegWithKnownLoc = -2;
		if(loc0 != -1 || loc1 != -1) {
			var i = segmentCount - 1;
			while(i >= 0) {
				if(this.segments[i] < 255) break;
				if(i >= 0) {
					this.endSegWithKnownLoc = i;
					this.knownLocForPacket = loc0;
				}
				i--;
			}
		}
		if(this.firstDecode) {
			var i1 = 0;
			var len = 0;
			var p = new kha_audio2_ogg_vorbis_data_ProbedPage();
			var _g = 0;
			while(_g < segmentCount) {
				var i2 = _g++;
				len += this.segments[i2];
			}
			len += 27 + segmentCount;
			p.pageStart = this.firstAudioPageOffset;
			p.pageEnd = p.pageStart + len;
			p.firstDecodedSample = 0;
			p.lastDecodedSample = loc0;
			this.pFirst = p;
		}
		this.nextSeg = 0;
	}
	,clone: function(seekFunc) {
		var state = Type.createEmptyInstance(kha_audio2_ogg_vorbis_VorbisDecodeState);
		seekFunc(this.inputPosition);
		state.input = this.input;
		state.eof = this.eof;
		state.validBits = this.validBits;
		state.discardSamplesDeferred = this.discardSamplesDeferred;
		state.firstDecode = this.firstDecode;
		state.nextSeg = this.nextSeg;
		state.bytesInSeg = this.bytesInSeg;
		state.acc = state.acc;
		state.lastSeg = this.lastSeg;
		state.lastSegWhich = this.lastSegWhich;
		state.currentLoc = this.currentLoc;
		state.currentLocValid = this.currentLocValid;
		state.inputPosition = this.inputPosition;
		state.firstAudioPageOffset = this.firstAudioPageOffset;
		state.error = this.error;
		state.segments = this.segments;
		state.pFirst = this.pFirst;
		state.pLast = this.pLast;
		state.page = this.page.clone();
		return state;
	}
	,next: function() {
		if(this.lastSeg) return 0;
		if(this.nextSeg == -1) {
			this.lastSegWhich = this.segments.length - 1;
			try {
				this.page.start(this);
			} catch( e ) {
				if (e instanceof js__$Boot_HaxeError) e = e.val;
				if( js_Boot.__instanceof(e,kha_audio2_ogg_vorbis_data_ReaderError) ) {
					this.lastSeg = true;
					this.error = e;
					return 0;
				} else throw(e);
			}
			if((this.page.flag & 1) == 0) throw new js__$Boot_HaxeError(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.CONTINUED_PACKET_FLAG_INVALID,null,{ fileName : "VorbisDecodeState.hx", lineNumber : 171, className : "kha.audio2.ogg.vorbis.VorbisDecodeState", methodName : "next"}));
		}
		var len;
		var index = this.nextSeg++;
		len = this.segments[index];
		if(len < 255) {
			this.lastSeg = true;
			this.lastSegWhich = this.nextSeg - 1;
		}
		if(this.nextSeg >= this.segments.length) this.nextSeg = -1;
		this.bytesInSeg = len;
		return len;
	}
	,startPacket: function() {
		while(this.nextSeg == -1) {
			this.page.start(this);
			if((this.page.flag & 1) != 0) throw new js__$Boot_HaxeError(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.MISSING_CAPTURE_PATTERN,null,{ fileName : "VorbisDecodeState.hx", lineNumber : 193, className : "kha.audio2.ogg.vorbis.VorbisDecodeState", methodName : "startPacket"}));
		}
		this.lastSeg = false;
		this.validBits = 0;
		this.bytesInSeg = 0;
	}
	,maybeStartPacket: function() {
		if(this.nextSeg == -1) {
			var eof = false;
			var x;
			try {
				this.inputPosition += 1;
				x = this.input.readByte();
			} catch( e ) {
				if (e instanceof js__$Boot_HaxeError) e = e.val;
				if( js_Boot.__instanceof(e,haxe_io_Eof) ) {
					eof = true;
					x = 0;
				} else throw(e);
			}
			if(eof) return false;
			if(x != 79 || (function($this) {
				var $r;
				$this.inputPosition += 1;
				$r = $this.input.readByte();
				return $r;
			}(this)) != 103 || (function($this) {
				var $r;
				$this.inputPosition += 1;
				$r = $this.input.readByte();
				return $r;
			}(this)) != 103 || (function($this) {
				var $r;
				$this.inputPosition += 1;
				$r = $this.input.readByte();
				return $r;
			}(this)) != 83) throw new js__$Boot_HaxeError(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.MISSING_CAPTURE_PATTERN,null,{ fileName : "VorbisDecodeState.hx", lineNumber : 218, className : "kha.audio2.ogg.vorbis.VorbisDecodeState", methodName : "maybeStartPacket"}));
			this.page.startWithoutCapturePattern(this);
		}
		this.startPacket();
		return true;
	}
	,readBits: function(n) {
		if(this.validBits < 0) return 0; else if(this.validBits < n) {
			if(n > 24) return this.readBits(24) + (this.readBits(n - 24) << 24); else {
				if(this.validBits == 0) this.acc = 0;
				do if(this.bytesInSeg == 0 && (this.lastSeg || this.next() == 0)) {
					this.validBits = -1;
					break;
				} else {
					this.bytesInSeg--;
					var b;
					b = (function($this) {
						var $r;
						$this.inputPosition += 1;
						$r = $this.input.readByte();
						return $r;
					}(this)) << this.validBits;
					this.acc = this.acc + b;
					this.validBits += 8;
				} while(this.validBits < n);
				if(this.validBits < 0) return 0; else {
					var z = this.acc & (1 << n) - 1;
					this.acc = this.acc >>> n;
					this.validBits -= n;
					return z;
				}
			}
		} else {
			var z1 = this.acc & (1 << n) - 1;
			this.acc = this.acc >>> n;
			this.validBits -= n;
			return z1;
		}
	}
	,readPacketRaw: function() {
		if(this.bytesInSeg == 0 && (this.lastSeg || this.next() == 0)) return -1; else {
			this.bytesInSeg--;
			this.inputPosition += 1;
			return this.input.readByte();
		}
	}
	,readPacket: function() {
		var x;
		if(this.bytesInSeg == 0 && (this.lastSeg || this.next() == 0)) x = -1; else {
			this.bytesInSeg--;
			this.inputPosition += 1;
			x = this.input.readByte();
		}
		this.validBits = 0;
		return x;
	}
	,flushPacket: function() {
		while(this.bytesInSeg != 0 || !this.lastSeg && this.next() != 0) {
			this.bytesInSeg--;
			this.inputPosition += 1;
			this.input.readByte();
		}
	}
	,vorbisValidate: function() {
		var header = haxe_io_Bytes.alloc(6);
		var _g = 0;
		while(_g < 6) {
			var i = _g++;
			header.set(i,this.readPacket());
		}
		if(header.toString() != "vorbis") throw new js__$Boot_HaxeError(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP,"vorbis header",{ fileName : "VorbisDecodeState.hx", lineNumber : 300, className : "kha.audio2.ogg.vorbis.VorbisDecodeState", methodName : "vorbisValidate"}));
	}
	,firstPageValidate: function() {
		if(this.segments.length != 1) throw new js__$Boot_HaxeError(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_FIRST_PAGE,"segmentCount",{ fileName : "VorbisDecodeState.hx", lineNumber : 307, className : "kha.audio2.ogg.vorbis.VorbisDecodeState", methodName : "firstPageValidate"}));
		if(this.segments[0] != 30) throw new js__$Boot_HaxeError(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_FIRST_PAGE,"decodeState head",{ fileName : "VorbisDecodeState.hx", lineNumber : 310, className : "kha.audio2.ogg.vorbis.VorbisDecodeState", methodName : "firstPageValidate"}));
	}
	,startFirstDecode: function() {
		this.firstAudioPageOffset = this.inputPosition;
		this.firstDecode = true;
	}
	,capturePattern: function() {
		if((function($this) {
			var $r;
			$this.inputPosition += 1;
			$r = $this.input.readByte();
			return $r;
		}(this)) != 79 || (function($this) {
			var $r;
			$this.inputPosition += 1;
			$r = $this.input.readByte();
			return $r;
		}(this)) != 103 || (function($this) {
			var $r;
			$this.inputPosition += 1;
			$r = $this.input.readByte();
			return $r;
		}(this)) != 103 || (function($this) {
			var $r;
			$this.inputPosition += 1;
			$r = $this.input.readByte();
			return $r;
		}(this)) != 83) throw new js__$Boot_HaxeError(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.MISSING_CAPTURE_PATTERN,null,{ fileName : "VorbisDecodeState.hx", lineNumber : 323, className : "kha.audio2.ogg.vorbis.VorbisDecodeState", methodName : "capturePattern"}));
	}
	,skip: function(len) {
		this.read(len);
	}
	,prepHuffman: function() {
		if(this.validBits <= 24) {
			if(this.validBits == 0) this.acc = 0;
			do if(this.bytesInSeg == 0 && (this.lastSeg || this.next() == 0)) return; else {
				this.bytesInSeg--;
				var b;
				b = (function($this) {
					var $r;
					$this.inputPosition += 1;
					$r = $this.input.readByte();
					return $r;
				}(this)) << this.validBits;
				this.acc = this.acc + b;
				this.validBits += 8;
			} while(this.validBits <= 24);
		}
	}
	,decode: function(c) {
		var val = this.decodeRaw(c);
		if(c.sparse) val = c.sortedValues[val];
		return val;
	}
	,decodeRaw: function(c) {
		if(this.validBits < 10) this.prepHuffman();
		var i = c.fastHuffman[this.acc & 1023];
		if(i >= 0) {
			var l = c.codewordLengths[i];
			this.acc = this.acc >>> l;
			this.validBits -= l;
			if(this.validBits < 0) {
				this.validBits = 0;
				return -1;
			} else return i;
		} else return this.decodeScalarRaw(c);
	}
	,isLastByte: function() {
		return this.bytesInSeg == 0 && this.lastSeg;
	}
	,finishDecodePacket: function(previousLength,n,r) {
		var left = r.left.start;
		var currentLocValid = false;
		var n2 = n >> 1;
		if(this.firstDecode) {
			this.currentLoc = -n2;
			this.discardSamplesDeferred = n - r.right.end;
			currentLocValid = true;
			this.firstDecode = false;
		} else if(this.discardSamplesDeferred != 0) {
			r.left.start += this.discardSamplesDeferred;
			left = r.left.start;
			this.discardSamplesDeferred = 0;
		} else if(previousLength == 0 && currentLocValid) {
		}
		if(this.lastSegWhich == this.endSegWithKnownLoc) {
			if(currentLocValid && (this.page.flag & 4) != 0) {
				var currentEnd = this.knownLocForPacket - (n - r.right.end);
				if(currentEnd < this.currentLoc + r.right.end) {
					var len;
					if(currentEnd < this.currentLoc) len = 0; else len = currentEnd - this.currentLoc;
					len += r.left.start;
					this.currentLoc += len;
					return { len : len, left : left, right : r.right.start};
				}
			}
			this.currentLoc = this.knownLocForPacket - (n2 - r.left.start);
			currentLocValid = true;
		}
		if(currentLocValid) this.currentLoc += r.right.start - r.left.start;
		return { len : r.right.end, left : left, right : r.right.start};
	}
	,readInt32: function() {
		this.inputPosition += 4;
		return this.input.readInt32();
	}
	,readByte: function() {
		this.inputPosition += 1;
		return this.input.readByte();
	}
	,read: function(n) {
		this.inputPosition += n;
		var vec;
		var this1;
		this1 = new Array(n);
		vec = this1;
		var _g = 0;
		while(_g < n) {
			var i = _g++;
			var val = this.input.readByte();
			vec[i] = val;
		}
		return vec;
	}
	,readBytes: function(n) {
		this.inputPosition += n;
		return this.input.read(n);
	}
	,readString: function(n) {
		this.inputPosition += n;
		return this.input.readString(n);
	}
	,getSampleNumber: function(seekFunc,inputLength) {
		var restoreOffset = this.inputPosition;
		var previousSafe;
		if(_$UInt_UInt_$Impl_$.gte(inputLength,65536) && _$UInt_UInt_$Impl_$.gte(inputLength - 65536,this.firstAudioPageOffset)) previousSafe = inputLength - 65536; else previousSafe = this.firstAudioPageOffset;
		seekFunc(this.inputPosition = previousSafe);
		var end = 0;
		var last = false;
		{
			var _g = this.findPage(seekFunc,inputLength);
			switch(_g[1]) {
			case 0:
				var l = _g[3];
				var e = _g[2];
				end = e;
				last = l;
				break;
			case 1:
				throw new js__$Boot_HaxeError(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.CANT_FIND_LAST_PAGE,null,{ fileName : "VorbisDecodeState.hx", lineNumber : 518, className : "kha.audio2.ogg.vorbis.VorbisDecodeState", methodName : "getSampleNumber"}));
				break;
			}
		}
		var lastPageLoc = this.inputPosition;
		try {
			while(!last) {
				seekFunc(this.inputPosition = end);
				{
					var _g1 = this.findPage(seekFunc,inputLength);
					switch(_g1[1]) {
					case 0:
						var l1 = _g1[3];
						var e1 = _g1[2];
						end = e1;
						last = l1;
						break;
					case 1:
						throw "__break__";
						break;
					}
				}
				previousSafe = lastPageLoc + 1;
				lastPageLoc = this.inputPosition;
			}
		} catch( e ) { if( e != "__break__" ) throw e; }
		seekFunc(this.inputPosition = lastPageLoc);
		var vorbisHeader = this.read(6);
		var lo;
		this.inputPosition += 4;
		lo = this.input.readInt32();
		var hi;
		this.inputPosition += 4;
		hi = this.input.readInt32();
		if(lo == -1 && hi == -1 || hi > 0) throw new js__$Boot_HaxeError(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.CANT_FIND_LAST_PAGE,null,{ fileName : "VorbisDecodeState.hx", lineNumber : 552, className : "kha.audio2.ogg.vorbis.VorbisDecodeState", methodName : "getSampleNumber"}));
		this.pLast = new kha_audio2_ogg_vorbis_data_ProbedPage();
		this.pLast.pageStart = lastPageLoc;
		this.pLast.pageEnd = end;
		this.pLast.lastDecodedSample = lo;
		this.pLast.firstDecodedSample = null;
		this.pLast.afterPreviousPageStart = previousSafe;
		seekFunc(this.inputPosition = restoreOffset);
		return lo;
	}
	,forcePageResync: function() {
		this.nextSeg = -1;
	}
	,setInputOffset: function(seekFunc,n) {
		seekFunc(this.inputPosition = n);
	}
	,findPage: function(seekFunc,inputLength) {
		try {
			while(true) {
				var n;
				this.inputPosition += 1;
				n = this.input.readByte();
				if(n == 79) {
					var retryLoc = this.inputPosition;
					if(retryLoc - 25 > inputLength) return kha_audio2_ogg_vorbis__$VorbisDecodeState_FindPageResult.NotFound;
					if((function($this) {
						var $r;
						$this.inputPosition += 1;
						$r = $this.input.readByte();
						return $r;
					}(this)) != 103 || (function($this) {
						var $r;
						$this.inputPosition += 1;
						$r = $this.input.readByte();
						return $r;
					}(this)) != 103 || (function($this) {
						var $r;
						$this.inputPosition += 1;
						$r = $this.input.readByte();
						return $r;
					}(this)) != 83) continue;
					var header;
					var this1;
					this1 = new Array(27);
					header = this1;
					header[0] = 79;
					header[1] = 103;
					header[2] = 103;
					header[3] = 83;
					var _g = 4;
					while(_g < 27) {
						var i = _g++;
						var val;
						this.inputPosition += 1;
						val = this.input.readByte();
						header[i] = val;
					}
					if(header[4] != 0) {
						seekFunc(this.inputPosition = retryLoc);
						continue;
					}
					var goal = header[22] + (header[23] << 8) + (header[24] << 16) + (header[25] << 24);
					var _g1 = 22;
					while(_g1 < 26) {
						var i1 = _g1++;
						header[i1] = 0;
					}
					var crc = 0;
					var _g2 = 0;
					while(_g2 < 27) {
						var i2 = _g2++;
						crc = crc << 8 ^ kha_audio2_ogg_tools_Crc32.table[header[i2] ^ crc >>> 24];
					}
					var len = 0;
					try {
						var _g11 = 0;
						var _g3 = header[26];
						while(_g11 < _g3) {
							var i3 = _g11++;
							var s;
							this.inputPosition += 1;
							s = this.input.readByte();
							crc = crc << 8 ^ kha_audio2_ogg_tools_Crc32.table[s ^ crc >>> 24];
							len += s;
						}
						var _g4 = 0;
						while(_g4 < len) {
							var i4 = _g4++;
							crc = kha_audio2_ogg_tools_Crc32.update(crc,(function($this) {
								var $r;
								$this.inputPosition += 1;
								$r = $this.input.readByte();
								return $r;
							}(this)));
						}
					} catch( e ) {
						if (e instanceof js__$Boot_HaxeError) e = e.val;
						if( js_Boot.__instanceof(e,haxe_io_Eof) ) {
							return kha_audio2_ogg_vorbis__$VorbisDecodeState_FindPageResult.NotFound;
						} else throw(e);
					}
					if(crc == goal) {
						var end = this.inputPosition;
						seekFunc(this.inputPosition = retryLoc - 1);
						return kha_audio2_ogg_vorbis__$VorbisDecodeState_FindPageResult.Found(end,(header[5] & 4) != 0);
					}
				}
			}
		} catch( e1 ) {
			if (e1 instanceof js__$Boot_HaxeError) e1 = e1.val;
			if( js_Boot.__instanceof(e1,haxe_io_Eof) ) {
				return kha_audio2_ogg_vorbis__$VorbisDecodeState_FindPageResult.NotFound;
			} else throw(e1);
		}
	}
	,analyzePage: function(seekFunc,h) {
		var z = new kha_audio2_ogg_vorbis_data_ProbedPage();
		var packetType;
		var this1;
		this1 = new Array(255);
		packetType = this1;
		z.pageStart = this.inputPosition;
		var pageHeader = this.read(27);
		var lacing = this.read(pageHeader[26]);
		var len = 0;
		var _g1 = 0;
		var _g = pageHeader[26];
		while(_g1 < _g) {
			var i1 = _g1++;
			len += lacing[i1];
		}
		z.pageEnd = z.pageStart + 27 + pageHeader[26] + len;
		z.lastDecodedSample = pageHeader[6] + (pageHeader[7] << 8) + (pageHeader[8] << 16) + (pageHeader[9] << 16);
		if((pageHeader[5] & 4) != 0) {
			z.firstDecodedSample = null;
			seekFunc(this.inputPosition = z.pageStart);
			return z;
		}
		var numPacket = 0;
		var packetStart = (pageHeader[5] & 1) == 0;
		var modeCount = h.modes.length;
		var _g11 = 0;
		var _g2 = pageHeader[26];
		while(_g11 < _g2) {
			var i2 = _g11++;
			if(packetStart) {
				if(lacing[i2] == 0) {
					seekFunc(this.inputPosition = z.pageStart);
					return null;
				}
				var n;
				this.inputPosition += 1;
				n = this.input.readByte();
				if((n & 1) != 0) {
					seekFunc(this.inputPosition = z.pageStart);
					return null;
				}
				n >>= 1;
				var b = kha_audio2_ogg_tools_MathTools.ilog(modeCount - 1);
				n &= (1 << b) - 1;
				if(n >= modeCount) {
					seekFunc(this.inputPosition = z.pageStart);
					return null;
				}
				var index = numPacket++;
				packetType[index] = h.modes[n].blockflag;
				this.read(lacing[i2] - 1);
			} else this.read(lacing[i2]);
			packetStart = lacing[i2] < 255;
		}
		var samples = 0;
		if(numPacket > 1) if(packetType[numPacket - 1]) samples += h.blocksize1; else samples += h.blocksize0;
		var i = numPacket - 2;
		while(i >= 1) {
			i--;
			if(packetType[i]) {
				if(packetType[i + 1]) samples += h.blocksize1 >> 1; else samples += (h.blocksize1 - h.blocksize0 >> 2) + (h.blocksize0 >> 1);
			} else samples += h.blocksize0 >> 1;
			i--;
		}
		z.firstDecodedSample = z.lastDecodedSample - samples;
		seekFunc(this.inputPosition = z.pageStart);
		return z;
	}
	,decodeScalarRaw: function(c) {
		this.prepHuffman();
		var codewordLengths = c.codewordLengths;
		var codewords = c.codewords;
		var sortedCodewords = c.sortedCodewords;
		if(c.entries > 8?sortedCodewords != null:codewords != null) {
			var code = kha_audio2_ogg_vorbis_VorbisTools.bitReverse(this.acc);
			var x = 0;
			var n = c.sortedEntries;
			while(n > 1) {
				var m = x + (n >> 1);
				if(_$UInt_UInt_$Impl_$.gte(code,sortedCodewords[m])) {
					x = m;
					n -= n >> 1;
				} else n >>= 1;
			}
			if(!c.sparse) x = c.sortedValues[x];
			var len = codewordLengths[x];
			if(this.validBits >= len) {
				this.acc = this.acc >>> len;
				this.validBits -= len;
				return x;
			}
			this.validBits = 0;
			return -1;
		}
		var _g1 = 0;
		var _g = c.entries;
		while(_g1 < _g) {
			var i = _g1++;
			var cl = codewordLengths[i];
			if(cl == 255) continue;
			if(codewords[i] == (this.acc & (1 << cl) - 1)) {
				if(this.validBits >= cl) {
					this.acc = this.acc >>> cl;
					this.validBits -= cl;
					return i;
				}
				this.validBits = 0;
				return -1;
			}
		}
		this.error = new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_STREAM,null,{ fileName : "VorbisDecodeState.hx", lineNumber : 846, className : "kha.audio2.ogg.vorbis.VorbisDecodeState", methodName : "decodeScalarRaw"});
		this.validBits = 0;
		return -1;
	}
	,__class__: kha_audio2_ogg_vorbis_VorbisDecodeState
};
var kha_audio2_ogg_vorbis__$VorbisDecodeState_FindPageResult = $hxClasses["kha.audio2.ogg.vorbis._VorbisDecodeState.FindPageResult"] = { __ename__ : ["kha","audio2","ogg","vorbis","_VorbisDecodeState","FindPageResult"], __constructs__ : ["Found","NotFound"] };
kha_audio2_ogg_vorbis__$VorbisDecodeState_FindPageResult.Found = function(end,last) { var $x = ["Found",0,end,last]; $x.__enum__ = kha_audio2_ogg_vorbis__$VorbisDecodeState_FindPageResult; $x.toString = $estr; return $x; };
kha_audio2_ogg_vorbis__$VorbisDecodeState_FindPageResult.NotFound = ["NotFound",1];
kha_audio2_ogg_vorbis__$VorbisDecodeState_FindPageResult.NotFound.toString = $estr;
kha_audio2_ogg_vorbis__$VorbisDecodeState_FindPageResult.NotFound.__enum__ = kha_audio2_ogg_vorbis__$VorbisDecodeState_FindPageResult;
var kha_audio2_ogg_vorbis_VorbisDecoder = function(header,decodeState) {
	this.header = header;
	this.decodeState = decodeState;
	this.totalSample = null;
	this.currentSample = 0;
	this.previousLength = 0;
	var this1;
	this1 = new Array(header.channel);
	this.channelBuffers = this1;
	var this2;
	this2 = new Array(header.channel);
	this.previousWindow = this2;
	var this3;
	this3 = new Array(header.channel);
	this.finalY = this3;
	var _g1 = 0;
	var _g = header.channel;
	while(_g1 < _g) {
		var i = _g1++;
		var val = kha_audio2_ogg_vorbis_VorbisTools.emptyFloatVector(header.blocksize1);
		this.channelBuffers[i] = val;
		var val1 = kha_audio2_ogg_vorbis_VorbisTools.emptyFloatVector(header.blocksize1 / 2 | 0);
		this.previousWindow[i] = val1;
		var val2 = [];
		this.finalY[i] = val2;
	}
	var this4;
	this4 = new Array(2);
	this.a = this4;
	var this5;
	this5 = new Array(2);
	this.b = this5;
	var this6;
	this6 = new Array(2);
	this.c = this6;
	var this7;
	this7 = new Array(2);
	this.window = this7;
	var this8;
	this8 = new Array(2);
	this.bitReverseData = this8;
	this.initBlocksize(0,header.blocksize0);
	this.initBlocksize(1,header.blocksize1);
};
$hxClasses["kha.audio2.ogg.vorbis.VorbisDecoder"] = kha_audio2_ogg_vorbis_VorbisDecoder;
kha_audio2_ogg_vorbis_VorbisDecoder.__name__ = ["kha","audio2","ogg","vorbis","VorbisDecoder"];
kha_audio2_ogg_vorbis_VorbisDecoder.start = function(input) {
	var decodeState = new kha_audio2_ogg_vorbis_VorbisDecodeState(input);
	var header = kha_audio2_ogg_vorbis_data_Header.read(decodeState);
	var decoder = new kha_audio2_ogg_vorbis_VorbisDecoder(header,decodeState);
	decodeState.startFirstDecode();
	decoder.pumpFirstFrame();
	return decoder;
};
kha_audio2_ogg_vorbis_VorbisDecoder.prototype = {
	previousWindow: null
	,previousLength: null
	,finalY: null
	,a: null
	,b: null
	,c: null
	,window: null
	,bitReverseData: null
	,channelBuffers: null
	,channelBufferStart: null
	,channelBufferEnd: null
	,header: null
	,currentSample: null
	,totalSample: null
	,decodeState: null
	,read: function(output,samples,channels,sampleRate,useFloat) {
		if((function($this) {
			var $r;
			var a = Std["int"](_$UInt_UInt_$Impl_$.toFloat(sampleRate) % _$UInt_UInt_$Impl_$.toFloat($this.header.sampleRate));
			$r = a != 0;
			return $r;
		}(this))) throw new js__$Boot_HaxeError("Unsupported sampleRate : can't convert " + Std.string(_$UInt_UInt_$Impl_$.toFloat(this.header.sampleRate)) + " to " + sampleRate);
		if(channels % this.header.channel != 0) throw new js__$Boot_HaxeError("Unsupported channels : can't convert " + this.header.channel + " to " + channels);
		var sampleRepeat = Std["int"](_$UInt_UInt_$Impl_$.toFloat(sampleRate) / _$UInt_UInt_$Impl_$.toFloat(this.header.sampleRate));
		var channelRepeat = channels / this.header.channel | 0;
		var n = 0;
		var len = Math.floor(samples / sampleRepeat);
		if(this.totalSample != null && len > this.totalSample - this.currentSample) len = this.totalSample - this.currentSample;
		var index = 0;
		while(n < len) {
			var k = this.channelBufferEnd - this.channelBufferStart;
			if(k >= len - n) k = len - n;
			var _g1 = this.channelBufferStart;
			var _g = this.channelBufferStart + k;
			while(_g1 < _g) {
				var j = _g1++;
				var _g2 = 0;
				while(_g2 < sampleRepeat) {
					var sr = _g2++;
					var _g4 = 0;
					var _g3 = this.header.channel;
					while(_g4 < _g3) {
						var i = _g4++;
						var _g5 = 0;
						while(_g5 < channelRepeat) {
							var cr = _g5++;
							var value = this.channelBuffers[i][j];
							if(value > 1) value = 1; else if(value < -1) value = -1;
							if(useFloat) {
								output[index] = value;
								++index;
							} else {
							}
						}
					}
				}
			}
			n += k;
			this.channelBufferStart += k;
			if(n == len || this.getFrameFloat() == 0) break;
		}
		var _g6 = n;
		while(_g6 < len) {
			var j1 = _g6++;
			var _g11 = 0;
			while(_g11 < sampleRepeat) {
				var sr1 = _g11++;
				var _g31 = 0;
				var _g21 = this.header.channel;
				while(_g31 < _g21) {
					var i1 = _g31++;
					var _g41 = 0;
					while(_g41 < channelRepeat) {
						var cr1 = _g41++;
						if(useFloat) {
							output[index] = 0;
							++index;
						} else {
						}
					}
				}
			}
		}
		this.currentSample += len;
		return len * sampleRepeat;
	}
	,skipSamples: function(len) {
		var n = 0;
		if(this.totalSample != null && len > this.totalSample - this.currentSample) len = this.totalSample - this.currentSample;
		while(n < len) {
			var k = this.channelBufferEnd - this.channelBufferStart;
			if(k >= len - n) k = len - n;
			n += k;
			this.channelBufferStart += k;
			if(n == len || this.getFrameFloat() == 0) break;
		}
		this.currentSample += len;
		return len;
	}
	,setupSampleNumber: function(seekFunc,inputLength) {
		if(this.totalSample == null) this.totalSample = this.decodeState.getSampleNumber(seekFunc,inputLength);
	}
	,seek: function(seekFunc,inputLength,sampleNumber) {
		if(this.currentSample == sampleNumber) return;
		if(this.totalSample == null) {
			this.setupSampleNumber(seekFunc,inputLength);
			if(this.totalSample == 0) throw new js__$Boot_HaxeError(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.CANT_FIND_LAST_PAGE,null,{ fileName : "VorbisDecoder.hx", lineNumber : 187, className : "kha.audio2.ogg.vorbis.VorbisDecoder", methodName : "seek"}));
		}
		if(sampleNumber < 0) sampleNumber = 0;
		var p0 = this.decodeState.pFirst;
		var p1 = this.decodeState.pLast;
		if(sampleNumber >= p1.lastDecodedSample) sampleNumber = p1.lastDecodedSample - 1;
		if(sampleNumber < p0.lastDecodedSample) this.seekFrameFromPage(seekFunc,p0.pageStart,0,sampleNumber); else {
			var attempts = 0;
			while(p0.pageEnd < p1.pageStart) {
				var startOffset = p0.pageEnd;
				var endOffset = p1.afterPreviousPageStart;
				var startSample = p0.lastDecodedSample;
				var endSample = p1.lastDecodedSample;
				if(startSample == null || endSample == null) throw new js__$Boot_HaxeError(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.SEEK_FAILED,null,{ fileName : "VorbisDecoder.hx", lineNumber : 219, className : "kha.audio2.ogg.vorbis.VorbisDecoder", methodName : "seek"}));
				if(_$UInt_UInt_$Impl_$.gt(endOffset,startOffset + 4000)) endOffset = endOffset - 4000;
				var probe;
				var b = Math.floor(_$UInt_UInt_$Impl_$.toFloat(endOffset - startOffset) / _$UInt_UInt_$Impl_$.toFloat(endSample - startSample) * (sampleNumber - startSample));
				probe = startOffset + b;
				if(attempts >= 4) {
					var probe2 = startOffset + (endOffset - startOffset >>> 1);
					if(attempts >= 8) probe = probe2; else if(_$UInt_UInt_$Impl_$.gt(probe2,probe)) probe = probe + (probe2 - probe >>> 1); else probe = probe2 + (probe - probe2 >>> 1);
				}
				++attempts;
				seekFunc(this.decodeState.inputPosition = probe);
				{
					var _g = this.decodeState.findPage(seekFunc,inputLength);
					switch(_g[1]) {
					case 1:
						throw new js__$Boot_HaxeError(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.SEEK_FAILED,null,{ fileName : "VorbisDecoder.hx", lineNumber : 249, className : "kha.audio2.ogg.vorbis.VorbisDecoder", methodName : "seek"}));
						break;
					case 0:
						break;
					}
				}
				var q = this.decodeState.analyzePage(seekFunc,this.header);
				if(q == null) throw new js__$Boot_HaxeError(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.SEEK_FAILED,null,{ fileName : "VorbisDecoder.hx", lineNumber : 255, className : "kha.audio2.ogg.vorbis.VorbisDecoder", methodName : "seek"}));
				q.afterPreviousPageStart = probe;
				if(q.pageStart == p1.pageStart) {
					p1 = q;
					continue;
				}
				if(sampleNumber < q.lastDecodedSample) p1 = q; else p0 = q;
			}
			if(p0.lastDecodedSample <= sampleNumber && sampleNumber < p1.lastDecodedSample) this.seekFrameFromPage(seekFunc,p1.pageStart,p0.lastDecodedSample,sampleNumber); else throw new js__$Boot_HaxeError(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.SEEK_FAILED,null,{ fileName : "VorbisDecoder.hx", lineNumber : 275, className : "kha.audio2.ogg.vorbis.VorbisDecoder", methodName : "seek"}));
		}
	}
	,seekFrameFromPage: function(seekFunc,pageStart,firstSample,targetSample) {
		var frame = 0;
		var frameStart = firstSample;
		seekFunc(this.decodeState.inputPosition = pageStart);
		this.decodeState.nextSeg = -1;
		var leftEnd = 0;
		var leftStart = 0;
		var prevState = null;
		var lastState = null;
		while(true) {
			prevState = lastState;
			lastState = this.decodeState.clone(seekFunc);
			var initialResult = this.decodeInitial();
			if(initialResult == null) {
				lastState = prevState;
				break;
			}
			leftStart = initialResult.left.start;
			leftEnd = initialResult.left.end;
			var start;
			if(frame == 0) start = leftEnd; else start = leftStart;
			if(targetSample < frameStart + initialResult.right.start - start) break;
			this.decodeState.flushPacket();
			frameStart += initialResult.right.start - start;
			++frame;
		}
		this.decodeState = lastState;
		seekFunc(this.decodeState.inputPosition);
		this.previousLength = 0;
		this.pumpFirstFrame();
		this.currentSample = frameStart;
		this.skipSamples(targetSample - frameStart);
	}
	,clone: function(seekFunc) {
		var decoder = Type.createEmptyInstance(kha_audio2_ogg_vorbis_VorbisDecoder);
		decoder.currentSample = this.currentSample;
		decoder.totalSample = this.totalSample;
		decoder.previousLength = this.previousLength;
		decoder.channelBufferStart = this.channelBufferStart;
		decoder.channelBufferEnd = this.channelBufferEnd;
		decoder.a = this.a;
		decoder.b = this.b;
		decoder.c = this.c;
		decoder.window = this.window;
		decoder.bitReverseData = this.bitReverseData;
		decoder.header = this.header;
		decoder.decodeState = this.decodeState.clone(seekFunc);
		var this1;
		this1 = new Array(this.header.channel);
		decoder.channelBuffers = this1;
		var this2;
		this2 = new Array(this.header.channel);
		decoder.previousWindow = this2;
		var this3;
		this3 = new Array(this.header.channel);
		decoder.finalY = this3;
		var _g1 = 0;
		var _g = this.header.channel;
		while(_g1 < _g) {
			var i = _g1++;
			var val = kha_audio2_ogg_vorbis_VorbisTools.copyVector(this.channelBuffers[i]);
			decoder.channelBuffers[i] = val;
			var val1 = kha_audio2_ogg_vorbis_VorbisTools.copyVector(this.previousWindow[i]);
			decoder.previousWindow[i] = val1;
			var val2 = Lambda.array(this.finalY[i]);
			decoder.finalY[i] = val2;
		}
		return decoder;
	}
	,ensurePosition: function(seekFunc) {
		seekFunc(this.decodeState.inputPosition);
	}
	,getFrameFloat: function() {
		var result = this.decodePacket();
		if(result == null) {
			this.channelBufferStart = this.channelBufferEnd = 0;
			return 0;
		}
		var len = this.finishFrame(result);
		this.channelBufferStart = result.left;
		this.channelBufferEnd = result.left + len;
		return len;
	}
	,pumpFirstFrame: function() {
		this.finishFrame(this.decodePacket());
	}
	,finishFrame: function(r) {
		var len = r.len;
		var right = r.right;
		var left = r.left;
		if(this.previousLength != 0) {
			var n = this.previousLength;
			var w = this.getWindow(n);
			var _g1 = 0;
			var _g = this.header.channel;
			while(_g1 < _g) {
				var i = _g1++;
				var cb = this.channelBuffers[i];
				var pw = this.previousWindow[i];
				var _g2 = 0;
				while(_g2 < n) {
					var j = _g2++;
					cb[left + j] = cb[left + j] * w[j] + pw[j] * w[n - 1 - j];
				}
			}
		}
		var prev = this.previousLength;
		this.previousLength = len - right;
		var _g11 = 0;
		var _g3 = this.header.channel;
		while(_g11 < _g3) {
			var i1 = _g11++;
			var pw1 = this.previousWindow[i1];
			var cb1 = this.channelBuffers[i1];
			var _g31 = 0;
			var _g21 = len - right;
			while(_g31 < _g21) {
				var j1 = _g31++;
				pw1[j1] = cb1[right + j1];
			}
		}
		if(prev == 0) return 0;
		if(len < right) right = len;
		return right - left;
	}
	,getWindow: function(len) {
		len <<= 1;
		if(len == this.header.blocksize0) return this.window[0]; else if(len == this.header.blocksize1) return this.window[1]; else return null;
	}
	,initBlocksize: function(bs,n) {
		var n2 = n >> 1;
		var n4 = n >> 2;
		var n8 = n >> 3;
		var val;
		var this1;
		this1 = new Array(n2);
		val = this1;
		this.a[bs] = val;
		var val1;
		var this2;
		this2 = new Array(n2);
		val1 = this2;
		this.b[bs] = val1;
		var val2;
		var this3;
		this3 = new Array(n4);
		val2 = this3;
		this.c[bs] = val2;
		var val3;
		var this4;
		this4 = new Array(n2);
		val3 = this4;
		this.window[bs] = val3;
		var val4;
		var this5;
		this5 = new Array(n8);
		val4 = this5;
		this.bitReverseData[bs] = val4;
		kha_audio2_ogg_vorbis_VorbisTools.computeTwiddleFactors(n,this.a[bs],this.b[bs],this.c[bs]);
		kha_audio2_ogg_vorbis_VorbisTools.computeWindow(n,this.window[bs]);
		kha_audio2_ogg_vorbis_VorbisTools.computeBitReverse(n,this.bitReverseData[bs]);
	}
	,inverseMdct: function(buffer,n,blocktype) {
		var bt;
		if(blocktype) bt = 1; else bt = 0;
		kha_audio2_ogg_tools_Mdct.inverseTransform(buffer,n,this.a[bt],this.b[bt],this.c[bt],this.bitReverseData[bt]);
	}
	,decodePacket: function() {
		var result = this.decodeInitial();
		if(result == null) return null;
		var rest = this.decodePacketRest(result);
		return rest;
	}
	,decodeInitial: function() {
		this.channelBufferStart = this.channelBufferEnd = 0;
		do {
			if(!this.decodeState.maybeStartPacket()) return null;
			if(this.decodeState.readBits(1) != 0) {
				while(-1 != this.decodeState.readPacket()) {
				}
				continue;
			}
			break;
		} while(true);
		var i = this.decodeState.readBits(kha_audio2_ogg_tools_MathTools.ilog(this.header.modes.length - 1));
		if(i == -1 || i >= this.header.modes.length) throw new js__$Boot_HaxeError(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.SEEK_FAILED,null,{ fileName : "VorbisDecoder.hx", lineNumber : 519, className : "kha.audio2.ogg.vorbis.VorbisDecoder", methodName : "decodeInitial"}));
		var m = this.header.modes[i];
		var n;
		var prev;
		var next;
		if(m.blockflag) {
			n = this.header.blocksize1;
			prev = this.decodeState.readBits(1);
			next = this.decodeState.readBits(1);
		} else {
			prev = next = 0;
			n = this.header.blocksize0;
		}
		var windowCenter = n >> 1;
		return { mode : i, left : m.blockflag && prev == 0?{ start : n - this.header.blocksize0 >> 2, end : n + this.header.blocksize0 >> 2}:{ start : 0, end : windowCenter}, right : m.blockflag && next == 0?{ start : n * 3 - this.header.blocksize0 >> 2, end : n * 3 + this.header.blocksize0 >> 2}:{ start : windowCenter, end : n}};
	}
	,decodePacketRest: function(r) {
		var len = 0;
		var m = this.header.modes[r.mode];
		var zeroChannel;
		var this1;
		this1 = new Array(256);
		zeroChannel = this1;
		var reallyZeroChannel;
		var this2;
		this2 = new Array(256);
		reallyZeroChannel = this2;
		var n;
		if(m.blockflag) n = this.header.blocksize1; else n = this.header.blocksize0;
		var map = this.header.mapping[m.mapping];
		var n2 = n >> 1;
		var rangeList = [256,128,86,64];
		var codebooks = this.header.codebooks;
		var _g1 = 0;
		var _g = this.header.channel;
		while(_g1 < _g) {
			var i1 = _g1++;
			var s = map.chan[i1].mux;
			zeroChannel[i1] = false;
			var floor = this.header.floorConfig[map.submapFloor[s]];
			if(floor.type == 0) throw new js__$Boot_HaxeError(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_STREAM,null,{ fileName : "VorbisDecoder.hx", lineNumber : 581, className : "kha.audio2.ogg.vorbis.VorbisDecoder", methodName : "decodePacketRest"})); else {
				var g = floor.floor1;
				if(this.decodeState.readBits(1) != 0) {
					var fy = [];
					var step2Flag;
					var this3;
					this3 = new Array(256);
					step2Flag = this3;
					var range = rangeList[g.floor1Multiplier - 1];
					var offset = 2;
					fy = this.finalY[i1];
					fy[0] = this.decodeState.readBits(kha_audio2_ogg_tools_MathTools.ilog(range) - 1);
					fy[1] = this.decodeState.readBits(kha_audio2_ogg_tools_MathTools.ilog(range) - 1);
					var _g3 = 0;
					var _g2 = g.partitions;
					while(_g3 < _g2) {
						var j = _g3++;
						var pclass = g.partitionClassList[j];
						var cdim = g.classDimensions[pclass];
						var cbits = g.classSubclasses[pclass];
						var csub = (1 << cbits) - 1;
						var cval = 0;
						if(cbits != 0) {
							var c = codebooks[g.classMasterbooks[pclass]];
							cval = this.decodeState.decode(c);
						}
						var books = g.subclassBooks[pclass];
						var _g4 = 0;
						while(_g4 < cdim) {
							var k = _g4++;
							var book = books[cval & csub];
							cval >>= cbits;
							if(book >= 0) fy[offset++] = this.decodeState.decode(codebooks[book]); else fy[offset++] = 0;
						}
					}
					if(this.decodeState.validBits == -1) {
						zeroChannel[i1] = true;
						continue;
					}
					var val = step2Flag[1] = true;
					step2Flag[0] = val;
					var naighbors = g.neighbors;
					var xlist = g.xlist;
					var _g31 = 2;
					var _g21 = g.values;
					while(_g31 < _g21) {
						var j1 = _g31++;
						var low = naighbors[j1][0];
						var high = naighbors[j1][1];
						var lowroom = kha_audio2_ogg_vorbis_VorbisTools.predictPoint(xlist[j1],xlist[low],xlist[high],fy[low],fy[high]);
						var val1 = fy[j1];
						var highroom = range - lowroom;
						var room;
						if(highroom < lowroom) room = highroom * 2; else room = lowroom * 2;
						if(val1 != 0) {
							var val2 = step2Flag[high] = true;
							step2Flag[low] = val2;
							step2Flag[j1] = true;
							if(val1 >= room) {
								if(highroom > lowroom) fy[j1] = val1 - lowroom + lowroom; else fy[j1] = lowroom - val1 + highroom - 1;
							} else if((val1 & 1) != 0) fy[j1] = lowroom - (val1 + 1 >> 1); else fy[j1] = lowroom + (val1 >> 1);
						} else {
							step2Flag[j1] = false;
							fy[j1] = lowroom;
						}
					}
					var _g32 = 0;
					var _g22 = g.values;
					while(_g32 < _g22) {
						var j2 = _g32++;
						if(!step2Flag[j2]) fy[j2] = -1;
					}
				} else zeroChannel[i1] = true;
			}
		}
		var _g11 = 0;
		var _g5 = this.header.channel;
		while(_g11 < _g5) {
			var i2 = _g11++;
			reallyZeroChannel[i2] = zeroChannel[i2];
		}
		var _g12 = 0;
		var _g6 = map.couplingSteps;
		while(_g12 < _g6) {
			var i3 = _g12++;
			if(!zeroChannel[map.chan[i3].magnitude] || !zeroChannel[map.chan[i3].angle]) {
				var val3 = zeroChannel[map.chan[i3].angle] = false;
				zeroChannel[map.chan[i3].magnitude] = val3;
			}
		}
		var _g13 = 0;
		var _g7 = map.submaps;
		while(_g13 < _g7) {
			var i4 = _g13++;
			var residueBuffers;
			var this4;
			this4 = new Array(this.header.channel);
			residueBuffers = this4;
			var doNotDecode;
			var this5;
			this5 = new Array(256);
			doNotDecode = this5;
			var ch = 0;
			var _g33 = 0;
			var _g23 = this.header.channel;
			while(_g33 < _g23) {
				var j3 = _g33++;
				if(map.chan[j3].mux == i4) {
					if(zeroChannel[j3]) {
						doNotDecode[ch] = true;
						residueBuffers[ch] = null;
					} else {
						doNotDecode[ch] = false;
						residueBuffers[ch] = this.channelBuffers[j3];
					}
					++ch;
				}
			}
			var r1 = map.submapResidue[i4];
			var residue = this.header.residueConfig[r1];
			residue.decode(this.decodeState,this.header,residueBuffers,ch,n2,doNotDecode,this.channelBuffers);
		}
		var i = map.couplingSteps;
		var n21 = n >> 1;
		while(--i >= 0) {
			var m1 = this.channelBuffers[map.chan[i].magnitude];
			var a = this.channelBuffers[map.chan[i].angle];
			var _g8 = 0;
			while(_g8 < n21) {
				var j4 = _g8++;
				var a2;
				var m2;
				if(m1[j4] > 0) {
					if(a[j4] > 0) {
						m2 = m1[j4];
						a2 = m1[j4] - a[j4];
					} else {
						a2 = m1[j4];
						m2 = m1[j4] + a[j4];
					}
				} else if(a[j4] > 0) {
					m2 = m1[j4];
					a2 = m1[j4] + a[j4];
				} else {
					a2 = m1[j4];
					m2 = m1[j4] - a[j4];
				}
				m1[j4] = m2;
				a[j4] = a2;
			}
		}
		var _g14 = 0;
		var _g9 = this.header.channel;
		while(_g14 < _g9) {
			var i5 = _g14++;
			if(reallyZeroChannel[i5]) {
				var _g24 = 0;
				while(_g24 < n21) {
					var j5 = _g24++;
					this.channelBuffers[i5][j5] = 0;
				}
			} else map.doFloor(this.header.floorConfig,i5,n,this.channelBuffers[i5],this.finalY[i5],null);
		}
		var _g15 = 0;
		var _g10 = this.header.channel;
		while(_g15 < _g10) {
			var i6 = _g15++;
			this.inverseMdct(this.channelBuffers[i6],n,m.blockflag);
		}
		this.decodeState.flushPacket();
		return this.decodeState.finishDecodePacket(this.previousLength,n,r);
	}
	,__class__: kha_audio2_ogg_vorbis_VorbisDecoder
};
var kha_audio2_ogg_vorbis_VorbisTools = function() { };
$hxClasses["kha.audio2.ogg.vorbis.VorbisTools"] = kha_audio2_ogg_vorbis_VorbisTools;
kha_audio2_ogg_vorbis_VorbisTools.__name__ = ["kha","audio2","ogg","vorbis","VorbisTools"];
kha_audio2_ogg_vorbis_VorbisTools.assert = function(b,p) {
};
kha_audio2_ogg_vorbis_VorbisTools.neighbors = function(x,n) {
	var low = -1;
	var high = 65536;
	var plow = 0;
	var phigh = 0;
	var _g = 0;
	while(_g < n) {
		var i = _g++;
		if(x[i] > low && x[i] < x[n]) {
			plow = i;
			low = x[i];
		}
		if(x[i] < high && x[i] > x[n]) {
			phigh = i;
			high = x[i];
		}
	}
	return { low : plow, high : phigh};
};
kha_audio2_ogg_vorbis_VorbisTools.floatUnpack = function(x) {
	var mantissa = _$UInt_UInt_$Impl_$.toFloat(x & 2097151);
	var sign = x & -2147483648;
	var exp = (x & 2145386496) >>> 21;
	var res;
	if(sign != 0) res = -mantissa; else res = mantissa;
	return res * Math.pow(2,exp - 788);
};
kha_audio2_ogg_vorbis_VorbisTools.bitReverse = function(n) {
	n = (n & -1431655766) >>> 1 | (n & 1431655765) << 1;
	n = (n & -858993460) >>> 2 | (n & 858993459) << 2;
	n = (n & -252645136) >>> 4 | (n & 252645135) << 4;
	n = (n & -16711936) >>> 8 | (n & 16711935) << 8;
	return n >>> 16 | n << 16;
};
kha_audio2_ogg_vorbis_VorbisTools.pointCompare = function(a,b) {
	if(a.x < b.x) return -1; else if(a.x > b.x) return 1; else return 0;
};
kha_audio2_ogg_vorbis_VorbisTools.uintAsc = function(a,b) {
	if(_$UInt_UInt_$Impl_$.gt(b,a)) return -1; else if(a == b) return 0; else return 1;
};
kha_audio2_ogg_vorbis_VorbisTools.lookup1Values = function(entries,dim) {
	var r = Std["int"](Math.exp(Math.log(entries) / dim));
	if(Std["int"](Math.pow(r + 1,dim)) <= entries) r++;
	kha_audio2_ogg_vorbis_VorbisTools.assert(Math.pow(r + 1,dim) > entries,{ fileName : "VorbisTools.hx", lineNumber : 155, className : "kha.audio2.ogg.vorbis.VorbisTools", methodName : "lookup1Values"});
	kha_audio2_ogg_vorbis_VorbisTools.assert(Std["int"](Math.pow(r,dim)) <= entries,{ fileName : "VorbisTools.hx", lineNumber : 156, className : "kha.audio2.ogg.vorbis.VorbisTools", methodName : "lookup1Values"});
	return r;
};
kha_audio2_ogg_vorbis_VorbisTools.computeWindow = function(n,window) {
	var n2 = n >> 1;
	var _g = 0;
	while(_g < n2) {
		var i = _g++;
		var val = Math.sin(1.57079632679489656 * kha_audio2_ogg_vorbis_VorbisTools.square(Math.sin((i + 0.5) / n2 * 0.5 * 3.14159265358979323846264)));
		window[i] = val;
	}
};
kha_audio2_ogg_vorbis_VorbisTools.square = function(f) {
	return f * f;
};
kha_audio2_ogg_vorbis_VorbisTools.computeBitReverse = function(n,rev) {
	var ld = kha_audio2_ogg_tools_MathTools.ilog(n) - 1;
	var n8 = n >> 3;
	var _g = 0;
	while(_g < n8) {
		var i = _g++;
		var val;
		var a;
		var a1 = kha_audio2_ogg_vorbis_VorbisTools.bitReverse(i);
		a = a1 >>> 32 - ld + 3;
		val = a << 2;
		rev[i] = val;
	}
};
kha_audio2_ogg_vorbis_VorbisTools.computeTwiddleFactors = function(n,af,bf,cf) {
	var n4 = n >> 2;
	var n8 = n >> 3;
	var k2 = 0;
	var _g = 0;
	while(_g < n4) {
		var k = _g++;
		var val = Math.cos(4 * k * 3.14159265358979323846264 / n);
		af[k2] = val;
		var val1 = -Math.sin(4 * k * 3.14159265358979323846264 / n);
		af[k2 + 1] = val1;
		var val2 = Math.cos((k2 + 1) * 3.14159265358979323846264 / n / 2) * 0.5;
		bf[k2] = val2;
		var val3 = Math.sin((k2 + 1) * 3.14159265358979323846264 / n / 2) * 0.5;
		bf[k2 + 1] = val3;
		k2 += 2;
	}
	var k21 = 0;
	var _g1 = 0;
	while(_g1 < n8) {
		var k1 = _g1++;
		var val4 = Math.cos(2 * (k21 + 1) * 3.14159265358979323846264 / n);
		cf[k21] = val4;
		var val5 = -Math.sin(2 * (k21 + 1) * 3.14159265358979323846264 / n);
		cf[k21 + 1] = val5;
		k21 += 2;
	}
};
kha_audio2_ogg_vorbis_VorbisTools.drawLine = function(output,x0,y0,x1,y1,n) {
	if(kha_audio2_ogg_vorbis_VorbisTools.integerDivideTable == null) {
		var this1;
		this1 = new Array(32);
		kha_audio2_ogg_vorbis_VorbisTools.integerDivideTable = this1;
		var _g = 0;
		while(_g < 32) {
			var i = _g++;
			var val;
			var this2;
			this2 = new Array(64);
			val = this2;
			kha_audio2_ogg_vorbis_VorbisTools.integerDivideTable[i] = val;
			var _g1 = 1;
			while(_g1 < 64) {
				var j = _g1++;
				kha_audio2_ogg_vorbis_VorbisTools.integerDivideTable[i][j] = i / j | 0;
			}
		}
	}
	var dy = y1 - y0;
	var adx = x1 - x0;
	var ady;
	if(dy < 0) ady = -dy; else ady = dy;
	var base;
	var x = x0;
	var y = y0;
	var err = 0;
	var sy;
	if(adx < 64 && ady < 32) {
		if(dy < 0) {
			base = -kha_audio2_ogg_vorbis_VorbisTools.integerDivideTable[ady][adx];
			sy = base - 1;
		} else {
			base = kha_audio2_ogg_vorbis_VorbisTools.integerDivideTable[ady][adx];
			sy = base + 1;
		}
	} else {
		base = dy / adx | 0;
		if(dy < 0) sy = base - 1; else sy = base + 1;
	}
	ady -= (base < 0?-base:base) * adx;
	if(x1 > n) x1 = n;
	var _g2 = x;
	output[_g2] = output[_g2] * kha_audio2_ogg_vorbis_VorbisTools.INVERSE_DB_TABLE[y];
	var _g3 = x + 1;
	while(_g3 < x1) {
		var i1 = _g3++;
		err += ady;
		if(err >= adx) {
			err -= adx;
			y += sy;
		} else y += base;
		var _g11 = i1;
		output[_g11] = output[_g11] * kha_audio2_ogg_vorbis_VorbisTools.INVERSE_DB_TABLE[y];
	}
};
kha_audio2_ogg_vorbis_VorbisTools.predictPoint = function(x,x0,x1,y0,y1) {
	var dy = y1 - y0;
	var adx = x1 - x0;
	var err = Math.abs(dy) * (x - x0);
	var off = err / adx | 0;
	if(dy < 0) return y0 - off; else return y0 + off;
};
kha_audio2_ogg_vorbis_VorbisTools.emptyFloatVector = function(len) {
	var vec;
	var this1;
	this1 = new Array(len);
	vec = this1;
	return vec;
};
kha_audio2_ogg_vorbis_VorbisTools.copyVector = function(source) {
	var dest;
	var this1;
	this1 = new Array(source.length);
	dest = this1;
	var _g1 = 0;
	var _g = source.length;
	while(_g1 < _g) {
		var i = _g1++;
		dest[i] = source[i];
	}
	return dest;
};
var kha_audio2_ogg_vorbis_data_Codebook = function() {
};
$hxClasses["kha.audio2.ogg.vorbis.data.Codebook"] = kha_audio2_ogg_vorbis_data_Codebook;
kha_audio2_ogg_vorbis_data_Codebook.__name__ = ["kha","audio2","ogg","vorbis","data","Codebook"];
kha_audio2_ogg_vorbis_data_Codebook.read = function(decodeState) {
	var c = new kha_audio2_ogg_vorbis_data_Codebook();
	if(decodeState.readBits(8) != 66 || decodeState.readBits(8) != 67 || decodeState.readBits(8) != 86) throw new js__$Boot_HaxeError(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP,null,{ fileName : "Codebook.hx", lineNumber : 40, className : "kha.audio2.ogg.vorbis.data.Codebook", methodName : "read"}));
	var x = decodeState.readBits(8);
	c.dimensions = (decodeState.readBits(8) << 8) + x;
	var x1 = decodeState.readBits(8);
	var y = decodeState.readBits(8);
	c.entries = (decodeState.readBits(8) << 16) + (y << 8) + x1;
	var ordered = decodeState.readBits(1);
	if(ordered != 0) c.sparse = false; else c.sparse = decodeState.readBits(1) != 0;
	var lengths;
	var this1;
	this1 = new Array(c.entries);
	lengths = this1;
	if(!c.sparse) c.codewordLengths = lengths;
	var total = 0;
	if(ordered != 0) {
		var currentEntry = 0;
		var currentLength = decodeState.readBits(5) + 1;
		while(currentEntry < c.entries) {
			var limit = c.entries - currentEntry;
			var n = decodeState.readBits(kha_audio2_ogg_tools_MathTools.ilog(limit));
			if(currentEntry + n > c.entries) throw new js__$Boot_HaxeError(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP,"codebook entrys",{ fileName : "Codebook.hx", lineNumber : 67, className : "kha.audio2.ogg.vorbis.data.Codebook", methodName : "read"}));
			var _g = 0;
			while(_g < n) {
				var i = _g++;
				lengths[currentEntry + i] = currentLength;
			}
			currentEntry += n;
			currentLength++;
		}
	} else {
		var _g1 = 0;
		var _g2 = c.entries;
		while(_g1 < _g2) {
			var j = _g1++;
			var present;
			if(c.sparse) present = decodeState.readBits(1); else present = 1;
			if(present != 0) {
				var val = decodeState.readBits(5) + 1;
				lengths[j] = val;
				total++;
			} else lengths[j] = 255;
		}
	}
	if(c.sparse && total >= c.entries >> 2) {
		c.codewordLengths = lengths;
		c.sparse = false;
	}
	if(c.sparse) c.sortedEntries = total; else {
		var sortedCount = 0;
		var _g11 = 0;
		var _g3 = c.entries;
		while(_g11 < _g3) {
			var j1 = _g11++;
			var l = lengths[j1];
			if(l > 10 && l != 255) ++sortedCount;
		}
		c.sortedEntries = sortedCount;
	}
	var values = null;
	if(!c.sparse) {
		var this2;
		this2 = new Array(c.entries);
		c.codewords = this2;
	} else {
		if(c.sortedEntries != 0) {
			var this3;
			this3 = new Array(c.sortedEntries);
			c.codewordLengths = this3;
			var this4;
			this4 = new Array(c.entries);
			c.codewords = this4;
			var this5;
			this5 = new Array(c.entries);
			values = this5;
		}
		var size = c.entries + 64 * c.sortedEntries;
	}
	if(!c.computeCodewords(lengths,c.entries,values)) throw new js__$Boot_HaxeError(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP,"compute codewords",{ fileName : "Codebook.hx", lineNumber : 120, className : "kha.audio2.ogg.vorbis.data.Codebook", methodName : "read"}));
	if(c.sortedEntries != 0) {
		c.sortedCodewords = [];
		var this6;
		this6 = new Array(c.sortedEntries);
		c.sortedValues = this6;
		c.computeSortedHuffman(lengths,values);
	}
	if(c.sparse) {
		values = null;
		c.codewords = null;
		lengths = null;
	}
	c.computeAcceleratedHuffman();
	c.lookupType = decodeState.readBits(4);
	if(c.lookupType > 2) throw new js__$Boot_HaxeError(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP,"codebook lookup type",{ fileName : "Codebook.hx", lineNumber : 143, className : "kha.audio2.ogg.vorbis.data.Codebook", methodName : "read"}));
	if(c.lookupType > 0) {
		c.minimumValue = kha_audio2_ogg_vorbis_VorbisTools.floatUnpack(decodeState.readBits(32));
		c.deltaValue = kha_audio2_ogg_vorbis_VorbisTools.floatUnpack(decodeState.readBits(32));
		c.valueBits = decodeState.readBits(4) + 1;
		c.sequenceP = decodeState.readBits(1) != 0;
		if(c.lookupType == 1) c.lookupValues = kha_audio2_ogg_vorbis_VorbisTools.lookup1Values(c.entries,c.dimensions); else c.lookupValues = c.entries * c.dimensions;
		var mults;
		var this7;
		this7 = new Array(c.lookupValues);
		mults = this7;
		var _g12 = 0;
		var _g4 = c.lookupValues;
		while(_g12 < _g4) {
			var j2 = _g12++;
			var q = decodeState.readBits(c.valueBits);
			if(q == -1) throw new js__$Boot_HaxeError(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP,"fail lookup",{ fileName : "Codebook.hx", lineNumber : 161, className : "kha.audio2.ogg.vorbis.data.Codebook", methodName : "read"}));
			mults[j2] = q;
		}
		var this8;
		this8 = new Array(c.lookupValues);
		c.multiplicands = this8;
		var _g13 = 0;
		var _g5 = c.lookupValues;
		while(_g13 < _g5) {
			var j3 = _g13++;
			c.multiplicands[j3] = mults[j3] * c.deltaValue + c.minimumValue;
		}
		if(c.lookupType == 2 && c.sequenceP) {
			var _g14 = 1;
			var _g6 = c.lookupValues;
			while(_g14 < _g6) {
				var j4 = _g14++;
				c.multiplicands[j4] = c.multiplicands[j4 - 1];
			}
			c.sequenceP = false;
		}
	}
	return c;
};
kha_audio2_ogg_vorbis_data_Codebook.prototype = {
	dimensions: null
	,entries: null
	,codewordLengths: null
	,minimumValue: null
	,deltaValue: null
	,valueBits: null
	,lookupType: null
	,sequenceP: null
	,sparse: null
	,lookupValues: null
	,multiplicands: null
	,codewords: null
	,fastHuffman: null
	,sortedCodewords: null
	,sortedValues: null
	,sortedEntries: null
	,addEntry: function(huffCode,symbol,count,len,values) {
		if(!this.sparse) this.codewords[symbol] = huffCode; else {
			this.codewords[count] = huffCode;
			this.codewordLengths[count] = len;
			values[count] = symbol;
		}
	}
	,includeInSort: function(len) {
		if(this.sparse) return true; else if(len == 255) return false; else if(len > 10) return true; else return false;
	}
	,computeCodewords: function(len,n,values) {
		var available;
		var this1;
		this1 = new Array(32);
		available = this1;
		var _g = 0;
		while(_g < 32) {
			var x = _g++;
			available[x] = 0;
		}
		var k = 0;
		while(k < n) {
			if(len[k] < 255) break;
			k++;
		}
		if(k == n) return true;
		var m = 0;
		this.addEntry(0,k,m++,len[k],values);
		var i = 0;
		while(++i <= len[k]) available[i] = 1 << 32 - i;
		i = k;
		while(++i < n) {
			var z = len[i];
			if(z == 255) continue;
			while(z > 0 && available[z] == 0) --z;
			if(z == 0) return false;
			var res = available[z];
			available[z] = 0;
			this.addEntry(kha_audio2_ogg_vorbis_VorbisTools.bitReverse(res),i,m++,len[i],values);
			if(z != len[i]) {
				var y = len[i];
				while(y > z) {
					available[y] = res + (1 << 32 - y);
					y--;
				}
			}
		}
		return true;
	}
	,computeSortedHuffman: function(lengths,values) {
		if(!this.sparse) {
			var k = 0;
			var _g1 = 0;
			var _g = this.entries;
			while(_g1 < _g) {
				var i = _g1++;
				if(this.includeInSort(lengths[i])) this.sortedCodewords[k++] = kha_audio2_ogg_vorbis_VorbisTools.bitReverse(this.codewords[i]);
			}
			null;
		} else {
			var _g11 = 0;
			var _g2 = this.sortedEntries;
			while(_g11 < _g2) {
				var i1 = _g11++;
				this.sortedCodewords[i1] = kha_audio2_ogg_vorbis_VorbisTools.bitReverse(this.codewords[i1]);
			}
		}
		this.sortedCodewords[this.sortedEntries] = -1;
		this.sortedCodewords.sort(kha_audio2_ogg_vorbis_VorbisTools.uintAsc);
		var len;
		if(this.sparse) len = this.sortedEntries; else len = this.entries;
		var _g3 = 0;
		while(_g3 < len) {
			var i2 = _g3++;
			var huffLen;
			if(this.sparse) huffLen = lengths[values[i2]]; else huffLen = lengths[i2];
			if(this.sparse?true:huffLen == 255?false:huffLen > 10?true:false) {
				var code = kha_audio2_ogg_vorbis_VorbisTools.bitReverse(this.codewords[i2]);
				var x = 0;
				var n = this.sortedEntries;
				while(n > 1) {
					var m = x + (n >> 1);
					if(_$UInt_UInt_$Impl_$.gte(code,this.sortedCodewords[m])) {
						x = m;
						n -= n >> 1;
					} else n >>= 1;
				}
				if(this.sparse) {
					this.sortedValues[x] = values[i2];
					this.codewordLengths[x] = huffLen;
				} else this.sortedValues[x] = i2;
			}
		}
	}
	,computeAcceleratedHuffman: function() {
		var this1;
		this1 = new Array(1024);
		this.fastHuffman = this1;
		this.fastHuffman[0] = -1;
		var _g1 = 0;
		var _g = 1024;
		while(_g1 < _g) {
			var i = _g1++;
			this.fastHuffman[i] = -1;
		}
		var len;
		if(this.sparse) len = this.sortedEntries; else len = this.entries;
		var _g2 = 0;
		while(_g2 < len) {
			var i1 = _g2++;
			if(this.codewordLengths[i1] <= 10) {
				var z;
				if(this.sparse) z = kha_audio2_ogg_vorbis_VorbisTools.bitReverse(this.sortedCodewords[i1]); else z = this.codewords[i1];
				while(z < 1024) {
					this.fastHuffman[z] = i1;
					z += 1 << this.codewordLengths[i1];
				}
			}
		}
	}
	,codebookDecode: function(decodeState,output,offset,len) {
		var z = decodeState.decode(this);
		var lookupValues = this.lookupValues;
		var sequenceP = this.sequenceP;
		var multiplicands = this.multiplicands;
		var minimumValue = this.minimumValue;
		if(z < 0) return false;
		if(len > this.dimensions) len = this.dimensions;
		if(this.lookupType == 1) {
			var div = 1;
			var last = 0.0;
			var _g = 0;
			while(_g < len) {
				var i = _g++;
				var off = Std["int"](_$UInt_UInt_$Impl_$.toFloat(z / div | 0) % _$UInt_UInt_$Impl_$.toFloat(lookupValues));
				var val = multiplicands[off] + last;
				var _g1 = offset + i;
				output[_g1] = output[_g1] + val;
				if(sequenceP) last = val + minimumValue;
				div = div * lookupValues;
			}
			return true;
		}
		z *= this.dimensions;
		if(sequenceP) {
			var last1 = 0.0;
			var _g2 = 0;
			while(_g2 < len) {
				var i1 = _g2++;
				var val1 = multiplicands[z + i1] + last1;
				var _g11 = offset + i1;
				output[_g11] = output[_g11] + val1;
				last1 = val1 + minimumValue;
			}
		} else {
			var last2 = 0.0;
			var _g3 = 0;
			while(_g3 < len) {
				var i2 = _g3++;
				var _g12 = offset + i2;
				output[_g12] = output[_g12] + (multiplicands[z + i2] + last2);
			}
		}
		return true;
	}
	,codebookDecodeStep: function(decodeState,output,offset,len,step) {
		var z = decodeState.decode(this);
		var last = 0.0;
		if(z < 0) return false;
		if(len > this.dimensions) len = this.dimensions;
		var lookupValues = this.lookupValues;
		var sequenceP = this.sequenceP;
		var multiplicands = this.multiplicands;
		if(this.lookupType == 1) {
			var div = 1;
			var _g = 0;
			while(_g < len) {
				var i = _g++;
				var off = Std["int"](_$UInt_UInt_$Impl_$.toFloat(z / div | 0) % _$UInt_UInt_$Impl_$.toFloat(lookupValues));
				var val = multiplicands[off] + last;
				var _g1 = offset + i * step;
				output[_g1] = output[_g1] + val;
				if(sequenceP) last = val;
				div = div * lookupValues;
			}
			return true;
		}
		z *= this.dimensions;
		var _g2 = 0;
		while(_g2 < len) {
			var i1 = _g2++;
			var val1 = multiplicands[z + i1] + last;
			var _g11 = offset + i1 * step;
			output[_g11] = output[_g11] + val1;
			if(sequenceP) last = val1;
		}
		return true;
	}
	,decodeStart: function(decodeState) {
		return decodeState.decode(this);
	}
	,decodeDeinterleaveRepeat: function(decodeState,residueBuffers,ch,cInter,pInter,len,totalDecode) {
		var effective = this.dimensions;
		if(this.lookupType == 0) throw new js__$Boot_HaxeError(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_STREAM,null,{ fileName : "Codebook.hx", lineNumber : 488, className : "kha.audio2.ogg.vorbis.data.Codebook", methodName : "decodeDeinterleaveRepeat"}));
		var multiplicands = this.multiplicands;
		var sequenceP = this.sequenceP;
		var lookupValues = this.lookupValues;
		while(totalDecode > 0) {
			var last = 0.0;
			var z = decodeState.decode(this);
			if(z < 0) {
				if(decodeState.bytesInSeg == 0 && decodeState.lastSeg) return null;
				throw new js__$Boot_HaxeError(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_STREAM,null,{ fileName : "Codebook.hx", lineNumber : 503, className : "kha.audio2.ogg.vorbis.data.Codebook", methodName : "decodeDeinterleaveRepeat"}));
			}
			if(cInter + pInter * ch + effective > len * ch) effective = len * ch - (pInter * ch - cInter);
			if(this.lookupType == 1) {
				var div = 1;
				if(sequenceP) {
					var _g = 0;
					while(_g < effective) {
						var i = _g++;
						var off = Std["int"](_$UInt_UInt_$Impl_$.toFloat(z / div | 0) % _$UInt_UInt_$Impl_$.toFloat(lookupValues));
						var val = multiplicands[off] + last;
						var _g1 = pInter;
						residueBuffers[cInter][_g1] = residueBuffers[cInter][_g1] + val;
						if(++cInter == ch) {
							cInter = 0;
							++pInter;
						}
						last = val;
						div = div * lookupValues;
					}
				} else {
					var _g2 = 0;
					while(_g2 < effective) {
						var i1 = _g2++;
						var off1 = Std["int"](_$UInt_UInt_$Impl_$.toFloat(z / div | 0) % _$UInt_UInt_$Impl_$.toFloat(lookupValues));
						var val1 = multiplicands[off1] + last;
						var _g11 = pInter;
						residueBuffers[cInter][_g11] = residueBuffers[cInter][_g11] + val1;
						if(++cInter == ch) {
							cInter = 0;
							++pInter;
						}
						div = div * lookupValues;
					}
				}
			} else {
				z *= this.dimensions;
				if(sequenceP) {
					var _g3 = 0;
					while(_g3 < effective) {
						var i2 = _g3++;
						var val2 = multiplicands[z + i2] + last;
						var _g12 = pInter;
						residueBuffers[cInter][_g12] = residueBuffers[cInter][_g12] + val2;
						if(++cInter == ch) {
							cInter = 0;
							++pInter;
						}
						last = val2;
					}
				} else {
					var _g4 = 0;
					while(_g4 < effective) {
						var i3 = _g4++;
						var val3 = multiplicands[z + i3] + last;
						var _g13 = pInter;
						residueBuffers[cInter][_g13] = residueBuffers[cInter][_g13] + val3;
						if(++cInter == ch) {
							cInter = 0;
							++pInter;
						}
					}
				}
			}
			totalDecode -= effective;
		}
		return { cInter : cInter, pInter : pInter};
	}
	,residueDecode: function(decodeState,target,offset,n,rtype) {
		if(rtype == 0) {
			var step = n / this.dimensions | 0;
			var _g = 0;
			while(_g < step) {
				var k = _g++;
				if(!this.codebookDecodeStep(decodeState,target,offset + k,n - offset - k,step)) return false;
			}
		} else {
			var k1 = 0;
			while(k1 < n) {
				if(!this.codebookDecode(decodeState,target,offset,n - k1)) return false;
				k1 += this.dimensions;
				offset += this.dimensions;
			}
		}
		return true;
	}
	,__class__: kha_audio2_ogg_vorbis_data_Codebook
};
var kha_audio2_ogg_vorbis_data_Comment = function() {
	this.data = new haxe_ds_StringMap();
};
$hxClasses["kha.audio2.ogg.vorbis.data.Comment"] = kha_audio2_ogg_vorbis_data_Comment;
kha_audio2_ogg_vorbis_data_Comment.__name__ = ["kha","audio2","ogg","vorbis","data","Comment"];
kha_audio2_ogg_vorbis_data_Comment.prototype = {
	data: null
	,get_title: function() {
		return this.getString("title");
	}
	,get_loopStart: function() {
		return Std.parseInt(this.getString("loopstart"));
	}
	,get_loopLength: function() {
		return Std.parseInt(this.getString("looplength"));
	}
	,get_version: function() {
		return this.getString("version");
	}
	,get_album: function() {
		return this.getString("album");
	}
	,get_organization: function() {
		return this.getString("organization");
	}
	,get_tracknumber: function() {
		return this.getString("tracknumber");
	}
	,get_performer: function() {
		return this.getString("performer");
	}
	,get_copyright: function() {
		return this.getString("copyright");
	}
	,get_license: function() {
		return this.getString("license");
	}
	,get_artist: function() {
		return this.getString("artist");
	}
	,get_description: function() {
		return this.getString("description");
	}
	,get_genre: function() {
		return this.getString("genre");
	}
	,get_date: function() {
		return this.getString("date");
	}
	,get_location: function() {
		return this.getString("location");
	}
	,get_contact: function() {
		return this.getString("contact");
	}
	,get_isrc: function() {
		return this.getString("isrc");
	}
	,get_artists: function() {
		return this.getArray("artist");
	}
	,add: function(key,value) {
		key = key.toLowerCase();
		if(this.data.exists(key)) this.data.get(key).push(value); else {
			var v = [value];
			this.data.set(key,v);
			v;
		}
	}
	,getString: function(key) {
		key = key.toLowerCase();
		if(this.data.exists(key)) return this.data.get(key)[0]; else return null;
	}
	,getArray: function(key) {
		key = key.toLowerCase();
		if(this.data.exists(key)) return this.data.get(key); else return null;
	}
	,__class__: kha_audio2_ogg_vorbis_data_Comment
	,__properties__: {get_artists:"get_artists",get_isrc:"get_isrc",get_contact:"get_contact",get_location:"get_location",get_date:"get_date",get_genre:"get_genre",get_description:"get_description",get_artist:"get_artist",get_license:"get_license",get_copyright:"get_copyright",get_performer:"get_performer",get_tracknumber:"get_tracknumber",get_organization:"get_organization",get_album:"get_album",get_version:"get_version",get_loopLength:"get_loopLength",get_loopStart:"get_loopStart",get_title:"get_title"}
};
var kha_audio2_ogg_vorbis_data_Floor = function() {
};
$hxClasses["kha.audio2.ogg.vorbis.data.Floor"] = kha_audio2_ogg_vorbis_data_Floor;
kha_audio2_ogg_vorbis_data_Floor.__name__ = ["kha","audio2","ogg","vorbis","data","Floor"];
kha_audio2_ogg_vorbis_data_Floor.read = function(decodeState,codebooks) {
	var floor = new kha_audio2_ogg_vorbis_data_Floor();
	floor.type = decodeState.readBits(16);
	if(floor.type > 1) throw new js__$Boot_HaxeError(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP,null,{ fileName : "Floor.hx", lineNumber : 28, className : "kha.audio2.ogg.vorbis.data.Floor", methodName : "read"}));
	if(floor.type == 0) {
		var g = floor.floor0 = new kha_audio2_ogg_vorbis_data_Floor0();
		g.order = decodeState.readBits(8);
		g.rate = decodeState.readBits(16);
		g.barkMapSize = decodeState.readBits(16);
		g.amplitudeBits = decodeState.readBits(6);
		g.amplitudeOffset = decodeState.readBits(8);
		g.numberOfBooks = decodeState.readBits(4) + 1;
		var _g1 = 0;
		var _g = g.numberOfBooks;
		while(_g1 < _g) {
			var j = _g1++;
			var val = decodeState.readBits(8);
			g.bookList[j] = val;
		}
		throw new js__$Boot_HaxeError(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.FEATURE_NOT_SUPPORTED,null,{ fileName : "Floor.hx", lineNumber : 41, className : "kha.audio2.ogg.vorbis.data.Floor", methodName : "read"}));
	} else {
		var p = [];
		var g1 = floor.floor1 = new kha_audio2_ogg_vorbis_data_Floor1();
		var maxClass = -1;
		g1.partitions = decodeState.readBits(5);
		var this1;
		this1 = new Array(g1.partitions);
		g1.partitionClassList = this1;
		var _g11 = 0;
		var _g2 = g1.partitions;
		while(_g11 < _g2) {
			var j1 = _g11++;
			var val1 = decodeState.readBits(4);
			g1.partitionClassList[j1] = val1;
			if(g1.partitionClassList[j1] > maxClass) maxClass = g1.partitionClassList[j1];
		}
		var this2;
		this2 = new Array(maxClass + 1);
		g1.classDimensions = this2;
		var this3;
		this3 = new Array(maxClass + 1);
		g1.classMasterbooks = this3;
		var this4;
		this4 = new Array(maxClass + 1);
		g1.classSubclasses = this4;
		var this5;
		this5 = new Array(maxClass + 1);
		g1.subclassBooks = this5;
		var _g12 = 0;
		var _g3 = maxClass + 1;
		while(_g12 < _g3) {
			var j2 = _g12++;
			var val2 = decodeState.readBits(3) + 1;
			g1.classDimensions[j2] = val2;
			var val3 = decodeState.readBits(2);
			g1.classSubclasses[j2] = val3;
			if(g1.classSubclasses[j2] != 0) {
				var val4 = decodeState.readBits(8);
				g1.classMasterbooks[j2] = val4;
				if(g1.classMasterbooks[j2] >= codebooks.length) throw new js__$Boot_HaxeError(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP,null,{ fileName : "Floor.hx", lineNumber : 64, className : "kha.audio2.ogg.vorbis.data.Floor", methodName : "read"}));
			}
			var kl = 1 << g1.classSubclasses[j2];
			var val5;
			var this6;
			this6 = new Array(kl);
			val5 = this6;
			g1.subclassBooks[j2] = val5;
			var _g21 = 0;
			while(_g21 < kl) {
				var k = _g21++;
				var val6 = decodeState.readBits(8) - 1;
				g1.subclassBooks[j2][k] = val6;
				if(g1.subclassBooks[j2][k] >= codebooks.length) throw new js__$Boot_HaxeError(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP,null,{ fileName : "Floor.hx", lineNumber : 73, className : "kha.audio2.ogg.vorbis.data.Floor", methodName : "read"}));
			}
		}
		g1.floor1Multiplier = decodeState.readBits(2) + 1;
		g1.rangebits = decodeState.readBits(4);
		var this7;
		this7 = new Array(250);
		g1.xlist = this7;
		g1.xlist[0] = 0;
		g1.xlist[1] = 1 << g1.rangebits;
		g1.values = 2;
		var _g13 = 0;
		var _g4 = g1.partitions;
		while(_g13 < _g4) {
			var j3 = _g13++;
			var c = g1.partitionClassList[j3];
			var _g31 = 0;
			var _g22 = g1.classDimensions[c];
			while(_g31 < _g22) {
				var k1 = _g31++;
				var val7 = decodeState.readBits(g1.rangebits);
				g1.xlist[g1.values] = val7;
				g1.values++;
			}
		}
		var _g14 = 0;
		var _g5 = g1.values;
		while(_g14 < _g5) {
			var j4 = _g14++;
			p.push(new kha_audio2_ogg_vorbis_data_IntPoint());
			p[j4].x = g1.xlist[j4];
			p[j4].y = j4;
		}
		p.sort(kha_audio2_ogg_vorbis_VorbisTools.pointCompare);
		var this8;
		this8 = new Array(g1.values);
		g1.sortedOrder = this8;
		var _g15 = 0;
		var _g6 = g1.values;
		while(_g15 < _g6) {
			var j5 = _g15++;
			g1.sortedOrder[j5] = p[j5].y;
		}
		var this9;
		this9 = new Array(g1.values);
		g1.neighbors = this9;
		var _g16 = 2;
		var _g7 = g1.values;
		while(_g16 < _g7) {
			var j6 = _g16++;
			var ne = kha_audio2_ogg_vorbis_VorbisTools.neighbors(g1.xlist,j6);
			var val8;
			var this10;
			this10 = new Array(g1.values);
			val8 = this10;
			g1.neighbors[j6] = val8;
			g1.neighbors[j6][0] = ne.low;
			g1.neighbors[j6][1] = ne.high;
		}
	}
	return floor;
};
kha_audio2_ogg_vorbis_data_Floor.prototype = {
	floor0: null
	,floor1: null
	,type: null
	,__class__: kha_audio2_ogg_vorbis_data_Floor
};
var kha_audio2_ogg_vorbis_data_Floor0 = function() {
};
$hxClasses["kha.audio2.ogg.vorbis.data.Floor0"] = kha_audio2_ogg_vorbis_data_Floor0;
kha_audio2_ogg_vorbis_data_Floor0.__name__ = ["kha","audio2","ogg","vorbis","data","Floor0"];
kha_audio2_ogg_vorbis_data_Floor0.prototype = {
	order: null
	,rate: null
	,barkMapSize: null
	,amplitudeBits: null
	,amplitudeOffset: null
	,numberOfBooks: null
	,bookList: null
	,__class__: kha_audio2_ogg_vorbis_data_Floor0
};
var kha_audio2_ogg_vorbis_data_Floor1 = function() {
};
$hxClasses["kha.audio2.ogg.vorbis.data.Floor1"] = kha_audio2_ogg_vorbis_data_Floor1;
kha_audio2_ogg_vorbis_data_Floor1.__name__ = ["kha","audio2","ogg","vorbis","data","Floor1"];
kha_audio2_ogg_vorbis_data_Floor1.prototype = {
	partitions: null
	,partitionClassList: null
	,classDimensions: null
	,classSubclasses: null
	,classMasterbooks: null
	,subclassBooks: null
	,xlist: null
	,sortedOrder: null
	,neighbors: null
	,floor1Multiplier: null
	,rangebits: null
	,values: null
	,__class__: kha_audio2_ogg_vorbis_data_Floor1
};
var kha_audio2_ogg_vorbis_data_Header = function() {
};
$hxClasses["kha.audio2.ogg.vorbis.data.Header"] = kha_audio2_ogg_vorbis_data_Header;
kha_audio2_ogg_vorbis_data_Header.__name__ = ["kha","audio2","ogg","vorbis","data","Header"];
kha_audio2_ogg_vorbis_data_Header.read = function(decodeState) {
	var page = decodeState.page;
	page.start(decodeState);
	if((page.flag & 2) == 0) throw new js__$Boot_HaxeError(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_FIRST_PAGE,"not firstPage",{ fileName : "Header.hx", lineNumber : 46, className : "kha.audio2.ogg.vorbis.data.Header", methodName : "read"}));
	if((page.flag & 4) != 0) throw new js__$Boot_HaxeError(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_FIRST_PAGE,"lastPage",{ fileName : "Header.hx", lineNumber : 49, className : "kha.audio2.ogg.vorbis.data.Header", methodName : "read"}));
	if((page.flag & 1) != 0) throw new js__$Boot_HaxeError(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_FIRST_PAGE,"continuedPacket",{ fileName : "Header.hx", lineNumber : 52, className : "kha.audio2.ogg.vorbis.data.Header", methodName : "read"}));
	decodeState.firstPageValidate();
	if((function($this) {
		var $r;
		decodeState.inputPosition += 1;
		$r = decodeState.input.readByte();
		return $r;
	}(this)) != 1) throw new js__$Boot_HaxeError(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_FIRST_PAGE,"decodeState head",{ fileName : "Header.hx", lineNumber : 57, className : "kha.audio2.ogg.vorbis.data.Header", methodName : "read"}));
	decodeState.vorbisValidate();
	var version;
	decodeState.inputPosition += 4;
	version = decodeState.input.readInt32();
	if(version != 0) throw new js__$Boot_HaxeError(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_FIRST_PAGE,"vorbis version : " + version,{ fileName : "Header.hx", lineNumber : 66, className : "kha.audio2.ogg.vorbis.data.Header", methodName : "read"}));
	var header = new kha_audio2_ogg_vorbis_data_Header();
	decodeState.inputPosition += 1;
	header.channel = decodeState.input.readByte();
	if(header.channel == 0) throw new js__$Boot_HaxeError(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_FIRST_PAGE,"no channel",{ fileName : "Header.hx", lineNumber : 73, className : "kha.audio2.ogg.vorbis.data.Header", methodName : "read"})); else if(header.channel > 16) throw new js__$Boot_HaxeError(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.TOO_MANY_CHANNELS,"too many channels",{ fileName : "Header.hx", lineNumber : 75, className : "kha.audio2.ogg.vorbis.data.Header", methodName : "read"}));
	decodeState.inputPosition += 4;
	header.sampleRate = decodeState.input.readInt32();
	if(header.sampleRate == 0) throw new js__$Boot_HaxeError(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_FIRST_PAGE,"no sampling rate",{ fileName : "Header.hx", lineNumber : 80, className : "kha.audio2.ogg.vorbis.data.Header", methodName : "read"}));
	decodeState.inputPosition += 4;
	header.maximumBitRate = decodeState.input.readInt32();
	decodeState.inputPosition += 4;
	header.nominalBitRate = decodeState.input.readInt32();
	decodeState.inputPosition += 4;
	header.minimumBitRate = decodeState.input.readInt32();
	var x;
	decodeState.inputPosition += 1;
	x = decodeState.input.readByte();
	var log0 = x & 15;
	var log1 = x >> 4;
	header.blocksize0 = 1 << log0;
	header.blocksize1 = 1 << log1;
	if(log0 < 6 || log0 > 13) throw new js__$Boot_HaxeError(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP,null,{ fileName : "Header.hx", lineNumber : 93, className : "kha.audio2.ogg.vorbis.data.Header", methodName : "read"}));
	if(log1 < 6 || log1 > 13) throw new js__$Boot_HaxeError(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP,null,{ fileName : "Header.hx", lineNumber : 96, className : "kha.audio2.ogg.vorbis.data.Header", methodName : "read"}));
	if(log0 > log1) throw new js__$Boot_HaxeError(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP,null,{ fileName : "Header.hx", lineNumber : 99, className : "kha.audio2.ogg.vorbis.data.Header", methodName : "read"}));
	var x1;
	decodeState.inputPosition += 1;
	x1 = decodeState.input.readByte();
	if((x1 & 1) == 0) throw new js__$Boot_HaxeError(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_FIRST_PAGE,null,{ fileName : "Header.hx", lineNumber : 105, className : "kha.audio2.ogg.vorbis.data.Header", methodName : "read"}));
	decodeState.page.start(decodeState);
	decodeState.startPacket();
	var len = 0;
	var output = new haxe_io_BytesOutput();
	while((len = decodeState.next()) != 0) {
		output.write((function($this) {
			var $r;
			decodeState.inputPosition += len;
			$r = decodeState.input.read(len);
			return $r;
		}(this)));
		decodeState.bytesInSeg = 0;
	}
	var packetInput = new haxe_io_BytesInput(output.getBytes());
	packetInput.readByte();
	packetInput.read(6);
	var vendorLength = packetInput.readInt32();
	header.vendor = packetInput.readString(vendorLength);
	header.comment = new kha_audio2_ogg_vorbis_data_Comment();
	var commentCount = packetInput.readInt32();
	var _g = 0;
	while(_g < commentCount) {
		var i = _g++;
		var n = packetInput.readInt32();
		var str = packetInput.readString(n);
		var splitter = str.indexOf("=");
		if(splitter != -1) header.comment.add(str.substring(0,splitter),str.substring(splitter + 1));
	}
	var x2 = packetInput.readByte();
	if((x2 & 1) == 0) throw new js__$Boot_HaxeError(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP,null,{ fileName : "Header.hx", lineNumber : 141, className : "kha.audio2.ogg.vorbis.data.Header", methodName : "read"}));
	decodeState.startPacket();
	if(decodeState.readPacket() != 5) throw new js__$Boot_HaxeError(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP,"setup packet",{ fileName : "Header.hx", lineNumber : 149, className : "kha.audio2.ogg.vorbis.data.Header", methodName : "read"}));
	decodeState.vorbisValidate();
	var codebookCount = decodeState.readBits(8) + 1;
	var this1;
	this1 = new Array(codebookCount);
	header.codebooks = this1;
	var _g1 = 0;
	while(_g1 < codebookCount) {
		var i1 = _g1++;
		var val = kha_audio2_ogg_vorbis_data_Codebook.read(decodeState);
		header.codebooks[i1] = val;
	}
	x1 = decodeState.readBits(6) + 1;
	var _g2 = 0;
	while(_g2 < x1) {
		var i2 = _g2++;
		if(decodeState.readBits(16) != 0) throw new js__$Boot_HaxeError(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP,null,{ fileName : "Header.hx", lineNumber : 165, className : "kha.audio2.ogg.vorbis.data.Header", methodName : "read"}));
	}
	var floorCount = decodeState.readBits(6) + 1;
	var this2;
	this2 = new Array(floorCount);
	header.floorConfig = this2;
	var _g3 = 0;
	while(_g3 < floorCount) {
		var i3 = _g3++;
		var val1 = kha_audio2_ogg_vorbis_data_Floor.read(decodeState,header.codebooks);
		header.floorConfig[i3] = val1;
	}
	var residueCount = decodeState.readBits(6) + 1;
	var this3;
	this3 = new Array(residueCount);
	header.residueConfig = this3;
	var _g4 = 0;
	while(_g4 < residueCount) {
		var i4 = _g4++;
		var val2 = kha_audio2_ogg_vorbis_data_Residue.read(decodeState,header.codebooks);
		header.residueConfig[i4] = val2;
	}
	var mappingCount = decodeState.readBits(6) + 1;
	var this4;
	this4 = new Array(mappingCount);
	header.mapping = this4;
	var _g5 = 0;
	while(_g5 < mappingCount) {
		var i5 = _g5++;
		var map = kha_audio2_ogg_vorbis_data_Mapping.read(decodeState,header.channel);
		header.mapping[i5] = map;
		var _g21 = 0;
		var _g11 = map.submaps;
		while(_g21 < _g11) {
			var j = _g21++;
			if(map.submapFloor[j] >= header.floorConfig.length) throw new js__$Boot_HaxeError(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP,null,{ fileName : "Header.hx", lineNumber : 191, className : "kha.audio2.ogg.vorbis.data.Header", methodName : "read"}));
			if(map.submapResidue[j] >= header.residueConfig.length) throw new js__$Boot_HaxeError(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP,null,{ fileName : "Header.hx", lineNumber : 194, className : "kha.audio2.ogg.vorbis.data.Header", methodName : "read"}));
		}
	}
	var modeCount = decodeState.readBits(6) + 1;
	var this5;
	this5 = new Array(modeCount);
	header.modes = this5;
	var _g6 = 0;
	while(_g6 < modeCount) {
		var i6 = _g6++;
		var mode = kha_audio2_ogg_vorbis_data_Mode.read(decodeState);
		header.modes[i6] = mode;
		if(mode.mapping >= header.mapping.length) throw new js__$Boot_HaxeError(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP,null,{ fileName : "Header.hx", lineNumber : 205, className : "kha.audio2.ogg.vorbis.data.Header", methodName : "read"}));
	}
	while(decodeState.bytesInSeg != 0 || !decodeState.lastSeg && decodeState.next() != 0) {
		decodeState.bytesInSeg--;
		decodeState.inputPosition += 1;
		decodeState.input.readByte();
	}
	return header;
};
kha_audio2_ogg_vorbis_data_Header.prototype = {
	maximumBitRate: null
	,nominalBitRate: null
	,minimumBitRate: null
	,sampleRate: null
	,channel: null
	,blocksize0: null
	,blocksize1: null
	,codebooks: null
	,floorConfig: null
	,residueConfig: null
	,mapping: null
	,modes: null
	,comment: null
	,vendor: null
	,__class__: kha_audio2_ogg_vorbis_data_Header
};
var kha_audio2_ogg_vorbis_data_IntPoint = function() {
};
$hxClasses["kha.audio2.ogg.vorbis.data.IntPoint"] = kha_audio2_ogg_vorbis_data_IntPoint;
kha_audio2_ogg_vorbis_data_IntPoint.__name__ = ["kha","audio2","ogg","vorbis","data","IntPoint"];
kha_audio2_ogg_vorbis_data_IntPoint.prototype = {
	x: null
	,y: null
	,__class__: kha_audio2_ogg_vorbis_data_IntPoint
};
var kha_audio2_ogg_vorbis_data_Mapping = function() {
};
$hxClasses["kha.audio2.ogg.vorbis.data.Mapping"] = kha_audio2_ogg_vorbis_data_Mapping;
kha_audio2_ogg_vorbis_data_Mapping.__name__ = ["kha","audio2","ogg","vorbis","data","Mapping"];
kha_audio2_ogg_vorbis_data_Mapping.read = function(decodeState,channels) {
	var m = new kha_audio2_ogg_vorbis_data_Mapping();
	var mappingType = decodeState.readBits(16);
	if(mappingType != 0) throw new js__$Boot_HaxeError(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP,"mapping type " + mappingType,{ fileName : "Mapping.hx", lineNumber : 22, className : "kha.audio2.ogg.vorbis.data.Mapping", methodName : "read"}));
	var this1;
	this1 = new Array(channels);
	m.chan = this1;
	var _g = 0;
	while(_g < channels) {
		var j = _g++;
		var val = new kha_audio2_ogg_vorbis_data_MappingChannel();
		m.chan[j] = val;
	}
	if(decodeState.readBits(1) != 0) m.submaps = decodeState.readBits(4) + 1; else m.submaps = 1;
	if(decodeState.readBits(1) != 0) {
		m.couplingSteps = decodeState.readBits(8) + 1;
		var _g1 = 0;
		var _g2 = m.couplingSteps;
		while(_g1 < _g2) {
			var k = _g1++;
			m.chan[k].magnitude = decodeState.readBits(kha_audio2_ogg_tools_MathTools.ilog(channels - 1));
			m.chan[k].angle = decodeState.readBits(kha_audio2_ogg_tools_MathTools.ilog(channels - 1));
			if(m.chan[k].magnitude >= channels) throw new js__$Boot_HaxeError(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP,null,{ fileName : "Mapping.hx", lineNumber : 46, className : "kha.audio2.ogg.vorbis.data.Mapping", methodName : "read"}));
			if(m.chan[k].angle >= channels) throw new js__$Boot_HaxeError(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP,null,{ fileName : "Mapping.hx", lineNumber : 49, className : "kha.audio2.ogg.vorbis.data.Mapping", methodName : "read"}));
			if(m.chan[k].magnitude == m.chan[k].angle) throw new js__$Boot_HaxeError(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP,null,{ fileName : "Mapping.hx", lineNumber : 52, className : "kha.audio2.ogg.vorbis.data.Mapping", methodName : "read"}));
		}
	} else m.couplingSteps = 0;
	if(decodeState.readBits(2) != 0) throw new js__$Boot_HaxeError(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP,null,{ fileName : "Mapping.hx", lineNumber : 61, className : "kha.audio2.ogg.vorbis.data.Mapping", methodName : "read"}));
	if(m.submaps > 1) {
		var _g3 = 0;
		while(_g3 < channels) {
			var j1 = _g3++;
			m.chan[j1].mux = decodeState.readBits(4);
			if(m.chan[j1].mux >= m.submaps) throw new js__$Boot_HaxeError(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP,null,{ fileName : "Mapping.hx", lineNumber : 67, className : "kha.audio2.ogg.vorbis.data.Mapping", methodName : "read"}));
		}
	} else {
		var _g4 = 0;
		while(_g4 < channels) {
			var j2 = _g4++;
			m.chan[j2].mux = 0;
		}
	}
	var this2;
	this2 = new Array(m.submaps);
	m.submapFloor = this2;
	var this3;
	this3 = new Array(m.submaps);
	m.submapResidue = this3;
	var _g11 = 0;
	var _g5 = m.submaps;
	while(_g11 < _g5) {
		var j3 = _g11++;
		decodeState.readBits(8);
		var val1 = decodeState.readBits(8);
		m.submapFloor[j3] = val1;
		var val2 = decodeState.readBits(8);
		m.submapResidue[j3] = val2;
	}
	return m;
};
kha_audio2_ogg_vorbis_data_Mapping.prototype = {
	couplingSteps: null
	,chan: null
	,submaps: null
	,submapFloor: null
	,submapResidue: null
	,doFloor: function(floors,i,n,target,finalY,step2Flag) {
		var n2 = n >> 1;
		var s = this.chan[i].mux;
		var floor;
		var floor1 = floors[this.submapFloor[s]];
		if(floor1.type == 0) throw new js__$Boot_HaxeError(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_STREAM,null,{ fileName : "Mapping.hx", lineNumber : 94, className : "kha.audio2.ogg.vorbis.data.Mapping", methodName : "doFloor"})); else {
			var g = floor1.floor1;
			var lx = 0;
			var ly = finalY[0] * g.floor1Multiplier;
			var _g1 = 1;
			var _g = g.values;
			while(_g1 < _g) {
				var q = _g1++;
				var j = g.sortedOrder[q];
				if(finalY[j] >= 0) {
					var hy = finalY[j] * g.floor1Multiplier;
					var hx = g.xlist[j];
					kha_audio2_ogg_vorbis_VorbisTools.drawLine(target,lx,ly,hx,hy,n2);
					lx = hx;
					ly = hy;
				}
			}
			if(lx < n2) {
				var _g2 = lx;
				while(_g2 < n2) {
					var j1 = _g2++;
					var _g11 = j1;
					target[_g11] = target[_g11] * kha_audio2_ogg_vorbis_VorbisTools.INVERSE_DB_TABLE[ly];
				}
			}
		}
	}
	,__class__: kha_audio2_ogg_vorbis_data_Mapping
};
var kha_audio2_ogg_vorbis_data_MappingChannel = function() {
};
$hxClasses["kha.audio2.ogg.vorbis.data.MappingChannel"] = kha_audio2_ogg_vorbis_data_MappingChannel;
kha_audio2_ogg_vorbis_data_MappingChannel.__name__ = ["kha","audio2","ogg","vorbis","data","MappingChannel"];
kha_audio2_ogg_vorbis_data_MappingChannel.prototype = {
	magnitude: null
	,angle: null
	,mux: null
	,__class__: kha_audio2_ogg_vorbis_data_MappingChannel
};
var kha_audio2_ogg_vorbis_data_Mode = function() {
};
$hxClasses["kha.audio2.ogg.vorbis.data.Mode"] = kha_audio2_ogg_vorbis_data_Mode;
kha_audio2_ogg_vorbis_data_Mode.__name__ = ["kha","audio2","ogg","vorbis","data","Mode"];
kha_audio2_ogg_vorbis_data_Mode.read = function(decodeState) {
	var m = new kha_audio2_ogg_vorbis_data_Mode();
	m.blockflag = decodeState.readBits(1) != 0;
	m.windowtype = decodeState.readBits(16);
	m.transformtype = decodeState.readBits(16);
	m.mapping = decodeState.readBits(8);
	if(m.windowtype != 0) throw new js__$Boot_HaxeError(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP,null,{ fileName : "Mode.hx", lineNumber : 22, className : "kha.audio2.ogg.vorbis.data.Mode", methodName : "read"}));
	if(m.transformtype != 0) throw new js__$Boot_HaxeError(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP,null,{ fileName : "Mode.hx", lineNumber : 25, className : "kha.audio2.ogg.vorbis.data.Mode", methodName : "read"}));
	return m;
};
kha_audio2_ogg_vorbis_data_Mode.prototype = {
	blockflag: null
	,mapping: null
	,windowtype: null
	,transformtype: null
	,__class__: kha_audio2_ogg_vorbis_data_Mode
};
var kha_audio2_ogg_vorbis_data_Page = function() {
};
$hxClasses["kha.audio2.ogg.vorbis.data.Page"] = kha_audio2_ogg_vorbis_data_Page;
kha_audio2_ogg_vorbis_data_Page.__name__ = ["kha","audio2","ogg","vorbis","data","Page"];
kha_audio2_ogg_vorbis_data_Page.prototype = {
	flag: null
	,clone: function() {
		var page = new kha_audio2_ogg_vorbis_data_Page();
		page.flag = this.flag;
		return page;
	}
	,start: function(decodeState) {
		if((function($this) {
			var $r;
			decodeState.inputPosition += 1;
			$r = decodeState.input.readByte();
			return $r;
		}(this)) != 79 || (function($this) {
			var $r;
			decodeState.inputPosition += 1;
			$r = decodeState.input.readByte();
			return $r;
		}(this)) != 103 || (function($this) {
			var $r;
			decodeState.inputPosition += 1;
			$r = decodeState.input.readByte();
			return $r;
		}(this)) != 103 || (function($this) {
			var $r;
			decodeState.inputPosition += 1;
			$r = decodeState.input.readByte();
			return $r;
		}(this)) != 83) throw new js__$Boot_HaxeError(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.MISSING_CAPTURE_PATTERN,null,{ fileName : "VorbisDecodeState.hx", lineNumber : 323, className : "kha.audio2.ogg.vorbis.VorbisDecodeState", methodName : "capturePattern"}));
		this.startWithoutCapturePattern(decodeState);
	}
	,startWithoutCapturePattern: function(decodeState) {
		var version;
		decodeState.inputPosition += 1;
		version = decodeState.input.readByte();
		if(version != 0) throw new js__$Boot_HaxeError(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_STREAM_STRUCTURE_VERSION,"" + version,{ fileName : "Page.hx", lineNumber : 34, className : "kha.audio2.ogg.vorbis.data.Page", methodName : "startWithoutCapturePattern"}));
		decodeState.inputPosition += 1;
		this.flag = decodeState.input.readByte();
		var loc0;
		decodeState.inputPosition += 4;
		loc0 = decodeState.input.readInt32();
		var loc1;
		decodeState.inputPosition += 4;
		loc1 = decodeState.input.readInt32();
		decodeState.inputPosition += 4;
		decodeState.input.readInt32();
		decodeState.inputPosition += 4;
		decodeState.input.readInt32();
		decodeState.inputPosition += 4;
		decodeState.input.readInt32();
		decodeState.setup(loc0,loc1);
	}
	,__class__: kha_audio2_ogg_vorbis_data_Page
};
var kha_audio2_ogg_vorbis_data_PageFlag = function() { };
$hxClasses["kha.audio2.ogg.vorbis.data.PageFlag"] = kha_audio2_ogg_vorbis_data_PageFlag;
kha_audio2_ogg_vorbis_data_PageFlag.__name__ = ["kha","audio2","ogg","vorbis","data","PageFlag"];
var kha_audio2_ogg_vorbis_data_ProbedPage = function() {
};
$hxClasses["kha.audio2.ogg.vorbis.data.ProbedPage"] = kha_audio2_ogg_vorbis_data_ProbedPage;
kha_audio2_ogg_vorbis_data_ProbedPage.__name__ = ["kha","audio2","ogg","vorbis","data","ProbedPage"];
kha_audio2_ogg_vorbis_data_ProbedPage.prototype = {
	pageStart: null
	,pageEnd: null
	,afterPreviousPageStart: null
	,firstDecodedSample: null
	,lastDecodedSample: null
	,__class__: kha_audio2_ogg_vorbis_data_ProbedPage
};
var kha_audio2_ogg_vorbis_data_ReaderError = function(type,message,posInfos) {
	if(message == null) message = "";
	this.type = type;
	this.message = message;
	this.posInfos = posInfos;
};
$hxClasses["kha.audio2.ogg.vorbis.data.ReaderError"] = kha_audio2_ogg_vorbis_data_ReaderError;
kha_audio2_ogg_vorbis_data_ReaderError.__name__ = ["kha","audio2","ogg","vorbis","data","ReaderError"];
kha_audio2_ogg_vorbis_data_ReaderError.prototype = {
	type: null
	,message: null
	,posInfos: null
	,__class__: kha_audio2_ogg_vorbis_data_ReaderError
};
var kha_audio2_ogg_vorbis_data_ReaderErrorType = $hxClasses["kha.audio2.ogg.vorbis.data.ReaderErrorType"] = { __ename__ : ["kha","audio2","ogg","vorbis","data","ReaderErrorType"], __constructs__ : ["NEED_MORE_DATA","INVALID_API_MIXING","OUTOFMEM","FEATURE_NOT_SUPPORTED","TOO_MANY_CHANNELS","FILE_OPEN_FAILURE","SEEK_WITHOUT_LENGTH","UNEXPECTED_EOF","SEEK_INVALID","INVALID_SETUP","INVALID_STREAM","MISSING_CAPTURE_PATTERN","INVALID_STREAM_STRUCTURE_VERSION","CONTINUED_PACKET_FLAG_INVALID","INCORRECT_STREAM_SERIAL_NUMBER","INVALID_FIRST_PAGE","BAD_PACKET_TYPE","CANT_FIND_LAST_PAGE","SEEK_FAILED","OTHER"] };
kha_audio2_ogg_vorbis_data_ReaderErrorType.NEED_MORE_DATA = ["NEED_MORE_DATA",0];
kha_audio2_ogg_vorbis_data_ReaderErrorType.NEED_MORE_DATA.toString = $estr;
kha_audio2_ogg_vorbis_data_ReaderErrorType.NEED_MORE_DATA.__enum__ = kha_audio2_ogg_vorbis_data_ReaderErrorType;
kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_API_MIXING = ["INVALID_API_MIXING",1];
kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_API_MIXING.toString = $estr;
kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_API_MIXING.__enum__ = kha_audio2_ogg_vorbis_data_ReaderErrorType;
kha_audio2_ogg_vorbis_data_ReaderErrorType.OUTOFMEM = ["OUTOFMEM",2];
kha_audio2_ogg_vorbis_data_ReaderErrorType.OUTOFMEM.toString = $estr;
kha_audio2_ogg_vorbis_data_ReaderErrorType.OUTOFMEM.__enum__ = kha_audio2_ogg_vorbis_data_ReaderErrorType;
kha_audio2_ogg_vorbis_data_ReaderErrorType.FEATURE_NOT_SUPPORTED = ["FEATURE_NOT_SUPPORTED",3];
kha_audio2_ogg_vorbis_data_ReaderErrorType.FEATURE_NOT_SUPPORTED.toString = $estr;
kha_audio2_ogg_vorbis_data_ReaderErrorType.FEATURE_NOT_SUPPORTED.__enum__ = kha_audio2_ogg_vorbis_data_ReaderErrorType;
kha_audio2_ogg_vorbis_data_ReaderErrorType.TOO_MANY_CHANNELS = ["TOO_MANY_CHANNELS",4];
kha_audio2_ogg_vorbis_data_ReaderErrorType.TOO_MANY_CHANNELS.toString = $estr;
kha_audio2_ogg_vorbis_data_ReaderErrorType.TOO_MANY_CHANNELS.__enum__ = kha_audio2_ogg_vorbis_data_ReaderErrorType;
kha_audio2_ogg_vorbis_data_ReaderErrorType.FILE_OPEN_FAILURE = ["FILE_OPEN_FAILURE",5];
kha_audio2_ogg_vorbis_data_ReaderErrorType.FILE_OPEN_FAILURE.toString = $estr;
kha_audio2_ogg_vorbis_data_ReaderErrorType.FILE_OPEN_FAILURE.__enum__ = kha_audio2_ogg_vorbis_data_ReaderErrorType;
kha_audio2_ogg_vorbis_data_ReaderErrorType.SEEK_WITHOUT_LENGTH = ["SEEK_WITHOUT_LENGTH",6];
kha_audio2_ogg_vorbis_data_ReaderErrorType.SEEK_WITHOUT_LENGTH.toString = $estr;
kha_audio2_ogg_vorbis_data_ReaderErrorType.SEEK_WITHOUT_LENGTH.__enum__ = kha_audio2_ogg_vorbis_data_ReaderErrorType;
kha_audio2_ogg_vorbis_data_ReaderErrorType.UNEXPECTED_EOF = ["UNEXPECTED_EOF",7];
kha_audio2_ogg_vorbis_data_ReaderErrorType.UNEXPECTED_EOF.toString = $estr;
kha_audio2_ogg_vorbis_data_ReaderErrorType.UNEXPECTED_EOF.__enum__ = kha_audio2_ogg_vorbis_data_ReaderErrorType;
kha_audio2_ogg_vorbis_data_ReaderErrorType.SEEK_INVALID = ["SEEK_INVALID",8];
kha_audio2_ogg_vorbis_data_ReaderErrorType.SEEK_INVALID.toString = $estr;
kha_audio2_ogg_vorbis_data_ReaderErrorType.SEEK_INVALID.__enum__ = kha_audio2_ogg_vorbis_data_ReaderErrorType;
kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP = ["INVALID_SETUP",9];
kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP.toString = $estr;
kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP.__enum__ = kha_audio2_ogg_vorbis_data_ReaderErrorType;
kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_STREAM = ["INVALID_STREAM",10];
kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_STREAM.toString = $estr;
kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_STREAM.__enum__ = kha_audio2_ogg_vorbis_data_ReaderErrorType;
kha_audio2_ogg_vorbis_data_ReaderErrorType.MISSING_CAPTURE_PATTERN = ["MISSING_CAPTURE_PATTERN",11];
kha_audio2_ogg_vorbis_data_ReaderErrorType.MISSING_CAPTURE_PATTERN.toString = $estr;
kha_audio2_ogg_vorbis_data_ReaderErrorType.MISSING_CAPTURE_PATTERN.__enum__ = kha_audio2_ogg_vorbis_data_ReaderErrorType;
kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_STREAM_STRUCTURE_VERSION = ["INVALID_STREAM_STRUCTURE_VERSION",12];
kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_STREAM_STRUCTURE_VERSION.toString = $estr;
kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_STREAM_STRUCTURE_VERSION.__enum__ = kha_audio2_ogg_vorbis_data_ReaderErrorType;
kha_audio2_ogg_vorbis_data_ReaderErrorType.CONTINUED_PACKET_FLAG_INVALID = ["CONTINUED_PACKET_FLAG_INVALID",13];
kha_audio2_ogg_vorbis_data_ReaderErrorType.CONTINUED_PACKET_FLAG_INVALID.toString = $estr;
kha_audio2_ogg_vorbis_data_ReaderErrorType.CONTINUED_PACKET_FLAG_INVALID.__enum__ = kha_audio2_ogg_vorbis_data_ReaderErrorType;
kha_audio2_ogg_vorbis_data_ReaderErrorType.INCORRECT_STREAM_SERIAL_NUMBER = ["INCORRECT_STREAM_SERIAL_NUMBER",14];
kha_audio2_ogg_vorbis_data_ReaderErrorType.INCORRECT_STREAM_SERIAL_NUMBER.toString = $estr;
kha_audio2_ogg_vorbis_data_ReaderErrorType.INCORRECT_STREAM_SERIAL_NUMBER.__enum__ = kha_audio2_ogg_vorbis_data_ReaderErrorType;
kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_FIRST_PAGE = ["INVALID_FIRST_PAGE",15];
kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_FIRST_PAGE.toString = $estr;
kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_FIRST_PAGE.__enum__ = kha_audio2_ogg_vorbis_data_ReaderErrorType;
kha_audio2_ogg_vorbis_data_ReaderErrorType.BAD_PACKET_TYPE = ["BAD_PACKET_TYPE",16];
kha_audio2_ogg_vorbis_data_ReaderErrorType.BAD_PACKET_TYPE.toString = $estr;
kha_audio2_ogg_vorbis_data_ReaderErrorType.BAD_PACKET_TYPE.__enum__ = kha_audio2_ogg_vorbis_data_ReaderErrorType;
kha_audio2_ogg_vorbis_data_ReaderErrorType.CANT_FIND_LAST_PAGE = ["CANT_FIND_LAST_PAGE",17];
kha_audio2_ogg_vorbis_data_ReaderErrorType.CANT_FIND_LAST_PAGE.toString = $estr;
kha_audio2_ogg_vorbis_data_ReaderErrorType.CANT_FIND_LAST_PAGE.__enum__ = kha_audio2_ogg_vorbis_data_ReaderErrorType;
kha_audio2_ogg_vorbis_data_ReaderErrorType.SEEK_FAILED = ["SEEK_FAILED",18];
kha_audio2_ogg_vorbis_data_ReaderErrorType.SEEK_FAILED.toString = $estr;
kha_audio2_ogg_vorbis_data_ReaderErrorType.SEEK_FAILED.__enum__ = kha_audio2_ogg_vorbis_data_ReaderErrorType;
kha_audio2_ogg_vorbis_data_ReaderErrorType.OTHER = ["OTHER",19];
kha_audio2_ogg_vorbis_data_ReaderErrorType.OTHER.toString = $estr;
kha_audio2_ogg_vorbis_data_ReaderErrorType.OTHER.__enum__ = kha_audio2_ogg_vorbis_data_ReaderErrorType;
var kha_audio2_ogg_vorbis_data_Residue = function() {
};
$hxClasses["kha.audio2.ogg.vorbis.data.Residue"] = kha_audio2_ogg_vorbis_data_Residue;
kha_audio2_ogg_vorbis_data_Residue.__name__ = ["kha","audio2","ogg","vorbis","data","Residue"];
kha_audio2_ogg_vorbis_data_Residue.read = function(decodeState,codebooks) {
	var r = new kha_audio2_ogg_vorbis_data_Residue();
	r.type = decodeState.readBits(16);
	if(r.type > 2) throw new js__$Boot_HaxeError(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP,null,{ fileName : "Residue.hx", lineNumber : 29, className : "kha.audio2.ogg.vorbis.data.Residue", methodName : "read"}));
	var residueCascade;
	var this1;
	this1 = new Array(64);
	residueCascade = this1;
	r.begin = decodeState.readBits(24);
	r.end = decodeState.readBits(24);
	r.partSize = decodeState.readBits(24) + 1;
	var classifications = r.classifications = decodeState.readBits(6) + 1;
	r.classbook = decodeState.readBits(8);
	var _g1 = 0;
	var _g = r.classifications;
	while(_g1 < _g) {
		var j = _g1++;
		var highBits = 0;
		var lowBits = decodeState.readBits(3);
		if(decodeState.readBits(1) != 0) highBits = decodeState.readBits(5);
		residueCascade[j] = highBits * 8 + lowBits;
	}
	var this2;
	this2 = new Array(r.classifications);
	r.residueBooks = this2;
	var _g11 = 0;
	var _g2 = r.classifications;
	while(_g11 < _g2) {
		var j1 = _g11++;
		var val;
		var this3;
		this3 = new Array(8);
		val = this3;
		r.residueBooks[j1] = val;
		var _g21 = 0;
		while(_g21 < 8) {
			var k = _g21++;
			if((residueCascade[j1] & 1 << k) != 0) {
				var val1 = decodeState.readBits(8);
				r.residueBooks[j1][k] = val1;
				if(r.residueBooks[j1][k] >= codebooks.length) throw new js__$Boot_HaxeError(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP,null,{ fileName : "Residue.hx", lineNumber : 55, className : "kha.audio2.ogg.vorbis.data.Residue", methodName : "read"}));
			} else r.residueBooks[j1][k] = -1;
		}
	}
	var el = codebooks[r.classbook].entries;
	var classwords = codebooks[r.classbook].dimensions;
	var this4;
	this4 = new Array(el);
	r.classdata = this4;
	var _g3 = 0;
	while(_g3 < el) {
		var j2 = _g3++;
		var temp = j2;
		var k1 = classwords;
		var cd;
		var val2;
		var this5;
		this5 = new Array(classwords);
		val2 = this5;
		cd = r.classdata[j2] = val2;
		while(--k1 >= 0) {
			cd[k1] = temp % classifications;
			temp = temp / classifications | 0;
		}
	}
	return r;
};
kha_audio2_ogg_vorbis_data_Residue.prototype = {
	begin: null
	,end: null
	,partSize: null
	,classifications: null
	,classbook: null
	,classdata: null
	,residueBooks: null
	,type: null
	,decode: function(decodeState,header,residueBuffers,ch,n,doNotDecode,channelBuffers) {
		var codebooks = header.codebooks;
		var classwords = codebooks[this.classbook].dimensions;
		var nRead = this.end - this.begin;
		var partSize = this.partSize;
		var partRead = Std["int"](_$UInt_UInt_$Impl_$.toFloat(nRead) / _$UInt_UInt_$Impl_$.toFloat(partSize));
		var classifications;
		var this1;
		this1 = new Array(header.channel * partRead + 1);
		classifications = this1;
		var _g = 0;
		while(_g < ch) {
			var i = _g++;
			if(!doNotDecode[i]) {
				var buffer = residueBuffers[i];
				var _g2 = 0;
				var _g1 = buffer.length;
				while(_g2 < _g1) {
					var j = _g2++;
					buffer[j] = 0;
				}
			}
		}
		if(this.type == 2 && ch != 1) {
			var _g3 = 0;
			while(_g3 < ch) {
				var j1 = _g3++;
				if(!doNotDecode[j1]) break; else if(j1 == ch - 1) return;
			}
			var _g4 = 0;
			while(_g4 < 8) {
				var pass = _g4++;
				var pcount = 0;
				var classSet = 0;
				if(ch == 2) while(pcount < partRead) {
					var z = this.begin + pcount * partSize;
					var cInter = z & 1;
					var pInter = z >>> 1;
					if(pass == 0) {
						var c = codebooks[this.classbook];
						var q = decodeState.decode(c);
						if(q == -1) return;
						var i1 = classwords;
						while(--i1 >= 0) {
							classifications[i1 + pcount] = q % this.classifications;
							q = q / this.classifications | 0;
						}
					}
					var _g11 = 0;
					while(_g11 < classwords) {
						var i2 = _g11++;
						if(pcount >= partRead) break;
						var z1 = this.begin + pcount * partSize;
						var c1 = classifications[pcount];
						var b = this.residueBooks[c1][pass];
						if(b >= 0) {
							var book = codebooks[b];
							var result = book.decodeDeinterleaveRepeat(decodeState,residueBuffers,ch,cInter,pInter,n,partSize);
							if(result == null) return; else {
								cInter = result.cInter;
								pInter = result.pInter;
							}
							null;
						} else {
							z1 = z1 + partSize;
							cInter = z1 & 1;
							pInter = z1 >>> 1;
						}
						++pcount;
					}
					null;
				} else if(ch == 1) while(pcount < partRead) {
					var z2 = this.begin + pcount * partSize;
					var cInter1 = 0;
					var pInter1 = z2;
					if(pass == 0) {
						var c2 = codebooks[this.classbook];
						var q1 = decodeState.decode(c2);
						if(q1 == -1) return;
						var i3 = classwords;
						while(--i3 >= 0) {
							classifications[i3 + pcount] = q1 % this.classifications;
							q1 = q1 / this.classifications | 0;
						}
					}
					var _g12 = 0;
					while(_g12 < classwords) {
						var i4 = _g12++;
						if(pcount >= partRead) break;
						var z3 = this.begin + pcount * partSize;
						var b1 = this.residueBooks[classifications[pcount]][pass];
						if(b1 >= 0) {
							var book1 = codebooks[b1];
							var result1 = book1.decodeDeinterleaveRepeat(decodeState,residueBuffers,ch,cInter1,pInter1,n,partSize);
							if(result1 == null) return; else {
								cInter1 = result1.cInter;
								pInter1 = result1.pInter;
							}
							null;
						} else {
							z3 = z3 + partSize;
							cInter1 = 0;
							pInter1 = z3;
						}
						++pcount;
					}
				} else while(pcount < partRead) {
					var z4 = this.begin + pcount * partSize;
					var cInter2 = Std["int"](_$UInt_UInt_$Impl_$.toFloat(z4) % _$UInt_UInt_$Impl_$.toFloat(ch));
					var pInter2 = Std["int"](_$UInt_UInt_$Impl_$.toFloat(z4) / _$UInt_UInt_$Impl_$.toFloat(ch));
					if(pass == 0) {
						var c3 = codebooks[this.classbook];
						var q2 = decodeState.decode(c3);
						if(q2 == -1) return;
						var i5 = classwords;
						while(--i5 >= 0) {
							classifications[i5 + pcount] = q2 % this.classifications;
							q2 = q2 / this.classifications | 0;
						}
					}
					var _g13 = 0;
					while(_g13 < classwords) {
						var i6 = _g13++;
						if(pcount >= partRead) break;
						var z5 = this.begin + pcount * partSize;
						var b2 = this.residueBooks[classifications[pcount]][pass];
						if(b2 >= 0) {
							var book2 = codebooks[b2];
							var result2 = book2.decodeDeinterleaveRepeat(decodeState,residueBuffers,ch,cInter2,pInter2,n,partSize);
							if(result2 == null) return; else {
								cInter2 = result2.cInter;
								pInter2 = result2.pInter;
							}
							null;
						} else {
							z5 = z5 + partSize;
							cInter2 = Std["int"](_$UInt_UInt_$Impl_$.toFloat(z5) % _$UInt_UInt_$Impl_$.toFloat(ch));
							pInter2 = Std["int"](_$UInt_UInt_$Impl_$.toFloat(z5) / _$UInt_UInt_$Impl_$.toFloat(ch));
						}
						++pcount;
					}
				}
			}
			return;
		}
		var _g5 = 0;
		while(_g5 < 8) {
			var pass1 = _g5++;
			var pcount1 = 0;
			var classSet1 = 0;
			while(pcount1 < partRead) {
				if(pass1 == 0) {
					var _g14 = 0;
					while(_g14 < ch) {
						var j2 = _g14++;
						if(!doNotDecode[j2]) {
							var c4 = codebooks[this.classbook];
							var temp = decodeState.decode(c4);
							if(temp == -1) return;
							var i7 = classwords;
							while(--i7 >= 0) {
								classifications[j2 * partRead + i7 + pcount1] = temp % this.classifications;
								temp = temp / this.classifications | 0;
							}
						}
					}
				}
				var _g15 = 0;
				while(_g15 < classwords) {
					var i8 = _g15++;
					if(pcount1 >= partRead) break;
					var _g21 = 0;
					while(_g21 < ch) {
						var j3 = _g21++;
						if(!doNotDecode[j3]) {
							var c5 = classifications[j3 * partRead + pcount1];
							var b3 = this.residueBooks[c5][pass1];
							if(b3 >= 0) {
								var target = residueBuffers[j3];
								var offset = this.begin + pcount1 * partSize;
								var n1 = partSize;
								var book3 = codebooks[b3];
								if(!book3.residueDecode(decodeState,target,offset,n1,this.type)) return;
							}
						}
					}
					++pcount1;
				}
			}
		}
	}
	,__class__: kha_audio2_ogg_vorbis_data_Residue
};
var kha_audio2_ogg_vorbis_data_Setting = function() { };
$hxClasses["kha.audio2.ogg.vorbis.data.Setting"] = kha_audio2_ogg_vorbis_data_Setting;
kha_audio2_ogg_vorbis_data_Setting.__name__ = ["kha","audio2","ogg","vorbis","data","Setting"];
var kha_graphics1_Graphics = function() { };
$hxClasses["kha.graphics1.Graphics"] = kha_graphics1_Graphics;
kha_graphics1_Graphics.__name__ = ["kha","graphics1","Graphics"];
kha_graphics1_Graphics.prototype = {
	begin: null
	,end: null
	,setPixel: null
	,__class__: kha_graphics1_Graphics
};
var kha_graphics2_Graphics = function() {
	this.transformations = [];
	this.transformations.push(new kha_math_FastMatrix3(1,0,0,0,1,0,0,0,1));
	this.opacities = [];
	this.opacities.push(1);
	this.myFontSize = 12;
	this.pipe = null;
};
$hxClasses["kha.graphics2.Graphics"] = kha_graphics2_Graphics;
kha_graphics2_Graphics.__name__ = ["kha","graphics2","Graphics"];
kha_graphics2_Graphics.prototype = {
	begin: function(clear,clearColor) {
		if(clear == null) clear = true;
	}
	,end: function() {
	}
	,flush: function() {
	}
	,clear: function(color) {
	}
	,drawImage: function(img,x,y) {
		this.drawSubImage(img,x,y,0,0,img.get_width(),img.get_height());
	}
	,drawSubImage: function(img,x,y,sx,sy,sw,sh) {
		this.drawScaledSubImage(img,sx,sy,sw,sh,x,y,sw,sh);
	}
	,drawScaledImage: function(img,dx,dy,dw,dh) {
		this.drawScaledSubImage(img,0,0,img.get_width(),img.get_height(),dx,dy,dw,dh);
	}
	,drawScaledSubImage: function(image,sx,sy,sw,sh,dx,dy,dw,dh) {
	}
	,drawRect: function(x,y,width,height,strength) {
		if(strength == null) strength = 1.0;
	}
	,fillRect: function(x,y,width,height) {
	}
	,drawString: function(text,x,y) {
	}
	,drawLine: function(x1,y1,x2,y2,strength) {
		if(strength == null) strength = 1.0;
	}
	,drawVideo: function(video,x,y,width,height) {
	}
	,fillTriangle: function(x1,y1,x2,y2,x3,y3) {
	}
	,get_imageScaleQuality: function() {
		return kha_graphics2_ImageScaleQuality.Low;
	}
	,set_imageScaleQuality: function(value) {
		return kha_graphics2_ImageScaleQuality.High;
	}
	,get_color: function() {
		return kha__$Color_Color_$Impl_$.Black;
	}
	,set_color: function(color) {
		return kha__$Color_Color_$Impl_$.Black;
	}
	,get_font: function() {
		return null;
	}
	,set_font: function(font) {
		return null;
	}
	,get_fontSize: function() {
		return this.myFontSize;
	}
	,set_fontSize: function(value) {
		return this.myFontSize = value;
	}
	,pushTransformation: function(transformation) {
		this.setTransformation(transformation);
		this.transformations.push(transformation);
	}
	,popTransformation: function() {
		var ret = this.transformations.pop();
		this.setTransformation(this.transformations[this.transformations.length - 1]);
		return ret;
	}
	,get_transformation: function() {
		return this.transformations[this.transformations.length - 1];
	}
	,set_transformation: function(transformation) {
		this.setTransformation(transformation);
		return this.transformations[this.transformations.length - 1] = transformation;
	}
	,translation: function(tx,ty) {
		var _this__00 = 1;
		var _this__10 = 0;
		var _this__20 = tx;
		var _this__01 = 0;
		var _this__11 = 1;
		var _this__21 = ty;
		var _this__02 = 0;
		var _this__12 = 0;
		var _this__22 = 1;
		var m = this.transformations[this.transformations.length - 1];
		return new kha_math_FastMatrix3(_this__00 * m._00 + _this__10 * m._01 + _this__20 * m._02,_this__00 * m._10 + _this__10 * m._11 + _this__20 * m._12,_this__00 * m._20 + _this__10 * m._21 + _this__20 * m._22,_this__01 * m._00 + _this__11 * m._01 + _this__21 * m._02,_this__01 * m._10 + _this__11 * m._11 + _this__21 * m._12,_this__01 * m._20 + _this__11 * m._21 + _this__21 * m._22,_this__02 * m._00 + _this__12 * m._01 + _this__22 * m._02,_this__02 * m._10 + _this__12 * m._11 + _this__22 * m._12,_this__02 * m._20 + _this__12 * m._21 + _this__22 * m._22);
	}
	,translate: function(tx,ty) {
		this.set_transformation(this.translation(tx,ty));
	}
	,pushTranslation: function(tx,ty) {
		this.pushTransformation(this.translation(tx,ty));
	}
	,rotation: function(angle,centerx,centery) {
		var _this__00 = 1;
		var _this__10 = 0;
		var _this__20 = centerx;
		var _this__01 = 0;
		var _this__11 = 1;
		var _this__21 = centery;
		var _this__02 = 0;
		var _this__12 = 0;
		var _this__22 = 1;
		var m = new kha_math_FastMatrix3(Math.cos(angle),-Math.sin(angle),0,Math.sin(angle),Math.cos(angle),0,0,0,1);
		var _this__001 = _this__00 * m._00 + _this__10 * m._01 + _this__20 * m._02;
		var _this__101 = _this__00 * m._10 + _this__10 * m._11 + _this__20 * m._12;
		var _this__201 = _this__00 * m._20 + _this__10 * m._21 + _this__20 * m._22;
		var _this__011 = _this__01 * m._00 + _this__11 * m._01 + _this__21 * m._02;
		var _this__111 = _this__01 * m._10 + _this__11 * m._11 + _this__21 * m._12;
		var _this__211 = _this__01 * m._20 + _this__11 * m._21 + _this__21 * m._22;
		var _this__021 = _this__02 * m._00 + _this__12 * m._01 + _this__22 * m._02;
		var _this__121 = _this__02 * m._10 + _this__12 * m._11 + _this__22 * m._12;
		var _this__221 = _this__02 * m._20 + _this__12 * m._21 + _this__22 * m._22;
		var m__00 = 1;
		var m__10 = 0;
		var m__20 = -centerx;
		var m__01 = 0;
		var m__11 = 1;
		var m__21 = -centery;
		var m__02 = 0;
		var m__12 = 0;
		var m__22 = 1;
		var _this__002 = _this__001 * m__00 + _this__101 * m__01 + _this__201 * m__02;
		var _this__102 = _this__001 * m__10 + _this__101 * m__11 + _this__201 * m__12;
		var _this__202 = _this__001 * m__20 + _this__101 * m__21 + _this__201 * m__22;
		var _this__012 = _this__011 * m__00 + _this__111 * m__01 + _this__211 * m__02;
		var _this__112 = _this__011 * m__10 + _this__111 * m__11 + _this__211 * m__12;
		var _this__212 = _this__011 * m__20 + _this__111 * m__21 + _this__211 * m__22;
		var _this__022 = _this__021 * m__00 + _this__121 * m__01 + _this__221 * m__02;
		var _this__122 = _this__021 * m__10 + _this__121 * m__11 + _this__221 * m__12;
		var _this__222 = _this__021 * m__20 + _this__121 * m__21 + _this__221 * m__22;
		var m1 = this.transformations[this.transformations.length - 1];
		return new kha_math_FastMatrix3(_this__002 * m1._00 + _this__102 * m1._01 + _this__202 * m1._02,_this__002 * m1._10 + _this__102 * m1._11 + _this__202 * m1._12,_this__002 * m1._20 + _this__102 * m1._21 + _this__202 * m1._22,_this__012 * m1._00 + _this__112 * m1._01 + _this__212 * m1._02,_this__012 * m1._10 + _this__112 * m1._11 + _this__212 * m1._12,_this__012 * m1._20 + _this__112 * m1._21 + _this__212 * m1._22,_this__022 * m1._00 + _this__122 * m1._01 + _this__222 * m1._02,_this__022 * m1._10 + _this__122 * m1._11 + _this__222 * m1._12,_this__022 * m1._20 + _this__122 * m1._21 + _this__222 * m1._22);
	}
	,rotate: function(angle,centerx,centery) {
		this.set_transformation(this.rotation(angle,centerx,centery));
	}
	,pushRotation: function(angle,centerx,centery) {
		this.pushTransformation(this.rotation(angle,centerx,centery));
	}
	,pushOpacity: function(opacity) {
		this.setOpacity(opacity);
		this.opacities.push(opacity);
	}
	,popOpacity: function() {
		var ret = this.opacities.pop();
		this.setOpacity(this.get_opacity());
		return ret;
	}
	,get_opacity: function() {
		return this.opacities[this.opacities.length - 1];
	}
	,set_opacity: function(opacity) {
		this.setOpacity(opacity);
		return this.opacities[this.opacities.length - 1] = opacity;
	}
	,scissor: function(x,y,width,height) {
	}
	,disableScissor: function() {
	}
	,pipe: null
	,get_pipeline: function() {
		return this.pipe;
	}
	,set_pipeline: function(pipeline) {
		this.setPipeline(pipeline);
		return this.pipe = pipeline;
	}
	,setBlendingMode: function(source,destination) {
	}
	,transformations: null
	,opacities: null
	,myFontSize: null
	,setTransformation: function(transformation) {
	}
	,setOpacity: function(opacity) {
	}
	,setPipeline: function(pipeline) {
	}
	,__class__: kha_graphics2_Graphics
	,__properties__: {set_pipeline:"set_pipeline",get_pipeline:"get_pipeline",set_opacity:"set_opacity",get_opacity:"get_opacity",set_transformation:"set_transformation",get_transformation:"get_transformation",set_fontSize:"set_fontSize",get_fontSize:"get_fontSize",set_font:"set_font",get_font:"get_font",set_color:"set_color",get_color:"get_color",set_imageScaleQuality:"set_imageScaleQuality",get_imageScaleQuality:"get_imageScaleQuality"}
};
var kha_graphics2_Graphics1 = function(canvas) {
	this.canvas = canvas;
};
$hxClasses["kha.graphics2.Graphics1"] = kha_graphics2_Graphics1;
kha_graphics2_Graphics1.__name__ = ["kha","graphics2","Graphics1"];
kha_graphics2_Graphics1.__interfaces__ = [kha_graphics1_Graphics];
kha_graphics2_Graphics1.prototype = {
	canvas: null
	,texture: null
	,pixels: null
	,begin: function() {
		if(this.texture == null) this.texture = kha_Image.create(this.canvas.get_width(),this.canvas.get_height(),kha_graphics4_TextureFormat.RGBA32,kha_graphics4_Usage.ReadableUsage);
		this.pixels = this.texture.lock();
	}
	,end: function() {
		this.texture.unlock();
		this.canvas.get_g2().begin();
		this.canvas.get_g2().drawImage(this.texture,0,0);
		this.canvas.get_g2().end();
	}
	,setPixel: function(x,y,color) {
		this.pixels.setInt32(y * this.texture.get_realWidth() * 4 + x * 4,color);
	}
	,__class__: kha_graphics2_Graphics1
};
var kha_graphics2_ImageScaleQuality = $hxClasses["kha.graphics2.ImageScaleQuality"] = { __ename__ : ["kha","graphics2","ImageScaleQuality"], __constructs__ : ["Low","High"] };
kha_graphics2_ImageScaleQuality.Low = ["Low",0];
kha_graphics2_ImageScaleQuality.Low.toString = $estr;
kha_graphics2_ImageScaleQuality.Low.__enum__ = kha_graphics2_ImageScaleQuality;
kha_graphics2_ImageScaleQuality.High = ["High",1];
kha_graphics2_ImageScaleQuality.High.toString = $estr;
kha_graphics2_ImageScaleQuality.High.__enum__ = kha_graphics2_ImageScaleQuality;
var kha_graphics2_truetype_Stbtt_$temp_$rect = function() {
};
$hxClasses["kha.graphics2.truetype.Stbtt_temp_rect"] = kha_graphics2_truetype_Stbtt_$temp_$rect;
kha_graphics2_truetype_Stbtt_$temp_$rect.__name__ = ["kha","graphics2","truetype","Stbtt_temp_rect"];
kha_graphics2_truetype_Stbtt_$temp_$rect.prototype = {
	x0: null
	,y0: null
	,x1: null
	,y1: null
	,__class__: kha_graphics2_truetype_Stbtt_$temp_$rect
};
var kha_graphics2_truetype_Stbtt_$temp_$glyph_$h_$metrics = function() {
};
$hxClasses["kha.graphics2.truetype.Stbtt_temp_glyph_h_metrics"] = kha_graphics2_truetype_Stbtt_$temp_$glyph_$h_$metrics;
kha_graphics2_truetype_Stbtt_$temp_$glyph_$h_$metrics.__name__ = ["kha","graphics2","truetype","Stbtt_temp_glyph_h_metrics"];
kha_graphics2_truetype_Stbtt_$temp_$glyph_$h_$metrics.prototype = {
	advanceWidth: null
	,leftSideBearing: null
	,__class__: kha_graphics2_truetype_Stbtt_$temp_$glyph_$h_$metrics
};
var kha_graphics2_truetype_Stbtt_$temp_$font_$v_$metrics = function() {
};
$hxClasses["kha.graphics2.truetype.Stbtt_temp_font_v_metrics"] = kha_graphics2_truetype_Stbtt_$temp_$font_$v_$metrics;
kha_graphics2_truetype_Stbtt_$temp_$font_$v_$metrics.__name__ = ["kha","graphics2","truetype","Stbtt_temp_font_v_metrics"];
kha_graphics2_truetype_Stbtt_$temp_$font_$v_$metrics.prototype = {
	ascent: null
	,descent: null
	,lineGap: null
	,__class__: kha_graphics2_truetype_Stbtt_$temp_$font_$v_$metrics
};
var kha_graphics2_truetype_Stbtt_$temp_$region = function() {
};
$hxClasses["kha.graphics2.truetype.Stbtt_temp_region"] = kha_graphics2_truetype_Stbtt_$temp_$region;
kha_graphics2_truetype_Stbtt_$temp_$region.__name__ = ["kha","graphics2","truetype","Stbtt_temp_region"];
kha_graphics2_truetype_Stbtt_$temp_$region.prototype = {
	width: null
	,height: null
	,xoff: null
	,yoff: null
	,__class__: kha_graphics2_truetype_Stbtt_$temp_$region
};
var kha_graphics2_truetype_Stbtt_$bakedchar = function() {
};
$hxClasses["kha.graphics2.truetype.Stbtt_bakedchar"] = kha_graphics2_truetype_Stbtt_$bakedchar;
kha_graphics2_truetype_Stbtt_$bakedchar.__name__ = ["kha","graphics2","truetype","Stbtt_bakedchar"];
kha_graphics2_truetype_Stbtt_$bakedchar.prototype = {
	x0: null
	,y0: null
	,x1: null
	,y1: null
	,xoff: null
	,yoff: null
	,xadvance: null
	,__class__: kha_graphics2_truetype_Stbtt_$bakedchar
};
var kha_graphics2_truetype_Stbtt_$aligned_$quad = function() { };
$hxClasses["kha.graphics2.truetype.Stbtt_aligned_quad"] = kha_graphics2_truetype_Stbtt_$aligned_$quad;
kha_graphics2_truetype_Stbtt_$aligned_$quad.__name__ = ["kha","graphics2","truetype","Stbtt_aligned_quad"];
kha_graphics2_truetype_Stbtt_$aligned_$quad.prototype = {
	x0: null
	,y0: null
	,s0: null
	,t0: null
	,x1: null
	,y1: null
	,s1: null
	,t1: null
	,__class__: kha_graphics2_truetype_Stbtt_$aligned_$quad
};
var kha_graphics2_truetype_Stbtt_$packedchar = function() { };
$hxClasses["kha.graphics2.truetype.Stbtt_packedchar"] = kha_graphics2_truetype_Stbtt_$packedchar;
kha_graphics2_truetype_Stbtt_$packedchar.__name__ = ["kha","graphics2","truetype","Stbtt_packedchar"];
kha_graphics2_truetype_Stbtt_$packedchar.prototype = {
	x0: null
	,y0: null
	,x1: null
	,y1: null
	,xoff: null
	,yoff: null
	,xadvance: null
	,xoff2: null
	,yoff2: null
	,__class__: kha_graphics2_truetype_Stbtt_$packedchar
};
var kha_graphics2_truetype_Stbtt_$pack_$range = function() { };
$hxClasses["kha.graphics2.truetype.Stbtt_pack_range"] = kha_graphics2_truetype_Stbtt_$pack_$range;
kha_graphics2_truetype_Stbtt_$pack_$range.__name__ = ["kha","graphics2","truetype","Stbtt_pack_range"];
kha_graphics2_truetype_Stbtt_$pack_$range.prototype = {
	font_size: null
	,first_unicode_codepoint_in_range: null
	,array_of_unicode_codepoints: null
	,num_chars: null
	,chardata_for_range: null
	,h_oversample: null
	,v_oversample: null
	,__class__: kha_graphics2_truetype_Stbtt_$pack_$range
};
var kha_graphics2_truetype_Stbtt_$pack_$context = function() { };
$hxClasses["kha.graphics2.truetype.Stbtt_pack_context"] = kha_graphics2_truetype_Stbtt_$pack_$context;
kha_graphics2_truetype_Stbtt_$pack_$context.__name__ = ["kha","graphics2","truetype","Stbtt_pack_context"];
kha_graphics2_truetype_Stbtt_$pack_$context.prototype = {
	width: null
	,height: null
	,stride_in_bytes: null
	,padding: null
	,h_oversample: null
	,v_oversample: null
	,pixels: null
	,__class__: kha_graphics2_truetype_Stbtt_$pack_$context
};
var kha_graphics2_truetype_Stbtt_$fontinfo = function() {
};
$hxClasses["kha.graphics2.truetype.Stbtt_fontinfo"] = kha_graphics2_truetype_Stbtt_$fontinfo;
kha_graphics2_truetype_Stbtt_$fontinfo.__name__ = ["kha","graphics2","truetype","Stbtt_fontinfo"];
kha_graphics2_truetype_Stbtt_$fontinfo.prototype = {
	data: null
	,fontstart: null
	,numGlyphs: null
	,loca: null
	,head: null
	,glyf: null
	,hhea: null
	,hmtx: null
	,kern: null
	,index_map: null
	,indexToLocFormat: null
	,__class__: kha_graphics2_truetype_Stbtt_$fontinfo
};
var kha_graphics2_truetype_Stbtt_$vertex = function() {
};
$hxClasses["kha.graphics2.truetype.Stbtt_vertex"] = kha_graphics2_truetype_Stbtt_$vertex;
kha_graphics2_truetype_Stbtt_$vertex.__name__ = ["kha","graphics2","truetype","Stbtt_vertex"];
kha_graphics2_truetype_Stbtt_$vertex.prototype = {
	x: null
	,y: null
	,cx: null
	,cy: null
	,type: null
	,padding: null
	,__class__: kha_graphics2_truetype_Stbtt_$vertex
};
var kha_graphics2_truetype_Stbtt_$_$bitmap = function() {
};
$hxClasses["kha.graphics2.truetype.Stbtt__bitmap"] = kha_graphics2_truetype_Stbtt_$_$bitmap;
kha_graphics2_truetype_Stbtt_$_$bitmap.__name__ = ["kha","graphics2","truetype","Stbtt__bitmap"];
kha_graphics2_truetype_Stbtt_$_$bitmap.prototype = {
	w: null
	,h: null
	,stride: null
	,pixels: null
	,pixels_offset: null
	,__class__: kha_graphics2_truetype_Stbtt_$_$bitmap
};
var kha_graphics2_truetype_Stbtt_$_$edge = function() {
};
$hxClasses["kha.graphics2.truetype.Stbtt__edge"] = kha_graphics2_truetype_Stbtt_$_$edge;
kha_graphics2_truetype_Stbtt_$_$edge.__name__ = ["kha","graphics2","truetype","Stbtt__edge"];
kha_graphics2_truetype_Stbtt_$_$edge.prototype = {
	x0: null
	,y0: null
	,x1: null
	,y1: null
	,invert: null
	,__class__: kha_graphics2_truetype_Stbtt_$_$edge
};
var kha_graphics2_truetype_Stbtt_$_$active_$edge = function() {
};
$hxClasses["kha.graphics2.truetype.Stbtt__active_edge"] = kha_graphics2_truetype_Stbtt_$_$active_$edge;
kha_graphics2_truetype_Stbtt_$_$active_$edge.__name__ = ["kha","graphics2","truetype","Stbtt__active_edge"];
kha_graphics2_truetype_Stbtt_$_$active_$edge.prototype = {
	next: null
	,fx: null
	,fdx: null
	,fdy: null
	,direction: null
	,sy: null
	,ey: null
	,__class__: kha_graphics2_truetype_Stbtt_$_$active_$edge
};
var kha_graphics2_truetype_Stbtt_$_$point = function() {
};
$hxClasses["kha.graphics2.truetype.Stbtt__point"] = kha_graphics2_truetype_Stbtt_$_$point;
kha_graphics2_truetype_Stbtt_$_$point.__name__ = ["kha","graphics2","truetype","Stbtt__point"];
kha_graphics2_truetype_Stbtt_$_$point.prototype = {
	x: null
	,y: null
	,__class__: kha_graphics2_truetype_Stbtt_$_$point
};
var kha_graphics2_truetype_StbTruetype = function() { };
$hxClasses["kha.graphics2.truetype.StbTruetype"] = kha_graphics2_truetype_StbTruetype;
kha_graphics2_truetype_StbTruetype.__name__ = ["kha","graphics2","truetype","StbTruetype"];
kha_graphics2_truetype_StbTruetype.STBTT_assert = function(value) {
	if(!value) throw new js__$Boot_HaxeError("Error");
};
kha_graphics2_truetype_StbTruetype.STBTT_POINT_SIZE = function(x) {
	return -x;
};
kha_graphics2_truetype_StbTruetype.ttBYTE = function(p,pos) {
	if(pos == null) pos = 0;
	return p.readU8(pos);
};
kha_graphics2_truetype_StbTruetype.ttCHAR = function(p,pos) {
	if(pos == null) pos = 0;
	var n = p.readU8(pos);
	if(n >= 128) return n - 256;
	return n;
};
kha_graphics2_truetype_StbTruetype.ttUSHORT = function(p,pos) {
	if(pos == null) pos = 0;
	var ch1 = p.readU8(pos);
	var ch2 = p.readU8(pos + 1);
	return ch2 | ch1 << 8;
};
kha_graphics2_truetype_StbTruetype.ttSHORT = function(p,pos) {
	if(pos == null) pos = 0;
	var ch1 = p.readU8(pos);
	var ch2 = p.readU8(pos + 1);
	var n = ch2 | ch1 << 8;
	if((n & 32768) != 0) return n - 65536;
	return n;
};
kha_graphics2_truetype_StbTruetype.ttULONG = function(p,pos) {
	if(pos == null) pos = 0;
	return kha_graphics2_truetype_StbTruetype.ttLONG(p,pos);
};
kha_graphics2_truetype_StbTruetype.ttLONG = function(p,pos) {
	if(pos == null) pos = 0;
	var ch1 = p.readU8(pos);
	var ch2 = p.readU8(pos + 1);
	var ch3 = p.readU8(pos + 2);
	var ch4 = p.readU8(pos + 3);
	return ch4 | ch3 << 8 | ch2 << 16 | ch1 << 24;
};
kha_graphics2_truetype_StbTruetype.ttFixed = function(p,pos) {
	if(pos == null) pos = 0;
	return kha_graphics2_truetype_StbTruetype.ttLONG(p,pos);
};
kha_graphics2_truetype_StbTruetype.stbtt_tag4 = function(p,pos,c0,c1,c2,c3) {
	return p.readU8(pos) == c0 && p.readU8(pos + 1) == c1 && p.readU8(pos + 2) == c2 && p.readU8(pos + 3) == c3;
};
kha_graphics2_truetype_StbTruetype.stbtt_tag = function(p,pos,str) {
	return kha_graphics2_truetype_StbTruetype.stbtt_tag4(p,pos,HxOverrides.cca(str,0),HxOverrides.cca(str,1),HxOverrides.cca(str,2),HxOverrides.cca(str,3));
};
kha_graphics2_truetype_StbTruetype.stbtt__isfont = function(font) {
	if(kha_graphics2_truetype_StbTruetype.stbtt_tag4(font,0,HxOverrides.cca("1",0),0,0,0)) return true;
	if(kha_graphics2_truetype_StbTruetype.stbtt_tag4(font,0,HxOverrides.cca("typ1",0),HxOverrides.cca("typ1",1),HxOverrides.cca("typ1",2),HxOverrides.cca("typ1",3))) return true;
	if(kha_graphics2_truetype_StbTruetype.stbtt_tag4(font,0,HxOverrides.cca("OTTO",0),HxOverrides.cca("OTTO",1),HxOverrides.cca("OTTO",2),HxOverrides.cca("OTTO",3))) return true;
	if(font.readU8(0) == 0 && font.readU8(1) == 1 && font.readU8(2) == 0 && font.readU8(3) == 0) return true;
	return false;
};
kha_graphics2_truetype_StbTruetype.stbtt__find_table = function(data,fontstart,tag) {
	var num_tables = kha_graphics2_truetype_StbTruetype.ttUSHORT(data,fontstart + 4);
	var tabledir = fontstart + 12;
	var _g = 0;
	while(_g < num_tables) {
		var i = _g++;
		var loc = tabledir + 16 * i;
		if(kha_graphics2_truetype_StbTruetype.stbtt_tag4(data,loc,HxOverrides.cca(tag,0),HxOverrides.cca(tag,1),HxOverrides.cca(tag,2),HxOverrides.cca(tag,3))) return kha_graphics2_truetype_StbTruetype.ttLONG(data,loc + 8);
	}
	return 0;
};
kha_graphics2_truetype_StbTruetype.stbtt_GetFontOffsetForIndex = function(font_collection,index) {
	if(kha_graphics2_truetype_StbTruetype.stbtt__isfont(font_collection)) if(index == 0) return 0; else return -1;
	if(kha_graphics2_truetype_StbTruetype.stbtt_tag4(font_collection,0,HxOverrides.cca("ttcf",0),HxOverrides.cca("ttcf",1),HxOverrides.cca("ttcf",2),HxOverrides.cca("ttcf",3))) {
		if(kha_graphics2_truetype_StbTruetype.ttLONG(font_collection,4) == 65536 || kha_graphics2_truetype_StbTruetype.ttLONG(font_collection,4) == 131072) {
			var n = kha_graphics2_truetype_StbTruetype.ttLONG(font_collection,8);
			if(index >= n) return -1;
			return kha_graphics2_truetype_StbTruetype.ttLONG(font_collection,12 + index * 4);
		}
	}
	return -1;
};
kha_graphics2_truetype_StbTruetype.stbtt_InitFont = function(info,data,fontstart) {
	var cmap;
	var t;
	var numTables;
	info.data = data;
	info.fontstart = fontstart;
	cmap = kha_graphics2_truetype_StbTruetype.stbtt__find_table(data,fontstart,"cmap");
	info.loca = kha_graphics2_truetype_StbTruetype.stbtt__find_table(data,fontstart,"loca");
	info.head = kha_graphics2_truetype_StbTruetype.stbtt__find_table(data,fontstart,"head");
	info.glyf = kha_graphics2_truetype_StbTruetype.stbtt__find_table(data,fontstart,"glyf");
	info.hhea = kha_graphics2_truetype_StbTruetype.stbtt__find_table(data,fontstart,"hhea");
	info.hmtx = kha_graphics2_truetype_StbTruetype.stbtt__find_table(data,fontstart,"hmtx");
	info.kern = kha_graphics2_truetype_StbTruetype.stbtt__find_table(data,fontstart,"kern");
	if(cmap == 0 || info.loca == 0 || info.head == 0 || info.glyf == 0 || info.hhea == 0 || info.hmtx == 0) return false;
	t = kha_graphics2_truetype_StbTruetype.stbtt__find_table(data,fontstart,"maxp");
	if(t != 0) info.numGlyphs = kha_graphics2_truetype_StbTruetype.ttUSHORT(data,t + 4); else info.numGlyphs = 65535;
	numTables = kha_graphics2_truetype_StbTruetype.ttUSHORT(data,cmap + 2);
	info.index_map = 0;
	var _g = 0;
	while(_g < numTables) {
		var i = _g++;
		var encoding_record = cmap + 4 + 8 * i;
		var _g1 = kha_graphics2_truetype_StbTruetype.ttUSHORT(data,encoding_record);
		switch(_g1) {
		case 3:
			var _g2 = kha_graphics2_truetype_StbTruetype.ttUSHORT(data,encoding_record + 2);
			switch(_g2) {
			case 1:case 10:
				info.index_map = cmap + kha_graphics2_truetype_StbTruetype.ttLONG(data,encoding_record + 4);
				break;
			}
			break;
		case 0:
			info.index_map = cmap + kha_graphics2_truetype_StbTruetype.ttLONG(data,encoding_record + 4);
			break;
		}
	}
	if(info.index_map == 0) return false;
	info.indexToLocFormat = kha_graphics2_truetype_StbTruetype.ttUSHORT(data,info.head + 50);
	return true;
};
kha_graphics2_truetype_StbTruetype.stbtt_FindGlyphIndex = function(info,unicode_codepoint) {
	var data = info.data;
	var index_map = info.index_map;
	var format = kha_graphics2_truetype_StbTruetype.ttUSHORT(data,index_map);
	if(format == 0) {
		var bytes = kha_graphics2_truetype_StbTruetype.ttUSHORT(data,index_map + 2);
		if(unicode_codepoint < bytes - 6) return data.readU8(index_map + 6 + unicode_codepoint);
		return 0;
	} else if(format == 6) {
		var first = kha_graphics2_truetype_StbTruetype.ttUSHORT(data,index_map + 6);
		var count = kha_graphics2_truetype_StbTruetype.ttUSHORT(data,index_map + 8);
		if(unicode_codepoint >= first && unicode_codepoint < first + count) return kha_graphics2_truetype_StbTruetype.ttUSHORT(data,index_map + 10 + (unicode_codepoint - first) * 2);
		return 0;
	} else if(format == 2) {
		throw new js__$Boot_HaxeError("Error");
		return 0;
	} else if(format == 4) {
		var segcount = kha_graphics2_truetype_StbTruetype.ttUSHORT(data,index_map + 6) >> 1;
		var searchRange = kha_graphics2_truetype_StbTruetype.ttUSHORT(data,index_map + 8) >> 1;
		var entrySelector = kha_graphics2_truetype_StbTruetype.ttUSHORT(data,index_map + 10);
		var rangeShift = kha_graphics2_truetype_StbTruetype.ttUSHORT(data,index_map + 12) >> 1;
		var endCount = index_map + 14;
		var search = endCount;
		if(unicode_codepoint > 65535) return 0;
		if(unicode_codepoint >= kha_graphics2_truetype_StbTruetype.ttUSHORT(data,search + rangeShift * 2)) search += rangeShift * 2;
		search -= 2;
		while(entrySelector != 0) {
			var end;
			searchRange >>= 1;
			end = kha_graphics2_truetype_StbTruetype.ttUSHORT(data,search + searchRange * 2);
			if(unicode_codepoint > end) search += searchRange * 2;
			--entrySelector;
		}
		search += 2;
		var offset;
		var start;
		var item = search - endCount >> 1;
		kha_graphics2_truetype_StbTruetype.STBTT_assert(unicode_codepoint <= kha_graphics2_truetype_StbTruetype.ttUSHORT(data,endCount + 2 * item));
		start = kha_graphics2_truetype_StbTruetype.ttUSHORT(data,index_map + 14 + segcount * 2 + 2 + 2 * item);
		if(unicode_codepoint < start) return 0;
		offset = kha_graphics2_truetype_StbTruetype.ttUSHORT(data,index_map + 14 + segcount * 6 + 2 + 2 * item);
		if(offset == 0) return unicode_codepoint + kha_graphics2_truetype_StbTruetype.ttSHORT(data,index_map + 14 + segcount * 4 + 2 + 2 * item);
		return kha_graphics2_truetype_StbTruetype.ttUSHORT(data,offset + (unicode_codepoint - start) * 2 + index_map + 14 + segcount * 6 + 2 + 2 * item);
	} else if(format == 12 || format == 13) {
		var ngroups = kha_graphics2_truetype_StbTruetype.ttLONG(data,index_map + 12);
		var low;
		var high;
		low = 0;
		high = ngroups;
		while(low < high) {
			var mid = low + (high - low >> 1);
			var start_char = kha_graphics2_truetype_StbTruetype.ttLONG(data,index_map + 16 + mid * 12);
			var end_char = kha_graphics2_truetype_StbTruetype.ttLONG(data,index_map + 16 + mid * 12 + 4);
			if(unicode_codepoint < start_char) high = mid; else if(unicode_codepoint > end_char) low = mid + 1; else {
				var start_glyph = kha_graphics2_truetype_StbTruetype.ttLONG(data,index_map + 16 + mid * 12 + 8);
				if(format == 12) return start_glyph + unicode_codepoint - start_char; else return start_glyph;
			}
		}
		return 0;
	}
	throw new js__$Boot_HaxeError("Error");
	return 0;
};
kha_graphics2_truetype_StbTruetype.stbtt_GetCodepointShape = function(info,unicode_codepoint) {
	return kha_graphics2_truetype_StbTruetype.stbtt_GetGlyphShape(info,kha_graphics2_truetype_StbTruetype.stbtt_FindGlyphIndex(info,unicode_codepoint));
};
kha_graphics2_truetype_StbTruetype.stbtt_setvertex = function(v,type,x,y,cx,cy) {
	v.type = type;
	v.x = x;
	v.y = y;
	v.cx = cx;
	v.cy = cy;
};
kha_graphics2_truetype_StbTruetype.stbtt__GetGlyfOffset = function(info,glyph_index) {
	var g1;
	var g2;
	if(glyph_index >= info.numGlyphs) return -1;
	if(info.indexToLocFormat >= 2) return -1;
	if(info.indexToLocFormat == 0) {
		g1 = info.glyf + kha_graphics2_truetype_StbTruetype.ttUSHORT(info.data,info.loca + glyph_index * 2) * 2;
		g2 = info.glyf + kha_graphics2_truetype_StbTruetype.ttUSHORT(info.data,info.loca + glyph_index * 2 + 2) * 2;
	} else {
		g1 = info.glyf + kha_graphics2_truetype_StbTruetype.ttLONG(info.data,info.loca + glyph_index * 4);
		g2 = info.glyf + kha_graphics2_truetype_StbTruetype.ttLONG(info.data,info.loca + glyph_index * 4 + 4);
	}
	if(g1 == g2) return -1; else return g1;
};
kha_graphics2_truetype_StbTruetype.stbtt_GetGlyphBox = function(info,glyph_index,rect) {
	var g = kha_graphics2_truetype_StbTruetype.stbtt__GetGlyfOffset(info,glyph_index);
	if(g < 0) return false;
	rect.x0 = kha_graphics2_truetype_StbTruetype.ttSHORT(info.data,g + 2);
	rect.y0 = kha_graphics2_truetype_StbTruetype.ttSHORT(info.data,g + 4);
	rect.x1 = kha_graphics2_truetype_StbTruetype.ttSHORT(info.data,g + 6);
	rect.y1 = kha_graphics2_truetype_StbTruetype.ttSHORT(info.data,g + 8);
	return true;
};
kha_graphics2_truetype_StbTruetype.stbtt_GetCodepointBox = function(info,codepoint,rect) {
	return kha_graphics2_truetype_StbTruetype.stbtt_GetGlyphBox(info,kha_graphics2_truetype_StbTruetype.stbtt_FindGlyphIndex(info,codepoint),rect);
};
kha_graphics2_truetype_StbTruetype.stbtt_IsGlyphEmpty = function(info,glyph_index) {
	var numberOfContours;
	var g = kha_graphics2_truetype_StbTruetype.stbtt__GetGlyfOffset(info,glyph_index);
	if(g < 0) return true;
	numberOfContours = kha_graphics2_truetype_StbTruetype.ttSHORT(info.data,g);
	return numberOfContours == 0;
};
kha_graphics2_truetype_StbTruetype.stbtt__close_shape = function(vertices,num_vertices,was_off,start_off,sx,sy,scx,scy,cx,cy) {
	if(start_off) {
		if(was_off) kha_graphics2_truetype_StbTruetype.stbtt_setvertex((function($this) {
			var $r;
			var index = num_vertices++;
			$r = vertices[index];
			return $r;
		}(this)),3,cx + scx >> 1,cy + scy >> 1,cx,cy);
		kha_graphics2_truetype_StbTruetype.stbtt_setvertex((function($this) {
			var $r;
			var index1 = num_vertices++;
			$r = vertices[index1];
			return $r;
		}(this)),3,sx,sy,scx,scy);
	} else if(was_off) kha_graphics2_truetype_StbTruetype.stbtt_setvertex((function($this) {
		var $r;
		var index2 = num_vertices++;
		$r = vertices[index2];
		return $r;
	}(this)),3,sx,sy,cx,cy); else kha_graphics2_truetype_StbTruetype.stbtt_setvertex((function($this) {
		var $r;
		var index3 = num_vertices++;
		$r = vertices[index3];
		return $r;
	}(this)),2,sx,sy,0,0);
	return num_vertices;
};
kha_graphics2_truetype_StbTruetype.copyVertices = function(from,to,offset,count) {
	var _g = 0;
	while(_g < count) {
		var i = _g++;
		to[offset + i] = from[i];
	}
};
kha_graphics2_truetype_StbTruetype.stbtt_GetGlyphShape = function(info,glyph_index) {
	var numberOfContours;
	var endPtsOfContours;
	var data = info.data;
	var vertices = null;
	var num_vertices = 0;
	var g = kha_graphics2_truetype_StbTruetype.stbtt__GetGlyfOffset(info,glyph_index);
	if(g < 0) return null;
	numberOfContours = kha_graphics2_truetype_StbTruetype.ttSHORT(data,g);
	if(numberOfContours > 0) {
		var flags = 0;
		var flagcount;
		var ins;
		var j = 0;
		var m;
		var n;
		var next_move = 0;
		var off = 0;
		var was_off = false;
		var start_off = false;
		var x;
		var y;
		var cx;
		var cy;
		var sx;
		var sy;
		var scx;
		var scy;
		var points;
		var pointsIndex = 0;
		endPtsOfContours = data.sub(g + 10,data.get_length() - (g + 10));
		ins = kha_graphics2_truetype_StbTruetype.ttUSHORT(data,g + 10 + numberOfContours * 2);
		points = data.sub(g + 10 + numberOfContours * 2 + 2 + ins,data.get_length() - (g + 10 + numberOfContours * 2 + 2 + ins));
		n = 1 + kha_graphics2_truetype_StbTruetype.ttUSHORT(endPtsOfContours,numberOfContours * 2 - 2);
		m = n + 2 * numberOfContours;
		var this1;
		this1 = new Array(m);
		vertices = this1;
		if(vertices == null) return null; else {
			var _g1 = 0;
			var _g = vertices.length;
			while(_g1 < _g) {
				var i1 = _g1++;
				var val = new kha_graphics2_truetype_Stbtt_$vertex();
				vertices[i1] = val;
			}
		}
		next_move = 0;
		flagcount = 0;
		off = m - n;
		var _g2 = 0;
		while(_g2 < n) {
			var i2 = _g2++;
			if(flagcount == 0) {
				flags = points.readU8(pointsIndex++);
				if((flags & 8) != 0) flagcount = points.readU8(pointsIndex++);
			} else --flagcount;
			vertices[off + i2].type = flags;
		}
		x = 0;
		var _g3 = 0;
		while(_g3 < n) {
			var i3 = _g3++;
			flags = vertices[off + i3].type;
			if((flags & 2) != 0) {
				var dx = points.readU8(pointsIndex++);
				if((flags & 16) != 0) x += dx; else x += -dx;
			} else if((flags & 16) == 0) {
				var value;
				var ch1 = points.readU8(pointsIndex);
				var ch2 = points.readU8(pointsIndex + 1);
				var n1 = ch2 | ch1 << 8;
				if((n1 & 32768) != 0) value = n1 - 65536; else value = n1;
				x = x + value;
				pointsIndex += 2;
			}
			vertices[off + i3].x = x;
		}
		y = 0;
		var _g4 = 0;
		while(_g4 < n) {
			var i4 = _g4++;
			flags = vertices[off + i4].type;
			if((flags & 4) != 0) {
				var dy = points.readU8(pointsIndex++);
				if((flags & 32) != 0) y += dy; else y += -dy;
			} else if((flags & 32) == 0) {
				var value1;
				var ch11 = points.readU8(pointsIndex);
				var ch21 = points.readU8(pointsIndex + 1);
				var n2 = ch21 | ch11 << 8;
				if((n2 & 32768) != 0) value1 = n2 - 65536; else value1 = n2;
				y = y + value1;
				pointsIndex += 2;
			}
			vertices[off + i4].y = y;
		}
		num_vertices = 0;
		sx = sy = cx = cy = scx = scy = 0;
		var i = 0;
		while(i < n) {
			flags = vertices[off + i].type;
			x = vertices[off + i].x;
			y = vertices[off + i].y;
			if(next_move == i) {
				if(i != 0) num_vertices = kha_graphics2_truetype_StbTruetype.stbtt__close_shape(vertices,num_vertices,was_off,start_off,sx,sy,scx,scy,cx,cy);
				start_off = (flags & 1) == 0;
				if(start_off) {
					scx = x;
					scy = y;
					if((vertices[off + i + 1].type & 1) == 0) {
						sx = x + vertices[off + i + 1].x >> 1;
						sy = y + vertices[off + i + 1].y >> 1;
					} else {
						sx = vertices[off + i + 1].x;
						sy = vertices[off + i + 1].y;
						++i;
					}
				} else {
					sx = x;
					sy = y;
				}
				kha_graphics2_truetype_StbTruetype.stbtt_setvertex((function($this) {
					var $r;
					var index = num_vertices++;
					$r = vertices[index];
					return $r;
				}(this)),1,sx,sy,0,0);
				was_off = false;
				next_move = 1 + kha_graphics2_truetype_StbTruetype.ttUSHORT(endPtsOfContours,j * 2);
				++j;
			} else if((flags & 1) == 0) {
				if(was_off) kha_graphics2_truetype_StbTruetype.stbtt_setvertex((function($this) {
					var $r;
					var index1 = num_vertices++;
					$r = vertices[index1];
					return $r;
				}(this)),3,cx + x >> 1,cy + y >> 1,cx,cy);
				cx = x;
				cy = y;
				was_off = true;
			} else {
				if(was_off) kha_graphics2_truetype_StbTruetype.stbtt_setvertex((function($this) {
					var $r;
					var index2 = num_vertices++;
					$r = vertices[index2];
					return $r;
				}(this)),3,x,y,cx,cy); else kha_graphics2_truetype_StbTruetype.stbtt_setvertex((function($this) {
					var $r;
					var index3 = num_vertices++;
					$r = vertices[index3];
					return $r;
				}(this)),2,x,y,0,0);
				was_off = false;
			}
			++i;
		}
		num_vertices = kha_graphics2_truetype_StbTruetype.stbtt__close_shape(vertices,num_vertices,was_off,start_off,sx,sy,scx,scy,cx,cy);
	} else if(numberOfContours == -1) {
		var more = 1;
		var comp = data.sub(g + 10,data.get_length() - (g + 10));
		var compIndex = 0;
		num_vertices = 0;
		vertices = null;
		while(more != 0) {
			var flags1;
			var gidx;
			var comp_num_verts = 0;
			var i5;
			var comp_verts = null;
			var tmp = null;
			var mtx0 = 1;
			var mtx1 = 0;
			var mtx2 = 0;
			var mtx3 = 1;
			var mtx4 = 0;
			var mtx5 = 0;
			var m1;
			var n3;
			flags1 = kha_graphics2_truetype_StbTruetype.ttSHORT(comp,compIndex);
			compIndex += 2;
			gidx = kha_graphics2_truetype_StbTruetype.ttSHORT(comp,compIndex);
			compIndex += 2;
			if((flags1 & 2) != 0) {
				if((flags1 & 1) != 0) {
					mtx4 = kha_graphics2_truetype_StbTruetype.ttSHORT(comp,compIndex);
					compIndex += 2;
					mtx5 = kha_graphics2_truetype_StbTruetype.ttSHORT(comp,compIndex);
					compIndex += 2;
				} else {
					mtx4 = kha_graphics2_truetype_StbTruetype.ttCHAR(comp,compIndex);
					compIndex += 1;
					mtx5 = kha_graphics2_truetype_StbTruetype.ttCHAR(comp,compIndex);
					compIndex += 1;
				}
			} else throw new js__$Boot_HaxeError("Error");
			if((flags1 & 8) != 0) {
				mtx0 = mtx3 = kha_graphics2_truetype_StbTruetype.ttSHORT(comp,compIndex) / 16384.0;
				compIndex += 2;
				mtx1 = mtx2 = 0;
			} else if((flags1 & 64) != 0) {
				mtx0 = kha_graphics2_truetype_StbTruetype.ttSHORT(comp,compIndex) / 16384.0;
				compIndex += 2;
				mtx1 = mtx2 = 0;
				mtx3 = kha_graphics2_truetype_StbTruetype.ttSHORT(comp,compIndex) / 16384.0;
				compIndex += 2;
			} else if((flags1 & 128) != 0) {
				mtx0 = kha_graphics2_truetype_StbTruetype.ttSHORT(comp,compIndex) / 16384.0;
				compIndex += 2;
				mtx1 = kha_graphics2_truetype_StbTruetype.ttSHORT(comp,compIndex) / 16384.0;
				compIndex += 2;
				mtx2 = kha_graphics2_truetype_StbTruetype.ttSHORT(comp,compIndex) / 16384.0;
				compIndex += 2;
				mtx3 = kha_graphics2_truetype_StbTruetype.ttSHORT(comp,compIndex) / 16384.0;
				compIndex += 2;
			}
			m1 = Math.sqrt(mtx0 * mtx0 + mtx1 * mtx1);
			n3 = Math.sqrt(mtx2 * mtx2 + mtx3 * mtx3);
			comp_verts = kha_graphics2_truetype_StbTruetype.stbtt_GetGlyphShape(info,gidx);
			if(comp_verts == null) comp_num_verts = 0; else comp_num_verts = comp_verts.length;
			if(comp_num_verts > 0) {
				var _g5 = 0;
				while(_g5 < comp_num_verts) {
					var i6 = _g5++;
					var v = comp_verts[i6];
					var x1;
					var y1;
					x1 = v.x;
					y1 = v.y;
					v.x = m1 * (mtx0 * x1 + mtx2 * y1 + mtx4) | 0;
					v.y = n3 * (mtx1 * x1 + mtx3 * y1 + mtx5) | 0;
					x1 = v.cx;
					y1 = v.cy;
					v.cx = m1 * (mtx0 * x1 + mtx2 * y1 + mtx4) | 0;
					v.cy = n3 * (mtx1 * x1 + mtx3 * y1 + mtx5) | 0;
				}
				var this2;
				this2 = new Array(num_vertices + comp_num_verts);
				tmp = this2;
				if(tmp == null) return null;
				if(num_vertices > 0) kha_graphics2_truetype_StbTruetype.copyVertices(vertices,tmp,0,num_vertices);
				kha_graphics2_truetype_StbTruetype.copyVertices(comp_verts,tmp,num_vertices,comp_num_verts);
				vertices = tmp;
				num_vertices += comp_num_verts;
			}
			more = flags1 & 32;
		}
	} else if(numberOfContours < 0) throw new js__$Boot_HaxeError("Error"); else {
	}
	if(vertices == null) return null;
	if(!(vertices.length >= num_vertices)) throw new js__$Boot_HaxeError("Error");
	if(num_vertices < vertices.length) {
		var tmp1;
		var this3;
		this3 = new Array(num_vertices);
		tmp1 = this3;
		kha_graphics2_truetype_StbTruetype.copyVertices(vertices,tmp1,0,num_vertices);
		return tmp1;
	} else return vertices;
};
kha_graphics2_truetype_StbTruetype.stbtt_GetGlyphHMetrics = function(info,glyph_index) {
	var numOfLongHorMetrics = kha_graphics2_truetype_StbTruetype.ttUSHORT(info.data,info.hhea + 34);
	var metrics = new kha_graphics2_truetype_Stbtt_$temp_$glyph_$h_$metrics();
	if(glyph_index < numOfLongHorMetrics) {
		metrics.advanceWidth = kha_graphics2_truetype_StbTruetype.ttSHORT(info.data,info.hmtx + 4 * glyph_index);
		metrics.leftSideBearing = kha_graphics2_truetype_StbTruetype.ttSHORT(info.data,info.hmtx + 4 * glyph_index + 2);
	} else {
		metrics.advanceWidth = kha_graphics2_truetype_StbTruetype.ttSHORT(info.data,info.hmtx + 4 * (numOfLongHorMetrics - 1));
		metrics.leftSideBearing = kha_graphics2_truetype_StbTruetype.ttSHORT(info.data,info.hmtx + 4 * numOfLongHorMetrics + 2 * (glyph_index - numOfLongHorMetrics));
	}
	return metrics;
};
kha_graphics2_truetype_StbTruetype.stbtt_GetGlyphKernAdvance = function(info,glyph1,glyph2) {
	var data = info.data.sub(info.kern,info.data.get_length() - info.kern);
	var needle;
	var straw;
	var l;
	var r;
	var m;
	if(info.kern == 0) return 0;
	if(kha_graphics2_truetype_StbTruetype.ttUSHORT(data,2) < 1) return 0;
	if(kha_graphics2_truetype_StbTruetype.ttUSHORT(data,8) != 1) return 0;
	l = 0;
	r = kha_graphics2_truetype_StbTruetype.ttUSHORT(data,10) - 1;
	needle = glyph1 << 16 | glyph2;
	while(l <= r) {
		m = l + r >> 1;
		straw = kha_graphics2_truetype_StbTruetype.ttLONG(data,18 + m * 6);
		if(needle < straw) r = m - 1; else if(needle > straw) l = m + 1; else return kha_graphics2_truetype_StbTruetype.ttSHORT(data,22 + m * 6);
	}
	return 0;
};
kha_graphics2_truetype_StbTruetype.stbtt_GetCodepointKernAdvance = function(info,ch1,ch2) {
	if(info.kern == 0) return 0;
	return kha_graphics2_truetype_StbTruetype.stbtt_GetGlyphKernAdvance(info,kha_graphics2_truetype_StbTruetype.stbtt_FindGlyphIndex(info,ch1),kha_graphics2_truetype_StbTruetype.stbtt_FindGlyphIndex(info,ch2));
};
kha_graphics2_truetype_StbTruetype.stbtt_GetCodepointHMetrics = function(info,codepoint) {
	return kha_graphics2_truetype_StbTruetype.stbtt_GetGlyphHMetrics(info,kha_graphics2_truetype_StbTruetype.stbtt_FindGlyphIndex(info,codepoint));
};
kha_graphics2_truetype_StbTruetype.stbtt_GetFontVMetrics = function(info) {
	var metrics = new kha_graphics2_truetype_Stbtt_$temp_$font_$v_$metrics();
	metrics.ascent = kha_graphics2_truetype_StbTruetype.ttSHORT(info.data,info.hhea + 4);
	metrics.descent = kha_graphics2_truetype_StbTruetype.ttSHORT(info.data,info.hhea + 6);
	metrics.lineGap = kha_graphics2_truetype_StbTruetype.ttSHORT(info.data,info.hhea + 8);
	return metrics;
};
kha_graphics2_truetype_StbTruetype.stbtt_GetFontBoundingBox = function(info) {
	var rect = new kha_graphics2_truetype_Stbtt_$temp_$rect();
	rect.x0 = kha_graphics2_truetype_StbTruetype.ttSHORT(info.data,info.head + 36);
	rect.y0 = kha_graphics2_truetype_StbTruetype.ttSHORT(info.data,info.head + 38);
	rect.x1 = kha_graphics2_truetype_StbTruetype.ttSHORT(info.data,info.head + 40);
	rect.y1 = kha_graphics2_truetype_StbTruetype.ttSHORT(info.data,info.head + 42);
	return rect;
};
kha_graphics2_truetype_StbTruetype.stbtt_ScaleForPixelHeight = function(info,height) {
	var fheight = kha_graphics2_truetype_StbTruetype.ttSHORT(info.data,info.hhea + 4) - kha_graphics2_truetype_StbTruetype.ttSHORT(info.data,info.hhea + 6);
	return height / fheight;
};
kha_graphics2_truetype_StbTruetype.stbtt_ScaleForMappingEmToPixels = function(info,pixels) {
	var unitsPerEm = kha_graphics2_truetype_StbTruetype.ttUSHORT(info.data,info.head + 18);
	return pixels / unitsPerEm;
};
kha_graphics2_truetype_StbTruetype.stbtt_GetGlyphBitmapBoxSubpixel = function(font,glyph,scale_x,scale_y,shift_x,shift_y) {
	var rect = new kha_graphics2_truetype_Stbtt_$temp_$rect();
	if(!kha_graphics2_truetype_StbTruetype.stbtt_GetGlyphBox(font,glyph,rect)) {
		rect.x0 = 0;
		rect.y0 = 0;
		rect.x1 = 0;
		rect.y1 = 0;
	} else {
		var x0 = rect.x0;
		var x1 = rect.x1;
		var y0 = rect.y0;
		var y1 = rect.y1;
		rect.x0 = Math.floor(x0 * scale_x + shift_x);
		rect.y0 = Math.floor(-y1 * scale_y + shift_y);
		rect.x1 = Math.ceil(x1 * scale_x + shift_x);
		rect.y1 = Math.ceil(-y0 * scale_y + shift_y);
	}
	return rect;
};
kha_graphics2_truetype_StbTruetype.stbtt_GetGlyphBitmapBox = function(font,glyph,scale_x,scale_y) {
	return kha_graphics2_truetype_StbTruetype.stbtt_GetGlyphBitmapBoxSubpixel(font,glyph,scale_x,scale_y,0.0,0.0);
};
kha_graphics2_truetype_StbTruetype.stbtt_GetCodepointBitmapBoxSubpixel = function(font,codepoint,scale_x,scale_y,shift_x,shift_y) {
	return kha_graphics2_truetype_StbTruetype.stbtt_GetGlyphBitmapBoxSubpixel(font,kha_graphics2_truetype_StbTruetype.stbtt_FindGlyphIndex(font,codepoint),scale_x,scale_y,shift_x,shift_y);
};
kha_graphics2_truetype_StbTruetype.stbtt_GetCodepointBitmapBox = function(font,codepoint,scale_x,scale_y) {
	return kha_graphics2_truetype_StbTruetype.stbtt_GetCodepointBitmapBoxSubpixel(font,codepoint,scale_x,scale_y,0.0,0.0);
};
kha_graphics2_truetype_StbTruetype.stbtt__new_active = function(e,eIndex,off_x,start_point) {
	var z = new kha_graphics2_truetype_Stbtt_$_$active_$edge();
	var dxdy = (e[eIndex].x1 - e[eIndex].x0) / (e[eIndex].y1 - e[eIndex].y0);
	if(z == null) return z;
	z.fdx = dxdy;
	if(dxdy != 0.0) z.fdy = 1.0 / dxdy; else z.fdy = 0.0;
	z.fx = e[eIndex].x0 + dxdy * (start_point - e[eIndex].y0);
	z.fx -= off_x;
	if(e[eIndex].invert) z.direction = 1.0; else z.direction = -1.0;
	z.sy = e[eIndex].y0;
	z.ey = e[eIndex].y1;
	z.next = null;
	return z;
};
kha_graphics2_truetype_StbTruetype.stbtt__handle_clipped_edge = function(scanline,scanlineIndex,x,e,x0,y0,x1,y1) {
	if(y0 == y1) return;
	if(!(y0 < y1)) throw new js__$Boot_HaxeError("Error");
	if(!(e.sy <= e.ey)) throw new js__$Boot_HaxeError("Error");
	if(y0 > e.ey) return;
	if(y1 < e.sy) return;
	if(y0 < e.sy) {
		x0 += (x1 - x0) * (e.sy - y0) / (y1 - y0);
		y0 = e.sy;
	}
	if(y1 > e.ey) {
		x1 += (x1 - x0) * (e.ey - y1) / (y1 - y0);
		y1 = e.ey;
	}
	if(x0 == x) {
		if(!(x1 <= x + 1)) throw new js__$Boot_HaxeError("Error");
	} else if(x0 == x + 1) {
		if(!(x1 >= x)) throw new js__$Boot_HaxeError("Error");
	} else if(x0 <= x) {
		if(!(x1 <= x)) throw new js__$Boot_HaxeError("Error");
	} else if(x0 >= x + 1) {
		if(!(x1 >= x + 1)) throw new js__$Boot_HaxeError("Error");
	} else if(!(x1 >= x && x1 <= x + 1)) throw new js__$Boot_HaxeError("Error");
	if(x0 <= x && x1 <= x) {
		var _g = scanlineIndex + x;
		scanline[_g] = scanline[_g] + e.direction * (y1 - y0);
	} else if(x0 >= x + 1 && x1 >= x + 1) {
	} else {
		if(!(x0 >= x && x0 <= x + 1 && x1 >= x && x1 <= x + 1)) throw new js__$Boot_HaxeError("Error");
		var _g1 = scanlineIndex + x;
		scanline[_g1] = scanline[_g1] + e.direction * (y1 - y0) * (1 - (x0 - x + (x1 - x)) / 2);
	}
};
kha_graphics2_truetype_StbTruetype.stbtt__fill_active_edges_new = function(scanline,scanline_fill,scanline_fillIndex,len,e,y_top) {
	var y_bottom = y_top + 1;
	while(e != null) {
		if(!(e.ey >= y_top)) throw new js__$Boot_HaxeError("Error");
		if(e.fdx == 0) {
			var x0 = e.fx;
			if(x0 < len) {
				if(x0 >= 0) {
					kha_graphics2_truetype_StbTruetype.stbtt__handle_clipped_edge(scanline,0,x0 | 0,e,x0,y_top,x0,y_bottom);
					kha_graphics2_truetype_StbTruetype.stbtt__handle_clipped_edge(scanline_fill,scanline_fillIndex - 1,x0 + 1 | 0,e,x0,y_top,x0,y_bottom);
				} else kha_graphics2_truetype_StbTruetype.stbtt__handle_clipped_edge(scanline_fill,scanline_fillIndex - 1,0,e,x0,y_top,x0,y_bottom);
			}
		} else {
			var x01 = e.fx;
			var dx = e.fdx;
			var xb = x01 + dx;
			var x_top;
			var x_bottom;
			var sy0;
			var sy1;
			var dy = e.fdy;
			if(!(e.sy <= y_bottom && e.ey >= y_top)) throw new js__$Boot_HaxeError("Error");
			if(e.sy > y_top) {
				x_top = x01 + dx * (e.sy - y_top);
				sy0 = e.sy;
			} else {
				x_top = x01;
				sy0 = y_top;
			}
			if(e.ey < y_bottom) {
				x_bottom = x01 + dx * (e.ey - y_top);
				sy1 = e.ey;
			} else {
				x_bottom = xb;
				sy1 = y_bottom;
			}
			if(x_top >= 0 && x_bottom >= 0 && x_top < len && x_bottom < len) {
				if((x_top | 0) == (x_bottom | 0)) {
					var height;
					var x = x_top | 0;
					height = sy1 - sy0;
					if(!(x >= 0 && x < len)) throw new js__$Boot_HaxeError("Error");
					var _g = x;
					scanline[_g] = scanline[_g] + e.direction * (1 - (x_top - x + (x_bottom - x)) / 2) * height;
					var _g1 = scanline_fillIndex + x;
					scanline_fill[_g1] = scanline_fill[_g1] + e.direction * height;
				} else {
					var x1;
					var x11;
					var x2;
					var y_crossing;
					var step;
					var sign;
					var area;
					if(x_top > x_bottom) {
						var t;
						sy0 = y_bottom - (sy0 - y_top);
						sy1 = y_bottom - (sy1 - y_top);
						t = sy0;
						sy0 = sy1;
						sy1 = t;
						t = x_bottom;
						x_bottom = x_top;
						x_top = t;
						dx = -dx;
						dy = -dy;
						t = x01;
						x01 = xb;
						xb = t;
					}
					x11 = x_top | 0;
					x2 = x_bottom | 0;
					y_crossing = (x11 + 1 - x01) * dy + y_top;
					sign = e.direction;
					area = sign * (y_crossing - sy0);
					var _g2 = x11;
					scanline[_g2] = scanline[_g2] + area * (1 - (x_top - x11 + (x11 + 1 - x11)) / 2);
					step = sign * dy;
					var _g3 = x11 + 1;
					while(_g3 < x2) {
						var x3 = _g3++;
						var _g11 = x3;
						scanline[_g11] = scanline[_g11] + (area + step / 2);
						area += step;
					}
					y_crossing += dy * (x2 - (x11 + 1));
					kha_graphics2_truetype_StbTruetype.STBTT_assert(Math.abs(area) <= 1.01);
					var _g4 = x2;
					scanline[_g4] = scanline[_g4] + (area + sign * (1 - (x2 - x2 + (x_bottom - x2)) / 2) * (sy1 - y_crossing));
					var _g5 = scanline_fillIndex + x2;
					scanline_fill[_g5] = scanline_fill[_g5] + sign * (sy1 - sy0);
				}
			} else {
				var _g6 = 0;
				while(_g6 < len) {
					var x4 = _g6++;
					var y0 = y_top;
					var x12 = x4;
					var x21 = x4 + 1;
					var x31 = xb;
					var y3 = y_bottom;
					var y1;
					var y2;
					y1 = (x4 - x01) / dx + y_top;
					y2 = (x4 + 1 - x01) / dx + y_top;
					if(x01 < x12 && x31 > x21) {
						kha_graphics2_truetype_StbTruetype.stbtt__handle_clipped_edge(scanline,0,x4,e,x01,y0,x12,y1);
						kha_graphics2_truetype_StbTruetype.stbtt__handle_clipped_edge(scanline,0,x4,e,x12,y1,x21,y2);
						kha_graphics2_truetype_StbTruetype.stbtt__handle_clipped_edge(scanline,0,x4,e,x21,y2,x31,y3);
					} else if(x31 < x12 && x01 > x21) {
						kha_graphics2_truetype_StbTruetype.stbtt__handle_clipped_edge(scanline,0,x4,e,x01,y0,x21,y2);
						kha_graphics2_truetype_StbTruetype.stbtt__handle_clipped_edge(scanline,0,x4,e,x21,y2,x12,y1);
						kha_graphics2_truetype_StbTruetype.stbtt__handle_clipped_edge(scanline,0,x4,e,x12,y1,x31,y3);
					} else if(x01 < x12 && x31 > x12) {
						kha_graphics2_truetype_StbTruetype.stbtt__handle_clipped_edge(scanline,0,x4,e,x01,y0,x12,y1);
						kha_graphics2_truetype_StbTruetype.stbtt__handle_clipped_edge(scanline,0,x4,e,x12,y1,x31,y3);
					} else if(x31 < x12 && x01 > x12) {
						kha_graphics2_truetype_StbTruetype.stbtt__handle_clipped_edge(scanline,0,x4,e,x01,y0,x12,y1);
						kha_graphics2_truetype_StbTruetype.stbtt__handle_clipped_edge(scanline,0,x4,e,x12,y1,x31,y3);
					} else if(x01 < x21 && x31 > x21) {
						kha_graphics2_truetype_StbTruetype.stbtt__handle_clipped_edge(scanline,0,x4,e,x01,y0,x21,y2);
						kha_graphics2_truetype_StbTruetype.stbtt__handle_clipped_edge(scanline,0,x4,e,x21,y2,x31,y3);
					} else if(x31 < x21 && x01 > x21) {
						kha_graphics2_truetype_StbTruetype.stbtt__handle_clipped_edge(scanline,0,x4,e,x01,y0,x21,y2);
						kha_graphics2_truetype_StbTruetype.stbtt__handle_clipped_edge(scanline,0,x4,e,x21,y2,x31,y3);
					} else kha_graphics2_truetype_StbTruetype.stbtt__handle_clipped_edge(scanline,0,x4,e,x01,y0,x31,y3);
				}
			}
		}
		e = e.next;
	}
};
kha_graphics2_truetype_StbTruetype.stbtt__rasterize_sorted_edges = function(result,e,n,vsubsample,off_x,off_y) {
	var active = null;
	var y;
	var j = 0;
	var i;
	var scanline;
	var scanline2;
	var scanline2Index = 0;
	var eIndex = 0;
	if(result.w > 64) {
		var this1;
		this1 = new Array(result.w * 2 + 1);
		scanline = this1;
	} else {
		var this2;
		this2 = new Array(129);
		scanline = this2;
	}
	scanline2 = scanline;
	scanline2Index = result.w;
	y = off_y;
	e[eIndex + n].y0 = off_y + result.h + 1;
	while(j < result.h) {
		var scan_y_top = y + 0.0;
		var scan_y_bottom = y + 1.0;
		var step_value = active;
		var step_parent = null;
		var _g1 = 0;
		var _g = result.w;
		while(_g1 < _g) {
			var i1 = _g1++;
			scanline[i1] = 0;
		}
		var _g11 = 0;
		var _g2 = result.w + 1;
		while(_g11 < _g2) {
			var i2 = _g11++;
			scanline2[scanline2Index + i2] = 0;
		}
		while(step_value != null) {
			var z = step_value;
			if(z.ey <= scan_y_top) {
				if(step_parent == null) {
					active = z.next;
					step_value = z.next;
				} else {
					step_parent.next = z.next;
					step_value = z.next;
				}
				if(!(z.direction != 0)) throw new js__$Boot_HaxeError("Error");
				z.direction = 0;
			} else {
				step_parent = step_value;
				step_value = step_value.next;
			}
		}
		while(e[eIndex].y0 <= scan_y_bottom) {
			if(e[eIndex].y0 != e[eIndex].y1) {
				var z1 = kha_graphics2_truetype_StbTruetype.stbtt__new_active(e,eIndex,off_x,scan_y_top);
				if(!(z1.ey >= scan_y_top)) throw new js__$Boot_HaxeError("Error");
				z1.next = active;
				active = z1;
			}
			++eIndex;
		}
		if(active != null) kha_graphics2_truetype_StbTruetype.stbtt__fill_active_edges_new(scanline,scanline2,scanline2Index + 1,result.w,active,scan_y_top);
		var sum = 0;
		var _g12 = 0;
		var _g3 = result.w;
		while(_g12 < _g3) {
			var i3 = _g12++;
			var k;
			var m;
			sum += scanline2[scanline2Index + i3];
			k = scanline[i3] + sum;
			k = Math.abs(k) * 255.0 + 0.5;
			m = k | 0;
			if(m > 255) m = 255;
			result.pixels.writeU8(result.pixels_offset + j * result.stride + i3,m);
		}
		step_parent = null;
		step_value = active;
		while(step_value != null) {
			var z2 = step_value;
			z2.fx += z2.fdx;
			step_parent = step_value;
			step_value = step_value.next;
		}
		++y;
		++j;
	}
};
kha_graphics2_truetype_StbTruetype.STBTT__COMPARE = function(a,b) {
	return a.y0 < b.y0;
};
kha_graphics2_truetype_StbTruetype.stbtt__sort_edges_ins_sort = function(p,n) {
	var i;
	var j;
	var _g = 1;
	while(_g < n) {
		var i1 = _g++;
		var t = p[i1];
		var a = t;
		j = i1;
		while(j > 0) {
			var b = p[j - 1];
			var c = kha_graphics2_truetype_StbTruetype.STBTT__COMPARE(a,b);
			if(!c) break;
			p[j] = p[j - 1];
			--j;
		}
		if(i1 != j) p[j] = t;
	}
};
kha_graphics2_truetype_StbTruetype.stbtt__sort_edges_quicksort = function(p,pIndex,n) {
	while(n > 12) {
		var t;
		var c01;
		var c12;
		var c;
		var m;
		var i;
		var j;
		m = n >> 1;
		c01 = kha_graphics2_truetype_StbTruetype.STBTT__COMPARE(p[pIndex],p[pIndex + m]);
		c12 = kha_graphics2_truetype_StbTruetype.STBTT__COMPARE(p[pIndex + m],p[pIndex + n - 1]);
		if(c01 != c12) {
			var z;
			c = kha_graphics2_truetype_StbTruetype.STBTT__COMPARE(p[pIndex],p[pIndex + n - 1]);
			if(c == c12) z = 0; else z = n - 1;
			t = p[pIndex + z];
			p[pIndex + z] = p[pIndex + m];
			p[pIndex + m] = t;
		}
		t = p[pIndex];
		p[pIndex] = p[pIndex + m];
		p[pIndex + m] = t;
		i = 1;
		j = n - 1;
		while(true) {
			while(true) {
				if(!kha_graphics2_truetype_StbTruetype.STBTT__COMPARE(p[pIndex + i],p[pIndex])) break;
				++i;
			}
			while(true) {
				if(!kha_graphics2_truetype_StbTruetype.STBTT__COMPARE(p[pIndex],p[pIndex + j])) break;
				--j;
			}
			if(i >= j) break;
			t = p[pIndex + i];
			p[pIndex + i] = p[pIndex + j];
			p[pIndex + j] = t;
			++i;
			--j;
		}
		if(j < n - i) {
			kha_graphics2_truetype_StbTruetype.stbtt__sort_edges_quicksort(p,pIndex,j);
			pIndex += i;
			n = n - i;
		} else {
			kha_graphics2_truetype_StbTruetype.stbtt__sort_edges_quicksort(p,pIndex + i,n - i);
			n = j;
		}
	}
};
kha_graphics2_truetype_StbTruetype.stbtt__sort_edges = function(p,n) {
	kha_graphics2_truetype_StbTruetype.stbtt__sort_edges_quicksort(p,0,n);
	kha_graphics2_truetype_StbTruetype.stbtt__sort_edges_ins_sort(p,n);
};
kha_graphics2_truetype_StbTruetype.stbtt__rasterize = function(result,pts,wcount,windings,scale_x,scale_y,shift_x,shift_y,off_x,off_y,invert) {
	var y_scale_inv;
	if(invert) y_scale_inv = -scale_y; else y_scale_inv = scale_y;
	var e;
	var n;
	var i;
	var j;
	var k;
	var m;
	var vsubsample = 1;
	var ptsIndex = 0;
	n = 0;
	var _g = 0;
	while(_g < windings) {
		var i1 = _g++;
		n += wcount[i1];
	}
	var this1;
	this1 = new Array(n + 1);
	e = this1;
	if(e == null) return; else {
		var _g1 = 0;
		var _g2 = e.length;
		while(_g1 < _g2) {
			var i2 = _g1++;
			var val = new kha_graphics2_truetype_Stbtt_$_$edge();
			e[i2] = val;
		}
	}
	n = 0;
	m = 0;
	var _g3 = 0;
	while(_g3 < windings) {
		var i3 = _g3++;
		var p = pts;
		var pIndex = ptsIndex + m;
		m += wcount[i3];
		j = wcount[i3] - 1;
		var _g21 = 0;
		var _g11 = wcount[i3];
		while(_g21 < _g11) {
			var k1 = _g21++;
			var a = k1;
			var b = j;
			if(p[pIndex + j].y == p[pIndex + k1].y) {
				j = k1;
				continue;
			}
			e[n].invert = false;
			if(invert?p[pIndex + j].y > p[pIndex + k1].y:p[pIndex + j].y < p[pIndex + k1].y) {
				e[n].invert = true;
				a = j;
				b = k1;
			}
			e[n].x0 = p[pIndex + a].x * scale_x + shift_x;
			e[n].y0 = (p[pIndex + a].y * y_scale_inv + shift_y) * vsubsample;
			e[n].x1 = p[pIndex + b].x * scale_x + shift_x;
			e[n].y1 = (p[pIndex + b].y * y_scale_inv + shift_y) * vsubsample;
			++n;
			j = k1;
		}
	}
	kha_graphics2_truetype_StbTruetype.stbtt__sort_edges(e,n);
	kha_graphics2_truetype_StbTruetype.stbtt__rasterize_sorted_edges(result,e,n,vsubsample,off_x,off_y);
};
kha_graphics2_truetype_StbTruetype.stbtt__add_point = function(points,n,x,y) {
	if(points == null) return;
	points[n].x = x;
	points[n].y = y;
};
kha_graphics2_truetype_StbTruetype.stbtt__tesselate_curve = function(points,num_points,x0,y0,x1,y1,x2,y2,objspace_flatness_squared,n) {
	var mx = (x0 + 2 * x1 + x2) / 4;
	var my = (y0 + 2 * y1 + y2) / 4;
	var dx = (x0 + x2) / 2 - mx;
	var dy = (y0 + y2) / 2 - my;
	if(n > 16) return 1;
	if(dx * dx + dy * dy > objspace_flatness_squared) {
		kha_graphics2_truetype_StbTruetype.stbtt__tesselate_curve(points,num_points,x0,y0,(x0 + x1) / 2.0,(y0 + y1) / 2.0,mx,my,objspace_flatness_squared,n + 1);
		kha_graphics2_truetype_StbTruetype.stbtt__tesselate_curve(points,num_points,mx,my,(x1 + x2) / 2.0,(y1 + y2) / 2.0,x2,y2,objspace_flatness_squared,n + 1);
	} else {
		kha_graphics2_truetype_StbTruetype.stbtt__add_point(points,num_points.value,x2,y2);
		num_points.value = num_points.value + 1;
	}
	return 1;
};
kha_graphics2_truetype_StbTruetype.stbtt_FlattenCurves = function(vertices,num_verts,objspace_flatness,contour_lengths,num_contours) {
	var points = null;
	var num_points = 0;
	var objspace_flatness_squared = objspace_flatness * objspace_flatness;
	var i;
	var n = 0;
	var start = 0;
	var pass;
	var _g = 0;
	while(_g < num_verts) {
		var i1 = _g++;
		if(vertices[i1].type == 1) ++n;
	}
	num_contours.value = n;
	if(n == 0) return null;
	var this1;
	this1 = new Array(n);
	contour_lengths.value = this1;
	if(contour_lengths.value == null) {
		num_contours.value = 0;
		return null;
	}
	var _g1 = 0;
	while(_g1 < 2) {
		var pass1 = _g1++;
		var x = 0;
		var y = 0;
		if(pass1 == 1) {
			var this2;
			this2 = new Array(num_points);
			points = this2;
			if(points == null) {
				contour_lengths.value = null;
				num_contours.value = 0;
				return null;
			} else {
				var _g2 = 0;
				var _g11 = points.length;
				while(_g2 < _g11) {
					var i2 = _g2++;
					var val = new kha_graphics2_truetype_Stbtt_$_$point();
					points[i2] = val;
				}
			}
		}
		num_points = 0;
		n = -1;
		var _g12 = 0;
		while(_g12 < num_verts) {
			var i3 = _g12++;
			var _g21 = vertices[i3].type;
			switch(_g21) {
			case 1:
				if(n >= 0) contour_lengths.value[n] = num_points - start;
				++n;
				start = num_points;
				x = vertices[i3].x;
				y = vertices[i3].y;
				kha_graphics2_truetype_StbTruetype.stbtt__add_point(points,num_points++,x,y);
				break;
			case 2:
				x = vertices[i3].x;
				y = vertices[i3].y;
				kha_graphics2_truetype_StbTruetype.stbtt__add_point(points,num_points++,x,y);
				break;
			case 3:
				var num_points_reference = { value : num_points};
				kha_graphics2_truetype_StbTruetype.stbtt__tesselate_curve(points,num_points_reference,x,y,vertices[i3].cx,vertices[i3].cy,vertices[i3].x,vertices[i3].y,objspace_flatness_squared,0);
				num_points = num_points_reference.value;
				x = vertices[i3].x;
				y = vertices[i3].y;
				break;
			}
		}
		contour_lengths.value[n] = num_points - start;
	}
	return points;
};
kha_graphics2_truetype_StbTruetype.stbtt_Rasterize = function(result,flatness_in_pixels,vertices,num_verts,scale_x,scale_y,shift_x,shift_y,x_off,y_off,invert) {
	var scale;
	if(scale_x > scale_y) scale = scale_y; else scale = scale_x;
	var winding_count = 0;
	var winding_lengths = null;
	var winding_count_reference = { value : winding_count};
	var winding_lengths_reference = { value : winding_lengths};
	var windings = kha_graphics2_truetype_StbTruetype.stbtt_FlattenCurves(vertices,num_verts,flatness_in_pixels / scale,winding_lengths_reference,winding_count_reference);
	winding_count = winding_count_reference.value;
	winding_lengths = winding_lengths_reference.value;
	if(windings != null) kha_graphics2_truetype_StbTruetype.stbtt__rasterize(result,windings,winding_lengths,winding_count,scale_x,scale_y,shift_x,shift_y,x_off,y_off,invert);
};
kha_graphics2_truetype_StbTruetype.stbtt_GetGlyphBitmapSubpixel = function(info,scale_x,scale_y,shift_x,shift_y,glyph,region) {
	var ix0;
	var iy0;
	var ix1;
	var iy1;
	var gbm = new kha_graphics2_truetype_Stbtt_$_$bitmap();
	var vertices = kha_graphics2_truetype_StbTruetype.stbtt_GetGlyphShape(info,glyph);
	var num_verts = vertices.length;
	if(scale_x == 0) scale_x = scale_y;
	if(scale_y == 0) {
		if(scale_x == 0) return null;
		scale_y = scale_x;
	}
	var rect = kha_graphics2_truetype_StbTruetype.stbtt_GetGlyphBitmapBoxSubpixel(info,glyph,scale_x,scale_y,shift_x,shift_y);
	ix0 = rect.x0;
	iy0 = rect.y0;
	ix1 = rect.x1;
	iy1 = rect.y1;
	gbm.w = ix1 - ix0;
	gbm.h = iy1 - iy0;
	gbm.pixels = null;
	region.width = gbm.w;
	region.height = gbm.h;
	region.xoff = ix0;
	region.yoff = iy0;
	if(gbm.w != 0 && gbm.h != 0) {
		gbm.pixels = kha_internal_BytesBlob.alloc(gbm.w * gbm.h);
		if(gbm.pixels != null) {
			gbm.stride = gbm.w;
			kha_graphics2_truetype_StbTruetype.stbtt_Rasterize(gbm,0.35,vertices,num_verts,scale_x,scale_y,shift_x,shift_y,ix0,iy0,true);
		}
	}
	return gbm.pixels;
};
kha_graphics2_truetype_StbTruetype.stbtt_GetGlyphBitmap = function(info,scale_x,scale_y,glyph,region) {
	return kha_graphics2_truetype_StbTruetype.stbtt_GetGlyphBitmapSubpixel(info,scale_x,scale_y,0.0,0.0,glyph,region);
};
kha_graphics2_truetype_StbTruetype.stbtt_MakeGlyphBitmapSubpixel = function(info,output,output_offset,out_w,out_h,out_stride,scale_x,scale_y,shift_x,shift_y,glyph) {
	var ix0 = 0;
	var iy0 = 0;
	var vertices = kha_graphics2_truetype_StbTruetype.stbtt_GetGlyphShape(info,glyph);
	var num_verts;
	if(vertices == null) num_verts = 0; else num_verts = vertices.length;
	var gbm = new kha_graphics2_truetype_Stbtt_$_$bitmap();
	var rect = kha_graphics2_truetype_StbTruetype.stbtt_GetGlyphBitmapBoxSubpixel(info,glyph,scale_x,scale_y,shift_x,shift_y);
	ix0 = rect.x0;
	iy0 = rect.y0;
	gbm.pixels = output;
	gbm.pixels_offset = output_offset;
	gbm.w = out_w;
	gbm.h = out_h;
	gbm.stride = out_stride;
	if(gbm.w != 0 && gbm.h != 0) kha_graphics2_truetype_StbTruetype.stbtt_Rasterize(gbm,0.35,vertices,num_verts,scale_x,scale_y,shift_x,shift_y,ix0,iy0,true);
};
kha_graphics2_truetype_StbTruetype.stbtt_MakeGlyphBitmap = function(info,output,output_offset,out_w,out_h,out_stride,scale_x,scale_y,glyph) {
	kha_graphics2_truetype_StbTruetype.stbtt_MakeGlyphBitmapSubpixel(info,output,output_offset,out_w,out_h,out_stride,scale_x,scale_y,0.0,0.0,glyph);
};
kha_graphics2_truetype_StbTruetype.stbtt_GetCodepointBitmapSubpixel = function(info,scale_x,scale_y,shift_x,shift_y,codepoint,region) {
	return kha_graphics2_truetype_StbTruetype.stbtt_GetGlyphBitmapSubpixel(info,scale_x,scale_y,shift_x,shift_y,kha_graphics2_truetype_StbTruetype.stbtt_FindGlyphIndex(info,codepoint),region);
};
kha_graphics2_truetype_StbTruetype.stbtt_MakeCodepointBitmapSubpixel = function(info,output,output_offset,out_w,out_h,out_stride,scale_x,scale_y,shift_x,shift_y,codepoint) {
	kha_graphics2_truetype_StbTruetype.stbtt_MakeGlyphBitmapSubpixel(info,output,output_offset,out_w,out_h,out_stride,scale_x,scale_y,shift_x,shift_y,kha_graphics2_truetype_StbTruetype.stbtt_FindGlyphIndex(info,codepoint));
};
kha_graphics2_truetype_StbTruetype.stbtt_GetCodepointBitmap = function(info,scale_x,scale_y,codepoint,region) {
	return kha_graphics2_truetype_StbTruetype.stbtt_GetCodepointBitmapSubpixel(info,scale_x,scale_y,0.0,0.0,codepoint,region);
};
kha_graphics2_truetype_StbTruetype.stbtt_MakeCodepointBitmap = function(info,output,output_offset,out_w,out_h,out_stride,scale_x,scale_y,codepoint) {
	kha_graphics2_truetype_StbTruetype.stbtt_MakeCodepointBitmapSubpixel(info,output,output_offset,out_w,out_h,out_stride,scale_x,scale_y,0.0,0.0,codepoint);
};
kha_graphics2_truetype_StbTruetype.stbtt_BakeFontBitmap = function(data,offset,pixel_height,pixels,pw,ph,first_char,num_chars,chardata) {
	var scale;
	var x;
	var y;
	var bottom_y;
	var f = new kha_graphics2_truetype_Stbtt_$fontinfo();
	if(!kha_graphics2_truetype_StbTruetype.stbtt_InitFont(f,data,offset)) return -1;
	var _g1 = 0;
	var _g = pw * ph;
	while(_g1 < _g) {
		var i = _g1++;
		pixels.writeU8(i,0);
	}
	x = y = 1;
	bottom_y = 1;
	scale = kha_graphics2_truetype_StbTruetype.stbtt_ScaleForPixelHeight(f,pixel_height);
	var _g2 = 0;
	while(_g2 < num_chars) {
		var i1 = _g2++;
		var advance;
		var lsb;
		var x0;
		var y0;
		var x1;
		var y1;
		var gw;
		var gh;
		var g = kha_graphics2_truetype_StbTruetype.stbtt_FindGlyphIndex(f,first_char + i1);
		var metrics = kha_graphics2_truetype_StbTruetype.stbtt_GetGlyphHMetrics(f,g);
		advance = metrics.advanceWidth;
		lsb = metrics.leftSideBearing;
		var rect = kha_graphics2_truetype_StbTruetype.stbtt_GetGlyphBitmapBox(f,g,scale,scale);
		x0 = rect.x0;
		y0 = rect.y0;
		x1 = rect.x1;
		y1 = rect.y1;
		gw = x1 - x0;
		gh = y1 - y0;
		if(x + gw + 1 >= pw) {
			y = bottom_y;
			x = 1;
		}
		if(y + gh + 1 >= ph) return -i1;
		if(!(x + gw < pw)) throw new js__$Boot_HaxeError("Error");
		if(!(y + gh < ph)) throw new js__$Boot_HaxeError("Error");
		kha_graphics2_truetype_StbTruetype.stbtt_MakeGlyphBitmap(f,pixels,x + y * pw,gw,gh,pw,scale,scale,g);
		chardata[i1].x0 = x;
		chardata[i1].y0 = y;
		chardata[i1].x1 = x + gw;
		chardata[i1].y1 = y + gh;
		chardata[i1].xadvance = scale * advance;
		chardata[i1].xoff = x0;
		chardata[i1].yoff = y0;
		x = x + gw + 1;
		if(y + gh + 1 > bottom_y) bottom_y = y + gh + 1;
	}
	return bottom_y;
};
kha_graphics2_truetype_StbTruetype.stbtt_GetBakedQuad = function(chardata,pw,ph,char_index,xpos,ypos,q,opengl_fillrule) {
	var d3d_bias;
	if(opengl_fillrule) d3d_bias = 0; else d3d_bias = -0.5;
	var ipw = 1.0 / pw;
	var iph = 1.0 / ph;
	var b = chardata[char_index];
	var round_x = Math.floor(xpos.value + b.xoff + 0.5);
	var round_y = Math.floor(ypos.value + b.yoff + 0.5);
	q.x0 = round_x + d3d_bias;
	q.y0 = round_y + d3d_bias;
	q.x1 = round_x + b.x1 - b.x0 + d3d_bias;
	q.y1 = round_y + b.y1 - b.y0 + d3d_bias;
	q.s0 = b.x0 * ipw;
	q.t0 = b.y0 * iph;
	q.s1 = b.x1 * ipw;
	q.t1 = b.y1 * iph;
	xpos.value += b.xadvance;
};
var kha_graphics4_BlendingOperation = $hxClasses["kha.graphics4.BlendingOperation"] = { __ename__ : ["kha","graphics4","BlendingOperation"], __constructs__ : ["Undefined","BlendOne","BlendZero","SourceAlpha","DestinationAlpha","InverseSourceAlpha","InverseDestinationAlpha"] };
kha_graphics4_BlendingOperation.Undefined = ["Undefined",0];
kha_graphics4_BlendingOperation.Undefined.toString = $estr;
kha_graphics4_BlendingOperation.Undefined.__enum__ = kha_graphics4_BlendingOperation;
kha_graphics4_BlendingOperation.BlendOne = ["BlendOne",1];
kha_graphics4_BlendingOperation.BlendOne.toString = $estr;
kha_graphics4_BlendingOperation.BlendOne.__enum__ = kha_graphics4_BlendingOperation;
kha_graphics4_BlendingOperation.BlendZero = ["BlendZero",2];
kha_graphics4_BlendingOperation.BlendZero.toString = $estr;
kha_graphics4_BlendingOperation.BlendZero.__enum__ = kha_graphics4_BlendingOperation;
kha_graphics4_BlendingOperation.SourceAlpha = ["SourceAlpha",3];
kha_graphics4_BlendingOperation.SourceAlpha.toString = $estr;
kha_graphics4_BlendingOperation.SourceAlpha.__enum__ = kha_graphics4_BlendingOperation;
kha_graphics4_BlendingOperation.DestinationAlpha = ["DestinationAlpha",4];
kha_graphics4_BlendingOperation.DestinationAlpha.toString = $estr;
kha_graphics4_BlendingOperation.DestinationAlpha.__enum__ = kha_graphics4_BlendingOperation;
kha_graphics4_BlendingOperation.InverseSourceAlpha = ["InverseSourceAlpha",5];
kha_graphics4_BlendingOperation.InverseSourceAlpha.toString = $estr;
kha_graphics4_BlendingOperation.InverseSourceAlpha.__enum__ = kha_graphics4_BlendingOperation;
kha_graphics4_BlendingOperation.InverseDestinationAlpha = ["InverseDestinationAlpha",6];
kha_graphics4_BlendingOperation.InverseDestinationAlpha.toString = $estr;
kha_graphics4_BlendingOperation.InverseDestinationAlpha.__enum__ = kha_graphics4_BlendingOperation;
var kha_graphics4_CompareMode = $hxClasses["kha.graphics4.CompareMode"] = { __ename__ : ["kha","graphics4","CompareMode"], __constructs__ : ["Always","Never","Equal","NotEqual","Less","LessEqual","Greater","GreaterEqual"] };
kha_graphics4_CompareMode.Always = ["Always",0];
kha_graphics4_CompareMode.Always.toString = $estr;
kha_graphics4_CompareMode.Always.__enum__ = kha_graphics4_CompareMode;
kha_graphics4_CompareMode.Never = ["Never",1];
kha_graphics4_CompareMode.Never.toString = $estr;
kha_graphics4_CompareMode.Never.__enum__ = kha_graphics4_CompareMode;
kha_graphics4_CompareMode.Equal = ["Equal",2];
kha_graphics4_CompareMode.Equal.toString = $estr;
kha_graphics4_CompareMode.Equal.__enum__ = kha_graphics4_CompareMode;
kha_graphics4_CompareMode.NotEqual = ["NotEqual",3];
kha_graphics4_CompareMode.NotEqual.toString = $estr;
kha_graphics4_CompareMode.NotEqual.__enum__ = kha_graphics4_CompareMode;
kha_graphics4_CompareMode.Less = ["Less",4];
kha_graphics4_CompareMode.Less.toString = $estr;
kha_graphics4_CompareMode.Less.__enum__ = kha_graphics4_CompareMode;
kha_graphics4_CompareMode.LessEqual = ["LessEqual",5];
kha_graphics4_CompareMode.LessEqual.toString = $estr;
kha_graphics4_CompareMode.LessEqual.__enum__ = kha_graphics4_CompareMode;
kha_graphics4_CompareMode.Greater = ["Greater",6];
kha_graphics4_CompareMode.Greater.toString = $estr;
kha_graphics4_CompareMode.Greater.__enum__ = kha_graphics4_CompareMode;
kha_graphics4_CompareMode.GreaterEqual = ["GreaterEqual",7];
kha_graphics4_CompareMode.GreaterEqual.toString = $estr;
kha_graphics4_CompareMode.GreaterEqual.__enum__ = kha_graphics4_CompareMode;
var kha_graphics4_ConstantLocation = function() { };
$hxClasses["kha.graphics4.ConstantLocation"] = kha_graphics4_ConstantLocation;
kha_graphics4_ConstantLocation.__name__ = ["kha","graphics4","ConstantLocation"];
var kha_graphics4_CubeMap = function() { };
$hxClasses["kha.graphics4.CubeMap"] = kha_graphics4_CubeMap;
kha_graphics4_CubeMap.__name__ = ["kha","graphics4","CubeMap"];
kha_graphics4_CubeMap.prototype = {
	get_size: null
	,size: null
	,lock: null
	,unlock: null
	,__class__: kha_graphics4_CubeMap
	,__properties__: {get_size:"get_size"}
};
var kha_graphics4_CullMode = $hxClasses["kha.graphics4.CullMode"] = { __ename__ : ["kha","graphics4","CullMode"], __constructs__ : ["Clockwise","CounterClockwise","None"] };
kha_graphics4_CullMode.Clockwise = ["Clockwise",0];
kha_graphics4_CullMode.Clockwise.toString = $estr;
kha_graphics4_CullMode.Clockwise.__enum__ = kha_graphics4_CullMode;
kha_graphics4_CullMode.CounterClockwise = ["CounterClockwise",1];
kha_graphics4_CullMode.CounterClockwise.toString = $estr;
kha_graphics4_CullMode.CounterClockwise.__enum__ = kha_graphics4_CullMode;
kha_graphics4_CullMode.None = ["None",2];
kha_graphics4_CullMode.None.toString = $estr;
kha_graphics4_CullMode.None.__enum__ = kha_graphics4_CullMode;
var kha_graphics4_FragmentShader = function(source) {
	this.source = source.toString();
	this.type = 35632;
	this.shader = null;
};
$hxClasses["kha.graphics4.FragmentShader"] = kha_graphics4_FragmentShader;
kha_graphics4_FragmentShader.__name__ = ["kha","graphics4","FragmentShader"];
kha_graphics4_FragmentShader.prototype = {
	source: null
	,type: null
	,shader: null
	,__class__: kha_graphics4_FragmentShader
};
var kha_graphics4_Graphics = function() { };
$hxClasses["kha.graphics4.Graphics"] = kha_graphics4_Graphics;
kha_graphics4_Graphics.__name__ = ["kha","graphics4","Graphics"];
kha_graphics4_Graphics.prototype = {
	begin: null
	,end: null
	,vsynced: null
	,refreshRate: null
	,clear: null
	,viewport: null
	,scissor: null
	,disableScissor: null
	,setVertexBuffer: null
	,setVertexBuffers: null
	,setIndexBuffer: null
	,setTexture: null
	,setVideoTexture: null
	,setTextureParameters: null
	,createCubeMap: null
	,renderTargetsInvertedY: null
	,instancedRenderingAvailable: null
	,setPipeline: null
	,setBool: null
	,setInt: null
	,setFloat: null
	,setFloat2: null
	,setFloat3: null
	,setFloat4: null
	,setFloats: null
	,setVector2: null
	,setVector3: null
	,setVector4: null
	,setMatrix: null
	,drawIndexedVertices: null
	,drawIndexedVerticesInstanced: null
	,flush: null
	,__class__: kha_graphics4_Graphics
};
var kha_graphics4_ImageShaderPainter = function(g4) {
	this.destinationBlend = kha_graphics4_BlendingOperation.Undefined;
	this.sourceBlend = kha_graphics4_BlendingOperation.Undefined;
	this.myPipeline = null;
	this.bilinear = false;
	this.g = g4;
	this.bufferIndex = 0;
	kha_graphics4_ImageShaderPainter.initShaders();
	this.initBuffers();
	this.projectionLocation = kha_graphics4_ImageShaderPainter.shaderPipeline.getConstantLocation("projectionMatrix");
	this.textureLocation = kha_graphics4_ImageShaderPainter.shaderPipeline.getTextureUnit("tex");
};
$hxClasses["kha.graphics4.ImageShaderPainter"] = kha_graphics4_ImageShaderPainter;
kha_graphics4_ImageShaderPainter.__name__ = ["kha","graphics4","ImageShaderPainter"];
kha_graphics4_ImageShaderPainter.initShaders = function() {
	if(kha_graphics4_ImageShaderPainter.shaderPipeline != null) return;
	kha_graphics4_ImageShaderPainter.shaderPipeline = new kha_graphics4_PipelineState();
	kha_graphics4_ImageShaderPainter.shaderPipeline.fragmentShader = kha_Shaders.painter_image_frag;
	kha_graphics4_ImageShaderPainter.shaderPipeline.vertexShader = kha_Shaders.painter_image_vert;
	kha_graphics4_ImageShaderPainter.structure = new kha_graphics4_VertexStructure();
	kha_graphics4_ImageShaderPainter.structure.add("vertexPosition",kha_graphics4_VertexData.Float3);
	kha_graphics4_ImageShaderPainter.structure.add("texPosition",kha_graphics4_VertexData.Float2);
	kha_graphics4_ImageShaderPainter.structure.add("vertexColor",kha_graphics4_VertexData.Float4);
	kha_graphics4_ImageShaderPainter.shaderPipeline.inputLayout = [kha_graphics4_ImageShaderPainter.structure];
	kha_graphics4_ImageShaderPainter.shaderPipeline.blendSource = kha_graphics4_BlendingOperation.BlendOne;
	kha_graphics4_ImageShaderPainter.shaderPipeline.blendDestination = kha_graphics4_BlendingOperation.InverseSourceAlpha;
	kha_graphics4_ImageShaderPainter.shaderPipeline.compile();
};
kha_graphics4_ImageShaderPainter.prototype = {
	projectionMatrix: null
	,projectionLocation: null
	,textureLocation: null
	,bufferIndex: null
	,rectVertexBuffer: null
	,rectVertices: null
	,indexBuffer: null
	,lastTexture: null
	,bilinear: null
	,g: null
	,myPipeline: null
	,sourceBlend: null
	,destinationBlend: null
	,get_pipeline: function() {
		return this.myPipeline;
	}
	,set_pipeline: function(pipe) {
		if(pipe == null) {
			this.projectionLocation = kha_graphics4_ImageShaderPainter.shaderPipeline.getConstantLocation("projectionMatrix");
			this.textureLocation = kha_graphics4_ImageShaderPainter.shaderPipeline.getTextureUnit("tex");
		} else {
			this.projectionLocation = pipe.getConstantLocation("projectionMatrix");
			this.textureLocation = pipe.getTextureUnit("tex");
		}
		return this.myPipeline = pipe;
	}
	,setProjection: function(projectionMatrix) {
		this.projectionMatrix = projectionMatrix;
	}
	,initBuffers: function() {
		this.rectVertexBuffer = new kha_graphics4_VertexBuffer(kha_graphics4_ImageShaderPainter.bufferSize * 4,kha_graphics4_ImageShaderPainter.structure,kha_graphics4_Usage.DynamicUsage);
		this.rectVertices = this.rectVertexBuffer.lock();
		this.indexBuffer = new kha_graphics4_IndexBuffer(kha_graphics4_ImageShaderPainter.bufferSize * 3 * 2,kha_graphics4_Usage.StaticUsage);
		var indices = this.indexBuffer.lock();
		var _g1 = 0;
		var _g = kha_graphics4_ImageShaderPainter.bufferSize;
		while(_g1 < _g) {
			var i = _g1++;
			indices[i * 3 * 2] = i * 4;
			indices[i * 3 * 2 + 1] = i * 4 + 1;
			indices[i * 3 * 2 + 2] = i * 4 + 2;
			indices[i * 3 * 2 + 3] = i * 4;
			indices[i * 3 * 2 + 4] = i * 4 + 2;
			indices[i * 3 * 2 + 5] = i * 4 + 3;
		}
		this.indexBuffer.unlock();
	}
	,setRectVertices: function(bottomleftx,bottomlefty,topleftx,toplefty,toprightx,toprighty,bottomrightx,bottomrighty) {
		var baseIndex = this.bufferIndex * kha_graphics4_ImageShaderPainter.vertexSize * 4;
		this.rectVertices[baseIndex] = bottomleftx;
		this.rectVertices[baseIndex + 1] = bottomlefty;
		this.rectVertices[baseIndex + 2] = -5.0;
		this.rectVertices[baseIndex + 9] = topleftx;
		this.rectVertices[baseIndex + 10] = toplefty;
		this.rectVertices[baseIndex + 11] = -5.0;
		this.rectVertices[baseIndex + 18] = toprightx;
		this.rectVertices[baseIndex + 19] = toprighty;
		this.rectVertices[baseIndex + 20] = -5.0;
		this.rectVertices[baseIndex + 27] = bottomrightx;
		this.rectVertices[baseIndex + 28] = bottomrighty;
		this.rectVertices[baseIndex + 29] = -5.0;
	}
	,setRectTexCoords: function(left,top,right,bottom) {
		var baseIndex = this.bufferIndex * kha_graphics4_ImageShaderPainter.vertexSize * 4;
		this.rectVertices[baseIndex + 3] = left;
		this.rectVertices[baseIndex + 4] = bottom;
		this.rectVertices[baseIndex + 12] = left;
		this.rectVertices[baseIndex + 13] = top;
		this.rectVertices[baseIndex + 21] = right;
		this.rectVertices[baseIndex + 22] = top;
		this.rectVertices[baseIndex + 30] = right;
		this.rectVertices[baseIndex + 31] = bottom;
	}
	,setRectColor: function(r,g,b,a) {
		var baseIndex = this.bufferIndex * kha_graphics4_ImageShaderPainter.vertexSize * 4;
		this.rectVertices[baseIndex + 5] = r;
		this.rectVertices[baseIndex + 6] = g;
		this.rectVertices[baseIndex + 7] = b;
		this.rectVertices[baseIndex + 8] = a;
		this.rectVertices[baseIndex + 14] = r;
		this.rectVertices[baseIndex + 15] = g;
		this.rectVertices[baseIndex + 16] = b;
		this.rectVertices[baseIndex + 17] = a;
		this.rectVertices[baseIndex + 23] = r;
		this.rectVertices[baseIndex + 24] = g;
		this.rectVertices[baseIndex + 25] = b;
		this.rectVertices[baseIndex + 26] = a;
		this.rectVertices[baseIndex + 32] = r;
		this.rectVertices[baseIndex + 33] = g;
		this.rectVertices[baseIndex + 34] = b;
		this.rectVertices[baseIndex + 35] = a;
	}
	,drawBuffer: function() {
		this.rectVertexBuffer.unlock();
		this.g.setVertexBuffer(this.rectVertexBuffer);
		this.g.setIndexBuffer(this.indexBuffer);
		this.g.setPipeline(this.get_pipeline() == null?kha_graphics4_ImageShaderPainter.shaderPipeline:this.get_pipeline());
		this.g.setTexture(this.textureLocation,this.lastTexture);
		this.g.setTextureParameters(this.textureLocation,kha_graphics4_TextureAddressing.Clamp,kha_graphics4_TextureAddressing.Clamp,this.bilinear?kha_graphics4_TextureFilter.LinearFilter:kha_graphics4_TextureFilter.PointFilter,this.bilinear?kha_graphics4_TextureFilter.LinearFilter:kha_graphics4_TextureFilter.PointFilter,kha_graphics4_MipMapFilter.NoMipFilter);
		this.g.setMatrix(this.projectionLocation,this.projectionMatrix);
		this.g.drawIndexedVertices(0,this.bufferIndex * 2 * 3);
		this.g.setTexture(this.textureLocation,null);
		this.bufferIndex = 0;
		this.rectVertices = this.rectVertexBuffer.lock();
	}
	,setBilinearFilter: function(bilinear) {
		this.end();
		this.bilinear = bilinear;
	}
	,drawImage: function(img,bottomleftx,bottomlefty,topleftx,toplefty,toprightx,toprighty,bottomrightx,bottomrighty,opacity,color) {
		var tex = img;
		if(this.bufferIndex + 1 >= kha_graphics4_ImageShaderPainter.bufferSize || this.lastTexture != null && tex != this.lastTexture) this.drawBuffer();
		this.setRectColor(kha__$Color_Color_$Impl_$.get_Rb(color) * 0.00392156862745098,kha__$Color_Color_$Impl_$.get_Gb(color) * 0.00392156862745098,kha__$Color_Color_$Impl_$.get_Bb(color) * 0.00392156862745098,kha__$Color_Color_$Impl_$.get_Ab(color) * 0.00392156862745098 * opacity);
		this.setRectTexCoords(0,0,tex.get_width() / tex.get_realWidth(),tex.get_height() / tex.get_realHeight());
		this.setRectVertices(bottomleftx,bottomlefty,topleftx,toplefty,toprightx,toprighty,bottomrightx,bottomrighty);
		++this.bufferIndex;
		this.lastTexture = tex;
	}
	,drawImage2: function(img,sx,sy,sw,sh,bottomleftx,bottomlefty,topleftx,toplefty,toprightx,toprighty,bottomrightx,bottomrighty,opacity,color) {
		var tex = img;
		if(this.bufferIndex + 1 >= kha_graphics4_ImageShaderPainter.bufferSize || this.lastTexture != null && tex != this.lastTexture) this.drawBuffer();
		this.setRectTexCoords(sx / tex.get_realWidth(),sy / tex.get_realHeight(),(sx + sw) / tex.get_realWidth(),(sy + sh) / tex.get_realHeight());
		this.setRectColor(kha__$Color_Color_$Impl_$.get_Rb(color) * 0.00392156862745098,kha__$Color_Color_$Impl_$.get_Gb(color) * 0.00392156862745098,kha__$Color_Color_$Impl_$.get_Bb(color) * 0.00392156862745098,kha__$Color_Color_$Impl_$.get_Ab(color) * 0.00392156862745098 * opacity);
		this.setRectVertices(bottomleftx,bottomlefty,topleftx,toplefty,toprightx,toprighty,bottomrightx,bottomrighty);
		++this.bufferIndex;
		this.lastTexture = tex;
	}
	,drawImageScale: function(img,sx,sy,sw,sh,left,top,right,bottom,opacity,color) {
		var tex = img;
		if(this.bufferIndex + 1 >= kha_graphics4_ImageShaderPainter.bufferSize || this.lastTexture != null && tex != this.lastTexture) this.drawBuffer();
		this.setRectTexCoords(sx / tex.get_realWidth(),sy / tex.get_realHeight(),(sx + sw) / tex.get_realWidth(),(sy + sh) / tex.get_realHeight());
		this.setRectColor(kha__$Color_Color_$Impl_$.get_Rb(color) * 0.00392156862745098,kha__$Color_Color_$Impl_$.get_Gb(color) * 0.00392156862745098,kha__$Color_Color_$Impl_$.get_Bb(color) * 0.00392156862745098,opacity);
		this.setRectVertices(left,bottom,left,top,right,top,right,bottom);
		++this.bufferIndex;
		this.lastTexture = tex;
	}
	,end: function() {
		if(this.bufferIndex > 0) this.drawBuffer();
		this.lastTexture = null;
	}
	,__class__: kha_graphics4_ImageShaderPainter
	,__properties__: {set_pipeline:"set_pipeline",get_pipeline:"get_pipeline"}
};
var kha_graphics4_ColoredShaderPainter = function(g4) {
	this.destinationBlend = kha_graphics4_BlendingOperation.Undefined;
	this.sourceBlend = kha_graphics4_BlendingOperation.Undefined;
	this.myPipeline = null;
	this.g = g4;
	this.bufferIndex = 0;
	this.triangleBufferIndex = 0;
	kha_graphics4_ColoredShaderPainter.initShaders();
	this.initBuffers();
	this.projectionLocation = kha_graphics4_ColoredShaderPainter.shaderPipeline.getConstantLocation("projectionMatrix");
};
$hxClasses["kha.graphics4.ColoredShaderPainter"] = kha_graphics4_ColoredShaderPainter;
kha_graphics4_ColoredShaderPainter.__name__ = ["kha","graphics4","ColoredShaderPainter"];
kha_graphics4_ColoredShaderPainter.initShaders = function() {
	if(kha_graphics4_ColoredShaderPainter.shaderPipeline != null) return;
	kha_graphics4_ColoredShaderPainter.shaderPipeline = new kha_graphics4_PipelineState();
	kha_graphics4_ColoredShaderPainter.shaderPipeline.fragmentShader = kha_Shaders.painter_colored_frag;
	kha_graphics4_ColoredShaderPainter.shaderPipeline.vertexShader = kha_Shaders.painter_colored_vert;
	kha_graphics4_ColoredShaderPainter.structure = new kha_graphics4_VertexStructure();
	kha_graphics4_ColoredShaderPainter.structure.add("vertexPosition",kha_graphics4_VertexData.Float3);
	kha_graphics4_ColoredShaderPainter.structure.add("vertexColor",kha_graphics4_VertexData.Float4);
	kha_graphics4_ColoredShaderPainter.shaderPipeline.inputLayout = [kha_graphics4_ColoredShaderPainter.structure];
	kha_graphics4_ColoredShaderPainter.shaderPipeline.blendSource = kha_graphics4_BlendingOperation.SourceAlpha;
	kha_graphics4_ColoredShaderPainter.shaderPipeline.blendDestination = kha_graphics4_BlendingOperation.InverseSourceAlpha;
	kha_graphics4_ColoredShaderPainter.shaderPipeline.compile();
};
kha_graphics4_ColoredShaderPainter.prototype = {
	projectionMatrix: null
	,projectionLocation: null
	,bufferIndex: null
	,rectVertexBuffer: null
	,rectVertices: null
	,indexBuffer: null
	,triangleBufferIndex: null
	,triangleVertexBuffer: null
	,triangleVertices: null
	,triangleIndexBuffer: null
	,g: null
	,myPipeline: null
	,sourceBlend: null
	,destinationBlend: null
	,get_pipeline: function() {
		return this.myPipeline;
	}
	,set_pipeline: function(pipe) {
		if(pipe == null) this.projectionLocation = kha_graphics4_ColoredShaderPainter.shaderPipeline.getConstantLocation("projectionMatrix"); else this.projectionLocation = pipe.getConstantLocation("projectionMatrix");
		return this.myPipeline = pipe;
	}
	,setProjection: function(projectionMatrix) {
		this.projectionMatrix = projectionMatrix;
	}
	,initBuffers: function() {
		this.rectVertexBuffer = new kha_graphics4_VertexBuffer(kha_graphics4_ColoredShaderPainter.bufferSize * 4,kha_graphics4_ColoredShaderPainter.structure,kha_graphics4_Usage.DynamicUsage);
		this.rectVertices = this.rectVertexBuffer.lock();
		this.indexBuffer = new kha_graphics4_IndexBuffer(kha_graphics4_ColoredShaderPainter.bufferSize * 3 * 2,kha_graphics4_Usage.StaticUsage);
		var indices = this.indexBuffer.lock();
		var _g1 = 0;
		var _g = kha_graphics4_ColoredShaderPainter.bufferSize;
		while(_g1 < _g) {
			var i = _g1++;
			indices[i * 3 * 2] = i * 4;
			indices[i * 3 * 2 + 1] = i * 4 + 1;
			indices[i * 3 * 2 + 2] = i * 4 + 2;
			indices[i * 3 * 2 + 3] = i * 4;
			indices[i * 3 * 2 + 4] = i * 4 + 2;
			indices[i * 3 * 2 + 5] = i * 4 + 3;
		}
		this.indexBuffer.unlock();
		this.triangleVertexBuffer = new kha_graphics4_VertexBuffer(kha_graphics4_ColoredShaderPainter.triangleBufferSize * 3,kha_graphics4_ColoredShaderPainter.structure,kha_graphics4_Usage.DynamicUsage);
		this.triangleVertices = this.triangleVertexBuffer.lock();
		this.triangleIndexBuffer = new kha_graphics4_IndexBuffer(kha_graphics4_ColoredShaderPainter.triangleBufferSize * 3,kha_graphics4_Usage.StaticUsage);
		var triIndices = this.triangleIndexBuffer.lock();
		var _g11 = 0;
		var _g2 = kha_graphics4_ColoredShaderPainter.bufferSize;
		while(_g11 < _g2) {
			var i1 = _g11++;
			triIndices[i1 * 3] = i1 * 3;
			triIndices[i1 * 3 + 1] = i1 * 3 + 1;
			triIndices[i1 * 3 + 2] = i1 * 3 + 2;
		}
		this.triangleIndexBuffer.unlock();
	}
	,setRectVertices: function(bottomleftx,bottomlefty,topleftx,toplefty,toprightx,toprighty,bottomrightx,bottomrighty) {
		var baseIndex = this.bufferIndex * 7 * 4;
		this.rectVertices[baseIndex] = bottomleftx;
		this.rectVertices[baseIndex + 1] = bottomlefty;
		this.rectVertices[baseIndex + 2] = -5.0;
		this.rectVertices[baseIndex + 7] = topleftx;
		this.rectVertices[baseIndex + 8] = toplefty;
		this.rectVertices[baseIndex + 9] = -5.0;
		this.rectVertices[baseIndex + 14] = toprightx;
		this.rectVertices[baseIndex + 15] = toprighty;
		this.rectVertices[baseIndex + 16] = -5.0;
		this.rectVertices[baseIndex + 21] = bottomrightx;
		this.rectVertices[baseIndex + 22] = bottomrighty;
		this.rectVertices[baseIndex + 23] = -5.0;
	}
	,setRectColors: function(opacity,color) {
		var baseIndex = this.bufferIndex * 7 * 4;
		var a = opacity * (kha__$Color_Color_$Impl_$.get_Ab(color) * 0.00392156862745098);
		var value = kha__$Color_Color_$Impl_$.get_Rb(color) * 0.00392156862745098;
		this.rectVertices[baseIndex + 3] = value;
		var value1 = kha__$Color_Color_$Impl_$.get_Gb(color) * 0.00392156862745098;
		this.rectVertices[baseIndex + 4] = value1;
		var value2 = kha__$Color_Color_$Impl_$.get_Bb(color) * 0.00392156862745098;
		this.rectVertices[baseIndex + 5] = value2;
		this.rectVertices[baseIndex + 6] = a;
		var value3 = kha__$Color_Color_$Impl_$.get_Rb(color) * 0.00392156862745098;
		this.rectVertices[baseIndex + 10] = value3;
		var value4 = kha__$Color_Color_$Impl_$.get_Gb(color) * 0.00392156862745098;
		this.rectVertices[baseIndex + 11] = value4;
		var value5 = kha__$Color_Color_$Impl_$.get_Bb(color) * 0.00392156862745098;
		this.rectVertices[baseIndex + 12] = value5;
		this.rectVertices[baseIndex + 13] = a;
		var value6 = kha__$Color_Color_$Impl_$.get_Rb(color) * 0.00392156862745098;
		this.rectVertices[baseIndex + 17] = value6;
		var value7 = kha__$Color_Color_$Impl_$.get_Gb(color) * 0.00392156862745098;
		this.rectVertices[baseIndex + 18] = value7;
		var value8 = kha__$Color_Color_$Impl_$.get_Bb(color) * 0.00392156862745098;
		this.rectVertices[baseIndex + 19] = value8;
		this.rectVertices[baseIndex + 20] = a;
		var value9 = kha__$Color_Color_$Impl_$.get_Rb(color) * 0.00392156862745098;
		this.rectVertices[baseIndex + 24] = value9;
		var value10 = kha__$Color_Color_$Impl_$.get_Gb(color) * 0.00392156862745098;
		this.rectVertices[baseIndex + 25] = value10;
		var value11 = kha__$Color_Color_$Impl_$.get_Bb(color) * 0.00392156862745098;
		this.rectVertices[baseIndex + 26] = value11;
		this.rectVertices[baseIndex + 27] = a;
	}
	,setTriVertices: function(x1,y1,x2,y2,x3,y3) {
		var baseIndex = this.triangleBufferIndex * 7 * 3;
		this.triangleVertices[baseIndex] = x1;
		this.triangleVertices[baseIndex + 1] = y1;
		this.triangleVertices[baseIndex + 2] = -5.0;
		this.triangleVertices[baseIndex + 7] = x2;
		this.triangleVertices[baseIndex + 8] = y2;
		this.triangleVertices[baseIndex + 9] = -5.0;
		this.triangleVertices[baseIndex + 14] = x3;
		this.triangleVertices[baseIndex + 15] = y3;
		this.triangleVertices[baseIndex + 16] = -5.0;
	}
	,setTriColors: function(opacity,color) {
		var baseIndex = this.triangleBufferIndex * 7 * 3;
		var a = opacity * (kha__$Color_Color_$Impl_$.get_Ab(color) * 0.00392156862745098);
		var value = kha__$Color_Color_$Impl_$.get_Rb(color) * 0.00392156862745098;
		this.triangleVertices[baseIndex + 3] = value;
		var value1 = kha__$Color_Color_$Impl_$.get_Gb(color) * 0.00392156862745098;
		this.triangleVertices[baseIndex + 4] = value1;
		var value2 = kha__$Color_Color_$Impl_$.get_Bb(color) * 0.00392156862745098;
		this.triangleVertices[baseIndex + 5] = value2;
		this.triangleVertices[baseIndex + 6] = a;
		var value3 = kha__$Color_Color_$Impl_$.get_Rb(color) * 0.00392156862745098;
		this.triangleVertices[baseIndex + 10] = value3;
		var value4 = kha__$Color_Color_$Impl_$.get_Gb(color) * 0.00392156862745098;
		this.triangleVertices[baseIndex + 11] = value4;
		var value5 = kha__$Color_Color_$Impl_$.get_Bb(color) * 0.00392156862745098;
		this.triangleVertices[baseIndex + 12] = value5;
		this.triangleVertices[baseIndex + 13] = a;
		var value6 = kha__$Color_Color_$Impl_$.get_Rb(color) * 0.00392156862745098;
		this.triangleVertices[baseIndex + 17] = value6;
		var value7 = kha__$Color_Color_$Impl_$.get_Gb(color) * 0.00392156862745098;
		this.triangleVertices[baseIndex + 18] = value7;
		var value8 = kha__$Color_Color_$Impl_$.get_Bb(color) * 0.00392156862745098;
		this.triangleVertices[baseIndex + 19] = value8;
		this.triangleVertices[baseIndex + 20] = a;
	}
	,drawBuffer: function(trisDone) {
		if(!trisDone) {
			if(this.triangleBufferIndex > 0) this.drawTriBuffer(true);
		}
		this.rectVertexBuffer.unlock();
		this.g.setVertexBuffer(this.rectVertexBuffer);
		this.g.setIndexBuffer(this.indexBuffer);
		this.g.setPipeline(this.get_pipeline() == null?kha_graphics4_ColoredShaderPainter.shaderPipeline:this.get_pipeline());
		this.g.setMatrix(this.projectionLocation,this.projectionMatrix);
		this.g.drawIndexedVertices(0,this.bufferIndex * 2 * 3);
		this.bufferIndex = 0;
		this.rectVertices = this.rectVertexBuffer.lock();
	}
	,drawTriBuffer: function(rectsDone) {
		if(!rectsDone) {
			if(this.bufferIndex > 0) this.drawBuffer(true);
		}
		this.triangleVertexBuffer.unlock();
		this.g.setVertexBuffer(this.triangleVertexBuffer);
		this.g.setIndexBuffer(this.triangleIndexBuffer);
		this.g.setPipeline(this.get_pipeline() == null?kha_graphics4_ColoredShaderPainter.shaderPipeline:this.get_pipeline());
		this.g.setMatrix(this.projectionLocation,this.projectionMatrix);
		this.g.drawIndexedVertices(0,this.triangleBufferIndex * 3);
		this.triangleBufferIndex = 0;
		this.triangleVertices = this.triangleVertexBuffer.lock();
	}
	,fillRect: function(opacity,color,bottomleftx,bottomlefty,topleftx,toplefty,toprightx,toprighty,bottomrightx,bottomrighty) {
		if(this.bufferIndex + 1 >= kha_graphics4_ColoredShaderPainter.bufferSize) this.drawBuffer(false);
		this.setRectColors(opacity,color);
		this.setRectVertices(bottomleftx,bottomlefty,topleftx,toplefty,toprightx,toprighty,bottomrightx,bottomrighty);
		++this.bufferIndex;
	}
	,fillTriangle: function(opacity,color,x1,y1,x2,y2,x3,y3) {
		if(this.triangleBufferIndex + 1 >= kha_graphics4_ColoredShaderPainter.triangleBufferSize) this.drawTriBuffer(false);
		this.setTriColors(opacity,color);
		this.setTriVertices(x1,y1,x2,y2,x3,y3);
		++this.triangleBufferIndex;
	}
	,endTris: function(rectsDone) {
		if(this.triangleBufferIndex > 0) this.drawTriBuffer(rectsDone);
	}
	,endRects: function(trisDone) {
		if(this.bufferIndex > 0) this.drawBuffer(trisDone);
	}
	,end: function() {
		if(this.triangleBufferIndex > 0) this.drawTriBuffer(false);
		if(this.bufferIndex > 0) this.drawBuffer(false);
	}
	,__class__: kha_graphics4_ColoredShaderPainter
	,__properties__: {set_pipeline:"set_pipeline",get_pipeline:"get_pipeline"}
};
var kha_graphics4_TextShaderPainter = function(g4) {
	this.destinationBlend = kha_graphics4_BlendingOperation.Undefined;
	this.sourceBlend = kha_graphics4_BlendingOperation.Undefined;
	this.bilinear = false;
	this.myPipeline = null;
	this.g = g4;
	this.bufferIndex = 0;
	kha_graphics4_TextShaderPainter.initShaders();
	this.initBuffers();
	this.projectionLocation = kha_graphics4_TextShaderPainter.shaderPipeline.getConstantLocation("projectionMatrix");
	this.textureLocation = kha_graphics4_TextShaderPainter.shaderPipeline.getTextureUnit("tex");
};
$hxClasses["kha.graphics4.TextShaderPainter"] = kha_graphics4_TextShaderPainter;
kha_graphics4_TextShaderPainter.__name__ = ["kha","graphics4","TextShaderPainter"];
kha_graphics4_TextShaderPainter.initShaders = function() {
	if(kha_graphics4_TextShaderPainter.shaderPipeline != null) return;
	kha_graphics4_TextShaderPainter.shaderPipeline = new kha_graphics4_PipelineState();
	kha_graphics4_TextShaderPainter.shaderPipeline.fragmentShader = kha_Shaders.painter_text_frag;
	kha_graphics4_TextShaderPainter.shaderPipeline.vertexShader = kha_Shaders.painter_text_vert;
	kha_graphics4_TextShaderPainter.structure = new kha_graphics4_VertexStructure();
	kha_graphics4_TextShaderPainter.structure.add("vertexPosition",kha_graphics4_VertexData.Float3);
	kha_graphics4_TextShaderPainter.structure.add("texPosition",kha_graphics4_VertexData.Float2);
	kha_graphics4_TextShaderPainter.structure.add("vertexColor",kha_graphics4_VertexData.Float4);
	kha_graphics4_TextShaderPainter.shaderPipeline.inputLayout = [kha_graphics4_TextShaderPainter.structure];
	kha_graphics4_TextShaderPainter.shaderPipeline.blendSource = kha_graphics4_BlendingOperation.SourceAlpha;
	kha_graphics4_TextShaderPainter.shaderPipeline.blendDestination = kha_graphics4_BlendingOperation.InverseSourceAlpha;
	kha_graphics4_TextShaderPainter.shaderPipeline.compile();
};
kha_graphics4_TextShaderPainter.prototype = {
	projectionMatrix: null
	,projectionLocation: null
	,textureLocation: null
	,bufferIndex: null
	,rectVertexBuffer: null
	,rectVertices: null
	,indexBuffer: null
	,font: null
	,lastTexture: null
	,g: null
	,myPipeline: null
	,fontSize: null
	,bilinear: null
	,sourceBlend: null
	,destinationBlend: null
	,get_pipeline: function() {
		return this.myPipeline;
	}
	,set_pipeline: function(pipe) {
		if(pipe == null) {
			this.projectionLocation = kha_graphics4_TextShaderPainter.shaderPipeline.getConstantLocation("projectionMatrix");
			this.textureLocation = kha_graphics4_TextShaderPainter.shaderPipeline.getTextureUnit("tex");
		} else {
			this.projectionLocation = pipe.getConstantLocation("projectionMatrix");
			this.textureLocation = pipe.getTextureUnit("tex");
		}
		return this.myPipeline = pipe;
	}
	,setProjection: function(projectionMatrix) {
		this.projectionMatrix = projectionMatrix;
	}
	,initBuffers: function() {
		this.rectVertexBuffer = new kha_graphics4_VertexBuffer(kha_graphics4_TextShaderPainter.bufferSize * 4,kha_graphics4_TextShaderPainter.structure,kha_graphics4_Usage.DynamicUsage);
		this.rectVertices = this.rectVertexBuffer.lock();
		this.indexBuffer = new kha_graphics4_IndexBuffer(kha_graphics4_TextShaderPainter.bufferSize * 3 * 2,kha_graphics4_Usage.StaticUsage);
		var indices = this.indexBuffer.lock();
		var _g1 = 0;
		var _g = kha_graphics4_TextShaderPainter.bufferSize;
		while(_g1 < _g) {
			var i = _g1++;
			indices[i * 3 * 2] = i * 4;
			indices[i * 3 * 2 + 1] = i * 4 + 1;
			indices[i * 3 * 2 + 2] = i * 4 + 2;
			indices[i * 3 * 2 + 3] = i * 4;
			indices[i * 3 * 2 + 4] = i * 4 + 2;
			indices[i * 3 * 2 + 5] = i * 4 + 3;
		}
		this.indexBuffer.unlock();
	}
	,setRectVertices: function(bottomleftx,bottomlefty,topleftx,toplefty,toprightx,toprighty,bottomrightx,bottomrighty) {
		var baseIndex = this.bufferIndex * 9 * 4;
		this.rectVertices[baseIndex] = bottomleftx;
		this.rectVertices[baseIndex + 1] = bottomlefty;
		this.rectVertices[baseIndex + 2] = -5.0;
		this.rectVertices[baseIndex + 9] = topleftx;
		this.rectVertices[baseIndex + 10] = toplefty;
		this.rectVertices[baseIndex + 11] = -5.0;
		this.rectVertices[baseIndex + 18] = toprightx;
		this.rectVertices[baseIndex + 19] = toprighty;
		this.rectVertices[baseIndex + 20] = -5.0;
		this.rectVertices[baseIndex + 27] = bottomrightx;
		this.rectVertices[baseIndex + 28] = bottomrighty;
		this.rectVertices[baseIndex + 29] = -5.0;
	}
	,setRectTexCoords: function(left,top,right,bottom) {
		var baseIndex = this.bufferIndex * 9 * 4;
		this.rectVertices[baseIndex + 3] = left;
		this.rectVertices[baseIndex + 4] = bottom;
		this.rectVertices[baseIndex + 12] = left;
		this.rectVertices[baseIndex + 13] = top;
		this.rectVertices[baseIndex + 21] = right;
		this.rectVertices[baseIndex + 22] = top;
		this.rectVertices[baseIndex + 30] = right;
		this.rectVertices[baseIndex + 31] = bottom;
	}
	,setRectColors: function(opacity,color) {
		var baseIndex = this.bufferIndex * 9 * 4;
		var a = opacity * (kha__$Color_Color_$Impl_$.get_Ab(color) * 0.00392156862745098);
		var value = kha__$Color_Color_$Impl_$.get_Rb(color) * 0.00392156862745098;
		this.rectVertices[baseIndex + 5] = value;
		var value1 = kha__$Color_Color_$Impl_$.get_Gb(color) * 0.00392156862745098;
		this.rectVertices[baseIndex + 6] = value1;
		var value2 = kha__$Color_Color_$Impl_$.get_Bb(color) * 0.00392156862745098;
		this.rectVertices[baseIndex + 7] = value2;
		this.rectVertices[baseIndex + 8] = a;
		var value3 = kha__$Color_Color_$Impl_$.get_Rb(color) * 0.00392156862745098;
		this.rectVertices[baseIndex + 14] = value3;
		var value4 = kha__$Color_Color_$Impl_$.get_Gb(color) * 0.00392156862745098;
		this.rectVertices[baseIndex + 15] = value4;
		var value5 = kha__$Color_Color_$Impl_$.get_Bb(color) * 0.00392156862745098;
		this.rectVertices[baseIndex + 16] = value5;
		this.rectVertices[baseIndex + 17] = a;
		var value6 = kha__$Color_Color_$Impl_$.get_Rb(color) * 0.00392156862745098;
		this.rectVertices[baseIndex + 23] = value6;
		var value7 = kha__$Color_Color_$Impl_$.get_Gb(color) * 0.00392156862745098;
		this.rectVertices[baseIndex + 24] = value7;
		var value8 = kha__$Color_Color_$Impl_$.get_Bb(color) * 0.00392156862745098;
		this.rectVertices[baseIndex + 25] = value8;
		this.rectVertices[baseIndex + 26] = a;
		var value9 = kha__$Color_Color_$Impl_$.get_Rb(color) * 0.00392156862745098;
		this.rectVertices[baseIndex + 32] = value9;
		var value10 = kha__$Color_Color_$Impl_$.get_Gb(color) * 0.00392156862745098;
		this.rectVertices[baseIndex + 33] = value10;
		var value11 = kha__$Color_Color_$Impl_$.get_Bb(color) * 0.00392156862745098;
		this.rectVertices[baseIndex + 34] = value11;
		this.rectVertices[baseIndex + 35] = a;
	}
	,drawBuffer: function() {
		this.rectVertexBuffer.unlock();
		this.g.setVertexBuffer(this.rectVertexBuffer);
		this.g.setIndexBuffer(this.indexBuffer);
		this.g.setPipeline(this.get_pipeline() == null?kha_graphics4_TextShaderPainter.shaderPipeline:this.get_pipeline());
		this.g.setTexture(this.textureLocation,this.lastTexture);
		this.g.setMatrix(this.projectionLocation,this.projectionMatrix);
		this.g.setTextureParameters(this.textureLocation,kha_graphics4_TextureAddressing.Clamp,kha_graphics4_TextureAddressing.Clamp,this.bilinear?kha_graphics4_TextureFilter.LinearFilter:kha_graphics4_TextureFilter.PointFilter,this.bilinear?kha_graphics4_TextureFilter.LinearFilter:kha_graphics4_TextureFilter.PointFilter,kha_graphics4_MipMapFilter.NoMipFilter);
		this.g.drawIndexedVertices(0,this.bufferIndex * 2 * 3);
		this.g.setTexture(this.textureLocation,null);
		this.bufferIndex = 0;
		this.rectVertices = this.rectVertexBuffer.lock();
	}
	,setBilinearFilter: function(bilinear) {
		this.end();
		this.bilinear = bilinear;
	}
	,setFont: function(font) {
		this.font = js_Boot.__cast(font , kha_Kravur);
	}
	,text: null
	,startString: function(text) {
		this.text = text;
	}
	,charCodeAt: function(position) {
		return HxOverrides.cca(this.text,position);
	}
	,stringLength: function() {
		return this.text.length;
	}
	,endString: function() {
		this.text = null;
	}
	,drawString: function(text,opacity,color,x,y,transformation) {
		var font = this.font._get(this.fontSize);
		var tex = font.getTexture();
		if(this.lastTexture != null && tex != this.lastTexture) this.drawBuffer();
		this.lastTexture = tex;
		var xpos = x;
		var ypos = y;
		this.startString(text);
		var _g1 = 0;
		var _g = this.stringLength();
		while(_g1 < _g) {
			var i = _g1++;
			var q = font.getBakedQuad(this.charCodeAt(i) - 32,xpos,ypos);
			if(q != null) {
				if(this.bufferIndex + 1 >= kha_graphics4_TextShaderPainter.bufferSize) this.drawBuffer();
				this.setRectColors(opacity,color);
				this.setRectTexCoords(q.s0 * tex.get_width() / tex.get_realWidth(),q.t0 * tex.get_height() / tex.get_realHeight(),q.s1 * tex.get_width() / tex.get_realWidth(),q.t1 * tex.get_height() / tex.get_realHeight());
				var value_x = q.x0;
				var value_y = q.y1;
				var w = transformation._02 * value_x + transformation._12 * value_y + transformation._22;
				var x1 = (transformation._00 * value_x + transformation._10 * value_y + transformation._20) / w;
				var y1 = (transformation._01 * value_x + transformation._11 * value_y + transformation._21) / w;
				var p0_x = x1;
				var p0_y = y1;
				var value_x1 = q.x0;
				var value_y1 = q.y0;
				var w1 = transformation._02 * value_x1 + transformation._12 * value_y1 + transformation._22;
				var x2 = (transformation._00 * value_x1 + transformation._10 * value_y1 + transformation._20) / w1;
				var y2 = (transformation._01 * value_x1 + transformation._11 * value_y1 + transformation._21) / w1;
				var p1_x = x2;
				var p1_y = y2;
				var value_x2 = q.x1;
				var value_y2 = q.y0;
				var w2 = transformation._02 * value_x2 + transformation._12 * value_y2 + transformation._22;
				var x3 = (transformation._00 * value_x2 + transformation._10 * value_y2 + transformation._20) / w2;
				var y3 = (transformation._01 * value_x2 + transformation._11 * value_y2 + transformation._21) / w2;
				var p2_x = x3;
				var p2_y = y3;
				var value_x3 = q.x1;
				var value_y3 = q.y1;
				var w3 = transformation._02 * value_x3 + transformation._12 * value_y3 + transformation._22;
				var x4 = (transformation._00 * value_x3 + transformation._10 * value_y3 + transformation._20) / w3;
				var y4 = (transformation._01 * value_x3 + transformation._11 * value_y3 + transformation._21) / w3;
				var p3_x = x4;
				var p3_y = y4;
				this.setRectVertices(p0_x,p0_y,p1_x,p1_y,p2_x,p2_y,p3_x,p3_y);
				xpos += q.xadvance;
				++this.bufferIndex;
			}
		}
		this.endString();
	}
	,end: function() {
		if(this.bufferIndex > 0) this.drawBuffer();
		this.lastTexture = null;
	}
	,__class__: kha_graphics4_TextShaderPainter
	,__properties__: {set_pipeline:"set_pipeline",get_pipeline:"get_pipeline"}
};
var kha_graphics4_Graphics2 = function(canvas) {
	this.myImageScaleQuality = kha_graphics2_ImageScaleQuality.High;
	kha_graphics2_Graphics.call(this);
	this.set_color(kha__$Color_Color_$Impl_$.White);
	this.canvas = canvas;
	this.g = canvas.get_g4();
	this.imagePainter = new kha_graphics4_ImageShaderPainter(this.g);
	this.coloredPainter = new kha_graphics4_ColoredShaderPainter(this.g);
	this.textPainter = new kha_graphics4_TextShaderPainter(this.g);
	this.textPainter.fontSize = this.get_fontSize();
	this.setProjection();
	if(kha_graphics4_Graphics2.videoPipeline == null) {
		kha_graphics4_Graphics2.videoPipeline = new kha_graphics4_PipelineState();
		kha_graphics4_Graphics2.videoPipeline.fragmentShader = kha_Shaders.painter_video_frag;
		kha_graphics4_Graphics2.videoPipeline.vertexShader = kha_Shaders.painter_video_vert;
		var structure = new kha_graphics4_VertexStructure();
		structure.add("vertexPosition",kha_graphics4_VertexData.Float3);
		structure.add("texPosition",kha_graphics4_VertexData.Float2);
		structure.add("vertexColor",kha_graphics4_VertexData.Float4);
		kha_graphics4_Graphics2.videoPipeline.inputLayout = [structure];
		kha_graphics4_Graphics2.videoPipeline.compile();
	}
};
$hxClasses["kha.graphics4.Graphics2"] = kha_graphics4_Graphics2;
kha_graphics4_Graphics2.__name__ = ["kha","graphics4","Graphics2"];
kha_graphics4_Graphics2.upperPowerOfTwo = function(v) {
	v--;
	v |= v >>> 1;
	v |= v >>> 2;
	v |= v >>> 4;
	v |= v >>> 8;
	v |= v >>> 16;
	v++;
	return v;
};
kha_graphics4_Graphics2.__super__ = kha_graphics2_Graphics;
kha_graphics4_Graphics2.prototype = $extend(kha_graphics2_Graphics.prototype,{
	myColor: null
	,myFont: null
	,projectionMatrix: null
	,imagePainter: null
	,coloredPainter: null
	,textPainter: null
	,canvas: null
	,g: null
	,setProjection: function() {
		var width = this.canvas.get_width();
		var height = this.canvas.get_height();
		if(js_Boot.__instanceof(this.canvas,kha_Framebuffer)) this.projectionMatrix = kha_math_FastMatrix4.orthogonalProjection(0,width,height,0,0.1,1000); else {
			if(!kha_Image.get_nonPow2Supported()) {
				width = kha_graphics4_Graphics2.upperPowerOfTwo(width);
				height = kha_graphics4_Graphics2.upperPowerOfTwo(height);
			}
			if(this.g.renderTargetsInvertedY()) this.projectionMatrix = kha_math_FastMatrix4.orthogonalProjection(0,width,0,height,0.1,1000); else this.projectionMatrix = kha_math_FastMatrix4.orthogonalProjection(0,width,height,0,0.1,1000);
		}
		this.imagePainter.setProjection(this.projectionMatrix);
		this.coloredPainter.setProjection(this.projectionMatrix);
		this.textPainter.setProjection(this.projectionMatrix);
	}
	,drawImage: function(img,x,y) {
		this.coloredPainter.end();
		this.textPainter.end();
		var xw = x + img.get_width();
		var yh = y + img.get_height();
		var _this = this.transformations[this.transformations.length - 1];
		var value_x = x;
		var value_y = yh;
		var w = _this._02 * value_x + _this._12 * value_y + _this._22;
		var x1 = (_this._00 * value_x + _this._10 * value_y + _this._20) / w;
		var y1 = (_this._01 * value_x + _this._11 * value_y + _this._21) / w;
		var p1_x = x1;
		var p1_y = y1;
		var _this1 = this.transformations[this.transformations.length - 1];
		var value_x1 = x;
		var value_y1 = y;
		var w1 = _this1._02 * value_x1 + _this1._12 * value_y1 + _this1._22;
		var x2 = (_this1._00 * value_x1 + _this1._10 * value_y1 + _this1._20) / w1;
		var y2 = (_this1._01 * value_x1 + _this1._11 * value_y1 + _this1._21) / w1;
		var p2_x = x2;
		var p2_y = y2;
		var _this2 = this.transformations[this.transformations.length - 1];
		var value_x2 = xw;
		var value_y2 = y;
		var w2 = _this2._02 * value_x2 + _this2._12 * value_y2 + _this2._22;
		var x3 = (_this2._00 * value_x2 + _this2._10 * value_y2 + _this2._20) / w2;
		var y3 = (_this2._01 * value_x2 + _this2._11 * value_y2 + _this2._21) / w2;
		var p3_x = x3;
		var p3_y = y3;
		var _this3 = this.transformations[this.transformations.length - 1];
		var value_x3 = xw;
		var value_y3 = yh;
		var w3 = _this3._02 * value_x3 + _this3._12 * value_y3 + _this3._22;
		var x4 = (_this3._00 * value_x3 + _this3._10 * value_y3 + _this3._20) / w3;
		var y4 = (_this3._01 * value_x3 + _this3._11 * value_y3 + _this3._21) / w3;
		var p4_x = x4;
		var p4_y = y4;
		this.imagePainter.drawImage(img,p1_x,p1_y,p2_x,p2_y,p3_x,p3_y,p4_x,p4_y,this.get_opacity(),this.get_color());
	}
	,drawScaledSubImage: function(img,sx,sy,sw,sh,dx,dy,dw,dh) {
		this.coloredPainter.end();
		this.textPainter.end();
		var _this = this.transformations[this.transformations.length - 1];
		var value_x = dx;
		var value_y = dy + dh;
		var w = _this._02 * value_x + _this._12 * value_y + _this._22;
		var x = (_this._00 * value_x + _this._10 * value_y + _this._20) / w;
		var y = (_this._01 * value_x + _this._11 * value_y + _this._21) / w;
		var p1_x = x;
		var p1_y = y;
		var _this1 = this.transformations[this.transformations.length - 1];
		var value_x1 = dx;
		var value_y1 = dy;
		var w1 = _this1._02 * value_x1 + _this1._12 * value_y1 + _this1._22;
		var x1 = (_this1._00 * value_x1 + _this1._10 * value_y1 + _this1._20) / w1;
		var y1 = (_this1._01 * value_x1 + _this1._11 * value_y1 + _this1._21) / w1;
		var p2_x = x1;
		var p2_y = y1;
		var _this2 = this.transformations[this.transformations.length - 1];
		var value_x2 = dx + dw;
		var value_y2 = dy;
		var w2 = _this2._02 * value_x2 + _this2._12 * value_y2 + _this2._22;
		var x2 = (_this2._00 * value_x2 + _this2._10 * value_y2 + _this2._20) / w2;
		var y2 = (_this2._01 * value_x2 + _this2._11 * value_y2 + _this2._21) / w2;
		var p3_x = x2;
		var p3_y = y2;
		var _this3 = this.transformations[this.transformations.length - 1];
		var value_x3 = dx + dw;
		var value_y3 = dy + dh;
		var w3 = _this3._02 * value_x3 + _this3._12 * value_y3 + _this3._22;
		var x3 = (_this3._00 * value_x3 + _this3._10 * value_y3 + _this3._20) / w3;
		var y3 = (_this3._01 * value_x3 + _this3._11 * value_y3 + _this3._21) / w3;
		var p4_x = x3;
		var p4_y = y3;
		this.imagePainter.drawImage2(img,sx,sy,sw,sh,p1_x,p1_y,p2_x,p2_y,p3_x,p3_y,p4_x,p4_y,this.get_opacity(),this.get_color());
	}
	,get_color: function() {
		return this.myColor;
	}
	,set_color: function(color) {
		return this.myColor = color;
	}
	,drawRect: function(x,y,width,height,strength) {
		if(strength == null) strength = 1.0;
		this.imagePainter.end();
		this.textPainter.end();
		var p1;
		var _this = this.transformations[this.transformations.length - 1];
		var value_x = x - strength / 2;
		var value_y = y + strength / 2;
		var w = _this._02 * value_x + _this._12 * value_y + _this._22;
		var x1 = (_this._00 * value_x + _this._10 * value_y + _this._20) / w;
		var y1 = (_this._01 * value_x + _this._11 * value_y + _this._21) / w;
		p1 = new kha_math_FastVector2(x1,y1);
		var p2;
		var _this1 = this.transformations[this.transformations.length - 1];
		var value_x1 = x - strength / 2;
		var value_y1 = y - strength / 2;
		var w1 = _this1._02 * value_x1 + _this1._12 * value_y1 + _this1._22;
		var x2 = (_this1._00 * value_x1 + _this1._10 * value_y1 + _this1._20) / w1;
		var y2 = (_this1._01 * value_x1 + _this1._11 * value_y1 + _this1._21) / w1;
		p2 = new kha_math_FastVector2(x2,y2);
		var p3;
		var _this2 = this.transformations[this.transformations.length - 1];
		var value_x2 = x + width + strength / 2;
		var value_y2 = y - strength / 2;
		var w2 = _this2._02 * value_x2 + _this2._12 * value_y2 + _this2._22;
		var x3 = (_this2._00 * value_x2 + _this2._10 * value_y2 + _this2._20) / w2;
		var y3 = (_this2._01 * value_x2 + _this2._11 * value_y2 + _this2._21) / w2;
		p3 = new kha_math_FastVector2(x3,y3);
		var p4;
		var _this3 = this.transformations[this.transformations.length - 1];
		var value_x3 = x + width + strength / 2;
		var value_y3 = y + strength / 2;
		var w3 = _this3._02 * value_x3 + _this3._12 * value_y3 + _this3._22;
		var x4 = (_this3._00 * value_x3 + _this3._10 * value_y3 + _this3._20) / w3;
		var y4 = (_this3._01 * value_x3 + _this3._11 * value_y3 + _this3._21) / w3;
		p4 = new kha_math_FastVector2(x4,y4);
		this.coloredPainter.fillRect(this.get_opacity(),this.get_color(),p1.x,p1.y,p2.x,p2.y,p3.x,p3.y,p4.x,p4.y);
		var _this4 = this.transformations[this.transformations.length - 1];
		var value_x4 = x - strength / 2;
		var value_y4 = y + height + strength / 2;
		var w4 = _this4._02 * value_x4 + _this4._12 * value_y4 + _this4._22;
		var x5 = (_this4._00 * value_x4 + _this4._10 * value_y4 + _this4._20) / w4;
		var y5 = (_this4._01 * value_x4 + _this4._11 * value_y4 + _this4._21) / w4;
		p1 = new kha_math_FastVector2(x5,y5);
		var _this5 = this.transformations[this.transformations.length - 1];
		var value_x5 = x + strength / 2;
		var value_y5 = y - strength / 2;
		var w5 = _this5._02 * value_x5 + _this5._12 * value_y5 + _this5._22;
		var x6 = (_this5._00 * value_x5 + _this5._10 * value_y5 + _this5._20) / w5;
		var y6 = (_this5._01 * value_x5 + _this5._11 * value_y5 + _this5._21) / w5;
		p3 = new kha_math_FastVector2(x6,y6);
		var _this6 = this.transformations[this.transformations.length - 1];
		var value_x6 = x + strength / 2;
		var value_y6 = y + height + strength / 2;
		var w6 = _this6._02 * value_x6 + _this6._12 * value_y6 + _this6._22;
		var x7 = (_this6._00 * value_x6 + _this6._10 * value_y6 + _this6._20) / w6;
		var y7 = (_this6._01 * value_x6 + _this6._11 * value_y6 + _this6._21) / w6;
		p4 = new kha_math_FastVector2(x7,y7);
		this.coloredPainter.fillRect(this.get_opacity(),this.get_color(),p1.x,p1.y,p2.x,p2.y,p3.x,p3.y,p4.x,p4.y);
		var _this7 = this.transformations[this.transformations.length - 1];
		var value_x7 = x - strength / 2;
		var value_y7 = y + height - strength / 2;
		var w7 = _this7._02 * value_x7 + _this7._12 * value_y7 + _this7._22;
		var x8 = (_this7._00 * value_x7 + _this7._10 * value_y7 + _this7._20) / w7;
		var y8 = (_this7._01 * value_x7 + _this7._11 * value_y7 + _this7._21) / w7;
		p2 = new kha_math_FastVector2(x8,y8);
		var _this8 = this.transformations[this.transformations.length - 1];
		var value_x8 = x + width + strength / 2;
		var value_y8 = y + height - strength / 2;
		var w8 = _this8._02 * value_x8 + _this8._12 * value_y8 + _this8._22;
		var x9 = (_this8._00 * value_x8 + _this8._10 * value_y8 + _this8._20) / w8;
		var y9 = (_this8._01 * value_x8 + _this8._11 * value_y8 + _this8._21) / w8;
		p3 = new kha_math_FastVector2(x9,y9);
		var _this9 = this.transformations[this.transformations.length - 1];
		var value_x9 = x + width + strength / 2;
		var value_y9 = y + height + strength / 2;
		var w9 = _this9._02 * value_x9 + _this9._12 * value_y9 + _this9._22;
		var x10 = (_this9._00 * value_x9 + _this9._10 * value_y9 + _this9._20) / w9;
		var y10 = (_this9._01 * value_x9 + _this9._11 * value_y9 + _this9._21) / w9;
		p4 = new kha_math_FastVector2(x10,y10);
		this.coloredPainter.fillRect(this.get_opacity(),this.get_color(),p1.x,p1.y,p2.x,p2.y,p3.x,p3.y,p4.x,p4.y);
		var _this10 = this.transformations[this.transformations.length - 1];
		var value_x10 = x + width - strength / 2;
		var value_y10 = y + height + strength / 2;
		var w10 = _this10._02 * value_x10 + _this10._12 * value_y10 + _this10._22;
		var x11 = (_this10._00 * value_x10 + _this10._10 * value_y10 + _this10._20) / w10;
		var y11 = (_this10._01 * value_x10 + _this10._11 * value_y10 + _this10._21) / w10;
		p1 = new kha_math_FastVector2(x11,y11);
		var _this11 = this.transformations[this.transformations.length - 1];
		var value_x11 = x + width - strength / 2;
		var value_y11 = y - strength / 2;
		var w11 = _this11._02 * value_x11 + _this11._12 * value_y11 + _this11._22;
		var x12 = (_this11._00 * value_x11 + _this11._10 * value_y11 + _this11._20) / w11;
		var y12 = (_this11._01 * value_x11 + _this11._11 * value_y11 + _this11._21) / w11;
		p2 = new kha_math_FastVector2(x12,y12);
		var _this12 = this.transformations[this.transformations.length - 1];
		var value_x12 = x + width + strength / 2;
		var value_y12 = y - strength / 2;
		var w12 = _this12._02 * value_x12 + _this12._12 * value_y12 + _this12._22;
		var x13 = (_this12._00 * value_x12 + _this12._10 * value_y12 + _this12._20) / w12;
		var y13 = (_this12._01 * value_x12 + _this12._11 * value_y12 + _this12._21) / w12;
		p3 = new kha_math_FastVector2(x13,y13);
		var _this13 = this.transformations[this.transformations.length - 1];
		var value_x13 = x + width + strength / 2;
		var value_y13 = y + height + strength / 2;
		var w13 = _this13._02 * value_x13 + _this13._12 * value_y13 + _this13._22;
		var x14 = (_this13._00 * value_x13 + _this13._10 * value_y13 + _this13._20) / w13;
		var y14 = (_this13._01 * value_x13 + _this13._11 * value_y13 + _this13._21) / w13;
		p4 = new kha_math_FastVector2(x14,y14);
		this.coloredPainter.fillRect(this.get_opacity(),this.get_color(),p1.x,p1.y,p2.x,p2.y,p3.x,p3.y,p4.x,p4.y);
	}
	,fillRect: function(x,y,width,height) {
		this.imagePainter.end();
		this.textPainter.end();
		var _this = this.transformations[this.transformations.length - 1];
		var value_x = x;
		var value_y = y + height;
		var w = _this._02 * value_x + _this._12 * value_y + _this._22;
		var x1 = (_this._00 * value_x + _this._10 * value_y + _this._20) / w;
		var y1 = (_this._01 * value_x + _this._11 * value_y + _this._21) / w;
		var p1_x = x1;
		var p1_y = y1;
		var _this1 = this.transformations[this.transformations.length - 1];
		var value_x1 = x;
		var value_y1 = y;
		var w1 = _this1._02 * value_x1 + _this1._12 * value_y1 + _this1._22;
		var x2 = (_this1._00 * value_x1 + _this1._10 * value_y1 + _this1._20) / w1;
		var y2 = (_this1._01 * value_x1 + _this1._11 * value_y1 + _this1._21) / w1;
		var p2_x = x2;
		var p2_y = y2;
		var _this2 = this.transformations[this.transformations.length - 1];
		var value_x2 = x + width;
		var value_y2 = y;
		var w2 = _this2._02 * value_x2 + _this2._12 * value_y2 + _this2._22;
		var x3 = (_this2._00 * value_x2 + _this2._10 * value_y2 + _this2._20) / w2;
		var y3 = (_this2._01 * value_x2 + _this2._11 * value_y2 + _this2._21) / w2;
		var p3_x = x3;
		var p3_y = y3;
		var _this3 = this.transformations[this.transformations.length - 1];
		var value_x3 = x + width;
		var value_y3 = y + height;
		var w3 = _this3._02 * value_x3 + _this3._12 * value_y3 + _this3._22;
		var x4 = (_this3._00 * value_x3 + _this3._10 * value_y3 + _this3._20) / w3;
		var y4 = (_this3._01 * value_x3 + _this3._11 * value_y3 + _this3._21) / w3;
		var p4_x = x4;
		var p4_y = y4;
		this.coloredPainter.fillRect(this.get_opacity(),this.get_color(),p1_x,p1_y,p2_x,p2_y,p3_x,p3_y,p4_x,p4_y);
	}
	,drawString: function(text,x,y) {
		this.imagePainter.end();
		this.coloredPainter.end();
		this.textPainter.drawString(text,this.get_opacity(),this.get_color(),x,y,this.transformations[this.transformations.length - 1]);
	}
	,get_font: function() {
		return this.myFont;
	}
	,set_font: function(font) {
		this.textPainter.setFont(font);
		return this.myFont = font;
	}
	,set_fontSize: function(value) {
		return kha_graphics2_Graphics.prototype.set_fontSize.call(this,this.textPainter.fontSize = value);
	}
	,drawLine: function(x1,y1,x2,y2,strength) {
		if(strength == null) strength = 1.0;
		this.imagePainter.end();
		this.textPainter.end();
		var vec;
		if(y2 == y1) vec = new kha_math_FastVector2(0,-1); else vec = new kha_math_FastVector2(1,-(x2 - x1) / (y2 - y1));
		vec.set_length(strength);
		var p1 = new kha_math_FastVector2(x1 + 0.5 * vec.x,y1 + 0.5 * vec.y);
		var p2 = new kha_math_FastVector2(x2 + 0.5 * vec.x,y2 + 0.5 * vec.y);
		var p3 = new kha_math_FastVector2(p1.x - vec.x,p1.y - vec.y);
		var p4 = new kha_math_FastVector2(p2.x - vec.x,p2.y - vec.y);
		var _this = this.transformations[this.transformations.length - 1];
		var w = _this._02 * p1.x + _this._12 * p1.y + _this._22;
		var x = (_this._00 * p1.x + _this._10 * p1.y + _this._20) / w;
		var y = (_this._01 * p1.x + _this._11 * p1.y + _this._21) / w;
		p1 = new kha_math_FastVector2(x,y);
		var _this1 = this.transformations[this.transformations.length - 1];
		var w1 = _this1._02 * p2.x + _this1._12 * p2.y + _this1._22;
		var x3 = (_this1._00 * p2.x + _this1._10 * p2.y + _this1._20) / w1;
		var y3 = (_this1._01 * p2.x + _this1._11 * p2.y + _this1._21) / w1;
		p2 = new kha_math_FastVector2(x3,y3);
		var _this2 = this.transformations[this.transformations.length - 1];
		var w2 = _this2._02 * p3.x + _this2._12 * p3.y + _this2._22;
		var x4 = (_this2._00 * p3.x + _this2._10 * p3.y + _this2._20) / w2;
		var y4 = (_this2._01 * p3.x + _this2._11 * p3.y + _this2._21) / w2;
		p3 = new kha_math_FastVector2(x4,y4);
		var _this3 = this.transformations[this.transformations.length - 1];
		var w3 = _this3._02 * p4.x + _this3._12 * p4.y + _this3._22;
		var x5 = (_this3._00 * p4.x + _this3._10 * p4.y + _this3._20) / w3;
		var y5 = (_this3._01 * p4.x + _this3._11 * p4.y + _this3._21) / w3;
		p4 = new kha_math_FastVector2(x5,y5);
		this.coloredPainter.fillTriangle(this.get_opacity(),this.get_color(),p1.x,p1.y,p2.x,p2.y,p3.x,p3.y);
		this.coloredPainter.fillTriangle(this.get_opacity(),this.get_color(),p3.x,p3.y,p2.x,p2.y,p4.x,p4.y);
	}
	,fillTriangle: function(x1,y1,x2,y2,x3,y3) {
		this.imagePainter.end();
		this.textPainter.end();
		var _this = this.transformations[this.transformations.length - 1];
		var value_x = x1;
		var value_y = y1;
		var w = _this._02 * value_x + _this._12 * value_y + _this._22;
		var x = (_this._00 * value_x + _this._10 * value_y + _this._20) / w;
		var y = (_this._01 * value_x + _this._11 * value_y + _this._21) / w;
		var p1_x = x;
		var p1_y = y;
		var _this1 = this.transformations[this.transformations.length - 1];
		var value_x1 = x2;
		var value_y1 = y2;
		var w1 = _this1._02 * value_x1 + _this1._12 * value_y1 + _this1._22;
		var x4 = (_this1._00 * value_x1 + _this1._10 * value_y1 + _this1._20) / w1;
		var y4 = (_this1._01 * value_x1 + _this1._11 * value_y1 + _this1._21) / w1;
		var p2_x = x4;
		var p2_y = y4;
		var _this2 = this.transformations[this.transformations.length - 1];
		var value_x2 = x3;
		var value_y2 = y3;
		var w2 = _this2._02 * value_x2 + _this2._12 * value_y2 + _this2._22;
		var x5 = (_this2._00 * value_x2 + _this2._10 * value_y2 + _this2._20) / w2;
		var y5 = (_this2._01 * value_x2 + _this2._11 * value_y2 + _this2._21) / w2;
		var p3_x = x5;
		var p3_y = y5;
		this.coloredPainter.fillTriangle(this.get_opacity(),this.get_color(),p1_x,p1_y,p2_x,p2_y,p3_x,p3_y);
	}
	,myImageScaleQuality: null
	,get_imageScaleQuality: function() {
		return this.myImageScaleQuality;
	}
	,set_imageScaleQuality: function(value) {
		this.imagePainter.setBilinearFilter(value == kha_graphics2_ImageScaleQuality.High);
		this.textPainter.setBilinearFilter(value == kha_graphics2_ImageScaleQuality.High);
		return this.myImageScaleQuality = value;
	}
	,setPipeline: function(pipeline) {
		this.flush();
		this.imagePainter.set_pipeline(pipeline);
		this.coloredPainter.set_pipeline(pipeline);
		this.textPainter.set_pipeline(pipeline);
		if(pipeline != null) this.g.setPipeline(pipeline);
	}
	,setBlendingMode: function(source,destination) {
		this.flush();
		this.imagePainter.sourceBlend = source;
		this.imagePainter.destinationBlend = destination;
		this.coloredPainter.sourceBlend = source;
		this.coloredPainter.destinationBlend = destination;
		this.textPainter.sourceBlend = source;
		this.textPainter.destinationBlend = destination;
	}
	,scissor: function(x,y,width,height) {
		this.flush();
		this.g.scissor(x,y,width,height);
	}
	,disableScissor: function() {
		this.flush();
		this.g.disableScissor();
	}
	,begin: function(clear,clearColor) {
		if(clear == null) clear = true;
		this.g.begin();
		if(clear) this.clear(clearColor);
		this.setProjection();
	}
	,clear: function(color) {
		this.g.clear(color == null?kha__$Color_Color_$Impl_$.Black:color);
	}
	,flush: function() {
		this.imagePainter.end();
		this.textPainter.end();
		this.coloredPainter.end();
	}
	,end: function() {
		this.flush();
		this.g.end();
	}
	,drawVideoInternal: function(video,x,y,width,height) {
	}
	,drawVideo: function(video,x,y,width,height) {
		this.setPipeline(kha_graphics4_Graphics2.videoPipeline);
		this.drawVideoInternal(video,x,y,width,height);
		this.setPipeline(null);
	}
	,__class__: kha_graphics4_Graphics2
});
var kha_graphics4_IndexBuffer = function(indexCount,usage,canRead) {
	if(canRead == null) canRead = false;
	this.usage = usage;
	this.mySize = indexCount;
	this.buffer = kha_SystemImpl.gl.createBuffer();
	this.data = [];
	this.data[indexCount - 1] = 0;
};
$hxClasses["kha.graphics4.IndexBuffer"] = kha_graphics4_IndexBuffer;
kha_graphics4_IndexBuffer.__name__ = ["kha","graphics4","IndexBuffer"];
kha_graphics4_IndexBuffer.prototype = {
	buffer: null
	,data: null
	,mySize: null
	,usage: null
	,lock: function() {
		return this.data;
	}
	,unlock: function() {
		kha_SystemImpl.gl.bindBuffer(34963,this.buffer);
		kha_SystemImpl.gl.bufferData(34963,new Uint16Array(this.data),this.usage == kha_graphics4_Usage.DynamicUsage?35048:35044);
	}
	,set: function() {
		kha_SystemImpl.gl.bindBuffer(34963,this.buffer);
	}
	,count: function() {
		return this.mySize;
	}
	,__class__: kha_graphics4_IndexBuffer
};
var kha_graphics4_MipMapFilter = $hxClasses["kha.graphics4.MipMapFilter"] = { __ename__ : ["kha","graphics4","MipMapFilter"], __constructs__ : ["NoMipFilter","PointMipFilter","LinearMipFilter"] };
kha_graphics4_MipMapFilter.NoMipFilter = ["NoMipFilter",0];
kha_graphics4_MipMapFilter.NoMipFilter.toString = $estr;
kha_graphics4_MipMapFilter.NoMipFilter.__enum__ = kha_graphics4_MipMapFilter;
kha_graphics4_MipMapFilter.PointMipFilter = ["PointMipFilter",1];
kha_graphics4_MipMapFilter.PointMipFilter.toString = $estr;
kha_graphics4_MipMapFilter.PointMipFilter.__enum__ = kha_graphics4_MipMapFilter;
kha_graphics4_MipMapFilter.LinearMipFilter = ["LinearMipFilter",2];
kha_graphics4_MipMapFilter.LinearMipFilter.toString = $estr;
kha_graphics4_MipMapFilter.LinearMipFilter.__enum__ = kha_graphics4_MipMapFilter;
var kha_graphics4_PipelineStateBase = function() {
	this.inputLayout = null;
	this.vertexShader = null;
	this.fragmentShader = null;
	this.cullMode = kha_graphics4_CullMode.None;
	this.depthWrite = false;
	this.depthMode = kha_graphics4_CompareMode.Always;
	this.stencilMode = kha_graphics4_CompareMode.Always;
	this.stencilBothPass = kha_graphics4_StencilAction.Keep;
	this.stencilDepthFail = kha_graphics4_StencilAction.Keep;
	this.stencilFail = kha_graphics4_StencilAction.Keep;
	this.stencilReferenceValue = 0;
	this.stencilReadMask = 255;
	this.stencilWriteMask = 255;
	this.blendSource = kha_graphics4_BlendingOperation.BlendOne;
	this.blendDestination = kha_graphics4_BlendingOperation.BlendZero;
	this.colorWriteMaskRed = this.colorWriteMaskBlue = this.colorWriteMaskGreen = this.colorWriteMaskAlpha = true;
};
$hxClasses["kha.graphics4.PipelineStateBase"] = kha_graphics4_PipelineStateBase;
kha_graphics4_PipelineStateBase.__name__ = ["kha","graphics4","PipelineStateBase"];
kha_graphics4_PipelineStateBase.prototype = {
	inputLayout: null
	,vertexShader: null
	,fragmentShader: null
	,cullMode: null
	,depthWrite: null
	,depthMode: null
	,stencilMode: null
	,stencilBothPass: null
	,stencilDepthFail: null
	,stencilFail: null
	,stencilReferenceValue: null
	,stencilReadMask: null
	,stencilWriteMask: null
	,blendSource: null
	,blendDestination: null
	,colorWriteMaskRed: null
	,colorWriteMaskGreen: null
	,colorWriteMaskBlue: null
	,colorWriteMaskAlpha: null
	,set_colorWriteMask: function(value) {
		return this.colorWriteMaskRed = this.colorWriteMaskBlue = this.colorWriteMaskGreen = this.colorWriteMaskAlpha = value;
	}
	,__class__: kha_graphics4_PipelineStateBase
	,__properties__: {set_colorWriteMask:"set_colorWriteMask"}
};
var kha_graphics4_PipelineState = function() {
	kha_graphics4_PipelineStateBase.call(this);
	this.program = kha_SystemImpl.gl.createProgram();
	this.textures = [];
	this.textureValues = [];
};
$hxClasses["kha.graphics4.PipelineState"] = kha_graphics4_PipelineState;
kha_graphics4_PipelineState.__name__ = ["kha","graphics4","PipelineState"];
kha_graphics4_PipelineState.__super__ = kha_graphics4_PipelineStateBase;
kha_graphics4_PipelineState.prototype = $extend(kha_graphics4_PipelineStateBase.prototype,{
	program: null
	,textures: null
	,textureValues: null
	,compile: function() {
		this.compileShader(this.vertexShader);
		this.compileShader(this.fragmentShader);
		kha_SystemImpl.gl.attachShader(this.program,this.vertexShader.shader);
		kha_SystemImpl.gl.attachShader(this.program,this.fragmentShader.shader);
		var index = 0;
		var _g = 0;
		var _g1 = this.inputLayout;
		while(_g < _g1.length) {
			var structure = _g1[_g];
			++_g;
			var _g2 = 0;
			var _g3 = structure.elements;
			while(_g2 < _g3.length) {
				var element = _g3[_g2];
				++_g2;
				kha_SystemImpl.gl.bindAttribLocation(this.program,index,element.name);
				if(element.data == kha_graphics4_VertexData.Float4x4) index += 4; else ++index;
			}
		}
		kha_SystemImpl.gl.linkProgram(this.program);
		if(!kha_SystemImpl.gl.getProgramParameter(this.program,35714)) throw new js__$Boot_HaxeError("Could not link the shader program:\n" + kha_SystemImpl.gl.getProgramInfoLog(this.program));
	}
	,set: function() {
		kha_SystemImpl.gl.useProgram(this.program);
		var _g1 = 0;
		var _g = this.textureValues.length;
		while(_g1 < _g) {
			var index = _g1++;
			kha_SystemImpl.gl.uniform1i(this.textureValues[index],index);
		}
		kha_SystemImpl.gl.colorMask(this.colorWriteMaskRed,this.colorWriteMaskGreen,this.colorWriteMaskBlue,this.colorWriteMaskAlpha);
	}
	,compileShader: function(shader) {
		if(shader.shader != null) return;
		var s = kha_SystemImpl.gl.createShader(shader.type);
		kha_SystemImpl.gl.shaderSource(s,shader.source);
		kha_SystemImpl.gl.compileShader(s);
		if(!kha_SystemImpl.gl.getShaderParameter(s,35713)) throw new js__$Boot_HaxeError("Could not compile shader:\n" + kha_SystemImpl.gl.getShaderInfoLog(s));
		shader.shader = s;
	}
	,getConstantLocation: function(name) {
		return new kha_js_graphics4_ConstantLocation(kha_SystemImpl.gl.getUniformLocation(this.program,name));
	}
	,getTextureUnit: function(name) {
		var index = this.findTexture(name);
		if(index < 0) {
			var location = kha_SystemImpl.gl.getUniformLocation(this.program,name);
			index = this.textures.length;
			this.textureValues.push(location);
			this.textures.push(name);
		}
		return new kha_js_graphics4_TextureUnit(index);
	}
	,findTexture: function(name) {
		var _g1 = 0;
		var _g = this.textures.length;
		while(_g1 < _g) {
			var index = _g1++;
			if(this.textures[index] == name) return index;
		}
		return -1;
	}
	,__class__: kha_graphics4_PipelineState
});
var kha_graphics4_StencilAction = $hxClasses["kha.graphics4.StencilAction"] = { __ename__ : ["kha","graphics4","StencilAction"], __constructs__ : ["Keep","Zero","Replace","Increment","IncrementWrap","Decrement","DecrementWrap","Invert"] };
kha_graphics4_StencilAction.Keep = ["Keep",0];
kha_graphics4_StencilAction.Keep.toString = $estr;
kha_graphics4_StencilAction.Keep.__enum__ = kha_graphics4_StencilAction;
kha_graphics4_StencilAction.Zero = ["Zero",1];
kha_graphics4_StencilAction.Zero.toString = $estr;
kha_graphics4_StencilAction.Zero.__enum__ = kha_graphics4_StencilAction;
kha_graphics4_StencilAction.Replace = ["Replace",2];
kha_graphics4_StencilAction.Replace.toString = $estr;
kha_graphics4_StencilAction.Replace.__enum__ = kha_graphics4_StencilAction;
kha_graphics4_StencilAction.Increment = ["Increment",3];
kha_graphics4_StencilAction.Increment.toString = $estr;
kha_graphics4_StencilAction.Increment.__enum__ = kha_graphics4_StencilAction;
kha_graphics4_StencilAction.IncrementWrap = ["IncrementWrap",4];
kha_graphics4_StencilAction.IncrementWrap.toString = $estr;
kha_graphics4_StencilAction.IncrementWrap.__enum__ = kha_graphics4_StencilAction;
kha_graphics4_StencilAction.Decrement = ["Decrement",5];
kha_graphics4_StencilAction.Decrement.toString = $estr;
kha_graphics4_StencilAction.Decrement.__enum__ = kha_graphics4_StencilAction;
kha_graphics4_StencilAction.DecrementWrap = ["DecrementWrap",6];
kha_graphics4_StencilAction.DecrementWrap.toString = $estr;
kha_graphics4_StencilAction.DecrementWrap.__enum__ = kha_graphics4_StencilAction;
kha_graphics4_StencilAction.Invert = ["Invert",7];
kha_graphics4_StencilAction.Invert.toString = $estr;
kha_graphics4_StencilAction.Invert.__enum__ = kha_graphics4_StencilAction;
var kha_graphics4_TexDir = $hxClasses["kha.graphics4.TexDir"] = { __ename__ : ["kha","graphics4","TexDir"], __constructs__ : ["U","V"] };
kha_graphics4_TexDir.U = ["U",0];
kha_graphics4_TexDir.U.toString = $estr;
kha_graphics4_TexDir.U.__enum__ = kha_graphics4_TexDir;
kha_graphics4_TexDir.V = ["V",1];
kha_graphics4_TexDir.V.toString = $estr;
kha_graphics4_TexDir.V.__enum__ = kha_graphics4_TexDir;
var kha_graphics4_TextureAddressing = $hxClasses["kha.graphics4.TextureAddressing"] = { __ename__ : ["kha","graphics4","TextureAddressing"], __constructs__ : ["Repeat","Mirror","Clamp"] };
kha_graphics4_TextureAddressing.Repeat = ["Repeat",0];
kha_graphics4_TextureAddressing.Repeat.toString = $estr;
kha_graphics4_TextureAddressing.Repeat.__enum__ = kha_graphics4_TextureAddressing;
kha_graphics4_TextureAddressing.Mirror = ["Mirror",1];
kha_graphics4_TextureAddressing.Mirror.toString = $estr;
kha_graphics4_TextureAddressing.Mirror.__enum__ = kha_graphics4_TextureAddressing;
kha_graphics4_TextureAddressing.Clamp = ["Clamp",2];
kha_graphics4_TextureAddressing.Clamp.toString = $estr;
kha_graphics4_TextureAddressing.Clamp.__enum__ = kha_graphics4_TextureAddressing;
var kha_graphics4_TextureFilter = $hxClasses["kha.graphics4.TextureFilter"] = { __ename__ : ["kha","graphics4","TextureFilter"], __constructs__ : ["PointFilter","LinearFilter","AnisotropicFilter"] };
kha_graphics4_TextureFilter.PointFilter = ["PointFilter",0];
kha_graphics4_TextureFilter.PointFilter.toString = $estr;
kha_graphics4_TextureFilter.PointFilter.__enum__ = kha_graphics4_TextureFilter;
kha_graphics4_TextureFilter.LinearFilter = ["LinearFilter",1];
kha_graphics4_TextureFilter.LinearFilter.toString = $estr;
kha_graphics4_TextureFilter.LinearFilter.__enum__ = kha_graphics4_TextureFilter;
kha_graphics4_TextureFilter.AnisotropicFilter = ["AnisotropicFilter",2];
kha_graphics4_TextureFilter.AnisotropicFilter.toString = $estr;
kha_graphics4_TextureFilter.AnisotropicFilter.__enum__ = kha_graphics4_TextureFilter;
var kha_graphics4_TextureFormat = $hxClasses["kha.graphics4.TextureFormat"] = { __ename__ : ["kha","graphics4","TextureFormat"], __constructs__ : ["RGBA32","L8","RGBA128","DEPTH16"] };
kha_graphics4_TextureFormat.RGBA32 = ["RGBA32",0];
kha_graphics4_TextureFormat.RGBA32.toString = $estr;
kha_graphics4_TextureFormat.RGBA32.__enum__ = kha_graphics4_TextureFormat;
kha_graphics4_TextureFormat.L8 = ["L8",1];
kha_graphics4_TextureFormat.L8.toString = $estr;
kha_graphics4_TextureFormat.L8.__enum__ = kha_graphics4_TextureFormat;
kha_graphics4_TextureFormat.RGBA128 = ["RGBA128",2];
kha_graphics4_TextureFormat.RGBA128.toString = $estr;
kha_graphics4_TextureFormat.RGBA128.__enum__ = kha_graphics4_TextureFormat;
kha_graphics4_TextureFormat.DEPTH16 = ["DEPTH16",3];
kha_graphics4_TextureFormat.DEPTH16.toString = $estr;
kha_graphics4_TextureFormat.DEPTH16.__enum__ = kha_graphics4_TextureFormat;
var kha_graphics4_TextureUnit = function() { };
$hxClasses["kha.graphics4.TextureUnit"] = kha_graphics4_TextureUnit;
kha_graphics4_TextureUnit.__name__ = ["kha","graphics4","TextureUnit"];
var kha_graphics4_Usage = $hxClasses["kha.graphics4.Usage"] = { __ename__ : ["kha","graphics4","Usage"], __constructs__ : ["StaticUsage","DynamicUsage","ReadableUsage"] };
kha_graphics4_Usage.StaticUsage = ["StaticUsage",0];
kha_graphics4_Usage.StaticUsage.toString = $estr;
kha_graphics4_Usage.StaticUsage.__enum__ = kha_graphics4_Usage;
kha_graphics4_Usage.DynamicUsage = ["DynamicUsage",1];
kha_graphics4_Usage.DynamicUsage.toString = $estr;
kha_graphics4_Usage.DynamicUsage.__enum__ = kha_graphics4_Usage;
kha_graphics4_Usage.ReadableUsage = ["ReadableUsage",2];
kha_graphics4_Usage.ReadableUsage.toString = $estr;
kha_graphics4_Usage.ReadableUsage.__enum__ = kha_graphics4_Usage;
var kha_graphics4_VertexBuffer = function(vertexCount,structure,usage,instanceDataStepRate,canRead) {
	if(canRead == null) canRead = false;
	if(instanceDataStepRate == null) instanceDataStepRate = 0;
	this.usage = usage;
	this.instanceDataStepRate = instanceDataStepRate;
	this.mySize = vertexCount;
	this.myStride = 0;
	var _g = 0;
	var _g1 = structure.elements;
	while(_g < _g1.length) {
		var element = _g1[_g];
		++_g;
		var _g2 = element.data;
		switch(_g2[1]) {
		case 0:
			this.myStride += 4;
			break;
		case 1:
			this.myStride += 8;
			break;
		case 2:
			this.myStride += 12;
			break;
		case 3:
			this.myStride += 16;
			break;
		case 4:
			this.myStride += 64;
			break;
		}
	}
	this.buffer = kha_SystemImpl.gl.createBuffer();
	this.data = new Float32Array(vertexCount * this.myStride / 4 | 0);
	this.sizes = [];
	this.offsets = [];
	this.sizes[structure.elements.length - 1] = 0;
	this.offsets[structure.elements.length - 1] = 0;
	var offset = 0;
	var index = 0;
	var _g3 = 0;
	var _g11 = structure.elements;
	while(_g3 < _g11.length) {
		var element1 = _g11[_g3];
		++_g3;
		var size;
		var _g21 = element1.data;
		switch(_g21[1]) {
		case 0:
			size = 1;
			break;
		case 1:
			size = 2;
			break;
		case 2:
			size = 3;
			break;
		case 3:
			size = 4;
			break;
		case 4:
			size = 16;
			break;
		}
		this.sizes[index] = size;
		this.offsets[index] = offset;
		var _g22 = element1.data;
		switch(_g22[1]) {
		case 0:
			offset += 4;
			break;
		case 1:
			offset += 8;
			break;
		case 2:
			offset += 12;
			break;
		case 3:
			offset += 16;
			break;
		case 4:
			offset += 64;
			break;
		}
		++index;
	}
};
$hxClasses["kha.graphics4.VertexBuffer"] = kha_graphics4_VertexBuffer;
kha_graphics4_VertexBuffer.__name__ = ["kha","graphics4","VertexBuffer"];
kha_graphics4_VertexBuffer.prototype = {
	buffer: null
	,data: null
	,mySize: null
	,myStride: null
	,sizes: null
	,offsets: null
	,usage: null
	,instanceDataStepRate: null
	,lock: function(start,count) {
		return this.data;
	}
	,unlock: function() {
		kha_SystemImpl.gl.bindBuffer(34962,this.buffer);
		kha_SystemImpl.gl.bufferData(34962,this.data,this.usage == kha_graphics4_Usage.DynamicUsage?35048:35044);
	}
	,stride: function() {
		return this.myStride;
	}
	,count: function() {
		return this.mySize;
	}
	,set: function(offset) {
		var ext = kha_SystemImpl.gl.getExtension("ANGLE_instanced_arrays");
		kha_SystemImpl.gl.bindBuffer(34962,this.buffer);
		var attributesOffset = 0;
		var _g1 = 0;
		var _g = this.sizes.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.sizes[i] > 4) {
				var size = this.sizes[i];
				var addonOffset = 0;
				while(size > 0) {
					kha_SystemImpl.gl.enableVertexAttribArray(offset + attributesOffset);
					kha_SystemImpl.gl.vertexAttribPointer(offset + attributesOffset,4,5126,false,this.myStride,this.offsets[i] + addonOffset);
					if(ext) ext.vertexAttribDivisorANGLE(offset + attributesOffset,this.instanceDataStepRate);
					size -= 4;
					addonOffset += 16;
					++attributesOffset;
				}
			} else {
				kha_SystemImpl.gl.enableVertexAttribArray(offset + attributesOffset);
				kha_SystemImpl.gl.vertexAttribPointer(offset + attributesOffset,this.sizes[i],5126,false,this.myStride,this.offsets[i]);
				if(ext) ext.vertexAttribDivisorANGLE(offset + attributesOffset,this.instanceDataStepRate);
				++attributesOffset;
			}
		}
		return attributesOffset;
	}
	,__class__: kha_graphics4_VertexBuffer
};
var kha_graphics4_VertexData = $hxClasses["kha.graphics4.VertexData"] = { __ename__ : ["kha","graphics4","VertexData"], __constructs__ : ["Float1","Float2","Float3","Float4","Float4x4"] };
kha_graphics4_VertexData.Float1 = ["Float1",0];
kha_graphics4_VertexData.Float1.toString = $estr;
kha_graphics4_VertexData.Float1.__enum__ = kha_graphics4_VertexData;
kha_graphics4_VertexData.Float2 = ["Float2",1];
kha_graphics4_VertexData.Float2.toString = $estr;
kha_graphics4_VertexData.Float2.__enum__ = kha_graphics4_VertexData;
kha_graphics4_VertexData.Float3 = ["Float3",2];
kha_graphics4_VertexData.Float3.toString = $estr;
kha_graphics4_VertexData.Float3.__enum__ = kha_graphics4_VertexData;
kha_graphics4_VertexData.Float4 = ["Float4",3];
kha_graphics4_VertexData.Float4.toString = $estr;
kha_graphics4_VertexData.Float4.__enum__ = kha_graphics4_VertexData;
kha_graphics4_VertexData.Float4x4 = ["Float4x4",4];
kha_graphics4_VertexData.Float4x4.toString = $estr;
kha_graphics4_VertexData.Float4x4.__enum__ = kha_graphics4_VertexData;
var kha_graphics4_VertexElement = function(name,data) {
	this.name = name;
	this.data = data;
};
$hxClasses["kha.graphics4.VertexElement"] = kha_graphics4_VertexElement;
kha_graphics4_VertexElement.__name__ = ["kha","graphics4","VertexElement"];
kha_graphics4_VertexElement.prototype = {
	name: null
	,data: null
	,__class__: kha_graphics4_VertexElement
};
var kha_graphics4_VertexShader = function(source) {
	this.source = source.toString();
	this.type = 35633;
	this.shader = null;
};
$hxClasses["kha.graphics4.VertexShader"] = kha_graphics4_VertexShader;
kha_graphics4_VertexShader.__name__ = ["kha","graphics4","VertexShader"];
kha_graphics4_VertexShader.prototype = {
	source: null
	,type: null
	,shader: null
	,__class__: kha_graphics4_VertexShader
};
var kha_graphics4_VertexStructure = function() {
	this.elements = [];
};
$hxClasses["kha.graphics4.VertexStructure"] = kha_graphics4_VertexStructure;
kha_graphics4_VertexStructure.__name__ = ["kha","graphics4","VertexStructure"];
kha_graphics4_VertexStructure.prototype = {
	elements: null
	,add: function(name,data) {
		this.elements.push(new kha_graphics4_VertexElement(name,data));
	}
	,size: function() {
		return this.elements.length;
	}
	,byteSize: function() {
		var byteSize = 0;
		var _g1 = 0;
		var _g = this.elements.length;
		while(_g1 < _g) {
			var i = _g1++;
			byteSize += this.dataByteSize(this.elements[i].data);
		}
		return byteSize;
	}
	,dataByteSize: function(data) {
		switch(data[1]) {
		case 0:
			return 1;
		case 1:
			return 2;
		case 2:
			return 3;
		case 3:
			return 4;
		case 4:
			return 16;
		}
		return 0;
	}
	,get: function(index) {
		return this.elements[index];
	}
	,__class__: kha_graphics4_VertexStructure
};
var kha_input_Gamepad = $hx_exports.kha.input.Gamepad = function(id) {
	if(id == null) id = 0;
	this.axisListeners = [];
	this.buttonListeners = [];
	kha_input_Gamepad.instances[id] = this;
};
$hxClasses["kha.input.Gamepad"] = kha_input_Gamepad;
kha_input_Gamepad.__name__ = ["kha","input","Gamepad"];
kha_input_Gamepad.get = function(num) {
	if(num == null) num = 0;
	if(num >= kha_input_Gamepad.instances.length) return null;
	return kha_input_Gamepad.instances[num];
};
kha_input_Gamepad.prototype = {
	notify: function(axisListener,buttonListener) {
		if(axisListener != null) this.axisListeners.push(axisListener);
		if(buttonListener != null) this.buttonListeners.push(buttonListener);
	}
	,remove: function(axisListener,buttonListener) {
		if(axisListener != null) HxOverrides.remove(this.axisListeners,axisListener);
		if(buttonListener != null) HxOverrides.remove(this.buttonListeners,buttonListener);
	}
	,axisListeners: null
	,buttonListeners: null
	,sendAxisEvent: function(axis,value) {
		var _g = 0;
		var _g1 = this.axisListeners;
		while(_g < _g1.length) {
			var listener = _g1[_g];
			++_g;
			listener(axis,value);
		}
	}
	,sendButtonEvent: function(button,value) {
		var _g = 0;
		var _g1 = this.buttonListeners;
		while(_g < _g1.length) {
			var listener = _g1[_g];
			++_g;
			listener(button,value);
		}
	}
	,__class__: kha_input_Gamepad
};
var kha_network_Controller = function() {
	this.__id = kha_network_ControllerBuilder.nextId++;
};
$hxClasses["kha.network.Controller"] = kha_network_Controller;
kha_network_Controller.__name__ = ["kha","network","Controller"];
kha_network_Controller.prototype = {
	__id: null
	,_id: function() {
		return this.__id;
	}
	,_receive: function(offset,bytes) {
	}
	,__class__: kha_network_Controller
};
var kha_input_Keyboard = $hx_exports.kha.input.Keyboard = function() {
	kha_network_Controller.call(this);
	this.downListeners = [];
	this.upListeners = [];
	kha_input_Keyboard.instance = this;
};
$hxClasses["kha.input.Keyboard"] = kha_input_Keyboard;
kha_input_Keyboard.__name__ = ["kha","input","Keyboard"];
kha_input_Keyboard.get = function(num) {
	if(num == null) num = 0;
	return kha_SystemImpl.getKeyboard(num);
};
kha_input_Keyboard.__super__ = kha_network_Controller;
kha_input_Keyboard.prototype = $extend(kha_network_Controller.prototype,{
	notify: function(downListener,upListener) {
		if(downListener != null) this.downListeners.push(downListener);
		if(upListener != null) this.upListeners.push(upListener);
	}
	,remove: function(downListener,upListener) {
		if(downListener != null) HxOverrides.remove(this.downListeners,downListener);
		if(upListener != null) HxOverrides.remove(this.upListeners,upListener);
	}
	,show: function() {
	}
	,hide: function() {
	}
	,downListeners: null
	,upListeners: null
	,sendDownEvent: function(key,$char) {
		if(kha_network_Session.the() != null) {
			var bytes = haxe_io_Bytes.alloc(28);
			bytes.b[0] = 2;
			bytes.setInt32(1,this._id());
			bytes.setDouble(5,kha_Scheduler.realTime());
			bytes.setInt32(13,kha_System.windowWidth(0));
			bytes.setInt32(17,kha_System.windowHeight(0));
			bytes.set(21,(function($this) {
				var $r;
				var e = kha_System.get_screenRotation();
				$r = e[1];
				return $r;
			}(this)));
			bytes.setInt32(22,0);
			bytes.b[26] = key[1] & 255;
			bytes.set(27,HxOverrides.cca($char,0));
			kha_network_Session.the().network.send(bytes,false);
		}
		var _g = 0;
		var _g1 = this.downListeners;
		while(_g < _g1.length) {
			var listener = _g1[_g];
			++_g;
			listener(key,$char);
		}
	}
	,sendUpEvent: function(key,$char) {
		if(kha_network_Session.the() != null) {
			var bytes = haxe_io_Bytes.alloc(28);
			bytes.b[0] = 2;
			bytes.setInt32(1,this._id());
			bytes.setDouble(5,kha_Scheduler.realTime());
			bytes.setInt32(13,kha_System.windowWidth(0));
			bytes.setInt32(17,kha_System.windowHeight(0));
			bytes.set(21,(function($this) {
				var $r;
				var e = kha_System.get_screenRotation();
				$r = e[1];
				return $r;
			}(this)));
			bytes.setInt32(22,1);
			bytes.b[26] = key[1] & 255;
			bytes.set(27,HxOverrides.cca($char,0));
			kha_network_Session.the().network.send(bytes,false);
		}
		var _g = 0;
		var _g1 = this.upListeners;
		while(_g < _g1.length) {
			var listener = _g1[_g];
			++_g;
			listener(key,$char);
		}
	}
	,_receive: function(offset,bytes) {
		var funcindex = bytes.getInt32(offset);
		if(funcindex == 0) {
			var input0 = Type.createEnumIndex(kha_Key,bytes.b[offset + 4],null);
			var input1 = String.fromCharCode(bytes.b[offset + 5]);
			this.sendDownEvent(input0,input1);
			return;
		}
		if(funcindex == 1) {
			var input01 = Type.createEnumIndex(kha_Key,bytes.b[offset + 4],null);
			var input11 = String.fromCharCode(bytes.b[offset + 5]);
			this.sendUpEvent(input01,input11);
			return;
		}
	}
	,__class__: kha_input_Keyboard
});
var kha_input_Mouse = $hx_exports.kha.input.Mouse = function() {
	kha_network_Controller.call(this);
	kha_input_Mouse.instance = this;
};
$hxClasses["kha.input.Mouse"] = kha_input_Mouse;
kha_input_Mouse.__name__ = ["kha","input","Mouse"];
kha_input_Mouse.get = function(num) {
	if(num == null) num = 0;
	return kha_SystemImpl.getMouse(num);
};
kha_input_Mouse.__super__ = kha_network_Controller;
kha_input_Mouse.prototype = $extend(kha_network_Controller.prototype,{
	notify: function(downListener,upListener,moveListener,wheelListener) {
		this.notifyWindowed(0,downListener,upListener,moveListener,wheelListener);
	}
	,remove: function(downListener,upListener,moveListener,wheelListener) {
		this.removeWindowed(0,downListener,upListener,moveListener,wheelListener);
	}
	,notifyWindowed: function(windowId,downListener,upListener,moveListener,wheelListener) {
		if(downListener != null) {
			if(this.windowDownListeners == null) this.windowDownListeners = [];
			while(this.windowDownListeners.length <= windowId) this.windowDownListeners.push([]);
			this.windowDownListeners[windowId].push(downListener);
		}
		if(upListener != null) {
			if(this.windowUpListeners == null) this.windowUpListeners = [];
			while(this.windowUpListeners.length <= windowId) this.windowUpListeners.push([]);
			this.windowUpListeners[windowId].push(upListener);
		}
		if(moveListener != null) {
			if(this.windowMoveListeners == null) this.windowMoveListeners = [];
			while(this.windowMoveListeners.length <= windowId) this.windowMoveListeners.push([]);
			this.windowMoveListeners[windowId].push(moveListener);
		}
		if(wheelListener != null) {
			if(this.windowWheelListeners == null) this.windowWheelListeners = [];
			while(this.windowWheelListeners.length <= windowId) this.windowWheelListeners.push([]);
			this.windowWheelListeners[windowId].push(wheelListener);
		}
	}
	,removeWindowed: function(windowId,downListener,upListener,moveListener,wheelListener) {
		if(downListener != null) {
			if(this.windowDownListeners != null) {
				if(windowId < this.windowDownListeners.length) HxOverrides.remove(this.windowDownListeners[windowId],downListener); else haxe_Log.trace("no downListeners for window \"" + windowId + "\" are registered",{ fileName : "Mouse.hx", lineNumber : 76, className : "kha.input.Mouse", methodName : "removeWindowed"});
			} else haxe_Log.trace("no downListeners were ever registered",{ fileName : "Mouse.hx", lineNumber : 79, className : "kha.input.Mouse", methodName : "removeWindowed"});
		}
		if(upListener != null) {
			if(this.windowUpListeners != null) {
				if(windowId < this.windowUpListeners.length) HxOverrides.remove(this.windowUpListeners[windowId],upListener); else haxe_Log.trace("no upListeners for window \"" + windowId + "\" are registered",{ fileName : "Mouse.hx", lineNumber : 88, className : "kha.input.Mouse", methodName : "removeWindowed"});
			} else haxe_Log.trace("no upListeners were ever registered",{ fileName : "Mouse.hx", lineNumber : 91, className : "kha.input.Mouse", methodName : "removeWindowed"});
		}
		if(moveListener != null) {
			if(this.windowMoveListeners != null) {
				if(windowId < this.windowMoveListeners.length) HxOverrides.remove(this.windowMoveListeners[windowId],moveListener); else haxe_Log.trace("no moveListeners for window \"" + windowId + "\" are registered",{ fileName : "Mouse.hx", lineNumber : 100, className : "kha.input.Mouse", methodName : "removeWindowed"});
			} else haxe_Log.trace("no moveListeners were ever registered",{ fileName : "Mouse.hx", lineNumber : 103, className : "kha.input.Mouse", methodName : "removeWindowed"});
		}
		if(wheelListener != null) {
			if(this.windowWheelListeners != null) {
				if(windowId < this.windowWheelListeners.length) HxOverrides.remove(this.windowWheelListeners[windowId],wheelListener); else haxe_Log.trace("no wheelListeners for window \"" + windowId + "\" are registered",{ fileName : "Mouse.hx", lineNumber : 112, className : "kha.input.Mouse", methodName : "removeWindowed"});
			} else haxe_Log.trace("no wheelListeners were ever registered",{ fileName : "Mouse.hx", lineNumber : 115, className : "kha.input.Mouse", methodName : "removeWindowed"});
		}
	}
	,lock: function() {
	}
	,unlock: function() {
	}
	,canLock: function() {
		return false;
	}
	,isLocked: function() {
		return false;
	}
	,notifyOnLockChange: function(func,error) {
	}
	,removeFromLockChange: function(func,error) {
	}
	,hideSystemCursor: function() {
	}
	,showSystemCursor: function() {
	}
	,windowDownListeners: null
	,windowUpListeners: null
	,windowMoveListeners: null
	,windowWheelListeners: null
	,sendDownEvent: function(windowId,button,x,y) {
		if(kha_network_Session.the() != null) {
			var bytes = haxe_io_Bytes.alloc(42);
			bytes.b[0] = 2;
			bytes.setInt32(1,this._id());
			bytes.setDouble(5,kha_Scheduler.realTime());
			bytes.setInt32(13,kha_System.windowWidth(0));
			bytes.setInt32(17,kha_System.windowHeight(0));
			bytes.set(21,(function($this) {
				var $r;
				var e = kha_System.get_screenRotation();
				$r = e[1];
				return $r;
			}(this)));
			bytes.setInt32(22,0);
			bytes.setInt32(26,windowId);
			bytes.setInt32(30,button);
			bytes.setInt32(34,x);
			bytes.setInt32(38,y);
			kha_network_Session.the().network.send(bytes,false);
		}
		if(this.windowDownListeners != null) {
			var _g = 0;
			var _g1 = this.windowDownListeners[windowId];
			while(_g < _g1.length) {
				var listener = _g1[_g];
				++_g;
				listener(button,x,y);
			}
		}
	}
	,sendUpEvent: function(windowId,button,x,y) {
		if(kha_network_Session.the() != null) {
			var bytes = haxe_io_Bytes.alloc(42);
			bytes.b[0] = 2;
			bytes.setInt32(1,this._id());
			bytes.setDouble(5,kha_Scheduler.realTime());
			bytes.setInt32(13,kha_System.windowWidth(0));
			bytes.setInt32(17,kha_System.windowHeight(0));
			bytes.set(21,(function($this) {
				var $r;
				var e = kha_System.get_screenRotation();
				$r = e[1];
				return $r;
			}(this)));
			bytes.setInt32(22,1);
			bytes.setInt32(26,windowId);
			bytes.setInt32(30,button);
			bytes.setInt32(34,x);
			bytes.setInt32(38,y);
			kha_network_Session.the().network.send(bytes,false);
		}
		if(this.windowUpListeners != null) {
			var _g = 0;
			var _g1 = this.windowUpListeners[windowId];
			while(_g < _g1.length) {
				var listener = _g1[_g];
				++_g;
				listener(button,x,y);
			}
		}
	}
	,sendMoveEvent: function(windowId,x,y,movementX,movementY) {
		if(kha_network_Session.the() != null) {
			var bytes = haxe_io_Bytes.alloc(46);
			bytes.b[0] = 2;
			bytes.setInt32(1,this._id());
			bytes.setDouble(5,kha_Scheduler.realTime());
			bytes.setInt32(13,kha_System.windowWidth(0));
			bytes.setInt32(17,kha_System.windowHeight(0));
			bytes.set(21,(function($this) {
				var $r;
				var e = kha_System.get_screenRotation();
				$r = e[1];
				return $r;
			}(this)));
			bytes.setInt32(22,2);
			bytes.setInt32(26,windowId);
			bytes.setInt32(30,x);
			bytes.setInt32(34,y);
			bytes.setInt32(38,movementX);
			bytes.setInt32(42,movementY);
			kha_network_Session.the().network.send(bytes,false);
		}
		if(this.windowMoveListeners != null) {
			var _g = 0;
			var _g1 = this.windowMoveListeners[windowId];
			while(_g < _g1.length) {
				var listener = _g1[_g];
				++_g;
				listener(x,y,movementX,movementY);
			}
		}
	}
	,sendWheelEvent: function(windowId,delta) {
		if(kha_network_Session.the() != null) {
			var bytes = haxe_io_Bytes.alloc(34);
			bytes.b[0] = 2;
			bytes.setInt32(1,this._id());
			bytes.setDouble(5,kha_Scheduler.realTime());
			bytes.setInt32(13,kha_System.windowWidth(0));
			bytes.setInt32(17,kha_System.windowHeight(0));
			bytes.set(21,(function($this) {
				var $r;
				var e = kha_System.get_screenRotation();
				$r = e[1];
				return $r;
			}(this)));
			bytes.setInt32(22,3);
			bytes.setInt32(26,windowId);
			bytes.setInt32(30,delta);
			kha_network_Session.the().network.send(bytes,false);
		}
		if(this.windowWheelListeners != null) {
			var _g = 0;
			var _g1 = this.windowWheelListeners[windowId];
			while(_g < _g1.length) {
				var listener = _g1[_g];
				++_g;
				listener(delta);
			}
		}
	}
	,_receive: function(offset,bytes) {
		var funcindex = bytes.getInt32(offset);
		if(funcindex == 3) {
			var input0 = bytes.getInt32(offset + 4);
			var input1 = bytes.getInt32(offset + 8);
			this.sendWheelEvent(input0,input1);
			return;
		}
	}
	,__class__: kha_input_Mouse
});
var kha_input_MouseImpl = function() {
	kha_input_Mouse.call(this);
};
$hxClasses["kha.input.MouseImpl"] = kha_input_MouseImpl;
kha_input_MouseImpl.__name__ = ["kha","input","MouseImpl"];
kha_input_MouseImpl.__super__ = kha_input_Mouse;
kha_input_MouseImpl.prototype = $extend(kha_input_Mouse.prototype,{
	_receive: function(offset,bytes) {
		var funcindex = bytes.getInt32(offset);
	}
	,__class__: kha_input_MouseImpl
});
var kha_input_Surface = $hx_exports.kha.input.Surface = function() {
	this.touchStartListeners = [];
	this.touchEndListeners = [];
	this.moveListeners = [];
	kha_input_Surface.instance = this;
};
$hxClasses["kha.input.Surface"] = kha_input_Surface;
kha_input_Surface.__name__ = ["kha","input","Surface"];
kha_input_Surface.get = function(num) {
	if(num == null) num = 0;
	if(num != 0) return null;
	return kha_input_Surface.instance;
};
kha_input_Surface.prototype = {
	notify: function(touchStartListener,touchEndListener,moveListener) {
		if(touchStartListener != null) this.touchStartListeners.push(touchStartListener);
		if(touchEndListener != null) this.touchEndListeners.push(touchEndListener);
		if(moveListener != null) this.moveListeners.push(moveListener);
	}
	,remove: function(touchStartListener,touchEndListener,moveListener) {
		if(touchStartListener != null) HxOverrides.remove(this.touchStartListeners,touchStartListener);
		if(touchEndListener != null) HxOverrides.remove(this.touchEndListeners,touchEndListener);
		if(moveListener != null) this.moveListeners.push(moveListener);
	}
	,touchStartListeners: null
	,touchEndListeners: null
	,moveListeners: null
	,sendTouchStartEvent: function(index,x,y) {
		var _g = 0;
		var _g1 = this.touchStartListeners;
		while(_g < _g1.length) {
			var listener = _g1[_g];
			++_g;
			listener(index,x,y);
		}
	}
	,sendTouchEndEvent: function(index,x,y) {
		var _g = 0;
		var _g1 = this.touchEndListeners;
		while(_g < _g1.length) {
			var listener = _g1[_g];
			++_g;
			listener(index,x,y);
		}
	}
	,sendMoveEvent: function(index,x,y) {
		var _g = 0;
		var _g1 = this.moveListeners;
		while(_g < _g1.length) {
			var listener = _g1[_g];
			++_g;
			listener(index,x,y);
		}
	}
	,__class__: kha_input_Surface
};
var kha_internal_BytesBlob = function(bytes) {
	this.myFirstLine = true;
	this.bytes = bytes;
	this.buffer = [];
};
$hxClasses["kha.internal.BytesBlob"] = kha_internal_BytesBlob;
kha_internal_BytesBlob.__name__ = ["kha","internal","BytesBlob"];
kha_internal_BytesBlob.__interfaces__ = [kha_Resource];
kha_internal_BytesBlob.fromBytes = function(bytes) {
	return new kha_internal_BytesBlob(bytes);
};
kha_internal_BytesBlob.alloc = function(size) {
	return new kha_internal_BytesBlob(haxe_io_Bytes.alloc(size));
};
kha_internal_BytesBlob.readF32 = function(i) {
	var sign;
	if((i & -2147483648) == 0) sign = 1; else sign = -1;
	var exp = i >> 23 & 255;
	var man = i & 8388607;
	switch(exp) {
	case 0:
		return 0.0;
	case 255:
		if(man != 0) return NaN; else if(sign > 0) return Infinity; else return -Infinity;
		break;
	default:
		return sign * ((man + 8388608) / 8388608.0) * Math.pow(2,exp - 127);
	}
};
kha_internal_BytesBlob.bit = function(value,position) {
	var b = (value >>> position & 1) == 1;
	if(b) {
		var a = 3;
		++a;
		return true;
	} else {
		var c = 4;
		--c;
		return false;
	}
};
kha_internal_BytesBlob.prototype = {
	bytes: null
	,buffer: null
	,myFirstLine: null
	,sub: function(start,length) {
		return new kha_internal_BytesBlob(this.bytes.sub(start,length));
	}
	,length: null
	,get_length: function() {
		return this.bytes.length;
	}
	,writeU8: function(position,value) {
		this.bytes.b[position] = value & 255;
	}
	,readU8: function(position) {
		var $byte = this.bytes.b[position];
		++position;
		return $byte;
	}
	,readS8: function(position) {
		var $byte = this.bytes.b[position];
		++position;
		var sign;
		if(($byte & 128) == 0) sign = 1; else sign = -1;
		$byte = $byte & 127;
		return sign * $byte;
	}
	,readU16BE: function(position) {
		var first = this.bytes.b[position];
		var second = this.bytes.b[position + 1];
		position += 2;
		return first * 256 + second;
	}
	,readU16LE: function(position) {
		var first = this.bytes.b[position];
		var second = this.bytes.b[position + 1];
		position += 2;
		return second * 256 + first;
	}
	,readS16BE: function(position) {
		var first = this.bytes.b[position];
		var second = this.bytes.b[position + 1];
		position += 2;
		var sign;
		if((first & 128) == 0) sign = 1; else sign = -1;
		first = first & 127;
		if(sign == -1) return -32767 + first * 256 + second; else return first * 256 + second;
	}
	,readS16LE: function(position) {
		var first = this.bytes.b[position];
		var second = this.bytes.b[position + 1];
		var sign;
		if((second & 128) == 0) sign = 1; else sign = -1;
		second = second & 127;
		position += 2;
		if(sign == -1) return -32767 + second * 256 + first; else return second * 256 + first;
	}
	,readS32LE: function(position) {
		var fourth = this.bytes.b[position];
		var third = this.bytes.b[position + 1];
		var second = this.bytes.b[position + 2];
		var first = this.bytes.b[position + 3];
		var sign;
		if((first & 128) == 0) sign = 1; else sign = -1;
		first = first & 127;
		position += 4;
		if(sign == -1) return -2147483647 + fourth + third * 256 + second * 256 * 256 + first * 256 * 256 * 256; else return fourth + third * 256 + second * 256 * 256 + first * 256 * 256 * 256;
	}
	,readS32BE: function(position) {
		var fourth = this.bytes.b[position];
		var third = this.bytes.b[position + 1];
		var second = this.bytes.b[position + 2];
		var first = this.bytes.b[position + 3];
		var sign;
		if((fourth & 128) == 0) sign = 1; else sign = -1;
		fourth = fourth & 127;
		position += 4;
		if(sign == -1) return -2147483647 + first + second * 256 + third * 256 * 256 + fourth * 256 * 256 * 256;
		return first + second * 256 + third * 256 * 256 + fourth * 256 * 256 * 256;
	}
	,readF32LE: function(position) {
		return kha_internal_BytesBlob.readF32(this.readS32LE(position));
	}
	,readF32BE: function(position) {
		return kha_internal_BytesBlob.readF32(this.readS32BE(position));
	}
	,toString: function() {
		return this.bytes.toString();
	}
	,readUtf8Char: function(position) {
		if(position.value >= this.get_length()) return -1;
		var c = this.readU8(position.value);
		++position.value;
		var value = 0;
		if(!kha_internal_BytesBlob.bit(c,7)) value = c; else if(kha_internal_BytesBlob.bit(c,7) && kha_internal_BytesBlob.bit(c,6) && !kha_internal_BytesBlob.bit(c,5)) {
			var a = c & 31;
			var c2 = this.readU8(position.value);
			++position.value;
			var b = c2 & 63;
			value = a << 6 | b;
		} else if(kha_internal_BytesBlob.bit(c,7) && kha_internal_BytesBlob.bit(c,6) && kha_internal_BytesBlob.bit(c,5) && !kha_internal_BytesBlob.bit(c,4)) position.value += 2; else if(kha_internal_BytesBlob.bit(c,7) && kha_internal_BytesBlob.bit(c,6) && kha_internal_BytesBlob.bit(c,5) && kha_internal_BytesBlob.bit(c,4) && !kha_internal_BytesBlob.bit(c,3)) position.value += 3;
		return value;
	}
	,readUtf8Line: function(position) {
		var bufferindex = 0;
		var c = this.readUtf8Char(position);
		if(c < 0) return "";
		while(c != 10 && bufferindex < 2000) {
			this.buffer[bufferindex] = c;
			++bufferindex;
			c = this.readUtf8Char(position);
			if(position.value >= this.get_length()) {
				this.buffer[bufferindex] = c;
				++bufferindex;
				break;
			}
		}
		if(this.myFirstLine) {
			this.myFirstLine = false;
			if(bufferindex > 2 && this.buffer[0] == 239 && this.buffer[1] == 187 && this.buffer[2] == 191) {
				var chars1 = [];
				var _g1 = 3;
				var _g = bufferindex - 3;
				while(_g1 < _g) {
					var i = _g1++;
					chars1[i - 3] = this.buffer[i];
				}
				return this.toText(chars1,bufferindex - 3);
			}
		}
		var chars = [];
		var _g2 = 0;
		while(_g2 < bufferindex) {
			var i1 = _g2++;
			chars[i1] = this.buffer[i1];
		}
		return this.toText(chars,bufferindex);
	}
	,toText: function(chars,length) {
		var value = "";
		var _g = 0;
		while(_g < length) {
			var i = _g++;
			value += String.fromCharCode(chars[i]);
		}
		return value;
	}
	,readUtf8String: function() {
		var text = "";
		var position = { value : 0};
		while(position.value < this.get_length()) text += this.readUtf8Line(position) + "\n";
		return text;
	}
	,toBytes: function() {
		return this.bytes;
	}
	,unload: function() {
		this.bytes = null;
	}
	,__class__: kha_internal_BytesBlob
	,__properties__: {get_length:"get_length"}
};
var kha_js_AEAudioChannel = function(sound) {
	this.element = sound.element;
};
$hxClasses["kha.js.AEAudioChannel"] = kha_js_AEAudioChannel;
kha_js_AEAudioChannel.__name__ = ["kha","js","AEAudioChannel"];
kha_js_AEAudioChannel.__interfaces__ = [kha_audio1_AudioChannel];
kha_js_AEAudioChannel.prototype = {
	element: null
	,play: function() {
		this.element.play();
	}
	,pause: function() {
		try {
			this.element.pause();
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			haxe_Log.trace(e,{ fileName : "AEAudioChannel.hx", lineNumber : 22, className : "kha.js.AEAudioChannel", methodName : "pause"});
		}
	}
	,stop: function() {
		try {
			this.element.pause();
			this.element.currentTime = 0;
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			haxe_Log.trace(e,{ fileName : "AEAudioChannel.hx", lineNumber : 32, className : "kha.js.AEAudioChannel", methodName : "stop"});
		}
	}
	,length: null
	,get_length: function() {
		if(isFinite(this.element.duration)) return this.element.duration; else return -1;
	}
	,position: null
	,get_position: function() {
		return this.element.currentTime;
	}
	,get_volume: function() {
		return 1;
	}
	,set_volume: function(value) {
		return 1;
	}
	,finished: null
	,get_finished: function() {
		return this.get_position() >= this.get_length();
	}
	,__class__: kha_js_AEAudioChannel
	,__properties__: {get_finished:"get_finished",set_volume:"set_volume",get_volume:"get_volume",get_position:"get_position",get_length:"get_length"}
};
var kha_js_AudioElementAudio = function() { };
$hxClasses["kha.js.AudioElementAudio"] = kha_js_AudioElementAudio;
kha_js_AudioElementAudio.__name__ = ["kha","js","AudioElementAudio"];
kha_js_AudioElementAudio._compile = function() {
};
kha_js_AudioElementAudio.play = function(sound,loop,stream) {
	if(stream == null) stream = false;
	if(loop == null) loop = false;
	sound.element.loop = loop;
	sound.element.play();
	return new kha_js_AEAudioChannel(sound);
};
var kha_js_CanvasGraphics = function(canvas,width,height) {
	kha_graphics2_Graphics.call(this);
	this.canvas = canvas;
	this.width = width;
	this.height = height;
	kha_js_CanvasGraphics.instance = this;
	this.myColor = kha__$Color_Color_$Impl_$.fromBytes(0,0,0);
	canvas.save();
};
$hxClasses["kha.js.CanvasGraphics"] = kha_js_CanvasGraphics;
kha_js_CanvasGraphics.__name__ = ["kha","js","CanvasGraphics"];
kha_js_CanvasGraphics.stringWidth = function(font,text) {
	if(kha_js_CanvasGraphics.instance == null) return 5 * text.length; else {
		kha_js_CanvasGraphics.instance.set_font(font);
		return kha_js_CanvasGraphics.instance.canvas.measureText(text).width;
	}
};
kha_js_CanvasGraphics.__super__ = kha_graphics2_Graphics;
kha_js_CanvasGraphics.prototype = $extend(kha_graphics2_Graphics.prototype,{
	canvas: null
	,webfont: null
	,width: null
	,height: null
	,myColor: null
	,scaleQuality: null
	,begin: function(clear,clearColor) {
		if(clear == null) clear = true;
		if(clear) this.clear(clearColor);
	}
	,clear: function(color) {
		if(color == null) color = 0;
		this.canvas.strokeStyle = "rgba(" + kha__$Color_Color_$Impl_$.get_Rb(color) + "," + kha__$Color_Color_$Impl_$.get_Gb(color) + "," + kha__$Color_Color_$Impl_$.get_Bb(color) + "," + kha__$Color_Color_$Impl_$.get_Ab(color) * 0.00392156862745098 + ")";
		this.canvas.fillStyle = "rgba(" + kha__$Color_Color_$Impl_$.get_Rb(color) + "," + kha__$Color_Color_$Impl_$.get_Gb(color) + "," + kha__$Color_Color_$Impl_$.get_Bb(color) + "," + kha__$Color_Color_$Impl_$.get_Ab(color) * 0.00392156862745098 + ")";
		if(kha__$Color_Color_$Impl_$.get_Ab(color) * 0.00392156862745098 == 0) this.canvas.clearRect(0,0,this.width,this.height); else this.canvas.fillRect(0,0,this.width,this.height);
		this.set_color(this.myColor);
	}
	,end: function() {
	}
	,drawImage: function(img,x,y) {
		this.canvas.globalAlpha = this.get_opacity();
		this.canvas.drawImage((js_Boot.__cast(img , kha_CanvasImage)).image,x,y);
		this.canvas.globalAlpha = 1;
	}
	,drawScaledSubImage: function(image,sx,sy,sw,sh,dx,dy,dw,dh) {
		this.canvas.globalAlpha = this.get_opacity();
		try {
			if(dw < 0 || dh < 0) {
				this.canvas.save();
				this.canvas.translate(dx,dy);
				var x = 0.0;
				var y = 0.0;
				if(dw < 0) {
					this.canvas.scale(-1,1);
					x = -dw;
				}
				if(dh < 0) {
					this.canvas.scale(1,-1);
					y = -dh;
				}
				this.canvas.drawImage((js_Boot.__cast(image , kha_CanvasImage)).image,sx,sy,sw,sh,x,y,dw,dh);
				this.canvas.restore();
			} else this.canvas.drawImage((js_Boot.__cast(image , kha_CanvasImage)).image,sx,sy,sw,sh,dx,dy,dw,dh);
		} catch( ex ) {
			if (ex instanceof js__$Boot_HaxeError) ex = ex.val;
		}
		this.canvas.globalAlpha = 1;
	}
	,set_color: function(color) {
		this.myColor = color;
		this.canvas.strokeStyle = "rgba(" + kha__$Color_Color_$Impl_$.get_Rb(color) + "," + kha__$Color_Color_$Impl_$.get_Gb(color) + "," + kha__$Color_Color_$Impl_$.get_Bb(color) + "," + kha__$Color_Color_$Impl_$.get_Ab(color) * 0.00392156862745098 + ")";
		this.canvas.fillStyle = "rgba(" + kha__$Color_Color_$Impl_$.get_Rb(color) + "," + kha__$Color_Color_$Impl_$.get_Gb(color) + "," + kha__$Color_Color_$Impl_$.get_Bb(color) + "," + kha__$Color_Color_$Impl_$.get_Ab(color) * 0.00392156862745098 + ")";
		return color;
	}
	,get_color: function() {
		return this.myColor;
	}
	,get_imageScaleQuality: function() {
		return this.scaleQuality;
	}
	,set_imageScaleQuality: function(value) {
		if(value == kha_graphics2_ImageScaleQuality.Low) {
			this.canvas.mozImageSmoothingEnabled = false;
			this.canvas.webkitImageSmoothingEnabled = false;
			this.canvas.msImageSmoothingEnabled = false;
			this.canvas.imageSmoothingEnabled = false;
		} else {
			this.canvas.mozImageSmoothingEnabled = true;
			this.canvas.webkitImageSmoothingEnabled = true;
			this.canvas.msImageSmoothingEnabled = true;
			this.canvas.imageSmoothingEnabled = true;
		}
		return this.scaleQuality = value;
	}
	,drawRect: function(x,y,width,height,strength) {
		if(strength == null) strength = 1.0;
		this.canvas.beginPath();
		var oldStrength = this.canvas.lineWidth;
		this.canvas.lineWidth = Math.round(strength);
		this.canvas.rect(x,y,width,height);
		this.canvas.stroke();
		this.canvas.lineWidth = oldStrength;
	}
	,fillRect: function(x,y,width,height) {
		this.canvas.globalAlpha = this.get_opacity() * (kha__$Color_Color_$Impl_$.get_Ab(this.myColor) * 0.00392156862745098);
		this.canvas.fillRect(x,y,width,height);
		this.canvas.globalAlpha = this.get_opacity();
	}
	,drawCircle: function(cx,cy,radius,strength) {
		if(strength == null) strength = 1.0;
		this.canvas.beginPath();
		var oldStrength = this.canvas.lineWidth;
		this.canvas.lineWidth = Math.round(strength);
		this.canvas.arc(cx,cy,radius,0,2 * Math.PI,false);
		this.canvas.stroke();
		this.canvas.lineWidth = oldStrength;
	}
	,fillCircle: function(cx,cy,radius) {
		this.canvas.beginPath();
		this.canvas.arc(cx,cy,radius,0,2 * Math.PI,false);
		this.canvas.fill();
	}
	,drawString: function(text,x,y) {
		var image = this.webfont.getImage(this.get_fontSize(),this.myColor);
		if(image.width > 0) {
			var xpos = x;
			var ypos = y;
			var _g1 = 0;
			var _g = text.length;
			while(_g1 < _g) {
				var i = _g1++;
				var q = this.webfont.kravur._get(this.get_fontSize()).getBakedQuad(HxOverrides.cca(text,i) - 32,xpos,ypos);
				if(q != null) {
					if(q.s1 - q.s0 > 0 && q.t1 - q.t0 > 0 && q.x1 - q.x0 > 0 && q.y1 - q.y0 > 0) this.canvas.drawImage(image,q.s0 * image.width,q.t0 * image.height,(q.s1 - q.s0) * image.width,(q.t1 - q.t0) * image.height,q.x0,q.y0,q.x1 - q.x0,q.y1 - q.y0);
					xpos += q.xadvance;
				}
			}
		}
	}
	,set_font: function(font) {
		this.webfont = js_Boot.__cast(font , kha_js_Font);
		return this.webfont;
	}
	,get_font: function() {
		return this.webfont;
	}
	,drawLine: function(x1,y1,x2,y2,strength) {
		if(strength == null) strength = 1.0;
		this.canvas.beginPath();
		var oldWith = this.canvas.lineWidth;
		this.canvas.lineWidth = Math.round(strength);
		this.canvas.moveTo(x1,y1);
		this.canvas.lineTo(x2,y2);
		this.canvas.moveTo(0,0);
		this.canvas.stroke();
		this.canvas.lineWidth = oldWith;
	}
	,fillTriangle: function(x1,y1,x2,y2,x3,y3) {
		this.canvas.beginPath();
		this.canvas.closePath();
		this.canvas.fill();
	}
	,scissor: function(x,y,width,height) {
		this.canvas.beginPath();
		this.canvas.rect(x,y,width,height);
		this.canvas.clip();
	}
	,disableScissor: function() {
		this.canvas.restore();
	}
	,drawVideo: function(video,x,y,width,height) {
		this.canvas.drawImage((js_Boot.__cast(video , kha_js_Video)).element,x,y,width,height);
	}
	,setTransformation: function(transformation) {
		this.canvas.setTransform(transformation._00,transformation._01,transformation._10,transformation._11,transformation._20,transformation._21);
	}
	,__class__: kha_js_CanvasGraphics
});
var kha_js_URLParser = function(url) {
	this._parts = null;
	this._parts = ["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];
	this.url = url;
	var r = new EReg("^(?:(?![^:@]+:[^:@/]*@)([^:/?#.]+):)?(?://)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:/?#]*)(?::(\\d*))?)(((/(?:[^?#](?![^?#/]*\\.[^?#/.]+(?:[?#]|$)))*/?)?([^?#/]*))(?:\\?([^#]*))?(?:#(.*))?)","");
	r.match(url);
	var _g1 = 0;
	var _g = this._parts.length;
	while(_g1 < _g) {
		var i = _g1++;
		Reflect.setField(this,this._parts[i],r.matched(i));
	}
};
$hxClasses["kha.js.URLParser"] = kha_js_URLParser;
kha_js_URLParser.__name__ = ["kha","js","URLParser"];
kha_js_URLParser.parse = function(url) {
	return new kha_js_URLParser(url);
};
kha_js_URLParser.prototype = {
	url: null
	,source: null
	,protocol: null
	,authority: null
	,userInfo: null
	,user: null
	,password: null
	,host: null
	,port: null
	,relative: null
	,path: null
	,directory: null
	,file: null
	,query: null
	,anchor: null
	,_parts: null
	,toString: function() {
		var s = "For Url -> " + this.url + "\n";
		var _g1 = 0;
		var _g = this._parts.length;
		while(_g1 < _g) {
			var i = _g1++;
			s += this._parts[i] + ": " + Std.string(Reflect.field(this,this._parts[i])) + (i == this._parts.length - 1?"":"\n");
		}
		return s;
	}
	,__class__: kha_js_URLParser
};
var kha_js_EnvironmentVariables = function() {
	kha_EnvironmentVariables.call(this);
};
$hxClasses["kha.js.EnvironmentVariables"] = kha_js_EnvironmentVariables;
kha_js_EnvironmentVariables.__name__ = ["kha","js","EnvironmentVariables"];
kha_js_EnvironmentVariables.__super__ = kha_EnvironmentVariables;
kha_js_EnvironmentVariables.prototype = $extend(kha_EnvironmentVariables.prototype,{
	getVariable: function(name) {
		var parser = new kha_js_URLParser(window.location.href);
		var query = parser.query;
		var parts = query.split("&");
		var _g = 0;
		while(_g < parts.length) {
			var part = parts[_g];
			++_g;
			var subparts = part.split("=");
			if(subparts[0] == name) return subparts[1];
		}
		haxe_Log.trace("Environment variables requested.",{ fileName : "EnvironmentVariables.hx", lineNumber : 90, className : "kha.js.EnvironmentVariables", methodName : "getVariable"});
		return "";
	}
	,__class__: kha_js_EnvironmentVariables
});
var kha_js_Font = function(kravur) {
	this.images = new haxe_ds_IntMap();
	this.kravur = kravur;
};
$hxClasses["kha.js.Font"] = kha_js_Font;
kha_js_Font.__name__ = ["kha","js","Font"];
kha_js_Font.__interfaces__ = [kha_Font];
kha_js_Font.prototype = {
	kravur: null
	,images: null
	,height: function(fontSize) {
		return this.kravur._get(fontSize).getHeight();
	}
	,width: function(fontSize,str) {
		return this.kravur._get(fontSize).stringWidth(str);
	}
	,baseline: function(fontSize) {
		return this.kravur._get(fontSize).getBaselinePosition();
	}
	,getImage: function(fontSize,color) {
		if(!this.images.h.hasOwnProperty(fontSize)) {
			var v = new haxe_ds_IntMap();
			this.images.h[fontSize] = v;
			v;
		}
		if(!(function($this) {
			var $r;
			var this1 = $this.images.h[fontSize];
			$r = this1.exists(color);
			return $r;
		}(this))) {
			var kravur = this.kravur._get(fontSize);
			var canvas = window.document.createElement("canvas");
			canvas.width = kravur.width;
			canvas.height = kravur.height;
			var ctx = canvas.getContext("2d");
			ctx.fillStyle = "black";
			ctx.fillRect(0,0,kravur.width,kravur.height);
			var imageData = ctx.getImageData(0,0,kravur.width,kravur.height);
			var bytes;
			bytes = (js_Boot.__cast(kravur.getTexture() , kha_CanvasImage)).bytes;
			var _g1 = 0;
			var _g = bytes.length;
			while(_g1 < _g) {
				var i = _g1++;
				imageData.data[i * 4] = kha__$Color_Color_$Impl_$.get_Rb(color);
				imageData.data[i * 4 + 1] = kha__$Color_Color_$Impl_$.get_Gb(color);
				imageData.data[i * 4 + 2] = kha__$Color_Color_$Impl_$.get_Bb(color);
				imageData.data[i * 4 + 3] = bytes.b[i];
			}
			ctx.putImageData(imageData,0,0);
			var img = window.document.createElement("img");
			img.src = canvas.toDataURL("image/png");
			var this2 = this.images.h[fontSize];
			this2.set(color,img);
			img;
			return img;
		}
		var this3 = this.images.h[fontSize];
		return this3.get(color);
	}
	,unload: function() {
		this.kravur = null;
		this.images = null;
	}
	,__class__: kha_js_Font
};
var kha_js_Sound = function(filenames,done) {
	kha_Sound.call(this);
	this.done = done;
	kha_js_Sound.loading.add(this);
	var _this = window.document;
	this.element = _this.createElement("audio");
	this.filenames = [];
	var _g = 0;
	while(_g < filenames.length) {
		var filename = filenames[_g];
		++_g;
		if(this.element.canPlayType("audio/ogg") != "" && StringTools.endsWith(filename,".ogg")) this.filenames.push(filename);
		if(this.element.canPlayType("audio/mp4") != "" && StringTools.endsWith(filename,".mp4")) this.filenames.push(filename);
	}
	this.element.addEventListener("error",$bind(this,this.errorListener),false);
	this.element.addEventListener("canplay",$bind(this,this.canPlayThroughListener),false);
	this.element.src = this.filenames[0];
	this.element.preload = "auto";
	this.element.load();
};
$hxClasses["kha.js.Sound"] = kha_js_Sound;
kha_js_Sound.__name__ = ["kha","js","Sound"];
kha_js_Sound.__super__ = kha_Sound;
kha_js_Sound.prototype = $extend(kha_Sound.prototype,{
	filenames: null
	,done: null
	,element: null
	,errorListener: function(eventInfo) {
		if(this.element.error.code == 4) {
			var _g1 = 0;
			var _g = this.filenames.length - 1;
			while(_g1 < _g) {
				var i = _g1++;
				if(this.element.src == this.filenames[i]) {
					this.element.src = this.filenames[i + 1];
					return;
				}
			}
		}
		haxe_Log.trace("Error loading " + this.element.src,{ fileName : "Sound.hx", lineNumber : 108, className : "kha.js.Sound", methodName : "errorListener"});
		window.console.log("loadSound failed");
		this.finishAsset();
	}
	,canPlayThroughListener: function(eventInfo) {
		this.finishAsset();
	}
	,finishAsset: function() {
		this.element.removeEventListener("error",$bind(this,this.errorListener),false);
		this.element.removeEventListener("canplaythrough",$bind(this,this.canPlayThroughListener),false);
		this.done(this);
		kha_js_Sound.loading.remove(this);
	}
	,__class__: kha_js_Sound
});
var kha_js_Video = function(filenames,done) {
	kha_Video.call(this);
	this.done = done;
	kha_js_Video.loading.add(this);
	this.element = window.document.createElement("video");
	this.filenames = [];
	var _g = 0;
	while(_g < filenames.length) {
		var filename = filenames[_g];
		++_g;
		if(this.element.canPlayType("video/webm") != "" && StringTools.endsWith(filename,".webm")) this.filenames.push(filename);
		if(this.element.canPlayType("video/mp4") != "" && StringTools.endsWith(filename,".mp4")) this.filenames.push(filename);
	}
	this.element.addEventListener("error",$bind(this,this.errorListener),false);
	this.element.addEventListener("canplaythrough",$bind(this,this.canPlayThroughListener),false);
	this.element.preload = "auto";
	this.element.src = this.filenames[0];
};
$hxClasses["kha.js.Video"] = kha_js_Video;
kha_js_Video.__name__ = ["kha","js","Video"];
kha_js_Video.__super__ = kha_Video;
kha_js_Video.prototype = $extend(kha_Video.prototype,{
	filenames: null
	,element: null
	,done: null
	,texture: null
	,width: function() {
		return this.element.videoWidth;
	}
	,height: function() {
		return this.element.videoHeight;
	}
	,play: function(loop) {
		if(loop == null) loop = false;
		try {
			this.element.loop = loop;
			this.element.play();
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			haxe_Log.trace(e,{ fileName : "Video.hx", lineNumber : 53, className : "kha.js.Video", methodName : "play"});
		}
	}
	,pause: function() {
		try {
			this.element.pause();
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			haxe_Log.trace(e,{ fileName : "Video.hx", lineNumber : 62, className : "kha.js.Video", methodName : "pause"});
		}
	}
	,stop: function() {
		try {
			this.element.pause();
			this.element.currentTime = 0;
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			haxe_Log.trace(e,{ fileName : "Video.hx", lineNumber : 72, className : "kha.js.Video", methodName : "stop"});
		}
	}
	,getCurrentPos: function() {
		return Math.ceil(this.element.currentTime * 1000);
	}
	,getLength: function() {
		if(isFinite(this.element.duration)) return Math.floor(this.element.duration * 1000); else return -1;
	}
	,errorListener: function(eventInfo) {
		if(this.element.error.code == 4) {
			var _g1 = 0;
			var _g = this.filenames.length - 1;
			while(_g1 < _g) {
				var i = _g1++;
				if(this.element.src == this.filenames[i]) {
					this.element.src = this.filenames[i + 1];
					return;
				}
			}
		}
		haxe_Log.trace("Error loading " + this.element.src,{ fileName : "Video.hx", lineNumber : 100, className : "kha.js.Video", methodName : "errorListener"});
		this.finishAsset();
	}
	,canPlayThroughListener: function(eventInfo) {
		this.finishAsset();
	}
	,finishAsset: function() {
		this.element.removeEventListener("error",$bind(this,this.errorListener),false);
		this.element.removeEventListener("canplaythrough",$bind(this,this.canPlayThroughListener),false);
		if(kha_SystemImpl.gl != null) this.texture = kha_Image.fromVideo(this);
		this.done(this);
		kha_js_Video.loading.remove(this);
	}
	,__class__: kha_js_Video
});
var kha_js_WebAudioSound = function(filename,done) {
	var _g = this;
	kha_Sound.call(this);
	this.done = done;
	var request = new XMLHttpRequest();
	request.open("GET",filename,true);
	request.responseType = "arraybuffer";
	request.onerror = function() {
		haxe_Log.trace("Error loading " + filename,{ fileName : "WebAudioSound.hx", lineNumber : 79, className : "kha.js.WebAudioSound", methodName : "new"});
		window.console.log("loadSound failed");
	};
	request.onload = function() {
		var arrayBuffer = request.response;
		var output = new haxe_io_BytesOutput();
		var header = kha_audio2_ogg_vorbis_Reader.readAll(haxe_io_Bytes.ofData(arrayBuffer),output,true);
		var soundBytes = output.getBytes();
		var count = soundBytes.length / 4 | 0;
		if(header.channel == 1) {
			var this1;
			this1 = new Array(count * 2);
			_g.data = this1;
			var _g1 = 0;
			while(_g1 < count) {
				var i = _g1++;
				var val = soundBytes.getFloat(i * 4);
				_g.data[i * 2] = val;
				var val1 = soundBytes.getFloat(i * 4);
				_g.data[i * 2 + 1] = val1;
			}
		} else {
			var this2;
			this2 = new Array(count);
			_g.data = this2;
			var _g11 = 0;
			while(_g11 < count) {
				var i1 = _g11++;
				var val2 = soundBytes.getFloat(i1 * 4);
				_g.data[i1] = val2;
			}
		}
		done(_g);
	};
	request.send(null);
};
$hxClasses["kha.js.WebAudioSound"] = kha_js_WebAudioSound;
kha_js_WebAudioSound.__name__ = ["kha","js","WebAudioSound"];
kha_js_WebAudioSound.__super__ = kha_Sound;
kha_js_WebAudioSound.prototype = $extend(kha_Sound.prototype,{
	done: null
	,buffer: null
	,__class__: kha_js_WebAudioSound
});
var kha_js_graphics4_ConstantLocation = function(value) {
	this.value = value;
};
$hxClasses["kha.js.graphics4.ConstantLocation"] = kha_js_graphics4_ConstantLocation;
kha_js_graphics4_ConstantLocation.__name__ = ["kha","js","graphics4","ConstantLocation"];
kha_js_graphics4_ConstantLocation.__interfaces__ = [kha_graphics4_ConstantLocation];
kha_js_graphics4_ConstantLocation.prototype = {
	value: null
	,__class__: kha_js_graphics4_ConstantLocation
};
var kha_js_graphics4_Graphics = function(renderTarget) {
	this.matrixCache = (function($this) {
		var $r;
		var this1;
		this1 = new Array(16);
		$r = this1;
		return $r;
	}(this));
	this.renderTarget = renderTarget;
	this.instancedExtension = kha_SystemImpl.gl.getExtension("ANGLE_instanced_arrays");
};
$hxClasses["kha.js.graphics4.Graphics"] = kha_js_graphics4_Graphics;
kha_js_graphics4_Graphics.__name__ = ["kha","js","graphics4","Graphics"];
kha_js_graphics4_Graphics.__interfaces__ = [kha_graphics4_Graphics];
kha_js_graphics4_Graphics.prototype = {
	framebuffer: null
	,indicesCount: null
	,renderTarget: null
	,instancedExtension: null
	,begin: function(additionalRenderTargets) {
		kha_SystemImpl.gl.enable(3042);
		kha_SystemImpl.gl.blendFunc(770,771);
		if(this.renderTarget == null) {
			kha_SystemImpl.gl.bindFramebuffer(36160,null);
			kha_SystemImpl.gl.viewport(0,0,kha_System.windowWidth(),kha_System.windowHeight());
		} else {
			kha_SystemImpl.gl.bindFramebuffer(36160,this.renderTarget.frameBuffer);
			kha_SystemImpl.gl.viewport(0,0,this.renderTarget.get_width(),this.renderTarget.get_height());
			if(additionalRenderTargets != null) {
				kha_SystemImpl.gl.framebufferTexture2D(36160,kha_SystemImpl.drawBuffers.COLOR_ATTACHMENT0_WEBGL,3553,this.renderTarget.texture,0);
				var _g1 = 0;
				var _g = additionalRenderTargets.length;
				while(_g1 < _g) {
					var i = _g1++;
					kha_SystemImpl.gl.framebufferTexture2D(36160,kha_SystemImpl.drawBuffers.COLOR_ATTACHMENT0_WEBGL + i + 1,3553,(js_Boot.__cast(additionalRenderTargets[i] , kha_WebGLImage)).texture,0);
				}
				var attachments = [kha_SystemImpl.drawBuffers.COLOR_ATTACHMENT0_WEBGL];
				var _g11 = 0;
				var _g2 = additionalRenderTargets.length;
				while(_g11 < _g2) {
					var i1 = _g11++;
					attachments.push(kha_SystemImpl.drawBuffers.COLOR_ATTACHMENT0_WEBGL + i1 + 1);
				}
				kha_SystemImpl.drawBuffers.drawBuffersWEBGL(attachments);
			}
		}
	}
	,end: function() {
	}
	,flush: function() {
	}
	,vsynced: function() {
		return true;
	}
	,refreshRate: function() {
		return 60;
	}
	,clear: function(color,depth,stencil) {
		var clearMask = 0;
		if(color != null) {
			clearMask |= 16384;
			kha_SystemImpl.gl.clearColor(kha__$Color_Color_$Impl_$.get_Rb(color) * 0.00392156862745098,kha__$Color_Color_$Impl_$.get_Gb(color) * 0.00392156862745098,kha__$Color_Color_$Impl_$.get_Bb(color) * 0.00392156862745098,kha__$Color_Color_$Impl_$.get_Ab(color) * 0.00392156862745098);
		}
		if(depth != null) {
			clearMask |= 256;
			kha_SystemImpl.gl.clearDepth(depth);
		}
		if(stencil != null) {
			clearMask |= 1024;
			kha_SystemImpl.gl.enable(2960);
			kha_SystemImpl.gl.stencilMask(255);
			kha_SystemImpl.gl.clearStencil(stencil);
		}
		kha_SystemImpl.gl.clear(clearMask);
	}
	,viewport: function(x,y,width,height) {
		var h;
		if(this.renderTarget == null) h = kha_System.windowHeight(0); else h = this.renderTarget.get_height();
		kha_SystemImpl.gl.viewport(x,h - y - height,width,height);
	}
	,setDepthMode: function(write,mode) {
		switch(mode[1]) {
		case 0:
			kha_SystemImpl.gl.disable(2929);
			kha_SystemImpl.gl.depthFunc(519);
			break;
		case 1:
			kha_SystemImpl.gl.enable(2929);
			kha_SystemImpl.gl.depthFunc(512);
			break;
		case 2:
			kha_SystemImpl.gl.enable(2929);
			kha_SystemImpl.gl.depthFunc(514);
			break;
		case 3:
			kha_SystemImpl.gl.enable(2929);
			kha_SystemImpl.gl.depthFunc(517);
			break;
		case 4:
			kha_SystemImpl.gl.enable(2929);
			kha_SystemImpl.gl.depthFunc(513);
			break;
		case 5:
			kha_SystemImpl.gl.enable(2929);
			kha_SystemImpl.gl.depthFunc(515);
			break;
		case 6:
			kha_SystemImpl.gl.enable(2929);
			kha_SystemImpl.gl.depthFunc(516);
			break;
		case 7:
			kha_SystemImpl.gl.enable(2929);
			kha_SystemImpl.gl.depthFunc(518);
			break;
		}
		kha_SystemImpl.gl.depthMask(write);
	}
	,getBlendFunc: function(op) {
		switch(op[1]) {
		case 2:case 0:
			return 0;
		case 1:
			return 1;
		case 3:
			return 770;
		case 4:
			return 772;
		case 5:
			return 771;
		case 6:
			return 773;
		}
	}
	,setBlendingMode: function(source,destination) {
		if(source == kha_graphics4_BlendingOperation.BlendOne && destination == kha_graphics4_BlendingOperation.BlendZero) kha_SystemImpl.gl.disable(3042); else {
			kha_SystemImpl.gl.enable(3042);
			kha_SystemImpl.gl.blendFunc(this.getBlendFunc(source),this.getBlendFunc(destination));
		}
	}
	,createVertexBuffer: function(vertexCount,structure,usage,canRead) {
		if(canRead == null) canRead = false;
		return new kha_graphics4_VertexBuffer(vertexCount,structure,usage);
	}
	,setVertexBuffer: function(vertexBuffer) {
		(js_Boot.__cast(vertexBuffer , kha_graphics4_VertexBuffer)).set(0);
	}
	,setVertexBuffers: function(vertexBuffers) {
		var offset = 0;
		var _g = 0;
		while(_g < vertexBuffers.length) {
			var vertexBuffer = vertexBuffers[_g];
			++_g;
			offset += (js_Boot.__cast(vertexBuffer , kha_graphics4_VertexBuffer)).set(offset);
		}
	}
	,createIndexBuffer: function(indexCount,usage,canRead) {
		if(canRead == null) canRead = false;
		return new kha_graphics4_IndexBuffer(indexCount,usage);
	}
	,setIndexBuffer: function(indexBuffer) {
		this.indicesCount = indexBuffer.count();
		(js_Boot.__cast(indexBuffer , kha_graphics4_IndexBuffer)).set();
	}
	,createCubeMap: function(size,format,usage,canRead) {
		if(canRead == null) canRead = false;
		return null;
	}
	,setTexture: function(stage,texture) {
		if(texture == null) {
			kha_SystemImpl.gl.activeTexture(33984 + (js_Boot.__cast(stage , kha_js_graphics4_TextureUnit)).value);
			kha_SystemImpl.gl.bindTexture(3553,null);
		} else (js_Boot.__cast(texture , kha_WebGLImage)).set((js_Boot.__cast(stage , kha_js_graphics4_TextureUnit)).value);
	}
	,setVideoTexture: function(unit,texture) {
		if(texture == null) {
			kha_SystemImpl.gl.activeTexture(33984 + (js_Boot.__cast(unit , kha_js_graphics4_TextureUnit)).value);
			kha_SystemImpl.gl.bindTexture(3553,null);
		} else (js_Boot.__cast((js_Boot.__cast(texture , kha_js_Video)).texture , kha_WebGLImage)).set((js_Boot.__cast(unit , kha_js_graphics4_TextureUnit)).value);
	}
	,setTextureParameters: function(texunit,uAddressing,vAddressing,minificationFilter,magnificationFilter,mipmapFilter) {
		kha_SystemImpl.gl.activeTexture(33984 + (js_Boot.__cast(texunit , kha_js_graphics4_TextureUnit)).value);
		switch(uAddressing[1]) {
		case 2:
			kha_SystemImpl.gl.texParameteri(3553,10242,33071);
			break;
		case 0:
			kha_SystemImpl.gl.texParameteri(3553,10242,10497);
			break;
		case 1:
			kha_SystemImpl.gl.texParameteri(3553,10242,33648);
			break;
		}
		switch(vAddressing[1]) {
		case 2:
			kha_SystemImpl.gl.texParameteri(3553,10243,33071);
			break;
		case 0:
			kha_SystemImpl.gl.texParameteri(3553,10243,10497);
			break;
		case 1:
			kha_SystemImpl.gl.texParameteri(3553,10243,33648);
			break;
		}
		switch(minificationFilter[1]) {
		case 0:
			switch(mipmapFilter[1]) {
			case 0:
				kha_SystemImpl.gl.texParameteri(3553,10241,9728);
				break;
			case 1:
				kha_SystemImpl.gl.texParameteri(3553,10241,9984);
				break;
			case 2:
				kha_SystemImpl.gl.texParameteri(3553,10241,9986);
				break;
			}
			break;
		case 1:case 2:
			switch(mipmapFilter[1]) {
			case 0:
				kha_SystemImpl.gl.texParameteri(3553,10241,9729);
				break;
			case 1:
				kha_SystemImpl.gl.texParameteri(3553,10241,9985);
				break;
			case 2:
				kha_SystemImpl.gl.texParameteri(3553,10241,9987);
				break;
			}
			if(minificationFilter == kha_graphics4_TextureFilter.AnisotropicFilter) kha_SystemImpl.gl.texParameteri(3553,kha_SystemImpl.anisotropicFilter.TEXTURE_MAX_ANISOTROPY_EXT,4);
			break;
		}
		switch(magnificationFilter[1]) {
		case 0:
			kha_SystemImpl.gl.texParameteri(3553,10240,9728);
			break;
		case 1:case 2:
			kha_SystemImpl.gl.texParameteri(3553,10240,9729);
			break;
		}
	}
	,setCullMode: function(mode) {
		switch(mode[1]) {
		case 2:
			kha_SystemImpl.gl.disable(2884);
			break;
		case 0:
			kha_SystemImpl.gl.enable(2884);
			kha_SystemImpl.gl.cullFace(1028);
			break;
		case 1:
			kha_SystemImpl.gl.enable(2884);
			kha_SystemImpl.gl.cullFace(1029);
			break;
		}
	}
	,setPipeline: function(pipe) {
		this.setCullMode(pipe.cullMode);
		this.setDepthMode(pipe.depthWrite,pipe.depthMode);
		this.setStencilParameters(pipe.stencilMode,pipe.stencilBothPass,pipe.stencilDepthFail,pipe.stencilFail,pipe.stencilReferenceValue,pipe.stencilReadMask,pipe.stencilWriteMask);
		this.setBlendingMode(pipe.blendSource,pipe.blendDestination);
		pipe.set();
	}
	,setBool: function(location,value) {
		kha_SystemImpl.gl.uniform1i((js_Boot.__cast(location , kha_js_graphics4_ConstantLocation)).value,value?1:0);
	}
	,setInt: function(location,value) {
		kha_SystemImpl.gl.uniform1i((js_Boot.__cast(location , kha_js_graphics4_ConstantLocation)).value,value);
	}
	,setFloat: function(location,value) {
		kha_SystemImpl.gl.uniform1f((js_Boot.__cast(location , kha_js_graphics4_ConstantLocation)).value,value);
	}
	,setFloat2: function(location,value1,value2) {
		kha_SystemImpl.gl.uniform2f((js_Boot.__cast(location , kha_js_graphics4_ConstantLocation)).value,value1,value2);
	}
	,setFloat3: function(location,value1,value2,value3) {
		kha_SystemImpl.gl.uniform3f((js_Boot.__cast(location , kha_js_graphics4_ConstantLocation)).value,value1,value2,value3);
	}
	,setFloat4: function(location,value1,value2,value3,value4) {
		kha_SystemImpl.gl.uniform4f((js_Boot.__cast(location , kha_js_graphics4_ConstantLocation)).value,value1,value2,value3,value4);
	}
	,setFloats: function(location,values) {
		kha_SystemImpl.gl.uniform1fv((js_Boot.__cast(location , kha_js_graphics4_ConstantLocation)).value,values);
	}
	,setVector2: function(location,value) {
		kha_SystemImpl.gl.uniform2f((js_Boot.__cast(location , kha_js_graphics4_ConstantLocation)).value,value.x,value.y);
	}
	,setVector3: function(location,value) {
		kha_SystemImpl.gl.uniform3f((js_Boot.__cast(location , kha_js_graphics4_ConstantLocation)).value,value.x,value.y,value.z);
	}
	,setVector4: function(location,value) {
		kha_SystemImpl.gl.uniform4f((js_Boot.__cast(location , kha_js_graphics4_ConstantLocation)).value,value.x,value.y,value.z,value.w);
	}
	,matrixCache: null
	,setMatrix: function(location,matrix) {
		this.matrixCache[0] = matrix._00;
		this.matrixCache[1] = matrix._01;
		this.matrixCache[2] = matrix._02;
		this.matrixCache[3] = matrix._03;
		this.matrixCache[4] = matrix._10;
		this.matrixCache[5] = matrix._11;
		this.matrixCache[6] = matrix._12;
		this.matrixCache[7] = matrix._13;
		this.matrixCache[8] = matrix._20;
		this.matrixCache[9] = matrix._21;
		this.matrixCache[10] = matrix._22;
		this.matrixCache[11] = matrix._23;
		this.matrixCache[12] = matrix._30;
		this.matrixCache[13] = matrix._31;
		this.matrixCache[14] = matrix._32;
		this.matrixCache[15] = matrix._33;
		kha_SystemImpl.gl.uniformMatrix4fv((js_Boot.__cast(location , kha_js_graphics4_ConstantLocation)).value,false,this.matrixCache);
	}
	,drawIndexedVertices: function(start,count) {
		if(count == null) count = -1;
		if(start == null) start = 0;
		kha_SystemImpl.gl.drawElements(4,count == -1?this.indicesCount:count,5123,start * 2);
	}
	,convertStencilAction: function(action) {
		switch(action[1]) {
		case 5:
			return 7683;
		case 6:
			return 34056;
		case 3:
			return 7682;
		case 4:
			return 34055;
		case 7:
			return 5386;
		case 0:
			return 7680;
		case 2:
			return 7681;
		case 1:
			return 0;
		}
	}
	,setStencilParameters: function(compareMode,bothPass,depthFail,stencilFail,referenceValue,readMask,writeMask) {
		if(writeMask == null) writeMask = 255;
		if(readMask == null) readMask = 255;
		if(compareMode == kha_graphics4_CompareMode.Always && bothPass == kha_graphics4_StencilAction.Keep && depthFail == kha_graphics4_StencilAction.Keep && stencilFail == kha_graphics4_StencilAction.Keep) kha_SystemImpl.gl.disable(2960); else {
			kha_SystemImpl.gl.enable(2960);
			var stencilFunc = 0;
			switch(compareMode[1]) {
			case 0:
				stencilFunc = 519;
				break;
			case 2:
				stencilFunc = 514;
				break;
			case 6:
				stencilFunc = 516;
				break;
			case 7:
				stencilFunc = 518;
				break;
			case 4:
				stencilFunc = 513;
				break;
			case 5:
				stencilFunc = 515;
				break;
			case 1:
				stencilFunc = 512;
				break;
			case 3:
				stencilFunc = 517;
				break;
			}
			kha_SystemImpl.gl.stencilMask(writeMask);
			kha_SystemImpl.gl.stencilOp(this.convertStencilAction(stencilFail),this.convertStencilAction(depthFail),this.convertStencilAction(bothPass));
			kha_SystemImpl.gl.stencilFunc(stencilFunc,referenceValue,readMask);
		}
	}
	,scissor: function(x,y,width,height) {
		kha_SystemImpl.gl.enable(3089);
		var h;
		if(this.renderTarget == null) h = kha_System.windowHeight(0); else h = this.renderTarget.get_height();
		kha_SystemImpl.gl.scissor(x,h - y - height,width,height);
	}
	,disableScissor: function() {
		kha_SystemImpl.gl.disable(3089);
	}
	,renderTargetsInvertedY: function() {
		return true;
	}
	,drawIndexedVerticesInstanced: function(instanceCount,start,count) {
		if(count == null) count = -1;
		if(start == null) start = 0;
		if(this.instancedRenderingAvailable()) this.instancedExtension.drawElementsInstancedANGLE(4,count == -1?this.indicesCount:count,5123,start * 2,instanceCount);
	}
	,instancedRenderingAvailable: function() {
		return this.instancedExtension;
	}
	,__class__: kha_js_graphics4_Graphics
};
var kha_js_graphics4_Graphics2 = function(canvas) {
	kha_graphics4_Graphics2.call(this,canvas);
};
$hxClasses["kha.js.graphics4.Graphics2"] = kha_js_graphics4_Graphics2;
kha_js_graphics4_Graphics2.__name__ = ["kha","js","graphics4","Graphics2"];
kha_js_graphics4_Graphics2.__super__ = kha_graphics4_Graphics2;
kha_js_graphics4_Graphics2.prototype = $extend(kha_graphics4_Graphics2.prototype,{
	drawVideoInternal: function(video,x,y,width,height) {
		var v;
		v = js_Boot.__cast(video , kha_js_Video);
		this.drawScaledSubImage(v.texture,0,0,v.texture.get_width(),v.texture.get_height(),x,y,width,height);
	}
	,begin: function(clear,clearColor) {
		if(clear == null) clear = true;
		kha_SystemImpl.gl.colorMask(true,true,true,true);
		kha_SystemImpl.gl.disable(2929);
		kha_SystemImpl.gl.depthFunc(519);
		kha_graphics4_Graphics2.prototype.begin.call(this,clear,clearColor);
	}
	,__class__: kha_js_graphics4_Graphics2
});
var kha_js_graphics4_TextureUnit = function(value) {
	this.value = value;
};
$hxClasses["kha.js.graphics4.TextureUnit"] = kha_js_graphics4_TextureUnit;
kha_js_graphics4_TextureUnit.__name__ = ["kha","js","graphics4","TextureUnit"];
kha_js_graphics4_TextureUnit.__interfaces__ = [kha_graphics4_TextureUnit];
kha_js_graphics4_TextureUnit.prototype = {
	value: null
	,__class__: kha_js_graphics4_TextureUnit
};
var kha_math_FastMatrix3 = function(_00,_10,_20,_01,_11,_21,_02,_12,_22) {
	this._00 = _00;
	this._10 = _10;
	this._20 = _20;
	this._01 = _01;
	this._11 = _11;
	this._21 = _21;
	this._02 = _02;
	this._12 = _12;
	this._22 = _22;
};
$hxClasses["kha.math.FastMatrix3"] = kha_math_FastMatrix3;
kha_math_FastMatrix3.__name__ = ["kha","math","FastMatrix3"];
kha_math_FastMatrix3.fromMatrix3 = function(m) {
	return new kha_math_FastMatrix3(m._00,m._10,m._20,m._01,m._11,m._21,m._02,m._12,m._22);
};
kha_math_FastMatrix3.prototype = {
	_00: null
	,_10: null
	,_20: null
	,_01: null
	,_11: null
	,_21: null
	,_02: null
	,_12: null
	,_22: null
	,__class__: kha_math_FastMatrix3
};
var kha_math_FastVector2 = function(x,y) {
	if(y == null) y = 0;
	if(x == null) x = 0;
	this.x = x;
	this.y = y;
};
$hxClasses["kha.math.FastVector2"] = kha_math_FastVector2;
kha_math_FastVector2.__name__ = ["kha","math","FastVector2"];
kha_math_FastVector2.fromVector2 = function(v) {
	return new kha_math_FastVector2(v.x,v.y);
};
kha_math_FastVector2.prototype = {
	x: null
	,y: null
	,get_length: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
	,set_length: function(length) {
		var currentLength = this.get_length();
		if(currentLength == 0) return 0;
		var mul = length / currentLength;
		this.x *= mul;
		this.y *= mul;
		return length;
	}
	,__class__: kha_math_FastVector2
	,__properties__: {set_length:"set_length",get_length:"get_length"}
};
var kha_math_FastVector3 = function(x,y,z) {
	if(z == null) z = 0;
	if(y == null) y = 0;
	if(x == null) x = 0;
	this.x = x;
	this.y = y;
	this.z = z;
};
$hxClasses["kha.math.FastVector3"] = kha_math_FastVector3;
kha_math_FastVector3.__name__ = ["kha","math","FastVector3"];
kha_math_FastVector3.fromVector3 = function(v) {
	return new kha_math_FastVector3(v.x,v.y,v.z);
};
kha_math_FastVector3.prototype = {
	x: null
	,y: null
	,z: null
	,get_length: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
	}
	,set_length: function(length) {
		var currentLength = this.get_length();
		if(currentLength == 0) return 0;
		var mul = length / currentLength;
		this.x *= mul;
		this.y *= mul;
		this.z *= mul;
		return length;
	}
	,__class__: kha_math_FastVector3
	,__properties__: {set_length:"set_length",get_length:"get_length"}
};
var kha_math_FastVector4 = function(x,y,z,w) {
	if(w == null) w = 1;
	if(z == null) z = 0;
	if(y == null) y = 0;
	if(x == null) x = 0;
	this.x = x;
	this.y = y;
	this.z = z;
	this.w = w;
};
$hxClasses["kha.math.FastVector4"] = kha_math_FastVector4;
kha_math_FastVector4.__name__ = ["kha","math","FastVector4"];
kha_math_FastVector4.fromVector4 = function(v) {
	return new kha_math_FastVector4(v.x,v.y,v.z,v.w);
};
kha_math_FastVector4.prototype = {
	x: null
	,y: null
	,z: null
	,w: null
	,get_length: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
	}
	,set_length: function(length) {
		var currentLength = this.get_length();
		if(currentLength == 0) return 0;
		var mul = length / currentLength;
		this.x *= mul;
		this.y *= mul;
		this.z *= mul;
		this.w *= mul;
		return length;
	}
	,__class__: kha_math_FastVector4
	,__properties__: {set_length:"set_length",get_length:"get_length"}
};
var kha_math_Matrix3 = function(_00,_10,_20,_01,_11,_21,_02,_12,_22) {
	this._00 = _00;
	this._10 = _10;
	this._20 = _20;
	this._01 = _01;
	this._11 = _11;
	this._21 = _21;
	this._02 = _02;
	this._12 = _12;
	this._22 = _22;
};
$hxClasses["kha.math.Matrix3"] = kha_math_Matrix3;
kha_math_Matrix3.__name__ = ["kha","math","Matrix3"];
kha_math_Matrix3.prototype = {
	_00: null
	,_10: null
	,_20: null
	,_01: null
	,_11: null
	,_21: null
	,_02: null
	,_12: null
	,_22: null
	,__class__: kha_math_Matrix3
};
var kha_math_Matrix4 = function(_00,_10,_20,_30,_01,_11,_21,_31,_02,_12,_22,_32,_03,_13,_23,_33) {
	this._00 = _00;
	this._10 = _10;
	this._20 = _20;
	this._30 = _30;
	this._01 = _01;
	this._11 = _11;
	this._21 = _21;
	this._31 = _31;
	this._02 = _02;
	this._12 = _12;
	this._22 = _22;
	this._32 = _32;
	this._03 = _03;
	this._13 = _13;
	this._23 = _23;
	this._33 = _33;
};
$hxClasses["kha.math.Matrix4"] = kha_math_Matrix4;
kha_math_Matrix4.__name__ = ["kha","math","Matrix4"];
kha_math_Matrix4.orthogonalProjection = function(left,right,bottom,top,zn,zf) {
	var tx = -(right + left) / (right - left);
	var ty = -(top + bottom) / (top - bottom);
	var tz = -(zf + zn) / (zf - zn);
	return new kha_math_Matrix4(2 / (right - left),0,0,tx,0,2 / (top - bottom),0,ty,0,0,-2 / (zf - zn),tz,0,0,0,1);
};
kha_math_Matrix4.perspectiveProjection = function(fovY,aspect,zn,zf) {
	var uh = 1.0 / Math.tan(fovY / 2 * (Math.PI / 180));
	var uw = uh / aspect;
	return new kha_math_Matrix4(uw,0,0,0,0,uh,0,0,0,0,(zf + zn) / (zn - zf),2 * zf * zn / (zn - zf),0,0,-1,0);
};
kha_math_Matrix4.lookAt = function(eye,at,up) {
	var zaxis = new kha_math_Vector3(at.x - eye.x,at.y - eye.y,at.z - eye.z);
	zaxis.set_length(1);
	var xaxis;
	var _x1 = zaxis.y * up.z - zaxis.z * up.y;
	var _y1 = zaxis.z * up.x - zaxis.x * up.z;
	var _z1 = zaxis.x * up.y - zaxis.y * up.x;
	xaxis = new kha_math_Vector3(_x1,_y1,_z1);
	xaxis.set_length(1);
	var _x = xaxis.y * zaxis.z - xaxis.z * zaxis.y;
	var _y = xaxis.z * zaxis.x - xaxis.x * zaxis.z;
	var _z = xaxis.x * zaxis.y - xaxis.y * zaxis.x;
	var yaxis_x = _x;
	var yaxis_y = _y;
	var yaxis_z = _z;
	return new kha_math_Matrix4(xaxis.x,xaxis.y,xaxis.z,-(xaxis.x * eye.x + xaxis.y * eye.y + xaxis.z * eye.z),yaxis_x,yaxis_y,yaxis_z,-(yaxis_x * eye.x + yaxis_y * eye.y + yaxis_z * eye.z),-zaxis.x,-zaxis.y,-zaxis.z,zaxis.x * eye.x + zaxis.y * eye.y + zaxis.z * eye.z,0,0,0,1);
};
kha_math_Matrix4.prototype = {
	_00: null
	,_10: null
	,_20: null
	,_30: null
	,_01: null
	,_11: null
	,_21: null
	,_31: null
	,_02: null
	,_12: null
	,_22: null
	,_32: null
	,_03: null
	,_13: null
	,_23: null
	,_33: null
	,__class__: kha_math_Matrix4
};
var kha_math_Vector2 = function(x,y) {
	if(y == null) y = 0;
	if(x == null) x = 0;
	this.x = x;
	this.y = y;
};
$hxClasses["kha.math.Vector2"] = kha_math_Vector2;
kha_math_Vector2.__name__ = ["kha","math","Vector2"];
kha_math_Vector2.prototype = {
	x: null
	,y: null
	,get_length: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
	,set_length: function(length) {
		var currentLength = this.get_length();
		if(currentLength == 0) return 0;
		var mul = length / currentLength;
		this.x *= mul;
		this.y *= mul;
		return length;
	}
	,__class__: kha_math_Vector2
	,__properties__: {set_length:"set_length",get_length:"get_length"}
};
var kha_math_Vector3 = function(x,y,z) {
	if(z == null) z = 0;
	if(y == null) y = 0;
	if(x == null) x = 0;
	this.x = x;
	this.y = y;
	this.z = z;
};
$hxClasses["kha.math.Vector3"] = kha_math_Vector3;
kha_math_Vector3.__name__ = ["kha","math","Vector3"];
kha_math_Vector3.prototype = {
	x: null
	,y: null
	,z: null
	,get_length: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
	}
	,set_length: function(length) {
		var currentLength = this.get_length();
		if(currentLength == 0) return 0;
		var mul = length / currentLength;
		this.x *= mul;
		this.y *= mul;
		this.z *= mul;
		return length;
	}
	,__class__: kha_math_Vector3
	,__properties__: {set_length:"set_length",get_length:"get_length"}
};
var kha_math_Vector4 = function(x,y,z,w) {
	if(w == null) w = 1;
	if(z == null) z = 0;
	if(y == null) y = 0;
	if(x == null) x = 0;
	this.x = x;
	this.y = y;
	this.z = z;
	this.w = w;
};
$hxClasses["kha.math.Vector4"] = kha_math_Vector4;
kha_math_Vector4.__name__ = ["kha","math","Vector4"];
kha_math_Vector4.prototype = {
	x: null
	,y: null
	,z: null
	,w: null
	,get_length: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
	}
	,set_length: function(length) {
		var currentLength = this.get_length();
		if(currentLength == 0) return 0;
		var mul = length / currentLength;
		this.x *= mul;
		this.y *= mul;
		this.z *= mul;
		this.w *= mul;
		return length;
	}
	,__class__: kha_math_Vector4
	,__properties__: {set_length:"set_length",get_length:"get_length"}
};
var kha_network_Client = function() { };
$hxClasses["kha.network.Client"] = kha_network_Client;
kha_network_Client.__name__ = ["kha","network","Client"];
kha_network_Client.prototype = {
	get_id: null
	,id: null
	,send: null
	,receive: null
	,onClose: null
	,__class__: kha_network_Client
	,__properties__: {get_id:"get_id"}
};
var kha_network_ControllerBuilder = function() { };
$hxClasses["kha.network.ControllerBuilder"] = kha_network_ControllerBuilder;
kha_network_ControllerBuilder.__name__ = ["kha","network","ControllerBuilder"];
var kha_network_Entity = function() { };
$hxClasses["kha.network.Entity"] = kha_network_Entity;
kha_network_Entity.__name__ = ["kha","network","Entity"];
kha_network_Entity.prototype = {
	_id: null
	,_size: null
	,_send: null
	,_receive: null
	,__class__: kha_network_Entity
};
var kha_network_LocalClient = function(id) {
	this.myId = id;
};
$hxClasses["kha.network.LocalClient"] = kha_network_LocalClient;
kha_network_LocalClient.__name__ = ["kha","network","LocalClient"];
kha_network_LocalClient.__interfaces__ = [kha_network_Client];
kha_network_LocalClient.prototype = {
	myId: null
	,send: function(bytes,mandatory) {
	}
	,receive: function(receiver) {
	}
	,onClose: function(close) {
	}
	,controllers: null
	,get_controllers: function() {
		return null;
	}
	,id: null
	,get_id: function() {
		return this.myId;
	}
	,__class__: kha_network_LocalClient
	,__properties__: {get_id:"get_id",get_controllers:"get_controllers"}
};
var kha_network_Network = function(url,port) {
	this.socket = new WebSocket("ws://" + url + ":" + port);
	this.socket.binaryType = "arraybuffer";
};
$hxClasses["kha.network.Network"] = kha_network_Network;
kha_network_Network.__name__ = ["kha","network","Network"];
kha_network_Network.prototype = {
	socket: null
	,send: function(bytes,mandatory) {
		this.socket.send(bytes.b.bufferValue);
	}
	,listen: function(listener) {
		this.socket.onmessage = function(message) {
			listener(haxe_io_Bytes.ofData(message.data));
		};
	}
	,__class__: kha_network_Network
};
var kha_network_State = function(time,data) {
	this.time = time;
	this.data = data;
};
$hxClasses["kha.network.State"] = kha_network_State;
kha_network_State.__name__ = ["kha","network","State"];
kha_network_State.prototype = {
	time: null
	,data: null
	,__class__: kha_network_State
};
var kha_network_Session = function(players) {
	this.controllers = new haxe_ds_IntMap();
	this.entities = new haxe_ds_IntMap();
	kha_network_Session.instance = this;
	this.players = players;
};
$hxClasses["kha.network.Session"] = kha_network_Session;
kha_network_Session.__name__ = ["kha","network","Session"];
kha_network_Session.the = function() {
	return kha_network_Session.instance;
};
kha_network_Session.prototype = {
	entities: null
	,controllers: null
	,players: null
	,startCallback: null
	,localClient: null
	,network: null
	,me: null
	,get_me: function() {
		return this.localClient;
	}
	,addEntity: function(entity) {
		var key = entity._id();
		this.entities.h[key] = entity;
	}
	,addController: function(controller) {
		haxe_Log.trace("Adding controller id " + controller._id(),{ fileName : "Session.hx", lineNumber : 71, className : "kha.network.Session", methodName : "addController"});
		var key = controller._id();
		this.controllers.h[key] = controller;
	}
	,receive: function(bytes,client) {
		var _g = bytes.b[0];
		switch(_g) {
		case 0:
			var index = bytes.b[1];
			this.localClient = new kha_network_LocalClient(index);
			kha_Scheduler.resetTime();
			this.startCallback();
			break;
		case 1:
			var time = bytes.getDouble(1);
			var offset = 9;
			var $it0 = this.entities.iterator();
			while( $it0.hasNext() ) {
				var entity = $it0.next();
				entity._receive(offset,bytes);
				offset += entity._size();
			}
			kha_Scheduler.back(time);
			break;
		case 3:
			var args = [];
			var index1 = 1;
			var classnamelength = bytes.getUInt16(index1);
			index1 += 2;
			var classname = "";
			var _g1 = 0;
			while(_g1 < classnamelength) {
				var i = _g1++;
				classname += String.fromCharCode(bytes.b[index1]);
				++index1;
			}
			var methodnamelength = bytes.getUInt16(index1);
			index1 += 2;
			var methodname = "";
			var _g11 = 0;
			while(_g11 < methodnamelength) {
				var i1 = _g11++;
				methodname += String.fromCharCode(bytes.b[index1]);
				++index1;
			}
			while(index1 < bytes.length) {
				var type = bytes.b[index1];
				++index1;
				switch(type) {
				case 66:
					var value = bytes.b[index1] == 1;
					++index1;
					haxe_Log.trace("Bool: " + (value == null?"null":"" + value),{ fileName : "Session.hx", lineNumber : 182, className : "kha.network.Session", methodName : "receive"});
					args.push(value);
					break;
				case 70:
					var value1 = bytes.getDouble(index1);
					index1 += 8;
					haxe_Log.trace("Float: " + value1,{ fileName : "Session.hx", lineNumber : 187, className : "kha.network.Session", methodName : "receive"});
					args.push(value1);
					break;
				case 73:
					var value2 = bytes.getInt32(index1);
					index1 += 4;
					haxe_Log.trace("Int: " + value2,{ fileName : "Session.hx", lineNumber : 192, className : "kha.network.Session", methodName : "receive"});
					args.push(value2);
					break;
				case 83:
					var length = bytes.getUInt16(index1);
					index1 += 2;
					var str = "";
					var _g12 = 0;
					while(_g12 < length) {
						var i2 = _g12++;
						str += String.fromCharCode(bytes.b[index1]);
						++index1;
					}
					haxe_Log.trace("String: " + str,{ fileName : "Session.hx", lineNumber : 202, className : "kha.network.Session", methodName : "receive"});
					args.push(str);
					break;
				default:
					haxe_Log.trace("Unknown argument type.",{ fileName : "Session.hx", lineNumber : 205, className : "kha.network.Session", methodName : "receive"});
				}
			}
			Reflect.callMethod(null,Reflect.field(Type.resolveClass(classname),methodname + "_remotely"),args);
			break;
		}
	}
	,waitForStart: function(callback) {
		var _g = this;
		this.startCallback = callback;
		this.network = new kha_network_Network("localhost",6789);
		this.network.listen(function(bytes) {
			_g.receive(bytes);
		});
	}
	,update: function() {
	}
	,__class__: kha_network_Session
	,__properties__: {get_me:"get_me"}
};
var kha_simd_Float32x4 = function(_0,_1,_2,_3) {
	this._0 = _0;
	this._1 = _1;
	this._2 = _2;
	this._3 = _3;
};
$hxClasses["kha.simd.Float32x4"] = kha_simd_Float32x4;
kha_simd_Float32x4.__name__ = ["kha","simd","Float32x4"];
kha_simd_Float32x4.create = function() {
	return new kha_simd_Float32x4(0,0,0,0);
};
kha_simd_Float32x4.loadAllFast = function(t) {
	return new kha_simd_Float32x4(t,t,t,t);
};
kha_simd_Float32x4.load = function(a,b,c,d) {
	return new kha_simd_Float32x4(a,b,c,d);
};
kha_simd_Float32x4.loadFast = function(a,b,c,d) {
	return new kha_simd_Float32x4(a,b,c,d);
};
kha_simd_Float32x4.get = function(t,index) {
	var value = 0;
	switch(index) {
	case 0:
		value = t._0;
		break;
	case 1:
		value = t._1;
		break;
	case 2:
		value = t._2;
		break;
	case 3:
		value = t._3;
		break;
	}
	return value;
};
kha_simd_Float32x4.getFast = function(t,index) {
	switch(index) {
	case 0:
		return t._0;
	case 1:
		return t._1;
	case 2:
		return t._2;
	case 3:
		return t._3;
	}
	return 0;
};
kha_simd_Float32x4.abs = function(t) {
	return new kha_simd_Float32x4(Math.abs(t._0),Math.abs(t._1),Math.abs(t._2),Math.abs(t._3));
};
kha_simd_Float32x4.add = function(a,b) {
	return new kha_simd_Float32x4(a._0 + b._0,a._1 + b._1,a._2 + b._2,a._3 + b._3);
};
kha_simd_Float32x4.div = function(a,b) {
	return new kha_simd_Float32x4(a._0 / b._0,a._1 / b._1,a._2 / b._2,a._3 / b._3);
};
kha_simd_Float32x4.mul = function(a,b) {
	return new kha_simd_Float32x4(a._0 * b._0,a._1 * b._1,a._2 * b._2,a._3 * b._3);
};
kha_simd_Float32x4.neg = function(t) {
	return new kha_simd_Float32x4(-t._0,-t._1,-t._2,-t._3);
};
kha_simd_Float32x4.reciprocalApproximation = function(t) {
	return new kha_simd_Float32x4(0,0,0,0);
};
kha_simd_Float32x4.reciprocalSqrtApproximation = function(t) {
	return new kha_simd_Float32x4(0,0,0,0);
};
kha_simd_Float32x4.sub = function(a,b) {
	return new kha_simd_Float32x4(a._0 - b._0,a._1 - b._1,a._2 - b._2,a._3 - b._3);
};
kha_simd_Float32x4.sqrt = function(t) {
	return new kha_simd_Float32x4(Math.sqrt(t._0),Math.sqrt(t._1),Math.sqrt(t._2),Math.sqrt(t._3));
};
kha_simd_Float32x4.prototype = {
	_0: null
	,_1: null
	,_2: null
	,_3: null
	,__class__: kha_simd_Float32x4
};
var lue_App = function(game) {
	this.game = game;
	lue_App.w = kha_System.windowWidth();
	lue_App.h = kha_System.windowHeight();
	kha_Assets.loadEverything($bind(this,this.loadingFinished));
};
$hxClasses["lue.App"] = lue_App;
lue_App.__name__ = ["lue","App"];
lue_App.reset = function() {
	lue_App.traitInits = [];
	lue_App.traitUpdates = [];
	lue_App.traitRenders = [];
	lue_App.traitRenders2D = [];
	lue_Eg.reset();
	lue_sys_Input.reset();
	lue_sys_Tween.reset();
};
lue_App.requestInit = function(f) {
	lue_App.traitInits.push(f);
};
lue_App.removeInit = function(f) {
	HxOverrides.remove(lue_App.traitInits,f);
};
lue_App.requestUpdate = function(f) {
	lue_App.traitUpdates.push(f);
};
lue_App.removeUpdate = function(f) {
	HxOverrides.remove(lue_App.traitUpdates,f);
};
lue_App.requestRender = function(f) {
	lue_App.traitRenders.push(f);
};
lue_App.removeRender = function(f) {
	HxOverrides.remove(lue_App.traitRenders,f);
};
lue_App.requestRender2D = function(f) {
	lue_App.traitRenders2D.push(f);
};
lue_App.removeRender2D = function(f) {
	HxOverrides.remove(lue_App.traitRenders2D,f);
};
lue_App.prototype = {
	game: null
	,loadingFinished: function() {
		new lue_Eg();
		new lue_Ut();
		new lue_sys_Storage();
		new lue_sys_Time();
		new lue_sys_Input();
		Type.createInstance(this.game,[]);
		kha_System.notifyOnRender($bind(this,this.render));
		kha_Scheduler.addTimeTask($bind(this,this.update),0,0.0166666666666666664);
	}
	,update: function() {
		lue_sys_Time.delta = kha_Scheduler.time() - lue_sys_Time.last;
		lue_sys_Time.last = kha_Scheduler.time();
		lue_sys_Tween.update();
		if(lue_App.traitInits.length > 0) {
			var _g = 0;
			var _g1 = lue_App.traitInits;
			while(_g < _g1.length) {
				var f = _g1[_g];
				++_g;
				if(lue_App.traitInits.length == 0) break;
				f();
				f = null;
			}
			lue_App.traitInits.splice(0,lue_App.traitInits.length);
		}
		var _g2 = 0;
		var _g11 = lue_App.traitUpdates;
		while(_g2 < _g11.length) {
			var f1 = _g11[_g2];
			++_g2;
			if(lue_App.traitUpdates.length == 0) break;
			f1();
		}
		lue_sys_Input.end();
	}
	,render: function(frame) {
		if(lue_App.traitInits.length > 0) {
			var _g = 0;
			var _g1 = lue_App.traitInits;
			while(_g < _g1.length) {
				var f = _g1[_g];
				++_g;
				if(lue_App.traitInits.length == 0) break;
				f();
				f = null;
			}
			lue_App.traitInits.splice(0,lue_App.traitInits.length);
		}
		var _g2 = 0;
		var _g11 = lue_App.traitRenders;
		while(_g2 < _g11.length) {
			var f1 = _g11[_g2];
			++_g2;
			if(lue_App.traitRenders.length == 0) break;
			f1(frame.get_g4());
		}
	}
	,__class__: lue_App
};
var lue_Eg = function() {
	lue_Eg.reset();
};
$hxClasses["lue.Eg"] = lue_Eg;
lue_Eg.__name__ = ["lue","Eg"];
lue_Eg.reset = function() {
	lue_node_RootNode.reset();
	lue_Eg.root = new lue_node_RootNode();
};
lue_Eg.getModelResource = function(name,id) {
	if(id == null) id = "";
	return lue_resource_Resource.getModel(name,id);
};
lue_Eg.getLightResource = function(name,id) {
	if(id == null) id = "";
	return lue_resource_Resource.getLight(name,id);
};
lue_Eg.getCameraResource = function(name,id) {
	if(id == null) id = "";
	return lue_resource_Resource.getCamera(name,id);
};
lue_Eg.getMaterialResource = function(name,id) {
	if(id == null) id = "";
	return lue_resource_Resource.getMaterial(name,id);
};
lue_Eg.getShaderResource = function(name,id) {
	if(id == null) id = "";
	return lue_resource_Resource.getShader(name,id);
};
lue_Eg.addNode = function(parent) {
	var node = new lue_node_Node();
	if(parent != null) parent.addChild(node); else lue_Eg.root.addChild(node);
	return node;
};
lue_Eg.addModelNode = function(resource,materials,parent) {
	var node = new lue_node_ModelNode(resource,materials);
	if(parent != null) parent.addChild(node); else lue_Eg.root.addChild(node);
	return node;
};
lue_Eg.addLightNode = function(resource,parent) {
	var node = new lue_node_LightNode(resource);
	if(parent != null) parent.addChild(node); else lue_Eg.root.addChild(node);
	return node;
};
lue_Eg.addCameraNode = function(resource,parent) {
	var node = new lue_node_CameraNode(resource);
	if(parent != null) parent.addChild(node); else lue_Eg.root.addChild(node);
	return node;
};
lue_Eg.addSpeakerNode = function(resource,parent) {
	var node = new lue_node_SpeakerNode(resource);
	if(parent != null) parent.addChild(node); else lue_Eg.root.addChild(node);
	return node;
};
lue_Eg.addScene = function(name,parent) {
	return lue_node_RootNode.addScene(name,parent == null?lue_Eg.addNode():parent);
};
lue_Eg.parseNode = function(sceneName,nodeName,parent) {
	return lue_node_RootNode.parseNode(sceneName,nodeName,parent);
};
lue_Eg.removeNode = function(node) {
	if(node.parent == null) return;
	if(js_Boot.__instanceof(node,lue_node_ModelNode)) HxOverrides.remove(lue_node_RootNode.models,node); else if(js_Boot.__instanceof(node,lue_node_LightNode)) HxOverrides.remove(lue_node_RootNode.lights,node); else HxOverrides.remove(lue_node_RootNode.cameras,node);
	node.parent.removeChild(node);
};
lue_Eg.setNodeTransform = function(node,x,y,z,rX,rY,rZ,sX,sY,sZ) {
	if(sZ == null) sZ = 1;
	if(sY == null) sY = 1;
	if(sX == null) sX = 1;
	if(rZ == null) rZ = 0;
	if(rY == null) rY = 0;
	if(rX == null) rX = 0;
	if(z == null) z = 0;
	if(y == null) y = 0;
	if(x == null) x = 0;
	node.transform.set(x,y,z,rX,rY,rZ,sX,sY,sZ);
};
lue_Eg.addNodeTrait = function(node,trait) {
	node.addTrait(trait);
};
lue_Eg.render = function(g,camera) {
	camera.renderFrame(g,lue_Eg.root,lue_node_RootNode.lights);
};
lue_Eg.setupAnimation = function(node,startTrack,names,starts,ends) {
	node.setupAnimation(startTrack,names,starts,ends);
};
lue_Eg.setAnimationParams = function(node,delta) {
	node.skinning.setAnimationParams(delta);
};
lue_Eg.prototype = {
	__class__: lue_Eg
};
var lue_Ut = function() {
};
$hxClasses["lue.Ut"] = lue_Ut;
lue_Ut.__name__ = ["lue","Ut"];
lue_Ut.getNodeIntersection = function(node,camera,x,y) {
	return lue_math_RayCaster.getIntersect(node.transform,x,y,camera);
};
lue_Ut.prototype = {
	__class__: lue_Ut
};
var lue_math_Box3 = function(min,max) {
	if(min != null) this.min = min; else this.min = new lue_math_Vec4(Infinity,Infinity,Infinity);
	if(max != null) this.max = max; else this.max = new lue_math_Vec4(-Infinity,-Infinity,-Infinity);
};
$hxClasses["lue.math.Box3"] = lue_math_Box3;
lue_math_Box3.__name__ = ["lue","math","Box3"];
lue_math_Box3.prototype = {
	min: null
	,max: null
	,set: function(min,max) {
		this.min.copy2(min);
		this.max.copy2(max);
		return this;
	}
	,addPoint: function(point) {
		if(point.x < this.min.x) this.min.x = point.x; else if(point.x > this.max.x) this.max.x = point.x;
		if(point.y < this.min.y) this.min.y = point.y; else if(point.y > this.max.y) this.max.y = point.y;
		if(point.z < this.min.z) this.min.z = point.z; else if(point.z > this.max.z) this.max.z = point.z;
	}
	,setFromPoints: function(points) {
		if(points.length > 0) {
			var point = points[0];
			this.min.copy2(point);
			this.max.copy2(point);
			var _g1 = 1;
			var _g = points.length;
			while(_g1 < _g) {
				var i = _g1++;
				this.addPoint(points[i]);
			}
		} else this.makeEmpty();
		return this;
	}
	,setFromCenterAndSize: function(center,size) {
		var v1 = new lue_math_Vec4();
		var halfSize = v1.copy2(size).multiplyScalar(0.5);
		this.min.copy2(center).sub(halfSize);
		this.max.copy2(center).add(halfSize);
		return this;
	}
	,copy2: function(box) {
		this.min.copy2(box.min);
		this.max.copy2(box.max);
		return this;
	}
	,makeEmpty: function() {
		this.min.x = this.min.y = this.min.z = Infinity;
		this.max.x = this.max.y = this.max.z = -Infinity;
		return this;
	}
	,empty: function() {
		return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
	}
	,center: function(optionalTarget) {
		var result;
		if(optionalTarget != null) result = optionalTarget; else result = new lue_math_Vec4();
		return result.addVectors(this.min,this.max).multiplyScalar(0.5);
	}
	,size: function(optionalTarget) {
		var result;
		if(optionalTarget != null) result = optionalTarget; else result = new lue_math_Vec4();
		return result.subVectors(this.max,this.min);
	}
	,expandByPoint: function(point) {
		this.min.min(point);
		this.max.max(point);
		return this;
	}
	,expandByVector: function(vector) {
		this.min.sub(vector);
		this.max.add(vector);
		return this;
	}
	,expandByScalar: function(scalar) {
		this.min.addScalar(-scalar);
		this.max.addScalar(scalar);
		return this;
	}
	,containsPoint: function(point) {
		if(point.x < this.min.x || point.x > this.max.x || point.y < this.min.y || point.y > this.max.y || point.z < this.min.z || point.z > this.max.z) return false;
		return true;
	}
	,containsBox: function(box) {
		if(this.min.x <= box.min.x && box.max.x <= this.max.x && this.min.y <= box.min.y && box.max.y <= this.max.y && this.min.z <= box.min.z && box.max.z <= this.max.z) return true;
		return false;
	}
	,getParameter: function(point,optionalTarget) {
		var result;
		if(optionalTarget != null) result = optionalTarget; else result = new lue_math_Vec4();
		return result.set((point.x - this.min.x) / (this.max.x - this.min.x),(point.y - this.min.y) / (this.max.y - this.min.y),(point.z - this.min.z) / (this.max.z - this.min.z));
	}
	,isIntersectionBox: function(box) {
		if(box.max.x < this.min.x || box.min.x > this.max.x || box.max.y < this.min.y || box.min.y > this.max.y || box.max.z < this.min.z || box.min.z > this.max.z) return false;
		return true;
	}
	,clampPoint: function(point,optionalTarget) {
		var result;
		if(optionalTarget != null) result = optionalTarget; else result = new lue_math_Vec4();
		return result.copy2(point).clamp(this.min,this.max);
	}
	,distanceToPoint: function(point) {
		var v1 = point.clone();
		var clampedPoint = v1.copy2(point).clamp(this.min,this.max);
		return clampedPoint.sub(point).length();
	}
	,getBoundingSphere: function(optionalTarget) {
		var v1 = new lue_math_Vec4();
		var result;
		if(optionalTarget != null) result = optionalTarget; else result = new lue_math_Sphere();
		result.center = this.center();
		result.radius = this.size(v1).length() * 0.5;
		return result;
	}
	,intersect: function(box) {
		this.min.max(box.min);
		this.max.min(box.max);
		return this;
	}
	,union: function(box) {
		this.min.min(box.min);
		this.max.max(box.max);
		return this;
	}
	,applyMat4: function(matrix) {
		var points = [new lue_math_Vec4(),new lue_math_Vec4(),new lue_math_Vec4(),new lue_math_Vec4(),new lue_math_Vec4(),new lue_math_Vec4(),new lue_math_Vec4(),new lue_math_Vec4()];
		points[0].set(this.min.x,this.min.y,this.min.z).applyMat4(matrix);
		points[1].set(this.min.x,this.min.y,this.max.z).applyMat4(matrix);
		points[2].set(this.min.x,this.max.y,this.min.z).applyMat4(matrix);
		points[3].set(this.min.x,this.max.y,this.max.z).applyMat4(matrix);
		points[4].set(this.max.x,this.min.y,this.min.z).applyMat4(matrix);
		points[5].set(this.max.x,this.min.y,this.max.z).applyMat4(matrix);
		points[6].set(this.max.x,this.max.y,this.min.z).applyMat4(matrix);
		points[7].set(this.max.x,this.max.y,this.max.z).applyMat4(matrix);
		this.makeEmpty();
		this.setFromPoints(points);
		return this;
	}
	,translate: function(offset) {
		this.min.add(offset);
		this.max.add(offset);
		return this;
	}
	,equals: function(box) {
		return box.min.equals(this.min) && box.max.equals(this.max);
	}
	,clone: function() {
		return new lue_math_Box3().copy2(this);
	}
	,__class__: lue_math_Box3
};
var lue_math_Line3 = function(start,end) {
	if(start != null) this.start = start; else this.start = new lue_math_Vec4();
	if(end != null) this.end = end; else this.end = new lue_math_Vec4();
};
$hxClasses["lue.math.Line3"] = lue_math_Line3;
lue_math_Line3.__name__ = ["lue","math","Line3"];
lue_math_Line3.prototype = {
	start: null
	,end: null
	,set: function(start,end) {
		this.start.copy2(start);
		this.end.copy2(end);
		return this;
	}
	,copy: function(line) {
		this.start.copy2(line.start);
		this.end.copy2(line.end);
		return this;
	}
	,center: function(optionalTarget) {
		var result;
		if(optionalTarget != null) result = optionalTarget; else result = new lue_math_Vec4();
		return result.addVectors(this.start,this.end).multiplyScalar(0.5);
	}
	,delta: function(optionalTarget) {
		var result;
		if(optionalTarget != null) result = optionalTarget; else result = new lue_math_Vec4();
		return result.subVectors(this.end,this.start);
	}
	,distanceSq: function() {
		return this.start.distanceToSquared(this.end);
	}
	,distance: function() {
		return this.start.distanceTo(this.end);
	}
	,at: function(t,optionalTarget) {
		var result;
		if(optionalTarget != null) result = optionalTarget; else result = new lue_math_Vec4();
		return this.delta(result).multiplyScalar(t).add(this.start);
	}
	,closestPointToPointParameter: function(point,clampToLine) {
		var startP = new lue_math_Vec4();
		var startEnd = new lue_math_Vec4();
		startP.subVectors(point,this.start);
		startEnd.subVectors(this.end,this.start);
		var startEnd2 = startEnd.dot(startEnd);
		var startEnd_startP = startEnd.dot(startP);
		var t = startEnd_startP / startEnd2;
		if(clampToLine) if(t < 0) t = 0; else if(t > 1) t = 1; else t = t;
		return t;
	}
	,closestPointToPoint: function(point,clampToLine,optionalTarget) {
		var t = this.closestPointToPointParameter(point,clampToLine);
		var result;
		if(optionalTarget == null) result = new lue_math_Vec4(); else result = optionalTarget;
		return this.delta(result).multiplyScalar(t).add(this.start);
	}
	,applyMatrix4: function(m) {
		this.start.applyMat4(m);
		this.end.applyMat4(m);
		return this;
	}
	,equals: function(line) {
		return line.start.equals(this.start) && line.end.equals(this.end);
	}
	,clone: function() {
		return new lue_math_Line3().copy(this);
	}
	,__class__: lue_math_Line3
};
var lue_math_Math = function() { };
$hxClasses["lue.math.Math"] = lue_math_Math;
lue_math_Math.__name__ = ["lue","math","Math"];
lue_math_Math.fmt = function(v) {
	var neg;
	if(v < 0) {
		neg = -1.0;
		v = -v;
	} else neg = 1.0;
	if(isNaN(v)) return v;
	var digits = Std["int"](4 - Math.log(v) / Math.log(10));
	if(digits < 1) digits = 1; else if(digits >= 10) return 0.0;
	var exp = Math.pow(10,digits);
	return Math.floor(v * exp + 0.49999) * neg / exp;
};
lue_math_Math.invSqrt = function(f) {
	return 1.0 / Math.sqrt(f);
};
lue_math_Math.clamp = function(f,min,max) {
	if(max == null) max = 1.0;
	if(min == null) min = 0.0;
	if(f < min) return min; else if(f > max) return max; else return f;
};
lue_math_Math.abs = function(f) {
	if(f < 0) return -f; else return f;
};
lue_math_Math.max = function(a,b) {
	if(a < b) return b; else return a;
};
lue_math_Math.min = function(a,b) {
	if(a > b) return b; else return a;
};
lue_math_Math.iabs = function(i) {
	if(i < 0) return -i; else return i;
};
lue_math_Math.imax = function(a,b) {
	if(a < b) return b; else return a;
};
lue_math_Math.imin = function(a,b) {
	if(a > b) return b; else return a;
};
lue_math_Math.iclamp = function(v,min,max) {
	if(v < min) return min; else if(v > max) return max; else return v;
};
lue_math_Math.lerp = function(a,b,k) {
	return a + k * (b - a);
};
lue_math_Math.bitCount = function(v) {
	var k = 0;
	while(v != 0) {
		k += v & 1;
		v >>>= 1;
	}
	return k;
};
lue_math_Math.colorLerp = function(c1,c2,k) {
	var a1 = c1 >>> 24;
	var r1 = c1 >> 16 & 255;
	var g1 = c1 >> 8 & 255;
	var b1 = c1 & 255;
	var a2 = c2 >>> 24;
	var r2 = c2 >> 16 & 255;
	var g2 = c2 >> 8 & 255;
	var b2 = c2 & 255;
	var a = a1 * (1 - k) + a2 * k | 0;
	var r = r1 * (1 - k) + r2 * k | 0;
	var g = g1 * (1 - k) + g2 * k | 0;
	var b = b1 * (1 - k) + b2 * k | 0;
	return a << 24 | r << 16 | g << 8 | b;
};
lue_math_Math.angle = function(da) {
	da %= 6.28318530717958623;
	if(da > 3.14159265358979323) da -= 6.28318530717958623; else if(da <= -3.14159265358979312) da += 6.28318530717958623;
	return da;
};
lue_math_Math.angleLerp = function(a,b,k) {
	return a + lue_math_Math.angle(b - a) * k;
};
lue_math_Math.angleMove = function(a,b,max) {
	var da = lue_math_Math.angle(b - a);
	if(da > -max && da < max) return b; else return a + (da < 0?-max:max);
};
lue_math_Math.radToDeg = function(rad) {
	return 57.2957795130823229 * rad;
};
lue_math_Math.degToRad = function(deg) {
	return 0.0174532925199432955 * deg;
};
lue_math_Math.mix = function(a,b,k) {
	return a * (1.0 - k) + b * k;
};
lue_math_Math.sign = function(p1,p2,p3) {
	return (p1.x - p3.x) * (p2.y - p3.y) - (p2.x - p3.x) * (p1.y - p3.y);
};
lue_math_Math.distance1d = function(x1,x2) {
	return Math.abs(x2 - x1);
};
lue_math_Math.distance2d = function(x1,y1,x2,y2) {
	return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
};
lue_math_Math.distance3d = function(v1,v2) {
	var vx = v1.x - v2.x;
	var vy = v1.y - v2.y;
	var vz = v1.z - v2.z;
	return Math.sqrt(vx * vx + vy * vy + vz * vz);
};
lue_math_Math.planeDotCoord = function(planeNormal,point,planeDistance) {
	return planeNormal.dot(point) + planeDistance;
};
var lue_math_Plane = function(normal,constant) {
	if(constant == null) constant = 0;
	if(normal != null) this.normal = normal; else this.normal = new lue_math_Vec4(1,0,0);
	this.constant = constant;
};
$hxClasses["lue.math.Plane"] = lue_math_Plane;
lue_math_Plane.__name__ = ["lue","math","Plane"];
lue_math_Plane.prototype = {
	normal: null
	,constant: null
	,set: function(normal,constant) {
		this.normal.copy2(normal);
		this.constant = constant;
		return this;
	}
	,setComponents: function(x,y,z,w) {
		this.normal.set(x,y,z);
		this.constant = w;
		return this;
	}
	,setFromNormalAndCoplanarPoint: function(normal,point) {
		this.normal.copy2(normal);
		this.constant = -point.dot(this.normal);
		return this;
	}
	,setFromCoplanarPoints: function(a,b,c) {
		var v1 = new lue_math_Vec4();
		var v2 = new lue_math_Vec4();
		var n = v1.subVectors(c,b).cross2(v2.subVectors(a,b)).normalize2();
		this.setFromNormalAndCoplanarPoint(n,a);
		return this;
	}
	,copy: function(plane) {
		this.normal.copy2(plane.normal);
		this.constant = plane.constant;
		return this;
	}
	,normalize: function() {
		var inverseNormalLength = 1.0 / this.normal.length();
		this.normal.multiplyScalar(inverseNormalLength);
		this.constant *= inverseNormalLength;
		return this;
	}
	,negate: function() {
		this.constant *= -1;
		this.normal.negate();
		return this;
	}
	,distanceToPoint: function(point) {
		return this.normal.dot(point) + this.constant;
	}
	,distanceToSphere: function(sphere) {
		return this.distanceToPoint(sphere.center) - sphere.radius;
	}
	,projectPoint: function(point,optTarget) {
		var result;
		if(optTarget != null) result = optTarget; else result = new lue_math_Vec4();
		return this.orthoPoint(point,result).sub(point).negate();
	}
	,orthoPoint: function(point,optTarget) {
		var result;
		if(optTarget != null) result = optTarget; else result = new lue_math_Vec4();
		var perpendicularMagnitude = this.distanceToPoint(point);
		return result.copy2(this.normal).multiplyScalar(perpendicularMagnitude);
	}
	,isIntersectionLine: function(line) {
		var startSign = this.distanceToPoint(line.start);
		var endSign = this.distanceToPoint(line.end);
		return startSign < 0 && endSign > 0 || endSign < 0 && startSign > 0;
	}
	,intersectLine: function(line,optTarget) {
		var v1 = new lue_math_Vec4();
		var result;
		if(optTarget != null) result = optTarget; else result = new lue_math_Vec4();
		var direction = line.delta(v1);
		var denominator = this.normal.dot(direction);
		if(denominator == 0) {
			if(this.distanceToPoint(line.start) == 0) return result.copy2(line.start);
			return null;
		}
		var t = -(line.start.dot(this.normal) + this.constant) / denominator;
		if(t < 0 || t > 1) return null;
		return result.copy2(direction).multiplyScalar(t).add(line.start);
	}
	,coplanarPoint: function(optTarget) {
		var result;
		if(optTarget != null) result = optTarget; else result = new lue_math_Vec4();
		return result.copy2(this.normal).multiplyScalar(-this.constant);
	}
	,translate: function(offset) {
		this.constant -= offset.dot(this.normal);
		return this;
	}
	,equals: function(plane) {
		return plane.normal.equals(this.normal) && plane.constant == this.constant;
	}
	,clone: function() {
		return new lue_math_Plane().copy(this);
	}
	,__class__: lue_math_Plane
};
var lue_math_Vec4 = function(x,y,z,w) {
	if(w == null) w = 1;
	if(z == null) z = 0.0;
	if(y == null) y = 0.0;
	if(x == null) x = 0.0;
	this.x = x;
	this.y = y;
	this.z = z;
	this.w = w;
};
$hxClasses["lue.math.Vec4"] = lue_math_Vec4;
lue_math_Vec4.__name__ = ["lue","math","Vec4"];
lue_math_Vec4.lerp = function(va,vb,t) {
	var target = new lue_math_Vec4();
	target.x = vb.x + (va.x - vb.x) * t;
	target.y = vb.y + (va.y - vb.y) * t;
	target.z = vb.z + (va.z - vb.z) * t;
	return target;
};
lue_math_Vec4.xAxis = function() {
	return new lue_math_Vec4(1,0,0);
};
lue_math_Vec4.yAxis = function() {
	return new lue_math_Vec4(0,1,0);
};
lue_math_Vec4.zAxis = function() {
	return new lue_math_Vec4(0,0,1);
};
lue_math_Vec4.prototype = {
	x: null
	,y: null
	,z: null
	,w: null
	,cross: function(v,target) {
		var vx = v.x;
		var vy = v.y;
		var vz = v.z;
		var x = this.x;
		var y = this.y;
		var z = this.z;
		if(target == null) target = new lue_math_Vec4();
		target.x = y * vz - z * vy;
		target.y = z * vx - x * vz;
		target.z = x * vy - y * vx;
		return target;
	}
	,cross2: function(v) {
		this.x = this.y * v.z - this.z * v.y;
		this.y = this.z * v.x - this.x * v.z;
		this.z = this.x * v.y - this.y * v.x;
		return this;
	}
	,crossVectors: function(a,b) {
		this.x = a.y * b.z - a.z * b.y;
		this.y = a.z * b.x - a.x * b.z;
		this.z = a.x * b.y - a.y * b.x;
		return this;
	}
	,equals: function(v) {
		return this.x == v.x && this.y == v.y && this.z == v.z;
	}
	,set: function(x,y,z) {
		this.x = x;
		this.y = y;
		this.z = z;
		return this;
	}
	,vadd: function(v,target) {
		if(target != null) {
			target.x = v.x + this.x;
			target.y = v.y + this.y;
			target.z = v.z + this.z;
			return target;
		} else return new lue_math_Vec4(this.x + v.x,this.y + v.y,this.z + v.z);
	}
	,add: function(v) {
		this.x += v.x;
		this.y += v.y;
		this.z += v.z;
		return this;
	}
	,addVectors: function(a,b) {
		this.x = a.x + b.x;
		this.y = a.y + b.y;
		this.z = a.z + b.z;
		return this;
	}
	,vsub: function(v,target) {
		if(target != null) {
			target.x = this.x - v.x;
			target.y = this.y - v.y;
			target.z = this.z - v.z;
			return target;
		} else return new lue_math_Vec4(this.x - v.x,this.y - v.y,this.z - v.z);
	}
	,subVectors: function(a,b) {
		this.x = a.x - b.x;
		this.y = a.y - b.y;
		this.z = a.z - b.z;
		return this;
	}
	,normalize: function() {
		var x = this.x;
		var y = this.y;
		var z = this.z;
		var n = Math.sqrt(x * x + y * y + z * z);
		if(n > 0.0) {
			var invN = 1 / n;
			this.x *= invN;
			this.y *= invN;
			this.z *= invN;
		} else {
			this.x = 0;
			this.y = 0;
			this.z = 0;
		}
		return n;
	}
	,unit: function(target) {
		if(target == null) target = new lue_math_Vec4();
		var x = this.x;
		var y = this.y;
		var z = this.z;
		var ninv = Math.sqrt(x * x + y * y + z * z);
		if(ninv > 0.0) {
			ninv = 1.0 / ninv;
			target.x = x * ninv;
			target.y = y * ninv;
			target.z = z * ninv;
		} else {
			target.x = 1;
			target.y = 0;
			target.z = 0;
		}
		return target;
	}
	,norm: function() {
		var x = this.x;
		var y = this.y;
		var z = this.z;
		return Math.sqrt(x * x + y * y + z * z);
	}
	,norm2: function() {
		return this.dot(this);
	}
	,distanceTo: function(p) {
		var x = this.x;
		var y = this.y;
		var z = this.z;
		var px = p.x;
		var py = p.y;
		var pz = p.z;
		return Math.sqrt((px - x) * (px - x) + (py - y) * (py - y) + (pz - z) * (pz - z));
	}
	,mult: function(scalar,target) {
		if(target == null) target = new lue_math_Vec4();
		var x = this.x;
		var y = this.y;
		var z = this.z;
		target.x = scalar * x;
		target.y = scalar * y;
		target.z = scalar * z;
		return target;
	}
	,multiplyScalar: function(scalar) {
		this.x *= scalar;
		this.y *= scalar;
		this.z *= scalar;
		return this;
	}
	,dot: function(v) {
		return this.x * v.x + this.y * v.y + this.z * v.z;
	}
	,isZero: function() {
		return this.x == 0 && this.y == 0 && this.z == 0;
	}
	,negate: function(target) {
		if(target == null) target = new lue_math_Vec4();
		target.x = -this.x;
		target.y = -this.y;
		target.z = -this.z;
		return target;
	}
	,tangents: function(t1,t2) {
		var norm = this.norm();
		if(norm > 0.0) {
			var n = lue_math_Vec4.Vec3_tangents_n;
			var inorm = 1 / norm;
			n.set(this.x * inorm,this.y * inorm,this.z * inorm);
			var randVec = lue_math_Vec4.Vec3_tangents_randVec;
			if(Math.abs(n.x) < 0.9) {
				randVec.set(1,0,0);
				n.cross(randVec,t1);
			} else {
				randVec.set(0,1,0);
				n.cross(randVec,t1);
			}
			n.cross(t1,t2);
		} else {
			t1.set(1,0,0).normalize();
			t2.set(0,1,0).normalize();
		}
	}
	,toString: function() {
		return this.x + "," + this.y + "," + this.z;
	}
	,copy: function(target) {
		if(target == null) target = new lue_math_Vec4();
		target.x = this.x;
		target.y = this.y;
		target.z = this.z;
		return target;
	}
	,copy2: function(v) {
		this.x = v.x;
		this.y = v.y;
		this.z = v.z;
		return this;
	}
	,clone: function() {
		return new lue_math_Vec4(this.x,this.y,this.z);
	}
	,almostEquals: function(v,precision) {
		if(precision == null) precision = -1.0;
		if(precision < -0.99) precision = 1e-6;
		if(Math.abs(this.x - v.x) > precision || Math.abs(this.y - v.y) > precision || Math.abs(this.z - v.z) > precision) return false;
		return true;
	}
	,almostZero: function(v) {
		var precision = 1e-6;
		if(Math.abs(this.x) > precision || Math.abs(this.y) > precision || Math.abs(this.z) > precision) return false;
		return true;
	}
	,applyProjection: function(m) {
		var x = this.x;
		var y = this.y;
		var z = this.z;
		var d = 1 / (m._03 * x + m._13 * y + m._23 * z + m._33);
		this.x = (m._00 * x + m._10 * y + m._20 * z + m._30) * d;
		this.y = (m._01 * x + m._11 * y + m._21 * z + m._31) * d;
		this.z = (m._02 * x + m._12 * y + m._22 * z + m._32) * d;
		return this;
	}
	,applyMat4: function(m) {
		var x = this.x;
		var y = this.y;
		var z = this.z;
		this.x = m._00 * x + m._10 * y + m._20 * z + m._30;
		this.y = m._01 * x + m._11 * y + m._21 * z + m._31;
		this.z = m._02 * x + m._12 * y + m._22 * z + m._32;
		return this;
	}
	,normalize2: function() {
		return this.divideScalar(this.length());
	}
	,divideScalar: function(scalar) {
		if(scalar != 0) {
			var invScalar = 1 / scalar;
			this.x *= invScalar;
			this.y *= invScalar;
			this.z *= invScalar;
		} else {
			this.x = 0;
			this.y = 0;
			this.z = 0;
		}
		return this;
	}
	,length: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
	}
	,lengthSq: function() {
		return this.x * this.x + this.y * this.y + this.z * this.z;
	}
	,sub: function(v) {
		this.x -= v.x;
		this.y -= v.y;
		this.z -= v.z;
		return this;
	}
	,getXYZ: function() {
		return new lue_math_Vec4(this.x,this.y,this.z);
	}
	,min: function(v) {
		if(this.x > v.x) this.x = v.x;
		if(this.y > v.y) this.y = v.y;
		if(this.z > v.z) this.z = v.z;
		return this;
	}
	,max: function(v) {
		if(this.x < v.x) this.x = v.x;
		if(this.y < v.y) this.y = v.y;
		if(this.z < v.z) this.z = v.z;
		return this;
	}
	,clamp: function(vmin,vmax) {
		if(this.x < vmin.x) this.x = vmin.x; else if(this.x > vmax.x) this.x = vmax.x;
		if(this.y < vmin.y) this.y = vmin.y; else if(this.y > vmax.y) this.y = vmax.y;
		if(this.z < vmin.z) this.z = vmin.z; else if(this.z > vmax.z) this.z = vmax.z;
		return this;
	}
	,addScalar: function(s) {
		this.x += s;
		this.y += s;
		this.z += s;
		return this;
	}
	,distanceToSquared: function(v) {
		var dx = this.x - v.x;
		var dy = this.y - v.y;
		var dz = this.z - v.z;
		return dx * dx + dy * dy + dz * dz;
	}
	,unproject: function(P,V) {
		var VPInv = lue_math_Mat4.identity();
		var PInv = lue_math_Mat4.identity();
		var VInv = lue_math_Mat4.identity();
		PInv.getInverse(P);
		VInv.getInverse(V);
		VPInv.multiplyMatrices(VInv,PInv);
		return this.applyProjection(VPInv);
	}
	,__class__: lue_math_Vec4
};
var lue_math_Quat = function(x,y,z,w) {
	if(w == null) w = 1.0;
	if(z == null) z = 0.0;
	if(y == null) y = 0.0;
	if(x == null) x = 0.0;
	this.x = x;
	this.y = y;
	this.z = z;
	this.w = w;
};
$hxClasses["lue.math.Quat"] = lue_math_Quat;
lue_math_Quat.__name__ = ["lue","math","Quat"];
lue_math_Quat.lerp = function(p_a,p_b,p_ratio) {
	var c = new lue_math_Quat();
	var ca = new lue_math_Quat();
	p_a.copy(ca);
	var dot = p_a.dot(p_b);
	if(dot < 0.0) {
		ca.w = -ca.w;
		ca.x = -ca.x;
		ca.y = -ca.y;
		ca.z = -ca.z;
	}
	c.x = ca.x + (p_b.x - ca.x) * p_ratio;
	c.y = ca.y + (p_b.y - ca.y) * p_ratio;
	c.z = ca.z + (p_b.z - ca.z) * p_ratio;
	c.w = ca.w + (p_b.w - ca.w) * p_ratio;
	c.normalize();
	return c;
};
lue_math_Quat.slerp = function(qa,qb,t) {
	var qm = new lue_math_Quat();
	var cosHalfTheta = qa.w * qb.w + qa.x * qb.x + qa.y * qb.y + qa.z * qb.z;
	if(Math.abs(cosHalfTheta) >= 1.0) {
		qm.w = qa.w;
		qm.x = qa.x;
		qm.y = qa.y;
		qm.z = qa.z;
		return qm;
	}
	var halfTheta = Math.acos(cosHalfTheta);
	var sinHalfTheta = Math.sqrt(1.0 - cosHalfTheta * cosHalfTheta);
	if(Math.abs(sinHalfTheta) < 0.001) {
		qm.w = qa.w * 0.5 + qb.w * 0.5;
		qm.x = qa.x * 0.5 + qb.x * 0.5;
		qm.y = qa.y * 0.5 + qb.y * 0.5;
		qm.z = qa.z * 0.5 + qb.z * 0.5;
		return qm;
	}
	var ratioA = Math.sin((1 - t) * halfTheta) / sinHalfTheta;
	var ratioB = Math.sin(t * halfTheta) / sinHalfTheta;
	qm.w = qa.w * ratioA + qb.w * ratioB;
	qm.x = qa.x * ratioA + qb.x * ratioB;
	qm.y = qa.y * ratioA + qb.y * ratioB;
	qm.z = qa.z * ratioA + qb.z * ratioB;
	return qm;
};
lue_math_Quat.fromEuler = function(p_euler) {
	var q = new lue_math_Quat();
	var ax = p_euler.x * 57.2957795130823229;
	var ay = p_euler.y * 57.2957795130823229;
	var az = p_euler.z * 57.2957795130823229;
	var c1 = Math.cos(ax * 0.5);
	var s1 = Math.sin(ax * 0.5);
	var c2 = Math.cos(ay * 0.5);
	var s2 = Math.sin(ay * 0.5);
	var c3 = Math.cos(az * 0.5);
	var s3 = Math.sin(az * 0.5);
	var c1c2 = c1 * c2;
	var s1s2 = s1 * s2;
	q.w = c1c2 * c3 - s1s2 * s3;
	q.x = c1c2 * s3 + s1s2 * c3;
	q.y = s1 * c2 * c3 + c1 * s2 * s3;
	q.z = c1 * s2 * c3 - s1 * c2 * s3;
	q.normalize();
	return q;
};
lue_math_Quat.prototype = {
	x: null
	,y: null
	,z: null
	,w: null
	,set: function(x,y,z,w) {
		this.x = x;
		this.y = y;
		this.z = z;
		this.w = w;
	}
	,toString: function() {
		return this.x + "," + this.y + "," + this.z + "," + this.w;
	}
	,setFromAxisAngle: function(axis,angle) {
		var s = Math.sin(angle * 0.5);
		this.x = axis.x * s;
		this.y = axis.y * s;
		this.z = axis.z * s;
		this.w = Math.cos(angle * 0.5);
	}
	,setFromRotationMatrix: function(m) {
		var m11 = m._00;
		var m12 = m._10;
		var m13 = m._20;
		var m21 = m._01;
		var m22 = m._11;
		var m23 = m._21;
		var m31 = m._02;
		var m32 = m._12;
		var m33 = m._22;
		var tr = m11 + m22 + m33;
		var s = 0.0;
		if(tr > 0) {
			s = 0.5 / Math.sqrt(tr + 1.0);
			this.w = 0.25 / s;
			this.x = (m32 - m23) * s;
			this.y = (m13 - m31) * s;
			this.z = (m21 - m12) * s;
		} else if(m11 > m22 && m11 > m33) {
			s = 2.0 * Math.sqrt(1.0 + m11 - m22 - m33);
			this.w = (m32 - m23) / s;
			this.x = 0.25 * s;
			this.y = (m12 + m21) / s;
			this.z = (m13 + m31) / s;
		} else if(m22 > m33) {
			s = 2.0 * Math.sqrt(1.0 + m22 - m11 - m33);
			this.w = (m13 - m31) / s;
			this.x = (m12 + m21) / s;
			this.y = 0.25 * s;
			this.z = (m23 + m32) / s;
		} else {
			s = 2.0 * Math.sqrt(1.0 + m33 - m11 - m22);
			this.w = (m21 - m12) / s;
			this.x = (m13 + m31) / s;
			this.y = (m23 + m32) / s;
			this.z = 0.25 * s;
		}
		return this;
	}
	,toAxisAngle: function(targetAxis) {
		if(targetAxis == null) targetAxis = new lue_math_Vec4();
		this.normalize();
		var angle = 2 * Math.acos(this.w);
		var s = Math.sqrt(1 - this.w * this.w);
		if(s < 0.001) {
			targetAxis.x = this.x;
			targetAxis.y = this.y;
			targetAxis.z = this.z;
		} else {
			targetAxis.x = this.x / s;
			targetAxis.y = this.y / s;
			targetAxis.z = this.z / s;
		}
		return [targetAxis,angle];
	}
	,mult: function(q,target) {
		if(target == null) target = new lue_math_Quat();
		var w = this.w;
		var va = lue_math_Quat.Quaternion_mult_va;
		var vb = lue_math_Quat.Quaternion_mult_vb;
		var vaxvb = lue_math_Quat.Quaternion_mult_vaxvb;
		va.set(this.x,this.y,this.z);
		vb.set(q.x,q.y,q.z);
		target.w = w * q.w - va.dot(vb);
		va.cross(vb,vaxvb);
		target.x = w * vb.x + q.w * va.x + vaxvb.x;
		target.y = w * vb.y + q.w * va.y + vaxvb.y;
		target.z = w * vb.z + q.w * va.z + vaxvb.z;
		return target;
	}
	,inverse: function(target) {
		var x = this.x;
		var y = this.y;
		var z = this.z;
		var w = this.w;
		if(target == null) target = new lue_math_Quat();
		this.conjugate(target);
		var inorm2 = 1 / (x * x + y * y + z * z + w * w);
		target.x *= inorm2;
		target.y *= inorm2;
		target.z *= inorm2;
		target.w *= inorm2;
		return target;
	}
	,conjugate: function(target) {
		if(target == null) target = new lue_math_Quat();
		target.x = -this.x;
		target.y = -this.y;
		target.z = -this.z;
		target.w = this.w;
		return target;
	}
	,normalize: function() {
		var l = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
		if(l == 0.0) {
			this.x = 0;
			this.y = 0;
			this.z = 0;
			this.w = 0;
		} else {
			l = 1 / l;
			this.x *= l;
			this.y *= l;
			this.z *= l;
			this.w *= l;
		}
	}
	,normalizeFast: function() {
		var f = (3.0 - (this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)) / 2.0;
		if(f == 0) {
			this.x = 0;
			this.y = 0;
			this.z = 0;
			this.w = 0;
		} else {
			this.x *= f;
			this.y *= f;
			this.z *= f;
			this.w *= f;
		}
	}
	,vmult: function(v,target) {
		if(target == null) target = new lue_math_Vec4();
		var x = v.x;
		var y = v.y;
		var z = v.z;
		var qx = this.x;
		var qy = this.y;
		var qz = this.z;
		var qw = this.w;
		var ix = qw * x + qy * z - qz * y;
		var iy = qw * y + qz * x - qx * z;
		var iz = qw * z + qx * y - qy * x;
		var iw = -qx * x - qy * y - qz * z;
		target.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
		target.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
		target.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;
		return target;
	}
	,vecmult: function(vec) {
		var num = this.x * 2.0;
		var num2 = this.y * 2.0;
		var num3 = this.z * 2.0;
		var num4 = this.x * num;
		var num5 = this.y * num2;
		var num6 = this.z * num3;
		var num7 = this.x * num2;
		var num8 = this.x * num3;
		var num9 = this.y * num3;
		var num10 = this.w * num;
		var num11 = this.w * num2;
		var num12 = this.w * num3;
		var result = new lue_math_Vec4();
		result.x = (1.0 - (num5 + num6)) * vec.x + (num7 - num12) * vec.y + (num8 + num11) * vec.z;
		result.y = (num7 + num12) * vec.x + (1.0 - (num4 + num6)) * vec.y + (num9 - num10) * vec.z;
		result.z = (num8 - num11) * vec.x + (num9 + num10) * vec.y + (1.0 - (num4 + num5)) * vec.z;
		return result;
	}
	,copy: function(target) {
		target.x = this.x;
		target.y = this.y;
		target.z = this.z;
		target.w = this.w;
	}
	,toEuler: function(target,order) {
		if(order == null) order = "YZX";
		var heading = NaN;
		var attitude = 0.0;
		var bank = 0.0;
		var x = this.x;
		var y = this.y;
		var z = this.z;
		var w = this.w;
		switch(order) {
		case "YZX":
			var test = x * y + z * w;
			if(test > 0.499) {
				heading = 2 * Math.atan2(x,w);
				attitude = Math.PI / 2;
				bank = 0;
			}
			if(test < -0.499) {
				heading = -2 * Math.atan2(x,w);
				attitude = -Math.PI / 2;
				bank = 0;
			}
			if(isNaN(heading)) {
				var sqx = x * x;
				var sqy = y * y;
				var sqz = z * z;
				heading = Math.atan2(2 * y * w - 2 * x * z,1.0 - 2 * sqy - 2 * sqz);
				attitude = Math.asin(2 * test);
				bank = Math.atan2(2 * x * w - 2 * y * z,1.0 - 2 * sqx - 2 * sqz);
			}
			break;
		default:
			throw new js__$Boot_HaxeError("Euler order " + order + " not supported yet.");
		}
		target.y = heading;
		target.z = attitude;
		target.x = bank;
	}
	,getEuler: function() {
		var roll = Math.atan2(2 * this.y * this.w - 2 * this.x * this.z,1 - 2 * this.y * this.y - 2 * this.z * this.z);
		var pitch = Math.atan2(2 * this.x * this.w - 2 * this.y * this.z,1 - 2 * this.x * this.x - 2 * this.z * this.z);
		var yaw = Math.asin(2 * this.x * this.y + 2 * this.z * this.w);
		return new lue_math_Vec4(pitch,roll,yaw);
	}
	,setFromEuler: function(x,y,z,order) {
		if(order == null) order = "ZXY";
		var c1 = Math.cos(x / 2);
		var c2 = Math.cos(y / 2);
		var c3 = Math.cos(z / 2);
		var s1 = Math.sin(x / 2);
		var s2 = Math.sin(y / 2);
		var s3 = Math.sin(z / 2);
		if(order == "XYZ") {
			this.x = s1 * c2 * c3 + c1 * s2 * s3;
			this.y = c1 * s2 * c3 - s1 * c2 * s3;
			this.z = c1 * c2 * s3 + s1 * s2 * c3;
			this.w = c1 * c2 * c3 - s1 * s2 * s3;
		} else if(order == "YXZ") {
			this.x = s1 * c2 * c3 + c1 * s2 * s3;
			this.y = c1 * s2 * c3 - s1 * c2 * s3;
			this.z = c1 * c2 * s3 - s1 * s2 * c3;
			this.w = c1 * c2 * c3 + s1 * s2 * s3;
		} else if(order == "ZXY") {
			this.x = s1 * c2 * c3 - c1 * s2 * s3;
			this.y = c1 * s2 * c3 + s1 * c2 * s3;
			this.z = c1 * c2 * s3 + s1 * s2 * c3;
			this.w = c1 * c2 * c3 - s1 * s2 * s3;
		} else if(order == "ZYX") {
			this.x = s1 * c2 * c3 - c1 * s2 * s3;
			this.y = c1 * s2 * c3 + s1 * c2 * s3;
			this.z = c1 * c2 * s3 - s1 * s2 * c3;
			this.w = c1 * c2 * c3 + s1 * s2 * s3;
		} else if(order == "YZX") {
			this.x = s1 * c2 * c3 + c1 * s2 * s3;
			this.y = c1 * s2 * c3 + s1 * c2 * s3;
			this.z = c1 * c2 * s3 - s1 * s2 * c3;
			this.w = c1 * c2 * c3 - s1 * s2 * s3;
		} else if(order == "XZY") {
			this.x = s1 * c2 * c3 - c1 * s2 * s3;
			this.y = c1 * s2 * c3 - s1 * c2 * s3;
			this.z = c1 * c2 * s3 + s1 * s2 * c3;
			this.w = c1 * c2 * c3 + s1 * s2 * s3;
		}
		return this;
	}
	,toMatrix: function() {
		var m = lue_math_Mat4.identity();
		this.saveToMatrix(m);
		return m;
	}
	,saveToMatrix: function(m) {
		var x = this.x;
		var y = this.y;
		var z = this.z;
		var w = this.w;
		var x2 = x + x;
		var y2 = y + y;
		var z2 = z + z;
		var xx = x * x2;
		var xy = x * y2;
		var xz = x * z2;
		var yy = y * y2;
		var yz = y * z2;
		var zz = z * z2;
		var wx = w * x2;
		var wy = w * y2;
		var wz = w * z2;
		m._00 = 1 - (yy + zz);
		m._10 = xy - wz;
		m._20 = xz + wy;
		m._01 = xy + wz;
		m._11 = 1 - (xx + zz);
		m._21 = yz - wx;
		m._02 = xz - wy;
		m._12 = yz + wx;
		m._22 = 1 - (xx + yy);
		m._03 = 0;
		m._13 = 0;
		m._23 = 0;
		m._30 = 0;
		m._31 = 0;
		m._32 = 0;
		m._33 = 1;
		return m;
	}
	,initRotate: function(ax,ay,az) {
		var sinX = Math.sin(ax * 0.5);
		var cosX = Math.cos(ax * 0.5);
		var sinY = Math.sin(ay * 0.5);
		var cosY = Math.cos(ay * 0.5);
		var sinZ = Math.sin(az * 0.5);
		var cosZ = Math.cos(az * 0.5);
		var cosYZ = cosY * cosZ;
		var sinYZ = sinY * sinZ;
		this.x = sinX * cosYZ - cosX * sinYZ;
		this.y = cosX * sinY * cosZ + sinX * cosY * sinZ;
		this.z = cosX * cosY * sinZ - sinX * sinY * cosZ;
		this.w = cosX * cosYZ + sinX * sinYZ;
	}
	,multiply: function(q1,q2) {
		var x2 = q1.x * q2.w + q1.w * q2.x + q1.y * q2.z - q1.z * q2.y;
		var y2 = q1.w * q2.y - q1.x * q2.z + q1.y * q2.w + q1.z * q2.x;
		var z2 = q1.w * q2.z + q1.x * q2.y - q1.y * q2.x + q1.z * q2.w;
		var w2 = q1.w * q2.w - q1.x * q2.x - q1.y * q2.y - q1.z * q2.z;
		this.x = x2;
		this.y = y2;
		this.z = z2;
		this.w = w2;
	}
	,euler: null
	,get_euler: function() {
		this.normalize();
		var test = this.x * this.y + this.z * this.w;
		var a = new lue_math_Vec4();
		if(test > 0.499) {
			a.x = 2.0 * Math.atan2(this.x,this.w) * 57.2957795130823229;
			a.y = 90.;
			a.z = 0;
			return a;
		}
		if(test < -0.499) {
			a.x = -2. * Math.atan2(this.x,this.w) * 57.2957795130823229;
			a.y = -90.;
			a.z = 0;
			return a;
		}
		var sqx = this.x * this.x;
		var sqy = this.y * this.y;
		var sqz = this.z * this.z;
		a.x = Math.atan2(2.0 * this.y * this.w - 2.0 * this.x * this.z,1.0 - 2.0 * sqy - 2.0 * sqz) * 57.2957795130823229;
		a.y = Math.asin(2.0 * test) * 57.2957795130823229;
		a.z = Math.atan2(2.0 * this.x * this.w - 2.0 * this.y * this.z,1.0 - 2.0 * sqx - 2.0 * sqz) * 57.2957795130823229;
		return a;
	}
	,dot: function(p_v) {
		return this.x * p_v.x + this.y * p_v.y + this.z * p_v.z + this.w * p_v.w;
	}
	,__class__: lue_math_Quat
	,__properties__: {get_euler:"get_euler"}
};
var lue_math_Ray = function(origin,direction) {
	if(origin == null) this.origin = new lue_math_Vec4(); else this.origin = origin;
	if(direction == null) this.direction = new lue_math_Vec4(); else this.direction = direction;
};
$hxClasses["lue.math.Ray"] = lue_math_Ray;
lue_math_Ray.__name__ = ["lue","math","Ray"];
lue_math_Ray.prototype = {
	origin: null
	,direction: null
	,set: function(origin,direction) {
		this.origin.copy2(origin);
		this.direction.copy2(direction);
		return this;
	}
	,copy2: function(ray) {
		return this.set(ray.origin,ray.direction);
	}
	,at: function(t,optionalTarget) {
		var result;
		if(optionalTarget != null) result = optionalTarget; else result = new lue_math_Vec4();
		return result.copy2(this.direction).multiplyScalar(t).add(this.origin);
	}
	,recast: function(t) {
		var v1 = new lue_math_Vec4();
		this.origin.copy2(this.at(t,v1));
		return this;
	}
	,closestPointToPoint: function(point,optionalTarget) {
		var result;
		if(optionalTarget == null) result = new lue_math_Vec4(); else result = optionalTarget;
		result.subVectors(point,this.origin);
		var directionDistance = result.dot(this.direction);
		if(directionDistance < 0) return result.copy2(this.origin);
		return result.copy2(this.direction).multiplyScalar(directionDistance).add(this.origin);
	}
	,distanceToPoint: function(point) {
		var v1 = new lue_math_Vec4();
		var directionDistance = v1.subVectors(point,this.origin).dot(this.direction);
		if(directionDistance < 0) return this.origin.distanceTo(point);
		v1.copy2(this.direction).multiplyScalar(directionDistance).add(this.origin);
		return v1.distanceTo(point);
	}
	,distanceSqToSegment: function(v0,v1,optionalPointOnRay,optionalPointOnSegment) {
		var segCenter = v0.clone().add(v1).multiplyScalar(0.5);
		var segDir = v1.clone().sub(v0).normalize2();
		var segExtent = v0.distanceTo(v1) * 0.5;
		var diff = this.origin.clone().sub(segCenter);
		var a01 = -this.direction.dot(segDir);
		var b0 = diff.dot(this.direction);
		var b1 = -diff.dot(segDir);
		var c = diff.lengthSq();
		var det = lue_math_Math.abs(1 - a01 * a01);
		var s0;
		var s1;
		var sqrDist;
		var extDet;
		if(det >= 0) {
			s0 = a01 * b1 - b0;
			s1 = a01 * b0 - b1;
			extDet = segExtent * det;
			if(s0 >= 0) {
				if(s1 >= -extDet) {
					if(s1 <= extDet) {
						var invDet = 1 / det;
						s0 *= invDet;
						s1 *= invDet;
						sqrDist = s0 * (s0 + a01 * s1 + 2 * b0) + s1 * (a01 * s0 + s1 + 2 * b1) + c;
					} else {
						s1 = segExtent;
						s0 = lue_math_Math.max(0,-(a01 * s1 + b0));
						sqrDist = -s0 * s0 + s1 * (s1 + 2 * b1) + c;
					}
				} else {
					s1 = -segExtent;
					s0 = lue_math_Math.max(0,-(a01 * s1 + b0));
					sqrDist = -s0 * s0 + s1 * (s1 + 2 * b1) + c;
				}
			} else if(s1 <= -extDet) {
				s0 = lue_math_Math.max(0,-(-a01 * segExtent + b0));
				if(s0 > 0) s1 = -segExtent; else s1 = lue_math_Math.min(lue_math_Math.max(-segExtent,-b1),segExtent);
				sqrDist = -s0 * s0 + s1 * (s1 + 2 * b1) + c;
			} else if(s1 <= extDet) {
				s0 = 0;
				s1 = lue_math_Math.min(lue_math_Math.max(-segExtent,-b1),segExtent);
				sqrDist = s1 * (s1 + 2 * b1) + c;
			} else {
				s0 = lue_math_Math.max(0,-(a01 * segExtent + b0));
				if(s0 > 0) s1 = segExtent; else s1 = lue_math_Math.min(lue_math_Math.max(-segExtent,-b1),segExtent);
				sqrDist = -s0 * s0 + s1 * (s1 + 2 * b1) + c;
			}
		} else {
			if(a01 > 0) s1 = -segExtent; else s1 = segExtent;
			s0 = lue_math_Math.max(0,-(a01 * s1 + b0));
			sqrDist = -s0 * s0 + s1 * (s1 + 2 * b1) + c;
		}
		if(optionalPointOnRay != null) optionalPointOnRay.copy2(this.direction.clone().multiplyScalar(s0).add(this.origin));
		if(optionalPointOnSegment != null) optionalPointOnSegment.copy2(segDir.clone().multiplyScalar(s1).add(segCenter));
		return sqrDist;
	}
	,isIntersectionSphere: function(sphere) {
		return this.distanceToPoint(sphere.center) <= sphere.radius;
	}
	,isIntersectionPlane: function(plane) {
		var distToPoint = plane.distanceToPoint(this.origin);
		if(distToPoint == 0) return true;
		var denominator = plane.normal.dot(this.direction);
		if(denominator * distToPoint < 0) return true;
		return false;
	}
	,distanceToPlane: function(plane) {
		var denominator = plane.normal.dot(this.direction);
		if(denominator == 0) {
			if(plane.distanceToPoint(this.origin) == 0) return 0;
			return -1;
		}
		var t = -(this.origin.dot(plane.normal) + plane.constant) / denominator;
		if(t >= 0) return t; else return -1;
	}
	,intersectPlane: function(plane,optionalTarget) {
		var t = this.distanceToPlane(plane);
		if(t == -1) return null;
		return this.at(t,optionalTarget);
	}
	,isIntersectionBox: function(box) {
		var v = new lue_math_Vec4();
		return this.intersectBox(box,v) != null;
	}
	,intersectBox: function(box,optionalTarget) {
		var tmin;
		var tmax;
		var tymin;
		var tymax;
		var tzmin;
		var tzmax;
		var invdirx = 1 / this.direction.x;
		var invdiry = 1 / this.direction.y;
		var invdirz = 1 / this.direction.z;
		var origin = this.origin;
		if(invdirx >= 0) {
			tmin = (box.min.x - origin.x) * invdirx;
			tmax = (box.max.x - origin.x) * invdirx;
		} else {
			tmin = (box.max.x - origin.x) * invdirx;
			tmax = (box.min.x - origin.x) * invdirx;
		}
		if(invdiry >= 0) {
			tymin = (box.min.y - origin.y) * invdiry;
			tymax = (box.max.y - origin.y) * invdiry;
		} else {
			tymin = (box.max.y - origin.y) * invdiry;
			tymax = (box.min.y - origin.y) * invdiry;
		}
		if(tmin > tymax || tymin > tmax) return null;
		if(tymin > tmin || tmin != tmin) tmin = tymin;
		if(tymax < tmax || tmax != tmax) tmax = tymax;
		if(invdirz >= 0) {
			tzmin = (box.min.z - origin.z) * invdirz;
			tzmax = (box.max.z - origin.z) * invdirz;
		} else {
			tzmin = (box.max.z - origin.z) * invdirz;
			tzmax = (box.min.z - origin.z) * invdirz;
		}
		if(tmin > tzmax || tzmin > tmax) return null;
		if(tzmin > tmin || tmin != tmin) tmin = tzmin;
		if(tzmax < tmax || tmax != tmax) tmax = tzmax;
		if(tmax < 0) return null;
		return this.at(tmin >= 0?tmin:tmax,optionalTarget);
	}
	,intersectTriangle: function(a,b,c,backfaceCulling,optionalTarget) {
		var diff = new lue_math_Vec4();
		var edge1 = new lue_math_Vec4();
		var edge2 = new lue_math_Vec4();
		var normal = new lue_math_Vec4();
		edge1.subVectors(b,a);
		edge2.subVectors(c,a);
		normal.crossVectors(edge1,edge2);
		var DdN = this.direction.dot(normal);
		var sign;
		if(DdN > 0) {
			if(backfaceCulling) return null;
			sign = 1;
		} else if(DdN < 0) {
			sign = -1;
			DdN = -DdN;
		} else return null;
		diff.subVectors(this.origin,a);
		var DdQxE2 = sign * this.direction.dot(edge2.crossVectors(diff,edge2));
		if(DdQxE2 < 0) return null;
		var DdE1xQ = sign * this.direction.dot(edge1.cross2(diff));
		if(DdE1xQ < 0) return null;
		if(DdQxE2 + DdE1xQ > DdN) return null;
		var QdN = -sign * diff.dot(normal);
		if(QdN < 0) return null;
		return this.at(QdN / DdN,optionalTarget);
	}
	,applyMat4: function(matrix4) {
		this.direction.add(this.origin).applyMat4(matrix4);
		this.origin.applyMat4(matrix4);
		this.direction.sub(this.origin);
		this.direction.normalize2();
		return this;
	}
	,equals: function(ray) {
		return ray.origin.equals(this.origin) && ray.direction.equals(this.direction);
	}
	,clone: function() {
		return new lue_math_Ray().copy2(this);
	}
	,__class__: lue_math_Ray
};
var lue_math_RayCaster = function() { };
$hxClasses["lue.math.RayCaster"] = lue_math_RayCaster;
lue_math_RayCaster.__name__ = ["lue","math","RayCaster"];
lue_math_RayCaster.getRay = function(inputX,inputY,camera) {
	var start = new lue_math_Vec4();
	var end = new lue_math_Vec4();
	lue_math_RayCaster.getDirection(start,end,inputX,inputY,camera);
	return new lue_math_Ray(start,end);
};
lue_math_RayCaster.getDirection = function(start,end,inputX,inputY,camera) {
	start.x = inputX / lue_App.w * 2 - 1;
	start.y = -(inputY / lue_App.h) * 2 + 1;
	start.z = -1.0;
	end.x = start.x;
	end.y = start.y;
	end.z = 0.0;
	start.unproject(camera.P,camera.V);
	end.unproject(camera.P,camera.V);
	end.sub(start);
	end.normalize2();
	end.x *= camera.resource.resource.far_plane;
	end.y *= camera.resource.resource.far_plane;
	end.z *= camera.resource.resource.far_plane;
};
lue_math_RayCaster.getIntersect = function(transform,inputX,inputY,camera) {
	var ray = lue_math_RayCaster.getRay(inputX,inputY,camera);
	var t = transform;
	var c = new lue_math_Vec4(t.matrix._30,t.matrix._31,t.matrix._32);
	var s = new lue_math_Vec4(t.size.x,t.size.y,t.size.z);
	var box = new lue_math_Box3();
	box.setFromCenterAndSize(c,s);
	return ray.intersectBox(box);
};
lue_math_RayCaster.getClosestIntersect = function(transforms,inputX,inputY,camera) {
	var intersects = [];
	var _g = 0;
	while(_g < transforms.length) {
		var t = transforms[_g];
		++_g;
		var intersect = lue_math_RayCaster.getIntersect(t,inputX,inputY,camera);
		if(intersect != null) intersects.push(t);
	}
	if(intersects.length == 0) return null;
	var closest = null;
	var minDist = Infinity;
	var _g1 = 0;
	while(_g1 < intersects.length) {
		var t1 = intersects[_g1];
		++_g1;
		var dist = lue_math_Math.distance3d(t1.pos,camera.transform.pos);
		if(dist < minDist) {
			minDist = dist;
			closest = t1;
		}
	}
	return closest;
};
lue_math_RayCaster.getIntersectPlane = function(normal,a,inputX,inputY,camera) {
	var ray = lue_math_RayCaster.getRay(inputX,inputY,camera);
	var plane = new lue_math_Plane();
	plane.setFromNormalAndCoplanarPoint(normal,a);
	return ray.intersectPlane(plane);
};
var lue_math_Sphere = function(center,radius) {
	if(radius == null) radius = 0;
	if(center != null) this.center = center; else this.center = new lue_math_Vec4();
	this.radius = radius;
};
$hxClasses["lue.math.Sphere"] = lue_math_Sphere;
lue_math_Sphere.__name__ = ["lue","math","Sphere"];
lue_math_Sphere.prototype = {
	center: null
	,radius: null
	,set: function(center,radius) {
		this.center.copy2(center);
		this.radius = radius;
		return this;
	}
	,setFromPoints: function(points,optionalCenter) {
		var box = new lue_math_Box3();
		var center = this.center;
		if(optionalCenter != null) center.copy(optionalCenter); else box.setFromPoints(points).center(center);
		var maxRadiusSq = 0;
		var _g1 = 0;
		var _g = points.length;
		while(_g1 < _g) {
			var i = _g1++;
			maxRadiusSq = lue_math_Math.max(maxRadiusSq,center.distanceToSquared(points[i]));
		}
		this.radius = Math.sqrt(maxRadiusSq);
		return this;
	}
	,copy: function(sphere) {
		this.center.copy(sphere.center);
		this.radius = sphere.radius;
		return this;
	}
	,empty: function() {
		return this.radius <= 0;
	}
	,containsPoint: function(point) {
		return point.distanceToSquared(this.center) <= this.radius * this.radius;
	}
	,distanceToPoint: function(point) {
		return point.distanceTo(this.center) - this.radius;
	}
	,intersectsSphere: function(sphere) {
		var radiusSum = this.radius + sphere.radius;
		return sphere.center.distanceToSquared(this.center) <= radiusSum * radiusSum;
	}
	,clampPoint: function(point,optionalTarget) {
		var deltaLengthSq = this.center.distanceToSquared(point);
		var result;
		if(optionalTarget != null) result = optionalTarget; else result = new lue_math_Vec4();
		result.copy(point);
		if(deltaLengthSq > this.radius * this.radius) {
			result.sub(this.center).normalize();
			result.multiplyScalar(this.radius).add(this.center);
		}
		return result;
	}
	,getBoundingBox: function(optionalTarget) {
		var box;
		if(optionalTarget != null) box = optionalTarget; else box = new lue_math_Box3();
		box.set(this.center,this.center);
		box.expandByScalar(this.radius);
		return box;
	}
	,applyMat4: function(matrix) {
		this.center.applyMat4(matrix);
		this.radius = this.radius * matrix.getMaxScaleOnAxis();
		return this;
	}
	,translate: function(offset) {
		this.center.add(offset);
		return this;
	}
	,equals: function(sphere) {
		return sphere.center.equals(this.center) && sphere.radius == this.radius;
	}
	,clone: function() {
		return new lue_math_Sphere().copy(this);
	}
	,__class__: lue_math_Sphere
};
var lue_node_Node = function() {
	this.traits = [];
	this.children = [];
	this.id = "";
	this.transform = new lue_node_Transform(this);
};
$hxClasses["lue.node.Node"] = lue_node_Node;
lue_node_Node.__name__ = ["lue","node","Node"];
lue_node_Node.prototype = {
	id: null
	,parent: null
	,children: null
	,traits: null
	,transform: null
	,addChild: function(o) {
		this.children.push(o);
		o.parent = this;
	}
	,removeChild: function(o) {
		while(o.children.length > 0) o.removeChild(o.children[0]);
		while(o.traits.length > 0) o.removeTrait(o.traits[0]);
		HxOverrides.remove(this.children,o);
		o.parent = null;
	}
	,getChild: function(id) {
		if(this.id == id) return this; else {
			var _g = 0;
			var _g1 = this.children;
			while(_g < _g1.length) {
				var c = _g1[_g];
				++_g;
				var r = c.getChild(id);
				if(r != null) return r;
			}
		}
		return null;
	}
	,render: function(g,context,camera,light,bindParams) {
		var _g = 0;
		var _g1 = this.children;
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			c.render(g,context,camera,light,bindParams);
		}
	}
	,addTrait: function(t) {
		this.traits.push(t);
		t.node = this;
		if(t._add != null) {
			t._add();
			t._add = null;
		}
	}
	,removeTrait: function(t) {
		if(t._init != null) lue_App.removeInit(t._init);
		if(t._update != null) lue_App.removeUpdate(t._update);
		if(t._render != null) lue_App.removeRender(t._render);
		if(t._render2D != null) lue_App.removeRender2D(t._render2D);
		if(t._remove != null) {
			t._remove();
			t._remove = null;
		}
		HxOverrides.remove(this.traits,t);
		t.node = null;
	}
	,getTrait: function(c) {
		var _g = 0;
		var _g1 = this.traits;
		while(_g < _g1.length) {
			var t = _g1[_g];
			++_g;
			if((t == null?null:js_Boot.getClass(t)) == c) return t;
		}
		return null;
	}
	,__class__: lue_node_Node
};
var lue_node_CameraNode = function(resource) {
	this.frustumPlanes = null;
	lue_node_Node.call(this);
	this.resource = resource;
	this.renderPipeline = new lue_node_RenderPipeline(this);
	if(resource.resource.type == "perspective") this.P = lue_math_Mat4.perspective(45,lue_App.w / lue_App.h,resource.resource.near_plane,resource.resource.far_plane); else if(resource.resource.type == "orthographic") this.P = lue_math_Mat4.orthogonal(-10,10,-6,6,-resource.resource.far_plane,resource.resource.far_plane,2);
	this.V = lue_math_Mat4.identity();
	this.VP = lue_math_Mat4.identity();
	if(resource.resource.frustum_culling) {
		this.frustumPlanes = [];
		var _g = 0;
		while(_g < 6) {
			var i = _g++;
			this.frustumPlanes.push(new lue_math_Plane());
		}
	}
	lue_node_RootNode.cameras.push(this);
};
$hxClasses["lue.node.CameraNode"] = lue_node_CameraNode;
lue_node_CameraNode.__name__ = ["lue","node","CameraNode"];
lue_node_CameraNode.__super__ = lue_node_Node;
lue_node_CameraNode.prototype = $extend(lue_node_Node.prototype,{
	resource: null
	,renderPipeline: null
	,P: null
	,V: null
	,VP: null
	,frustumPlanes: null
	,renderFrame: function(g,root,lights) {
		this.updateMatrix();
		this.renderPipeline.renderFrame(g,root,lights);
	}
	,updateMatrix: function() {
		var q = new lue_math_Quat();
		if(this.parent != null) {
			var rot = this.parent.transform.rot;
			q.set(rot.x,rot.y,rot.z,rot.w);
			q = q.inverse(q);
		}
		q.multiply(this.transform.rot,q);
		this.V = q.toMatrix();
		var trans = lue_math_Mat4.identity();
		trans.translate(-this.transform.matrix._30,-this.transform.matrix._31,-this.transform.matrix._32);
		this.V.multiply(trans,this.V);
		this.transform.buildMatrix();
		if(this.resource.resource.frustum_culling) this.buildViewFrustum();
	}
	,buildViewFrustum: function() {
		this.VP.setIdentity();
		this.VP.mult2(this.V);
		this.VP.mult2(this.P);
		this.frustumPlanes[0].setComponents(this.VP._03 + this.VP._00,this.VP._13 + this.VP._10,this.VP._23 + this.VP._20,this.VP._33 + this.VP._30);
		this.frustumPlanes[1].setComponents(this.VP._03 - this.VP._00,this.VP._13 - this.VP._10,this.VP._23 - this.VP._20,this.VP._33 - this.VP._30);
		this.frustumPlanes[2].setComponents(this.VP._03 - this.VP._01,this.VP._13 - this.VP._11,this.VP._23 - this.VP._21,this.VP._33 - this.VP._31);
		this.frustumPlanes[3].setComponents(this.VP._03 + this.VP._01,this.VP._13 + this.VP._11,this.VP._23 + this.VP._21,this.VP._33 + this.VP._31);
		this.frustumPlanes[4].setComponents(this.VP._02,this.VP._12,this.VP._22,this.VP._32);
		this.frustumPlanes[5].setComponents(this.VP._03 - this.VP._02,this.VP._13 - this.VP._12,this.VP._23 - this.VP._22,this.VP._33 - this.VP._32);
		var _g = 0;
		var _g1 = this.frustumPlanes;
		while(_g < _g1.length) {
			var plane = _g1[_g];
			++_g;
			plane.normalize();
		}
	}
	,sphereInFrustum: function(t,radius) {
		var _g = 0;
		var _g1 = this.frustumPlanes;
		while(_g < _g1.length) {
			var plane = _g1[_g];
			++_g;
			lue_node_CameraNode.sphere.set(t.pos,radius);
			if(plane.distanceToSphere(lue_node_CameraNode.sphere) + radius * 3 < 0) return false;
		}
		return true;
	}
	,rotate: function(axis,f) {
		var q = new lue_math_Quat();
		q.setFromAxisAngle(axis,f);
		this.transform.rot.multiply(this.transform.rot,q);
		this.updateMatrix();
	}
	,move: function(axis,f) {
		axis.mult(-f,axis);
		this.transform.pos.vadd(axis,this.transform.pos);
		this.transform.dirty = true;
		this.transform.update();
		this.updateMatrix();
	}
	,right: function() {
		return new lue_math_Vec4(this.V._00,this.V._10,this.V._20);
	}
	,look: function() {
		return new lue_math_Vec4(this.V._02,this.V._12,this.V._22);
	}
	,up: function() {
		return new lue_math_Vec4(this.V._01,this.V._11,this.V._21);
	}
	,__class__: lue_node_CameraNode
});
var lue_node_LightNode = function(resource) {
	this.V = null;
	this.P = null;
	lue_node_Node.call(this);
	this.P = lue_math_Mat4.orthogonal(-75,75,-75,75,-120,120,2);
	this.resource = resource;
	lue_node_RootNode.lights.push(this);
};
$hxClasses["lue.node.LightNode"] = lue_node_LightNode;
lue_node_LightNode.__name__ = ["lue","node","LightNode"];
lue_node_LightNode.__super__ = lue_node_Node;
lue_node_LightNode.prototype = $extend(lue_node_Node.prototype,{
	resource: null
	,P: null
	,V: null
	,buildMatrices: function() {
		this.transform.buildMatrix();
		this.V = lue_math_Mat4.lookAt(new lue_math_Vec4(this.transform.matrix._30,this.transform.matrix._31,this.transform.matrix._32),new lue_math_Vec4(0,0,0),new lue_math_Vec4(0,0,-1));
	}
	,__class__: lue_node_LightNode
});
var lue_node_ModelNode = function(resource,materials) {
	this.cachedContexts = new haxe_ds_StringMap();
	this.skinning = null;
	this.particleSystem = null;
	lue_node_Node.call(this);
	this.resource = resource;
	this.materials = materials;
	this.setTransformSize();
	lue_node_RootNode.models.push(this);
};
$hxClasses["lue.node.ModelNode"] = lue_node_ModelNode;
lue_node_ModelNode.__name__ = ["lue","node","ModelNode"];
lue_node_ModelNode.setConstants = function(g,context,node,camera,light,bindParams) {
	var _g1 = 0;
	var _g = context.resource.constants.length;
	while(_g1 < _g) {
		var i = _g1++;
		var c = context.resource.constants[i];
		lue_node_ModelNode.setConstant(g,node,camera,light,context.constants[i],c);
	}
	if(bindParams != null) {
		var _g11 = 0;
		var _g2 = bindParams.length / 2 | 0;
		while(_g11 < _g2) {
			var i1 = _g11++;
			var pos = i1 * 2;
			var rtID = bindParams[pos];
			var samplerID = bindParams[pos + 1];
			var rt = camera.resource.pipeline.renderTargets.get(rtID);
			var tus = context.resource.texture_units;
			var postfix = "";
			if(rt.additionalImages != null) postfix = "0";
			var _g3 = 0;
			var _g21 = tus.length;
			while(_g3 < _g21) {
				var j = _g3++;
				if(samplerID + postfix == tus[j].id) g.setTexture(context.textureUnits[j],rt.image);
			}
			if(rt.additionalImages != null) {
				var _g31 = 0;
				var _g22 = rt.additionalImages.length;
				while(_g31 < _g22) {
					var k = _g31++;
					var _g5 = 0;
					var _g4 = tus.length;
					while(_g5 < _g4) {
						var j1 = _g5++;
						if(samplerID + (k + 1) == tus[j1].id) g.setTexture(context.textureUnits[j1],js_Boot.__cast(rt.additionalImages[k] , kha_Image));
					}
				}
			}
		}
	}
};
lue_node_ModelNode.setConstant = function(g,node,camera,light,location,c) {
	if(c.link == null) return;
	if(c.type == "mat4") {
		var m = null;
		if(c.link == "_modelMatrix") m = node.transform.matrix; else if(c.link == "_normalMatrix") {
			lue_node_ModelNode.helpMat.setIdentity();
			lue_node_ModelNode.helpMat.mult2(node.transform.matrix);
			lue_node_ModelNode.helpMat.inverse2(lue_node_ModelNode.helpMat);
			lue_node_ModelNode.helpMat.transpose2();
			m = lue_node_ModelNode.helpMat;
		} else if(c.link == "_viewMatrix") m = camera.V; else if(c.link == "_inverseViewMatrix") {
			lue_node_ModelNode.helpMat.inverse2(camera.V);
			m = lue_node_ModelNode.helpMat;
		} else if(c.link == "_projectionMatrix") m = camera.P; else if(c.link == "_inverseProjectionMatrix") {
			lue_node_ModelNode.helpMat.inverse2(camera.P);
			m = lue_node_ModelNode.helpMat;
		} else if(c.link == "_modelViewProjectionMatrix") {
			lue_node_ModelNode.helpMat.setIdentity();
			lue_node_ModelNode.helpMat.mult2(node.transform.matrix);
			lue_node_ModelNode.helpMat.mult2(camera.V);
			lue_node_ModelNode.helpMat.mult2(camera.P);
			m = lue_node_ModelNode.helpMat;
		} else if(c.link == "_lightModelViewProjectionMatrix") {
			lue_node_ModelNode.helpMat.setIdentity();
			lue_node_ModelNode.helpMat.mult2(node.transform.matrix);
			lue_node_ModelNode.helpMat.mult2(light.V);
			lue_node_ModelNode.helpMat.mult2(light.P);
			m = lue_node_ModelNode.helpMat;
		}
		if(m == null) return;
		g.setMatrix(location,m);
	} else if(c.type == "vec3") {
		var v = null;
		if(c.link == "_lightPosition") {
			lue_node_ModelNode.helpVec.set(light.transform.matrix._30,light.transform.matrix._31,light.transform.matrix._32);
			v = lue_node_ModelNode.helpVec;
		} else if(c.link == "_cameraPosition") {
			lue_node_ModelNode.helpVec.set(camera.transform.matrix._30,camera.transform.matrix._31,camera.transform.matrix._32);
			v = lue_node_ModelNode.helpVec;
		}
		if(v == null) return;
		g.setFloat3(location,v.x,v.y,v.z);
	} else if(c.type == "float") {
		var f = 0.0;
		if(c.link == "_time") f = lue_sys_Time.get_total();
		g.setFloat(location,f);
	} else if(c.type == "floats") {
		var fa = null;
		if(c.link == "_skinBones") fa = (js_Boot.__cast(node , lue_node_ModelNode)).skinning.skinBuffer;
		g.setFloats(location,fa);
	}
};
lue_node_ModelNode.setMaterialConstants = function(g,context,materialContext) {
	var _g1 = 0;
	var _g = materialContext.resource.bind_constants.length;
	while(_g1 < _g) {
		var i = _g1++;
		var matc = materialContext.resource.bind_constants[i];
		var pos = -1;
		var _g3 = 0;
		var _g2 = context.resource.constants.length;
		while(_g3 < _g2) {
			var i1 = _g3++;
			if(context.resource.constants[i1].id == matc.id) {
				pos = i1;
				break;
			}
		}
		if(pos == -1) continue;
		var c = context.resource.constants[pos];
		lue_node_ModelNode.setMaterialConstant(g,context.constants[pos],c,matc);
	}
	if(materialContext.textures != null) {
		var _g11 = 0;
		var _g4 = materialContext.textures.length;
		while(_g11 < _g4) {
			var i2 = _g11++;
			var mid = materialContext.resource.bind_textures[i2].id;
			var _g31 = 0;
			var _g21 = context.textureUnits.length;
			while(_g31 < _g21) {
				var j = _g31++;
				var sid = context.resource.texture_units[j].id;
				if(mid == sid) {
					g.setTexture(context.textureUnits[j],materialContext.textures[i2]);
					materialContext.setTextureParameters(g,i2,context,j);
					break;
				}
			}
		}
	}
};
lue_node_ModelNode.setMaterialConstant = function(g,location,c,matc) {
	if(c.type == "vec4") g.setFloat4(location,matc.vec4[0],matc.vec4[1],matc.vec4[2],matc.vec4[3]); else if(c.type == "vec3") g.setFloat3(location,matc.vec3[0],matc.vec3[1],matc.vec3[2]); else if(c.type == "vec2") g.setFloat2(location,matc.vec2[0],matc.vec2[1]); else if(c.type == "float") g.setFloat(location,matc["float"]); else if(c.type == "bool") g.setBool(location,matc.bool);
};
lue_node_ModelNode.__super__ = lue_node_Node;
lue_node_ModelNode.prototype = $extend(lue_node_Node.prototype,{
	resource: null
	,materials: null
	,particleSystem: null
	,skinning: null
	,cachedContexts: null
	,setupAnimation: function(startTrack,names,starts,ends) {
		if(this.resource.isSkinned) {
			this.skinning = new lue_node_Skinning(this.resource);
			this.skinning.setupAnimation(startTrack,names,starts,ends);
		}
	}
	,setupParticleSystem: function(sceneName,pref) {
		this.particleSystem = new lue_node_ParticleSystem(this,sceneName,pref);
	}
	,setAnimationParams: function(delta) {
		this.skinning.setAnimationParams(delta);
	}
	,render: function(g,context,camera,light,bindParams) {
		lue_node_Node.prototype.render.call(this,g,context,camera,light,bindParams);
		if(camera.resource.resource.frustum_culling && !camera.sphereInFrustum(this.transform,this.resource.geometry.radius)) return;
		if(this.particleSystem != null) this.particleSystem.update();
		var cc = this.cachedContexts.get(context);
		if(cc == null) {
			cc = new lue_node_CachedModelContext();
			cc.materialContexts = [];
			var _g = 0;
			var _g1 = this.materials;
			while(_g < _g1.length) {
				var mat = _g1[_g];
				++_g;
				var _g3 = 0;
				var _g2 = mat.resource.contexts.length;
				while(_g3 < _g2) {
					var i = _g3++;
					if(mat.resource.contexts[i].id == context) {
						cc.materialContexts.push(mat.contexts[i]);
						break;
					}
				}
			}
			cc.context = this.materials[0].shader.getContext(context);
			this.cachedContexts.set(context,cc);
		}
		var materialContexts = cc.materialContexts;
		var shaderContext = cc.context;
		this.transform.update();
		g.setPipeline(shaderContext.pipeState);
		if(this.resource.geometry.instanced) g.setVertexBuffers(this.resource.geometry.instancedVertexBuffers); else g.setVertexBuffer(this.resource.geometry.vertexBuffer);
		lue_node_ModelNode.setConstants(g,shaderContext,this,camera,light,bindParams);
		var _g11 = 0;
		var _g4 = this.resource.geometry.indexBuffers.length;
		while(_g11 < _g4) {
			var i1 = _g11++;
			var mi = this.resource.geometry.materialIndices[i1];
			if(materialContexts.length > mi) lue_node_ModelNode.setMaterialConstants(g,shaderContext,materialContexts[mi]);
			g.setIndexBuffer(this.resource.geometry.indexBuffers[i1]);
			if(this.resource.geometry.instanced) g.drawIndexedVerticesInstanced(this.resource.geometry.instanceCount); else g.drawIndexedVertices();
		}
	}
	,setTransformSize: function() {
		this.transform.size.x = this.resource.geometry.size.x * this.transform.scale.x;
		this.transform.size.y = this.resource.geometry.size.y * this.transform.scale.y;
		this.transform.size.z = this.resource.geometry.size.z * this.transform.scale.z;
	}
	,__class__: lue_node_ModelNode
});
var lue_node_CachedModelContext = function() {
};
$hxClasses["lue.node.CachedModelContext"] = lue_node_CachedModelContext;
lue_node_CachedModelContext.__name__ = ["lue","node","CachedModelContext"];
lue_node_CachedModelContext.prototype = {
	materialContexts: null
	,context: null
	,__class__: lue_node_CachedModelContext
};
var lue_node_ParticleSystem = function(node,sceneName,pref) {
	this.node = node;
	this.id = pref.id;
	this.resource = lue_resource_Resource.getParticle(sceneName,pref.particle);
	this.seed = pref.seed;
	this.particles = [];
	var r = this.resource.resource;
	var _g1 = 0;
	var _g = r.count;
	while(_g1 < _g) {
		var i = _g1++;
		var p = new lue_node_Particle();
		this.particles.push(p);
		p.offset = new lue_math_Vec4(0.0,0.0,0.0);
		p.velocity = new lue_math_Vec4(0.0,0.0,0.0);
		this.setVelocity(p.velocity);
		p.lifetime = Std.random(r.lifetime * 1000 | 0) / 1000;
	}
	var instancedData = [];
	var _g2 = 0;
	var _g11 = this.particles;
	while(_g2 < _g11.length) {
		var p1 = _g11[_g2];
		++_g2;
		instancedData.push(p1.offset.x);
		instancedData.push(p1.offset.y);
		instancedData.push(p1.offset.z);
	}
	node.resource.setupInstancedGeometry(instancedData,kha_graphics4_Usage.DynamicUsage);
};
$hxClasses["lue.node.ParticleSystem"] = lue_node_ParticleSystem;
lue_node_ParticleSystem.__name__ = ["lue","node","ParticleSystem"];
lue_node_ParticleSystem.prototype = {
	id: null
	,resource: null
	,seed: null
	,node: null
	,particles: null
	,update: function() {
		var _g = 0;
		var _g1 = this.particles;
		while(_g < _g1.length) {
			var p = _g1[_g];
			++_g;
			p.lifetime += lue_sys_Time.delta;
			if(p.lifetime > this.resource.resource.lifetime) {
				p.lifetime = 0;
				this.setVelocity(p.velocity);
			}
			p.offset.x = p.lifetime * p.velocity.x;
			p.offset.y = p.lifetime * p.velocity.y;
			p.offset.z = p.lifetime * p.velocity.z;
		}
		this.sort();
		var vb = this.node.resource.geometry.instancedVertexBuffers[1];
		var instancedData = vb.lock();
		var _g11 = 0;
		var _g2 = this.particles.length;
		while(_g11 < _g2) {
			var i = _g11++;
			var p1 = this.particles[i];
			instancedData[i * 3] = p1.offset.x;
			instancedData[i * 3 + 1] = p1.offset.y;
			instancedData[i * 3 + 2] = p1.offset.z;
		}
		vb.unlock();
	}
	,setVelocity: function(v) {
		var r = this.resource.resource;
		v.set(r.object_align_factor[0],r.object_align_factor[1],r.object_align_factor[2]);
		if(r.factor_random != 0) {
			v.x += Std.random(r.factor_random * 1000 | 0) / 1000 - r.factor_random / 2;
			v.y += Std.random(r.factor_random * 1000 | 0) / 1000 - r.factor_random / 2;
			v.z += Std.random(r.factor_random * 1000 | 0) / 1000 - r.factor_random / 2;
		}
	}
	,sort: function() {
		var camera = lue_node_RootNode.cameras[0];
		var _g = 0;
		var _g1 = this.particles;
		while(_g < _g1.length) {
			var p = _g1[_g];
			++_g;
			p.cameraDistance = lue_math_Math.distance3d(p.offset,camera.transform.pos);
		}
		this.particles.sort(function(p1,p2) {
			if(p1.cameraDistance > p2.cameraDistance) return -1;
			if(p1.cameraDistance < p2.cameraDistance) return 1;
			return 0;
		});
	}
	,__class__: lue_node_ParticleSystem
};
var lue_node_Particle = function() {
};
$hxClasses["lue.node.Particle"] = lue_node_Particle;
lue_node_Particle.__name__ = ["lue","node","Particle"];
lue_node_Particle.prototype = {
	offset: null
	,velocity: null
	,lifetime: null
	,cameraDistance: null
	,__class__: lue_node_Particle
};
var lue_node_RenderPipeline = function(camera) {
	this.cachedQuadContexts = new haxe_ds_StringMap();
	this.camera = camera;
	this.resource = camera.resource;
	this.cacheStageCommands();
	this.clearColor = kha__$Color_Color_$Impl_$.fromFloats(this.resource.resource.clear_color[0],this.resource.resource.clear_color[1],this.resource.resource.clear_color[2],this.resource.resource.clear_color[3]);
	if(lue_node_RenderPipeline.screenAlignedVB == null) lue_node_RenderPipeline.createScreenAlignedData();
};
$hxClasses["lue.node.RenderPipeline"] = lue_node_RenderPipeline;
lue_node_RenderPipeline.__name__ = ["lue","node","RenderPipeline"];
lue_node_RenderPipeline.createScreenAlignedData = function() {
	var data = [-1.0,-1.0,1.0,-1.0,1.0,1.0,-1.0,1.0];
	var indices = [0,1,2,0,2,3];
	lue_node_RenderPipeline.screenAlignedVB = new kha_graphics4_VertexBuffer(Std["int"](data.length / lue_resource_ShaderResource.getScreenAlignedQuadStructureLength()),lue_resource_ShaderResource.createScreenAlignedQuadStructure(),kha_graphics4_Usage.StaticUsage);
	var vertices = lue_node_RenderPipeline.screenAlignedVB.lock();
	var _g1 = 0;
	var _g = vertices.length;
	while(_g1 < _g) {
		var i = _g1++;
		vertices[i] = data[i];
	}
	lue_node_RenderPipeline.screenAlignedVB.unlock();
	lue_node_RenderPipeline.screenAlignedIB = new kha_graphics4_IndexBuffer(indices.length,kha_graphics4_Usage.StaticUsage);
	var id = lue_node_RenderPipeline.screenAlignedIB.lock();
	var _g11 = 0;
	var _g2 = id.length;
	while(_g11 < _g2) {
		var i1 = _g11++;
		id[i1] = indices[i1];
	}
	lue_node_RenderPipeline.screenAlignedIB.unlock();
};
lue_node_RenderPipeline.prototype = {
	camera: null
	,resource: null
	,clearColor: null
	,frameRenderTarget: null
	,currentRenderTarget: null
	,bindParams: null
	,stageCommands: null
	,stageParams: null
	,cachedQuadContexts: null
	,renderFrame: function(g,root,lights) {
		this.frameRenderTarget = g;
		this.currentRenderTarget = g;
		var light = lights[0];
		light.buildMatrices();
		var _g1 = 0;
		var _g = this.stageCommands.length;
		while(_g1 < _g) {
			var i = _g1++;
			this.stageCommands[i](this.stageParams[i],root,light);
		}
	}
	,setTarget: function(params,root,light) {
		var target = params[0];
		if(target == "") {
			this.currentRenderTarget = this.frameRenderTarget;
			this.currentRenderTarget.begin(null);
		} else {
			var rt = this.resource.pipeline.renderTargets.get(target);
			this.currentRenderTarget = rt.image.get_g4();
			this.currentRenderTarget.begin(rt.additionalImages);
		}
		this.bindParams = null;
	}
	,clearTarget: function(params,root,light) {
		this.currentRenderTarget.clear(this.clearColor,1,null);
	}
	,drawGeometry: function(params,root,light) {
		var context = params[0];
		var g = this.currentRenderTarget;
		root.render(g,context,this.camera,light,this.bindParams);
		g.end();
	}
	,bindTarget: function(params,root,light) {
		this.bindParams = params;
	}
	,drawQuad: function(params,root,light) {
		var handle = params[0];
		var cc = this.cachedQuadContexts.get(handle);
		if(cc == null) {
			var matPath = handle.split("/");
			var res = lue_resource_Resource.getMaterial(matPath[0],matPath[1]);
			cc = new lue_node_CachedQuadContext();
			cc.materialContext = res.getContext(matPath[2]);
			cc.context = res.shader.getContext(matPath[2]);
			this.cachedQuadContexts.set(handle,cc);
		}
		var materialContext = cc.materialContext;
		var context = cc.context;
		var g = this.currentRenderTarget;
		g.setPipeline(context.pipeState);
		lue_node_ModelNode.setConstants(g,context,null,this.camera,light,this.bindParams);
		lue_node_ModelNode.setMaterialConstants(g,context,materialContext);
		g.setVertexBuffer(lue_node_RenderPipeline.screenAlignedVB);
		g.setIndexBuffer(lue_node_RenderPipeline.screenAlignedIB);
		g.drawIndexedVertices();
		g.end();
	}
	,begin: function(g,additionalRenderTargets) {
		g.begin(additionalRenderTargets);
	}
	,end: function(g) {
		g.end();
	}
	,cacheStageCommands: function() {
		this.stageCommands = [];
		this.stageParams = [];
		var _g = 0;
		var _g1 = this.resource.pipeline.resource.stages;
		while(_g < _g1.length) {
			var stage = _g1[_g];
			++_g;
			this.stageParams.push(stage.params);
			if(stage.command == "set_target") this.stageCommands.push($bind(this,this.setTarget)); else if(stage.command == "clear_target") this.stageCommands.push($bind(this,this.clearTarget)); else if(stage.command == "draw_geometry") this.stageCommands.push($bind(this,this.drawGeometry)); else if(stage.command == "bind_target") this.stageCommands.push($bind(this,this.bindTarget)); else if(stage.command == "draw_quad") this.stageCommands.push($bind(this,this.drawQuad));
		}
	}
	,__class__: lue_node_RenderPipeline
};
var lue_node_CachedQuadContext = function() {
};
$hxClasses["lue.node.CachedQuadContext"] = lue_node_CachedQuadContext;
lue_node_CachedQuadContext.__name__ = ["lue","node","CachedQuadContext"];
lue_node_CachedQuadContext.prototype = {
	materialContext: null
	,context: null
	,__class__: lue_node_CachedQuadContext
};
var lue_node_RootNode = function() {
	lue_node_Node.call(this);
};
$hxClasses["lue.node.RootNode"] = lue_node_RootNode;
lue_node_RootNode.__name__ = ["lue","node","RootNode"];
lue_node_RootNode.reset = function() {
	lue_node_RootNode.models = [];
	lue_node_RootNode.lights = [];
	lue_node_RootNode.cameras = [];
	lue_node_RootNode.speakers = [];
};
lue_node_RootNode.addScene = function(name,parent) {
	var resource = lue_resource_Resource.getSceneResource(name);
	lue_node_RootNode.traverseNodes(resource,name,parent,resource.nodes,null);
	return parent;
};
lue_node_RootNode.traverseNodes = function(resource,name,parent,nodes,parentNode) {
	var _g = 0;
	while(_g < nodes.length) {
		var n = nodes[_g];
		++_g;
		if(n.visible != null && n.visible == false) continue;
		var node = lue_node_RootNode.createNode(n,resource,name,parent,parentNode);
		if(node != null) lue_node_RootNode.traverseNodes(resource,name,node,n.nodes,n);
	}
};
lue_node_RootNode.parseNode = function(sceneName,nodeName,parent) {
	var resource = lue_resource_Resource.getSceneResource(sceneName);
	var n = null;
	var _g = 0;
	var _g1 = resource.nodes;
	while(_g < _g1.length) {
		var node = _g1[_g];
		++_g;
		if(node.id == nodeName) {
			n = node;
			break;
		}
	}
	if(n == null) return null;
	return lue_node_RootNode.createNode(n,resource,sceneName,parent,null);
};
lue_node_RootNode.createNode = function(n,resource,name,parent,parentNode) {
	var node = null;
	if(n.type == "camera_node") node = lue_Eg.addCameraNode(lue_resource_Resource.getCamera(name,n.object_ref),parent); else if(n.type == "light_node") node = lue_Eg.addLightNode(lue_resource_Resource.getLight(name,n.object_ref),parent); else if(n.type == "geometry_node") {
		if(n.material_refs.length == 0) return null;
		var materials = [];
		var _g = 0;
		var _g1 = n.material_refs;
		while(_g < _g1.length) {
			var ref1 = _g1[_g];
			++_g;
			materials.push(lue_resource_Resource.getMaterial(name,ref1));
		}
		var ref = n.object_ref.split("/");
		var object_file = "";
		var object_ref = "";
		if(ref.length == 2) {
			object_file = ref[0];
			object_ref = ref[1];
		} else {
			object_file = name;
			object_ref = n.object_ref;
		}
		var boneNodes = null;
		if(parentNode != null && parentNode.bones_ref != null) boneNodes = lue_resource_Resource.getSceneResource(parentNode.bones_ref).nodes;
		node = lue_Eg.addModelNode(lue_resource_Resource.getModel(object_file,object_ref,boneNodes),materials,parent);
		if(n.particle_refs != null && n.particle_refs.length > 0) (js_Boot.__cast(node , lue_node_ModelNode)).setupParticleSystem(name,n.particle_refs[0]);
	} else if(n.type == "speaker_node") node = lue_Eg.addSpeakerNode(lue_resource_Resource.getSpeakerResourceById(resource.speaker_resources,n.object_ref),parent); else if(n.type == "node") node = lue_Eg.addNode(parent);
	if(node != null) {
		node.id = n.id;
		lue_node_RootNode.createTraits(n,node);
		lue_node_RootNode.generateTranform(n,node.transform);
		node.transform.buildMatrix();
	}
	return node;
};
lue_node_RootNode.generateTranform = function(node,transform) {
	var mat = lue_math_Mat4.fromArray(node.transform.values);
	mat.decompose(transform.pos,transform.rot,transform.scale);
	if(node.type == "camera_node") transform.rot.inverse(transform.rot);
};
lue_node_RootNode.createTraits = function(n,node) {
	var _g = 0;
	var _g1 = n.traits;
	while(_g < _g1.length) {
		var t = _g1[_g];
		++_g;
		if(t.type == "Script") {
			var args = [];
			if(t.parameters != null) args = t.parameters;
			lue_Eg.addNodeTrait(node,lue_node_RootNode.createTraitClassInstance(t.class_name,args));
		}
	}
};
lue_node_RootNode.createTraitClassInstance = function(traitName,args) {
	var cname = Type.resolveClass("game" + "." + traitName);
	if(cname == null) cname = Type.resolveClass("game" + ".node." + traitName);
	if(cname == null) cname = Type.resolveClass("lue.trait." + traitName);
	if(cname == null) cname = Type.resolveClass("cycles.trait." + traitName);
	return Type.createInstance(cname,args);
};
lue_node_RootNode.__super__ = lue_node_Node;
lue_node_RootNode.prototype = $extend(lue_node_Node.prototype,{
	__class__: lue_node_RootNode
});
var lue_node_Skinning = function(resource) {
	this.nor = new lue_math_Vec4();
	this.pos = new lue_math_Vec4();
	this.bm = lue_math_Mat4.identity();
	this.m = lue_math_Mat4.identity();
	this.boneTimeIndices = new haxe_ds_ObjectMap();
	this.boneMats = new haxe_ds_ObjectMap();
	this.animation = null;
	this.resource = resource;
};
$hxClasses["lue.node.Skinning"] = lue_node_Skinning;
lue_node_Skinning.__name__ = ["lue","node","Skinning"];
lue_node_Skinning.prototype = {
	resource: null
	,skinBuffer: null
	,animation: null
	,boneMats: null
	,boneTimeIndices: null
	,m: null
	,bm: null
	,pos: null
	,nor: null
	,setupAnimation: function(startTrack,names,starts,ends) {
		this.animation = new lue_node_Animation(startTrack,names,starts,ends);
		var this1;
		this1 = new Array(600);
		this.skinBuffer = this1;
		var _g1 = 0;
		var _g = this.skinBuffer.length;
		while(_g1 < _g) {
			var i = _g1++;
			this.skinBuffer[i] = 0;
		}
		var _g2 = 0;
		var _g11 = this.resource.geometry.skeletonBones;
		while(_g2 < _g11.length) {
			var b = _g11[_g2];
			++_g2;
			var value = lue_math_Mat4.fromArray(b.transform.values);
			this.boneMats.set(b,value);
			this.boneTimeIndices.set(b,0);
		}
	}
	,setAnimationParams: function(delta) {
		if(this.resource.isSkinned) {
			if(this.animation.paused) return;
			this.animation.animTime += delta * this.animation.speed;
			this.updateAnim();
			this.updateSkin();
		}
	}
	,updateAnim: function() {
		var _g = 0;
		var _g1 = this.resource.geometry.skeletonBones;
		while(_g < _g1.length) {
			var b = _g1[_g];
			++_g;
			var boneAnim = b.animation;
			if(boneAnim != null) {
				var track = boneAnim.track;
				if(this.animation.dirty) {
					this.animation.dirty = false;
					if(this.animation.current.frames == 0) {
						this.animation.paused = true;
						this.setAnimFrame(this.animation.current.start);
						return;
					} else {
						this.animation.timeIndex = this.animation.current.start;
						this.animation.animTime = track.time.values[this.animation.timeIndex];
					}
				}
				while(track.time.values.length > this.animation.timeIndex + 1 && this.animation.animTime > track.time.values[this.animation.timeIndex + 1]) this.animation.timeIndex++;
				if(this.animation.timeIndex >= track.time.values.length - 1 || this.animation.timeIndex >= this.animation.current.end) {
					if(this.animation.loop) this.animation.dirty = true; else this.animation.paused = true;
					if(this.animation.onTrackComplete != null) this.animation.onTrackComplete();
					return;
				}
				var t1 = track.time.values[this.animation.timeIndex];
				var t2 = track.time.values[this.animation.timeIndex + 1];
				var s = (this.animation.animTime - t1) / (t2 - t1);
				var v1 = track.value.values[this.animation.timeIndex];
				var v2 = track.value.values[this.animation.timeIndex + 1];
				var m1 = lue_math_Mat4.fromArray(v1);
				var m2 = lue_math_Mat4.fromArray(v2);
				var p1 = new lue_math_Vec4(m1._30,m1._31,m1._32,m1._33);
				var p2 = new lue_math_Vec4(m2._30,m2._31,m2._32,m2._33);
				var s1 = m1.scaleV();
				var s2 = m2.scaleV();
				var q1 = m1.getQuat();
				var q2 = m2.getQuat();
				var fp = lue_math_Vec4.lerp(p1,p2,s);
				var fs = lue_math_Vec4.lerp(s1,s2,s);
				var fq = lue_math_Quat.lerp(q1,q2,s);
				var m = this.boneMats.h[b.__id__];
				fq.saveToMatrix(m);
				m.scale(fs);
				m._30 = fp.x;
				m._31 = fp.y;
				m._32 = fp.z;
				this.boneMats.set(b,m);
			}
		}
	}
	,setAnimFrame: function(frame) {
		var _g = 0;
		var _g1 = this.resource.geometry.skeletonBones;
		while(_g < _g1.length) {
			var b = _g1[_g];
			++_g;
			var boneAnim = b.animation;
			if(boneAnim != null) {
				var track = boneAnim.track;
				var v1 = track.value.values[frame];
				var m1 = lue_math_Mat4.fromArray(v1);
				this.boneMats.set(b,m1);
			}
		}
		this.updateSkin();
	}
	,updateSkin: function() {
		this.updateSkinGpu();
	}
	,updateSkinGpu: function() {
		var bones = this.resource.geometry.skeletonBones;
		var _g1 = 0;
		var _g = bones.length;
		while(_g1 < _g) {
			var i = _g1++;
			this.bm.loadFrom(this.resource.geometry.skinTransform);
			this.bm.mult2(this.resource.geometry.skeletonTransformsI[i]);
			var m = lue_math_Mat4.identity();
			m.loadFrom(this.boneMats.h[bones[i].__id__]);
			var p = bones[i].parent;
			while(p != null) {
				var pm = this.boneMats.h[p.__id__];
				if(pm == null) pm = lue_math_Mat4.fromArray(p.transform.values);
				m.mult2(pm);
				p = p.parent;
			}
			this.bm.mult2(m);
			this.bm.transpose2();
			this.skinBuffer[i * 12] = this.bm._00;
			this.skinBuffer[i * 12 + 1] = this.bm._01;
			this.skinBuffer[i * 12 + 2] = this.bm._02;
			this.skinBuffer[i * 12 + 3] = this.bm._03;
			this.skinBuffer[i * 12 + 4] = this.bm._10;
			this.skinBuffer[i * 12 + 5] = this.bm._11;
			this.skinBuffer[i * 12 + 6] = this.bm._12;
			this.skinBuffer[i * 12 + 7] = this.bm._13;
			this.skinBuffer[i * 12 + 8] = this.bm._20;
			this.skinBuffer[i * 12 + 9] = this.bm._21;
			this.skinBuffer[i * 12 + 10] = this.bm._22;
			this.skinBuffer[i * 12 + 11] = this.bm._23;
		}
	}
	,updateSkinCpu: function() {
		var v = this.resource.geometry.vertexBuffer.lock();
		var l = this.resource.geometry.structureLength;
		var index = 0;
		var _g1 = 0;
		var _g = v.length / l | 0;
		while(_g1 < _g) {
			var i = _g1++;
			var boneCount = this.resource.geometry.skinBoneCounts[i];
			var boneIndices = [];
			var boneWeights = [];
			var _g3 = index;
			var _g2 = index + boneCount;
			while(_g3 < _g2) {
				var j = _g3++;
				boneIndices.push(this.resource.geometry.skinBoneIndices[j]);
				boneWeights.push(this.resource.geometry.skinBoneWeights[j]);
			}
			index += boneCount;
			this.pos.set(0,0,0);
			this.nor.set(0,0,0);
			var _g21 = 0;
			while(_g21 < boneCount) {
				var j1 = _g21++;
				var boneIndex = boneIndices[j1];
				var boneWeight = boneWeights[j1];
				var bone = this.resource.geometry.skeletonBones[boneIndex];
				this.m.initTranslate(this.resource.geometry.positions[i * 3],this.resource.geometry.positions[i * 3 + 1],this.resource.geometry.positions[i * 3 + 2]);
				this.m.mult2(this.resource.geometry.skinTransform);
				this.m.mult2(this.resource.geometry.skeletonTransformsI[boneIndex]);
				this.bm.loadFrom(this.boneMats.h[bone.__id__]);
				var p = bone.parent;
				while(p != null) {
					var pm = this.boneMats.h[p.__id__];
					if(pm == null) pm = lue_math_Mat4.fromArray(p.transform.values);
					this.bm.mult2(pm);
					p = p.parent;
				}
				this.m.mult2(this.bm);
				this.m.multiplyScalar(boneWeight);
				this.pos.add(this.m.pos(null));
				this.m.getInverse(this.bm);
				this.m.mult2(this.resource.geometry.skeletonTransforms[boneIndex]);
				this.m.mult2(this.resource.geometry.skinTransformI);
				this.m.translate(this.resource.geometry.normals[i * 3],this.resource.geometry.normals[i * 3 + 1],this.resource.geometry.normals[i * 3 + 2]);
				this.m.multiplyScalar(boneWeight);
				this.nor.add(this.m.pos(null));
			}
			v[i * l] = this.pos.x;
			v[i * l + 1] = this.pos.y;
			v[i * l + 2] = this.pos.z;
			v[i * l + 3] = this.nor.x;
			v[i * l + 4] = this.nor.y;
			v[i * l + 5] = this.nor.z;
		}
		this.resource.geometry.vertexBuffer.unlock();
	}
	,__class__: lue_node_Skinning
};
var lue_node_Animation = function(startTrack,names,starts,ends) {
	this.paused = false;
	this.onTrackComplete = null;
	this.speed = 1.0;
	this.tracks = new haxe_ds_StringMap();
	this.dirty = false;
	this.timeIndex = 0;
	this.animTime = 0;
	var _g1 = 0;
	var _g = names.length;
	while(_g1 < _g) {
		var i = _g1++;
		this.addTrack(names[i],starts[i],ends[i]);
	}
	this.play(startTrack);
};
$hxClasses["lue.node.Animation"] = lue_node_Animation;
lue_node_Animation.__name__ = ["lue","node","Animation"];
lue_node_Animation.prototype = {
	animTime: null
	,timeIndex: null
	,dirty: null
	,current: null
	,tracks: null
	,speed: null
	,loop: null
	,onTrackComplete: null
	,paused: null
	,play: function(name,loop,speed,onTrackComplete) {
		if(speed == null) speed = 1.0;
		if(loop == null) loop = true;
		this.current = this.tracks.get(name);
		this.dirty = true;
		this.speed = speed;
		this.loop = loop;
		this.onTrackComplete = onTrackComplete;
		this.paused = false;
	}
	,pause: function() {
		this.paused = true;
	}
	,addTrack: function(name,start,end) {
		var t = new lue_node_Track(start,end);
		this.tracks.set(name,t);
	}
	,__class__: lue_node_Animation
};
var lue_node_Track = function(start,end) {
	this.start = start;
	this.end = end;
	this.frames = end - start;
};
$hxClasses["lue.node.Track"] = lue_node_Track;
lue_node_Track.__name__ = ["lue","node","Track"];
lue_node_Track.prototype = {
	start: null
	,end: null
	,frames: null
	,__class__: lue_node_Track
};
var lue_node_SpeakerNode = function(resource) {
	lue_node_Node.call(this);
	this.resource = resource;
	lue_node_RootNode.speakers.push(this);
	lue_sys_Audio.playSound(Reflect.field(kha_Assets.sounds,resource.sound));
};
$hxClasses["lue.node.SpeakerNode"] = lue_node_SpeakerNode;
lue_node_SpeakerNode.__name__ = ["lue","node","SpeakerNode"];
lue_node_SpeakerNode.__super__ = lue_node_Node;
lue_node_SpeakerNode.prototype = $extend(lue_node_Node.prototype,{
	resource: null
	,__class__: lue_node_SpeakerNode
});
var lue_node_Transform = function(node) {
	this.append = null;
	this.node = node;
	this.reset();
};
$hxClasses["lue.node.Transform"] = lue_node_Transform;
lue_node_Transform.__name__ = ["lue","node","Transform"];
lue_node_Transform.prototype = {
	matrix: null
	,append: null
	,dirty: null
	,pos: null
	,rot: null
	,scale: null
	,size: null
	,node: null
	,reset: function() {
		this.matrix = lue_math_Mat4.identity();
		this.pos = new lue_math_Vec4();
		this.rot = new lue_math_Quat();
		this.scale = new lue_math_Vec4(1,1,1);
		this.size = new lue_math_Vec4();
		this.dirty = true;
	}
	,update: function() {
		if(this.dirty) {
			this.dirty = false;
			this.buildMatrix();
		}
	}
	,buildMatrix: function() {
		this.matrix.compose(this.pos,this.rot,this.scale);
		if(this.append != null) this.matrix.mult2(this.append);
		if(this.node.parent != null) this.matrix.multiply3x4(this.matrix,this.node.parent.transform.matrix);
		var _g = 0;
		var _g1 = this.node.children;
		while(_g < _g1.length) {
			var n = _g1[_g];
			++_g;
			n.transform.buildMatrix();
		}
	}
	,set: function(x,y,z,rX,rY,rZ,sX,sY,sZ) {
		if(sZ == null) sZ = 1;
		if(sY == null) sY = 1;
		if(sX == null) sX = 1;
		if(rZ == null) rZ = 0;
		if(rY == null) rY = 0;
		if(rX == null) rX = 0;
		if(z == null) z = 0;
		if(y == null) y = 0;
		if(x == null) x = 0;
		this.pos.set(x,y,z);
		this.setRotation(rX,rY,rZ);
		this.scale.set(sX,sY,sZ);
		this.buildMatrix();
	}
	,setMatrix: function(mat) {
		this.matrix = mat;
		this.pos = this.matrix.pos(null);
		this.scale = this.matrix.scaleV();
		this.rot = this.matrix.getQuat();
	}
	,rotate: function(axis,f) {
		var q = new lue_math_Quat();
		q.setFromAxisAngle(axis,f);
		this.rot.multiply(this.rot,q);
		this.dirty = true;
	}
	,setRotation: function(x,y,z) {
		this.rot.setFromEuler(x,y,z,"ZXY");
		this.dirty = true;
	}
	,getEuler: function() {
		var v = new lue_math_Vec4();
		this.rot.toEuler(v);
		return v;
	}
	,setEuler: function(v) {
		this.rot.setFromEuler(v.x,v.y,v.z,"YZX");
		this.dirty = true;
	}
	,getForward: function() {
		var mat = lue_math_Mat4.identity();
		this.rot.saveToMatrix(mat);
		var f = new lue_math_Vec4(0,1,0);
		f.applyProjection(mat);
		f = f.mult(lue_sys_Time.delta * 200);
		return f;
	}
	,getBackward: function() {
		var mat = lue_math_Mat4.identity();
		this.rot.saveToMatrix(mat);
		var f = new lue_math_Vec4(0,-1,0);
		f.applyProjection(mat);
		f = f.mult(lue_sys_Time.delta * 200);
		return f;
	}
	,getRight: function() {
		var mat = lue_math_Mat4.identity();
		this.rot.saveToMatrix(mat);
		var f = new lue_math_Vec4(1,0,0);
		f.applyProjection(mat);
		f = f.mult(lue_sys_Time.delta * 200);
		return f;
	}
	,getLeft: function() {
		var mat = lue_math_Mat4.identity();
		this.rot.saveToMatrix(mat);
		var f = new lue_math_Vec4(-1,0,0);
		f.applyProjection(mat);
		f = f.mult(lue_sys_Time.delta * 200);
		return f;
	}
	,getUp: function() {
		var mat = lue_math_Mat4.identity();
		this.rot.saveToMatrix(mat);
		var f = new lue_math_Vec4(0,0,1);
		f.applyProjection(mat);
		f = f.mult(lue_sys_Time.delta * 200);
		return f;
	}
	,getDown: function() {
		var mat = lue_math_Mat4.identity();
		this.rot.saveToMatrix(mat);
		var f = new lue_math_Vec4(0,0,-1);
		f.applyProjection(mat);
		f = f.mult(lue_sys_Time.delta * 200);
		return f;
	}
	,absx: function() {
		return this.matrix._30;
	}
	,absy: function() {
		return this.matrix._31;
	}
	,absz: function() {
		return this.matrix._32;
	}
	,__class__: lue_node_Transform
};
var lue_resource_Resource = function() {
};
$hxClasses["lue.resource.Resource"] = lue_resource_Resource;
lue_resource_Resource.__name__ = ["lue","resource","Resource"];
lue_resource_Resource.getModel = function(name,id,boneNodes) {
	var cached = lue_resource_Resource.cachedModels.get(name + id);
	if(cached == null) {
		var parsed = lue_resource_ModelResource.parse(name,id,boneNodes);
		lue_resource_Resource.cachedModels.set(name + id,parsed);
		return parsed;
	} else return cached;
};
lue_resource_Resource.getLight = function(name,id) {
	var cached = lue_resource_Resource.cachedLights.get(name + id);
	if(cached == null) {
		var parsed = lue_resource_LightResource.parse(name,id);
		lue_resource_Resource.cachedLights.set(name + id,parsed);
		return parsed;
	} else return cached;
};
lue_resource_Resource.getCamera = function(name,id) {
	var cached = lue_resource_Resource.cachedCameras.get(name + id);
	if(cached == null) {
		var parsed = lue_resource_CameraResource.parse(name,id);
		lue_resource_Resource.cachedCameras.set(name + id,parsed);
		return parsed;
	} else return cached;
};
lue_resource_Resource.getPipeline = function(name,id) {
	var cached = lue_resource_Resource.cachedPipelines.get(name + id);
	if(cached == null) {
		var parsed = lue_resource_PipelineResource.parse(name,id);
		lue_resource_Resource.cachedPipelines.set(name + id,parsed);
		return parsed;
	} else return cached;
};
lue_resource_Resource.getMaterial = function(name,id) {
	var cached = lue_resource_Resource.cachedMaterials.get(name + id);
	if(cached == null) {
		var parsed = lue_resource_MaterialResource.parse(name,id);
		lue_resource_Resource.cachedMaterials.set(name + id,parsed);
		return parsed;
	} else return cached;
};
lue_resource_Resource.getParticle = function(name,id) {
	var cached = lue_resource_Resource.cachedParticles.get(name + id);
	if(cached == null) {
		var parsed = lue_resource_ParticleResource.parse(name,id);
		lue_resource_Resource.cachedParticles.set(name + id,parsed);
		return parsed;
	} else return cached;
};
lue_resource_Resource.getShader = function(name,id) {
	var cached = lue_resource_Resource.cachedShaders.get(id);
	if(cached == null) {
		var parsed = lue_resource_ShaderResource.parse(name,id);
		lue_resource_Resource.cachedShaders.set(id,parsed);
		return parsed;
	} else return cached;
};
lue_resource_Resource.getSceneResource = function(name) {
	var cached = lue_resource_Resource.cachedScenes.get(name);
	if(cached == null) {
		var data = Reflect.field(kha_Assets.blobs,name + "_json").toString();
		var parsed = JSON.parse(data);
		lue_resource_Resource.cachedScenes.set(name,parsed);
		return parsed;
	} else return cached;
};
lue_resource_Resource.getGeometryResourceById = function(resources,id) {
	if(id == "") return resources[0];
	var _g = 0;
	while(_g < resources.length) {
		var res = resources[_g];
		++_g;
		if(res.id == id) return res;
	}
	return null;
};
lue_resource_Resource.getLightResourceById = function(resources,id) {
	if(id == "") return resources[0];
	var _g = 0;
	while(_g < resources.length) {
		var res = resources[_g];
		++_g;
		if(res.id == id) return res;
	}
	return null;
};
lue_resource_Resource.getCameraResourceById = function(resources,id) {
	if(id == "") return resources[0];
	var _g = 0;
	while(_g < resources.length) {
		var res = resources[_g];
		++_g;
		if(res.id == id) return res;
	}
	return null;
};
lue_resource_Resource.getPipelineResourceById = function(resources,id) {
	if(id == "") return resources[0];
	var _g = 0;
	while(_g < resources.length) {
		var res = resources[_g];
		++_g;
		if(res.id == id) return res;
	}
	return null;
};
lue_resource_Resource.getMaterialResourceById = function(resources,id) {
	if(id == "") return resources[0];
	var _g = 0;
	while(_g < resources.length) {
		var res = resources[_g];
		++_g;
		if(res.id == id) return res;
	}
	return null;
};
lue_resource_Resource.getParticleResourceById = function(resources,id) {
	if(id == "") return resources[0];
	var _g = 0;
	while(_g < resources.length) {
		var res = resources[_g];
		++_g;
		if(res.id == id) return res;
	}
	return null;
};
lue_resource_Resource.getShaderResourceById = function(resources,id) {
	if(id == "") return resources[0];
	var _g = 0;
	while(_g < resources.length) {
		var res = resources[_g];
		++_g;
		if(res.id == id) return res;
	}
	return null;
};
lue_resource_Resource.getSpeakerResourceById = function(resources,id) {
	if(id == "") return resources[0];
	var _g = 0;
	while(_g < resources.length) {
		var res = resources[_g];
		++_g;
		if(res.id == id) return res;
	}
	return null;
};
lue_resource_Resource.prototype = {
	__class__: lue_resource_Resource
};
var lue_resource_CameraResource = function(resource) {
	lue_resource_Resource.call(this);
	if(resource == null) {
		haxe_Log.trace("Resource not found!",{ fileName : "CameraResource.hx", lineNumber : 14, className : "lue.resource.CameraResource", methodName : "new"});
		return;
	}
	this.resource = resource;
	var pipelineName = resource.pipeline.split("/");
	this.pipeline = lue_resource_Resource.getPipeline(pipelineName[0],pipelineName[1]);
};
$hxClasses["lue.resource.CameraResource"] = lue_resource_CameraResource;
lue_resource_CameraResource.__name__ = ["lue","resource","CameraResource"];
lue_resource_CameraResource.parse = function(name,id) {
	var format = lue_resource_Resource.getSceneResource(name);
	var resource = lue_resource_Resource.getCameraResourceById(format.camera_resources,id);
	return new lue_resource_CameraResource(resource);
};
lue_resource_CameraResource.__super__ = lue_resource_Resource;
lue_resource_CameraResource.prototype = $extend(lue_resource_Resource.prototype,{
	resource: null
	,pipeline: null
	,__class__: lue_resource_CameraResource
});
var lue_resource_Geometry = function(data,indices,materialIndices,positions,normals,uvs,cols,tangents,bones,weights,usage) {
	this.skeletonTransformsI = null;
	this.skeletonTransforms = null;
	this.skeletonBones = null;
	this.skeletonBoneRefs = null;
	this.skinBoneWeights = null;
	this.skinBoneIndices = null;
	this.skinBoneCounts = null;
	this.skinTransformI = null;
	this.skinTransform = null;
	this.instanceCount = 0;
	this.instanced = false;
	if(usage == null) usage = kha_graphics4_Usage.StaticUsage;
	this.data = data;
	this.ids = indices;
	this.materialIndices = materialIndices;
	this.usage = usage;
	this.positions = positions;
	this.uvs = uvs;
	this.normals = normals;
	this.cols = cols;
	this.tangents = tangents;
	this.bones = bones;
	this.weights = weights;
};
$hxClasses["lue.resource.Geometry"] = lue_resource_Geometry;
lue_resource_Geometry.__name__ = ["lue","resource","Geometry"];
lue_resource_Geometry.prototype = {
	vertexBuffer: null
	,indexBuffers: null
	,vertices: null
	,indices: null
	,materialIndices: null
	,structureLength: null
	,instancedVertexBuffers: null
	,instanced: null
	,instanceCount: null
	,aabbMin: null
	,aabbMax: null
	,size: null
	,radius: null
	,data: null
	,ids: null
	,usage: null
	,positions: null
	,normals: null
	,uvs: null
	,cols: null
	,tangents: null
	,bones: null
	,weights: null
	,skinTransform: null
	,skinTransformI: null
	,skinBoneCounts: null
	,skinBoneIndices: null
	,skinBoneWeights: null
	,skeletonBoneRefs: null
	,skeletonBones: null
	,skeletonTransforms: null
	,skeletonTransformsI: null
	,build: function(structure,structureLength) {
		this.structureLength = structureLength;
		this.vertexBuffer = new kha_graphics4_VertexBuffer(this.data.length / structureLength | 0,structure,this.usage);
		this.vertices = this.vertexBuffer.lock();
		var _g1 = 0;
		var _g = this.vertices.length;
		while(_g1 < _g) {
			var i = _g1++;
			this.vertices[i] = this.data[i];
		}
		this.vertexBuffer.unlock();
		this.indexBuffers = [];
		this.indices = [];
		var _g2 = 0;
		var _g11 = this.ids;
		while(_g2 < _g11.length) {
			var id = _g11[_g2];
			++_g2;
			var indexBuffer = new kha_graphics4_IndexBuffer(id.length,this.usage);
			var indicesA = indexBuffer.lock();
			var _g3 = 0;
			var _g21 = indicesA.length;
			while(_g3 < _g21) {
				var i1 = _g3++;
				indicesA[i1] = id[i1];
			}
			indexBuffer.unlock();
			this.indexBuffers.push(indexBuffer);
			this.indices.push(indicesA);
		}
		this.calculateAABB();
	}
	,calculateAABB: function() {
		this.aabbMin = new lue_math_Vec4(-0.01,-0.01,-0.01);
		this.aabbMax = new lue_math_Vec4(0.01,0.01,0.01);
		this.size = new lue_math_Vec4();
		var i = 0;
		while(i < this.positions.length) {
			if(this.positions[i] > this.aabbMax.x) this.aabbMax.x = this.positions[i];
			if(this.positions[i + 1] > this.aabbMax.y) this.aabbMax.y = this.positions[i + 1];
			if(this.positions[i + 2] > this.aabbMax.z) this.aabbMax.z = this.positions[i + 2];
			if(this.positions[i] < this.aabbMin.x) this.aabbMin.x = this.positions[i];
			if(this.positions[i + 1] < this.aabbMin.y) this.aabbMin.y = this.positions[i + 1];
			if(this.positions[i + 2] < this.aabbMin.z) this.aabbMin.z = this.positions[i + 2];
			i += 3;
		}
		this.size.x = Math.abs(this.aabbMin.x) + Math.abs(this.aabbMax.x);
		this.size.y = Math.abs(this.aabbMin.y) + Math.abs(this.aabbMax.y);
		this.size.z = Math.abs(this.aabbMin.z) + Math.abs(this.aabbMax.z);
		if(this.size.x >= this.size.y && this.size.x >= this.size.z) this.radius = this.size.x / 2; else if(this.size.y >= this.size.x && this.size.y >= this.size.z) this.radius = this.size.y / 2; else this.radius = this.size.z / 2;
	}
	,getVerticesCount: function() {
		return this.vertices.length / this.structureLength | 0;
	}
	,initSkeletonBones: function(bones) {
		this.skeletonBones = [];
		var _g = 0;
		var _g1 = this.skeletonBoneRefs;
		while(_g < _g1.length) {
			var s = _g1[_g];
			++_g;
			var _g2 = 0;
			while(_g2 < bones.length) {
				var b = bones[_g2];
				++_g2;
				if(b.id == s) this.skeletonBones.push(b);
			}
		}
	}
	,initSkeletonTransforms: function(transforms) {
		this.skeletonTransforms = [];
		this.skeletonTransformsI = [];
		var _g = 0;
		while(_g < transforms.length) {
			var t = transforms[_g];
			++_g;
			var m = lue_math_Mat4.fromArray(t);
			this.skeletonTransforms.push(m);
			var mi = lue_math_Mat4.identity();
			mi.getInverse(m);
			this.skeletonTransformsI.push(mi);
		}
	}
	,initSkinTransform: function(t) {
		this.skinTransform = lue_math_Mat4.fromArray(t);
		this.skinTransformI = lue_math_Mat4.identity();
		this.skinTransformI.getInverse(this.skinTransform);
	}
	,__class__: lue_resource_Geometry
};
var lue_resource_LightResource = function(resource) {
	lue_resource_Resource.call(this);
	if(resource == null) {
		haxe_Log.trace("Resource not found!",{ fileName : "LightResource.hx", lineNumber : 13, className : "lue.resource.LightResource", methodName : "new"});
		return;
	}
	this.resource = resource;
};
$hxClasses["lue.resource.LightResource"] = lue_resource_LightResource;
lue_resource_LightResource.__name__ = ["lue","resource","LightResource"];
lue_resource_LightResource.parse = function(name,id) {
	var format = lue_resource_Resource.getSceneResource(name);
	var resource = lue_resource_Resource.getLightResourceById(format.light_resources,id);
	return new lue_resource_LightResource(resource);
};
lue_resource_LightResource.__super__ = lue_resource_Resource;
lue_resource_LightResource.prototype = $extend(lue_resource_Resource.prototype,{
	resource: null
	,__class__: lue_resource_LightResource
});
var lue_resource_MaterialResource = function(resource) {
	this.contexts = [];
	lue_resource_Resource.call(this);
	if(resource == null) {
		haxe_Log.trace("Resource not found!",{ fileName : "MaterialResource.hx", lineNumber : 18, className : "lue.resource.MaterialResource", methodName : "new"});
		return;
	}
	this.resource = resource;
	var shaderName = resource.shader.split("/");
	this.shader = lue_resource_Resource.getShader(shaderName[0],shaderName[1]);
	var _g = 0;
	var _g1 = resource.contexts;
	while(_g < _g1.length) {
		var c = _g1[_g];
		++_g;
		this.contexts.push(new lue_resource_MaterialContext(c));
	}
};
$hxClasses["lue.resource.MaterialResource"] = lue_resource_MaterialResource;
lue_resource_MaterialResource.__name__ = ["lue","resource","MaterialResource"];
lue_resource_MaterialResource.parse = function(name,id) {
	var format = lue_resource_Resource.getSceneResource(name);
	var resource = lue_resource_Resource.getMaterialResourceById(format.material_resources,id);
	return new lue_resource_MaterialResource(resource);
};
lue_resource_MaterialResource.__super__ = lue_resource_Resource;
lue_resource_MaterialResource.prototype = $extend(lue_resource_Resource.prototype,{
	resource: null
	,shader: null
	,contexts: null
	,getContext: function(id) {
		var _g = 0;
		var _g1 = this.contexts;
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			if(c.resource.id == id) return c;
		}
		return null;
	}
	,__class__: lue_resource_MaterialResource
});
var lue_resource_MaterialContext = function(resource) {
	this.textures = null;
	this.resource = resource;
	if(resource.bind_textures.length > 0) {
		this.textures = [];
		var _g1 = 0;
		var _g = resource.bind_textures.length;
		while(_g1 < _g) {
			var i = _g1++;
			var tex = resource.bind_textures[i];
			var image = Reflect.field(kha_Assets.images,tex.name);
			if(tex.mipmaps != null) {
				var mipmaps = [];
				var _g2 = 0;
				var _g3 = tex.mipmaps;
				while(_g2 < _g3.length) {
					var name = _g3[_g2];
					++_g2;
					mipmaps.push(Reflect.field(kha_Assets.images,name));
				}
				image.setMipmaps(mipmaps);
			} else if(tex.generate_mipmaps == true) image.generateMipmaps(1000);
			tex.mipmaps = null;
			tex.generate_mipmaps = false;
			this.textures.push(image);
		}
	}
};
$hxClasses["lue.resource.MaterialContext"] = lue_resource_MaterialContext;
lue_resource_MaterialContext.__name__ = ["lue","resource","MaterialContext"];
lue_resource_MaterialContext.prototype = {
	resource: null
	,textures: null
	,setTextureParameters: function(g,textureIndex,context,unitIndex) {
		var tex = this.resource.bind_textures[textureIndex];
		if(tex.params_set == null) {
			context.setTextureParameters(g,unitIndex,tex);
			tex.params_set = true;
		}
	}
	,__class__: lue_resource_MaterialContext
};
var lue_resource_ModelResource = function(resource) {
	this.bones = [];
	lue_resource_Resource.call(this);
	if(resource == null) {
		haxe_Log.trace("Resource not found!",{ fileName : "ModelResource.hx", lineNumber : 22, className : "lue.resource.ModelResource", methodName : "new"});
		return;
	}
	this.resource = resource;
	var indices = [];
	var materialIndices = [];
	var _g = 0;
	var _g1 = resource.mesh.index_arrays;
	while(_g < _g1.length) {
		var ind = _g1[_g];
		++_g;
		indices.push(ind.values);
		materialIndices.push(ind.material);
	}
	var paVA = this.getVertexArray("position");
	var pa;
	if(paVA != null) pa = paVA.values; else pa = null;
	var naVA = this.getVertexArray("normal");
	var na;
	if(naVA != null) na = naVA.values; else na = null;
	var uvaVA = this.getVertexArray("texcoord");
	var uva;
	if(uvaVA != null) uva = uvaVA.values; else uva = null;
	var caVA = this.getVertexArray("color");
	var ca;
	if(caVA != null) ca = caVA.values; else ca = null;
	var tanaVA = this.getVertexArray("tangent");
	var tana;
	if(tanaVA != null) tana = tanaVA.values; else tana = null;
	if(resource.mesh.skin != null) this.isSkinned = true; else this.isSkinned = false;
	var parsedUsage = kha_graphics4_Usage.StaticUsage;
	if(resource.mesh.static_usage != null && resource.mesh.static_usage == false) parsedUsage = kha_graphics4_Usage.DynamicUsage;
	var usage;
	if(this.isSkinned && false) usage = kha_graphics4_Usage.DynamicUsage; else usage = parsedUsage;
	var bonea = null;
	var weighta = null;
	if(this.isSkinned) {
		bonea = [];
		weighta = [];
		var index = 0;
		var _g11 = 0;
		var _g2 = pa.length / 3 | 0;
		while(_g11 < _g2) {
			var i = _g11++;
			var boneCount = resource.mesh.skin.bone_count_array[i];
			var _g3 = index;
			var _g21 = index + boneCount;
			while(_g3 < _g21) {
				var j = _g3++;
				bonea.push(resource.mesh.skin.bone_index_array[j]);
				weighta.push(resource.mesh.skin.bone_weight_array[j]);
			}
			var _g22 = boneCount;
			while(_g22 < 4) {
				var j1 = _g22++;
				bonea.push(0);
				weighta.push(0);
			}
			index += boneCount;
		}
	}
	var data = this.buildData(pa,na,uva,ca,tana,bonea,weighta);
	var struct = lue_resource_ShaderResource.getVertexStructure(pa != null,na != null,uva != null,ca != null,tana != null,bonea != null,weighta != null);
	var structLength = lue_resource_ShaderResource.getVertexStructureLength(pa != null,na != null,uva != null,ca != null,tana != null,bonea != null,weighta != null);
	this.geometry = new lue_resource_Geometry(data,indices,materialIndices,pa,na,uva,ca,tana,bonea,weighta,usage);
	this.geometry.build(struct,structLength);
	if(resource.mesh.instance_offsets != null) this.setupInstancedGeometry(resource.mesh.instance_offsets,usage);
};
$hxClasses["lue.resource.ModelResource"] = lue_resource_ModelResource;
lue_resource_ModelResource.__name__ = ["lue","resource","ModelResource"];
lue_resource_ModelResource.parse = function(name,id,boneNodes) {
	var format = lue_resource_Resource.getSceneResource(name);
	var resource = lue_resource_Resource.getGeometryResourceById(format.geometry_resources,id);
	var res = new lue_resource_ModelResource(resource);
	if(resource.mesh.skin != null) {
		var nodes;
		if(boneNodes != null) nodes = boneNodes; else nodes = format.nodes;
		var _g = 0;
		while(_g < nodes.length) {
			var n = nodes[_g];
			++_g;
			lue_resource_ModelResource.setParents(n);
		}
		lue_resource_ModelResource.traverseNodes(nodes,function(node) {
			if(node.type == "bone_node") res.bones.push(node);
		});
		res.geometry.initSkinTransform(resource.mesh.skin.transform.values);
		res.geometry.skinBoneCounts = resource.mesh.skin.bone_count_array;
		res.geometry.skinBoneIndices = resource.mesh.skin.bone_index_array;
		res.geometry.skinBoneWeights = resource.mesh.skin.bone_weight_array;
		res.geometry.skeletonBoneRefs = resource.mesh.skin.skeleton.bone_ref_array;
		res.geometry.initSkeletonBones(res.bones);
		res.geometry.initSkeletonTransforms(resource.mesh.skin.skeleton.transforms);
	}
	return res;
};
lue_resource_ModelResource.setParents = function(node) {
	if(node.nodes == null) return;
	var _g = 0;
	var _g1 = node.nodes;
	while(_g < _g1.length) {
		var n = _g1[_g];
		++_g;
		n.parent = node;
		lue_resource_ModelResource.setParents(n);
	}
};
lue_resource_ModelResource.traverseNodes = function(nodes,callback) {
	var _g1 = 0;
	var _g = nodes.length;
	while(_g1 < _g) {
		var i = _g1++;
		lue_resource_ModelResource.traverseNodesStep(nodes[i],callback);
	}
};
lue_resource_ModelResource.traverseNodesStep = function(node,callback) {
	callback(node);
	if(node.nodes == null) return;
	var _g1 = 0;
	var _g = node.nodes.length;
	while(_g1 < _g) {
		var i = _g1++;
		lue_resource_ModelResource.traverseNodesStep(node.nodes[i],callback);
	}
};
lue_resource_ModelResource.__super__ = lue_resource_Resource;
lue_resource_ModelResource.prototype = $extend(lue_resource_Resource.prototype,{
	resource: null
	,geometry: null
	,isSkinned: null
	,bones: null
	,setupInstancedGeometry: function(offsets,usage) {
		this.geometry.instanced = true;
		this.geometry.instanceCount = offsets.length / 3 | 0;
		var structure = new kha_graphics4_VertexStructure();
		structure.add("off",kha_graphics4_VertexData.Float3);
		var vb = new kha_graphics4_VertexBuffer(this.geometry.instanceCount,structure,usage,1);
		var vertices = vb.lock();
		var _g1 = 0;
		var _g = vertices.length;
		while(_g1 < _g) {
			var i = _g1++;
			vertices[i] = offsets[i];
		}
		vb.unlock();
		this.geometry.instancedVertexBuffers = [this.geometry.vertexBuffer,vb];
	}
	,getVertexArray: function(attrib) {
		var _g = 0;
		var _g1 = this.resource.mesh.vertex_arrays;
		while(_g < _g1.length) {
			var va = _g1[_g];
			++_g;
			if(va.attrib == attrib) return va;
		}
		return null;
	}
	,buildData: function(pa,na,uva,ca,tana,bonea,weighta) {
		var data = [];
		var _g1 = 0;
		var _g = pa.length / 3 | 0;
		while(_g1 < _g) {
			var i = _g1++;
			data.push(pa[i * 3]);
			data.push(pa[i * 3 + 1]);
			data.push(pa[i * 3 + 2]);
			if(na != null) {
				data.push(na[i * 3]);
				data.push(na[i * 3 + 1]);
				data.push(na[i * 3 + 2]);
			}
			if(uva != null) {
				data.push(uva[i * 2]);
				data.push(1 - uva[i * 2 + 1]);
			}
			if(ca != null) {
				data.push(ca[i * 3]);
				data.push(ca[i * 3 + 1]);
				data.push(ca[i * 3 + 2]);
				data.push(1.0);
			}
			if(tana != null) {
				data.push(tana[i * 3]);
				data.push(tana[i * 3 + 1]);
				data.push(tana[i * 3 + 2]);
			}
			if(bonea != null) {
				data.push(bonea[i * 4]);
				data.push(bonea[i * 4 + 1]);
				data.push(bonea[i * 4 + 2]);
				data.push(bonea[i * 4 + 3]);
			}
			if(weighta != null) {
				data.push(weighta[i * 4]);
				data.push(weighta[i * 4 + 1]);
				data.push(weighta[i * 4 + 2]);
				data.push(weighta[i * 4 + 3]);
			}
		}
		return data;
	}
	,__class__: lue_resource_ModelResource
});
var lue_resource_ParticleResource = function(resource) {
	lue_resource_Resource.call(this);
	if(resource == null) {
		haxe_Log.trace("Resource not found!",{ fileName : "ParticleResource.hx", lineNumber : 13, className : "lue.resource.ParticleResource", methodName : "new"});
		return;
	}
	this.resource = resource;
};
$hxClasses["lue.resource.ParticleResource"] = lue_resource_ParticleResource;
lue_resource_ParticleResource.__name__ = ["lue","resource","ParticleResource"];
lue_resource_ParticleResource.parse = function(name,id) {
	var format = lue_resource_Resource.getSceneResource(name);
	var resource = lue_resource_Resource.getParticleResourceById(format.particle_resources,id);
	return new lue_resource_ParticleResource(resource);
};
lue_resource_ParticleResource.__super__ = lue_resource_Resource;
lue_resource_ParticleResource.prototype = $extend(lue_resource_Resource.prototype,{
	resource: null
	,__class__: lue_resource_ParticleResource
});
var lue_resource_PipelineResource = function(resource) {
	this.renderTargets = null;
	lue_resource_Resource.call(this);
	if(resource == null) {
		haxe_Log.trace("Resource not found!",{ fileName : "PipelineResource.hx", lineNumber : 16, className : "lue.resource.PipelineResource", methodName : "new"});
		return;
	}
	this.resource = resource;
	if(resource.render_targets.length > 0) {
		this.renderTargets = new haxe_ds_StringMap();
		var _g = 0;
		var _g1 = resource.render_targets;
		while(_g < _g1.length) {
			var t = _g1[_g];
			++_g;
			var rt = new lue_resource_RenderTarget();
			rt.image = this.createImage(t);
			if(t.color_buffers != null && t.color_buffers > 1) {
				rt.additionalImages = [];
				var _g3 = 0;
				var _g2 = t.color_buffers - 1;
				while(_g3 < _g2) {
					var i = _g3++;
					rt.additionalImages.push(this.createImage(t));
				}
			}
			this.renderTargets.set(t.id,rt);
		}
	}
};
$hxClasses["lue.resource.PipelineResource"] = lue_resource_PipelineResource;
lue_resource_PipelineResource.__name__ = ["lue","resource","PipelineResource"];
lue_resource_PipelineResource.parse = function(name,id) {
	var format = lue_resource_Resource.getSceneResource(name);
	var resource = lue_resource_Resource.getPipelineResourceById(format.pipeline_resources,id);
	return new lue_resource_PipelineResource(resource);
};
lue_resource_PipelineResource.__super__ = lue_resource_Resource;
lue_resource_PipelineResource.prototype = $extend(lue_resource_Resource.prototype,{
	resource: null
	,renderTargets: null
	,createImage: function(t) {
		return kha_Image.createRenderTarget(t.width == 0?kha_System.windowWidth():t.width,t.height == 0?kha_System.windowHeight():t.height,t.format != null?this.getTextureFormat(t.format):kha_graphics4_TextureFormat.RGBA32,t.depth_buffer != null?t.depth_buffer?1:0:0);
	}
	,getTextureFormat: function(s) {
		if(s == "RGBA32") return kha_graphics4_TextureFormat.RGBA32; else if(s == "RGBA128") return kha_graphics4_TextureFormat.RGBA128; else if(s == "DEPTH16") return kha_graphics4_TextureFormat.DEPTH16; else return kha_graphics4_TextureFormat.RGBA32;
	}
	,getDepthStencilFormat: function(b) {
		if(b) return 1; else return 0;
	}
	,__class__: lue_resource_PipelineResource
});
var lue_resource_RenderTarget = function() {
	this.additionalImages = null;
};
$hxClasses["lue.resource.RenderTarget"] = lue_resource_RenderTarget;
lue_resource_RenderTarget.__name__ = ["lue","resource","RenderTarget"];
lue_resource_RenderTarget.prototype = {
	image: null
	,additionalImages: null
	,__class__: lue_resource_RenderTarget
};
var lue_resource_ShaderResource = function(resource) {
	this.contexts = [];
	this.structureLength = 0;
	lue_resource_Resource.call(this);
	if(resource == null) {
		haxe_Log.trace("Resource not found!",{ fileName : "ShaderResource.hx", lineNumber : 31, className : "lue.resource.ShaderResource", methodName : "new"});
		return;
	}
	this.resource = resource;
	this.parseVertexStructure();
	var _g = 0;
	var _g1 = resource.contexts;
	while(_g < _g1.length) {
		var c = _g1[_g];
		++_g;
		var fragName = StringTools.replace(c.fragment_shader,".","_");
		if(Reflect.field(kha_Shaders,fragName) == null) continue;
		this.contexts.push(new lue_resource_ShaderContext(c,this.structure));
	}
};
$hxClasses["lue.resource.ShaderResource"] = lue_resource_ShaderResource;
lue_resource_ShaderResource.__name__ = ["lue","resource","ShaderResource"];
lue_resource_ShaderResource.parse = function(name,id) {
	var format = lue_resource_Resource.getSceneResource(name);
	var resource = lue_resource_Resource.getShaderResourceById(format.shader_resources,id);
	return new lue_resource_ShaderResource(resource);
};
lue_resource_ShaderResource.getVertexStructure = function(pos,nor,tex,col,tan,bone,weight) {
	if(weight == null) weight = false;
	if(bone == null) bone = false;
	if(tan == null) tan = false;
	if(col == null) col = false;
	if(tex == null) tex = false;
	if(nor == null) nor = false;
	if(pos == null) pos = false;
	var structure = new kha_graphics4_VertexStructure();
	if(pos) structure.add("pos",kha_graphics4_VertexData.Float3);
	if(nor) structure.add("nor",kha_graphics4_VertexData.Float3);
	if(tex) structure.add("tex",kha_graphics4_VertexData.Float2);
	if(col) structure.add("col",kha_graphics4_VertexData.Float4);
	if(tan) structure.add("tan",kha_graphics4_VertexData.Float3);
	if(bone) structure.add("bone",kha_graphics4_VertexData.Float4);
	if(weight) structure.add("weight",kha_graphics4_VertexData.Float4);
	return structure;
};
lue_resource_ShaderResource.getVertexStructureLength = function(pos,nor,tex,col,tan,bone,weight) {
	if(weight == null) weight = false;
	if(bone == null) bone = false;
	if(tan == null) tan = false;
	if(col == null) col = false;
	if(tex == null) tex = false;
	if(nor == null) nor = false;
	if(pos == null) pos = false;
	var length = 0;
	if(pos) length += 3;
	if(nor) length += 3;
	if(tex) length += 2;
	if(col) length += 4;
	if(tan) length += 3;
	if(bone) length += 4;
	if(weight) length += 4;
	return length;
};
lue_resource_ShaderResource.createScreenAlignedQuadStructure = function() {
	var structure = new kha_graphics4_VertexStructure();
	structure.add("pos",kha_graphics4_VertexData.Float2);
	return structure;
};
lue_resource_ShaderResource.getScreenAlignedQuadStructureLength = function() {
	return 2;
};
lue_resource_ShaderResource.__super__ = lue_resource_Resource;
lue_resource_ShaderResource.prototype = $extend(lue_resource_Resource.prototype,{
	resource: null
	,structure: null
	,structureLength: null
	,contexts: null
	,sizeToVD: function(size) {
		if(size == 1) return kha_graphics4_VertexData.Float1; else if(size == 2) return kha_graphics4_VertexData.Float2; else if(size == 3) return kha_graphics4_VertexData.Float3; else if(size == 4) return kha_graphics4_VertexData.Float4;
		return null;
	}
	,parseVertexStructure: function() {
		this.structure = new kha_graphics4_VertexStructure();
		var _g = 0;
		var _g1 = this.resource.vertex_structure;
		while(_g < _g1.length) {
			var data = _g1[_g];
			++_g;
			this.structure.add(data.name,this.sizeToVD(data.size));
			this.structureLength += data.size;
		}
	}
	,getContext: function(id) {
		var _g = 0;
		var _g1 = this.contexts;
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			if(c.resource.id == id) return c;
		}
		return null;
	}
	,__class__: lue_resource_ShaderResource
});
var lue_resource_ShaderContext = function(resource,structure) {
	this.textureUnits = [];
	this.constants = [];
	this.resource = resource;
	this.pipeState = new kha_graphics4_PipelineState();
	if(resource.vertex_shader.indexOf("_Instancing") != -1) {
		var instStruct = new kha_graphics4_VertexStructure();
		instStruct.add("off",kha_graphics4_VertexData.Float3);
		this.pipeState.inputLayout = [structure,instStruct];
	} else this.pipeState.inputLayout = [structure];
	this.pipeState.depthWrite = resource.depth_write;
	if(resource.compare_mode == "always") this.pipeState.depthMode = kha_graphics4_CompareMode.Always; else if(resource.compare_mode == "less") this.pipeState.depthMode = kha_graphics4_CompareMode.Less;
	if(resource.cull_mode == "none") this.pipeState.cullMode = kha_graphics4_CullMode.None; else if(resource.cull_mode == "counter_clockwise") this.pipeState.cullMode = kha_graphics4_CullMode.CounterClockwise; else this.pipeState.cullMode = kha_graphics4_CullMode.Clockwise;
	this.pipeState.blendSource = this.getBlendingOperation(resource.blend_source);
	this.pipeState.blendDestination = this.getBlendingOperation(resource.blend_destination);
	this.pipeState.fragmentShader = Reflect.field(kha_Shaders,StringTools.replace(resource.fragment_shader,".","_"));
	this.pipeState.vertexShader = Reflect.field(kha_Shaders,StringTools.replace(resource.vertex_shader,".","_"));
	this.pipeState.compile();
	var _g = 0;
	var _g1 = resource.constants;
	while(_g < _g1.length) {
		var c = _g1[_g];
		++_g;
		this.addConstant(c);
	}
	var _g2 = 0;
	var _g11 = resource.texture_units;
	while(_g2 < _g11.length) {
		var tu = _g11[_g2];
		++_g2;
		this.addTexture(tu);
	}
};
$hxClasses["lue.resource.ShaderContext"] = lue_resource_ShaderContext;
lue_resource_ShaderContext.__name__ = ["lue","resource","ShaderContext"];
lue_resource_ShaderContext.prototype = {
	resource: null
	,pipeState: null
	,constants: null
	,textureUnits: null
	,getBlendingOperation: function(s) {
		if(s == "blend_one") return kha_graphics4_BlendingOperation.BlendOne; else if(s == "blend_zero") return kha_graphics4_BlendingOperation.BlendZero; else if(s == "source_alpha") return kha_graphics4_BlendingOperation.SourceAlpha; else if(s == "inverse_source_alpha") return kha_graphics4_BlendingOperation.InverseSourceAlpha; else return kha_graphics4_BlendingOperation.Undefined;
	}
	,getTextureAddresing: function(s) {
		if(s == "repeat") return kha_graphics4_TextureAddressing.Repeat; else if(s == "mirror") return kha_graphics4_TextureAddressing.Mirror; else return kha_graphics4_TextureAddressing.Clamp;
	}
	,getTextureFilter: function(s) {
		if(s == "point") return kha_graphics4_TextureFilter.PointFilter; else if(s == "linear") return kha_graphics4_TextureFilter.LinearFilter; else return kha_graphics4_TextureFilter.AnisotropicFilter;
	}
	,getMipMapFilter: function(s) {
		if(s == "no") return kha_graphics4_MipMapFilter.NoMipFilter; else if(s == "point") return kha_graphics4_MipMapFilter.PointMipFilter; else return kha_graphics4_MipMapFilter.LinearMipFilter;
	}
	,addConstant: function(c) {
		this.constants.push(this.pipeState.getConstantLocation(c.id));
	}
	,addTexture: function(tu) {
		var unit = this.pipeState.getTextureUnit(tu.id);
		this.textureUnits.push(unit);
	}
	,setTextureParameters: function(g,unitIndex,tex) {
		var unit = this.textureUnits[unitIndex];
		g.setTextureParameters(unit,tex.u_addressing == null?kha_graphics4_TextureAddressing.Repeat:this.getTextureAddresing(tex.u_addressing),tex.v_addressing == null?kha_graphics4_TextureAddressing.Repeat:this.getTextureAddresing(tex.v_addressing),tex.min_filter == null?kha_graphics4_TextureFilter.LinearFilter:this.getTextureFilter(tex.min_filter),tex.mag_filter == null?kha_graphics4_TextureFilter.LinearFilter:this.getTextureFilter(tex.mag_filter),tex.mipmap_filter == null?kha_graphics4_MipMapFilter.NoMipFilter:this.getMipMapFilter(tex.mipmap_filter));
	}
	,__class__: lue_resource_ShaderContext
};
var lue_sys_Audio = function() {
};
$hxClasses["lue.sys.Audio"] = lue_sys_Audio;
lue_sys_Audio.__name__ = ["lue","sys","Audio"];
lue_sys_Audio.playSound = function(sound,loop) {
	if(loop == null) loop = false;
	if(lue_sys_Audio.soundOn) kha_audio2_Audio1.play(sound,loop);
};
lue_sys_Audio.prototype = {
	__class__: lue_sys_Audio
};
var lue_sys_CompileTime = function() { };
$hxClasses["lue.sys.CompileTime"] = lue_sys_CompileTime;
lue_sys_CompileTime.__name__ = ["lue","sys","CompileTime"];
var lue_sys_Input = function() {
	kha_input_Mouse.get().notify(lue_sys_Input.downListener,lue_sys_Input.upListener,lue_sys_Input.moveListener,null);
};
$hxClasses["lue.sys.Input"] = lue_sys_Input;
lue_sys_Input.__name__ = ["lue","sys","Input"];
lue_sys_Input.end = function() {
	lue_sys_Input.released = false;
	lue_sys_Input.started = false;
	lue_sys_Input.moved = false;
	lue_sys_Input.deltaX = 0;
	lue_sys_Input.deltaY = 0;
};
lue_sys_Input.reset = function() {
	lue_sys_Input.deltaX = 0;
	lue_sys_Input.deltaY = 0;
	lue_sys_Input.started = false;
	lue_sys_Input.touch = false;
	lue_sys_Input.released = false;
	lue_sys_Input.moved = false;
};
lue_sys_Input.downListener = function(_index,_x,_y) {
	lue_sys_Input.touch = true;
	if(_index == 0) lue_sys_Input.started = true;
	lue_sys_Input.x = _x;
	lue_sys_Input.y = _y;
};
lue_sys_Input.upListener = function(_index,_x,_y) {
	lue_sys_Input.touch = false;
	if(_index == 0) lue_sys_Input.released = true;
	lue_sys_Input.x = _x;
	lue_sys_Input.y = _y;
};
lue_sys_Input.moveListener = function(_x,_y,movementX,movementY) {
	lue_sys_Input.deltaX = _x - lue_sys_Input.x;
	lue_sys_Input.deltaY = _y - lue_sys_Input.y;
	lue_sys_Input.x = _x;
	lue_sys_Input.y = _y;
	lue_sys_Input.moved = true;
};
lue_sys_Input.prototype = {
	__class__: lue_sys_Input
};
var lue_sys_Storage = function() {
	lue_sys_Storage.file = kha_Storage.defaultFile();
	if(lue_sys_Storage.file != null) {
		lue_sys_Storage.data = lue_sys_Storage.file.readObject();
		if(lue_sys_Storage.data == null) lue_sys_Storage.data = [];
		lue_sys_Storage.save();
	}
};
$hxClasses["lue.sys.Storage"] = lue_sys_Storage;
lue_sys_Storage.__name__ = ["lue","sys","Storage"];
lue_sys_Storage.save = function() {
	lue_sys_Storage.file.writeObject(lue_sys_Storage.data);
};
lue_sys_Storage.clear = function() {
	lue_sys_Storage.data = [];
	lue_sys_Storage.save();
};
lue_sys_Storage.setValue = function(pos,value) {
	var p = pos[1];
	while(p > lue_sys_Storage.data.length) lue_sys_Storage.data.push("");
	lue_sys_Storage.data[p] = value;
	lue_sys_Storage.save();
};
lue_sys_Storage.getValue = function(pos) {
	return lue_sys_Storage.data[pos[1]];
};
lue_sys_Storage.prototype = {
	__class__: lue_sys_Storage
};
var lue_sys_Time = function() {
	lue_sys_Time.last = kha_Scheduler.time();
};
$hxClasses["lue.sys.Time"] = lue_sys_Time;
lue_sys_Time.__name__ = ["lue","sys","Time"];
lue_sys_Time.__properties__ = {get_total:"get_total"}
lue_sys_Time.onActivate = function() {
	lue_sys_Time.last = kha_Scheduler.time();
};
lue_sys_Time.update = function() {
	lue_sys_Time.delta = kha_Scheduler.time() - lue_sys_Time.last;
	lue_sys_Time.last = kha_Scheduler.time();
};
lue_sys_Time.getSeconds = function() {
	return Std["int"](new Date().getTime() / 1000);
};
lue_sys_Time.get_total = function() {
	return kha_Scheduler.time();
};
lue_sys_Time.prototype = {
	__class__: lue_sys_Time
};
var lue_sys_Tween = function() { };
$hxClasses["lue.sys.Tween"] = lue_sys_Tween;
lue_sys_Tween.__name__ = ["lue","sys","Tween"];
lue_sys_Tween.to = function(target,time,props,f,delay,type) {
	if(type == null) type = 1;
	if(delay == null) delay = 0.0;
	var anim = new lue_sys_Anim(target,time,props,f,delay,type);
	anim._ease = lue_sys_Tween.eases[type];
	if(anim.target != null && anim.props != null) {
		anim._startProps = [];
		var _g = 0;
		var _g1 = Reflect.fields(anim.props);
		while(_g < _g1.length) {
			var p = _g1[_g];
			++_g;
			var val = Reflect.getProperty(anim.target,p);
			anim._startProps.push(val);
		}
	}
	lue_sys_Tween.anims.push(anim);
	if(target != null) lue_sys_Tween.map.set(target,anim);
};
lue_sys_Tween.timer = function(delay,f) {
	lue_sys_Tween.to(null,0,null,f,delay);
};
lue_sys_Tween.stop = function(target) {
	var anim = lue_sys_Tween.map.get(target);
	if(anim != null) HxOverrides.remove(lue_sys_Tween.anims,anim);
};
lue_sys_Tween.reset = function() {
	lue_sys_Tween.anims = [];
	lue_sys_Tween.map = new haxe_ds_ObjectMap();
};
lue_sys_Tween.update = function() {
	var d = lue_sys_Time.delta;
	var i = lue_sys_Tween.anims.length;
	while(i-- > 0 && lue_sys_Tween.anims.length > 0) {
		var a = lue_sys_Tween.anims[i];
		if(a.delay > 0) {
			a.delay -= d;
			if(a.delay > 0) continue;
		}
		a._currentTime += d;
		if(a.target != null) {
			var ps = Reflect.fields(a.props);
			var _g1 = 0;
			var _g = ps.length;
			while(_g1 < _g) {
				var i1 = _g1++;
				var p = ps[i1];
				var startVal = a._startProps[i1];
				var targetVal = Reflect.getProperty(a.props,p);
				var k = a._currentTime / a.time;
				if(k > 1) k = 1;
				var val = startVal + (targetVal - startVal) * a._ease(k);
				Reflect.setProperty(a.target,p,val);
			}
		}
		if(a._currentTime >= a.time) {
			lue_sys_Tween.anims.splice(i,1);
			i--;
			if(a.f != null) a.f();
		}
	}
};
lue_sys_Tween.easeLinear = function(k) {
	return k;
};
lue_sys_Tween.easeExpoOut = function(k) {
	if(k == 1) return 1; else return 1 - Math.pow(2,-10 * k);
};
var lue_sys_Anim = function(target,time,props,f,delay,type) {
	this._startProps = null;
	this._currentTime = 0;
	this._ease = null;
	this.target = target;
	this.time = time;
	this.props = props;
	this.delay = delay;
	this.f = f;
	this.type = type;
};
$hxClasses["lue.sys.Anim"] = lue_sys_Anim;
lue_sys_Anim.__name__ = ["lue","sys","Anim"];
lue_sys_Anim.prototype = {
	target: null
	,time: null
	,props: null
	,delay: null
	,f: null
	,type: null
	,_ease: null
	,_currentTime: null
	,_startProps: null
	,__class__: lue_sys_Anim
};
function $iterator(o) { if( o instanceof Array ) return function() { return HxOverrides.iter(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; }
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
if(Array.prototype.indexOf) HxOverrides.indexOf = function(a,o,i) {
	return Array.prototype.indexOf.call(a,o,i);
};
$hxClasses.Math = Math;
String.prototype.__class__ = $hxClasses.String = String;
String.__name__ = ["String"];
$hxClasses.Array = Array;
Array.__name__ = ["Array"];
Date.prototype.__class__ = $hxClasses.Date = Date;
Date.__name__ = ["Date"];
var Int = $hxClasses.Int = { __name__ : ["Int"]};
var Dynamic = $hxClasses.Dynamic = { __name__ : ["Dynamic"]};
var Float = $hxClasses.Float = Number;
Float.__name__ = ["Float"];
var Bool = $hxClasses.Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = $hxClasses.Class = { __name__ : ["Class"]};
var Enum = { };
var __map_reserved = {}
var ArrayBuffer = (Function("return typeof ArrayBuffer != 'undefined' ? ArrayBuffer : null"))() || js_html_compat_ArrayBuffer;
if(ArrayBuffer.prototype.slice == null) ArrayBuffer.prototype.slice = js_html_compat_ArrayBuffer.sliceImpl;
var Uint8Array = (Function("return typeof Uint8Array != 'undefined' ? Uint8Array : null"))() || js_html_compat_Uint8Array._new;
Main.projectName = "cycles_game";
Main.projectPackage = "game";
Main.projectWidth = 1136;
Main.projectHeight = 640;
Main.projectSamplesPerPixel = 1;
Main.projectScene = "Scene";
cycles_node_TimeNode._startTime = 0;
cycles_node_TimeNode._stopTime = 1;
cycles_node_TimeNode._scale = 2;
cycles_node_TimeNode._enabled = 3;
cycles_node_TimeNode._loop = 4;
cycles_node_TimeNode._reflect = 5;
kha_math_FastMatrix4.width = 4;
kha_math_FastMatrix4.height = 4;
cycles_node_TransformNode._position = 0;
cycles_node_TransformNode._rotation = 1;
cycles_node_TransformNode._scale = 2;
cycles_node_TransformNode.temp = lue_math_Mat4.identity();
cycles_node_VectorNode._x = 0;
cycles_node_VectorNode._y = 1;
cycles_node_VectorNode._z = 2;
cycles_trait_RigidBody.SHAPE_BOX = 0;
cycles_trait_RigidBody.SHAPE_SPHERE = 1;
cycles_trait_RigidBody.SHAPE_CONVEX_HULL = 2;
cycles_trait_RigidBody.SHAPE_MESH = 3;
cycles_trait_RigidBody.SHAPE_CONE = 4;
cycles_trait_RigidBody.SHAPE_CYLINDER = 5;
cycles_trait_RigidBody.SHAPE_CAPSULE = 6;
cycles_trait_RigidBody.SHAPE_TERRAIN = 7;
cycles_trait_RigidBody.SHAPE_STATIC_MESH = 8;
cycles_trait_RigidBody.nextId = 0;
haxe_Serializer.USE_CACHE = false;
haxe_Serializer.USE_ENUM_INDEX = false;
haxe_Serializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
haxe_Unserializer.DEFAULT_RESOLVER = Type;
haxe_Unserializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
haxe_ds_ObjectMap.count = 0;
js_Boot.__toStr = {}.toString;
js_html_compat_Uint8Array.BYTES_PER_ELEMENT = 1;
kha_Assets.images = new kha_ImageList();
kha_Assets.sounds = new kha_SoundList();
kha_Assets.blobs = new kha_BlobList();
kha_Assets.fonts = new kha_FontList();
kha_Assets.videos = new kha_VideoList();
kha__$Color_Color_$Impl_$.Black = kha__$Color_Color_$Impl_$._new(-16777216);
kha__$Color_Color_$Impl_$.White = kha__$Color_Color_$Impl_$._new(-1);
kha__$Color_Color_$Impl_$.Red = kha__$Color_Color_$Impl_$._new(-65536);
kha__$Color_Color_$Impl_$.Blue = kha__$Color_Color_$Impl_$._new(-16776961);
kha__$Color_Color_$Impl_$.Green = kha__$Color_Color_$Impl_$._new(-16711936);
kha__$Color_Color_$Impl_$.Magenta = kha__$Color_Color_$Impl_$._new(-65281);
kha__$Color_Color_$Impl_$.Yellow = kha__$Color_Color_$Impl_$._new(-256);
kha__$Color_Color_$Impl_$.Cyan = kha__$Color_Color_$Impl_$._new(-16711681);
kha__$Color_Color_$Impl_$.Purple = kha__$Color_Color_$Impl_$._new(-8388480);
kha__$Color_Color_$Impl_$.Pink = kha__$Color_Color_$Impl_$._new(-16181);
kha__$Color_Color_$Impl_$.Orange = kha__$Color_Color_$Impl_$._new(-23296);
kha__$Color_Color_$Impl_$.invMaxChannelValue = 0.00392156862745098;
kha_FontStyle.Default = new kha_FontStyle(false,false,false);
kha_Scheduler.DIF_COUNT = 3;
kha_Scheduler.maxframetime = 0.5;
kha_Scheduler.startTime = 0;
kha_Scheduler.lastNow = 0;
kha_Shaders.env_map_fragData = "s688:I3ZlcnNpb24gMTAwCi8vIFVua25vd24gZXhlY3V0aW9uIG1vZGUgOApwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDsKdmFyeWluZyB2ZWMzIG5vcm1hbDsKdW5pZm9ybSBzYW1wbGVyMkQgZW52bWFwOwoKCnZlYzIgZW52TWFwRXF1aXJlY3QodmVjMyBub3JtYWwpOwoKdm9pZCBtYWluKCkKewoJdmVjMyBuXzM5OwoJdmVjMyBwYXJhbV81MjsKCW5fMzkgPSBub3JtYWxpemUobm9ybWFsKTsKCXBhcmFtXzUyID0gbl8zOTsKCWdsX0ZyYWdDb2xvciA9IHRleHR1cmUyRChlbnZtYXAsIGVudk1hcEVxdWlyZWN0KHBhcmFtXzUyKSk7CglyZXR1cm47Cn0KCnZlYzIgZW52TWFwRXF1aXJlY3QodmVjMyBub3JtYWwpCnsKCWZsb2F0IHBoaV8xNTsKCWZsb2F0IHRoZXRhXzIxOwoJcGhpXzE1ID0gYWNvcyhub3JtYWxbMl0pOwoJdGhldGFfMjEgPSAoYXRhbigtbm9ybWFsWzFdLCBub3JtYWxbMF0pICsgMy4xNDE1OSk7CglyZXR1cm4gdmVjMigodGhldGFfMjEgLyA2LjI4MzE5KSwgKHBoaV8xNSAvIDMuMTQxNTkpKTsKfQoK";
kha_Shaders.env_map_vertData = "s4716:I3ZlcnNpb24gMTAwCnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0Owp1bmlmb3JtIG1hdDQgUDsKdW5pZm9ybSBtYXQ0IFY7CmF0dHJpYnV0ZSB2ZWMyIHBvczsKdmFyeWluZyB2ZWMzIG5vcm1hbDsKCgptYXQzIHRyYW5zcG9zZV8obWF0MyBtKTsKCm1hdDQgaW52ZXJzZV8obWF0NCBtKTsKCnZvaWQgbWFpbigpCnsKCW1hdDQgaW52UF80MTA7CgltYXQ0IHBhcmFtXzQxMzsKCW1hdDMgaW52TVZfNDE2OwoJbWF0MyBwYXJhbV80MzI7Cgl2ZWM0IHBfNDM1OwoJdmVjMyB1bnByb2plY3RlZF80NDQ7CglwYXJhbV80MTMgPSBQOwoJaW52UF80MTAgPSBpbnZlcnNlXyhwYXJhbV80MTMpOwoJcGFyYW1fNDMyID0gbWF0Myh2ZWMzKFZbMF1bMF0sIFZbMF1bMV0sIFZbMF1bMl0pLCB2ZWMzKFZbMV1bMF0sIFZbMV1bMV0sIFZbMV1bMl0pLCB2ZWMzKFZbMl1bMF0sIFZbMl1bMV0sIFZbMl1bMl0pKTsKCWludk1WXzQxNiA9IHRyYW5zcG9zZV8ocGFyYW1fNDMyKTsKCXBfNDM1ID0gdmVjNChwb3NbMF0sIHBvc1sxXSwgMC4wLCAxLjApOwoJdW5wcm9qZWN0ZWRfNDQ0ID0gdmVjMygoaW52UF80MTAgKiBwXzQzNSlbMF0sIChpbnZQXzQxMCAqIHBfNDM1KVsxXSwgKGludlBfNDEwICogcF80MzUpWzJdKTsKCW5vcm1hbCA9IChpbnZNVl80MTYgKiB1bnByb2plY3RlZF80NDQpOwoJZ2xfUG9zaXRpb24gPSB2ZWM0KHBvc1swXSwgcG9zWzFdLCAwLjAsIDEuMCk7CglyZXR1cm47Cn0KCm1hdDMgdHJhbnNwb3NlXyhtYXQzIG0pCnsKCXJldHVybiBtYXQzKHZlYzMobVswXVswXSwgbVsxXVswXSwgbVsyXVswXSksIHZlYzMobVswXVsxXSwgbVsxXVsxXSwgbVsyXVsxXSksIHZlYzMobVswXVsyXSwgbVsxXVsyXSwgbVsyXVsyXSkpOwp9CgptYXQ0IGludmVyc2VfKG1hdDQgbSkKewoJZmxvYXQgYTAwXzU1OwoJZmxvYXQgYTAxXzU4OwoJZmxvYXQgYTAyXzYxOwoJZmxvYXQgYTAzXzY0OwoJZmxvYXQgYTEwXzY4OwoJZmxvYXQgYTExXzcxOwoJZmxvYXQgYTEyXzc0OwoJZmxvYXQgYTEzXzc3OwoJZmxvYXQgYTIwXzgwOwoJZmxvYXQgYTIxXzgzOwoJZmxvYXQgYTIyXzg2OwoJZmxvYXQgYTIzXzg5OwoJZmxvYXQgYTMwXzkyOwoJZmxvYXQgYTMxXzk2OwoJZmxvYXQgYTMyXzk5OwoJZmxvYXQgYTMzXzEwMjsKCWZsb2F0IGIwMF8xMDU7CglmbG9hdCBiMDFfMTEzOwoJZmxvYXQgYjAyXzEyMTsKCWZsb2F0IGIwM18xMjk7CglmbG9hdCBiMDRfMTM3OwoJZmxvYXQgYjA1XzE0NTsKCWZsb2F0IGIwNl8xNTM7CglmbG9hdCBiMDdfMTYxOwoJZmxvYXQgYjA4XzE2OTsKCWZsb2F0IGIwOV8xNzc7CglmbG9hdCBiMTBfMTg1OwoJZmxvYXQgYjExXzE5MzsKCWZsb2F0IGRldF8yMDE7CglhMDBfNTUgPSBtWzBdWzBdOwoJYTAxXzU4ID0gbVswXVsxXTsKCWEwMl82MSA9IG1bMF1bMl07CglhMDNfNjQgPSBtWzBdWzNdOwoJYTEwXzY4ID0gbVsxXVswXTsKCWExMV83MSA9IG1bMV1bMV07CglhMTJfNzQgPSBtWzFdWzJdOwoJYTEzXzc3ID0gbVsxXVszXTsKCWEyMF84MCA9IG1bMl1bMF07CglhMjFfODMgPSBtWzJdWzFdOwoJYTIyXzg2ID0gbVsyXVsyXTsKCWEyM184OSA9IG1bMl1bM107CglhMzBfOTIgPSBtWzNdWzBdOwoJYTMxXzk2ID0gbVszXVsxXTsKCWEzMl85OSA9IG1bM11bMl07CglhMzNfMTAyID0gbVszXVszXTsKCWIwMF8xMDUgPSAoKGEwMF81NSAqIGExMV83MSkgLSAoYTAxXzU4ICogYTEwXzY4KSk7CgliMDFfMTEzID0gKChhMDBfNTUgKiBhMTJfNzQpIC0gKGEwMl82MSAqIGExMF82OCkpOwoJYjAyXzEyMSA9ICgoYTAwXzU1ICogYTEzXzc3KSAtIChhMDNfNjQgKiBhMTBfNjgpKTsKCWIwM18xMjkgPSAoKGEwMV81OCAqIGExMl83NCkgLSAoYTAyXzYxICogYTExXzcxKSk7CgliMDRfMTM3ID0gKChhMDFfNTggKiBhMTNfNzcpIC0gKGEwM182NCAqIGExMV83MSkpOwoJYjA1XzE0NSA9ICgoYTAyXzYxICogYTEzXzc3KSAtIChhMDNfNjQgKiBhMTJfNzQpKTsKCWIwNl8xNTMgPSAoKGEyMF84MCAqIGEzMV85NikgLSAoYTIxXzgzICogYTMwXzkyKSk7CgliMDdfMTYxID0gKChhMjBfODAgKiBhMzJfOTkpIC0gKGEyMl84NiAqIGEzMF85MikpOwoJYjA4XzE2OSA9ICgoYTIwXzgwICogYTMzXzEwMikgLSAoYTIzXzg5ICogYTMwXzkyKSk7CgliMDlfMTc3ID0gKChhMjFfODMgKiBhMzJfOTkpIC0gKGEyMl84NiAqIGEzMV85NikpOwoJYjEwXzE4NSA9ICgoYTIxXzgzICogYTMzXzEwMikgLSAoYTIzXzg5ICogYTMxXzk2KSk7CgliMTFfMTkzID0gKChhMjJfODYgKiBhMzNfMTAyKSAtIChhMjNfODkgKiBhMzJfOTkpKTsKCWRldF8yMDEgPSAoKCgoKChiMDBfMTA1ICogYjExXzE5MykgLSAoYjAxXzExMyAqIGIxMF8xODUpKSArIChiMDJfMTIxICogYjA5XzE3NykpICsgKGIwM18xMjkgKiBiMDhfMTY5KSkgLSAoYjA0XzEzNyAqIGIwN18xNjEpKSArIChiMDVfMTQ1ICogYjA2XzE1MykpOwoJcmV0dXJuIChtYXQ0KHZlYzQoKCgoYTExXzcxICogYjExXzE5MykgLSAoYTEyXzc0ICogYjEwXzE4NSkpICsgKGExM183NyAqIGIwOV8xNzcpKSwgKCgoYTAyXzYxICogYjEwXzE4NSkgLSAoYTAxXzU4ICogYjExXzE5MykpIC0gKGEwM182NCAqIGIwOV8xNzcpKSwgKCgoYTMxXzk2ICogYjA1XzE0NSkgLSAoYTMyXzk5ICogYjA0XzEzNykpICsgKGEzM18xMDIgKiBiMDNfMTI5KSksICgoKGEyMl84NiAqIGIwNF8xMzcpIC0gKGEyMV84MyAqIGIwNV8xNDUpKSAtIChhMjNfODkgKiBiMDNfMTI5KSkpLCB2ZWM0KCgoKGExMl83NCAqIGIwOF8xNjkpIC0gKGExMF82OCAqIGIxMV8xOTMpKSAtIChhMTNfNzcgKiBiMDdfMTYxKSksICgoKGEwMF81NSAqIGIxMV8xOTMpIC0gKGEwMl82MSAqIGIwOF8xNjkpKSArIChhMDNfNjQgKiBiMDdfMTYxKSksICgoKGEzMl85OSAqIGIwMl8xMjEpIC0gKGEzMF85MiAqIGIwNV8xNDUpKSAtIChhMzNfMTAyICogYjAxXzExMykpLCAoKChhMjBfODAgKiBiMDVfMTQ1KSAtIChhMjJfODYgKiBiMDJfMTIxKSkgKyAoYTIzXzg5ICogYjAxXzExMykpKSwgdmVjNCgoKChhMTBfNjggKiBiMTBfMTg1KSAtIChhMTFfNzEgKiBiMDhfMTY5KSkgKyAoYTEzXzc3ICogYjA2XzE1MykpLCAoKChhMDFfNTggKiBiMDhfMTY5KSAtIChhMDBfNTUgKiBiMTBfMTg1KSkgLSAoYTAzXzY0ICogYjA2XzE1MykpLCAoKChhMzBfOTIgKiBiMDRfMTM3KSAtIChhMzFfOTYgKiBiMDJfMTIxKSkgKyAoYTMzXzEwMiAqIGIwMF8xMDUpKSwgKCgoYTIxXzgzICogYjAyXzEyMSkgLSAoYTIwXzgwICogYjA0XzEzNykpIC0gKGEyM184OSAqIGIwMF8xMDUpKSksIHZlYzQoKCgoYTExXzcxICogYjA3XzE2MSkgLSAoYTEwXzY4ICogYjA5XzE3NykpIC0gKGExMl83NCAqIGIwNl8xNTMpKSwgKCgoYTAwXzU1ICogYjA5XzE3NykgLSAoYTAxXzU4ICogYjA3XzE2MSkpICsgKGEwMl82MSAqIGIwNl8xNTMpKSwgKCgoYTMxXzk2ICogYjAxXzExMykgLSAoYTMwXzkyICogYjAzXzEyOSkpIC0gKGEzMl85OSAqIGIwMF8xMDUpKSwgKCgoYTIwXzgwICogYjAzXzEyOSkgLSAoYTIxXzgzICogYjAxXzExMykpICsgKGEyMl84NiAqIGIwMF8xMDUpKSkpICogKDEuMCAvIGRldF8yMDEpKTsKfQoK";
kha_Shaders.forward_fragData = "s19887:I3ZlcnNpb24gMTAwCi8vIFVua25vd24gZXhlY3V0aW9uIG1vZGUgOAojZXh0ZW5zaW9uIEdMX0VYVF9zaGFkZXJfdGV4dHVyZV9sb2QgOiByZXF1aXJlCnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0Owp1bmlmb3JtIHNhbXBsZXIyRCBzaGFkb3dNYXA7CnZhcnlpbmcgdmVjMyBub3JtYWw7CnZhcnlpbmcgdmVjMyBsaWdodERpcjsKdW5pZm9ybSBib29sIHJlY2VpdmVTaGFkb3c7CnZhcnlpbmcgdmVjNCBsUG9zOwp2YXJ5aW5nIHZlYzQgbWF0Q29sb3I7CnVuaWZvcm0gYm9vbCBsaWdodGluZzsKdmFyeWluZyB2ZWMzIGV5ZURpcjsKdW5pZm9ybSBmbG9hdCBtZXRhbG5lc3M7CnVuaWZvcm0gZmxvYXQgcm91Z2huZXNzOwp1bmlmb3JtIHNhbXBsZXIyRCBzZW52bWFwSXJyYWRpYW5jZTsKdW5pZm9ybSBzYW1wbGVyMkQgc2Vudm1hcFJhZGlhbmNlOwp1bmlmb3JtIHNhbXBsZXIyRCBzZW52bWFwQnJkZjsKdmFyeWluZyB2ZWMzIHBvc2l0aW9uOwoKCmZsb2F0IHJhbmQodmVjMiBjbyk7CgpmbG9hdCB0ZXh0dXJlMkRDb21wYXJlKHZlYzIgdXYsIGZsb2F0IGNvbXBhcmUpOwoKZmxvYXQgdGV4dHVyZTJEU2hhZG93TGVycCh2ZWMyIHNpemUsIHZlYzIgdXYsIGZsb2F0IGNvbXBhcmUpOwoKZmxvYXQgUENGKHZlYzIgc2l6ZSwgdmVjMiB1diwgZmxvYXQgY29tcGFyZSk7CgpmbG9hdCBzaGFkb3dUZXN0KHZlYzQgbFBvcyk7Cgp2ZWMyIGVudk1hcEVxdWlyZWN0KHZlYzMgbm9ybWFsKTsKCnZlYzIgTGlnaHRpbmdGdW5jR0dYX0ZWKGZsb2F0IGRvdExILCBmbG9hdCByb3VnaG5lc3MpOwoKZmxvYXQgTGlnaHRpbmdGdW5jR0dYX0QoZmxvYXQgZG90TkgsIGZsb2F0IHJvdWdobmVzcyk7CgpmbG9hdCBMaWdodGluZ0Z1bmNHR1hfT1BUMyhmbG9hdCBkb3ROTCwgZmxvYXQgZG90TEgsIGZsb2F0IGRvdE5ILCBmbG9hdCByb3VnaG5lc3MsIGZsb2F0IEYwKTsKCnZlYzMgZl9zY2hsaWNrKHZlYzMgZjAsIGZsb2F0IHZoKTsKCmZsb2F0IHZfc21pdGhzY2hsaWNrKGZsb2F0IG5sLCBmbG9hdCBudiwgZmxvYXQgYSk7CgpmbG9hdCBkX2dneChmbG9hdCBuaCwgZmxvYXQgYSk7Cgp2ZWMzIHNwZWN1bGFyQlJERih2ZWMzIGYwLCBmbG9hdCByb3VnaG5lc3MsIGZsb2F0IG5sLCBmbG9hdCBuaCwgZmxvYXQgbnYsIGZsb2F0IHZoLCBmbG9hdCBsaCk7Cgp2ZWMzIGxhbWJlcnQodmVjMyBhbGJlZG8sIGZsb2F0IG5sKTsKCnZlYzMgYnVybGV5KHZlYzMgYWxiZWRvLCBmbG9hdCByb3VnaG5lc3MsIGZsb2F0IE5vViwgZmxvYXQgTm9MLCBmbG9hdCBWb0gpOwoKdmVjMyBvcmVuTmF5YXIodmVjMyBhbGJlZG8sIGZsb2F0IHJvdWdobmVzcywgZmxvYXQgTm9WLCBmbG9hdCBOb0wsIGZsb2F0IFZvSCk7Cgp2ZWMzIGRpZmZ1c2VCUkRGKHZlYzMgYWxiZWRvLCBmbG9hdCByb3VnaG5lc3MsIGZsb2F0IG52LCBmbG9hdCBubCwgZmxvYXQgdmgsIGZsb2F0IGx2KTsKCnZlYzMgc3VyZmFjZUFsYmVkbyh2ZWMzIGJhc2VDb2xvciwgZmxvYXQgbWV0YWxuZXNzKTsKCnZlYzMgc3VyZmFjZUYwKHZlYzMgYmFzZUNvbG9yLCBmbG9hdCBtZXRhbG5lc3MpOwoKZmxvYXQgZ2V0TWlwTGV2ZWxGcm9tUm91Z2huZXNzKGZsb2F0IHJvdWdobmVzcyk7Cgp2b2lkIG1haW4oKQp7Cgl2ZWMzIG5fNzE4OwoJdmVjMyBsXzcyMzsKCWZsb2F0IGRvdE5MXzcyNzsKCWZsb2F0IHZpc2liaWxpdHlfNzMyOwoJdmVjNCBwYXJhbV83NDY7Cgl2ZWMzIGJhc2VDb2xvcl83NDk7Cgl2ZWMzIHZfNzYxOwoJdmVjMyBoXzc2NTsKCWZsb2F0IGRvdE5WXzc3MDsKCWZsb2F0IGRvdE5IXzc3NTsKCWZsb2F0IGRvdFZIXzc4MDsKCWZsb2F0IGRvdExWXzc4NTsKCWZsb2F0IGRvdExIXzc5MDsKCXZlYzMgYWxiZWRvXzc5NTsKCXZlYzMgcGFyYW1fNzk4OwoJZmxvYXQgcGFyYW1fODAwOwoJdmVjMyBmMF84MDM7Cgl2ZWMzIHBhcmFtXzgwNDsKCWZsb2F0IHBhcmFtXzgwNjsKCXZlYzMgZGlyZWN0XzgwOTsKCXZlYzMgcGFyYW1fODExOwoJZmxvYXQgcGFyYW1fODEzOwoJZmxvYXQgcGFyYW1fODE1OwoJZmxvYXQgcGFyYW1fODE3OwoJZmxvYXQgcGFyYW1fODE5OwoJZmxvYXQgcGFyYW1fODIxOwoJdmVjMyBwYXJhbV84MjQ7CglmbG9hdCBwYXJhbV84MjY7CglmbG9hdCBwYXJhbV84Mjg7CglmbG9hdCBwYXJhbV84MzA7CglmbG9hdCBwYXJhbV84MzI7CglmbG9hdCBwYXJhbV84MzQ7CglmbG9hdCBwYXJhbV84MzY7Cgl2ZWMzIGluZGlyZWN0RGlmZnVzZV84NDA7Cgl2ZWMzIHBhcmFtXzg0MzsKCXZlYzMgcmVmbGVjdGlvbldvcmxkXzg1MjsKCWZsb2F0IGxvZF84NTc7CglmbG9hdCBwYXJhbV84NTg7Cgl2ZWMzIHByZWZpbHRlcmVkQ29sb3JfODYxOwoJdmVjMyBwYXJhbV84NjQ7Cgl2ZWMyIGVudkJSREZfODcyOwoJdmVjMyBpbmRpcmVjdFNwZWN1bGFyXzg4MTsKCXZlYzMgaW5kaXJlY3RfODkyOwoJdmVjNCBvdXRDb2xvcl84OTY7CgluXzcxOCA9IG5vcm1hbGl6ZShub3JtYWwpOwoJbF83MjMgPSBub3JtYWxpemUobGlnaHREaXIpOwoJZG90TkxfNzI3ID0gbWF4KGRvdChuXzcxOCwgbF83MjMpLCAwLjApOwoJdmlzaWJpbGl0eV83MzIgPSAxLjA7CgkvLyBNZXJnZSA3MzcgMAoJaWYgKHJlY2VpdmVTaGFkb3cpIC8vIHRydWU6IDczNiBmYWxzZTogNzM3Cgl7IC8vIExhYmVsIDczNgoJCS8vIE1lcmdlIDc0NSAwCgkJaWYgKChsUG9zWzNdID4gMC4wKSkgLy8gdHJ1ZTogNzQ0IGZhbHNlOiA3NDUKCQl7IC8vIExhYmVsIDc0NAoJCQlwYXJhbV83NDYgPSBsUG9zOwoJCQl2aXNpYmlsaXR5XzczMiA9IHNoYWRvd1Rlc3QocGFyYW1fNzQ2KTsKCQkJLy8gQnJhbmNoIHRvIDc0NQoJCX0gLy8gTGFiZWwgNzQ1CgkJLy8gQnJhbmNoIHRvIDczNwoJfSAvLyBMYWJlbCA3MzcKCWJhc2VDb2xvcl83NDkgPSB2ZWMzKG1hdENvbG9yWzBdLCBtYXRDb2xvclsxXSwgbWF0Q29sb3JbMl0pOwoJYmFzZUNvbG9yXzc0OSA9IHBvdyhiYXNlQ29sb3JfNzQ5LCB2ZWMzKDIuMiwgMi4yLCAyLjIpKTsKCS8vIE1lcmdlIDc2MCAwCglpZiAobGlnaHRpbmcpIC8vIHRydWU6IDc1OSBmYWxzZTogOTEwCgl7IC8vIExhYmVsIDc1OQoJCXZfNzYxID0gbm9ybWFsaXplKGV5ZURpcik7CgkJaF83NjUgPSBub3JtYWxpemUoKHZfNzYxICsgbF83MjMpKTsKCQlkb3ROVl83NzAgPSBtYXgoZG90KG5fNzE4LCB2Xzc2MSksIDAuMCk7CgkJZG90TkhfNzc1ID0gbWF4KGRvdChuXzcxOCwgaF83NjUpLCAwLjApOwoJCWRvdFZIXzc4MCA9IG1heChkb3Qodl83NjEsIGhfNzY1KSwgMC4wKTsKCQlkb3RMVl83ODUgPSBtYXgoZG90KGxfNzIzLCB2Xzc2MSksIDAuMCk7CgkJZG90TEhfNzkwID0gbWF4KGRvdChsXzcyMywgaF83NjUpLCAwLjApOwoJCXBhcmFtXzc5OCA9IGJhc2VDb2xvcl83NDk7CgkJcGFyYW1fODAwID0gbWV0YWxuZXNzOwoJCWFsYmVkb183OTUgPSBzdXJmYWNlQWxiZWRvKHBhcmFtXzc5OCwgcGFyYW1fODAwKTsKCQlwYXJhbV84MDQgPSBiYXNlQ29sb3JfNzQ5OwoJCXBhcmFtXzgwNiA9IG1ldGFsbmVzczsKCQlmMF84MDMgPSBzdXJmYWNlRjAocGFyYW1fODA0LCBwYXJhbV84MDYpOwoJCXBhcmFtXzgxMSA9IGFsYmVkb183OTU7CgkJcGFyYW1fODEzID0gcm91Z2huZXNzOwoJCXBhcmFtXzgxNSA9IGRvdE5WXzc3MDsKCQlwYXJhbV84MTcgPSBkb3ROTF83Mjc7CgkJcGFyYW1fODE5ID0gZG90VkhfNzgwOwoJCXBhcmFtXzgyMSA9IGRvdExWXzc4NTsKCQlwYXJhbV84MjQgPSBmMF84MDM7CgkJcGFyYW1fODI2ID0gcm91Z2huZXNzOwoJCXBhcmFtXzgyOCA9IGRvdE5MXzcyNzsKCQlwYXJhbV84MzAgPSBkb3ROSF83NzU7CgkJcGFyYW1fODMyID0gZG90TlZfNzcwOwoJCXBhcmFtXzgzNCA9IGRvdFZIXzc4MDsKCQlwYXJhbV84MzYgPSBkb3RMSF83OTA7CgkJZGlyZWN0XzgwOSA9IChkaWZmdXNlQlJERihwYXJhbV84MTEsIHBhcmFtXzgxMywgcGFyYW1fODE1LCBwYXJhbV84MTcsIHBhcmFtXzgxOSwgcGFyYW1fODIxKSArIHNwZWN1bGFyQlJERihwYXJhbV84MjQsIHBhcmFtXzgyNiwgcGFyYW1fODI4LCBwYXJhbV84MzAsIHBhcmFtXzgzMiwgcGFyYW1fODM0LCBwYXJhbV84MzYpKTsKCQlwYXJhbV84NDMgPSBuXzcxODsKCQlpbmRpcmVjdERpZmZ1c2VfODQwID0gdmVjMyh0ZXh0dXJlMkQoc2Vudm1hcElycmFkaWFuY2UsIGVudk1hcEVxdWlyZWN0KHBhcmFtXzg0MykpWzBdLCB0ZXh0dXJlMkQoc2Vudm1hcElycmFkaWFuY2UsIGVudk1hcEVxdWlyZWN0KHBhcmFtXzg0MykpWzFdLCB0ZXh0dXJlMkQoc2Vudm1hcElycmFkaWFuY2UsIGVudk1hcEVxdWlyZWN0KHBhcmFtXzg0MykpWzJdKTsKCQlpbmRpcmVjdERpZmZ1c2VfODQwID0gKHBvdyhpbmRpcmVjdERpZmZ1c2VfODQwLCB2ZWMzKDIuMiwgMi4yLCAyLjIpKSAqIGFsYmVkb183OTUpOwoJCXJlZmxlY3Rpb25Xb3JsZF84NTIgPSByZWZsZWN0KC12Xzc2MSwgbl83MTgpOwoJCXBhcmFtXzg1OCA9IHJvdWdobmVzczsKCQlsb2RfODU3ID0gZ2V0TWlwTGV2ZWxGcm9tUm91Z2huZXNzKHBhcmFtXzg1OCk7CgkJcGFyYW1fODY0ID0gcmVmbGVjdGlvbldvcmxkXzg1MjsKCQlwcmVmaWx0ZXJlZENvbG9yXzg2MSA9IHZlYzModGV4dHVyZTJETG9kRVhUKHNlbnZtYXBSYWRpYW5jZSwgZW52TWFwRXF1aXJlY3QocGFyYW1fODY0KSwgbG9kXzg1NylbMF0sIHRleHR1cmUyRExvZEVYVChzZW52bWFwUmFkaWFuY2UsIGVudk1hcEVxdWlyZWN0KHBhcmFtXzg2NCksIGxvZF84NTcpWzFdLCB0ZXh0dXJlMkRMb2RFWFQoc2Vudm1hcFJhZGlhbmNlLCBlbnZNYXBFcXVpcmVjdChwYXJhbV84NjQpLCBsb2RfODU3KVsyXSk7CgkJcHJlZmlsdGVyZWRDb2xvcl84NjEgPSBwb3cocHJlZmlsdGVyZWRDb2xvcl84NjEsIHZlYzMoMi4yLCAyLjIsIDIuMikpOwoJCWVudkJSREZfODcyID0gdmVjMih0ZXh0dXJlMkQoc2Vudm1hcEJyZGYsIHZlYzIocm91Z2huZXNzLCAoMS4wIC0gZG90TlZfNzcwKSkpWzBdLCB0ZXh0dXJlMkQoc2Vudm1hcEJyZGYsIHZlYzIocm91Z2huZXNzLCAoMS4wIC0gZG90TlZfNzcwKSkpWzFdKTsKCQlpbmRpcmVjdFNwZWN1bGFyXzg4MSA9IChwcmVmaWx0ZXJlZENvbG9yXzg2MSAqICgoZjBfODAzICogZW52QlJERl84NzJbMF0pICsgdmVjMyhlbnZCUkRGXzg3MlsxXSwgZW52QlJERl84NzJbMV0sIGVudkJSREZfODcyWzFdKSkpOwoJCWluZGlyZWN0Xzg5MiA9IChpbmRpcmVjdERpZmZ1c2VfODQwICsgaW5kaXJlY3RTcGVjdWxhcl84ODEpOwoJCW91dENvbG9yXzg5NiA9IHZlYzQodmVjMygoKGRpcmVjdF84MDkgKiB2aXNpYmlsaXR5XzczMikgKyBpbmRpcmVjdF84OTIpWzBdLCAoKGRpcmVjdF84MDkgKiB2aXNpYmlsaXR5XzczMikgKyBpbmRpcmVjdF84OTIpWzFdLCAoKGRpcmVjdF84MDkgKiB2aXNpYmlsaXR5XzczMikgKyBpbmRpcmVjdF84OTIpWzJdKVswXSwgdmVjMygoKGRpcmVjdF84MDkgKiB2aXNpYmlsaXR5XzczMikgKyBpbmRpcmVjdF84OTIpWzBdLCAoKGRpcmVjdF84MDkgKiB2aXNpYmlsaXR5XzczMikgKyBpbmRpcmVjdF84OTIpWzFdLCAoKGRpcmVjdF84MDkgKiB2aXNpYmlsaXR5XzczMikgKyBpbmRpcmVjdF84OTIpWzJdKVsxXSwgdmVjMygoKGRpcmVjdF84MDkgKiB2aXNpYmlsaXR5XzczMikgKyBpbmRpcmVjdF84OTIpWzBdLCAoKGRpcmVjdF84MDkgKiB2aXNpYmlsaXR5XzczMikgKyBpbmRpcmVjdF84OTIpWzFdLCAoKGRpcmVjdF84MDkgKiB2aXNpYmlsaXR5XzczMikgKyBpbmRpcmVjdF84OTIpWzJdKVsyXSwgMS4wKTsKCQkvLyBCcmFuY2ggdG8gNzYwCgl9CgllbHNlCgl7IC8vIExhYmVsIDkxMAoJCW91dENvbG9yXzg5NiA9IHZlYzQoKGJhc2VDb2xvcl83NDkgKiB2aXNpYmlsaXR5XzczMilbMF0sIChiYXNlQ29sb3JfNzQ5ICogdmlzaWJpbGl0eV83MzIpWzFdLCAoYmFzZUNvbG9yXzc0OSAqIHZpc2liaWxpdHlfNzMyKVsyXSwgMS4wKTsKCQkvLyBCcmFuY2ggdG8gNzYwCgl9IC8vIExhYmVsIDc2MAoJZ2xfRnJhZ0NvbG9yID0gdmVjNChwb3codmVjMyhvdXRDb2xvcl84OTZbMF0sIG91dENvbG9yXzg5NlsxXSwgb3V0Q29sb3JfODk2WzJdKSwgdmVjMygwLjQ1NDU0NSwgMC40NTQ1NDUsIDAuNDU0NTQ1KSlbMF0sIHBvdyh2ZWMzKG91dENvbG9yXzg5NlswXSwgb3V0Q29sb3JfODk2WzFdLCBvdXRDb2xvcl84OTZbMl0pLCB2ZWMzKDAuNDU0NTQ1LCAwLjQ1NDU0NSwgMC40NTQ1NDUpKVsxXSwgcG93KHZlYzMob3V0Q29sb3JfODk2WzBdLCBvdXRDb2xvcl84OTZbMV0sIG91dENvbG9yXzg5NlsyXSksIHZlYzMoMC40NTQ1NDUsIDAuNDU0NTQ1LCAwLjQ1NDU0NSkpWzJdLCBvdXRDb2xvcl84OTZbM10pOwoJcmV0dXJuOwp9CgpmbG9hdCByYW5kKHZlYzIgY28pCnsKCXJldHVybiBmcmFjdCgoc2luKGRvdChjbywgdmVjMigxMi45ODk4LCA3OC4yMzMpKSkgKiA0Mzc1OC41KSk7Cn0KCmZsb2F0IHRleHR1cmUyRENvbXBhcmUodmVjMiB1diwgZmxvYXQgY29tcGFyZSkKewoJZmxvYXQgZGVwdGhfMTM1OwoJZGVwdGhfMTM1ID0gKCh0ZXh0dXJlMkQoc2hhZG93TWFwLCB1dilbMF0gKiAyLjApIC0gMS4wKTsKCXJldHVybiBzdGVwKGNvbXBhcmUsIGRlcHRoXzEzNSk7Cn0KCmZsb2F0IHRleHR1cmUyRFNoYWRvd0xlcnAodmVjMiBzaXplLCB2ZWMyIHV2LCBmbG9hdCBjb21wYXJlKQp7Cgl2ZWMyIHRleGVsU2l6ZV8xNTQ7Cgl2ZWMyIGZfMTU4OwoJdmVjMiBjZW50cm9pZFVWXzE2NjsKCWZsb2F0IGxiXzE3NTsKCXZlYzIgcGFyYW1fMTgyOwoJZmxvYXQgcGFyYW1fMTgzOwoJZmxvYXQgbHRfMTg2OwoJdmVjMiBwYXJhbV8xOTI7CglmbG9hdCBwYXJhbV8xOTM7CglmbG9hdCByYl8xOTY7Cgl2ZWMyIHBhcmFtXzIwMjsKCWZsb2F0IHBhcmFtXzIwMzsKCWZsb2F0IHJ0XzIwNjsKCXZlYzIgcGFyYW1fMjExOwoJZmxvYXQgcGFyYW1fMjEyOwoJZmxvYXQgYV8yMTU7CglmbG9hdCBiXzIyMjsKCWZsb2F0IGNfMjI4OwoJdGV4ZWxTaXplXzE1NCA9ICh2ZWMyKDEuMCwgMS4wKSAvIHNpemUpOwoJZl8xNTggPSBmcmFjdCgoKHV2ICogc2l6ZSkgKyB2ZWMyKDAuNSwgMC41KSkpOwoJY2VudHJvaWRVVl8xNjYgPSAoZmxvb3IoKCh1diAqIHNpemUpICsgdmVjMigwLjUsIDAuNSkpKSAvIHNpemUpOwoJcGFyYW1fMTgyID0gKGNlbnRyb2lkVVZfMTY2ICsgKHRleGVsU2l6ZV8xNTQgKiB2ZWMyKDAuMCwgMC4wKSkpOwoJcGFyYW1fMTgzID0gY29tcGFyZTsKCWxiXzE3NSA9IHRleHR1cmUyRENvbXBhcmUocGFyYW1fMTgyLCBwYXJhbV8xODMpOwoJcGFyYW1fMTkyID0gKGNlbnRyb2lkVVZfMTY2ICsgKHRleGVsU2l6ZV8xNTQgKiB2ZWMyKDAuMCwgMS4wKSkpOwoJcGFyYW1fMTkzID0gY29tcGFyZTsKCWx0XzE4NiA9IHRleHR1cmUyRENvbXBhcmUocGFyYW1fMTkyLCBwYXJhbV8xOTMpOwoJcGFyYW1fMjAyID0gKGNlbnRyb2lkVVZfMTY2ICsgKHRleGVsU2l6ZV8xNTQgKiB2ZWMyKDEuMCwgMC4wKSkpOwoJcGFyYW1fMjAzID0gY29tcGFyZTsKCXJiXzE5NiA9IHRleHR1cmUyRENvbXBhcmUocGFyYW1fMjAyLCBwYXJhbV8yMDMpOwoJcGFyYW1fMjExID0gKGNlbnRyb2lkVVZfMTY2ICsgKHRleGVsU2l6ZV8xNTQgKiB2ZWMyKDEuMCwgMS4wKSkpOwoJcGFyYW1fMjEyID0gY29tcGFyZTsKCXJ0XzIwNiA9IHRleHR1cmUyRENvbXBhcmUocGFyYW1fMjExLCBwYXJhbV8yMTIpOwoJYV8yMTUgPSBtaXgobGJfMTc1LCBsdF8xODYsIGZfMTU4WzFdKTsKCWJfMjIyID0gbWl4KHJiXzE5NiwgcnRfMjA2LCBmXzE1OFsxXSk7CgljXzIyOCA9IG1peChhXzIxNSwgYl8yMjIsIGZfMTU4WzBdKTsKCXJldHVybiBjXzIyODsKfQoKZmxvYXQgUENGKHZlYzIgc2l6ZSwgdmVjMiB1diwgZmxvYXQgY29tcGFyZSkKewoJZmxvYXQgcmVzdWx0XzIzNjsKCXZlYzIgb2ZmXzIzNzsKCXZlYzIgcGFyYW1fMjQ1OwoJdmVjMiBwYXJhbV8yNDc7CglmbG9hdCBwYXJhbV8yNDg7Cgl2ZWMyIHBhcmFtXzI1OTsKCXZlYzIgcGFyYW1fMjYxOwoJZmxvYXQgcGFyYW1fMjYyOwoJdmVjMiBwYXJhbV8yNzM7Cgl2ZWMyIHBhcmFtXzI3NTsKCWZsb2F0IHBhcmFtXzI3NjsKCXZlYzIgcGFyYW1fMjg3OwoJdmVjMiBwYXJhbV8yODk7CglmbG9hdCBwYXJhbV8yOTA7Cgl2ZWMyIHBhcmFtXzMwMDsKCXZlYzIgcGFyYW1fMzAyOwoJZmxvYXQgcGFyYW1fMzAzOwoJdmVjMiBwYXJhbV8zMTM7Cgl2ZWMyIHBhcmFtXzMxNTsKCWZsb2F0IHBhcmFtXzMxNjsKCXZlYzIgcGFyYW1fMzI3OwoJdmVjMiBwYXJhbV8zMjk7CglmbG9hdCBwYXJhbV8zMzA7Cgl2ZWMyIHBhcmFtXzM0MDsKCXZlYzIgcGFyYW1fMzQyOwoJZmxvYXQgcGFyYW1fMzQzOwoJdmVjMiBwYXJhbV8zNTM7Cgl2ZWMyIHBhcmFtXzM1NTsKCWZsb2F0IHBhcmFtXzM1NjsKCXJlc3VsdF8yMzYgPSAwLjA7CglvZmZfMjM3ID0gKHZlYzIoLTEuMCwgLTEuMCkgLyBzaXplKTsKCXBhcmFtXzI0NSA9IHNpemU7CglwYXJhbV8yNDcgPSAodXYgKyBvZmZfMjM3KTsKCXBhcmFtXzI0OCA9IGNvbXBhcmU7CglyZXN1bHRfMjM2ID0gKHJlc3VsdF8yMzYgKyB0ZXh0dXJlMkRTaGFkb3dMZXJwKHBhcmFtXzI0NSwgcGFyYW1fMjQ3LCBwYXJhbV8yNDgpKTsKCW9mZl8yMzcgPSAodmVjMigtMS4wLCAwLjApIC8gc2l6ZSk7CglwYXJhbV8yNTkgPSBzaXplOwoJcGFyYW1fMjYxID0gKHV2ICsgb2ZmXzIzNyk7CglwYXJhbV8yNjIgPSBjb21wYXJlOwoJcmVzdWx0XzIzNiA9IChyZXN1bHRfMjM2ICsgdGV4dHVyZTJEU2hhZG93TGVycChwYXJhbV8yNTksIHBhcmFtXzI2MSwgcGFyYW1fMjYyKSk7CglvZmZfMjM3ID0gKHZlYzIoLTEuMCwgMS4wKSAvIHNpemUpOwoJcGFyYW1fMjczID0gc2l6ZTsKCXBhcmFtXzI3NSA9ICh1diArIG9mZl8yMzcpOwoJcGFyYW1fMjc2ID0gY29tcGFyZTsKCXJlc3VsdF8yMzYgPSAocmVzdWx0XzIzNiArIHRleHR1cmUyRFNoYWRvd0xlcnAocGFyYW1fMjczLCBwYXJhbV8yNzUsIHBhcmFtXzI3NikpOwoJb2ZmXzIzNyA9ICh2ZWMyKDAuMCwgLTEuMCkgLyBzaXplKTsKCXBhcmFtXzI4NyA9IHNpemU7CglwYXJhbV8yODkgPSAodXYgKyBvZmZfMjM3KTsKCXBhcmFtXzI5MCA9IGNvbXBhcmU7CglyZXN1bHRfMjM2ID0gKHJlc3VsdF8yMzYgKyB0ZXh0dXJlMkRTaGFkb3dMZXJwKHBhcmFtXzI4NywgcGFyYW1fMjg5LCBwYXJhbV8yOTApKTsKCW9mZl8yMzcgPSAodmVjMigwLjAsIDAuMCkgLyBzaXplKTsKCXBhcmFtXzMwMCA9IHNpemU7CglwYXJhbV8zMDIgPSAodXYgKyBvZmZfMjM3KTsKCXBhcmFtXzMwMyA9IGNvbXBhcmU7CglyZXN1bHRfMjM2ID0gKHJlc3VsdF8yMzYgKyB0ZXh0dXJlMkRTaGFkb3dMZXJwKHBhcmFtXzMwMCwgcGFyYW1fMzAyLCBwYXJhbV8zMDMpKTsKCW9mZl8yMzcgPSAodmVjMigwLjAsIDEuMCkgLyBzaXplKTsKCXBhcmFtXzMxMyA9IHNpemU7CglwYXJhbV8zMTUgPSAodXYgKyBvZmZfMjM3KTsKCXBhcmFtXzMxNiA9IGNvbXBhcmU7CglyZXN1bHRfMjM2ID0gKHJlc3VsdF8yMzYgKyB0ZXh0dXJlMkRTaGFkb3dMZXJwKHBhcmFtXzMxMywgcGFyYW1fMzE1LCBwYXJhbV8zMTYpKTsKCW9mZl8yMzcgPSAodmVjMigxLjAsIC0xLjApIC8gc2l6ZSk7CglwYXJhbV8zMjcgPSBzaXplOwoJcGFyYW1fMzI5ID0gKHV2ICsgb2ZmXzIzNyk7CglwYXJhbV8zMzAgPSBjb21wYXJlOwoJcmVzdWx0XzIzNiA9IChyZXN1bHRfMjM2ICsgdGV4dHVyZTJEU2hhZG93TGVycChwYXJhbV8zMjcsIHBhcmFtXzMyOSwgcGFyYW1fMzMwKSk7CglvZmZfMjM3ID0gKHZlYzIoMS4wLCAwLjApIC8gc2l6ZSk7CglwYXJhbV8zNDAgPSBzaXplOwoJcGFyYW1fMzQyID0gKHV2ICsgb2ZmXzIzNyk7CglwYXJhbV8zNDMgPSBjb21wYXJlOwoJcmVzdWx0XzIzNiA9IChyZXN1bHRfMjM2ICsgdGV4dHVyZTJEU2hhZG93TGVycChwYXJhbV8zNDAsIHBhcmFtXzM0MiwgcGFyYW1fMzQzKSk7CglvZmZfMjM3ID0gKHZlYzIoMS4wLCAxLjApIC8gc2l6ZSk7CglwYXJhbV8zNTMgPSBzaXplOwoJcGFyYW1fMzU1ID0gKHV2ICsgb2ZmXzIzNyk7CglwYXJhbV8zNTYgPSBjb21wYXJlOwoJcmVzdWx0XzIzNiA9IChyZXN1bHRfMjM2ICsgdGV4dHVyZTJEU2hhZG93TGVycChwYXJhbV8zNTMsIHBhcmFtXzM1NSwgcGFyYW1fMzU2KSk7CglyZXR1cm4gKHJlc3VsdF8yMzYgLyA5LjApOwp9CgpmbG9hdCBzaGFkb3dUZXN0KHZlYzQgbFBvcykKewoJdmVjNCBsUG9zSF8zNjU7Cgl2ZWMyIHBhcmFtXzM5MTsKCXZlYzIgcGFyYW1fMzkyOwoJZmxvYXQgcGFyYW1fMzk1OwoJbFBvc0hfMzY1ID0gKGxQb3MgLyB2ZWM0KGxQb3NbM10sIGxQb3NbM10sIGxQb3NbM10sIGxQb3NbM10pKTsKCWxQb3NIXzM2NVswXSA9ICgobFBvc0hfMzY1WzBdICsgMS4wKSAvIDIuMCk7CglsUG9zSF8zNjVbMV0gPSAoMS4wIC0gKCgtbFBvc0hfMzY1WzFdICsgMS4wKSAvIDIuMCkpOwoJcGFyYW1fMzkxID0gdmVjMigyMDQ4LjAsIDIwNDguMCk7CglwYXJhbV8zOTIgPSB2ZWMyKGxQb3NIXzM2NVswXSwgbFBvc0hfMzY1WzFdKTsKCXBhcmFtXzM5NSA9IChsUG9zSF8zNjVbMl0gLSAwLjAwNSk7CglyZXR1cm4gUENGKHBhcmFtXzM5MSwgcGFyYW1fMzkyLCBwYXJhbV8zOTUpOwp9Cgp2ZWMyIGVudk1hcEVxdWlyZWN0KHZlYzMgbm9ybWFsKQp7CglmbG9hdCBwaGlfMzk4OwoJZmxvYXQgdGhldGFfNDAyOwoJcGhpXzM5OCA9IGFjb3Mobm9ybWFsWzJdKTsKCXRoZXRhXzQwMiA9IChhdGFuKC1ub3JtYWxbMV0sIG5vcm1hbFswXSkgKyAzLjE0MTU5KTsKCXJldHVybiB2ZWMyKCh0aGV0YV80MDIgLyA2LjI4MzE5KSwgKHBoaV8zOTggLyAzLjE0MTU5KSk7Cn0KCnZlYzIgTGlnaHRpbmdGdW5jR0dYX0ZWKGZsb2F0IGRvdExILCBmbG9hdCByb3VnaG5lc3MpCnsKCWZsb2F0IGFscGhhXzQxODsKCWZsb2F0IGRvdExINV80MjI7CglmbG9hdCBGX2FfNDI3OwoJZmxvYXQgRl9iXzQyODsKCWZsb2F0IGtfNDMwOwoJZmxvYXQgazJfNDMzOwoJZmxvYXQgaW52SzJfNDM3OwoJZmxvYXQgdmlzXzQ0MDsKCWFscGhhXzQxOCA9IChyb3VnaG5lc3MgKiByb3VnaG5lc3MpOwoJZG90TEg1XzQyMiA9IHBvdygoMS4wIC0gZG90TEgpLCA1LjApOwoJRl9hXzQyNyA9IDEuMDsKCUZfYl80MjggPSBkb3RMSDVfNDIyOwoJa180MzAgPSAoYWxwaGFfNDE4IC8gMi4wKTsKCWsyXzQzMyA9IChrXzQzMCAqIGtfNDMwKTsKCWludksyXzQzNyA9ICgxLjAgLSBrMl80MzMpOwoJdmlzXzQ0MCA9IGludmVyc2VzcXJ0KCgoKGRvdExIICogZG90TEgpICogaW52SzJfNDM3KSArIGsyXzQzMykpOwoJcmV0dXJuIHZlYzIoKEZfYV80MjcgKiB2aXNfNDQwKSwgKEZfYl80MjggKiB2aXNfNDQwKSk7Cn0KCmZsb2F0IExpZ2h0aW5nRnVuY0dHWF9EKGZsb2F0IGRvdE5ILCBmbG9hdCByb3VnaG5lc3MpCnsKCWZsb2F0IGFscGhhXzQ1NzsKCWZsb2F0IGFscGhhU3FyXzQ2MTsKCWZsb2F0IHBpXzQ2NTsKCWZsb2F0IGRlbm9tXzQ2NzsKCWZsb2F0IERfNDc1OwoJYWxwaGFfNDU3ID0gKHJvdWdobmVzcyAqIHJvdWdobmVzcyk7CglhbHBoYVNxcl80NjEgPSAoYWxwaGFfNDU3ICogYWxwaGFfNDU3KTsKCXBpXzQ2NSA9IDMuMTQxNTk7CglkZW5vbV80NjcgPSAoKChkb3ROSCAqIGRvdE5IKSAqIChhbHBoYVNxcl80NjEgLSAxLjApKSArIDEuMCk7CglEXzQ3NSA9IChhbHBoYVNxcl80NjEgLyAoKHBpXzQ2NSAqIGRlbm9tXzQ2NykgKiBkZW5vbV80NjcpKTsKCXJldHVybiBEXzQ3NTsKfQoKZmxvYXQgTGlnaHRpbmdGdW5jR0dYX09QVDMoZmxvYXQgZG90TkwsIGZsb2F0IGRvdExILCBmbG9hdCBkb3ROSCwgZmxvYXQgcm91Z2huZXNzLCBmbG9hdCBGMCkKewoJZmxvYXQgRF80ODU7CglmbG9hdCBwYXJhbV80ODY7CglmbG9hdCBwYXJhbV80ODg7Cgl2ZWMyIEZWX2hlbHBlcl80OTE7CglmbG9hdCBwYXJhbV80OTI7CglmbG9hdCBwYXJhbV80OTQ7CglmbG9hdCBGVl80OTc7CglmbG9hdCBzcGVjdWxhcl81MDg7CglwYXJhbV80ODYgPSBkb3ROSDsKCXBhcmFtXzQ4OCA9IHJvdWdobmVzczsKCURfNDg1ID0gTGlnaHRpbmdGdW5jR0dYX0QocGFyYW1fNDg2LCBwYXJhbV80ODgpOwoJcGFyYW1fNDkyID0gZG90TEg7CglwYXJhbV80OTQgPSByb3VnaG5lc3M7CglGVl9oZWxwZXJfNDkxID0gTGlnaHRpbmdGdW5jR0dYX0ZWKHBhcmFtXzQ5MiwgcGFyYW1fNDk0KTsKCUZWXzQ5NyA9ICgoRjAgKiBGVl9oZWxwZXJfNDkxWzBdKSArICgoMS4wIC0gRjApICogRlZfaGVscGVyXzQ5MVsxXSkpOwoJc3BlY3VsYXJfNTA4ID0gKChkb3ROTCAqIERfNDg1KSAqIEZWXzQ5Nyk7CglyZXR1cm4gc3BlY3VsYXJfNTA4Owp9Cgp2ZWMzIGZfc2NobGljayh2ZWMzIGYwLCBmbG9hdCB2aCkKewoJcmV0dXJuIChmMCArICgodmVjMygxLjAsIDEuMCwgMS4wKSAtIGYwKSAqIGV4cDIoKCgoLTUuNTU0NzMgKiB2aCkgLSA2Ljk4MzE2KSAqIHZoKSkpKTsKfQoKZmxvYXQgdl9zbWl0aHNjaGxpY2soZmxvYXQgbmwsIGZsb2F0IG52LCBmbG9hdCBhKQp7CglyZXR1cm4gKDEuMCAvICgoKG5sICogKDEuMCAtIGEpKSArIGEpICogKChudiAqICgxLjAgLSBhKSkgKyBhKSkpOwp9CgpmbG9hdCBkX2dneChmbG9hdCBuaCwgZmxvYXQgYSkKewoJZmxvYXQgYTJfNTQ2OwoJZmxvYXQgZGVub21fNTUwOwoJYTJfNTQ2ID0gKGEgKiBhKTsKCWRlbm9tXzU1MCA9IHBvdygoKChuaCAqIG5oKSAqIChhMl81NDYgLSAxLjApKSArIDEuMCksIDIuMCk7CglyZXR1cm4gKChhMl81NDYgKiAwLjMxODMxKSAvIGRlbm9tXzU1MCk7Cn0KCnZlYzMgc3BlY3VsYXJCUkRGKHZlYzMgZjAsIGZsb2F0IHJvdWdobmVzcywgZmxvYXQgbmwsIGZsb2F0IG5oLCBmbG9hdCBudiwgZmxvYXQgdmgsIGZsb2F0IGxoKQp7CglmbG9hdCBhXzU2NTsKCWZsb2F0IHBhcmFtXzU2OTsKCWZsb2F0IHBhcmFtXzU3MTsKCWZsb2F0IHBhcmFtXzU3NDsKCWZsb2F0IHBhcmFtXzU3NjsKCWZsb2F0IHBhcmFtXzU3ODsKCXZlYzMgcGFyYW1fNTgzOwoJZmxvYXQgcGFyYW1fNTg1OwoJYV81NjUgPSAocm91Z2huZXNzICogcm91Z2huZXNzKTsKCXBhcmFtXzU2OSA9IG5oOwoJcGFyYW1fNTcxID0gYV81NjU7CglwYXJhbV81NzQgPSBubDsKCXBhcmFtXzU3NiA9IG52OwoJcGFyYW1fNTc4ID0gYV81NjU7CglwYXJhbV81ODMgPSBmMDsKCXBhcmFtXzU4NSA9IHZoOwoJcmV0dXJuICgoZl9zY2hsaWNrKHBhcmFtXzU4MywgcGFyYW1fNTg1KSAqIChkX2dneChwYXJhbV81NjksIHBhcmFtXzU3MSkgKiBjbGFtcCh2X3NtaXRoc2NobGljayhwYXJhbV81NzQsIHBhcmFtXzU3NiwgcGFyYW1fNTc4KSwgMC4wLCAxLjApKSkgLyB2ZWMzKDQuMCwgNC4wLCA0LjApKTsKfQoKdmVjMyBsYW1iZXJ0KHZlYzMgYWxiZWRvLCBmbG9hdCBubCkKewoJcmV0dXJuIChhbGJlZG8gKiBtYXgoMC4wLCBubCkpOwp9Cgp2ZWMzIGJ1cmxleSh2ZWMzIGFsYmVkbywgZmxvYXQgcm91Z2huZXNzLCBmbG9hdCBOb1YsIGZsb2F0IE5vTCwgZmxvYXQgVm9IKQp7CglmbG9hdCBGRDkwXzU5ODsKCWZsb2F0IEZkVl82MDY7CglmbG9hdCBGZExfNjE0OwoJRkQ5MF81OTggPSAoMC41ICsgKCgoMi4wICogVm9IKSAqIFZvSCkgKiByb3VnaG5lc3MpKTsKCUZkVl82MDYgPSAoMS4wICsgKChGRDkwXzU5OCAtIDEuMCkgKiBwb3coKDEuMCAtIE5vViksIDUuMCkpKTsKCUZkTF82MTQgPSAoMS4wICsgKChGRDkwXzU5OCAtIDEuMCkgKiBwb3coKDEuMCAtIE5vTCksIDUuMCkpKTsKCXJldHVybiAoYWxiZWRvICogKCgwLjMxODMxICogRmRWXzYwNikgKiBGZExfNjE0KSk7Cn0KCnZlYzMgb3Jlbk5heWFyKHZlYzMgYWxiZWRvLCBmbG9hdCByb3VnaG5lc3MsIGZsb2F0IE5vViwgZmxvYXQgTm9MLCBmbG9hdCBWb0gpCnsKCWZsb2F0IHBpXzYyOTsKCWZsb2F0IGFfNjMwOwoJZmxvYXQgc182MzQ7CglmbG9hdCBzMl82MzY7CglmbG9hdCBWb0xfNjQwOwoJZmxvYXQgQ29zcmlfNjQ2OwoJZmxvYXQgQzFfNjUyOwoJZmxvYXQgdGVzdF82NjA7CglmbG9hdCBDMl82NzA7CglwaV82MjkgPSAzLjE0MTU5OwoJYV82MzAgPSAocm91Z2huZXNzICogcm91Z2huZXNzKTsKCXNfNjM0ID0gYV82MzA7CglzMl82MzYgPSAoc182MzQgKiBzXzYzNCk7CglWb0xfNjQwID0gKCgoMi4wICogVm9IKSAqIFZvSCkgLSAxLjApOwoJQ29zcmlfNjQ2ID0gKFZvTF82NDAgLSAoTm9WICogTm9MKSk7CglDMV82NTIgPSAoMS4wIC0gKCgwLjUgKiBzMl82MzYpIC8gKHMyXzYzNiArIDAuMzMpKSk7Cgl0ZXN0XzY2MCA9IDEuMDsKCS8vIE1lcmdlIDY2NSAwCglpZiAoQ29zcmlfNjQ2ID49IDAuMCkgLy8gdHJ1ZTogNjY0IGZhbHNlOiA2NjUKCXsgLy8gTGFiZWwgNjY0CgkJdGVzdF82NjAgPSAoMS4wIC8gbWF4KE5vTCwgTm9WKSk7CgkJLy8gQnJhbmNoIHRvIDY2NQoJfSAvLyBMYWJlbCA2NjUKCUMyXzY3MCA9ICgoKCgwLjQ1ICogczJfNjM2KSAvIChzMl82MzYgKyAwLjA5KSkgKiBDb3NyaV82NDYpICogdGVzdF82NjApOwoJcmV0dXJuICgoKGFsYmVkbyAvIHZlYzMocGlfNjI5LCBwaV82MjksIHBpXzYyOSkpICogKEMxXzY1MiArIEMyXzY3MCkpICogKDEuMCArIChyb3VnaG5lc3MgKiAwLjUpKSk7Cn0KCnZlYzMgZGlmZnVzZUJSREYodmVjMyBhbGJlZG8sIGZsb2F0IHJvdWdobmVzcywgZmxvYXQgbnYsIGZsb2F0IG5sLCBmbG9hdCB2aCwgZmxvYXQgbHYpCnsKCXZlYzMgcGFyYW1fNjk1OwoJZmxvYXQgcGFyYW1fNjk3OwoJcGFyYW1fNjk1ID0gYWxiZWRvOwoJcGFyYW1fNjk3ID0gbmw7CglyZXR1cm4gbGFtYmVydChwYXJhbV82OTUsIHBhcmFtXzY5Nyk7Cn0KCnZlYzMgc3VyZmFjZUFsYmVkbyh2ZWMzIGJhc2VDb2xvciwgZmxvYXQgbWV0YWxuZXNzKQp7CglyZXR1cm4gbWl4KGJhc2VDb2xvciwgdmVjMygwLjAsIDAuMCwgMC4wKSwgdmVjMyhtZXRhbG5lc3MsIG1ldGFsbmVzcywgbWV0YWxuZXNzKSk7Cn0KCnZlYzMgc3VyZmFjZUYwKHZlYzMgYmFzZUNvbG9yLCBmbG9hdCBtZXRhbG5lc3MpCnsKCXJldHVybiBtaXgodmVjMygwLjA0LCAwLjA0LCAwLjA0KSwgYmFzZUNvbG9yLCB2ZWMzKG1ldGFsbmVzcywgbWV0YWxuZXNzLCBtZXRhbG5lc3MpKTsKfQoKZmxvYXQgZ2V0TWlwTGV2ZWxGcm9tUm91Z2huZXNzKGZsb2F0IHJvdWdobmVzcykKewoJcmV0dXJuIChyb3VnaG5lc3MgKiA3LjApOwp9Cgo";
kha_Shaders.forward_vertData = "s1459:I3ZlcnNpb24gMTAwCnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0OwphdHRyaWJ1dGUgdmVjMyBwb3M7CnZhcnlpbmcgdmVjNCBsUG9zOwp1bmlmb3JtIG1hdDQgTE1WUDsKdW5pZm9ybSBtYXQ0IFY7CnVuaWZvcm0gbWF0NCBNOwp1bmlmb3JtIG1hdDQgUDsKdW5pZm9ybSBtYXQ0IE5NOwphdHRyaWJ1dGUgdmVjMyBub3I7CnZhcnlpbmcgdmVjNCBtYXRDb2xvcjsKdW5pZm9ybSB2ZWM0IGFsYmVkb19jb2xvcjsKdmFyeWluZyB2ZWMzIHBvc2l0aW9uOwp2YXJ5aW5nIHZlYzMgbGlnaHREaXI7CnVuaWZvcm0gdmVjMyBsaWdodDsKdmFyeWluZyB2ZWMzIGV5ZURpcjsKdW5pZm9ybSB2ZWMzIGV5ZTsKdmFyeWluZyB2ZWMzIG5vcm1hbDsKCgp2b2lkIG1haW4oKQp7Cgl2ZWM0IHNQb3NfOTsKCW1hdDQgVk1fMjg7Cgl2ZWMzIF9ub3JtYWxfNTE7Cgl2ZWMzIG1Qb3NfNzc7CglzUG9zXzkgPSB2ZWM0KHBvc1swXSwgcG9zWzFdLCBwb3NbMl0sIDEuMCk7CglsUG9zID0gKExNVlAgKiBzUG9zXzkpOwoJVk1fMjggPSAoViAqIE0pOwoJZ2xfUG9zaXRpb24gPSAoKFAgKiBWTV8yOCkgKiBzUG9zXzkpOwoJX25vcm1hbF81MSA9IG5vcm1hbGl6ZSgobWF0Myh2ZWMzKE5NWzBdWzBdLCBOTVswXVsxXSwgTk1bMF1bMl0pLCB2ZWMzKE5NWzFdWzBdLCBOTVsxXVsxXSwgTk1bMV1bMl0pLCB2ZWMzKE5NWzJdWzBdLCBOTVsyXVsxXSwgTk1bMl1bMl0pKSAqIG5vcikpOwoJbWF0Q29sb3IgPSBhbGJlZG9fY29sb3I7CgltUG9zXzc3ID0gdmVjMyh2ZWM0KChNICogc1Bvc185KVswXSwgKE0gKiBzUG9zXzkpWzFdLCAoTSAqIHNQb3NfOSlbMl0sIChNICogc1Bvc185KVszXSlbMF0sIHZlYzQoKE0gKiBzUG9zXzkpWzBdLCAoTSAqIHNQb3NfOSlbMV0sIChNICogc1Bvc185KVsyXSwgKE0gKiBzUG9zXzkpWzNdKVsxXSwgdmVjNCgoTSAqIHNQb3NfOSlbMF0sIChNICogc1Bvc185KVsxXSwgKE0gKiBzUG9zXzkpWzJdLCAoTSAqIHNQb3NfOSlbM10pWzJdKTsKCXBvc2l0aW9uID0gbVBvc183NzsKCWxpZ2h0RGlyID0gKGxpZ2h0IC0gbVBvc183Nyk7CglleWVEaXIgPSAoZXllIC0gbVBvc183Nyk7Cglub3JtYWwgPSBfbm9ybWFsXzUxOwoJcmV0dXJuOwp9Cgo";
kha_Shaders.shadowmap_fragData = "s292:I3ZlcnNpb24gMTAwCi8vIFVua25vd24gZXhlY3V0aW9uIG1vZGUgOApwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDsKdmFyeWluZyB2ZWM0IHBvc2l0aW9uOwoKCnZvaWQgbWFpbigpCnsKCWZsb2F0IGRlcHRoXzg7CglkZXB0aF84ID0gKHBvc2l0aW9uWzJdIC8gcG9zaXRpb25bM10pOwoJZ2xfRnJhZ0NvbG9yID0gdmVjNChkZXB0aF84LCAwLjAsIDAuMCwgMS4wKTsKCXJldHVybjsKfQoK";
kha_Shaders.shadowmap_vertData = "s310:I3ZlcnNpb24gMTAwCnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0Owp1bmlmb3JtIG1hdDQgTE1WUDsKYXR0cmlidXRlIHZlYzMgcG9zOwp2YXJ5aW5nIHZlYzQgcG9zaXRpb247CmF0dHJpYnV0ZSB2ZWMzIG5vcjsKCgp2b2lkIG1haW4oKQp7CglnbF9Qb3NpdGlvbiA9IChMTVZQICogdmVjNChwb3NbMF0sIHBvc1sxXSwgcG9zWzJdLCAxLjApKTsKCXBvc2l0aW9uID0gZ2xfUG9zaXRpb247CglyZXR1cm47Cn0KCg";
kha_Shaders.painter_colored_fragData = "s204:I3ZlcnNpb24gMTAwCi8vIFVua25vd24gZXhlY3V0aW9uIG1vZGUgOApwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDsKdmFyeWluZyB2ZWM0IGZyYWdtZW50Q29sb3I7CgoKdm9pZCBtYWluKCkKewoJZ2xfRnJhZ0NvbG9yID0gZnJhZ21lbnRDb2xvcjsKCXJldHVybjsKfQoK";
kha_Shaders.painter_colored_vertData = "s424:I3ZlcnNpb24gMTAwCnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0Owp1bmlmb3JtIG1hdDQgcHJvamVjdGlvbk1hdHJpeDsKYXR0cmlidXRlIHZlYzMgdmVydGV4UG9zaXRpb247CnZhcnlpbmcgdmVjNCBmcmFnbWVudENvbG9yOwphdHRyaWJ1dGUgdmVjNCB2ZXJ0ZXhDb2xvcjsKCgp2b2lkIG1haW4oKQp7CglnbF9Qb3NpdGlvbiA9IChwcm9qZWN0aW9uTWF0cml4ICogdmVjNCh2ZXJ0ZXhQb3NpdGlvblswXSwgdmVydGV4UG9zaXRpb25bMV0sIHZlcnRleFBvc2l0aW9uWzJdLCAxLjApKTsKCWZyYWdtZW50Q29sb3IgPSB2ZXJ0ZXhDb2xvcjsKCXJldHVybjsKfQoK";
kha_Shaders.painter_image_fragData = "s656:I3ZlcnNpb24gMTAwCi8vIFVua25vd24gZXhlY3V0aW9uIG1vZGUgOApwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDsKdW5pZm9ybSBzYW1wbGVyMkQgdGV4Owp2YXJ5aW5nIHZlYzIgdGV4Q29vcmQ7CnZhcnlpbmcgdmVjNCBjb2xvcjsKCgp2b2lkIG1haW4oKQp7Cgl2ZWM0IHRleGNvbG9yXzk7Cgl0ZXhjb2xvcl85ID0gKHRleHR1cmUyRCh0ZXgsIHRleENvb3JkKSAqIGNvbG9yKTsKCXRleGNvbG9yXzkgPSB2ZWM0KCh2ZWMzKHRleGNvbG9yXzlbMF0sIHRleGNvbG9yXzlbMV0sIHRleGNvbG9yXzlbMl0pICogY29sb3JbM10pWzBdLCAodmVjMyh0ZXhjb2xvcl85WzBdLCB0ZXhjb2xvcl85WzFdLCB0ZXhjb2xvcl85WzJdKSAqIGNvbG9yWzNdKVsxXSwgKHZlYzModGV4Y29sb3JfOVswXSwgdGV4Y29sb3JfOVsxXSwgdGV4Y29sb3JfOVsyXSkgKiBjb2xvclszXSlbMl0sIHRleGNvbG9yXzlbM10pOwoJZ2xfRnJhZ0NvbG9yID0gdGV4Y29sb3JfOTsKCXJldHVybjsKfQoK";
kha_Shaders.painter_image_vertData = "s504:I3ZlcnNpb24gMTAwCnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0Owp1bmlmb3JtIG1hdDQgcHJvamVjdGlvbk1hdHJpeDsKYXR0cmlidXRlIHZlYzMgdmVydGV4UG9zaXRpb247CnZhcnlpbmcgdmVjMiB0ZXhDb29yZDsKYXR0cmlidXRlIHZlYzIgdGV4UG9zaXRpb247CnZhcnlpbmcgdmVjNCBjb2xvcjsKYXR0cmlidXRlIHZlYzQgdmVydGV4Q29sb3I7CgoKdm9pZCBtYWluKCkKewoJZ2xfUG9zaXRpb24gPSAocHJvamVjdGlvbk1hdHJpeCAqIHZlYzQodmVydGV4UG9zaXRpb25bMF0sIHZlcnRleFBvc2l0aW9uWzFdLCB2ZXJ0ZXhQb3NpdGlvblsyXSwgMS4wKSk7Cgl0ZXhDb29yZCA9IHRleFBvc2l0aW9uOwoJY29sb3IgPSB2ZXJ0ZXhDb2xvcjsKCXJldHVybjsKfQoK";
kha_Shaders.painter_text_fragData = "s572:I3ZlcnNpb24gMTAwCi8vIFVua25vd24gZXhlY3V0aW9uIG1vZGUgOApwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDsKdmFyeWluZyB2ZWM0IGZyYWdtZW50Q29sb3I7CnVuaWZvcm0gc2FtcGxlcjJEIHRleDsKdmFyeWluZyB2ZWMyIHRleENvb3JkOwoKCnZvaWQgbWFpbigpCnsKCWdsX0ZyYWdDb2xvciA9IHZlYzQodmVjMyhmcmFnbWVudENvbG9yWzBdLCBmcmFnbWVudENvbG9yWzFdLCBmcmFnbWVudENvbG9yWzJdKVswXSwgdmVjMyhmcmFnbWVudENvbG9yWzBdLCBmcmFnbWVudENvbG9yWzFdLCBmcmFnbWVudENvbG9yWzJdKVsxXSwgdmVjMyhmcmFnbWVudENvbG9yWzBdLCBmcmFnbWVudENvbG9yWzFdLCBmcmFnbWVudENvbG9yWzJdKVsyXSwgKHRleHR1cmUyRCh0ZXgsIHRleENvb3JkKVswXSAqIGZyYWdtZW50Q29sb3JbM10pKTsKCXJldHVybjsKfQoK";
kha_Shaders.painter_text_vertData = "s526:I3ZlcnNpb24gMTAwCnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0Owp1bmlmb3JtIG1hdDQgcHJvamVjdGlvbk1hdHJpeDsKYXR0cmlidXRlIHZlYzMgdmVydGV4UG9zaXRpb247CnZhcnlpbmcgdmVjMiB0ZXhDb29yZDsKYXR0cmlidXRlIHZlYzIgdGV4UG9zaXRpb247CnZhcnlpbmcgdmVjNCBmcmFnbWVudENvbG9yOwphdHRyaWJ1dGUgdmVjNCB2ZXJ0ZXhDb2xvcjsKCgp2b2lkIG1haW4oKQp7CglnbF9Qb3NpdGlvbiA9IChwcm9qZWN0aW9uTWF0cml4ICogdmVjNCh2ZXJ0ZXhQb3NpdGlvblswXSwgdmVydGV4UG9zaXRpb25bMV0sIHZlcnRleFBvc2l0aW9uWzJdLCAxLjApKTsKCXRleENvb3JkID0gdGV4UG9zaXRpb247CglmcmFnbWVudENvbG9yID0gdmVydGV4Q29sb3I7CglyZXR1cm47Cn0KCg";
kha_Shaders.painter_video_fragData = "s656:I3ZlcnNpb24gMTAwCi8vIFVua25vd24gZXhlY3V0aW9uIG1vZGUgOApwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDsKdW5pZm9ybSBzYW1wbGVyMkQgdGV4Owp2YXJ5aW5nIHZlYzIgdGV4Q29vcmQ7CnZhcnlpbmcgdmVjNCBjb2xvcjsKCgp2b2lkIG1haW4oKQp7Cgl2ZWM0IHRleGNvbG9yXzk7Cgl0ZXhjb2xvcl85ID0gKHRleHR1cmUyRCh0ZXgsIHRleENvb3JkKSAqIGNvbG9yKTsKCXRleGNvbG9yXzkgPSB2ZWM0KCh2ZWMzKHRleGNvbG9yXzlbMF0sIHRleGNvbG9yXzlbMV0sIHRleGNvbG9yXzlbMl0pICogY29sb3JbM10pWzBdLCAodmVjMyh0ZXhjb2xvcl85WzBdLCB0ZXhjb2xvcl85WzFdLCB0ZXhjb2xvcl85WzJdKSAqIGNvbG9yWzNdKVsxXSwgKHZlYzModGV4Y29sb3JfOVswXSwgdGV4Y29sb3JfOVsxXSwgdGV4Y29sb3JfOVsyXSkgKiBjb2xvclszXSlbMl0sIHRleGNvbG9yXzlbM10pOwoJZ2xfRnJhZ0NvbG9yID0gdGV4Y29sb3JfOTsKCXJldHVybjsKfQoK";
kha_Shaders.painter_video_vertData = "s504:I3ZlcnNpb24gMTAwCnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0Owp1bmlmb3JtIG1hdDQgcHJvamVjdGlvbk1hdHJpeDsKYXR0cmlidXRlIHZlYzMgdmVydGV4UG9zaXRpb247CnZhcnlpbmcgdmVjMiB0ZXhDb29yZDsKYXR0cmlidXRlIHZlYzIgdGV4UG9zaXRpb247CnZhcnlpbmcgdmVjNCBjb2xvcjsKYXR0cmlidXRlIHZlYzQgdmVydGV4Q29sb3I7CgoKdm9pZCBtYWluKCkKewoJZ2xfUG9zaXRpb24gPSAocHJvamVjdGlvbk1hdHJpeCAqIHZlYzQodmVydGV4UG9zaXRpb25bMF0sIHZlcnRleFBvc2l0aW9uWzFdLCB2ZXJ0ZXhQb3NpdGlvblsyXSwgMS4wKSk7Cgl0ZXhDb29yZCA9IHRleFBvc2l0aW9uOwoJY29sb3IgPSB2ZXJ0ZXhDb2xvcjsKCXJldHVybjsKfQoK";
kha_System.renderListeners = [];
kha_System.foregroundListeners = [];
kha_System.resumeListeners = [];
kha_System.pauseListeners = [];
kha_System.backgroundListeners = [];
kha_System.shutdownListeners = [];
kha_SystemImpl.maxGamepads = 4;
kha_SystemImpl.leftMouseCtrlDown = false;
kha_SystemImpl.lastFirstTouchX = 0;
kha_SystemImpl.lastFirstTouchY = 0;
kha_audio2_Audio1.channelCount = 16;
kha_audio2_ogg_tools_Crc32.POLY = 79764919;
kha_audio2_ogg_vorbis_VorbisDecodeState.INVALID_BITS = -1;
kha_audio2_ogg_vorbis_VorbisTools.EOP = -1;
kha_audio2_ogg_vorbis_VorbisTools.M__PI = 3.14159265358979323846264;
kha_audio2_ogg_vorbis_VorbisTools.DIVTAB_NUMER = 32;
kha_audio2_ogg_vorbis_VorbisTools.DIVTAB_DENOM = 64;
kha_audio2_ogg_vorbis_VorbisTools.INVERSE_DB_TABLE = [1.0649863e-07,1.1341951e-07,1.2079015e-07,1.2863978e-07,1.3699951e-07,1.4590251e-07,1.5538408e-07,1.6548181e-07,1.7623575e-07,1.8768855e-07,1.9988561e-07,2.1287530e-07,2.2670913e-07,2.4144197e-07,2.5713223e-07,2.7384213e-07,2.9163793e-07,3.1059021e-07,3.3077411e-07,3.5226968e-07,3.7516214e-07,3.9954229e-07,4.2550680e-07,4.5315863e-07,4.8260743e-07,5.1396998e-07,5.4737065e-07,5.8294187e-07,6.2082472e-07,6.6116941e-07,7.0413592e-07,7.4989464e-07,7.9862701e-07,8.5052630e-07,9.0579828e-07,9.6466216e-07,1.0273513e-06,1.0941144e-06,1.1652161e-06,1.2409384e-06,1.3215816e-06,1.4074654e-06,1.4989305e-06,1.5963394e-06,1.7000785e-06,1.8105592e-06,1.9282195e-06,2.0535261e-06,2.1869758e-06,2.3290978e-06,2.4804557e-06,2.6416497e-06,2.8133190e-06,2.9961443e-06,3.1908506e-06,3.3982101e-06,3.6190449e-06,3.8542308e-06,4.1047004e-06,4.3714470e-06,4.6555282e-06,4.9580707e-06,5.2802740e-06,5.6234160e-06,5.9888572e-06,6.3780469e-06,6.7925283e-06,7.2339451e-06,7.7040476e-06,8.2047000e-06,8.7378876e-06,9.3057248e-06,9.9104632e-06,1.0554501e-05,1.1240392e-05,1.1970856e-05,1.2748789e-05,1.3577278e-05,1.4459606e-05,1.5399272e-05,1.6400004e-05,1.7465768e-05,1.8600792e-05,1.9809576e-05,2.1096914e-05,2.2467911e-05,2.3928002e-05,2.5482978e-05,2.7139006e-05,2.8902651e-05,3.0780908e-05,3.2781225e-05,3.4911534e-05,3.7180282e-05,3.9596466e-05,4.2169667e-05,4.4910090e-05,4.7828601e-05,5.0936773e-05,5.4246931e-05,5.7772202e-05,6.1526565e-05,6.5524908e-05,6.9783085e-05,7.4317983e-05,7.9147585e-05,8.4291040e-05,8.9768747e-05,9.5602426e-05,0.00010181521,0.00010843174,0.00011547824,0.00012298267,0.00013097477,0.00013948625,0.00014855085,0.00015820453,0.00016848555,0.00017943469,0.00019109536,0.00020351382,0.00021673929,0.00023082423,0.00024582449,0.00026179955,0.00027881276,0.00029693158,0.00031622787,0.00033677814,0.00035866388,0.00038197188,0.00040679456,0.00043323036,0.00046138411,0.00049136745,0.00052329927,0.00055730621,0.00059352311,0.00063209358,0.00067317058,0.00071691700,0.00076350630,0.00081312324,0.00086596457,0.00092223983,0.00098217216,0.0010459992,0.0011139742,0.0011863665,0.0012634633,0.0013455702,0.0014330129,0.0015261382,0.0016253153,0.0017309374,0.0018434235,0.0019632195,0.0020908006,0.0022266726,0.0023713743,0.0025254795,0.0026895994,0.0028643847,0.0030505286,0.0032487691,0.0034598925,0.0036847358,0.0039241906,0.0041792066,0.0044507950,0.0047400328,0.0050480668,0.0053761186,0.0057254891,0.0060975636,0.0064938176,0.0069158225,0.0073652516,0.0078438871,0.0083536271,0.0088964928,0.009474637,0.010090352,0.010746080,0.011444421,0.012188144,0.012980198,0.013823725,0.014722068,0.015678791,0.016697687,0.017782797,0.018938423,0.020169149,0.021479854,0.022875735,0.024362330,0.025945531,0.027631618,0.029427276,0.031339626,0.033376252,0.035545228,0.037855157,0.040315199,0.042935108,0.045725273,0.048696758,0.051861348,0.055231591,0.058820850,0.062643361,0.066714279,0.071049749,0.075666962,0.080584227,0.085821044,0.091398179,0.097337747,0.10366330,0.11039993,0.11757434,0.12521498,0.13335215,0.14201813,0.15124727,0.16107617,0.17154380,0.18269168,0.19456402,0.20720788,0.22067342,0.23501402,0.25028656,0.26655159,0.28387361,0.30232132,0.32196786,0.34289114,0.36517414,0.38890521,0.41417847,0.44109412,0.46975890,0.50028648,0.53279791,0.56742212,0.60429640,0.64356699,0.68538959,0.72993007,0.77736504,0.82788260,0.88168307,0.9389798,1.0];
kha_audio2_ogg_vorbis_data_Codebook.NO_CODE = 255;
kha_audio2_ogg_vorbis_data_Codebook.delay = 0;
kha_audio2_ogg_vorbis_data_Header.PACKET_ID = 1;
kha_audio2_ogg_vorbis_data_Header.PACKET_COMMENT = 3;
kha_audio2_ogg_vorbis_data_Header.PACKET_SETUP = 5;
kha_audio2_ogg_vorbis_data_PageFlag.CONTINUED_PACKET = 1;
kha_audio2_ogg_vorbis_data_PageFlag.FIRST_PAGE = 2;
kha_audio2_ogg_vorbis_data_PageFlag.LAST_PAGE = 4;
kha_audio2_ogg_vorbis_data_Setting.MAX_CHANNELS = 16;
kha_audio2_ogg_vorbis_data_Setting.PUSHDATA_CRC_COUNT = 4;
kha_audio2_ogg_vorbis_data_Setting.FAST_HUFFMAN_LENGTH = 10;
kha_audio2_ogg_vorbis_data_Setting.FAST_HUFFMAN_TABLE_SIZE = 1024;
kha_audio2_ogg_vorbis_data_Setting.FAST_HUFFMAN_TABLE_MASK = 1023;
kha_graphics2_truetype_StbTruetype.STBTT_vmove = 1;
kha_graphics2_truetype_StbTruetype.STBTT_vline = 2;
kha_graphics2_truetype_StbTruetype.STBTT_vcurve = 3;
kha_graphics2_truetype_StbTruetype.STBTT_MACSTYLE_DONTCARE = 0;
kha_graphics2_truetype_StbTruetype.STBTT_MACSTYLE_BOLD = 1;
kha_graphics2_truetype_StbTruetype.STBTT_MACSTYLE_ITALIC = 2;
kha_graphics2_truetype_StbTruetype.STBTT_MACSTYLE_UNDERSCORE = 4;
kha_graphics2_truetype_StbTruetype.STBTT_MACSTYLE_NONE = 8;
kha_graphics2_truetype_StbTruetype.STBTT_PLATFORM_ID_UNICODE = 0;
kha_graphics2_truetype_StbTruetype.STBTT_PLATFORM_ID_MAC = 1;
kha_graphics2_truetype_StbTruetype.STBTT_PLATFORM_ID_ISO = 2;
kha_graphics2_truetype_StbTruetype.STBTT_PLATFORM_ID_MICROSOFT = 3;
kha_graphics2_truetype_StbTruetype.STBTT_UNICODE_EID_UNICODE_1_0 = 0;
kha_graphics2_truetype_StbTruetype.STBTT_UNICODE_EID_UNICODE_1_1 = 1;
kha_graphics2_truetype_StbTruetype.STBTT_UNICODE_EID_ISO_10646 = 2;
kha_graphics2_truetype_StbTruetype.STBTT_UNICODE_EID_UNICODE_2_0_BMP = 3;
kha_graphics2_truetype_StbTruetype.STBTT_UNICODE_EID_UNICODE_2_0_FULL = 4;
kha_graphics2_truetype_StbTruetype.STBTT_MS_EID_SYMBOL = 0;
kha_graphics2_truetype_StbTruetype.STBTT_MS_EID_UNICODE_BMP = 1;
kha_graphics2_truetype_StbTruetype.STBTT_MS_EID_SHIFTJIS = 2;
kha_graphics2_truetype_StbTruetype.STBTT_MS_EID_UNICODE_FULL = 10;
kha_graphics2_truetype_StbTruetype.STBTT_MAC_EID_ROMAN = 0;
kha_graphics2_truetype_StbTruetype.STBTT_MAC_EID_ARABIC = 4;
kha_graphics2_truetype_StbTruetype.STBTT_MAC_EID_JAPANESE = 1;
kha_graphics2_truetype_StbTruetype.STBTT_MAC_EID_HEBREW = 5;
kha_graphics2_truetype_StbTruetype.STBTT_MAC_EID_CHINESE_TRAD = 2;
kha_graphics2_truetype_StbTruetype.STBTT_MAC_EID_GREEK = 6;
kha_graphics2_truetype_StbTruetype.STBTT_MAC_EID_KOREAN = 3;
kha_graphics2_truetype_StbTruetype.STBTT_MAC_EID_RUSSIAN = 7;
kha_graphics2_truetype_StbTruetype.STBTT_MS_LANG_ENGLISH = 1033;
kha_graphics2_truetype_StbTruetype.STBTT_MS_LANG_ITALIAN = 1040;
kha_graphics2_truetype_StbTruetype.STBTT_MS_LANG_CHINESE = 2052;
kha_graphics2_truetype_StbTruetype.STBTT_MS_LANG_JAPANESE = 1041;
kha_graphics2_truetype_StbTruetype.STBTT_MS_LANG_DUTCH = 1043;
kha_graphics2_truetype_StbTruetype.STBTT_MS_LANG_KOREAN = 1042;
kha_graphics2_truetype_StbTruetype.STBTT_MS_LANG_FRENCH = 1036;
kha_graphics2_truetype_StbTruetype.STBTT_MS_LANG_RUSSIAN = 1049;
kha_graphics2_truetype_StbTruetype.STBTT_MS_LANG_GERMAN = 1031;
kha_graphics2_truetype_StbTruetype.STBTT_MS_LANG_SPANISH = 1033;
kha_graphics2_truetype_StbTruetype.STBTT_MS_LANG_HEBREW = 1037;
kha_graphics2_truetype_StbTruetype.STBTT_MS_LANG_SWEDISH = 1053;
kha_graphics2_truetype_StbTruetype.STBTT_MAC_LANG_ENGLISH = 0;
kha_graphics2_truetype_StbTruetype.STBTT_MAC_LANG_JAPANESE = 11;
kha_graphics2_truetype_StbTruetype.STBTT_MAC_LANG_ARABIC = 12;
kha_graphics2_truetype_StbTruetype.STBTT_MAC_LANG_KOREAN = 23;
kha_graphics2_truetype_StbTruetype.STBTT_MAC_LANG_DUTCH = 4;
kha_graphics2_truetype_StbTruetype.STBTT_MAC_LANG_RUSSIAN = 32;
kha_graphics2_truetype_StbTruetype.STBTT_MAC_LANG_FRENCH = 1;
kha_graphics2_truetype_StbTruetype.STBTT_MAC_LANG_SPANISH = 6;
kha_graphics2_truetype_StbTruetype.STBTT_MAC_LANG_GERMAN = 2;
kha_graphics2_truetype_StbTruetype.STBTT_MAC_LANG_SWEDISH = 5;
kha_graphics2_truetype_StbTruetype.STBTT_MAC_LANG_HEBREW = 10;
kha_graphics2_truetype_StbTruetype.STBTT_MAC_LANG_CHINESE_SIMPLIFIED = 33;
kha_graphics2_truetype_StbTruetype.STBTT_MAC_LANG_ITALIAN = 3;
kha_graphics2_truetype_StbTruetype.STBTT_MAC_LANG_CHINESE_TRAD = 19;
kha_graphics2_truetype_StbTruetype.STBTT_MAX_OVERSAMPLE = 8;
kha_graphics2_truetype_StbTruetype.STBTT_RASTERIZER_VERSION = 2;
kha_graphics4_ImageShaderPainter.bufferSize = 1500;
kha_graphics4_ImageShaderPainter.vertexSize = 9;
kha_graphics4_ColoredShaderPainter.bufferSize = 100;
kha_graphics4_ColoredShaderPainter.triangleBufferSize = 100;
kha_graphics4_TextShaderPainter.bufferSize = 100;
kha_input_Gamepad.instances = [];
kha_input_Keyboard.__meta__ = { fields : { sendDownEvent : { input : null}, sendUpEvent : { input : null}}};
kha_input_Mouse.__meta__ = { fields : { sendDownEvent : { input : null}, sendUpEvent : { input : null}, sendMoveEvent : { input : null}, sendWheelEvent : { input : null}}};
kha_js_Sound.loading = new List();
kha_js_Video.loading = new List();
kha_math_FastMatrix3.width = 3;
kha_math_FastMatrix3.height = 3;
kha_math_Matrix3.width = 3;
kha_math_Matrix3.height = 3;
kha_math_Matrix4.width = 4;
kha_math_Matrix4.height = 4;
kha_network_ControllerBuilder.nextId = 0;
kha_network_Session.START = 0;
kha_network_Session.ENTITY_UPDATES = 1;
kha_network_Session.CONTROLLER_UPDATES = 2;
kha_network_Session.REMOTE_CALL = 3;
lue_App.traitInits = [];
lue_App.traitUpdates = [];
lue_App.traitRenders = [];
lue_App.traitRenders2D = [];
lue_math_Math.PI = 3.14159265358979323;
lue_math_Math.EPSILON = 1e-10;
lue_math_Math.Rad2Deg = 57.2957795130823229;
lue_math_Math.Deg2Rad = 0.0174532925199432955;
lue_math_Vec4.Vec3_tangents_n = new lue_math_Vec4();
lue_math_Vec4.Vec3_tangents_randVec = new lue_math_Vec4();
lue_math_Quat.Quaternion_mult_va = new lue_math_Vec4();
lue_math_Quat.Quaternion_mult_vb = new lue_math_Vec4();
lue_math_Quat.Quaternion_mult_vaxvb = new lue_math_Vec4();
lue_node_CameraNode.sphere = new lue_math_Sphere();
lue_node_ModelNode.helpMat = lue_math_Mat4.identity();
lue_node_ModelNode.helpVec = new lue_math_Vec4();
lue_node_Transform.temp = lue_math_Mat4.identity();
lue_resource_Resource.cachedScenes = new haxe_ds_StringMap();
lue_resource_Resource.cachedModels = new haxe_ds_StringMap();
lue_resource_Resource.cachedLights = new haxe_ds_StringMap();
lue_resource_Resource.cachedCameras = new haxe_ds_StringMap();
lue_resource_Resource.cachedPipelines = new haxe_ds_StringMap();
lue_resource_Resource.cachedMaterials = new haxe_ds_StringMap();
lue_resource_Resource.cachedParticles = new haxe_ds_StringMap();
lue_resource_Resource.cachedShaders = new haxe_ds_StringMap();
lue_resource_ModelResource.ForceCpuSkinning = false;
lue_sys_Audio.musicOn = true;
lue_sys_Audio.soundOn = true;
lue_sys_Audio.musicPlaying = false;
lue_sys_Input.x = 0;
lue_sys_Input.y = 0;
lue_sys_Input.touch = false;
lue_sys_Input.started = false;
lue_sys_Input.released = false;
lue_sys_Input.moved = false;
lue_sys_Input.deltaX = 0;
lue_sys_Input.deltaY = 0;
lue_sys_Time.delta = 0;
lue_sys_Tween.LINEAR = 0;
lue_sys_Tween.EXPO_OUT = 1;
lue_sys_Tween.DEFAULT = 1;
lue_sys_Tween.eases = [lue_sys_Tween.easeLinear,lue_sys_Tween.easeExpoOut];
lue_sys_Tween.anims = [];
lue_sys_Tween.map = new haxe_ds_ObjectMap();
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}}, typeof window != "undefined" ? window : exports);
