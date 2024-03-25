require("../../@babel/runtime/helpers/Arrayincludes"),(wx.webpackJsonp=wx.webpackJsonp||[]).push([[248],{8399:function(e,t,n){var r=n(5230),a=n(6517),o=n(6194),i=n.n(o),s=n(959),c=n(5382),l=n(3557),u=n(2506),d=n(6830),f=n(4217),h=n(9868),p=n(7749),_=n(6834),m=["md","pdf","txt","csv"].concat(["doc","docx","xls","xlsx","ppt","pptx"],["jpg","jpeg","png","bmp","gif","webp"]),v=n(1314),x=n(9389),g=n(3735),S=(0,v.Q)({state:{uploadFiles:[],allowUploadIds:[]},actions:function(e){var t=e.getState,n=e.setState;return{getUploadedFiles:function(){return t().uploadFiles.filter((function(e){return!e.TEMP}))},updateAllowUploadIds:function(){var e=t().uploadFiles.filter((function(e){return e.TEMP})).slice(0,1);n({allowUploadIds:e.map((function(e){return e.id}))})},checkFile:function(e){return!(!e||(e.size/1024/1024>100?(g.A.show("单个文件大小不能超过 ".concat(100," MB")),1):!m.some((function(t){return e.name.toLowerCase().endsWith(".".concat(t))}))&&(g.A.show("暂不支持该文件格式"),1)))},openMaterials:function(e){n((function(t){var n;(n=t.uploadFiles).push.apply(n,(0,p.Z)(e.filter(S.checkFile).map((function(e){return(0,a.Z)((0,a.Z)({},e),{},{id:e.path,TEMP:e})}))))})),S.updateAllowUploadIds()},chooseFile:function(){return(0,h.Z)((0,f.Z)().mark((function e(){var r,o,s,c,l;return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t(),o=r.uploadFiles,!((s=50-o.length)<=0)){e.next=5;break}return g.A.show("最多支持 ".concat(50," 个文件")),e.abrupt("return");case 5:return e.next=7,i().chooseMessageFile({count:s,type:"file",extension:m}).catch((function(){return{tempFiles:[]}}));case 7:if(c=e.sent,null!=(l=c.tempFiles)&&l.length){e.next=11;break}return e.abrupt("return");case 11:n((function(e){var t;(t=e.uploadFiles).push.apply(t,(0,p.Z)(l.filter(S.checkFile).map((function(e){return(0,a.Z)((0,a.Z)({},e),{},{id:e.path,TEMP:e})}))))})),S.updateAllowUploadIds();case 13:case"end":return e.stop()}}),e)})))()},fileParse:function(e){return(0,h.Z)((0,f.Z)().mark((function t(){var n;return(0,f.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.h.file.fileParse({ids:e});case 2:return n=t.sent,t.abrupt("return",(0,x.g)(n));case 4:case"end":return t.stop()}}),t)})))()},updateFile:function(e,t){return n((function(n){var r=n.uploadFiles.findIndex((function(t){return t.id===e}));n.uploadFiles[r]&&(n.uploadFiles[r]=t)})),S.updateAllowUploadIds(),S.getUploadedFiles()},removeFile:function(e){return n((function(t){t.uploadFiles=t.uploadFiles.filter((function(t){return t.id!==e}))})),S.updateAllowUploadIds(),S.getUploadedFiles()}}}}),j=n(9920),w=(0,v.Q)({state:{focus:!1,content:"",placeholder:"有什么问题尽管问我",tokenOverTips:""},actions:function(e){var t=e.getState,n=e.setState;return{focusInput:function(e){n({focus:e})},updateContent:function(e){n({content:e})},updatePlaceholder:function(e){n({placeholder:e})},clearTokenOverSize:function(){n({tokenOverTips:""})},checkTokenOverSize:function(e){return(0,h.Z)((0,f.Z)().mark((function r(){var a,o,i,s,c,l,u,h,p;return(0,f.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=t(),o=a.content,i=d.wf.getState(),s=i.chatId,c=s||"0",r.next=5,_.h.chat.checkTokenSize({chat_id:c,content:o,refs:e});case 5:return l=r.sent,u=l.over_size,h=void 0===u?0:u,p=Math.trunc(100*h),n({tokenOverTips:0===p?"":"内容已超过对话长度 ".concat(p,"%，请删减部分文件后发送")}),r.abrupt("return",p);case 11:case"end":return r.stop()}}),r)})))()}}}}),k=n(4556),C=n(4618),b=n(7765),E=(0,v.Q)({state:{socket:void 0,recorder:void 0,access:!0,recording:!1,message:""},actions:function(e){var t=e.getState,n=e.setState;return{appendContent:function(){var e=t().message,n=w.getState().content;w.updateContent(n+e)},stop:function(){i().hideLoading();var e=t(),n=e.recorder,r=e.socket;null==n||n.stop(),null==r||r.close({code:1e3}),E.appendContent(),E.resetState()},start:function(){return(0,h.Z)((0,f.Z)().mark((function e(){var r,a,o,s;return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t().socket){e.next=3;break}return e.abrupt("return");case 3:return r=Date.now().toString(),i().showLoading({title:"正在连接"}),a=b.d.getASRSocketUrl(r),e.next=8,i().connectSocket({url:a});case 8:o=e.sent,s={event:"initialize",config:{format:"mp3",engine:"tencent"}},o.onClose((function(){return E.stop()})),o.onError((function(e){console.error("socket on error",a,e),g.A.show("语音连接失败"),E.stop()})),o.onOpen((function(){i().hideLoading(),i().vibrateShort().catch((function(){})),o.send({data:JSON.stringify(s)});var e=i().getRecorderManager();e.onStart((function(){return n({recording:!0})})),e.onStop((function(){return n({recording:!1})})),e.onInterruptionBegin((function(){return n({recording:!1})})),e.start({duration:6e5,format:"mp3",frameSize:.2,numberOfChannels:1,sampleRate:16e3}),e.onError((function(){E.stop(),C.UO.auth.privacy("msh_auth_microphone",!1),g.A.show("使用语言对话功能，需要在设置中打开麦克风使用权限")})),e.onFrameRecorded((function(e){o.readyState===o.OPEN&&o.send({data:e.frameBuffer})})),n({socket:o,recorder:e})})),o.onMessage((function(e){var t,r=(0,x.g)(e.data);if(r)if("auth"!==(null==r?void 0:r.event)||null!=r&&r.status){var o=null!==(t=null==r?void 0:r.text)&&void 0!==t?t:"";switch(null==r?void 0:r.event){case"RecognitionStart":case"SentenceBegin":break;case"SentenceEnd":E.appendContent(),n({message:""});break;case"SentenceChange":n({message:o});break;case"Error":console.error("socket message error",a,r),E.stop(),g.A.show("语音转写失败")}}else b.d.refreshToken().then(E.start)}));case 14:case"end":return e.stop()}}),e)})))()}}}}),y=n(4562),T=(0,v.Q)({state:{params:void 0,chatting:!1,timer:void 0},actions:function(e){var t=e.getState,n=e.setState;return{init:function(e){var t,r,a,o,i={};try{i=JSON.parse(decodeURIComponent(JSON.stringify(e)))}catch(e){i={}}var s={user_MBTI:null===(t=i)||void 0===t?void 0:t.user_MBTI,user_dragon:null===(r=i)||void 0===r?void 0:r.user_dragon,user_wishes:null===(a=i)||void 0===a||null===(a=a.user_wishes)||void 0===a?void 0:a.split(","),file_info:{final_share_image:null===(o=i)||void 0===o?void 0:o.final_share_image}};n({params:s}),j.C.verify(T.createChat,!0)},createChat:function(){return(0,h.Z)((0,f.Z)().mark((function e(){var n,r,a,o,i,s,c,l,u,h,p,m;return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t(),a=r.params,e.next=3,_.h.chat.dragonCreateChat(a);case 3:return o=e.sent,i=o.chat_id,d.wf.setChatId(i),e.next=8,d.wf.loadChat(i);case 8:if(null==(s=e.sent)||null===(n=s.events_2024_dragon_info)||void 0===n||!n.first_tututu_finished){e.next=12;break}return d.wf.selectChat(i),e.abrupt("return");case 12:return e.next=14,_.h.chat.listChatSegments(i,{last:100});case 14:if(c=e.sent,l=c.items,u=void 0===l?[]:l,h=(0,y.Z)(u,2),p=h[0],m=h[1],p&&m){e.next=20;break}return e.abrupt("return");case 20:d.wf.appendChatSegment(i,p),d.wf.appendChatSegment(i,{id:m.id,role:"assistant",group_id:m.group_id}),T.startTextStream(i,m);case 23:case"end":return e.stop()}}),e)})))()},stopTextStream:function(){clearInterval(t().timer),T.resetState()},startTextStream:function(e,t){T.stopTextStream();var r=1;n({chatting:!0,timer:setInterval((function(){var n,a,o=null==t||null===(n=t.content)||void 0===n?void 0:n.slice(0,r);r+=1,d.wf.updateChatSegment(e,null==t?void 0:t.id,(function(e){e.canceled||(e.content=o)})),(null==o?void 0:o.length)===(null==t||null===(a=t.content)||void 0===a?void 0:a.length)&&(_.h.chat.dragonUpdateChat(e),T.stopTextStream(),d.wf.updateChatSegment(e,null==t?void 0:t.id,t))}),50)})}}}}),F=n(205),I=n(457),N=n(9306),M=n(427),Z=n(5279),O=n(5250),U="index-module__history___y1y3U",A="index-module__text___TBvLo",P="index-module__cancel___SLib_",G=n(1527);function z(){return F.F.useState((function(e){return e.multiple}))?(0,G.jsx)(l.E,{className:P,onClick:function(){var e=d.wf.getState().chatId;C.UO.click({msh_page_name:"Chat",msh_element_id:"btn_share_message_cancel_share",msh_conversation_id:e}),w.focusInput(!1),F.F.toggleMultiple()},children:(0,G.jsx)(Z.G,{className:A,children:"取消"})}):(0,G.jsxs)(l.E,{center:!0,rounded:!0,gap:"xs",className:"".concat(U," press"),onClick:function(){var e=d.wf.getState().chatId;C.UO.click({msh_page_name:"Chat",msh_element_id:"open_history_conversation_list_btn",msh_conversation_id:e}),j.C.verify((function(){O.G.toChatList()}))},children:[(0,G.jsx)(M.b,{src:N.m8,style:{width:24,height:24}}),(0,G.jsx)(Z.G,{className:A,children:"历史"})]})}var D=n(7524),B="index-module__area___CAkBT",L="index-module__float___x5vsz",Y="index-module__button___pvaue",R="index-module__tips___WZL9r",H=[{image:N.Ab,backgroundColor:"#2767E4",onClick:function(){var e=(0,h.Z)((0,f.Z)().mark((function e(){var t,n,r,a,o,i;return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=d.wf.getState(),a=r.chatId,o=r.segmentMap,C.UO.click({msh_page_name:"Chat",msh_element_id:"create_new_conversation_btn",msh_conversation_id:a}),!(i=(null!==(t=null===(n=o[a])||void 0===n?void 0:n.total)&&void 0!==t?t:0)>1)){e.next=6;break}return e.next=6,d.wf.createChat();case 6:g.A.show(i?"已开启新对话":"已切最新对话");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}];function J(){var e=b.d.useState((function(e){return e.visited})),t=F.F.useState((function(e){return e.multiple})),n=e?50:80;return(0,G.jsx)(D.ub,{className:B,style:{width:n},children:!t&&(0,G.jsx)(G.Fragment,{children:H.map((function(t,r){return(0,G.jsxs)(D.Gt,{direction:"vertical",y:60*r+300,className:L,style:{width:n},onClick:t.onClick,children:[(0,G.jsx)(l.E,{center:!0,className:Y,style:{backgroundColor:t.backgroundColor},children:(0,G.jsx)(M.b,{src:t.image,style:{width:20,height:20}})}),!e&&(0,G.jsx)(Z.G,{className:R,children:"新建会话"})]},t.backgroundColor)}))})})}var X=n(7543);function W(){return(0,G.jsxs)(l.E,{padding:!0,column:!0,gap:!0,children:[(0,G.jsx)(Z.G,{center:!0,mode:"tips",children:"会话已停止，在新会话中换个话题吧"}),(0,G.jsx)(X.e,{type:"primary",onClick:function(){return d.wf.createChat()},children:(0,G.jsx)(Z.G,{children:"开启新对话"})}),(0,G.jsx)(l.E,{safe:!0})]})}var Q=n(7451),q=n(9490);function K(){return{send:function(){C.UO.click({msh_page_name:"Chat",msh_element_id:"send_query_message_to_kimi_btn",msh_conversation_id:d.wf.getState().chatId}),j.C.verify((0,h.Z)((0,f.Z)().mark((function e(){var t,n,r,a,o,i,s,c,l,u,h,p;return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=S.getState(),r=n.uploadFiles,a=d.wf.getState(),o=a.chatId,i=a.chatMap,s=w.getState(),c=s.content,l=s.tokenOverTips,u=s.placeholder,!k.Y.getState().chatting&&!T.getState().chatting){e.next=5;break}return e.abrupt("return");case 5:if(!l){e.next=8;break}return g.A.show("内容长度已超过 20 万字"),e.abrupt("return");case 8:if(h=r.filter((function(e){return!e.TEMP})),0!==c.trim().length||0!==h.length){e.next=12;break}return g.A.show("请输入内容"),e.abrupt("return");case 12:if(r.length===h.length){e.next=15;break}return g.A.show("请等待文件上传并解析完成后，再发送"),e.abrupt("return");case 15:if(null===(t=i[o])||void 0===t){e.next=19;break}e.t0=t,e.next=22;break;case 19:return e.next=21,d.wf.createChat();case 21:e.t0=e.sent;case 22:p=e.t0,d.wf.appendChatFiles(p.id,h),E.stop(),S.resetState(),w.updateContent(""),k.Y.sendMessage({action:"consult",chat_id:p.id,content:(0,q.LM)(c||u),refs:h.map((function(e){return e.id}))});case 28:case"end":return e.stop()}}),e)}))))}}}var V="index-module__icon___POTD0";function $(e){var t=e.onSendBefore,n=K(),r=k.Y.useState((function(e){return e.loading})),a=k.Y.useState((function(e){return e.chatting})),o="".concat(V," press");return r?(0,G.jsx)(l.E,{center:!0,className:o,children:(0,G.jsx)(Q.g,{})}):(0,G.jsx)(M.b,{className:o,src:a?N.sT:N.lW,onClick:a?function(){C.UO.click({msh_page_name:"Chat",msh_element_id:"interrupt_model_reply_btn",msh_conversation_id:d.wf.getState().chatId}),k.Y.stream.stop()}:function(){null==t||t(),n.send()}})}var ee=n(506),te="index-module__container___Mg2o4",ne="index-module__scroll___xUGz_",re="index-module__content___j79iV",ae="index-module__icon___DyKVR",oe="index-module__voice___ood1C",ie="index-module__btn___O0DD2",se="index-module__wave___cGNZE",ce="index-module__spread___Mk5pM";function le(){var e=w.useState((function(e){return e.content})),t=w.useState((function(e){return e.placeholder})),n=E.useState((function(e){return e.message})),r=E.useState((function(e){return e.recording})),a=(0,s.useMemo)((function(){return 200+e.length+n.length}),[e,n]);(0,s.useEffect)((function(){return function(){return E.stop()}}),[]);var o=function(){var e=d.wf.getState().chatId;C.UO.click({msh_page_name:"Chat",msh_element_id:r?"mp_voice_stop":"mp_voice_start",msh_conversation_id:e}),j.C.verify((function(){r?E.stop():E.start()}))},i=function(){var e=d.wf.getState().chatId;C.UO.click({msh_page_name:"Chat",msh_element_id:"mp_input_text",msh_conversation_id:e}),d.wf.updateInputMode("text"),w.focusInput(!0)},c="".concat(ae," press"),u=e+n;return(0,G.jsxs)(l.E,{column:!0,padding:!0,center:!0,gap:!0,className:"".concat(te," ").concat(r?ce:""),children:[(0,G.jsx)(D.pf,{scrollY:!0,className:ne,scrollWithAnimation:!0,scrollTop:a,onClick:function(){r||i()},children:(0,G.jsxs)(G.Fragment,{children:[null!=u&&u.length?(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(Z.G,{className:re,children:e}),(0,G.jsx)(Z.G,{mode:"tips",className:re,children:n})]}):(0,G.jsx)(G.Fragment,{children:!r&&(0,G.jsx)(Z.G,{mode:"tips",className:re,children:t})}),r&&(0,G.jsx)(ee.c,{})]})}),(0,G.jsxs)(l.E,{column:!0,center:!0,gap:"lg",children:[(0,G.jsx)(Z.G,{mode:"desc",children:r?"点击停止":"点击说话"}),(0,G.jsxs)(l.E,{relative:!0,gap:!0,center:!0,style:{gap:60},children:[(0,G.jsx)(l.E,{className:se}),(0,G.jsx)(M.b,{className:c,src:N.dG,onClick:i}),(0,G.jsx)(l.E,{center:!0,className:"press ".concat(ie),onClick:o,onLongPress:o,children:(0,G.jsx)(M.b,{src:r?N.DC:N.iR,className:oe})}),(0,G.jsx)($,{onSendBefore:E.appendContent})]})]}),(0,G.jsx)(l.E,{safe:!0})]})}var ue=n(3946),de="index-module__share___Oh_te",fe="index-module__list___QWvCh",he="index-module__btn___x1Gln",pe="index-module__image___JM6up",_e="index-module__icon___MRKIY",me="index-module__text___slDps",ve=[{title:"微信好友",color:"#07C160",openType:"share",icon:N.I1},{title:"复制文字",color:"#E58A20",icon:N.WU,onClick:F.F.copyTextContent},{title:"生成图片",color:"#5C57DB",icon:N.Gy,onClick:F.F.screenshot},{title:"复制链接",color:"#2672ED",icon:N.sv,onClick:F.F.copyLink}];function xe(){var e=d.wf.useState((function(e){return e.segmentMap})),t=F.F.useState((function(e){return e.selecteds})),n=(0,s.useMemo)((function(){return F.F.checkAllSelected()}),[e,t]),r=!n&&!!t.length;return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)("wxml-to-canvas",{class:"share-widget"}),(0,G.jsxs)(l.E,{padding:!0,column:!0,className:"slidein ".concat(de),children:[(0,G.jsxs)(l.E,{gap:!0,children:[(0,G.jsxs)(l.E,{padding:!0,center:!0,gap:!0,onClick:function(){return F.F.allSelect(n)},children:[(0,G.jsx)(ue.X,{indeterminate:r,checked:n}),(0,G.jsx)(Z.G,{children:"全选"})]}),(0,G.jsx)(l.E,{full:!0,padding:!0,className:fe,children:ve.map((function(e){return(0,G.jsx)(X.e,{className:he,openType:e.openType,onClick:e.onClick,children:(0,G.jsxs)(l.E,{className:"press",column:!0,center:!0,gap:!0,children:[(0,G.jsx)(l.E,{center:!0,className:pe,style:{backgroundColor:e.color},children:(0,G.jsx)(M.b,{src:e.icon,className:_e})}),(0,G.jsx)(Z.G,{className:me,children:e.title})]})},e.title)}))})]}),(0,G.jsx)(l.E,{safe:!0})]})]})}var ge="index-module__footer___XotYx",Se=n(6089),je="index-module__input___H2RYb";function we(e){var t=e.onEnter,n=e.onKeyboardHeightChange,r=w.useState((function(e){return e.focus})),a=w.useState((function(e){return e.content})),o=w.useState((function(e){return e.placeholder}));return(0,G.jsx)(l.E,{full:!0,children:(0,G.jsx)(D.gx,{autoHeight:!0,focus:r,maxlength:-1,showConfirmBar:!1,adjustPosition:!1,disableDefaultPadding:!0,onKeyboardHeightChange:function(e){return null==n?void 0:n(e.detail.height)},className:je,placeholder:o,value:a,onInput:function(e){w.updateContent((0,q.so)(a,e.detail))},onClick:function(){return w.focusInput(!0)},onBlur:function(){return w.focusInput(!1)},confirmType:"send",onConfirm:t})})}var ke=n(6958),Ce="index-module__close___KMWuF",be="index-module__file___HSLoa",Ee="准备上传中...",ye={failed:"上传失败",loading:function(e){return"上传中：".concat(e,"%")}},Te={failed:"解析失败",loading:"解析中..."};function Fe(e){var t=e.data,n=e.allowUpload,r=(0,s.useState)(""),o=(0,y.Z)(r,2),c=o[0],u=o[1];(0,s.useEffect)((function(){var e;if(null!=t&&t.TEMP){if(n){var r=b.d.getFileUploadInfo(),o=r.url,s=r.headers,c=i().uploadFile({url:o,name:"file",filePath:t.TEMP.path,formData:{file_name:null==t||null===(e=t.TEMP)||void 0===e?void 0:e.name},header:s,fail:function(){return u(ye.failed)},success:function(e){return(0,h.Z)((0,f.Z)().mark((function n(){var r,o,i;return(0,f.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(200===e.statusCode){n.next=3;break}return u(ye.failed),n.abrupt("return");case 3:return n.prev=3,r=JSON.parse(null==e?void 0:e.data),u(Te.loading),n.next=8,S.fileParse([r.id]);case 8:n.sent?(u(""),i=S.updateFile(t.id,(0,a.Z)((0,a.Z)({},r),{},{size:null===(o=t.TEMP)||void 0===o?void 0:o.size})),w.checkTokenOverSize(i.map((function(e){return e.id})))):u(Te.failed),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(3),u(Te.failed);case 15:case"end":return n.stop()}}),n,null,[[3,12]])})))()}});return c.onProgressUpdate((function(e){u(ye.loading(e.progress))})),function(){return c.abort()}}u(Ee)}}),[n,t]);return(0,G.jsxs)(l.E,{relative:!0,children:[(0,G.jsx)(ke.U,{data:t,status:c,className:be}),(0,G.jsx)(M.b,{src:N.xv,className:Ce,style:{width:18,height:18},onClick:function(){if(t){var e=S.removeFile(t.id);w.checkTokenOverSize(e.map((function(e){return e.id})))}}})]})}var Ie="index-module__files___jjwsM",Ne="有什么问题尽管问我",Me="整理这些文件的核心内容";function Ze(){var e=S.useState((function(e){return e.uploadFiles})),t=S.useState((function(e){return e.allowUploadIds}));return(0,s.useEffect)((function(){var t=e.some((function(e){return!e.TEMP}));w.updatePlaceholder(t?Me:Ne),0===e.length&&w.clearTokenOverSize()}),[e]),null!=e&&e.length?(0,G.jsx)(D.pf,{scrollX:!0,className:Ie,children:(0,G.jsxs)(l.E,{padding:!0,gap:!0,children:[e.map((function(e){return(0,G.jsx)(Fe,{data:e,allowUpload:t.includes(e.id)},e.id)})),(0,G.jsx)(l.E,{notshrink:!0,style:{width:4}})]})}):null}function Oe(){var e=w.useState((function(e){return e.tokenOverTips}));return(0,G.jsx)(Z.G,{center:!0,mode:"tips",children:e||"内容由 AI 大模型生成，请仔细甄别"})}var Ue="index-module__content___Dcbe2",Ae="index-module__icons___x7GR_",Pe="".concat("index-module__icon___PQoVG"," press");function Ge(){var e=K(),t=(0,s.useState)(0),n=(0,y.Z)(t,2),r=n[0],a=n[1];return(0,G.jsxs)(l.E,{full:!0,padding:!0,column:!0,gap:!0,style:{paddingBottom:r},children:[(0,G.jsxs)(l.E,{gap:!0,style:{alignItems:"flex-end"},children:[Se.tq&&(0,G.jsx)(l.E,{className:Ae,gap:!0,children:(0,G.jsx)(M.b,{className:Pe,src:N.iR,onClick:function(){var e=d.wf.getState().chatId;C.UO.click({msh_page_name:"Chat",msh_element_id:"mp_input_voice",msh_conversation_id:e}),d.wf.updateInputMode("voice")}})}),(0,G.jsxs)(l.E,{full:!0,hidden:!0,column:!0,className:Ue,children:[(0,G.jsx)(we,{onEnter:e.send,onKeyboardHeightChange:a}),(0,G.jsx)(Ze,{})]}),(0,G.jsxs)(l.E,{className:Ae,gap:!0,children:[Se.tq&&(0,G.jsx)(M.b,{className:Pe,src:N.ws,onClick:function(){var e=d.wf.getState().chatId;C.UO.click({msh_page_name:"Chat",msh_element_id:"open_upload_file_for_query_btn",msh_conversation_id:e}),j.C.verify((function(){i().showActionSheet({itemList:["从微信聊天记录中选择"],success:function(){return S.chooseFile()}}).catch((function(){}))}))}}),(0,G.jsx)($,{})]})]}),(0,G.jsx)(Oe,{}),(0,G.jsx)(l.E,{safe:0===r})]})}function ze(){var e=d.wf.useState((function(e){return e.chatMap[e.chatId]})),t=d.wf.useState((function(e){return"voice"===e.inputMode})),n=F.F.useState((function(e){return e.multiple}));return"forbidden"===(null==e?void 0:e.status)?(0,G.jsx)(W,{}):(0,G.jsx)(l.E,{column:!0,hidden:!0,className:ge,children:n?(0,G.jsx)(xe,{}):(0,G.jsx)(G.Fragment,{children:t?(0,G.jsx)(le,{}):(0,G.jsx)(Ge,{})})})}var De=n(4814),Be=n(1304);function Le(){return(0,G.jsx)(M.b,{src:N.jY,style:{width:48,height:46}})}var Ye=n(2535),Re="index-module__example____XEJL",He="index-module__text___yoDuS";function Je(){var e=d.wf.useState((function(e){return e.examples})),t=function(){var e=(0,h.Z)((0,f.Z)().mark((function e(t){return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C.UO.click({msh_page_name:"Chat",msh_element_id:"chat_demo_".concat(t.id)}),j.C.verify((0,h.Z)((0,f.Z)().mark((function e(){var n,r,a,o,i,s,c,l,u,h;return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=d.wf.getState(),i=o.chatId,s=o.chatMap,null===(n=s[i])||void 0===n){e.next=5;break}e.t0=n,e.next=8;break;case 5:return e.next=7,d.wf.createChat({is_example:!0});case 7:e.t0=e.sent;case 8:c=e.t0,l=null==t||null===(r=t.urls)||void 0===r?void 0:r[0],u=null==t||null===(a=t.files)||void 0===a?void 0:a[0],h=l?"".concat(t.prompt," ").concat((0,q.TH)(l)):t.prompt,u&&d.wf.appendChatFiles(c.id,[u]),k.Y.closeSocket(),k.Y.sendMessage({action:"consult",chat_id:c.id,content:h,refs:null!=u&&u.id?[null==u?void 0:u.id]:[]});case 15:case"end":return e.stop()}}),e)}))));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,G.jsxs)(l.E,{full:!0,hidden:!0,center:!0,column:!0,children:[(0,G.jsx)(l.E,{full:!0,center:!0,gap:!0,children:(0,G.jsx)(Le,{})}),(0,G.jsx)(D.pf,{scrollX:!0,children:(0,G.jsxs)(l.E,{padding:!0,gap:!0,children:[e.map((function(e){var n,r,a,o=null==e||null===(n=e.urls)||void 0===n?void 0:n[0],i=null==e||null===(r=e.files)||void 0===r?void 0:r[0],s=null!==(a=null==i?void 0:i.name)&&void 0!==a?a:o;return(0,G.jsxs)(l.E,{rounded:!0,padding:!0,column:!0,gap:"xs",notshrink:!0,className:Re,onClick:function(){return t(e)},children:[(0,G.jsx)(Z.G,{bold:!0,className:He,children:e.title}),(0,G.jsxs)(l.E,{center:"y",gap:!0,children:[o&&(0,G.jsx)(Z.G,{children:"🔗"}),i&&(0,G.jsx)(Ye.a,{data:i,width:16}),s&&(0,G.jsx)(Z.G,{full:!0,ellipsis:!0,mode:"tips",className:He,children:s})]})]},e.title)})),(0,G.jsx)(l.E,{notshrink:!0,style:{width:4}})]})})]})}var Xe=n(7848);function We(){return b.d.useState((function(e){return e.visited}))?(0,G.jsx)(Xe.z,{data:d.d$}):(0,G.jsx)(Je,{})}function Qe(){var e=Be.p.useState((function(e){return e.scrollTop})),t=d.wf.useState((function(e){var t,n;return null!==(t=null===(n=e.segmentMap[e.chatId])||void 0===n?void 0:n.items)&&void 0!==t?t:[]}));(0,s.useEffect)((function(){null!=t&&t.length&&(Be.p.getState().autoscroll&&Be.p.scrollToBottom())}),[t]);var n=(0,s.useRef)(),r=function(){clearTimeout(n.current),n.current=setTimeout((function(){var e=i().createSelectorQuery();e.select("#segments").fields({size:!0,scrollOffset:!0},(function(e){var t=(null==e?void 0:e.scrollTop)||0,n=(null==e?void 0:e.height)||0,r=((null==e?void 0:e.scrollHeight)||0)-n-t>.4*n;Be.p.updateAutoscroll(!r),Be.p.updateScrollBottomVisible(r)})),e.exec()}),1e3)};return(0,G.jsx)(De.R,{id:"segments",scrollTop:e,store:{items:t},enhanced:!0,onDragStart:function(){clearTimeout(n.current),Be.p.updateAutoscroll(!1)},onDragEnd:r,onTouchEnd:r,onScrollToUpper:function(){var e;Be.p.updateAutoscroll(!1);var n=null===(e=t[0])||void 0===e?void 0:e.id,r=d.wf.getState().chatId;d.wf.listChatSegments(r,n)},onScrollToLower:function(){clearTimeout(n.current),Be.p.updateAutoscroll(!0),Be.p.updateScrollBottomVisible(!1)},empty:(0,G.jsx)(We,{}),renderItem:function(e){var n=e.item,r=e.index;return(0,G.jsx)(Xe.z,{data:n,index:r,isLatest:r===t.length-1})}})}var qe=n(4713),Ke="index-module__login___jRYJi",Ve="index-module__btn___l2gcI",$e="index-module__image___ms6rP";function et(){var e=j.C.useState((function(e){return e.dragon})),t=qe.X.useState((function(e){var t;return!(null===(t=e.wechat)||void 0===t||!t.need_phone)}));(0,s.useEffect)((function(){e&&qe.X.checkUser()}),[e]);if(e)return(0,G.jsx)(l.E,{center:!0,className:Ke,children:(0,G.jsx)(D.zx,{className:"".concat(Ve," press"),openType:t?"getPhoneNumber":void 0,onGetPhoneNumber:function(e){return function(e){C.UO.auth.privacy("msh_auth_phone",!!e),e&&qe.X.authorize(e)}(e.detail.code)},onClick:function(){return!t&&qe.X.authorize()},children:(0,G.jsx)(M.b,{mode:"widthFix",src:N.EA,className:"".concat($e," slidein")})})})}function tt(){(0,u.r)({name:"Chat"}),(0,o.useShareTimeline)((function(){return I.$O.onShareTimeline("Chat")})),(0,o.useShareAppMessage)((function(e){var t;return"button"===(null==e?void 0:e.from)&&(t=F.F.shareToWeChat()),(0,a.Z)((0,a.Z)({},I.$O.onShareAppMessage("Chat")),{},{promise:t})}));var e=function(){(0,s.useEffect)((function(){return d.wf.listChatExamples(),function(){return d.wf.resetState()}}),[]);var e=d.wf.useState((function(e){return e.chatId}));return(0,s.useEffect)((function(){return function(){S.resetState(),w.resetState(),Be.p.resetState(),E.stop(),k.Y.resetSegment(),T.stopTextStream(),F.F.toggleMultiple()}}),[e]),{chatId:e}}().chatId;(0,o.useDidShow)((function(){var e,t,n=k.Y.getState();(null===(e=n.socket)||void 0===e?void 0:e.readyState)!==(null===(t=n.socket)||void 0===t?void 0:t.OPEN)&&n.a&&n.sendParams&&(k.Y.closeSocket(),k.Y.sendMessage({action:"continue",chat_id:n.sendParams.chat_id,segment_id:n.a}))})),(0,o.useDidHide)((function(){E.stop()}));var t=(0,s.useRef)("");return(0,o.useDidShow)((function(){var e=i().getEnterOptionsSync(),n=JSON.stringify(e);if(t.current!==n){t.current=n;var r=e.query,a=e.forwardMaterials;if(console.log(e),null!=a&&a.length){C.UO.app.openMaterials();var o=null==a?void 0:a.find((function(e){return"text/html"===e.type}));if(o){var s=w.getState().content,c=null!=s&&s.length?"".concat(s,"\n").concat(o.path):o.path;return w.updateContent(c+" "),void w.focusInput(!0)}j.C.verify((function(){S.openMaterials(a)}))}else if(null!=r&&r.scene||null!=r&&r.type){switch((null==r?void 0:r.scene)||(null==r?void 0:r.type)){case"chat":C.dh.setHeaderInfo("msh_mp_scene","chat"),j.C.verify((function(){d.wf.selectChat(null==r?void 0:r.chat_id)}));break;case"share":C.dh.setHeaderInfo("msh_mp_scene","share"),j.C.verify((function(){d.wf.selectShareChat(null==r?void 0:r.share_id)}));break;case"dragon":C.dh.setHeaderInfo("msh_mp_scene","dragon"),T.init(r)}}}})),(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)(l.E,{full:!0,hidden:!0,column:!0,children:[(0,G.jsx)(c.h,{renderLeft:(0,G.jsx)(z,{})}),(0,G.jsxs)(l.E,{full:!0,hidden:!0,relative:!0,children:[(0,G.jsx)(J,{}),(0,G.jsx)(Qe,{},e)]}),(0,G.jsx)(ze,{})]}),(0,G.jsx)(et,{})]})}tt.enableShareTimeline=!0,tt.enableShareAppMessage=!0,Page((0,r.createPageConfig)(tt,"pages/chat/index",{root:{cn:[]}},{disableScroll:!0}||{}))}},function(e){e.O(0,[107,216,592],(function(){return t=8399,e(e.s=t);var t})),e.O()}]);