(this.webpackJsonpinterface=this.webpackJsonpinterface||[]).push([[0],{22:function(e,t,a){var i={"./en/translation.json":23,"./ru/translation.json":24,"./tr/translation.json":25};function s(e){var t=n(e);return a(t)}function n(e){if(!a.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}s.keys=function(){return Object.keys(i)},s.resolve=n,e.exports=s,s.id=22},23:function(e){e.exports=JSON.parse('{"dil":"English","ev":"Home","hakkimda":"About","yetenekler":"Skills","deneyimler":"Experiences","portfoyler":"Portfolio","iletisim":"Contact","bannermerhaba":"Hello","banneriam":"I\'m","about_about":"About","about_dogumHarihi":"Birthday","about_Sehir":"City","about_Universite":"Study","about_Derece":"Degree","about_Mail":"Mail","about_Telefon":"Phone","about_Website":"Website","about_Yas":"Age","about_CVindir":"DOWNLOAD CV","about_Lisans":"License","about_OnLisans":"Associate Degree","banner_ingilizce":"English","banner_Turkish":"Turkish","experience_Egitim":"Education","experience_Deneyim":"Experience","ay1":"January","ay2":"February","ay3":"March","ay4":"April","ay5":"May","ay6":"June","ay7":"July","ay8":"August","ay9":"September","ay10":"October","ay11":"November","ay12":"December","certificate_AlinanKurum":"Institution Received","certificate_VerildigiTarih":"Date issued","certificate_SertifikaGoruntule":"View Certificate","certificate_AldigimSertifikalar":"My Certificates","header_sertifikalar":"Certifications","footer_TelifHaklari":"All rights reserved."}')},24:function(e){e.exports=JSON.parse('{"dil":"T\xfcrk\xe7eeeee","ev":"Genel Bilgi","hakkimda":"Hakk\u0131mda","yetenekler":"Yetenekler","deneyimler":"Deneyimler","portfoyler":"Portfolyo","iletisim":"\u0130leti\u015fim","bannermerhaba":"Merhaba","banneriam":"Ben"}')},25:function(e){e.exports=JSON.parse('{"dil":"T\xfcrk\xe7e","ev":"Genel Bilgi","hakkimda":"Hakk\u0131mda","yetenekler":"Yetenekler","deneyimler":"Deneyimler","iletisim":"\u0130leti\u015fim","bannermerhaba":"Merhaba","banneriam":"Ben","about_about":"Hakk\u0131mda","about_dogumHarihi":"Do\u011fum Tarihi","about_Sehir":"\u015eehir","about_Universite":"\xdcniversite","about_Derece":"Derece","about_Mail":"Mail","about_Telefon":"Telefon","about_Website":"Website","about_Yas":"Ya\u015f","about_CVindir":"CV \u0130ND\u0130R","about_Lisans":"Lisans","about_OnLisans":"\xd6n Lisans","banner_ingilizce":"Ingilizce","banner_Turkish":"T\xfcrk\xe7e","experience_Egitim":"E\u011fitim","experience_Deneyim":"Deneyim","ay1":"Ocak","ay2":"\u015eubat","ay3":"Mart","ay4":"Nisan","ay5":"May\u0131s","ay6":"Haziran","ay7":"Temmuz","ay8":"A\u011fustos","ay9":"Eyl\xfcl","ay10":"Ekim","ay11":"Kas\u0131m","ay12":"Aral\u0131k","certificate_AlinanKurum":"Al\u0131nan Kurum","certificate_VerildigiTarih":"Verildi\u011fi tarih","certificate_SertifikaGoruntule":"Sertifika G\xf6r\xfcnt\xfcle","certificate_AldigimSertifikalar":"Ald\u0131\u011f\u0131m Sertifikalar","header_sertifikalar":"Sertifikalar","footer_TelifHaklari":"Telif haklar\u0131 sakl\u0131d\u0131r."}')},29:function(e,t,a){"use strict";a.r(t);var i=a(0),s=a(1),n=a.n(s),c=a(13),r=a.n(c),l=a(12),o=a.n(l),d=a(14),j=a(2),b=a(3),m=a(7),h=a(5),u=a(4),x=a(8),f=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"componentDidMount",value:function(){var e,t,a=document.querySelectorAll(".cd-words-wrapper b"),i=document.querySelectorAll(".cd-words-wrapper")[0],s=0,n=0,c=0,r=!1;function l(){c=r?c-2:c+3,!r&&c>t?(r=!0,setTimeout(l,1e3)):r&&c<=0?(clearTimeout(null),r=!1,c=0,i.style.width="0px",setTimeout(o,1e3)):(i.style.width=c+"px",setTimeout(l,5))}function o(){var i=a[n];i.classList.remove("is-visible"),i.classList.add("is-hidden"),(e=a[s]).classList.add("is-visible"),t=e.offsetWidth+20,n=s,s===a.length-1?s=0:s+=1,setTimeout(l,100)}setTimeout(o,2500)}},{key:"render",value:function(){var e=this,t=this.props.lang,a=this.props.bannerInfo,s=this.props.socailList,n=function(e,t){var a="";switch(e){case"facebook":a="fab fa-facebook-f";break;case"twitter":a="fab fa-twitter";break;case"instagram":a="fab fa-instagram";break;case"pinterest":a="fab fa-pinterest-p";break;case"linkedin":a="fab fa-linkedin";break;case"github":a="fab fa-github";break;default:a=""}return Object(i.jsx)("a",{href:t,target:"blank",children:Object(i.jsx)("i",{className:a},t)})},c=/^(ftp|https):\/\/[^ "]+$/,r=Object.entries(s).map((function(e){var t=Object(x.a)(e,2),a=t[0],s=t[1];return s&&new RegExp(c).test(s)?Object(i.jsx)("li",{children:Object(i.jsx)("div",{className:"translate-bottom-100 opacity-animation transition-50 transition-delay-1300",children:n(a,s)})},a):""}));return Object(i.jsx)("section",{className:"fxt-main-banner-section bg-common",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"fxt-main-banner-box-layout1 has-animation",children:[Object(i.jsxs)("div",{className:"top-content",children:[Object(i.jsx)("div",{className:"item-img",children:Object(i.jsx)("div",{className:"translate-zoomout-10 opacity-animation transition-50 transition-delay-100",children:Object(i.jsx)("img",{src:window.location.origin+a.userFoto,alt:"Figure"})})}),Object(i.jsxs)("div",{className:"item-content",children:[Object(i.jsx)("div",{className:"translate-bottom-100 opacity-animation transition-150 transition-delay-500",children:Object(i.jsx)("div",{className:"item-top-text",children:t.bannermerhaba})}),Object(i.jsx)("div",{className:"translate-bottom-100 opacity-animation transition-150 transition-delay-800",children:Object(i.jsxs)("h1",{className:"item-title",children:[t.banneriam," ",a.userName," ",a.userSurname]})}),Object(i.jsx)("div",{className:"translate-bottom-100 opacity-animation transition-150 transition-delay-1100",children:Object(i.jsx)("div",{className:"cd-intro",children:Object(i.jsxs)("h2",{className:"small-text cd-headline clip",children:[Object(i.jsx)("span",{className:"item-subtitle",children:"A Freelance"}),Object(i.jsxs)("span",{className:"cd-words-wrapper",style:{width:"0px"},children:[Object(i.jsx)("b",{className:"item-subtitle is-visible",children:"Web Developer"}),Object(i.jsx)("b",{className:"is-hidden",children:"UI/UX Designer"}),Object(i.jsx)("b",{className:"is-hidden",children:"WordPress Developer"}),Object(i.jsx)("b",{className:"is-hidden",children:"Web Designer"})]})]})})})]})]}),Object(i.jsxs)("div",{className:"bottom-content",children:[function(a){if(a.lenght<=1)return"";var s,n=a.map((function(a){switch(a){case"en":s=Object(i.jsx)("img",{src:"/language/english.png",alt:t.banner_ingilizce,title:t.banner_ingilizce});break;default:s=Object(i.jsx)("img",{src:"/language/turkey.png",alt:t.banner_Turkish,title:t.banner_Turkish})}return Object(i.jsx)("div",{className:"item translate-bottom-100 opacity-animation transition-50 transition-delay-1300",onClick:function(){return e.props.handleSetCookie(a)},children:s},a)}));return Object(i.jsxs)("div",{className:"item-lang",children:[" ",n," "]})}(a.supportLang),Object(i.jsx)("div",{className:"item-social",children:Object(i.jsx)("ul",{children:r})}),Object(i.jsx)("div",{className:"item-website",children:Object(i.jsx)("div",{className:"translate-bottom-100 opacity-animation transition-50 transition-delay-2400",children:Object(i.jsx)("a",{href:"#",onClick:function(e){return e.preventDefault()},children:" www.ahmetbabali.com "})})})]})]})})})}}]),a}(n.a.Component),O=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var i;return Object(j.a)(this,a),(i=t.call(this,e)).state={activeLink:i.props.activeLink},i}return Object(b.a)(a,[{key:"menuSelect",value:function(e){this.setState({activeLink:e})}},{key:"render",value:function(){var e=this,t=this.props.lang,a=[{id:"#wrapper",text:t.ev},{id:"#about",text:t.hakkimda},{id:"#skills",text:t.yetenekler},{id:"#experience",text:t.deneyimler},{id:"#certificates",text:t.header_sertifikalar},{id:"#contact",text:t.iletisim}];return Object(i.jsx)("header",{className:"sticky-header menu-layout1",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"row d-flex align-items-center",children:[Object(i.jsx)("div",{className:"col-lg-2",children:Object(i.jsxs)("div",{className:"logo-area",children:[Object(i.jsx)("a",{href:"index.html",className:"default-logo",children:Object(i.jsx)("img",{src:"https://affixtheme.com/html/ree/demo/light/media/logo-default.png",alt:"logo",className:"img-fluid"})}),Object(i.jsx)("a",{href:"index.html",className:"sticky-logo",children:Object(i.jsx)("img",{src:"https://affixtheme.com/html/ree/demo/light/media/logo-sticky.png",alt:"logo",className:"img-fluid"})})]})}),Object(i.jsx)("div",{className:"col-lg-10 d-flex justify-content-end",children:Object(i.jsx)("nav",{id:"dropdown",className:"template-main-menu",style:{display:"block"},children:Object(i.jsx)("ul",{id:"onepage_nav",children:a.map((function(t){return Object(i.jsx)("li",{className:e.state.activeLink===t.id?"current":"",onClick:function(){return e.menuSelect(t.id)},children:Object(i.jsx)("a",{href:t.id,children:t.text})},t.id)}))})})})]})})})}}]),a}(n.a.Component),p=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){var e=this.props.lang,t=this.props.aboutInfo,a=this.props.bannerInfo,s=new Date(t.dataOfBirth),n=new Date,c=n.getTime()-s.getTime(),r=Math.floor(c/31556736e3),l=n.getFullYear(),o=s.getDate(),d=s.getMonth()+1;o<10&&(o="0"+o),d<10&&(d="0"+d);var j=o+"/"+d+"/"+l;return Object(i.jsx)("section",{className:"fxt-about-section bg-color-1",id:"about",children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsxs)("div",{className:"fxt-heading-layout1",children:[Object(i.jsx)("h2",{className:"heading-title",children:e.about_about}),Object(i.jsx)("div",{className:"heading-paragraph",children:t.about}),Object(i.jsx)("div",{className:"heading-line"})]}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"col-lg-4 col-12 has-animation",children:Object(i.jsxs)("div",{className:"fxt-about-box-layout1",children:[Object(i.jsx)("div",{className:"translate-zoomout-10 opacity-animation transition-50 transition-delay-500",children:Object(i.jsx)("div",{className:"item-img",children:Object(i.jsx)("img",{"data-tilt":"",src:window.location.origin+a.userFoto,alt:"About"})})}),Object(i.jsx)("div",{className:"translate-bottom-50 opacity-animation transition-150 transition-delay-1000",children:Object(i.jsxs)("a",{href:"#",className:"download-btn btn-fill",children:[e.about_CVindir,Object(i.jsx)("i",{className:"flaticon-download"})]})})]})}),Object(i.jsx)("div",{className:"col-lg-8 col-12",children:Object(i.jsxs)("div",{className:"fxt-about-box-layout2",children:[Object(i.jsxs)("h3",{className:"item-title",children:[a.userName," ",a.userSurname]}),Object(i.jsx)("div",{className:"item-subtitle",children:t.title}),Object(i.jsxs)("p",{children:[t.aboutDetails," "]}),Object(i.jsx)("div",{className:"personal-info",children:Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"col-md-6 col-12",children:Object(i.jsx)("div",{className:"info-list",children:Object(i.jsxs)("ul",{children:[Object(i.jsxs)("li",{children:[Object(i.jsxs)("span",{children:[e.about_dogumHarihi,":"]}),j]}),Object(i.jsxs)("li",{children:[Object(i.jsxs)("span",{children:[e.about_Sehir,":"]}),t.city]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("span",{children:"Deneyim:"}),"5 Y\u0131l 9 Ay"]}),Object(i.jsxs)("li",{children:[Object(i.jsxs)("span",{children:[e.about_Mail,":"]}),t.mail]})]})})}),Object(i.jsx)("div",{className:"col-md-6 col-12",children:Object(i.jsx)("div",{className:"info-list",children:Object(i.jsxs)("ul",{children:[Object(i.jsxs)("li",{children:[Object(i.jsxs)("span",{children:[e.about_Yas,":"]}),r]}),Object(i.jsxs)("li",{children:[Object(i.jsxs)("span",{children:[e.about_Lisans,":"]}),t.lisans]}),Object(i.jsxs)("li",{children:[Object(i.jsxs)("span",{children:[e.about_OnLisans,":"]}),t.onlisans]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("span",{children:"B\xf6l\xfcm:"}),"Computer Engineering"]})]})})})]})})]})})]})]})})}}]),a}(n.a.Component),g=function(e){var t=e.lang,a=e.skills,s=Object.entries(a).map((function(e){var t=Object(x.a)(e,2),a=t[0],s=t[1];return Object(i.jsxs)("li",{className:"single-item col-lg-4 col-md-6 col-sm-6 col-xs-12",children:[Object(i.jsx)("label",{children:a}),Object(i.jsx)("div",{className:"progress",children:Object(i.jsx)("div",{className:"progress-bar wow slideInLeft","data-wow-delay":"0ms","data-wow-duration":"2000ms",role:"progressbar",style:{width:s+"%"},children:Object(i.jsxs)("span",{children:[s,"%"]})})})]},a)}));return Object(i.jsx)("section",{className:"fxt-skill-section has-animation",id:"skills",children:Object(i.jsxs)("div",{className:"container translate-right-10 opacity-animation transition-200 transition-delay-100",children:[Object(i.jsxs)("div",{className:"fxt-heading-layout1",children:[Object(i.jsx)("h2",{className:"heading-title",children:t.yetenekler}),Object(i.jsx)("div",{className:"heading-paragraph"}),Object(i.jsx)("div",{className:"heading-line"})]}),Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("div",{className:"col-lg-12",children:Object(i.jsx)("div",{className:"fxt-skill-wrap-layout1",children:Object(i.jsx)("ul",{className:"fxt-skill-box-layout1",children:s})})})})]})})},v=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){var e=this.props.lang,t=this.props.certificateList.map((function(t,a){return Object(i.jsx)("div",{className:"col has-animation",children:Object(i.jsx)("div",{className:"translate-right-10 opacity-animation transition-200 transition-delay-100",children:Object(i.jsxs)("div",{className:"fxt-service-box-layout1",children:[Object(i.jsx)("div",{className:"item-img animation-delay0",children:Object(i.jsx)("img",{src:window.location.origin+"/certification/1/"+t.logo,alt:"service"})}),Object(i.jsxs)("div",{className:"item-content",children:[Object(i.jsx)("h3",{className:"item-title",children:Object(i.jsx)("a",{href:"#",children:t.Name})}),Object(i.jsxs)("p",{className:"m-0",children:[Object(i.jsxs)("span",{children:[e.certificate_AlinanKurum,": "]})," Udemy "]}),Object(i.jsx)("p",{children:Object(i.jsxs)("span",{children:[e.certificate_VerildigiTarih," Eyl 2019"]})}),Object(i.jsx)("a",{href:"#",className:"item-btn",children:e.certificate_SertifikaGoruntule})]})]})})},a)}));return Object(i.jsx)("section",{className:"fxt-certificate-section",id:"certificates",children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsxs)("div",{className:"fxt-heading-layout1",children:[Object(i.jsx)("h2",{className:"heading-title",children:e.certificate_AldigimSertifikalar}),Object(i.jsx)("div",{className:"heading-line"})]}),Object(i.jsx)("div",{className:"experience row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3",children:t})]})})}}]),a}(n.a.Component),N=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){var e=this.props.lang,t=function(t,a){var s=new Date(t),n=s.getFullYear(),c=s.getMonth(),r="";return r=e["ay"+c]+"'"+n,a?(n=(s=new Date(a)).getFullYear(),c=s.getMonth(),r+=" - "+e["ay"+c]+"'"+n):r+=" - PRESENT",Object(i.jsx)("h5",{className:"title title--h3 timeline__title",children:r})},a=this.props.experienceList,s=a.educationList.map((function(e){return Object(i.jsxs)("article",{className:"timeline__item",children:[t(e.startDate,e.endDate),Object(i.jsxs)("span",{className:"timeline__period",children:[e.uniName," / ",e.degree]}),Object(i.jsx)("h3",{className:"designation",children:e.episode}),Object(i.jsx)("p",{className:"timeline__description",children:e.description})]},e.uniName)})),n=a.experienceList.map((function(e){return Object(i.jsxs)("article",{className:"timeline__item",children:[t(e.startDate,e.endDate),Object(i.jsx)("span",{className:"timeline__period",children:e.name}),Object(i.jsx)("h3",{className:"designation",children:e.title}),Object(i.jsx)("p",{className:"timeline__description",children:e.description})]},e.name)}));return Object(i.jsx)("section",{className:"fxt-about-section bg-color-1 has-animation",id:"experience",children:Object(i.jsxs)("div",{className:"container p-0 translate-left-10 opacity-animation transition-200 transition-delay-100",children:[Object(i.jsxs)("div",{className:"fxt-heading-layout1",children:[Object(i.jsx)("h2",{className:"heading-title",children:e.experience_Deneyim}),Object(i.jsx)("div",{className:"heading-paragraph"}),Object(i.jsx)("div",{className:"heading-line"})]}),Object(i.jsxs)("div",{className:"experience row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3",children:[Object(i.jsxs)("div",{className:"section col",children:[Object(i.jsxs)("h2",{className:"title title--h2",children:[Object(i.jsx)("i",{className:"fas fa-graduation-cap"}),e.experience_Egitim]}),Object(i.jsx)("div",{className:"timeline",children:s})]}),Object(i.jsxs)("div",{className:"section col",children:[Object(i.jsxs)("h2",{className:"title title--h2",children:[Object(i.jsx)("i",{className:"fas fa-briefcase"}),e.experience_Deneyim]}),Object(i.jsx)("div",{className:"timeline",children:n})]})]})]})})}}]),a}(n.a.Component),y=a(30),k="http://localhost:3001",_=function(e){var t=e.lang,a=e.footerInfo;return Object(i.jsxs)("footer",{id:"contact",children:[Object(i.jsx)("div",{className:"footer-info",children:Object(i.jsx)("div",{className:"container text-center",children:Object(i.jsxs)("div",{className:"row text-center info",children:[Object(i.jsx)("div",{className:"col-sm-6 item",children:Object(i.jsxs)("div",{className:"content",children:[Object(i.jsx)("span",{className:"pe-7s-call pe-3x pe-va icon",children:Object(i.jsx)("i",{className:"fas fa-envelope"})}),Object(i.jsx)("div",{children:Object(i.jsx)("p",{children:Object(i.jsx)("a",{href:"mailto:your@example.com",children:a.mail})})})]})}),Object(i.jsx)("div",{className:"col-sm-6 item",children:Object(i.jsxs)("div",{className:"content",children:[Object(i.jsx)("span",{className:"pe-7s-call pe-3x pe-va icon",children:Object(i.jsx)("i",{className:"fas fa-map-marker-alt"})}),Object(i.jsx)("div",{children:Object(i.jsx)("p",{children:a.country})})]})})]})})}),Object(i.jsx)("div",{className:"footer-bottom",children:Object(i.jsx)("div",{className:"container text-center",children:Object(i.jsxs)("p",{children:[" Copyright \xa9 2020. ",t.footer_TelifHaklari]})})})]})},w=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(e){var a;return Object(j.a)(this,s),(a=t.call(this,e)).pageLoad=function(){var e=a.state.userId;fetch(k+"/users?userId="+e,{method:"GET",headers:{"Content-Type":"application/json"}}).then(function(){var t=Object(d.a)(o.a.mark((function t(i){var s,n,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.json();case 2:if(s=t.sent,n=a.props.cookies.get("language")||s.defaultLanguage||"tr",i.ok){t.next=7;break}return c=s&&s.message||i.statusText,t.abrupt("return",Promise.reject(c));case 7:return fetch(k+"/details_"+n+"?userId="+e).then((function(e){return e.json()})).then((function(e){a.setState({aboutInfo:e.aboutInfo,experienceList:e.experienceList,footerInfo:{mail:e.aboutInfo.mail,country:e.aboutInfo.country}})})).then((function(){s=s[0];var e=document.body.classList;e.remove("loaded"),a.setState({userLanguage:s.defaultLanguage,bannerInfo:s.bannerInfo,skills:s.skills,socailList:s.socialAdreess,certificateList:s.certificateList,language:n}),setTimeout(function(){var t=window.location.hash;this.setState({activeLink:t,loading:!1}),t&&document.querySelectorAll("a[href='"+t+"']")[0].click(),setTimeout((function(){if(e.add("loaded"),window.IntersectionObserver){var t=new IntersectionObserver((function(e,t){e.forEach((function(e){e.isIntersecting&&(e.target.classList.add("active-animation"),t.unobserve(e.target))}))}),{rootMargin:"0px 0px -150px 0px"});document.querySelectorAll(".has-animation").forEach((function(e){t.observe(e)}))}else document.querySelectorAll(".has-animation").forEach((function(e){e.classList.remove("has-animation")}))}),750)}.bind(Object(m.a)(a)),1500)})),t.abrupt("return");case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){a.setState({errorMessage:e.toString()}),console.error("There was an error!",e)}))},a.handleSetCookie=function(e){if(a.state.language===e)return!1;var t=a.props.cookies;t.remove("language"),t.set("language",e,{path:"/"}),a.setState({loading:!0,language:t.get("language")}),a.pageLoad()},a.state={language:null,bannerInfo:{},aboutInfo:{},skills:{},experienceList:{},certificateList:{},userId:1,loading:!0,activeLink:"#wrapper",footerInfo:{}},a}return Object(b.a)(s,[{key:"componentDidMount",value:function(){this.pageLoad()}},{key:"render",value:function(){var e=this.state.language;if(!e||this.state.loading)return Object(i.jsx)("div",{className:"preloader",children:Object(i.jsx)("div",{className:"preloader-gif",children:Object(i.jsx)("img",{src:window.location.origin+"/preloader.gif",alt:"Preloader"})})});var t=a(22)("./".concat(e,"/translation.json"));return Object(i.jsxs)(n.a.Fragment,{children:[Object(i.jsx)(O,{lang:t,activeLink:this.state.activeLink}),Object(i.jsx)(f,{lang:t,bannerInfo:this.state.bannerInfo,socailList:this.state.socailList,handleSetCookie:this.handleSetCookie}),Object(i.jsx)(p,{lang:t,aboutInfo:this.state.aboutInfo,bannerInfo:this.state.bannerInfo}),Object(i.jsx)(g,{lang:t,skills:this.state.skills}),Object(i.jsx)(N,{lang:t,experienceList:this.state.experienceList}),Object(i.jsx)(v,{lang:t,certificateList:this.state.certificateList}),Object(i.jsx)(_,{lang:t,footerInfo:this.state.footerInfo})]})}}]),s}(s.Component),L=Object(y.a)(w),S=a(31);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(i.jsx)("div",{className:"wrapper",children:Object(i.jsx)(S.a,{children:Object(i.jsx)(L,{})})}),document.querySelector("#body-mean-container"))}},[[29,1,2]]]);
//# sourceMappingURL=main.33b0992b.chunk.js.map