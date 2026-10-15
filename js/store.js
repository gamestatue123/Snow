/* ---------- Storage adapter ----------
   Swap this object for Firebase/Supabase/REST later: just keep load()/save(data) async.
*/
const Store={
  key:'snow.v1',
  async load(){try{const r=localStorage.getItem(this.key);return r?JSON.parse(r):null}catch(e){return this.mem||null}},
  async save(d){this.mem=d;try{localStorage.setItem(this.key,JSON.stringify(d))}catch(e){}}
};
