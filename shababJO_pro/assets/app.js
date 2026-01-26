(function(){
  // Tiny UX helpers (toasts + page transitions)
  const wrap = document.createElement('div');
  wrap.className = 'toast-wrap';
  document.addEventListener('DOMContentLoaded', ()=> document.body.appendChild(wrap), {once:true});

  function toast(type, title, desc){
    const el = document.createElement('div');
    el.className = `toast ${type||'info'}`;
    el.innerHTML = `
      <div class="dot"></div>
      <div>
        <p class="t">${escapeHtml(title||'')}</p>
        ${desc ? `<p class="d">${escapeHtml(desc)}</p>` : ``}
      </div>
    `;
    wrap.appendChild(el);
    setTimeout(()=>{ el.style.opacity='0'; el.style.transform='translateY(-6px)'; }, 3300);
    setTimeout(()=>{ el.remove(); }, 3900);
  }

  function escapeHtml(str){
    return String(str ?? "")
      .replaceAll("&","&amp;")
      .replaceAll("<","&lt;")
      .replaceAll(">","&gt;")
      .replaceAll('"',"&quot;")
      .replaceAll("'","&#039;");
  }

  window.shababJO = window.shababJO || {};
  window.shababJO.toast = toast;
})();
