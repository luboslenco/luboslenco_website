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
var CompileTime = function() { };
$hxClasses["CompileTime"] = CompileTime;
CompileTime.__name__ = ["CompileTime"];
var EReg = function(r,opt) {
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
};
$hxClasses["EReg"] = EReg;
EReg.__name__ = ["EReg"];
EReg.prototype = {
	match: function(s) {
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
Lambda.exists = function(it,f) {
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(f(x)) return true;
	}
	return false;
};
Lambda.filter = function(it,f) {
	var l = new List();
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(f(x)) l.add(x);
	}
	return l;
};
var LazyInst = function() { };
$hxClasses["LazyInst"] = LazyInst;
LazyInst.__name__ = ["LazyInst"];
var List = function() {
	this.length = 0;
};
$hxClasses["List"] = List;
List.__name__ = ["List"];
List.prototype = {
	add: function(item) {
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
	hasNext: function() {
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
	var starter = new kha_Starter();
	starter.start(new zblend_Root("ZBlend","room1",Game));
};
var Game = function() {
	zblend_Root.setScene(zblend_Root.gameData.scene);
};
$hxClasses["Game"] = Game;
Game.__name__ = ["Game"];
Game.prototype = {
	__class__: Game
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
Reflect.compareMethods = function(f1,f2) {
	if(f1 == f2) return true;
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) return false;
	return f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
};
Reflect.deleteField = function(o,field) {
	if(!Object.prototype.hasOwnProperty.call(o,field)) return false;
	delete(o[field]);
	return true;
};
var Std = function() { };
$hxClasses["Std"] = Std;
Std.__name__ = ["Std"];
Std["is"] = function(v,t) {
	return js_Boot.__instanceof(v,t);
};
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
	add: function(x) {
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
Type.getEnum = function(o) {
	if(o == null) return null;
	return o.__enum__;
};
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
Type.enumEq = function(a,b) {
	if(a == b) return true;
	try {
		if(a[0] != b[0]) return false;
		var _g1 = 2;
		var _g = a.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(!Type.enumEq(a[i],b[i])) return false;
		}
		var e = a.__enum__;
		if(e != b.__enum__ || e == null) return false;
	} catch( e1 ) {
		if (e1 instanceof js__$Boot_HaxeError) e1 = e1.val;
		return false;
	}
	return true;
};
Type.enumParameters = function(e) {
	return e.slice(2);
};
Type.enumIndex = function(e) {
	return e[1];
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
var composure_core_ComposeItem = function(initTraits) {
	this._traitCollection = new composure_traits_TraitCollection();
	this._siblingMarrier = new composure_injectors_InjectorMarrier(this._traitCollection);
	this._parentMarrier = new composure_injectors_InjectorMarrier(this._traitCollection);
	this._traitToCast = new haxe_ds_ObjectMap();
	this._traitToPair = new haxe_ds_ObjectMap();
	if(initTraits != null) this.addTraits(initTraits);
};
$hxClasses["composure.core.ComposeItem"] = composure_core_ComposeItem;
composure_core_ComposeItem.__name__ = ["composure","core","ComposeItem"];
composure_core_ComposeItem.getRealTrait = function(trait) {
	var getProxyTrait = Reflect.field(trait,"getProxiedTrait");
	if(getProxyTrait != null) {
		var proxy = trait.getProxiedTrait();
		if(js_Boot.__instanceof(proxy,composure_traits_ITrait)) return js_Boot.__cast(proxy , composure_traits_ITrait);
	}
	if(js_Boot.__instanceof(trait,composure_traits_ITrait)) return js_Boot.__cast(trait , composure_traits_ITrait);
	return null;
};
composure_core_ComposeItem.prototype = {
	get_parentItem: function() {
		return this._parentItem;
	}
	,set_parentItem: function(value) {
		if(this._parentItem != value) {
			if(this._parentItem != null) this.onParentRemove();
			this._parentItem = value;
			if(this._parentItem != null) this.onParentAdd();
		}
		return value;
	}
	,get_root: function() {
		return this._root;
	}
	,get_traitAdded: function() {
		return this._traitCollection.get_traitAdded();
	}
	,get_traitRemoved: function() {
		return this._traitCollection.get_traitRemoved();
	}
	,setRoot: function(root) {
		if(this._root != null) this.onRootRemove();
		this._root = root;
		if(this._root != null) this.onRootAdd();
	}
	,getTrait: function(traitType) {
		return this._traitCollection.getTrait(traitType);
	}
	,getTraits: function(TraitType) {
		return this._traitCollection.getTraits(TraitType);
	}
	,callForTraits: function(func,TraitType) {
		this._traitCollection.callForTraits(func,TraitType,this);
	}
	,addTrait: function(trait) {
		this._addTrait(trait);
	}
	,addTraits: function(traits) {
		var _g = 0;
		while(_g < traits.length) {
			var trait = traits[_g];
			++_g;
			this._addTrait(trait);
		}
	}
	,_addTrait: function(trait) {
		var traitPair = { trait : trait, item : this};
		this._traitToPair.set(trait,traitPair);
		var castTrait = composure_core_ComposeItem.getRealTrait(trait);
		if(castTrait != null) {
			castTrait.set_item(this);
			this._traitToCast.set(trait,castTrait);
		}
		this._traitCollection.addTrait(traitPair);
		if(this._parentItem != null) this._parentItem.addChildTrait(traitPair);
		if(castTrait != null) {
			var castInjectors = castTrait.getInjectors();
			var $it0 = $iterator(castInjectors)();
			while( $it0.hasNext() ) {
				var injector = $it0.next();
				this.addTraitInjector(injector);
			}
		}
	}
	,removeTrait: function(trait) {
		this._removeTrait(trait);
	}
	,removeTraits: function(traits) {
		var _g = 0;
		while(_g < traits.length) {
			var trait = traits[_g];
			++_g;
			this._removeTrait(trait);
		}
	}
	,removeAllTraits: function() {
		while(this._traitCollection.traitPairs.get_length() > 0) this._removeTrait(this._traitCollection.traitPairs.first());
	}
	,_removeTrait: function(trait) {
		var traitPair = this._traitToPair.get(trait);
		this._traitToPair.remove(trait);
		var castTrait = this._traitToCast.get(trait);
		if(castTrait != null) {
			var castInjectors = castTrait.getInjectors();
			var $it0 = $iterator(castInjectors)();
			while( $it0.hasNext() ) {
				var injector = $it0.next();
				this.removeTraitInjector(injector);
			}
			this._traitToCast.remove(trait);
		}
		this._traitCollection.removeTrait(traitPair);
		if(this._parentItem != null) this._parentItem.removeChildTrait(traitPair);
		if(castTrait != null) castTrait.set_item(null);
	}
	,addTraitInjector: function(injector) {
		if(injector.siblings) this._siblingMarrier.addInjector(injector);
		if(injector.ascendants) {
			if(this._ascInjectors == null) this._ascInjectors = new org_tbyrne_collections_UniqueList();
			this._ascInjectors.add(injector);
			if(this._parentItem != null) this._parentItem.addAscendingInjector(injector);
		}
		if(injector.universal) {
			if(this._uniInjectors == null) this._uniInjectors = new org_tbyrne_collections_UniqueList();
			this._uniInjectors.add(injector);
			if(this._root != null) this._root.addUniversalInjector(injector);
		}
	}
	,removeTraitInjector: function(injector) {
		if(injector.siblings) this._siblingMarrier.removeInjector(injector);
		if(injector.ascendants) {
			this._ascInjectors.remove(injector);
			if(this._parentItem != null) this._parentItem.removeAscendingInjector(injector);
		}
		if(injector.universal) {
			this._uniInjectors.remove(injector);
			if(this._root != null) this._root.removeUniversalInjector(injector);
		}
	}
	,onParentAdd: function() {
		var $it0 = this._traitCollection.traitPairs.iterator();
		while( $it0.hasNext() ) {
			var traitPair = $it0.next();
			this._parentItem.addChildTrait(traitPair);
		}
		if(this._ascInjectors != null) {
			var $it1 = this._ascInjectors.iterator();
			while( $it1.hasNext() ) {
				var injector = $it1.next();
				this._parentItem.addAscendingInjector(injector);
			}
		}
	}
	,onParentRemove: function() {
		var $it0 = this._traitCollection.traitPairs.iterator();
		while( $it0.hasNext() ) {
			var traitPair = $it0.next();
			this._parentItem.removeChildTrait(traitPair);
		}
		if(this._ascInjectors != null) {
			var $it1 = this._ascInjectors.iterator();
			while( $it1.hasNext() ) {
				var injector = $it1.next();
				this._parentItem.removeAscendingInjector(injector);
			}
		}
	}
	,onRootAdd: function() {
		if(this._uniInjectors != null) {
			var $it0 = this._uniInjectors.iterator();
			while( $it0.hasNext() ) {
				var injector = $it0.next();
				this._root.addUniversalInjector(injector);
			}
		}
	}
	,onRootRemove: function() {
		if(this._uniInjectors != null) {
			var $it0 = this._uniInjectors.iterator();
			while( $it0.hasNext() ) {
				var injector = $it0.next();
				this._root.removeUniversalInjector(injector);
			}
		}
	}
	,addParentInjector: function(injector) {
		this._parentMarrier.addInjector(injector);
	}
	,removeParentInjector: function(injector) {
		this._parentMarrier.removeInjector(injector);
	}
	,__class__: composure_core_ComposeItem
	,__properties__: {get_traitRemoved:"get_traitRemoved",get_traitAdded:"get_traitAdded",get_root:"get_root",set_parentItem:"set_parentItem",get_parentItem:"get_parentItem"}
};
var composure_core_ComposeGroup = function(initTraits) {
	this._descendantTraits = new composure_traits_TraitCollection();
	this._children = new org_tbyrne_collections_UniqueList();
	this._descInjectors = new org_tbyrne_collections_UniqueList();
	composure_core_ComposeItem.call(this);
	this._childAscendingMarrier = new composure_injectors_InjectorMarrier(this._traitCollection);
	if(initTraits != null) this.addTraits(initTraits);
};
$hxClasses["composure.core.ComposeGroup"] = composure_core_ComposeGroup;
composure_core_ComposeGroup.__name__ = ["composure","core","ComposeGroup"];
composure_core_ComposeGroup.__super__ = composure_core_ComposeItem;
composure_core_ComposeGroup.prototype = $extend(composure_core_ComposeItem.prototype,{
	get_children: function() {
		return this._children;
	}
	,setRoot: function(game) {
		composure_core_ComposeItem.prototype.setRoot.call(this,game);
		var $it0 = this._children.iterator();
		while( $it0.hasNext() ) {
			var child = $it0.next();
			child.setRoot(game);
		}
	}
	,addChild: function(item) {
		this._children.add(item);
		item.set_parentItem(this);
		var $it0 = this._descInjectors.iterator();
		while( $it0.hasNext() ) {
			var traitInjector = $it0.next();
			item.addParentInjector(traitInjector);
		}
		if(this._parentDescInjectors != null) {
			var $it1 = this._parentDescInjectors.iterator();
			while( $it1.hasNext() ) {
				var traitInjector1 = $it1.next();
				item.addParentInjector(traitInjector1);
			}
		}
		item.setRoot(this._root);
	}
	,removeChild: function(item) {
		this._children.remove(item);
		item.set_parentItem(null);
		var $it0 = this._descInjectors.iterator();
		while( $it0.hasNext() ) {
			var traitInjector = $it0.next();
			item.removeParentInjector(traitInjector);
		}
		if(this._parentDescInjectors != null) {
			var $it1 = this._parentDescInjectors.iterator();
			while( $it1.hasNext() ) {
				var traitInjector1 = $it1.next();
				item.removeParentInjector(traitInjector1);
			}
		}
		item.setRoot(null);
	}
	,removeAllItem: function() {
		while(this._children.get_length() > 0) this.removeChild(this._children.first());
	}
	,addChildTrait: function(traitPair) {
		this._descendantTraits.addTrait(traitPair);
		if(this._parentItem != null) this._parentItem.addChildTrait(traitPair);
	}
	,removeChildTrait: function(traitPair) {
		this._descendantTraits.removeTrait(traitPair);
		if(this._parentItem != null) this._parentItem.removeChildTrait(traitPair);
	}
	,addTrait: function(trait) {
		composure_core_ComposeItem.prototype.addTrait.call(this,trait);
		this.checkForNewlyIgnoredInjectors();
	}
	,addTraits: function(traits) {
		composure_core_ComposeItem.prototype.addTraits.call(this,traits);
		this.checkForNewlyIgnoredInjectors();
	}
	,removeTrait: function(trait) {
		composure_core_ComposeItem.prototype.removeTrait.call(this,trait);
		this.checkForNewlyUnignoredInjectors();
	}
	,removeTraits: function(traits) {
		composure_core_ComposeItem.prototype.removeTraits.call(this,traits);
		this.checkForNewlyUnignoredInjectors();
	}
	,removeAllTraits: function() {
		composure_core_ComposeItem.prototype.removeAllTraits.call(this);
		this.checkForNewlyUnignoredInjectors();
	}
	,addTraitInjector: function(injector) {
		composure_core_ComposeItem.prototype.addTraitInjector.call(this,injector);
		if(injector.descendants) {
			this._descInjectors.add(injector);
			var $it0 = this._children.iterator();
			while( $it0.hasNext() ) {
				var child = $it0.next();
				child.addParentInjector(injector);
			}
		}
	}
	,removeTraitInjector: function(injector) {
		composure_core_ComposeItem.prototype.removeTraitInjector.call(this,injector);
		if(this._descInjectors.containsItem(injector)) {
			this._descInjectors.remove(injector);
			var $it0 = this._children.iterator();
			while( $it0.hasNext() ) {
				var child = $it0.next();
				child.removeParentInjector(injector);
			}
		}
	}
	,getDescTrait: function(TraitType) {
		return this._descendantTraits.getTrait(TraitType);
	}
	,getDescTraits: function(TraitType) {
		return this._descendantTraits.getTraits(TraitType);
	}
	,callForDescTraits: function(func,TraitType) {
		this._descendantTraits.callForTraits(func,TraitType,this);
	}
	,onParentAdd: function() {
		composure_core_ComposeItem.prototype.onParentAdd.call(this);
		var $it0 = this._descendantTraits.traitPairs.iterator();
		while( $it0.hasNext() ) {
			var traitPair = $it0.next();
			this._parentItem.addChildTrait(traitPair);
		}
		if(this._childAscInjectors != null) {
			var $it1 = this._childAscInjectors.iterator();
			while( $it1.hasNext() ) {
				var injector = $it1.next();
				this._parentItem.addAscendingInjector(injector);
			}
		}
	}
	,onParentRemove: function() {
		composure_core_ComposeItem.prototype.onParentRemove.call(this);
		var $it0 = this._descendantTraits.traitPairs.iterator();
		while( $it0.hasNext() ) {
			var traitPair = $it0.next();
			this._parentItem.removeChildTrait(traitPair);
		}
		if(this._childAscInjectors != null) {
			var $it1 = this._childAscInjectors.iterator();
			while( $it1.hasNext() ) {
				var injector = $it1.next();
				this._parentItem.removeAscendingInjector(injector);
			}
		}
	}
	,addAscendingInjector: function(injector) {
		this._childAscendingMarrier.addInjector(injector);
		if(injector.shouldAscend(this)) this._addAscendingInjector(injector); else {
			if(this._ignoredChildAscInjectors == null) this._ignoredChildAscInjectors = new org_tbyrne_collections_UniqueList();
			this._ignoredChildAscInjectors.add(injector);
		}
	}
	,_addAscendingInjector: function(injector) {
		if(this._childAscInjectors == null) this._childAscInjectors = new org_tbyrne_collections_UniqueList();
		this._childAscInjectors.add(injector);
		if(this._parentItem != null) this._parentItem.addAscendingInjector(injector);
	}
	,removeAscendingInjector: function(injector) {
		this._childAscendingMarrier.removeInjector(injector);
		if(this._childAscInjectors != null && this._childAscInjectors.containsItem(injector)) this._removeAscendingInjector(injector); else this._ignoredChildAscInjectors.remove(injector);
	}
	,_removeAscendingInjector: function(injector) {
		this._childAscInjectors.remove(injector);
		if(this._parentItem != null) this._parentItem.removeAscendingInjector(injector);
	}
	,addParentInjector: function(injector) {
		composure_core_ComposeItem.prototype.addParentInjector.call(this,injector);
		if(injector.shouldDescend(this)) this.addDescParentInjector(injector); else {
			if(this._ignoredParentDescInjectors == null) this._ignoredParentDescInjectors = new org_tbyrne_collections_UniqueList();
			this._ignoredParentDescInjectors.add(injector);
		}
	}
	,removeParentInjector: function(injector) {
		composure_core_ComposeItem.prototype.removeParentInjector.call(this,injector);
		if(this._parentDescInjectors != null && this._parentDescInjectors.containsItem(injector)) this.removeDescParentInjector(injector); else if(this._ignoredParentDescInjectors != null) this._ignoredParentDescInjectors.remove(injector);
	}
	,checkForNewlyIgnoredInjectors: function() {
		var _g = this;
		if(this._parentDescInjectors != null) {
			var shouldNotDesc = Lambda.filter(this._parentDescInjectors,function(inj) {
				return !inj.shouldDescend(_g);
			});
			var _g_head = shouldNotDesc.h;
			var _g_val = null;
			while(_g_head != null) {
				var inj1;
				inj1 = (function($this) {
					var $r;
					_g_val = _g_head[0];
					_g_head = _g_head[1];
					$r = _g_val;
					return $r;
				}(this));
				this.removeDescParentInjector(inj1);
				if(this._ignoredParentDescInjectors == null) this._ignoredParentDescInjectors = new org_tbyrne_collections_UniqueList();
				this._ignoredParentDescInjectors.add(inj1);
			}
		}
		if(this._childAscInjectors != null) {
			var shouldNotAsc = Lambda.filter(this._childAscInjectors,function(inj2) {
				return !inj2.shouldAscend(_g);
			});
			var _g_head1 = shouldNotAsc.h;
			var _g_val1 = null;
			while(_g_head1 != null) {
				var inj3;
				inj3 = (function($this) {
					var $r;
					_g_val1 = _g_head1[0];
					_g_head1 = _g_head1[1];
					$r = _g_val1;
					return $r;
				}(this));
				this._removeAscendingInjector(inj3);
				if(this._ignoredChildAscInjectors == null) this._ignoredChildAscInjectors = new org_tbyrne_collections_UniqueList();
				this._ignoredChildAscInjectors.add(inj3);
			}
		}
	}
	,checkForNewlyUnignoredInjectors: function() {
		var _g = this;
		if(this._ignoredParentDescInjectors != null) {
			var shouldDesc = Lambda.filter(this._ignoredParentDescInjectors,function(inj) {
				return inj.shouldDescend(_g);
			});
			var _g_head = shouldDesc.h;
			var _g_val = null;
			while(_g_head != null) {
				var inj1;
				inj1 = (function($this) {
					var $r;
					_g_val = _g_head[0];
					_g_head = _g_head[1];
					$r = _g_val;
					return $r;
				}(this));
				this.addDescParentInjector(inj1);
				this._ignoredParentDescInjectors.remove(inj1);
			}
		}
		if(this._ignoredChildAscInjectors != null) {
			var shouldAsc = Lambda.filter(this._ignoredChildAscInjectors,function(inj2) {
				return inj2.shouldAscend(_g);
			});
			var _g_head1 = shouldAsc.h;
			var _g_val1 = null;
			while(_g_head1 != null) {
				var inj3;
				inj3 = (function($this) {
					var $r;
					_g_val1 = _g_head1[0];
					_g_head1 = _g_head1[1];
					$r = _g_val1;
					return $r;
				}(this));
				this._addAscendingInjector(inj3);
				this._ignoredChildAscInjectors.remove(inj3);
			}
		}
	}
	,addDescParentInjector: function(injector) {
		if(this._parentDescInjectors == null) this._parentDescInjectors = new org_tbyrne_collections_UniqueList();
		this._parentDescInjectors.add(injector);
		var $it0 = this._children.iterator();
		while( $it0.hasNext() ) {
			var child = $it0.next();
			child.addParentInjector(injector);
		}
	}
	,removeDescParentInjector: function(injector) {
		this._parentDescInjectors.remove(injector);
		var $it0 = this._children.iterator();
		while( $it0.hasNext() ) {
			var child = $it0.next();
			child.removeParentInjector(injector);
		}
	}
	,__class__: composure_core_ComposeGroup
	,__properties__: $extend(composure_core_ComposeItem.prototype.__properties__,{get_children:"get_children"})
});
var composure_core_ComposeRoot = function(initTraits) {
	composure_core_ComposeGroup.call(this,initTraits);
	this._universalMarrier = new composure_injectors_InjectorMarrier(this._descendantTraits);
	this.setRoot(this);
};
$hxClasses["composure.core.ComposeRoot"] = composure_core_ComposeRoot;
composure_core_ComposeRoot.__name__ = ["composure","core","ComposeRoot"];
composure_core_ComposeRoot.__super__ = composure_core_ComposeGroup;
composure_core_ComposeRoot.prototype = $extend(composure_core_ComposeGroup.prototype,{
	getAllTraits: function() {
		return this._descendantTraits;
	}
	,addUniversalInjector: function(injector) {
		this._universalMarrier.addInjector(injector);
	}
	,removeUniversalInjector: function(injector) {
		this._universalMarrier.removeInjector(injector);
	}
	,__class__: composure_core_ComposeRoot
});
var composure_injectors_IInjector = function() { };
$hxClasses["composure.injectors.IInjector"] = composure_injectors_IInjector;
composure_injectors_IInjector.__name__ = ["composure","injectors","IInjector"];
composure_injectors_IInjector.prototype = {
	__class__: composure_injectors_IInjector
};
var composure_injectors_AbstractInjector = function(interestedTraitType,addHandler,removeHandler,siblings,descendants,ascendants,universal,passThroughItem,passThroughInjector) {
	if(passThroughInjector == null) passThroughInjector = false;
	if(passThroughItem == null) passThroughItem = false;
	if(universal == null) universal = false;
	if(ascendants == null) ascendants = false;
	if(descendants == null) descendants = false;
	if(siblings == null) siblings = true;
	this.addHandler = addHandler;
	this.removeHandler = removeHandler;
	this.maxMatches = -1;
	this.siblings = siblings;
	this.descendants = descendants;
	this.ascendants = ascendants;
	this.universal = universal;
	this.set_interestedTraitType(interestedTraitType);
	this._addedTraits = new org_tbyrne_collections_UniqueList();
	this.passThroughInjector = passThroughInjector;
	this.passThroughItem = passThroughItem;
};
$hxClasses["composure.injectors.AbstractInjector"] = composure_injectors_AbstractInjector;
composure_injectors_AbstractInjector.__name__ = ["composure","injectors","AbstractInjector"];
composure_injectors_AbstractInjector.__interfaces__ = [composure_injectors_IInjector];
composure_injectors_AbstractInjector.prototype = {
	set_interestedTraitType: function(value) {
		this.interestedTraitType = value;
		if(value != null) this._enumValMode = Type.getEnum(value) != null;
		return value;
	}
	,injectorAdded: function(traitPair) {
		if(this._addedTraits.add(traitPair) && this.addHandler != null) {
			var item = traitPair.item;
			var trait = traitPair.trait;
			if(this.passThroughInjector) {
				if(this.passThroughItem) this.addHandler(this,trait,item); else this.addHandler(this,trait);
			} else if(this.passThroughItem) this.addHandler(trait,item); else this.addHandler(trait);
		}
	}
	,injectorRemoved: function(traitPair) {
		if(this._addedTraits.remove(traitPair) && this.removeHandler != null) {
			var item = traitPair.item;
			var trait = traitPair.trait;
			if(this.passThroughInjector) {
				if(this.passThroughItem) this.removeHandler(this,trait,item); else this.removeHandler(this,trait);
			} else if(this.passThroughItem) this.removeHandler(trait,item); else this.removeHandler(trait);
		}
	}
	,itemMatchesAll: function(item,traitTypes) {
		var _g = 0;
		while(_g < traitTypes.length) {
			var traitType = traitTypes[_g];
			++_g;
			if(item.getTrait(traitType) == null) return false;
		}
		return true;
	}
	,itemMatchesAny: function(item,traitTypes) {
		var _g = 0;
		while(_g < traitTypes.length) {
			var traitType = traitTypes[_g];
			++_g;
			if(item.getTrait(traitType) != null) return true;
		}
		return false;
	}
	,shouldDescend: function(item) {
		if(this.stopDescendingAt != null) return !this.stopDescendingAt(item,null,this); else return true;
	}
	,shouldAscend: function(item) {
		if(this.stopAscendingAt != null) return !this.stopAscendingAt(item,null,this); else return true;
	}
	,isInterestedIn: function(item,trait) {
		if(this.maxMatches != -1 && this._addedTraits.get_length() >= this.maxMatches) return false;
		if(this._enumValMode) {
			var traitEnum = Type.getEnum(trait);
			var intEnum = Type.getEnum(this.interestedTraitType);
			if(traitEnum != intEnum) return false;
			if(Type.enumIndex(trait) != Type.enumIndex(this.interestedTraitType)) return false;
			if(this.checkEnumParams == null) return this.matchTrait == null || this.matchTrait(item,trait,this); else {
				var traitParams = Type.enumParameters(trait);
				var intParams = Type.enumParameters(this.interestedTraitType);
				var _g = 0;
				var _g1 = this.checkEnumParams;
				while(_g < _g1.length) {
					var index = _g1[_g];
					++_g;
					var intVal = intParams[index];
					var traitVal = traitParams[index];
					{
						var _g2 = Type["typeof"](intVal);
						switch(_g2[1]) {
						case 7:
							if(!Type.enumEq(intVal,traitVal)) return false;
							break;
						default:
							if(intVal != traitVal) return false;
						}
					}
				}
				return this.matchTrait == null || this.matchTrait(item,trait,this);
			}
		} else {
			if(js_Boot.__instanceof(trait,this.interestedTraitType) && (this.matchTrait == null || this.matchTrait(item,trait,this))) {
				if(this.checkProps != null) {
					var $it0 = this.checkProps.keys();
					while( $it0.hasNext() ) {
						var i = $it0.next();
						if(Reflect.getProperty(trait,i) != this.checkProps.get(i)) return false;
					}
				}
				return true;
			}
			return false;
		}
	}
	,__class__: composure_injectors_AbstractInjector
	,__properties__: {set_interestedTraitType:"set_interestedTraitType"}
};
var composure_injectors_Injector = function(traitType,addHandler,removeHandler,siblings,descendants,ascendants,universal,passThroughItem,passThroughInjector) {
	if(passThroughInjector == null) passThroughInjector = false;
	if(passThroughItem == null) passThroughItem = false;
	if(universal == null) universal = false;
	if(ascendants == null) ascendants = false;
	if(descendants == null) descendants = false;
	if(siblings == null) siblings = true;
	composure_injectors_AbstractInjector.call(this,traitType,addHandler,removeHandler,siblings,descendants,ascendants,universal,passThroughItem,passThroughInjector);
};
$hxClasses["composure.injectors.Injector"] = composure_injectors_Injector;
composure_injectors_Injector.__name__ = ["composure","injectors","Injector"];
composure_injectors_Injector.__super__ = composure_injectors_AbstractInjector;
composure_injectors_Injector.prototype = $extend(composure_injectors_AbstractInjector.prototype,{
	__class__: composure_injectors_Injector
});
var composure_injectors_InjectorMarrier = function(traits) {
	this._traitInjectors = new org_tbyrne_collections_UniqueList();
	this._injectorLookup = new haxe_ds_ObjectMap();
	this._traitLookup = new haxe_ds_ObjectMap();
	this.set_traits(traits);
};
$hxClasses["composure.injectors.InjectorMarrier"] = composure_injectors_InjectorMarrier;
composure_injectors_InjectorMarrier.__name__ = ["composure","injectors","InjectorMarrier"];
composure_injectors_InjectorMarrier.prototype = {
	get_traits: function() {
		return this._traits;
	}
	,set_traits: function(value) {
		if(this._traits != value) {
			if(this._traits != null) {
				this._traits.get_traitAdded().remove($bind(this,this.onTraitAdded));
				this._traits.get_traitRemoved().remove($bind(this,this.onTraitRemoved));
			}
			this._traits = value;
			if(this._traits != null) {
				this._traits.get_traitAdded().add($bind(this,this.onTraitAdded));
				this._traits.get_traitRemoved().add($bind(this,this.onTraitRemoved));
			}
		}
		return value;
	}
	,get_traitInjectors: function() {
		return this._traitInjectors;
	}
	,addInjector: function(traitInjector) {
		if(this._traitInjectors.add(traitInjector)) {
			var $it0 = this._traits.traitPairs.iterator();
			while( $it0.hasNext() ) {
				var traitPair = $it0.next();
				this.compareTrait(traitPair,traitInjector);
			}
		}
	}
	,removeInjector: function(traitInjector) {
		if(this._traitInjectors.remove(traitInjector)) {
			var traitPairs = this._injectorLookup.h[traitInjector.__id__];
			if(traitPairs != null) {
				var $it0 = traitPairs.iterator();
				while( $it0.hasNext() ) {
					var traitPair = $it0.next();
					traitInjector.injectorRemoved(traitPair);
					var traitLookup = this._traitLookup.get(traitPair.trait);
					traitLookup.remove(traitInjector);
				}
				traitPairs.clear();
				this._injectorLookup.remove(traitInjector);
			}
		}
	}
	,onTraitAdded: function(traitPair) {
		var $it0 = this._traitInjectors.iterator();
		while( $it0.hasNext() ) {
			var traitInjector = $it0.next();
			this.compareTrait(traitPair,traitInjector);
		}
	}
	,onTraitRemoved: function(traitPair) {
		var injectors = this._traitLookup.get(traitPair.trait);
		if(injectors != null) {
			var $it0 = injectors.iterator();
			while( $it0.hasNext() ) {
				var traitInjector = $it0.next();
				traitInjector.injectorRemoved(traitPair);
				var injectorLookup = this._injectorLookup.h[traitInjector.__id__];
				injectorLookup.remove(traitPair.trait);
			}
			injectors.clear();
			this._traitLookup.remove(traitPair.trait);
		}
	}
	,compareTrait: function(traitPair,traitInjector) {
		if((traitPair.trait != traitInjector.ownerTrait || traitInjector.acceptOwnerTrait) && traitInjector.isInterestedIn(traitPair.item,traitPair.trait)) {
			var injectorList = this._injectorLookup.h[traitInjector.__id__];
			if(injectorList == null) {
				injectorList = new org_tbyrne_collections_UniqueList();
				this._injectorLookup.set(traitInjector,injectorList);
			}
			injectorList.add(traitPair);
			var traitList = this._traitLookup.get(traitPair.trait);
			if(traitList == null) {
				traitList = new org_tbyrne_collections_UniqueList();
				this._traitLookup.set(traitPair.trait,traitList);
			}
			traitList.add(traitInjector);
			traitInjector.injectorAdded(traitPair);
		}
	}
	,__class__: composure_injectors_InjectorMarrier
	,__properties__: {get_traitInjectors:"get_traitInjectors",set_traits:"set_traits",get_traits:"get_traits"}
};
var composure_injectors_PropInjector = function(interestedTraitType,subject,prop,siblings,descendants,ascendants,universal,writeOnly) {
	if(writeOnly == null) writeOnly = false;
	if(universal == null) universal = false;
	if(ascendants == null) ascendants = false;
	if(descendants == null) descendants = false;
	if(siblings == null) siblings = true;
	this.subject = subject;
	this.prop = prop;
	this.writeOnly = writeOnly;
	composure_injectors_AbstractInjector.call(this,interestedTraitType,$bind(this,this.addProp),$bind(this,this.removeProp),siblings,descendants,ascendants,universal);
};
$hxClasses["composure.injectors.PropInjector"] = composure_injectors_PropInjector;
composure_injectors_PropInjector.__name__ = ["composure","injectors","PropInjector"];
composure_injectors_PropInjector.__super__ = composure_injectors_AbstractInjector;
composure_injectors_PropInjector.prototype = $extend(composure_injectors_AbstractInjector.prototype,{
	addProp: function(trait) {
		if(this.isSet) return;
		if(!this.writeOnly) {
			if(Reflect.getProperty(this.subject,this.prop) != null) {
				this.isSet = true;
				return;
			}
		}
		this.isSet = true;
		this.setTrait = trait;
		Reflect.setProperty(this.subject,this.prop,trait);
	}
	,removeProp: function(trait) {
		if(this.isSet && trait == this.setTrait) {
			if(Reflect.getProperty(this.subject,this.prop) != this.setTrait) {
				this.isSet = true;
				return;
			} else {
				this.isSet = false;
				Reflect.setProperty(this.subject,this.prop,null);
			}
			this.setTrait = null;
		}
	}
	,__class__: composure_injectors_PropInjector
});
var haxe_IMap = function() { };
$hxClasses["haxe.IMap"] = haxe_IMap;
haxe_IMap.__name__ = ["haxe","IMap"];
var haxe_ds_StringMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.StringMap"] = haxe_ds_StringMap;
haxe_ds_StringMap.__name__ = ["haxe","ds","StringMap"];
haxe_ds_StringMap.__interfaces__ = [haxe_IMap];
haxe_ds_StringMap.prototype = {
	set: function(key,value) {
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
	,remove: function(key) {
		if(__map_reserved[key] != null) {
			key = "$" + key;
			if(this.rh == null || !this.rh.hasOwnProperty(key)) return false;
			delete(this.rh[key]);
			return true;
		} else {
			if(!this.h.hasOwnProperty(key)) return false;
			delete(this.h[key]);
			return true;
		}
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
	,iterator: function() {
		return new haxe_ds__$StringMap_StringMapIterator(this,this.arrayKeys());
	}
	,__class__: haxe_ds_StringMap
};
var composure_prom_Promises = function() { };
$hxClasses["composure.prom.Promises"] = composure_prom_Promises;
composure_prom_Promises.__name__ = ["composure","prom","Promises"];
composure_prom_Promises.isRegistered = function(typeName) {
	return composure_prom_Promises._typeInfo.exists(typeName);
};
composure_prom_Promises.registerTypePromises = function(typeName,promisesMetProp,promiseInfo) {
	var backMap = new haxe_ds_StringMap();
	var prom;
	var _g = 0;
	while(_g < promiseInfo.length) {
		var prom1 = promiseInfo[_g];
		++_g;
		var req;
		var _g1 = 0;
		var _g2 = prom1.requirements;
		while(_g1 < _g2.length) {
			var req1 = _g2[_g1];
			++_g1;
			{
				var propName = req1[2];
				var list;
				list = __map_reserved[propName] != null?backMap.getReserved(propName):backMap.h[propName];
				if(list == null) {
					list = [prom1];
					if(__map_reserved[propName] != null) backMap.setReserved(propName,list); else backMap.h[propName] = list;
				} else list.push(prom1);
			}
		}
	}
	composure_prom_Promises._typeInfo.set(typeName,{ typeName : typeName, promisesMetProp : promisesMetProp, promiseInfo : promiseInfo, backMap : backMap});
};
composure_prom_Promises.registerOnce = function(typeName,promisesMetProp,promiseInfoGenerator) {
	if(!composure_prom_Promises._typeInfo.exists(typeName)) composure_prom_Promises.registerTypePromises(typeName,promisesMetProp,promiseInfoGenerator());
};
composure_prom_Promises.prePropChange = function(typeName,target,prop,oldValue,newValue) {
	if(oldValue == newValue) return;
	var classInfo = composure_prom_Promises._typeInfo.get(typeName);
	var list = classInfo.backMap.get(prop);
	var prom;
	var metMap = Reflect.getProperty(target,classInfo.promisesMetProp);
	var _g = 0;
	while(_g < list.length) {
		var prom1 = list[_g];
		++_g;
		if(metMap.get(prom1.methodName)) {
			Reflect.callMethod(target,Reflect.field(target,prom1.methodName),[false]);
			metMap.remove(prom1.methodName);
		}
	}
};
composure_prom_Promises.postPropChange = function(typeName,target,prop,oldValue,newValue) {
	if(oldValue == newValue) return;
	var classInfo = composure_prom_Promises._typeInfo.get(typeName);
	var list = classInfo.backMap.get(prop);
	var prom;
	var metMap = Reflect.getProperty(target,classInfo.promisesMetProp);
	var _g = 0;
	while(_g < list.length) {
		var prom1 = list[_g];
		++_g;
		var isReady = true;
		var req;
		var _g1 = 0;
		var _g2 = prom1.requirements;
		while(_g1 < _g2.length) {
			var req1 = _g2[_g1];
			++_g1;
			{
				var propName = req1[2];
				var prop1 = Reflect.getProperty(target,propName);
				if(prop1 == null || prop1 == false) {
					isReady = false;
					break;
				}
			}
		}
		if(isReady) {
			Reflect.callMethod(target,Reflect.field(target,prom1.methodName),[true]);
			metMap.set(prom1.methodName,true);
		}
	}
};
var composure_prom_PromiseReq = $hxClasses["composure.prom.PromiseReq"] = { __ename__ : ["composure","prom","PromiseReq"], __constructs__ : ["RProp"] };
composure_prom_PromiseReq.RProp = function(propName) { var $x = ["RProp",0,propName]; $x.__enum__ = composure_prom_PromiseReq; $x.toString = $estr; return $x; };
var composure_traits_ITrait = function() { };
$hxClasses["composure.traits.ITrait"] = composure_traits_ITrait;
composure_traits_ITrait.__name__ = ["composure","traits","ITrait"];
composure_traits_ITrait.prototype = {
	__class__: composure_traits_ITrait
	,__properties__: {set_item:"set_item"}
};
var composure_traits_AbstractTrait = function(ownerTrait) {
	this._groupOnly = false;
	if(ownerTrait != null) this._ownerTrait = ownerTrait; else this._ownerTrait = this;
};
$hxClasses["composure.traits.AbstractTrait"] = composure_traits_AbstractTrait;
composure_traits_AbstractTrait.__name__ = ["composure","traits","AbstractTrait"];
composure_traits_AbstractTrait.__interfaces__ = [composure_traits_ITrait];
composure_traits_AbstractTrait.prototype = {
	set_item: function(value) {
		if(this.item != value) {
			if(this.item != null) {
				if(this._siblingTraits != null) {
					var $it0 = this._siblingTraits.iterator();
					while( $it0.hasNext() ) {
						var trait = $it0.next();
						this.item.removeTrait(trait);
					}
				}
				if(this.group != null && this._childItems != null) {
					var $it1 = this._childItems.iterator();
					while( $it1.hasNext() ) {
						var trait1 = $it1.next();
						this.group.removeChild(trait1);
					}
				}
				this.onItemRemove();
			}
			this.item = value;
			this.group = null;
			if(this.item != null) {
				if(js_Boot.__instanceof(value,composure_core_ComposeGroup)) {
					this.group = js_Boot.__cast(value , composure_core_ComposeGroup);
					if(this._childItems != null) {
						var $it2 = this._childItems.iterator();
						while( $it2.hasNext() ) {
							var child = $it2.next();
							this.group.addChild(child);
						}
					}
				}
				this.onItemAdd();
				if(this._siblingTraits != null) {
					var $it3 = this._siblingTraits.iterator();
					while( $it3.hasNext() ) {
						var trait2 = $it3.next();
						this.item.addTrait(trait2);
					}
				}
			}
		}
		return value;
	}
	,onItemRemove: function() {
	}
	,onItemAdd: function() {
	}
	,getInjectors: function() {
		if(this._injectors == null) this._injectors = new org_tbyrne_collections_UniqueList();
		return this._injectors;
	}
	,addSiblingTrait: function(trait) {
		if(this._siblingTraits == null) this._siblingTraits = new org_tbyrne_collections_UniqueList();
		if(this._siblingTraits.add(trait)) {
			if(this.item != null) this.item.addTrait(trait);
		}
	}
	,removeSiblingTrait: function(trait) {
		if(this._siblingTraits != null && this._siblingTraits.remove(trait)) {
			if(this.item != null) this.item.removeTrait(trait);
		}
	}
	,removeSiblingTraits: function(traits) {
		var _g = 0;
		while(_g < traits.length) {
			var trait = traits[_g];
			++_g;
			this.removeSiblingTrait(trait);
		}
	}
	,addChildItem: function(child) {
		if(this._childItems == null) this._childItems = new org_tbyrne_collections_UniqueList();
		if(this._childItems.add(child)) {
			if(this.group != null) this.group.addChild(child);
		}
	}
	,removeChildItem: function(child) {
		if(this._childItems != null && this._childItems.remove(child)) {
			if(this.group != null) this.group.removeChild(child);
		}
	}
	,removeChildItems: function(children) {
		var _g = 0;
		while(_g < children.length) {
			var child = children[_g];
			++_g;
			this.removeChildItem(child);
		}
	}
	,addInjector: function(injector) {
		if(this._injectors == null) this._injectors = new org_tbyrne_collections_UniqueList();
		if(this._injectors.add(injector)) {
			injector.ownerTraitTyped = this;
			injector.ownerTrait = this._ownerTrait;
		}
	}
	,removeInjector: function(injector) {
		if(this._injectors != null && this._injectors.remove(injector)) {
			injector.ownerTraitTyped = null;
			injector.ownerTrait = null;
		}
	}
	,__class__: composure_traits_AbstractTrait
	,__properties__: {set_item:"set_item"}
};
var composure_traits_TraitCollection = function() {
	this._traitTypeCache = new haxe_ds_StringMap();
	this.traitPairs = new org_tbyrne_collections_UniqueList();
};
$hxClasses["composure.traits.TraitCollection"] = composure_traits_TraitCollection;
composure_traits_TraitCollection.__name__ = ["composure","traits","TraitCollection"];
composure_traits_TraitCollection.prototype = {
	get_testSignal: function() {
		if(this._testSignal == null) this._testSignal = new msignal_Signal1();
		return this._testSignal;
	}
	,getTrait: function(traitType) {
		if(traitType == null) {
			haxe_Log.trace("TraitCollection.getTrait must be supplied an ITrait class to match",{ fileName : "TraitCollection.hx", lineNumber : 50, className : "composure.traits.TraitCollection", methodName : "getTrait"});
			return null;
		} else {
			var cache = this.validateCache(traitType);
			if(cache != null) return cache.getTrait; else return null;
		}
	}
	,getTraits: function(traitType) {
		var cache = this.validateCache(traitType);
		if(cache != null) return cache.getTraits; else return null;
	}
	,validateCache: function(matchType) {
		var typeName;
		if(js_Boot.__instanceof(matchType,Enum)) typeName = Type.getEnumName(matchType); else typeName = Type.getClassName(matchType);
		var cache;
		cache = this._traitTypeCache.get(typeName);
		var invalid;
		if(cache != null) invalid = cache.invalid; else {
			cache = new composure_traits__$TraitCollection_TraitTypeCache();
			this._traitTypeCache.set(typeName,cache);
			invalid = this.traitPairs;
		}
		if(!cache.methodCachesSafe) {
			var $it0 = invalid.iterator();
			while( $it0.hasNext() ) {
				var traitPair = $it0.next();
				if(js_Boot.__instanceof(traitPair.trait,matchType)) {
					cache.matched.add(traitPair);
					cache.getTraitsList.add(traitPair.trait);
				}
			}
			cache.invalid.clear();
			cache.methodCachesSafe = true;
			cache.getTrait = cache.getTraitsList.first();
		}
		return cache;
	}
	,callForTraits: function(func,matchType,thisObj,params,collectReturns) {
		var matchingType = matchType != null;
		var cache;
		var typeName;
		if(matchingType) {
			typeName = Type.getClassName(matchType);
			cache = this._traitTypeCache.get(typeName);
		} else {
			cache = null;
			typeName = null;
		}
		var realParams = [thisObj,null];
		if(params != null) realParams = realParams.concat(params);
		var invalid;
		if(cache != null) {
			var $it0 = cache.matched.iterator();
			while( $it0.hasNext() ) {
				var traitPair = $it0.next();
				realParams[1] = traitPair.trait;
				Reflect.callMethod(thisObj,func,realParams);
			}
			invalid = cache.invalid;
		} else {
			if(matchingType) {
				cache = new composure_traits__$TraitCollection_TraitTypeCache();
				this._traitTypeCache.set(typeName,cache);
			}
			invalid = this.traitPairs;
		}
		if(matchingType) {
			if(cache != null && cache.methodCachesSafe == false) {
				var $it1 = invalid.iterator();
				while( $it1.hasNext() ) {
					var traitPair1 = $it1.next();
					if(js_Boot.__instanceof(traitPair1.trait,matchType)) {
						realParams[1] = traitPair1.trait;
						if(matchingType) {
							cache.matched.add(traitPair1);
							cache.getTraitsList.add(traitPair1.trait);
						}
						if(collectReturns != null) collectReturns.push(Reflect.callMethod(thisObj,func,realParams)); else Reflect.callMethod(thisObj,func,realParams);
					}
				}
				cache.invalid.clear();
				cache.methodCachesSafe = true;
				cache.getTrait = cache.getTraitsList.first();
			}
		} else {
			var $it2 = invalid.iterator();
			while( $it2.hasNext() ) {
				var trait = $it2.next();
				realParams[1] = trait;
				if(collectReturns != null) collectReturns.push(Reflect.callMethod(thisObj,func,realParams)); else Reflect.callMethod(thisObj,func,realParams);
			}
		}
	}
	,addTrait: function(traitPair) {
		this.traitPairs.add(traitPair);
		var $it0 = this._traitTypeCache.iterator();
		while( $it0.hasNext() ) {
			var cache = $it0.next();
			cache.invalid.add(traitPair);
			cache.methodCachesSafe = false;
		}
		if(this._traitAdded != null) this._traitAdded.dispatch(traitPair);
	}
	,removeTrait: function(traitPair) {
		this.traitPairs.remove(traitPair);
		var $it0 = this._traitTypeCache.iterator();
		while( $it0.hasNext() ) {
			var cache = $it0.next();
			cache.getTraitsList.remove(traitPair.trait);
			cache.matched.remove(traitPair);
			cache.invalid.remove(traitPair);
			cache.methodCachesSafe = false;
		}
		if(this._traitRemoved != null) this._traitRemoved.dispatch(traitPair);
	}
	,get_traitAdded: function() {
		if(this._traitAdded == null) this._traitAdded = new msignal_Signal1();
		return this._traitAdded;
	}
	,get_traitRemoved: function() {
		if(this._traitRemoved == null) this._traitRemoved = new msignal_Signal1();
		return this._traitRemoved;
	}
	,__class__: composure_traits_TraitCollection
	,__properties__: {get_testSignal:"get_testSignal",get_traitRemoved:"get_traitRemoved",get_traitAdded:"get_traitAdded"}
};
var composure_traits__$TraitCollection_TraitTypeCache = function() {
	this.matched = new org_tbyrne_collections_UniqueList();
	this.invalid = new org_tbyrne_collections_UniqueList();
	this.getTraitsList = new org_tbyrne_collections_UniqueList();
	this.getTraits = this.getTraitsList;
};
$hxClasses["composure.traits._TraitCollection.TraitTypeCache"] = composure_traits__$TraitCollection_TraitTypeCache;
composure_traits__$TraitCollection_TraitTypeCache.__name__ = ["composure","traits","_TraitCollection","TraitTypeCache"];
composure_traits__$TraitCollection_TraitTypeCache.prototype = {
	__class__: composure_traits__$TraitCollection_TraitTypeCache
};
var haxe__$Int64__$_$_$Int64 = function(high,low) {
	this.high = high;
	this.low = low;
};
$hxClasses["haxe._Int64.___Int64"] = haxe__$Int64__$_$_$Int64;
haxe__$Int64__$_$_$Int64.__name__ = ["haxe","_Int64","___Int64"];
haxe__$Int64__$_$_$Int64.prototype = {
	__class__: haxe__$Int64__$_$_$Int64
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
	toString: function() {
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
var haxe_Timer = function() { };
$hxClasses["haxe.Timer"] = haxe_Timer;
haxe_Timer.__name__ = ["haxe","Timer"];
haxe_Timer.stamp = function() {
	return new Date().getTime() / 1000;
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
	setResolver: function(r) {
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
var haxe_ds_GenericCell = function(elt,next) {
	this.elt = elt;
	this.next = next;
};
$hxClasses["haxe.ds.GenericCell"] = haxe_ds_GenericCell;
haxe_ds_GenericCell.__name__ = ["haxe","ds","GenericCell"];
haxe_ds_GenericCell.prototype = {
	__class__: haxe_ds_GenericCell
};
var haxe_ds_GenericStack = function() {
};
$hxClasses["haxe.ds.GenericStack"] = haxe_ds_GenericStack;
haxe_ds_GenericStack.__name__ = ["haxe","ds","GenericStack"];
haxe_ds_GenericStack.prototype = {
	add: function(item) {
		this.head = new haxe_ds_GenericCell(item,this.head);
	}
	,first: function() {
		if(this.head == null) return null; else return this.head.elt;
	}
	,remove: function(v) {
		var prev = null;
		var l = this.head;
		while(l != null) {
			if(l.elt == v) {
				if(prev == null) this.head = l.next; else prev.next = l.next;
				break;
			}
			prev = l;
			l = l.next;
		}
		return l != null;
	}
	,iterator: function() {
		var l = this.head;
		return { hasNext : function() {
			return l != null;
		}, next : function() {
			var k = l;
			l = k.next;
			return k.elt;
		}};
	}
	,__class__: haxe_ds_GenericStack
};
var haxe_ds_IntMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.IntMap"] = haxe_ds_IntMap;
haxe_ds_IntMap.__name__ = ["haxe","ds","IntMap"];
haxe_ds_IntMap.__interfaces__ = [haxe_IMap];
haxe_ds_IntMap.prototype = {
	set: function(key,value) {
		this.h[key] = value;
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
	set: function(key,value) {
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
	,remove: function(key) {
		var id = key.__id__;
		if(this.h.__keys__[id] == null) return false;
		delete(this.h[id]);
		delete(this.h.__keys__[id]);
		return true;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h.__keys__ ) {
		if(this.h.hasOwnProperty(key)) a.push(this.h.__keys__[key]);
		}
		return HxOverrides.iter(a);
	}
	,iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref[i.__id__];
		}};
	}
	,__class__: haxe_ds_ObjectMap
};
var haxe_ds__$StringMap_StringMapIterator = function(map,keys) {
	this.map = map;
	this.keys = keys;
	this.index = 0;
	this.count = keys.length;
};
$hxClasses["haxe.ds._StringMap.StringMapIterator"] = haxe_ds__$StringMap_StringMapIterator;
haxe_ds__$StringMap_StringMapIterator.__name__ = ["haxe","ds","_StringMap","StringMapIterator"];
haxe_ds__$StringMap_StringMapIterator.prototype = {
	hasNext: function() {
		return this.index < this.count;
	}
	,next: function() {
		return this.map.get(this.keys[this.index++]);
	}
	,__class__: haxe_ds__$StringMap_StringMapIterator
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
	get: function(pos) {
		return this.b[pos];
	}
	,set: function(pos,v) {
		this.b[pos] = v & 255;
	}
	,getFloat: function(pos) {
		if(this.data == null) this.data = new DataView(this.b.buffer,this.b.byteOffset,this.b.byteLength);
		return this.data.getFloat32(pos,true);
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
	addBytes: function(src,pos,len) {
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
	readByte: function() {
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
	set_position: function(p) {
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
	writeByte: function(c) {
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
	writeByte: function(c) {
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
haxe_io_FPHelper.i32ToFloat = function(i) {
	var sign = 1 - (i >>> 31 << 1);
	var exp = i >>> 23 & 255;
	var sig = i & 8388607;
	if(sig == 0 && exp == 0) return 0.0;
	return sign * (1 + Math.pow(2,-23) * sig) * Math.pow(2,exp - 127);
};
haxe_io_FPHelper.floatToI32 = function(f) {
	if(f == 0) return 0;
	var af;
	if(f < 0) af = -f; else af = f;
	var exp = Math.floor(Math.log(af) / 0.6931471805599453);
	if(exp < -127) exp = -127; else if(exp > 128) exp = 128;
	var sig = Math.round((af / Math.pow(2,exp) - 1) * 8388608) & 8388607;
	return (f < 0?-2147483648:0) | exp + 127 << 23 | sig;
};
haxe_io_FPHelper.i64ToDouble = function(low,high) {
	var sign = 1 - (high >>> 31 << 1);
	var exp = (high >> 20 & 2047) - 1023;
	var sig = (high & 1048575) * 4294967296. + (low >>> 31) * 2147483648. + (low & 2147483647);
	if(sig == 0 && exp == -1023) return 0.0;
	return sign * (1.0 + Math.pow(2,-52) * sig) * Math.pow(2,exp);
};
haxe_io_FPHelper.doubleToI64 = function(v) {
	var i64 = haxe_io_FPHelper.i64tmp;
	if(v == 0) {
		i64.low = 0;
		i64.high = 0;
	} else {
		var av;
		if(v < 0) av = -v; else av = v;
		var exp = Math.floor(Math.log(av) / 0.6931471805599453);
		var sig;
		var v1 = (av / Math.pow(2,exp) - 1) * 4503599627370496.;
		sig = Math.round(v1);
		var sig_l = sig | 0;
		var sig_h = sig / 4294967296.0 | 0;
		i64.low = sig_l;
		i64.high = (v < 0?-2147483648:0) | exp + 1023 << 20 | sig_h;
	}
	return i64;
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
	__class__: js__$Boot_HaxeError
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
var js_Browser = function() { };
$hxClasses["js.Browser"] = js_Browser;
js_Browser.__name__ = ["js","Browser"];
js_Browser.alert = function(v) {
	window.alert(js_Boot.__string_rec(v,""));
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
	slice: function(begin,end) {
		return new js_html_compat_ArrayBuffer(this.a.slice(begin,end));
	}
	,__class__: js_html_compat_ArrayBuffer
};
var js_html_compat_DataView = function(buffer,byteOffset,byteLength) {
	this.buf = buffer;
	if(byteOffset == null) this.offset = 0; else this.offset = byteOffset;
	if(byteLength == null) this.length = buffer.byteLength - this.offset; else this.length = byteLength;
	if(this.offset < 0 || this.length < 0 || this.offset + this.length > buffer.byteLength) throw new js__$Boot_HaxeError(haxe_io_Error.OutsideBounds);
};
$hxClasses["js.html.compat.DataView"] = js_html_compat_DataView;
js_html_compat_DataView.__name__ = ["js","html","compat","DataView"];
js_html_compat_DataView.prototype = {
	getInt8: function(byteOffset) {
		var v = this.buf.a[this.offset + byteOffset];
		if(v >= 128) return v - 256; else return v;
	}
	,getUint8: function(byteOffset) {
		return this.buf.a[this.offset + byteOffset];
	}
	,getInt16: function(byteOffset,littleEndian) {
		var v = this.getUint16(byteOffset,littleEndian);
		if(v >= 32768) return v - 65536; else return v;
	}
	,getUint16: function(byteOffset,littleEndian) {
		if(littleEndian) return this.buf.a[this.offset + byteOffset] | this.buf.a[this.offset + byteOffset + 1] << 8; else return this.buf.a[this.offset + byteOffset] << 8 | this.buf.a[this.offset + byteOffset + 1];
	}
	,getInt32: function(byteOffset,littleEndian) {
		var p = this.offset + byteOffset;
		var a = this.buf.a[p++];
		var b = this.buf.a[p++];
		var c = this.buf.a[p++];
		var d = this.buf.a[p++];
		if(littleEndian) return a | b << 8 | c << 16 | d << 24; else return d | c << 8 | b << 16 | a << 24;
	}
	,getUint32: function(byteOffset,littleEndian) {
		var v = this.getInt32(byteOffset,littleEndian);
		if(v < 0) return v + 4294967296.; else return v;
	}
	,getFloat32: function(byteOffset,littleEndian) {
		return haxe_io_FPHelper.i32ToFloat(this.getInt32(byteOffset,littleEndian));
	}
	,getFloat64: function(byteOffset,littleEndian) {
		var a = this.getInt32(byteOffset,littleEndian);
		var b = this.getInt32(byteOffset + 4,littleEndian);
		return haxe_io_FPHelper.i64ToDouble(littleEndian?a:b,littleEndian?b:a);
	}
	,setInt8: function(byteOffset,value) {
		if(value < 0) this.buf.a[byteOffset + this.offset] = value + 128 & 255; else this.buf.a[byteOffset + this.offset] = value & 255;
	}
	,setUint8: function(byteOffset,value) {
		this.buf.a[byteOffset + this.offset] = value & 255;
	}
	,setInt16: function(byteOffset,value,littleEndian) {
		this.setUint16(byteOffset,value < 0?value + 65536:value,littleEndian);
	}
	,setUint16: function(byteOffset,value,littleEndian) {
		var p = byteOffset + this.offset;
		if(littleEndian) {
			this.buf.a[p] = value & 255;
			this.buf.a[p++] = value >> 8 & 255;
		} else {
			this.buf.a[p++] = value >> 8 & 255;
			this.buf.a[p] = value & 255;
		}
	}
	,setInt32: function(byteOffset,value,littleEndian) {
		this.setUint32(byteOffset,value,littleEndian);
	}
	,setUint32: function(byteOffset,value,littleEndian) {
		var p = byteOffset + this.offset;
		if(littleEndian) {
			this.buf.a[p++] = value & 255;
			this.buf.a[p++] = value >> 8 & 255;
			this.buf.a[p++] = value >> 16 & 255;
			this.buf.a[p++] = value >>> 24;
		} else {
			this.buf.a[p++] = value >>> 24;
			this.buf.a[p++] = value >> 16 & 255;
			this.buf.a[p++] = value >> 8 & 255;
			this.buf.a[p++] = value & 255;
		}
	}
	,setFloat32: function(byteOffset,value,littleEndian) {
		this.setUint32(byteOffset,haxe_io_FPHelper.floatToI32(value),littleEndian);
	}
	,setFloat64: function(byteOffset,value,littleEndian) {
		var i64 = haxe_io_FPHelper.doubleToI64(value);
		if(littleEndian) {
			this.setUint32(byteOffset,i64.low);
			this.setUint32(byteOffset,i64.high);
		} else {
			this.setUint32(byteOffset,i64.high);
			this.setUint32(byteOffset,i64.low);
		}
	}
	,__class__: js_html_compat_DataView
};
var js_html_compat_Float32Array = function() { };
$hxClasses["js.html.compat.Float32Array"] = js_html_compat_Float32Array;
js_html_compat_Float32Array.__name__ = ["js","html","compat","Float32Array"];
js_html_compat_Float32Array._new = function(arg1,offset,length) {
	var arr;
	if(typeof(arg1) == "number") {
		arr = [];
		var _g = 0;
		while(_g < arg1) {
			var i = _g++;
			arr[i] = 0;
		}
		arr.byteLength = arr.length << 2;
		arr.byteOffset = 0;
		arr.buffer = new js_html_compat_ArrayBuffer((function($this) {
			var $r;
			var _g1 = [];
			{
				var _g2 = 0;
				var _g11 = arr.length << 2;
				while(_g2 < _g11) {
					var i1 = _g2++;
					_g1.push(0);
				}
			}
			$r = _g1;
			return $r;
		}(this)));
	} else if(js_Boot.__instanceof(arg1,js_html_compat_ArrayBuffer)) {
		var buffer = arg1;
		if(offset == null) offset = 0;
		if(length == null) length = buffer.byteLength - offset >> 2;
		arr = [];
		var _g3 = 0;
		while(_g3 < length) {
			var i2 = _g3++;
			var val = buffer.a[offset++] | buffer.a[offset++] << 8 | buffer.a[offset++] << 16 | buffer.a[offset++] << 24;
			arr.push(haxe_io_FPHelper.i32ToFloat(val));
		}
		arr.byteLength = arr.length << 2;
		arr.byteOffset = offset;
		arr.buffer = buffer;
	} else if((arg1 instanceof Array) && arg1.__enum__ == null) {
		arr = arg1.slice();
		var buffer1 = [];
		var _g4 = 0;
		while(_g4 < arr.length) {
			var f = arr[_g4];
			++_g4;
			var i3 = haxe_io_FPHelper.floatToI32(f);
			buffer1.push(i3 & 255);
			buffer1.push(i3 >> 8 & 255);
			buffer1.push(i3 >> 16 & 255);
			buffer1.push(i3 >>> 24);
		}
		arr.byteLength = arr.length << 2;
		arr.byteOffset = 0;
		arr.buffer = new js_html_compat_ArrayBuffer(buffer1);
	} else throw new js__$Boot_HaxeError("TODO " + Std.string(arg1));
	arr.subarray = js_html_compat_Float32Array._subarray;
	arr.set = js_html_compat_Float32Array._set;
	return arr;
};
js_html_compat_Float32Array._set = function(arg,offset) {
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
js_html_compat_Float32Array._subarray = function(start,end) {
	var t = this;
	var a = js_html_compat_Float32Array._new(t.slice(start,end));
	a.byteOffset = start * 4;
	return a;
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
var kha_Resource = function() { };
$hxClasses["kha.Resource"] = kha_Resource;
kha_Resource.__name__ = ["kha","Resource"];
kha_Resource.prototype = {
	__class__: kha_Resource
};
var kha_Blob = function(bytes) {
	this.myFirstLine = true;
	this.bytes = bytes;
	this.buffer = [];
	this.position = 0;
};
$hxClasses["kha.Blob"] = kha_Blob;
kha_Blob.__name__ = ["kha","Blob"];
kha_Blob.__interfaces__ = [kha_Resource];
kha_Blob.prototype = {
	length: function() {
		return this.bytes.length;
	}
	,reset: function() {
		this.position = 0;
	}
	,seek: function(pos) {
		this.position = pos;
	}
	,readU8: function() {
		var $byte = this.bytes.b[this.position];
		++this.position;
		return $byte;
	}
	,readS8: function() {
		var $byte = this.bytes.b[this.position];
		++this.position;
		var sign;
		if(($byte & 128) == 0) sign = 1; else sign = -1;
		$byte = $byte & 127;
		return sign * $byte;
	}
	,readU16BE: function() {
		var first = this.bytes.b[this.position];
		var second = this.bytes.b[this.position + 1];
		this.position += 2;
		return first * 256 + second;
	}
	,readU16LE: function() {
		var first = this.bytes.b[this.position];
		var second = this.bytes.b[this.position + 1];
		this.position += 2;
		return second * 256 + first;
	}
	,readS16BE: function() {
		var first = this.bytes.b[this.position];
		var second = this.bytes.b[this.position + 1];
		this.position += 2;
		var sign;
		if((first & 128) == 0) sign = 1; else sign = -1;
		first = first & 127;
		if(sign == -1) return -32767 + first * 256 + second; else return first * 256 + second;
	}
	,readS16LE: function() {
		var first = this.bytes.b[this.position];
		var second = this.bytes.b[this.position + 1];
		var sign;
		if((second & 128) == 0) sign = 1; else sign = -1;
		second = second & 127;
		this.position += 2;
		if(sign == -1) return -32767 + second * 256 + first; else return second * 256 + first;
	}
	,readS32LE: function() {
		var fourth = this.bytes.b[this.position];
		var third = this.bytes.b[this.position + 1];
		var second = this.bytes.b[this.position + 2];
		var first = this.bytes.b[this.position + 3];
		var sign;
		if((first & 128) == 0) sign = 1; else sign = -1;
		first = first & 127;
		this.position += 4;
		if(sign == -1) return -2147483647 + fourth + third * 256 + second * 256 * 256 + first * 256 * 256 * 256; else return fourth + third * 256 + second * 256 * 256 + first * 256 * 256 * 256;
	}
	,readS32BE: function() {
		var fourth = this.bytes.b[this.position];
		var third = this.bytes.b[this.position + 1];
		var second = this.bytes.b[this.position + 2];
		var first = this.bytes.b[this.position + 3];
		var sign;
		if((fourth & 128) == 0) sign = 1; else sign = -1;
		fourth = fourth & 127;
		this.position += 4;
		if(sign == -1) return -2147483647 + first + second * 256 + third * 256 * 256 + fourth * 256 * 256 * 256;
		return first + second * 256 + third * 256 * 256 + fourth * 256 * 256 * 256;
	}
	,readF32LE: function() {
		return this.readF32(this.readS32LE());
	}
	,readF32BE: function() {
		return this.readF32(this.readS32BE());
	}
	,readF32: function(i) {
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
	}
	,toString: function() {
		return this.bytes.toString();
	}
	,bit: function(value,position) {
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
	}
	,readUtf8Char: function() {
		if(this.position >= this.length()) return -1;
		var c = this.readU8();
		var value = 0;
		if(!this.bit(c,7)) value = c; else if(this.bit(c,7) && this.bit(c,6) && !this.bit(c,5)) {
			var a = c & 31;
			var c2 = this.readU8();
			var b = c2 & 63;
			value = a << 6 | b;
		} else if(this.bit(c,7) && this.bit(c,6) && this.bit(c,5) && !this.bit(c,4)) {
			var _g = 0;
			while(_g < 2) {
				var i = _g++;
				this.readU8();
			}
		} else if(this.bit(c,7) && this.bit(c,6) && this.bit(c,5) && this.bit(c,4) && !this.bit(c,3)) {
			var _g1 = 0;
			while(_g1 < 3) {
				var i1 = _g1++;
				this.readU8();
			}
		}
		return value;
	}
	,readUtf8Line: function() {
		var bufferindex = 0;
		var c = this.readUtf8Char();
		if(c < 0) return "";
		while(c != 10 && bufferindex < 2000) {
			this.buffer[bufferindex] = c;
			++bufferindex;
			c = this.readUtf8Char();
			if(this.position >= this.length()) {
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
		while(this.position < this.length()) text += this.readUtf8Line() + "\n";
		return text;
	}
	,toBytes: function() {
		return this.bytes;
	}
	,unload: function() {
		this.bytes = null;
	}
	,__class__: kha_Blob
};
var kha_Button = $hxClasses["kha.Button"] = { __ename__ : ["kha","Button"], __constructs__ : ["NONE","UP","RIGHT","DOWN","LEFT","BUTTON_1","BUTTON_2"] };
kha_Button.NONE = ["NONE",0];
kha_Button.NONE.toString = $estr;
kha_Button.NONE.__enum__ = kha_Button;
kha_Button.UP = ["UP",1];
kha_Button.UP.toString = $estr;
kha_Button.UP.__enum__ = kha_Button;
kha_Button.RIGHT = ["RIGHT",2];
kha_Button.RIGHT.toString = $estr;
kha_Button.RIGHT.__enum__ = kha_Button;
kha_Button.DOWN = ["DOWN",3];
kha_Button.DOWN.toString = $estr;
kha_Button.DOWN.__enum__ = kha_Button;
kha_Button.LEFT = ["LEFT",4];
kha_Button.LEFT.toString = $estr;
kha_Button.LEFT.__enum__ = kha_Button;
kha_Button.BUTTON_1 = ["BUTTON_1",5];
kha_Button.BUTTON_1.toString = $estr;
kha_Button.BUTTON_1.__enum__ = kha_Button;
kha_Button.BUTTON_2 = ["BUTTON_2",6];
kha_Button.BUTTON_2.toString = $estr;
kha_Button.BUTTON_2.__enum__ = kha_Button;
var kha_Canvas = function() { };
$hxClasses["kha.Canvas"] = kha_Canvas;
kha_Canvas.__name__ = ["kha","Canvas"];
kha_Canvas.prototype = {
	__class__: kha_Canvas
	,__properties__: {get_g4:"get_g4",get_g2:"get_g2",get_g1:"get_g1",get_height:"get_height",get_width:"get_width"}
};
var kha_Image = function() { };
$hxClasses["kha.Image"] = kha_Image;
kha_Image.__name__ = ["kha","Image"];
kha_Image.__interfaces__ = [kha_Resource,kha_Canvas];
kha_Image.__properties__ = {get_nonPow2Supported:"get_nonPow2Supported",get_maxSize:"get_maxSize"}
kha_Image.create = function(width,height,format,usage,levels) {
	if(levels == null) levels = 1;
	if(format == null) format = kha_graphics4_TextureFormat.RGBA32;
	if(usage == null) usage = kha_graphics4_Usage.StaticUsage;
	if(kha_Sys.gl == null) return new kha_CanvasImage(width,height,format,false); else return new kha_WebGLImage(width,height,format,false);
};
kha_Image.createRenderTarget = function(width,height,format,depthStencil,antiAliasingSamples) {
	if(antiAliasingSamples == null) antiAliasingSamples = 1;
	if(depthStencil == null) depthStencil = false;
	if(format == null) format = kha_graphics4_TextureFormat.RGBA32;
	if(kha_Sys.gl == null) return new kha_CanvasImage(width,height,format,true); else return new kha_WebGLImage(width,height,format,true);
};
kha_Image.fromImage = function(image,readable) {
	if(kha_Sys.gl == null) {
		var img = new kha_CanvasImage(image.width,image.height,kha_graphics4_TextureFormat.RGBA32,false);
		img.image = image;
		img.createTexture();
		return img;
	} else {
		var img1 = new kha_WebGLImage(image.width,image.height,kha_graphics4_TextureFormat.RGBA32,false);
		img1.image = image;
		img1.createTexture();
		return img1;
	}
};
kha_Image.fromVideo = function(video) {
	if(kha_Sys.gl == null) {
		var img = new kha_CanvasImage(video.element.videoWidth,video.element.videoHeight,kha_graphics4_TextureFormat.RGBA32,false);
		img.video = video.element;
		img.createTexture();
		return img;
	} else {
		var img1 = new kha_WebGLImage(video.element.videoWidth,video.element.videoHeight,kha_graphics4_TextureFormat.RGBA32,false);
		img1.video = video.element;
		img1.createTexture();
		return img1;
	}
};
kha_Image.get_maxSize = function() {
	if(kha_Sys.gl == null) return 8192; else return kha_Sys.gl.getParameter(kha_Sys.gl.MAX_TEXTURE_SIZE);
};
kha_Image.get_nonPow2Supported = function() {
	return kha_Sys.gl != null;
};
kha_Image.prototype = {
	isOpaque: function(x,y) {
		return false;
	}
	,unload: function() {
	}
	,lock: function(level) {
		if(level == null) level = 0;
		return null;
	}
	,unlock: function() {
	}
	,get_width: function() {
		return 0;
	}
	,get_height: function() {
		return 0;
	}
	,get_realWidth: function() {
		return 0;
	}
	,get_realHeight: function() {
		return 0;
	}
	,get_g1: function() {
		return null;
	}
	,get_g2: function() {
		return null;
	}
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
	get_g1: function() {
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
	,createImageData: function() {
		kha_CanvasImage.context.strokeStyle = "rgba(0,0,0,0)";
		kha_CanvasImage.context.fillStyle = "rgba(0,0,0,0)";
		kha_CanvasImage.context.fillRect(0,0,this.image.width,this.image.height);
		kha_CanvasImage.context.drawImage(this.image,0,0,this.image.width,this.image.height,0,0,this.image.width,this.image.height);
		this.data = kha_CanvasImage.context.getImageData(0,0,this.image.width,this.image.height);
	}
	,createTexture: function() {
		if(kha_Sys.gl == null) return;
		this.texture = kha_Sys.gl.createTexture();
		kha_Sys.gl.bindTexture(kha_Sys.gl.TEXTURE_2D,this.texture);
		kha_Sys.gl.texParameteri(kha_Sys.gl.TEXTURE_2D,kha_Sys.gl.TEXTURE_MAG_FILTER,kha_Sys.gl.LINEAR);
		kha_Sys.gl.texParameteri(kha_Sys.gl.TEXTURE_2D,kha_Sys.gl.TEXTURE_MIN_FILTER,kha_Sys.gl.LINEAR);
		kha_Sys.gl.texParameteri(kha_Sys.gl.TEXTURE_2D,kha_Sys.gl.TEXTURE_WRAP_S,kha_Sys.gl.CLAMP_TO_EDGE);
		kha_Sys.gl.texParameteri(kha_Sys.gl.TEXTURE_2D,kha_Sys.gl.TEXTURE_WRAP_T,kha_Sys.gl.CLAMP_TO_EDGE);
		if(this.renderTarget) {
			this.frameBuffer = kha_Sys.gl.createFramebuffer();
			kha_Sys.gl.bindFramebuffer(kha_Sys.gl.FRAMEBUFFER,this.frameBuffer);
			kha_Sys.gl.texImage2D(kha_Sys.gl.TEXTURE_2D,0,kha_Sys.gl.RGBA,this.get_realWidth(),this.get_realHeight(),0,kha_Sys.gl.RGBA,kha_Sys.gl.UNSIGNED_BYTE,null);
			kha_Sys.gl.framebufferTexture2D(kha_Sys.gl.FRAMEBUFFER,kha_Sys.gl.COLOR_ATTACHMENT0,kha_Sys.gl.TEXTURE_2D,this.texture,0);
			kha_Sys.gl.bindFramebuffer(kha_Sys.gl.FRAMEBUFFER,null);
		} else if(this.video != null) kha_Sys.gl.texImage2D(kha_Sys.gl.TEXTURE_2D,0,kha_Sys.gl.RGBA,kha_Sys.gl.RGBA,kha_Sys.gl.UNSIGNED_BYTE,this.video); else kha_Sys.gl.texImage2D(kha_Sys.gl.TEXTURE_2D,0,kha_Sys.gl.RGBA,kha_Sys.gl.RGBA,kha_Sys.gl.UNSIGNED_BYTE,this.image);
		kha_Sys.gl.bindTexture(kha_Sys.gl.TEXTURE_2D,null);
	}
	,set: function(stage) {
		kha_Sys.gl.activeTexture(kha_Sys.gl.TEXTURE0 + stage);
		kha_Sys.gl.bindTexture(kha_Sys.gl.TEXTURE_2D,this.texture);
		if(this.video != null) kha_Sys.gl.texImage2D(kha_Sys.gl.TEXTURE_2D,0,kha_Sys.gl.RGBA,kha_Sys.gl.RGBA,kha_Sys.gl.UNSIGNED_BYTE,this.video);
	}
	,lock: function(level) {
		if(level == null) level = 0;
		this.bytes = haxe_io_Bytes.alloc(this.format == kha_graphics4_TextureFormat.RGBA32?4 * this.get_width() * this.get_height():this.get_width() * this.get_height());
		return this.bytes;
	}
	,unlock: function() {
		if(kha_Sys.gl != null) {
			this.texture = kha_Sys.gl.createTexture();
			kha_Sys.gl.bindTexture(kha_Sys.gl.TEXTURE_2D,this.texture);
			kha_Sys.gl.texParameteri(kha_Sys.gl.TEXTURE_2D,kha_Sys.gl.TEXTURE_MAG_FILTER,kha_Sys.gl.LINEAR);
			kha_Sys.gl.texParameteri(kha_Sys.gl.TEXTURE_2D,kha_Sys.gl.TEXTURE_MIN_FILTER,kha_Sys.gl.LINEAR);
			kha_Sys.gl.texParameteri(kha_Sys.gl.TEXTURE_2D,kha_Sys.gl.TEXTURE_WRAP_S,kha_Sys.gl.CLAMP_TO_EDGE);
			kha_Sys.gl.texParameteri(kha_Sys.gl.TEXTURE_2D,kha_Sys.gl.TEXTURE_WRAP_T,kha_Sys.gl.CLAMP_TO_EDGE);
			kha_Sys.gl.texImage2D(kha_Sys.gl.TEXTURE_2D,0,kha_Sys.gl.LUMINANCE,this.get_width(),this.get_height(),0,kha_Sys.gl.LUMINANCE,kha_Sys.gl.UNSIGNED_BYTE,new Uint8Array(this.bytes.b.bufferValue));
			if(kha_Sys.gl.getError() == 1282) {
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
				kha_Sys.gl.texImage2D(kha_Sys.gl.TEXTURE_2D,0,kha_Sys.gl.RGBA,this.get_width(),this.get_height(),0,kha_Sys.gl.RGBA,kha_Sys.gl.UNSIGNED_BYTE,new Uint8Array(rgbaBytes.b.bufferValue));
			}
			kha_Sys.gl.bindTexture(kha_Sys.gl.TEXTURE_2D,null);
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
	return kha__$Color_Color_$Impl_$.get_Rb(this1) / 255;
};
kha__$Color_Color_$Impl_$.get_G = function(this1) {
	return kha__$Color_Color_$Impl_$.get_Gb(this1) / 255;
};
kha__$Color_Color_$Impl_$.get_B = function(this1) {
	return kha__$Color_Color_$Impl_$.get_Bb(this1) / 255;
};
kha__$Color_Color_$Impl_$.get_A = function(this1) {
	return kha__$Color_Color_$Impl_$.get_Ab(this1) / 255;
};
kha__$Color_Color_$Impl_$.set_R = function(this1,f) {
	this1 = Std["int"](kha__$Color_Color_$Impl_$.get_Ab(this1) / 255 * 255) << 24 | (f * 255 | 0) << 16 | Std["int"](kha__$Color_Color_$Impl_$.get_Gb(this1) / 255 * 255) << 8 | Std["int"](kha__$Color_Color_$Impl_$.get_Bb(this1) / 255 * 255);
	return f;
};
kha__$Color_Color_$Impl_$.set_G = function(this1,f) {
	this1 = Std["int"](kha__$Color_Color_$Impl_$.get_Ab(this1) / 255 * 255) << 24 | Std["int"](kha__$Color_Color_$Impl_$.get_Rb(this1) / 255 * 255) << 16 | (f * 255 | 0) << 8 | Std["int"](kha__$Color_Color_$Impl_$.get_Bb(this1) / 255 * 255);
	return f;
};
kha__$Color_Color_$Impl_$.set_B = function(this1,f) {
	this1 = Std["int"](kha__$Color_Color_$Impl_$.get_Ab(this1) / 255 * 255) << 24 | Std["int"](kha__$Color_Color_$Impl_$.get_Rb(this1) / 255 * 255) << 16 | Std["int"](kha__$Color_Color_$Impl_$.get_Gb(this1) / 255 * 255) << 8 | (f * 255 | 0);
	return f;
};
kha__$Color_Color_$Impl_$.set_A = function(this1,f) {
	this1 = (f * 255 | 0) << 24 | Std["int"](kha__$Color_Color_$Impl_$.get_Rb(this1) / 255 * 255) << 16 | Std["int"](kha__$Color_Color_$Impl_$.get_Gb(this1) / 255 * 255) << 8 | Std["int"](kha__$Color_Color_$Impl_$.get_Bb(this1) / 255 * 255);
	return f;
};
var kha_Configuration = function() { };
$hxClasses["kha.Configuration"] = kha_Configuration;
kha_Configuration.__name__ = ["kha","Configuration"];
kha_Configuration.screen = function() {
	return kha_Configuration.theScreen;
};
kha_Configuration.schedulerInitialized = function() {
	kha_Configuration.id = -1;
};
kha_Configuration.setScreen = function(screen) {
	kha_Configuration.theScreen = screen;
	kha_Configuration.theScreen.setInstance();
	if(kha_Configuration.id < 0) kha_Configuration.id = kha_Scheduler.addTimeTask(kha_Configuration.update,0,0.0166666666666666664);
};
kha_Configuration.update = function() {
	kha_Configuration.theScreen.update();
};
var kha_Cursor = function() { };
$hxClasses["kha.Cursor"] = kha_Cursor;
kha_Cursor.__name__ = ["kha","Cursor"];
kha_Cursor.prototype = {
	__class__: kha_Cursor
	,__properties__: {get_height:"get_height",get_width:"get_width",get_clickY:"get_clickY",get_clickX:"get_clickX"}
};
var kha_Game = function(name,hasHighscores) {
	if(hasHighscores == null) hasHighscores = false;
	this.deprecatedImage = null;
	this.setInstance();
	this.name = name;
	if(hasHighscores) this.highscores = new kha_HighscoreList();
	this.width = kha_Loader.the.width | 0;
	this.height = kha_Loader.the.height | 0;
};
$hxClasses["kha.Game"] = kha_Game;
kha_Game.__name__ = ["kha","Game"];
kha_Game.prototype = {
	setInstance: function() {
		kha_Game.the = this;
	}
	,loadFinished: function() {
		var w = kha_Loader.the.width;
		if(w > 0) this.width = w;
		var h = kha_Loader.the.height;
		if(h > 0) this.height = h;
		this.init();
	}
	,init: function() {
	}
	,update: function() {
	}
	,startRender: function(frame) {
		frame.get_g2().begin();
	}
	,endRender: function(frame) {
		frame.get_g2().end();
	}
	,render: function(frame) {
		this.startRender(frame);
		this.endRender(frame);
	}
	,getHighscores: function() {
		return this.highscores;
	}
	,initDeprecatedImage: function() {
		if(this.deprecatedImage != null) return;
		this.deprecatedImage = kha_Image.create(this.width,this.height,kha_graphics4_TextureFormat.L8);
	}
	,painterTransformMouseX: function(x,y) {
		this.initDeprecatedImage();
		return kha_Scaler.transformX(x,y,this.deprecatedImage,kha_ScreenCanvas.get_the(),kha_Sys.screenRotation);
	}
	,painterTransformMouseY: function(x,y) {
		this.initDeprecatedImage();
		return kha_Scaler.transformY(x,y,this.deprecatedImage,kha_ScreenCanvas.get_the(),kha_Sys.screenRotation);
	}
	,buttonDown: function(button) {
	}
	,buttonUp: function(button) {
	}
	,keyDown: function(key,$char) {
	}
	,keyUp: function(key,$char) {
	}
	,mouseDown: function(x,y) {
	}
	,mouseUp: function(x,y) {
	}
	,rightMouseDown: function(x,y) {
	}
	,rightMouseUp: function(x,y) {
	}
	,middleMouseDown: function(x,y) {
	}
	,middleMouseUp: function(x,y) {
	}
	,mouseMove: function(x,y) {
	}
	,mouseWheel: function(delta) {
	}
	,onForeground: function() {
	}
	,onResume: function() {
	}
	,onPause: function() {
	}
	,onBackground: function() {
	}
	,onShutdown: function() {
	}
	,__class__: kha_Game
};
var kha_EmptyScreen = function(color) {
	kha_Game.call(this,"Nothing",false);
	this.color = color;
};
$hxClasses["kha.EmptyScreen"] = kha_EmptyScreen;
kha_EmptyScreen.__name__ = ["kha","EmptyScreen"];
kha_EmptyScreen.__super__ = kha_Game;
kha_EmptyScreen.prototype = $extend(kha_Game.prototype,{
	render: function(frame) {
		this.startRender(frame);
		frame.get_g2().set_color(this.color);
		frame.get_g2().fillRect(0,0,10000,10000);
		this.endRender(frame);
	}
	,update: function() {
	}
	,__class__: kha_EmptyScreen
});
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
kha_Font.prototype = {
	__class__: kha_Font
	,__properties__: {get_size:"get_size",get_style:"get_style",get_name:"get_name"}
};
var kha_FontStyle = function(bold,italic,underlined) {
	this.bold = bold;
	this.italic = italic;
	this.underlined = underlined;
};
$hxClasses["kha.FontStyle"] = kha_FontStyle;
kha_FontStyle.__name__ = ["kha","FontStyle"];
kha_FontStyle.prototype = {
	getBold: function() {
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
var kha_Framebuffer = function(g1,g2,g4) {
	this.graphics1 = g1;
	this.graphics2 = g2;
	this.graphics4 = g4;
};
$hxClasses["kha.Framebuffer"] = kha_Framebuffer;
kha_Framebuffer.__name__ = ["kha","Framebuffer"];
kha_Framebuffer.__interfaces__ = [kha_Canvas];
kha_Framebuffer.prototype = {
	init: function(g1,g2,g4) {
		this.graphics1 = g1;
		this.graphics2 = g2;
		this.graphics4 = g4;
	}
	,get_g1: function() {
		return this.graphics1;
	}
	,get_g2: function() {
		return this.graphics2;
	}
	,get_g4: function() {
		return this.graphics4;
	}
	,get_width: function() {
		return kha_Sys.get_pixelWidth();
	}
	,get_height: function() {
		return kha_Sys.get_pixelHeight();
	}
	,__class__: kha_Framebuffer
	,__properties__: {get_height:"get_height",get_width:"get_width",get_g4:"get_g4",get_g2:"get_g2",get_g1:"get_g1"}
};
var kha_HighscoreList = function() {
	this.scores = [];
};
$hxClasses["kha.HighscoreList"] = kha_HighscoreList;
kha_HighscoreList.__name__ = ["kha","HighscoreList"];
kha_HighscoreList.prototype = {
	getScores: function() {
		return this.scores;
	}
	,addScore: function(name,score) {
		this.scores.push(new kha_Score(name,score));
		this.scores.sort(function(score1,score2) {
			return score2.getScore() - score1.getScore();
		});
	}
	,load: function(file) {
		if(file == null) return;
		var loaded = file.readObject();
		this.scores = [];
		if(loaded != null) {
			var _g1 = 0;
			var _g = loaded.length;
			while(_g1 < _g) {
				var i = _g1++;
				this.scores[i] = new kha_Score(loaded[i].name,loaded[i].score);
			}
		}
	}
	,save: function(file) {
		file.writeObject(this.scores);
	}
	,__class__: kha_HighscoreList
};
var kha_Key = $hxClasses["kha.Key"] = { __ename__ : ["kha","Key"], __constructs__ : ["BACKSPACE","TAB","ENTER","SHIFT","CTRL","ALT","CHAR","ESC","DEL","UP","DOWN","LEFT","RIGHT"] };
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
var kha_BakedChar = function() {
};
$hxClasses["kha.BakedChar"] = kha_BakedChar;
kha_BakedChar.__name__ = ["kha","BakedChar"];
kha_BakedChar.prototype = {
	__class__: kha_BakedChar
};
var kha_AlignedQuad = function() {
};
$hxClasses["kha.AlignedQuad"] = kha_AlignedQuad;
kha_AlignedQuad.__name__ = ["kha","AlignedQuad"];
kha_AlignedQuad.prototype = {
	__class__: kha_AlignedQuad
};
var kha_Kravur = function(blob) {
	var size = blob.readS32LE();
	var ascent = blob.readS32LE();
	var descent = blob.readS32LE();
	var lineGap = blob.readS32LE();
	this.baseline = ascent;
	this.chars = [];
	var _g1 = 0;
	var _g = 224;
	while(_g1 < _g) {
		var i = _g1++;
		var $char = new kha_BakedChar();
		$char.x0 = blob.readS16LE();
		$char.y0 = blob.readS16LE();
		$char.x1 = blob.readS16LE();
		$char.y1 = blob.readS16LE();
		$char.xoff = blob.readF32LE();
		$char.yoff = blob.readF32LE() + this.baseline;
		$char.xadvance = blob.readF32LE();
		this.chars.push($char);
	}
	this.width = blob.readS32LE();
	this.height = blob.readS32LE();
	var w = this.width;
	var h = this.height;
	while(w > kha_Image.get_maxSize() || h > kha_Image.get_maxSize()) {
		blob.seek(blob.position + h * w);
		w = w / 2 | 0;
		h = h / 2 | 0;
	}
	this.texture = kha_Image.create(w,h,kha_graphics4_TextureFormat.L8);
	var bytes = this.texture.lock();
	var pos = 0;
	var _g2 = 0;
	while(_g2 < h) {
		var y = _g2++;
		var _g11 = 0;
		while(_g11 < w) {
			var x = _g11++;
			bytes.set(pos,blob.readU8());
			++pos;
		}
	}
	this.texture.unlock();
	blob.reset();
};
$hxClasses["kha.Kravur"] = kha_Kravur;
kha_Kravur.__name__ = ["kha","Kravur"];
kha_Kravur.__interfaces__ = [kha_Font];
kha_Kravur.get = function(name,style,size) {
	var key = name;
	if(style.getBold()) key += "#Bold";
	if(style.getItalic()) key += "#Italic";
	key += size + ".kravur";
	var kravur = kha_Kravur.fontCache.get(key);
	if(kravur == null) {
		var blob = kha_Loader.the.getBlob(key);
		if(blob != null) {
			kravur = new kha_Kravur(blob);
			kravur.myName = name;
			kravur.myStyle = style;
			kravur.mySize = size;
			kha_Kravur.fontCache.set(key,kravur);
		}
	}
	return kravur;
};
kha_Kravur.prototype = {
	getTexture: function() {
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
	,get_name: function() {
		return this.myName;
	}
	,get_style: function() {
		return this.myStyle;
	}
	,get_size: function() {
		return this.mySize;
	}
	,getHeight: function() {
		return this.mySize;
	}
	,charWidth: function(ch) {
		return this.getCharWidth(HxOverrides.cca(ch,0));
	}
	,charsWidth: function(ch,offset,length) {
		return this.stringWidth(HxOverrides.substr(ch,offset,length));
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
		if(width > 10 && width < 100) {
			var a = 3;
			++a;
		}
		return width;
	}
	,getBaselinePosition: function() {
		return this.baseline;
	}
	,__class__: kha_Kravur
	,__properties__: {get_size:"get_size",get_style:"get_style",get_name:"get_name"}
};
var kha_Loader = $hx_exports.kha.Loader = function() {
	this.basePath = ".";
	this.autoCleanupAssets = true;
	this.isQuitable = false;
	this.blobs = new haxe_ds_StringMap();
	this.images = new haxe_ds_StringMap();
	this.sounds = new haxe_ds_StringMap();
	this.musics = new haxe_ds_StringMap();
	this.videos = new haxe_ds_StringMap();
	this.assets = new haxe_ds_StringMap();
	this.shaders = new haxe_ds_StringMap();
	this.rooms = new haxe_ds_StringMap();
	this.enqueued = [];
	this.loadcount = 100;
	this.numberOfFiles = 100;
	this.width = -1;
	this.height = -1;
};
$hxClasses["kha.Loader"] = kha_Loader;
kha_Loader.__name__ = ["kha","Loader"];
kha_Loader.init = function(loader) {
	kha_Loader.the = loader;
};
kha_Loader.containsAsset = function(assetName,assetType,map) {
	var _g = 0;
	while(_g < map.length) {
		var asset = map[_g];
		++_g;
		if(asset.type == assetType && asset.name == assetName) return true;
	}
	return false;
};
kha_Loader.prototype = {
	getLoadPercentage: function() {
		return (this.loadcount - this.numberOfFiles) / this.loadcount * 100 | 0;
	}
	,getBlob: function(name) {
		return this.blobs.get(name);
	}
	,getImage: function(name) {
		if(!this.images.exists(name) && name != "") haxe_Log.trace("Could not find image " + name + ".",{ fileName : "Loader.hx", lineNumber : 63, className : "kha.Loader", methodName : "getImage"});
		return this.images.get(name);
	}
	,getMusic: function(name) {
		return this.musics.get(name);
	}
	,getSound: function(name) {
		if(name != "" && !this.sounds.exists(name)) haxe_Log.trace("Sound '" + name + "' not found",{ fileName : "Loader.hx", lineNumber : 74, className : "kha.Loader", methodName : "getSound"});
		return this.sounds.get(name);
	}
	,getVideo: function(name) {
		return this.videos.get(name);
	}
	,getShader: function(name) {
		return this.shaders.get(name);
	}
	,getAvailableBlobs: function() {
		return this.blobs.keys();
	}
	,isBlobAvailable: function(name) {
		return this.blobs.exists(name);
	}
	,getAvailableImages: function() {
		return this.images.keys();
	}
	,isImageAvailable: function(name) {
		return this.images.exists(name);
	}
	,getAvailableMusic: function() {
		return this.musics.keys();
	}
	,isMusicAvailable: function(name) {
		return this.musics.exists(name);
	}
	,getAvailableSounds: function() {
		return this.sounds.keys();
	}
	,isSoundAvailable: function(name) {
		return this.sounds.exists(name);
	}
	,getAvailableVideos: function() {
		return this.videos.keys();
	}
	,isVideoAvailable: function(name) {
		return this.videos.exists(name);
	}
	,enqueue: function(asset) {
		if(!Lambda.has(this.enqueued,asset)) this.enqueued.push(asset);
	}
	,removeImage: function(resources,resourceName) {
		var resource;
		resource = __map_reserved[resourceName] != null?resources.getReserved(resourceName):resources.h[resourceName];
		resource.unload();
		resources.remove(resourceName);
	}
	,removeBlob: function(resources,resourceName) {
		var resource;
		resource = __map_reserved[resourceName] != null?resources.getReserved(resourceName):resources.h[resourceName];
		resource.unload();
		resources.remove(resourceName);
	}
	,removeMusic: function(resources,resourceName) {
		var resource;
		resource = __map_reserved[resourceName] != null?resources.getReserved(resourceName):resources.h[resourceName];
		resource.unload();
		resources.remove(resourceName);
	}
	,removeSound: function(resources,resourceName) {
		var resource;
		resource = __map_reserved[resourceName] != null?resources.getReserved(resourceName):resources.h[resourceName];
		resource.unload();
		resources.remove(resourceName);
	}
	,removeVideo: function(resources,resourceName) {
		var resource;
		resource = __map_reserved[resourceName] != null?resources.getReserved(resourceName):resources.h[resourceName];
		resource.unload();
		resources.remove(resourceName);
	}
	,cleanup: function() {
		var $it0 = this.images.keys();
		while( $it0.hasNext() ) {
			var imagename = $it0.next();
			if(!kha_Loader.containsAsset(imagename,"image",this.enqueued)) this.removeImage(this.images,imagename);
		}
		var $it1 = this.musics.keys();
		while( $it1.hasNext() ) {
			var musicname = $it1.next();
			if(!kha_Loader.containsAsset(musicname,"music",this.enqueued)) this.removeMusic(this.musics,musicname);
		}
		var $it2 = this.sounds.keys();
		while( $it2.hasNext() ) {
			var soundname = $it2.next();
			if(!kha_Loader.containsAsset(soundname,"sound",this.enqueued)) this.removeSound(this.sounds,soundname);
		}
		var $it3 = this.videos.keys();
		while( $it3.hasNext() ) {
			var videoname = $it3.next();
			if(!kha_Loader.containsAsset(videoname,"video",this.enqueued)) this.removeVideo(this.videos,videoname);
		}
		var $it4 = this.blobs.keys();
		while( $it4.hasNext() ) {
			var blobname = $it4.next();
			if(!kha_Loader.containsAsset(blobname,"blob",this.enqueued)) this.removeBlob(this.blobs,blobname);
		}
		if(!this.autoCleanupAssets) this.enqueued = [];
	}
	,loadFiles: function(call,autoCleanup) {
		var _g3 = this;
		this.loadFinished = call;
		this.loadStarted(this.enqueued.length);
		if(autoCleanup) this.cleanup();
		if(this.enqueued.length > 0) {
			var _g1 = 0;
			var _g = this.enqueued.length;
			while(_g1 < _g) {
				var i = _g1++;
				var _g2 = this.enqueued[i].type;
				switch(_g2) {
				case "image":
					if(!(function($this) {
						var $r;
						var key = $this.enqueued[i].name;
						$r = $this.images.exists(key);
						return $r;
					}(this))) {
						var imageName = [this.enqueued[i].name];
						this.loadImage(this.enqueued[i],(function(imageName) {
							return function(image) {
								if(!_g3.images.exists(imageName[0])) {
									_g3.images.set(imageName[0],image);
									--_g3.numberOfFiles;
									_g3.checkComplete();
								}
							};
						})(imageName));
					} else this.loadDummyFile();
					break;
				case "music":
					if(!(function($this) {
						var $r;
						var key1 = $this.enqueued[i].name;
						$r = $this.musics.exists(key1);
						return $r;
					}(this))) {
						var musicName = [this.enqueued[i].name];
						this.loadMusic(this.enqueued[i],(function(musicName) {
							return function(music) {
								if(!_g3.musics.exists(musicName[0])) {
									_g3.musics.set(musicName[0],music);
									--_g3.numberOfFiles;
									_g3.checkComplete();
								}
							};
						})(musicName));
					} else this.loadDummyFile();
					break;
				case "sound":
					if(!(function($this) {
						var $r;
						var key2 = $this.enqueued[i].name;
						$r = $this.sounds.exists(key2);
						return $r;
					}(this))) {
						var soundName = [this.enqueued[i].name];
						this.loadSound(this.enqueued[i],(function(soundName) {
							return function(sound) {
								if(!_g3.sounds.exists(soundName[0])) {
									_g3.sounds.set(soundName[0],sound);
									--_g3.numberOfFiles;
									_g3.checkComplete();
								}
							};
						})(soundName));
					} else this.loadDummyFile();
					break;
				case "video":
					if(!(function($this) {
						var $r;
						var key3 = $this.enqueued[i].name;
						$r = $this.videos.exists(key3);
						return $r;
					}(this))) {
						var videoName = [this.enqueued[i].name];
						this.loadVideo(this.enqueued[i],(function(videoName) {
							return function(video) {
								if(!_g3.videos.exists(videoName[0])) {
									_g3.videos.set(videoName[0],video);
									--_g3.numberOfFiles;
									_g3.checkComplete();
								}
							};
						})(videoName));
					} else this.loadDummyFile();
					break;
				case "blob":
					if(!(function($this) {
						var $r;
						var key4 = $this.enqueued[i].name;
						$r = $this.blobs.exists(key4);
						return $r;
					}(this))) {
						var blobName = [this.enqueued[i].name];
						this.loadBlob(this.enqueued[i],(function(blobName) {
							return function(blob) {
								if(!_g3.blobs.exists(blobName[0])) {
									_g3.blobs.set(blobName[0],blob);
									--_g3.numberOfFiles;
									_g3.checkComplete();
								}
							};
						})(blobName));
					} else this.loadDummyFile();
					break;
				}
			}
		} else this.checkComplete();
	}
	,loadProject: function(call) {
		var _g = this;
		this.enqueue({ name : "project.kha", file : this.basePath == "."?"project.kha":this.basePath + "/project.kha", type : "blob"});
		this.loadFiles(function() {
			_g.loadShaders(call);
		},false);
	}
	,loadShaders: function(call) {
		var _g2 = this;
		var $it0 = this.shaders.iterator();
		while( $it0.hasNext() ) {
			var shader = $it0.next();
			shader.unload();
		}
		this.shaders = new haxe_ds_StringMap();
		var project = this.parseProject();
		if(project.shaders != null && project.shaders.length > 0) {
			var shaders = project.shaders;
			var shaderCount = shaders.length;
			var _g1 = 0;
			var _g = shaders.length;
			while(_g1 < _g) {
				var i = _g1++;
				var shader1 = [shaders[i]];
				this.loadBlob(shader1[0],(function(shader1) {
					return function(blob) {
						if(!_g2.shaders.exists(shader1[0].name)) {
							_g2.shaders.set(shader1[0].name,blob);
							--shaderCount;
							if(shaderCount == 0) call();
						}
					};
				})(shader1));
			}
		} else call();
	}
	,loadRoomAssets: function(room) {
		var _g1 = 0;
		var _g = room.assets.length;
		while(_g1 < _g) {
			var i = _g1++;
			this.enqueue(room.assets[i]);
		}
		if(room.parent != null) this.loadRoomAssets(room.parent);
	}
	,loadRoom: function(name,call) {
		this.loadRoomAssets(this.rooms.get(name));
		this.loadFiles(call,this.autoCleanupAssets);
	}
	,unloadedImage: function(name) {
		this.removeImage(this.images,name);
	}
	,initProject: function() {
		var project = this.parseProject();
		this.name = project.game.name;
		this.width = project.game.width;
		this.height = project.game.height;
		if(Object.prototype.hasOwnProperty.call(project.game,"antiAliasingSamples")) this.antiAliasingSamples = project.game.antiAliasingSamples; else this.antiAliasingSamples = 1;
		var assets = project.assets;
		var _g1 = 0;
		var _g = assets.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.basePath != ".") assets[i].file = this.basePath + "/" + assets[i].file;
			if(this.assets.exists(assets[i].name)) this.assets.get(assets[i].name).push(assets[i]); else this.assets.set(assets[i].name,[assets[i]]);
		}
		var rooms = project.rooms;
		var _g11 = 0;
		var _g2 = rooms.length;
		while(_g11 < _g2) {
			var i1 = _g11++;
			var room = new kha_loader_Room(rooms[i1].name);
			var roomAssets = rooms[i1].assets;
			var _g3 = 0;
			var _g21 = roomAssets.length;
			while(_g3 < _g21) {
				var i2 = _g3++;
				var assets1 = this.assets.get(roomAssets[i2]);
				var _g4 = 0;
				while(_g4 < assets1.length) {
					var asset = assets1[_g4];
					++_g4;
					room.assets.push(asset);
				}
			}
			if(rooms[i1].parent != null) room.parent = new kha_loader_Room(rooms[i1].parent);
			this.rooms.set(rooms[i1].name,room);
		}
		var $it0 = this.rooms.iterator();
		while( $it0.hasNext() ) {
			var room1 = $it0.next();
			if(room1.parent != null) {
				var $it1 = this.rooms.iterator();
				while( $it1.hasNext() ) {
					var room2 = $it1.next();
					if(room2.name == room1.parent.name) {
						room1.parent = room2;
						break;
					}
				}
			}
		}
	}
	,parseProject: function() {
		return JSON.parse(this.getBlob("project.kha").toString());
	}
	,checkComplete: function() {
		if(this.numberOfFiles <= 0) {
			if(this.autoCleanupAssets) this.enqueued = [];
			if(this.loadFinished != null) this.loadFinished();
		}
	}
	,loadDummyFile: function() {
		--this.numberOfFiles;
		this.checkComplete();
	}
	,loadStarted: function(numberOfFiles) {
		if(numberOfFiles > 0) {
			this.loadcount = numberOfFiles;
			this.numberOfFiles = numberOfFiles;
		} else {
			this.loadcount = 1;
			this.numberOfFiles = 0;
		}
	}
	,loadImage: function(desc,done) {
	}
	,loadBlob: function(desc,done) {
	}
	,loadSound: function(desc,done) {
	}
	,loadMusic: function(desc,done) {
	}
	,loadVideo: function(desc,done) {
	}
	,loadFont: function(name,style,size) {
		return null;
	}
	,loadURL: function(url) {
	}
	,setNormalCursor: function() {
	}
	,setHandCursor: function() {
	}
	,setCursorBusy: function(busy) {
	}
	,showKeyboard: function() {
	}
	,hideKeyboard: function() {
	}
	,quit: function() {
	}
	,__class__: kha_Loader
};
var kha_LoadingScreen = function() {
	kha_Game.call(this,"Loading",false);
};
$hxClasses["kha.LoadingScreen"] = kha_LoadingScreen;
kha_LoadingScreen.__name__ = ["kha","LoadingScreen"];
kha_LoadingScreen.__super__ = kha_Game;
kha_LoadingScreen.prototype = $extend(kha_Game.prototype,{
	render: function(frame) {
		this.startRender(frame);
		if(kha_Loader.the != null) {
			frame.get_g2().set_color(kha__$Color_Color_$Impl_$.fromBytes(0,0,255));
			frame.get_g2().fillRect(frame.get_width() / 4,frame.get_height() / 2 - 10,kha_Loader.the.getLoadPercentage() * frame.get_width() / 2 / 100,20);
			frame.get_g2().set_color(kha__$Color_Color_$Impl_$.fromBytes(28,28,28));
			frame.get_g2().drawRect(frame.get_width() / 4,frame.get_height() / 2 - 10,frame.get_width() / 2,20);
		}
		this.endRender(frame);
	}
	,update: function() {
	}
	,__class__: kha_LoadingScreen
});
var kha_Mouse = function() {
	this.forceSystem = false;
	this.hidden = false;
	this.cursors = [];
	this.cursorIndex = -1;
};
$hxClasses["kha.Mouse"] = kha_Mouse;
kha_Mouse.__name__ = ["kha","Mouse"];
kha_Mouse.prototype = {
	show: function() {
		this.hidden = false;
		if(this.cursorIndex < 0 || this.forceSystem) this.showSystemCursor();
	}
	,hide: function() {
		this.hidden = true;
		this.hideSystemCursor();
	}
	,hideSystemCursor: function() {
	}
	,showSystemCursor: function() {
	}
	,forceSystemCursor: function(force) {
		this.forceSystem = force;
		if(this.forceSystem) {
			if(!this.hidden) this.showSystemCursor();
		} else if(this.cursorIndex >= 0) this.hideSystemCursor();
	}
	,pushCursor: function(cursorImage) {
		++this.cursorIndex;
		this.cursors[this.cursorIndex] = cursorImage;
		if(!this.forceSystem) this.hideSystemCursor();
	}
	,popCursor: function() {
		--this.cursorIndex;
		if(this.cursorIndex <= -1) {
			this.cursorIndex = -1;
			if(!this.hidden) this.showSystemCursor();
		}
	}
	,render: function(g) {
		if(this.cursorIndex >= 0 && !this.hidden) this.cursors[this.cursorIndex].render(g,kha_Starter.mouseX,kha_Starter.mouseY);
	}
	,update: function() {
		if(this.cursorIndex >= 0) this.cursors[this.cursorIndex].update(kha_Starter.mouseX,kha_Starter.mouseY);
	}
	,__class__: kha_Mouse
};
var kha_Music = function() {
};
$hxClasses["kha.Music"] = kha_Music;
kha_Music.__name__ = ["kha","Music"];
kha_Music.__interfaces__ = [kha_Resource];
kha_Music.prototype = {
	unload: function() {
	}
	,__class__: kha_Music
};
var kha_Rectangle = function(x,y,width,height) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
};
$hxClasses["kha.Rectangle"] = kha_Rectangle;
kha_Rectangle.__name__ = ["kha","Rectangle"];
kha_Rectangle.prototype = {
	setPos: function(x,y) {
		this.x = x;
		this.y = y;
	}
	,moveX: function(xdelta) {
		this.x += xdelta;
	}
	,moveY: function(ydelta) {
		this.y += ydelta;
	}
	,collision: function(r) {
		var a;
		var b;
		if(this.x < r.x) a = r.x < this.x + this.width; else a = this.x < r.x + r.width;
		if(this.y < r.y) b = r.y < this.y + this.height; else b = this.y < r.y + r.height;
		return a && b;
	}
	,__class__: kha_Rectangle
};
var kha_Rotation = function(center,angle) {
	this.center = center;
	this.angle = angle;
};
$hxClasses["kha.Rotation"] = kha_Rotation;
kha_Rotation.__name__ = ["kha","Rotation"];
kha_Rotation.prototype = {
	__class__: kha_Rotation
};
var kha_TargetRectangle = function(x,y,w,h,s,r) {
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;
	this.scaleFactor = s;
	this.rotation = r;
};
$hxClasses["kha.TargetRectangle"] = kha_TargetRectangle;
kha_TargetRectangle.__name__ = ["kha","TargetRectangle"];
kha_TargetRectangle.prototype = {
	__class__: kha_TargetRectangle
};
var kha_Scaler = function() { };
$hxClasses["kha.Scaler"] = kha_Scaler;
kha_Scaler.__name__ = ["kha","Scaler"];
kha_Scaler.targetRect = function(width,height,destination,rotation) {
	var scalex;
	var scaley;
	var scalew;
	var scaleh;
	var scale;
	switch(rotation[1]) {
	case 0:
		if(width / height > destination.get_width() / destination.get_height()) {
			scale = destination.get_width() / width;
			scalew = width * scale;
			scaleh = height * scale;
			scalex = 0;
			scaley = (destination.get_height() - scaleh) * 0.5;
		} else {
			scale = destination.get_height() / height;
			scalew = width * scale;
			scaleh = height * scale;
			scalex = (destination.get_width() - scalew) * 0.5;
			scaley = 0;
		}
		break;
	case 1:
		if(width / height > destination.get_height() / destination.get_width()) {
			scale = destination.get_height() / width;
			scalew = width * scale;
			scaleh = height * scale;
			scalex = (destination.get_width() - scaleh) * 0.5 + scaleh;
			scaley = 0;
		} else {
			scale = destination.get_width() / height;
			scalew = width * scale;
			scaleh = height * scale;
			scalex = scaleh;
			scaley = (destination.get_height() - scalew) * 0.5;
		}
		break;
	case 2:
		if(width / height > destination.get_width() / destination.get_height()) {
			scale = destination.get_width() / width;
			scalew = width * scale;
			scaleh = height * scale;
			scalex = scalew;
			scaley = (destination.get_height() - scaleh) * 0.5 + scaleh;
		} else {
			scale = destination.get_height() / height;
			scalew = width * scale;
			scaleh = height * scale;
			scalex = (destination.get_width() - scalew) * 0.5 + scalew;
			scaley = scaleh;
		}
		break;
	case 3:
		if(width / height > destination.get_height() / destination.get_width()) {
			scale = destination.get_height() / width;
			scalew = width * scale;
			scaleh = height * scale;
			scalex = (destination.get_width() - scaleh) * 0.5;
			scaley = scalew;
		} else {
			scale = destination.get_width() / height;
			scalew = width * scale;
			scaleh = height * scale;
			scalex = 0;
			scaley = (destination.get_height() - scalew) * 0.5 + scalew;
		}
		break;
	}
	return new kha_TargetRectangle(scalex,scaley,scalew,scaleh,scale,rotation);
};
kha_Scaler.transformX = function(x,y,source,destination,rotation) {
	var targetRect = kha_Scaler.targetRect(source.get_width(),source.get_height(),destination,rotation);
	var _g = targetRect.rotation;
	switch(_g[1]) {
	case 0:
		return (x - targetRect.x) / targetRect.scaleFactor | 0;
	case 1:
		return (y - targetRect.y) / targetRect.scaleFactor | 0;
	case 2:
		return (targetRect.x - x) / targetRect.scaleFactor | 0;
	case 3:
		return (targetRect.y - y) / targetRect.scaleFactor | 0;
	}
};
kha_Scaler.transformY = function(x,y,source,destination,rotation) {
	var targetRect = kha_Scaler.targetRect(source.get_width(),source.get_height(),destination,rotation);
	var _g = targetRect.rotation;
	switch(_g[1]) {
	case 0:
		return (y - targetRect.y) / targetRect.scaleFactor | 0;
	case 1:
		return (targetRect.x - x) / targetRect.scaleFactor | 0;
	case 2:
		return (targetRect.y - y) / targetRect.scaleFactor | 0;
	case 3:
		return (x - targetRect.x) / targetRect.scaleFactor | 0;
	}
};
kha_Scaler.scale = function(source,destination,rotation) {
	var g = destination.get_g2();
	g.set_transformation(kha_Scaler.getScaledTransformation(source.get_width(),source.get_height(),destination,rotation));
	g.set_color(kha__$Color_Color_$Impl_$.White);
	g.set_opacity(1);
	g.drawImage(source,0,0);
};
kha_Scaler.getScaledTransformation = function(width,height,destination,rotation) {
	var rect = kha_Scaler.targetRect(width,height,destination,rotation);
	var sf = rect.scaleFactor;
	var transformation = new kha_math_Matrix3(sf,0,rect.x,0,sf,rect.y,0,0,1);
	switch(rotation[1]) {
	case 0:
		break;
	case 1:
		var m;
		var alpha = Math.PI / 2;
		m = new kha_math_Matrix3(Math.cos(alpha),-Math.sin(alpha),0,Math.sin(alpha),Math.cos(alpha),0,0,0,1);
		transformation = new kha_math_Matrix3(transformation._00 * m._00 + transformation._10 * m._01 + transformation._20 * m._02,transformation._00 * m._10 + transformation._10 * m._11 + transformation._20 * m._12,transformation._00 * m._20 + transformation._10 * m._21 + transformation._20 * m._22,transformation._01 * m._00 + transformation._11 * m._01 + transformation._21 * m._02,transformation._01 * m._10 + transformation._11 * m._11 + transformation._21 * m._12,transformation._01 * m._20 + transformation._11 * m._21 + transformation._21 * m._22,transformation._02 * m._00 + transformation._12 * m._01 + transformation._22 * m._02,transformation._02 * m._10 + transformation._12 * m._11 + transformation._22 * m._12,transformation._02 * m._20 + transformation._12 * m._21 + transformation._22 * m._22);
		break;
	case 2:
		var m1;
		var alpha1 = Math.PI;
		m1 = new kha_math_Matrix3(Math.cos(alpha1),-Math.sin(alpha1),0,Math.sin(alpha1),Math.cos(alpha1),0,0,0,1);
		transformation = new kha_math_Matrix3(transformation._00 * m1._00 + transformation._10 * m1._01 + transformation._20 * m1._02,transformation._00 * m1._10 + transformation._10 * m1._11 + transformation._20 * m1._12,transformation._00 * m1._20 + transformation._10 * m1._21 + transformation._20 * m1._22,transformation._01 * m1._00 + transformation._11 * m1._01 + transformation._21 * m1._02,transformation._01 * m1._10 + transformation._11 * m1._11 + transformation._21 * m1._12,transformation._01 * m1._20 + transformation._11 * m1._21 + transformation._21 * m1._22,transformation._02 * m1._00 + transformation._12 * m1._01 + transformation._22 * m1._02,transformation._02 * m1._10 + transformation._12 * m1._11 + transformation._22 * m1._12,transformation._02 * m1._20 + transformation._12 * m1._21 + transformation._22 * m1._22);
		break;
	case 3:
		var m2;
		var alpha2 = Math.PI * 3 / 2;
		m2 = new kha_math_Matrix3(Math.cos(alpha2),-Math.sin(alpha2),0,Math.sin(alpha2),Math.cos(alpha2),0,0,0,1);
		transformation = new kha_math_Matrix3(transformation._00 * m2._00 + transformation._10 * m2._01 + transformation._20 * m2._02,transformation._00 * m2._10 + transformation._10 * m2._11 + transformation._20 * m2._12,transformation._00 * m2._20 + transformation._10 * m2._21 + transformation._20 * m2._22,transformation._01 * m2._00 + transformation._11 * m2._01 + transformation._21 * m2._02,transformation._01 * m2._10 + transformation._11 * m2._11 + transformation._21 * m2._12,transformation._01 * m2._20 + transformation._11 * m2._21 + transformation._21 * m2._22,transformation._02 * m2._00 + transformation._12 * m2._01 + transformation._22 * m2._02,transformation._02 * m2._10 + transformation._12 * m2._11 + transformation._22 * m2._12,transformation._02 * m2._20 + transformation._12 * m2._21 + transformation._22 * m2._22);
		break;
	}
	return transformation;
};
var kha_TimeTask = function() {
};
$hxClasses["kha.TimeTask"] = kha_TimeTask;
kha_TimeTask.__name__ = ["kha","TimeTask"];
kha_TimeTask.prototype = {
	__class__: kha_TimeTask
};
var kha_FrameTask = function(task,priority,id) {
	this.task = task;
	this.priority = priority;
	this.id = id;
	this.active = true;
};
$hxClasses["kha.FrameTask"] = kha_FrameTask;
kha_FrameTask.__name__ = ["kha","FrameTask"];
kha_FrameTask.prototype = {
	__class__: kha_FrameTask
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
	kha_Scheduler.halted_count = 0;
	kha_Scheduler.frame_tasks_sorted = true;
	kha_Scheduler.current = kha_Scheduler.realTime();
	kha_Scheduler.lastTime = kha_Scheduler.realTime();
	kha_Scheduler.currentFrameTaskId = 0;
	kha_Scheduler.currentTimeTaskId = 0;
	kha_Scheduler.currentGroupId = 0;
	kha_Scheduler.timeTasks = [];
	kha_Scheduler.frameTasks = [];
	kha_Configuration.schedulerInitialized();
};
kha_Scheduler.start = function() {
	kha_Scheduler.vsync = kha_Sys.vsynced();
	var hz = kha_Sys.refreshRate();
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
	kha_Sys.get_mouse().update();
	var now = kha_Scheduler.realTime();
	var delta = now - kha_Scheduler.lastNow;
	kha_Scheduler.lastNow = now;
	var frameEnd = kha_Scheduler.current;
	if(delta < 0 || kha_Scheduler.stopped) return;
	if(kha_Scheduler.halted_count > 0) delta = 0; else if(delta > kha_Scheduler.maxframetime) {
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
	while(kha_Scheduler.timeTasks.length > 0 && kha_Scheduler.timeTasks[0].next <= frameEnd) {
		var t = kha_Scheduler.timeTasks[0];
		kha_Scheduler.current = t.next;
		t.next += t.period;
		HxOverrides.remove(kha_Scheduler.timeTasks,t);
		if(t.active && t.task()) {
			if(t.period > 0 && (t.duration == 0 || t.duration >= t.start + t.next)) kha_Scheduler.insertSorted(kha_Scheduler.timeTasks,t);
		} else t.active = false;
	}
	kha_Scheduler.current = frameEnd;
	while(true) {
		var _g4 = 0;
		var _g13 = kha_Scheduler.timeTasks;
		while(_g4 < _g13.length) {
			var timeTask = _g13[_g4];
			++_g4;
			if(!timeTask.active) {
				HxOverrides.remove(kha_Scheduler.timeTasks,timeTask);
				break;
			}
		}
		break;
	}
	kha_Scheduler.sortFrameTasks();
	var _g5 = 0;
	var _g14 = kha_Scheduler.frameTasks;
	while(_g5 < _g14.length) {
		var frameTask = _g14[_g5];
		++_g5;
		if(!frameTask.task()) frameTask.active = false;
	}
	while(true) {
		var _g6 = 0;
		var _g15 = kha_Scheduler.frameTasks;
		while(_g6 < _g15.length) {
			var frameTask1 = _g15[_g6];
			++_g6;
			if(!frameTask1.active) {
				HxOverrides.remove(kha_Scheduler.frameTasks,frameTask1);
				break;
			}
		}
		break;
	}
};
kha_Scheduler.time = function() {
	return kha_Scheduler.current;
};
kha_Scheduler.realTime = function() {
	return kha_Sys.getTime() - kha_Scheduler.startTime;
};
kha_Scheduler.resetTime = function() {
	var now = kha_Sys.getTime();
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
	var _g = 0;
	var _g1 = kha_Scheduler.timeTasks;
	while(_g < _g1.length) {
		var timeTask = _g1[_g];
		++_g;
		if(timeTask.id == id) return timeTask;
	}
	return null;
};
kha_Scheduler.removeTimeTask = function(id) {
	var timeTask = kha_Scheduler.getTimeTask(id);
	if(timeTask != null) {
		timeTask.active = false;
		HxOverrides.remove(kha_Scheduler.timeTasks,timeTask);
	}
};
kha_Scheduler.removeTimeTasks = function(groupId) {
	while(true) {
		var _g = 0;
		var _g1 = kha_Scheduler.timeTasks;
		while(_g < _g1.length) {
			var timeTask = _g1[_g];
			++_g;
			if(timeTask.groupId == groupId) {
				timeTask.active = false;
				HxOverrides.remove(kha_Scheduler.timeTasks,timeTask);
				break;
			}
		}
		break;
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
var kha_Score = function(name,score) {
	this.name = name;
	this.score = score;
};
$hxClasses["kha.Score"] = kha_Score;
kha_Score.__name__ = ["kha","Score"];
kha_Score.prototype = {
	getName: function() {
		return this.name;
	}
	,getScore: function() {
		return this.score;
	}
	,increase: function(amount) {
		this.score += amount;
	}
	,__class__: kha_Score
};
var kha_ScreenCanvas = function() {
};
$hxClasses["kha.ScreenCanvas"] = kha_ScreenCanvas;
kha_ScreenCanvas.__name__ = ["kha","ScreenCanvas"];
kha_ScreenCanvas.__interfaces__ = [kha_Canvas];
kha_ScreenCanvas.__properties__ = {get_the:"get_the"}
kha_ScreenCanvas.get_the = function() {
	if(kha_ScreenCanvas.instance == null) kha_ScreenCanvas.instance = new kha_ScreenCanvas();
	return kha_ScreenCanvas.instance;
};
kha_ScreenCanvas.prototype = {
	get_width: function() {
		return kha_Sys.get_pixelWidth();
	}
	,get_height: function() {
		return kha_Sys.get_pixelHeight();
	}
	,get_g1: function() {
		return null;
	}
	,get_g2: function() {
		return null;
	}
	,get_g4: function() {
		return null;
	}
	,__class__: kha_ScreenCanvas
	,__properties__: {get_g4:"get_g4",get_g2:"get_g2",get_g1:"get_g1",get_height:"get_height",get_width:"get_width"}
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
var kha_Sound = function() {
};
$hxClasses["kha.Sound"] = kha_Sound;
kha_Sound.__name__ = ["kha","Sound"];
kha_Sound.__interfaces__ = [kha_Resource];
kha_Sound.prototype = {
	unload: function() {
	}
	,__class__: kha_Sound
};
var kha_SoundChannel = function() {
};
$hxClasses["kha.SoundChannel"] = kha_SoundChannel;
kha_SoundChannel.__name__ = ["kha","SoundChannel"];
kha_SoundChannel.prototype = {
	play: function() {
		this.wasStopped = false;
	}
	,pause: function() {
	}
	,stop: function() {
		this.wasStopped = true;
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
	,setPan: function(pan) {
	}
	,getPan: function() {
		return 0;
	}
	,isFinished: function() {
		return this.getCurrentPos() >= this.getLength() || this.wasStopped;
	}
	,__class__: kha_SoundChannel
};
var kha_GamepadStates = function() {
	this.axes = [];
	this.buttons = [];
};
$hxClasses["kha.GamepadStates"] = kha_GamepadStates;
kha_GamepadStates.__name__ = ["kha","GamepadStates"];
kha_GamepadStates.prototype = {
	__class__: kha_GamepadStates
};
var kha_Starter = function(backbufferFormat) {
	haxe_Log.trace = js_Boot.__trace;
	kha_Starter.keyboard = new kha_input_Keyboard();
	kha_Starter.mouse = new kha_input_Mouse();
	kha_Starter.gamepad = new kha_input_Gamepad();
	kha_Starter.gamepadStates = [];
	kha_Starter.gamepadStates.push(new kha_GamepadStates());
	kha_Starter.pressedKeys = [];
	var _g = 0;
	while(_g < 256) {
		var i = _g++;
		kha_Starter.pressedKeys.push(false);
	}
	var _g1 = 0;
	while(_g1 < 256) {
		var i1 = _g1++;
		kha_Starter.pressedKeys.push(null);
	}
	kha_Starter.buttonspressed = [];
	var _g2 = 0;
	while(_g2 < 10) {
		var i2 = _g2++;
		kha_Starter.buttonspressed.push(false);
	}
	kha_CanvasImage.init();
	kha_Loader.init(new kha_js_Loader());
	kha_Sys.initPerformanceTimer();
	kha_Scheduler.init();
	kha_EnvironmentVariables.instance = new kha_js_EnvironmentVariables();
};
$hxClasses["kha.Starter"] = kha_Starter;
kha_Starter.__name__ = ["kha","Starter"];
kha_Starter.checkGamepadButton = function(pad,num,button) {
	if(kha_Starter.buttonspressed[num]) {
		if(pad.buttons[num] < 0.5) {
			kha_Game.the.buttonUp(button);
			kha_Starter.buttonspressed[num] = false;
		}
	} else if(pad.buttons[num] > 0.5) {
		kha_Game.the.buttonDown(button);
		kha_Starter.buttonspressed[num] = true;
	}
};
kha_Starter.checkGamepad = function(pad) {
	var _g1 = 0;
	var _g = pad.axes.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(pad.axes[i] != null) {
			if(kha_Starter.gamepadStates[0].axes[i] != pad.axes[i]) {
				kha_Starter.gamepadStates[0].axes[i] = pad.axes[i];
				kha_Starter.gamepad.sendAxisEvent(i,pad.axes[i]);
			}
		}
	}
	var _g11 = 0;
	var _g2 = pad.buttons.length;
	while(_g11 < _g2) {
		var i1 = _g11++;
		if(pad.buttons[i1] != null) {
			if(kha_Starter.gamepadStates[0].buttons[i1] != pad.buttons[i1].value) {
				kha_Starter.gamepadStates[0].buttons[i1] = pad.buttons[i1].value;
				kha_Starter.gamepad.sendButtonEvent(i1,pad.buttons[i1].value);
			}
		}
	}
};
kha_Starter.unload = function(_) {
	kha_Game.the.onPause();
	kha_Game.the.onBackground();
	kha_Game.the.onShutdown();
};
kha_Starter.setMouseXY = function(event) {
	var rect = kha_Sys.khanvas.getBoundingClientRect();
	var borderWidth = kha_Sys.khanvas.clientLeft;
	var borderHeight = kha_Sys.khanvas.clientTop;
	kha_Starter.mouseX = (event.clientX - rect.left - borderWidth) * kha_Sys.khanvas.width / (rect.width - 2 * borderWidth) | 0;
	kha_Starter.mouseY = (event.clientY - rect.top - borderHeight) * kha_Sys.khanvas.height / (rect.height - 2 * borderHeight) | 0;
};
kha_Starter.mouseDown = function(event) {
	window.document.addEventListener("mouseup",kha_Starter.mouseUp);
	kha_Starter.setMouseXY(event);
	if(event.button == 0) {
		if(event.ctrlKey) {
			kha_Starter.leftMouseCtrlDown = true;
			kha_Game.the.rightMouseDown(kha_Starter.mouseX,kha_Starter.mouseY);
			kha_Starter.mouse.sendDownEvent(1,kha_Starter.mouseX,kha_Starter.mouseY);
		} else {
			kha_Starter.leftMouseCtrlDown = false;
			kha_Game.the.mouseDown(kha_Starter.mouseX,kha_Starter.mouseY);
			kha_Starter.mouse.sendDownEvent(0,kha_Starter.mouseX,kha_Starter.mouseY);
		}
	} else {
		kha_Game.the.rightMouseDown(kha_Starter.mouseX,kha_Starter.mouseY);
		kha_Starter.mouse.sendDownEvent(1,kha_Starter.mouseX,kha_Starter.mouseY);
	}
};
kha_Starter.mouseUp = function(event) {
	window.document.removeEventListener("mouseup",kha_Starter.mouseUp);
	kha_Starter.setMouseXY(event);
	if(event.button == 0) {
		if(kha_Starter.leftMouseCtrlDown) {
			kha_Game.the.rightMouseUp(kha_Starter.mouseX,kha_Starter.mouseY);
			kha_Starter.mouse.sendUpEvent(1,kha_Starter.mouseX,kha_Starter.mouseY);
		} else {
			kha_Game.the.mouseUp(kha_Starter.mouseX,kha_Starter.mouseY);
			kha_Starter.mouse.sendUpEvent(0,kha_Starter.mouseX,kha_Starter.mouseY);
		}
		kha_Starter.leftMouseCtrlDown = false;
	} else {
		kha_Game.the.rightMouseUp(kha_Starter.mouseX,kha_Starter.mouseY);
		kha_Starter.mouse.sendUpEvent(1,kha_Starter.mouseX,kha_Starter.mouseY);
	}
};
kha_Starter.mouseMove = function(event) {
	kha_Starter.setMouseXY(event);
	kha_Game.the.mouseMove(kha_Starter.mouseX,kha_Starter.mouseY);
	kha_Starter.mouse.sendMoveEvent(kha_Starter.mouseX,kha_Starter.mouseY);
};
kha_Starter.keycodeToChar = function(key,keycode,shift) {
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
kha_Starter.keyDown = function(event) {
	event.stopPropagation();
	if(kha_Starter.pressedKeys[event.keyCode]) {
		event.preventDefault();
		return;
	}
	kha_Starter.pressedKeys[event.keyCode] = true;
	var _g = event.keyCode;
	switch(_g) {
	case 8:
		kha_Game.the.keyDown(kha_Key.BACKSPACE,"");
		kha_Starter.keyboard.sendDownEvent(kha_Key.BACKSPACE,"");
		event.preventDefault();
		break;
	case 9:
		kha_Game.the.keyDown(kha_Key.TAB,"");
		kha_Starter.keyboard.sendDownEvent(kha_Key.TAB,"");
		event.preventDefault();
		break;
	case 13:
		kha_Game.the.keyDown(kha_Key.ENTER,"");
		kha_Starter.keyboard.sendDownEvent(kha_Key.ENTER,"");
		event.preventDefault();
		break;
	case 16:
		kha_Game.the.keyDown(kha_Key.SHIFT,"");
		kha_Starter.keyboard.sendDownEvent(kha_Key.SHIFT,"");
		event.preventDefault();
		break;
	case 17:
		kha_Game.the.keyDown(kha_Key.CTRL,"");
		kha_Starter.keyboard.sendDownEvent(kha_Key.CTRL,"");
		event.preventDefault();
		break;
	case 18:
		kha_Game.the.keyDown(kha_Key.ALT,"");
		kha_Starter.keyboard.sendDownEvent(kha_Key.ALT,"");
		event.preventDefault();
		break;
	case 27:
		kha_Game.the.keyDown(kha_Key.ESC,"");
		kha_Starter.keyboard.sendDownEvent(kha_Key.ESC,"");
		event.preventDefault();
		break;
	case 32:
		kha_Game.the.keyDown(kha_Key.CHAR," ");
		kha_Starter.keyboard.sendDownEvent(kha_Key.CHAR," ");
		event.preventDefault();
		break;
	case 46:
		kha_Game.the.keyDown(kha_Key.DEL,"");
		kha_Starter.keyboard.sendDownEvent(kha_Key.DEL,"");
		event.preventDefault();
		break;
	case 38:
		kha_Game.the.buttonDown(kha_Button.UP);
		kha_Starter.keyboard.sendDownEvent(kha_Key.UP,"");
		event.preventDefault();
		break;
	case 40:
		kha_Game.the.buttonDown(kha_Button.DOWN);
		kha_Starter.keyboard.sendDownEvent(kha_Key.DOWN,"");
		event.preventDefault();
		break;
	case 37:
		kha_Game.the.buttonDown(kha_Button.LEFT);
		kha_Starter.keyboard.sendDownEvent(kha_Key.LEFT,"");
		event.preventDefault();
		break;
	case 39:
		kha_Game.the.buttonDown(kha_Button.RIGHT);
		kha_Starter.keyboard.sendDownEvent(kha_Key.RIGHT,"");
		event.preventDefault();
		break;
	default:
		if(!event.altKey) {
			var $char = kha_Starter.keycodeToChar(event.key,event.keyCode,event.shiftKey);
			kha_Game.the.keyDown(kha_Key.CHAR,$char);
			kha_Starter.keyboard.sendDownEvent(kha_Key.CHAR,$char);
		}
	}
};
kha_Starter.keyUp = function(event) {
	event.preventDefault();
	event.stopPropagation();
	kha_Starter.pressedKeys[event.keyCode] = false;
	var _g = event.keyCode;
	switch(_g) {
	case 8:
		kha_Game.the.keyUp(kha_Key.BACKSPACE,"");
		kha_Starter.keyboard.sendUpEvent(kha_Key.BACKSPACE,"");
		break;
	case 9:
		kha_Game.the.keyUp(kha_Key.TAB,"");
		kha_Starter.keyboard.sendUpEvent(kha_Key.TAB,"");
		break;
	case 13:
		kha_Game.the.keyUp(kha_Key.ENTER,"");
		kha_Starter.keyboard.sendUpEvent(kha_Key.ENTER,"");
		break;
	case 16:
		kha_Game.the.keyUp(kha_Key.SHIFT,"");
		kha_Starter.keyboard.sendUpEvent(kha_Key.SHIFT,"");
		break;
	case 17:
		kha_Game.the.keyUp(kha_Key.CTRL,"");
		kha_Starter.keyboard.sendUpEvent(kha_Key.CTRL,"");
		break;
	case 18:
		kha_Game.the.keyUp(kha_Key.ALT,"");
		kha_Starter.keyboard.sendUpEvent(kha_Key.ALT,"");
		break;
	case 27:
		kha_Game.the.keyUp(kha_Key.ESC,"");
		kha_Starter.keyboard.sendUpEvent(kha_Key.ESC,"");
		break;
	case 32:
		kha_Game.the.keyUp(kha_Key.CHAR," ");
		kha_Starter.keyboard.sendUpEvent(kha_Key.CHAR," ");
		break;
	case 46:
		kha_Game.the.keyUp(kha_Key.DEL,"");
		kha_Starter.keyboard.sendUpEvent(kha_Key.DEL,"");
		break;
	case 38:
		kha_Game.the.buttonUp(kha_Button.UP);
		kha_Starter.keyboard.sendUpEvent(kha_Key.UP,"");
		break;
	case 40:
		kha_Game.the.buttonUp(kha_Button.DOWN);
		kha_Starter.keyboard.sendUpEvent(kha_Key.DOWN,"");
		break;
	case 37:
		kha_Game.the.buttonUp(kha_Button.LEFT);
		kha_Starter.keyboard.sendUpEvent(kha_Key.LEFT,"");
		break;
	case 39:
		kha_Game.the.buttonUp(kha_Button.RIGHT);
		kha_Starter.keyboard.sendUpEvent(kha_Key.RIGHT,"");
		break;
	default:
		if(!event.altKey) {
			var $char = kha_Starter.keycodeToChar(event.key,event.keyCode,event.shiftKey);
			kha_Game.the.keyUp(kha_Key.CHAR,$char);
			kha_Starter.keyboard.sendUpEvent(kha_Key.CHAR,$char);
		}
	}
};
kha_Starter.prototype = {
	start: function(game) {
		this.gameToStart = game;
		kha_Configuration.setScreen(new kha_EmptyScreen(kha__$Color_Color_$Impl_$.fromBytes(0,0,0)));
		kha_Loader.the.loadProject($bind(this,this.loadFinished));
	}
	,loadFinished: function() {
		kha_Loader.the.initProject();
		var canvas = window.document.getElementById("khanvas");
		this.gameToStart.width = kha_Loader.the.width;
		this.gameToStart.height = kha_Loader.the.height;
		var gl = false;
		try {
			kha_Sys.gl = canvas.getContext("experimental-webgl",{ alpha : false, antialias : kha_Loader.the.antiAliasingSamples > 1});
			if(kha_Sys.gl != null) {
				kha_Sys.gl.pixelStorei(kha_Sys.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,true);
				kha_Sys.gl.getExtension("OES_texture_float");
				gl = true;
			}
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			haxe_Log.trace(e,{ fileName : "Starter.hx", lineNumber : 127, className : "kha.Starter", methodName : "loadFinished"});
		}
		kha_Sys.init(canvas);
		var widthTransform = canvas.width / kha_Loader.the.width;
		var heightTransform = canvas.height / kha_Loader.the.height;
		var transform = Math.min(widthTransform,heightTransform);
		if(gl) {
			var g4;
			if(gl) g4 = new kha_js_graphics4_Graphics(true); else g4 = null;
			kha_Starter.frame = new kha_Framebuffer(null,null,g4);
			kha_Starter.frame.init(new kha_graphics2_Graphics1(kha_Starter.frame),new kha_js_graphics4_Graphics2(kha_Starter.frame),g4);
		} else {
			var g2 = new kha_js_CanvasGraphics(canvas.getContext("2d"),Math.round(kha_Loader.the.width * transform),Math.round(kha_Loader.the.height * transform));
			kha_Starter.frame = new kha_Framebuffer(null,g2,null);
			kha_Starter.frame.init(new kha_graphics2_Graphics1(kha_Starter.frame),g2,null);
		}
		if(kha_audio2_Audio._init()) {
			kha_Sys._hasWebAudio = true;
			kha_audio2_Audio1._init();
		} else {
			kha_Sys._hasWebAudio = false;
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
			var gamepads = navigator.getGamepads && navigator.getGamepads();
			if(gamepads == null) gamepads = navigator.webkitGetGamepads && navigator.webkitGetGamepads();
			if(gamepads != null) {
				var _g1 = 0;
				var _g = gamepads.length;
				while(_g1 < _g) {
					var i = _g1++;
					var pad = gamepads[i];
					if(pad != null) {
						kha_Starter.checkGamepadButton(pad,0,kha_Button.BUTTON_1);
						kha_Starter.checkGamepadButton(pad,1,kha_Button.BUTTON_2);
						kha_Starter.checkGamepadButton(pad,12,kha_Button.UP);
						kha_Starter.checkGamepadButton(pad,13,kha_Button.DOWN);
						kha_Starter.checkGamepadButton(pad,14,kha_Button.LEFT);
						kha_Starter.checkGamepadButton(pad,15,kha_Button.RIGHT);
						if(pad.index == 0) kha_Starter.checkGamepad(pad);
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
				kha_Configuration.theScreen.render(kha_Starter.frame);
				if(kha_Sys.gl != null) {
					kha_Sys.gl.clearColor(1,1,1,1);
					kha_Sys.gl.colorMask(false,false,false,true);
					kha_Sys.gl.clear(kha_Sys.gl.COLOR_BUFFER_BIT);
					kha_Sys.gl.colorMask(true,true,true,true);
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
		canvas.onmousedown = kha_Starter.mouseDown;
		canvas.onmousemove = kha_Starter.mouseMove;
		canvas.onkeydown = kha_Starter.keyDown;
		canvas.onkeyup = kha_Starter.keyUp;
		window.addEventListener("unload",kha_Starter.unload);
		kha_Configuration.setScreen(this.gameToStart);
		this.gameToStart.loadFinished();
	}
	,__class__: kha_Starter
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
		this.write(new kha_Blob(bytes));
	}
	,appendString: function(data) {
		var bytes = haxe_io_Bytes.ofString(data);
		this.append(new kha_Blob(bytes));
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
	var _g1 = 0;
	var _g = source.byteLength;
	while(_g1 < _g) {
		var i = _g1++;
		ele = source[i];
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
	read: function() {
		var storage = window.localStorage;
		var value = storage.getItem(this.name);
		if(value == null) return null; else return new kha_Blob(kha_LocalStorageFile.decode(value));
	}
	,write: function(data) {
		var storage = window.localStorage;
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
var kha_Sys = function() { };
$hxClasses["kha.Sys"] = kha_Sys;
kha_Sys.__name__ = ["kha","Sys"];
kha_Sys.__properties__ = {get_pixelHeight:"get_pixelHeight",get_pixelWidth:"get_pixelWidth",get_mouse:"get_mouse"}
kha_Sys.initPerformanceTimer = function() {
	if(window.performance != null) kha_Sys.performance = window.performance; else kha_Sys.performance = window.Date;
};
kha_Sys.init = function(canvas) {
	kha_Sys.khanvas = canvas;
	kha_Sys.theMouse = new kha_js_Mouse();
};
kha_Sys.getTime = function() {
	return kha_Sys.performance.now() / 1000;
};
kha_Sys.get_mouse = function() {
	return kha_Sys.theMouse;
};
kha_Sys.get_pixelWidth = function() {
	return kha_Sys.khanvas.width;
};
kha_Sys.get_pixelHeight = function() {
	return kha_Sys.khanvas.height;
};
kha_Sys.vsynced = function() {
	return true;
};
kha_Sys.refreshRate = function() {
	return 60;
};
kha_Sys.systemId = function() {
	return "HTML5";
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
var kha_WebGLImage = function(width,height,format,renderTarget) {
	this.myWidth = width;
	this.myHeight = height;
	this.format = format;
	this.renderTarget = renderTarget;
	this.image = null;
	this.video = null;
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
	get_g1: function() {
		if(this.graphics1 == null) this.graphics1 = new kha_graphics2_Graphics1(this);
		return this.graphics1;
	}
	,get_g2: function() {
		if(this.graphics2 == null) this.graphics2 = new kha_js_graphics4_Graphics2(this);
		return this.graphics2;
	}
	,get_g4: function() {
		if(this.graphics4 == null) this.graphics4 = new kha_js_graphics4_Graphics(true,this);
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
	,createImageData: function() {
		kha_WebGLImage.context.strokeStyle = "rgba(0,0,0,0)";
		kha_WebGLImage.context.fillStyle = "rgba(0,0,0,0)";
		kha_WebGLImage.context.fillRect(0,0,this.image.width,this.image.height);
		kha_WebGLImage.context.drawImage(this.image,0,0,this.image.width,this.image.height,0,0,this.image.width,this.image.height);
		this.data = kha_WebGLImage.context.getImageData(0,0,this.image.width,this.image.height);
	}
	,createTexture: function() {
		if(kha_Sys.gl == null) return;
		this.texture = kha_Sys.gl.createTexture();
		kha_Sys.gl.bindTexture(kha_Sys.gl.TEXTURE_2D,this.texture);
		kha_Sys.gl.texParameteri(kha_Sys.gl.TEXTURE_2D,kha_Sys.gl.TEXTURE_MAG_FILTER,kha_Sys.gl.LINEAR);
		kha_Sys.gl.texParameteri(kha_Sys.gl.TEXTURE_2D,kha_Sys.gl.TEXTURE_MIN_FILTER,kha_Sys.gl.LINEAR);
		kha_Sys.gl.texParameteri(kha_Sys.gl.TEXTURE_2D,kha_Sys.gl.TEXTURE_WRAP_S,kha_Sys.gl.CLAMP_TO_EDGE);
		kha_Sys.gl.texParameteri(kha_Sys.gl.TEXTURE_2D,kha_Sys.gl.TEXTURE_WRAP_T,kha_Sys.gl.CLAMP_TO_EDGE);
		if(this.renderTarget) {
			this.frameBuffer = kha_Sys.gl.createFramebuffer();
			kha_Sys.gl.bindFramebuffer(kha_Sys.gl.FRAMEBUFFER,this.frameBuffer);
			kha_Sys.gl.texImage2D(kha_Sys.gl.TEXTURE_2D,0,kha_Sys.gl.RGBA,this.get_realWidth(),this.get_realHeight(),0,kha_Sys.gl.RGBA,this.format == kha_graphics4_TextureFormat.RGBA128?kha_Sys.gl.FLOAT:kha_Sys.gl.UNSIGNED_BYTE,null);
			kha_Sys.gl.framebufferTexture2D(kha_Sys.gl.FRAMEBUFFER,kha_Sys.gl.COLOR_ATTACHMENT0,kha_Sys.gl.TEXTURE_2D,this.texture,0);
			kha_Sys.gl.bindFramebuffer(kha_Sys.gl.FRAMEBUFFER,null);
		} else if(this.video != null) kha_Sys.gl.texImage2D(kha_Sys.gl.TEXTURE_2D,0,kha_Sys.gl.RGBA,kha_Sys.gl.RGBA,kha_Sys.gl.UNSIGNED_BYTE,this.video); else kha_Sys.gl.texImage2D(kha_Sys.gl.TEXTURE_2D,0,kha_Sys.gl.RGBA,kha_Sys.gl.RGBA,this.format == kha_graphics4_TextureFormat.RGBA128?kha_Sys.gl.FLOAT:kha_Sys.gl.UNSIGNED_BYTE,this.image);
		kha_Sys.gl.bindTexture(kha_Sys.gl.TEXTURE_2D,null);
	}
	,set: function(stage) {
		kha_Sys.gl.activeTexture(kha_Sys.gl.TEXTURE0 + stage);
		kha_Sys.gl.bindTexture(kha_Sys.gl.TEXTURE_2D,this.texture);
		if(this.video != null) kha_Sys.gl.texImage2D(kha_Sys.gl.TEXTURE_2D,0,kha_Sys.gl.RGBA,kha_Sys.gl.RGBA,kha_Sys.gl.UNSIGNED_BYTE,this.video);
	}
	,lock: function(level) {
		if(level == null) level = 0;
		this.bytes = haxe_io_Bytes.alloc(this.format == kha_graphics4_TextureFormat.RGBA32?4 * this.get_width() * this.get_height():this.format == kha_graphics4_TextureFormat.RGBA128?16 * this.get_width() * this.get_height():this.get_width() * this.get_height());
		return this.bytes;
	}
	,unlock: function() {
		if(kha_Sys.gl != null) {
			this.texture = kha_Sys.gl.createTexture();
			kha_Sys.gl.bindTexture(kha_Sys.gl.TEXTURE_2D,this.texture);
			kha_Sys.gl.texParameteri(kha_Sys.gl.TEXTURE_2D,kha_Sys.gl.TEXTURE_MAG_FILTER,kha_Sys.gl.LINEAR);
			kha_Sys.gl.texParameteri(kha_Sys.gl.TEXTURE_2D,kha_Sys.gl.TEXTURE_MIN_FILTER,kha_Sys.gl.LINEAR);
			kha_Sys.gl.texParameteri(kha_Sys.gl.TEXTURE_2D,kha_Sys.gl.TEXTURE_WRAP_S,kha_Sys.gl.CLAMP_TO_EDGE);
			kha_Sys.gl.texParameteri(kha_Sys.gl.TEXTURE_2D,kha_Sys.gl.TEXTURE_WRAP_T,kha_Sys.gl.CLAMP_TO_EDGE);
			var _g = this.format;
			switch(_g[1]) {
			case 1:
				kha_Sys.gl.texImage2D(kha_Sys.gl.TEXTURE_2D,0,kha_Sys.gl.LUMINANCE,this.get_width(),this.get_height(),0,kha_Sys.gl.LUMINANCE,kha_Sys.gl.UNSIGNED_BYTE,new Uint8Array(this.bytes.b.bufferValue));
				if(kha_Sys.gl.getError() == 1282) {
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
					kha_Sys.gl.texImage2D(kha_Sys.gl.TEXTURE_2D,0,kha_Sys.gl.RGBA,this.get_width(),this.get_height(),0,kha_Sys.gl.RGBA,kha_Sys.gl.UNSIGNED_BYTE,new Uint8Array(rgbaBytes.b.bufferValue));
				}
				break;
			case 0:
				kha_Sys.gl.texImage2D(kha_Sys.gl.TEXTURE_2D,0,kha_Sys.gl.RGBA,this.get_width(),this.get_height(),0,kha_Sys.gl.RGBA,kha_Sys.gl.UNSIGNED_BYTE,new Uint8Array(this.bytes.b.bufferValue));
				break;
			case 2:
				kha_Sys.gl.texImage2D(kha_Sys.gl.TEXTURE_2D,0,kha_Sys.gl.RGBA,this.get_width(),this.get_height(),0,kha_Sys.gl.RGBA,kha_Sys.gl.FLOAT,new Uint8Array(this.bytes.b.bufferValue));
				break;
			}
			kha_Sys.gl.bindTexture(kha_Sys.gl.TEXTURE_2D,null);
			this.bytes = null;
		}
	}
	,unload: function() {
	}
	,__class__: kha_WebGLImage
});
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
	var bufferSize = 2048;
	kha_audio2_Audio.buffer = new kha_audio2_Buffer(bufferSize * 4,2,44100);
	kha_audio2_Audio.initContext();
	if(kha_audio2_Audio._context == null) return false;
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
var kha_audio2_Audio1 = function() { };
$hxClasses["kha.audio2.Audio1"] = kha_audio2_Audio1;
kha_audio2_Audio1.__name__ = ["kha","audio2","Audio1"];
kha_audio2_Audio1._init = function() {
	var this1;
	this1 = new Array(16);
	kha_audio2_Audio1.soundChannels = this1;
	var this2;
	this2 = new Array(16);
	kha_audio2_Audio1.musicChannels = this2;
	var this3;
	this3 = new Array(16);
	kha_audio2_Audio1.internalSoundChannels = this3;
	var this4;
	this4 = new Array(16);
	kha_audio2_Audio1.internalMusicChannels = this4;
	var this5;
	this5 = new Array(512);
	kha_audio2_Audio1.sampleCache1 = this5;
	var this6;
	this6 = new Array(512);
	kha_audio2_Audio1.sampleCache2 = this6;
	kha_audio2_Audio.audioCallback = kha_audio2_Audio1._mix;
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
	while(_g2 < 16) {
		var i2 = _g2++;
		kha_audio2_Audio1.internalMusicChannels[i2] = kha_audio2_Audio1.musicChannels[i2];
	}
	var _g3 = 0;
	var _g11 = kha_audio2_Audio1.internalSoundChannels;
	while(_g3 < _g11.length) {
		var channel = _g11[_g3];
		++_g3;
		if(channel == null || channel.get_finished()) continue;
		channel.nextSamples(kha_audio2_Audio1.sampleCache1,samples);
		var _g21 = 0;
		while(_g21 < samples) {
			var i3 = _g21++;
			var _g31 = i3;
			var val = kha_audio2_Audio1.sampleCache2[_g31] + kha_audio2_Audio1.sampleCache1[i3] * channel.get_volume();
			kha_audio2_Audio1.sampleCache2[_g31] = val;
		}
	}
	var _g4 = 0;
	var _g12 = kha_audio2_Audio1.internalMusicChannels;
	while(_g4 < _g12.length) {
		var channel1 = _g12[_g4];
		++_g4;
		if(channel1 == null || channel1.get_finished()) continue;
		channel1.nextSamples(kha_audio2_Audio1.sampleCache1,samples);
		var _g22 = 0;
		while(_g22 < samples) {
			var i4 = _g22++;
			var _g32 = i4;
			var val1 = kha_audio2_Audio1.sampleCache2[_g32] + kha_audio2_Audio1.sampleCache1[i4] * channel1.get_volume();
			kha_audio2_Audio1.sampleCache2[_g32] = val1;
		}
	}
	var _g5 = 0;
	while(_g5 < samples) {
		var i5 = _g5++;
		var val2 = Math.max(Math.min(kha_audio2_Audio1.sampleCache2[i5],1.0),-1.0);
		buffer.data[buffer.writeLocation] = val2;
		buffer.writeLocation += 1;
		if(buffer.writeLocation >= buffer.size) buffer.writeLocation = 0;
	}
};
kha_audio2_Audio1.playSound = function(sound) {
	var channel = null;
	var _g = 0;
	while(_g < 16) {
		var i = _g++;
		if(kha_audio2_Audio1.soundChannels[i] == null || kha_audio2_Audio1.soundChannels[i].get_finished()) {
			channel = new kha_audio2_SoundChannel();
			channel.data = sound.data;
			kha_audio2_Audio1.soundChannels[i] = channel;
			break;
		}
	}
	return channel;
};
kha_audio2_Audio1.playMusic = function(music,loop) {
	if(loop == null) loop = false;
	if(music.data == null) return null;
	var channel = null;
	var _g = 0;
	while(_g < 16) {
		var i = _g++;
		if(kha_audio2_Audio1.musicChannels[i] == null || kha_audio2_Audio1.musicChannels[i].get_finished()) {
			channel = new kha_audio2_MusicChannel(music.data,loop);
			kha_audio2_Audio1.musicChannels[i] = channel;
			break;
		}
	}
	return channel;
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
	__class__: kha_audio2_Buffer
};
var kha_audio2_MusicChannel = function(data,loop) {
	this.paused = false;
	this.atend = false;
	this.myVolume = 1;
	this.loop = loop;
	this.reader = kha_audio2_ogg_vorbis_Reader.openFromBytes(data);
};
$hxClasses["kha.audio2.MusicChannel"] = kha_audio2_MusicChannel;
kha_audio2_MusicChannel.__name__ = ["kha","audio2","MusicChannel"];
kha_audio2_MusicChannel.prototype = {
	nextSamples: function(samples,length) {
		if(this.paused) {
			var _g = 0;
			while(_g < length) {
				var i = _g++;
				samples[i] = 0;
			}
			return;
		}
		var count = this.reader.read(samples,length / 2 | 0,2,44100,true) * 2;
		if(count < length) {
			if(this.loop) this.reader.set_currentMillisecond(0); else this.atend = true;
			var _g1 = count;
			while(_g1 < length) {
				var i1 = _g1++;
				samples[i1] = 0;
			}
		}
	}
	,play: function() {
		this.paused = false;
	}
	,pause: function() {
		this.paused = true;
	}
	,stop: function() {
		this.atend = true;
	}
	,get_length: function() {
		return Std["int"](this.reader.get_totalMillisecond());
	}
	,get_position: function() {
		return Std["int"](this.reader.get_currentMillisecond());
	}
	,get_volume: function() {
		return this.myVolume;
	}
	,set_volume: function(value) {
		return this.myVolume = value;
	}
	,get_finished: function() {
		return this.atend;
	}
	,__class__: kha_audio2_MusicChannel
	,__properties__: {get_finished:"get_finished",set_volume:"set_volume",get_volume:"get_volume",get_position:"get_position",get_length:"get_length"}
};
var kha_audio2_SoundChannel = function() {
	this.paused = false;
	this.myVolume = 1;
	this.myPosition = 0;
};
$hxClasses["kha.audio2.SoundChannel"] = kha_audio2_SoundChannel;
kha_audio2_SoundChannel.__name__ = ["kha","audio2","SoundChannel"];
kha_audio2_SoundChannel.prototype = {
	nextSamples: function(samples,length) {
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
	,get_length: function() {
		return this.data.length / 44.1 / 2 | 0;
	}
	,get_position: function() {
		return this.myPosition / 44.1 / 2 | 0;
	}
	,get_volume: function() {
		return this.myVolume;
	}
	,set_volume: function(value) {
		return this.myVolume = value;
	}
	,get_finished: function() {
		return this.myPosition >= this.data.length;
	}
	,__class__: kha_audio2_SoundChannel
	,__properties__: {get_finished:"get_finished",set_volume:"set_volume",get_volume:"get_volume",get_position:"get_position",get_length:"get_length"}
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
	get_header: function() {
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
	setup: function(loc0,loc1) {
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
	read: function(output,samples,channels,sampleRate,useFloat) {
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
	addEntry: function(huffCode,symbol,count,len,values) {
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
	get_title: function() {
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
	__class__: kha_audio2_ogg_vorbis_data_Floor
};
var kha_audio2_ogg_vorbis_data_Floor0 = function() {
};
$hxClasses["kha.audio2.ogg.vorbis.data.Floor0"] = kha_audio2_ogg_vorbis_data_Floor0;
kha_audio2_ogg_vorbis_data_Floor0.__name__ = ["kha","audio2","ogg","vorbis","data","Floor0"];
kha_audio2_ogg_vorbis_data_Floor0.prototype = {
	__class__: kha_audio2_ogg_vorbis_data_Floor0
};
var kha_audio2_ogg_vorbis_data_Floor1 = function() {
};
$hxClasses["kha.audio2.ogg.vorbis.data.Floor1"] = kha_audio2_ogg_vorbis_data_Floor1;
kha_audio2_ogg_vorbis_data_Floor1.__name__ = ["kha","audio2","ogg","vorbis","data","Floor1"];
kha_audio2_ogg_vorbis_data_Floor1.prototype = {
	__class__: kha_audio2_ogg_vorbis_data_Floor1
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
	__class__: kha_audio2_ogg_vorbis_data_Header
};
var kha_audio2_ogg_vorbis_data_IntPoint = function() {
};
$hxClasses["kha.audio2.ogg.vorbis.data.IntPoint"] = kha_audio2_ogg_vorbis_data_IntPoint;
kha_audio2_ogg_vorbis_data_IntPoint.__name__ = ["kha","audio2","ogg","vorbis","data","IntPoint"];
kha_audio2_ogg_vorbis_data_IntPoint.prototype = {
	__class__: kha_audio2_ogg_vorbis_data_IntPoint
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
	doFloor: function(floors,i,n,target,finalY,step2Flag) {
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
	__class__: kha_audio2_ogg_vorbis_data_MappingChannel
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
	__class__: kha_audio2_ogg_vorbis_data_Mode
};
var kha_audio2_ogg_vorbis_data_Page = function() {
};
$hxClasses["kha.audio2.ogg.vorbis.data.Page"] = kha_audio2_ogg_vorbis_data_Page;
kha_audio2_ogg_vorbis_data_Page.__name__ = ["kha","audio2","ogg","vorbis","data","Page"];
kha_audio2_ogg_vorbis_data_Page.prototype = {
	clone: function() {
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
	__class__: kha_audio2_ogg_vorbis_data_ProbedPage
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
	__class__: kha_audio2_ogg_vorbis_data_ReaderError
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
	decode: function(decodeState,header,residueBuffers,ch,n,doNotDecode,channelBuffers) {
		var codebooks = header.codebooks;
		var classwords = codebooks[this.classbook].dimensions;
		var nRead = this.end - this.begin;
		var partSize = this.partSize;
		var partRead = Std["int"](_$UInt_UInt_$Impl_$.toFloat(nRead) / _$UInt_UInt_$Impl_$.toFloat(partSize));
		var classifications;
		var this1;
		this1 = new Array(header.channel * partRead);
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
	__class__: kha_graphics1_Graphics
};
var kha_graphics2_Graphics = function() {
	this.transformations = [];
	this.transformations.push(new kha_math_Matrix3(1,0,0,0,1,0,0,0,1));
	this.opacities = [];
	this.opacities.push(1);
	this.prog = null;
};
$hxClasses["kha.graphics2.Graphics"] = kha_graphics2_Graphics;
kha_graphics2_Graphics.__name__ = ["kha","graphics2","Graphics"];
kha_graphics2_Graphics.prototype = {
	begin: function(clear,clearColor) {
		if(clear == null) clear = true;
	}
	,end: function() {
	}
	,clear: function(color) {
	}
	,drawImage: function(img,x,y) {
		this.drawSubImage(img,x,y,0,0,img.get_width(),img.get_height());
	}
	,drawSubImage: function(img,x,y,sx,sy,sw,sh) {
		this.drawScaledSubImage(img,sx,sy,sw,sh,x,y,img.get_width(),img.get_height());
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
	,pushTransformation: function(transformation) {
		this.setTransformation(transformation);
		this.transformations.push(transformation);
	}
	,popTransformation: function() {
		var ret = this.transformations.pop();
		this.setTransformation(this.get_transformation());
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
		var m = this.get_transformation();
		return new kha_math_Matrix3(_this__00 * m._00 + _this__10 * m._01 + _this__20 * m._02,_this__00 * m._10 + _this__10 * m._11 + _this__20 * m._12,_this__00 * m._20 + _this__10 * m._21 + _this__20 * m._22,_this__01 * m._00 + _this__11 * m._01 + _this__21 * m._02,_this__01 * m._10 + _this__11 * m._11 + _this__21 * m._12,_this__01 * m._20 + _this__11 * m._21 + _this__21 * m._22,_this__02 * m._00 + _this__12 * m._01 + _this__22 * m._02,_this__02 * m._10 + _this__12 * m._11 + _this__22 * m._12,_this__02 * m._20 + _this__12 * m._21 + _this__22 * m._22);
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
		var m = new kha_math_Matrix3(Math.cos(angle),-Math.sin(angle),0,Math.sin(angle),Math.cos(angle),0,0,0,1);
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
		var m1 = this.get_transformation();
		return new kha_math_Matrix3(_this__002 * m1._00 + _this__102 * m1._01 + _this__202 * m1._02,_this__002 * m1._10 + _this__102 * m1._11 + _this__202 * m1._12,_this__002 * m1._20 + _this__102 * m1._21 + _this__202 * m1._22,_this__012 * m1._00 + _this__112 * m1._01 + _this__212 * m1._02,_this__012 * m1._10 + _this__112 * m1._11 + _this__212 * m1._12,_this__012 * m1._20 + _this__112 * m1._21 + _this__212 * m1._22,_this__022 * m1._00 + _this__122 * m1._01 + _this__222 * m1._02,_this__022 * m1._10 + _this__122 * m1._11 + _this__222 * m1._12,_this__022 * m1._20 + _this__122 * m1._21 + _this__222 * m1._22);
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
	,get_program: function() {
		return this.prog;
	}
	,set_program: function(program) {
		this.setProgram(program);
		return this.prog = program;
	}
	,setBlendingMode: function(source,destination) {
	}
	,setTransformation: function(transformation) {
	}
	,setOpacity: function(opacity) {
	}
	,setProgram: function(program) {
	}
	,__class__: kha_graphics2_Graphics
	,__properties__: {set_program:"set_program",get_program:"get_program",set_opacity:"set_opacity",get_opacity:"get_opacity",set_transformation:"set_transformation",get_transformation:"get_transformation",set_font:"set_font",get_font:"get_font",set_color:"set_color",get_color:"get_color"}
};
var kha_graphics2_Graphics1 = function(canvas) {
	this.canvas = canvas;
};
$hxClasses["kha.graphics2.Graphics1"] = kha_graphics2_Graphics1;
kha_graphics2_Graphics1.__name__ = ["kha","graphics2","Graphics1"];
kha_graphics2_Graphics1.__interfaces__ = [kha_graphics1_Graphics];
kha_graphics2_Graphics1.prototype = {
	begin: function() {
		if(this.texture == null) this.texture = kha_Image.createRenderTarget(this.canvas.get_width(),this.canvas.get_height());
		this.pixels = this.texture.lock();
	}
	,end: function() {
		this.texture.unlock();
		this.canvas.get_g2().begin();
		this.canvas.get_g2().drawImage(this.texture,0,0);
		this.canvas.get_g2().end();
	}
	,setPixel: function(x,y,color) {
		this.pixels.set(y * this.texture.get_realWidth() * 4 + x * 4,color);
	}
	,__class__: kha_graphics2_Graphics1
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
	__class__: kha_graphics4_CubeMap
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
	this.type = kha_Sys.gl.FRAGMENT_SHADER;
	this.shader = null;
};
$hxClasses["kha.graphics4.FragmentShader"] = kha_graphics4_FragmentShader;
kha_graphics4_FragmentShader.__name__ = ["kha","graphics4","FragmentShader"];
kha_graphics4_FragmentShader.prototype = {
	__class__: kha_graphics4_FragmentShader
};
var kha_graphics4_Graphics = function() { };
$hxClasses["kha.graphics4.Graphics"] = kha_graphics4_Graphics;
kha_graphics4_Graphics.__name__ = ["kha","graphics4","Graphics"];
kha_graphics4_Graphics.prototype = {
	__class__: kha_graphics4_Graphics
};
var kha_graphics4_ImageShaderPainter = function(g4) {
	this.destinationBlend = kha_graphics4_BlendingOperation.Undefined;
	this.sourceBlend = kha_graphics4_BlendingOperation.Undefined;
	this.myProgram = null;
	this.bilinear = false;
	this.g = g4;
	this.bufferIndex = 0;
	this.initShaders();
	this.initBuffers();
	this.projectionLocation = this.shaderProgram.getConstantLocation("projectionMatrix");
	this.textureLocation = this.shaderProgram.getTextureUnit("tex");
};
$hxClasses["kha.graphics4.ImageShaderPainter"] = kha_graphics4_ImageShaderPainter;
kha_graphics4_ImageShaderPainter.__name__ = ["kha","graphics4","ImageShaderPainter"];
kha_graphics4_ImageShaderPainter.prototype = {
	get_program: function() {
		return this.myProgram;
	}
	,set_program: function(prog) {
		if(prog == null) {
			this.projectionLocation = this.shaderProgram.getConstantLocation("projectionMatrix");
			this.textureLocation = this.shaderProgram.getTextureUnit("tex");
		} else {
			this.projectionLocation = prog.getConstantLocation("projectionMatrix");
			this.textureLocation = prog.getTextureUnit("tex");
		}
		return this.myProgram = prog;
	}
	,setProjection: function(projectionMatrix) {
		this.projectionMatrix = projectionMatrix;
	}
	,initShaders: function() {
		var fragmentShader = new kha_graphics4_FragmentShader(kha_Loader.the.getShader("painter-image.frag"));
		var vertexShader = new kha_graphics4_VertexShader(kha_Loader.the.getShader("painter-image.vert"));
		this.shaderProgram = new kha_graphics4_Program();
		this.shaderProgram.setFragmentShader(fragmentShader);
		this.shaderProgram.setVertexShader(vertexShader);
		this.structure = new kha_graphics4_VertexStructure();
		this.structure.add("vertexPosition",kha_graphics4_VertexData.Float3);
		this.structure.add("texPosition",kha_graphics4_VertexData.Float2);
		this.structure.add("vertexColor",kha_graphics4_VertexData.Float4);
		this.shaderProgram.link(this.structure);
	}
	,initBuffers: function() {
		this.rectVertexBuffer = new kha_graphics4_VertexBuffer(kha_graphics4_ImageShaderPainter.bufferSize * 4,this.structure,kha_graphics4_Usage.DynamicUsage);
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
		this.g.setProgram(this.get_program() == null?this.shaderProgram:this.get_program());
		this.g.setTexture(this.textureLocation,this.lastTexture);
		this.g.setTextureParameters(this.textureLocation,kha_graphics4_TextureAddressing.Clamp,kha_graphics4_TextureAddressing.Clamp,this.bilinear?kha_graphics4_TextureFilter.LinearFilter:kha_graphics4_TextureFilter.PointFilter,this.bilinear?kha_graphics4_TextureFilter.LinearFilter:kha_graphics4_TextureFilter.PointFilter,kha_graphics4_MipMapFilter.NoMipFilter);
		this.g.setMatrix(this.projectionLocation,this.projectionMatrix);
		if(this.sourceBlend == kha_graphics4_BlendingOperation.Undefined || this.destinationBlend == kha_graphics4_BlendingOperation.Undefined) this.g.setBlendingMode(kha_graphics4_BlendingOperation.BlendOne,kha_graphics4_BlendingOperation.InverseSourceAlpha); else this.g.setBlendingMode(this.sourceBlend,this.destinationBlend);
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
		this.setRectColor(kha__$Color_Color_$Impl_$.get_Rb(color) / 255,kha__$Color_Color_$Impl_$.get_Gb(color) / 255,kha__$Color_Color_$Impl_$.get_Bb(color) / 255,opacity);
		this.setRectTexCoords(0,0,tex.get_width() / tex.get_realWidth(),tex.get_height() / tex.get_realHeight());
		this.setRectVertices(bottomleftx,bottomlefty,topleftx,toplefty,toprightx,toprighty,bottomrightx,bottomrighty);
		++this.bufferIndex;
		this.lastTexture = tex;
	}
	,drawImage2: function(img,sx,sy,sw,sh,bottomleftx,bottomlefty,topleftx,toplefty,toprightx,toprighty,bottomrightx,bottomrighty,opacity,color) {
		var tex = img;
		if(this.bufferIndex + 1 >= kha_graphics4_ImageShaderPainter.bufferSize || this.lastTexture != null && tex != this.lastTexture) this.drawBuffer();
		this.setRectTexCoords(sx / tex.get_realWidth(),sy / tex.get_realHeight(),(sx + sw) / tex.get_realWidth(),(sy + sh) / tex.get_realHeight());
		this.setRectColor(kha__$Color_Color_$Impl_$.get_Rb(color) / 255,kha__$Color_Color_$Impl_$.get_Gb(color) / 255,kha__$Color_Color_$Impl_$.get_Bb(color) / 255,opacity);
		this.setRectVertices(bottomleftx,bottomlefty,topleftx,toplefty,toprightx,toprighty,bottomrightx,bottomrighty);
		++this.bufferIndex;
		this.lastTexture = tex;
	}
	,drawImageScale: function(img,sx,sy,sw,sh,left,top,right,bottom,opacity,color) {
		var tex = img;
		if(this.bufferIndex + 1 >= kha_graphics4_ImageShaderPainter.bufferSize || this.lastTexture != null && tex != this.lastTexture) this.drawBuffer();
		this.setRectTexCoords(sx / tex.get_realWidth(),sy / tex.get_realHeight(),(sx + sw) / tex.get_realWidth(),(sy + sh) / tex.get_realHeight());
		this.setRectColor(kha__$Color_Color_$Impl_$.get_Rb(color) / 255,kha__$Color_Color_$Impl_$.get_Gb(color) / 255,kha__$Color_Color_$Impl_$.get_Bb(color) / 255,opacity);
		this.setRectVertices(left,bottom,left,top,right,top,right,bottom);
		++this.bufferIndex;
		this.lastTexture = tex;
	}
	,end: function() {
		if(this.bufferIndex > 0) this.drawBuffer();
		this.lastTexture = null;
	}
	,__class__: kha_graphics4_ImageShaderPainter
	,__properties__: {set_program:"set_program",get_program:"get_program"}
};
var kha_graphics4_ColoredShaderPainter = function(g4) {
	this.destinationBlend = kha_graphics4_BlendingOperation.Undefined;
	this.sourceBlend = kha_graphics4_BlendingOperation.Undefined;
	this.myProgram = null;
	this.g = g4;
	this.bufferIndex = 0;
	this.triangleBufferIndex = 0;
	this.initShaders();
	this.initBuffers();
	this.projectionLocation = this.shaderProgram.getConstantLocation("projectionMatrix");
};
$hxClasses["kha.graphics4.ColoredShaderPainter"] = kha_graphics4_ColoredShaderPainter;
kha_graphics4_ColoredShaderPainter.__name__ = ["kha","graphics4","ColoredShaderPainter"];
kha_graphics4_ColoredShaderPainter.prototype = {
	get_program: function() {
		return this.myProgram;
	}
	,set_program: function(prog) {
		if(prog == null) this.projectionLocation = this.shaderProgram.getConstantLocation("projectionMatrix"); else this.projectionLocation = prog.getConstantLocation("projectionMatrix");
		return this.myProgram = prog;
	}
	,setProjection: function(projectionMatrix) {
		this.projectionMatrix = projectionMatrix;
	}
	,initShaders: function() {
		var fragmentShader = new kha_graphics4_FragmentShader(kha_Loader.the.getShader("painter-colored.frag"));
		var vertexShader = new kha_graphics4_VertexShader(kha_Loader.the.getShader("painter-colored.vert"));
		this.shaderProgram = new kha_graphics4_Program();
		this.shaderProgram.setFragmentShader(fragmentShader);
		this.shaderProgram.setVertexShader(vertexShader);
		this.structure = new kha_graphics4_VertexStructure();
		this.structure.add("vertexPosition",kha_graphics4_VertexData.Float3);
		this.structure.add("vertexColor",kha_graphics4_VertexData.Float4);
		this.shaderProgram.link(this.structure);
	}
	,initBuffers: function() {
		this.rectVertexBuffer = new kha_graphics4_VertexBuffer(kha_graphics4_ColoredShaderPainter.bufferSize * 4,this.structure,kha_graphics4_Usage.DynamicUsage);
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
		this.triangleVertexBuffer = new kha_graphics4_VertexBuffer(kha_graphics4_ColoredShaderPainter.triangleBufferSize * 3,this.structure,kha_graphics4_Usage.DynamicUsage);
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
	,setRectColors: function(color) {
		var baseIndex = this.bufferIndex * 7 * 4;
		var value = kha__$Color_Color_$Impl_$.get_Rb(color) / 255;
		this.rectVertices[baseIndex + 3] = value;
		var value1 = kha__$Color_Color_$Impl_$.get_Gb(color) / 255;
		this.rectVertices[baseIndex + 4] = value1;
		var value2 = kha__$Color_Color_$Impl_$.get_Bb(color) / 255;
		this.rectVertices[baseIndex + 5] = value2;
		var value3 = kha__$Color_Color_$Impl_$.get_Ab(color) / 255;
		this.rectVertices[baseIndex + 6] = value3;
		var value4 = kha__$Color_Color_$Impl_$.get_Rb(color) / 255;
		this.rectVertices[baseIndex + 10] = value4;
		var value5 = kha__$Color_Color_$Impl_$.get_Gb(color) / 255;
		this.rectVertices[baseIndex + 11] = value5;
		var value6 = kha__$Color_Color_$Impl_$.get_Bb(color) / 255;
		this.rectVertices[baseIndex + 12] = value6;
		var value7 = kha__$Color_Color_$Impl_$.get_Ab(color) / 255;
		this.rectVertices[baseIndex + 13] = value7;
		var value8 = kha__$Color_Color_$Impl_$.get_Rb(color) / 255;
		this.rectVertices[baseIndex + 17] = value8;
		var value9 = kha__$Color_Color_$Impl_$.get_Gb(color) / 255;
		this.rectVertices[baseIndex + 18] = value9;
		var value10 = kha__$Color_Color_$Impl_$.get_Bb(color) / 255;
		this.rectVertices[baseIndex + 19] = value10;
		var value11 = kha__$Color_Color_$Impl_$.get_Ab(color) / 255;
		this.rectVertices[baseIndex + 20] = value11;
		var value12 = kha__$Color_Color_$Impl_$.get_Rb(color) / 255;
		this.rectVertices[baseIndex + 24] = value12;
		var value13 = kha__$Color_Color_$Impl_$.get_Gb(color) / 255;
		this.rectVertices[baseIndex + 25] = value13;
		var value14 = kha__$Color_Color_$Impl_$.get_Bb(color) / 255;
		this.rectVertices[baseIndex + 26] = value14;
		var value15 = kha__$Color_Color_$Impl_$.get_Ab(color) / 255;
		this.rectVertices[baseIndex + 27] = value15;
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
	,setTriColors: function(color) {
		var baseIndex = this.triangleBufferIndex * 7 * 3;
		var value = kha__$Color_Color_$Impl_$.get_Rb(color) / 255;
		this.triangleVertices[baseIndex + 3] = value;
		var value1 = kha__$Color_Color_$Impl_$.get_Gb(color) / 255;
		this.triangleVertices[baseIndex + 4] = value1;
		var value2 = kha__$Color_Color_$Impl_$.get_Bb(color) / 255;
		this.triangleVertices[baseIndex + 5] = value2;
		var value3 = kha__$Color_Color_$Impl_$.get_Ab(color) / 255;
		this.triangleVertices[baseIndex + 6] = value3;
		var value4 = kha__$Color_Color_$Impl_$.get_Rb(color) / 255;
		this.triangleVertices[baseIndex + 10] = value4;
		var value5 = kha__$Color_Color_$Impl_$.get_Gb(color) / 255;
		this.triangleVertices[baseIndex + 11] = value5;
		var value6 = kha__$Color_Color_$Impl_$.get_Bb(color) / 255;
		this.triangleVertices[baseIndex + 12] = value6;
		var value7 = kha__$Color_Color_$Impl_$.get_Ab(color) / 255;
		this.triangleVertices[baseIndex + 13] = value7;
		var value8 = kha__$Color_Color_$Impl_$.get_Rb(color) / 255;
		this.triangleVertices[baseIndex + 17] = value8;
		var value9 = kha__$Color_Color_$Impl_$.get_Gb(color) / 255;
		this.triangleVertices[baseIndex + 18] = value9;
		var value10 = kha__$Color_Color_$Impl_$.get_Bb(color) / 255;
		this.triangleVertices[baseIndex + 19] = value10;
		var value11 = kha__$Color_Color_$Impl_$.get_Ab(color) / 255;
		this.triangleVertices[baseIndex + 20] = value11;
	}
	,drawBuffer: function(trisDone) {
		if(!trisDone) this.endTris(true);
		this.rectVertexBuffer.unlock();
		this.g.setVertexBuffer(this.rectVertexBuffer);
		this.g.setIndexBuffer(this.indexBuffer);
		this.g.setProgram(this.get_program() == null?this.shaderProgram:this.get_program());
		this.g.setMatrix(this.projectionLocation,this.projectionMatrix);
		if(this.sourceBlend == kha_graphics4_BlendingOperation.Undefined || this.destinationBlend == kha_graphics4_BlendingOperation.Undefined) this.g.setBlendingMode(kha_graphics4_BlendingOperation.SourceAlpha,kha_graphics4_BlendingOperation.InverseSourceAlpha); else this.g.setBlendingMode(this.sourceBlend,this.destinationBlend);
		this.g.drawIndexedVertices(0,this.bufferIndex * 2 * 3);
		this.bufferIndex = 0;
		this.rectVertices = this.rectVertexBuffer.lock();
	}
	,drawTriBuffer: function(rectsDone) {
		if(!rectsDone) this.endRects(true);
		this.triangleVertexBuffer.unlock();
		this.g.setVertexBuffer(this.triangleVertexBuffer);
		this.g.setIndexBuffer(this.triangleIndexBuffer);
		this.g.setProgram(this.get_program() == null?this.shaderProgram:this.get_program());
		this.g.setMatrix(this.projectionLocation,this.projectionMatrix);
		if(this.sourceBlend == kha_graphics4_BlendingOperation.Undefined || this.destinationBlend == kha_graphics4_BlendingOperation.Undefined) this.g.setBlendingMode(kha_graphics4_BlendingOperation.SourceAlpha,kha_graphics4_BlendingOperation.InverseSourceAlpha); else this.g.setBlendingMode(this.sourceBlend,this.destinationBlend);
		this.g.drawIndexedVertices(0,this.triangleBufferIndex * 3);
		this.triangleBufferIndex = 0;
		this.triangleVertices = this.triangleVertexBuffer.lock();
	}
	,fillRect: function(color,bottomleftx,bottomlefty,topleftx,toplefty,toprightx,toprighty,bottomrightx,bottomrighty) {
		if(this.bufferIndex + 1 >= kha_graphics4_ColoredShaderPainter.bufferSize) this.drawBuffer(false);
		this.setRectColors(color);
		this.setRectVertices(bottomleftx,bottomlefty,topleftx,toplefty,toprightx,toprighty,bottomrightx,bottomrighty);
		++this.bufferIndex;
	}
	,fillTriangle: function(color,x1,y1,x2,y2,x3,y3) {
		if(this.triangleBufferIndex + 1 >= kha_graphics4_ColoredShaderPainter.triangleBufferSize) this.drawTriBuffer(false);
		this.setTriColors(color);
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
		this.endTris(false);
		this.endRects(false);
	}
	,__class__: kha_graphics4_ColoredShaderPainter
	,__properties__: {set_program:"set_program",get_program:"get_program"}
};
var kha_graphics4_TextShaderPainter = function(g4) {
	this.destinationBlend = kha_graphics4_BlendingOperation.Undefined;
	this.sourceBlend = kha_graphics4_BlendingOperation.Undefined;
	this.myProgram = null;
	this.g = g4;
	this.bufferIndex = 0;
	this.initShaders();
	this.initBuffers();
	this.projectionLocation = this.shaderProgram.getConstantLocation("projectionMatrix");
	this.textureLocation = this.shaderProgram.getTextureUnit("tex");
};
$hxClasses["kha.graphics4.TextShaderPainter"] = kha_graphics4_TextShaderPainter;
kha_graphics4_TextShaderPainter.__name__ = ["kha","graphics4","TextShaderPainter"];
kha_graphics4_TextShaderPainter.prototype = {
	get_program: function() {
		return this.myProgram;
	}
	,set_program: function(prog) {
		if(prog == null) {
			this.projectionLocation = this.shaderProgram.getConstantLocation("projectionMatrix");
			this.textureLocation = this.shaderProgram.getTextureUnit("tex");
		} else {
			this.projectionLocation = prog.getConstantLocation("projectionMatrix");
			this.textureLocation = prog.getTextureUnit("tex");
		}
		return this.myProgram = prog;
	}
	,setProjection: function(projectionMatrix) {
		this.projectionMatrix = projectionMatrix;
	}
	,initShaders: function() {
		var fragmentShader = new kha_graphics4_FragmentShader(kha_Loader.the.getShader("painter-text.frag"));
		var vertexShader = new kha_graphics4_VertexShader(kha_Loader.the.getShader("painter-text.vert"));
		this.shaderProgram = new kha_graphics4_Program();
		this.shaderProgram.setFragmentShader(fragmentShader);
		this.shaderProgram.setVertexShader(vertexShader);
		this.structure = new kha_graphics4_VertexStructure();
		this.structure.add("vertexPosition",kha_graphics4_VertexData.Float3);
		this.structure.add("texPosition",kha_graphics4_VertexData.Float2);
		this.structure.add("vertexColor",kha_graphics4_VertexData.Float4);
		this.shaderProgram.link(this.structure);
	}
	,initBuffers: function() {
		this.rectVertexBuffer = new kha_graphics4_VertexBuffer(kha_graphics4_TextShaderPainter.bufferSize * 4,this.structure,kha_graphics4_Usage.DynamicUsage);
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
	,setRectColors: function(color) {
		var baseIndex = this.bufferIndex * 9 * 4;
		var value = kha__$Color_Color_$Impl_$.get_Rb(color) / 255;
		this.rectVertices[baseIndex + 5] = value;
		var value1 = kha__$Color_Color_$Impl_$.get_Gb(color) / 255;
		this.rectVertices[baseIndex + 6] = value1;
		var value2 = kha__$Color_Color_$Impl_$.get_Bb(color) / 255;
		this.rectVertices[baseIndex + 7] = value2;
		var value3 = kha__$Color_Color_$Impl_$.get_Ab(color) / 255;
		this.rectVertices[baseIndex + 8] = value3;
		var value4 = kha__$Color_Color_$Impl_$.get_Rb(color) / 255;
		this.rectVertices[baseIndex + 14] = value4;
		var value5 = kha__$Color_Color_$Impl_$.get_Gb(color) / 255;
		this.rectVertices[baseIndex + 15] = value5;
		var value6 = kha__$Color_Color_$Impl_$.get_Bb(color) / 255;
		this.rectVertices[baseIndex + 16] = value6;
		var value7 = kha__$Color_Color_$Impl_$.get_Ab(color) / 255;
		this.rectVertices[baseIndex + 17] = value7;
		var value8 = kha__$Color_Color_$Impl_$.get_Rb(color) / 255;
		this.rectVertices[baseIndex + 23] = value8;
		var value9 = kha__$Color_Color_$Impl_$.get_Gb(color) / 255;
		this.rectVertices[baseIndex + 24] = value9;
		var value10 = kha__$Color_Color_$Impl_$.get_Bb(color) / 255;
		this.rectVertices[baseIndex + 25] = value10;
		var value11 = kha__$Color_Color_$Impl_$.get_Ab(color) / 255;
		this.rectVertices[baseIndex + 26] = value11;
		var value12 = kha__$Color_Color_$Impl_$.get_Rb(color) / 255;
		this.rectVertices[baseIndex + 32] = value12;
		var value13 = kha__$Color_Color_$Impl_$.get_Gb(color) / 255;
		this.rectVertices[baseIndex + 33] = value13;
		var value14 = kha__$Color_Color_$Impl_$.get_Bb(color) / 255;
		this.rectVertices[baseIndex + 34] = value14;
		var value15 = kha__$Color_Color_$Impl_$.get_Ab(color) / 255;
		this.rectVertices[baseIndex + 35] = value15;
	}
	,drawBuffer: function() {
		this.rectVertexBuffer.unlock();
		this.g.setVertexBuffer(this.rectVertexBuffer);
		this.g.setIndexBuffer(this.indexBuffer);
		this.g.setProgram(this.get_program() == null?this.shaderProgram:this.get_program());
		this.g.setTexture(this.textureLocation,this.lastTexture);
		this.g.setMatrix(this.projectionLocation,this.projectionMatrix);
		if(this.sourceBlend == kha_graphics4_BlendingOperation.Undefined || this.destinationBlend == kha_graphics4_BlendingOperation.Undefined) this.g.setBlendingMode(kha_graphics4_BlendingOperation.SourceAlpha,kha_graphics4_BlendingOperation.InverseSourceAlpha); else this.g.setBlendingMode(this.sourceBlend,this.destinationBlend);
		this.g.drawIndexedVertices(0,this.bufferIndex * 2 * 3);
		this.g.setTexture(this.textureLocation,null);
		this.bufferIndex = 0;
		this.rectVertices = this.rectVertexBuffer.lock();
	}
	,setFont: function(font) {
		this.font = js_Boot.__cast(font , kha_Kravur);
	}
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
	,drawString: function(text,color,x,y,transformation) {
		var tex = this.font.getTexture();
		if(this.lastTexture != null && tex != this.lastTexture) this.drawBuffer();
		this.lastTexture = tex;
		var xpos = x;
		var ypos = y;
		this.startString(text);
		var _g1 = 0;
		var _g = this.stringLength();
		while(_g1 < _g) {
			var i = _g1++;
			var q = this.font.getBakedQuad(this.charCodeAt(i) - 32,xpos,ypos);
			if(q != null) {
				if(this.bufferIndex + 1 >= kha_graphics4_TextShaderPainter.bufferSize) this.drawBuffer();
				this.setRectColors(color);
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
	,__properties__: {set_program:"set_program",get_program:"get_program"}
};
var kha_graphics4_Graphics2 = function(canvas) {
	kha_graphics2_Graphics.call(this);
	this.set_color(kha__$Color_Color_$Impl_$.White);
	this.canvas = canvas;
	this.g = canvas.get_g4();
	this.imagePainter = new kha_graphics4_ImageShaderPainter(this.g);
	this.coloredPainter = new kha_graphics4_ColoredShaderPainter(this.g);
	this.textPainter = new kha_graphics4_TextShaderPainter(this.g);
	this.setProjection();
	var fragmentShader = new kha_graphics4_FragmentShader(kha_Loader.the.getShader("painter-video.frag"));
	var vertexShader = new kha_graphics4_VertexShader(kha_Loader.the.getShader("painter-video.vert"));
	this.videoProgram = new kha_graphics4_Program();
	this.videoProgram.setFragmentShader(fragmentShader);
	this.videoProgram.setVertexShader(vertexShader);
	var structure = new kha_graphics4_VertexStructure();
	structure.add("vertexPosition",kha_graphics4_VertexData.Float3);
	structure.add("texPosition",kha_graphics4_VertexData.Float2);
	structure.add("vertexColor",kha_graphics4_VertexData.Float4);
	this.videoProgram.link(structure);
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
	setProjection: function() {
		var width = this.canvas.get_width();
		var height = this.canvas.get_height();
		if(js_Boot.__instanceof(this.canvas,kha_Framebuffer)) this.projectionMatrix = kha_math_Matrix4.orthogonalProjection(0,width,height,0,0.1,1000); else {
			if(!kha_Image.get_nonPow2Supported()) {
				width = kha_graphics4_Graphics2.upperPowerOfTwo(width);
				height = kha_graphics4_Graphics2.upperPowerOfTwo(height);
			}
			if(this.g.renderTargetsInvertedY()) this.projectionMatrix = kha_math_Matrix4.orthogonalProjection(0,width,0,height,0.1,1000); else this.projectionMatrix = kha_math_Matrix4.orthogonalProjection(0,width,height,0,0.1,1000);
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
		var _this = this.get_transformation();
		var value_x = x;
		var value_y = yh;
		var w = _this._02 * value_x + _this._12 * value_y + _this._22;
		var x1 = (_this._00 * value_x + _this._10 * value_y + _this._20) / w;
		var y1 = (_this._01 * value_x + _this._11 * value_y + _this._21) / w;
		var p1_x = x1;
		var p1_y = y1;
		var _this1 = this.get_transformation();
		var value_x1 = x;
		var value_y1 = y;
		var w1 = _this1._02 * value_x1 + _this1._12 * value_y1 + _this1._22;
		var x2 = (_this1._00 * value_x1 + _this1._10 * value_y1 + _this1._20) / w1;
		var y2 = (_this1._01 * value_x1 + _this1._11 * value_y1 + _this1._21) / w1;
		var p2_x = x2;
		var p2_y = y2;
		var _this2 = this.get_transformation();
		var value_x2 = xw;
		var value_y2 = y;
		var w2 = _this2._02 * value_x2 + _this2._12 * value_y2 + _this2._22;
		var x3 = (_this2._00 * value_x2 + _this2._10 * value_y2 + _this2._20) / w2;
		var y3 = (_this2._01 * value_x2 + _this2._11 * value_y2 + _this2._21) / w2;
		var p3_x = x3;
		var p3_y = y3;
		var _this3 = this.get_transformation();
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
		var _this = this.get_transformation();
		var value_x = dx;
		var value_y = dy + dh;
		var w = _this._02 * value_x + _this._12 * value_y + _this._22;
		var x = (_this._00 * value_x + _this._10 * value_y + _this._20) / w;
		var y = (_this._01 * value_x + _this._11 * value_y + _this._21) / w;
		var p1_x = x;
		var p1_y = y;
		var _this1 = this.get_transformation();
		var value_x1 = dx;
		var value_y1 = dy;
		var w1 = _this1._02 * value_x1 + _this1._12 * value_y1 + _this1._22;
		var x1 = (_this1._00 * value_x1 + _this1._10 * value_y1 + _this1._20) / w1;
		var y1 = (_this1._01 * value_x1 + _this1._11 * value_y1 + _this1._21) / w1;
		var p2_x = x1;
		var p2_y = y1;
		var _this2 = this.get_transformation();
		var value_x2 = dx + dw;
		var value_y2 = dy;
		var w2 = _this2._02 * value_x2 + _this2._12 * value_y2 + _this2._22;
		var x2 = (_this2._00 * value_x2 + _this2._10 * value_y2 + _this2._20) / w2;
		var y2 = (_this2._01 * value_x2 + _this2._11 * value_y2 + _this2._21) / w2;
		var p3_x = x2;
		var p3_y = y2;
		var _this3 = this.get_transformation();
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
		var _this = this.get_transformation();
		var value_x = x - strength / 2;
		var value_y = y + strength / 2;
		var w = _this._02 * value_x + _this._12 * value_y + _this._22;
		var x1 = (_this._00 * value_x + _this._10 * value_y + _this._20) / w;
		var y1 = (_this._01 * value_x + _this._11 * value_y + _this._21) / w;
		p1 = new kha_math_Vector2(x1,y1);
		var p2;
		var _this1 = this.get_transformation();
		var value_x1 = x - strength / 2;
		var value_y1 = y - strength / 2;
		var w1 = _this1._02 * value_x1 + _this1._12 * value_y1 + _this1._22;
		var x2 = (_this1._00 * value_x1 + _this1._10 * value_y1 + _this1._20) / w1;
		var y2 = (_this1._01 * value_x1 + _this1._11 * value_y1 + _this1._21) / w1;
		p2 = new kha_math_Vector2(x2,y2);
		var p3;
		var _this2 = this.get_transformation();
		var value_x2 = x + width + strength / 2;
		var value_y2 = y - strength / 2;
		var w2 = _this2._02 * value_x2 + _this2._12 * value_y2 + _this2._22;
		var x3 = (_this2._00 * value_x2 + _this2._10 * value_y2 + _this2._20) / w2;
		var y3 = (_this2._01 * value_x2 + _this2._11 * value_y2 + _this2._21) / w2;
		p3 = new kha_math_Vector2(x3,y3);
		var p4;
		var _this3 = this.get_transformation();
		var value_x3 = x + width + strength / 2;
		var value_y3 = y + strength / 2;
		var w3 = _this3._02 * value_x3 + _this3._12 * value_y3 + _this3._22;
		var x4 = (_this3._00 * value_x3 + _this3._10 * value_y3 + _this3._20) / w3;
		var y4 = (_this3._01 * value_x3 + _this3._11 * value_y3 + _this3._21) / w3;
		p4 = new kha_math_Vector2(x4,y4);
		this.coloredPainter.fillRect(this.get_color(),p1.x,p1.y,p2.x,p2.y,p3.x,p3.y,p4.x,p4.y);
		var _this4 = this.get_transformation();
		var value_x4 = x - strength / 2;
		var value_y4 = y + height + strength / 2;
		var w4 = _this4._02 * value_x4 + _this4._12 * value_y4 + _this4._22;
		var x5 = (_this4._00 * value_x4 + _this4._10 * value_y4 + _this4._20) / w4;
		var y5 = (_this4._01 * value_x4 + _this4._11 * value_y4 + _this4._21) / w4;
		p1 = new kha_math_Vector2(x5,y5);
		var _this5 = this.get_transformation();
		var value_x5 = x + strength / 2;
		var value_y5 = y - strength / 2;
		var w5 = _this5._02 * value_x5 + _this5._12 * value_y5 + _this5._22;
		var x6 = (_this5._00 * value_x5 + _this5._10 * value_y5 + _this5._20) / w5;
		var y6 = (_this5._01 * value_x5 + _this5._11 * value_y5 + _this5._21) / w5;
		p3 = new kha_math_Vector2(x6,y6);
		var _this6 = this.get_transformation();
		var value_x6 = x + strength / 2;
		var value_y6 = y + height + strength / 2;
		var w6 = _this6._02 * value_x6 + _this6._12 * value_y6 + _this6._22;
		var x7 = (_this6._00 * value_x6 + _this6._10 * value_y6 + _this6._20) / w6;
		var y7 = (_this6._01 * value_x6 + _this6._11 * value_y6 + _this6._21) / w6;
		p4 = new kha_math_Vector2(x7,y7);
		this.coloredPainter.fillRect(this.get_color(),p1.x,p1.y,p2.x,p2.y,p3.x,p3.y,p4.x,p4.y);
		var _this7 = this.get_transformation();
		var value_x7 = x - strength / 2;
		var value_y7 = y + height - strength / 2;
		var w7 = _this7._02 * value_x7 + _this7._12 * value_y7 + _this7._22;
		var x8 = (_this7._00 * value_x7 + _this7._10 * value_y7 + _this7._20) / w7;
		var y8 = (_this7._01 * value_x7 + _this7._11 * value_y7 + _this7._21) / w7;
		p2 = new kha_math_Vector2(x8,y8);
		var _this8 = this.get_transformation();
		var value_x8 = x + width + strength / 2;
		var value_y8 = y + height - strength / 2;
		var w8 = _this8._02 * value_x8 + _this8._12 * value_y8 + _this8._22;
		var x9 = (_this8._00 * value_x8 + _this8._10 * value_y8 + _this8._20) / w8;
		var y9 = (_this8._01 * value_x8 + _this8._11 * value_y8 + _this8._21) / w8;
		p3 = new kha_math_Vector2(x9,y9);
		var _this9 = this.get_transformation();
		var value_x9 = x + width + strength / 2;
		var value_y9 = y + height + strength / 2;
		var w9 = _this9._02 * value_x9 + _this9._12 * value_y9 + _this9._22;
		var x10 = (_this9._00 * value_x9 + _this9._10 * value_y9 + _this9._20) / w9;
		var y10 = (_this9._01 * value_x9 + _this9._11 * value_y9 + _this9._21) / w9;
		p4 = new kha_math_Vector2(x10,y10);
		this.coloredPainter.fillRect(this.get_color(),p1.x,p1.y,p2.x,p2.y,p3.x,p3.y,p4.x,p4.y);
		var _this10 = this.get_transformation();
		var value_x10 = x + width - strength / 2;
		var value_y10 = y + height + strength / 2;
		var w10 = _this10._02 * value_x10 + _this10._12 * value_y10 + _this10._22;
		var x11 = (_this10._00 * value_x10 + _this10._10 * value_y10 + _this10._20) / w10;
		var y11 = (_this10._01 * value_x10 + _this10._11 * value_y10 + _this10._21) / w10;
		p1 = new kha_math_Vector2(x11,y11);
		var _this11 = this.get_transformation();
		var value_x11 = x + width - strength / 2;
		var value_y11 = y - strength / 2;
		var w11 = _this11._02 * value_x11 + _this11._12 * value_y11 + _this11._22;
		var x12 = (_this11._00 * value_x11 + _this11._10 * value_y11 + _this11._20) / w11;
		var y12 = (_this11._01 * value_x11 + _this11._11 * value_y11 + _this11._21) / w11;
		p2 = new kha_math_Vector2(x12,y12);
		var _this12 = this.get_transformation();
		var value_x12 = x + width + strength / 2;
		var value_y12 = y - strength / 2;
		var w12 = _this12._02 * value_x12 + _this12._12 * value_y12 + _this12._22;
		var x13 = (_this12._00 * value_x12 + _this12._10 * value_y12 + _this12._20) / w12;
		var y13 = (_this12._01 * value_x12 + _this12._11 * value_y12 + _this12._21) / w12;
		p3 = new kha_math_Vector2(x13,y13);
		var _this13 = this.get_transformation();
		var value_x13 = x + width + strength / 2;
		var value_y13 = y + height + strength / 2;
		var w13 = _this13._02 * value_x13 + _this13._12 * value_y13 + _this13._22;
		var x14 = (_this13._00 * value_x13 + _this13._10 * value_y13 + _this13._20) / w13;
		var y14 = (_this13._01 * value_x13 + _this13._11 * value_y13 + _this13._21) / w13;
		p4 = new kha_math_Vector2(x14,y14);
		this.coloredPainter.fillRect(this.get_color(),p1.x,p1.y,p2.x,p2.y,p3.x,p3.y,p4.x,p4.y);
	}
	,fillRect: function(x,y,width,height) {
		this.imagePainter.end();
		this.textPainter.end();
		var _this = this.get_transformation();
		var value_x = x;
		var value_y = y + height;
		var w = _this._02 * value_x + _this._12 * value_y + _this._22;
		var x1 = (_this._00 * value_x + _this._10 * value_y + _this._20) / w;
		var y1 = (_this._01 * value_x + _this._11 * value_y + _this._21) / w;
		var p1_x = x1;
		var p1_y = y1;
		var _this1 = this.get_transformation();
		var value_x1 = x;
		var value_y1 = y;
		var w1 = _this1._02 * value_x1 + _this1._12 * value_y1 + _this1._22;
		var x2 = (_this1._00 * value_x1 + _this1._10 * value_y1 + _this1._20) / w1;
		var y2 = (_this1._01 * value_x1 + _this1._11 * value_y1 + _this1._21) / w1;
		var p2_x = x2;
		var p2_y = y2;
		var _this2 = this.get_transformation();
		var value_x2 = x + width;
		var value_y2 = y;
		var w2 = _this2._02 * value_x2 + _this2._12 * value_y2 + _this2._22;
		var x3 = (_this2._00 * value_x2 + _this2._10 * value_y2 + _this2._20) / w2;
		var y3 = (_this2._01 * value_x2 + _this2._11 * value_y2 + _this2._21) / w2;
		var p3_x = x3;
		var p3_y = y3;
		var _this3 = this.get_transformation();
		var value_x3 = x + width;
		var value_y3 = y + height;
		var w3 = _this3._02 * value_x3 + _this3._12 * value_y3 + _this3._22;
		var x4 = (_this3._00 * value_x3 + _this3._10 * value_y3 + _this3._20) / w3;
		var y4 = (_this3._01 * value_x3 + _this3._11 * value_y3 + _this3._21) / w3;
		var p4_x = x4;
		var p4_y = y4;
		this.coloredPainter.fillRect(this.get_color(),p1_x,p1_y,p2_x,p2_y,p3_x,p3_y,p4_x,p4_y);
	}
	,drawString: function(text,x,y) {
		this.imagePainter.end();
		this.coloredPainter.end();
		this.textPainter.drawString(text,this.get_color(),x,y,this.get_transformation());
	}
	,get_font: function() {
		return this.myFont;
	}
	,set_font: function(font) {
		this.textPainter.setFont(font);
		return this.myFont = font;
	}
	,drawLine: function(x1,y1,x2,y2,strength) {
		if(strength == null) strength = 1.0;
		this.imagePainter.end();
		this.textPainter.end();
		var vec;
		if(y2 == y1) vec = new kha_math_Vector2(0,-1); else vec = new kha_math_Vector2(1,-(x2 - x1) / (y2 - y1));
		vec.set_length(strength);
		var p1 = new kha_math_Vector2(x1 + 0.5 * vec.x,y1 + 0.5 * vec.y);
		var p2 = new kha_math_Vector2(x2 + 0.5 * vec.x,y2 + 0.5 * vec.y);
		var p3 = new kha_math_Vector2(p1.x - vec.x,p1.y - vec.y);
		var p4 = new kha_math_Vector2(p2.x - vec.x,p2.y - vec.y);
		var _this = this.get_transformation();
		var w = _this._02 * p1.x + _this._12 * p1.y + _this._22;
		var x = (_this._00 * p1.x + _this._10 * p1.y + _this._20) / w;
		var y = (_this._01 * p1.x + _this._11 * p1.y + _this._21) / w;
		p1 = new kha_math_Vector2(x,y);
		var _this1 = this.get_transformation();
		var w1 = _this1._02 * p2.x + _this1._12 * p2.y + _this1._22;
		var x3 = (_this1._00 * p2.x + _this1._10 * p2.y + _this1._20) / w1;
		var y3 = (_this1._01 * p2.x + _this1._11 * p2.y + _this1._21) / w1;
		p2 = new kha_math_Vector2(x3,y3);
		var _this2 = this.get_transformation();
		var w2 = _this2._02 * p3.x + _this2._12 * p3.y + _this2._22;
		var x4 = (_this2._00 * p3.x + _this2._10 * p3.y + _this2._20) / w2;
		var y4 = (_this2._01 * p3.x + _this2._11 * p3.y + _this2._21) / w2;
		p3 = new kha_math_Vector2(x4,y4);
		var _this3 = this.get_transformation();
		var w3 = _this3._02 * p4.x + _this3._12 * p4.y + _this3._22;
		var x5 = (_this3._00 * p4.x + _this3._10 * p4.y + _this3._20) / w3;
		var y5 = (_this3._01 * p4.x + _this3._11 * p4.y + _this3._21) / w3;
		p4 = new kha_math_Vector2(x5,y5);
		this.coloredPainter.fillTriangle(this.get_color(),p1.x,p1.y,p2.x,p2.y,p3.x,p3.y);
		this.coloredPainter.fillTriangle(this.get_color(),p3.x,p3.y,p2.x,p2.y,p4.x,p4.y);
	}
	,fillTriangle: function(x1,y1,x2,y2,x3,y3) {
		this.imagePainter.end();
		this.textPainter.end();
		var _this = this.get_transformation();
		var value_x = x1;
		var value_y = y1;
		var w = _this._02 * value_x + _this._12 * value_y + _this._22;
		var x = (_this._00 * value_x + _this._10 * value_y + _this._20) / w;
		var y = (_this._01 * value_x + _this._11 * value_y + _this._21) / w;
		var p1_x = x;
		var p1_y = y;
		var _this1 = this.get_transformation();
		var value_x1 = x2;
		var value_y1 = y2;
		var w1 = _this1._02 * value_x1 + _this1._12 * value_y1 + _this1._22;
		var x4 = (_this1._00 * value_x1 + _this1._10 * value_y1 + _this1._20) / w1;
		var y4 = (_this1._01 * value_x1 + _this1._11 * value_y1 + _this1._21) / w1;
		var p2_x = x4;
		var p2_y = y4;
		var _this2 = this.get_transformation();
		var value_x2 = x3;
		var value_y2 = y3;
		var w2 = _this2._02 * value_x2 + _this2._12 * value_y2 + _this2._22;
		var x5 = (_this2._00 * value_x2 + _this2._10 * value_y2 + _this2._20) / w2;
		var y5 = (_this2._01 * value_x2 + _this2._11 * value_y2 + _this2._21) / w2;
		var p3_x = x5;
		var p3_y = y5;
		this.coloredPainter.fillTriangle(this.get_color(),p1_x,p1_y,p2_x,p2_y,p3_x,p3_y);
	}
	,setBilinearFiltering: function(bilinear) {
		this.imagePainter.setBilinearFilter(bilinear);
	}
	,setProgram: function(program) {
		this.endDrawing();
		this.imagePainter.set_program(program);
		this.coloredPainter.set_program(program);
		this.textPainter.set_program(program);
		if(program != null) this.g.setProgram(program);
	}
	,setBlendingMode: function(source,destination) {
		this.endDrawing();
		this.imagePainter.sourceBlend = source;
		this.imagePainter.destinationBlend = destination;
		this.coloredPainter.sourceBlend = source;
		this.coloredPainter.destinationBlend = destination;
		this.textPainter.sourceBlend = source;
		this.textPainter.destinationBlend = destination;
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
	,endDrawing: function() {
		this.imagePainter.end();
		this.textPainter.end();
		this.coloredPainter.end();
	}
	,end: function() {
		this.endDrawing();
		this.g.end();
	}
	,drawVideoInternal: function(video,x,y,width,height) {
	}
	,drawVideo: function(video,x,y,width,height) {
		this.setProgram(this.videoProgram);
		this.drawVideoInternal(video,x,y,width,height);
		this.setProgram(null);
	}
	,__class__: kha_graphics4_Graphics2
});
var kha_graphics4_IndexBuffer = function(indexCount,usage,canRead) {
	if(canRead == null) canRead = false;
	this.usage = usage;
	this.mySize = indexCount;
	this.buffer = kha_Sys.gl.createBuffer();
	this.data = [];
	this.data[indexCount - 1] = 0;
};
$hxClasses["kha.graphics4.IndexBuffer"] = kha_graphics4_IndexBuffer;
kha_graphics4_IndexBuffer.__name__ = ["kha","graphics4","IndexBuffer"];
kha_graphics4_IndexBuffer.prototype = {
	lock: function() {
		return this.data;
	}
	,unlock: function() {
		kha_Sys.gl.bindBuffer(kha_Sys.gl.ELEMENT_ARRAY_BUFFER,this.buffer);
		kha_Sys.gl.bufferData(kha_Sys.gl.ELEMENT_ARRAY_BUFFER,new Uint16Array(this.data),this.usage == kha_graphics4_Usage.DynamicUsage?kha_Sys.gl.DYNAMIC_DRAW:kha_Sys.gl.STATIC_DRAW);
	}
	,set: function() {
		kha_Sys.gl.bindBuffer(kha_Sys.gl.ELEMENT_ARRAY_BUFFER,this.buffer);
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
var kha_graphics4_Program = function() {
	this.program = kha_Sys.gl.createProgram();
	this.textures = [];
	this.textureValues = [];
};
$hxClasses["kha.graphics4.Program"] = kha_graphics4_Program;
kha_graphics4_Program.__name__ = ["kha","graphics4","Program"];
kha_graphics4_Program.prototype = {
	setVertexShader: function(vertexShader) {
		this.vertexShader = vertexShader;
	}
	,setFragmentShader: function(fragmentShader) {
		this.fragmentShader = fragmentShader;
	}
	,link: function(structure) {
		this.compileShader(this.vertexShader);
		this.compileShader(this.fragmentShader);
		kha_Sys.gl.attachShader(this.program,this.vertexShader.shader);
		kha_Sys.gl.attachShader(this.program,this.fragmentShader.shader);
		var index = 0;
		var _g = 0;
		var _g1 = structure.elements;
		while(_g < _g1.length) {
			var element = _g1[_g];
			++_g;
			kha_Sys.gl.bindAttribLocation(this.program,index,element.name);
			++index;
		}
		kha_Sys.gl.linkProgram(this.program);
		if(!kha_Sys.gl.getProgramParameter(this.program,kha_Sys.gl.LINK_STATUS)) throw new js__$Boot_HaxeError("Could not link the shader program.");
	}
	,set: function() {
		kha_Sys.gl.useProgram(this.program);
		var _g1 = 0;
		var _g = this.textureValues.length;
		while(_g1 < _g) {
			var index = _g1++;
			kha_Sys.gl.uniform1i(this.textureValues[index],index);
		}
	}
	,compileShader: function(shader) {
		if(shader.shader != null) return;
		var s = kha_Sys.gl.createShader(shader.type);
		kha_Sys.gl.shaderSource(s,shader.source);
		kha_Sys.gl.compileShader(s);
		if(!kha_Sys.gl.getShaderParameter(s,kha_Sys.gl.COMPILE_STATUS)) throw new js__$Boot_HaxeError("Could not compile shader:\n" + Std.string(kha_Sys.gl.getShaderInfoLog(s)));
		shader.shader = s;
	}
	,getConstantLocation: function(name) {
		return new kha_js_graphics4_ConstantLocation(kha_Sys.gl.getUniformLocation(this.program,name));
	}
	,getTextureUnit: function(name) {
		var index = this.findTexture(name);
		if(index < 0) {
			var location = kha_Sys.gl.getUniformLocation(this.program,name);
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
	,__class__: kha_graphics4_Program
};
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
var kha_graphics4_TextureFormat = $hxClasses["kha.graphics4.TextureFormat"] = { __ename__ : ["kha","graphics4","TextureFormat"], __constructs__ : ["RGBA32","L8","RGBA128"] };
kha_graphics4_TextureFormat.RGBA32 = ["RGBA32",0];
kha_graphics4_TextureFormat.RGBA32.toString = $estr;
kha_graphics4_TextureFormat.RGBA32.__enum__ = kha_graphics4_TextureFormat;
kha_graphics4_TextureFormat.L8 = ["L8",1];
kha_graphics4_TextureFormat.L8.toString = $estr;
kha_graphics4_TextureFormat.L8.__enum__ = kha_graphics4_TextureFormat;
kha_graphics4_TextureFormat.RGBA128 = ["RGBA128",2];
kha_graphics4_TextureFormat.RGBA128.toString = $estr;
kha_graphics4_TextureFormat.RGBA128.__enum__ = kha_graphics4_TextureFormat;
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
var kha_graphics4_VertexBuffer = function(vertexCount,structure,usage,canRead) {
	if(canRead == null) canRead = false;
	this.usage = usage;
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
		}
	}
	this.buffer = kha_Sys.gl.createBuffer();
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
		}
		++index;
	}
};
$hxClasses["kha.graphics4.VertexBuffer"] = kha_graphics4_VertexBuffer;
kha_graphics4_VertexBuffer.__name__ = ["kha","graphics4","VertexBuffer"];
kha_graphics4_VertexBuffer.prototype = {
	lock: function(start,count) {
		return this.data;
	}
	,unlock: function() {
		kha_Sys.gl.bindBuffer(kha_Sys.gl.ARRAY_BUFFER,this.buffer);
		kha_Sys.gl.bufferData(kha_Sys.gl.ARRAY_BUFFER,this.data,this.usage == kha_graphics4_Usage.DynamicUsage?kha_Sys.gl.DYNAMIC_DRAW:kha_Sys.gl.STATIC_DRAW);
	}
	,stride: function() {
		return this.myStride;
	}
	,count: function() {
		return this.mySize;
	}
	,set: function() {
		kha_Sys.gl.bindBuffer(kha_Sys.gl.ARRAY_BUFFER,this.buffer);
		var _g1 = 0;
		var _g = this.sizes.length;
		while(_g1 < _g) {
			var i = _g1++;
			kha_Sys.gl.enableVertexAttribArray(i);
			kha_Sys.gl.vertexAttribPointer(i,this.sizes[i],kha_Sys.gl.FLOAT,false,this.myStride,this.offsets[i]);
		}
	}
	,__class__: kha_graphics4_VertexBuffer
};
var kha_graphics4_VertexData = $hxClasses["kha.graphics4.VertexData"] = { __ename__ : ["kha","graphics4","VertexData"], __constructs__ : ["Float1","Float2","Float3","Float4"] };
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
var kha_graphics4_VertexElement = function(name,data) {
	this.name = name;
	this.data = data;
};
$hxClasses["kha.graphics4.VertexElement"] = kha_graphics4_VertexElement;
kha_graphics4_VertexElement.__name__ = ["kha","graphics4","VertexElement"];
kha_graphics4_VertexElement.prototype = {
	__class__: kha_graphics4_VertexElement
};
var kha_graphics4_VertexShader = function(source) {
	this.source = source.toString();
	this.type = kha_Sys.gl.VERTEX_SHADER;
	this.shader = null;
};
$hxClasses["kha.graphics4.VertexShader"] = kha_graphics4_VertexShader;
kha_graphics4_VertexShader.__name__ = ["kha","graphics4","VertexShader"];
kha_graphics4_VertexShader.prototype = {
	__class__: kha_graphics4_VertexShader
};
var kha_graphics4_VertexStructure = function() {
	this.elements = [];
};
$hxClasses["kha.graphics4.VertexStructure"] = kha_graphics4_VertexStructure;
kha_graphics4_VertexStructure.__name__ = ["kha","graphics4","VertexStructure"];
kha_graphics4_VertexStructure.prototype = {
	add: function(name,data) {
		this.elements.push(new kha_graphics4_VertexElement(name,data));
	}
	,size: function() {
		return this.elements.length;
	}
	,get: function(index) {
		return this.elements[index];
	}
	,__class__: kha_graphics4_VertexStructure
};
var kha_input_Gamepad = $hx_exports.kha.input.Gamepad = function() {
	this.axisListeners = [];
	this.buttonListeners = [];
	kha_input_Gamepad.instance = this;
};
$hxClasses["kha.input.Gamepad"] = kha_input_Gamepad;
kha_input_Gamepad.__name__ = ["kha","input","Gamepad"];
kha_input_Gamepad.get = function(num) {
	if(num == null) num = 0;
	if(num != 0) return null;
	return kha_input_Gamepad.instance;
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
var kha_input_Keyboard = $hx_exports.kha.input.Keyboard = function() {
	this.downListeners = [];
	this.upListeners = [];
	kha_input_Keyboard.instance = this;
};
$hxClasses["kha.input.Keyboard"] = kha_input_Keyboard;
kha_input_Keyboard.__name__ = ["kha","input","Keyboard"];
kha_input_Keyboard.get = function(num) {
	if(num == null) num = 0;
	if(num != 0) return null;
	return kha_input_Keyboard.instance;
};
kha_input_Keyboard.prototype = {
	notify: function(downListener,upListener) {
		if(downListener != null) this.downListeners.push(downListener);
		if(upListener != null) this.upListeners.push(upListener);
	}
	,remove: function(downListener,upListener) {
		if(downListener != null) HxOverrides.remove(this.downListeners,downListener);
		if(upListener != null) HxOverrides.remove(this.upListeners,upListener);
	}
	,sendDownEvent: function(key,$char) {
		var _g = 0;
		var _g1 = this.downListeners;
		while(_g < _g1.length) {
			var listener = _g1[_g];
			++_g;
			listener(key,$char);
		}
	}
	,sendUpEvent: function(key,$char) {
		var _g = 0;
		var _g1 = this.upListeners;
		while(_g < _g1.length) {
			var listener = _g1[_g];
			++_g;
			listener(key,$char);
		}
	}
	,__class__: kha_input_Keyboard
};
var kha_input_Mouse = $hx_exports.kha.input.Mouse = function() {
	this.downListeners = [];
	this.upListeners = [];
	this.moveListeners = [];
	this.wheelListeners = [];
	kha_input_Mouse.instance = this;
};
$hxClasses["kha.input.Mouse"] = kha_input_Mouse;
kha_input_Mouse.__name__ = ["kha","input","Mouse"];
kha_input_Mouse.get = function(num) {
	if(num == null) num = 0;
	if(num != 0) return null;
	return kha_input_Mouse.instance;
};
kha_input_Mouse.prototype = {
	notify: function(downListener,upListener,moveListener,wheelListener) {
		if(downListener != null) this.downListeners.push(downListener);
		if(upListener != null) this.upListeners.push(upListener);
		if(moveListener != null) this.moveListeners.push(moveListener);
		if(wheelListener != null) this.wheelListeners.push(wheelListener);
	}
	,remove: function(downListener,upListener,moveListener,wheelListener) {
		if(downListener != null) HxOverrides.remove(this.downListeners,downListener);
		if(upListener != null) HxOverrides.remove(this.upListeners,upListener);
		if(moveListener != null) this.moveListeners.push(moveListener);
		if(wheelListener != null) this.wheelListeners.push(wheelListener);
	}
	,sendDownEvent: function(button,x,y) {
		var _g = 0;
		var _g1 = this.downListeners;
		while(_g < _g1.length) {
			var listener = _g1[_g];
			++_g;
			listener(button,x,y);
		}
	}
	,sendUpEvent: function(button,x,y) {
		var _g = 0;
		var _g1 = this.upListeners;
		while(_g < _g1.length) {
			var listener = _g1[_g];
			++_g;
			listener(button,x,y);
		}
	}
	,sendMoveEvent: function(x,y) {
		var _g = 0;
		var _g1 = this.moveListeners;
		while(_g < _g1.length) {
			var listener = _g1[_g];
			++_g;
			listener(x,y);
		}
	}
	,sendWheelEvent: function(delta) {
		var _g = 0;
		var _g1 = this.wheelListeners;
		while(_g < _g1.length) {
			var listener = _g1[_g];
			++_g;
			listener(delta);
		}
	}
	,__class__: kha_input_Mouse
};
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
var kha_js_AEMusicChannel = function(music,loop) {
	this.element = music.element;
	this.loop = loop;
};
$hxClasses["kha.js.AEMusicChannel"] = kha_js_AEMusicChannel;
kha_js_AEMusicChannel.__name__ = ["kha","js","AEMusicChannel"];
kha_js_AEMusicChannel.prototype = {
	play: function() {
		this.element.loop = this.loop;
		this.element.play();
	}
	,pause: function() {
		try {
			this.element.pause();
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			haxe_Log.trace(e,{ fileName : "AEMusicChannel.hx", lineNumber : 25, className : "kha.js.AEMusicChannel", methodName : "pause"});
		}
	}
	,stop: function() {
		try {
			this.element.pause();
			this.element.currentTime = 0;
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			haxe_Log.trace(e,{ fileName : "AEMusicChannel.hx", lineNumber : 35, className : "kha.js.AEMusicChannel", methodName : "stop"});
		}
	}
	,get_length: function() {
		if(isFinite(this.element.duration)) return Math.floor(this.element.duration * 1000); else return -1;
	}
	,get_position: function() {
		return Math.ceil(this.element.currentTime * 1000);
	}
	,get_volume: function() {
		return 1;
	}
	,set_volume: function(value) {
		return 1;
	}
	,get_finished: function() {
		return this.get_position() >= this.get_length();
	}
	,__class__: kha_js_AEMusicChannel
	,__properties__: {get_finished:"get_finished",set_volume:"set_volume",get_volume:"get_volume",get_position:"get_position",get_length:"get_length"}
};
var kha_js_AESoundChannel = function(sound) {
	this.element = sound.element;
};
$hxClasses["kha.js.AESoundChannel"] = kha_js_AESoundChannel;
kha_js_AESoundChannel.__name__ = ["kha","js","AESoundChannel"];
kha_js_AESoundChannel.prototype = {
	play: function() {
		this.element.play();
	}
	,pause: function() {
		try {
			this.element.pause();
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			haxe_Log.trace(e,{ fileName : "AESoundChannel.hx", lineNumber : 22, className : "kha.js.AESoundChannel", methodName : "pause"});
		}
	}
	,stop: function() {
		try {
			this.element.pause();
			this.element.currentTime = 0;
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			haxe_Log.trace(e,{ fileName : "AESoundChannel.hx", lineNumber : 32, className : "kha.js.AESoundChannel", methodName : "stop"});
		}
	}
	,get_length: function() {
		if(isFinite(this.element.duration)) return Math.floor(this.element.duration * 1000); else return -1;
	}
	,get_position: function() {
		return Math.ceil(this.element.currentTime * 1000);
	}
	,get_volume: function() {
		return 1;
	}
	,set_volume: function(value) {
		return 1;
	}
	,get_finished: function() {
		return this.get_position() >= this.get_length();
	}
	,__class__: kha_js_AESoundChannel
	,__properties__: {get_finished:"get_finished",set_volume:"set_volume",get_volume:"get_volume",get_position:"get_position",get_length:"get_length"}
};
var kha_js_AudioElementAudio = function() { };
$hxClasses["kha.js.AudioElementAudio"] = kha_js_AudioElementAudio;
kha_js_AudioElementAudio.__name__ = ["kha","js","AudioElementAudio"];
kha_js_AudioElementAudio._compile = function() {
};
kha_js_AudioElementAudio.playSound = function(sound) {
	sound.element.play();
	return new kha_js_AESoundChannel(sound);
};
kha_js_AudioElementAudio.playMusic = function(music,loop) {
	if(loop == null) loop = false;
	music.element.loop = loop;
	music.element.play();
	return new kha_js_AEMusicChannel(music,loop);
};
var kha_js_CanvasGraphics = function(canvas,width,height) {
	kha_graphics2_Graphics.call(this);
	this.canvas = canvas;
	this.width = width;
	this.height = height;
	kha_js_CanvasGraphics.instance = this;
	this.myColor = kha__$Color_Color_$Impl_$.fromBytes(0,0,0);
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
	begin: function(clear,clearColor) {
		if(clear == null) clear = true;
		if(clear) this.clear(clearColor);
	}
	,clear: function(color) {
		if(color == null) color = kha__$Color_Color_$Impl_$.Black;
		this.canvas.strokeStyle = "rgb(" + kha__$Color_Color_$Impl_$.get_Rb(color) + "," + kha__$Color_Color_$Impl_$.get_Gb(color) + "," + kha__$Color_Color_$Impl_$.get_Bb(color) + ")";
		this.canvas.fillStyle = "rgb(" + kha__$Color_Color_$Impl_$.get_Rb(color) + "," + kha__$Color_Color_$Impl_$.get_Gb(color) + "," + kha__$Color_Color_$Impl_$.get_Bb(color) + ")";
		this.canvas.fillRect(0,0,this.width,this.height);
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
		this.canvas.strokeStyle = "rgb(" + kha__$Color_Color_$Impl_$.get_Rb(color) + "," + kha__$Color_Color_$Impl_$.get_Gb(color) + "," + kha__$Color_Color_$Impl_$.get_Bb(color) + ")";
		this.canvas.fillStyle = "rgb(" + kha__$Color_Color_$Impl_$.get_Rb(color) + "," + kha__$Color_Color_$Impl_$.get_Gb(color) + "," + kha__$Color_Color_$Impl_$.get_Bb(color) + ")";
		return color;
	}
	,get_color: function() {
		return this.myColor;
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
		this.canvas.globalAlpha = this.get_opacity() * (kha__$Color_Color_$Impl_$.get_Ab(this.myColor) / 255);
		this.canvas.fillRect(x,y,width,height);
		this.canvas.globalAlpha = this.get_opacity();
	}
	,drawString: function(text,x,y) {
		var image = this.webfont.getImage(this.myColor);
		if(image.width > 0) {
			var xpos = x;
			var ypos = y;
			var _g1 = 0;
			var _g = text.length;
			while(_g1 < _g) {
				var i = _g1++;
				var q = this.webfont.kravur.getBakedQuad(HxOverrides.cca(text,i) - 32,xpos,ypos);
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
	,drawVideo: function(video,x,y,width,height) {
		this.canvas.drawImage((js_Boot.__cast(video , kha_js_Video)).element,x,y,width,height);
	}
	,setTransformation: function(transformation) {
		this.canvas.setTransform(transformation._00,transformation._01,transformation._10,transformation._11,transformation._20,transformation._12);
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
	toString: function() {
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
var kha_js_Font = function(name,style,size) {
	this.myName = name;
	this.myStyle = style;
	this.mySize = size;
	this.kravur = kha_Kravur.get(name,style,size);
	this.images = new haxe_ds_IntMap();
};
$hxClasses["kha.js.Font"] = kha_js_Font;
kha_js_Font.__name__ = ["kha","js","Font"];
kha_js_Font.__interfaces__ = [kha_Font];
kha_js_Font.prototype = {
	get_name: function() {
		return this.kravur.get_name();
	}
	,get_style: function() {
		return this.kravur.get_style();
	}
	,get_size: function() {
		return this.kravur.get_size();
	}
	,getHeight: function() {
		return this.kravur.getHeight();
	}
	,charWidth: function(ch) {
		return this.kravur.charWidth(ch);
	}
	,charsWidth: function(ch,offset,length) {
		return this.kravur.charsWidth(ch,offset,length);
	}
	,stringWidth: function(str) {
		return this.kravur.stringWidth(str);
	}
	,getBaselinePosition: function() {
		return this.kravur.getBaselinePosition();
	}
	,getImage: function(color) {
		if(!this.images.h.hasOwnProperty(color)) {
			var canvas = window.document.createElement("canvas");
			canvas.width = this.kravur.width;
			canvas.height = this.kravur.height;
			var ctx = canvas.getContext("2d");
			ctx.fillStyle = "black";
			ctx.fillRect(0,0,this.kravur.width,this.kravur.height);
			var imageData = ctx.getImageData(0,0,this.kravur.width,this.kravur.height);
			var bytes;
			bytes = (js_Boot.__cast(this.kravur.getTexture() , kha_CanvasImage)).bytes;
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
			this.images.h[color] = img;
		}
		return this.images.h[color];
	}
	,__class__: kha_js_Font
	,__properties__: {get_size:"get_size",get_style:"get_style",get_name:"get_name"}
};
var kha_js_Loader = function() {
	kha_Loader.call(this);
};
$hxClasses["kha.js.Loader"] = kha_js_Loader;
kha_js_Loader.__name__ = ["kha","js","Loader"];
kha_js_Loader.__super__ = kha_Loader;
kha_js_Loader.prototype = $extend(kha_Loader.prototype,{
	loadMusic: function(desc,done) {
		if(kha_Sys._hasWebAudio) new kha_js_WebAudioMusic(desc.file,done); else new kha_js_Music(desc.file,done);
	}
	,loadSound: function(desc,done) {
		if(kha_Sys._hasWebAudio) new kha_js_WebAudioSound(desc.file,done); else new kha_js_Sound(desc.file,done);
	}
	,loadImage: function(desc,done) {
		var img = window.document.createElement("img");
		img.src = desc.file;
		var readable;
		if(Object.prototype.hasOwnProperty.call(desc,"readable")) readable = desc.readable; else readable = false;
		img.onload = function(event) {
			done(kha_Image.fromImage(img,readable));
		};
	}
	,loadVideo: function(desc,done) {
		var video = new kha_js_Video(desc.file,done);
	}
	,loadBlob: function(desc,done) {
		var request = new XMLHttpRequest();
		request.open("GET",desc.file,true);
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
				} else js_Browser.alert("loadBlob failed");
				done(new kha_Blob(bytes));
			} else js_Browser.alert("loadBlob failed");
		};
		request.send(null);
	}
	,loadFont: function(name,style,size) {
		if(kha_Sys.gl != null) return kha_Kravur.get(name,style,size); else return new kha_js_Font(name,style,size);
	}
	,loadURL: function(url) {
		if(HxOverrides.substr(url,0,1) == "#") window.location.hash = HxOverrides.substr(url,1,url.length - 1); else window.open(url,"Kha");
	}
	,setNormalCursor: function() {
		kha_js_Mouse.SystemCursor = "default";
		kha_js_Mouse.UpdateSystemCursor();
	}
	,setHandCursor: function() {
		kha_js_Mouse.SystemCursor = "pointer";
		kha_js_Mouse.UpdateSystemCursor();
	}
	,quit: function() {
		var $window = window;
		$window.close();
	}
	,__class__: kha_js_Loader
});
var kha_js_Mouse = function() {
	kha_Mouse.call(this);
	kha_Sys.khanvas.style.cursor = kha_js_Mouse.SystemCursor;
};
$hxClasses["kha.js.Mouse"] = kha_js_Mouse;
kha_js_Mouse.__name__ = ["kha","js","Mouse"];
kha_js_Mouse.UpdateSystemCursor = function() {
	kha_Sys.khanvas.style.cursor = kha_js_Mouse.SystemCursor;
};
kha_js_Mouse.__super__ = kha_Mouse;
kha_js_Mouse.prototype = $extend(kha_Mouse.prototype,{
	hideSystemCursor: function() {
		kha_Sys.khanvas.style.cursor = "none";
	}
	,showSystemCursor: function() {
		kha_Sys.khanvas.style.cursor = kha_js_Mouse.SystemCursor;
	}
	,__class__: kha_js_Mouse
});
var kha_js_Music = function(filename,done) {
	kha_Music.call(this);
	this.done = done;
	kha_js_Music.loading.add(this);
	this.element = window.document.createElement("audio");
	if(kha_js_Music.extensions == null) {
		kha_js_Music.extensions = [];
		if(this.element.canPlayType("audio/ogg") != "") kha_js_Music.extensions.push(".ogg");
		if(this.element.canPlayType("audio/mp4") != "") kha_js_Music.extensions.push(".mp4");
	}
	this.element.addEventListener("error",$bind(this,this.errorListener),false);
	this.element.addEventListener("canplay",$bind(this,this.canPlayThroughListener),false);
	this.element.src = filename + kha_js_Music.extensions[0];
	this.element.preload = "auto";
	this.element.load();
};
$hxClasses["kha.js.Music"] = kha_js_Music;
kha_js_Music.__name__ = ["kha","js","Music"];
kha_js_Music.extractName = function(filename) {
	var len = filename.lastIndexOf(".");
	return HxOverrides.substr(filename,0,len);
};
kha_js_Music.concatExtensions = function() {
	var value = kha_js_Music.extensions[0];
	var _g1 = 1;
	var _g = kha_js_Music.extensions.length;
	while(_g1 < _g) {
		var i = _g1++;
		value += "|" + kha_js_Music.extensions[i];
	}
	return value;
};
kha_js_Music.__super__ = kha_Music;
kha_js_Music.prototype = $extend(kha_Music.prototype,{
	errorListener: function(eventInfo) {
		if(this.element.error.code == 4) {
			var _g1 = 0;
			var _g = kha_js_Music.extensions.length - 1;
			while(_g1 < _g) {
				var i = _g1++;
				if(StringTools.endsWith(this.element.src,kha_js_Music.extensions[i])) {
					this.element.src = kha_js_Music.extractName(this.element.src) + kha_js_Music.extensions[i + 1];
					return;
				}
			}
		}
		haxe_Log.trace("Error loading " + kha_js_Music.extractName(this.element.src) + kha_js_Music.concatExtensions(),{ fileName : "Music.hx", lineNumber : 90, className : "kha.js.Music", methodName : "errorListener"});
		window.console.log("loadMusic failed");
		this.finishAsset();
	}
	,canPlayThroughListener: function(eventInfo) {
		this.finishAsset();
	}
	,finishAsset: function() {
		this.element.removeEventListener("error",$bind(this,this.errorListener),false);
		this.element.removeEventListener("canplaythrough",$bind(this,this.canPlayThroughListener),false);
		this.done(this);
		kha_js_Music.loading.remove(this);
	}
	,__class__: kha_js_Music
});
var kha_js_SoundChannel = function(element) {
	kha_SoundChannel.call(this);
	this.element = element;
};
$hxClasses["kha.js.SoundChannel"] = kha_js_SoundChannel;
kha_js_SoundChannel.__name__ = ["kha","js","SoundChannel"];
kha_js_SoundChannel.__super__ = kha_SoundChannel;
kha_js_SoundChannel.prototype = $extend(kha_SoundChannel.prototype,{
	play: function() {
		kha_SoundChannel.prototype.play.call(this);
		this.element.play();
	}
	,pause: function() {
		try {
			this.element.pause();
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			haxe_Log.trace(e,{ fileName : "Sound.hx", lineNumber : 30, className : "kha.js.SoundChannel", methodName : "pause"});
		}
	}
	,stop: function() {
		try {
			this.element.pause();
			this.element.currentTime = 0;
			kha_SoundChannel.prototype.stop.call(this);
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			haxe_Log.trace(e,{ fileName : "Sound.hx", lineNumber : 41, className : "kha.js.SoundChannel", methodName : "stop"});
		}
	}
	,getCurrentPos: function() {
		return Math.ceil(this.element.currentTime * 1000);
	}
	,getLength: function() {
		if((function($this) {
			var $r;
			var f = $this.element.duration;
			$r = isFinite(f);
			return $r;
		}(this))) return Math.floor(this.element.duration * 1000); else return -1;
	}
	,__class__: kha_js_SoundChannel
});
var kha_js_Sound = function(filename,done) {
	kha_Sound.call(this);
	this.done = done;
	kha_js_Sound.loading.add(this);
	var _this = window.document;
	this.element = _this.createElement("audio");
	if(kha_js_Sound.extensions == null) {
		kha_js_Sound.extensions = [];
		if(this.element.canPlayType("audio/ogg") != "") kha_js_Sound.extensions.push(".ogg");
		if(this.element.canPlayType("audio/mp4") != "") kha_js_Sound.extensions.push(".mp4");
	}
	this.element.addEventListener("error",$bind(this,this.errorListener),false);
	this.element.addEventListener("canplay",$bind(this,this.canPlayThroughListener),false);
	this.element.src = filename + kha_js_Sound.extensions[0];
	this.element.preload = "auto";
	this.element.load();
};
$hxClasses["kha.js.Sound"] = kha_js_Sound;
kha_js_Sound.__name__ = ["kha","js","Sound"];
kha_js_Sound.extractName = function(filename) {
	var len = filename.lastIndexOf(".");
	return HxOverrides.substr(filename,0,len);
};
kha_js_Sound.concatExtensions = function() {
	var value = kha_js_Sound.extensions[0];
	var _g1 = 1;
	var _g = kha_js_Sound.extensions.length;
	while(_g1 < _g) {
		var i = _g1++;
		value += "|" + kha_js_Sound.extensions[i];
	}
	return value;
};
kha_js_Sound.__super__ = kha_Sound;
kha_js_Sound.prototype = $extend(kha_Sound.prototype,{
	errorListener: function(eventInfo) {
		if(this.element.error.code == 4) {
			var _g1 = 0;
			var _g = kha_js_Sound.extensions.length - 1;
			while(_g1 < _g) {
				var i = _g1++;
				if(StringTools.endsWith(this.element.src,kha_js_Sound.extensions[i])) {
					this.element.src = kha_js_Sound.extractName(this.element.src) + kha_js_Sound.extensions[i + 1];
					return;
				}
			}
		}
		haxe_Log.trace("Error loading " + kha_js_Sound.extractName(this.element.src) + kha_js_Sound.concatExtensions(),{ fileName : "Sound.hx", lineNumber : 108, className : "kha.js.Sound", methodName : "errorListener"});
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
var kha_js_Video = function(filename,done) {
	kha_Video.call(this);
	this.done = done;
	kha_js_Video.loading.add(this);
	this.element = window.document.createElement("video");
	if(kha_js_Video.extensions == null) {
		kha_js_Video.extensions = [];
		if(this.element.canPlayType("video/webm") != "") kha_js_Video.extensions.push(".webm");
		if(this.element.canPlayType("video/mp4") != "") kha_js_Video.extensions.push(".mp4");
	}
	this.element.addEventListener("error",$bind(this,this.errorListener),false);
	this.element.addEventListener("canplaythrough",$bind(this,this.canPlayThroughListener),false);
	this.element.preload = "auto";
	this.element.src = filename + kha_js_Video.extensions[0];
};
$hxClasses["kha.js.Video"] = kha_js_Video;
kha_js_Video.__name__ = ["kha","js","Video"];
kha_js_Video.__super__ = kha_Video;
kha_js_Video.prototype = $extend(kha_Video.prototype,{
	play: function(loop) {
		if(loop == null) loop = false;
		try {
			this.element.loop = loop;
			this.element.play();
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			haxe_Log.trace(e,{ fileName : "Video.hx", lineNumber : 48, className : "kha.js.Video", methodName : "play"});
		}
	}
	,pause: function() {
		try {
			this.element.pause();
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			haxe_Log.trace(e,{ fileName : "Video.hx", lineNumber : 56, className : "kha.js.Video", methodName : "pause"});
		}
	}
	,stop: function() {
		try {
			this.element.pause();
			this.element.currentTime = 0;
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			haxe_Log.trace(e,{ fileName : "Video.hx", lineNumber : 65, className : "kha.js.Video", methodName : "stop"});
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
			var _g = kha_js_Video.extensions.length - 1;
			while(_g1 < _g) {
				var i = _g1++;
				var ext = kha_js_Video.extensions[i];
				if(StringTools.endsWith(this.element.src,kha_js_Video.extensions[i])) {
					this.element.src = HxOverrides.substr(this.element.src,0,this.element.src.length - kha_js_Video.extensions[i].length) + kha_js_Video.extensions[i + 1];
					return;
				}
			}
		}
		var str = "";
		var i1 = kha_js_Video.extensions.length - 2;
		while(i1 >= 0) str = "|" + kha_js_Video.extensions[i1];
		haxe_Log.trace("Error loading " + this.element.src + str,{ fileName : "Video.hx", lineNumber : 100, className : "kha.js.Video", methodName : "errorListener"});
		this.finishAsset();
	}
	,canPlayThroughListener: function(eventInfo) {
		this.finishAsset();
	}
	,finishAsset: function() {
		this.element.removeEventListener("error",$bind(this,this.errorListener),false);
		this.element.removeEventListener("canplaythrough",$bind(this,this.canPlayThroughListener),false);
		if(kha_Sys.gl != null) this.texture = kha_Image.fromVideo(this);
		this.done(this);
		kha_js_Video.loading.remove(this);
	}
	,__class__: kha_js_Video
});
var kha_js_WebAudioMusic = function(filename,done) {
	var _g = this;
	kha_Music.call(this);
	var request = new XMLHttpRequest();
	request.open("GET",filename + ".ogg",true);
	request.responseType = "arraybuffer";
	request.onerror = function() {
		js_Browser.alert("loadMusic failed");
	};
	request.onload = function() {
		var arrayBuffer = request.response;
		_g.data = haxe_io_Bytes.ofData(arrayBuffer);
		done(_g);
	};
	request.send(null);
};
$hxClasses["kha.js.WebAudioMusic"] = kha_js_WebAudioMusic;
kha_js_WebAudioMusic.__name__ = ["kha","js","WebAudioMusic"];
kha_js_WebAudioMusic.__super__ = kha_Music;
kha_js_WebAudioMusic.prototype = $extend(kha_Music.prototype,{
	__class__: kha_js_WebAudioMusic
});
var kha_js_WebAudioChannel = function(buffer) {
	kha_SoundChannel.call(this);
	this.offset = 0;
	this.buffer = buffer;
	this.startTime = kha_audio2_Audio._context.currentTime;
	this.source = kha_audio2_Audio._context.createBufferSource();
	this.source.buffer = this.buffer;
	this.source.connect(kha_audio2_Audio._context.destination);
	this.source.start(0);
};
$hxClasses["kha.js.WebAudioChannel"] = kha_js_WebAudioChannel;
kha_js_WebAudioChannel.__name__ = ["kha","js","WebAudioChannel"];
kha_js_WebAudioChannel.__super__ = kha_SoundChannel;
kha_js_WebAudioChannel.prototype = $extend(kha_SoundChannel.prototype,{
	play: function() {
		if(this.source != null) return;
		kha_SoundChannel.prototype.play.call(this);
		this.startTime = kha_audio2_Audio._context.currentTime - this.offset;
		this.source.start(0,this.offset);
	}
	,pause: function() {
		this.source.stop();
		this.offset = kha_audio2_Audio._context.currentTime - this.startTime;
		this.startTime = -1;
		this.source = null;
	}
	,stop: function() {
		this.source.stop();
		this.source = null;
		this.offset = 0;
		this.startTime = -1;
		kha_SoundChannel.prototype.stop.call(this);
	}
	,getCurrentPos: function() {
		if(this.startTime < 0) return Math.ceil(this.offset * 1000); else return Math.ceil((kha_audio2_Audio._context.currentTime - this.startTime) * 1000);
	}
	,getLength: function() {
		return Math.floor(this.buffer.duration * 1000);
	}
	,__class__: kha_js_WebAudioChannel
});
var kha_js_WebAudioSound = function(filename,done) {
	var _g = this;
	kha_Sound.call(this);
	this.done = done;
	var request = new XMLHttpRequest();
	request.open("GET",filename + ".ogg",true);
	request.responseType = "arraybuffer";
	request.onerror = function() {
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
	__class__: kha_js_WebAudioSound
});
var kha_js_graphics4_ConstantLocation = function(value) {
	this.value = value;
};
$hxClasses["kha.js.graphics4.ConstantLocation"] = kha_js_graphics4_ConstantLocation;
kha_js_graphics4_ConstantLocation.__name__ = ["kha","js","graphics4","ConstantLocation"];
kha_js_graphics4_ConstantLocation.__interfaces__ = [kha_graphics4_ConstantLocation];
kha_js_graphics4_ConstantLocation.prototype = {
	__class__: kha_js_graphics4_ConstantLocation
};
var kha_js_graphics4_Graphics = function(webgl,renderTarget) {
	this.matrixCache = (function($this) {
		var $r;
		var this1;
		this1 = new Array(16);
		$r = this1;
		return $r;
	}(this));
	this.renderTarget = renderTarget;
	if(webgl) {
		kha_Sys.gl.enable(kha_Sys.gl.BLEND);
		kha_Sys.gl.blendFunc(kha_Sys.gl.SRC_ALPHA,kha_Sys.gl.ONE_MINUS_SRC_ALPHA);
		kha_Sys.gl.viewport(0,0,kha_Sys.get_pixelWidth(),kha_Sys.get_pixelHeight());
	}
};
$hxClasses["kha.js.graphics4.Graphics"] = kha_js_graphics4_Graphics;
kha_js_graphics4_Graphics.__name__ = ["kha","js","graphics4","Graphics"];
kha_js_graphics4_Graphics.__interfaces__ = [kha_graphics4_Graphics];
kha_js_graphics4_Graphics.prototype = {
	begin: function() {
		if(this.renderTarget == null) {
			kha_Sys.gl.bindFramebuffer(kha_Sys.gl.FRAMEBUFFER,null);
			kha_Sys.gl.viewport(0,0,kha_Sys.get_pixelWidth(),kha_Sys.get_pixelHeight());
		} else {
			kha_Sys.gl.bindFramebuffer(kha_Sys.gl.FRAMEBUFFER,this.renderTarget.frameBuffer);
			kha_Sys.gl.viewport(0,0,this.renderTarget.get_width(),this.renderTarget.get_height());
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
			clearMask |= kha_Sys.gl.COLOR_BUFFER_BIT;
			kha_Sys.gl.clearColor(kha__$Color_Color_$Impl_$.get_Rb(color) / 255,kha__$Color_Color_$Impl_$.get_Gb(color) / 255,kha__$Color_Color_$Impl_$.get_Bb(color) / 255,kha__$Color_Color_$Impl_$.get_Ab(color) / 255);
		}
		if(depth != null) {
			clearMask |= kha_Sys.gl.DEPTH_BUFFER_BIT;
			kha_Sys.gl.clearDepth(depth);
		}
		if(stencil != null) clearMask |= kha_Sys.gl.STENCIL_BUFFER_BIT;
		kha_Sys.gl.clear(clearMask);
	}
	,setDepthMode: function(write,mode) {
		switch(mode[1]) {
		case 0:
			kha_Sys.gl.disable(kha_Sys.gl.DEPTH_TEST);
			kha_Sys.gl.depthFunc(kha_Sys.gl.ALWAYS);
			break;
		case 1:
			kha_Sys.gl.enable(kha_Sys.gl.DEPTH_TEST);
			kha_Sys.gl.depthFunc(kha_Sys.gl.NEVER);
			break;
		case 2:
			kha_Sys.gl.enable(kha_Sys.gl.DEPTH_TEST);
			kha_Sys.gl.depthFunc(kha_Sys.gl.EQUAL);
			break;
		case 3:
			kha_Sys.gl.enable(kha_Sys.gl.DEPTH_TEST);
			kha_Sys.gl.depthFunc(kha_Sys.gl.NOTEQUAL);
			break;
		case 4:
			kha_Sys.gl.enable(kha_Sys.gl.DEPTH_TEST);
			kha_Sys.gl.depthFunc(kha_Sys.gl.LESS);
			break;
		case 5:
			kha_Sys.gl.enable(kha_Sys.gl.DEPTH_TEST);
			kha_Sys.gl.depthFunc(kha_Sys.gl.LEQUAL);
			break;
		case 6:
			kha_Sys.gl.enable(kha_Sys.gl.DEPTH_TEST);
			kha_Sys.gl.depthFunc(kha_Sys.gl.GREATER);
			break;
		case 7:
			kha_Sys.gl.enable(kha_Sys.gl.DEPTH_TEST);
			kha_Sys.gl.depthFunc(kha_Sys.gl.GEQUAL);
			break;
		}
		kha_Sys.gl.depthMask(write);
	}
	,getBlendFunc: function(op) {
		switch(op[1]) {
		case 2:case 0:
			return kha_Sys.gl.ZERO;
		case 1:
			return kha_Sys.gl.ONE;
		case 3:
			return kha_Sys.gl.SRC_ALPHA;
		case 4:
			return kha_Sys.gl.DST_ALPHA;
		case 5:
			return kha_Sys.gl.ONE_MINUS_SRC_ALPHA;
		case 6:
			return kha_Sys.gl.ONE_MINUS_DST_ALPHA;
		}
	}
	,setBlendingMode: function(source,destination) {
		if(source == kha_graphics4_BlendingOperation.BlendOne && destination == kha_graphics4_BlendingOperation.BlendZero) kha_Sys.gl.disable(kha_Sys.gl.BLEND); else {
			kha_Sys.gl.enable(kha_Sys.gl.BLEND);
			kha_Sys.gl.blendFunc(this.getBlendFunc(source),this.getBlendFunc(destination));
		}
	}
	,createVertexBuffer: function(vertexCount,structure,usage,canRead) {
		if(canRead == null) canRead = false;
		return new kha_graphics4_VertexBuffer(vertexCount,structure,usage);
	}
	,setVertexBuffer: function(vertexBuffer) {
		(js_Boot.__cast(vertexBuffer , kha_graphics4_VertexBuffer)).set();
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
			kha_Sys.gl.activeTexture(kha_Sys.gl.TEXTURE0 + (js_Boot.__cast(stage , kha_js_graphics4_TextureUnit)).value);
			kha_Sys.gl.bindTexture(kha_Sys.gl.TEXTURE_2D,null);
		} else (js_Boot.__cast(texture , kha_WebGLImage)).set((js_Boot.__cast(stage , kha_js_graphics4_TextureUnit)).value);
	}
	,setTextureParameters: function(texunit,uAddressing,vAddressing,minificationFilter,magnificationFilter,mipmapFilter) {
		kha_Sys.gl.activeTexture(kha_Sys.gl.TEXTURE0 + (js_Boot.__cast(texunit , kha_js_graphics4_TextureUnit)).value);
		switch(uAddressing[1]) {
		case 2:
			kha_Sys.gl.texParameteri(kha_Sys.gl.TEXTURE_2D,kha_Sys.gl.TEXTURE_WRAP_S,kha_Sys.gl.CLAMP_TO_EDGE);
			break;
		case 0:
			kha_Sys.gl.texParameteri(kha_Sys.gl.TEXTURE_2D,kha_Sys.gl.TEXTURE_WRAP_S,kha_Sys.gl.REPEAT);
			break;
		case 1:
			kha_Sys.gl.texParameteri(kha_Sys.gl.TEXTURE_2D,kha_Sys.gl.TEXTURE_WRAP_S,kha_Sys.gl.MIRRORED_REPEAT);
			break;
		}
		switch(vAddressing[1]) {
		case 2:
			kha_Sys.gl.texParameteri(kha_Sys.gl.TEXTURE_2D,kha_Sys.gl.TEXTURE_WRAP_T,kha_Sys.gl.CLAMP_TO_EDGE);
			break;
		case 0:
			kha_Sys.gl.texParameteri(kha_Sys.gl.TEXTURE_2D,kha_Sys.gl.TEXTURE_WRAP_T,kha_Sys.gl.REPEAT);
			break;
		case 1:
			kha_Sys.gl.texParameteri(kha_Sys.gl.TEXTURE_2D,kha_Sys.gl.TEXTURE_WRAP_T,kha_Sys.gl.MIRRORED_REPEAT);
			break;
		}
		switch(minificationFilter[1]) {
		case 0:
			switch(mipmapFilter[1]) {
			case 0:
				kha_Sys.gl.texParameteri(kha_Sys.gl.TEXTURE_2D,kha_Sys.gl.TEXTURE_MIN_FILTER,kha_Sys.gl.NEAREST);
				break;
			case 1:
				kha_Sys.gl.texParameteri(kha_Sys.gl.TEXTURE_2D,kha_Sys.gl.TEXTURE_MIN_FILTER,kha_Sys.gl.NEAREST_MIPMAP_NEAREST);
				break;
			case 2:
				kha_Sys.gl.texParameteri(kha_Sys.gl.TEXTURE_2D,kha_Sys.gl.TEXTURE_MIN_FILTER,kha_Sys.gl.NEAREST_MIPMAP_LINEAR);
				break;
			}
			break;
		case 1:case 2:
			switch(mipmapFilter[1]) {
			case 0:
				kha_Sys.gl.texParameteri(kha_Sys.gl.TEXTURE_2D,kha_Sys.gl.TEXTURE_MIN_FILTER,kha_Sys.gl.LINEAR);
				break;
			case 1:
				kha_Sys.gl.texParameteri(kha_Sys.gl.TEXTURE_2D,kha_Sys.gl.TEXTURE_MIN_FILTER,kha_Sys.gl.LINEAR_MIPMAP_NEAREST);
				break;
			case 2:
				kha_Sys.gl.texParameteri(kha_Sys.gl.TEXTURE_2D,kha_Sys.gl.TEXTURE_MIN_FILTER,kha_Sys.gl.LINEAR_MIPMAP_LINEAR);
				break;
			}
			break;
		}
		switch(magnificationFilter[1]) {
		case 0:
			kha_Sys.gl.texParameteri(kha_Sys.gl.TEXTURE_2D,kha_Sys.gl.TEXTURE_MAG_FILTER,kha_Sys.gl.NEAREST);
			break;
		case 1:case 2:
			kha_Sys.gl.texParameteri(kha_Sys.gl.TEXTURE_2D,kha_Sys.gl.TEXTURE_MAG_FILTER,kha_Sys.gl.LINEAR);
			break;
		}
	}
	,setCullMode: function(mode) {
		switch(mode[1]) {
		case 2:
			kha_Sys.gl.disable(kha_Sys.gl.CULL_FACE);
			break;
		case 0:
			kha_Sys.gl.enable(kha_Sys.gl.CULL_FACE);
			kha_Sys.gl.cullFace(kha_Sys.gl.FRONT);
			break;
		case 1:
			kha_Sys.gl.enable(kha_Sys.gl.CULL_FACE);
			kha_Sys.gl.cullFace(kha_Sys.gl.BACK);
			break;
		}
	}
	,setProgram: function(program) {
		program.set();
	}
	,setBool: function(location,value) {
		kha_Sys.gl.uniform1i((js_Boot.__cast(location , kha_js_graphics4_ConstantLocation)).value,value?1:0);
	}
	,setInt: function(location,value) {
		kha_Sys.gl.uniform1i((js_Boot.__cast(location , kha_js_graphics4_ConstantLocation)).value,value);
	}
	,setFloat: function(location,value) {
		kha_Sys.gl.uniform1f((js_Boot.__cast(location , kha_js_graphics4_ConstantLocation)).value,value);
	}
	,setFloat2: function(location,value1,value2) {
		kha_Sys.gl.uniform2f((js_Boot.__cast(location , kha_js_graphics4_ConstantLocation)).value,value1,value2);
	}
	,setFloat3: function(location,value1,value2,value3) {
		kha_Sys.gl.uniform3f((js_Boot.__cast(location , kha_js_graphics4_ConstantLocation)).value,value1,value2,value3);
	}
	,setFloat4: function(location,value1,value2,value3,value4) {
		kha_Sys.gl.uniform4f((js_Boot.__cast(location , kha_js_graphics4_ConstantLocation)).value,value1,value2,value3,value4);
	}
	,setFloats: function(location,values) {
		kha_Sys.gl.uniform1fv((js_Boot.__cast(location , kha_js_graphics4_ConstantLocation)).value,values);
	}
	,setVector2: function(location,value) {
		kha_Sys.gl.uniform2f((js_Boot.__cast(location , kha_js_graphics4_ConstantLocation)).value,value.x,value.y);
	}
	,setVector3: function(location,value) {
		kha_Sys.gl.uniform3f((js_Boot.__cast(location , kha_js_graphics4_ConstantLocation)).value,value.x,value.y,value.z);
	}
	,setVector4: function(location,value) {
		kha_Sys.gl.uniform4f((js_Boot.__cast(location , kha_js_graphics4_ConstantLocation)).value,value.get_x(),value.get_y(),value.get_z(),value.get_w());
	}
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
		kha_Sys.gl.uniformMatrix4fv((js_Boot.__cast(location , kha_js_graphics4_ConstantLocation)).value,false,this.matrixCache);
	}
	,drawIndexedVertices: function(start,count) {
		if(count == null) count = -1;
		if(start == null) start = 0;
		kha_Sys.gl.drawElements(kha_Sys.gl.TRIANGLES,count == -1?this.indicesCount:count,kha_Sys.gl.UNSIGNED_SHORT,start * 2);
	}
	,setStencilParameters: function(compareMode,bothPass,depthFail,stencilFail,referenceValue,readMask,writeMask) {
		if(writeMask == null) writeMask = 255;
		if(readMask == null) readMask = 255;
	}
	,setScissor: function(rect) {
	}
	,renderTargetsInvertedY: function() {
		return true;
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
		kha_Sys.gl.colorMask(true,true,true,true);
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
	__class__: kha_js_graphics4_TextureUnit
};
var kha_loader_Room = function(name) {
	this.name = name;
	this.assets = [];
	this.parent = null;
};
$hxClasses["kha.loader.Room"] = kha_loader_Room;
kha_loader_Room.__name__ = ["kha","loader","Room"];
kha_loader_Room.prototype = {
	__class__: kha_loader_Room
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
	__class__: kha_math_Matrix3
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
kha_math_Matrix4.translation = function(x,y,z) {
	return new kha_math_Matrix4(1,0,0,x,0,1,0,y,0,0,1,z,0,0,0,1);
};
kha_math_Matrix4.empty = function() {
	return new kha_math_Matrix4(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
};
kha_math_Matrix4.identity = function() {
	return new kha_math_Matrix4(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);
};
kha_math_Matrix4.scale = function(x,y,z) {
	return new kha_math_Matrix4(x,0,0,0,0,y,0,0,0,0,z,0,0,0,0,1);
};
kha_math_Matrix4.rotationX = function(alpha) {
	var ca = Math.cos(alpha);
	var sa = Math.sin(alpha);
	return new kha_math_Matrix4(1,0,0,0,0,ca,-sa,0,0,sa,ca,0,0,0,0,1);
};
kha_math_Matrix4.rotationY = function(alpha) {
	var ca = Math.cos(alpha);
	var sa = Math.sin(alpha);
	return new kha_math_Matrix4(ca,0,sa,0,0,1,0,0,-sa,0,ca,0,0,0,0,1);
};
kha_math_Matrix4.rotationZ = function(alpha) {
	var ca = Math.cos(alpha);
	var sa = Math.sin(alpha);
	return new kha_math_Matrix4(ca,-sa,0,0,sa,ca,0,0,0,0,1,0,0,0,0,1);
};
kha_math_Matrix4.rotation = function(yaw,pitch,roll) {
	var sy = Math.sin(yaw);
	var cy = Math.cos(yaw);
	var sx = Math.sin(pitch);
	var cx = Math.cos(pitch);
	var sz = Math.sin(roll);
	var cz = Math.cos(roll);
	return new kha_math_Matrix4(cx * cy,cx * sy * sz - sx * cz,cx * sy * cz + sx * sz,0,sx * cy,sx * sy * sz + cx * cz,sx * sy * cz - cx * sz,0,-sy,cy * sz,cy * cz,0,0,0,0,1);
};
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
	var zaxis = at.sub(eye);
	zaxis.normalize();
	var xaxis = zaxis.cross(up);
	xaxis.normalize();
	var yaxis = xaxis.cross(zaxis);
	return new kha_math_Matrix4(xaxis.x,xaxis.y,xaxis.z,-xaxis.dot(eye),yaxis.x,yaxis.y,yaxis.z,-yaxis.dot(eye),-zaxis.x,-zaxis.y,-zaxis.z,zaxis.dot(eye),0,0,0,1);
};
kha_math_Matrix4.prototype = {
	add: function(m) {
		return new kha_math_Matrix4(this._00 + m._00,this._10 + m._10,this._20 + m._20,this._30 + m._30,this._01 + m._01,this._11 + m._11,this._21 + m._21,this._31 + m._31,this._02 + m._02,this._12 + m._12,this._22 + m._22,this._32 + m._32,this._03 + m._03,this._13 + m._13,this._23 + m._23,this._33 + m._33);
	}
	,sub: function(m) {
		return new kha_math_Matrix4(this._00 - m._00,this._10 - m._10,this._20 - m._20,this._30 - m._30,this._01 - m._01,this._11 - m._11,this._21 - m._21,this._31 - m._31,this._02 - m._02,this._12 - m._12,this._22 - m._22,this._32 - m._32,this._03 - m._03,this._13 - m._13,this._23 - m._23,this._33 - m._33);
	}
	,mult: function(value) {
		return new kha_math_Matrix4(this._00 * value,this._10 * value,this._20 * value,this._30 * value,this._01 * value,this._11 * value,this._21 * value,this._31 * value,this._02 * value,this._12 * value,this._22 * value,this._32 * value,this._03 * value,this._13 * value,this._23 * value,this._33 * value);
	}
	,transpose: function() {
		return new kha_math_Matrix4(this._00,this._01,this._02,this._03,this._10,this._11,this._12,this._13,this._20,this._21,this._22,this._23,this._30,this._31,this._32,this._33);
	}
	,transpose3x3: function() {
		return new kha_math_Matrix4(this._00,this._01,this._02,this._30,this._10,this._11,this._12,this._31,this._20,this._21,this._22,this._32,this._03,this._13,this._23,this._33);
	}
	,trace: function() {
		return this._00 + this._11 + this._22 + this._33;
	}
	,multmat: function(m) {
		return new kha_math_Matrix4(this._00 * m._00 + this._10 * m._01 + this._20 * m._02 + this._30 * m._03,this._00 * m._10 + this._10 * m._11 + this._20 * m._12 + this._30 * m._13,this._00 * m._20 + this._10 * m._21 + this._20 * m._22 + this._30 * m._23,this._00 * m._30 + this._10 * m._31 + this._20 * m._32 + this._30 * m._33,this._01 * m._00 + this._11 * m._01 + this._21 * m._02 + this._31 * m._03,this._01 * m._10 + this._11 * m._11 + this._21 * m._12 + this._31 * m._13,this._01 * m._20 + this._11 * m._21 + this._21 * m._22 + this._31 * m._23,this._01 * m._30 + this._11 * m._31 + this._21 * m._32 + this._31 * m._33,this._02 * m._00 + this._12 * m._01 + this._22 * m._02 + this._32 * m._03,this._02 * m._10 + this._12 * m._11 + this._22 * m._12 + this._32 * m._13,this._02 * m._20 + this._12 * m._21 + this._22 * m._22 + this._32 * m._23,this._02 * m._30 + this._12 * m._31 + this._22 * m._32 + this._32 * m._33,this._03 * m._00 + this._13 * m._01 + this._23 * m._02 + this._33 * m._03,this._03 * m._10 + this._13 * m._11 + this._23 * m._12 + this._33 * m._13,this._03 * m._20 + this._13 * m._21 + this._23 * m._22 + this._33 * m._23,this._03 * m._30 + this._13 * m._31 + this._23 * m._32 + this._33 * m._33);
	}
	,multvec: function(value) {
		var product = new kha_math_Vector4();
		product.set_x(this._00 * value.get_x() + this._10 * value.get_y() + this._20 * value.get_z() + this._30 * value.get_w());
		product.set_y(this._01 * value.get_x() + this._11 * value.get_y() + this._21 * value.get_z() + this._31 * value.get_w());
		product.set_z(this._02 * value.get_x() + this._12 * value.get_y() + this._22 * value.get_z() + this._32 * value.get_w());
		product.set_w(this._03 * value.get_x() + this._13 * value.get_y() + this._23 * value.get_z() + this._33 * value.get_w());
		return product;
	}
	,determinant: function() {
		return this._00 * (this._11 * (this._22 * this._33 - this._32 * this._23) + this._21 * (this._32 * this._13 - this._12 * this._33) + this._31 * (this._12 * this._23 - this._22 * this._13)) - this._10 * (this._01 * (this._22 * this._33 - this._32 * this._23) + this._21 * (this._32 * this._03 - this._02 * this._33) + this._31 * (this._02 * this._23 - this._22 * this._03)) + this._20 * (this._01 * (this._12 * this._33 - this._32 * this._13) + this._11 * (this._32 * this._03 - this._02 * this._33) + this._31 * (this._02 * this._13 - this._12 * this._03)) - this._30 * (this._01 * (this._12 * this._23 - this._22 * this._13) + this._11 * (this._22 * this._03 - this._02 * this._23) + this._21 * (this._02 * this._13 - this._12 * this._03));
	}
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
	get_length: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
	,set_length: function(length) {
		if(this.get_length() == 0) return 0;
		var mul = length / this.get_length();
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
	get_length: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
	}
	,set_length: function(length) {
		if(this.get_length() == 0) return 0;
		var mul = length / this.get_length();
		this.x *= mul;
		this.y *= mul;
		this.z *= mul;
		return length;
	}
	,add: function(vec) {
		return new kha_math_Vector3(this.x + vec.x,this.y + vec.y,this.z + vec.z);
	}
	,sub: function(vec) {
		return new kha_math_Vector3(this.x - vec.x,this.y - vec.y,this.z - vec.z);
	}
	,mult: function(value) {
		return new kha_math_Vector3(this.x * value,this.y * value,this.z * value);
	}
	,dot: function(v) {
		return this.x * v.x + this.y * v.y + this.z * v.z;
	}
	,cross: function(v) {
		var _x = this.y * v.z - this.z * v.y;
		var _y = this.z * v.x - this.x * v.z;
		var _z = this.x * v.y - this.y * v.x;
		return new kha_math_Vector3(_x,_y,_z);
	}
	,normalize: function() {
		var l = 1 / this.get_length();
		this.x *= l;
		this.y *= l;
		this.z *= l;
	}
	,__class__: kha_math_Vector3
	,__properties__: {set_length:"set_length",get_length:"get_length"}
};
var kha_math_Vector4 = function(x,y,z,w) {
	if(w == null) w = 1;
	if(z == null) z = 0;
	if(y == null) y = 0;
	if(x == null) x = 0;
	this.values = [];
	this.values.push(x);
	this.values.push(y);
	this.values.push(z);
	this.values.push(w);
};
$hxClasses["kha.math.Vector4"] = kha_math_Vector4;
kha_math_Vector4.__name__ = ["kha","math","Vector4"];
kha_math_Vector4.prototype = {
	get: function(index) {
		return this.values[index];
	}
	,set: function(index,value) {
		this.values[index] = value;
	}
	,get_x: function() {
		return this.values[0];
	}
	,set_x: function(value) {
		return this.values[0] = value;
	}
	,get_y: function() {
		return this.values[1];
	}
	,set_y: function(value) {
		return this.values[1] = value;
	}
	,get_z: function() {
		return this.values[2];
	}
	,set_z: function(value) {
		return this.values[2] = value;
	}
	,get_w: function() {
		return this.values[3];
	}
	,set_w: function(value) {
		return this.values[3] = value;
	}
	,get_length: function() {
		return Math.sqrt(this.get_x() * this.get_x() + this.get_y() * this.get_y() + this.get_z() * this.get_z());
	}
	,set_length: function(length) {
		if(this.get_length() == 0) return 0;
		var mul = length / this.get_length();
		var _g = this;
		_g.set_x(_g.get_x() * mul);
		var _g1 = this;
		_g1.set_y(_g1.get_y() * mul);
		var _g2 = this;
		_g2.set_z(_g2.get_z() * mul);
		return length;
	}
	,add: function(vec) {
		return new kha_math_Vector4(this.get_x() + vec.get_x(),this.get_y() + vec.get_y(),this.get_z() + vec.get_z());
	}
	,sub: function(vec) {
		return new kha_math_Vector4(this.get_x() - vec.get_x(),this.get_y() - vec.get_y(),this.get_z() - vec.get_z());
	}
	,mult: function(value) {
		return new kha_math_Vector4(this.get_x() * value,this.get_y() * value,this.get_z() * value);
	}
	,__class__: kha_math_Vector4
	,__properties__: {set_length:"set_length",get_length:"get_length",set_w:"set_w",get_w:"get_w",set_z:"set_z",get_z:"get_z",set_y:"set_y",get_y:"get_y",set_x:"set_x",get_x:"get_x"}
};
var kha_network_Controller = function() { };
$hxClasses["kha.network.Controller"] = kha_network_Controller;
kha_network_Controller.__name__ = ["kha","network","Controller"];
kha_network_Controller.prototype = {
	__class__: kha_network_Controller
};
var motion_actuators_IGenericActuator = function() { };
$hxClasses["motion.actuators.IGenericActuator"] = motion_actuators_IGenericActuator;
motion_actuators_IGenericActuator.__name__ = ["motion","actuators","IGenericActuator"];
motion_actuators_IGenericActuator.prototype = {
	__class__: motion_actuators_IGenericActuator
};
var motion_actuators_GenericActuator = function(target,duration,properties) {
	this._autoVisible = true;
	this._delay = 0;
	this._reflect = false;
	this._repeat = 0;
	this._reverse = false;
	this._smartRotation = false;
	this._snapping = false;
	this.special = false;
	this.target = target;
	this.properties = properties;
	this.duration = duration;
	this._ease = motion_Actuate.defaultEase;
};
$hxClasses["motion.actuators.GenericActuator"] = motion_actuators_GenericActuator;
motion_actuators_GenericActuator.__name__ = ["motion","actuators","GenericActuator"];
motion_actuators_GenericActuator.__interfaces__ = [motion_actuators_IGenericActuator];
motion_actuators_GenericActuator.prototype = {
	apply: function() {
		var _g = 0;
		var _g1 = Reflect.fields(this.properties);
		while(_g < _g1.length) {
			var i = _g1[_g];
			++_g;
			if(Object.prototype.hasOwnProperty.call(this.target,i)) Reflect.setField(this.target,i,Reflect.field(this.properties,i)); else Reflect.setProperty(this.target,i,Reflect.field(this.properties,i));
		}
	}
	,autoVisible: function(value) {
		if(value == null) value = true;
		this._autoVisible = value;
		return this;
	}
	,callMethod: function(method,params) {
		return Reflect.callMethod(method,method,params);
	}
	,change: function() {
		if(this._onUpdate != null) this.callMethod(this._onUpdate,this._onUpdateParams);
	}
	,complete: function(sendEvent) {
		if(sendEvent == null) sendEvent = true;
		if(sendEvent) {
			this.change();
			if(this._onComplete != null) this.callMethod(this._onComplete,this._onCompleteParams);
		}
		motion_Actuate.unload(this);
	}
	,delay: function(duration) {
		this._delay = duration;
		return this;
	}
	,ease: function(easing) {
		this._ease = easing;
		return this;
	}
	,move: function() {
	}
	,onComplete: function(handler,parameters) {
		this._onComplete = handler;
		if(parameters == null) this._onCompleteParams = []; else this._onCompleteParams = parameters;
		if(this.duration == 0) this.complete();
		return this;
	}
	,onRepeat: function(handler,parameters) {
		this._onRepeat = handler;
		if(parameters == null) this._onRepeatParams = []; else this._onRepeatParams = parameters;
		return this;
	}
	,onUpdate: function(handler,parameters) {
		this._onUpdate = handler;
		if(parameters == null) this._onUpdateParams = []; else this._onUpdateParams = parameters;
		return this;
	}
	,pause: function() {
	}
	,reflect: function(value) {
		if(value == null) value = true;
		this._reflect = value;
		this.special = true;
		return this;
	}
	,repeat: function(times) {
		if(times == null) times = -1;
		this._repeat = times;
		return this;
	}
	,resume: function() {
	}
	,reverse: function(value) {
		if(value == null) value = true;
		this._reverse = value;
		this.special = true;
		return this;
	}
	,smartRotation: function(value) {
		if(value == null) value = true;
		this._smartRotation = value;
		this.special = true;
		return this;
	}
	,snapping: function(value) {
		if(value == null) value = true;
		this._snapping = value;
		this.special = true;
		return this;
	}
	,stop: function(properties,complete,sendEvent) {
	}
	,__class__: motion_actuators_GenericActuator
};
var motion_actuators_SimpleActuator = function(target,duration,properties) {
	this.active = true;
	this.propertyDetails = [];
	this.sendChange = false;
	this.paused = false;
	this.cacheVisible = false;
	this.initialized = false;
	this.setVisible = false;
	this.toggleVisible = false;
	this.startTime = haxe_Timer.stamp();
	motion_actuators_GenericActuator.call(this,target,duration,properties);
	if(!motion_actuators_SimpleActuator.addedEvent) {
		motion_actuators_SimpleActuator.addedEvent = true;
		kha_Scheduler.addFrameTask(motion_actuators_SimpleActuator.stage_onEnterFrame,1);
	}
};
$hxClasses["motion.actuators.SimpleActuator"] = motion_actuators_SimpleActuator;
motion_actuators_SimpleActuator.__name__ = ["motion","actuators","SimpleActuator"];
motion_actuators_SimpleActuator.stage_onEnterFrame = function() {
	var currentTime = haxe_Timer.stamp();
	var actuator;
	var j = 0;
	var cleanup = false;
	var _g1 = 0;
	var _g = motion_actuators_SimpleActuator.actuatorsLength;
	while(_g1 < _g) {
		var i = _g1++;
		actuator = motion_actuators_SimpleActuator.actuators[j];
		if(actuator.active) {
			if(currentTime > actuator.timeOffset) actuator.update(currentTime);
			j++;
		} else {
			motion_actuators_SimpleActuator.actuators.splice(j,1);
			--motion_actuators_SimpleActuator.actuatorsLength;
		}
	}
};
motion_actuators_SimpleActuator.__super__ = motion_actuators_GenericActuator;
motion_actuators_SimpleActuator.prototype = $extend(motion_actuators_GenericActuator.prototype,{
	autoVisible: function(value) {
		if(value == null) value = true;
		this._autoVisible = value;
		if(!value) {
			this.toggleVisible = false;
			if(this.setVisible) this.setField(this.target,"visible",this.cacheVisible);
		}
		return this;
	}
	,delay: function(duration) {
		this._delay = duration;
		this.timeOffset = this.startTime + duration;
		return this;
	}
	,getField: function(target,propertyName) {
		var value = null;
		if(Object.prototype.hasOwnProperty.call(target,propertyName)) value = Reflect.field(target,propertyName); else value = Reflect.getProperty(target,propertyName);
		return value;
	}
	,initialize: function() {
		var details;
		var start;
		var _g = 0;
		var _g1 = Reflect.fields(this.properties);
		while(_g < _g1.length) {
			var i = _g1[_g];
			++_g;
			var isField = true;
			if(Object.prototype.hasOwnProperty.call(this.target,i)) start = Reflect.field(this.target,i); else {
				isField = false;
				start = Reflect.getProperty(this.target,i);
			}
			details = new motion_actuators_PropertyDetails(this.target,i,start,Reflect.field(this.properties,i) - start,isField);
			this.propertyDetails.push(details);
		}
		this.detailsLength = this.propertyDetails.length;
		this.initialized = true;
	}
	,move: function() {
		this.toggleVisible = Object.prototype.hasOwnProperty.call(this.properties,"alpha") && Object.prototype.hasOwnProperty.call(this.properties,"visible");
		if(this.toggleVisible && this.properties.alpha != 0 && !this.getField(this.target,"visible")) {
			this.setVisible = true;
			this.cacheVisible = this.getField(this.target,"visible");
			this.setField(this.target,"visible",true);
		}
		this.timeOffset = this.startTime;
		motion_actuators_SimpleActuator.actuators.push(this);
		++motion_actuators_SimpleActuator.actuatorsLength;
	}
	,onUpdate: function(handler,parameters) {
		this._onUpdate = handler;
		if(parameters == null) this._onUpdateParams = []; else this._onUpdateParams = parameters;
		this.sendChange = true;
		return this;
	}
	,pause: function() {
		this.paused = true;
		this.pauseTime = haxe_Timer.stamp();
	}
	,resume: function() {
		if(this.paused) {
			this.paused = false;
			this.timeOffset += (haxe_Timer.stamp() - this.pauseTime) / 1000;
		}
	}
	,setField: function(target,propertyName,value) {
		if(Object.prototype.hasOwnProperty.call(target,propertyName)) target[propertyName] = value; else Reflect.setProperty(target,propertyName,value);
	}
	,setProperty: function(details,value) {
		if(details.isField) details.target[details.propertyName] = value; else Reflect.setProperty(details.target,details.propertyName,value);
	}
	,stop: function(properties,complete,sendEvent) {
		if(this.active) {
			if(properties == null) {
				this.active = false;
				if(complete) this.apply();
				this.complete(sendEvent);
				return;
			}
			var _g = 0;
			var _g1 = Reflect.fields(properties);
			while(_g < _g1.length) {
				var i = _g1[_g];
				++_g;
				if(Object.prototype.hasOwnProperty.call(this.properties,i)) {
					this.active = false;
					if(complete) this.apply();
					this.complete(sendEvent);
					return;
				}
			}
		}
	}
	,update: function(currentTime) {
		if(!this.paused) {
			var details;
			var easing;
			var i;
			var tweenPosition = (currentTime - this.timeOffset) / this.duration;
			if(tweenPosition > 1) tweenPosition = 1;
			if(!this.initialized) this.initialize();
			if(!this.special) {
				easing = this._ease.calculate(tweenPosition);
				var _g1 = 0;
				var _g = this.detailsLength;
				while(_g1 < _g) {
					var i1 = _g1++;
					details = this.propertyDetails[i1];
					this.setProperty(details,details.start + details.change * easing);
				}
			} else {
				if(!this._reverse) easing = this._ease.calculate(tweenPosition); else easing = this._ease.calculate(1 - tweenPosition);
				var endValue;
				var _g11 = 0;
				var _g2 = this.detailsLength;
				while(_g11 < _g2) {
					var i2 = _g11++;
					details = this.propertyDetails[i2];
					if(this._smartRotation && (details.propertyName == "rotation" || details.propertyName == "rotationX" || details.propertyName == "rotationY" || details.propertyName == "rotationZ")) {
						var rotation = details.change % 360;
						if(rotation > 180) rotation -= 360; else if(rotation < -180) rotation += 360;
						endValue = details.start + rotation * easing;
					} else endValue = details.start + details.change * easing;
					if(!this._snapping) {
						if(details.isField) details.target[details.propertyName] = endValue; else Reflect.setProperty(details.target,details.propertyName,endValue);
					} else this.setProperty(details,Math.round(endValue));
				}
			}
			if(tweenPosition == 1) {
				if(this._repeat == 0) {
					this.active = false;
					if(this.toggleVisible && this.getField(this.target,"alpha") == 0) this.setField(this.target,"visible",false);
					this.complete(true);
					return;
				} else {
					if(this._onRepeat != null) this.callMethod(this._onRepeat,this._onRepeatParams);
					if(this._reflect) this._reverse = !this._reverse;
					this.startTime = currentTime;
					this.timeOffset = this.startTime + this._delay;
					if(this._repeat > 0) this._repeat--;
				}
			}
			if(this.sendChange) this.change();
		}
	}
	,__class__: motion_actuators_SimpleActuator
});
var motion_easing_Expo = function() { };
$hxClasses["motion.easing.Expo"] = motion_easing_Expo;
motion_easing_Expo.__name__ = ["motion","easing","Expo"];
motion_easing_Expo.__properties__ = {get_easeOut:"get_easeOut",get_easeInOut:"get_easeInOut",get_easeIn:"get_easeIn"}
motion_easing_Expo.get_easeIn = function() {
	return new motion_easing_ExpoEaseIn();
};
motion_easing_Expo.get_easeInOut = function() {
	return new motion_easing_ExpoEaseInOut();
};
motion_easing_Expo.get_easeOut = function() {
	return new motion_easing_ExpoEaseOut();
};
var motion_easing_IEasing = function() { };
$hxClasses["motion.easing.IEasing"] = motion_easing_IEasing;
motion_easing_IEasing.__name__ = ["motion","easing","IEasing"];
motion_easing_IEasing.prototype = {
	__class__: motion_easing_IEasing
};
var motion_easing_ExpoEaseOut = function() {
};
$hxClasses["motion.easing.ExpoEaseOut"] = motion_easing_ExpoEaseOut;
motion_easing_ExpoEaseOut.__name__ = ["motion","easing","ExpoEaseOut"];
motion_easing_ExpoEaseOut.__interfaces__ = [motion_easing_IEasing];
motion_easing_ExpoEaseOut.prototype = {
	calculate: function(k) {
		if(k == 1) return 1; else return 1 - Math.pow(2,-10 * k);
	}
	,ease: function(t,b,c,d) {
		if(t == d) return b + c; else return c * (1 - Math.pow(2,-10 * t / d)) + b;
	}
	,__class__: motion_easing_ExpoEaseOut
};
var motion_Actuate = function() { };
$hxClasses["motion.Actuate"] = motion_Actuate;
motion_Actuate.__name__ = ["motion","Actuate"];
motion_Actuate.apply = function(target,properties,customActuator) {
	motion_Actuate.stop(target,properties);
	if(customActuator == null) customActuator = motion_Actuate.defaultActuator;
	var actuator = Type.createInstance(customActuator,[target,0,properties]);
	actuator.apply();
	return actuator;
};
motion_Actuate.getLibrary = function(target,allowCreation) {
	if(allowCreation == null) allowCreation = true;
	if(!motion_Actuate.targetLibraries.exists(target) && allowCreation) motion_Actuate.targetLibraries.set(target,[]);
	return motion_Actuate.targetLibraries.get(target);
};
motion_Actuate.motionPath = function(target,duration,properties,overwrite) {
	if(overwrite == null) overwrite = true;
	return motion_Actuate.tween(target,duration,properties,overwrite,motion_actuators_MotionPathActuator);
};
motion_Actuate.pause = function(target) {
	if(js_Boot.__instanceof(target,motion_actuators_GenericActuator)) (js_Boot.__cast(target , motion_actuators_GenericActuator)).pause(); else {
		var library = motion_Actuate.getLibrary(target,false);
		var _g = 0;
		while(_g < library.length) {
			var actuator = library[_g];
			++_g;
			actuator.pause();
		}
	}
};
motion_Actuate.pauseAll = function() {
	var $it0 = motion_Actuate.targetLibraries.iterator();
	while( $it0.hasNext() ) {
		var library = $it0.next();
		var _g = 0;
		while(_g < library.length) {
			var actuator = library[_g];
			++_g;
			actuator.pause();
		}
	}
};
motion_Actuate.reset = function() {
	var $it0 = motion_Actuate.targetLibraries.iterator();
	while( $it0.hasNext() ) {
		var library = $it0.next();
		var i = library.length - 1;
		while(i >= 0) {
			library[i].stop(null,false,false);
			i--;
		}
	}
	motion_Actuate.targetLibraries = new haxe_ds_ObjectMap();
};
motion_Actuate.resume = function(target) {
	if(js_Boot.__instanceof(target,motion_actuators_GenericActuator)) (js_Boot.__cast(target , motion_actuators_GenericActuator)).resume(); else {
		var library = motion_Actuate.getLibrary(target,false);
		var _g = 0;
		while(_g < library.length) {
			var actuator = library[_g];
			++_g;
			actuator.resume();
		}
	}
};
motion_Actuate.resumeAll = function() {
	var $it0 = motion_Actuate.targetLibraries.iterator();
	while( $it0.hasNext() ) {
		var library = $it0.next();
		var _g = 0;
		while(_g < library.length) {
			var actuator = library[_g];
			++_g;
			actuator.resume();
		}
	}
};
motion_Actuate.stop = function(target,properties,complete,sendEvent) {
	if(sendEvent == null) sendEvent = true;
	if(complete == null) complete = false;
	if(target != null) {
		if(js_Boot.__instanceof(target,motion_actuators_GenericActuator)) (js_Boot.__cast(target , motion_actuators_GenericActuator)).stop(null,complete,sendEvent); else {
			var library = motion_Actuate.getLibrary(target,false);
			if(library != null) {
				if(typeof(properties) == "string") {
					var temp = { };
					Reflect.setField(temp,properties,null);
					properties = temp;
				} else if((properties instanceof Array) && properties.__enum__ == null) {
					var temp1 = { };
					var _g = 0;
					var _g1;
					_g1 = js_Boot.__cast(properties , Array);
					while(_g < _g1.length) {
						var property = _g1[_g];
						++_g;
						Reflect.setField(temp1,property,null);
					}
					properties = temp1;
				}
				var i = library.length - 1;
				while(i >= 0) {
					library[i].stop(properties,complete,sendEvent);
					i--;
				}
			}
		}
	}
};
motion_Actuate.timer = function(duration,customActuator) {
	return motion_Actuate.tween(new motion__$Actuate_TweenTimer(0),duration,new motion__$Actuate_TweenTimer(1),false,customActuator);
};
motion_Actuate.tween = function(target,duration,properties,overwrite,customActuator) {
	if(overwrite == null) overwrite = true;
	if(target != null) {
		if(duration > 0) {
			if(customActuator == null) customActuator = motion_Actuate.defaultActuator;
			var actuator = Type.createInstance(customActuator,[target,duration,properties]);
			var library = motion_Actuate.getLibrary(actuator.target);
			if(overwrite) {
				var i = library.length - 1;
				while(i >= 0) {
					library[i].stop(actuator.properties,false,false);
					i--;
				}
			}
			library.push(actuator);
			actuator.move();
			return actuator;
		} else return motion_Actuate.apply(target,properties,customActuator);
	}
	return null;
};
motion_Actuate.unload = function(actuator) {
	var target = actuator.target;
	if(motion_Actuate.targetLibraries.h.__keys__[target.__id__] != null) {
		HxOverrides.remove(motion_Actuate.targetLibraries.h[target.__id__],actuator);
		if(motion_Actuate.targetLibraries.h[target.__id__].length == 0) motion_Actuate.targetLibraries.remove(target);
	}
};
motion_Actuate.update = function(target,duration,start,end,overwrite) {
	if(overwrite == null) overwrite = true;
	var properties = { start : start, end : end};
	return motion_Actuate.tween(target,duration,properties,overwrite,motion_actuators_MethodActuator);
};
var motion__$Actuate_TweenTimer = function(progress) {
	this.progress = progress;
};
$hxClasses["motion._Actuate.TweenTimer"] = motion__$Actuate_TweenTimer;
motion__$Actuate_TweenTimer.__name__ = ["motion","_Actuate","TweenTimer"];
motion__$Actuate_TweenTimer.prototype = {
	__class__: motion__$Actuate_TweenTimer
};
var motion_MotionPath = function() {
	this._x = new motion_ComponentPath();
	this._y = new motion_ComponentPath();
	this._rotation = null;
};
$hxClasses["motion.MotionPath"] = motion_MotionPath;
motion_MotionPath.__name__ = ["motion","MotionPath"];
motion_MotionPath.prototype = {
	bezier: function(x,y,controlX,controlY,strength) {
		if(strength == null) strength = 1;
		this._x.addPath(new motion_BezierPath(x,controlX,strength));
		this._y.addPath(new motion_BezierPath(y,controlY,strength));
		return this;
	}
	,line: function(x,y,strength) {
		if(strength == null) strength = 1;
		this._x.addPath(new motion_LinearPath(x,strength));
		this._y.addPath(new motion_LinearPath(y,strength));
		return this;
	}
	,get_rotation: function() {
		if(this._rotation == null) this._rotation = new motion_RotationPath(this._x,this._y);
		return this._rotation;
	}
	,get_x: function() {
		return this._x;
	}
	,get_y: function() {
		return this._y;
	}
	,__class__: motion_MotionPath
	,__properties__: {get_y:"get_y",get_x:"get_x",get_rotation:"get_rotation"}
};
var motion_IComponentPath = function() { };
$hxClasses["motion.IComponentPath"] = motion_IComponentPath;
motion_IComponentPath.__name__ = ["motion","IComponentPath"];
motion_IComponentPath.prototype = {
	__class__: motion_IComponentPath
	,__properties__: {get_end:"get_end"}
};
var motion_ComponentPath = function() {
	this.paths = [];
	this.start = 0;
	this.totalStrength = 0;
};
$hxClasses["motion.ComponentPath"] = motion_ComponentPath;
motion_ComponentPath.__name__ = ["motion","ComponentPath"];
motion_ComponentPath.__interfaces__ = [motion_IComponentPath];
motion_ComponentPath.prototype = {
	addPath: function(path) {
		this.paths.push(path);
		this.totalStrength += path.strength;
	}
	,calculate: function(k) {
		if(this.paths.length == 1) return this.paths[0].calculate(this.start,k); else {
			var ratio = k * this.totalStrength;
			var lastEnd = this.start;
			var _g = 0;
			var _g1 = this.paths;
			while(_g < _g1.length) {
				var path = _g1[_g];
				++_g;
				if(ratio > path.strength) {
					ratio -= path.strength;
					lastEnd = path.end;
				} else return path.calculate(lastEnd,ratio / path.strength);
			}
		}
		return 0;
	}
	,get_end: function() {
		if(this.paths.length > 0) {
			var path = this.paths[this.paths.length - 1];
			return path.end;
		} else return this.start;
	}
	,__class__: motion_ComponentPath
	,__properties__: {get_end:"get_end"}
};
var motion_BezierPath = function(end,control,strength) {
	this.end = end;
	this.control = control;
	this.strength = strength;
};
$hxClasses["motion.BezierPath"] = motion_BezierPath;
motion_BezierPath.__name__ = ["motion","BezierPath"];
motion_BezierPath.prototype = {
	calculate: function(start,k) {
		return (1 - k) * (1 - k) * start + 2 * (1 - k) * k * this.control + k * k * this.end;
	}
	,__class__: motion_BezierPath
};
var motion_LinearPath = function(end,strength) {
	motion_BezierPath.call(this,end,0,strength);
};
$hxClasses["motion.LinearPath"] = motion_LinearPath;
motion_LinearPath.__name__ = ["motion","LinearPath"];
motion_LinearPath.__super__ = motion_BezierPath;
motion_LinearPath.prototype = $extend(motion_BezierPath.prototype,{
	calculate: function(start,k) {
		return start + k * (this.end - start);
	}
	,__class__: motion_LinearPath
});
var motion_RotationPath = function(x,y) {
	this.step = 0.01;
	this._x = x;
	this._y = y;
	this.offset = 0;
	this.start = this.calculate(0.0);
};
$hxClasses["motion.RotationPath"] = motion_RotationPath;
motion_RotationPath.__name__ = ["motion","RotationPath"];
motion_RotationPath.__interfaces__ = [motion_IComponentPath];
motion_RotationPath.prototype = {
	calculate: function(k) {
		var dX = this._x.calculate(k) - this._x.calculate(k + this.step);
		var dY = this._y.calculate(k) - this._y.calculate(k + this.step);
		var angle = Math.atan2(dY,dX) * (180 / Math.PI);
		angle = (angle + this.offset) % 360;
		return angle;
	}
	,get_end: function() {
		return this.calculate(1.0);
	}
	,__class__: motion_RotationPath
	,__properties__: {get_end:"get_end"}
};
var motion_actuators_MethodActuator = function(target,duration,properties) {
	this.currentParameters = [];
	this.tweenProperties = { };
	motion_actuators_SimpleActuator.call(this,target,duration,properties);
	if(!Object.prototype.hasOwnProperty.call(properties,"start")) this.properties.start = [];
	if(!Object.prototype.hasOwnProperty.call(properties,"end")) this.properties.end = this.properties.start;
	var _g1 = 0;
	var _g = this.properties.start.length;
	while(_g1 < _g) {
		var i = _g1++;
		this.currentParameters.push(null);
	}
};
$hxClasses["motion.actuators.MethodActuator"] = motion_actuators_MethodActuator;
motion_actuators_MethodActuator.__name__ = ["motion","actuators","MethodActuator"];
motion_actuators_MethodActuator.__super__ = motion_actuators_SimpleActuator;
motion_actuators_MethodActuator.prototype = $extend(motion_actuators_SimpleActuator.prototype,{
	apply: function() {
		this.callMethod(this.target,this.properties.end);
	}
	,complete: function(sendEvent) {
		if(sendEvent == null) sendEvent = true;
		var _g1 = 0;
		var _g = this.properties.start.length;
		while(_g1 < _g) {
			var i = _g1++;
			this.currentParameters[i] = Reflect.field(this.tweenProperties,"param" + i);
		}
		this.callMethod(this.target,this.currentParameters);
		motion_actuators_SimpleActuator.prototype.complete.call(this,sendEvent);
	}
	,initialize: function() {
		var details;
		var propertyName;
		var start;
		var _g1 = 0;
		var _g = this.properties.start.length;
		while(_g1 < _g) {
			var i = _g1++;
			propertyName = "param" + i;
			start = this.properties.start[i];
			this.tweenProperties[propertyName] = start;
			if(typeof(start) == "number" || ((start | 0) === start)) {
				details = new motion_actuators_PropertyDetails(this.tweenProperties,propertyName,start,this.properties.end[i] - start);
				this.propertyDetails.push(details);
			}
		}
		this.detailsLength = this.propertyDetails.length;
		this.initialized = true;
	}
	,update: function(currentTime) {
		motion_actuators_SimpleActuator.prototype.update.call(this,currentTime);
		if(this.active) {
			var _g1 = 0;
			var _g = this.properties.start.length;
			while(_g1 < _g) {
				var i = _g1++;
				this.currentParameters[i] = Reflect.field(this.tweenProperties,"param" + i);
			}
			this.callMethod(this.target,this.currentParameters);
		}
	}
	,__class__: motion_actuators_MethodActuator
});
var motion_actuators_MotionPathActuator = function(target,duration,properties) {
	motion_actuators_SimpleActuator.call(this,target,duration,properties);
};
$hxClasses["motion.actuators.MotionPathActuator"] = motion_actuators_MotionPathActuator;
motion_actuators_MotionPathActuator.__name__ = ["motion","actuators","MotionPathActuator"];
motion_actuators_MotionPathActuator.__super__ = motion_actuators_SimpleActuator;
motion_actuators_MotionPathActuator.prototype = $extend(motion_actuators_SimpleActuator.prototype,{
	apply: function() {
		var _g = 0;
		var _g1 = Reflect.fields(this.properties);
		while(_g < _g1.length) {
			var propertyName = _g1[_g];
			++_g;
			if(Object.prototype.hasOwnProperty.call(this.target,propertyName)) Reflect.setField(this.target,propertyName,(js_Boot.__cast(Reflect.field(this.properties,propertyName) , motion_IComponentPath)).get_end()); else Reflect.setProperty(this.target,propertyName,(js_Boot.__cast(Reflect.field(this.properties,propertyName) , motion_IComponentPath)).get_end());
		}
	}
	,initialize: function() {
		var details;
		var path;
		var _g = 0;
		var _g1 = Reflect.fields(this.properties);
		while(_g < _g1.length) {
			var propertyName = _g1[_g];
			++_g;
			path = js_Boot.__cast(Reflect.field(this.properties,propertyName) , motion_IComponentPath);
			if(path != null) {
				var isField = true;
				if(Object.prototype.hasOwnProperty.call(this.target,propertyName)) path.start = Reflect.field(this.target,propertyName); else {
					isField = false;
					path.start = Reflect.getProperty(this.target,propertyName);
				}
				details = new motion_actuators_PropertyPathDetails(this.target,propertyName,path,isField);
				this.propertyDetails.push(details);
			}
		}
		this.detailsLength = this.propertyDetails.length;
		this.initialized = true;
	}
	,update: function(currentTime) {
		if(!this.paused) {
			var details;
			var easing;
			var tweenPosition = (currentTime - this.timeOffset) / this.duration;
			if(tweenPosition > 1) tweenPosition = 1;
			if(!this.initialized) this.initialize();
			if(!this.special) {
				easing = this._ease.calculate(tweenPosition);
				var _g = 0;
				var _g1 = this.propertyDetails;
				while(_g < _g1.length) {
					var details1 = _g1[_g];
					++_g;
					if(details1.isField) Reflect.setField(details1.target,details1.propertyName,(js_Boot.__cast(details1 , motion_actuators_PropertyPathDetails)).path.calculate(easing)); else Reflect.setProperty(details1.target,details1.propertyName,(js_Boot.__cast(details1 , motion_actuators_PropertyPathDetails)).path.calculate(easing));
				}
			} else {
				if(!this._reverse) easing = this._ease.calculate(tweenPosition); else easing = this._ease.calculate(1 - tweenPosition);
				var endValue;
				var _g2 = 0;
				var _g11 = this.propertyDetails;
				while(_g2 < _g11.length) {
					var details2 = _g11[_g2];
					++_g2;
					if(!this._snapping) {
						if(details2.isField) Reflect.setField(details2.target,details2.propertyName,(js_Boot.__cast(details2 , motion_actuators_PropertyPathDetails)).path.calculate(easing)); else Reflect.setProperty(details2.target,details2.propertyName,(js_Boot.__cast(details2 , motion_actuators_PropertyPathDetails)).path.calculate(easing));
					} else if(details2.isField) Reflect.setField(details2.target,details2.propertyName,Math.round((js_Boot.__cast(details2 , motion_actuators_PropertyPathDetails)).path.calculate(easing))); else Reflect.setProperty(details2.target,details2.propertyName,Math.round((js_Boot.__cast(details2 , motion_actuators_PropertyPathDetails)).path.calculate(easing)));
				}
			}
			if(tweenPosition == 1) {
				if(this._repeat == 0) {
					this.active = false;
					if(this.toggleVisible && this.getField(this.target,"alpha") == 0) this.setField(this.target,"visible",false);
					this.complete(true);
					return;
				} else {
					if(this._reflect) this._reverse = !this._reverse;
					this.startTime = currentTime;
					this.timeOffset = this.startTime + this._delay;
					if(this._repeat > 0) this._repeat--;
				}
			}
			if(this.sendChange) this.change();
		}
	}
	,__class__: motion_actuators_MotionPathActuator
});
var motion_actuators_PropertyDetails = function(target,propertyName,start,change,isField) {
	if(isField == null) isField = true;
	this.target = target;
	this.propertyName = propertyName;
	this.start = start;
	this.change = change;
	this.isField = isField;
};
$hxClasses["motion.actuators.PropertyDetails"] = motion_actuators_PropertyDetails;
motion_actuators_PropertyDetails.__name__ = ["motion","actuators","PropertyDetails"];
motion_actuators_PropertyDetails.prototype = {
	__class__: motion_actuators_PropertyDetails
};
var motion_actuators_PropertyPathDetails = function(target,propertyName,path,isField) {
	if(isField == null) isField = true;
	motion_actuators_PropertyDetails.call(this,target,propertyName,0,0,isField);
	this.path = path;
};
$hxClasses["motion.actuators.PropertyPathDetails"] = motion_actuators_PropertyPathDetails;
motion_actuators_PropertyPathDetails.__name__ = ["motion","actuators","PropertyPathDetails"];
motion_actuators_PropertyPathDetails.__super__ = motion_actuators_PropertyDetails;
motion_actuators_PropertyPathDetails.prototype = $extend(motion_actuators_PropertyDetails.prototype,{
	__class__: motion_actuators_PropertyPathDetails
});
var motion_easing_ExpoEaseIn = function() {
};
$hxClasses["motion.easing.ExpoEaseIn"] = motion_easing_ExpoEaseIn;
motion_easing_ExpoEaseIn.__name__ = ["motion","easing","ExpoEaseIn"];
motion_easing_ExpoEaseIn.__interfaces__ = [motion_easing_IEasing];
motion_easing_ExpoEaseIn.prototype = {
	calculate: function(k) {
		if(k == 0) return 0; else return Math.pow(2,10 * (k - 1));
	}
	,ease: function(t,b,c,d) {
		if(t == 0) return b; else return c * Math.pow(2,10 * (t / d - 1)) + b;
	}
	,__class__: motion_easing_ExpoEaseIn
};
var motion_easing_ExpoEaseInOut = function() {
};
$hxClasses["motion.easing.ExpoEaseInOut"] = motion_easing_ExpoEaseInOut;
motion_easing_ExpoEaseInOut.__name__ = ["motion","easing","ExpoEaseInOut"];
motion_easing_ExpoEaseInOut.__interfaces__ = [motion_easing_IEasing];
motion_easing_ExpoEaseInOut.prototype = {
	calculate: function(k) {
		if(k == 0) return 0;
		if(k == 1) return 1;
		if((k /= 0.5) < 1.0) return 0.5 * Math.pow(2,10 * (k - 1));
		return 0.5 * (2 - Math.pow(2,-10 * --k));
	}
	,ease: function(t,b,c,d) {
		if(t == 0) return b;
		if(t == d) return b + c;
		if((t /= d / 2.0) < 1.0) return c / 2 * Math.pow(2,10 * (t - 1)) + b;
		return c / 2 * (2 - Math.pow(2,-10 * --t)) + b;
	}
	,__class__: motion_easing_ExpoEaseInOut
};
var msignal_Signal = function(valueClasses) {
	if(valueClasses == null) valueClasses = [];
	this.valueClasses = valueClasses;
	this.slots = msignal_SlotList.NIL;
	this.priorityBased = false;
};
$hxClasses["msignal.Signal"] = msignal_Signal;
msignal_Signal.__name__ = ["msignal","Signal"];
msignal_Signal.prototype = {
	add: function(listener) {
		return this.registerListener(listener);
	}
	,addOnce: function(listener) {
		return this.registerListener(listener,true);
	}
	,addWithPriority: function(listener,priority) {
		if(priority == null) priority = 0;
		return this.registerListener(listener,false,priority);
	}
	,addOnceWithPriority: function(listener,priority) {
		if(priority == null) priority = 0;
		return this.registerListener(listener,true,priority);
	}
	,remove: function(listener) {
		var slot = this.slots.find(listener);
		if(slot == null) return null;
		this.slots = this.slots.filterNot(listener);
		return slot;
	}
	,removeAll: function() {
		this.slots = msignal_SlotList.NIL;
	}
	,registerListener: function(listener,once,priority) {
		if(priority == null) priority = 0;
		if(once == null) once = false;
		if(this.registrationPossible(listener,once)) {
			var newSlot = this.createSlot(listener,once,priority);
			if(!this.priorityBased && priority != 0) this.priorityBased = true;
			if(!this.priorityBased && priority == 0) this.slots = this.slots.prepend(newSlot); else this.slots = this.slots.insertWithPriority(newSlot);
			return newSlot;
		}
		return this.slots.find(listener);
	}
	,registrationPossible: function(listener,once) {
		if(!this.slots.nonEmpty) return true;
		var existingSlot = this.slots.find(listener);
		if(existingSlot == null) return true;
		return false;
	}
	,createSlot: function(listener,once,priority) {
		if(priority == null) priority = 0;
		if(once == null) once = false;
		return null;
	}
	,get_numListeners: function() {
		return this.slots.get_length();
	}
	,__class__: msignal_Signal
	,__properties__: {get_numListeners:"get_numListeners"}
};
var msignal_Signal0 = function() {
	msignal_Signal.call(this);
};
$hxClasses["msignal.Signal0"] = msignal_Signal0;
msignal_Signal0.__name__ = ["msignal","Signal0"];
msignal_Signal0.__super__ = msignal_Signal;
msignal_Signal0.prototype = $extend(msignal_Signal.prototype,{
	dispatch: function() {
		var slotsToProcess = this.slots;
		while(slotsToProcess.nonEmpty) {
			slotsToProcess.head.execute();
			slotsToProcess = slotsToProcess.tail;
		}
	}
	,createSlot: function(listener,once,priority) {
		if(priority == null) priority = 0;
		if(once == null) once = false;
		return new msignal_Slot0(this,listener,once,priority);
	}
	,__class__: msignal_Signal0
});
var msignal_Signal1 = function(type) {
	msignal_Signal.call(this,[type]);
};
$hxClasses["msignal.Signal1"] = msignal_Signal1;
msignal_Signal1.__name__ = ["msignal","Signal1"];
msignal_Signal1.__super__ = msignal_Signal;
msignal_Signal1.prototype = $extend(msignal_Signal.prototype,{
	dispatch: function(value) {
		var slotsToProcess = this.slots;
		while(slotsToProcess.nonEmpty) {
			slotsToProcess.head.execute(value);
			slotsToProcess = slotsToProcess.tail;
		}
	}
	,createSlot: function(listener,once,priority) {
		if(priority == null) priority = 0;
		if(once == null) once = false;
		return new msignal_Slot1(this,listener,once,priority);
	}
	,__class__: msignal_Signal1
});
var msignal_Signal2 = function(type1,type2) {
	msignal_Signal.call(this,[type1,type2]);
};
$hxClasses["msignal.Signal2"] = msignal_Signal2;
msignal_Signal2.__name__ = ["msignal","Signal2"];
msignal_Signal2.__super__ = msignal_Signal;
msignal_Signal2.prototype = $extend(msignal_Signal.prototype,{
	dispatch: function(value1,value2) {
		var slotsToProcess = this.slots;
		while(slotsToProcess.nonEmpty) {
			slotsToProcess.head.execute(value1,value2);
			slotsToProcess = slotsToProcess.tail;
		}
	}
	,createSlot: function(listener,once,priority) {
		if(priority == null) priority = 0;
		if(once == null) once = false;
		return new msignal_Slot2(this,listener,once,priority);
	}
	,__class__: msignal_Signal2
});
var msignal_Slot = function(signal,listener,once,priority) {
	if(priority == null) priority = 0;
	if(once == null) once = false;
	this.signal = signal;
	this.set_listener(listener);
	this.once = once;
	this.priority = priority;
	this.enabled = true;
};
$hxClasses["msignal.Slot"] = msignal_Slot;
msignal_Slot.__name__ = ["msignal","Slot"];
msignal_Slot.prototype = {
	remove: function() {
		this.signal.remove(this.listener);
	}
	,set_listener: function(value) {
		return this.listener = value;
	}
	,__class__: msignal_Slot
	,__properties__: {set_listener:"set_listener"}
};
var msignal_Slot0 = function(signal,listener,once,priority) {
	if(priority == null) priority = 0;
	if(once == null) once = false;
	msignal_Slot.call(this,signal,listener,once,priority);
};
$hxClasses["msignal.Slot0"] = msignal_Slot0;
msignal_Slot0.__name__ = ["msignal","Slot0"];
msignal_Slot0.__super__ = msignal_Slot;
msignal_Slot0.prototype = $extend(msignal_Slot.prototype,{
	execute: function() {
		if(!this.enabled) return;
		if(this.once) this.remove();
		this.listener();
	}
	,__class__: msignal_Slot0
});
var msignal_Slot1 = function(signal,listener,once,priority) {
	if(priority == null) priority = 0;
	if(once == null) once = false;
	msignal_Slot.call(this,signal,listener,once,priority);
};
$hxClasses["msignal.Slot1"] = msignal_Slot1;
msignal_Slot1.__name__ = ["msignal","Slot1"];
msignal_Slot1.__super__ = msignal_Slot;
msignal_Slot1.prototype = $extend(msignal_Slot.prototype,{
	execute: function(value1) {
		if(!this.enabled) return;
		if(this.once) this.remove();
		if(this.param != null) value1 = this.param;
		this.listener(value1);
	}
	,__class__: msignal_Slot1
});
var msignal_Slot2 = function(signal,listener,once,priority) {
	if(priority == null) priority = 0;
	if(once == null) once = false;
	msignal_Slot.call(this,signal,listener,once,priority);
};
$hxClasses["msignal.Slot2"] = msignal_Slot2;
msignal_Slot2.__name__ = ["msignal","Slot2"];
msignal_Slot2.__super__ = msignal_Slot;
msignal_Slot2.prototype = $extend(msignal_Slot.prototype,{
	execute: function(value1,value2) {
		if(!this.enabled) return;
		if(this.once) this.remove();
		if(this.param1 != null) value1 = this.param1;
		if(this.param2 != null) value2 = this.param2;
		this.listener(value1,value2);
	}
	,__class__: msignal_Slot2
});
var msignal_SlotList = function(head,tail) {
	this.nonEmpty = false;
	if(head == null && tail == null) this.nonEmpty = false; else if(head == null) {
	} else {
		this.head = head;
		if(tail == null) this.tail = msignal_SlotList.NIL; else this.tail = tail;
		this.nonEmpty = true;
	}
};
$hxClasses["msignal.SlotList"] = msignal_SlotList;
msignal_SlotList.__name__ = ["msignal","SlotList"];
msignal_SlotList.prototype = {
	get_length: function() {
		if(!this.nonEmpty) return 0;
		if(this.tail == msignal_SlotList.NIL) return 1;
		var result = 0;
		var p = this;
		while(p.nonEmpty) {
			++result;
			p = p.tail;
		}
		return result;
	}
	,prepend: function(slot) {
		return new msignal_SlotList(slot,this);
	}
	,append: function(slot) {
		if(slot == null) return this;
		if(!this.nonEmpty) return new msignal_SlotList(slot);
		if(this.tail == msignal_SlotList.NIL) return new msignal_SlotList(slot).prepend(this.head);
		var wholeClone = new msignal_SlotList(this.head);
		var subClone = wholeClone;
		var current = this.tail;
		while(current.nonEmpty) {
			subClone = subClone.tail = new msignal_SlotList(current.head);
			current = current.tail;
		}
		subClone.tail = new msignal_SlotList(slot);
		return wholeClone;
	}
	,insertWithPriority: function(slot) {
		if(!this.nonEmpty) return new msignal_SlotList(slot);
		var priority = slot.priority;
		if(priority >= this.head.priority) return this.prepend(slot);
		var wholeClone = new msignal_SlotList(this.head);
		var subClone = wholeClone;
		var current = this.tail;
		while(current.nonEmpty) {
			if(priority > current.head.priority) {
				subClone.tail = current.prepend(slot);
				return wholeClone;
			}
			subClone = subClone.tail = new msignal_SlotList(current.head);
			current = current.tail;
		}
		subClone.tail = new msignal_SlotList(slot);
		return wholeClone;
	}
	,filterNot: function(listener) {
		if(!this.nonEmpty || listener == null) return this;
		if(Reflect.compareMethods(this.head.listener,listener)) return this.tail;
		var wholeClone = new msignal_SlotList(this.head);
		var subClone = wholeClone;
		var current = this.tail;
		while(current.nonEmpty) {
			if(Reflect.compareMethods(current.head.listener,listener)) {
				subClone.tail = current.tail;
				return wholeClone;
			}
			subClone = subClone.tail = new msignal_SlotList(current.head);
			current = current.tail;
		}
		return this;
	}
	,contains: function(listener) {
		if(!this.nonEmpty) return false;
		var p = this;
		while(p.nonEmpty) {
			if(Reflect.compareMethods(p.head.listener,listener)) return true;
			p = p.tail;
		}
		return false;
	}
	,find: function(listener) {
		if(!this.nonEmpty) return null;
		var p = this;
		while(p.nonEmpty) {
			if(Reflect.compareMethods(p.head.listener,listener)) return p.head;
			p = p.tail;
		}
		return null;
	}
	,__class__: msignal_SlotList
	,__properties__: {get_length:"get_length"}
};
var zblend_core_Trait = function() {
	this.name = "";
	composure_traits_AbstractTrait.call(this);
};
$hxClasses["zblend.core.Trait"] = zblend_core_Trait;
zblend_core_Trait.__name__ = ["zblend","core","Trait"];
zblend_core_Trait.__super__ = composure_traits_AbstractTrait;
zblend_core_Trait.prototype = $extend(composure_traits_AbstractTrait.prototype,{
	get_owner: function() {
		return js_Boot.__cast(this.item , zblend_core_Object);
	}
	,__class__: zblend_core_Trait
	,__properties__: $extend(composure_traits_AbstractTrait.prototype.__properties__,{get_owner:"get_owner"})
});
var zblend_core_IUpdateable = function() { };
$hxClasses["zblend.core.IUpdateable"] = zblend_core_IUpdateable;
zblend_core_IUpdateable.__name__ = ["zblend","core","IUpdateable"];
zblend_core_IUpdateable.prototype = {
	__class__: zblend_core_IUpdateable
};
var my_$project_CameraController = function() {
	this.rightPressed = false;
	this.leftPressed = false;
	this.downPressed = false;
	this.upPressed = false;
	this.moveComplete = true;
	this.posLast = 0.0;
	this.rotLast = 0.0;
	this.posCurrent = 0.0;
	this.rotCurrent = 0.0;
	this.dir = 0;
	this.posY = 1;
	this.posX = 1;
	zblend_core_Trait.call(this);
	kha_input_Keyboard.get().notify($bind(this,this.onKeyDown),$bind(this,this.onKeyUp));
	zblend_Root.gameScene.registerInit($bind(this,this.init));
	this.addInjector(new composure_injectors_PropInjector(zblend_trait_Camera,this,"camera",true,false,false,false,false));
	this.addInjector(new composure_injectors_PropInjector(zblend_trait_Transform,this,"transform",true,false,false,false,false));
};
$hxClasses["my_project.CameraController"] = my_$project_CameraController;
my_$project_CameraController.__name__ = ["my_project","CameraController"];
my_$project_CameraController.__interfaces__ = [zblend_core_IUpdateable];
my_$project_CameraController.__super__ = zblend_core_Trait;
my_$project_CameraController.prototype = $extend(zblend_core_Trait.prototype,{
	init: function() {
		this.maze = zblend_Root.root.getChild("Maze").getTrait(my_$project_MazeGenerator);
		this.camera.transform.set_x(this.maze.getWorldX(this.posX));
		this.camera.transform.set_y(this.maze.getWorldY(this.posY));
		this.camera.transform.dirty = true;
		this.camera.transform.update();
		this.camera.updateMatrix();
	}
	,update: function() {
		var rotDif = this.rotCurrent - this.rotLast;
		var posDif = this.posCurrent - this.posLast;
		this.rotLast = this.rotCurrent;
		this.posLast = this.posCurrent;
		if(rotDif != 0) this.camera.roll(rotDif);
		if(posDif != 0) this.camera.moveForward(posDif);
		if(this.upPressed) this.move(1); else if(this.downPressed) this.move(-1);
		if(this.leftPressed) this.turn(1); else if(this.rightPressed) this.turn(-1);
	}
	,move: function(dist) {
		var _g = this;
		if(!this.moveComplete) return;
		var targetX = this.posX;
		var targetY = this.posY;
		if(this.dir == 1) targetX += dist; else if(this.dir == 2) targetY -= dist; else if(this.dir == 3) targetX -= dist; else targetY += dist;
		if(!this.maze.isWall(targetX,targetY)) {
			this.moveComplete = false;
			this.posCurrent = 0;
			this.posLast = 0;
			this.posX = targetX;
			this.posY = targetY;
			motion_Actuate.tween(this,0.15,{ posCurrent : my_$project_MazeGenerator.tileSize * dist}).onComplete(function() {
				_g.moveComplete = true;
			});
		}
	}
	,turn: function(sign) {
		var _g = this;
		if(!this.moveComplete) return;
		this.moveComplete = false;
		this.rotCurrent = 0;
		this.rotLast = 0;
		this.dir -= sign;
		if(this.dir < 0) this.dir = 3; else if(this.dir > 3) this.dir = 0;
		motion_Actuate.tween(this,0.2,{ rotCurrent : 0.0174532925199432955 * (90 * sign)}).onComplete(function() {
			_g.moveComplete = true;
		});
	}
	,onKeyDown: function(key,$char) {
		if(key == kha_Key.UP) this.upPressed = true; else if(key == kha_Key.DOWN) this.downPressed = true; else if(key == kha_Key.LEFT) this.leftPressed = true; else if(key == kha_Key.RIGHT) this.rightPressed = true;
	}
	,onKeyUp: function(key,$char) {
		if(key == kha_Key.UP) this.upPressed = false; else if(key == kha_Key.DOWN) this.downPressed = false; else if(key == kha_Key.LEFT) this.leftPressed = false; else if(key == kha_Key.RIGHT) this.rightPressed = false;
	}
	,__class__: my_$project_CameraController
});
var my_$project_MazeGenerator = function(mazeWidth,mazeHeight) {
	if(mazeHeight == null) mazeHeight = 25;
	if(mazeWidth == null) mazeWidth = 25;
	this.posY = 1;
	this.posX = 1;
	zblend_core_Trait.call(this);
	this.mazeWidth = mazeWidth;
	this.mazeHeight = mazeHeight;
	this.maze = [];
	var _g = 0;
	while(_g < mazeHeight) {
		var i = _g++;
		this.maze.push([]);
		var _g1 = 0;
		while(_g1 < mazeWidth) {
			var j = _g1++;
			this.maze[i].push(1);
		}
	}
	this.maze[this.posX][this.posY] = 0;
	this.moves = [];
	this.moves.push(this.posY + this.posY * mazeWidth);
	this.generateMaze();
	zblend_Root.gameScene.registerInit($bind(this,this.init));
};
$hxClasses["my_project.MazeGenerator"] = my_$project_MazeGenerator;
my_$project_MazeGenerator.__name__ = ["my_project","MazeGenerator"];
my_$project_MazeGenerator.__super__ = zblend_core_Trait;
my_$project_MazeGenerator.prototype = $extend(zblend_core_Trait.prototype,{
	generateMaze: function() {
		if(this.moves.length > 0) {
			var possibleDirections = [];
			if(this.posX + 2 > 0 && this.posX + 2 < this.mazeHeight - 1 && this.maze[this.posX + 2][this.posY] == 1) possibleDirections.push("S");
			if(this.posX - 2 > 0 && this.posX - 2 < this.mazeHeight - 1 && this.maze[this.posX - 2][this.posY] == 1) possibleDirections.push("N");
			if(this.posY - 2 > 0 && this.posY - 2 < this.mazeWidth - 1 && this.maze[this.posX][this.posY - 2] == 1) possibleDirections.push("W");
			if(this.posY + 2 > 0 && this.posY + 2 < this.mazeWidth - 1 && this.maze[this.posX][this.posY + 2] == 1) possibleDirections.push("E");
			if(possibleDirections.length > 0) {
				var move = Std.random(possibleDirections.length);
				var _g = possibleDirections[move];
				switch(_g) {
				case "N":
					this.maze[this.posX - 2][this.posY] = 0;
					this.maze[this.posX - 1][this.posY] = 0;
					this.posX -= 2;
					break;
				case "S":
					this.maze[this.posX + 2][this.posY] = 0;
					this.maze[this.posX + 1][this.posY] = 0;
					this.posX += 2;
					break;
				case "W":
					this.maze[this.posX][this.posY - 2] = 0;
					this.maze[this.posX][this.posY - 1] = 0;
					this.posY -= 2;
					break;
				case "E":
					this.maze[this.posX][this.posY + 2] = 0;
					this.maze[this.posX][this.posY + 1] = 0;
					this.posY += 2;
					break;
				}
				this.moves.push(this.posY + this.posX * this.mazeWidth);
			} else {
				var back = this.moves.pop();
				this.posX = back / this.mazeWidth | 0;
				this.posY = back % this.mazeWidth;
			}
			this.generateMaze();
		}
	}
	,init: function() {
		var scene = zblend_Root.gameScene;
		var node = scene.sceneData.getNode("Cube");
		var _g1 = 0;
		var _g = this.mazeHeight;
		while(_g1 < _g) {
			var i = _g1++;
			var _g3 = 0;
			var _g2 = this.mazeWidth;
			while(_g3 < _g2) {
				var j = _g3++;
				if(this.maze[i][j] == 1) {
					var o = scene.createNode(node,null);
					o.transform.set_x(this.getWorldX(j));
					o.transform.set_y(this.getWorldY(i));
					(js_Boot.__cast(this.item , zblend_core_Object)).addChild(o);
				}
			}
		}
	}
	,isWall: function(x,y) {
		if(x < 0 || x > this.mazeWidth - 1 || y < 0 || y > this.mazeHeight - 1) return true;
		if(this.maze[y][x] == 1) return true; else return false;
	}
	,getWorldX: function(x) {
		return x * my_$project_MazeGenerator.tileSize - (this.mazeWidth - 1) * my_$project_MazeGenerator.tileSize / 2;
	}
	,getWorldY: function(y) {
		return y * my_$project_MazeGenerator.tileSize - (this.mazeHeight - 1) * my_$project_MazeGenerator.tileSize / 2;
	}
	,__class__: my_$project_MazeGenerator
});
var org_tbyrne_collections_UniqueList = function(list) {
	this._length = 0;
	this.list = new haxe_ds_GenericStack();
	if(list != null) {
		var $it0 = $iterator(list)();
		while( $it0.hasNext() ) {
			var item = $it0.next();
			this.add(item);
		}
	}
};
$hxClasses["org.tbyrne.collections.UniqueList"] = org_tbyrne_collections_UniqueList;
org_tbyrne_collections_UniqueList.__name__ = ["org","tbyrne","collections","UniqueList"];
org_tbyrne_collections_UniqueList.prototype = {
	iterator: function() {
		return this.list.iterator();
	}
	,get_length: function() {
		return this._length;
	}
	,first: function() {
		return this.list.first();
	}
	,add: function(value) {
		if(!this.containsItem(value)) {
			++this._length;
			this.list.add(value);
			return true;
		}
		return false;
	}
	,containsItem: function(value) {
		return Lambda.exists(this.list,function(item) {
			return value == item;
		});
	}
	,remove: function(value) {
		if(this.list.remove(value)) {
			--this._length;
			return true;
		} else return false;
	}
	,clear: function() {
		this.list = new haxe_ds_GenericStack();
		this._length = 0;
	}
	,__class__: org_tbyrne_collections_UniqueList
	,__properties__: {get_length:"get_length"}
};
var org_tbyrne_logging_LogMsg = function(message,types,title,id) {
	this.message = message;
	this.types = types;
	this.title = title;
	this.id = id;
};
$hxClasses["org.tbyrne.logging.LogMsg"] = org_tbyrne_logging_LogMsg;
org_tbyrne_logging_LogMsg.__name__ = ["org","tbyrne","logging","LogMsg"];
org_tbyrne_logging_LogMsg.prototype = {
	toString: function() {
		var ret = "";
		if(this.types != null && this.types.length > 0) ret += "[" + this.types.join(", ") + "] ";
		if(this.title != null && this.title.length > 0) ret += this.title + ": ";
		if(this.message != null && this.message.length > 0) ret += this.message;
		return ret;
	}
	,__class__: org_tbyrne_logging_LogMsg
};
var org_tbyrne_logging_LogType = function() { };
$hxClasses["org.tbyrne.logging.LogType"] = org_tbyrne_logging_LogType;
org_tbyrne_logging_LogType.__name__ = ["org","tbyrne","logging","LogType"];
var zblend_Root = function(name,room,game) {
	kha_Game.call(this,name);
	this.game = game;
	this.room = room;
};
$hxClasses["zblend.Root"] = zblend_Root;
zblend_Root.__name__ = ["zblend","Root"];
zblend_Root.registerInit = function(cb) {
	zblend_Root.gameScene.registerInit(cb);
};
zblend_Root.addChild = function(item) {
	zblend_Root.root.addChild(item);
};
zblend_Root.removeChild = function(item) {
	zblend_Root.root.removeChild(item);
};
zblend_Root.getChild = function(name) {
	return zblend_Root.root.getChild(name);
};
zblend_Root.reset = function() {
	zblend_Root.root.removeAllItem();
	zblend_trait_Input.reset();
	motion_Actuate.reset();
};
zblend_Root.setScene = function(name) {
	zblend_Root.root.removeAllItem();
	zblend_trait_Input.reset();
	motion_Actuate.reset();
	var scene = new zblend_core_Object();
	zblend_Root.root.addChild(scene);
	zblend_Root.gameScene = new zblend_trait_GameScene(kha_Loader.the.getBlob(name).toString());
	scene.addTrait(zblend_Root.gameScene);
	zblend_Root.currentScene = scene;
};
zblend_Root.addScene = function(name) {
	return zblend_Root.gameScene.addScene(kha_Loader.the.getBlob(name).toString());
};
zblend_Root.__super__ = kha_Game;
zblend_Root.prototype = $extend(kha_Game.prototype,{
	init: function() {
		kha_Configuration.setScreen(new kha_LoadingScreen());
		kha_Loader.the.loadRoom(this.room,$bind(this,this.loadingFinished));
	}
	,loadingFinished: function() {
		zblend_Root.w = this.width;
		zblend_Root.h = this.height;
		zblend_Root.gameData = JSON.parse(kha_Loader.the.getBlob("data").toString());
		new zblend_sys_Time();
		new zblend_sys_Storage();
		zblend_Root.root = new zblend_core_Object();
		zblend_Root.frameUpdater = new zblend_core_FrameUpdater();
		zblend_Root.root.addTrait(zblend_Root.frameUpdater);
		zblend_Root.frameRenderer = new zblend_core_FrameRenderer();
		zblend_Root.root.addTrait(zblend_Root.frameRenderer);
		zblend_Root.frameRenderer2D = new zblend_core_FrameRenderer2D();
		zblend_Root.root.addTrait(zblend_Root.frameRenderer2D);
		kha_Configuration.setScreen(this);
		if(kha_Sys.screenRotation == kha_ScreenRotation.RotationNone) kha_input_Mouse.get().notify($bind(this,this.downListener),$bind(this,this.upListener),$bind(this,this.moveListener),null); else kha_input_Surface.get().notify($bind(this,this.touchStartListener),$bind(this,this.touchEndListener),$bind(this,this.touchMoveListener));
		this.initShaders();
		Type.createInstance(this.game,[]);
	}
	,initShaders: function() {
		var struct = new zblend_sys_material_VertexStructure();
		struct.addFloat3("pos");
		struct.addFloat2("tex");
		struct.addFloat3("nor");
		struct.addFloat4("col");
		var shader = new zblend_sys_material_Shader("mesh.frag","mesh.vert",struct);
		shader.addConstant("M");
		shader.addConstant("V");
		shader.addConstant("P");
		shader.addConstant("dbMVP");
		shader.addConstant("color");
		shader.addConstant("light");
		shader.addConstant("eye");
		shader.addConstant("surface_color");
		shader.addConstant("diffuse_color");
		shader.addConstant("texturing");
		shader.addConstant("lighting");
		shader.addConstant("receiveShadow");
		shader.addConstant("roughness");
		shader.addTexture("stex");
		shader.addTexture("shadowMap");
		zblend_sys_Assets.shaders.set("shader",shader);
	}
	,update: function() {
		zblend_Root.frameUpdater.update();
		zblend_sys_Time.delta = kha_Scheduler.time() - zblend_sys_Time.last;
		zblend_sys_Time.last = kha_Scheduler.time();
		zblend_trait_Input.update();
	}
	,render: function(frame) {
		zblend_Root.frameRenderer.begin(frame.get_g4());
		zblend_Root.frameRenderer.render(frame.get_g4());
		zblend_Root.frameRenderer.end(frame.get_g4());
		zblend_Root.frameRenderer2D.begin(frame.get_g2());
		zblend_Root.frameRenderer2D.render(frame.get_g2());
		zblend_Root.frameRenderer2D.end(frame.get_g2());
	}
	,downListener: function(button,x,y) {
		zblend_trait_Input.onTouchBegin(x,y);
	}
	,upListener: function(button,x,y) {
		zblend_trait_Input.onTouchEnd(x,y);
	}
	,moveListener: function(x,y) {
		zblend_trait_Input.onMove(x,y);
	}
	,touchStartListener: function(index,x,y) {
		zblend_trait_Input.onTouchBegin(y,x);
	}
	,touchEndListener: function(index,x,y) {
		zblend_trait_Input.onTouchEnd(y,x);
	}
	,touchMoveListener: function(index,x,y) {
		zblend_trait_Input.onMove(y,x);
	}
	,__class__: zblend_Root
});
var zblend_core_FrameRenderer = function() {
	this.lateRenderTraits = [];
	this.renderTraits = [];
	composure_traits_AbstractTrait.call(this);
	if(zblend_Root.gameData.shadowMapping == 1) {
		var size = zblend_Root.gameData.shadowMapSize;
		zblend_core_FrameRenderer.shadowMap = kha_Image.createRenderTarget(size,size);
	}
	if(zblend_Root.gameData != null) {
		var _g1 = 0;
		var _g = zblend_Root.gameData.clear.length - 1;
		while(_g1 < _g) {
			var i = _g1++;
			zblend_Root.gameData.clear[i] = Math.pow(zblend_Root.gameData.clear[i],0.45454545454545453);
		}
		this.clearColor = kha__$Color_Color_$Impl_$.fromFloats(zblend_Root.gameData.clear[0],zblend_Root.gameData.clear[1],zblend_Root.gameData.clear[2],zblend_Root.gameData.clear[3]);
	} else this.clearColor = kha__$Color_Color_$Impl_$._new(-16777216);
	this.addInjector(new composure_injectors_Injector(zblend_core_ILateRenderable,$bind(this,this.addLateRenderTrait),$bind(this,this.removeLateRenderTrait),false,true,false,false,false,false));
	this.addInjector(new composure_injectors_Injector(zblend_core_IRenderable,$bind(this,this.addRenderTrait),$bind(this,this.removeRenderTrait),false,true,false,false,false,false));
};
$hxClasses["zblend.core.FrameRenderer"] = zblend_core_FrameRenderer;
zblend_core_FrameRenderer.__name__ = ["zblend","core","FrameRenderer"];
zblend_core_FrameRenderer.__super__ = composure_traits_AbstractTrait;
zblend_core_FrameRenderer.prototype = $extend(composure_traits_AbstractTrait.prototype,{
	addRenderTrait: function(trait) {
		this.renderTraits.push(trait);
	}
	,removeRenderTrait: function(trait) {
		HxOverrides.remove(this.renderTraits,trait);
	}
	,addLateRenderTrait: function(trait) {
		this.lateRenderTraits.push(trait);
	}
	,removeLateRenderTrait: function(trait) {
		HxOverrides.remove(this.lateRenderTraits,trait);
	}
	,renderShadowMap: function() {
		var g = zblend_core_FrameRenderer.shadowMap.get_g4();
		g.setCullMode(kha_graphics4_CullMode.Clockwise);
		var _g = 0;
		var _g1 = this.renderTraits;
		while(_g < _g1.length) {
			var trait = _g1[_g];
			++_g;
			if(js_Boot.__instanceof(trait,zblend_trait_MeshRenderer)) (js_Boot.__cast(trait , zblend_trait_MeshRenderer)).renderShadowMap(g);
		}
		g.setCullMode(kha_graphics4_CullMode.CounterClockwise);
	}
	,render: function(g) {
		zblend_core_FrameRenderer.numRenders = 0;
		var _g = 0;
		var _g1 = this.renderTraits;
		while(_g < _g1.length) {
			var trait = _g1[_g];
			++_g;
			trait.render(g);
		}
		var _g2 = 0;
		var _g11 = this.lateRenderTraits;
		while(_g2 < _g11.length) {
			var trait1 = _g11[_g2];
			++_g2;
			trait1.render(g);
		}
	}
	,begin: function(g) {
		if(zblend_Root.gameData.shadowMapping == 1) {
			zblend_core_FrameRenderer.shadowMap.get_g4().begin();
			zblend_core_FrameRenderer.shadowMap.get_g4().setDepthMode(true,kha_graphics4_CompareMode.Less);
			zblend_core_FrameRenderer.shadowMap.get_g4().clear(kha__$Color_Color_$Impl_$.White,1,null);
			this.renderShadowMap();
			zblend_core_FrameRenderer.shadowMap.get_g4().end();
		}
		g.begin();
		g.setDepthMode(true,kha_graphics4_CompareMode.Less);
		g.clear(this.clearColor,1,null);
	}
	,end: function(g) {
		g.setDepthMode(false,kha_graphics4_CompareMode.Less);
		g.end();
	}
	,__class__: zblend_core_FrameRenderer
});
var zblend_core_FrameRenderer2D = function() {
	this.lateRenderTraits = [];
	this.renderTraits = [];
	composure_traits_AbstractTrait.call(this);
	this.addInjector(new composure_injectors_Injector(zblend_core_ILateRenderable2D,$bind(this,this.addLateRenderTrait),$bind(this,this.removeLateRenderTrait),false,true,false,false,false,false));
	this.addInjector(new composure_injectors_Injector(zblend_core_IRenderable2D,$bind(this,this.addRenderTrait),$bind(this,this.removeRenderTrait),false,true,false,false,false,false));
};
$hxClasses["zblend.core.FrameRenderer2D"] = zblend_core_FrameRenderer2D;
zblend_core_FrameRenderer2D.__name__ = ["zblend","core","FrameRenderer2D"];
zblend_core_FrameRenderer2D.__super__ = composure_traits_AbstractTrait;
zblend_core_FrameRenderer2D.prototype = $extend(composure_traits_AbstractTrait.prototype,{
	addRenderTrait: function(trait) {
		this.renderTraits.push(trait);
	}
	,removeRenderTrait: function(trait) {
		HxOverrides.remove(this.renderTraits,trait);
	}
	,addLateRenderTrait: function(trait) {
		this.lateRenderTraits.push(trait);
	}
	,removeLateRenderTrait: function(trait) {
		HxOverrides.remove(this.lateRenderTraits,trait);
	}
	,render: function(g) {
		var _g = 0;
		var _g1 = this.renderTraits;
		while(_g < _g1.length) {
			var trait = _g1[_g];
			++_g;
			trait.render(g);
		}
		var _g2 = 0;
		var _g11 = this.lateRenderTraits;
		while(_g2 < _g11.length) {
			var trait1 = _g11[_g2];
			++_g2;
			trait1.render(g);
		}
	}
	,begin: function(g) {
		g.begin(false);
	}
	,end: function(g) {
		g.end();
	}
	,__class__: zblend_core_FrameRenderer2D
});
var zblend_core_FrameUpdater = function() {
	this.lateUpdateTraits = [];
	this.updateTraits = [];
	composure_traits_AbstractTrait.call(this);
	this.addInjector(new composure_injectors_Injector(zblend_core_IUpdateable,$bind(this,this.addUpdateTrait),$bind(this,this.removeUpdateTrait),false,true,false,false,false,false));
	this.addInjector(new composure_injectors_Injector(zblend_core_ILateUpdateable,$bind(this,this.addLateUpdateTrait),$bind(this,this.removeLateUpdateTrait),false,true,false,false,false,false));
};
$hxClasses["zblend.core.FrameUpdater"] = zblend_core_FrameUpdater;
zblend_core_FrameUpdater.__name__ = ["zblend","core","FrameUpdater"];
zblend_core_FrameUpdater.__super__ = composure_traits_AbstractTrait;
zblend_core_FrameUpdater.prototype = $extend(composure_traits_AbstractTrait.prototype,{
	addUpdateTrait: function(trait) {
		this.updateTraits.push(trait);
	}
	,removeUpdateTrait: function(trait) {
		HxOverrides.remove(this.updateTraits,trait);
	}
	,addLateUpdateTrait: function(trait) {
		this.lateUpdateTraits.push(trait);
	}
	,removeLateUpdateTrait: function(trait) {
		HxOverrides.remove(this.lateUpdateTraits,trait);
	}
	,update: function() {
		var _g = 0;
		var _g1 = this.updateTraits;
		while(_g < _g1.length) {
			var trait = _g1[_g];
			++_g;
			trait.update();
		}
		var _g2 = 0;
		var _g11 = this.lateUpdateTraits;
		while(_g2 < _g11.length) {
			var trait1 = _g11[_g2];
			++_g2;
			trait1.update();
		}
	}
	,__class__: zblend_core_FrameUpdater
});
var zblend_core_ILateRenderable = function() { };
$hxClasses["zblend.core.ILateRenderable"] = zblend_core_ILateRenderable;
zblend_core_ILateRenderable.__name__ = ["zblend","core","ILateRenderable"];
zblend_core_ILateRenderable.prototype = {
	__class__: zblend_core_ILateRenderable
};
var zblend_core_ILateRenderable2D = function() { };
$hxClasses["zblend.core.ILateRenderable2D"] = zblend_core_ILateRenderable2D;
zblend_core_ILateRenderable2D.__name__ = ["zblend","core","ILateRenderable2D"];
zblend_core_ILateRenderable2D.prototype = {
	__class__: zblend_core_ILateRenderable2D
};
var zblend_core_ILateUpdateable = function() { };
$hxClasses["zblend.core.ILateUpdateable"] = zblend_core_ILateUpdateable;
zblend_core_ILateUpdateable.__name__ = ["zblend","core","ILateUpdateable"];
zblend_core_ILateUpdateable.prototype = {
	__class__: zblend_core_ILateUpdateable
};
var zblend_core_IRenderable = function() { };
$hxClasses["zblend.core.IRenderable"] = zblend_core_IRenderable;
zblend_core_IRenderable.__name__ = ["zblend","core","IRenderable"];
zblend_core_IRenderable.prototype = {
	__class__: zblend_core_IRenderable
};
var zblend_core_IRenderable2D = function() { };
$hxClasses["zblend.core.IRenderable2D"] = zblend_core_IRenderable2D;
zblend_core_IRenderable2D.__name__ = ["zblend","core","IRenderable2D"];
zblend_core_IRenderable2D.prototype = {
	__class__: zblend_core_IRenderable2D
};
var zblend_core_Object = function() {
	this.name = "";
	composure_core_ComposeGroup.call(this);
	this.transform = new zblend_trait_Transform();
	this.addTrait(this.transform);
	this.input = new zblend_trait_Input();
	this.addTrait(this.input);
};
$hxClasses["zblend.core.Object"] = zblend_core_Object;
zblend_core_Object.__name__ = ["zblend","core","Object"];
zblend_core_Object.__super__ = composure_core_ComposeGroup;
zblend_core_Object.prototype = $extend(composure_core_ComposeGroup.prototype,{
	remove: function() {
		this.get_parentItem().removeChild(this);
	}
	,get_parent: function() {
		if(Std["is"](this.get_parentItem(),zblend_core_Object)) return js_Boot.__cast(this.get_parentItem() , zblend_core_Object); else return null;
	}
	,onParentAdd: function() {
		composure_core_ComposeGroup.prototype.onParentAdd.call(this);
		this.transform.update();
	}
	,onParentRemove: function() {
		composure_core_ComposeGroup.prototype.onParentRemove.call(this);
		if(this.input.layer > 0) zblend_trait_Input._layer = this.input.layer - 1;
	}
	,getChild: function(name) {
		if(this.name == name) return this; else {
			var $it0 = $iterator(this.get_children())();
			while( $it0.hasNext() ) {
				var c = $it0.next();
				var r = (js_Boot.__cast(c , zblend_core_Object)).getChild(name);
				if(r != null) return r;
			}
		}
		return null;
	}
	,__class__: zblend_core_Object
	,__properties__: $extend(composure_core_ComposeGroup.prototype.__properties__,{get_parent:"get_parent"})
});
var zblend_math_Box3 = function(min,max) {
	if(min != null) this.min = min; else this.min = new zblend_math_Vec3(Infinity,Infinity,Infinity);
	if(max != null) this.max = max; else this.max = new zblend_math_Vec3(-Infinity,-Infinity,-Infinity);
};
$hxClasses["zblend.math.Box3"] = zblend_math_Box3;
zblend_math_Box3.__name__ = ["zblend","math","Box3"];
zblend_math_Box3.prototype = {
	set: function(min,max) {
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
		var v1 = new zblend_math_Vec3();
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
		if(optionalTarget != null) result = optionalTarget; else result = new zblend_math_Vec3();
		return result.addVectors(this.min,this.max).multiplyScalar(0.5);
	}
	,size: function(optionalTarget) {
		var result;
		if(optionalTarget != null) result = optionalTarget; else result = new zblend_math_Vec3();
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
		if(optionalTarget != null) result = optionalTarget; else result = new zblend_math_Vec3();
		return result.set((point.x - this.min.x) / (this.max.x - this.min.x),(point.y - this.min.y) / (this.max.y - this.min.y),(point.z - this.min.z) / (this.max.z - this.min.z));
	}
	,isIntersectionBox: function(box) {
		if(box.max.x < this.min.x || box.min.x > this.max.x || box.max.y < this.min.y || box.min.y > this.max.y || box.max.z < this.min.z || box.min.z > this.max.z) return false;
		return true;
	}
	,clampPoint: function(point,optionalTarget) {
		var result;
		if(optionalTarget != null) result = optionalTarget; else result = new zblend_math_Vec3();
		return result.copy2(point).clamp(this.min,this.max);
	}
	,distanceToPoint: function(point) {
		var v1 = point.clone();
		var clampedPoint = v1.copy2(point).clamp(this.min,this.max);
		return clampedPoint.sub(point).length();
	}
	,getBoundingSphere: function(optionalTarget) {
		var v1 = new zblend_math_Vec3();
		var result;
		if(optionalTarget != null) result = optionalTarget; else result = new zblend_math_Sphere();
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
		var points = [new zblend_math_Vec3(),new zblend_math_Vec3(),new zblend_math_Vec3(),new zblend_math_Vec3(),new zblend_math_Vec3(),new zblend_math_Vec3(),new zblend_math_Vec3(),new zblend_math_Vec3()];
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
		return new zblend_math_Box3().copy2(this);
	}
	,__class__: zblend_math_Box3
};
var zblend_math_Line3 = function(start,end) {
	if(start != null) this.start = start; else this.start = new zblend_math_Vec3();
	if(end != null) this.end = end; else this.end = new zblend_math_Vec3();
};
$hxClasses["zblend.math.Line3"] = zblend_math_Line3;
zblend_math_Line3.__name__ = ["zblend","math","Line3"];
zblend_math_Line3.prototype = {
	set: function(start,end) {
		this.start.copy(start);
		this.end.copy(end);
		return this;
	}
	,copy: function(line) {
		this.start.copy(line.start);
		this.end.copy(line.end);
		return this;
	}
	,center: function(optionalTarget) {
		var result;
		if(optionalTarget != null) result = optionalTarget; else result = new zblend_math_Vec3();
		return result.addVectors(this.start,this.end).multiplyScalar(0.5);
	}
	,delta: function(optionalTarget) {
		var result;
		if(optionalTarget != null) result = optionalTarget; else result = new zblend_math_Vec3();
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
		if(optionalTarget != null) result = optionalTarget; else result = new zblend_math_Vec3();
		return this.delta(result).multiplyScalar(t).add(this.start);
	}
	,closestPointToPointParameter: function(point,clampToLine) {
		var startP = new zblend_math_Vec3();
		var startEnd = new zblend_math_Vec3();
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
		if(optionalTarget == null) result = new zblend_math_Vec3(); else result = optionalTarget;
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
		return new zblend_math_Line3().copy(this);
	}
	,__class__: zblend_math_Line3
};
var zblend_math_Mat4 = function(values) {
	this.m = [];
	if(values != null) this.load(values); else this.identity();
	var _g = 0;
	while(_g < 16) {
		var i = _g++;
		this.m.push(0);
	}
	this.toBuffer();
};
$hxClasses["zblend.math.Mat4"] = zblend_math_Mat4;
zblend_math_Mat4.__name__ = ["zblend","math","Mat4"];
zblend_math_Mat4.perspective = function(fovY,aspectRatio,zNear,zFar) {
	var f = 1.0 / Math.tan(fovY / 2);
	var t = 1.0 / (zNear - zFar);
	return new zblend_math_Mat4([f / aspectRatio,0.0,0.0,0.0,0.0,f,0.0,0.0,0.0,0.0,(zFar + zNear) * t,-1.0,0.0,0.0,2 * zFar * zNear * t,0.0]);
};
zblend_math_Mat4.orthogonal = function(left,right,bottom,top,near,far,orthoScale) {
	if(orthoScale == null) orthoScale = 7.314;
	var w = right - left;
	var h = top - bottom;
	var p = far - near;
	var x = (right + left) / w;
	var y = (top + bottom) / h;
	var z = (far + near) / p;
	return new zblend_math_Mat4([orthoScale / w,0,0,-x,0,orthoScale / h,0,-y,0,0,-orthoScale / p,-z,0,0,0,1]);
};
zblend_math_Mat4.lookAt = function(_eye,_centre,_up) {
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
	return new zblend_math_Mat4([s0,u0,-f0,0.0,s1,u1,-f1,0.0,s2,u2,-f2,0.0,d0,d1,d2,1.0]);
};
zblend_math_Mat4.prototype = {
	zero: function() {
		this._11 = 0.0;
		this._12 = 0.0;
		this._13 = 0.0;
		this._14 = 0.0;
		this._21 = 0.0;
		this._22 = 0.0;
		this._23 = 0.0;
		this._24 = 0.0;
		this._31 = 0.0;
		this._32 = 0.0;
		this._33 = 0.0;
		this._34 = 0.0;
		this._41 = 0.0;
		this._42 = 0.0;
		this._43 = 0.0;
		this._44 = 0.0;
	}
	,identity: function() {
		this._11 = 1.0;
		this._12 = 0.0;
		this._13 = 0.0;
		this._14 = 0.0;
		this._21 = 0.0;
		this._22 = 1.0;
		this._23 = 0.0;
		this._24 = 0.0;
		this._31 = 0.0;
		this._32 = 0.0;
		this._33 = 1.0;
		this._34 = 0.0;
		this._41 = 0.0;
		this._42 = 0.0;
		this._43 = 0.0;
		this._44 = 1.0;
	}
	,initTranslate: function(x,y,z) {
		if(z == null) z = 0.0;
		if(y == null) y = 0.0;
		if(x == null) x = 0.0;
		this._11 = 1.0;
		this._12 = 0.0;
		this._13 = 0.0;
		this._14 = 0.0;
		this._21 = 0.0;
		this._22 = 1.0;
		this._23 = 0.0;
		this._24 = 0.0;
		this._31 = 0.0;
		this._32 = 0.0;
		this._33 = 1.0;
		this._34 = 0.0;
		this._41 = x;
		this._42 = y;
		this._43 = z;
		this._44 = 1.0;
	}
	,initScale: function(x,y,z) {
		if(z == null) z = 1.0;
		if(y == null) y = 1.0;
		if(x == null) x = 1.0;
		this._11 = x;
		this._12 = 0.0;
		this._13 = 0.0;
		this._14 = 0.0;
		this._21 = 0.0;
		this._22 = y;
		this._23 = 0.0;
		this._24 = 0.0;
		this._31 = 0.0;
		this._32 = 0.0;
		this._33 = z;
		this._34 = 0.0;
		this._41 = 0.0;
		this._42 = 0.0;
		this._43 = 0.0;
		this._44 = 1.0;
	}
	,initRotate: function(x,y,z) {
		var cx = Math.cos(x);
		var sx = Math.sin(x);
		var cy = Math.cos(y);
		var sy = Math.sin(y);
		var cz = Math.cos(z);
		var sz = Math.sin(z);
		var cxsy = cx * sy;
		var sxsy = sx * sy;
		this._11 = cy * cz;
		this._12 = cy * sz;
		this._13 = -sy;
		this._14 = 0;
		this._21 = sxsy * cz - cx * sz;
		this._22 = sxsy * sz + cx * cz;
		this._23 = sx * cy;
		this._24 = 0;
		this._31 = cxsy * cz + sx * sz;
		this._32 = cxsy * sz - sx * cz;
		this._33 = cx * cy;
		this._34 = 0;
		this._41 = 0;
		this._42 = 0;
		this._43 = 0;
		this._44 = 1;
	}
	,translate: function(x,y,z) {
		if(z == null) z = 0.0;
		if(y == null) y = 0.0;
		if(x == null) x = 0.0;
		this._11 += x * this._14;
		this._12 += y * this._14;
		this._13 += z * this._14;
		this._21 += x * this._24;
		this._22 += y * this._24;
		this._23 += z * this._24;
		this._31 += x * this._34;
		this._32 += y * this._34;
		this._33 += z * this._34;
		this._41 += x * this._44;
		this._42 += y * this._44;
		this._43 += z * this._44;
	}
	,scale: function(v) {
		this._11 *= v.x;
		this._12 *= v.x;
		this._13 *= v.x;
		this._14 *= v.x;
		this._21 *= v.y;
		this._22 *= v.y;
		this._23 *= v.y;
		this._24 *= v.y;
		this._31 *= v.z;
		this._32 *= v.z;
		this._33 *= v.z;
		this._34 *= v.z;
	}
	,multiply3x4: function(a,b) {
		var m11 = a._11;
		var m12 = a._12;
		var m13 = a._13;
		var m21 = a._21;
		var m22 = a._22;
		var m23 = a._23;
		var a31 = a._31;
		var a32 = a._32;
		var a33 = a._33;
		var a41 = a._41;
		var a42 = a._42;
		var a43 = a._43;
		var b11 = b._11;
		var b12 = b._12;
		var b13 = b._13;
		var b21 = b._21;
		var b22 = b._22;
		var b23 = b._23;
		var b31 = b._31;
		var b32 = b._32;
		var b33 = b._33;
		var b41 = b._41;
		var b42 = b._42;
		var b43 = b._43;
		this._11 = m11 * b11 + m12 * b21 + m13 * b31;
		this._12 = m11 * b12 + m12 * b22 + m13 * b32;
		this._13 = m11 * b13 + m12 * b23 + m13 * b33;
		this._14 = 0;
		this._21 = m21 * b11 + m22 * b21 + m23 * b31;
		this._22 = m21 * b12 + m22 * b22 + m23 * b32;
		this._23 = m21 * b13 + m22 * b23 + m23 * b33;
		this._24 = 0;
		this._31 = a31 * b11 + a32 * b21 + a33 * b31;
		this._32 = a31 * b12 + a32 * b22 + a33 * b32;
		this._33 = a31 * b13 + a32 * b23 + a33 * b33;
		this._34 = 0;
		this._41 = a41 * b11 + a42 * b21 + a43 * b31 + b41;
		this._42 = a41 * b12 + a42 * b22 + a43 * b32 + b42;
		this._43 = a41 * b13 + a42 * b23 + a43 * b33 + b43;
		this._44 = 1;
	}
	,mult: function(b) {
		this.multiply(this,b);
	}
	,multiply: function(a,b) {
		var a11 = a._11;
		var a12 = a._12;
		var a13 = a._13;
		var a14 = a._14;
		var a21 = a._21;
		var a22 = a._22;
		var a23 = a._23;
		var a24 = a._24;
		var a31 = a._31;
		var a32 = a._32;
		var a33 = a._33;
		var a34 = a._34;
		var a41 = a._41;
		var a42 = a._42;
		var a43 = a._43;
		var a44 = a._44;
		var b11 = b._11;
		var b12 = b._12;
		var b13 = b._13;
		var b14 = b._14;
		var b21 = b._21;
		var b22 = b._22;
		var b23 = b._23;
		var b24 = b._24;
		var b31 = b._31;
		var b32 = b._32;
		var b33 = b._33;
		var b34 = b._34;
		var b41 = b._41;
		var b42 = b._42;
		var b43 = b._43;
		var b44 = b._44;
		this._11 = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
		this._12 = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
		this._13 = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
		this._14 = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;
		this._21 = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
		this._22 = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
		this._23 = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
		this._24 = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;
		this._31 = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
		this._32 = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
		this._33 = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
		this._34 = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;
		this._41 = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
		this._42 = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
		this._43 = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
		this._44 = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;
	}
	,invert: function() {
		this.inverse(this);
	}
	,inverse: function(m) {
		var m11 = m._11;
		var m12 = m._12;
		var m13 = m._13;
		var m14 = m._14;
		var m21 = m._21;
		var m22 = m._22;
		var m23 = m._23;
		var m24 = m._24;
		var m31 = m._31;
		var m32 = m._32;
		var m33 = m._33;
		var m34 = m._34;
		var m41 = m._41;
		var m42 = m._42;
		var m43 = m._43;
		var m44 = m._44;
		this._11 = m22 * m33 * m44 - m22 * m34 * m43 - m32 * m23 * m44 + m32 * m24 * m43 + m42 * m23 * m34 - m42 * m24 * m33;
		this._12 = -m12 * m33 * m44 + m12 * m34 * m43 + m32 * m13 * m44 - m32 * m14 * m43 - m42 * m13 * m34 + m42 * m14 * m33;
		this._13 = m12 * m23 * m44 - m12 * m24 * m43 - m22 * m13 * m44 + m22 * m14 * m43 + m42 * m13 * m24 - m42 * m14 * m23;
		this._14 = -m12 * m23 * m34 + m12 * m24 * m33 + m22 * m13 * m34 - m22 * m14 * m33 - m32 * m13 * m24 + m32 * m14 * m23;
		this._21 = -m21 * m33 * m44 + m21 * m34 * m43 + m31 * m23 * m44 - m31 * m24 * m43 - m41 * m23 * m34 + m41 * m24 * m33;
		this._22 = m11 * m33 * m44 - m11 * m34 * m43 - m31 * m13 * m44 + m31 * m14 * m43 + m41 * m13 * m34 - m41 * m14 * m33;
		this._23 = -m11 * m23 * m44 + m11 * m24 * m43 + m21 * m13 * m44 - m21 * m14 * m43 - m41 * m13 * m24 + m41 * m14 * m23;
		this._24 = m11 * m23 * m34 - m11 * m24 * m33 - m21 * m13 * m34 + m21 * m14 * m33 + m31 * m13 * m24 - m31 * m14 * m23;
		this._31 = m21 * m32 * m44 - m21 * m34 * m42 - m31 * m22 * m44 + m31 * m24 * m42 + m41 * m22 * m34 - m41 * m24 * m32;
		this._32 = -m11 * m32 * m44 + m11 * m34 * m42 + m31 * m12 * m44 - m31 * m14 * m42 - m41 * m12 * m34 + m41 * m14 * m32;
		this._33 = m11 * m22 * m44 - m11 * m24 * m42 - m21 * m12 * m44 + m21 * m14 * m42 + m41 * m12 * m24 - m41 * m14 * m22;
		this._34 = -m11 * m22 * m34 + m11 * m24 * m32 + m21 * m12 * m34 - m21 * m14 * m32 - m31 * m12 * m24 + m31 * m14 * m22;
		this._41 = -m21 * m32 * m43 + m21 * m33 * m42 + m31 * m22 * m43 - m31 * m23 * m42 - m41 * m22 * m33 + m41 * m23 * m32;
		this._42 = m11 * m32 * m43 - m11 * m33 * m42 - m31 * m12 * m43 + m31 * m13 * m42 + m41 * m12 * m33 - m41 * m13 * m32;
		this._43 = -m11 * m22 * m43 + m11 * m23 * m42 + m21 * m12 * m43 - m21 * m13 * m42 - m41 * m12 * m23 + m41 * m13 * m22;
		this._44 = m11 * m22 * m33 - m11 * m23 * m32 - m21 * m12 * m33 + m21 * m13 * m32 + m31 * m12 * m23 - m31 * m13 * m22;
		var det = m11 * this._11 + m12 * this._21 + m13 * this._31 + m14 * this._41;
		if((det < 0?-det:det) < 1e-10) {
			this.zero();
			return;
		}
		det = 1.0 / det;
		this._11 *= det;
		this._12 *= det;
		this._13 *= det;
		this._14 *= det;
		this._21 *= det;
		this._22 *= det;
		this._23 *= det;
		this._24 *= det;
		this._31 *= det;
		this._32 *= det;
		this._33 *= det;
		this._34 *= det;
		this._41 *= det;
		this._42 *= det;
		this._43 *= det;
		this._44 *= det;
	}
	,transpose: function() {
		var tmp;
		tmp = this._12;
		this._12 = this._21;
		this._21 = tmp;
		tmp = this._13;
		this._13 = this._31;
		this._31 = tmp;
		tmp = this._14;
		this._14 = this._41;
		this._41 = tmp;
		tmp = this._23;
		this._23 = this._32;
		this._32 = tmp;
		tmp = this._24;
		this._24 = this._42;
		this._42 = tmp;
		tmp = this._34;
		this._34 = this._43;
		this._43 = tmp;
	}
	,clone: function() {
		var m = new zblend_math_Mat4();
		m._11 = this._11;
		m._12 = this._12;
		m._13 = this._13;
		m._14 = this._14;
		m._21 = this._21;
		m._22 = this._22;
		m._23 = this._23;
		m._24 = this._24;
		m._31 = this._31;
		m._32 = this._32;
		m._33 = this._33;
		m._34 = this._34;
		m._41 = this._41;
		m._42 = this._42;
		m._43 = this._43;
		m._44 = this._44;
		return m;
	}
	,load: function(a) {
		this._11 = a[0];
		this._12 = a[1];
		this._13 = a[2];
		this._14 = a[3];
		this._21 = a[4];
		this._22 = a[5];
		this._23 = a[6];
		this._24 = a[7];
		this._31 = a[8];
		this._32 = a[9];
		this._33 = a[10];
		this._34 = a[11];
		this._41 = a[12];
		this._42 = a[13];
		this._43 = a[14];
		this._44 = a[15];
	}
	,loadFrom: function(m) {
		this._11 = m._11;
		this._12 = m._12;
		this._13 = m._13;
		this._14 = m._14;
		this._21 = m._21;
		this._22 = m._22;
		this._23 = m._23;
		this._24 = m._24;
		this._31 = m._31;
		this._32 = m._32;
		this._33 = m._33;
		this._34 = m._34;
		this._41 = m._41;
		this._42 = m._42;
		this._43 = m._43;
		this._44 = m._44;
	}
	,getFloats: function() {
		return [this._11,this._12,this._13,this._14,this._21,this._22,this._23,this._24,this._31,this._32,this._33,this._34,this._41,this._42,this._43,this._44];
	}
	,toString: function() {
		return "MAT=[\n" + "  [ " + zblend_math_Math.fmt(this._11) + ", " + zblend_math_Math.fmt(this._12) + ", " + zblend_math_Math.fmt(this._13) + ", " + zblend_math_Math.fmt(this._14) + " ]\n" + "  [ " + zblend_math_Math.fmt(this._21) + ", " + zblend_math_Math.fmt(this._22) + ", " + zblend_math_Math.fmt(this._23) + ", " + zblend_math_Math.fmt(this._24) + " ]\n" + "  [ " + zblend_math_Math.fmt(this._31) + ", " + zblend_math_Math.fmt(this._32) + ", " + zblend_math_Math.fmt(this._33) + ", " + zblend_math_Math.fmt(this._34) + " ]\n" + "  [ " + zblend_math_Math.fmt(this._41) + ", " + zblend_math_Math.fmt(this._42) + ", " + zblend_math_Math.fmt(this._43) + ", " + zblend_math_Math.fmt(this._44) + " ]\n" + "]";
	}
	,pos: function(v) {
		if(v == null) return new zblend_math_Vec3(this._41,this._42,this._43,this._44); else {
			v.x = this._41;
			v.y = this._42;
			v.z = this._43;
			v.w = this._44;
			return v;
		}
	}
	,scaleV: function() {
		return new zblend_math_Vec3(Math.sqrt(this._11 * this._11 + this._21 * this._21 + this._31 * this._31),Math.sqrt(this._12 * this._12 + this._22 * this._22 + this._32 * this._32),Math.sqrt(this._13 * this._13 + this._23 * this._23 + this._33 * this._33));
	}
	,up: function(v) {
		if(v == null) return new zblend_math_Vec3(this._31,this._32,this._33,this._34); else {
			v.x = this._31;
			v.y = this._32;
			v.z = this._33;
			v.w = this._34;
			return v;
		}
	}
	,at: function(v) {
		if(v == null) return new zblend_math_Vec3(this._21,this._22,this._23,this._24); else {
			v.x = this._21;
			v.y = this._22;
			v.z = this._23;
			v.w = this._24;
			return v;
		}
	}
	,right: function(v) {
		if(v == null) return new zblend_math_Vec3(this._11,this._12,this._13,this._14); else {
			v.x = this._11;
			v.y = this._12;
			v.z = this._13;
			v.w = this._14;
			return v;
		}
	}
	,getInverse: function(m) {
		var n11 = m._11;
		var n12 = m._21;
		var n13 = m._31;
		var n14 = m._41;
		var n21 = m._12;
		var n22 = m._22;
		var n23 = m._32;
		var n24 = m._42;
		var n31 = m._13;
		var n32 = m._23;
		var n33 = m._33;
		var n34 = m._43;
		var n41 = m._14;
		var n42 = m._24;
		var n43 = m._34;
		var n44 = m._44;
		this._11 = n23 * n34 * n42 - n24 * n33 * n42 + n24 * n32 * n43 - n22 * n34 * n43 - n23 * n32 * n44 + n22 * n33 * n44;
		this._21 = n14 * n33 * n42 - n13 * n34 * n42 - n14 * n32 * n43 + n12 * n34 * n43 + n13 * n32 * n44 - n12 * n33 * n44;
		this._31 = n13 * n24 * n42 - n14 * n23 * n42 + n14 * n22 * n43 - n12 * n24 * n43 - n13 * n22 * n44 + n12 * n23 * n44;
		this._41 = n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34;
		this._12 = n24 * n33 * n41 - n23 * n34 * n41 - n24 * n31 * n43 + n21 * n34 * n43 + n23 * n31 * n44 - n21 * n33 * n44;
		this._22 = n13 * n34 * n41 - n14 * n33 * n41 + n14 * n31 * n43 - n11 * n34 * n43 - n13 * n31 * n44 + n11 * n33 * n44;
		this._32 = n14 * n23 * n41 - n13 * n24 * n41 - n14 * n21 * n43 + n11 * n24 * n43 + n13 * n21 * n44 - n11 * n23 * n44;
		this._42 = n13 * n24 * n31 - n14 * n23 * n31 + n14 * n21 * n33 - n11 * n24 * n33 - n13 * n21 * n34 + n11 * n23 * n34;
		this._13 = n22 * n34 * n41 - n24 * n32 * n41 + n24 * n31 * n42 - n21 * n34 * n42 - n22 * n31 * n44 + n21 * n32 * n44;
		this._23 = n14 * n32 * n41 - n12 * n34 * n41 - n14 * n31 * n42 + n11 * n34 * n42 + n12 * n31 * n44 - n11 * n32 * n44;
		this._33 = n12 * n24 * n41 - n14 * n22 * n41 + n14 * n21 * n42 - n11 * n24 * n42 - n12 * n21 * n44 + n11 * n22 * n44;
		this._43 = n14 * n22 * n31 - n12 * n24 * n31 - n14 * n21 * n32 + n11 * n24 * n32 + n12 * n21 * n34 - n11 * n22 * n34;
		this._14 = n23 * n32 * n41 - n22 * n33 * n41 - n23 * n31 * n42 + n21 * n33 * n42 + n22 * n31 * n43 - n21 * n32 * n43;
		this._24 = n12 * n33 * n41 - n13 * n32 * n41 + n13 * n31 * n42 - n11 * n33 * n42 - n12 * n31 * n43 + n11 * n32 * n43;
		this._34 = n13 * n22 * n41 - n12 * n23 * n41 - n13 * n21 * n42 + n11 * n23 * n42 + n12 * n21 * n43 - n11 * n22 * n43;
		this._44 = n12 * n23 * n31 - n13 * n22 * n31 + n13 * n21 * n32 - n11 * n23 * n32 - n12 * n21 * n33 + n11 * n22 * n33;
		var det = n11 * this._11 + n21 * this._21 + n31 * this._31 + n41 * this._41;
		if(det == 0) {
			this.identity();
			return this;
		}
		this.multiplyScalar(1 / det);
		return this;
	}
	,multiplyScalar: function(s) {
		this._11 *= s;
		this._21 *= s;
		this._31 *= s;
		this._41 *= s;
		this._12 *= s;
		this._22 *= s;
		this._32 *= s;
		this._42 *= s;
		this._13 *= s;
		this._23 *= s;
		this._33 *= s;
		this._43 *= s;
		this._14 *= s;
		this._24 *= s;
		this._34 *= s;
		this._44 *= s;
		return this;
	}
	,multiplyMatrices: function(a,b) {
		var a11 = a._11;
		var a12 = a._21;
		var a13 = a._31;
		var a14 = a._41;
		var a21 = a._12;
		var a22 = a._22;
		var a23 = a._32;
		var a24 = a._42;
		var a31 = a._13;
		var a32 = a._23;
		var a33 = a._33;
		var a34 = a._43;
		var a41 = a._14;
		var a42 = a._24;
		var a43 = a._34;
		var a44 = a._44;
		var b11 = b._11;
		var b12 = b._21;
		var b13 = b._31;
		var b14 = b._41;
		var b21 = b._12;
		var b22 = b._22;
		var b23 = b._32;
		var b24 = b._42;
		var b31 = b._13;
		var b32 = b._23;
		var b33 = b._33;
		var b34 = b._43;
		var b41 = b._14;
		var b42 = b._24;
		var b43 = b._34;
		var b44 = b._44;
		this._11 = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
		this._21 = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
		this._31 = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
		this._41 = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;
		this._12 = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
		this._22 = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
		this._32 = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
		this._42 = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;
		this._13 = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
		this._23 = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
		this._33 = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
		this._43 = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;
		this._14 = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
		this._24 = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
		this._34 = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
		this._44 = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;
		return this;
	}
	,toRotation: function() {
		var v1 = new zblend_math_Vec3();
		var scaleX = 1 / v1.set(this._11,this._12,this._13).length();
		var scaleY = 1 / v1.set(this._21,this._22,this._23).length();
		var scaleZ = 1 / v1.set(this._31,this._32,this._33).length();
		this._11 = this._11 * scaleX;
		this._12 = this._12 * scaleX;
		this._13 = this._13 * scaleX;
		this._14 = 0;
		this._21 = this._21 * scaleY;
		this._22 = this._22 * scaleY;
		this._23 = this._23 * scaleY;
		this._24 = 0;
		this._31 = this._31 * scaleZ;
		this._32 = this._32 * scaleZ;
		this._33 = this._33 * scaleZ;
		this._34 = 0;
		this._41 = 0;
		this._42 = 0;
		this._43 = 0;
		this._44 = 0;
		return this;
	}
	,getQuat: function() {
		var m = this.clone();
		m.toRotation();
		var q = new zblend_math_Quat();
		var m11 = this._11;
		var m12 = this._21;
		var m13 = this._31;
		var m21 = this._12;
		var m22 = this._22;
		var m23 = this._32;
		var m31 = this._13;
		var m32 = this._23;
		var m33 = this._33;
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
	,toBuffer: function() {
		this.m[0] = this._11;
		this.m[1] = this._12;
		this.m[2] = this._13;
		this.m[3] = this._14;
		this.m[4] = this._21;
		this.m[5] = this._22;
		this.m[6] = this._23;
		this.m[7] = this._24;
		this.m[8] = this._31;
		this.m[9] = this._32;
		this.m[10] = this._33;
		this.m[11] = this._34;
		this.m[12] = this._41;
		this.m[13] = this._42;
		this.m[14] = this._43;
		this.m[15] = this._44;
		return this.m;
	}
	,getMaxScaleOnAxis: function() {
		var te = this.getFloats();
		var scaleXSq = te[0] * te[0] + te[1] * te[1] + te[2] * te[2];
		var scaleYSq = te[4] * te[4] + te[5] * te[5] + te[6] * te[6];
		var scaleZSq = te[8] * te[8] + te[9] * te[9] + te[10] * te[10];
		return Math.sqrt(zblend_math_Math.max(scaleXSq,scaleYSq < scaleZSq?scaleZSq:scaleYSq));
	}
	,getScale: function() {
		var sx = Math.sqrt(this._11 * this._11 + this._12 * this._12 + this._13 * this._13);
		var sy = Math.sqrt(this._21 * this._21 + this._22 * this._22 + this._23 * this._23);
		var sz = Math.sqrt(this._31 * this._31 + this._32 * this._32 + this._33 * this._33);
		return new zblend_math_Vec3(sx,sy,sz);
	}
	,__class__: zblend_math_Mat4
};
var zblend_math_Math = function() { };
$hxClasses["zblend.math.Math"] = zblend_math_Math;
zblend_math_Math.__name__ = ["zblend","math","Math"];
zblend_math_Math.fmt = function(v) {
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
zblend_math_Math.invSqrt = function(f) {
	return 1.0 / Math.sqrt(f);
};
zblend_math_Math.clamp = function(f,min,max) {
	if(max == null) max = 1.0;
	if(min == null) min = 0.0;
	if(f < min) return min; else if(f > max) return max; else return f;
};
zblend_math_Math.abs = function(f) {
	if(f < 0) return -f; else return f;
};
zblend_math_Math.max = function(a,b) {
	if(a < b) return b; else return a;
};
zblend_math_Math.min = function(a,b) {
	if(a > b) return b; else return a;
};
zblend_math_Math.iabs = function(i) {
	if(i < 0) return -i; else return i;
};
zblend_math_Math.imax = function(a,b) {
	if(a < b) return b; else return a;
};
zblend_math_Math.imin = function(a,b) {
	if(a > b) return b; else return a;
};
zblend_math_Math.iclamp = function(v,min,max) {
	if(v < min) return min; else if(v > max) return max; else return v;
};
zblend_math_Math.lerp = function(a,b,k) {
	return a + k * (b - a);
};
zblend_math_Math.bitCount = function(v) {
	var k = 0;
	while(v != 0) {
		k += v & 1;
		v >>>= 1;
	}
	return k;
};
zblend_math_Math.colorLerp = function(c1,c2,k) {
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
zblend_math_Math.angle = function(da) {
	da %= 6.28318530717958623;
	if(da > 3.14159265358979323) da -= 6.28318530717958623; else if(da <= -3.14159265358979312) da += 6.28318530717958623;
	return da;
};
zblend_math_Math.angleLerp = function(a,b,k) {
	return a + zblend_math_Math.angle(b - a) * k;
};
zblend_math_Math.angleMove = function(a,b,max) {
	var da = zblend_math_Math.angle(b - a);
	if(da > -max && da < max) return b; else return a + (da < 0?-max:max);
};
zblend_math_Math.radToDeg = function(rad) {
	return 57.2957795130823229 * rad;
};
zblend_math_Math.degToRad = function(deg) {
	return 0.0174532925199432955 * deg;
};
zblend_math_Math.mix = function(a,b,k) {
	return a * (1.0 - k) + b * k;
};
zblend_math_Math.sign = function(p1,p2,p3) {
	return (p1.x - p3.x) * (p2.y - p3.y) - (p2.x - p3.x) * (p1.y - p3.y);
};
zblend_math_Math.pointInTriangle = function(point,triangle) {
	var b1;
	var b2;
	var b3;
	b1 = zblend_math_Math.sign(point,triangle.v1,triangle.v2) < 0.0;
	b2 = zblend_math_Math.sign(point,triangle.v2,triangle.v3) < 0.0;
	b3 = zblend_math_Math.sign(point,triangle.v3,triangle.v1) < 0.0;
	return b1 == b2 && b2 == b3;
};
zblend_math_Math.distance1d = function(x1,x2) {
	return Math.abs(x2 - x1);
};
zblend_math_Math.distance2d = function(x1,y1,x2,y2) {
	return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
};
zblend_math_Math.distance3d = function(v1,v2) {
	var vx = v1.x - v2.x;
	var vy = v1.y - v2.y;
	var vz = v1.z - v2.z;
	return Math.sqrt(vx * vx + vy * vy + vz * vz);
};
zblend_math_Math.planeDotCoord = function(planeNormal,point,planeDistance) {
	return planeNormal.dot(point) + planeDistance;
};
var zblend_math_Plane = function(normal,constant) {
	if(constant == null) constant = 0;
	if(normal != null) this.normal = normal; else this.normal = new zblend_math_Vec3(1,0,0);
	this.constant = constant;
};
$hxClasses["zblend.math.Plane"] = zblend_math_Plane;
zblend_math_Plane.__name__ = ["zblend","math","Plane"];
zblend_math_Plane.prototype = {
	set: function(normal,constant) {
		this.normal.copy(normal);
		this.constant = constant;
		return this;
	}
	,setComponents: function(x,y,z,w) {
		this.normal.set(x,y,z);
		this.constant = w;
		return this;
	}
	,setFromNormalAndCoplanarPoint: function(normal,point) {
		this.normal.copy(normal);
		this.constant = -point.dot(this.normal);
		return this;
	}
	,setFromCoplanarPoints: function(a,b,c) {
		var v1 = new zblend_math_Vec3();
		var v2 = new zblend_math_Vec3();
		var n = v1.subVectors(c,b).cross2(v2.subVectors(a,b)).normalize2();
		this.setFromNormalAndCoplanarPoint(n,a);
		return this;
	}
	,copy: function(plane) {
		this.normal.copy(plane.normal);
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
		if(optTarget != null) result = optTarget; else result = new zblend_math_Vec3();
		return this.orthoPoint(point,result).sub(point).negate();
	}
	,orthoPoint: function(point,optTarget) {
		var result;
		if(optTarget != null) result = optTarget; else result = new zblend_math_Vec3();
		var perpendicularMagnitude = this.distanceToPoint(point);
		return result.copy(this.normal).multiplyScalar(perpendicularMagnitude);
	}
	,isIntersectionLine: function(line) {
		var startSign = this.distanceToPoint(line.start);
		var endSign = this.distanceToPoint(line.end);
		return startSign < 0 && endSign > 0 || endSign < 0 && startSign > 0;
	}
	,intersectLine: function(line,optTarget) {
		var v1 = new zblend_math_Vec3();
		var result;
		if(optTarget != null) result = optTarget; else result = new zblend_math_Vec3();
		var direction = line.delta(v1);
		var denominator = this.normal.dot(direction);
		if(denominator == 0) {
			if(this.distanceToPoint(line.start) == 0) return result.copy(line.start);
			return null;
		}
		var t = -(line.start.dot(this.normal) + this.constant) / denominator;
		if(t < 0 || t > 1) return null;
		return result.copy(direction).multiplyScalar(t).add(line.start);
	}
	,coplanarPoint: function(optTarget) {
		var result;
		if(optTarget != null) result = optTarget; else result = new zblend_math_Vec3();
		return result.copy(this.normal).multiplyScalar(-this.constant);
	}
	,translate: function(offset) {
		this.constant -= offset.dot(this.normal);
		return this;
	}
	,equals: function(plane) {
		return plane.normal.equals(this.normal) && plane.constant == this.constant;
	}
	,clone: function() {
		return new zblend_math_Plane().copy(this);
	}
	,__class__: zblend_math_Plane
};
var zblend_math_Vec3 = function(x,y,z,w) {
	if(w == null) w = 1;
	if(z == null) z = 0.0;
	if(y == null) y = 0.0;
	if(x == null) x = 0.0;
	this.x = x;
	this.y = y;
	this.z = z;
	this.w = w;
};
$hxClasses["zblend.math.Vec3"] = zblend_math_Vec3;
zblend_math_Vec3.__name__ = ["zblend","math","Vec3"];
zblend_math_Vec3.lerp = function(va,vb,t) {
	var target = new zblend_math_Vec3();
	target.x = vb.x + (va.x - vb.x) * t;
	target.y = vb.y + (va.y - vb.y) * t;
	target.z = vb.z + (va.z - vb.z) * t;
	return target;
};
zblend_math_Vec3.prototype = {
	cross: function(v,target) {
		var vx = v.x;
		var vy = v.y;
		var vz = v.z;
		var x = this.x;
		var y = this.y;
		var z = this.z;
		if(target == null) target = new zblend_math_Vec3();
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
		} else return new zblend_math_Vec3(this.x + v.x,this.y + v.y,this.z + v.z);
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
		} else return new zblend_math_Vec3(this.x - v.x,this.y - v.y,this.z - v.z);
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
		if(target == null) target = new zblend_math_Vec3();
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
		if(target == null) target = new zblend_math_Vec3();
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
		if(target == null) target = new zblend_math_Vec3();
		target.x = -this.x;
		target.y = -this.y;
		target.z = -this.z;
		return target;
	}
	,tangents: function(t1,t2) {
		var norm = this.norm();
		if(norm > 0.0) {
			var n = zblend_math_Vec3.Vec3_tangents_n;
			var inorm = 1 / norm;
			n.set(this.x * inorm,this.y * inorm,this.z * inorm);
			var randVec = zblend_math_Vec3.Vec3_tangents_randVec;
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
		if(target == null) target = new zblend_math_Vec3();
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
		return new zblend_math_Vec3(this.x,this.y,this.z);
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
		var e = m.getFloats();
		var d = 1 / (e[3] * x + e[7] * y + e[11] * z + e[15]);
		this.x = (e[0] * x + e[4] * y + e[8] * z + e[12]) * d;
		this.y = (e[1] * x + e[5] * y + e[9] * z + e[13]) * d;
		this.z = (e[2] * x + e[6] * y + e[10] * z + e[14]) * d;
		return this;
	}
	,applyMat4: function(m) {
		var x = this.x;
		var y = this.y;
		var z = this.z;
		var e = m.getFloats();
		this.x = e[0] * x + e[4] * y + e[8] * z + e[12];
		this.y = e[1] * x + e[5] * y + e[9] * z + e[13];
		this.z = e[2] * x + e[6] * y + e[10] * z + e[14];
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
		return new zblend_math_Vec3(this.x,this.y,this.z);
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
		var VPInv = new zblend_math_Mat4();
		var PInv = new zblend_math_Mat4();
		var VInv = new zblend_math_Mat4();
		PInv.getInverse(P);
		VInv.getInverse(V);
		VPInv.multiplyMatrices(VInv,PInv);
		return this.applyProjection(VPInv);
	}
	,__class__: zblend_math_Vec3
};
var zblend_math_Quat = function(x,y,z,w) {
	if(w == null) w = 1.0;
	if(z == null) z = 0.0;
	if(y == null) y = 0.0;
	if(x == null) x = 0.0;
	this.x = x;
	this.y = y;
	this.z = z;
	this.w = w;
};
$hxClasses["zblend.math.Quat"] = zblend_math_Quat;
zblend_math_Quat.__name__ = ["zblend","math","Quat"];
zblend_math_Quat.lerp = function(p_a,p_b,p_ratio) {
	var c = new zblend_math_Quat();
	var ca = new zblend_math_Quat();
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
zblend_math_Quat.slerp = function(qa,qb,t) {
	var qm = new zblend_math_Quat();
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
zblend_math_Quat.fromEuler = function(p_euler) {
	var q = new zblend_math_Quat();
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
zblend_math_Quat.prototype = {
	set: function(x,y,z,w) {
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
	,toAxisAngle: function(targetAxis) {
		if(targetAxis == null) targetAxis = new zblend_math_Vec3();
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
		if(target == null) target = new zblend_math_Quat();
		var w = this.w;
		var va = zblend_math_Quat.Quaternion_mult_va;
		var vb = zblend_math_Quat.Quaternion_mult_vb;
		var vaxvb = zblend_math_Quat.Quaternion_mult_vaxvb;
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
		if(target == null) target = new zblend_math_Quat();
		this.conjugate(target);
		var inorm2 = 1 / (x * x + y * y + z * z + w * w);
		target.x *= inorm2;
		target.y *= inorm2;
		target.z *= inorm2;
		target.w *= inorm2;
		return target;
	}
	,conjugate: function(target) {
		if(target == null) target = new zblend_math_Quat();
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
		if(target == null) target = new zblend_math_Vec3();
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
		var result = new zblend_math_Vec3();
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
		return new zblend_math_Vec3(pitch,roll,yaw);
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
		var m = new zblend_math_Mat4();
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
		m._11 = 1 - (yy + zz);
		m._21 = xy - wz;
		m._31 = xz + wy;
		m._12 = xy + wz;
		m._22 = 1 - (xx + zz);
		m._32 = yz - wx;
		m._13 = xz - wy;
		m._23 = yz + wx;
		m._33 = 1 - (xx + yy);
		m._14 = 0;
		m._24 = 0;
		m._34 = 0;
		m._41 = 0;
		m._42 = 0;
		m._43 = 0;
		m._44 = 1;
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
	,get_euler: function() {
		this.normalize();
		var test = this.x * this.y + this.z * this.w;
		var a = new zblend_math_Vec3();
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
	,__class__: zblend_math_Quat
	,__properties__: {get_euler:"get_euler"}
};
var zblend_math_Ray = function(origin,direction) {
	if(origin == null) this.origin = new zblend_math_Vec3(); else this.origin = origin;
	if(direction == null) this.direction = new zblend_math_Vec3(); else this.direction = direction;
};
$hxClasses["zblend.math.Ray"] = zblend_math_Ray;
zblend_math_Ray.__name__ = ["zblend","math","Ray"];
zblend_math_Ray.prototype = {
	set: function(origin,direction) {
		this.origin.copy2(origin);
		this.direction.copy2(direction);
		return this;
	}
	,copy2: function(ray) {
		return this.set(ray.origin,ray.direction);
	}
	,at: function(t,optionalTarget) {
		var result;
		if(optionalTarget != null) result = optionalTarget; else result = new zblend_math_Vec3();
		return result.copy2(this.direction).multiplyScalar(t).add(this.origin);
	}
	,recast: function(t) {
		var v1 = new zblend_math_Vec3();
		this.origin.copy2(this.at(t,v1));
		return this;
	}
	,closestPointToPoint: function(point,optionalTarget) {
		var result;
		if(optionalTarget == null) result = new zblend_math_Vec3(); else result = optionalTarget;
		result.subVectors(point,this.origin);
		var directionDistance = result.dot(this.direction);
		if(directionDistance < 0) return result.copy2(this.origin);
		return result.copy2(this.direction).multiplyScalar(directionDistance).add(this.origin);
	}
	,distanceToPoint: function(point) {
		var v1 = new zblend_math_Vec3();
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
		var det = zblend_math_Math.abs(1 - a01 * a01);
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
						s0 = zblend_math_Math.max(0,-(a01 * s1 + b0));
						sqrDist = -s0 * s0 + s1 * (s1 + 2 * b1) + c;
					}
				} else {
					s1 = -segExtent;
					s0 = zblend_math_Math.max(0,-(a01 * s1 + b0));
					sqrDist = -s0 * s0 + s1 * (s1 + 2 * b1) + c;
				}
			} else if(s1 <= -extDet) {
				s0 = zblend_math_Math.max(0,-(-a01 * segExtent + b0));
				if(s0 > 0) s1 = -segExtent; else s1 = zblend_math_Math.min(zblend_math_Math.max(-segExtent,-b1),segExtent);
				sqrDist = -s0 * s0 + s1 * (s1 + 2 * b1) + c;
			} else if(s1 <= extDet) {
				s0 = 0;
				s1 = zblend_math_Math.min(zblend_math_Math.max(-segExtent,-b1),segExtent);
				sqrDist = s1 * (s1 + 2 * b1) + c;
			} else {
				s0 = zblend_math_Math.max(0,-(a01 * segExtent + b0));
				if(s0 > 0) s1 = segExtent; else s1 = zblend_math_Math.min(zblend_math_Math.max(-segExtent,-b1),segExtent);
				sqrDist = -s0 * s0 + s1 * (s1 + 2 * b1) + c;
			}
		} else {
			if(a01 > 0) s1 = -segExtent; else s1 = segExtent;
			s0 = zblend_math_Math.max(0,-(a01 * s1 + b0));
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
		var v = new zblend_math_Vec3();
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
		var diff = new zblend_math_Vec3();
		var edge1 = new zblend_math_Vec3();
		var edge2 = new zblend_math_Vec3();
		var normal = new zblend_math_Vec3();
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
		return new zblend_math_Ray().copy2(this);
	}
	,__class__: zblend_math_Ray
};
var zblend_math_RayCaster = function() { };
$hxClasses["zblend.math.RayCaster"] = zblend_math_RayCaster;
zblend_math_RayCaster.__name__ = ["zblend","math","RayCaster"];
zblend_math_RayCaster.getRay = function(inputX,inputY,camera) {
	var start = new zblend_math_Vec3();
	var end = new zblend_math_Vec3();
	zblend_math_RayCaster.getDirection(start,end,inputX,inputY,camera);
	return new zblend_math_Ray(start,end);
};
zblend_math_RayCaster.getDirection = function(start,end,inputX,inputY,camera) {
	start.x = inputX / zblend_Root.w * 2 - 1;
	start.y = -(inputY / zblend_Root.h) * 2 + 1;
	start.z = -1.0;
	end.x = start.x;
	end.y = start.y;
	end.z = 0.0;
	start.unproject(camera.P,camera.V);
	end.unproject(camera.P,camera.V);
	end.sub(start);
	end.normalize2();
	end.x *= camera.farPlane;
	end.y *= camera.farPlane;
	end.z *= camera.farPlane;
};
zblend_math_RayCaster.getIntersect = function(transform,inputX,inputY,camera) {
	var ray = zblend_math_RayCaster.getRay(inputX,inputY,camera);
	var t = transform;
	var c = new zblend_math_Vec3(t.matrix._41,t.matrix._42,t.matrix._43);
	var s = new zblend_math_Vec3(t.size.x,t.size.y,t.size.z);
	var box = new zblend_math_Box3();
	box.setFromCenterAndSize(c,s);
	return ray.intersectBox(box);
};
zblend_math_RayCaster.getClosestIntersect = function(transforms,inputX,inputY,camera) {
	var intersects = [];
	var _g = 0;
	while(_g < transforms.length) {
		var t = transforms[_g];
		++_g;
		var intersect = zblend_math_RayCaster.getIntersect(t,inputX,inputY,camera);
		if(intersect != null) intersects.push(t);
	}
	if(intersects.length == 0) return null;
	var closest = null;
	var minDist = Infinity;
	var _g1 = 0;
	while(_g1 < intersects.length) {
		var t1 = intersects[_g1];
		++_g1;
		var dist = zblend_math_Math.distance3d(t1.pos,camera.transform.pos);
		if(dist < minDist) {
			minDist = dist;
			closest = t1;
		}
	}
	return closest;
};
var zblend_math_Rect = function(x,y,w,h) {
	if(h == null) h = 0;
	if(w == null) w = 0;
	if(y == null) y = 0;
	if(x == null) x = 0;
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
};
$hxClasses["zblend.math.Rect"] = zblend_math_Rect;
zblend_math_Rect.__name__ = ["zblend","math","Rect"];
zblend_math_Rect.prototype = {
	__class__: zblend_math_Rect
};
var zblend_math_Sphere = function(center,radius) {
	if(radius == null) radius = 0;
	if(center != null) this.center = center; else this.center = new zblend_math_Vec3();
	this.radius = radius;
};
$hxClasses["zblend.math.Sphere"] = zblend_math_Sphere;
zblend_math_Sphere.__name__ = ["zblend","math","Sphere"];
zblend_math_Sphere.prototype = {
	set: function(center,radius) {
		this.center.copy(center);
		this.radius = radius;
		return this;
	}
	,setFromPoints: function(points,optionalCenter) {
		var box = new zblend_math_Box3();
		var center = this.center;
		if(optionalCenter != null) center.copy(optionalCenter); else box.setFromPoints(points).center(center);
		var maxRadiusSq = 0;
		var _g1 = 0;
		var _g = points.length;
		while(_g1 < _g) {
			var i = _g1++;
			maxRadiusSq = zblend_math_Math.max(maxRadiusSq,center.distanceToSquared(points[i]));
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
		if(optionalTarget != null) result = optionalTarget; else result = new zblend_math_Vec3();
		result.copy(point);
		if(deltaLengthSq > this.radius * this.radius) {
			result.sub(this.center).normalize();
			result.multiplyScalar(this.radius).add(this.center);
		}
		return result;
	}
	,getBoundingBox: function(optionalTarget) {
		var box;
		if(optionalTarget != null) box = optionalTarget; else box = new zblend_math_Box3();
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
		return new zblend_math_Sphere().copy(this);
	}
	,__class__: zblend_math_Sphere
};
var zblend_math_Tri2 = function(v1,v2,v3) {
	this.v1 = v1;
	this.v2 = v2;
	this.v3 = v3;
};
$hxClasses["zblend.math.Tri2"] = zblend_math_Tri2;
zblend_math_Tri2.__name__ = ["zblend","math","Tri2"];
zblend_math_Tri2.prototype = {
	__class__: zblend_math_Tri2
};
var zblend_node_Node = function() {
	this.inputs = [];
	this.parents = [];
};
$hxClasses["zblend.node.Node"] = zblend_node_Node;
zblend_node_Node.__name__ = ["zblend","node","Node"];
zblend_node_Node.prototype = {
	start: function(executor,parent) {
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
	,__class__: zblend_node_Node
};
var zblend_sys_Assets = function() {
};
$hxClasses["zblend.sys.Assets"] = zblend_sys_Assets;
zblend_sys_Assets.__name__ = ["zblend","sys","Assets"];
zblend_sys_Assets.addGeometry = function(name,geometry) {
	zblend_sys_Assets.geometries.set(name,geometry);
};
zblend_sys_Assets.getGeometry = function(name) {
	return zblend_sys_Assets.geometries.get(name);
};
zblend_sys_Assets.addMaterial = function(name,material) {
	zblend_sys_Assets.materials.set(name,material);
};
zblend_sys_Assets.getMaterial = function(name) {
	return zblend_sys_Assets.materials.get(name);
};
zblend_sys_Assets.addMesh = function(name,mesh) {
	zblend_sys_Assets.meshes.set(name,mesh);
};
zblend_sys_Assets.getMesh = function(name) {
	return zblend_sys_Assets.meshes.get(name);
};
zblend_sys_Assets.addShader = function(name,shader) {
	zblend_sys_Assets.shaders.set(name,shader);
};
zblend_sys_Assets.getShader = function(name) {
	return zblend_sys_Assets.shaders.get(name);
};
zblend_sys_Assets.addAtlas = function(name,atlas) {
	zblend_sys_Assets.atlases.set(name,atlas);
};
zblend_sys_Assets.getAtlas = function(name) {
	return zblend_sys_Assets.atlases.get(name);
};
zblend_sys_Assets.getImage = function(name) {
	return kha_Loader.the.getImage(name);
};
zblend_sys_Assets.getTexture = function(name) {
	return kha_Loader.the.getImage(name);
};
zblend_sys_Assets.getSound = function(name) {
	return kha_Loader.the.getSound(name);
};
zblend_sys_Assets.getMusic = function(name) {
	return kha_Loader.the.getMusic(name);
};
zblend_sys_Assets.getFont = function(name,size) {
	return kha_Loader.the.loadFont(name,new kha_FontStyle(false,false,false),size);
};
zblend_sys_Assets.getBlob = function(name) {
	return kha_Loader.the.getBlob(name);
};
zblend_sys_Assets.getString = function(name) {
	return kha_Loader.the.getBlob(name).toString();
};
zblend_sys_Assets.prototype = {
	__class__: zblend_sys_Assets
};
var zblend_sys_Storage = function() {
	zblend_sys_Storage.file = kha_Storage.defaultFile();
	zblend_sys_Storage.data = zblend_sys_Storage.file.readObject();
	if(zblend_sys_Storage.data == null) zblend_sys_Storage.data = [];
	zblend_sys_Storage.save();
};
$hxClasses["zblend.sys.Storage"] = zblend_sys_Storage;
zblend_sys_Storage.__name__ = ["zblend","sys","Storage"];
zblend_sys_Storage.save = function() {
	zblend_sys_Storage.file.writeObject(zblend_sys_Storage.data);
};
zblend_sys_Storage.clear = function() {
	zblend_sys_Storage.data = [];
	zblend_sys_Storage.save();
};
zblend_sys_Storage.setValue = function(pos,value) {
	var p = pos[1];
	while(p > zblend_sys_Storage.data.length) zblend_sys_Storage.data.push("");
	zblend_sys_Storage.data[p] = value;
	zblend_sys_Storage.save();
};
zblend_sys_Storage.getValue = function(pos) {
	return zblend_sys_Storage.data[pos[1]];
};
zblend_sys_Storage.prototype = {
	__class__: zblend_sys_Storage
};
var zblend_sys_Time = function() {
	zblend_sys_Time.last = kha_Scheduler.time();
};
$hxClasses["zblend.sys.Time"] = zblend_sys_Time;
zblend_sys_Time.__name__ = ["zblend","sys","Time"];
zblend_sys_Time.onActivate = function() {
	zblend_sys_Time.last = kha_Scheduler.time();
};
zblend_sys_Time.update = function() {
	zblend_sys_Time.delta = kha_Scheduler.time() - zblend_sys_Time.last;
	zblend_sys_Time.last = kha_Scheduler.time();
};
zblend_sys_Time.getSeconds = function() {
	return Std["int"](new Date().getTime() / 1000);
};
zblend_sys_Time.prototype = {
	__class__: zblend_sys_Time
};
var zblend_sys_importer_SceneData = function(data) {
	this.bones = [];
	this.format = JSON.parse(data);
	var _g = 0;
	var _g1 = this.format.nodes;
	while(_g < _g1.length) {
		var n = _g1[_g];
		++_g;
		this.setParents(n);
	}
};
$hxClasses["zblend.sys.importer.SceneData"] = zblend_sys_importer_SceneData;
zblend_sys_importer_SceneData.__name__ = ["zblend","sys","importer","SceneData"];
zblend_sys_importer_SceneData.prototype = {
	setParents: function(node) {
		if(node.nodes == null) return;
		var _g = 0;
		var _g1 = node.nodes;
		while(_g < _g1.length) {
			var n = _g1[_g];
			++_g;
			n.parent = node;
			this.setParents(n);
		}
	}
	,getNode: function(name) {
		var res = null;
		this.traverseNodes(function(it) {
			if(it.name == name) res = it;
		});
		return res;
	}
	,traverseNodes: function(callback) {
		var _g1 = 0;
		var _g = this.format.nodes.length;
		while(_g1 < _g) {
			var i = _g1++;
			this.traverseNodesStep(this.format.nodes[i],callback);
		}
	}
	,traverseNodesStep: function(node,callback) {
		callback(node);
		if(node.nodes == null) return;
		var _g1 = 0;
		var _g = node.nodes.length;
		while(_g1 < _g) {
			var i = _g1++;
			this.traverseNodesStep(node.nodes[i],callback);
		}
	}
	,getGeometryObject: function(id) {
		var _g = 0;
		var _g1 = this.format.geometry_objects;
		while(_g < _g1.length) {
			var go = _g1[_g];
			++_g;
			if(go.id == id) return go;
		}
		return null;
	}
	,getCameraObject: function(id) {
		var _g = 0;
		var _g1 = this.format.camera_objects;
		while(_g < _g1.length) {
			var co = _g1[_g];
			++_g;
			if(co.id == id) return co;
		}
		return null;
	}
	,getLightObject: function(id) {
		var _g = 0;
		var _g1 = this.format.light_objects;
		while(_g < _g1.length) {
			var lo = _g1[_g];
			++_g;
			if(lo.id == id) return lo;
		}
		return null;
	}
	,getMaterial: function(id) {
		var _g = 0;
		var _g1 = this.format.materials;
		while(_g < _g1.length) {
			var m = _g1[_g];
			++_g;
			if(m.id == id) return m;
		}
		return null;
	}
	,getVertexArray: function(mesh,attrib) {
		var _g = 0;
		var _g1 = mesh.vertex_arrays;
		while(_g < _g1.length) {
			var va = _g1[_g];
			++_g;
			if(va.attrib == attrib) return va;
		}
		return null;
	}
	,__class__: zblend_sys_importer_SceneData
};
var zblend_sys_importer_TextureAtlas = function(data) {
	var json = JSON.parse(data);
	this.frames = json.frames;
	this.texture = kha_Loader.the.getImage(json.meta.image);
};
$hxClasses["zblend.sys.importer.TextureAtlas"] = zblend_sys_importer_TextureAtlas;
zblend_sys_importer_TextureAtlas.__name__ = ["zblend","sys","importer","TextureAtlas"];
zblend_sys_importer_TextureAtlas.prototype = {
	getFrameByName: function(name) {
		var _g = 0;
		var _g1 = this.frames;
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			if(f.filename == name) return f;
		}
		return null;
	}
	,getRect: function(name) {
		var rect = this.getFrameByName(name).frame;
		return new zblend_math_Rect(rect.x,rect.y,rect.w,rect.h);
	}
	,__class__: zblend_sys_importer_TextureAtlas
};
var zblend_sys_material_Material = function(materialData) {
	this.roughness = 1.0;
	this.glossy = null;
	this.diffuse = null;
	if(materialData.diffuse) this.diffuse = new zblend_math_Vec3(materialData.diffuse_color[0],materialData.diffuse_color[1],materialData.diffuse_color[2]); else this.diffuse = new zblend_math_Vec3(0,0,0);
	if(materialData.glossy) {
		this.glossy = new zblend_math_Vec3(materialData.glossy_color[0],materialData.glossy_color[1],materialData.glossy_color[2]);
		this.roughness = materialData.roughness;
	} else this.glossy = new zblend_math_Vec3(0,0,0);
};
$hxClasses["zblend.sys.material.Material"] = zblend_sys_material_Material;
zblend_sys_material_Material.__name__ = ["zblend","sys","material","Material"];
zblend_sys_material_Material.prototype = {
	registerRenderer: function(renderer) {
	}
	,setConstants: function(g,s,texturing) {
		if(texturing == null) texturing = false;
		g.setFloat4(s.constants[8],this.diffuse.x,this.diffuse.y,this.diffuse.z,this.diffuse.w);
		g.setFloat(s.constants[12],this.roughness);
		g.setBool(s.constants[9],texturing);
	}
	,__class__: zblend_sys_material_Material
};
var zblend_sys_material_Shader = function(fragmentShader,vertexShader,structure) {
	this.textures = [];
	this.constants = [];
	var fragmentShader1 = new kha_graphics4_FragmentShader(kha_Loader.the.getShader(fragmentShader));
	var vertexShader1 = new kha_graphics4_VertexShader(kha_Loader.the.getShader(vertexShader));
	this.program = new kha_graphics4_Program();
	this.program.setFragmentShader(fragmentShader1);
	this.program.setVertexShader(vertexShader1);
	this.structure = structure;
	this.link();
};
$hxClasses["zblend.sys.material.Shader"] = zblend_sys_material_Shader;
zblend_sys_material_Shader.__name__ = ["zblend","sys","material","Shader"];
zblend_sys_material_Shader.prototype = {
	link: function() {
		this.program.link(this.structure.structure);
	}
	,addConstant: function(s) {
		this.constants.push(this.program.getConstantLocation(s));
	}
	,addTexture: function(s) {
		var tu = this.program.getTextureUnit(s);
		this.textures.push(tu);
		return tu;
	}
	,__class__: zblend_sys_material_Shader
};
var zblend_sys_material_TextureMaterial = function(materialData,texture) {
	zblend_sys_material_Material.call(this,materialData);
	this.texture = texture;
};
$hxClasses["zblend.sys.material.TextureMaterial"] = zblend_sys_material_TextureMaterial;
zblend_sys_material_TextureMaterial.__name__ = ["zblend","sys","material","TextureMaterial"];
zblend_sys_material_TextureMaterial.__super__ = zblend_sys_material_Material;
zblend_sys_material_TextureMaterial.prototype = $extend(zblend_sys_material_Material.prototype,{
	setConstants: function(g,s,texturing) {
		if(texturing == null) texturing = false;
		zblend_sys_material_Material.prototype.setConstants.call(this,g,s,true);
		g.setTexture(s.textures[0],this.texture);
	}
	,__class__: zblend_sys_material_TextureMaterial
});
var zblend_sys_material_VertexStructure = function() {
	this.structureLength = 0;
	this.structure = new kha_graphics4_VertexStructure();
};
$hxClasses["zblend.sys.material.VertexStructure"] = zblend_sys_material_VertexStructure;
zblend_sys_material_VertexStructure.__name__ = ["zblend","sys","material","VertexStructure"];
zblend_sys_material_VertexStructure.prototype = {
	addFloat2: function(s) {
		this.structure.add(s,kha_graphics4_VertexData.Float2);
		this.structureLength += 2;
	}
	,addFloat3: function(s) {
		this.structure.add(s,kha_graphics4_VertexData.Float3);
		this.structureLength += 3;
	}
	,addFloat4: function(s) {
		this.structure.add(s,kha_graphics4_VertexData.Float4);
		this.structureLength += 4;
	}
	,__class__: zblend_sys_material_VertexStructure
};
var zblend_sys_mesh_Geometry = function(data,indices,materialIndices,positions,normals,uvs,usage) {
	if(usage == null) usage = kha_graphics4_Usage.StaticUsage;
	this.data = data;
	this.ids = indices;
	this.materialIndices = materialIndices;
	this.usage = usage;
	this.positions = positions;
	this.normals = normals;
	this.uvs = uvs;
};
$hxClasses["zblend.sys.mesh.Geometry"] = zblend_sys_mesh_Geometry;
zblend_sys_mesh_Geometry.__name__ = ["zblend","sys","mesh","Geometry"];
zblend_sys_mesh_Geometry.prototype = {
	build: function(shader) {
		this.structure = shader.structure;
		this.vertexBuffer = new kha_graphics4_VertexBuffer(this.data.length / this.structure.structureLength | 0,this.structure.structure,this.usage);
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
	,computeTangentBasis: function() {
	}
	,calculateAABB: function() {
		this.aabbMin = new zblend_math_Vec3(-0.1,-0.1,-0.1);
		this.aabbMax = new zblend_math_Vec3(0.1,0.1,0.1);
		this.size = new zblend_math_Vec3();
		var i = 0;
		while(i < this.vertices.length) {
			if(this.vertices[i] > this.aabbMax.x) this.aabbMax.x = this.vertices[i];
			if(this.vertices[i + 1] > this.aabbMax.y) this.aabbMax.y = this.vertices[i + 1];
			if(this.vertices[i + 2] > this.aabbMax.z) this.aabbMax.z = this.vertices[i + 2];
			if(this.vertices[i] < this.aabbMin.x) this.aabbMin.x = this.vertices[i];
			if(this.vertices[i + 1] < this.aabbMin.y) this.aabbMin.y = this.vertices[i + 1];
			if(this.vertices[i + 2] < this.aabbMin.z) this.aabbMin.z = this.vertices[i + 2];
			i += this.structure.structureLength;
		}
		this.size.x = Math.abs(this.aabbMin.x) + Math.abs(this.aabbMax.x);
		this.size.y = Math.abs(this.aabbMin.y) + Math.abs(this.aabbMax.y);
		this.size.z = Math.abs(this.aabbMin.z) + Math.abs(this.aabbMax.z);
		if(this.size.x > this.size.y && this.size.x > this.size.z) this.radius = this.size.x / 2; else if(this.size.y > this.size.x && this.size.y > this.size.z) this.radius = this.size.y / 2; else this.radius = this.size.z / 2;
	}
	,getVerticesCount: function() {
		return this.vertices.length / this.structure.structureLength | 0;
	}
	,__class__: zblend_sys_mesh_Geometry
};
var zblend_sys_mesh_Mesh = function(geometry,shader,materials) {
	this.geometry = geometry;
	this.shader = shader;
	this.materials = materials;
	this.geometry.build(shader);
};
$hxClasses["zblend.sys.mesh.Mesh"] = zblend_sys_mesh_Mesh;
zblend_sys_mesh_Mesh.__name__ = ["zblend","sys","mesh","Mesh"];
zblend_sys_mesh_Mesh.prototype = {
	__class__: zblend_sys_mesh_Mesh
};
var zblend_sys_mesh_SkinnedMesh = function(geometry,shader,materials) {
	this.skeletonTransformsI = null;
	this.skeletonTransforms = null;
	this.skeletonBones = null;
	this.skeletonBoneRefs = null;
	this.skinBoneWeights = null;
	this.skinBoneIndices = null;
	this.skinBoneCounts = null;
	this.skinTransformI = null;
	this.skinTransform = null;
	zblend_sys_mesh_Mesh.call(this,geometry,shader,materials);
};
$hxClasses["zblend.sys.mesh.SkinnedMesh"] = zblend_sys_mesh_SkinnedMesh;
zblend_sys_mesh_SkinnedMesh.__name__ = ["zblend","sys","mesh","SkinnedMesh"];
zblend_sys_mesh_SkinnedMesh.__super__ = zblend_sys_mesh_Mesh;
zblend_sys_mesh_SkinnedMesh.prototype = $extend(zblend_sys_mesh_Mesh.prototype,{
	initSkeletonBones: function(sceneData) {
		this.skeletonBones = [];
		var _g = 0;
		var _g1 = this.skeletonBoneRefs;
		while(_g < _g1.length) {
			var s = _g1[_g];
			++_g;
			var _g2 = 0;
			var _g3 = sceneData.bones;
			while(_g2 < _g3.length) {
				var b = _g3[_g2];
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
			var m = new zblend_math_Mat4(t);
			this.skeletonTransforms.push(m);
			var mi = new zblend_math_Mat4();
			mi.getInverse(m);
			this.skeletonTransformsI.push(mi);
		}
	}
	,initSkinTransform: function(t) {
		this.skinTransform = new zblend_math_Mat4(t);
		this.skinTransformI = new zblend_math_Mat4();
		this.skinTransformI.getInverse(this.skinTransform);
	}
	,__class__: zblend_sys_mesh_SkinnedMesh
});
var zblend_trait_Animation = function(startTrack,names,starts,ends,offsetX,offsetY,offsetZ) {
	if(offsetZ == null) offsetZ = 0;
	if(offsetY == null) offsetY = 0;
	if(offsetX == null) offsetX = 0;
	this.tracks = new haxe_ds_StringMap();
	this.dirty = false;
	this.timeIndex = 0;
	this.animTime = 0;
	zblend_core_Trait.call(this);
	this.offsetX = offsetX;
	this.offsetY = offsetY;
	this.offsetZ = offsetZ;
	var _g1 = 0;
	var _g = names.length;
	while(_g1 < _g) {
		var i = _g1++;
		this.addTrack(names[i],starts[i],ends[i]);
	}
	this.play(startTrack);
	this.addInjector(new composure_injectors_Injector(zblend_trait_Transform,$bind(this,this.addTransform),null,true,false,false,false,false,false));
};
$hxClasses["zblend.trait.Animation"] = zblend_trait_Animation;
zblend_trait_Animation.__name__ = ["zblend","trait","Animation"];
zblend_trait_Animation.__super__ = zblend_core_Trait;
zblend_trait_Animation.prototype = $extend(zblend_core_Trait.prototype,{
	addTransform: function(trait) {
		trait.pos.set(this.offsetX,this.offsetY,this.offsetZ);
		trait.dirty = true;
	}
	,play: function(name) {
		this.current = this.tracks.get(name);
		this.dirty = true;
	}
	,pause: function() {
	}
	,stop: function() {
	}
	,addTrack: function(name,start,end) {
		var t = new zblend_trait_Track(start,end);
		this.tracks.set(name,t);
	}
	,__class__: zblend_trait_Animation
});
var zblend_trait_Track = function(start,end) {
	this.start = start;
	this.end = end;
};
$hxClasses["zblend.trait.Track"] = zblend_trait_Track;
zblend_trait_Track.__name__ = ["zblend","trait","Track"];
zblend_trait_Track.prototype = {
	__class__: zblend_trait_Track
};
var zblend_trait_Renderer = function() {
	zblend_core_Trait.call(this);
	this.addInjector(new composure_injectors_Injector(zblend_trait_MeshLink,$bind(this,this.addMeshLink),null,true,false,false,false,false,false));
};
$hxClasses["zblend.trait.Renderer"] = zblend_trait_Renderer;
zblend_trait_Renderer.__name__ = ["zblend","trait","Renderer"];
zblend_trait_Renderer.__super__ = zblend_core_Trait;
zblend_trait_Renderer.prototype = $extend(zblend_core_Trait.prototype,{
	addMeshLink: function(trait) {
		this.mesh = trait.mesh;
		if(this.mesh.materials != null) {
			var _g = 0;
			var _g1 = this.mesh.materials;
			while(_g < _g1.length) {
				var m = _g1[_g];
				++_g;
				m.registerRenderer(this);
			}
		}
		this.initConstants();
		this.onMeshAdded();
	}
	,initConstants: function() {
	}
	,onMeshAdded: function() {
	}
	,setConstants: function(g) {
	}
	,setMat4: function(g,index,m) {
		var mat = new kha_math_Matrix4(m._11,m._21,m._31,m._41,m._12,m._22,m._32,m._42,m._13,m._23,m._33,m._43,m._14,m._24,m._34,m._44);
		g.setMatrix(this.mesh.shader.constants[index],mat);
	}
	,setVec3: function(g,index,v) {
		g.setFloat3(this.mesh.shader.constants[index],v.x,v.y,v.z);
	}
	,setVec4: function(g,index,v) {
		g.setFloat4(this.mesh.shader.constants[index],v.x,v.y,v.z,v.w);
	}
	,setBool: function(g,index,b) {
		g.setBool(this.mesh.shader.constants[index],b);
	}
	,setFloat: function(g,index,f) {
		g.setFloat(this.mesh.shader.constants[index],f);
	}
	,__class__: zblend_trait_Renderer
});
var zblend_trait_BillboardRenderer = function() {
	this.texturing = true;
	zblend_trait_Renderer.call(this);
	this.M = new zblend_math_Mat4();
	this.V = new zblend_math_Mat4();
	this.P = new zblend_math_Mat4();
	this.transPos = new zblend_math_Vec3();
	this.transSize = new zblend_math_Vec3();
	this.camRightWorld = new zblend_math_Vec3();
	this.camUpWorld = new zblend_math_Vec3();
	this.addInjector(new composure_injectors_PropInjector(zblend_trait_GameScene,this,"scene",false,false,true,false,false));
	this.addInjector(new composure_injectors_Injector(zblend_trait_Transform,$bind(this,this.addTransform),null,true,false,false,false,false,false));
};
$hxClasses["zblend.trait.BillboardRenderer"] = zblend_trait_BillboardRenderer;
zblend_trait_BillboardRenderer.__name__ = ["zblend","trait","BillboardRenderer"];
zblend_trait_BillboardRenderer.__interfaces__ = [zblend_core_IRenderable];
zblend_trait_BillboardRenderer.__super__ = zblend_trait_Renderer;
zblend_trait_BillboardRenderer.prototype = $extend(zblend_trait_Renderer.prototype,{
	initConstants: function() {
	}
	,addTransform: function(trait) {
		this.transform = trait;
		this.transform.size.x = this.mesh.geometry.size.x * this.transform.scale.x / 2;
		this.transform.size.y = this.mesh.geometry.size.y * this.transform.scale.y / 2;
		this.transform.size.z = this.mesh.geometry.size.z * this.transform.scale.z / 2;
	}
	,render: function(g) {
		var cam = this.scene.camera;
		this.camRightWorld.set(cam.V._11,cam.V._21,cam.V._31);
		this.camUpWorld.set(cam.V._12,cam.V._22,cam.V._32);
		this.M.identity();
		this.M.mult(this.transform.matrix);
		this.V.identity();
		this.V.mult(this.scene.camera.V);
		this.P.identity();
		this.P.mult(this.scene.camera.P);
		this.transPos.set(this.transform.pos.x / 30,this.transform.pos.y / 30,this.transform.pos.z / 30);
		this.transSize.set(this.transform.size.x,this.transform.size.y,this.transform.size.z);
		g.setVertexBuffer(this.mesh.geometry.vertexBuffer);
		g.setIndexBuffer(this.mesh.geometry.indexBuffers[0]);
		g.setProgram(this.mesh.materials[0].shader.program);
		this.setConstants(g);
		g.drawIndexedVertices();
	}
	,__class__: zblend_trait_BillboardRenderer
});
var zblend_trait_Camera = function() {
	this.frustumPlanes = [];
	this.dV = null;
	zblend_core_Trait.call(this);
	this.V = new zblend_math_Mat4();
	this.up = new zblend_math_Vec3(0,0,1);
	this.look = new zblend_math_Vec3(0,1,0);
	this.right = new zblend_math_Vec3(1,0,0);
	this.dP = zblend_math_Mat4.perspective(45,1,5,30);
	this.dV = zblend_math_Mat4.lookAt(new zblend_math_Vec3(0,-12,10),new zblend_math_Vec3(0,0,0),new zblend_math_Vec3(0,0,1));
	this.VP = new zblend_math_Mat4();
	var _g = 0;
	while(_g < 6) {
		var i = _g++;
		this.frustumPlanes.push(new zblend_math_Plane());
	}
	this.addInjector(new composure_injectors_Injector(zblend_trait_Transform,$bind(this,this.addTransform),null,true,false,false,false,false,false));
};
$hxClasses["zblend.trait.Camera"] = zblend_trait_Camera;
zblend_trait_Camera.__name__ = ["zblend","trait","Camera"];
zblend_trait_Camera.__super__ = zblend_core_Trait;
zblend_trait_Camera.prototype = $extend(zblend_core_Trait.prototype,{
	registerLight: function(light) {
		var t = light.transform;
		this.dV = zblend_math_Mat4.lookAt(new zblend_math_Vec3(t.pos.x,t.pos.y,t.pos.z),new zblend_math_Vec3(0,0,0),new zblend_math_Vec3(0,0,1));
	}
	,addTransform: function(trait) {
		this.transform = trait;
		this.transform.rot.inverse(this.transform.rot);
		this.updateMatrix();
	}
	,updateMatrix: function() {
		var q = new zblend_math_Quat();
		if(js_Boot.__cast(this.item , zblend_core_Object) != null && (js_Boot.__cast(this.item , zblend_core_Object)).get_parent() != null && (js_Boot.__cast(this.item , zblend_core_Object)).get_parent().transform != null) {
			q.x = (js_Boot.__cast(this.item , zblend_core_Object)).get_parent().transform.rot.x;
			q.y = (js_Boot.__cast(this.item , zblend_core_Object)).get_parent().transform.rot.y;
			q.z = (js_Boot.__cast(this.item , zblend_core_Object)).get_parent().transform.rot.z;
			q.w = (js_Boot.__cast(this.item , zblend_core_Object)).get_parent().transform.rot.w;
			q = q.inverse(q);
		}
		q.multiply(this.transform.rot,q);
		this.V = q.toMatrix();
		var trans = new zblend_math_Mat4();
		if(js_Boot.__cast(this.item , zblend_core_Object) != null && (js_Boot.__cast(this.item , zblend_core_Object)).get_parent() != null) trans.translate(-this.transform.matrix._41,-this.transform.matrix._42,-this.transform.matrix._43); else trans.translate(-this.transform.pos.x,-this.transform.pos.y,-this.transform.pos.z);
		this.V.multiply(trans,this.V);
		this.buildViewFrustum();
		this.transform.dirty = true;
		this.transform.update();
	}
	,buildViewFrustum: function() {
		this.VP.identity();
		this.VP.mult(this.V);
		this.VP.mult(this.P);
		this.frustumPlanes[0].setComponents(this.VP._14 + this.VP._11,this.VP._24 + this.VP._21,this.VP._34 + this.VP._31,this.VP._44 + this.VP._41);
		this.frustumPlanes[1].setComponents(this.VP._14 - this.VP._11,this.VP._24 - this.VP._21,this.VP._34 - this.VP._31,this.VP._44 - this.VP._41);
		this.frustumPlanes[2].setComponents(this.VP._14 - this.VP._12,this.VP._24 - this.VP._22,this.VP._34 - this.VP._32,this.VP._44 - this.VP._42);
		this.frustumPlanes[3].setComponents(this.VP._14 + this.VP._12,this.VP._24 + this.VP._22,this.VP._34 + this.VP._32,this.VP._44 + this.VP._42);
		this.frustumPlanes[4].setComponents(this.VP._13,this.VP._23,this.VP._33,this.VP._43);
		this.frustumPlanes[5].setComponents(this.VP._14 - this.VP._13,this.VP._24 - this.VP._23,this.VP._34 - this.VP._33,this.VP._44 - this.VP._43);
		var _g = 0;
		while(_g < 6) {
			var i = _g++;
			this.frustumPlanes[i].normalize();
		}
	}
	,sphereInFrustum: function(t,radius) {
		var _g = 0;
		while(_g < 6) {
			var i = _g++;
			var vpos = new zblend_math_Vec3(t.matrix._41,t.matrix._42,t.matrix._43);
			var sphere = new zblend_math_Sphere(vpos,radius);
			if(this.frustumPlanes[i].distanceToSphere(sphere) + radius * 2 < 0) return false;
		}
		return true;
	}
	,getLook: function() {
		var mRot = this.transform.rot.toMatrix();
		return new zblend_math_Vec3(mRot._13,mRot._23,mRot._33);
	}
	,getRight: function() {
		var mRot = this.transform.rot.toMatrix();
		return new zblend_math_Vec3(mRot._11,mRot._21,mRot._31);
	}
	,getUp: function() {
		var mRot = this.transform.rot.toMatrix();
		return new zblend_math_Vec3(mRot._12,mRot._22,mRot._32);
	}
	,pitch: function(f) {
		var q = new zblend_math_Quat();
		q.setFromAxisAngle(this.right,-f);
		this.transform.rot.multiply(q,this.transform.rot);
		this.updateMatrix();
	}
	,yaw: function(f) {
		var q = new zblend_math_Quat();
		q.setFromAxisAngle(this.up,-f);
		this.transform.rot.multiply(q,this.transform.rot);
		this.updateMatrix();
	}
	,roll: function(f) {
		var q = new zblend_math_Quat();
		q.setFromAxisAngle(this.look,-f);
		this.transform.rot.multiply(q,this.transform.rot);
		this.updateMatrix();
	}
	,moveForward: function(f) {
		var v3Move = this.getLook();
		v3Move.mult(-f,v3Move);
		this.moveCamera(v3Move);
	}
	,moveRight: function(f) {
		var v3Move = this.getRight();
		v3Move.mult(-f,v3Move);
		this.moveCamera(v3Move);
	}
	,moveUp: function(f) {
		var v3Move = this.getUp();
		v3Move.mult(-f,v3Move);
		this.moveCamera(v3Move);
	}
	,moveCamera: function(vec) {
		this.transform.pos.vadd(vec,this.transform.pos);
		this.transform.dirty = true;
		this.transform.update();
		this.updateMatrix();
	}
	,viewMatrixForward: function() {
		return new zblend_math_Vec3(-this.V._13,-this.V._23,-this.V._33);
	}
	,viewMatrixBackward: function() {
		return new zblend_math_Vec3(this.V._13,this.V._23,this.V._33);
	}
	,__class__: zblend_trait_Camera
});
var zblend_trait_CameraRotator = function() {
	zblend_core_Trait.call(this);
	this.addInjector(new composure_injectors_PropInjector(zblend_trait_Input,this,"input",true,false,false,false,false));
	this.addInjector(new composure_injectors_Injector(zblend_trait_Camera,$bind(this,this.addCamera),null,true,false,false,false,false,false));
};
$hxClasses["zblend.trait.CameraRotator"] = zblend_trait_CameraRotator;
zblend_trait_CameraRotator.__name__ = ["zblend","trait","CameraRotator"];
zblend_trait_CameraRotator.__interfaces__ = [zblend_core_IUpdateable];
zblend_trait_CameraRotator.__super__ = zblend_core_Trait;
zblend_trait_CameraRotator.prototype = $extend(zblend_core_Trait.prototype,{
	addCamera: function(trait) {
		this.camera = trait;
		var r = this.camera.transform.rot;
		var q = new zblend_math_Quat(r.x,r.y,r.z,r.w);
		q.inverse(q);
		var e = q.getEuler();
		this.pitchRad = 1.57079632679489656 - e.x;
	}
	,update: function() {
		if(zblend_trait_Input._layer == this.input.layer?zblend_trait_Input._touch:false) {
			var origin = new zblend_math_Vec3();
			var dist = zblend_math_Math.distance3d(this.camera.transform.pos,origin);
			this.camera.moveForward(dist);
			this.camera.pitch(this.pitchRad);
			this.camera.roll(-(zblend_trait_Input._layer == this.input.layer?zblend_trait_Input._deltaX:0) / 200);
			this.camera.pitch(-this.pitchRad);
			this.camera.moveForward(-dist);
			this.camera.moveForward((zblend_trait_Input._layer == this.input.layer?zblend_trait_Input._deltaY:0) / 50);
		}
	}
	,__class__: zblend_trait_CameraRotator
});
var zblend_trait_FirstPersonController = function() {
	this.jump = false;
	this.moveRight = false;
	this.moveLeft = false;
	this.moveBackward = false;
	this.moveForward = false;
	zblend_core_Trait.call(this);
	kha_input_Keyboard.get().notify($bind(this,this.onDown),$bind(this,this.onUp));
	this.addInjector(new composure_injectors_PropInjector(zblend_trait_Transform,this,"transform",true,false,false,false,false));
	this.addInjector(new composure_injectors_PropInjector(zblend_trait_RigidBody,this,"body",true,false,false,false,false));
	this.addInjector(new composure_injectors_PropInjector(zblend_trait_Camera,this,"camera",false,true,false,false,false));
	this.addInjector(new composure_injectors_PropInjector(zblend_trait_Input,this,"input",true,false,false,false,false));
};
$hxClasses["zblend.trait.FirstPersonController"] = zblend_trait_FirstPersonController;
zblend_trait_FirstPersonController.__name__ = ["zblend","trait","FirstPersonController"];
zblend_trait_FirstPersonController.__interfaces__ = [zblend_core_IUpdateable];
zblend_trait_FirstPersonController.__super__ = zblend_core_Trait;
zblend_trait_FirstPersonController.prototype = $extend(zblend_core_Trait.prototype,{
	onDown: function(key,$char) {
		if($char == "w") this.moveForward = true; else if($char == "d") this.moveRight = true; else if($char == "s") this.moveBackward = true; else if($char == "a") this.moveLeft = true; else if($char == "x") this.jump = true;
	}
	,onUp: function(key,$char) {
		if($char == "w") this.moveForward = false; else if($char == "d") this.moveRight = false; else if($char == "s") this.moveBackward = false; else if($char == "a") this.moveLeft = false; else if($char == "x") this.jump = false;
	}
	,update: function() {
		if(zblend_trait_Input._layer == this.input.layer?zblend_trait_Input._touch:false) {
			this.camera.pitch(-(zblend_trait_Input._layer == this.input.layer?zblend_trait_Input._deltaY:0) / 100);
			this.transform.rotate(0,0,-(zblend_trait_Input._layer == this.input.layer?zblend_trait_Input._deltaX:0) / 100);
			this.transform.update();
			this.body.syncTransform();
		}
		this.body.body.activate(false);
		this.body.body.setAngularFactor(new Ammo.btVector3(0,0,0));
		this.body.body.setAngularVelocity(new Ammo.btVector3(0,0,0));
		var vel = null;
		if(this.moveForward) {
			var f = this.transform.getForward();
			if(vel == null) vel = f; else vel = vel.add(f);
		} else if(this.moveBackward) {
			var f1 = this.transform.getBackward();
			if(vel == null) vel = f1; else vel = vel.add(f1);
		}
		if(this.moveRight) {
			var f2 = this.transform.getRight();
			if(vel == null) vel = f2; else vel = vel.add(f2);
		} else if(this.moveLeft) {
			var f3 = this.transform.getLeft();
			if(vel == null) vel = f3; else vel = vel.add(f3);
		}
		if(vel != null) {
			var lv = this.body.body.getLinearVelocity();
			this.body.setLinearVelocity(vel.x,vel.y,lv.z());
		}
		this.camera.updateMatrix();
	}
	,__class__: zblend_trait_FirstPersonController
});
var zblend_trait_GameParams = function() {
	this.nodeObjectMap = new haxe_ds_ObjectMap();
};
$hxClasses["zblend.trait.GameParams"] = zblend_trait_GameParams;
zblend_trait_GameParams.__name__ = ["zblend","trait","GameParams"];
zblend_trait_GameParams.prototype = {
	__class__: zblend_trait_GameParams
};
var zblend_trait_GameScene = function(data) {
	this.skinnedMeshes = [];
	this.traitInits = [];
	zblend_core_Trait.call(this);
	this.sceneData = new zblend_sys_importer_SceneData(data);
	this.addInjector(new composure_injectors_PropInjector(zblend_trait_Camera,this,"camera",true,true,false,false,false));
	this.addInjector(new composure_injectors_Injector(zblend_trait_Light,$bind(this,this.addLight),null,true,true,false,false,false,false));
};
$hxClasses["zblend.trait.GameScene"] = zblend_trait_GameScene;
zblend_trait_GameScene.__name__ = ["zblend","trait","GameScene"];
zblend_trait_GameScene.__super__ = zblend_core_Trait;
zblend_trait_GameScene.prototype = $extend(zblend_core_Trait.prototype,{
	registerInit: function(cb) {
		this.traitInits.push(cb);
	}
	,getNode: function(name) {
		return this.sceneData.getNode(name);
	}
	,createNode: function(node,createChidren) {
		if(createChidren == null) createChidren = false;
		var _g = this;
		if(!createChidren) return this.createCustomNode(node,js_Boot.__cast(this.item , zblend_core_Object),this.sceneData,this.gameParams); else {
			var o = null;
			this.sceneData.traverseNodesStep(node,function(node1) {
				if(o == null) o = _g.createCustomNode(node1,js_Boot.__cast(_g.item , zblend_core_Object),_g.sceneData,_g.gameParams,false); else _g.createCustomNode(node1,js_Boot.__cast(_g.item , zblend_core_Object),_g.sceneData,_g.gameParams);
			});
			return o;
		}
	}
	,onItemAdd: function() {
		this.gameData = zblend_Root.gameData;
		if(this.gameData.physics == 1) (js_Boot.__cast(this.item , zblend_core_Object)).addTrait(new zblend_trait_PhysicsScene());
		this.gameParams = new zblend_trait_GameParams();
		this.createSceneInstance(this.sceneData,this.gameParams,js_Boot.__cast(this.item , zblend_core_Object));
		var _g = 0;
		var _g1 = this.traitInits;
		while(_g < _g1.length) {
			var cb = _g1[_g];
			++_g;
			cb();
		}
		this.traitInits = [];
	}
	,addLight: function(trait) {
		this.light = trait;
		if(this.camera != null) this.camera.registerLight(this.light);
	}
	,addScene: function(data) {
		var sceneData = new zblend_sys_importer_SceneData(data);
		var o = new zblend_core_Object();
		this.createSceneInstance(sceneData,new zblend_trait_GameParams(),o);
		(js_Boot.__cast(this.item , zblend_core_Object)).addChild(o);
		return o;
	}
	,createSceneInstance: function(sceneData,gameParams,owner) {
		var _g = this;
		sceneData.traverseNodes(function(node) {
			if(node.visible == false) return;
			if(node.type == "bone_node") {
				sceneData.bones.push(node);
				return;
			}
			_g.createCustomNode(node,owner,sceneData,gameParams);
		});
	}
	,createCustomNode: function(node,owner,sceneData,gameParams,autoAdd) {
		if(autoAdd == null) autoAdd = true;
		var parentObject;
		if(node.parent == null) parentObject = owner; else if(gameParams.nodeObjectMap.h.__keys__[node.parent.__id__] != null) parentObject = gameParams.nodeObjectMap.h[node.parent.__id__]; else parentObject = owner;
		var child = new zblend_core_Object();
		child.name = node.name;
		child.name = StringTools.replace(child.name,".","_");
		this.generateTranform(node,child.transform);
		gameParams.nodeObjectMap.set(node,child);
		var gameObj = null;
		var _g = 0;
		var _g1 = this.gameData.objects;
		while(_g < _g1.length) {
			var o = _g1[_g];
			++_g;
			if(o.name == node.name) {
				gameObj = o;
				break;
			}
		}
		if(node.type == "geometry_node") {
			var go = node;
			var geoObj = sceneData.getGeometryObject(go.object_ref);
			if(geoObj != null) {
				var renderer = this.createRenderer(child,geoObj,gameObj);
				if(renderer == null) {
					var pa = sceneData.getVertexArray(geoObj.mesh,"position").values;
					this.calcSize(pa,child.transform);
				}
			}
		}
		this.createTraits(child,gameObj.traits);
		if(autoAdd) parentObject.addChild(child);
		return child;
	}
	,generateTranform: function(node,transform) {
		var mat = new zblend_math_Mat4(node.transform.values);
		transform.pos.x = mat._41;
		transform.pos.y = mat._42;
		transform.pos.z = mat._43;
		var rotation = mat.getQuat();
		transform.rot.set(rotation.x,rotation.y,rotation.z,rotation.w);
		var vs = mat.getScale();
		transform.scale.x = vs.x;
		transform.scale.y = vs.y;
		transform.scale.z = vs.z;
	}
	,createTraits: function(obj,traits) {
		var traitDatas = [];
		var _g1 = 0;
		var _g = traits.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(traits[i].type == "Script") traitDatas.push(traits[i]);
		}
		var _g2 = 0;
		while(_g2 < traitDatas.length) {
			var t = traitDatas[_g2];
			++_g2;
			var s = t.class_name.split(":");
			var traitName = s[0];
			var args = [];
			var _g21 = 1;
			var _g11 = s.length;
			while(_g21 < _g11) {
				var i1 = _g21++;
				this.parseArgument(args,s[i1]);
			}
			obj.addTrait(this.createClassInstance(traitName,args));
		}
	}
	,parseArgument: function(args,str) {
		if(str == "true") args.push(true); else if(str == "false") args.push(false); else if(str.charAt(0) == "'") args.push(StringTools.replace(str,"'","")); else if(str.charAt(0) == "[") {
			str = StringTools.replace(str,"[","");
			str = StringTools.replace(str,"]","");
			str = StringTools.replace(str," ","");
			var childArgs = [];
			var s = str.split(",");
			var _g = 0;
			while(_g < s.length) {
				var childStr = s[_g];
				++_g;
				this.parseArgument(childArgs,childStr);
			}
			args.push(childArgs);
		} else args.push(parseFloat(str));
	}
	,createClassInstance: function(traitName,args) {
		var cname = Type.resolveClass(this.gameData.packageName + "." + traitName);
		if(cname == null) cname = Type.resolveClass("zblend.trait." + traitName);
		return Type.createInstance(cname,args);
	}
	,createRenderer: function(object,geoObj,gameObj) {
		var traitData = null;
		var _g1 = 0;
		var _g = gameObj.traits.length;
		while(_g1 < _g) {
			var i = _g1++;
			var traitType = gameObj.traits[i].type;
			if(traitType == "Mesh Renderer" || traitType == "Custom Renderer") {
				traitData = gameObj.traits[i];
				break;
			}
		}
		if(traitData == null) return null;
		if(traitData.material == "" && gameObj.materials.length == 0) return null;
		var mats;
		if(traitData.material == "") mats = gameObj.materials; else mats = [traitData.material];
		var materialsData = [];
		var _g2 = 0;
		while(_g2 < mats.length) {
			var mat = mats[_g2];
			++_g2;
			var _g21 = 0;
			var _g11 = this.gameData.materials.length;
			while(_g21 < _g11) {
				var i1 = _g21++;
				if(mat == this.gameData.materials[i1].name) {
					materialsData.push(this.gameData.materials[i1]);
					break;
				}
			}
		}
		if(materialsData.length == 0) return null;
		var data = [];
		var indices = [];
		var materialIndices = [];
		var _g3 = 0;
		var _g12 = geoObj.mesh.index_arrays;
		while(_g3 < _g12.length) {
			var ind = _g12[_g3];
			++_g3;
			indices.push(ind.values);
			materialIndices.push(ind.material);
		}
		var paVA = this.sceneData.getVertexArray(geoObj.mesh,"position");
		var pa;
		if(paVA != null) pa = paVA.values; else pa = null;
		var naVA = this.sceneData.getVertexArray(geoObj.mesh,"normal");
		var na;
		if(naVA != null) na = naVA.values; else na = null;
		var uvaVA = this.sceneData.getVertexArray(geoObj.mesh,"texcoord");
		var uva;
		if(uvaVA != null) uva = uvaVA.values; else uva = null;
		var isSkinned = false;
		var _g13 = 0;
		var _g4 = gameObj.traits.length;
		while(_g13 < _g4) {
			var i2 = _g13++;
			if(gameObj.traits[i2].type == "Script" && gameObj.traits[i2].class_name.split(":")[0] == "Animation") isSkinned = true;
		}
		this.buildData(data,pa,na,uva,geoObj,isSkinned);
		var usage;
		if(isSkinned) usage = kha_graphics4_Usage.DynamicUsage; else usage = kha_graphics4_Usage.StaticUsage;
		var geo = new zblend_sys_mesh_Geometry(data,indices,materialIndices,pa,na,uva,usage);
		var materials = [];
		var _g5 = 0;
		while(_g5 < materialsData.length) {
			var md = materialsData[_g5];
			++_g5;
			var tb;
			if(md.texture == "") tb = false; else tb = true;
			var texturing;
			if(uva != null) texturing = tb; else texturing = false;
			var material = null;
			if(!texturing) material = new zblend_sys_material_Material(md); else material = new zblend_sys_material_TextureMaterial(md,kha_Loader.the.getImage(md.texture));
			zblend_sys_Assets.materials.set(md.name,material);
			materials.push(material);
		}
		if(traitData.type == "Mesh Renderer") {
			var shaderName = "shader";
			var mesh = null;
			if(isSkinned) {
				mesh = new zblend_sys_mesh_SkinnedMesh(geo,zblend_sys_Assets.shaders.get(shaderName),materials);
				var sm;
				sm = js_Boot.__cast(mesh , zblend_sys_mesh_SkinnedMesh);
				sm.initSkinTransform(geoObj.mesh.skin.transform.values);
				sm.skinBoneCounts = geoObj.mesh.skin.bone_count_array;
				sm.skinBoneIndices = geoObj.mesh.skin.bone_index_array;
				sm.skinBoneWeights = geoObj.mesh.skin.bone_weight_array;
				sm.skeletonBoneRefs = geoObj.mesh.skin.skeleton.bone_ref_array;
				sm.initSkeletonBones(this.sceneData);
				sm.initSkeletonTransforms(geoObj.mesh.skin.skeleton.transforms);
				this.skinnedMeshes.push(sm);
			} else mesh = new zblend_sys_mesh_Mesh(geo,zblend_sys_Assets.shaders.get(shaderName),materials);
			object.addTrait(new zblend_trait_MeshLink(mesh));
			var renderer = null;
			if(isSkinned) renderer = new zblend_trait_SkinnedMeshRenderer(); else renderer = new zblend_trait_MeshRenderer();
			renderer.lighting = traitData.lighting;
			var castShadow;
			if(this.gameData.shadowMapping == 1) castShadow = traitData.cast_shadow; else castShadow = false;
			var receiveShadow;
			if(this.gameData.shadowMapping == 1) receiveShadow = traitData.receive_shadow; else receiveShadow = false;
			renderer.castShadow = castShadow;
			renderer.receiveShadow = receiveShadow;
			object.addTrait(renderer);
			return renderer;
		} else {
			var shaderName1 = traitData.shader;
			var rendererName = traitData.class_name;
			var mesh1 = null;
			mesh1 = new zblend_sys_mesh_Mesh(geo,zblend_sys_Assets.shaders.get(shaderName1),materials);
			object.addTrait(new zblend_trait_MeshLink(mesh1));
			var renderer1 = this.createClassInstance(rendererName,[]);
			object.addTrait(renderer1);
			return renderer1;
		}
	}
	,buildData: function(data,pa,na,uva,geoObj,isSkinned) {
		var caVA = this.sceneData.getVertexArray(geoObj.mesh,"color");
		var ca;
		if(caVA != null) ca = caVA.values; else ca = null;
		var _g1 = 0;
		var _g = pa.length / 3 | 0;
		while(_g1 < _g) {
			var i = _g1++;
			data.push(pa[i * 3]);
			data.push(pa[i * 3 + 1]);
			data.push(pa[i * 3 + 2]);
			if(uva != null) {
				data.push(uva[i * 2]);
				data.push(1 - uva[i * 2 + 1]);
			} else {
				data.push(0);
				data.push(0);
			}
			if(na != null) {
				data.push(na[i * 3]);
				data.push(na[i * 3 + 1]);
				data.push(na[i * 3 + 2]);
			} else {
				data.push(1);
				data.push(1);
				data.push(1);
			}
			if(ca != null) {
				data.push(ca[i * 3]);
				data.push(ca[i * 3 + 1]);
				data.push(ca[i * 3 + 2]);
				data.push(1.0);
			} else {
				data.push(1.0);
				data.push(1.0);
				data.push(1.0);
				data.push(1.0);
			}
		}
	}
	,calcSize: function(pa,transform) {
		var aabbMin = new zblend_math_Vec3(-0.1,-0.1,-0.1);
		var aabbMax = new zblend_math_Vec3(0.1,0.1,0.1);
		var i = 0;
		while(i < (pa.length / 3 | 0)) {
			if(pa[i * 3] > aabbMax.x) aabbMax.x = pa[i * 3];
			if(pa[i * 3 + 1] > aabbMax.y) aabbMax.y = pa[i * 3 + 1];
			if(pa[i * 3 + 2] > aabbMax.z) aabbMax.z = pa[i * 3 + 2];
			if(pa[i * 3] < aabbMin.x) aabbMin.x = pa[i * 3];
			if(pa[i * 3 + 1] < aabbMin.y) aabbMin.y = pa[i * 3 + 1];
			if(pa[i * 3 + 2] < aabbMin.z) aabbMin.z = pa[i * 3 + 2];
			i++;
		}
		transform.size.x = (Math.abs(aabbMin.x) + Math.abs(aabbMax.x)) * transform.scale.x;
		transform.size.y = (Math.abs(aabbMin.y) + Math.abs(aabbMax.y)) * transform.scale.y;
		transform.size.z = (Math.abs(aabbMin.z) + Math.abs(aabbMax.z)) * transform.scale.z;
	}
	,__class__: zblend_trait_GameScene
});
var zblend_trait_Input = function(layer) {
	if(layer == null) layer = 0;
	zblend_core_Trait.call(this);
	this.layer = layer;
};
$hxClasses["zblend.trait.Input"] = zblend_trait_Input;
zblend_trait_Input.__name__ = ["zblend","trait","Input"];
zblend_trait_Input.update = function() {
	zblend_trait_Input._released = false;
	zblend_trait_Input._started = false;
	zblend_trait_Input._moved = false;
	zblend_trait_Input._deltaX = 0;
	zblend_trait_Input._deltaY = 0;
};
zblend_trait_Input.reset = function() {
	zblend_trait_Input._deltaX = 0;
	zblend_trait_Input._deltaY = 0;
	zblend_trait_Input._started = false;
	zblend_trait_Input._touch = false;
	zblend_trait_Input._released = false;
	zblend_trait_Input._moved = false;
};
zblend_trait_Input.onTouchBegin = function(x,y) {
	zblend_trait_Input._touch = true;
	zblend_trait_Input._started = true;
	zblend_trait_Input._x = x;
	zblend_trait_Input._y = y;
};
zblend_trait_Input.onTouchEnd = function(x,y) {
	zblend_trait_Input._touch = false;
	zblend_trait_Input._released = true;
	zblend_trait_Input._x = x;
	zblend_trait_Input._y = y;
};
zblend_trait_Input.onMove = function(x,y) {
	zblend_trait_Input._deltaX = x - zblend_trait_Input._x;
	zblend_trait_Input._deltaY = y - zblend_trait_Input._y;
	zblend_trait_Input._x = x;
	zblend_trait_Input._y = y;
	zblend_trait_Input._moved = true;
};
zblend_trait_Input.__super__ = zblend_core_Trait;
zblend_trait_Input.prototype = $extend(zblend_core_Trait.prototype,{
	get_x: function() {
		if(zblend_trait_Input._layer == this.layer) return zblend_trait_Input._x; else return 0;
	}
	,get_y: function() {
		if(zblend_trait_Input._layer == this.layer) return zblend_trait_Input._y; else return 0;
	}
	,get_touch: function() {
		if(zblend_trait_Input._layer == this.layer) return zblend_trait_Input._touch; else return false;
	}
	,get_started: function() {
		if(zblend_trait_Input._layer == this.layer) return zblend_trait_Input._started; else return false;
	}
	,get_released: function() {
		if(zblend_trait_Input._layer == this.layer) return zblend_trait_Input._released; else return false;
	}
	,get_moved: function() {
		if(zblend_trait_Input._layer == this.layer) return zblend_trait_Input._moved; else return true;
	}
	,get_deltaX: function() {
		if(zblend_trait_Input._layer == this.layer) return zblend_trait_Input._deltaX; else return 0;
	}
	,get_deltaY: function() {
		if(zblend_trait_Input._layer == this.layer) return zblend_trait_Input._deltaY; else return 0;
	}
	,__class__: zblend_trait_Input
	,__properties__: $extend(zblend_core_Trait.prototype.__properties__,{get_deltaY:"get_deltaY",get_deltaX:"get_deltaX",get_moved:"get_moved",get_released:"get_released",get_started:"get_started",get_touch:"get_touch",get_y:"get_y",get_x:"get_x"})
});
var zblend_trait_KeyInput = function() {
	this.arrowDown = false;
	this.right = false;
	this.left = false;
	this.down = false;
	this.up = false;
	zblend_core_Trait.call(this);
	kha_input_Keyboard.get().notify($bind(this,this.onDown),$bind(this,this.onUp));
};
$hxClasses["zblend.trait.KeyInput"] = zblend_trait_KeyInput;
zblend_trait_KeyInput.__name__ = ["zblend","trait","KeyInput"];
zblend_trait_KeyInput.__super__ = zblend_core_Trait;
zblend_trait_KeyInput.prototype = $extend(zblend_core_Trait.prototype,{
	onDown: function(key,$char) {
		if(key == kha_Key.UP) {
			this.up = true;
			this.arrowDown = true;
		} else if(key == kha_Key.DOWN) {
			this.down = true;
			this.arrowDown = true;
		} else if(key == kha_Key.LEFT) {
			this.left = true;
			this.arrowDown = true;
		} else if(key == kha_Key.RIGHT) {
			this.right = true;
			this.arrowDown = true;
		}
	}
	,onUp: function(key,$char) {
		if(key == kha_Key.UP) this.up = false; else if(key == kha_Key.DOWN) this.down = false; else if(key == kha_Key.LEFT) this.left = false; else if(key == kha_Key.RIGHT) this.right = false;
		if(!this.up && !this.down && !this.left && !this.right) this.arrowDown = false;
	}
	,__class__: zblend_trait_KeyInput
});
var zblend_trait_Light = function() {
	zblend_core_Trait.call(this);
	this.addInjector(new composure_injectors_PropInjector(zblend_trait_Transform,this,"transform",true,false,false,false,false));
};
$hxClasses["zblend.trait.Light"] = zblend_trait_Light;
zblend_trait_Light.__name__ = ["zblend","trait","Light"];
zblend_trait_Light.__super__ = zblend_core_Trait;
zblend_trait_Light.prototype = $extend(zblend_core_Trait.prototype,{
	__class__: zblend_trait_Light
});
var zblend_trait_MeshLink = function(mesh) {
	zblend_core_Trait.call(this);
	this.mesh = mesh;
};
$hxClasses["zblend.trait.MeshLink"] = zblend_trait_MeshLink;
zblend_trait_MeshLink.__name__ = ["zblend","trait","MeshLink"];
zblend_trait_MeshLink.__super__ = zblend_core_Trait;
zblend_trait_MeshLink.prototype = $extend(zblend_core_Trait.prototype,{
	__class__: zblend_trait_MeshLink
});
var zblend_trait_MeshRenderer = function() {
	this.visible = true;
	this.receiveShadow = false;
	this.castShadow = false;
	this.lighting = true;
	zblend_trait_Renderer.call(this);
	this.dbMVP = new zblend_math_Mat4();
	this.color = new zblend_math_Vec3(1.0,1.0,1.0,1.0);
	this.addInjector(new composure_injectors_PropInjector(zblend_trait_GameScene,this,"scene",false,false,true,false,false));
	this.addInjector(new composure_injectors_Injector(zblend_trait_Transform,$bind(this,this.addTransform),null,true,false,false,false,false,false));
};
$hxClasses["zblend.trait.MeshRenderer"] = zblend_trait_MeshRenderer;
zblend_trait_MeshRenderer.__name__ = ["zblend","trait","MeshRenderer"];
zblend_trait_MeshRenderer.__interfaces__ = [zblend_core_IRenderable];
zblend_trait_MeshRenderer.__super__ = zblend_trait_Renderer;
zblend_trait_MeshRenderer.prototype = $extend(zblend_trait_Renderer.prototype,{
	initConstants: function() {
		this.surfaceColor = new zblend_math_Vec3(zblend_Root.gameData.clear[0] / 6,zblend_Root.gameData.clear[1] / 6,zblend_Root.gameData.clear[2] / 6);
	}
	,onMeshAdded: function() {
		if(this.transform != null) this.setTransformSize();
	}
	,addTransform: function(trait) {
		this.transform = trait;
		if(this.mesh != null) this.setTransformSize();
	}
	,setTransformSize: function() {
		this.transform.size.x = this.mesh.geometry.size.x * this.transform.scale.x;
		this.transform.size.y = this.mesh.geometry.size.y * this.transform.scale.y;
		this.transform.size.z = this.mesh.geometry.size.z * this.transform.scale.z;
	}
	,renderShadowMap: function(g) {
		if(!this.castShadow) return;
		this.dbMVP.identity();
		this.dbMVP.mult(this.transform.matrix);
		this.dbMVP.mult(this.scene.camera.dV);
		this.dbMVP.mult(this.scene.camera.dP);
		var shadowShader = zblend_sys_Assets.shaders.get("shadowmapshader");
		g.setVertexBuffer(this.mesh.geometry.vertexBuffer);
		g.setIndexBuffer(this.mesh.geometry.indexBuffers[0]);
		g.setProgram(shadowShader.program);
		this.setMat4(g,0,this.dbMVP);
		g.drawIndexedVertices();
	}
	,setConstants: function(g) {
		this.setMat4(g,0,this.transform.matrix);
		this.setMat4(g,1,this.scene.camera.V);
		this.setMat4(g,2,this.scene.camera.P);
		this.setMat4(g,3,this.dbMVP);
		this.setVec4(g,4,this.color);
		this.setVec3(g,5,this.scene.light.transform.pos);
		this.setVec3(g,6,this.scene.camera.transform.pos);
		this.setVec3(g,7,this.surfaceColor);
		g.setBool(this.mesh.shader.constants[10],this.lighting);
		g.setBool(this.mesh.shader.constants[11],this.receiveShadow);
	}
	,render: function(g) {
		if(!this.visible) return;
		zblend_core_FrameRenderer.numRenders++;
		g.setProgram(this.mesh.shader.program);
		g.setVertexBuffer(this.mesh.geometry.vertexBuffer);
		this.setConstants(g);
		var _g1 = 0;
		var _g = this.mesh.geometry.indexBuffers.length;
		while(_g1 < _g) {
			var i = _g1++;
			var indexBuffer = this.mesh.geometry.indexBuffers[i];
			var mat = this.mesh.geometry.materialIndices[i];
			this.mesh.materials[mat].setConstants(g,this.mesh.shader);
			g.setIndexBuffer(indexBuffer);
			g.drawIndexedVertices();
		}
	}
	,__class__: zblend_trait_MeshRenderer
});
var zblend_trait_NodeExecutor = function() {
	this.nodeUpdates = [];
	zblend_core_Trait.call(this);
};
$hxClasses["zblend.trait.NodeExecutor"] = zblend_trait_NodeExecutor;
zblend_trait_NodeExecutor.__name__ = ["zblend","trait","NodeExecutor"];
zblend_trait_NodeExecutor.__interfaces__ = [zblend_core_IUpdateable];
zblend_trait_NodeExecutor.__super__ = zblend_core_Trait;
zblend_trait_NodeExecutor.prototype = $extend(zblend_core_Trait.prototype,{
	start: function(node) {
		this.node = node;
		node.start(this);
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
	,__class__: zblend_trait_NodeExecutor
});
var zblend_trait_OrthoCamera = function() {
	this.nearPlane = 0.1;
	this.farPlane = 1000;
	if(zblend_Root.gameData.orient == 0) {
		var aspectRatio = zblend_Root.w / zblend_Root.h;
		this.P = zblend_math_Mat4.orthogonal(-aspectRatio,aspectRatio,-1,1,this.nearPlane,this.farPlane);
	} else {
		var aspectRatio1 = zblend_Root.h / zblend_Root.w;
		this.P = zblend_math_Mat4.orthogonal(-aspectRatio1,aspectRatio1,-1,1,this.nearPlane,this.farPlane);
	}
	zblend_trait_Camera.call(this);
};
$hxClasses["zblend.trait.OrthoCamera"] = zblend_trait_OrthoCamera;
zblend_trait_OrthoCamera.__name__ = ["zblend","trait","OrthoCamera"];
zblend_trait_OrthoCamera.__super__ = zblend_trait_Camera;
zblend_trait_OrthoCamera.prototype = $extend(zblend_trait_Camera.prototype,{
	__class__: zblend_trait_OrthoCamera
});
var zblend_trait_ParticlesRenderer = function() {
	this.texturing = true;
	zblend_trait_Renderer.call(this);
	this.mvpMatrix = new zblend_math_Mat4();
	this.transPos = new zblend_math_Vec3();
	this.transSize = new zblend_math_Vec3();
	this.camRightWorld = new zblend_math_Vec3();
	this.camUpWorld = new zblend_math_Vec3();
	this.addInjector(new composure_injectors_PropInjector(zblend_trait_GameScene,this,"scene",false,false,true,false,false));
	this.addInjector(new composure_injectors_Injector(zblend_trait_Transform,$bind(this,this.addTransform),null,true,false,false,false,false,false));
};
$hxClasses["zblend.trait.ParticlesRenderer"] = zblend_trait_ParticlesRenderer;
zblend_trait_ParticlesRenderer.__name__ = ["zblend","trait","ParticlesRenderer"];
zblend_trait_ParticlesRenderer.__interfaces__ = [zblend_core_IRenderable];
zblend_trait_ParticlesRenderer.__super__ = zblend_trait_Renderer;
zblend_trait_ParticlesRenderer.prototype = $extend(zblend_trait_Renderer.prototype,{
	initConstants: function() {
	}
	,addTransform: function(trait) {
		this.transform = trait;
		this.transform.size.x = this.mesh.geometry.size.x * this.transform.scale.x / 2;
		this.transform.size.y = this.mesh.geometry.size.y * this.transform.scale.y / 2;
		this.transform.size.z = this.mesh.geometry.size.z * this.transform.scale.z / 2;
	}
	,render: function(g) {
		var cam = this.scene.camera;
		this.camRightWorld.set(cam.V._11,cam.V._21,cam.V._31);
		this.camUpWorld.set(cam.V._12,cam.V._22,cam.V._32);
		this.mvpMatrix.identity();
		this.mvpMatrix.mult(this.transform.matrix);
		this.mvpMatrix.mult(this.scene.camera.V);
		this.mvpMatrix.mult(this.scene.camera.P);
		this.transPos.set(this.transform.pos.x / 30,this.transform.pos.y / 30,this.transform.pos.z / 30);
		this.transSize.set(this.transform.size.x,this.transform.size.y,this.transform.size.z);
		g.setVertexBuffer(this.mesh.geometry.vertexBuffer);
		g.setIndexBuffer(this.mesh.geometry.indexBuffers[0]);
		g.setProgram(this.mesh.materials[0].shader.program);
		this.setConstants(g);
		g.drawIndexedVertices();
	}
	,__class__: zblend_trait_ParticlesRenderer
});
var zblend_trait_PerspectiveCamera = function() {
	this.nearPlane = 0.1;
	this.farPlane = 1000;
	if(zblend_Root.gameData.orient == 0) this.P = zblend_math_Mat4.perspective(45,zblend_Root.w / zblend_Root.h,this.nearPlane,this.farPlane); else this.P = zblend_math_Mat4.perspective(45,zblend_Root.h / zblend_Root.w,this.nearPlane,this.farPlane);
	zblend_trait_Camera.call(this);
};
$hxClasses["zblend.trait.PerspectiveCamera"] = zblend_trait_PerspectiveCamera;
zblend_trait_PerspectiveCamera.__name__ = ["zblend","trait","PerspectiveCamera"];
zblend_trait_PerspectiveCamera.__super__ = zblend_trait_Camera;
zblend_trait_PerspectiveCamera.prototype = $extend(zblend_trait_Camera.prototype,{
	__class__: zblend_trait_PerspectiveCamera
});
var zblend_trait_PhysicsDrag = function() {
	this.pickedBody = null;
	this.pickConstraint = null;
	zblend_core_Trait.call(this);
	this.addInjector(new composure_injectors_PropInjector(zblend_trait_PhysicsScene,this,"physics",false,false,true,false,false));
	this.addInjector(new composure_injectors_PropInjector(zblend_trait_Input,this,"input",true,false,false,false,false));
};
$hxClasses["zblend.trait.PhysicsDrag"] = zblend_trait_PhysicsDrag;
zblend_trait_PhysicsDrag.__name__ = ["zblend","trait","PhysicsDrag"];
zblend_trait_PhysicsDrag.__interfaces__ = [zblend_core_IUpdateable];
zblend_trait_PhysicsDrag.__super__ = zblend_core_Trait;
zblend_trait_PhysicsDrag.prototype = $extend(zblend_core_Trait.prototype,{
	update: function() {
		if(this.pickedBody != null) this.pickedBody.body.activate(false);
		if(zblend_trait_Input._layer == this.input.layer?zblend_trait_Input._started:false) {
			var b = this.physics.pickClosest(zblend_trait_Input._layer == this.input.layer?zblend_trait_Input._x:0,zblend_trait_Input._layer == this.input.layer?zblend_trait_Input._y:0);
			if(b != null && b.mass > 0 && !b.body.isKinematicObject()) {
				this.rayFrom = this.physics.getRayFrom();
				this.rayTo = this.physics.getRayTo(zblend_trait_Input._layer == this.input.layer?zblend_trait_Input._x:0,zblend_trait_Input._layer == this.input.layer?zblend_trait_Input._y:0);
				this.pickedBody = b;
				var pickPos = this.physics.rayCallback.get_m_hitPointWorld();
				var ct = b.body.getCenterOfMassTransform();
				var inv = ct.inverse();
				var localPivot = inv.mulVec(pickPos);
				var tr = new Ammo.btTransform();
				tr.setIdentity();
				tr.setOrigin(localPivot);
				this.pickConstraint = new Ammo.btGeneric6DofConstraint(b.body,tr,false);
				this.pickConstraint.setLinearLowerLimit(new Ammo.btVector3(0,0,0));
				this.pickConstraint.setLinearUpperLimit(new Ammo.btVector3(0,0,0));
				this.pickConstraint.setAngularLowerLimit(new Ammo.btVector3(-10,-10,-10));
				this.pickConstraint.setAngularUpperLimit(new Ammo.btVector3(10,10,10));
				this.physics.world.addConstraint(this.pickConstraint,false);
				var v = new Ammo.btVector3(pickPos.x() - this.rayFrom.x(),pickPos.y() - this.rayFrom.y(),pickPos.z() - this.rayFrom.z());
				this.pickDist = v.length();
			}
		} else if(zblend_trait_Input._layer == this.input.layer?zblend_trait_Input._released:false) {
			if(this.pickConstraint != null) {
				this.physics.world.removeConstraint(this.pickConstraint);
				this.pickConstraint = null;
				this.pickedBody = null;
			}
		} else if(zblend_trait_Input._layer == this.input.layer?zblend_trait_Input._touch:false) {
			if(this.pickConstraint != null) {
				this.rayFrom = this.physics.getRayFrom();
				this.rayTo = this.physics.getRayTo(zblend_trait_Input._layer == this.input.layer?zblend_trait_Input._x:0,zblend_trait_Input._layer == this.input.layer?zblend_trait_Input._y:0);
				var btRayTo = new Ammo.btVector3(this.rayTo.x(),this.rayTo.y(),this.rayTo.z());
				var btRayFrom = new Ammo.btVector3(this.rayFrom.x(),this.rayFrom.y(),this.rayFrom.z());
				var dir = new Ammo.btVector3(btRayTo.x() - btRayFrom.x(),btRayTo.y() - btRayFrom.y(),btRayTo.z() - btRayFrom.z());
				var bt = dir.normalize();
				bt.setX(bt.x() * this.pickDist);
				bt.setY(bt.y() * this.pickDist);
				bt.setZ(bt.z() * this.pickDist);
				var newPivotB = new Ammo.btVector3(btRayFrom.x() + bt.x(),btRayFrom.y() + bt.y(),btRayFrom.z() + bt.z());
				this.pickConstraint.getFrameOffsetA().setOrigin(newPivotB);
			}
		}
	}
	,updateRays: function() {
		this.rayFrom = this.physics.getRayFrom();
		this.rayTo = this.physics.getRayTo(zblend_trait_Input._layer == this.input.layer?zblend_trait_Input._x:0,zblend_trait_Input._layer == this.input.layer?zblend_trait_Input._y:0);
	}
	,__class__: zblend_trait_PhysicsDrag
});
var zblend_trait_ContactPair = function(a,b) {
	this.a = a;
	this.b = b;
};
$hxClasses["zblend.trait.ContactPair"] = zblend_trait_ContactPair;
zblend_trait_ContactPair.__name__ = ["zblend","trait","ContactPair"];
zblend_trait_ContactPair.prototype = {
	__class__: zblend_trait_ContactPair
};
var zblend_trait_PhysicsScene = function() {
	this.contacts = [];
	zblend_core_Trait.call(this);
	this.rbMap = new haxe_ds_IntMap();
	var broadphase = new Ammo.btDbvtBroadphase();
	var collisionConfiguration = new Ammo.btDefaultCollisionConfiguration();
	this.dispatcher = new Ammo.btCollisionDispatcher(collisionConfiguration);
	var solver = new Ammo.btSequentialImpulseConstraintSolver();
	this.world = new Ammo.btDiscreteDynamicsWorld(this.dispatcher,broadphase,solver,collisionConfiguration);
	var g = new Ammo.btVector3(zblend_Root.gameData.gravity[0],zblend_Root.gameData.gravity[1],zblend_Root.gameData.gravity[2]);
	this.world.setGravity(g);
};
$hxClasses["zblend.trait.PhysicsScene"] = zblend_trait_PhysicsScene;
zblend_trait_PhysicsScene.__name__ = ["zblend","trait","PhysicsScene"];
zblend_trait_PhysicsScene.__interfaces__ = [zblend_core_ILateUpdateable];
zblend_trait_PhysicsScene.__super__ = zblend_core_Trait;
zblend_trait_PhysicsScene.prototype = $extend(zblend_core_Trait.prototype,{
	addRigidBody: function(body) {
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
			var cp = new zblend_trait_ContactPair(bodyA.userIndex,bodyB.userIndex);
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
		var camera = zblend_Root.gameScene.camera;
		return new Ammo.btVector3(camera.transform.pos.x,camera.transform.pos.y,camera.transform.pos.z);
	}
	,getRayTo: function(inputX,inputY) {
		var camera = zblend_Root.gameScene.camera;
		var start = new zblend_math_Vec3();
		var end = new zblend_math_Vec3();
		zblend_math_RayCaster.getDirection(start,end,inputX,inputY,camera);
		return new Ammo.btVector3(end.x,end.y,end.z);
	}
	,__class__: zblend_trait_PhysicsScene
});
var zblend_trait_RigidBody = function(mass,shape,friction,scaleX,scaleY,scaleZ) {
	if(scaleZ == null) scaleZ = 1;
	if(scaleY == null) scaleY = 1;
	if(scaleX == null) scaleX = 1;
	if(friction == null) friction = 0.5;
	if(shape == null) shape = 0;
	if(mass == null) mass = 1;
	this.__promisesMet = new haxe_ds_StringMap();
	this.onCreated = null;
	this.id = 0;
	this.body = null;
	zblend_core_Trait.call(this);
	this.mass = mass;
	this.shape = shape;
	this.friction = friction;
	this.scaleX = scaleX;
	this.scaleY = scaleY;
	this.scaleZ = scaleZ;
	this.__promiseClassName = Type.getClassName(js_Boot.getClass(this));
	composure_prom_Promises.registerOnce(this.__promiseClassName,"__promisesMet",$bind(this,this.__getPromiseInfo));
	this.addInjector(new composure_injectors_PropInjector(zblend_trait_PhysicsScene,this,"physics",true,false,true,false,false));
	this.addInjector(new composure_injectors_PropInjector(zblend_trait_Transform,this,"transform",true,false,false,false,false));
	this.addInjector(new composure_injectors_PropInjector(zblend_trait_MeshLink,this,"meshLink",true,false,false,false,false));
};
$hxClasses["zblend.trait.RigidBody"] = zblend_trait_RigidBody;
zblend_trait_RigidBody.__name__ = ["zblend","trait","RigidBody"];
zblend_trait_RigidBody.__interfaces__ = [zblend_core_ILateUpdateable];
zblend_trait_RigidBody.__super__ = zblend_core_Trait;
zblend_trait_RigidBody.prototype = $extend(zblend_core_Trait.prototype,{
	onPromiseMet: function(met) {
		if(met) this.init(this.transform,this.physics);
	}
	,init: function(transform,physics) {
		if(this.body != null) return;
		this.set_transform(transform);
		this.set_physics(physics);
		var _shape = null;
		var _shapeConvex = null;
		if(this.shape == 0) _shape = new Ammo.btBoxShape(new Ammo.btVector3(transform.size.x / 2,transform.size.y / 2,transform.size.z / 2)); else if(this.shape == 1) _shape = new Ammo.btSphereShape(transform.size.x / 2); else if(this.shape == 2 || this.shape == 3) {
			_shapeConvex = new Ammo.btConvexHullShape();
			this.addPointsToConvexHull(_shapeConvex);
		} else if(this.shape == 4) _shape = new Ammo.btConeShapeZ(transform.size.x / 2,transform.size.z); else if(this.shape == 5) _shape = new Ammo.btCylinderShapeZ(new Ammo.btVector3(transform.size.x / 2,transform.size.y / 2,transform.size.z / 2)); else if(this.shape == 6) _shape = new Ammo.btCapsuleShapeZ(transform.size.x / 2 * this.scaleX,transform.size.z * this.scaleZ); else if(this.shape == 8 || this.shape == 7) {
			var meshInterface = new Ammo.btTriangleMesh(true,true);
			this.fillTriangleMesh(meshInterface);
			_shape = new Ammo.btBvhTriangleMeshShape(meshInterface,true,true);
		}
		var _transform = new Ammo.btTransform();
		_transform.setIdentity();
		_transform.setOrigin(new Ammo.btVector3(transform.pos.x,transform.pos.y,transform.pos.z));
		_transform.setRotation(new Ammo.btQuaternion(transform.rot.x,transform.rot.y,transform.rot.z,transform.rot.w));
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
		this.id = zblend_trait_RigidBody.nextId;
		zblend_trait_RigidBody.nextId++;
		this.body.userIndex = this.id;
		physics.addRigidBody(this);
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
	,onItemRemove: function() {
	}
	,removeFromWorld: function() {
		this.physics.removeRigidBody(this);
	}
	,activate: function() {
		this.body.activate(false);
	}
	,disableGravity: function() {
		this.body.setLinearFactor(new Ammo.btVector3(0,0,0));
		this.body.setAngularFactor(new Ammo.btVector3(0,0,0));
	}
	,applyImpulse: function(impulse,pos) {
		if(pos == null) this.body.applyCentralImpulse(new Ammo.btVector3(impulse.x,impulse.y,impulse.z)); else this.body.applyImpulse(new Ammo.btVector3(impulse.x,impulse.y,impulse.z),new Ammo.btVector3(pos.x,pos.y,pos.z));
	}
	,setLinearFactor: function(x,y,z) {
		this.body.setLinearFactor(new Ammo.btVector3(x,y,z));
	}
	,setAngularFactor: function(x,y,z) {
		this.body.setAngularFactor(new Ammo.btVector3(x,y,z));
	}
	,setLinearVelocity: function(x,y,z) {
		this.body.setLinearVelocity(new Ammo.btVector3(x,y,z));
	}
	,setAngularVelocity: function(x,y,z) {
		this.body.setAngularVelocity(new Ammo.btVector3(x,y,z));
	}
	,syncTransform: function() {
		var trans = new Ammo.btTransform();
		trans.setOrigin(new Ammo.btVector3(this.transform.pos.x,this.transform.pos.y,this.transform.pos.z));
		trans.setRotation(new Ammo.btQuaternion(this.transform.rot.x,this.transform.rot.y,this.transform.rot.z,this.transform.rot.w));
		this.body.setCenterOfMassTransform(trans);
	}
	,addPointsToConvexHull: function(shape) {
		var positions = this.meshLink.mesh.geometry.positions;
		var _g1 = 0;
		var _g = positions.length / 3 | 0;
		while(_g1 < _g) {
			var i = _g1++;
			shape.addPoint(new Ammo.btVector3(positions[i * 3],positions[i * 3 + 1],positions[i * 3 + 2]),true);
		}
	}
	,fillTriangleMesh: function(triangleMesh) {
		var positions = this.meshLink.mesh.geometry.positions;
		var indices = this.meshLink.mesh.geometry.indices;
		var _g1 = 0;
		var _g = indices[0].length / 3 | 0;
		while(_g1 < _g) {
			var i = _g1++;
			triangleMesh.addTriangle(new Ammo.btVector3(positions[indices[0][i * 3] * 3],positions[indices[0][i * 3] * 3 + 1],positions[indices[0][i * 3] * 3 + 2]),new Ammo.btVector3(positions[indices[0][i * 3 + 1] * 3],positions[indices[0][i * 3 + 1] * 3 + 1],positions[indices[0][i * 3 + 1] * 3 + 2]),new Ammo.btVector3(positions[indices[0][i * 3 + 2] * 3],positions[indices[0][i * 3 + 2] * 3 + 1],positions[indices[0][i * 3 + 2] * 3 + 2]));
		}
	}
	,__getPromiseInfo: function() {
		var ret = [];
		ret.push({ methodName : "onPromiseMet", requirements : [composure_prom_PromiseReq.RProp("transform"),composure_prom_PromiseReq.RProp("physics"),composure_prom_PromiseReq.RProp("meshLink")]});
		return ret;
	}
	,set_transform: function(value) {
		if(value != this.transform) {
			var __oldVal = this.transform;
			composure_prom_Promises.prePropChange(this.__promiseClassName,this,"transform",__oldVal,value);
			this.transform = value;
			composure_prom_Promises.postPropChange(this.__promiseClassName,this,"transform",__oldVal,this.transform);
		}
		return value;
	}
	,set_physics: function(value) {
		if(value != this.physics) {
			var __oldVal = this.physics;
			composure_prom_Promises.prePropChange(this.__promiseClassName,this,"physics",__oldVal,value);
			this.physics = value;
			composure_prom_Promises.postPropChange(this.__promiseClassName,this,"physics",__oldVal,this.physics);
		}
		return value;
	}
	,set_meshLink: function(value) {
		if(value != this.meshLink) {
			var __oldVal = this.meshLink;
			composure_prom_Promises.prePropChange(this.__promiseClassName,this,"meshLink",__oldVal,value);
			this.meshLink = value;
			composure_prom_Promises.postPropChange(this.__promiseClassName,this,"meshLink",__oldVal,this.meshLink);
		}
		return value;
	}
	,__class__: zblend_trait_RigidBody
	,__properties__: $extend(zblend_core_Trait.prototype.__properties__,{set_meshLink:"set_meshLink",set_transform:"set_transform",set_physics:"set_physics"})
});
var zblend_trait_SceneInstance = function(sceneName) {
	zblend_core_Trait.call(this);
	this.sceneName = sceneName;
	this.addInjector(new composure_injectors_Injector(zblend_trait_Transform,$bind(this,this.addTransform),null,true,false,false,false,false,false));
};
$hxClasses["zblend.trait.SceneInstance"] = zblend_trait_SceneInstance;
zblend_trait_SceneInstance.__name__ = ["zblend","trait","SceneInstance"];
zblend_trait_SceneInstance.__super__ = zblend_core_Trait;
zblend_trait_SceneInstance.prototype = $extend(zblend_core_Trait.prototype,{
	addTransform: function(trait) {
		this.transform = trait;
		var o = zblend_Root.gameScene.addScene(kha_Loader.the.getBlob(this.sceneName).toString());
		o.transform.set_x(this.transform.pos.x);
		o.transform.set_y(this.transform.pos.y);
		o.transform.set_z(this.transform.pos.z);
	}
	,__class__: zblend_trait_SceneInstance
});
var zblend_trait_SkinnedMeshRenderer = function() {
	this.nor = new zblend_math_Vec3();
	this.pos = new zblend_math_Vec3();
	this.bm = new zblend_math_Mat4();
	this.m = new zblend_math_Mat4();
	this.boneTimeIndices = new haxe_ds_ObjectMap();
	this.boneMats = new haxe_ds_ObjectMap();
	zblend_trait_MeshRenderer.call(this);
	this.addInjector(new composure_injectors_PropInjector(zblend_trait_Animation,this,"animation",true,false,false,false,false));
};
$hxClasses["zblend.trait.SkinnedMeshRenderer"] = zblend_trait_SkinnedMeshRenderer;
zblend_trait_SkinnedMeshRenderer.__name__ = ["zblend","trait","SkinnedMeshRenderer"];
zblend_trait_SkinnedMeshRenderer.__interfaces__ = [zblend_core_IUpdateable];
zblend_trait_SkinnedMeshRenderer.__super__ = zblend_trait_MeshRenderer;
zblend_trait_SkinnedMeshRenderer.prototype = $extend(zblend_trait_MeshRenderer.prototype,{
	onMeshAdded: function() {
		zblend_trait_MeshRenderer.prototype.onMeshAdded.call(this);
		var sm;
		sm = js_Boot.__cast(this.mesh , zblend_sys_mesh_SkinnedMesh);
		var _g = 0;
		var _g1 = sm.skeletonBones;
		while(_g < _g1.length) {
			var b = _g1[_g];
			++_g;
			var value = new zblend_math_Mat4(b.transform.values);
			this.boneMats.set(b,value);
			this.boneTimeIndices.set(b,0);
		}
	}
	,initConstants: function() {
		zblend_trait_MeshRenderer.prototype.initConstants.call(this);
	}
	,update: function() {
		var sm;
		sm = js_Boot.__cast(this.mesh , zblend_sys_mesh_SkinnedMesh);
		var _g = 0;
		var _g1 = sm.skeletonBones;
		while(_g < _g1.length) {
			var b = _g1[_g];
			++_g;
			var boneAnim = b.animation;
			if(boneAnim != null) {
				var track = boneAnim.track;
				if(this.animation.dirty) {
					this.animation.timeIndex = this.animation.current.start;
					this.animation.animTime = track.time.values[this.animation.timeIndex];
				}
				while(this.animation.animTime > track.time.values[this.animation.timeIndex + 1]) this.animation.timeIndex++;
				if(this.animation.timeIndex >= track.time.values.length - 2 || this.animation.timeIndex >= this.animation.current.end) {
					this.animation.timeIndex = this.animation.current.start;
					this.animation.animTime = track.time.values[this.animation.timeIndex];
					return;
				}
				var t1 = track.time.values[this.animation.timeIndex];
				var t2 = track.time.values[this.animation.timeIndex + 1];
				var s = (this.animation.animTime - t1) / (t2 - t1);
				var v1 = track.value.values[this.animation.timeIndex];
				var v2 = track.value.values[this.animation.timeIndex + 1];
				var m1 = new zblend_math_Mat4(v1);
				var m2 = new zblend_math_Mat4(v2);
				var p1 = new zblend_math_Vec3(m1._41,m1._42,m1._43,m1._44);
				var p2 = new zblend_math_Vec3(m2._41,m2._42,m2._43,m2._44);
				var s1 = m1.scaleV();
				var s2 = m2.scaleV();
				var q1 = m1.getQuat();
				var q2 = m2.getQuat();
				var fp = zblend_math_Vec3.lerp(p1,p2,s);
				var fs = zblend_math_Vec3.lerp(s1,s2,s);
				var fq = zblend_math_Quat.lerp(q1,q2,s);
				var m = this.boneMats.h[b.__id__];
				fq.saveToMatrix(m);
				m.scale(fs);
				m._41 = fp.x;
				m._42 = fp.y;
				m._43 = fp.z;
				this.boneMats.set(b,m);
			}
		}
		this.animation.animTime += zblend_sys_Time.delta;
		this.animation.dirty = false;
	}
	,render: function(g) {
		var geom = this.mesh.geometry;
		var sm;
		sm = js_Boot.__cast(this.mesh , zblend_sys_mesh_SkinnedMesh);
		var v = geom.vertexBuffer.lock();
		var l = geom.structure.structureLength;
		var index = 0;
		var _g1 = 0;
		var _g = v.length / l | 0;
		while(_g1 < _g) {
			var i = _g1++;
			var boneCount = sm.skinBoneCounts[i];
			var boneIndices = [];
			var boneWeights = [];
			var _g3 = index;
			var _g2 = index + boneCount;
			while(_g3 < _g2) {
				var j = _g3++;
				boneIndices.push(sm.skinBoneIndices[j]);
				boneWeights.push(sm.skinBoneWeights[j]);
			}
			index += boneCount;
			this.pos.set(0,0,0);
			this.nor.set(0,0,0);
			var _g21 = 0;
			while(_g21 < boneCount) {
				var j1 = _g21++;
				var boneIndex = boneIndices[j1];
				var boneWeight = boneWeights[j1];
				var bone = sm.skeletonBones[boneIndex];
				this.m.initTranslate(geom.positions[i * 3],geom.positions[i * 3 + 1],geom.positions[i * 3 + 2]);
				this.m.mult(sm.skinTransform);
				this.m.mult(sm.skeletonTransformsI[boneIndex]);
				this.bm.loadFrom(this.boneMats.h[bone.__id__]);
				var p = bone.parent;
				while(p != null) {
					var pm = this.boneMats.h[p.__id__];
					if(pm == null) pm = new zblend_math_Mat4(p.transform.values);
					this.bm.mult(pm);
					p = p.parent;
				}
				this.m.mult(this.bm);
				this.m.multiplyScalar(boneWeight);
				this.pos.add(this.m.pos(null));
				this.m.getInverse(this.bm);
				this.m.mult(sm.skeletonTransforms[boneIndex]);
				this.m.mult(sm.skinTransformI);
				this.m.translate(geom.normals[i * 3],geom.normals[i * 3 + 1],geom.normals[i * 3 + 2]);
				this.m.multiplyScalar(boneWeight);
				this.nor.add(this.m.pos(null));
			}
			v[i * l] = this.pos.x;
			v[i * l + 1] = this.pos.y;
			v[i * l + 2] = this.pos.z;
			v[i * l + 5] = this.nor.x;
			v[i * l + 6] = this.nor.y;
			v[i * l + 7] = this.nor.z;
		}
		geom.vertexBuffer.unlock();
		zblend_trait_MeshRenderer.prototype.render.call(this,g);
	}
	,__class__: zblend_trait_SkinnedMeshRenderer
});
var zblend_trait_SkydomeMeshRenderer = function() {
	zblend_trait_MeshRenderer.call(this);
};
$hxClasses["zblend.trait.SkydomeMeshRenderer"] = zblend_trait_SkydomeMeshRenderer;
zblend_trait_SkydomeMeshRenderer.__name__ = ["zblend","trait","SkydomeMeshRenderer"];
zblend_trait_SkydomeMeshRenderer.__super__ = zblend_trait_MeshRenderer;
zblend_trait_SkydomeMeshRenderer.prototype = $extend(zblend_trait_MeshRenderer.prototype,{
	render: function(g) {
		var f12 = this.scene.camera.V._41;
		var f13 = this.scene.camera.V._42;
		var f14 = this.scene.camera.V._43;
		this.scene.camera.V._41 = 0;
		this.scene.camera.V._42 = -20;
		this.scene.camera.V._43 = 0;
		zblend_trait_MeshRenderer.prototype.render.call(this,g);
		this.scene.camera.V._41 = f12;
		this.scene.camera.V._42 = f13;
		this.scene.camera.V._43 = f14;
	}
	,__class__: zblend_trait_SkydomeMeshRenderer
});
var zblend_trait_ThirdPersonController = function() {
	this.turnRight = false;
	this.turnLeft = false;
	this.moveBackward = false;
	this.moveForward = false;
	zblend_core_Trait.call(this);
	kha_input_Keyboard.get().notify($bind(this,this.onDown),$bind(this,this.onUp));
	this.addInjector(new composure_injectors_PropInjector(zblend_trait_Transform,this,"transform",true,false,false,false,false));
	this.addInjector(new composure_injectors_PropInjector(zblend_trait_RigidBody,this,"body",true,false,false,false,false));
	this.addInjector(new composure_injectors_PropInjector(zblend_trait_Camera,this,"camera",false,true,false,false,false));
	this.addInjector(new composure_injectors_PropInjector(zblend_trait_Input,this,"input",true,false,false,false,false));
};
$hxClasses["zblend.trait.ThirdPersonController"] = zblend_trait_ThirdPersonController;
zblend_trait_ThirdPersonController.__name__ = ["zblend","trait","ThirdPersonController"];
zblend_trait_ThirdPersonController.__interfaces__ = [zblend_core_IUpdateable];
zblend_trait_ThirdPersonController.__super__ = zblend_core_Trait;
zblend_trait_ThirdPersonController.prototype = $extend(zblend_core_Trait.prototype,{
	onDown: function(key,$char) {
		if($char == "w") this.moveForward = true; else if($char == "s") this.moveBackward = true; else if($char == "a") this.turnLeft = true; else if($char == "d") this.turnRight = true;
	}
	,onUp: function(key,$char) {
		if($char == "w") this.moveForward = false; else if($char == "s") this.moveBackward = false; else if($char == "a") this.turnLeft = false; else if($char == "d") this.turnRight = false;
	}
	,update: function() {
		this.body.body.activate(false);
		this.body.body.setAngularFactor(new Ammo.btVector3(0,0,0));
		if(this.turnLeft) this.body.body.setAngularVelocity(new Ammo.btVector3(0,0,1)); else if(this.turnRight) this.body.body.setAngularVelocity(new Ammo.btVector3(0,0,-1)); else this.body.body.setAngularVelocity(new Ammo.btVector3(0,0,0));
		if(this.moveForward) {
			var f = this.transform.getForward();
			var lv = this.body.body.getLinearVelocity();
			this.body.setLinearVelocity(f.x,f.y,lv.z());
		} else if(this.moveBackward) {
			var f1 = this.transform.getForward();
			var lv1 = this.body.body.getLinearVelocity();
			this.body.setLinearVelocity(-f1.x,-f1.y,lv1.z());
		}
		this.camera.updateMatrix();
	}
	,__class__: zblend_trait_ThirdPersonController
});
var zblend_trait_Transform = function() {
	this.ax = 0;
	this.appendMatrix = null;
	this.nested = true;
	zblend_core_Trait.call(this);
	this.reset();
	this.addInjector(new composure_injectors_Injector(zblend_trait_Transform,$bind(this,this.addTransform),$bind(this,this.removeTransform),false,true,false,false,false,false));
};
$hxClasses["zblend.trait.Transform"] = zblend_trait_Transform;
zblend_trait_Transform.__name__ = ["zblend","trait","Transform"];
zblend_trait_Transform.__interfaces__ = [zblend_core_IUpdateable];
zblend_trait_Transform.__super__ = zblend_core_Trait;
zblend_trait_Transform.prototype = $extend(zblend_core_Trait.prototype,{
	addTransform: function(trait) {
		this.resized = true;
	}
	,removeTransform: function(trait) {
		this.resized = true;
	}
	,update: function() {
		if(this.dirty) {
			this.dirty = false;
			this.buildMatrix();
			if(Std["is"](this.item.get_parentItem(),zblend_core_Object)) (js_Boot.__cast(this.item.get_parentItem() , zblend_core_Object)).transform.resized = true;
			var $it0 = $iterator(this.group.get_children())();
			while( $it0.hasNext() ) {
				var c = $it0.next();
				if(js_Boot.__instanceof(c,zblend_core_Object)) {
					(js_Boot.__cast(c , zblend_core_Object)).transform.dirty = true;
					(js_Boot.__cast(c , zblend_core_Object)).transform.update();
				}
			}
		}
		if(this.resized) {
			this.updateSize();
			if(Std["is"](this.item.get_parentItem(),zblend_core_Object) && this.nested) (js_Boot.__cast(this.item.get_parentItem() , zblend_core_Object)).transform.resized = true;
		}
	}
	,reset: function() {
		this.matrix = new zblend_math_Mat4();
		this.pos = new zblend_math_Vec3();
		this.rot = new zblend_math_Quat();
		this.scale = new zblend_math_Vec3(1,1,1);
		this.size = new zblend_math_Vec3();
		this.absSize = new zblend_math_Vec3();
		this.color = kha__$Color_Color_$Impl_$._new(-1);
		this.anchor = new zblend_math_Vec3();
		this.dirty = true;
	}
	,buildMatrix: function() {
		this.rot.saveToMatrix(this.matrix);
		this.matrix.scale(this.scale);
		this.matrix._41 = this.pos.x - this.ax * this.size.x;
		this.matrix._42 = this.pos.y;
		this.matrix._43 = this.pos.z;
		if(this.appendMatrix != null) this.matrix.mult(this.appendMatrix);
		if(Std["is"](this.item.get_parentItem(),zblend_core_Object) && this.nested) this.matrix.mult((js_Boot.__cast(this.item.get_parentItem() , zblend_core_Object)).transform.matrix);
	}
	,setMatrix: function(mat) {
		this.matrix = mat;
		this.pos = this.matrix.pos(null);
		this.scale = this.matrix.scaleV();
		this.rot = this.matrix.getQuat();
	}
	,updateSize: function() {
		this.resized = false;
		var left = this.matrix._41;
		var top = this.matrix._42;
		var right = left + this.size.x * this.scale.x;
		var bottom = top + this.size.y * this.scale.y;
		var $it0 = $iterator(this.group.get_children())();
		while( $it0.hasNext() ) {
			var c = $it0.next();
			var child;
			child = (js_Boot.__cast(c , zblend_core_Object)).transform;
			if(child.matrix._41 < left) left = child.matrix._41; else if(child.matrix._41 + child.size.x * child.scale.x > right) right = child.matrix._41 + child.size.x * child.scale.x;
			if(child.matrix._42 < top) top = child.matrix._42; else if(child.matrix._42 + child.size.y * child.scale.y > bottom) bottom = child.matrix._42 + child.size.y * child.scale.y;
		}
		this.absSize.x = right - left;
		this.absSize.y = bottom - top;
	}
	,hitTest2D: function(x,y) {
		if(x >= this.matrix._41 && x <= this.matrix._41 + this.size.x * this.scale.x && y >= this.matrix._42 && y <= this.matrix._42 + this.size.y * this.scale.y) return true;
		return false;
	}
	,rotate: function(x,y,z) {
		var q = new zblend_math_Quat();
		q.setFromEuler(x,y,z);
		this.rot.multiply(q,this.rot);
		this.dirty = true;
	}
	,rotateX: function(f) {
		this.rotate(f,0,0);
	}
	,rotateY: function(f) {
		this.rotate(0,f,0);
	}
	,rotateZ: function(f) {
		this.rotate(0,0,f);
	}
	,setRotation: function(x,y,z) {
		this.rot.setFromEuler(x,y,z,"ZXY");
		this.dirty = true;
	}
	,getEuler: function() {
		var v = new zblend_math_Vec3();
		this.rot.toEuler(v);
		return v;
	}
	,setEuler: function(v) {
		this.rot.setFromEuler(v.x,v.y,v.z);
		this.dirty = true;
	}
	,getForward: function() {
		var mat = new zblend_math_Mat4();
		this.rot.saveToMatrix(mat);
		var f = new zblend_math_Vec3(0,1,0);
		f.applyProjection(mat);
		f = f.mult(zblend_sys_Time.delta * 200);
		return f;
	}
	,getBackward: function() {
		var mat = new zblend_math_Mat4();
		this.rot.saveToMatrix(mat);
		var f = new zblend_math_Vec3(0,-1,0);
		f.applyProjection(mat);
		f = f.mult(zblend_sys_Time.delta * 200);
		return f;
	}
	,getRight: function() {
		var mat = new zblend_math_Mat4();
		this.rot.saveToMatrix(mat);
		var f = new zblend_math_Vec3(1,0,0);
		f.applyProjection(mat);
		f = f.mult(zblend_sys_Time.delta * 200);
		return f;
	}
	,getLeft: function() {
		var mat = new zblend_math_Mat4();
		this.rot.saveToMatrix(mat);
		var f = new zblend_math_Vec3(-1,0,0);
		f.applyProjection(mat);
		f = f.mult(zblend_sys_Time.delta * 200);
		return f;
	}
	,getUp: function() {
		var mat = new zblend_math_Mat4();
		this.rot.saveToMatrix(mat);
		var f = new zblend_math_Vec3(0,0,1);
		f.applyProjection(mat);
		f = f.mult(zblend_sys_Time.delta * 200);
		return f;
	}
	,getDown: function() {
		var mat = new zblend_math_Mat4();
		this.rot.saveToMatrix(mat);
		var f = new zblend_math_Vec3(0,0,-1);
		f.applyProjection(mat);
		f = f.mult(zblend_sys_Time.delta * 200);
		return f;
	}
	,get_x: function() {
		return this.pos.x;
	}
	,set_x: function(f) {
		this.dirty = true;
		return this.pos.x = f;
	}
	,get_y: function() {
		return this.pos.y;
	}
	,set_y: function(f) {
		this.dirty = true;
		return this.pos.y = f;
	}
	,get_z: function() {
		return this.pos.z;
	}
	,set_z: function(f) {
		this.dirty = true;
		return this.pos.z = f;
	}
	,get_absx: function() {
		return this.matrix._41;
	}
	,get_absy: function() {
		return this.matrix._42;
	}
	,get_absz: function() {
		return this.matrix._43;
	}
	,get_w: function() {
		return this.size.x;
	}
	,set_w: function(f) {
		this.resized = true;
		return this.size.x = f;
	}
	,get_h: function() {
		return this.size.y;
	}
	,set_h: function(f) {
		this.resized = true;
		return this.size.y = f;
	}
	,get_d: function() {
		return this.size.z;
	}
	,set_d: function(f) {
		this.resized = true;
		return this.size.z = f;
	}
	,get_absw: function() {
		return this.absSize.x;
	}
	,get_absh: function() {
		return this.absSize.y;
	}
	,get_absd: function() {
		return this.absSize.z;
	}
	,get_r: function() {
		return kha__$Color_Color_$Impl_$.get_Rb(this.color) / 255;
	}
	,set_r: function(f) {
		this.dirty = true;
		this.color = Std["int"](kha__$Color_Color_$Impl_$.get_Ab(this.color) / 255 * 255) << 24 | (f * 255 | 0) << 16 | Std["int"](kha__$Color_Color_$Impl_$.get_Gb(this.color) / 255 * 255) << 8 | Std["int"](kha__$Color_Color_$Impl_$.get_Bb(this.color) / 255 * 255);
		return f;
	}
	,get_g: function() {
		return kha__$Color_Color_$Impl_$.get_Gb(this.color) / 255;
	}
	,set_g: function(f) {
		this.dirty = true;
		this.color = Std["int"](kha__$Color_Color_$Impl_$.get_Ab(this.color) / 255 * 255) << 24 | Std["int"](kha__$Color_Color_$Impl_$.get_Rb(this.color) / 255 * 255) << 16 | (f * 255 | 0) << 8 | Std["int"](kha__$Color_Color_$Impl_$.get_Bb(this.color) / 255 * 255);
		return f;
	}
	,get_b: function() {
		return kha__$Color_Color_$Impl_$.get_Bb(this.color) / 255;
	}
	,set_b: function(f) {
		this.dirty = true;
		this.color = Std["int"](kha__$Color_Color_$Impl_$.get_Ab(this.color) / 255 * 255) << 24 | Std["int"](kha__$Color_Color_$Impl_$.get_Rb(this.color) / 255 * 255) << 16 | Std["int"](kha__$Color_Color_$Impl_$.get_Gb(this.color) / 255 * 255) << 8 | (f * 255 | 0);
		return f;
	}
	,get_a: function() {
		return kha__$Color_Color_$Impl_$.get_Ab(this.color) / 255;
	}
	,set_a: function(f) {
		this.dirty = true;
		this.color = (f * 255 | 0) << 24 | Std["int"](kha__$Color_Color_$Impl_$.get_Rb(this.color) / 255 * 255) << 16 | Std["int"](kha__$Color_Color_$Impl_$.get_Gb(this.color) / 255 * 255) << 8 | Std["int"](kha__$Color_Color_$Impl_$.get_Bb(this.color) / 255 * 255);
		return f;
	}
	,get_val: function() {
		return this.color;
	}
	,set_val: function(i) {
		this.dirty = true;
		this.color = i;
		return this.color;
	}
	,__class__: zblend_trait_Transform
	,__properties__: $extend(zblend_core_Trait.prototype.__properties__,{set_val:"set_val",get_val:"get_val",set_a:"set_a",get_a:"get_a",set_b:"set_b",get_b:"get_b",set_g:"set_g",get_g:"get_g",set_r:"set_r",get_r:"get_r",get_absd:"get_absd",get_absh:"get_absh",get_absw:"get_absw",set_d:"set_d",get_d:"get_d",set_h:"set_h",get_h:"get_h",set_w:"set_w",get_w:"get_w",get_absz:"get_absz",get_absy:"get_absy",get_absx:"get_absx",set_z:"set_z",get_z:"get_z",set_y:"set_y",get_y:"get_y",set_x:"set_x",get_x:"get_x"})
});
var zblend_trait_VehicleBody = function(wheelName1,wheelName2,wheelName3,wheelName4) {
	this.maxBreakingForce = 100.0;
	this.maxEngineForce = 3000.0;
	this.gVehicleSteering = 0.0;
	this.gBreakingForce = 0.0;
	this.gEngineForce = 0.0;
	this.m_vehicle = null;
	this.camera = null;
	this.wheels = [];
	this.physics = null;
	zblend_core_Trait.call(this);
	this.wheelNames = ["Wheel0","Wheel1","Wheel2","Wheel3"];
	zblend_Root.gameScene.registerInit($bind(this,this.start));
	this.addInjector(new composure_injectors_PropInjector(zblend_trait_KeyInput,this,"input",true,false,false,false,false));
	this.addInjector(new composure_injectors_PropInjector(zblend_trait_PhysicsScene,this,"physics",true,false,true,false,false));
	this.addInjector(new composure_injectors_PropInjector(zblend_trait_Transform,this,"transform",true,false,false,false,false));
	this.addInjector(new composure_injectors_PropInjector(zblend_trait_Camera,this,"camera",false,true,false,false,false));
};
$hxClasses["zblend.trait.VehicleBody"] = zblend_trait_VehicleBody;
zblend_trait_VehicleBody.__name__ = ["zblend","trait","VehicleBody"];
zblend_trait_VehicleBody.__interfaces__ = [zblend_core_IUpdateable];
zblend_trait_VehicleBody.__super__ = zblend_core_Trait;
zblend_trait_VehicleBody.prototype = $extend(zblend_core_Trait.prototype,{
	start: function() {
		var _g = 0;
		var _g1 = this.wheelNames;
		while(_g < _g1.length) {
			var n = _g1[_g];
			++_g;
			this.wheels.push(zblend_Root.root.getChild(n).getTrait(zblend_trait_VehicleWheel));
		}
		this.init();
	}
	,init: function() {
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
		var chassisShape = new Ammo.btBoxShape(new Ammo.btVector3(this.transform.size.x / 2,this.transform.size.y / 2,this.transform.size.z / 2));
		var compound = new Ammo.btCompoundShape();
		var localTrans = new Ammo.btTransform();
		localTrans.setIdentity();
		localTrans.setOrigin(new Ammo.btVector3(0,0,1));
		compound.addChildShape(localTrans,chassisShape);
		var tr = new Ammo.btTransform();
		tr.setIdentity();
		tr.setOrigin(new Ammo.btVector3(this.transform.pos.x,this.transform.pos.y,this.transform.pos.z));
		tr.setRotation(new Ammo.btQuaternion(this.transform.rot.x,this.transform.rot.y,this.transform.rot.z,this.transform.rot.w));
		this.startTransform = tr;
		this.m_carChassis = this.createRigidBody(500,compound);
		var m_tuning = new Ammo.btVehicleTuning();
		var m_vehicleRayCaster = new Ammo.btDefaultVehicleRaycaster(this.physics.world);
		this.m_vehicle = new Ammo.btRaycastVehicle(m_tuning,this.m_carChassis,m_vehicleRayCaster);
		this.m_carChassis.setActivationState(4);
		this.m_vehicle.setCoordinateSystem(rightIndex,upIndex,forwardIndex);
		var _g = 0;
		var _g1 = this.wheels;
		while(_g < _g1.length) {
			var w = _g1[_g];
			++_g;
			this.m_vehicle.addWheel(w.connectionPointCS0,wheelDirectionCS0,wheelAxleCS,suspensionRestLength,w.wheelRadius,m_tuning,w.isFrontWheel);
		}
		var _g11 = 0;
		var _g2 = this.m_vehicle.getNumWheels();
		while(_g11 < _g2) {
			var i = _g11++;
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
		if(this.input.up) this.gEngineForce = this.maxEngineForce; else if(this.input.down) this.gEngineForce = -this.maxEngineForce; else {
			this.gEngineForce = 0;
			this.gBreakingForce = 20;
		}
		if(this.input.left) this.gVehicleSteering = 0.2; else if(this.input.right) this.gVehicleSteering = -0.2; else this.gVehicleSteering = 0;
		var veh = this.m_vehicle;
		veh.applyEngineForce(this.gEngineForce,2);
		veh.setBrake(this.gBreakingForce,2);
		veh.applyEngineForce(this.gEngineForce,3);
		veh.setBrake(this.gBreakingForce,3);
		veh.setSteeringValue(this.gVehicleSteering,0);
		veh.setSteeringValue(this.gVehicleSteering,1);
		var _g1 = 0;
		var _g = veh.getNumWheels();
		while(_g1 < _g) {
			var i = _g1++;
			veh.updateWheelTransform(i,true);
			var trans1 = veh.getWheelTransformWS(i);
			var p1 = trans1.getOrigin();
			var q1 = trans1.getRotation();
			this.wheels[i].transform.pos.set(p1.x(),p1.y(),p1.z());
			this.wheels[i].transform.rot.set(q1.x(),q1.y(),q1.z(),q1.w());
			this.wheels[i].transform.dirty = true;
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
		var cInfo = new Ammo.btRigidBodyConstructionInfo(mass,myMotionState,shape,localInertia);
		var body = new Ammo.btRigidBody(cInfo);
		body.setLinearVelocity(new Ammo.btVector3(0,0,0));
		body.setAngularVelocity(new Ammo.btVector3(0,0,0));
		this.physics.world.addRigidBody(body);
		return body;
	}
	,__class__: zblend_trait_VehicleBody
});
var zblend_trait_VehicleWheel = function(id) {
	this.wheelWidth = 0.35;
	this.wheelRadius = 0.715;
	zblend_core_Trait.call(this);
	this.id = id;
	var CUBE_HALF_EXTENTS = 1;
	var connectionHeight = 0.9;
	if(id == 0) {
		this.isFrontWheel = true;
		this.connectionPointCS0 = new Ammo.btVector3(CUBE_HALF_EXTENTS - 0.3 * this.wheelWidth,2 * CUBE_HALF_EXTENTS - this.wheelRadius,connectionHeight);
	} else if(id == 1) {
		this.isFrontWheel = true;
		this.connectionPointCS0 = new Ammo.btVector3(-CUBE_HALF_EXTENTS + 0.3 * this.wheelWidth,2 * CUBE_HALF_EXTENTS - this.wheelRadius,connectionHeight);
	} else if(id == 2) {
		this.isFrontWheel = false;
		this.connectionPointCS0 = new Ammo.btVector3(-CUBE_HALF_EXTENTS + 0.3 * this.wheelWidth,-2 * CUBE_HALF_EXTENTS + this.wheelRadius,connectionHeight);
	} else if(id == 3) {
		this.isFrontWheel = false;
		this.connectionPointCS0 = new Ammo.btVector3(CUBE_HALF_EXTENTS - 0.3 * this.wheelWidth,-2 * CUBE_HALF_EXTENTS + this.wheelRadius,connectionHeight);
	}
	this.addInjector(new composure_injectors_PropInjector(zblend_trait_Transform,this,"transform",true,false,false,false,false));
};
$hxClasses["zblend.trait.VehicleWheel"] = zblend_trait_VehicleWheel;
zblend_trait_VehicleWheel.__name__ = ["zblend","trait","VehicleWheel"];
zblend_trait_VehicleWheel.__super__ = zblend_core_Trait;
zblend_trait_VehicleWheel.prototype = $extend(zblend_core_Trait.prototype,{
	__class__: zblend_trait_VehicleWheel
});
var zblend_trait_WaterRenderer = function() {
	zblend_trait_Renderer.call(this);
	this.mvpMatrix = new zblend_math_Mat4();
	this.time = new zblend_math_Vec3();
	this.addInjector(new composure_injectors_PropInjector(zblend_trait_GameScene,this,"scene",false,false,true,false,false));
	this.addInjector(new composure_injectors_Injector(zblend_trait_Transform,$bind(this,this.addTransform),null,true,false,false,false,false,false));
};
$hxClasses["zblend.trait.WaterRenderer"] = zblend_trait_WaterRenderer;
zblend_trait_WaterRenderer.__name__ = ["zblend","trait","WaterRenderer"];
zblend_trait_WaterRenderer.__interfaces__ = [zblend_core_ILateRenderable];
zblend_trait_WaterRenderer.__super__ = zblend_trait_Renderer;
zblend_trait_WaterRenderer.prototype = $extend(zblend_trait_Renderer.prototype,{
	initConstants: function() {
	}
	,addTransform: function(trait) {
		this.transform = trait;
		this.transform.size.x = this.mesh.geometry.size.x * this.transform.scale.x;
		this.transform.size.y = this.mesh.geometry.size.y * this.transform.scale.y;
		this.transform.size.z = this.mesh.geometry.size.z * this.transform.scale.z;
	}
	,render: function(g) {
		this.mvpMatrix.identity();
		this.mvpMatrix.mult(this.transform.matrix);
		this.mvpMatrix.mult(this.scene.camera.V);
		this.mvpMatrix.mult(this.scene.camera.P);
		this.time.x += zblend_sys_Time.delta;
		g.setVertexBuffer(this.mesh.geometry.vertexBuffer);
		g.setIndexBuffer(this.mesh.geometry.indexBuffers[0]);
		g.setProgram(this.mesh.materials[0].shader.program);
		this.setConstants(g);
		g.drawIndexedVertices();
	}
	,__class__: zblend_trait_WaterRenderer
});
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
var DataView = (Function("return typeof DataView != 'undefined' ? DataView : null"))() || js_html_compat_DataView;
var Float32Array = (Function("return typeof Float32Array != 'undefined' ? Float32Array : null"))() || js_html_compat_Float32Array._new;
var Uint8Array = (Function("return typeof Uint8Array != 'undefined' ? Uint8Array : null"))() || js_html_compat_Uint8Array._new;
msignal_SlotList.NIL = new msignal_SlotList(null,null);
org_tbyrne_logging_LogType.devInfo = "devInfo";
org_tbyrne_logging_LogType.devWarning = "devWarning";
org_tbyrne_logging_LogType.devError = "devError";
org_tbyrne_logging_LogType.userInfo = "userInfo";
org_tbyrne_logging_LogType.userWarning = "userWarning";
org_tbyrne_logging_LogType.userError = "userError";
org_tbyrne_logging_LogType.performanceWarning = "performanceWarning";
org_tbyrne_logging_LogType.deprecationWarning = "deprecationWarning";
org_tbyrne_logging_LogType.externalError = "externalError";
LazyInst._metaName = "lazyInst";
composure_prom_Promises._typeInfo = new haxe_ds_StringMap();
composure_traits_TraitCollection.__meta__ = { fields : { traitAdded : { lazyInst : null}, traitRemoved : { lazyInst : null}}};
haxe_Serializer.USE_CACHE = false;
haxe_Serializer.USE_ENUM_INDEX = false;
haxe_Serializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
haxe_Unserializer.DEFAULT_RESOLVER = Type;
haxe_Unserializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
haxe_ds_ObjectMap.count = 0;
haxe_io_FPHelper.i64tmp = (function($this) {
	var $r;
	var x = new haxe__$Int64__$_$_$Int64(0,0);
	$r = x;
	return $r;
}(this));
js_Boot.__toStr = {}.toString;
js_html_compat_Float32Array.BYTES_PER_ELEMENT = 4;
js_html_compat_Uint8Array.BYTES_PER_ELEMENT = 1;
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
kha_Configuration.id = -1;
kha_Game.FPS = 60;
kha_FontStyle.Default = new kha_FontStyle(false,false,false);
kha_Kravur.fontCache = new haxe_ds_StringMap();
kha_Scheduler.DIF_COUNT = 3;
kha_Scheduler.maxframetime = 0.5;
kha_Scheduler.startTime = 0;
kha_Scheduler.lastNow = 0;
kha_Starter.leftMouseCtrlDown = false;
kha_Sys.screenRotation = kha_ScreenRotation.RotationNone;
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
kha_graphics4_ImageShaderPainter.bufferSize = 1500;
kha_graphics4_ImageShaderPainter.vertexSize = 9;
kha_graphics4_ColoredShaderPainter.bufferSize = 100;
kha_graphics4_ColoredShaderPainter.triangleBufferSize = 100;
kha_graphics4_TextShaderPainter.bufferSize = 100;
kha_input_Keyboard.__meta__ = { fields : { sendDownEvent : { input : null}, sendUpEvent : { input : null}}};
kha_js_Mouse.SystemCursor = "default";
kha_js_Music.loading = new List();
kha_js_Sound.loading = new List();
kha_js_Video.loading = new List();
kha_math_Matrix3.width = 3;
kha_math_Matrix3.height = 3;
kha_math_Matrix4.width = 4;
kha_math_Matrix4.height = 4;
motion_actuators_SimpleActuator.actuators = [];
motion_actuators_SimpleActuator.actuatorsLength = 0;
motion_actuators_SimpleActuator.addedEvent = false;
motion_Actuate.defaultActuator = motion_actuators_SimpleActuator;
motion_Actuate.defaultEase = motion_easing_Expo.get_easeOut();
motion_Actuate.targetLibraries = new haxe_ds_ObjectMap();
my_$project_CameraController.__meta__ = { fields : { camera : { inject : null}, transform : { inject : null}}};
my_$project_MazeGenerator.tileSize = 2;
zblend_core_FrameRenderer.__meta__ = { fields : { addRenderTrait : { injectAdd : [{ desc : true, sibl : false}]}, removeRenderTrait : { injectRemove : null}, addLateRenderTrait : { injectAdd : [{ desc : true, sibl : false}]}, removeLateRenderTrait : { injectRemove : null}}};
zblend_core_FrameRenderer.numRenders = 0;
zblend_core_FrameRenderer2D.__meta__ = { fields : { addRenderTrait : { injectAdd : [{ desc : true, sibl : false}]}, removeRenderTrait : { injectRemove : null}, addLateRenderTrait : { injectAdd : [{ desc : true, sibl : false}]}, removeLateRenderTrait : { injectRemove : null}}};
zblend_core_FrameUpdater.__meta__ = { fields : { addUpdateTrait : { injectAdd : [{ desc : true, sibl : false}]}, removeUpdateTrait : { injectRemove : null}, addLateUpdateTrait : { injectAdd : [{ desc : true, sibl : false}]}, removeLateUpdateTrait : { injectRemove : null}}};
zblend_math_Mat4.tmp = new zblend_math_Mat4();
zblend_math_Math.PI = 3.14159265358979323;
zblend_math_Math.EPSILON = 1e-10;
zblend_math_Math.Rad2Deg = 57.2957795130823229;
zblend_math_Math.Deg2Rad = 0.0174532925199432955;
zblend_math_Vec3.Vec3_tangents_n = new zblend_math_Vec3();
zblend_math_Vec3.Vec3_tangents_randVec = new zblend_math_Vec3();
zblend_math_Quat.Quaternion_mult_va = new zblend_math_Vec3();
zblend_math_Quat.Quaternion_mult_vb = new zblend_math_Vec3();
zblend_math_Quat.Quaternion_mult_vaxvb = new zblend_math_Vec3();
zblend_sys_Assets.geometries = new haxe_ds_StringMap();
zblend_sys_Assets.materials = new haxe_ds_StringMap();
zblend_sys_Assets.meshes = new haxe_ds_StringMap();
zblend_sys_Assets.shaders = new haxe_ds_StringMap();
zblend_sys_Assets.atlases = new haxe_ds_StringMap();
zblend_sys_Time.delta = 0;
zblend_trait_Animation.__meta__ = { fields : { addTransform : { injectAdd : null}}};
zblend_trait_Renderer.__meta__ = { fields : { addMeshLink : { injectAdd : null}}};
zblend_trait_BillboardRenderer.__meta__ = { fields : { scene : { inject : [{ asc : true, sibl : false}]}, addTransform : { injectAdd : null}}};
zblend_trait_BillboardRenderer.CONST_MAT4_M = 0;
zblend_trait_BillboardRenderer.CONST_MAT4_V = 1;
zblend_trait_BillboardRenderer.CONST_MAT4_P = 2;
zblend_trait_BillboardRenderer.CONST_VEC3_BCW = 3;
zblend_trait_BillboardRenderer.CONST_VEC3_BS = 4;
zblend_trait_BillboardRenderer.CONST_VEC3_CRW = 5;
zblend_trait_BillboardRenderer.CONST_VEC3_CUW = 6;
zblend_trait_BillboardRenderer.CONST_B_TEXTURING = 7;
zblend_trait_BillboardRenderer.CONST_TEX_STEX = 0;
zblend_trait_Camera.__meta__ = { fields : { addTransform : { injectAdd : null}}};
zblend_trait_CameraRotator.__meta__ = { fields : { input : { inject : null}, addCamera : { injectAdd : null}}};
zblend_trait_FirstPersonController.__meta__ = { fields : { transform : { inject : null}, body : { inject : null}, camera : { inject : [{ desc : true, sibl : false}]}, input : { inject : null}}};
zblend_trait_GameScene.__meta__ = { fields : { camera : { inject : [{ desc : true, sibl : true}]}, addLight : { injectAdd : [{ desc : true, sibl : true}]}}};
zblend_trait_Input._layer = 0;
zblend_trait_Input._started = false;
zblend_trait_Input._touch = false;
zblend_trait_Input._released = false;
zblend_trait_Input._moved = false;
zblend_trait_Input._x = 0;
zblend_trait_Input._y = 0;
zblend_trait_Input._deltaX = 0;
zblend_trait_Input._deltaY = 0;
zblend_trait_Light.__meta__ = { fields : { transform : { inject : null}}};
zblend_trait_MeshRenderer.__meta__ = { fields : { scene : { inject : [{ asc : true, sibl : false}]}, addTransform : { injectAdd : null}}};
zblend_trait_MeshRenderer.CONST_SHADOW_MAT4_DBMVP = 0;
zblend_trait_MeshRenderer.CONST_MAT4_M = 0;
zblend_trait_MeshRenderer.CONST_MAT4_V = 1;
zblend_trait_MeshRenderer.CONST_MAT4_P = 2;
zblend_trait_MeshRenderer.CONST_MAT4_DBMVP = 3;
zblend_trait_MeshRenderer.CONST_VEC4_COLOR = 4;
zblend_trait_MeshRenderer.CONST_VEC3_LIGHT = 5;
zblend_trait_MeshRenderer.CONST_VEC3_EYE = 6;
zblend_trait_MeshRenderer.CONST_VEC3_SC = 7;
zblend_trait_MeshRenderer.CONST_VEC4_DC = 8;
zblend_trait_MeshRenderer.CONST_B_TEXTURING = 9;
zblend_trait_MeshRenderer.CONST_B_LIGHTING = 10;
zblend_trait_MeshRenderer.CONST_B_RECEIVE_SHADOW = 11;
zblend_trait_MeshRenderer.CONST_F_ROUGHNESS = 12;
zblend_trait_MeshRenderer.CONST_TEX_STEX = 0;
zblend_trait_MeshRenderer.CONST_TEX_SMAP = 1;
zblend_trait_ParticlesRenderer.__meta__ = { fields : { scene : { inject : [{ asc : true, sibl : false}]}, addTransform : { injectAdd : null}}};
zblend_trait_PhysicsDrag.__meta__ = { fields : { physics : { inject : [{ asc : true, sibl : false}]}, input : { inject : null}}};
zblend_trait_RigidBody.__meta__ = { fields : { physics : { inject : [{ asc : true, sibl : true}]}, transform : { inject : null}, meshLink : { inject : null}, onPromiseMet : { promise : ["transform","physics","meshLink"]}}};
zblend_trait_RigidBody.SHAPE_BOX = 0;
zblend_trait_RigidBody.SHAPE_SPHERE = 1;
zblend_trait_RigidBody.SHAPE_CONVEX_HULL = 2;
zblend_trait_RigidBody.SHAPE_MESH = 3;
zblend_trait_RigidBody.SHAPE_CONE = 4;
zblend_trait_RigidBody.SHAPE_CYLINDER = 5;
zblend_trait_RigidBody.SHAPE_CAPSULE = 6;
zblend_trait_RigidBody.SHAPE_TERRAIN = 7;
zblend_trait_RigidBody.SHAPE_STATIC_MESH = 8;
zblend_trait_RigidBody.nextId = 0;
zblend_trait_SceneInstance.__meta__ = { fields : { addTransform : { injectAdd : null}}};
zblend_trait_SkinnedMeshRenderer.__meta__ = { fields : { animation : { inject : null}}};
zblend_trait_ThirdPersonController.__meta__ = { fields : { transform : { inject : null}, body : { inject : null}, camera : { inject : [{ desc : true, sibl : false}]}, input : { inject : null}}};
zblend_trait_Transform.__meta__ = { fields : { addTransform : { injectAdd : [{ desc : true, sibl : false}]}, removeTransform : { injectRemove : [{ desc : true, sibl : false}]}}};
zblend_trait_VehicleBody.__meta__ = { fields : { input : { inject : null}, physics : { inject : [{ asc : true, sibl : true}]}, transform : { inject : null}, camera : { inject : [{ desc : true, sibl : false}]}}};
zblend_trait_VehicleWheel.__meta__ = { fields : { transform : { inject : null}}};
zblend_trait_WaterRenderer.__meta__ = { fields : { scene : { inject : [{ asc : true, sibl : false}]}, addTransform : { injectAdd : null}}};
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}}, typeof window != "undefined" ? window : exports);
