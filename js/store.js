(function (w) {
  const KEY = "shg_v1";
  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || { requests: [], providers: [], waitlist: [] }; }
    catch (e) { return { requests: [], providers: [], waitlist: [] }; }
  }
  function save(data) { localStorage.setItem(KEY, JSON.stringify(data)); }
  function uid() { return "id_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }
  w.SHG = {
    load,
    addRequest(rec) {
      const d = load();
      rec.id = uid(); rec.createdAt = new Date().toISOString(); rec.status = "open";
      d.requests.unshift(rec); save(d); return rec;
    },
    addProvider(rec) {
      const d = load();
      rec.id = uid(); rec.createdAt = new Date().toISOString();
      d.providers.unshift(rec); save(d); return rec;
    },
    addWaitlist(email) {
      const d = load();
      d.waitlist.unshift({ email, createdAt: new Date().toISOString() });
      save(d);
    },
    stats() {
      const d = load();
      return { requests: d.requests.length, providers: d.providers.length, waitlist: d.waitlist.length };
    }
  };
})(window);
