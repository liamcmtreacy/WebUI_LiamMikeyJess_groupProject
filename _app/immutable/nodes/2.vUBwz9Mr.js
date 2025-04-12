import{c as Y,d as F,t as b,b as g,e as J}from"../chunks/Bm7MfWfw.js";import"../chunks/BlTFDyke.js";import{b as K,h as B,a as C,f as Q,g as U,K as j,M as X,N as Z,s as x,O as aa,P as ea,D as ta,A as o,B as A,q as i,F as sa,Q as E,G as W,I as D,R as O,S as ra}from"../chunks/BVni4JXR.js";import{e as h,s as oa}from"../chunks/Dj1S9Ec9.js";import{i as $}from"../chunks/DCvqqiYX.js";import{r as ia}from"../chunks/RVofVOGH.js";import{b as la}from"../chunks/G_wXBQig.js";import{i as na}from"../chunks/BSFFQZlp.js";import{b as t}from"../chunks/sW9hBQ9Z.js";function ua(_,y,c,w,d){var r=_,l="",n;K(()=>{if(l===(l=y()??"")){B&&C();return}n!==void 0&&(ea(n),n=void 0),l!==""&&(n=Q(()=>{if(B){U.data;for(var e=C(),f=e;e!==null&&(e.nodeType!==8||e.data!=="");)f=e,e=j(e);if(e===null)throw X(),Z;Y(U,f),r=x(e);return}var p=l+"",s=F(p);Y(aa(s),s.lastChild),r.before(s)}))})}var ca=b('<p style="color: green;" class="svelte-1u1pgfh">✅ Your Email Address is Valid</p> <button> </button>',1),da=b(`<p style="color: red;" class="svelte-1u1pgfh">❌ Sorry, your Email Address doesn't seem to be recognized</p>`),ga=b('<p style="color: blue;" class="svelte-1u1pgfh">YOU ARE NOW SUBSCRIBED TO OUR NEWLETTER</p>'),fa=b('<h1 class="svelte-1u1pgfh">Welcome to our Whales News Site</h1> <p class="svelte-1u1pgfh">Learn all about these wonderful Aquatic Mammals</p> <div class="gifBG svelte-1u1pgfh"><div class="overlay"></div></div> <h2 class="svelte-1u1pgfh">Hey, why not Subscribe to our newsletter!</h2> <input type="emailAddress" placeholder="Enter Your Email Address">  <!> <!> <div class="buttons svelte-1u1pgfh"><button class="svelte-1u1pgfh">Play Song</button> <button class="svelte-1u1pgfh">Stop playing the Song</button></div>  <!>',1);function Sa(_,y){ta(y,!1);let c=E(""),w=E(!1),d=null,r=E(!1);const l={audio:`${t}/waveOcean.mp3`};function n(){d=new Audio(l.audio),d.volume=.2,d.play(),console.log("Audio is playing!")}function e(){d.pause(),console.log("audioOver")}function f(){O(w,/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i(c))),console.log("testing Email Address input by user")}na();var p=fa(),s=o(A(p),8);ia(s);var R=o(s,2);{var I=a=>{var m=J(),L=A(m);{var M=u=>{var v=ca(),S=o(A(v),2),z=W(S,!0);D(S),ra(()=>oa(z,i(r)?"🐳You are now Subscribed":"🐋 Not Subscribed")),h("click",S,()=>O(r,!i(r))),g(u,v)},V=u=>{var v=da();g(u,v)};$(L,u=>{i(w)?u(M):u(V,!1)})}g(a,m)};$(R,a=>{i(c)&&a(I)})}var N=o(R,2);{var P=a=>{var m=ga();g(a,m)},q=a=>{};$(N,a=>{i(r)?a(P):a(q,!1)})}var k=o(N,2),T=W(k),G=o(T,2);D(k);var H=o(k,2);ua(H,()=>`<style>
    @keyframes gifs { 
        0%, 10% { 
            background-image: url('${t}/whaleJump.gif');
            opacity: 0.5;
            
        }

        10%, 20% { 
            background-image: url('${t}/orca.gif');
            opacity: 0.5;
            
        }

        20%, 40% { 
            background-image: url('${t}/whaleCrash.gif');
            opacity: 0.5;
        }

        40%, 50% { 
            background-image: url('${t}/whaleAppears.gif');
            opacity: 0.5;
        }

        50%, 60% { 
            background-image: url('${t}/whaleOutlineSwim.gif');
            opacity: 0.5;
        }

        60%, 70% { 
            background-image: url('${t}/dolphin.gif');
            opacity: 0.5;
        }

        70%, 80% { 
            background-image: url('${t}/whaleCrash.gif');
            opacity: 0.5;
        }

        70%, 80% { 
            background-image: url('${t}/waterOrca.gif');
            opacity: 0.5;
        }

        80%, 90% { 
            background-image: url('${t}/whaleSave.gif');
            opacity: 0.5;
        }

        90%, 100% { 
            background-image: url('${t}/whaleUnderwater.gif');
            opacity: 0.5;
            
        }
    }
</style`),la(s,()=>i(c),a=>O(c,a)),h("input",s,f),h("click",T,n),h("click",G,e),g(_,p),sa()}export{Sa as component};
