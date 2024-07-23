(()=>{var e={};e.id=931,e.ids=[931],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},4300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},1808:e=>{"use strict";e.exports=require("net")},6005:e=>{"use strict";e.exports=require("node:crypto")},1041:e=>{"use strict";e.exports=require("node:url")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},5477:e=>{"use strict";e.exports=require("punycode")},2781:e=>{"use strict";e.exports=require("stream")},4404:e=>{"use strict";e.exports=require("tls")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},3876:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>u,originalPathname:()=>x,pages:()=>d,routeModule:()=>p,tree:()=>c}),r(5480),r(4273),r(5866);var s=r(3191),a=r(8716),l=r(7922),n=r.n(l),i=r(5231),o={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>i[e]);r.d(t,o);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,5480)),"/Users/aleksandrkulagin/solana-wallet-project/src/app/page.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,4273)),"/Users/aleksandrkulagin/solana-wallet-project/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"]}],d=["/Users/aleksandrkulagin/solana-wallet-project/src/app/page.tsx"],x="/page",u={require:r,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},9802:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},9674:(e,t,r)=>{Promise.resolve().then(r.bind(r,458)),Promise.resolve().then(r.bind(r,5777))},8851:(e,t,r)=>{Promise.resolve().then(r.bind(r,4497))},4497:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var s=r(326),a=r(5842),l=r(7539),n=r.n(l);let i=()=>{let e=(0,a.v9)(e=>e.wallet.wallet),t=e?.secretKey?n().encode(e.secretKey):"";return(0,s.jsxs)("div",{className:"p-4 md:p-6 lg:p-8 xl:p-10 2xl:p-12 max-w-4xl mx-auto",children:[s.jsx("h1",{className:"text-2xl md:text-3xl font-bold mb-6 text-center text-gray-700",children:"Информация о кошельке"}),(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsxs)("div",{className:"bg-gray-100 p-4 rounded-lg shadow-sm",children:[s.jsx("p",{className:"text-lg font-medium text-gray-700 mb-2",children:"Адрес кошелька:"}),s.jsx("p",{className:"text-sm text-gray-600 break-all",children:e?.publicKey.toString()})]}),(0,s.jsxs)("div",{className:"bg-gray-100 p-4 rounded-lg shadow-sm",children:[s.jsx("p",{className:"text-lg font-medium text-gray-700 mb-2",children:"Приватный ключ:"}),s.jsx("p",{className:"text-sm text-gray-600 break-all",children:t})]})]})]})}},458:(e,t,r)=>{"use strict";r.d(t,{default:()=>o});var s=r(326),a=r(5842),l=r(3146),n=r(1716);let i=(0,l.xC)({reducer:{wallet:n.ZP}}),o=({children:e})=>s.jsx(a.zt,{store:i,children:e})},5777:(e,t,r)=>{"use strict";r.d(t,{default:()=>o});var s=r(326),a=r(8347),l=r(5842),n=r(1716),i=r(5047);let o=()=>{let{wallet:e,balance:t,error:r}=(0,l.v9)(e=>e.wallet),o=(0,l.I0)(),c=(0,i.useRouter)(),d=(0,i.usePathname)(),x=new a.ew("https://api.devnet.solana.com"),u=async e=>{try{let t=await x.getBalance(e);o((0,n.Lu)(t/1e9)),o((0,n.sT)(""))}catch(e){o((0,n.Lu)(null)),o((0,n.sT)("Ошибка получения баланса"))}},p=(e,t)=>{d===t?e.preventDefault():c.push(t)};return(0,s.jsxs)("div",{className:"relative p-4 md:p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md",children:[s.jsx("div",{className:"mb-4",children:s.jsx("nav",{className:"text-sm font-medium text-gray-700",children:(0,s.jsxs)("ol",{className:"flex space-x-4",children:[s.jsx("li",{children:s.jsx("a",{href:"#",className:`text-blue-500 hover:text-blue-600 ${"/"===d?"pointer-events-none text-gray-500":""}`,onClick:e=>p(e,"/"),children:"Главная"})}),s.jsx("li",{children:s.jsx("span",{className:"text-gray-500",children:"/"})}),s.jsx("li",{children:s.jsx("a",{href:"#",className:`text-blue-500 hover:text-blue-600 ${"/transaction"===d?"pointer-events-none text-gray-500":""}`,onClick:e=>p(e,"/transaction"),children:"Транзакция"})})]})})}),s.jsx("h1",{className:"text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center text-gray-700",children:"Solana"}),s.jsx("div",{className:"flex justify-center mb-4",children:"/"===d?s.jsx("button",{onClick:()=>{let e=a.RG.generate();o((0,n.kH)(e)),u(e.publicKey)},className:"bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300",children:"Создать новый кошелек"}):s.jsx("p",{className:"text-lg md:text-xl lg:text-2xl font-medium text-gray-700",children:"Транзакция"})}),e&&(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsxs)("p",{className:"text-lg md:text-xl lg:text-2xl font-medium text-gray-700",children:["Ваш баланс: ",null!==t?`${t} SOL`:"Получение..."]}),r&&s.jsx("p",{className:"mt-2 text-red-600 text-sm md:text-base lg:text-lg",children:r})]})]})}},1716:(e,t,r)=>{"use strict";r.d(t,{Ek:()=>c,He:()=>o,Lu:()=>l,T1:()=>i,ZP:()=>d,kH:()=>a,sT:()=>n});let s=(0,r(3146).oM)({name:"wallet",initialState:{wallet:null,balance:null,error:"",amount:"",recipient:"",transactionStatus:""},reducers:{setWallet(e,t){e.wallet=t.payload},setBalance(e,t){e.balance=t.payload},setError(e,t){e.error=t.payload},setAmount(e,t){e.amount=t.payload},setRecipient(e,t){e.recipient=t.payload},setTransactionStatus(e,t){e.transactionStatus=t.payload}}}),{setWallet:a,setBalance:l,setError:n,setAmount:i,setRecipient:o,setTransactionStatus:c}=s.actions,d=s.reducer},4273:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>h,metadata:()=>g});var s=r(9510),a=r(5317),l=r.n(a);r(5023);var n=r(8570);let i=(0,n.createProxy)(String.raw`/Users/aleksandrkulagin/solana-wallet-project/src/components/Header.tsx`),{__esModule:o,$$typeof:c}=i;i.default;let d=(0,n.createProxy)(String.raw`/Users/aleksandrkulagin/solana-wallet-project/src/components/Header.tsx#default`),x=(0,n.createProxy)(String.raw`/Users/aleksandrkulagin/solana-wallet-project/src/components/ClientWrapper.tsx`),{__esModule:u,$$typeof:p}=x;x.default;let m=(0,n.createProxy)(String.raw`/Users/aleksandrkulagin/solana-wallet-project/src/components/ClientWrapper.tsx#default`),g={title:"Create Next App",description:"Generated by create next app"};function h({children:e}){return s.jsx("html",{lang:"en",children:s.jsx("body",{className:l().className,children:(0,s.jsxs)(m,{children:[s.jsx(d,{}),e]})})})}},5480:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>n,__esModule:()=>l,default:()=>i});var s=r(8570);let a=(0,s.createProxy)(String.raw`/Users/aleksandrkulagin/solana-wallet-project/src/app/page.tsx`),{__esModule:l,$$typeof:n}=a;a.default;let i=(0,s.createProxy)(String.raw`/Users/aleksandrkulagin/solana-wallet-project/src/app/page.tsx#default`)},5023:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[855],()=>r(3876));module.exports=s})();