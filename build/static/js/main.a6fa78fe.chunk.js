(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){},102:function(e,t,a){},106:function(e,t,a){},130:function(e,t,a){},132:function(e,t,a){},134:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"db",function(){return w}),a.d(n,"auth",function(){return S});var r={};a.r(r),a.d(r,"doCreateUserWithEmailAndPassword",function(){return k}),a.d(r,"doSignInWithEmailAndPassword",function(){return N}),a.d(r,"doSignOut",function(){return C}),a.d(r,"doPasswordReset",function(){return U}),a.d(r,"doPasswordUpdate",function(){return x});var l={};a.r(l),a.d(l,"doCreateUser",function(){return D}),a.d(l,"onceGetUsers",function(){return B}),a.d(l,"setUserDB",function(){return z}),a.d(l,"getUser",function(){return R}),a.d(l,"getUserObject",function(){return J}),a.d(l,"onceGetJobs",function(){return W}),a.d(l,"getJob",function(){return L}),a.d(l,"createJob",function(){return I});var c=a(1),s=a.n(c),u=a(22),o=a.n(u),i=a(16),m=(a(77),a(79),a(49)),d=a(36),p=a(5),E=a(6),f=a(9),h=a(7),b=a(8),v=a(18),g=a(35),y=a(53),j=a.n(y),O=(a(90),a(92),{apiKey:"AIzaSyCsspxEwfhqUBZ6S2nE-JhZc68yzYpDZpA",authDomain:"one-time-jobs.firebaseapp.com",databaseURL:"https://one-time-jobs.firebaseio.com",projectId:"one-time-jobs",storageBucket:"one-time-jobs.appspot.com",messagingSenderId:"837406126188"});j.a.apps.length||j.a.initializeApp(O);var w=j.a.database(),S=j.a.auth(),k=function(e,t,a){return S.createUserWithEmailAndPassword(e,t)},N=function(e,t){return S.signInWithEmailAndPassword(e,t)},C=function(){return S.signOut()},U=function(e){return S.sendPasswordResetEmail(e)},x=function(e){return S.currentUser.updatePassword(e)},T=a(29),A=a.n(T),P=a(43),M=a.n(P);var D=function(e,t,a){return w.ref("users/".concat(e)).set({displayname:t,username:a.substring(0,a.lastIndexOf("@")),email:a})},B=function(){return w.ref("users").once("value")},z=function(e,t){return w.ref("users/".concat(e)).set({value:t})},R=function(e){return w.ref("users").orderByChild("username").equalTo(e).once("value")},J=function(e){return w.ref("users/"+e).once("value")},W=function(){return w.ref("jobs").once("value")},L=function(e){return w.ref("jobs").orderByChild("url").equalTo(e).once("value")},I=function(e,t,a,n,r){return w.ref("jobs/".concat(e)).set({title:t,description:a,price:n,url:S.currentUser.uid.substring(0,4)+"-"+(l=t,l.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")),type:r,user:S.currentUser.email.substring(0,S.currentUser.email.lastIndexOf("@")),datePosted:M()().format()});var l},F=a(2),_="/",G=(a(96),a(23)),H=a(12),Y=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(f.a)(this,Object(h.a)(t).call(this,e))).toggle=a.toggle.bind(Object(v.a)(Object(v.a)(a))),a.toggleNotif=a.toggleNotif.bind(Object(v.a)(Object(v.a)(a))),a.state={dropdownOpen:!1,dropdownOpen2:!1,activeTab:null,user:a.props.user},a}return Object(b.a)(t,e),Object(E.a)(t,[{key:"toggle",value:function(){this.setState({dropdownOpen:!this.state.dropdownOpen})}},{key:"toggleNotif",value:function(){this.setState({dropdownOpen2:!this.state.dropdownOpen2})}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.user,t=void 0===e?[]:e;return console.log(t),s.a.createElement(F.u,{className:"mb-4 box-shadow border-bottom"},s.a.createElement(F.f,null,s.a.createElement(g.a,{className:"navbar-brand",to:_},s.a.createElement("b",null,"MB"),"alpha"),s.a.createElement(F.r,{className:"mr-auto"},s.a.createElement(G.LinkContainer,{to:"/jobs"},s.a.createElement(F.t,null,"Jobs")),s.a.createElement(G.LinkContainer,{to:"/newjob"},s.a.createElement(F.t,null,"New Job"))),s.a.createElement(F.r,{className:"float-left"},s.a.createElement(F.x,{nav:!0,isOpen:this.state.dropdownOpen2,toggle:this.toggleNotif},s.a.createElement(F.i,{nav:!0},s.a.createElement(H.b,{size:"1.5em"})),s.a.createElement(F.h,{right:!0},s.a.createElement(F.g,{header:!0},"Notifications"),s.a.createElement(F.g,{divider:!0}))),s.a.createElement(G.LinkContainer,{to:"/students"},s.a.createElement(F.t,null,s.a.createElement(H.k,{size:"1.5em"}))),s.a.createElement(F.x,{nav:!0,isOpen:this.state.dropdownOpen,toggle:this.toggle},s.a.createElement(F.i,{nav:!0},s.a.createElement(H.j,{size:"1.5em"})),s.a.createElement(F.h,{right:!0},s.a.createElement(F.g,{header:!0},"Signed in as:"),s.a.createElement(g.a,{className:"dropdown-item",to:"/account"},"Account Settings"),s.a.createElement(F.g,{divider:!0}),s.a.createElement(F.g,{onClick:r.doSignOut}," Sign Out"))))))}}]),t}(c.Component),V=function(){return s.a.createElement(F.u,{className:"mb-4 border-bottom"},s.a.createElement(F.f,null,s.a.createElement(g.a,{className:"navbar-brand",to:_},s.a.createElement("b",null,"MB"),"alpha"),s.a.createElement(F.r,null,s.a.createElement(G.LinkContainer,{to:"/about"},s.a.createElement(F.t,null,"About")),s.a.createElement(G.LinkContainer,{to:"/signin"},s.a.createElement(F.t,null,"Sign In")),s.a.createElement(G.LinkContainer,{to:"/signup"},s.a.createElement(F.t,{active:!0},"Create Account")))))},$=Object(i.b)(function(e){return{authUser:e.sessionState.authUser,user:e.sessionState.user}})(function(e){var t=e.authUser;e.user;return s.a.createElement("div",null,t?s.a.createElement(Y,{user:t}):s.a.createElement(V,null))}),q=a(11),Z=a(19),K=a(52),Q=function(e,t){return function(){return Object(Z.a)({},e,t)}},X={displayname:"",email:"",passwordOne:"",passwordTwo:"",error:null},ee=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(f.a)(this,Object(h.a)(t).call(this,e))).onSubmit=function(e){var t=a.state,n=t.displayname,c=t.email,s=t.passwordOne,u=a.props.history;r.doCreateUserWithEmailAndPassword(c,s,n).then(function(e){e.user.updateProfile({displayName:n}),l.doCreateUser(e.user.uid,n,c).then(function(){a.setState(function(){return Object(q.a)({},X)}),u.push(_)}).catch(function(e){a.setState(Q("error",e))}),e.user.sendEmailVerification().then(function(){}).catch(function(e){})}).catch(function(e){a.setState(Q("error",e))}),e.preventDefault()},a.state=Object(q.a)({},X),a}return Object(b.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.displayname,n=t.email,r=t.passwordOne,l=t.passwordTwo,c=t.error,u=r!==l||""===r||""===a||-1===n.indexOf("@calpoly.edu");return s.a.createElement(F.j,{className:"",onSubmit:this.onSubmit},s.a.createElement(F.k,null,s.a.createElement(F.m,{value:a,onChange:function(t){return e.setState(Q("displayname",t.target.value))},type:"text",placeholder:"Full Name"})),s.a.createElement(F.k,null,s.a.createElement(F.m,{value:n,onChange:function(t){return e.setState(Q("email",t.target.value))},type:"text",placeholder:"Email Address"}),s.a.createElement(F.l,{color:"muted"},"Must use a valid Cal Poly email address.")),s.a.createElement(F.k,null,s.a.createElement(F.m,{value:r,onChange:function(t){return e.setState(Q("passwordOne",t.target.value))},type:"password",placeholder:"Password"})),s.a.createElement(F.k,null,s.a.createElement(F.m,{value:l,onChange:function(t){return e.setState(Q("passwordTwo",t.target.value))},type:"password",placeholder:"Confirm Password"})),s.a.createElement(F.k,null,s.a.createElement(F.c,{block:!0,color:"success",disabled:u,type:"submit"},"Create an account \u2192"),s.a.createElement(F.l,null,"By creating an account, you agree to our ",s.a.createElement("a",null,"terms & conditions."))),c&&s.a.createElement(F.a,{color:"danger"},c.message))}}]),t}(c.Component),te=function(){return s.a.createElement("p",null,"Don't have an account? ",s.a.createElement(g.a,{to:"/signup"},"Sign Up"))},ae=Object(K.a)(function(e){var t=e.history;return s.a.createElement(F.v,null,s.a.createElement(F.e,{className:"text-center",sm:{size:6,offset:3}},s.a.createElement("h1",null,"Create your account"),s.a.createElement("p",{className:"lead"},"Join an exclusive community for Cal Poly students."),s.a.createElement(ee,{history:t}),s.a.createElement("p",null,"Already have an account? ",s.a.createElement(g.a,{to:"/signin"},"Sign in"))))}),ne=(a(100),function(){return s.a.createElement("div",null,s.a.createElement(F.v,null,s.a.createElement("div",{className:"w-100 bg-cp p-4"},s.a.createElement("h1",{className:"display-3 font-weight-bold"},"Mustang Bulletin"),s.a.createElement("small",null),s.a.createElement("p",{className:"lead"},"A local job board for students, by students.")),s.a.createElement("div",{className:"w-100 m-auto text-center py-5"},s.a.createElement("p",{className:"lead"},"As a student at Cal Poly, you are surrounded by all kinds of valuable skill and talent."),s.a.createElement("p",{className:"h2"},"With Mustang Bulletin, you can share your skill and connect with others"),s.a.createElement("br",null),s.a.createElement(g.a,{className:" btn btn-lg btn-cp",to:"/signup"},"Create an Account  \u2192")),s.a.createElement(F.v,null,s.a.createElement(F.e,{className:"py-3",sm:{size:8,offset:2}},s.a.createElement("small",{className:"d-block text-center"},"service examples"),s.a.createElement("hr",null),s.a.createElement("div",{className:"testings"},s.a.createElement("ul",{className:"cloud"},s.a.createElement("li",null,"bike repair"),s.a.createElement("li",null,"gardening"),s.a.createElement("li",null,"hairstyling"),s.a.createElement("li",null,"events"),s.a.createElement("li",null,"web design"),s.a.createElement("li",null,"catering"),s.a.createElement("li",null,"graphic design"),s.a.createElement("li",null,"custom art"),s.a.createElement("li",null,"cooking"),s.a.createElement("li",null,"handcrafted items"))),s.a.createElement("hr",null)))),s.a.createElement(F.v,{className:"my-4"},s.a.createElement(F.e,{sm:{size:"5",offset:1}},s.a.createElement("h3",null,s.a.createElement(H.g,null)," Secure"),s.a.createElement("p",null,"You need a verified @calpoly.edu email to create an account.")),s.a.createElement(F.e,{sm:{size:"4",offset:1}},s.a.createElement("h3",null,s.a.createElement(H.c,null)," Get paid"),s.a.createElement("p",null,"Get paid while helping another classmate, at any rate you choose.  "))),s.a.createElement(F.v,{className:"my-4"},s.a.createElement(F.e,{sm:{size:"5",offset:1}},s.a.createElement("h3",null,s.a.createElement(H.i,null)," Gain experience "),s.a.createElement("p",null,"Grow your skills and get experience as you do support your college community.")),s.a.createElement(F.e,{sm:{size:"5",offset:1}},s.a.createElement("h3",null,s.a.createElement(H.e,null)," Network"),s.a.createElement("p",null,"Meet other students and make lasting connections."))),s.a.createElement(F.v,{className:""},s.a.createElement(F.e,{className:"text-center",sm:{size:6,offset:3}},s.a.createElement(g.a,{className:" btn btn-lg btn-cp",to:"/signup"},"Create an Account \u2192"))))}),re=function(e,t){return function(){return Object(Z.a)({},e,t)}},le={email:"",error:null},ce=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(f.a)(this,Object(h.a)(t).call(this,e))).onSubmit=function(e){var t=a.state.email;r.doPasswordReset(t).then(function(){a.setState(function(){return Object(q.a)({},le)})}).catch(function(e){a.setState(re("error",e))}),e.preventDefault()},a.state=Object(q.a)({},le),a}return Object(b.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.email,n=t.error,r=""===a;return s.a.createElement(F.k,null,s.a.createElement(F.j,{className:"mr-2",inline:!0,onSubmit:this.onSubmit},s.a.createElement(F.m,{value:this.state.email,onChange:function(t){return e.setState(re("email",t.target.value))},type:"text",placeholder:"Email Address"}),s.a.createElement(F.c,{disabled:r,type:"submit"},"Reset My Password"),n&&s.a.createElement("p",null,n.message)))}}]),t}(c.Component),se=function(){return s.a.createElement("p",null,s.a.createElement(g.a,{to:"/pw-forget"},"Forgot Password?"))},ue=function(){return s.a.createElement("div",null,s.a.createElement("h1",null,"PasswordForget"),s.a.createElement(ce,null))},oe=function(e,t){return function(){return Object(Z.a)({},e,t)}},ie={email:"",password:"",error:null},me=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(f.a)(this,Object(h.a)(t).call(this,e))).onSubmit=function(e){var t=a.state,n=t.email,l=t.password,c=a.props.history;r.doSignInWithEmailAndPassword(n,l).then(function(){a.setState(function(){return Object(q.a)({},ie)}),c.push(_)}).catch(function(e){a.setState(oe("error",e))}),e.preventDefault()},a.state=Object(q.a)({},ie),a}return Object(b.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.email,n=t.password,r=t.error,l=""===n||""===a;return s.a.createElement("form",{onSubmit:this.onSubmit},s.a.createElement(F.k,null,s.a.createElement(F.m,{value:a,onChange:function(t){return e.setState(oe("email",t.target.value))},type:"text",placeholder:"Email Address"})),s.a.createElement(F.k,null,s.a.createElement(F.m,{value:n,onChange:function(t){return e.setState(oe("password",t.target.value))},type:"password",placeholder:"Password"})),s.a.createElement(F.k,null,s.a.createElement(F.c,{block:!0,outline:!0,disabled:l,type:"submit"},"Sign In")),r&&s.a.createElement(F.a,{color:"danger"},r.message))}}]),t}(c.Component),de=Object(K.a)(function(e){var t=e.history;return s.a.createElement(F.v,null,s.a.createElement(F.e,{sm:"3"}),s.a.createElement(F.e,{sm:"6"},s.a.createElement("h1",{className:"text-center"},"Sign In"),s.a.createElement(me,{history:t}),s.a.createElement(se,null),s.a.createElement(te,null)),s.a.createElement(F.e,{sm:"3"}))}),pe=a(21),Ee=function(e){return function(t){var a=function(a){function r(){return Object(p.a)(this,r),Object(f.a)(this,Object(h.a)(r).apply(this,arguments))}return Object(b.a)(r,a),Object(E.a)(r,[{key:"componentDidMount",value:function(){var t=this;n.auth.onAuthStateChanged(function(a){e(a)||t.props.history.push("/signin")})}},{key:"render",value:function(){return this.props.authUser?s.a.createElement(t,this.props):null}}]),r}(s.a.Component);return Object(pe.a)(K.a,Object(i.b)(function(e){return{authUser:e.sessionState.authUser}}))(a)}},fe=(a(102),a(61)),he=a.n(fe),be=(a(104),a(3),a(106),a(62)),ve=a.n(be),ge=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(f.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){a.setState({searchString:e.target.value}),console.log({searchString:e.target.value})},a.searchFilter=function(e){a.setState({searchType:e.target.value})},a.state={jobs:{},activeTab:"1",searchString:"",searchType:"all",priceRange:{min:0,max:1e3},sortBy:"price"},a.handleChange=a.handleChange.bind(Object(v.a)(Object(v.a)(a))),a.searchFilter=a.searchFilter.bind(Object(v.a)(Object(v.a)(a))),a.toggle=a.toggle.bind(Object(v.a)(Object(v.a)(a))),a}return Object(b.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=this;l.onceGetJobs().then(function(t){return e.setState(function(){return{jobs:t.val()}})})}},{key:"toggle",value:function(e){this.state.activeTab!==e&&this.setState({activeTab:e})}},{key:"render",value:function(){var e=this,t=this.state,a=t.jobs,n=t.searchType,r=t.priceRange,l=t.sortBy,c=this.state.searchString.trim().toLowerCase();r.min,r.max;return a?(c.length>0&&(console.log(Object.keys(a)),a=Object.keys(a).filter(function(e){if(a[e].title.toLowerCase().match(c))return a[e]}).reduce(function(e,t){return e[t]=a[t],e},{})),"help"==n&&(console.log(Object.keys(a)),a=Object.keys(a).filter(function(e){if(0==a[e].type)return a[e]}).reduce(function(e,t){return e[t]=a[t],e},{})),"service"==n&&(console.log(Object.keys(a)),a=Object.keys(a).filter(function(e){if(1==a[e].type)return a[e]}).reduce(function(e,t){return e[t]=a[t],e},{})),a=Object.keys(a).filter(function(e){if(a[e].price>=r.min&&a[e].price<=r.max)return a[e]}).reduce(function(e,t){return e[t]=a[t],e},{}),"price"==l&&(a=Object.keys(a).sort(function(e,t){return e.price>t.price?1:t.price>e.price?-1:0}).reduce(function(e,t){return e[t]=a[t],e},{})),s.a.createElement("div",null,s.a.createElement("input",{className:"search-bar",type:"text",value:this.state.searchString,onChange:this.handleChange,placeholder:"Search"}),s.a.createElement(F.r,{tabs:!0},s.a.createElement(F.s,null,s.a.createElement("button",{className:("all"==this.state.searchType?"active":"")+" category",value:"all",onClick:this.searchFilter},"All")),s.a.createElement(F.s,null,s.a.createElement("button",{className:("help"==this.state.searchType?"active":"")+" category",value:"help",onClick:this.searchFilter},"Help Wanted")),s.a.createElement(F.s,null,s.a.createElement("button",{className:("service"==this.state.searchType?"active":"")+" category",value:"service",onClick:this.searchFilter},"Service"))),s.a.createElement(ve.a,{maxValue:200,minValue:0,value:this.state.priceRange,onChange:function(t){return e.setState({priceRange:t})}}),s.a.createElement("div",{className:"py-4 w-100"},Object.keys(a).map(function(e){return s.a.createElement(g.a,{className:"job",key:e,to:"jobs/".concat(a[e].url)},s.a.createElement("div",{className:"float-left clearfix w-75"},s.a.createElement("h4",null,e),s.a.createElement("br",null),s.a.createElement("p",null," ",s.a.createElement(H.d,null)," ",s.a.createElement(A.a,{fromNow:!0},a[e].datePosted)," ","by ",a[e].user," ",s.a.createElement(ye,{typeValue:a[e].type}))),s.a.createElement("div",{className:"float-right clearfix w-25"},s.a.createElement("p",{className:"text-right display-4 green"},"$",a[e].price)))})))):s.a.createElement("div",null,"Loading")}}]),t}(c.Component),ye=function(e){var t=e.typeValue;return 1==t?s.a.createElement(F.b,{color:"success"},"Service"):0==t?s.a.createElement(F.b,{color:"warning"},"Help Wanted"):s.a.createElement(F.b,null,"No Type")},je=Object(pe.a)(Ee(function(e){return!!e}),Object(i.b)(function(e){return{users:e.userState.users}},function(e){return{onSetUsers:function(t){return e({type:"USERS_SET",users:t})}}}))(ge),Oe=a(63),we=function(e){var t=e.data;return t?s.a.createElement(F.d,{className:"p-4 mt-1"},s.a.createElement("small",{className:"text-uppercase w-100 text-muted"},"Your Profile"),s.a.createElement("strong",{className:"h1"}," ",t.displayname)):null},Se=function(e){function t(e){return Object(p.a)(this,t),Object(f.a)(this,Object(h.a)(t).call(this,e))}return Object(b.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){he()(".baffle");return s.a.createElement("div",null,s.a.createElement(F.v,null,s.a.createElement(F.e,{sm:"12"},s.a.createElement(F.a,{color:"warning  "},s.a.createElement(H.a,{size:"1.2em"})," Mustang Bulletin is in early stages of development. Use at your own risk."))),s.a.createElement(F.v,null,s.a.createElement(F.e,{sm:"3",className:""},s.a.createElement(we,{data:this.props.user})),s.a.createElement(F.e,{sm:"9",className:""},s.a.createElement(je,null))))}}]),t}(c.Component),ke=Object(i.b)(function(e){return{authUser:e.sessionState.authUser,user:e.sessionState.user}})(function(e){var t=e.authUser,a=e.user;return s.a.createElement("div",null,s.a.createElement(Oe.Helmet,null,s.a.createElement("title",null,"Mustang Bulletin - Home")),t?s.a.createElement(Se,{user:a}):s.a.createElement(ne,null))}),Ne=function(e,t){return function(){return Object(Z.a)({},e,t)}},Ce={passwordOne:"",passwordTwo:"",error:null},Ue=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(f.a)(this,Object(h.a)(t).call(this,e))).onSubmit=function(e){var t=a.state.passwordOne;r.doPasswordUpdate(t).then(function(){a.setState(function(){return Object(q.a)({},Ce)})}).catch(function(e){a.setState(Ne("error",e))}),e.preventDefault()},a.state=Object(q.a)({},Ce),a}return Object(b.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.passwordOne,n=t.passwordTwo,r=t.error,l=a!==n||""===a;return s.a.createElement(F.j,{onSubmit:this.onSubmit},s.a.createElement(F.m,{value:a,onChange:function(t){return e.setState(Ne("passwordOne",t.target.value))},type:"password",placeholder:"New Password",className:"mb-2"}),s.a.createElement(F.m,{value:n,onChange:function(t){return e.setState(Ne("passwordTwo",t.target.value))},type:"password",placeholder:"Confirm New Password",className:"mb-2"}),s.a.createElement(F.c,{disabled:l,type:"submit"},"Reset My Password"),r&&s.a.createElement("p",null,r.message))}}]),t}(c.Component),xe=Object(pe.a)(Ee(function(e){return!!e}),Object(i.b)(function(e){return{authUser:e.sessionState.authUser}}))(function(e){var t=e.authUser;return s.a.createElement(F.v,null,s.a.createElement(F.e,{sm:"8"},s.a.createElement("h2",null,"Account Details"),s.a.createElement(F.w,null,s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Name"),s.a.createElement("td",null," ",t.displayName)),s.a.createElement("tr",null,s.a.createElement("th",null,"Email"),s.a.createElement("td",null,t.email)),s.a.createElement("tr",null,s.a.createElement("th",null,"Password"),s.a.createElement("td",null,s.a.createElement(ce,null),s.a.createElement(Ue,null)))))))}),Te=function(e){var t=function(t){function a(){return Object(p.a)(this,a),Object(f.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(b.a)(a,t),Object(E.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.onSetAuthUser,a=e.user;n.auth.onAuthStateChanged(function(e){e?(l.getUserObject(e.uid).then(function(e){return a(e.val())}),t(e)):(t(null),a(null))})}},{key:"render",value:function(){return s.a.createElement(e,this.props)}}]),a}(s.a.Component);return Object(i.b)(null,function(e){return{user:function(t){return e({type:"USER_CONNECT",user:t})},onSetAuthUser:function(t){return e({type:"AUTH_USER_SET",authUser:t})}}})(t)},Ae=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(f.a)(this,Object(h.a)(t).call(this,e))).state={users:{}},a}return Object(b.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.onSetUsers;l.onceGetUsers().then(function(t){return e(t.val())})}},{key:"render",value:function(){var e=this.props.users;return e?s.a.createElement(F.v,null,s.a.createElement("div",{className:"w-100 bg-cp p-4"},s.a.createElement("h1",null,"Students"),s.a.createElement("p",{className:"lead"},"Meet your fellow students registered on Mustang Bulletin")),!!e&&s.a.createElement(Pe,{users:e})):s.a.createElement("div",null,"Loading")}}]),t}(c.Component),Pe=function(e){var t=e.users;return s.a.createElement(F.q,{className:"m-auto w-75"},Object.keys(t).map(function(e){return s.a.createElement(g.a,{className:"list-group-item list-group-item-action",key:e,to:"/students/".concat(t[e].username)},t[e].displayname," -"," ",s.a.createElement("span",{className:"text-muted"},t[e].email))}))},Me=Object(pe.a)(Ee(function(e){return!!e}),Object(i.b)(function(e){return{users:e.userState.users}},function(e){return{onSetUsers:function(t){return e({type:"USERS_SET",users:t})}}}))(Ae),De=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(f.a)(this,Object(h.a)(t).call(this,e))).state={username:e.match.params.username,data:{},displayname:""},a}return Object(b.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=this;l.getUser(this.state.username).then(function(t){return e.setState(function(){return{data:t.val()}})})}},{key:"render",value:function(){var e=this.state.data;return s.a.createElement(F.v,{className:""},s.a.createElement(F.e,{sm:"6"},s.a.createElement(Be,{data:e})))}}]),t}(c.Component),Be=function(e){var t=e.data;return s.a.createElement("div",null,Object.keys(t).map(function(e){return s.a.createElement("div",null,s.a.createElement("h1",{key:e},t[e].displayname,"'s Profile"),s.a.createElement(F.w,{key:e},s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Name"),s.a.createElement("td",null,t[e].displayname)),s.a.createElement("tr",null,s.a.createElement("th",null,"Email"),s.a.createElement("td",null,t[e].email," ",s.a.createElement("a",{className:"btn btn-primary btn-sm",href:"mailto:".concat(t[e].email)},s.a.createElement(H.h,null)))))))}))},ze=De,Re=(a(130),function(){return s.a.createElement("p",{className:"text-center py-3"},"\xa92018 Mustang Bulletin | ",s.a.createElement(g.a,{to:"/about"},"About Mustang Bulletin"))}),Je=function(e,t){return function(){return Object(Z.a)({},e,t)}},We={title:"",description:"",price:0,type:0,error:null,dateAdded:0,priceType:0},Le=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(f.a)(this,Object(h.a)(t).call(this,e))).onSubmit=function(e){var t=a.state,n=t.title,r=t.description,c=t.price,s=t.type;l.createJob(n,n,r,c,s).then(function(){a.setState(function(){return Object(q.a)({},We)})}).catch(function(e){a.setState(Je("error",e))}),e.preventDefault()},a.state=Object(q.a)({},We),a}return Object(b.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.title,n=t.description,r=t.price,l=t.type,c=t.error,u=""===a||""===n||""===r||null===l;return s.a.createElement(F.j,{onSubmit:this.onSubmit},s.a.createElement(F.k,null,s.a.createElement(F.p,null,"Title*"),s.a.createElement(F.m,{value:a,onChange:function(t){return e.setState(Je("title",t.target.value))},type:"text",placeholder:"Don't use all uppercase titles"})),s.a.createElement(F.k,null,s.a.createElement(F.p,null,"Description*"),s.a.createElement(F.m,{value:n,onChange:function(t){return e.setState(Je("description",t.target.value))},type:"textarea",placeholder:"Describe what you need done here."})),s.a.createElement(F.k,null,s.a.createElement(F.n,{size:"lg",className:"w-50"},s.a.createElement(F.o,{addonType:"prepend"},"$"),s.a.createElement(F.m,{value:r,onChange:function(t){return e.setState(Je("price",t.target.value))},placeholder:"Amount",type:"number",step:"1"}),s.a.createElement(F.o,{addonType:"append"},".00"))),s.a.createElement(F.k,{check:!0},s.a.createElement(F.p,{check:!0},s.a.createElement(F.m,{type:"radio",name:"type",value:l,onChange:function(t){return e.setState(Je("type",0))}}),"Help Wanted")),s.a.createElement(F.k,{check:!0},s.a.createElement(F.p,{check:!0},s.a.createElement(F.m,{type:"radio",name:"type",onChange:function(t){return e.setState(Je("type",1))}})," ","Providing a service")),s.a.createElement(F.k,null,s.a.createElement(F.c,{block:!0,outline:!0,color:"success",disabled:u,type:"submit"},"Add Job")),c&&s.a.createElement("p",null,c.message))}}]),t}(c.Component),Ie=Object(K.a)(function(){return s.a.createElement("div",null,s.a.createElement(F.v,null,s.a.createElement("h1",{className:"text-center w-100"},"New Job"),s.a.createElement(F.e,{sm:{size:6,offset:3}},s.a.createElement(Le,null))))}),Fe=a(64),_e=a.n(Fe),Ge=(a(132),function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(f.a)(this,Object(h.a)(t).call(this,e))).state={url:e.match.params.url,data:{},displayname:""},a}return Object(b.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=this;l.getJob(this.state.url).then(function(t){return e.setState(function(){return{data:t.val()}})})}},{key:"render",value:function(){var e=this.state.data;return s.a.createElement(F.v,{className:""},s.a.createElement(F.e,{sm:"12"},s.a.createElement(Ye,{data:e})),s.a.createElement(F.e,{sm:"12",className:"mt-4"},s.a.createElement(He,{data:e})))}}]),t}(c.Component)),He=function(e){var t=e.data;return s.a.createElement("div",{className:""},Object.keys(t).map(function(e){return s.a.createElement("div",{className:"post-meta"},s.a.createElement(g.a,{className:"",to:"/students/".concat(t[e].user)},s.a.createElement("img",{className:"profile-img",src:_e.a}),s.a.createElement("span",{className:"pl-1"}," ",t[e].user)," "),s.a.createElement("a",{className:"btn btn-primary btn-contact",href:"mailto:".concat(t[e].user,"@calpoly.edu")},s.a.createElement(H.h,null)," Contact"))}))},Ye=function(e){var t=e.data;return s.a.createElement("div",null,Object.keys(t).map(function(e){return s.a.createElement("div",{key:e},s.a.createElement("h1",{key:e},t[e].title,s.a.createElement("span",{className:"float-right green"},"$",t[e].price))," ",s.a.createElement(ye,{typeValue:t[e].type}),"  "," ",s.a.createElement(H.d,null),s.a.createElement(A.a,{format:"MMM DD YYYY"},t[e].datePosted),s.a.createElement("hr",null),s.a.createElement("small",{class:"text-muted"},"Job description"),s.a.createElement("p",null,t[e].description))}))},Ve=Ge,$e=function(){return s.a.createElement("div",null,s.a.createElement(F.v,{className:"py-4 mb-4"},s.a.createElement(F.e,{className:"",sm:{size:6,offset:3}},s.a.createElement("h4",null,"Mustang Bulletin is an exclusive job board for Cal Poly students to work for each other."))),s.a.createElement(F.v,null,s.a.createElement(F.e,{sm:{size:6,offset:3}},s.a.createElement("h4",null,"How it works"),s.a.createElement("ul",null,s.a.createElement("li",null,"Fulfill jobs or provide work for other students and gain reputation"),s.a.createElement("li",null,"When providing a job or working a job, gain credibility by rating your interactions with other students."),s.a.createElement("li",null,"Better your skills, get stuff done for you, and network with other students"),s.a.createElement("li",null,"Secure messaging platform for contacting other students")),s.a.createElement("hr",null))),s.a.createElement(F.v,null,s.a.createElement(F.e,{sm:{size:6,offset:3}},s.a.createElement("p",{className:"text-center"},"Created with ",s.a.createElement(H.f,{color:"red"})," by"," ",s.a.createElement("a",{href:"https://fjchen.net"}," Finley Chen")))))},qe=Te(function(){return s.a.createElement(m.a,null,s.a.createElement("div",{className:"app"},s.a.createElement($,null),s.a.createElement(F.f,null,s.a.createElement(d.a,{exact:!0,path:"/signup",component:function(){return s.a.createElement(ae,null)}}),s.a.createElement(d.a,{exact:!0,path:"/signin",component:function(){return s.a.createElement(de,null)}}),s.a.createElement(d.a,{exact:!0,path:"/pw-forget",component:function(){return s.a.createElement(ue,null)}}),s.a.createElement(d.a,{exact:!0,path:_,component:function(){return s.a.createElement(ke,null)}}),s.a.createElement(d.a,{exact:!0,path:"/account",component:function(){return s.a.createElement(xe,null)}}),s.a.createElement(d.a,{exact:!0,path:"/newjob",component:function(){return s.a.createElement(Ie,null)}}),s.a.createElement(d.a,{exact:!0,path:"/students",component:function(){return s.a.createElement(Me,null)}}),s.a.createElement(d.a,{exact:!0,path:"/students/:username",component:ze}),s.a.createElement(d.a,{exact:!0,path:"/jobs/:url",component:Ve}),s.a.createElement(d.a,{exact:!0,path:"/jobs",component:function(){return s.a.createElement(je,null)}}),s.a.createElement(d.a,{exact:!0,path:"/about",component:function(){return s.a.createElement($e,null)}}),s.a.createElement("hr",null),s.a.createElement(Re,null))))}),Ze=a(24),Ke={authUser:null,user:null},Qe=function(e,t){return Object(q.a)({},e,{authUser:t.authUser})},Xe=function(e,t){return Object(q.a)({},e,{user:t.user})};var et=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_USER_SET":return Qe(e,t);case"USER_CONNECT":return Xe(e,t);default:return e}},tt={users:{}},at=function(e,t){return Object(q.a)({},e,{users:t.users})};var nt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USERS_SET":return at(e,t);default:return e}},rt={students:{}},lt=function(e,t){return Object(q.a)({},e,{students:t.students})};var ct=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"STUDENTS_SET":return lt(e,t);default:return e}},st=Object(Ze.combineReducers)({sessionState:et,userState:nt,studentState:ct}),ut=a(65),ot=Object(Ze.createStore)(st,Object(ut.devToolsEnhancer)()),it=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function mt(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(s.a.createElement(i.a,{store:ot},s.a.createElement(qe,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");it?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):mt(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):mt(e)})}}()},64:function(e,t,a){e.exports=a.p+"static/media/defaultuser.265ea8cb.jpg"},66:function(e,t,a){e.exports=a(134)},79:function(e,t,a){},96:function(e,t,a){}},[[66,2,1]]]);
//# sourceMappingURL=main.a6fa78fe.chunk.js.map