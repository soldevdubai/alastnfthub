_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[36],{"1vAf":function(e,t,r){"use strict";r.r(t),r.d(t,"__N_SSP",(function(){return Q}));var n=r("rePB"),s=r("nKUr"),a=r("/MKj"),c=r("CBTV"),o=r("o0o1"),i=r.n(o),l=r("HaE+"),d=r("KQm4"),u=r("Ff2n"),b=r("q1tI"),j=r("g4pe"),O=r.n(j),h=r("Vvt1"),f=r.n(h),m=r("20a2"),p=r("LtDH"),w=r("xCAs"),x=r("PCT9"),g=r("Dwy+"),v=r("+QRC"),S=r.n(v),y=r("lWlA"),P=r("Cz6E"),T=r("Tkjx"),I=r("Dd6D"),C=r("rVDa"),k=r("kVyU"),N=r("Oj44"),D=r("cG4X"),M=r.n(D),E=function(e){var t=e.onClick,r=e.nativeCurrency,n=e.title,a=e.number,c=e.roundedNumber;return Object(s.jsx)(I.c,{onClick:function(){return t()},className:M.a.assetProfileBannerOwnerInfoClickable,children:Object(s.jsxs)(P.a,{className:M.a.assetProfileBannerOwnerInfoCard,children:[Object(s.jsx)("div",{children:n}),Object(s.jsxs)("div",{className:M.a.assetProfileBannerOwnerInfoCardValue,children:[a>0&&Object(s.jsx)("img",{src:r.icon,alt:r.symbol}),c]})]})})};E.defaultProps={nativeCurrency:{},number:""};var A=E,_=r("cW38"),F=f()((function(){return Promise.resolve().then(r.bind(null,"cpGi"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["cpGi"]},modules:["react-tooltip"]}}),B=function(e){var t=e.loadTokens,r=e.roundNumber,n=e.openFullImagePreview,a=e.onTraitsChange,c=e.setSearchTerm,o=e.setSelectedSortOption,i=e.setIsMobileSearchShown,l=e.setTokens,d=e.setHasMore,u=e.openGraphModal,b=e.thumb,j=e.contractAddress,O=e.selectedSortOption,h=e.searchTerm,f=e.sortOptions,m=e.chainId,p=e.contract,w=e.nativeCurrency,g=e.user,v=e.selectedTraits,D=e.traits,E=e.tokens,B=e.isMobileSearchShown,L=e.fullScreenPreviewOpen,R=e.isLoading,H=e.hasMore,V=e.fixAssetDataErrors,W=e.forceRefresh,K=e.isGraphModalOpen,U=e.t;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(C.a,{isOpen:L,className:M.a.assetFullImagePreviewContainer,onClose:function(){return n(!1)},children:Object(s.jsx)("img",{onClick:function(){return n(!1)},style:{cursor:"pointer"},src:b||Object(y.a)(j),alt:p.name||Object(y.b)(j)})}),Object(s.jsxs)(C.a,{className:M.a.assetGraphModal,isOpen:K,onClose:function(){return u(!1)},children:[Object(s.jsx)(C.a.Header,{onClose:function(){return u(!1)},children:Object(s.jsx)("div",{children:U("asset.token.tradingHistory",{asset:p.name||Object(y.b)(j)})})}),Object(s.jsx)(C.a.Body,{children:Object(s.jsx)(P.b,{children:Object(s.jsx)(P.a,{style:{position:"relative"},children:K&&Object(s.jsx)(N.a,{chainId:m,contractId:p.id,t:U})})})})]}),Object(s.jsxs)("div",{className:M.a.asset,children:[Object(s.jsxs)("div",{className:M.a.assetProfile,children:[Object(s.jsx)("div",{className:M.a.assetProfileBanner,style:{backgroundImage:p.cover_image&&"url(".concat(p.cover_image,")")}}),Object(s.jsx)(I.c,{onClick:function(){return n()},className:M.a.assetProfileBannerOwnerImgContainer,children:Object(s.jsx)("img",{src:b||Object(y.a)(j),alt:p.name||Object(y.b)(j)})}),Object(s.jsxs)("div",{className:M.a.assetProfileBannerOwnerTitle,children:[p.name||Object(y.b)(j),Object(_.b)({contract:p,showTooltip:!0,t:U})]}),Object(s.jsxs)("div",{className:M.a.assetSocial,children:[p.website&&Object(s.jsx)(G,{title:"Website",route:p.website,icon:Object(s.jsx)(T.cb,{width:19,height:19})}),p.twitter&&Object(s.jsx)(G,{title:"Twitter",route:p.twitter,icon:Object(s.jsx)(T.Y,{width:19,height:19})}),p.telegram&&Object(s.jsx)(G,{title:"Telegram",route:p.telegram,icon:Object(s.jsx)(T.V,{width:19,height:19})}),p.discord&&Object(s.jsx)(G,{title:"Discord",route:p.discord,icon:Object(s.jsx)(T.n,{width:19,height:19})})]}),Object(s.jsxs)(I.c,{className:M.a.assetProfileBannerOwnerSubTitle,"data-tip":U("tooltip.copied"),"data-event":"click","data-effect":"solid","data-event-off":"click","data-delay-hide":"1500",children:[Object(s.jsx)("div",{className:M.a.assetProfileBannerOwnerSubTitleAddress,children:Object(y.b)(j)}),Object(s.jsx)(F,{afterShow:function(){S()(j)}}),Object(s.jsx)(T.m,{style:{width:"15px",height:"15px"}})]}),Object(s.jsxs)(P.b,{className:M.a.assetProfileBannerOwnerInfo,children:[Object(s.jsx)(A,{onClick:function(){return o(x.b.PRICE_ASC)},nativeCurrency:w,title:U("contract.floor"),number:p.lowestPrice,roundedNumber:r(p.error?0:p.lowestPrice,3)}),Object(s.jsx)(A,{onClick:function(){return o(x.b.SOLD_DESC)},nativeCurrency:w,title:U("contract.highest"),number:p.heighestPrice,roundedNumber:r(p.heighestPrice,3)}),Object(s.jsx)(A,{onClick:function(){return o(x.b.LISTED_DESC)},nativeCurrency:w,title:U("contract.average"),number:p.avgPrice,roundedNumber:r(p.avgPrice,3)}),Object(s.jsx)(A,{onClick:function(){return p.totalPrice>0?u(!0):function(){}},nativeCurrency:w,title:U("contract.total"),number:p.totalPrice,roundedNumber:r(p.totalPrice,2)})]}),Object(s.jsx)(P.b,{className:M.a.assetProfileBannerOwnerDescription,children:Object(s.jsx)(P.a,{children:p.description})})]}),Object(s.jsx)(k.a,{setTokens:l,setHasMore:d,setSelectedSortOption:o,setIsMobileSearchShown:i,setSearchTerm:c,onTraitsChange:a,isMobileSearchShown:B,sortOptions:f,selectedTraits:v,traits:D,selectedSortOption:O,searchTerm:h,loadTokens:t,tokens:E,user:g,chainId:m,isLoading:R,hasMore:H,fixAssetDataErrors:V,forceRefresh:W,t:U})]})]})},G=function(e){var t=e.title,r=e.route,n=e.icon;return Object(s.jsx)(I.c,{title:t,className:M.a.assetSocialItem,route:r,target:"_blank",children:n})};B.defaultProps={};var L=B;function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function H(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var V=function(e){var t=e.context,r=e.contract,n=e.chainId,a=e.tokens,c=e.user,o=(e.addReceivedItem,e.addOfferedItem,e.trade,e.limit),j=e.t,h=Object(u.a)(e,["context","contract","chainId","tokens","user","addReceivedItem","addOfferedItem","trade","limit","t"]),f=(c.data.address,t.contractAddress),v=t.chainName,S=t.fixAssetDataErrors,y=t.forceRefresh,P=t.traitIds,T=t.search,I=t.sort,C=Object(b.useState)(a),k=C[0],N=C[1],D=Object(b.useState)(!1),M=D[0],E=D[1],A=Object(b.useState)(h.hasMore),_=A[0],F=A[1],B=Object(b.useState)(!1),G=B[0],R=B[1],V=Object(b.useState)(T||""),W=V[0],K=V[1],U=Object(b.useState)(I||x.a[0]),X=U[0],Q=U[1],q=Object(b.useState)(!1),J=q[0],z=q[1],Y=Object(b.useState)({}),Z=Y[0],$=Y[1],ee=Object(b.useState)(P?Array.isArray(P)?Object(d.a)(P):[P]:[]),te=ee[0],re=ee[1],ne=Object(b.useState)(!1),se=ne[0],ae=ne[1],ce=Object(w.a)(r.chainId),oe=ce.nativeCurrency,ie=Object(m.useRouter)();Object(g.a)((function(){F(!0),N([]),ie.replace({query:{traitIds:te,search:W,sort:X,contractAddress:f,chainName:v}},void 0,{shallow:!0,scroll:!1})}),[W,X,te.length]),Object(b.useEffect)((function(){p.a.contracts.getTraits(r.id).then((function(e){$(e.data)}))}),[]);var le=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(M){e.next=8;break}return E(!0),e.next=4,p.a.tokens.getAll({limit:o,skip:k.length,contracts:[r.id],chains:[n],search:W,sort:X,traits:te});case 4:t=e.sent,F(t.data.length===o),N([].concat(Object(d.a)(k),Object(d.a)(t.data))),E(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),de="".concat(r.name," - ").concat(ce.name," | NFTrade | Create, Buy, Sell, Swap and Farm NFTs"),ue=r.description||(a.length?a[0].description:""),be=r.image||(a.length?a[0].thumb:"");return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)(O.a,{children:[Object(s.jsx)("title",{children:de}),Object(s.jsx)("meta",{property:"og:title",content:de}),Object(s.jsx)("meta",{property:"og:description",content:ue}),Object(s.jsx)("meta",{name:"description",content:ue}),Object(s.jsx)("meta",{property:"og:image",content:be}),Object(s.jsx)("meta",{name:"twitter:card",content:"summary"}),Object(s.jsx)("meta",{name:"twitter:site",content:"@NFTradeOfficial"}),Object(s.jsx)("meta",{name:"twitter:title",content:de}),Object(s.jsx)("meta",{name:"twitter:description",content:ue}),Object(s.jsx)("meta",{name:"twitter:image",content:be})]}),Object(s.jsx)(L,H(H({},{loadTokens:function(){return le()},roundNumber:function(e,t){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;return+e?(new Intl.NumberFormat).format(parseFloat(e).toFixed(t)):"N/A"}(e,t)},openFullImagePreview:function(e){return function(){ae(!(arguments.length>0&&void 0!==arguments[0])||arguments[0])}(e)},onTraitsChange:function(e,t){return function(e,t){var r=[];r=t?[].concat(Object(d.a)(te),[e]):te.filter((function(t){return t!==e})),re(r)}(e,t)},setSearchTerm:function(e){return K(e)},setSelectedSortOption:function(e){return Q(e)},setIsMobileSearchShown:function(e){return z(e)},setTokens:function(e){return N(e)},setHasMore:function(e){return F(e)},openGraphModal:function(e){return function(e){R(e)}(e)}}),{},{thumb:be,contractAddress:f,selectedSortOption:X,searchTerm:W,sortOptions:x.a,chainId:n,contract:r,nativeCurrency:oe,user:c,selectedTraits:te,traits:Z,tokens:k,fullScreenPreviewOpen:se,isMobileSearchShown:J,isLoading:M,hasMore:_,fixAssetDataErrors:S,forceRefresh:y,isGraphModalOpen:G,t:j}))]})},W=r("f983");function K(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function U(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?K(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):K(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var X=function(e){var t=Object(a.c)(),r={user:Object(a.d)((function(e){return e.user})),wallet:Object(a.d)((function(e){return e.wallet})),trade:Object(a.d)((function(e){return e.trade}))},n={addReceivedItem:function(e){return t(Object(W.b)(e))},addOfferedItem:function(e){return t(Object(W.a)(e))}};return Object(s.jsx)(V,U(U(U({},e),r),n))};X.page="contract";var Q=!0;t.default=Object(c.b)(X)},GTdG:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/assets/[chainName]/[contractAddress]",function(){return r("1vAf")}])},kVyU:function(e,t,r){"use strict";var n=r("nKUr"),s=r("le63"),a=r("sQoh"),c=r("Dd6D"),o=r("cG4X"),i=r.n(o),l=function(e){var t=e.setTokens,r=e.setHasMore,o=e.setSelectedSortOption,l=e.setIsMobileSearchShown,d=e.setSearchTerm,u=e.setIsLoading,b=e.loadTokens,j=e.onTraitsChange,O=e.t,h=e.user,f=e.traits,m=e.sortOptions,p=e.selectedTraits,w=e.tokens,x=e.contracts,g=e.isMobileSearchShown,v=e.showCreateButton,S=e.isLoading,y=e.hasMore,P=e.fixAssetDataErrors,T=e.forceRefresh,I=e.absolute,C=e.showFilter,k=e.reverse,N=e.inner,D=e.displayFilterIcon,M=e.useWindow,E=e.selectedSortOption,A=e.searchTerm,_=e.address,F=e.chainId;return Object(n.jsxs)(c.b,{className:i.a.assetItemsList,children:[Object(n.jsx)(c.b.Header,{className:i.a.assetItemsListHeader,children:Object(n.jsx)(a.a,{reverse:k,showFilter:C,setTokens:t,setHasMore:r,setSelectedSortOption:o,setIsMobileSearchShown:l,setSearchTerm:d,onTraitsChange:j,isMobileSearchShown:g,displayFilterIcon:D,sortOptions:m,selectedTraits:p,traits:f,selectedSortOption:E,searchTerm:A,inner:N,t:O})}),Object(n.jsx)(s.a,{setIsLoading:u,loadTokens:b,useWindow:M,tokens:w,address:_,showCreateButton:v,user:h,chainId:F,contracts:x,isLoading:S,hasMore:y,fixAssetDataErrors:P,forceRefresh:T,absolute:I,t:O})]})};l.defaultProps={setIsLoading:function(){},onTraitsChange:function(){},user:null,traits:null,selectedTraits:[],contracts:[],showCreateButton:!1,fixAssetDataErrors:!1,forceRefresh:!1,absolute:!1,showFilter:!1,reverse:!0,inner:!0,displayFilterIcon:!1,useWindow:!0,address:"",chainId:null},t.a=l}},[["GTdG",0,2,4,1,3,5,6,8,7,9,10,11,15,17]]]);