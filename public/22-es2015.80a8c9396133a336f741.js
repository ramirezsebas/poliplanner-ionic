(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{VzKp:function(e,t,r){"use strict";r.r(t),r.d(t,"PruebaPageModule",(function(){return y}));var a=r("ofXK"),o=r("3Pt+"),s=r("TEn/"),i=r("tyNb"),n=r("mrSG"),l=r("EUZL"),c=r("fXoL"),p=r("FAH8"),h=r("ex6u"),u=r("p/K2");const d=["class","page scss"],b=[{path:"",component:(()=>{class e{constructor(e){this.file=e,this.page=5,this.x="hola",this.data=[[1,2,3],[4,5,6]]}read(e){const t=l.read(e,{type:"binary"});this.data=l.utils.sheet_to_json(t.Sheets.IIN,{header:1,range:11}),console.log(this.data)}write(){const e=l.utils.aoa_to_sheet(this.data),t=l.utils.book_new();return l.utils.book_append_sheet(t,e,"SheetJS"),t}onFileChange(e){const t=e.target;if(console.log("target",t),1!==t.files.length)throw new Error("Cannot use multiple files");const r=new FileReader;r.onload=e=>{this.read(e.target.result)},r.readAsBinaryString(t.files[0])}export(){return Object(n.a)(this,void 0,void 0,(function*(){const e=this.write();try{const t=l.write(e,{bookType:"xlsx",type:"array"}),r=new Blob([t],{type:"application/octet-stream"});alert(":Fdas");const a=this.file.documentsDirectory||this.file.externalDataDirectory||this.file.dataDirectory||"",o=(yield this.file.resolveDirectoryUrl(a)).nativeURL||"";yield this.file.writeFile(o,"SheetJSIonic.xlsx",r,{replace:!0}),alert("Wrote to SheetJSIonic.xlsx in "+o)}catch(t){t.message.match(/It was determined/)?l.writeFile(e,"SheetJSIonic.xlsx"):alert("Error: "+t.message)}}))}}return e.\u0275fac=function(t){return new(t||e)(c.Lb(p.a))},e.\u0275cmp=c.Fb({type:e,selectors:[["prueba",8,"page","scss"]],attrs:d,decls:5,vars:0,template:function(e,t){1&e&&(c.Mb(0,"app-header"),c.Mb(1,"app-menu"),c.Qb(2,"ion-content"),c.Qb(3,"ion-label"),c.oc(4,"Aun no implementado :c"),c.Pb(),c.Pb())},directives:[h.a,u.a,s.h,s.r],encapsulation:2}),e})()}];let f=(()=>{class e{}return e.\u0275mod=c.Jb({type:e}),e.\u0275inj=c.Ib({factory:function(t){return new(t||e)},imports:[[i.i.forChild(b)],i.i]}),e})();var w=r("lSLK");let y=(()=>{class e{}return e.\u0275mod=c.Jb({type:e}),e.\u0275inj=c.Ib({factory:function(t){return new(t||e)},imports:[[a.b,o.a,s.D,f,w.a]]}),e})()}}]);