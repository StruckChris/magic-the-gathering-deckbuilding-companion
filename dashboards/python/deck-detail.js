let readReference=false;
function tag(tagName,text,cls){const node=document.createElement(tagName);if(text!==undefined)node.textContent=text;if(cls)node.className=cls;return node;}
let exactCards=null;
function auditTo(deck,role,cards){el('auditDeck').value=deck;el('auditRole').value=role||'';el('query').value='';exactCards=cards===undefined?null:new Set(cards.split('; ').filter(Boolean));renderAudit();el('audit').scrollIntoView({block:'start'});}
function updateReview(){
 const ref=data.decks[el('opponent').value],d=readReference?ref:player,own=player.review,other=ref.review;
 el('headline').replaceChildren();for(const [title,k] of [['Mean library MV','mean_mv'],['Mana rocks','mana_rocks'],['Interaction-capable','interaction'],['Instant / flash interaction','instant_interaction']]){
   const box=tag('div');box.append(tag('small',title),tag('strong',own[k]),document.createTextNode('  /  '),tag('em',other[k]));box.title=player.name+' / '+ref.name;el('headline').append(box);}
 el('ownRead').setAttribute('aria-pressed',!readReference);el('refRead').setAttribute('aria-pressed',readReference);
 el('readingName').textContent=d.name;const body=el('readout');body.replaceChildren();
 for(const [title,k] of [['Library plan','game_plan'],['Commander dependence','commander_dependence'],['What interrupts it','interruption'],['Alternate deployment','alternate_routes'],['Resource reuse','resource_reuse'],['Recovery after disruption','recovery']]){
    const node=tag('details');node.open=['Library plan','What interrupts it'].includes(title);
    node.append(tag('summary',title),tag('p',d.review[k]));body.append(node);}
 const link=tag('button','Inspect this deck’s cards','sw');link.onclick=()=>auditTo(d.name,'');body.append(link);}
el('ownRead').onclick=()=>{readReference=false;updateReview()};el('refRead').onclick=()=>{readReference=true;updateReview()};
const fieldKeys=['deployment','targets','methods','recovery','timing','readiness','mana_access'];
function renderAudit(){
 const deck=data.decks[el('auditDeck').value],role=el('auditRole').value,q=el('query').value.toLowerCase().trim(),body=el('auditBody');
 body.replaceChildren();let n=0;
 for(const card of deck.audit){
   if(exactCards&&!exactCards.has(card.name))continue;
   const tags=fieldKeys.flatMap(k=>(card[k]||'').split('; ').filter(Boolean));if(role&&!tags.includes(role))continue;
   if(q&&![card.name,card.oracle_text,card.conditions,card.face_costs].join(' ').toLowerCase().includes(q))continue;
   const row=tag('tr'),first=tag('td'),details=tag('details');details.append(tag('summary',card.name+(card.zone==='Commander'?' · commander':'')+(+card.quantity>1?' ×'+card.quantity:'')),tag('p',card.oracle_text,'oracle'));
   const url=tag('a','Scryfall');url.href=card.url;url.target='_blank';url.rel='noopener noreferrer';details.append(url);first.append(details);
   const labels=[...new Set(tags.filter(t=>!(card.timing||'').split('; ').includes(t)))].join(' · ');
   const printed=tag('td');printed.append(tag('b','MV '+Number(card.mv)),tag('div',card.face_costs,'sub'));
   row.append(first,printed,tag('td',card.timing||'—'),tag('td',labels||'—'),tag('td',card.conditions||'See printed text'));body.append(row);n++;}
 el('auditStatus').textContent=n+' of '+deck.audit.length+' distinct entries · '+deck.name;
 if(exactCards){const reset=tag('button','Clear chart selection','sw');reset.onclick=()=>{exactCards=null;renderAudit();};el('auditStatus').append(' · ',reset);}}
const roleSet=new Set();for(const d of Object.values(data.decks))for(const c of d.audit)for(const k of fieldKeys)for(const t of c[k].split('; ').filter(Boolean))roleSet.add(t);
el('auditRole').append(new Option('All main-deck cards',''));for(const t of [...roleSet].sort())el('auditRole').append(new Option(t,t));
el('auditDeck').onchange=()=>{exactCards=null;renderAudit()};el('auditRole').onchange=()=>{exactCards=null;renderAudit()};el('query').oninput=renderAudit;renderAudit();updateReview();
for(const [title,desc] of Object.entries(data.defs)){el('defs').append(tag('dt',title),tag('dd',desc));}
const tab=tag('table'),thead=tag('thead'),headRow=tag('tr'),groupNames=[...new Set(data.means.map(r=>r.group))];
headRow.append(tag('th','Measure'));for(const g of groupNames)headRow.append(tag('th',g+(g==='Your deck'?'':' mean')));thead.append(headRow);tab.append(thead);
const tbody=tag('tbody');for(const metric of new Set(data.means.map(r=>r.metric))){const tr=tag('tr');tr.append(tag('th',metric));for(const g of groupNames){const row=data.means.find(r=>r.group===g&&r.metric===metric);tr.append(tag('td',row?Number(row.value).toFixed(g==='Your deck'&&metric!=='Mean library MV'?0:2):'—'));}tbody.append(tr);}tab.append(tbody);el('cohortTable').append(tab);
