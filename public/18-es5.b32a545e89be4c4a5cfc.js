function _createForOfIteratorHelper(e,t){var a;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r=!0,s=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return r=e.done,e},e:function(e){s=!0,o=e},f:function(){try{r||null==a.return||a.return()}finally{if(s)throw o}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,a){return t&&_defineProperties(e.prototype,t),a&&_defineProperties(e,a),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"inB+":function(e,t,a){"use strict";a.r(t),a.d(t,"ArmarHorarioPageModule",(function(){return ne}));var n=a("ofXK"),i=a("3Pt+"),o=a("TEn/"),r=a("tyNb"),s=a("6vI+"),c=a("fXoL"),l=a("ex6u"),d=a("p/K2");function u(e,t){if(1&e){var a=c.Rb();c.Qb(0,"ion-fab-button",4),c.Yb("click",(function(){return c.jc(a),c.ac().next()})),c.Mb(1,"ion-icon",5),c.Pb()}}function f(e,t){if(1&e){var a=c.Rb();c.Qb(0,"ion-fab-button",6),c.Yb("click",(function(){return c.jc(a),c.ac().previous()})),c.Mb(1,"ion-icon",7),c.Pb()}}var b,p=((b=function(){function e(){_classCallCheck(this,e),this.ultimo=3,console.log(this.data)}return _createClass(e,[{key:"next",value:function(){console.log(this.data),this.data.seccionActual++}},{key:"previous",value:function(){this.data.seccionActual--}},{key:"validarSeccion",value:function(e){return this.data.seccionActual==e+4}},{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||b)},b.\u0275cmp=c.Fb({type:b,selectors:[["app-footer"]],inputs:{ultimo:"ultimo",data:"data"},decls:4,vars:2,consts:[["vertical","bottom","horizontal","end","slot","fixed"],["color","primary",3,"click",4,"ngIf"],["vertical","bottom","horizontal","start","slot","fixed"],["color","primary","button","",3,"click",4,"ngIf"],["color","primary",3,"click"],["name","arrow-redo"],["color","primary","button","",3,"click"],["name","arrow-undo"]],template:function(e,t){1&e&&(c.Qb(0,"ion-fab",0),c.mc(1,u,2,0,"ion-fab-button",1),c.Pb(),c.Qb(2,"ion-fab",2),c.mc(3,f,2,0,"ion-fab-button",3),c.Pb()),2&e&&(c.zb(1),c.fc("ngIf",!t.validarSeccion(t.ultimo)),c.zb(2),c.fc("ngIf",1!=t.data.seccionActual))},directives:[o.i,n.j,o.j,o.o],styles:[""]}),b),h=a("LMH3");function g(e,t){if(1&e){var a=c.Rb();c.Qb(0,"ion-list"),c.Qb(1,"ion-item"),c.Qb(2,"ion-label"),c.oc(3),c.Pb(),c.Qb(4,"ion-checkbox",2),c.Yb("ngModelChange",(function(e){return c.jc(a),t.$implicit.isChecked=e}))("ionChange",(function(){return c.jc(a),c.ac().onChange()})),c.Pb(),c.Pb(),c.Pb()}if(2&e){var n=t.$implicit;c.zb(3),c.pc(n.name),c.zb(1),c.fc("ngModel",n.isChecked)}}var m,v=((m=function(){function e(t){_classCallCheck(this,e),this.fpuna=t,this.initData()}return _createClass(e,[{key:"ngOnInit",value:function(){console.log(this.data),this.seleccionados=this.data.seleccionados}},{key:"initData",value:function(){var e=this;this.fpuna.getCarrerasAll().subscribe((function(t){e.careers=t.map((function(e){return Object.assign(Object.assign({},e),{isChecked:!1})}))}))}},{key:"onChange",value:function(){console.log("da"),this.data.seleccionados=this.careers.filter((function(e){return e.isChecked}))}}]),e}()).\u0275fac=function(e){return new(e||m)(c.Lb(h.a))},m.\u0275cmp=c.Fb({type:m,selectors:[["app-seleccionar-carrera"]],inputs:{data:"data"},decls:5,vars:2,consts:[["slot","fixed"],[4,"ngFor","ngForOf"],["slot","start",3,"ngModel","ngModelChange","ionChange"]],template:function(e,t){1&e&&(c.Qb(0,"ion-header",0),c.Qb(1,"ion-toolbar"),c.Qb(2,"ion-title"),c.oc(3),c.Pb(),c.Pb(),c.Pb(),c.mc(4,g,5,2,"ion-list",1)),2&e&&(c.zb(3),c.qc("Paso ",t.data.seccionActual,": Selecciona tu/s carrera/s"),c.zb(1),c.fc("ngForOf",t.careers))},directives:[o.n,o.C,o.B,n.i,o.s,o.q,o.r,o.f,o.b,i.d,i.e],styles:["ion-title[_ngcontent-%COMP%]{--color:trasparent;font-size:15px;font-weight:8}ion-toolbar[_ngcontent-%COMP%]{--background:#d3d3d3;--opacity:1;--padding-bottom:4px;--padding-end:4px;--padding-start:4px;--padding-top:4px}"]}),m);function C(e,t){if(1&e){var a=c.Rb();c.Qb(0,"ion-item"),c.Mb(1,"span",5),c.Qb(2,"ion-checkbox",6),c.Yb("ngModelChange",(function(e){return c.jc(a),t.$implicit.isItemChecked=e}))("ionChange",(function(){c.jc(a);var e=c.ac().index;return c.ac().verifyEvent(e)})),c.Pb(),c.Qb(3,"ion-label",4),c.oc(4),c.Pb(),c.Pb()}if(2&e){var n=t.$implicit;c.zb(2),c.fc("ngModel",n.isItemChecked),c.zb(2),c.pc(n.nombre)}}function y(e,t){if(1&e){var a=c.Rb();c.Qb(0,"ion-list"),c.Qb(1,"ion-grid"),c.Qb(2,"ion-row"),c.Qb(3,"ion-item",2),c.Qb(4,"ion-checkbox",3),c.Yb("ngModelChange",(function(e){return c.jc(a),t.$implicit.checkParent=e}))("click",(function(e){c.jc(a);var n=t.index;return c.ac().checkCheckbox(e,n)})),c.Pb(),c.Pb(),c.Qb(5,"ion-col"),c.Qb(6,"ion-item"),c.Qb(7,"ion-label",4),c.Qb(8,"strong"),c.oc(9),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.mc(10,C,5,2,"ion-item",1),c.Pb()}if(2&e){var n=t.$implicit;c.zb(4),c.fc("ngModel",n.checkParent)("indeterminate",n.indeterminateState),c.zb(5),c.qc("Semestre ",n.semestre,""),c.zb(1),c.fc("ngForOf",n.materias)}}var P,k=((P=function(){function e(t){_classCallCheck(this,e),this.fpuna=t,this.seleccionados=new c.n}return _createClass(e,[{key:"ngOnInit",value:function(){console.log(this.data),this.esAprobar?(console.log("esto aprov"),this.getData()):this.descartarDatosPrerrequisito()}},{key:"descartarDatosPrerrequisito",value:function(){var e=this;this.fpuna.getPrerrequisitosAll().subscribe((function(t){var a=e.selectedCareerId,n=e.data.materiasAprobadas.flat(),i=e.data.clasesTodas.filter((function(e){return e.career_id==a}));console.log("todas",i);var o=i.filter((function(e){return n.includes(e.name)})).map((function(e){return e._id}));n=i.filter((function(e){return o.includes(e._id)})),console.log("aprobadas",n);var r=i;console.log("antes de creditos",r);var s=0;n.map((function(e){return s+=e.credits}));var c=1;i.map((function(e){return c+=e.credits})),0==c&&(c=1);var l=s/c;console.log("total",c),r=r.filter((function(e){return e.credits_percentage_required<=l})),console.log("despues de creditos",r),r=(r=r.filter((function(e){return t.filter((function(t){return t.class2_id==e._id})).map((function(e){return e.class1_id})).every((function(e){return o.includes(e)}))}))).filter((function(e){return!o.includes(e._id)}));var d=[];r.forEach((function(e){var t=d.findIndex((function(t){return t.semestre==e.semester}));-1==t?d.push({semestre:e.semester,materias:[{nombre:e.name}]}):d[t].materias.push({nombre:e.name})})),e.semestersClasses=d.sort((function(e,t){return e.semestre-t.semestre})),e.semestersClasses.map((function(e){return e.materias.sort((function(e,t){return e.sem>t.sem}))})),console.log("this.semestersClasses",e.semestersClasses)}))}},{key:"getData",value:function(){var e=this;this.fpuna.getClasesAll().subscribe((function(t){e.data.clasesTodas=t,t=t.filter((function(t){return t.career_id==e.selectedCareerId}));var a=[];t.forEach((function(e){var t=a.findIndex((function(t){return t.semestre==e.semester}));-1==t?a.push({semestre:e.semester,materias:[{nombre:e.name}]}):a[t].materias.push({nombre:e.name})})),e.semestersClasses=a.sort((function(e,t){return e.semestre-t.semestre})),e.semestersClasses.map((function(e){return e.materias.sort((function(e,t){return e.sem>t.sem}))})),console.log(JSON.stringify(e.semestersClasses))}))}},{key:"checkCheckbox",value:function(e,t){var a=this;setTimeout((function(){a.semestersClasses[t].materias.forEach((function(e){e.isItemChecked=a.semestersClasses[t].checkParent}))})),console.log("checkbox(?")}},{key:"verifyEvent",value:function(e){var t=this.semestersClasses[e].materias.length,a=0;this.semestersClasses[e].materias.map((function(e){e.isItemChecked&&a++})),a>0&&a<t?(this.semestersClasses[e].indeterminateState=!0,this.semestersClasses[e].checkParent=!1):a==t?(this.semestersClasses[e].checkParent=!0,this.semestersClasses[e].indeterminateState=!1):(this.semestersClasses[e].indeterminateState=!1,this.semestersClasses[e].checkParent=!1);var n=[];this.semestersClasses.filter((function(e){return e.materias}));var i,o=_createForOfIteratorHelper(this.semestersClasses);try{for(o.s();!(i=o.n()).done;){var r,s=_createForOfIteratorHelper(i.value.materias);try{for(s.s();!(r=s.n()).done;){var c=r.value;c.isItemChecked&&n.push(c.nombre)}}catch(l){s.e(l)}finally{s.f()}}}catch(l){o.e(l)}finally{o.f()}this.seleccionados.emit(n)}}]),e}()).\u0275fac=function(e){return new(e||P)(c.Lb(h.a))},P.\u0275cmp=c.Fb({type:P,selectors:[["app-por-carrera"]],inputs:{data:"data",selectedCareerId:"selectedCareerId",esAprobar:"esAprobar"},outputs:{seleccionados:"seleccionados"},decls:2,vars:1,consts:[["fullscreen",""],[4,"ngFor","ngForOf"],["lines","none",1,"ion-align-self-end"],["slot","start",1,"ion-no-padding","ion-no-margin",3,"ngModel","indeterminate","ngModelChange","click"],[1,"ion-text-wrap"],["slot","start"],["slot","start",3,"ngModel","ngModelChange","ionChange"]],template:function(e,t){1&e&&(c.Qb(0,"ion-content",0),c.mc(1,y,11,4,"ion-list",1),c.Pb()),2&e&&(c.zb(1),c.fc("ngForOf",t.semestersClasses))},directives:[o.h,n.i,o.s,o.m,o.w,o.q,o.f,o.b,i.d,i.e,o.g,o.r],styles:[""]}),P);function w(e,t){if(1&e){var a=c.Rb();c.Qb(0,"app-por-carrera",2),c.Yb("seleccionados",(function(e){c.jc(a);var t=c.ac().$implicit;return c.ac().onChange(e,t._id)})),c.Pb()}if(2&e){var n=c.ac().$implicit,i=c.ac();c.fc("selectedCareerId",n._id)("esAprobar",!0)("data",i.data)}}function Q(e,t){if(1&e&&(c.Ob(0),c.Qb(1,"ion-header"),c.Qb(2,"ion-toolbar"),c.Qb(3,"ion-title"),c.oc(4),c.Pb(),c.Pb(),c.Pb(),c.mc(5,w,1,3,"app-por-carrera",1),c.Nb()),2&e){var a=t.$implicit,n=t.index,i=c.ac();c.zb(4),c.rc("Paso ",i.data.seccionActual,": Sel. mat. aprobadas ",a.code,""),c.zb(1),c.fc("ngIf",i.data.seccionActual-2==n)}}var S,x,_=((S=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){this.data.esAprobar=!0,console.log(this.data.esAprobar)}},{key:"onChange",value:function(e,t){this.data.materiasAprobadas[t]=e}}]),e}()).\u0275fac=function(e){return new(e||S)},S.\u0275cmp=c.Fb({type:S,selectors:[["app-seleccionar-materias-aprobadas"]],inputs:{data:"data"},decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"selectedCareerId","esAprobar","data","seleccionados",4,"ngIf"],[3,"selectedCareerId","esAprobar","data","seleccionados"]],template:function(e,t){1&e&&c.mc(0,Q,6,3,"ng-container",0),2&e&&c.fc("ngForOf",t.data.seleccionados)},directives:[n.i,o.n,o.C,o.B,n.j,k],styles:["ion-title[_ngcontent-%COMP%]{--color:trasparent;font-size:15px;font-weight:8}ion-toolbar[_ngcontent-%COMP%]{--background:#d3d3d3;--opacity:1;--padding-bottom:4px;--padding-end:4px;--padding-start:4px;--padding-top:4px}"]}),S),A=a("mrSG"),I=a("EUZL"),F=((x=function(){function e(t){_classCallCheck(this,e),this.alertController=t,this.readFilePopup()}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"readFilePopup",value:function(){return Object(A.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alertController.create({cssClass:"my-custom-class",header:"Seleccionar Horario",message:"<p>Actualizado de la Facultad!</p>",buttons:[{text:"Cancelar",role:"cancel",cssClass:"secondary",handler:function(e){console.log("Confirm Cancel: blah")}},{text:"Buscar",handler:function(){document.getElementById("file-input").click()}}]});case 2:return t=e.sent,e.next=5,t.present();case 5:case"end":return e.stop()}}),e,this)})))}},{key:"onFileChange",value:function(e){var t=this,a=e.target;if(1!==a.files.length)throw new Error("Cannot use multiple files");var n=new FileReader;n.onload=function(e){var a=function(e){var a,n=I.read(e,{type:"binary"}),i=[],o=_createForOfIteratorHelper(t.data.seleccionados.flatMap((function(e){return e.code})));try{for(o.s();!(a=o.n()).done;){var r=a.value;i.push(I.utils.sheet_to_json(n.Sheets[r],{header:1,range:10,raw:!1}))}}catch(s){o.e(s)}finally{o.f()}return i}(e.target.result),n=[];a.forEach((function(e){n.push(function(e){for(var t=[],a=function(a){for(var n={},i=0,o=function(t){var o=void 0,s=e[0][t];if(["Lunes","Martes","Mi\xe9rcoles","Jueves","Viernes","S\xe1bado"].forEach((function(i){if(i==e[0][t]){s=e[0][t];var r={Horario:""};r.Horario=e[a][t],n[s]=r,o=!0}})),!o)if("D\xeda"==e[0][t]){var c={"D\xeda":"",Hora:""};c["D\xeda"]=e[a][t],c.Hora=e[a][t+1],t+=1,0==i?s="1p":1==i?s="2p":2==i?s="1f":3==i&&(s="2f"),n[s]=c,i++}else o||"AULA"==e[0][t]||(n[s]=e[a][t]);r=t},r=0;r<e[a].length;r++)o(r);t.push(n)},n=0;n<e.length;n++)a(n);return t.shift(),console.log(t),t}(e))})),t.data.dataFromExcel=n},this.FileName=a.files[0].name,n.readAsBinaryString(a.files[0])}}]),e}()).\u0275fac=function(e){return new(e||x)(c.Lb(o.a))},x.\u0275cmp=c.Fb({type:x,selectors:[["app-file-picker"]],inputs:{data:"data"},decls:1,vars:0,consts:[["id","file-input","type","file","multiple","false","accept","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel",2,"display","none",3,"change"]],template:function(e,t){1&e&&(c.Qb(0,"input",0),c.Yb("change",(function(e){return t.onFileChange(e)})),c.Pb())},styles:[""]}),x);function z(e,t){if(1&e){var a=c.Rb();c.Qb(0,"app-por-carrera",2),c.Yb("seleccionados",(function(e){c.jc(a);var t=c.ac().$implicit;return c.ac().onChange(e,t._id)})),c.Pb()}if(2&e){var n=c.ac().$implicit,i=c.ac();c.fc("data",i.data)("esAprobar",!1)("selectedCareerId",n._id)}}function M(e,t){if(1&e&&(c.Ob(0),c.Qb(1,"ion-header"),c.Qb(2,"ion-toolbar"),c.Qb(3,"ion-title"),c.oc(4),c.Pb(),c.Pb(),c.Pb(),c.mc(5,z,1,3,"app-por-carrera",1),c.Nb()),2&e){var a=t.$implicit,n=t.index,i=c.ac();c.zb(4),c.rc("Paso ",i.data.seccionActual,": Sel. mat. a cursar ",a.code,""),c.zb(1),c.fc("ngIf",i.data.seccionActual-2-i.data.seleccionados.length==n)}}var O,E=((O=function(){function e(){_classCallCheck(this,e),console.log(this.data)}return _createClass(e,[{key:"ngOnInit",value:function(){console.log(this.data),this.materias=this.data.seleccionados,this.seccionInicial=this.data.seccionActual}},{key:"onChange",value:function(e,t){this.data.materiasSeleccionadas[t]=e}}]),e}()).\u0275fac=function(e){return new(e||O)},O.\u0275cmp=c.Fb({type:O,selectors:[["app-seleccionar-materia"]],inputs:{data:"data"},decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"data","esAprobar","selectedCareerId","seleccionados",4,"ngIf"],[3,"data","esAprobar","selectedCareerId","seleccionados"]],template:function(e,t){1&e&&c.mc(0,M,6,3,"ng-container",0),2&e&&c.fc("ngForOf",t.materias)},directives:[n.i,o.n,o.C,o.B,n.j,k],styles:["ion-title[_ngcontent-%COMP%]{--color:trasparent;font-size:15px;font-weight:8}ion-toolbar[_ngcontent-%COMP%]{--background:#d3d3d3;--opacity:1;--padding-bottom:4px;--padding-end:4px;--padding-start:4px;--padding-top:4px}"]}),O);function j(e,t){if(1&e&&(c.Qb(0,"div"),c.Qb(1,"h2",1),c.oc(2),c.Pb(),c.Pb()),2&e){var a=t.$implicit;c.zb(2),c.qc(" ",a," ")}}function $(e,t){if(1&e){var a=c.Rb();c.Qb(0,"ion-item"),c.Mb(1,"span",2),c.Qb(2,"ion-checkbox",3),c.Yb("ngModelChange",(function(e){return c.jc(a),t.$implicit.isItemChecked=e}))("ionChange",(function(){return c.jc(a),c.ac(2).onChange()})),c.Pb(),c.Qb(3,"ion-label"),c.Qb(4,"h2",1),c.oc(5),c.Pb(),c.Qb(6,"h2",1),c.oc(7),c.Pb(),c.mc(8,j,3,1,"div",0),c.Qb(9,"h2",1),c.oc(10),c.Pb(),c.Pb(),c.Pb()}if(2&e){var n=t.$implicit;c.zb(2),c.fc("ngModel",n.isItemChecked),c.zb(3),c.qc(" ",n.nombre," "),c.zb(2),c.qc(" Seccion ",n.seccion," "),c.zb(1),c.fc("ngForOf",n.profesor),c.zb(2),c.qc(" ",n.especial," ")}}function q(e,t){if(1&e&&(c.Qb(0,"ion-list"),c.Qb(1,"ion-grid"),c.Qb(2,"ion-row"),c.Qb(3,"ion-item"),c.Qb(4,"ion-label",1),c.Qb(5,"strong"),c.oc(6),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.mc(7,$,11,5,"ion-item",0),c.Pb()),2&e){var a=t.$implicit;c.zb(6),c.sc("",a.padre," - ",a.sigla,"","-- --"==a.enf?"":"-"+a.enf,""),c.zb(1),c.fc("ngForOf",a.hijos)}}var V,T=((V=function(){function e(){_classCallCheck(this,e),this.clasesElegidasPorSecciones=[],this.clasesElegidasPorSeccionesForView=[]}return _createClass(e,[{key:"ngOnInit",value:function(){this.init()}},{key:"init",value:function(){console.log("hola"),this.clasesElegidasPorSeccionesForView=this.data.seccionesElegidasForView;var e=this.data.materiasSeleccionadas.filter((function(e){return e})),t=this.data.seleccionados,a=this.data.dataFromExcel,n=function(e,t,a){var n=[],i=t.map((function(e){return{padre:e,sigla:"",enf:a,hijos:[]}}));return console.log("agrupador",i),e.forEach((function(e){console.log(e),t.forEach((function(t){try{if(function(e,t,a){var n=e.Asignatura.match(RegExp(""+t)),i=e.Asignatura===t,o=" "==e.Asignatura[t.length],r=void 0===e.Enfasis||"-- --"===e.Enfasis||e.Enfasis.includes(a);return n&&(i||o)&&r}(e,t,a)){var o=i.findIndex((function(e){return e.padre===t}));i[o].sigla=e["Sigla carrera"];for(var r=[],s=e["T\xedt"].split("\n"),c=0;c<s.length;c++)r.push("".concat(e["T\xedt"].split("\n")[c]," ").concat(e.Nombre.split("\n")[c]," ").concat(e.Apellido.split("\n")[c]));i[o].hijos.push({id:e.Item,materia:e.Asignatura.split("(*)")[0].split("-")[0],especial:e.Asignatura.split("(*)")[0].split("-")[1],def:e.Asignatura.split("(*)")[1],seccion:e["Secci\xf3n"],profesor:r}),n.push(e)}}catch(l){}}))})),console.log(i),{all:n,forView:i}};if(console.log("datos",a),console.log("materiasSeleccionadas",e),console.log("carrerasSeleccionadas",t),!this.clasesElegidasPorSeccionesForView[0]){for(var i=0;i<t.length;i++){var o=n(a[i],e[i],t[i].enf);this.clasesElegidasPorSecciones.push(o.all),this.clasesElegidasPorSeccionesForView.push(o.forView)}this.clasesElegidasPorSeccionesForView=this.clasesElegidasPorSeccionesForView.flat().sort((function(e,t){return e.padre<t.padre})),console.log("Clases ele por secciones",this.clasesElegidasPorSecciones),console.log("Clases ele por secciones for view",this.clasesElegidasPorSeccionesForView),this.data.seccionesElegidasForView=this.clasesElegidasPorSeccionesForView,this.data.seccionesElegidas=this.clasesElegidasPorSecciones.flat()}}},{key:"onChange",value:function(){console.log(this.clasesElegidasPorSeccionesForView)}},{key:"ngOnDestroy",value:function(){var e=this;console.log("chau"),this.data.toCalendar=[],this.data.seccionesElegidasForView.forEach((function(t){t.hijos.forEach((function(t){if(t.isItemChecked){var a=e.data.seccionesElegidas.find((function(e){return t.id===e.Item}));e.data.toCalendar.push(a)}}))}))}}]),e}()).\u0275fac=function(e){return new(e||V)},V.\u0275cmp=c.Fb({type:V,selectors:[["app-seleccionar-secciones"]],inputs:{data:"data"},decls:5,vars:2,consts:[[4,"ngFor","ngForOf"],[1,"ion-text-wrap"],["slot","start"],["slot","start",3,"ngModel","ngModelChange","ionChange"]],template:function(e,t){1&e&&(c.Qb(0,"ion-header"),c.Qb(1,"ion-toolbar"),c.Qb(2,"ion-title"),c.oc(3),c.Pb(),c.Pb(),c.Pb(),c.mc(4,q,8,4,"ion-list",0)),2&e&&(c.zb(3),c.qc("Paso ",t.data.seccionActual,": Sel. secciones "),c.zb(1),c.fc("ngForOf",t.clasesElegidasPorSeccionesForView))},directives:[o.n,o.C,o.B,n.i,o.s,o.m,o.w,o.q,o.r,o.f,o.b,i.d,i.e],styles:["ion-title[_ngcontent-%COMP%]{--color:trasparent;font-size:15px;font-weight:8}ion-toolbar[_ngcontent-%COMP%]{--background:#d3d3d3;--opacity:1;--padding-bottom:4px;--padding-end:4px;--padding-start:4px;--padding-top:4px}"]}),V),L=a("fQ+0"),D=a("sQiW");function H(e,t){if(1&e&&c.Mb(0,"app-seleccionar-carrera",3),2&e){var a=c.ac();c.fc("data",a.data)}}function R(e,t){if(1&e&&c.Mb(0,"app-seleccionar-materias-aprobadas",3),2&e){var a=c.ac();c.fc("data",a.data)}}function B(e,t){if(1&e&&c.Mb(0,"app-file-picker",3),2&e){var a=c.ac();c.fc("data",a.data)}}function Y(e,t){if(1&e&&c.Mb(0,"app-seleccionar-materia",3),2&e){var a=c.ac();c.fc("data",a.data)}}function J(e,t){if(1&e&&c.Mb(0,"app-seleccionar-secciones",3),2&e){var a=c.ac();c.fc("data",a.data)}}function N(e,t){if(1&e&&(c.Qb(0,"div"),c.Qb(1,"ion-header",4),c.Qb(2,"ion-toolbar"),c.Qb(3,"ion-title"),c.oc(4),c.Pb(),c.Pb(),c.Pb(),c.Mb(5,"app-inicio",5),c.Pb()),2&e){var a=c.ac();c.zb(4),c.qc("Paso ",a.data.seccionActual,": Confirma el Horario "),c.zb(1),c.fc("semana",a.data.semana)("toCalendar",a.data.toCalendar)}}function K(e,t){if(1&e&&(c.Qb(0,"div"),c.Qb(1,"ion-header",4),c.Qb(2,"ion-toolbar"),c.Qb(3,"ion-title"),c.oc(4),c.Pb(),c.Pb(),c.Pb(),c.Mb(5,"app-calendario",6),c.Pb()),2&e){var a=c.ac();c.zb(4),c.qc("Paso ",a.data.seccionActual,": Confirma el Calendario "),c.zb(1),c.fc("toCalendar",a.data.toCalendar)}}var U,X,G,W,Z=[{path:"",component:(U=function(){function e(t,a){_classCallCheck(this,e),this.dataTrue=t,this.navCtrl=a,this.data=new s.a}return _createClass(e,[{key:"validarSeccion",value:function(){return 1==this.data.seccionActual||7==this.data.seccionActual&&(console.log("data",this.data),this.dataTrue.remplazarDatos(this.data),window.localStorage.clear(),this.navCtrl.navigateRoot("inicio")),this.data.validarSeccion()}},{key:"onClick",value:function(){console.log(this.data.seccionesElegidas)}},{key:"ngOnInit",value:function(){this.data=new s.a}}]),e}(),U.\u0275fac=function(e){return new(e||U)(c.Lb(s.a),c.Lb(o.H))},U.\u0275cmp=c.Fb({type:U,selectors:[["app-armar-horario"]],decls:11,vars:9,consts:[[3,"ngSwitch"],[3,"data",4,"ngSwitchCase"],[4,"ngSwitchCase"],[3,"data"],["slot","fixed"],[3,"semana","toCalendar"],[3,"toCalendar"]],template:function(e,t){1&e&&(c.Mb(0,"app-header"),c.Mb(1,"app-menu"),c.Qb(2,"ion-content",0),c.mc(3,H,1,1,"app-seleccionar-carrera",1),c.mc(4,R,1,1,"app-seleccionar-materias-aprobadas",1),c.mc(5,B,1,1,"app-file-picker",1),c.mc(6,Y,1,1,"app-seleccionar-materia",1),c.mc(7,J,1,1,"app-seleccionar-secciones",1),c.mc(8,N,6,3,"div",2),c.mc(9,K,6,2,"div",2),c.Pb(),c.Mb(10,"app-footer",3)),2&e&&(c.zb(2),c.fc("ngSwitch",t.validarSeccion()),c.zb(1),c.fc("ngSwitchCase",1),c.zb(1),c.fc("ngSwitchCase",2),c.zb(1),c.fc("ngSwitchCase",2),c.zb(1),c.fc("ngSwitchCase",3),c.zb(1),c.fc("ngSwitchCase",4),c.zb(1),c.fc("ngSwitchCase",5),c.zb(1),c.fc("ngSwitchCase",6),c.zb(1),c.fc("data",t.data))},directives:[l.a,d.a,o.h,n.k,n.l,p,v,_,F,E,T,o.n,o.C,o.B,L.a,D.a],styles:["ion-title[_ngcontent-%COMP%]{--color:trasparent;font-size:15px;font-weight:8}ion-toolbar[_ngcontent-%COMP%]{--background:#d3d3d3;--opacity:1;--padding-bottom:4px;--padding-end:4px;--padding-start:4px;--padding-top:4px}"]}),U)}],ee=((X=function e(){_classCallCheck(this,e)}).\u0275mod=c.Jb({type:X}),X.\u0275inj=c.Ib({factory:function(e){return new(e||X)},imports:[[r.i.forChild(Z)],r.i]}),X),te=a("lSLK"),ae=((W=function e(){_classCallCheck(this,e)}).\u0275mod=c.Jb({type:W}),W.\u0275inj=c.Ib({factory:function(e){return new(e||W)},imports:[[n.b,o.D,i.a]]}),W),ne=((G=function e(){_classCallCheck(this,e)}).\u0275mod=c.Jb({type:G}),G.\u0275inj=c.Ib({factory:function(e){return new(e||G)},imports:[[n.b,i.a,o.D,ee,te.a,ae]]}),G)}}]);