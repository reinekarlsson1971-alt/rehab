(function(){
  // Mark active nav based on current path
  const path = (location.pathname || '').toLowerCase();
  document.querySelectorAll('[data-nav]').forEach(a=>{
    const href = (a.getAttribute('href')||'').toLowerCase();
    if(!href) return;
    // Basic match: end of path equals href, or path contains folder + index.html
    const normalized = href.replace('./','/');
    if(path.endsWith(normalized) || (normalized.endsWith('/index.html') && path.endsWith(normalized.replace('/index.html','/')))){
      a.setAttribute('aria-current','page');
    }
  });

  // Smooth scroll for in-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const id = a.getAttribute('href');
      if(!id || id.length < 2) return;
      const el = document.querySelector(id);
      if(!el) return;
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth', block:'start'});
      history.replaceState(null,'',id);
    });
  });
})();
