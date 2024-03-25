var t=require("../../@babel/runtime/helpers/typeof");(wx.webpackJsonp=wx.webpackJsonp||[]).push([[433],{5915:function(t,e,n){var r=n(5230),i=n(4217),s=n(9868),a=n(6194),u=n.n(a),o=n(959),c=n(5382),l=n(4814),d=n(3557),f=n(5279),h=n(2506),m=n(6830),_=n(4556),$=n(457),p=n(4618),v=n(5250),y=n(5726),g=n.n(y),M=n(7773),D=n.n(M);function Y(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-";return t?g()(t).calendar(null,{sameDay:"HH:mm",lastDay:"[昨天]",lastWeek:"dddd",sameElse:"MM月DD日"}):e}n(3440),g().locale("zh-cn"),g().extend(D());var S=n(6958),w="index-module__item___T5Ff4",x=n(1527),k=(0,o.memo)((function(t){var e=t.data,n=t.onClick,r=(0,o.useMemo)((function(){var t,n=[],r=[];return null==e||null===(t=e.attachments)||void 0===t||t.forEach((function(t){"file"===t.type&&r.push(t),"url"===t.type&&"parsed"===t.status&&n.push(t)})),[n,r]}),[null==e?void 0:e.attachments]);return(0,x.jsxs)(d.E,{column:!0,margin:!0,padding:!0,rounded:!0,gap:"md",style:{marginTop:0},className:"".concat(w," press"),onClick:n,children:[(0,x.jsxs)(d.E,{full:!0,gap:!0,center:"y",children:[(0,x.jsx)(f.G,{bold:!0,children:"📑"}),(0,x.jsx)(f.G,{bold:!0,full:!0,ellipsis:!0,children:null==e?void 0:e.name}),(0,x.jsx)(f.G,{mode:"tips",children:Y(null==e?void 0:e.created_at)})]}),null==r?void 0:r.map((function(t,e){return null!=t&&t.length?(0,x.jsx)(d.E,{wrap:!0,gap:!0,children:t.map((function(t){return(0,x.jsx)(S.U,{data:t},t.id)}))},e):null}))]})})),b="list-module__title___vb3Op";function L(){(0,h.r)({name:"ChatList"}),(0,a.useShareTimeline)((function(){return $.$O.onShareTimeline("ChatList")})),(0,a.useShareAppMessage)((function(){return $.$O.onShareAppMessage("ChatList")})),(0,o.useEffect)((function(){return u().showLoading({title:"正在加载"}),m.H3.load().finally((function(){return u().hideLoading()})),function(){return m.H3.resetState()}}),[]);var t=m.H3.useState(),e=(0,o.useMemo)((function(){var e={},n={};return t.items.forEach((function(t){null!=n&&n[null==t?void 0:t.time_tag]||null!=t&&t.time_tag&&(e[t.id]=t.time_tag,n[t.time_tag]=t.id)})),e}),[t.items]),n=function(){var t=(0,s.Z)((0,i.Z)().mark((function t(e){var n,r,s;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return p.UO.click({msh_page_name:"ChatList",msh_element_id:"open_history_conversation_btn",msh_conversation_id:e.id}),u().showLoading({title:"正在加载"}),t.next=4,m.wf.selectChat(e.id);case 4:r=t.sent,u().hideLoading(),v.G.goBack(),null!=(s=null==r||null===(n=r[1])||void 0===n?void 0:n.latest)&&s.need_continue&&(_.Y.closeSocket(),_.Y.sendMessage({action:"continue",chat_id:e.id,segment_id:s.id}));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return(0,x.jsxs)(d.E,{full:!0,hidden:!0,column:!0,children:[(0,x.jsx)(c.h,{title:"历史会话",onBack:v.G.goBack}),(0,x.jsx)(l.R,{safe:!0,store:t,refresherEnabled:!0,empty:"暂无历史会话",onRefresherRefresh:function(){return m.H3.load({offset:0})},onScrollToLower:m.H3.loadmore,renderItem:function(t){var r=t.item,i=e[r.id];return(0,x.jsxs)(x.Fragment,{children:[i&&(0,x.jsx)(d.E,{padding:!0,className:b,children:(0,x.jsx)(f.G,{mode:"title",children:i})}),(0,x.jsx)(k,{data:r,onClick:function(){return n(r)}})]})}})]})}L.enableShareTimeline=!0,L.enableShareAppMessage=!0,Page((0,r.createPageConfig)(L,"pages/chat/list",{root:{cn:[]}},{disableScroll:!0}||{}))},5726:function(e){e.exports=function(){var e=6e4,n=36e5,r="millisecond",i="second",s="minute",a="hour",u="day",o="week",c="month",l="quarter",d="year",f="date",h="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,_=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,$={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},p=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:p,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+p(r,2,"0")+":"+p(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,a=e.clone().add(r+(s?-1:1),c);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:d,w:o,d:u,D:f,h:a,m:s,s:i,ms:r,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",g={};g[y]=$;var M="$isDayjsObject",D=function(t){return t instanceof x||!(!t||!t[M])},Y=function t(e,n,r){var i;if(!e)return y;if("string"==typeof e){var s=e.toLowerCase();g[s]&&(i=s),n&&(g[s]=n,i=s);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var u=e.name;g[u]=e,i=u}return!r&&i&&(y=i),i||!r&&y},S=function(e,n){if(D(e))return e.clone();var r="object"==t(n)?n:{};return r.date=e,r.args=arguments,new x(r)},w=v;w.l=Y,w.i=D,w.w=function(t,e){return S(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var x=function(){function t(t){this.$L=Y(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[M]=!0}var $=t.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(m);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return w},$.isValid=function(){return!(this.$d.toString()===h)},$.isSame=function(t,e){var n=S(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return S(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<S(t)},$.$g=function(t,e,n){return w.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,e){var n=this,r=!!w.u(e)||e,l=w.p(t),h=function(t,e){var i=w.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(u)},m=function(t,e){return w.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},_=this.$W,$=this.$M,p=this.$D,v="set"+(this.$u?"UTC":"");switch(l){case d:return r?h(1,0):h(31,11);case c:return r?h(1,$):h(0,$+1);case o:var y=this.$locale().weekStart||0,g=(_<y?_+7:_)-y;return h(r?p-g:p+(6-g),$);case u:case f:return m(v+"Hours",0);case a:return m(v+"Minutes",1);case s:return m(v+"Seconds",2);case i:return m(v+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(t,e){var n,o=w.p(t),l="set"+(this.$u?"UTC":""),h=(n={},n[u]=l+"Date",n[f]=l+"Date",n[c]=l+"Month",n[d]=l+"FullYear",n[a]=l+"Hours",n[s]=l+"Minutes",n[i]=l+"Seconds",n[r]=l+"Milliseconds",n)[o],m=o===u?this.$D+(e-this.$W):e;if(o===c||o===d){var _=this.clone().set(f,1);_.$d[h](m),_.init(),this.$d=_.set(f,Math.min(this.$D,_.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[w.p(t)]()},$.add=function(t,r){var l,f=this;t=Number(t);var h=w.p(r),m=function(e){var n=S(f);return w.w(n.date(n.date()+Math.round(e*t)),f)};if(h===c)return this.set(c,this.$M+t);if(h===d)return this.set(d,this.$y+t);if(h===u)return m(1);if(h===o)return m(7);var _=(l={},l[s]=e,l[a]=n,l[i]=1e3,l)[h]||1,$=this.$d.getTime()+t*_;return w.w($,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=w.z(this),s=this.$H,a=this.$m,u=this.$M,o=n.weekdays,c=n.months,l=n.meridiem,d=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},f=function(t){return w.s(s%12||12,t,"0")},m=l||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(_,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return w.s(e.$y,4,"0");case"M":return u+1;case"MM":return w.s(u+1,2,"0");case"MMM":return d(n.monthsShort,u,c,3);case"MMMM":return d(c,u);case"D":return e.$D;case"DD":return w.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return d(n.weekdaysMin,e.$W,o,2);case"ddd":return d(n.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(s);case"HH":return w.s(s,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return m(s,a,!0);case"A":return m(s,a,!1);case"m":return String(a);case"mm":return w.s(a,2,"0");case"s":return String(e.$s);case"ss":return w.s(e.$s,2,"0");case"SSS":return w.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(t,r,f){var h,m=this,_=w.p(r),$=S(t),p=($.utcOffset()-this.utcOffset())*e,v=this-$,y=function(){return w.m(m,$)};switch(_){case d:h=y()/12;break;case c:h=y();break;case l:h=y()/3;break;case o:h=(v-p)/6048e5;break;case u:h=(v-p)/864e5;break;case a:h=v/n;break;case s:h=v/e;break;case i:h=v/1e3;break;default:h=v}return f?h:w.a(h)},$.daysInMonth=function(){return this.endOf(c).$D},$.$locale=function(){return g[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=Y(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return w.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},t}(),k=x.prototype;return S.prototype=k,[["$ms",r],["$s",i],["$m",s],["$H",a],["$W",u],["$M",c],["$y",d],["$D",f]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),S.extend=function(t,e){return t.$i||(t(e,x,S),t.$i=!0),S},S.locale=Y,S.isDayjs=D,S.unix=function(t){return S(1e3*t)},S.en=g[y],S.Ls=g,S.p={},S}()},3440:function(e,n,r){e.exports=function(e){var n=function(e){return e&&"object"==t(e)&&"default"in e?e:{default:e}}(e),r={name:"zh-cn",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(t,e){return"W"===e?t+"周":t+"日"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(t,e){var n=100*t+e;return n<600?"凌晨":n<900?"早上":n<1100?"上午":n<1300?"中午":n<1800?"下午":"晚上"}};return n.default.locale(r,null,!0),r}(r(5726))},7773:function(t){t.exports=function(t,e,n){var r="h:mm A",i={lastDay:"[Yesterday at] "+r,sameDay:"[Today at] "+r,nextDay:"[Tomorrow at] "+r,nextWeek:"dddd [at] "+r,lastWeek:"[Last] dddd [at] "+r,sameElse:"MM/DD/YYYY"};e.prototype.calendar=function(t,e){var r=e||this.$locale().calendar||i,s=n(t||void 0).startOf("d"),a=this.diff(s,"d",!0),u="sameElse",o=a<-6?u:a<-1?"lastWeek":a<0?"lastDay":a<1?"sameDay":a<2?"nextDay":a<7?"nextWeek":u,c=r[o]||i[o];return"function"==typeof c?c.call(this,n()):this.format(c)}}}},function(t){t.O(0,[107,216,592],(function(){return e=5915,t(t.s=e);var e})),t.O()}]);