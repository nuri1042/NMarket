// Generated at 2021-09-06 03:42:45 PM
// Container ID: 6124a52c47e704b805000009
// Container Version: 2
window.innitytagmgr=Object.create({plugins:{dataCollection:{enable:true},articleReader:{enable:false,reader:""},advenueCPSV:{enable:false}},aE:function(){if(!this.plugins.dataCollection.enable)return!1;var d=document,s="script";var as=d.createElement(s);as.type="text/javascript";as.async=true;as.src="https://avd.innity.net/lib/dc.js";var g=d.getElementsByTagName(s)[0];g.parentNode.insertBefore(as,g);},bn:function(){try{window._innityq=window._innityq||[];var aT=[["_setAVD","AVD-895-6124a52c47e704b805000009"],["_setDomains",["10x10.co.kr"]],["_init"],["_trackPageView"]];if(Object.prototype.toString.call(window._innityq)==="[object Array]"){for(;aT.length;)window._innityq.unshift(aT.pop());}else if(Object.prototype.toString.call(window._innityq)==="[object Object]"){for(;aT.length;)window._innityq.push(aT.shift());}}catch(bM){}},bz:function(){var bH=(this.util._getQueryVariable("utm_source")&&this.util._getQueryVariable("utm_source").toLowerCase().indexOf("innity")> -1)||(this.util._getQueryVariable("scid")&&this.util._getQueryVariable("scid").toLowerCase().indexOf("innity")> -1);if(!bH)return!1;var J={O:this.util._getQueryVariable("adid")||"",bu:this.util._getQueryVariable("campaignid")||"",bk:this.util._getQueryVariable("pubid")||"",ah:this.util._getQueryVariable("zoneid")||"",bh:this.util._getQueryVariable("auth")||"",aG:this.util._getQueryVariable("ftype")||""};if(J.O&&J.bk){J.bb=(J.aG&&J.aG=="avn")?"avn":"avp";(new Image()).src="https://"+J.bb+".innity.com/click/?campaignid="+J.bu+"&adid="+J.O+"&zoneid="+J.ah+"&pubid="+J.bk+"&auth="+J.bh+"&itmcb="+new Date().getTime();}},bj:function(j){try{if(this.plugins.articleReader.loaded)return!1;"complete"==j.readyState?bo():j.addEventListener("readystatechange",function(){"complete"==j.readyState&&bo()});function bo(){var al=j.createElement("script");al.async= !0;al.addEventListener("load",function(){innitytagmgr.util.bN(j);},!1);al.onreadystatechange=function(){this.readyState=="complete"&&innitytagmgr.util.bN(j);};al.src="https://avd.innity.net/lib/artrd.js";var bL=j.getElementsByTagName("script")[0];bL.parentNode.insertBefore(al,bL);}}catch(bM){}},checkDCLoaded:function(){var aj="innity.dmp.dc.lib",bd=this.util._retrieveStorage(aj),bD=window.localStorage&&bd&&((new Date().getTime()-bd)/1000>=0),az=2*1000;if(!bd||bD){this.util._setStorage(aj,new Date().getTime()+az,az);return!1;}return!0;}});innitytagmgr.util={aR:function(bi){return String(bi).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,'\\$1').replace(/\x08/g,'\\x08');},bN:function(j){var aI=j.location;var bO={spec:aI.href,host:aI.host,prePath:aI.protocol+"//"+aI.host,scheme:aI.protocol.substr(0,aI.protocol.indexOf(":")),pathBase:aI.protocol+"//"+aI.host+aI.pathname.substr(0,aI.pathname.lastIndexOf("/")+1)};var ax=j.cloneNode(true);innitytagmgr.plugins.articleReader.reader=new ArticleReader(bO,ax,{debug:false}).parse();},bA:function(t){var bg=document,ag="script",an="noscript";while(0<t.length){var bJ,l=t.shift(),ac=decodeURIComponent(l.src),av=new RegExp("<script\\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>","i").test(ac),aw=av?bg.getElementsByTagName("body")[0].firstChild:this._getCurrentScript();bJ=bg.implementation.createHTMLDocument("Dingo vDoc "+new Date().getTime());bJ.body.innerHTML=ac;!function(aw){try{for(var i=0;i<bJ.body.children.length;i++){var ao=bJ.body.children[i];var aD,bQ=ao.tagName.toLowerCase()===ag,aA=ao.tagName.toLowerCase()===an;bQ?(aD=bg.createElement(ag),ao.getAttribute("src")&&(aD.src=ao.getAttribute("src")),aD.textContent=ao.textContent,aw.parentNode.insertBefore(aD,aw)):aA?(aD=bg.createElement(an),aD.textContent=ao.textContent,bg.body.insertBefore(aD,aw)):bg.body.insertBefore(ao,aw);}}catch(bM){console.log(bM);}}(aw);}},aL:function(t){var R=document.createElement("iframe");R.id="avdfi_"+new Date().getTime();R.src="javascript:'<html><body style=\"background:transparent\"></body></html>'";R.width=R.height=0;R.frameBorder=R.marginWidth=R.marginHeight=0;R.scrolling="no";R.style.width="0px";R.style.height="0px";R.style.border="0px none";R.style.background="none";R.style.display="none";document.getElementsByTagName("body")[0].appendChild(R);var j=R.contentDocument?R.contentDocument:(R.contentWindow?R.contentWindow.document:R.document);j.open();while(0<t.length){var l=t.shift();if(l.src)j.write(decodeURIComponent(l.src));}j.close();},_matchArticleKeyword:function(aV){if(innitytagmgr.plugins.articleReader.reader===null)return!1;try{if(innitytagmgr.plugins.articleReader.reader!==""){if(aV.hasOwnProperty("_skw")&&Object.prototype.toString.call(aV._skw)==="[object Array]"){var au=aV._skw;for(ad in au){var bc=au[ad].replace(/[-\/\\^$*+?.()|[\]{}]/g,'\\$&');var aK=new RegExp("\\b"+bc+"\\b","i");var aP=aV.hasOwnProperty("_titleOnly")?aK.test(innitytagmgr.plugins.articleReader.reader.title):(aK.test(innitytagmgr.plugins.articleReader.reader.title)||aK.test(innitytagmgr.plugins.articleReader.reader.textContent));if(aP){if(aV.hasOwnProperty("_px")){window._innityq=window._innityq||[];window._innityq.push(["_pixel",{id:aV._px,type:"kwp"}]);}return!0;}}}return!1;}else{setTimeout(function(){innitytagmgr.util._matchArticleKeyword(aV);},1000);}}catch(bM){}},_fifoTags:function(t){if("object"!==typeof t)return!1;try{var aJ=[],bV=[],l;while(0<t.length){l=t.shift();if(l.hasOwnProperty("inline")&&l["inline"])aJ.push(l);else bV.push(l);}aJ.length&&this.bA(aJ);bV.length&&this.aL(bV);}catch(bM){console.log(bM);}},_clientDomain:function(){var v="";try{v=window.parent.parent.location.host;}catch(bM){try{v=window.parent.location.host;}catch(bM){v=location.host;}}return v;},_eventListener:function(bs,h,K){document.addEventListener?bs.addEventListener(h,K,!1):document.attachEvent&&bs.attachEvent("on"+h,K);},_getQueryVariable:function(L){var C;try{C=window.parent.parent.location.search;}catch(bM){try{C=window.parent.location.search;}catch(bM){C=location.search;}}C=C.substring(1).match(L+'=([^&#]*)');return(C&&decodeURIComponent(C[1]))|| !1;},_getCookie:function(key){var k=document.cookie.match(key+'=([^;]*)');return(k&&decodeURIComponent(k[1]))|| !1;},_setCookie:function(domain,key,value,expires){var H=new Date();H.setTime(H.getTime()+expires);var aX="; expires="+H.toGMTString();document.cookie=key+"="+value+aX+"; domain="+domain+"; path=/";},_delCookie:function(domain,key){var aF=new Date();aF.setTime(aF.getTime()-86400);var aX="; expires="+aF.toGMTString();document.cookie=key+"="+aX+"; domain="+domain+"; path=/";},_setStorage:function(V,T,G,aW){if(window.localStorage){window.localStorage[V]=T;}else if(navigator.cookieEnabled&&(typeof aW==="undefined"||aW)){this._setCookie(location.host,V,T,G*1000);}},_retrieveStorage:function(V){var result;if(window.localStorage){return window.localStorage[V]|| !1;}else if(navigator.cookieEnabled){result=document.cookie.match(V+'=([^;]*)');return(result&&decodeURIComponent(result[1]))|| !1;}else{return "";}},_getCurrentScript:function(){return document.currentScript||(function(){var ay=document.getElementsByTagName("script");return ay[ay.length-1];})();}};(function(_lev0,_l0doc){try{var innitytags=[];try{_lev0=window.parent.parent.document?window.parent.parent:window;}catch(F){_lev0=window;}if("undefined"!==typeof window.bG6124a52c47e704b805000009)return!1;window.bG6124a52c47e704b805000009= !0;_l0doc=_lev0.document;innitytags.push({id:"6124a55847e704e105000002",type:"javascript",inline:true,src:"%3Cscript%20async%20src%3D%22https%3A%2F%2Fwww.googletagmanager.com%2Fgtag%2Fjs%3Fid%3DDC-10583176%22%3E%3C%2Fscript%3E%0A%3Cscript%3E%0A%20%20window.dataLayer%20%3D%20window.dataLayer%20%7C%7C%20%5B%5D%3B%0A%20%20function%20gtag%28%29%7BdataLayer.push%28arguments%29%3B%7D%0A%20%20gtag%28%27js%27%2C%20new%20Date%28%29%29%3B%0A%0A%20%20gtag%28%27config%27%2C%20%27DC-10583176%27%29%3B%0A%3C%2Fscript%3E%0A%3Cscript%3E%0A%20%20gtag%28%27event%27%2C%20%27conversion%27%2C%20%7B%0A%20%20%20%20%27allow_custom_scripts%27%3A%20true%2C%0A%20%20%20%20%27send_to%27%3A%20%27DC-10583176%2F10x10_r0%2Fvfgah0%2Bstandard%27%0A%20%20%7D%29%3B%0A%3C%2Fscript%3E%0A%3Cnoscript%3E%0A%3Cimg%20src%3D%22https%3A%2F%2Fad.doubleclick.net%2Fddm%2Factivity%2Fsrc%3D10583176%3Btype%3D10x10_r0%3Bcat%3Dvfgah0%3Bdc_lat%3D%3Bdc_rdid%3D%3Btag_for_child_directed_treatment%3D%3Btfua%3D%3Bnpa%3D%3Bgdpr%3D%24%7BGDPR%7D%3Bgdpr_consent%3D%24%7BGDPR_CONSENT_755%7D%3Bord%3D1%3F%22%20width%3D%221%22%20height%3D%221%22%20alt%3D%22%22%2F%3E%0A%3C%2Fnoscript%3E"});innitytags.push({id:"6135c66e47e704e908000003",type:"javascript",inline:true,src:"%3C%21--%20Global%20site%20tag%20%28gtag.js%29%20-%20Google%20Analytics%20--%3E%0A%3Cscript%20async%20src%3D%22https%3A%2F%2Fwww.googletagmanager.com%2Fgtag%2Fjs%3Fid%3DUA-175969282-48%22%3E%3C%2Fscript%3E%0A%3Cscript%3E%0A%20%20window.dataLayer%20%3D%20window.dataLayer%20%7C%7C%20%5B%5D%3B%0A%20%20function%20gtag%28%29%7BdataLayer.push%28arguments%29%3B%7D%0A%20%20gtag%28%27js%27%2C%20new%20Date%28%29%29%3B%0A%0A%20%20gtag%28%27config%27%2C%20%27UA-175969282-48%27%29%3B%0A%3C%2Fscript%3E%0A"});innitytagmgr.bn();innitytagmgr.plugins.dataCollection.enable&&innitytagmgr.aE();innitytagmgr.plugins.advenueCPSV.enable&&innitytagmgr.bz();innitytagmgr.plugins.articleReader.enable&&innitytagmgr.bj(_l0doc);if(innitytags.length>0)innitytagmgr.util._fifoTags(innitytags);}catch(bM){console.log(bM);}})(window);
