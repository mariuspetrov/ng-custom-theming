(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{DPAR:function(e,t,n){"use strict";var s,r=n("q1tI");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(this,arguments)}t.a=function(e){return r.createElement("svg",c({width:20,height:21,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),s||(s=r.createElement("path",{d:"M4.166 10.5h11.667M10 4.667l5.833 5.833L10 16.333",stroke:"#fff",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}},DsMh:function(e,t,n){"use strict";var s=n("H+61"),r=n("UlJF"),c=new(function(){function e(){Object(s.a)(this,e)}return Object(r.a)(e,[{key:"sendContributeForm",value:function(e){return fetch("/api/v1/forms/contribute",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(e)}).then((function(e){return e.json()}))}},{key:"sendServicesForm",value:function(e){return fetch("/api/v1/forms/services",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(e)}).then((function(e){return e.json()}))}},{key:"sendWorkshopsForm",value:function(e){return fetch("/api/v1/forms/workshops",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(e)}).then((function(e){return e.json()}))}},{key:"sendAngularCourseAppForm",value:function(e){return fetch("/api/v1/forms/angular-course",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(e)}).then((function(e){return e.json()}))}},{key:"sendAngularProgramAppForm",value:function(e){return fetch("/api/v1/forms/angular-program",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(e)}).then((function(e){return e.json()}))}},{key:"getNewsletterSubscriptionCheckKey",value:function(){return"newsletterSubscriptionCheck"}},{key:"checkIsUserSubscribedByEmail",value:function(e){return fetch("/api/v1/forms/newsletter/check",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify({email:e})}).then((function(e){return e.json()})).then((function(e){return e.message})).catch((function(e){return console.error("Oops...something went wrong :(",e),!1}))}},{key:"subscribeToNewsletter",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",s="/api/v1/forms/newsletter",r={framework:n,email:e,name:t};return fetch(s,{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(r)}).then((function(e){return e.json().then((function(t){if(!e.ok)throw t;return t.message}))}))}}]),e}());t.a=c},LzgA:function(e,t,n){e.exports={lds_default:"Loader_lds_default__10SQz"}},NzbH:function(e,t,n){e.exports={newsletter:"Newsletter_newsletter__2Pk0O",newsletter_white_bg:"Newsletter_newsletter_white_bg__1n7Ej",newsletter_simplistic:"Newsletter_newsletter_simplistic__q4siP",newsletter_success:"Newsletter_newsletter_success__2NbcZ",newsletter_success_simplistic:"Newsletter_newsletter_success_simplistic__2lzY8",title:"Newsletter_title__81pOL",deep_dive:"Newsletter_deep_dive__3WlF3",description:"Newsletter_description__3kMte",see_previous:"Newsletter_see_previous__1VF0r",follow_title:"Newsletter_follow_title__3HFAg",follow_links:"Newsletter_follow_links__2JYrh",newsletter_form:"Newsletter_newsletter_form__3bYEK",newsletter_name:"Newsletter_newsletter_name__2up0V",newsletter_email:"Newsletter_newsletter_email__1puYB",newsletter_framework:"Newsletter_newsletter_framework__1vP05",error_section:"Newsletter_error_section__2xeBN",subscribe_btn:"Newsletter_subscribe_btn__2sgR7",subscribe_btn_popUp:"Newsletter_subscribe_btn_popUp__2xN3R",border:"Newsletter_border__3vlfO"}},aOMB:function(e,t,n){"use strict";var s=n("nKUr"),r=n("q1tI"),c=n.n(r),a=n("VtrM"),o=n("20a2"),i=n("JI6e"),l=n("7vrA"),u=n("QojX"),h=n("3Z9Z"),d=n("c4J/"),j=n("omot"),b=n("yp05"),f=n("DsMh"),p=n("ygkY"),m=n("DPAR"),_=n("/H3h"),w=n("NzbH"),O=n.n(w),g=n("pNFW"),v=n("T9kL");t.a=function(e){var t=e.simple,n=void 0!==t&&t,w=e.border,y=e.white_bg,x=Object(a.a)(b.a.getUserKey(),b.a.checkLogin).data,k=Object(a.a)(x?[f.a.getNewsletterSubscriptionCheckKey(),x.email]:null,(function(e,t){return f.a.checkIsUserSubscribedByEmail(t)})).data,N=Object(r.useState)(!1),S=N[0],T=N[1],C=Object(r.useState)(""),J=C[0],P=C[1],F="/newsletter"===Object(o.useRouter)().route,E=Object(r.useState)(""),L=E[0],U=E[1],A=Object(r.useState)(""),I=A[0],q=A[1],M=Object(r.useState)(""),Y=M[0],D=M[1],G=Object(r.useState)(""),K=G[0],z=G[1],H=Object(r.useState)(!1),R=H[0],W=H[1];return Object(s.jsxs)(c.a.Fragment,{children:[!k&&!S&&Object(s.jsx)("div",{id:"newsletter",className:"".concat(O.a.newsletter," ").concat(n?O.a.newsletter_simplistic:""," ").concat(w?O.a.border:"","  ").concat(y?O.a.newsletter_white_bg:"","\n            "),children:Object(s.jsx)(l.a,{className:"position-relative",children:Object(s.jsxs)(h.a,{className:"align-items-lg-center",children:[L&&Object(s.jsx)(i.a,{xs:12,children:Object(s.jsxs)("div",{className:O.a.error_section,children:[Object(s.jsx)("p",{children:L}),Object(s.jsx)(p.a,{className:"svg-gray svg-red-hover",onClick:function(){U("")},role:"button",tabIndex:0})]})}),Object(s.jsxs)(i.a,{xs:12,md:6,children:[Object(s.jsx)("p",{className:O.a.title,children:"Sign Up for Our top-notch Newsletter"}),Object(s.jsx)("p",{className:O.a.deep_dive,children:"The Deep Dive"}),Object(s.jsxs)("p",{className:"".concat(O.a.description),children:["Get the latest coverage of ",Object(s.jsx)("b",{children:"advanced"})," web development straight into your inbox. Twice a month."]}),!F&&Object(s.jsx)(j.a,{href:"".concat(g.a.siteUrl,"/newsletter"),type:"button",children:Object(s.jsxs)("a",{className:"".concat(O.a.see_previous," ").concat(n?"m-md-0":""," btn-read-more btn-read-more-orange svg-orange-lite-hover svg-orange-lightest-active"),children:["See previous editions",Object(s.jsx)(m.a,{className:"svg-orange"})]})}),!n&&Object(s.jsxs)("div",{className:"d-none d-md-block",children:[Object(s.jsx)("p",{className:O.a.follow_title,children:"Follow us"}),Object(s.jsx)(h.a,{children:Object(s.jsx)(i.a,{xs:12,className:O.a.follow_links,children:Object(s.jsx)(v.a,{href:"https://twitter.com/indepth_dev",children:Object(s.jsx)(_.a,{className:"svg-orange"})})})})]})]}),Object(s.jsx)(i.a,{xs:12,md:6,className:O.a.newsletter_form,children:Object(s.jsx)(u.a,{name:"newsletter",onSubmit:function(e){e.preventDefault(),W(!0),f.a.subscribeToNewsletter(Y,I,K).then((function(e){e&&(T(!0),P(e))})).catch((function(){U("Oops...something went wrong :(")})).finally((function(){W(!1)}))},children:Object(s.jsxs)(h.a,{children:[Object(s.jsx)(i.a,{xs:12,lg:6,children:Object(s.jsxs)(u.a.Group,{controlId:n?"simple-name":"name",className:O.a.newsletter_name,children:[Object(s.jsx)(u.a.Label,{children:"Name"}),Object(s.jsx)(u.a.Control,{type:"text",required:!0,placeholder:"Enter Your name",value:I,onChange:function(e){q(e.target.value)}})]})}),Object(s.jsx)(i.a,{xs:12,lg:6,children:Object(s.jsxs)(u.a.Group,{controlId:n?"simple-email":"email",className:O.a.newsletter_email,children:[Object(s.jsx)(u.a.Label,{children:"E-mail"}),Object(s.jsx)(u.a.Control,{type:"email",required:!0,placeholder:"Enter Your E-mail",value:Y,onChange:function(e){D(e.target.value)}})]})}),!n&&Object(s.jsx)(i.a,{xs:12,children:Object(s.jsxs)(u.a.Group,{controlId:"framework",className:O.a.newsletter_framework,children:[Object(s.jsx)(u.a.Label,{children:"What are you interested in?"}),Object(s.jsx)(u.a.Control,{type:"text",required:!0,value:K,placeholder:"E.g. JavaScript, Angular, React..",onChange:function(e){z(e.target.value)}})]})}),Object(s.jsx)(i.a,{xs:12,lg:6,children:Object(s.jsx)("button",{type:"submit",className:"btn ".concat(O.a.subscribe_btn),children:R?Object(s.jsx)(d.a,{}):"Subscribe"})})]})})}),!n&&Object(s.jsxs)(i.a,{xs:12,className:"d-block d-md-none",children:[Object(s.jsx)("p",{className:O.a.follow_title,children:"Follow us"}),Object(s.jsx)(h.a,{children:Object(s.jsx)(i.a,{xs:12,className:O.a.follow_links,children:Object(s.jsx)(v.a,{href:"https://twitter.com/indepth_dev",children:Object(s.jsx)(_.a,{className:"svg-orange"})})})})]})]})})}),!k&&S&&Object(s.jsxs)("div",{className:"text-center ".concat(O.a.newsletter_success," ").concat(n?O.a.newsletter_success_simplistic:""),children:[Object(s.jsx)(l.a,{className:"position-relative",children:Object(s.jsxs)(i.a,{xs:12,children:[Object(s.jsx)("h2",{children:"Success!"}),Object(s.jsx)("p",{children:J})]})}),Object(s.jsx)(j.a,{href:"/newsletter",children:Object(s.jsx)("a",{className:"btn mx-auto",children:"Go to previous editions"})})]})]})}},"c4J/":function(e,t,n){"use strict";var s=n("nKUr"),r=(n("q1tI"),n("LzgA")),c=n.n(r);t.a=function(e){var t=e.color,n=void 0===t?"#FFF":t,r=e.scale,a=void 0===r?.6:r;return Object(s.jsxs)("div",{className:c.a.lds_default,style:{transform:"scale(".concat(a,")")},children:[Object(s.jsx)("div",{style:{background:n}}),Object(s.jsx)("div",{style:{background:n}}),Object(s.jsx)("div",{style:{background:n}}),Object(s.jsx)("div",{style:{background:n}}),Object(s.jsx)("div",{style:{background:n}}),Object(s.jsx)("div",{style:{background:n}}),Object(s.jsx)("div",{style:{background:n}}),Object(s.jsx)("div",{style:{background:n}}),Object(s.jsx)("div",{style:{background:n}}),Object(s.jsx)("div",{style:{background:n}}),Object(s.jsx)("div",{style:{background:n}}),Object(s.jsx)("div",{style:{background:n}})]})}},ygkY:function(e,t,n){"use strict";var s,r=n("q1tI");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(this,arguments)}t.a=function(e){return r.createElement("svg",c({width:40,height:40,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),s||(s=r.createElement("path",{d:"M28.572 11.429L11.429 28.572m0-17.143l17.143 17.143",stroke:"#FFF",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}},yp05:function(e,t,n){"use strict";var s=n("H+61"),r=n("UlJF"),c=new(function(){function e(){Object(s.a)(this,e)}return Object(r.a)(e,[{key:"getUserKey",value:function(){return"getUser"}},{key:"getCleanUser",value:function(){return{id:null,email:null,is_active:null,bio:null,website:null,twitter_username:null,github_username:null,facebook_username:null,google_username:null}}},{key:"checkLogin",value:function(){return fetch("/api/v1/auth/login",{method:"GET"}).then((function(e){return e.ok?e.json():null}))}},{key:"checkingEmail",value:function(e){return fetch("/api/v1/auth/email",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(e)})}},{key:"login",value:function(e){return fetch("/api/v1/auth/login",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(e)}).then((function(e){return e.json().then((function(t){if(!e.ok)throw t;return t}))})).catch((function(e){throw e}))}},{key:"registration",value:function(e){return fetch("/api/v1/auth/registration",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(e)}).then((function(e){return e.json().then((function(t){if(!e.ok)throw t;return t}))})).catch((function(e){throw e}))}},{key:"logout",value:function(){return fetch("/api/v1/auth/logout",{method:"GET"})}},{key:"forgot",value:function(e){return fetch("/api/v1/auth/forgot",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(e)}).then((function(e){return e.json().then((function(t){if(!e.ok)throw t;return t}))})).catch((function(e){throw e}))}},{key:"resetPassword",value:function(e){return fetch("/api/v1/auth/reset-password",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(e)}).then((function(e){return 400===e.status?e.json().then((function(e){throw e})):e.ok})).catch((function(e){throw e}))}}]),e}());t.a=c}}]);