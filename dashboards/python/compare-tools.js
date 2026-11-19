const renderToolComparison = (() => {
  const tools = {
    python: {name:'Python', source:'Browser dashboard', links: view => [['Open in Deck analysis', '#'+chartId(view)]]},
    tableau: {name:'Tableau', source:'Tableau Cloud export', links: () => [['Packaged workbook', '../tableau/gameplay.twbx']]},
    'power-bi': {name:'Microsoft Power BI', source:'Power BI service capture', links: () => [['Paginated report', '../power-bi/Commander%20Gameplay%20Comparison.rdl'], ['Desktop project', '../power-bi/Comparison.pbip']]}
  };
  const slug = name => name.toLowerCase().replaceAll(' ', '-');
  const charts = chartFamilies.flatMap(([,names])=>names);
  const picker = el('toolsChart'), gallery = el('toolGallery');
  const buttons = Array.from(document.querySelectorAll('[data-tool]'));
  let view = charts[0], mode = 'all';
  function imageFile(tool, chart) {
    const key = slug(chart);
    if(tool==='tableau') return 'tableau-'+({'deployment-routes':'deployment','recovery-routes':'recovery'}[key] || key)+'.png';
    if(tool==='python' && chart!=='Printed curve') return 'python-'+key+'.webp';
    return tool+'-'+key+(tool==='python'?'.png':'.jpg');
  }
  for (const [group,names] of chartFamilies) {
    const opt = document.createElement('optgroup'); opt.label=group;
    names.forEach(n=>opt.append(new Option(n,n))); picker.append(opt);
  }
  function draw() {
    picker.value=view;
    el('toolZoomLabel').hidden=mode==='all';
    gallery.dataset.zoom=mode==='all'?'fit':el('toolZoom').value;
    el('toolsTitle').textContent=view;
    el('toolsUnit').textContent=({
      'Printed card colors':'Share of nonland slots, including commanders. Python labels segments with slot counts; Tableau and Power BI show percentages.',
      'Commander identity':'Commander color identity, not printed card color. A deck can count toward more than one color.'
    })[view] || data.matrices[view]?.note || '';
    buttons.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.tool===mode)));
    gallery.classList.toggle('multiple',mode==='all');
    gallery.replaceChildren();
    for(const [id,t] of Object.entries(tools)) {
      if (mode!=='all' && mode!==id) continue;
      const figure=tag('figure'), heading=tag('h3',t.name);
      const top=tag('div',undefined,'tool-byline');top.append(heading,tag('span',t.source));
      const original='../comparison/'+imageFile(id,view);
      const link=tag('a');link.href=mode==='all'?'#compare-tools/'+id+'/'+slug(view):original;
      link.setAttribute('aria-label',(mode==='all'?'Focus ':'Open full-resolution ')+t.name+' chart: '+view);
      if(mode==='all') link.onclick=event=>{
        if(event.ctrlKey||event.metaKey||event.shiftKey||event.altKey)return;
        event.preventDefault();setSelection(view,id);
        buttons.find(b=>b.dataset.tool===id).focus();
      };
      else {link.target='_blank';link.rel='noopener';}
      const img=tag('img');img.alt=t.name+': '+view+' across the 20 sample decks';img.src=original;
      link.append(img);
      const links=tag('figcaption');
      const full=tag('a','Full-resolution image');full.href=original;full.target='_blank';full.rel='noopener';links.append(full);
      for(const [label,url] of t.links(view)){const a=tag('a',label);a.href=url;links.append(a);}
      const frame=tag('div',undefined,'tool-image');frame.append(link);
      if(mode!=='all' && el('toolZoom').value!=='fit'){
        frame.tabIndex=0;frame.setAttribute('role','region');frame.setAttribute('aria-label',t.name+': zoomed '+view);
      }
      figure.append(top,frame,links);gallery.append(figure);
    }
  }
  function setSelection(v,m) {
    view=v;mode=m;
    history.replaceState(null,'','#compare-tools/'+m+'/'+slug(v));
    draw();
  }
  picker.onchange=()=>setSelection(picker.value,mode);
  el('toolZoom').onchange=draw;
  buttons.forEach(b=>b.onclick=()=>setSelection(view,b.dataset.tool));
  return () => {
    const [,requestedMode,requestedChart]=location.hash.split('/');
    if(requestedMode) mode=Object.hasOwn(tools,requestedMode)?requestedMode:'all';
    if(requestedChart) view=charts.find(n=>slug(n)===requestedChart)||charts[0];
    draw();
  };
})();
