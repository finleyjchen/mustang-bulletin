(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){},103:function(e,t,a){},107:function(e,t,a){},131:function(e,t,a){},133:function(e,t,a){},135:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"db",function(){return w}),a.d(n,"auth",function(){return S});var r={};a.r(r),a.d(r,"doCreateUserWithEmailAndPassword",function(){return k}),a.d(r,"doSignInWithEmailAndPassword",function(){return N}),a.d(r,"doSignOut",function(){return C}),a.d(r,"doPasswordReset",function(){return U}),a.d(r,"doPasswordUpdate",function(){return x});var l={};a.r(l),a.d(l,"doCreateUser",function(){return D}),a.d(l,"onceGetUsers",function(){return z}),a.d(l,"setUserDB",function(){return J}),a.d(l,"updateUser",function(){return R}),a.d(l,"getUser",function(){return W}),a.d(l,"getUserObject",function(){return L}),a.d(l,"onceGetJobs",function(){return I}),a.d(l,"getJob",function(){return F}),a.d(l,"createJob",function(){return G});var c=a(1),u=a.n(c),o=a(26),s=a.n(o),i=a(18),m=(a(78),a(80),a(46)),d=a(25),p=a(5),E=a(6),f=a(8),h=a(7),b=a(9),v=a(19),g=a(24),y=a(53),j=a.n(y),O=(a(91),a(93),{apiKey:"AIzaSyCsspxEwfhqUBZ6S2nE-JhZc68yzYpDZpA",authDomain:"one-time-jobs.firebaseapp.com",databaseURL:"https://one-time-jobs.firebaseio.com",projectId:"one-time-jobs",storageBucket:"one-time-jobs.appspot.com",messagingSenderId:"837406126188"});j.a.apps.length||j.a.initializeApp(O);var w=j.a.database(),S=j.a.auth(),k=function(e,t,a){return S.createUserWithEmailAndPassword(e,t)},N=function(e,t){return S.signInWithEmailAndPassword(e,t)},C=function(){return S.signOut()},U=function(e){return S.sendPasswordResetEmail(e)},x=function(e){return S.currentUser.updatePassword(e)},T=a(17),P=a(23),A=a.n(P),M=a(34),B=a.n(M);var D=function(e,t,a,n){return w.ref("users/".concat(e)).set({displayname:t,username:a.substring(0,a.lastIndexOf("@")),email:a,bio:null,major:null,gradyear:null,dateJoined:n})},z=function(){return w.ref("users").once("value")},J=function(e,t){return w.ref("users/".concat(e)).set({value:t})},R=function(e,t,a){return w.ref("users/"+e).update(Object(T.a)({},t,a))},W=function(e){return w.ref("users").orderByChild("username").equalTo(e).once("value")},L=function(e){return w.ref("users/"+e).once("value")},I=function(){return w.ref("jobs").once("value")},F=function(e){return w.ref("jobs").orderByChild("url").equalTo(e).once("value")},G=function(e,t,a,n,r){return w.ref("jobs/".concat(e)).set({title:t,description:a,price:n,url:S.currentUser.uid.substring(0,4)+"-"+(l=t,l.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")),type:r,user:S.currentUser.email.substring(0,S.currentUser.email.lastIndexOf("@")),datePosted:B()().format()});var l},_=a(2),H="/",Y=(a(97),a(27)),V=a(10),$=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(f.a)(this,Object(h.a)(t).call(this,e))).toggle=a.toggle.bind(Object(v.a)(Object(v.a)(a))),a.toggleNotif=a.toggleNotif.bind(Object(v.a)(Object(v.a)(a))),a.state={dropdownOpen:!1,dropdownOpen2:!1,activeTab:null},a}return Object(b.a)(t,e),Object(E.a)(t,[{key:"toggle",value:function(){this.setState({dropdownOpen:!this.state.dropdownOpen})}},{key:"toggleNotif",value:function(){this.setState({dropdownOpen2:!this.state.dropdownOpen2})}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e="";if(this.props.user)e=this.props.user;return u.a.createElement(_.u,{className:"mb-4 box-shadow border-bottom"},u.a.createElement(_.f,null,u.a.createElement(g.a,{className:"navbar-brand",to:H},u.a.createElement("b",null,"MB"),"alpha"),u.a.createElement(_.r,{className:"mr-auto"},u.a.createElement(Y.LinkContainer,{to:"/jobs"},u.a.createElement(_.t,null,"Jobs")),u.a.createElement(Y.LinkContainer,{to:"/newjob"},u.a.createElement(_.t,null,"New Job"))),u.a.createElement(_.r,{className:"float-left"},u.a.createElement(_.x,{nav:!0,isOpen:this.state.dropdownOpen2,toggle:this.toggleNotif},u.a.createElement(_.i,{nav:!0},u.a.createElement(V.b,{size:"1.5em"})),u.a.createElement(_.h,{right:!0},u.a.createElement(_.g,{header:!0},"Notifications"),u.a.createElement(_.g,{divider:!0}))),u.a.createElement(Y.LinkContainer,{to:"/students"},u.a.createElement(_.t,null,u.a.createElement(V.m,{size:"1.5em"}))),u.a.createElement(_.x,{nav:!0,isOpen:this.state.dropdownOpen,toggle:this.toggle},u.a.createElement(_.i,{nav:!0},u.a.createElement(V.l,{size:"1.5em"}),e.displayname),u.a.createElement(_.h,{right:!0},u.a.createElement(_.g,{header:!0},"Signed in as: ",e.displayname),u.a.createElement(g.a,{className:"dropdown-item",to:"/account"},"Account Settings"),u.a.createElement(_.g,{divider:!0}),u.a.createElement(_.g,{onClick:r.doSignOut}," Sign Out"))))))}}]),t}(c.Component),q=function(){return u.a.createElement(_.u,{className:"mb-4 border-bottom"},u.a.createElement(_.f,null,u.a.createElement(g.a,{className:"navbar-brand",to:H},u.a.createElement("b",null,"MB"),"alpha"),u.a.createElement(_.r,null,u.a.createElement(Y.LinkContainer,{to:"/about"},u.a.createElement(_.t,null,"About")),u.a.createElement(Y.LinkContainer,{to:"/signin"},u.a.createElement(_.t,null,"Sign In")),u.a.createElement(Y.LinkContainer,{to:"/signup"},u.a.createElement(_.t,{active:!0},"Create Account")))))},Z=Object(i.b)(function(e){return{authUser:e.sessionState.authUser,user:e.sessionState.user}})(function(e){var t=e.authUser,a=e.user;return u.a.createElement("div",null,t?u.a.createElement($,{user:a}):u.a.createElement(q,null))}),K=a(12),Q=a(52),X=function(e,t){return function(){return Object(T.a)({},e,t)}},ee={displayname:"",email:"",passwordOne:"",passwordTwo:"",error:null},te=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(f.a)(this,Object(h.a)(t).call(this,e))).onSubmit=function(e){var t=a.state,n=t.displayname,c=t.email,u=t.passwordOne,o=a.props.history;r.doCreateUserWithEmailAndPassword(c,u,n).then(function(e){e.user.updateProfile({displayName:n}),l.doCreateUser(e.user.uid,n,c,B()()).then(function(){a.setState(function(){return Object(K.a)({},ee)}),o.push(H)}).catch(function(e){a.setState(X("error",e))}),e.user.sendEmailVerification().then(function(){}).catch(function(e){})}).catch(function(e){a.setState(X("error",e))}),e.preventDefault()},a.state=Object(K.a)({},ee),a}return Object(b.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.displayname,n=t.email,r=t.passwordOne,l=t.passwordTwo,c=t.error,o=r!==l||""===r||""===a||-1===n.indexOf("@calpoly.edu");return u.a.createElement(_.j,{className:"",onSubmit:this.onSubmit},u.a.createElement(_.k,null,u.a.createElement(_.m,{value:a,onChange:function(t){return e.setState(X("displayname",t.target.value))},type:"text",placeholder:"Full Name"})),u.a.createElement(_.k,null,u.a.createElement(_.m,{value:n,onChange:function(t){return e.setState(X("email",t.target.value))},type:"text",placeholder:"Email Address"}),u.a.createElement(_.l,{color:"muted"},"Must use a valid Cal Poly email address.")),u.a.createElement(_.k,null,u.a.createElement(_.m,{value:r,onChange:function(t){return e.setState(X("passwordOne",t.target.value))},type:"password",placeholder:"Password"})),u.a.createElement(_.k,null,u.a.createElement(_.m,{value:l,onChange:function(t){return e.setState(X("passwordTwo",t.target.value))},type:"password",placeholder:"Confirm Password"})),u.a.createElement(_.k,null,u.a.createElement(_.c,{block:!0,color:"success",disabled:o,type:"submit"},"Create an account \u2192"),u.a.createElement(_.l,null,"By creating an account, you agree to our ",u.a.createElement("a",null,"terms & conditions."))),c&&u.a.createElement(_.a,{color:"danger"},c.message))}}]),t}(c.Component),ae=function(){return u.a.createElement("p",null,"Don't have an account? ",u.a.createElement(g.a,{to:"/signup"},"Sign Up"))},ne=Object(Q.a)(function(e){var t=e.history;return u.a.createElement(_.v,null,u.a.createElement(_.e,{className:"text-center",sm:{size:6,offset:3}},u.a.createElement("h1",null,"Create your account"),u.a.createElement("p",{className:"lead"},"Join an exclusive community for Cal Poly students."),u.a.createElement(te,{history:t}),u.a.createElement("p",null,"Already have an account? ",u.a.createElement(g.a,{to:"/signin"},"Sign in"))))}),re=(a(101),function(){return u.a.createElement(_.f,{className:"bg-white"},u.a.createElement(_.v,null,u.a.createElement("div",{className:"w-100 bg-cp p-4"},u.a.createElement("h1",{className:"display-3 font-weight-bold"},"Mustang Bulletin        ",u.a.createElement(g.a,{className:"w-100-sm btn btn-lg btn-outline-white float-right mr-5 mt-4",to:"/signup"},"Create your Account  \u2192")),u.a.createElement("small",null),u.a.createElement("p",{className:"lead"},"A local job board for students, by students.")),u.a.createElement("div",{className:"w-100 m-auto text-center py-5 bg-white"},u.a.createElement("p",{className:"lead"},"As a student at Cal Poly, you are surrounded by all kinds of valuable skill and talent."),u.a.createElement("p",{className:"h2"},"Use Mustang Bulletin to share your skills and make money."),u.a.createElement("br",null)),u.a.createElement(_.e,{className:"py-3 d-none",sm:{size:8,offset:2}},u.a.createElement("small",{className:"d-block text-center"},"service examples"),u.a.createElement("hr",null),u.a.createElement("div",{className:"testings"},u.a.createElement("ul",{className:"cloud"},u.a.createElement("li",null,"bike repair"),u.a.createElement("li",null,"gardening"),u.a.createElement("li",null,"hairstyling"),u.a.createElement("li",null,"events"),u.a.createElement("li",null,"web design"),u.a.createElement("li",null,"catering"),u.a.createElement("li",null,"graphic design"),u.a.createElement("li",null,"custom art"),u.a.createElement("li",null,"cooking"),u.a.createElement("li",null,"handcrafted items"))),u.a.createElement("hr",null))),u.a.createElement(_.v,{className:""},u.a.createElement(_.e,{sm:{size:"5",offset:1}},u.a.createElement("h3",null,u.a.createElement(V.i,null)," Secure"),u.a.createElement("p",null,"Since you need a verified @calpoly.edu email to create an account, everyone is a Cal Poly student (or affiliated).")),u.a.createElement(_.e,{sm:{size:"4",offset:1}},u.a.createElement("h3",null,u.a.createElement(V.d,null)," Get paid"),u.a.createElement("p",null,"Get paid while helping another classmate, at any rate you choose.  ")),u.a.createElement(_.e,{sm:{size:"5",offset:1}},u.a.createElement("h3",null,u.a.createElement(V.k,null)," Gain experience "),u.a.createElement("p",null,"Grow your skills and get experience as you do support your college community.")),u.a.createElement(_.e,{sm:{size:"5",offset:1}},u.a.createElement("h3",null,u.a.createElement(V.g,null)," Network"),u.a.createElement("p",null,"Meet other students and make lasting connections."))),u.a.createElement(_.v,{className:""},u.a.createElement(_.e,{className:"text-center my-4",sm:{size:6,offset:3}})))}),le=function(e,t){return function(){return Object(T.a)({},e,t)}},ce={email:"",error:null},ue=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(f.a)(this,Object(h.a)(t).call(this,e))).onSubmit=function(e){var t=a.state.email;r.doPasswordReset(t).then(function(){a.setState(function(){return Object(K.a)({},ce)})}).catch(function(e){a.setState(le("error",e))}),e.preventDefault()},a.state=Object(K.a)({},ce),a}return Object(b.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.email,n=t.error,r=""===a;return u.a.createElement(_.k,null,u.a.createElement(_.j,{className:"mr-2",inline:!0,onSubmit:this.onSubmit},u.a.createElement(_.m,{value:this.state.email,onChange:function(t){return e.setState(le("email",t.target.value))},type:"text",placeholder:"Email Address"}),u.a.createElement(_.c,{disabled:r,type:"submit"},"Reset My Password"),n&&u.a.createElement("p",null,n.message)))}}]),t}(c.Component),oe=function(){return u.a.createElement("p",null,u.a.createElement(g.a,{to:"/pw-forget"},"Forgot Password?"))},se=function(){return u.a.createElement("div",null,u.a.createElement("h1",null,"PasswordForget"),u.a.createElement(ue,null))},ie=function(e,t){return function(){return Object(T.a)({},e,t)}},me={email:"",password:"",error:null},de=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(f.a)(this,Object(h.a)(t).call(this,e))).onSubmit=function(e){var t=a.state,n=t.email,l=t.password,c=a.props.history;r.doSignInWithEmailAndPassword(n,l).then(function(){a.setState(function(){return Object(K.a)({},me)}),c.push(H)}).catch(function(e){a.setState(ie("error",e))}),e.preventDefault()},a.state=Object(K.a)({},me),a}return Object(b.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.email,n=t.password,r=t.error,l=""===n||""===a;return u.a.createElement("form",{onSubmit:this.onSubmit},u.a.createElement(_.k,null,u.a.createElement(_.m,{value:a,onChange:function(t){return e.setState(ie("email",t.target.value))},type:"text",placeholder:"Email Address"})),u.a.createElement(_.k,null,u.a.createElement(_.m,{value:n,onChange:function(t){return e.setState(ie("password",t.target.value))},type:"password",placeholder:"Password"})),u.a.createElement(_.k,null,u.a.createElement(_.c,{block:!0,outline:!0,disabled:l,type:"submit"},"Sign In")),r&&u.a.createElement(_.a,{color:"danger"},r.message))}}]),t}(c.Component),pe=Object(Q.a)(function(e){var t=e.history;return u.a.createElement(_.v,null,u.a.createElement(_.e,{sm:"3"}),u.a.createElement(_.e,{sm:"6"},u.a.createElement("h1",{className:"text-center"},"Sign In"),u.a.createElement(de,{history:t}),u.a.createElement(oe,null),u.a.createElement(ae,null)),u.a.createElement(_.e,{sm:"3"}))}),Ee=a(21),fe=function(e){return function(t){var a=function(a){function r(){return Object(p.a)(this,r),Object(f.a)(this,Object(h.a)(r).apply(this,arguments))}return Object(b.a)(r,a),Object(E.a)(r,[{key:"componentDidMount",value:function(){var t=this;n.auth.onAuthStateChanged(function(a){e(a)||t.props.history.push("/signin")})}},{key:"render",value:function(){return this.props.authUser?u.a.createElement(t,this.props):null}}]),r}(u.a.Component);return Object(Ee.a)(Q.a,Object(i.b)(function(e){return{authUser:e.sessionState.authUser}}))(a)}},he=(a(103),a(61)),be=a.n(he),ve=(a(105),a(3),a(107),a(62)),ge=a.n(ve),ye=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(f.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){a.setState({searchString:e.target.value}),console.log({searchString:e.target.value})},a.searchFilter=function(e){a.setState({searchType:e.target.value})},a.state={jobs:{},activeTab:"1",searchString:"",searchType:"all",priceRange:{min:0,max:1e3},sortBy:"price"},a.handleChange=a.handleChange.bind(Object(v.a)(Object(v.a)(a))),a.searchFilter=a.searchFilter.bind(Object(v.a)(Object(v.a)(a))),a.toggle=a.toggle.bind(Object(v.a)(Object(v.a)(a))),a}return Object(b.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=this;l.onceGetJobs().then(function(t){return e.setState(function(){return{jobs:t.val()}})})}},{key:"toggle",value:function(e){this.state.activeTab!==e&&this.setState({activeTab:e})}},{key:"render",value:function(){var e=this,t=this.state,a=t.jobs,n=t.searchType,r=t.priceRange,l=t.sortBy,c=this.state.searchString.trim().toLowerCase();r.min,r.max;return a?(c.length>0&&(console.log(Object.keys(a)),a=Object.keys(a).filter(function(e){if(a[e].title.toLowerCase().match(c))return a[e]}).reduce(function(e,t){return e[t]=a[t],e},{})),"help"==n&&(console.log(Object.keys(a)),a=Object.keys(a).filter(function(e){if(0==a[e].type)return a[e]}).reduce(function(e,t){return e[t]=a[t],e},{})),"service"==n&&(console.log(Object.keys(a)),a=Object.keys(a).filter(function(e){if(1==a[e].type)return a[e]}).reduce(function(e,t){return e[t]=a[t],e},{})),a=Object.keys(a).filter(function(e){if(a[e].price>=r.min&&a[e].price<=r.max)return a[e]}).reduce(function(e,t){return e[t]=a[t],e},{}),"price"==l&&(a=Object.keys(a).sort(function(e,t){return e.price>t.price?1:t.price>e.price?-1:0}).reduce(function(e,t){return e[t]=a[t],e},{})),u.a.createElement("div",null,u.a.createElement("input",{className:"search-bar",type:"text",value:this.state.searchString,onChange:this.handleChange,placeholder:"Search"}),u.a.createElement(_.r,{tabs:!0},u.a.createElement(_.s,null,u.a.createElement("button",{className:("all"==this.state.searchType?"active-tab":"")+" category",value:"all",onClick:this.searchFilter},"All")),u.a.createElement(_.s,null,u.a.createElement("button",{className:("help"==this.state.searchType?"active-tab":"")+" category",value:"help",onClick:this.searchFilter},"Help Wanted")),u.a.createElement(_.s,null,u.a.createElement("button",{className:("service"==this.state.searchType?"active-tab":"")+" category",value:"service",onClick:this.searchFilter},"Service")),u.a.createElement(ge.a,{maxValue:200,minValue:0,value:this.state.priceRange,onChange:function(t){return e.setState({priceRange:t})}})),u.a.createElement("div",{className:"py-4 w-100"},Object.keys(a).map(function(e){return u.a.createElement(g.a,{className:"job",key:e,to:"jobs/".concat(a[e].url)},u.a.createElement("div",{className:"float-left clearfix w-75"},u.a.createElement("h4",null,e),u.a.createElement("br",null),u.a.createElement("p",null," ",u.a.createElement(V.e,null)," ",u.a.createElement(A.a,{fromNow:!0},a[e].datePosted)," ","by ",a[e].user," ",u.a.createElement(je,{typeValue:a[e].type}))),u.a.createElement("div",{className:"float-right clearfix w-25"},u.a.createElement("p",{className:"text-right display-4 green"},"$",a[e].price)))})))):u.a.createElement("div",null,"Loading")}}]),t}(c.Component),je=function(e){var t=e.typeValue;return 1==t?u.a.createElement(_.b,{color:"success"},"Service"):0==t?u.a.createElement(_.b,{color:"warning"},"Help Wanted"):u.a.createElement(_.b,null,"No Type")},Oe=Object(Ee.a)(fe(function(e){return!!e}),Object(i.b)(function(e){return{users:e.userState.users}},function(e){return{onSetUsers:function(t){return e({type:"USERS_SET",users:t})}}}))(ye),we=a(63),Se=function(e){var t=e.data;return t?u.a.createElement(_.d,{className:"px-2 py-1 mt-1"},u.a.createElement("small",{className:"text-uppercase w-100 text-muted"},"Your Profile"),u.a.createElement("strong",{className:"h2"}," ",t.displayname),u.a.createElement("small",null,u.a.createElement(V.c,null)," ",t.major,", ",t.gradyear),u.a.createElement("p",{className:"mb-1"},t.bio),u.a.createElement(g.a,{to:"/account"},"Edit your account \u2192"),u.a.createElement("small",null,"Joined"," ",u.a.createElement(A.a,{className:"text-muted",fromNow:!0},t.dateJoined))):null},ke=function(e){function t(e){return Object(p.a)(this,t),Object(f.a)(this,Object(h.a)(t).call(this,e))}return Object(b.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){be()(".baffle");return u.a.createElement("div",null,u.a.createElement(_.v,null,u.a.createElement(_.e,{sm:"12"},u.a.createElement(_.a,{color:"warning  "},u.a.createElement(V.a,{size:"1.2em"})," ",u.a.createElement(g.a,{to:"/account"},"Click here to update your profile \u2192")))),u.a.createElement(_.v,null,u.a.createElement(_.e,{sm:"3",className:""},u.a.createElement(Se,{data:this.props.user}),u.a.createElement("ul",{className:"list-group mt-5"},u.a.createElement("a",{href:"#",className:"list-group-item"},u.a.createElement(V.d,{size:"1.2em"})," Your Jobs"),u.a.createElement("a",{href:"#",className:"list-group-item"},u.a.createElement(V.f,{size:"1.2em"})," WatchList"))),u.a.createElement(_.e,{sm:"9",className:""},u.a.createElement(Oe,null))))}}]),t}(c.Component),Ne=Object(i.b)(function(e){return{authUser:e.sessionState.authUser,user:e.sessionState.user}})(function(e){var t=e.authUser,a=e.user;return u.a.createElement("div",null,u.a.createElement(we.Helmet,null,u.a.createElement("title",null,"Mustang Bulletin - Home")),t?u.a.createElement(ke,{user:a}):u.a.createElement(re,null))}),Ce=function(e,t){return function(){return Object(T.a)({},e,t)}},Ue={passwordOne:"",passwordTwo:"",error:null},xe=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(f.a)(this,Object(h.a)(t).call(this,e))).onSubmit=function(e){var t=a.state.passwordOne;r.doPasswordUpdate(t).then(function(){a.setState(function(){return Object(K.a)({},Ue)})}).catch(function(e){a.setState(Ce("error",e))}),e.preventDefault()},a.state=Object(K.a)({},Ue),a}return Object(b.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.passwordOne,n=t.passwordTwo,r=t.error,l=a!==n||""===a;return u.a.createElement(_.j,{onSubmit:this.onSubmit},u.a.createElement(_.m,{value:a,onChange:function(t){return e.setState(Ce("passwordOne",t.target.value))},type:"password",placeholder:"New Password",className:"mb-2"}),u.a.createElement(_.m,{value:n,onChange:function(t){return e.setState(Ce("passwordTwo",t.target.value))},type:"password",placeholder:"Confirm New Password",className:"mb-2"}),u.a.createElement(_.c,{disabled:l,type:"submit"},"Reset My Password"),r&&u.a.createElement("p",null,r.message))}}]),t}(c.Component),Te=(r.currentUser,function(e,t){return function(){return Object(T.a)({},e,t)}}),Pe=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(f.a)(this,Object(h.a)(t).call(this,e))).onSubmitBio=function(e){var t=a.state.newBio,n=a.props.authUser.uid;l.updateUser(n,"bio",t).then(function(){}).catch(function(e){a.setState(Te("error",e))}),e.preventDefault()},a.onSubmitMajor=function(e){var t=a.state.major,n=a.props.authUser.uid;l.updateUser(n,"major",t).then(function(){}).catch(function(e){a.setState(Te("error",e))}),e.preventDefault()},a.onSubmitGrad=function(e){var t=a.state.gradyear,n=a.props.authUser.uid;l.updateUser(n,"gradyear",t).then(function(){this.setState(Te("saved",!0))}).catch(function(e){a.setState(Te("error",e))}),e.preventDefault()},a.state={error:null,newBio:"",major:"",gradyear:"",saved:!1},a}return Object(b.a)(t,e),Object(E.a)(t,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.authUser,n=t.user;if(!n)return null;var r=this.state,l=r.error,c=r.newBio,o=r.major,s=r.gradyear,i=r.saved;return u.a.createElement(_.v,null,u.a.createElement(_.e,{sm:"8"},u.a.createElement("h2",null,"Account Details"),i&&u.a.createElement(_.a,{color:"success"},"Successfully saved"),u.a.createElement(_.w,null,u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("th",null,"Name"),u.a.createElement("td",null," ",a.displayName)),u.a.createElement("tr",null,u.a.createElement("th",null,"Email"),u.a.createElement("td",null,a.email)),u.a.createElement("tr",null,u.a.createElement("th",null,"Bio"),u.a.createElement("td",null," ",u.a.createElement(_.j,{onSubmit:this.onSubmitBio},u.a.createElement(_.m,{value:c,onChange:function(t){return e.setState(Te("newBio",t.target.value))},type:"textarea",placeholder:n.bio,className:"mb-2"}),u.a.createElement(_.c,{type:"submit"},"Save"),l&&u.a.createElement("p",null,l.message)))),u.a.createElement("tr",null,u.a.createElement("th",null,"Major"),u.a.createElement("td",null,u.a.createElement(_.j,{onSubmit:this.onSubmitMajor},u.a.createElement(_.m,{value:o,onChange:function(t){return e.setState(Te("major",t.target.value))},type:"text",placeholder:n.major,className:"mb-2"}),u.a.createElement(_.c,{type:"submit"},"Save")))),u.a.createElement("tr",null,u.a.createElement("th",null,"Grad"),u.a.createElement("td",null,u.a.createElement(_.j,{onSubmit:this.onSubmitGrad},u.a.createElement(_.m,{value:s,onChange:function(t){return e.setState(Te("gradyear",t.target.value))},type:"select",placeholder:n.gradyear,className:"mb-2"},u.a.createElement("option",null,"2018"),u.a.createElement("option",null,"2019"),u.a.createElement("option",null,"2020"),u.a.createElement("option",null,"2021"),u.a.createElement("option",null,"2022")),u.a.createElement(_.c,{type:"submit"},"Save")))),u.a.createElement("tr",null,u.a.createElement("th",null,"Password"),u.a.createElement("td",null,u.a.createElement(ue,null),u.a.createElement(xe,null)))))),u.a.createElement(_.e,{sm:"4"},u.a.createElement(Se,{data:n})))}}]),t}(c.Component),Ae=Object(Ee.a)(fe(function(e){return!!e}),Object(i.b)(function(e){return{authUser:e.sessionState.authUser,user:e.sessionState.user}}))(Pe),Me=function(e){var t=function(t){function a(){return Object(p.a)(this,a),Object(f.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(b.a)(a,t),Object(E.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.onSetAuthUser,a=e.user;n.auth.onAuthStateChanged(function(e){e?(l.getUserObject(e.uid).then(function(e){return a(e.val())}),t(e)):(t(null),a(null))})}},{key:"render",value:function(){return u.a.createElement(e,this.props)}}]),a}(u.a.Component);return Object(i.b)(null,function(e){return{user:function(t){return e({type:"USER_CONNECT",user:t})},onSetAuthUser:function(t){return e({type:"AUTH_USER_SET",authUser:t})}}})(t)},Be=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(f.a)(this,Object(h.a)(t).call(this,e))).state={users:{}},a}return Object(b.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.onSetUsers;l.onceGetUsers().then(function(t){return e(t.val())})}},{key:"render",value:function(){var e=this.props.users;return e?u.a.createElement(_.v,null,u.a.createElement("div",{className:"w-100 bg-cp p-4"},u.a.createElement("h1",null,"Students"),u.a.createElement("p",{className:"lead"},"Meet your fellow students registered on Mustang Bulletin")),!!e&&u.a.createElement(De,{users:e})):u.a.createElement("div",null,"Loading")}}]),t}(c.Component),De=function(e){var t=e.users;return u.a.createElement(_.q,{className:"m-auto w-75"},Object.keys(t).map(function(e){return u.a.createElement(g.a,{className:"list-group-item list-group-item-action",key:e,to:"/students/".concat(t[e].username)},t[e].displayname," -"," ",u.a.createElement("span",{className:"text-muted"},t[e].email))}))},ze=Object(Ee.a)(fe(function(e){return!!e}),Object(i.b)(function(e){return{users:e.userState.users}},function(e){return{onSetUsers:function(t){return e({type:"USERS_SET",users:t})}}}))(Be),Je=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(f.a)(this,Object(h.a)(t).call(this,e))).state={username:e.match.params.username,data:{},displayname:""},a}return Object(b.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=this;l.getUser(this.state.username).then(function(t){return e.setState(function(){return{data:t.val()}})})}},{key:"render",value:function(){var e=this.state.data;return u.a.createElement(_.v,{className:""},u.a.createElement(_.e,{sm:"6"},u.a.createElement(Re,{data:e})))}}]),t}(c.Component),Re=function(e){var t=e.data;return u.a.createElement("div",null,Object.keys(t).map(function(e){return u.a.createElement("div",null,u.a.createElement("h1",{key:e},t[e].displayname,"'s Profile"),u.a.createElement(_.w,{key:e},u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("th",null,"Name"),u.a.createElement("td",null,t[e].displayname)),u.a.createElement("tr",null,u.a.createElement("th",null,"Email"),u.a.createElement("td",null,t[e].email," ",u.a.createElement("a",{className:"btn btn-primary btn-sm",href:"mailto:".concat(t[e].email)},u.a.createElement(V.j,null)))))))}))},We=Je,Le=(a(131),function(){return u.a.createElement("p",{className:"text-center py-3"},"\xa92018 Mustang Bulletin | ",u.a.createElement(g.a,{to:"/about"},"About Mustang Bulletin"))}),Ie=function(e,t){return function(){return Object(T.a)({},e,t)}},Fe={title:"",description:"",price:0,type:0,error:null,dateAdded:0,priceType:0},Ge=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(f.a)(this,Object(h.a)(t).call(this,e))).onSubmit=function(e){var t=a.state,n=t.title,r=t.description,c=t.price,u=t.type;l.createJob(n,n,r,c,u).then(function(){a.setState(function(){return Object(K.a)({},Fe)})}).catch(function(e){a.setState(Ie("error",e))}),e.preventDefault()},a.state=Object(K.a)({},Fe),a}return Object(b.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.title,n=t.description,r=t.price,l=t.type,c=t.error,o=""===a||""===n||""===r||null===l;return u.a.createElement(_.j,{onSubmit:this.onSubmit},u.a.createElement(_.k,null,u.a.createElement(_.p,null,"Title*"),u.a.createElement(_.m,{value:a,onChange:function(t){return e.setState(Ie("title",t.target.value))},type:"text",placeholder:"Don't use all uppercase titles"})),u.a.createElement(_.k,null,u.a.createElement(_.p,null,"Description*"),u.a.createElement(_.m,{value:n,onChange:function(t){return e.setState(Ie("description",t.target.value))},type:"textarea",placeholder:"Describe what you need done here."})),u.a.createElement(_.k,null,u.a.createElement(_.n,{size:"lg",className:"w-50"},u.a.createElement(_.o,{addonType:"prepend"},"$"),u.a.createElement(_.m,{value:r,onChange:function(t){return e.setState(Ie("price",t.target.value))},placeholder:"Amount",type:"number",step:"1"}),u.a.createElement(_.o,{addonType:"append"},".00"))),u.a.createElement(_.k,{check:!0},u.a.createElement(_.p,{check:!0},u.a.createElement(_.m,{type:"radio",name:"type",value:l,onChange:function(t){return e.setState(Ie("type",0))}}),"Help Wanted")),u.a.createElement(_.k,{check:!0},u.a.createElement(_.p,{check:!0},u.a.createElement(_.m,{type:"radio",name:"type",onChange:function(t){return e.setState(Ie("type",1))}})," ","Providing a service")),u.a.createElement(_.k,null,u.a.createElement(_.c,{block:!0,outline:!0,color:"success",disabled:o,type:"submit"},"Add Job")),c&&u.a.createElement("p",null,c.message))}}]),t}(c.Component),_e=Object(Q.a)(function(){return u.a.createElement("div",null,u.a.createElement(_.v,null,u.a.createElement("h1",{className:"text-center w-100"},"New Job"),u.a.createElement(_.e,{sm:{size:6,offset:3}},u.a.createElement(Ge,null))))}),He=a(64),Ye=a.n(He),Ve=(a(133),function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(f.a)(this,Object(h.a)(t).call(this,e))).state={url:e.match.params.url,data:{},displayname:""},a}return Object(b.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=this;l.getJob(this.state.url).then(function(t){return e.setState(function(){return{data:t.val()}})})}},{key:"render",value:function(){var e=this.state.data;return u.a.createElement(_.v,{className:""},u.a.createElement(_.e,{sm:"12"},u.a.createElement(qe,{data:e})),u.a.createElement(_.e,{sm:"12",className:"mt-4"},u.a.createElement($e,{data:e})))}}]),t}(c.Component)),$e=function(e){var t=e.data;return u.a.createElement("div",{className:""},Object.keys(t).map(function(e){return u.a.createElement("div",{className:"post-meta"},u.a.createElement(g.a,{className:"",to:"/students/".concat(t[e].user)},u.a.createElement("img",{className:"profile-img",src:Ye.a}),u.a.createElement("span",{className:"pl-1"}," ",t[e].user)," "),u.a.createElement("a",{className:"btn btn-primary btn-contact",href:"mailto:".concat(t[e].user,"@calpoly.edu")},u.a.createElement(V.j,null)," Contact"))}))},qe=function(e){var t=e.data;return u.a.createElement("div",null,Object.keys(t).map(function(e){return u.a.createElement("div",{key:e},u.a.createElement("h1",{key:e},t[e].title,u.a.createElement("span",{className:"float-right green"},"$",t[e].price))," ",u.a.createElement(je,{typeValue:t[e].type}),"  "," ",u.a.createElement(V.e,null),u.a.createElement(A.a,{format:"MMM DD YYYY"},t[e].datePosted),u.a.createElement("hr",null),u.a.createElement("small",{class:"text-muted"},"Job description"),u.a.createElement("p",null,t[e].description))}))},Ze=Ve,Ke=function(){return u.a.createElement("div",null,u.a.createElement(_.v,{className:"py-4 mb-4"},u.a.createElement(_.e,{className:"",sm:{size:6,offset:3}},u.a.createElement("h4",null,"Mustang Bulletin is an exclusive job board for Cal Poly students to work for each other."))),u.a.createElement(_.v,null,u.a.createElement(_.e,{sm:{size:6,offset:3}},u.a.createElement("h4",null,"How it works"),u.a.createElement("ul",null,u.a.createElement("li",null,"Fulfill jobs or provide work for other students and gain reputation"),u.a.createElement("li",null,"When providing a job or working a job, gain credibility by rating your interactions with other students."),u.a.createElement("li",null,"Better your skills, get stuff done for you, and network with other students"),u.a.createElement("li",null,"Secure messaging platform for contacting other students")),u.a.createElement("hr",null))),u.a.createElement(_.v,null,u.a.createElement(_.e,{sm:{size:6,offset:3}},u.a.createElement("p",{className:"text-center"},"Created with ",u.a.createElement(V.h,{color:"red"})," by"," ",u.a.createElement("a",{href:"https://fjchen.net"}," Finley Chen")))))},Qe=Me(function(){return u.a.createElement(m.a,null,u.a.createElement("div",{className:"app"},u.a.createElement(Z,null),u.a.createElement(_.f,null,u.a.createElement(d.a,{exact:!0,path:"/signup",component:function(){return u.a.createElement(ne,null)}}),u.a.createElement(d.a,{exact:!0,path:"/signin",component:function(){return u.a.createElement(pe,null)}}),u.a.createElement(d.a,{exact:!0,path:"/pw-forget",component:function(){return u.a.createElement(se,null)}}),u.a.createElement(d.a,{exact:!0,path:H,component:function(){return u.a.createElement(Ne,null)}}),u.a.createElement(d.a,{exact:!0,path:"/account",component:function(){return u.a.createElement(Ae,null)}}),u.a.createElement(d.a,{exact:!0,path:"/newjob",component:function(){return u.a.createElement(_e,null)}}),u.a.createElement(d.a,{exact:!0,path:"/students",component:function(){return u.a.createElement(ze,null)}}),u.a.createElement(d.a,{exact:!0,path:"/students/:username",component:We}),u.a.createElement(d.a,{exact:!0,path:"/jobs/:url",component:Ze}),u.a.createElement(d.a,{exact:!0,path:"/jobs",component:function(){return u.a.createElement(Oe,null)}}),u.a.createElement(d.a,{exact:!0,path:"/about",component:function(){return u.a.createElement(Ke,null)}}),u.a.createElement("hr",null),u.a.createElement(Le,null))))}),Xe=a(22),et={authUser:null,user:null},tt=function(e,t){return Object(K.a)({},e,{authUser:t.authUser})},at=function(e,t){return Object(K.a)({},e,{user:t.user})};var nt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:et,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_USER_SET":return tt(e,t);case"USER_CONNECT":return at(e,t);default:return e}},rt={users:{}},lt=function(e,t){return Object(K.a)({},e,{users:t.users})};var ct=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USERS_SET":return lt(e,t);default:return e}},ut={students:{}},ot=function(e,t){return Object(K.a)({},e,{students:t.students})};var st=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ut,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"STUDENTS_SET":return ot(e,t);default:return e}},it=Object(Xe.combineReducers)({sessionState:nt,userState:ct,studentState:st}),mt=a(65),dt=a(66),pt=Object(Xe.createStore)(it,Object(Xe.compose)(Object(Xe.applyMiddleware)(dt.a),Object(mt.devToolsEnhancer)())),Et=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ft(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}s.a.render(u.a.createElement(i.a,{store:pt},u.a.createElement(Qe,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");Et?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ft(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):ft(e)})}}()},64:function(e,t,a){e.exports=a.p+"static/media/defaultuser.265ea8cb.jpg"},67:function(e,t,a){e.exports=a(135)},80:function(e,t,a){},97:function(e,t,a){}},[[67,2,1]]]);
//# sourceMappingURL=main.64959e5f.chunk.js.map