(function(t){function e(e){for(var i,s,r=e[0],l=e[1],c=e[2],m=0,d=[];m<r.length;m++)s=r[m],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,r=1;r<n.length;r++){var l=n[r];0!==a[l]&&(i=!1)}i&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},a={app:0},o=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0d47":function(t,e,n){"use strict";var i=n("ecc4"),a=n.n(i);a.a},3959:function(t,e,n){"use strict";var i=n("e697"),a=n.n(i);a.a},"43b3":function(t,e,n){},"47cb":function(t,e,n){},4829:function(t,e,n){t.exports=n.p+"img/LogoFull.f4addec2.svg"},"4cf9":function(t,e,n){"use strict";var i=n("8927"),a=n.n(i);a.a},"4d56":function(t,e,n){"use strict";var i=n("c388"),a=n.n(i);a.a},"4dbd":function(t,e,n){"use strict";var i=n("ed39"),a=n.n(i);a.a},"4e18":function(t,e,n){"use strict";var i=n("c720"),a=n.n(i);a.a},"4e29":function(t,e,n){t.exports=n.p+"img/WhiteFull.4a906a84.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Hero"),n("Intro"),n("Portfolio"),n("Contact")],1)},o=[],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"hero section"},[i("img",{staticClass:"hero_nameImg light",attrs:{src:n("4829"),title:"Arjun Kalburgi Leaf Logo"}}),i("img",{staticClass:"hero_nameImg dark",attrs:{src:n("4e29"),title:"Arjun Kalburgi Leaf Logo"}}),i("p",{staticClass:"hero_text--tag"},[t._v("learning, finding, designing, developing impact")]),i("p",{staticClass:"hero_text--intro"},[t._v(" I'm a UX Developer that is always trying to learn as much as I can, this is because I believe that every random thing I learn will somehow help me make an impact in this world. I'm currently based out of Toronto, where I take every chance I get to explore culture and build something new.")]),i("ButtonList",{attrs:{hasButton:!0,button:t.button,list:t.list}})],1)},r=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"buttonlist"},[t.hasButton?n("li",{key:t.button.text,staticClass:"button"},[n("Button",{staticClass:"buttonlist_button",attrs:{link:t.button.link,text:t.button.text}})],1):t._e(),t._l(t.list,(function(e){return n("li",{key:e.icon,staticClass:"icon"},[n("a",{staticClass:"buttonlist_icon",class:t.hasButton?"":"light",attrs:{href:e.link,title:e.icon}},[n("font-awesome-icon",{attrs:{icon:t.icon[e.icon]}})],1)])}))],2)},c=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"button",attrs:{href:t.link,title:t.text,target:t.newTab?"blank":""}},[t._v(t._s(t.text))])},m=[],d={name:"src-components-system-button",props:["link","text","new-tab"],mounted:function(){},data:function(){return{}},methods:{},computed:{}},f=d,g=(n("aa10"),n("2877")),p=Object(g["a"])(f,u,m,!1,null,"b06ad38c",null),h=p.exports,b=n("ad3d"),v=n("b702"),_=n("f2d1"),k={name:"ButtonList",components:{Button:h,FontAwesomeIcon:b["a"]},props:["hasButton","button","list"],mounted:function(){},data:function(){return{icon:{email:v["b"],blog:v["a"],twitter:_["d"],github:_["b"],linkedin:_["c"],codepen:_["a"]}}},methods:{},computed:{}},w=k,y=(n("73d7"),Object(g["a"])(w,l,c,!1,null,"f325f682",null)),C=y.exports,x={name:"hero",components:{ButtonList:C},props:[],mounted:function(){},data:function(){return{button:{link:"writing",text:"writing"},list:[{link:"https://twitter.com/arjunkalburgi",icon:"twitter"},{link:"https://github.com/arjunkalburgi",icon:"github"},{link:"https://linkedin.com/in/arjunkalburgi",icon:"linkedin"},{link:"https://codepen.io/arjunkalburgi",icon:"codepen"},{link:"mailto:askalburgi@gmail.com",icon:"email"}]}},methods:{},computed:{}},I=x,j=(n("4e18"),Object(g["a"])(I,s,r,!1,null,"a42959b0",null)),B=j.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"intro section",attrs:{id:"intro"}},[n("BackgroundAnimation",{staticClass:"intro_bgani",attrs:{total:t.number_of_leaves}}),n("div",{staticClass:"intro_item--image image big mobile"}),n("h2",{staticClass:"intro_item text big"},[t._v("Products work like magic when everyone is focused on the people it’s for.")]),t._m(0),t._m(1),n("FloatingImage",{staticClass:"intro_item--image small abid-image",attrs:{image:"abid",title:"Me laughing with one of my best friends"}}),t._m(2),n("FloatingImage",{staticClass:"intro_item--image small red-image",attrs:{image:"red",title:"Me talking to people excitedly"}}),t._m(3),n("FloatingImage",{staticClass:"intro_item--image small sra-image",attrs:{image:"sra",title:"Me with a big smile sitting on a staircase"}}),t._m(4)],1)},A=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"intro_item text firstpara"},[t._v(" I love developing websites and apps "),n("br"),t._v("that deliver magical experiences "),n("br"),t._v("by providing real value. ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"intro_item text secondpara"},[t._v(" First I learn everything I can about "),n("br"),t._v("who and what I need to build so that "),n("br"),t._v("I find the problems that need to be solved. ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"intro_item--image mobile abid-image FloatingImage_box"},[n("div",{staticClass:"b-lazy image abid"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"intro_item text thirdpara"},[t._v(" I’ll then iterate on possible designs, "),n("br"),t._v("theorizing what could solve the problem "),n("br"),t._v("and testing to see what does. ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"intro_item text fourthpara"},[t._v(" And finally, I’ll develop the solution in code "),n("br"),t._v("so that I can deploy it to real people "),n("br"),t._v("and create a real impact. ")])}],S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"parallax",rawName:"v-parallax",value:-.15,expression:"-0.15"}],staticClass:"FloatingImage"},[n("div",{staticClass:"FloatingImage_box FloatingImage_box--color"}),n("div",{staticClass:"FloatingImage_box FloatingImage_box--container"},[n("div",{staticClass:"b-lazy image",class:t.image})])])},R=[],$={name:"FloatingImage",props:["image"],mounted:function(){},data:function(){return{}},methods:{},computed:{}},E=$,F=(n("4dbd"),Object(g["a"])(E,S,R,!1,null,null,null)),M=F.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"bgani",staticClass:"BackgroundAnimation b-lazy"},t._l(t.total,(function(t){return n("div",{key:t,ref:"BackgroundAnimation_icon",refInFor:!0,staticClass:"BackgroundAnimation_icon",class:"BackgroundAnimation_icon--"+t%8})})),0)},L=[],T=n("a5cf"),z=n("cffa"),D={name:"BackgroundAnimation",props:["total"],mounted:function(){for(var t=this.$refs.bgani,e=t.clientWidth,n=t.clientHeight,i=this.$refs.BackgroundAnimation_icon,a=0;a<this.total;a++){var o=i[a];T["c"].set(o,{x:this.R(0,e),y:this.R(0,n),z:this.R(-200,200)}),this.iconRotate(o,z["a"]),this.iconSway(o,z["a"])}},data:function(){return{}},methods:{R:function(t,e){return t+Math.floor(10*Math.random()*(e-t))/10},S:function(){return Math.random()<.5?-1:1},iconRotate:function(t,e){var n=this;e.to(t,this.R(2,5),{rotationX:180*this.S(),rotationY:180*this.S(),repeat:1,yoyo:!0,ease:"easeInOut",onComplete:function(){n.iconRotate(t,e)}})},iconSway:function(t,e){var n=this;e.to(t,this.R(2,8),{x:"+="+this.R(-100,100),y:"+="+this.R(-100,100),rotationZ:this.R(0,180),repeat:0,yoyo:!1,ease:"easeInOut",onComplete:function(){n.iconSway(t,e)}})}},computed:{}},W=D,G=(n("3959"),Object(g["a"])(W,P,L,!1,null,"c61848ac",null)),H=G.exports,U={name:"intro",components:{FloatingImage:M,BackgroundAnimation:H},props:[],mounted:function(){},data:function(){return{number_of_leaves:40}},methods:{},computed:{}},V=U,X=(n("4cf9"),Object(g["a"])(V,O,A,!1,null,"d20604b2",null)),J=X.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"portfolio section",attrs:{id:"portfolio"}},[n("div",{staticClass:"portfolio-intro"},[n("p",[t._v("Working on these products requires constant learning and work.")]),n("div",{staticClass:"portfolio_introbuttons"},[n("Button",{staticClass:"portfolio_introbutton",attrs:{link:"writing",text:"Learning"}}),n("Button",{staticClass:"portfolio_introbutton",attrs:{link:"https://github.com/arjunkalburgi",text:"Work"}})],1),n("small",[t._v("View all my content or some highlights below.")])]),t._l(t.portfolio_items,(function(t){return n("PortfolioItem",{key:t.image,attrs:{item:t}})}))],2)},N=[],q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"portfolioitem"},[n("div",{staticClass:"portfolioitem_left"},[n("h2",{staticClass:"portfolioitem_title"},[t._v(t._s(t.item.title))]),n("small",{staticClass:"portfolioitem_tags"},[t._v(t._s(t.item.tags))]),n("p",{staticClass:"portfolioitem_description"},[t._v(t._s(t.item.description))]),n("div",[n("Button",{staticClass:"portfolioitem_button",attrs:{link:t.item.buttonlink,text:t.item.buttontext}})],1)]),n("div",{staticClass:"portfolioitem_image"},[n("div",{staticClass:"image b-lazy",class:t.item.image,attrs:{title:t.item.alt}})])])},Y=[],Z={name:"PortfolioItem",components:{Button:h},props:["item"],mounted:function(){},data:function(){return{}},methods:{},computed:{}},Q=Z,tt=(n("4d56"),Object(g["a"])(Q,q,Y,!1,null,"19ae063c",null)),et=tt.exports,nt={name:"portfolio",components:{Button:h,PortfolioItem:et},props:[],mounted:function(){},data:function(){return{portfolio_items:[{title:"Creating Team Bonding",tags:"Leadership, React Native, UX Research",description:"After a bad year, the culture of the Computer Engineering Club needed to change so that we could make the largest student hackathon in Alberta even larger. My solution was custom Slack emojis and I built a way to democratize them.",buttonlink:"https://github.com/arjunkalburgi/slackify",buttontext:"View on Github",image:"slack",alt:"Stock photo of someone having a good time at their work desk"},{title:"Coding a Business Model",tags:"Product Management, Angular, Design",description:"Personal stylists can take on more clients using image detection, data science and a mobile app. Creating User flows and ER diagrams helped me build an app that can bring stylists to the amount of business personal trainers enjoy.",buttonlink:"https://github.com/arjunkalburgi/stylist-assistant",buttontext:"View on Github",image:"style",alt:"Stock photo of an outfit laid out on the floor"},{title:"Persevering using details",tags:"Growth Mindset, Travel",description:"I was still falling an hour and a half after everyone else in the beginners class was able to stand, but my mind I was focused on the details of what I was doing, because the details are where you find success.",buttonlink:"https://www.arjunkalburgi.com/writing/Learning-to-Surf---a-Mindset-practice",buttontext:"Read the Story",image:"surf",alt:"Stock photo of a surfer dude waving his hand out of the water, signaling he's ok"},{title:"Developing Behaviour",tags:"Behavioural Design, Angular",description:"Reading Carol Dweck taught me that every challenge needs the right mindset. At the same time, my peers in my design course were being overwhelmed by the workload. I experimented with how a tool could help them change.",buttonlink:"https://www.arjunkalburgi.com/writing/Stressful-Tasks--a-behavioural-design-experiment",buttontext:"Read the Story",image:"tasks",alt:"Stock photo of a silhouette of a man thinking"}]}},methods:{},computed:{}},it=nt,at=(n("d42d"),Object(g["a"])(it,K,N,!1,null,"709ebe47",null)),ot=at.exports,st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"contact contact-style b-loaded",attrs:{id:"contact"}},[n("BackgroundAnimation",{attrs:{total:t.number_of_leaves}}),n("div",{staticClass:"contact_contents"},[n("h2",{staticClass:"contact_contents--title"},[t._v("More")]),n("ButtonList",{staticClass:"contact_contents--links",attrs:{hasButton:!1,list:t.list}})],1)],1)},rt=[],lt={name:"contact",components:{ButtonList:C,BackgroundAnimation:H},props:[],mounted:function(){},data:function(){return{number_of_leaves:24,list:[{link:"https://arjunkalburgi.com/writing",icon:"blog"},{link:"https://twitter.com/arjunkalburgi",icon:"twitter"},{link:"https://github.com/arjunkalburgi",icon:"github"},{link:"https://linkedin.com/in/arjunkalburgi",icon:"linkedin"},{link:"https://codepen.io/arjunkalburgi",icon:"codepen"},{link:"mailto:askalburgi@gmail.com",icon:"email"}]}},methods:{},computed:{}},ct=lt,ut=(n("0d47"),Object(g["a"])(ct,st,rt,!1,null,"cb8d70e2",null)),mt=ut.exports,dt={name:"App",components:{Hero:B,Intro:J,Portfolio:ot,Contact:mt}},ft=dt,gt=(n("5c0b"),Object(g["a"])(ft,a,o,!1,null,null,null)),pt=gt.exports,ht=n("b3b5");i["a"].component("font-awesome-icon",b["a"]),i["a"].use(ht["a"]),i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(pt)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var i=n("9c0c"),a=n.n(i);a.a},"73d7":function(t,e,n){"use strict";var i=n("43b3"),a=n.n(i);a.a},8927:function(t,e,n){},"9c0c":function(t,e,n){},aa10:function(t,e,n){"use strict";var i=n("d513"),a=n.n(i);a.a},c388:function(t,e,n){},c720:function(t,e,n){},d42d:function(t,e,n){"use strict";var i=n("47cb"),a=n.n(i);a.a},d513:function(t,e,n){},e697:function(t,e,n){},ecc4:function(t,e,n){},ed39:function(t,e,n){}});
//# sourceMappingURL=app.a60976b3.js.map