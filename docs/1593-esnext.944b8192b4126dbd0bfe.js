(self.webpackChunkcustomOverlays=self.webpackChunkcustomOverlays||[]).push([[1593],{1593:function(e,t,n){"use strict";n.r(t),n.d(t,{createSwipeBackGesture:function(){return s}});var r=n(8146),a=n(7279);n(960);const s=(e,t,n,s,c)=>{const o=e.ownerDocument.defaultView;return(0,a.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:e=>e.startX<=50&&t(),onStart:n,onMove:e=>{s(e.deltaX/o.innerWidth)},onEnd:e=>{const t=o.innerWidth,n=e.deltaX/t,a=e.velocityX,s=a>=0&&(a>.2||e.deltaX>t/2),u=(s?1-n:n)*t;let i=0;if(u>5){const e=u/Math.abs(a);i=Math.min(e,540)}c(s,n<=0?.01:(0,r.j)(0,n,.9999),i)}})}}}]);