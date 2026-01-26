
(function(){
  // Simple auth for static GitHub Pages:
  // login sets localStorage 'shababjo_auth' = '1'
  window.shababJO = window.shababJO || {};
  window.shababJO.isAuthed = function(){
    return localStorage.getItem('shababjo_auth') === '1';
  };
  window.shababJO.requireAuth = function(){
    if(!window.shababJO.isAuthed()){
      const next = encodeURIComponent(location.pathname.split('/').pop() || 'home.html');
      location.href = 'login.html?next=' + next;
    }
  };
  window.shababJO.logout = function(){
    localStorage.removeItem('shababjo_auth');
    location.href = 'login.html';
  };
})();


