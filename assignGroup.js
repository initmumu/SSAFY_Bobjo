function assignGroups() {
    const names = ["\uAC15\uC9C4\uC8FC","\uAD8C\uBBFC\uCC44","\uAE40\uC218\uBBFC","\uAE40\uC218\uD604","\uAE40\uC9C0\uBBFC","\uAE40\uD0DC\uC601","\uBB38\uC9C4\uC218","\uBC15\uB3D9\uBBFC","\uBC15\uC885\uD558","\uBC15\uCC3D\uC870","\uBC30\uC2B9\uD638","\uBC31\uBA85\uADDC","\uC5C4\uC608\uB9BC","\uC724\uC11C\uD76C","\uC774\uB0A8\uC7AC","\uC774\uC131\uC900","\uC774\uC7AC\uBC31","\uC774\uC7AC\uD64D","\uC774\uC8FC\uD604","\uC774\uD61C\uC778","\uC804\uC885\uC6B0","\uCD5C\uC6D0\uC11C","\uCD5C\uC900\uD601","\uD55C\uC885\uC6B0"];function _0x555b(){const _0x42614b=['push','1083165gxoydu','toISOString','702750pOpiZm','532828gUomFG','forEach','split','6090WwNifg','646764NCCFEf','2RIDvdz','2040iBlxfE','3537432mswKkc','339869VEbSJs','replace','sort','getDate'];_0x555b=function(){return _0x42614b;};return _0x555b();}const _0x3ac9ec=_0xe8e1;(function(_0xe3ccdf,_0x3b9da5){const _0x433ed9=_0xe8e1,_0x5c94ff=_0xe3ccdf();while(!![]){try{const _0x59284d=-parseInt(_0x433ed9(0x73))/0x1*(-parseInt(_0x433ed9(0x70))/0x2)+-parseInt(_0x433ed9(0x6a))/0x3+parseInt(_0x433ed9(0x6b))/0x4+parseInt(_0x433ed9(0x78))/0x5+-parseInt(_0x433ed9(0x6f))/0x6+parseInt(_0x433ed9(0x6e))/0x7*(parseInt(_0x433ed9(0x71))/0x8)+-parseInt(_0x433ed9(0x72))/0x9;if(_0x59284d===_0x3b9da5)break;else _0x5c94ff['push'](_0x5c94ff['shift']());}catch(_0x15248){_0x5c94ff['push'](_0x5c94ff['shift']());}}}(_0x555b,0x2b153));const numGroups=0x6,date=new Date(),seed=parseInt(date[_0x3ac9ec(0x69)]()[_0x3ac9ec(0x6d)]('T')[0x0][_0x3ac9ec(0x74)](/-/g,'')),random=mulberry32(seed),shuffledNames=shuffleArray(names,random),groups=[];for(let i=0x0;i<numGroups;i++){groups[_0x3ac9ec(0x77)]([]);}shuffledNames[_0x3ac9ec(0x6c)]((_0xe78236,_0x3582ac)=>{const _0x16927f=_0x3ac9ec;groups[_0x3582ac%numGroups][_0x16927f(0x77)](_0xe78236);});for(let i=0x0;i<numGroups;i++){groups[i][_0x3ac9ec(0x75)]();}let day=[date['getMonth']()+0x1,date[_0x3ac9ec(0x76)]()];function _0xe8e1(_0x48aef6,_0x2a9e01){const _0x555b9c=_0x555b();return _0xe8e1=function(_0xe8e13b,_0x1dde44){_0xe8e13b=_0xe8e13b-0x69;let _0x1065dd=_0x555b9c[_0xe8e13b];return _0x1065dd;},_0xe8e1(_0x48aef6,_0x2a9e01);}displayGroups(groups,day);}

(function(_0x553e05,_0x38e81d){const _0x4a03fa=_0x9565,_0x34a0d2=_0x553e05();while(!![]){try{const _0x331893=-parseInt(_0x4a03fa(0x154))/0x1+-parseInt(_0x4a03fa(0x14e))/0x2*(parseInt(_0x4a03fa(0x150))/0x3)+-parseInt(_0x4a03fa(0x15e))/0x4+parseInt(_0x4a03fa(0x152))/0x5*(-parseInt(_0x4a03fa(0x158))/0x6)+-parseInt(_0x4a03fa(0x160))/0x7+parseInt(_0x4a03fa(0x163))/0x8*(-parseInt(_0x4a03fa(0x159))/0x9)+parseInt(_0x4a03fa(0x165))/0xa;if(_0x331893===_0x38e81d)break;else _0x34a0d2['push'](_0x34a0d2['shift']());}catch(_0xa9ec98){_0x34a0d2['push'](_0x34a0d2['shift']());}}}(_0x2ed9,0x3a7f0));function mulberry32(_0x28ca99){return function(){const _0x350259=_0x9565;var _0x3336f6=_0x28ca99+=0x6d2b79f5;return _0x3336f6=Math[_0x350259(0x15c)](_0x3336f6^_0x3336f6>>>0xf,_0x3336f6|0x1),_0x3336f6^=_0x3336f6+Math['imul'](_0x3336f6^_0x3336f6>>>0x7,_0x3336f6|0x3d),((_0x3336f6^_0x3336f6>>>0xe)>>>0x0)/0x100000000;};}function shuffleArray(_0x22cc52,_0x4e273a){const _0x18fa71=_0x9565;for(let _0xb7cffb=_0x22cc52[_0x18fa71(0x14d)]-0x1;_0xb7cffb>0x0;_0xb7cffb--){const _0x475da0=Math[_0x18fa71(0x15a)](_0x4e273a()*(_0xb7cffb+0x1));[_0x22cc52[_0xb7cffb],_0x22cc52[_0x475da0]]=[_0x22cc52[_0x475da0],_0x22cc52[_0xb7cffb]];}return _0x22cc52;}function displayGroups(_0x143731,_0x29772b){const _0x40d272=_0x9565,_0x4e514b=document['getElementById'](_0x40d272(0x15b)),_0x496dbb=document['getElementById'](_0x40d272(0x14c));_0x4e514b[_0x40d272(0x14f)]=_0x40d272(0x167),_0x496dbb[_0x40d272(0x14f)]='📆오늘은\x20'+_0x29772b[0x0]+'월\x20'+_0x29772b[0x1]+'일~';const _0x34c05c=document[_0x40d272(0x156)](_0x40d272(0x157));_0x34c05c[_0x40d272(0x14f)]='',_0x143731[_0x40d272(0x153)]((_0x3b7fe0,_0x3dc2c0)=>{const _0x5e78d8=_0x40d272,_0x401dce=document[_0x5e78d8(0x15d)](_0x5e78d8(0x15f));_0x401dce[_0x5e78d8(0x161)][_0x5e78d8(0x162)](_0x5e78d8(0x155)),_0x401dce[_0x5e78d8(0x151)]=_0x3dc2c0+0x1+_0x5e78d8(0x166)+_0x3b7fe0[_0x5e78d8(0x164)]('\x09'),_0x34c05c['appendChild'](_0x401dce);});}function _0x9565(_0x22623d,_0x579358){const _0x2ed960=_0x2ed9();return _0x9565=function(_0x956566,_0x3f750e){_0x956566=_0x956566-0x14c;let _0x598d51=_0x2ed960[_0x956566];return _0x598d51;},_0x9565(_0x22623d,_0x579358);}assignGroups();function _0x2ed9(){const _0x4469e5=['createElement','1011804KkTAPj','div','3282111rOIpow','classList','add','8nXGOKQ','join','16811280sqrsLR','조\x20➡\x20','🍚16반\x20밥\x20같이\x20먹어요🍚','time_display','length','214SlOkzo','innerHTML','999cadrBe','textContent','135IHYOis','forEach','322445YvNHEM','group','getElementById','groups','49386ARICja','1254519XMGTpM','floor','title_msg','imul'];_0x2ed9=function(){return _0x4469e5;};return _0x2ed9();}
