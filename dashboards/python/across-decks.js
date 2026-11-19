// The field view has its own controls; the head-to-head chart above stays independent.
const chartFamilies = [
  ['Gameplay', ['Printed curve','Deployment routes','Interaction targets','Interaction methods','Recovery routes']],
  ['Color', ['Commander identity','Printed card colors','Casting-cost emphasis']],
  ['Card and creature types', ['Card types','Creature types','Creature composition','Human-adjusted tribes']],
  ['Gameplay detail', ['Mana and access','Timing and setup','Interaction readiness']]
];
const displayTitles={'Printed curve':'Printed curve: cards in the library','Deployment routes':'Ways to deploy and spend mana',
 'Interaction targets':'Interaction: potential resource coverage','Interaction methods':'Interaction: different kinds of answers',
 'Recovery routes':'Reuse, replenishment and recovery','Commander identity':'Commander color identity',
 'Printed card colors':'Nonland color composition','Casting-cost emphasis':'Printed casting-cost color emphasis',
 'Creature types':'Leading printed creature types','Human-adjusted tribes':'Leading types with Human adjusted'};
const fieldOptions=chartFamilies.flatMap(([group,views])=>views.filter(v=>Object.hasOwn(data.matrices,v)).map(v=>({group,view:v})));
for(const v of Object.keys(data.matrices))if(!fieldOptions.some(o=>o.view===v))fieldOptions.push({group:'Gameplay detail',view:v});
const chooseChart=new Option('Choose one of '+fieldOptions.length+' charts…','');chooseChart.disabled=true;el('fieldView').append(chooseChart);
for(const group of new Set(fieldOptions.map(o=>o.group))){const g=tag('optgroup');g.label=group;for(const o of fieldOptions.filter(o=>o.group===group))g.append(new Option(displayTitles[o.view]||o.view,o.view));el('fieldView').append(g);}
let allField=false,singleView=fieldOptions[0].view;
const chartId=v=>'across-'+v.toLowerCase().replace(/[^a-z0-9]+/g,'-');
function drawFieldChart(view,group) {
 const full=data.matrices[view],m=full.subsets[group]||full;
 const fig=tag('figure',undefined,'field-figure');fig.id=chartId(view);fig.dataset.view=view;
 const heading=tag('div',undefined,'sectionhead');heading.append(tag('h3',displayTitles[view]||view));
 if(allField){const back=tag('a','Chart index','jump-back');back.href='#field';heading.append(back);}
 const caption=tag('figcaption',m.note);if(m.max!=null){const key=tag('span',undefined,'key');key.append('0 ',tag('i'),' '+m.max+(m.unit==='%'?'%':''));caption.append(' ',key);}
 if(m.legend){const legend=tag('div',undefined,'legend');for(const [label,color] of Object.entries(m.legend)){const entry=tag('span'),key=tag('i');key.style.borderColor=color;entry.append(key,label);legend.append(entry);}caption.append(legend);}
 const plot=tag('div',undefined,'matrix');plot.innerHTML=m.svg;const evidence=tag('div',undefined,'evidence');evidence.setAttribute('aria-live','polite');
 const marks=[...plot.querySelectorAll('[data-cell]')];marks.forEach((mark,i)=>mark.setAttribute('tabindex',i===0?'0':'-1'));
 function selectMark(mark){const r=m.rows[Number(mark.dataset.cell)];if(!r)return;
   const val=r.display??r.count;const b=tag('strong',r.deck+' · '+r.category+' ('+val+')');
   const p=tag('p',r.cards||'No cards counted.');const audit=tag('button','Card evidence','sw');
   audit.onclick=()=>auditTo(r.deck,'',r.cards);evidence.replaceChildren(b,p,audit);
   evidence.scrollIntoView({block:'nearest'});}
 plot.onclick=e=>{const m=e.target.closest('[data-cell]');if(m)selectMark(m);};
 plot.onkeydown=e=>{const mark=e.target.closest('[data-cell]');if(!mark)return;
   if(e.key==='Enter'||e.key===' '){e.preventDefault();selectMark(mark);}
   if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key)){e.preventDefault();const r=m.rows[+mark.dataset.cell],i=marks.indexOf(mark),step=e.key==='ArrowLeft'||e.key==='ArrowUp'?-1:1;
     const next=e.key==='ArrowLeft'||e.key==='ArrowRight'?marks[i+step]:marks.filter((p,j)=>(j-i)*step>0&&m.rows[+p.dataset.cell].category===r.category)[step===1?'shift':'pop']();
     if(next){mark.setAttribute('tabindex','-1');next.setAttribute('tabindex','0');next.focus();}}};
 fig.append(heading,caption,plot,evidence);return fig;
}
function renderField(){
 el('fieldView').value=allField?'':singleView;
 const group=el('fieldGroup').value,views=allField?fieldOptions.map(o=>o.view):[singleView];
 el('singleMode').setAttribute('aria-pressed',String(!allField));el('allMode').setAttribute('aria-pressed',String(allField));
 const n=Object.values(data.decks).filter(d=>!group||d.group==='Your deck'||d.group===group).length;
 el('fieldStatus').textContent=views.length+' '+(allField?'charts':'chart')+' · '+n+' decks'+(group?' including yours':'');
 el('fieldPlots').replaceChildren(...views.map(v=>drawFieldChart(v,group)));
 const links=el('fieldJumps');links.replaceChildren();links.hidden=!allField;
 if(allField)for(const {view} of fieldOptions){const a=tag('a',view);a.href='#'+chartId(view);links.append(a);}
}
el('singleMode').onclick=()=>{allField=false;renderField();};
el('allMode').onclick=()=>{allField=true;renderField();};
el('fieldView').onchange=()=>{singleView=el('fieldView').value;allField=false;renderField();};
el('fieldGroup').onchange=renderField;renderField();
