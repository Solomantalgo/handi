(async()=>{
const targets=await(await fetch('http://127.0.0.1:9331/json')).json();
const page=targets.find(t=>t.type==='page');
const ws=new WebSocket(page.webSocketDebuggerUrl);
await new Promise(resolve=>ws.addEventListener('open',resolve,{once:true}));
let id=0;const pending=new Map();
ws.addEventListener('message',e=>{const m=JSON.parse(e.data);if(m.id&&pending.has(m.id)){pending.get(m.id)(m);pending.delete(m.id)}else if(m.method==='Runtime.exceptionThrown')console.log('EXCEPTION',JSON.stringify(m.params.exceptionDetails))});
const send=(method,params={})=>new Promise(resolve=>{const n=++id;pending.set(n,resolve);ws.send(JSON.stringify({id:n,method,params}))});
await send('Runtime.enable');await send('Log.enable');
const r=await send('Runtime.evaluate',{expression:`JSON.stringify({title:document.title,branch:document.querySelector('#activeBranchName')?.textContent,collectionCount:document.querySelectorAll('.collection-card').length,resultTitle:document.querySelector('#resultTitle')?.textContent,active:typeof state,products:typeof products,script:[...document.scripts].map(x=>x.src)})`,returnByValue:true});
console.log(r.result.result.value);ws.close();
})();
