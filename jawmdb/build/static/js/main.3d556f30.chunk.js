(this.webpackJsonpjawmdb=this.webpackJsonpjawmdb||[]).push([[0],{26:function(e,t,a){e.exports=a.p+"static/media/loading.8375fc44.svg"},27:function(e,t,a){e.exports=a.p+"static/media/IMDb_logo.64099c07.svg"},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){e.exports=a.p+"static/media/cinema.c320d72e.svg"},45:function(e,t,a){e.exports=a.p+"static/media/tmdb.4906bce9.svg"},48:function(e,t,a){e.exports=a(77)},53:function(e,t,a){},54:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(20),l=a.n(i),s=(a(53),a(16)),c=a(1),o=a(2),m=a(4),p=a(3),h=a(5),u=(a(54),a(18)),d=a.n(u),v=a(21),f=a(22),b=a(46),E=a(41),g=a.n(E),w=a(10),O=function(e){return r.a.createElement("div",{className:"header-title"},r.a.createElement(w.b,{to:"/"},r.a.createElement("img",{src:g.a,alt:"JAWMDB",className:"logo"})))},y=a(13),C=a(25),j=a.n(C),N=function(e){return r.a.createElement("div",null,r.a.createElement("p",null,"JAWMDB (Jason Austin Watched Movies Data Base) App made by Jason and Austin."),r.a.createElement("p",null,"Github link: ",r.a.createElement("a",{href:"https://github.com/keposet/web3_asg1"},"https://github.com/keposet/web3_asg1")),r.a.createElement("br",null),r.a.createElement("p",null,"Film Metadata povided by ",r.a.createElement("a",{href:"https://www.themoviedb.org/"},"The Movie Database")),r.a.createElement("br",null),r.a.createElement("p",null,"Technology used:"),r.a.createElement("ul",null,r.a.createElement("li",null,"React-Modal: ",r.a.createElement("a",{href:"https://www.npmjs.com/package/react-modal"},"react-modal npm")," "),r.a.createElement("li",null,"React-Modal: ",r.a.createElement("a",{href:"https://www.npmjs.com/package/react-modal"},"react-modal npm")," "),r.a.createElement("li",null,'Loading svg "Flowing Gradient" from: ',r.a.createElement("a",{href:"https://icons8.com/preloaders/en/free"}," icons8 Preloaders")),r.a.createElement("li",null,"Logo Icon made by ",r.a.createElement("a",{href:"https://www.flaticon.com/authors/freepik",title:"Freepik"},"Freepik")," from ",r.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com")),r.a.createElement("li",null,"Hero Image ",r.a.createElement("a",{href:"https://images.unsplash.com/photo-1542204165-65bf26472b9b"},'"8mm filmrolls"')," From: Denise Jans ",r.a.createElement("a",{href:"https://unsplash.com/@dmjdenise"},"@dmjdenise")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://unsplash.com/photos/4PxJ_9wEQyI"}),"Curtain Image credit to unsplash user ",r.a.createElement("a",{href:"https://unsplash.com/@djpaine"},"DJ Paine")),r.a.createElement("li",null,"Font Awesome Icons from ",r.a.createElement("a",{href:"https://fontawesome.com/how-to-use/on-the-web/using-with/react"},"react-fontawesome")," "),r.a.createElement("li",null,"CSSTransition Group used for ",r.a.createElement("a",{href:"http://reactcommunity.org/react-transition-group/css-transition"},"animations"))),r.a.createElement("p",null,"Code credit:"),r.a.createElement("ul",null,r.a.createElement("li",null,"React Router query sting basics from: ",r.a.createElement("a",{href:"https://tylermcginnis.com/react-router-query-strings/"},"Tyler McGinnis")),r.a.createElement("li",null,"React CSSTransition basics from ",r.a.createElement("a",{href:"https://blog.logrocket.com/improve-your-ui-with-react-transition-group-999fa35f7cae/"}," LogRocket.com")),r.a.createElement("li",null,"CSS help: ",r.a.createElement("a",{href:"https://stackoverflow.com/questions/47881767/"},"for adding commas")," from user ",r.a.createElement("a",{href:"https://stackoverflow.com/users/5157454/ori-drori"},"Ori Dori"))))},k=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={modalIsOpen:!1},a.openModal=a.openModal.bind(Object(y.a)(a)),a.afterOpenModal=a.afterOpenModal.bind(Object(y.a)(a)),a.closeModal=a.closeModal.bind(Object(y.a)(a)),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"openModal",value:function(){this.setState({modalIsOpen:!0})}},{key:"afterOpenModal",value:function(){}},{key:"closeModal",value:function(){this.setState({modalIsOpen:!1})}},{key:"render",value:function(){return r.a.createElement("nav",{className:"header-menu"},r.a.createElement("button",{onClick:this.openModal},"About"),r.a.createElement(j.a,{isOpen:this.state.modalIsOpen,onAfterOpen:this.afterOpenModal,onRequestClose:this.closeModal,ariaHideApp:!1,className:"modal-dialog",contentLabel:"Example Modal"},r.a.createElement("h2",null,"Web Assignment 1"),r.a.createElement(N,null),r.a.createElement("button",{onClick:this.closeModal},"close")))}}]),t}(r.a.Component),D=function(e){return r.a.createElement("header",{className:"header"},r.a.createElement(O,null),r.a.createElement(k,null))},F=a(9),I=a(7),M=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleRemove=function(){var e=a.props.id;a.props.removeFav(e)},a.handleDetail=function(){a.props.viewFavDetail(a.props.id)},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("li",{className:"favorite"},r.a.createElement(w.b,{to:"filminfo",filmID:this.props.id},r.a.createElement("img",{onClick:this.handleDetail,src:"".concat("https://image.tmdb.org/t/p/w92").concat(this.props.poster),className:"later",alt:this.props.title,title:this.props.title})),r.a.createElement("button",{className:"closeButton",onClick:this.handleRemove},r.a.createElement(F.a,{icon:I.h})))}}]),t}(r.a.Component),S=a(78),R=a(79),L=(a(70),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={hidden:!1},a.handleHiden=function(){var e=!a.state.hidden;a.setState({hidden:e})},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.state.hidden?r.a.createElement(F.a,{icon:I.b}):r.a.createElement(F.a,{icon:I.a});return r.a.createElement("div",{className:"favorites-bar"},r.a.createElement("h3",null," Favorites "),r.a.createElement("div",{onClick:this.handleHiden},t),r.a.createElement(S.a,{in:!this.state.hidden,timeout:500,classNames:"display",unmountOnExit:!0,appear:!0},r.a.createElement("ul",{className:"favorites"},r.a.createElement(R.a,{component:null},this.props.favorites.map((function(t,a){return r.a.createElement(S.a,{key:t.title,timeout:300,classNames:"display",unmountOnExit:!0,appear:!0},r.a.createElement(M,{poster:t.poster,id:t.id,title:t.title,removeFav:e.props.removeFav,key:a,viewFavDetail:e.props.viewFavDetail}))}))))))}}]),t}(r.a.Component)),x=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleView=function(){a.props.handleView(a.props.filmID)},a.handleFavorite=function(){var e={poster:a.props.poster,id:a.props.filmID,title:a.props.title};a.props.addFav(e)},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.year.split("-"),t=Object(f.a)(e,1)[0];return r.a.createElement("li",{className:"movie-list-item"},r.a.createElement(w.b,{to:"filminfo",filmID:this.props.filmID},r.a.createElement("img",{src:"".concat("https://image.tmdb.org/t/p/w92").concat(this.props.poster),alt:this.props.title,onClick:this.handleView})),r.a.createElement(w.b,{to:"filminfo",filmID:this.props.filmID},r.a.createElement("p",{onClick:this.handleView},this.props.title)),r.a.createElement("p",{className:"center-align mi-year"},t),r.a.createElement("p",{className:"center-align mi-rating"},this.props.rating),r.a.createElement("div",{className:"favorite-btn"},r.a.createElement(F.a,{icon:I.c,onClick:this.handleFavorite})),r.a.createElement(w.b,{to:"filminfo",filmID:this.props.filmID},r.a.createElement("button",{onClick:this.handleView},"View")))}}]),t}(r.a.Component),B=(a(71),a(26)),T=a.n(B),A=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={selected:"title",reverse:!0},a.sortValue=function(e){var t=a.props.sortTitle,n=e.currentTarget.value;"year"===n?t=a.props.sortYear:"rating"===n&&(t=a.props.sortRating);var r=a.state.selected===n&&!a.state.reverse;a.props.sortMovies(t,r),a.setState({selected:n,reverse:r})},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.movies.length>0||this.props.loading,a="title"===this.state.selected&&this.state.reverse?r.a.createElement(F.a,{icon:I.d}):r.a.createElement(F.a,{icon:I.e}),n="year"!==this.state.selected||this.state.reverse?r.a.createElement(F.a,{icon:I.e}):r.a.createElement(F.a,{icon:I.d}),i="rating"!==this.state.selected||this.state.reverse?r.a.createElement(F.a,{icon:I.e}):r.a.createElement(F.a,{icon:I.d});return r.a.createElement("div",{className:"movie-list"},r.a.createElement("h2",{className:"list-heading"},"List/Match"),r.a.createElement("h3",{className:"movie-title center-align"},r.a.createElement("button",{name:"title",value:"title",onClick:this.sortValue},"Title ",a," ")),r.a.createElement("h3",{className:"center-align"},r.a.createElement("button",{name:"year",value:"year",onClick:this.sortValue},"Year ",n," ")),r.a.createElement("h3",{className:"center-align"},r.a.createElement("button",{name:"rating",value:"rating",onClick:this.sortValue},"Rating ",i," ")),r.a.createElement("div",{className:"empty-search",hidden:t}," Your search found no results"),r.a.createElement("img",{className:"loading",src:T.a,alt:"loading",hidden:!this.props.loading}),r.a.createElement("ul",{className:"movies"},this.props.movies.map((function(t){return r.a.createElement(x,{title:t.title,poster:t.poster,rating:t.ratings.average,year:t.release_date,filmID:t.id,handleView:e.props.handleView,addFav:e.props.addFav,key:t.id})}))))}}]),t}(r.a.Component),U=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={selected:""},a.handleRadioChange=function(e){var t=e.target.value,n={year:-1,yearUpper:""};"BETWEEN"===t?(n.yearUpper=document.querySelector("input[name='yearUpper'].between").value,n.year=document.querySelector("input[name='year'].between").value):n[e.target.nextElementSibling.name]=e.target.nextElementSibling.value,a.props.handleYearChange(n.year,n.yearUpper,"year","yearUpper"),a.setState({selected:t})},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("label",{className:"filter-label"},r.a.createElement("div",{className:"filter-heading"},"Year"),r.a.createElement("label",null,r.a.createElement("input",{className:"radio-input",type:"radio",value:"BEFORE",checked:"BEFORE"===this.state.selected,onChange:this.handleRadioChange}),"Before",r.a.createElement("input",{className:"input",type:"number",name:"yearUpper",disabled:"BEFORE"!==this.state.selected,onChange:this.props.handleChange})),r.a.createElement("label",null,r.a.createElement("input",{className:"radio-input",type:"radio",value:"AFTER",checked:"AFTER"===this.state.selected,onChange:this.handleRadioChange}),"After",r.a.createElement("input",{className:"input",type:"number",name:"year",disabled:"AFTER"!==this.state.selected,onChange:this.props.handleChange})),r.a.createElement("label",null,r.a.createElement("input",{className:"radio-input",type:"radio",value:"BETWEEN",checked:"BETWEEN"===this.state.selected,onChange:this.handleRadioChange}),"Between",r.a.createElement("div",{className:"input"},r.a.createElement("input",{className:"between",type:"number",name:"year",disabled:"BETWEEN"!==this.state.selected,onChange:this.props.handleChange}),r.a.createElement("input",{className:"between",type:"number",name:"yearUpper",disabled:"BETWEEN"!==this.state.selected,onChange:this.props.handleChange}))))}}]),t}(r.a.Component),V=a(24),W=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={selected:"",below:10,above:10,betweenLow:10,betweenHigh:10},a.handleRadioChange=function(e){var t=e.target.value,n={ratingLower:-1,ratingUpper:11};"BETWEEN"===t?(n.ratingUpper=a.state.betweenHigh,n.ratingLower=a.state.betweenLow):n[e.target.nextElementSibling.name]=e.target.nextElementSibling.value,a.props.handleRatingChange(n.ratingLower,n.ratingUpper,"ratingLower","ratingUpper"),a.setState({selected:t})},a.handleRatingsChange=function(e){a.props.handleChange(e);var t=e.currentTarget.value,n="betweenHigh";"BELOW"===a.state.selected?n="below":"ABOVE"===a.state.selected?n="above":"BETWEEN"===a.state.selected&&"ratingLower"===e.currentTarget.name&&(n="betweenLow"),a.setState(Object(V.a)({},n,t))},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("label",{className:"filter-label"},r.a.createElement("div",{className:"filter-heading"},"Rating"),r.a.createElement("label",null,r.a.createElement("input",{className:"radio-input",type:"radio",value:"BELOW",checked:"BELOW"===this.state.selected,onChange:this.handleRadioChange}),"Below",r.a.createElement("input",{className:"input",type:"range",name:"ratingUpper",min:"0",max:"10",onChange:this.handleRatingsChange,disabled:"BELOW"!==this.state.selected})),r.a.createElement("span",null,this.state.below),r.a.createElement("label",null,r.a.createElement("input",{className:"radio-input",type:"radio",value:"ABOVE",checked:"ABOVE"===this.state.selected,onChange:this.handleRadioChange}),"Above",r.a.createElement("input",{className:"input",type:"range",name:"ratingLower",min:"0",max:"10",onChange:this.handleRatingsChange,disabled:"ABOVE"!==this.state.selected})),r.a.createElement("span",null,this.state.above),r.a.createElement("label",null,r.a.createElement("input",{className:"radio-input",type:"radio",value:"BETWEEN",checked:"BETWEEN"===this.state.selected,onChange:this.handleRadioChange}),"Between",r.a.createElement("input",{className:"input",type:"range",name:"ratingLower",min:"0",max:"10",onChange:this.handleRatingsChange,disabled:"BETWEEN"!==this.state.selected}),r.a.createElement("input",{className:"between input",type:"range",name:"ratingUpper",min:"0",max:"10",onChange:this.handleRatingsChange,disabled:"BETWEEN"!==this.state.selected})),r.a.createElement("div",{className:"between"},r.a.createElement("span",null,this.state.betweenLow),r.a.createElement("span",null,this.state.betweenHigh)))}}]),t}(r.a.Component),_=(a(72),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={filterCritiria:{title:"",yearUpper:"",year:"",ratingLower:"",ratingUpper:""},hidden:!1},a.handleSubmit=function(e){e.preventDefault(),console.log(a.state.filterCritiria),a.props.filter(a.state.filterCritiria)},a.hidePanel=function(){var e=!a.state.hidden;a.setState({hidden:e})},a.clearFilters=function(e){a.props.clear()},a.handleChange=function(e){var t=Object(s.a)({},a.state.filterCritiria);t[e.currentTarget.name]=e.currentTarget.value,a.setState({filterCritiria:t})},a.handleRadioButtonChange=function(e,t,n,r){var i=Object(s.a)({},a.state.filterCritiria);i[n]=e,i[r]=t,a.setState({filterCritiria:i})},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.hidden?r.a.createElement(F.a,{icon:I.b}):r.a.createElement(F.a,{icon:I.a});return r.a.createElement("form",{className:"filter",onSubmit:this.handleSubmit},r.a.createElement(S.a,{in:!this.state.hidden,timeout:350,classNames:"hide",unmountOnExit:!0,appear:!0},r.a.createElement("fieldset",{id:"box"},r.a.createElement("legend",null,"Movie Filter"),r.a.createElement("div",{className:"filter-label"},r.a.createElement("label",{className:"filter-heading"},"Title"),r.a.createElement("input",{className:"input",type:"text",name:"title",onChange:this.handleChange})),r.a.createElement(U,{handleChange:this.handleChange,handleYearChange:this.handleRadioButtonChange}),r.a.createElement(W,{handleChange:this.handleChange,handleRatingChange:this.handleRadioButtonChange}),r.a.createElement("button",null,"Filter"),r.a.createElement("button",{className:"clear-btn",type:"button",onClick:this.clearFilters},"Clear"))),r.a.createElement("button",{type:"button",onClick:this.hidePanel},e))}}]),t}(r.a.Component)),J=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).sortMovies=function(e,t){var n=Object(b.a)(a.state.filteredMovies);n.sort(e),t&&n.reverse(),a.setState({filteredMovies:n})},a.clear=function(){var e=a.filterByTitle(a.state.movies,"");e.sort(a.sortTitle),setTimeout((function(){a.setState({filteredMovies:e,loading:!1})}),1e3),a.setState({loading:!0})},a.filter=function(e){var t=a.filterByTitle(a.state.movies,e.title);t=a.filterByYear(t,e.year,e.yearUpper),(t=a.filterByRating(t,e.ratingLower,e.ratingUpper)).sort(a.sortTitle),setTimeout((function(){a.setState({filteredMovies:t,loading:!1})}),1e3),a.setState({loading:!0})},a.filterByTitle=function(e,t){return e.filter((function(e){return-1!==e.title.toLowerCase().indexOf(t.toLowerCase())}))},a.filterByYear=function(e,t,a){if(null!=t&&""!==t||(t=0),null==a||""===a){var n=new Date;a=n.getFullYear()}return e.filter((function(e){var n=e.release_date.split("-"),r=Object(f.a)(n,1)[0];return r>parseInt(t,10)&&r<parseInt(a,10)}))},a.filterByRating=function(e,t,a){return null!=t&&""!==t||(t=-1),null!=a&&""!==a||(a=11),e.filter((function(e){return e.ratings.average>=t&&e.ratings.average<=a}))},a.state={loading:!0,movies:[],filteredMovies:[]},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(d.a.mark((function e(){var t,a,n,r,i,l,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t=this.props.location.search.split("="),a=Object(f.a)(t,2),n=a[1],r=localStorage.getItem("movies"),null!=(i=JSON.parse(r))&&""!=i){e.next=13;break}return"http://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?id=ALL",e.next=8,fetch("http://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?id=ALL");case 8:return l=e.sent,e.next=11,l.json();case 11:i=e.sent,localStorage.setItem("movies",JSON.stringify(i));case 13:(s=this.filterByTitle(i,n)).sort(this.sortTitle),this.setState({loading:!1,movies:i,filteredMovies:s}),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),console.log(e.t0);case 21:case"end":return e.stop()}}),e,this,[[0,18]])})));return function(){return e.apply(this,arguments)}}()},{key:"sortTitle",value:function(e,t){var a=e.title.toUpperCase(),n=t.title.toUpperCase();return a<n?-1:a>n?1:0}},{key:"sortYear",value:function(e,t){var a=e.release_date,n=t.release_date;return a<n?-1:a>n?1:0}},{key:"sortRating",value:function(e,t){var a=e.ratings.average,n=t.ratings.average;return a<n?-1:a>n?1:0}},{key:"render",value:function(){return r.a.createElement("div",{className:"default-view"},r.a.createElement(D,null),r.a.createElement(L,{favorites:this.props.favorites,removeFav:this.props.removeFav,viewFavDetail:this.props.viewFavDetail}),r.a.createElement(_,{filter:this.filter,clear:this.clear}),r.a.createElement(A,{movies:this.state.filteredMovies,handleView:this.props.handleView,loading:this.state.loading,sortTitle:this.sortTitle,sortYear:this.sortYear,sortRating:this.sortRating,sortMovies:this.sortMovies,addFav:this.props.addFav}))}}]),t}(r.a.Component),H=a(17),P=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={search:""},a.handleInput=function(e){var t=a.state.search;t=e.currentTarget.value,a.setState({search:t})},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"home-view",style:{backgroundImage:"url(".concat("https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",")"),height:"100%",backgroundSize:"cover",backgroundPosition:"center center",backgroundRepeat:"no-repeat"}},r.a.createElement("div",{className:"movie-browser"},r.a.createElement("h1",null,"Movie Browser"),r.a.createElement("label",null,"Title"),r.a.createElement("input",{type:"text",onChange:this.handleInput}),r.a.createElement("div",null,r.a.createElement(w.b,{to:"/defaultview?search="},r.a.createElement("button",null,"Show all Movies")),r.a.createElement(w.b,{to:"/defaultview?search=".concat(this.state.search)},r.a.createElement("button",null,"Search Movies")))),r.a.createElement("p",null,"Image Credit to: Denise Jans ",r.a.createElement("a",{href:"https://unsplash.com/@dmjdenise"},"@dmjdenise")," from unsplash"),r.a.createElement("img",{className:"curtain-call",src:"".concat("https://images.unsplash.com/photo-1519035350952-38d18a3848cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80")}))}}]),t}(r.a.Component),Y=a(44),q=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.rating,t=r.a.createElement(F.a,{icon:I.f}),a=r.a.createElement(F.a,{icon:Y.a}),n=r.a.createElement(F.a,{icon:I.g}),i=[],l=e,s=parseInt(l,10),c=l-s;if(c>=.7||c<=.2){s=Math.round(l);for(var o=0;o<10;o++){var m=o<s?t:a;i.push(m)}}else for(var p=0;p<10;p++)if(p===s)i.push(n);else{var h=p<s?t:a;i.push(h)}return r.a.createElement("div",{className:"Star-Rating"},i)}}]),t}(n.Component),G=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.data,t=this.props.title;return r.a.createElement("div",{className:"Stub"},r.a.createElement("h3",null,t),r.a.createElement("ul",null,e.map((function(e){return r.a.createElement("li",{className:"stub-info",key:e.name},e.name)}))))}}]),t}(n.Component),Q=a(27),$=a.n(Q),z=a(45),K=a.n(z),X=(a(39),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).width="w185",a.modalWidth="w500",a.baseURL="https://image.tmdb.org/t/p/",a.posterURL="".concat(a.baseURL).concat(a.width,"/"),a.modalURL="".concat(a.baseURL).concat(a.modalWidth),a.tmdbURL="https://www.themoviedb.org/movie/",a.imdbURL="https://www.imdb.com/title/",a.changeFavorites=function(){var e=a.props.film,t=a.props.favorites,n=a.props.addFav,r=a.props.removeFav;t.find((function(t){return t.id===e.id}))?r(e.id):n(e)},a.posterModal=function(){},a.state={modalIsOpen:!1},a.openModal=a.openModal.bind(Object(y.a)(a)),a.afterOpenModal=a.afterOpenModal.bind(Object(y.a)(a)),a.closeModal=a.closeModal.bind(Object(y.a)(a)),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"openModal",value:function(){this.setState({modalIsOpen:!0})}},{key:"afterOpenModal",value:function(){}},{key:"closeModal",value:function(){this.setState({modalIsOpen:!1})}},{key:"render",value:function(){var e=this.props.film,t=null!==this.props.film.production.companies?this.props.film.production.companies:[{name:"Data Not Available"}],a=null!==this.props.film.production.countries?this.props.film.production.countries:[{name:"Data Not Available"}],n=null!==this.props.film.details.keywords?this.props.film.details.keywords:[{name:"Data Not Available"}],i=null!==this.props.film.details.genres?this.props.film.details.genres:[{name:"Data Not Available"}],l=e.revenue;return l/=1e6,l=Number.parseFloat(l).toPrecision(5),r.a.createElement("div",{className:"Film-Detail"},r.a.createElement("div",{className:"Title-Card"},r.a.createElement("h2",{name:"title"},e.title),r.a.createElement("img",{src:"".concat(this.posterURL).concat(e.poster),alt:e.title,onClick:this.openModal}),r.a.createElement("p",null,e.tagline),r.a.createElement("button",{className:"favorites-button",onClick:this.changeFavorites},"\u2764")),r.a.createElement("div",{className:"Film-Data-Card"},r.a.createElement("div",{className:"Overview-Stub"},r.a.createElement("h3",null,"Overview"),r.a.createElement("p",null,e.details.overview)),r.a.createElement("div",{className:"Release-Stub"},r.a.createElement("h5",null,"Release Date:"),r.a.createElement("p",null,e.release_date),r.a.createElement("h5",null,"Revenue"),r.a.createElement("p",null,"$",l," Million"),r.a.createElement("h5",null,"Rating"),r.a.createElement(q,{rating:e.ratings.average}),r.a.createElement("h5",null,"Links"),r.a.createElement("p",null,r.a.createElement("a",{href:"".concat(this.tmdbURL).concat(e.tmdb_id)},r.a.createElement("img",{className:"t-svg",src:K.a,alt:"tmdbLink"})),r.a.createElement("a",{href:"".concat(this.imdbURL).concat(e.imdb_id)},r.a.createElement("img",{className:"i-svg",src:$.a,alt:"imdbLink"})))),r.a.createElement(G,{title:"Companies",data:t}),r.a.createElement(G,{title:"Countries",data:a}),r.a.createElement(G,{title:"Keywords",data:n}),r.a.createElement(G,{title:"Genres",data:i}),r.a.createElement(j.a,{isOpen:this.state.modalIsOpen,onAfterOpen:this.state.afterOpenModal,onRequestClose:this.state.closeModal,ariaHideApp:!1,className:"modal-lightbox",contentLabel:"Poster Lightbox"},r.a.createElement("div",null,r.a.createElement("button",{onClick:this.closeModal},"\ud83d\udd19")),r.a.createElement("img",{src:"".concat(this.modalURL).concat(e.poster),alt:"".concat(e.title,"lightbox")}))))}}]),t}(n.Component)),Z=(a(73),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).width="w185",a.posterURL="https://image.tmdb.org/t/p/".concat(a.width),a.viewFilm=function(){a.props.viewFilm()},a.state={},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Person-Detail"},r.a.createElement("h2",{className:"nameHead"},"Name"),r.a.createElement("h3",{className:"name"},this.props.name),r.a.createElement("img",{src:"".concat(this.posterURL).concat(this.props.image),alt:this.props.name}),r.a.createElement("h5",{className:"birthHead"},"Birthday"),r.a.createElement("p",{className:"birth"},this.props.birthday),r.a.createElement("h5",{className:"placeHead"},"Place of Birth"),r.a.createElement("p",{className:"place"},this.props.place_of_birth),r.a.createElement("h5",{className:"bioHead"},"Biography"),r.a.createElement("p",{className:"bio"},this.props.biography),r.a.createElement("a",{className:"actorLink",href:"https://www.imdb.com/name/".concat(this.props.imdb_id)},r.a.createElement("img",{src:$.a,alt:"actor_imdb"}),"  "),r.a.createElement("button",{className:"Path-Button",onClick:this.viewFilm},"Return to Film \ud83c\udf9e"))}}]),t}(n.Component)),ee=(a(40),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).viewCredit=function(){a.props.viewCredit(a.props.id)},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Cast-Item"},r.a.createElement("div",{className:"Character-Name"},this.props.character," \xa0"),r.a.createElement("div",{className:"Credit-Name"},this.props.name),r.a.createElement("button",{className:"Credit-button",onClick:this.viewCredit},"View\ud83d\udd2d"))}}]),t}(n.Component)),te=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Crew-Item"},r.a.createElement("p",{className:"Department-Item"},this.props.department," \xa0"),r.a.createElement("p",{className:"Job-Item"},this.props.job," \xa0"),r.a.createElement("p",{className:"Crew-Name-Item"},this.props.name))}}]),t}(n.Component),ae=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).switchView=function(){a.state.viewIsCast?a.setState({viewIsCast:!1}):a.setState({viewIsCast:!0})},a.state={viewIsCast:!0},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;if(1==this.state.viewIsCast&&null!==this.props.castList){var t=this.props.castList.sort((function(e,t){return e.order<t.order?-1:1}));return r.a.createElement("div",{className:"Cast-List"},r.a.createElement("button",{className:"list-view",onClick:this.switchView},"View Crew"),r.a.createElement("h2",{className:"list-title"},"Cast"),r.a.createElement("div",{className:"Person-List"},r.a.createElement("div",{className:"cast-titles"},r.a.createElement("h3",{className:"t1"},"Character"),r.a.createElement("h3",{className:"t2"},"Actor")),t.map((function(t,a){return r.a.createElement(ee,{character:t.character,name:t.name,id:t.id,viewCredit:e.props.viewCredit,key:a,index:a})}))))}var a=this.props.crewList.sort((function(e,t){return e.department<t.department?-1:1}));return a=a.sort((function(e,t){return e.department===t.department&&e.name<t.name?-1:1})),r.a.createElement("div",{className:"Crew-List"},r.a.createElement("button",{onClick:this.switchView},"View Cast"),r.a.createElement("h2",{className:"list-title"},"Crew"),r.a.createElement("div",{className:"Person-List"},r.a.createElement("div",{className:"crew-Titles"},r.a.createElement("h3",{className:"t1"},"Department"),r.a.createElement("h3",{className:"t2"},"Role"),r.a.createElement("h3",{className:"t3"},"Name")),a.map((function(e,t){return r.a.createElement(te,{department:e.department,job:e.job,name:e.name,key:t,index:t})}))))}}]),t}(n.Component),ne=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).viewCredit=function(e){e!==a.state.castID&&a.setState({loading:!0,castID:e,filmView:!1})},a.viewFilm=function(){a.setState({loading:!0,filmView:!0})},a.state={film:{},castMember:{},castID:"",loading:!0,filmView:!0},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(d.a.mark((function e(){var t,a,n,r,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem("filmID"),null!==(a=JSON.parse(t))&&""!==a||localStorage.setItem("filmID",JSON.stringify(this.props.filmID)),""!==this.props.filmID&&this.props.filmID!==a&&(localStorage.setItem("filmID",JSON.stringify(this.props.filmID)),a=this.props.filmID),n="http://www.randyconnolly.com/funwebdev/3rd/api/movie/movies.php?id=".concat(a),e.next=8,fetch("".concat(n));case 8:return r=e.sent,e.next=11,r.json();case 11:i=e.sent,this.setState({film:Object(s.a)({},i),loading:!1}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0);case 18:case"end":return e.stop()}}),e,this,[[0,15]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(v.a)(d.a.mark((function e(t,a){var n,r,i,l,c,o,m,p;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("CDU on fave click"),console.log("prevprops ".concat(t)),console.log("current rops ".concat(this.props)),a.castID==this.state.castID){e.next=20;break}return e.prev=4,n="https://api.themoviedb.org/3/person/".concat(this.state.castID,"?api_key=27e7355f9cd5bf46ffa2ad7726d3c494"),e.next=8,fetch(n);case 8:return r=e.sent,e.next=11,r.json();case 11:i=e.sent,this.setState({castMember:Object(s.a)({},i),loading:!1,filmView:!1}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(4),console.log(e.t0);case 18:e.next=43;break;case 20:if(a.filmView==this.state.filmView&&a.film==this.state.film){e.next=24;break}this.setState({loading:!1}),e.next=43;break;case 24:if(t.filmID===this.props.filmID){e.next=43;break}return e.prev=25,l=localStorage.getItem("filmID"),null!==(c=JSON.parse(l))&&""!==c||localStorage.setItem("filmID",JSON.stringify(this.props.filmID)),""!==this.props.filmID&&this.props.filmID!==c&&(localStorage.setItem("filmID",JSON.stringify(this.props.filmID)),c=this.props.filmID),o="http://www.randyconnolly.com/funwebdev/3rd/api/movie/movies.php?id=".concat(c),e.next=33,fetch("".concat(o));case 33:return m=e.sent,e.next=36,m.json();case 36:p=e.sent,this.setState({film:Object(s.a)({},p),loading:!1}),e.next=43;break;case 40:e.prev=40,e.t1=e.catch(25),console.log(e.t1);case 43:case"end":return e.stop()}}),e,this,[[4,15],[25,40]])})));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.loading?r.a.createElement("img",{className:"loading",src:T.a,alt:"loading"}):this.state.filmView?r.a.createElement("div",{className:"Detail-View"},r.a.createElement(D,null),r.a.createElement(L,{favorites:this.props.favorites,removeFav:this.props.removeFav,viewFavDetail:this.props.viewFavDetail}),r.a.createElement("div",{className:"return-holder"},r.a.createElement(w.b,{to:"defaultview?search="},r.a.createElement("button",null,"Return \ud83d\udd19"))),r.a.createElement(X,{film:this.state.film,favorites:this.props.favorites,addFav:this.props.addFav,removeFav:this.props.removeFav}),r.a.createElement(ae,{castList:this.state.film.production.cast,crewList:this.state.film.production.crew,viewCredit:this.viewCredit})):r.a.createElement("div",{className:"Detail-View"},r.a.createElement(D,null),r.a.createElement(L,{favorites:this.props.favorites,removeFav:this.props.removeFav,viewFavDetail:this.props.viewFavDetail}),r.a.createElement(Z,{name:this.state.castMember.name,image:this.state.castMember.profile_path,imdb_id:this.state.castMember.imdb_id,birthday:this.state.castMember.birthday,biography:this.state.castMember.biography,place_of_birth:this.state.castMember.place_of_birth,viewFilm:this.viewFilm}),r.a.createElement(ae,{castList:this.state.film.production.cast,crewList:this.state.film.production.crew,viewCredit:this.viewCredit}))}}]),t}(n.Component);a(74).config();var re=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).viewMovie=function(e){a.setState(Object(s.a)({},a.state,{viewFilmID:[e]}))},a.addToFavorites=function(e){var t=a.state.favorites;t.find((function(t){return t.id===e.id}))||(t.push({poster:e.poster,id:e.id,title:e.title}),a.setState({favorites:t}))},a.removeFromFavorites=function(e){var t=a.state.favorites;t=t.filter((function(t){return t.id!=e})),a.setState({favorites:t})},a.state={favorites:[],viewFilmID:""},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("main",null,r.a.createElement(H.a,{path:"/",key:"/",exact:!0},(function(e){var t=e.match;return r.a.createElement(S.a,{in:null!=t,timeout:750,classNames:"home-page",unmountOnExit:!0},r.a.createElement(P,null))})),r.a.createElement(H.a,{path:"/defaultview",exact:!0,render:function(t){return r.a.createElement(J,Object.assign({},t,{favorites:e.state.favorites,handleView:e.viewMovie,addFav:e.addToFavorites,removeFav:e.removeFromFavorites,viewFavDetail:e.viewMovie}))}}),r.a.createElement(H.a,{path:"/filminfo",exact:!0,render:function(t){return r.a.createElement(ne,{favorites:e.state.favorites,addFav:e.addToFavorites,removeFav:e.removeFromFavorites,filmID:e.state.viewFilmID,viewFavDetail:e.viewMovie})}}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(w.a,null," ",r.a.createElement(re,null)," "),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[48,1,2]]]);
//# sourceMappingURL=main.3d556f30.chunk.js.map