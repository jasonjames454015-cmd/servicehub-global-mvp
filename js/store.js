const SHG = (() => {
  const K = "shg-v2";
  const empty = () => ({ requests: [], providers: [], waitlist: [], quotes: [], pipeline: [] });
  function load() {
    try { return Object.assign(empty(), JSON.parse(localStorage.getItem(K) || "{}")); }
    catch { return empty(); }
  }
  function save(d) { localStorage.setItem(K, JSON.stringify(d)); }
  function id() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }
  return {
    load, save,
    addRequest(row) { const d = load(); d.requests.unshift({ id: id(), created: new Date().toISOString(), ...row }); save(d); },
    addProvider(row) { const d = load(); d.providers.unshift({ id: id(), created: new Date().toISOString(), ...row }); save(d); },
    addWaitlist(email) { const d = load(); if (email && !d.waitlist.includes(email)) d.waitlist.push(email); save(d); },
    addQuote(row) { const d = load(); d.quotes.unshift({ id: id(), created: new Date().toISOString(), ...row }); save(d); },
    addPipeline(row) { const d = load(); d.pipeline.unshift({ id: id(), created: new Date().toISOString(), status: "idea", value: 0, ...row }); save(d); },
    setPipelineStatus(id, status) { const d = load(); const p = d.pipeline.find(x => x.id === id); if (p) p.status = status; save(d); },
    stats() { const d = load(); return { requests: d.requests.length, providers: d.providers.length, waitlist: d.waitlist.length, quotes: d.quotes.length, pipeline: d.pipeline.length }; }
  };
})();
