var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.5vv_20190703_syb_scopedata*/window.__wcc_version__='v0.5vv_20190703_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, r, c){
p.extraAttr = {"t_action": a, "t_rawid": r };
if ( typeof(c) != 'undefined' ) p.extraAttr.t_cid = c;
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'card data-v-4de5e511'])
Z([3,'data-v-4de5e511'])
Z([3,'-'])
Z([3,'card-name data-v-4de5e511'])
Z([a,[[7],[3,'cardTitle']]])
Z(z[1])
Z(z[2])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'Goods data-v-45f426f1'])
Z([[2,'+'],[1,'flex-wrap:'],[[7],[3,'wrap']]])
Z([3,'__i0__'])
Z([3,'item'])
Z([[7],[3,'goodsList']])
Z([3,'GoodItem data-v-45f426f1'])
Z([[2,'+'],[1,'width:'],[[7],[3,'itemWidth']]])
Z([3,'data-v-45f426f1'])
Z([[6],[[7],[3,'item']],[3,'imgUrl']])
Z([[2,'+'],[1,'height:'],[[7],[3,'itemHeight']]])
Z([3,'GoodItem-content data-v-45f426f1'])
Z([3,'goods-name data-v-45f426f1'])
Z([[2,'+'],[1,'fontSize:'],[[7],[3,'textSize']]])
Z([a,[[6],[[7],[3,'item']],[3,'name']]])
Z(z[7])
Z([3,'pprice data-v-45f426f1'])
Z([a,[[2,'+'],[1,'¥'],[[6],[[7],[3,'item']],[3,'pprice']]]])
Z([3,'oprice data-v-45f426f1'])
Z([a,[[2,'+'],[1,'¥'],[[6],[[7],[3,'item']],[3,'oprice']]]])
Z([3,'discount data-v-45f426f1'])
Z([a,[[2,'+'],[[6],[[7],[3,'item']],[3,'discount']],[1,'折']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'GoodList'])
Z([3,'__l'])
Z([[7],[3,'goodsList']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'Hots data-v-a09fec54'])
Z([3,'__l'])
Z([3,'data-v-a09fec54'])
Z([[7],[3,'hostsList']])
Z([3,'220rpx'])
Z([3,'249rpx'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'icons data-v-22a8798c'])
Z([3,'icons-item data-v-22a8798c'])
Z([3,'icons-img data-v-22a8798c'])
Z([3,'../../static/img/icons1.png'])
Z([3,'f-color data-v-22a8798c'])
Z([3,'运动户外'])
Z(z[1])
Z(z[2])
Z([3,'../../static/img/icons2.png'])
Z(z[4])
Z(z[5])
Z(z[1])
Z(z[2])
Z([3,'../../static/img/icons3.png'])
Z(z[4])
Z(z[5])
Z(z[1])
Z(z[2])
Z([3,'../../static/img/icons4.png'])
Z(z[4])
Z(z[5])
Z(z[1])
Z(z[2])
Z([3,'../../static/img/icons5.png'])
Z(z[4])
Z(z[5])
Z(z[1])
Z(z[2])
Z([3,'../../static/img/icons6.png'])
Z(z[4])
Z(z[5])
Z(z[1])
Z(z[2])
Z([3,'../../static/img/icons7.png'])
Z(z[4])
Z(z[5])
Z(z[1])
Z(z[2])
Z([3,'../../static/img/icons8.png'])
Z(z[4])
Z(z[5])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'recommend bg-color data-v-536f5bdc'])
Z([3,'recommend-item data-v-536f5bdc'])
Z([3,'item-big data-v-536f5bdc'])
Z([3,'../../static/img/Children.jpg'])
Z([3,'item-small data-v-536f5bdc'])
Z([3,'item-img data-v-536f5bdc'])
Z([3,'../../static/img/Children1.jpg'])
Z(z[5])
Z([3,'../../static/img/Children2.jpg'])
Z(z[5])
Z([3,'../../static/img/Children3.jpg'])
Z(z[1])
Z(z[2])
Z([3,'../../static/img/Furnishing.jpg'])
Z(z[4])
Z(z[5])
Z([3,'../../static/img/Furnishing1.jpg'])
Z(z[5])
Z([3,'../../static/img/Furnishing2.jpg'])
Z(z[5])
Z([3,'../../static/img/Furnishing3.jpg'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'Shop data-v-a94251f4'])
Z([3,'Shop-item data-v-a94251f4'])
Z([3,'shop-big data-v-a94251f4'])
Z(z[2])
Z([3,'../../static/img/shop.jpg'])
Z([3,'scroll-content data-v-a94251f4'])
Z([3,'true'])
Z([3,'scroll-item data-v-a94251f4'])
Z([3,'__l'])
Z([3,'data-v-a94251f4'])
Z([[7],[3,'shopList']])
Z([3,'200rpx'])
Z(z[11])
Z([3,'20rpx'])
Z([3,'1'])
Z([3,'nowrap'])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'banner data-v-1d48561c'])
Z([3,'data-v-1d48561c'])
Z([3,'../../static/img/banner1.jpg'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'data-v-a39bbbac'])
Z([1,true])
Z(z[0])
Z([1,1000])
Z(z[1])
Z([1,3000])
Z(z[0])
Z([3,'swiper-item data-v-a39bbbac'])
Z(z[0])
Z([3,'../../static/img/swiper1.jpg'])
Z(z[0])
Z(z[7])
Z(z[0])
Z([3,'../../static/img/swiper2.jpg'])
Z(z[0])
Z(z[7])
Z(z[0])
Z([3,'../../static/img/swiper3.jpg'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'f-active-color'])
Z([3,'123'])
Z([3,'iconfont icon-xiaoxi'])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'f-active-color'])
Z([3,'123'])
Z([3,'iconfont icon-xiaoxi'])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content data-v-4e9211c4'])
Z([3,'scroll-content data-v-4e9211c4'])
Z([[7],[3,'ScrollIndex']])
Z([3,'true'])
Z([3,'i'])
Z([3,'item'])
Z([[7],[3,'topBar']])
Z(z[4])
Z([3,'__e'])
Z([3,'data-v-4e9211c4'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'tabBarClick']],[[4],[[5],[[7],[3,'i']]]]]]]]]]]])
Z([[2,'+'],[1,'top'],[[7],[3,'i']]])
Z([[4],[[5],[[5],[1,'data-v-4e9211c4']],[[2,'?:'],[[2,'=='],[[7],[3,'i']],[[7],[3,'tabBarIndex']]],[1,'f-active-color'],[1,'f-color']]]])
Z([a,[[6],[[7],[3,'item']],[3,'name']]])
Z(z[8])
Z(z[9])
Z([[7],[3,'tabBarIndex']])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'SwiperChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[7],[3,'ClientHeight']]],[1,'px']])
Z(z[4])
Z(z[5])
Z(z[6])
Z(z[4])
Z(z[9])
Z([3,'home-nav data-v-4e9211c4'])
Z(z[9])
Z([3,'__l'])
Z(z[9])
Z([[2,'+'],[1,'1-'],[[7],[3,'i']]])
Z(z[26])
Z([3,'猜你喜欢'])
Z(z[9])
Z([[2,'+'],[1,'2-'],[[7],[3,'i']]])
Z(z[26])
Z(z[9])
Z([[2,'+'],[1,'3-'],[[7],[3,'i']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'f-active-color'])
Z([3,'123'])
Z([3,'iconfont icon-xiaoxi'])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/common/Card.wxml','./components/common/GoodItem.wxml','./components/common/GoodList.wxml','./components/index/Hots.wxml','./components/index/Icons.wxml','./components/index/Recommend.wxml','./components/index/Shop.wxml','./components/index/banner.wxml','./components/index/indexSwiper.wxml','./pages/car/car.wxml','./pages/category/category.wxml','./pages/index/index.wxml','./pages/my/my.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_n('view')
_rz(z,oB,'class',0,e,s,gg)
var xC=_n('view')
_rz(z,xC,'class',1,e,s,gg)
var oD=_oz(z,2,e,s,gg)
_(xC,oD)
_(oB,xC)
var fE=_n('view')
_rz(z,fE,'class',3,e,s,gg)
var cF=_oz(z,4,e,s,gg)
_(fE,cF)
_(oB,fE)
var hG=_n('view')
_rz(z,hG,'class',5,e,s,gg)
var oH=_oz(z,6,e,s,gg)
_(hG,oH)
_(oB,hG)
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var oJ=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var lK=_v()
_(oJ,lK)
var aL=function(eN,tM,bO,gg){
var xQ=_mz(z,'view',['class',5,'style',1],[],eN,tM,gg)
var oR=_mz(z,'image',['mode',-1,'class',7,'src',1,'style',2],[],eN,tM,gg)
_(xQ,oR)
var fS=_n('view')
_rz(z,fS,'class',10,eN,tM,gg)
var cT=_mz(z,'text',['class',11,'style',1],[],eN,tM,gg)
var hU=_oz(z,13,eN,tM,gg)
_(cT,hU)
_(fS,cT)
var oV=_n('view')
_rz(z,oV,'class',14,eN,tM,gg)
var cW=_n('text')
_rz(z,cW,'class',15,eN,tM,gg)
var oX=_oz(z,16,eN,tM,gg)
_(cW,oX)
_(oV,cW)
var lY=_n('text')
_rz(z,lY,'class',17,eN,tM,gg)
var aZ=_oz(z,18,eN,tM,gg)
_(lY,aZ)
_(oV,lY)
_(fS,oV)
var t1=_n('text')
_rz(z,t1,'class',19,eN,tM,gg)
var e2=_oz(z,20,eN,tM,gg)
_(t1,e2)
_(fS,t1)
_(xQ,fS)
_(bO,xQ)
return bO
}
lK.wxXCkey=2
_2z(z,4,aL,e,s,gg,lK,'item','__i0__','')
_(r,oJ)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var o4=_n('view')
_rz(z,o4,'class',0,e,s,gg)
var x5=_mz(z,'good-item',['bind:__l',1,'goodsList',1,'vueId',2],[],e,s,gg)
_(o4,x5)
_(r,o4)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var f7=_n('view')
_rz(z,f7,'class',0,e,s,gg)
var c8=_mz(z,'good-item',['bind:__l',1,'class',1,'goodsList',2,'itemHeight',3,'itemWidth',4,'vueId',5],[],e,s,gg)
_(f7,c8)
_(r,f7)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var o0=_n('view')
_rz(z,o0,'class',0,e,s,gg)
var cAB=_n('view')
_rz(z,cAB,'class',1,e,s,gg)
var oBB=_mz(z,'image',['mode',-1,'class',2,'src',1],[],e,s,gg)
_(cAB,oBB)
var lCB=_n('text')
_rz(z,lCB,'class',4,e,s,gg)
var aDB=_oz(z,5,e,s,gg)
_(lCB,aDB)
_(cAB,lCB)
_(o0,cAB)
var tEB=_n('view')
_rz(z,tEB,'class',6,e,s,gg)
var eFB=_mz(z,'image',['mode',-1,'class',7,'src',1],[],e,s,gg)
_(tEB,eFB)
var bGB=_n('text')
_rz(z,bGB,'class',9,e,s,gg)
var oHB=_oz(z,10,e,s,gg)
_(bGB,oHB)
_(tEB,bGB)
_(o0,tEB)
var xIB=_n('view')
_rz(z,xIB,'class',11,e,s,gg)
var oJB=_mz(z,'image',['mode',-1,'class',12,'src',1],[],e,s,gg)
_(xIB,oJB)
var fKB=_n('text')
_rz(z,fKB,'class',14,e,s,gg)
var cLB=_oz(z,15,e,s,gg)
_(fKB,cLB)
_(xIB,fKB)
_(o0,xIB)
var hMB=_n('view')
_rz(z,hMB,'class',16,e,s,gg)
var oNB=_mz(z,'image',['mode',-1,'class',17,'src',1],[],e,s,gg)
_(hMB,oNB)
var cOB=_n('text')
_rz(z,cOB,'class',19,e,s,gg)
var oPB=_oz(z,20,e,s,gg)
_(cOB,oPB)
_(hMB,cOB)
_(o0,hMB)
var lQB=_n('view')
_rz(z,lQB,'class',21,e,s,gg)
var aRB=_mz(z,'image',['mode',-1,'class',22,'src',1],[],e,s,gg)
_(lQB,aRB)
var tSB=_n('text')
_rz(z,tSB,'class',24,e,s,gg)
var eTB=_oz(z,25,e,s,gg)
_(tSB,eTB)
_(lQB,tSB)
_(o0,lQB)
var bUB=_n('view')
_rz(z,bUB,'class',26,e,s,gg)
var oVB=_mz(z,'image',['mode',-1,'class',27,'src',1],[],e,s,gg)
_(bUB,oVB)
var xWB=_n('text')
_rz(z,xWB,'class',29,e,s,gg)
var oXB=_oz(z,30,e,s,gg)
_(xWB,oXB)
_(bUB,xWB)
_(o0,bUB)
var fYB=_n('view')
_rz(z,fYB,'class',31,e,s,gg)
var cZB=_mz(z,'image',['mode',-1,'class',32,'src',1],[],e,s,gg)
_(fYB,cZB)
var h1B=_n('text')
_rz(z,h1B,'class',34,e,s,gg)
var o2B=_oz(z,35,e,s,gg)
_(h1B,o2B)
_(fYB,h1B)
_(o0,fYB)
var c3B=_n('view')
_rz(z,c3B,'class',36,e,s,gg)
var o4B=_mz(z,'image',['mode',-1,'class',37,'src',1],[],e,s,gg)
_(c3B,o4B)
var l5B=_n('text')
_rz(z,l5B,'class',39,e,s,gg)
var a6B=_oz(z,40,e,s,gg)
_(l5B,a6B)
_(c3B,l5B)
_(o0,c3B)
_(r,o0)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var e8B=_n('view')
_rz(z,e8B,'class',0,e,s,gg)
var b9B=_n('view')
_rz(z,b9B,'class',1,e,s,gg)
var o0B=_mz(z,'image',['mode',-1,'class',2,'src',1],[],e,s,gg)
_(b9B,o0B)
var xAC=_n('view')
_rz(z,xAC,'class',4,e,s,gg)
var oBC=_mz(z,'image',['mode',-1,'class',5,'src',1],[],e,s,gg)
_(xAC,oBC)
var fCC=_mz(z,'image',['mode',-1,'class',7,'src',1],[],e,s,gg)
_(xAC,fCC)
var cDC=_mz(z,'image',['mode',-1,'class',9,'src',1],[],e,s,gg)
_(xAC,cDC)
_(b9B,xAC)
_(e8B,b9B)
var hEC=_n('view')
_rz(z,hEC,'class',11,e,s,gg)
var oFC=_mz(z,'image',['mode',-1,'class',12,'src',1],[],e,s,gg)
_(hEC,oFC)
var cGC=_n('view')
_rz(z,cGC,'class',14,e,s,gg)
var oHC=_mz(z,'image',['mode',-1,'class',15,'src',1],[],e,s,gg)
_(cGC,oHC)
var lIC=_mz(z,'image',['mode',-1,'class',17,'src',1],[],e,s,gg)
_(cGC,lIC)
var aJC=_mz(z,'image',['mode',-1,'class',19,'src',1],[],e,s,gg)
_(cGC,aJC)
_(hEC,cGC)
_(e8B,hEC)
_(r,e8B)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var eLC=_n('view')
_rz(z,eLC,'class',0,e,s,gg)
var bMC=_n('view')
_rz(z,bMC,'class',1,e,s,gg)
var oNC=_n('view')
_rz(z,oNC,'class',2,e,s,gg)
var xOC=_mz(z,'image',['mode',-1,'class',3,'src',1],[],e,s,gg)
_(oNC,xOC)
_(bMC,oNC)
var oPC=_mz(z,'scroll-view',['class',5,'scrollX',1],[],e,s,gg)
var fQC=_n('view')
_rz(z,fQC,'class',7,e,s,gg)
var cRC=_mz(z,'good-item',['bind:__l',8,'class',1,'goodsList',2,'itemHeight',3,'itemWidth',4,'textSize',5,'vueId',6,'wrap',7],[],e,s,gg)
_(fQC,cRC)
_(oPC,fQC)
_(bMC,oPC)
_(eLC,bMC)
_(r,eLC)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var oTC=_n('view')
_rz(z,oTC,'class',0,e,s,gg)
var cUC=_mz(z,'image',['mode',-1,'class',1,'src',1],[],e,s,gg)
_(oTC,cUC)
_(r,oTC)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var lWC=_n('view')
_rz(z,lWC,'class',0,e,s,gg)
var aXC=_mz(z,'swiper',['autoplay',1,'class',1,'duration',2,'indicatorDots',3,'interval',4],[],e,s,gg)
var tYC=_n('swiper-item')
_rz(z,tYC,'class',6,e,s,gg)
var eZC=_n('view')
_rz(z,eZC,'class',7,e,s,gg)
var b1C=_mz(z,'image',['mode',-1,'class',8,'src',1],[],e,s,gg)
_(eZC,b1C)
_(tYC,eZC)
_(aXC,tYC)
var o2C=_n('swiper-item')
_rz(z,o2C,'class',10,e,s,gg)
var x3C=_n('view')
_rz(z,x3C,'class',11,e,s,gg)
var o4C=_mz(z,'image',['mode',-1,'class',12,'src',1],[],e,s,gg)
_(x3C,o4C)
_(o2C,x3C)
_(aXC,o2C)
var f5C=_n('swiper-item')
_rz(z,f5C,'class',14,e,s,gg)
var c6C=_n('view')
_rz(z,c6C,'class',15,e,s,gg)
var h7C=_mz(z,'image',['mode',-1,'class',16,'src',1],[],e,s,gg)
_(c6C,h7C)
_(f5C,c6C)
_(aXC,f5C)
_(lWC,aXC)
_(r,lWC)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var c9C=_n('view')
_rz(z,c9C,'class',0,e,s,gg)
var o0C=_n('view')
_rz(z,o0C,'class',1,e,s,gg)
var lAD=_oz(z,2,e,s,gg)
_(o0C,lAD)
_(c9C,o0C)
var aBD=_n('view')
_rz(z,aBD,'class',3,e,s,gg)
_(c9C,aBD)
_(r,c9C)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var eDD=_n('view')
_rz(z,eDD,'class',0,e,s,gg)
var bED=_n('view')
_rz(z,bED,'class',1,e,s,gg)
var oFD=_oz(z,2,e,s,gg)
_(bED,oFD)
_(eDD,bED)
var xGD=_n('view')
_rz(z,xGD,'class',3,e,s,gg)
_(eDD,xGD)
_(r,eDD)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var fID=_n('view')
_rz(z,fID,'class',0,e,s,gg)
var cJD=_mz(z,'scroll-view',['class',1,'scrollIntoView',1,'scrollX',2],[],e,s,gg)
var hKD=_v()
_(cJD,hKD)
var oLD=function(oND,cMD,lOD,gg){
var tQD=_mz(z,'view',['bindtap',8,'class',1,'data-event-opts',2,'id',3],[],oND,cMD,gg)
var eRD=_n('text')
_rz(z,eRD,'class',12,oND,cMD,gg)
var bSD=_oz(z,13,oND,cMD,gg)
_(eRD,bSD)
_(tQD,eRD)
_(lOD,tQD)
return lOD
}
hKD.wxXCkey=2
_2z(z,6,oLD,e,s,gg,hKD,'item','i','i')
_(fID,cJD)
var oTD=_mz(z,'swiper',['bindchange',14,'class',1,'current',2,'data-event-opts',3,'style',4],[],e,s,gg)
var xUD=_v()
_(oTD,xUD)
var oVD=function(cXD,fWD,hYD,gg){
var c1D=_n('swiper-item')
_rz(z,c1D,'class',23,cXD,fWD,gg)
var o2D=_n('view')
_rz(z,o2D,'class',24,cXD,fWD,gg)
var l3D=_n('swiper')
_rz(z,l3D,'class',25,cXD,fWD,gg)
_(o2D,l3D)
var a4D=_mz(z,'recommend',['bind:__l',26,'class',1,'vueId',2],[],cXD,fWD,gg)
_(o2D,a4D)
var t5D=_mz(z,'card',['bind:__l',29,'cardTitle',1,'class',2,'vueId',3],[],cXD,fWD,gg)
_(o2D,t5D)
var e6D=_mz(z,'good-list',['bind:__l',33,'class',1,'vueId',2],[],cXD,fWD,gg)
_(o2D,e6D)
_(c1D,o2D)
_(hYD,c1D)
return hYD
}
xUD.wxXCkey=4
_2z(z,21,oVD,e,s,gg,xUD,'item','i','i')
_(fID,oTD)
_(r,fID)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var o8D=_n('view')
_rz(z,o8D,'class',0,e,s,gg)
var x9D=_n('view')
_rz(z,x9D,'class',1,e,s,gg)
var o0D=_oz(z,2,e,s,gg)
_(x9D,o0D)
_(o8D,x9D)
var fAE=_n('view')
_rz(z,fAE,'class',3,e,s,gg)
_(o8D,fAE)
_(r,o8D)
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
return root;
}
}
}


var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C= [[[2,1],],["@font-face {font-family: \x22iconfont\x22; src:url(\x27data:application/x-font-woff2;charset\x3dutf-8;base64,d09GMgABAAAAAAX4AAsAAAAAC5gAAAWrAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDdAqJKIdAATYCJAMgCxIABCAFhG0HgQIb1AlRVG8KZF8V8GSXISGJIAiKlEslebDuNpBm92cPM7yDbww3Hqq1z9fTs7tzxwECGQloSX0VJiFjgZRP+bORqciUP9TRO5Cnpc0crKkH2OnYpXcudBx58hcqDv4JT+7/nGXEwkYOWO1NHZFCW0yB0pfmD4w8aa7N0Yfk9sBTi/1MVr7/n2Opl8/PDvNfpUtmrILGowQaUERqpA14BzgQnMLYdPgKsCLvJjBtP2ek608f39BVUW2g6U0cOtC12dQQXGjG3ufMKn7qtPKp3AX4oY4+NnhGo+gSvdftZ48+3CxjxSc+4u4k7mN+Htx2JHEWoMpf7uv7LPXcWaDpT2V1D1hkfxFkGcPgwF/q8oXix/+uidBFqnHQAXlXVINexf95RI/qZoF9kh9YxkQ2yTKDTbDswKay7C+Lq0+FRQ/9BbAprMbLxtpHk89YBNgDiMcA8Rc1nS/XV8TolDV1enZREPPhzC0DYXIlhhjpw4gufpgxHYaHREssSLDACIFbeCKOkIny+bgA8mBmQSWSazbI0g2jMigCsCqWK7zh8yrT0gaBgCcigRwhwacX8CULS6wikXRxnl4tMPAyZqHw68TAEFEaarEugpmbzSdWOaw8EY+RI5CI+W11Is4qQa+uFRLLOKNGwKtSqXLV6jylMkehKBU02ZrEWqFSFQiFJO8MIeSIoLsH5xdkJLFI8xAj0gYTi8XcaA1CeCv4sh5cgOSJlhYk9Gz+vK+7VCizncAoEYjp/C494SpnDYLipLOJVRLpJb4xMwD+cjWxGsGXc4m2Slu9eIXrWk08Zco9Ja5IvqvQ21cE+5PmVIEVqptTpz1Q51W0Z0XhIIAuqP0qbM2Hk3tZiKAgnZ6Jgr6K9cS5b3V7eXt1xiud5gf/Z//bVm//Y/+HT1DDVWbvgafjEWw3mcav6ud2Ki0y5Ef6u6jQ0EuHZxL0lf0P5kZ/wjdocFLvXYUpZDEFva1ADZkEhHY80rOY1lOu9RAGEMQlMm9JrETqDfyjwNwPtJzLtmDP/v8HNVc6Mtej/APAvJBW3c/G2OLAVKYRhxzBTa1eMgTeGs+Bz5+Bc7A8f857wWfPzfZnz+ZUx8Bbt0AIHr11+xj5KPn27Wc7dvtWZwN+WZdcMz1TQ9a9gl3R7SWfOknu0718Yl2nZmU1B7tLqV1ZUb4T+D3zAEYdM4fc/Cg4amlsieZFBUidrrqUnFO5eCidkBeQidNEpovyXInLZKax6ra7zdCBt5gxVf9ATLdFVqx8GnoQtTDGkIMI9dBzxhVHNhJ6hPYsykXFqASLcG9lgvF9X9Z08K4pBfOh0bhG2s376jRLZ3F+8nI3i6vgZvBDNF079enfv6rY5M5fHoX9079Q4/e3X7whiCH2P/X0phRvU6/v9t+9TL1D5u5aUHefBxgDGG/iZjjAKE9p4pAHyg0A8kM9nWhed6LFUnX2NdAwB4wqd9LxfNjLzPk/d62F4P86M8fIin/tS1djo7wC+eWbQmz53i+POa9+ldTe6nt6oix2oHm+c2QKptkS9vnQZq/zVOxSMjnQbDOhGOyD1BxFVuxZ6Mw4B73mEkw7I+78GVt0aog6hdOmOAiLtqCYtwRp0T1kxb6CznZfoLcYCdMmQbvijOPxsh8l5Cj5WHnFBo+LQHBqX2v+pNBkjliVKuGXpIqT6OHq7iw+U0GSxzFdp3DfrQHWCucYy92PsoyxXTghT9f1quXRza3W75XWVZxD3zWCOBTxoUpXqIGHFQJ5edV3/f4nEjIyDgmZ9CP6i4hKvHnkwZV7DOSzrog1aV06u5yE9rpJJoBqb40sh2KJh2Qsx1C7/24J4lFr9SkypSM3slhtXN26fEM+pTfANPrUFiUyanTRxxAtprQ3ThIrF+GkK3JkyyW21jiFshleFY95fT9Lv/ai8W1iebteHZuz8SJaaYWpWbQCAA\x3d\x3d\x27) format(\x27woff2\x27); }\n.",[1],"iconfont { font-family: \x22iconfont\x22 !important; font-size: 16px; font-style: normal; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }\n.",[1],"icon-lajitong:before { content: \x22\\E615\x22; }\n.",[1],"icon-shangxiajiantou:before { content: \x22\\E6B7\x22; }\n.",[1],"icon-shangjiantou:before { content: \x22\\E611\x22; }\n.",[1],"icon-xiajiantou:before { content: \x22\\E629\x22; }\n.",[1],"icon-fangdajing:before { content: \x22\\E848\x22; }\n.",[1],"icon-gouwuche-:before { content: \x22\\E64E\x22; }\n.",[1],"icon-xiaoxi:before { content: \x22\\E638\x22; }\n.",[1],"f-color{ color:#636263; }\n.",[1],"f-active-color{ color:#49BDFB; }\n.",[1],"bg-color{ background-color: #42B7FB; }\n::-webkit-scrollbar { display: none; width: 0 !important; height: 0 !important; -webkit-appearance: none; background: transparent; }\n",],];
function makeup(file, opt) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 ) 
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid + "This wxss file is ignored." );
return;
}
}
Ca={};
css = makeup(file, opt);
if ( !style ) 
{
var head = document.head || document.getElementsByTagName('head')[0];
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else 
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();setCssToHead([[2,0]],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./app.wxss:63:1)",{path:"./app.wxss"})();

__wxAppCode__['app.wxss']=setCssToHead([[2,0]],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./app.wxss:63:1)",{path:"./app.wxss"});    
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/common/Card.wxss']=setCssToHead([".",[1],"card.",[1],"data-v-4de5e511 { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; font-weight: bold; padding: ",[0,20]," 0; }\n.",[1],"card-name.",[1],"data-v-4de5e511 { padding: 0 ",[0,20],"; font-size: ",[0,32],"; }\n",],undefined,{path:"./components/common/Card.wxss"});    
__wxAppCode__['components/common/Card.wxml']=$gwx('./components/common/Card.wxml');

__wxAppCode__['components/common/GoodItem.wxss']=setCssToHead([".",[1],"Goods.",[1],"data-v-45f426f1 { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; }\n.",[1],"GoodItem.",[1],"data-v-45f426f1 { padding-bottom: ",[0,20],"; }\n.",[1],"GoodItem\x3ewx-image.",[1],"data-v-45f426f1 { width: 100%; }\n.",[1],"GoodItem-content.",[1],"data-v-45f426f1 { text-align: center; }\n.",[1],"goods-name.",[1],"data-v-45f426f1 { overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; color: #333333; word-break: break-all; padding: ",[0,6]," ",[0,20],"; }\n.",[1],"oprice.",[1],"data-v-45f426f1 { text-decoration: line-through; font-size: ",[0,24],"; color: #999999; }\n.",[1],"discount.",[1],"data-v-45f426f1 { border-radius: ",[0,4],"; border: 1px solid #FF3333; padding: ",[0,2]," ",[0,10],"; font-size: ",[0,20],"; color: #FF3333; }\n",],undefined,{path:"./components/common/GoodItem.wxss"});    
__wxAppCode__['components/common/GoodItem.wxml']=$gwx('./components/common/GoodItem.wxml');

__wxAppCode__['components/common/GoodList.wxss']=undefined;    
__wxAppCode__['components/common/GoodList.wxml']=$gwx('./components/common/GoodList.wxml');

__wxAppCode__['components/index/banner.wxss']=setCssToHead([".",[1],"banner.",[1],"data-v-1d48561c { width: 100%; height: ",[0,300],"; }\n.",[1],"banner wx-image.",[1],"data-v-1d48561c { width: 100%; height: 100%; }\n",],undefined,{path:"./components/index/banner.wxss"});    
__wxAppCode__['components/index/banner.wxml']=$gwx('./components/index/banner.wxml');

__wxAppCode__['components/index/Hots.wxss']=undefined;    
__wxAppCode__['components/index/Hots.wxml']=$gwx('./components/index/Hots.wxml');

__wxAppCode__['components/index/Icons.wxss']=setCssToHead([".",[1],"icons.",[1],"data-v-22a8798c { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-flex-wrap: wrap; flex-wrap: wrap; }\n.",[1],"icons-item.",[1],"data-v-22a8798c { display: -webkit-box; display: -webkit-flex; display: flex; width: 25%; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; align-items: center; padding-top: ",[0,20],"; font-size: ",[0,30],"; }\n.",[1],"icons-item wx-image.",[1],"data-v-22a8798c { width: ",[0,110],"; height: ",[0,110],"; }\n",],undefined,{path:"./components/index/Icons.wxss"});    
__wxAppCode__['components/index/Icons.wxml']=$gwx('./components/index/Icons.wxml');

__wxAppCode__['components/index/indexSwiper.wxss']=setCssToHead([".",[1],"swiper.",[1],"data-v-a39bbbac { width: 100%; height: ",[0,400],"; }\nwx-image.",[1],"data-v-a39bbbac { width: 100%; }\n",],undefined,{path:"./components/index/indexSwiper.wxss"});    
__wxAppCode__['components/index/indexSwiper.wxml']=$gwx('./components/index/indexSwiper.wxml');

__wxAppCode__['components/index/Recommend.wxss']=setCssToHead([".",[1],"recommend.",[1],"data-v-536f5bdc { padding: ",[0,20],"; }\n.",[1],"recommend-item.",[1],"data-v-536f5bdc { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; border-radius: ",[0,20],"; border: ",[0,2]," solid #CCCCCC; overflow: hidden; margin: ",[0,20]," 0; }\n.",[1],"item-big.",[1],"data-v-536f5bdc { width: 100%; height: ",[0,300],"; }\n.",[1],"item-small.",[1],"data-v-536f5bdc { width: 100%; height: ",[0,240],"; }\n.",[1],"item-img.",[1],"data-v-536f5bdc { width: 33.3333%; height: ",[0,240],"; }\n",],undefined,{path:"./components/index/Recommend.wxss"});    
__wxAppCode__['components/index/Recommend.wxml']=$gwx('./components/index/Recommend.wxml');

__wxAppCode__['components/index/Shop.wxss']=setCssToHead([".",[1],"shop-big.",[1],"data-v-a94251f4 { width: 100%; height: ",[0,350],"; }\n.",[1],"scroll-content.",[1],"data-v-a94251f4 { width: 100%; white-space: nowrap; }\n.",[1],"scroll-item.",[1],"data-v-a94251f4 { display: inline-block; }\n",],undefined,{path:"./components/index/Shop.wxss"});    
__wxAppCode__['components/index/Shop.wxml']=$gwx('./components/index/Shop.wxml');

__wxAppCode__['pages/car/car.wxss']=undefined;    
__wxAppCode__['pages/car/car.wxml']=$gwx('./pages/car/car.wxml');

__wxAppCode__['pages/category/category.wxss']=undefined;    
__wxAppCode__['pages/category/category.wxml']=$gwx('./pages/category/category.wxml');

__wxAppCode__['pages/index/index.wxss']=setCssToHead([".",[1],"scroll-content.",[1],"data-v-4e9211c4 { width: 100%; height: ",[0,80],"; white-space: nowrap; }\n.",[1],"scroll-content wx-view.",[1],"data-v-4e9211c4 { display: inline-block; padding: ",[0,10]," ",[0,30],"; font-size: ",[0,32],"; }\n.",[1],"f-active-color.",[1],"data-v-4e9211c4 { padding: ",[0,10]," 0; border-bottom: ",[0,6]," solid #49BDFB; }\n",],undefined,{path:"./pages/index/index.wxss"});    
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/my/my.wxss']=undefined;    
__wxAppCode__['pages/my/my.wxml']=$gwx('./pages/my/my.wxml');

;var __pageFrameEndTime__ = Date.now();
(function() {
        window.UniLaunchWebviewReady = function(isWebviewReady){
          // !isWebviewReady && console.log('launchWebview fallback ready')
          plus.webview.postMessageToUniNView({type: 'UniWebviewReady-' + plus.webview.currentWebview().id}, '__uniapp__service');
        }
        UniLaunchWebviewReady(true);
})();
