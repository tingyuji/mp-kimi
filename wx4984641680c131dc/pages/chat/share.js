(wx.webpackJsonp=wx.webpackJsonp||[]).push([[322],{7554:function(e,n,i){var l=i(5230),t=i(4562),a=i(6194),o=i.n(a),r=i(7524),s=i(959),u=i(9306),h=i(427),d=i(6834),c=i(7543),p=i(5382),v=i(3557),m=i(2506),f=i(9920),_=i(6830),g=i(205),S=i(457),C=i(7765);function x(e){var n,i,l,a=C.d.getHost(),o=null==e||null===(n=e.split(a.api))||void 0===n?void 0:n[1],r={},s=null!==(i=null==o?void 0:o.split("?"))&&void 0!==i?i:[],u=(0,t.Z)(s,2),h=u[0],d=void 0===h?"":h,c=u[1];return null==c||null===(l=c.split("&"))||void 0===l||l.forEach((function(e){var n,i=null!==(n=null==e?void 0:e.split("="))&&void 0!==n?n:[],l=(0,t.Z)(i,2),a=l[0],o=l[1];r[a]=o})),{path:d,params:r}}var y=i(4618),j=i(5250),b=i(7848),w="share-module__btn___ypLJR",E="share-module__home___M8I4o",k=i(1527);function M(){var e,n,i;g.F.toggleMultiple();var l=o().getEnterOptionsSync(),t=x(decodeURIComponent(null==l||null===(e=l.query)||void 0===e?void 0:e.q)).path,a=null==t||null===(n=t.split("/share/"))||void 0===n?void 0:n[1];return(null==l||null===(i=l.query)||void 0===i?void 0:i.id)||a}function O(){var e;(0,m.r)({name:"ChatShare"}),(0,a.useShareTimeline)((function(){return S.$O.onShareTimeline("ChatShare")})),(0,a.useShareAppMessage)((function(){var e=M();return S.$O.onShareAppMessage("ChatShare"),{title:"这是我和 Kimi 的聊天记录，发给你看看",path:"/pages/chat/share?id=".concat(e)}}));var n=(0,s.useState)(),i=(0,t.Z)(n,2),l=i[0],g=i[1];return(0,a.useDidShow)((function(){var e=M();if((null==l?void 0:l.id)!==e){if(!e)return j.G.toHome();o().showLoading({title:"正在加载"}),d.h.chat.getChatShare(e).then((function(e){var n;null!=e&&e.chat_id&&null!=e&&null!==(n=e.file_items)&&void 0!==n&&n.length&&_.wf.appendChatFiles(null==e?void 0:e.chat_id,e.file_items),g(e)})).catch((function(){return j.G.toHome()})).finally(o().hideLoading)}})),(0,k.jsxs)(v.E,{full:!0,hidden:!0,column:!0,children:[(0,k.jsx)(p.h,{renderLeft:(0,k.jsx)(h.b,{src:u.LE,className:"".concat(E," press"),onClick:function(){return j.G.toHome()}})}),(0,k.jsx)(v.E,{full:!0,hidden:!0,children:(0,k.jsxs)(r.pf,{scrollY:!0,style:{height:"100%"},children:[null==l||null===(e=l.items)||void 0===e?void 0:e.map((function(e){return(0,k.jsx)(b.z,{shareMode:!0,data:e},e.id)})),(0,k.jsx)(v.E,{style:{height:100}})]})}),(0,k.jsx)(v.E,{padding:!0,className:w,children:(0,k.jsx)(c.e,{round:!0,type:"primary",onClick:function(){y.UO.click({msh_page_name:"Chat",msh_element_id:"btn_share_message_go_kimi_chat_in_shared_message_page",msh_conversation_id:null==l?void 0:l.chat_id}),f.C.verify((function(){j.G.toHome(),_.wf.selectShareChat(null==l?void 0:l.id)}))},children:"和 Kimi 接着聊"})})]})}O.enableShareTimeline=!0,O.enableShareAppMessage=!0,Page((0,l.createPageConfig)(O,"pages/chat/share",{root:{cn:[]}},{disableScroll:!0}||{}))}},function(e){e.O(0,[107,216,592],(function(){return n=7554,e(e.s=n);var n})),e.O()}]);