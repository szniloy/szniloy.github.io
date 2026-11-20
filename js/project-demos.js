/* =====================================================================
   PROJECT DEMOS — popup engine + built-in prototypes (food, chat, air)
   Settings live in project-demos-config.js. No need to edit this file.
   ===================================================================== */
/* ===================== ICONS (used inside the prototypes) ===================== */
const PM_ICON = (()=>{
  const s = (d, extra='') => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ${extra}>${d}</svg>`;
  return {
    back: s('<path d="M15 18l-6-6 6-6"/>'),
    cart: s('<circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.5L21 8H6.2"/>'),
    bell: s('<path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/>'),
    home: s('<path d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/>'),
    compass: s('<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>'),
    bag: s('<path d="M6 7h12l1 13H5z"/><path d="M9 7a3 3 0 0 1 6 0"/>'),
    user: s('<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>'),
    users: s('<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><circle cx="17.5" cy="9" r="2.5"/><path d="M17 14.5a5 5 0 0 1 5 5"/>'),
    star: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.8l2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.2l-5.7 3.1 1.2-6.4-4.7-4.4 6.4-.8z"/></svg>`,
    heart: s('<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z"/>'),
    heartFill: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z"/></svg>`,
    plus: s('<path d="M12 5v14M5 12h14"/>', 'stroke-width="2.6"'),
    check: s('<path d="M5 12.5l4.5 4.5L19 7.5"/>', 'stroke-width="3"'),
    pin: s('<path d="M12 21s7-6.2 7-11.5a7 7 0 0 0-14 0C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>'),
    search: s('<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>'),
    send: s('<path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4z"/>'),
    phone: s('<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>'),
    plane: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z"/></svg>`,
    swap: s('<path d="M7 4v16M7 20l-3-3M7 20l3-3M17 20V4M17 4l-3 3M17 4l3 3"/>'),
    calendar: s('<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>'),
    seat: s('<path d="M6 4v9a2 2 0 0 0 2 2h8"/><path d="M6 15l-1 5M16 15l2 5M9 9h6l2 6"/>'),
    caret: s('<path d="M6 9l6 6 6-6"/>'),
    ticket: s('<path d="M3 8a2 2 0 0 0 2-2h14a2 2 0 0 0 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 0-2 2H5a2 2 0 0 0-2-2v-2a2 2 0 0 0 0-4z"/>'),
    lock: s('<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>'),
    bike: s('<circle cx="5.5" cy="17" r="3"/><circle cx="18.5" cy="17" r="3"/><path d="M5.5 17l4-8h5l4 8M9.5 9L8 6H6M14.5 9l2-3h2"/>'),
    play: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 4.5v15l13-7.5z"/></svg>`
  };
})();

const pmEsc = t => String(t).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const pmMoney = n => '$' + n.toFixed(2);
const pmStars = (n) => `<span class="ui-stars">${[1,2,3,4,5].map(i=>`<span class="${i<=Math.round(n)?'':'ui-off'}">${PM_ICON.star}</span>`).join('')}</span>`;
const pmNowTime = () => new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});

/* ============================================================================
   BUILT-IN PROTOTYPES
   Each one: theme, flows (screen groups shown in the side panel), start screen,
   init() → fresh state, screens{ id:{ label, render(S), enter?(S,api), light? } },
   actions{ name(S,api,value,el) }, forms{ name(S,api,formEl) }
   ============================================================================ */
const PROTOTYPES = {};

/* ---------------------------------- FOOD ---------------------------------- */
PROTOTYPES.food = (() => {
  const IMG_DIR = 'resources/prototypes/food-app/'; // photos used inside this prototype
  const MENU = [
    {id:'pizza',  name:'Margarita Pizza', cat:'Pizza',    rate:4.5, time:'25-30 min', price:5.99,  img:'pizza',
     desc:'Margherita pizza with a simple combination of the Italian classics: tomato sauce, fresh mozzarella and basil on a stone-baked crust.',
     ing:['Dough','Cheese','Tomato sauce','Chicken','Black pepper']},
    {id:'burger', name:'Chicken Burger',  cat:'Burger',   rate:4.5, time:'30 min',    price:7.49,  img:'burger',
     desc:'Double grilled chicken patty, melted cheddar, pickles, fresh lettuce and house sauce in a toasted brioche bun.',
     ing:['Brioche bun','Chicken patty','Cheddar','Pickles','House sauce']},
    {id:'hotdog', name:'Hot Dog',         cat:'Hot Dog',  rate:4.5, time:'25 min',    price:5.99,  img:'hotdog',
     desc:'Smoky grilled sausage in a soft bun, topped with caramelised onions, mustard and crispy shallots.',
     ing:['Soft bun','Beef sausage','Onions','Mustard','Shallots']},
    {id:'chicken',name:'BBQ Chicken',     cat:'Chicken',  rate:4.5, time:'20 min',    price:10.99, img:'chicken',
     desc:'Half chicken slow-roasted and glazed with smoky BBQ sauce, served with fries.',
     ing:['Half chicken','BBQ glaze','Garlic','Paprika','Fries']},
    {id:'sea',    name:'Seafood Platter', cat:'Sea Food', rate:4.6, time:'35 min',    price:12.99, img:'sea',
     desc:'Grilled prawns, calamari and fish fillet with herbs, lemon butter and a fresh side salad.',
     ing:['Prawns','Calamari','Fish fillet','Lemon butter','Herbs']}
  ];
  const CATS = [['Burger','c_burger'],['Pizza','c_pizza'],['Sea Food','c_sea'],['Hot Dog','c_hotdog'],['Chicken','c_chicken']];
  const SIZES = [['Small',0],['Medium',1.5],['Large',3]];
  const find = id => MENU.find(m => m.id === id) || MENU[0];
  const img = (k, alt='') => `<img src="${IMG_DIR}${k}.jpg" alt="${pmEsc(alt)}">`;
  const count = S => Object.values(S.cart).reduce((a,c)=>a+c.q,0);
  const sub = S => Object.values(S.cart).reduce((a,c)=>a+c.q*c.p,0);
  const DELIVERY = 1.99;

  const tabbar = on => `<div class="ui-tabbar">
      ${[['home','home','Home'],['category','compass','Explore'],['cart','bag','Cart'],['tracking','user','Orders']].map(([id,ic,l]) =>
        `<button class="ui-tab ${on===id?'ui-on':''}" data-go="${id}">${PM_ICON[ic]}${on===id?l:''}</button>`).join('')}
    </div>`;
  const top = (title, back='home', right='') => `<div class="ui-top"><button class="ui-back" data-go="${back}" aria-label="Back">${PM_ICON.back}</button><div class="ui-title ui-grow">${title}</div>${right}</div>`;

  return {
    theme:{bg:'#000', card:'#141414', card2:'#1E1E1E', ink:'#fff', mute:'#9A9A9A', acc:'#2ECC71', line:'#232323', onAcc:'#04140A'},
    light:true,
    start:'splash',
    views:[['Customer','home'],['Restaurant','dash',['dash','order']]],
    flows:[
      {name:'Start', screens:['splash']},
      {name:'Browse', screens:['home','category','detail','reviews']},
      {name:'Order', screens:['cart','checkout','placed','tracking']},
      {name:'Restaurant', screens:['dash','order']}
    ],
    init(){
      return { cat:'All', item:'pizza', size:'Medium', qty:1, cart:{}, fav:{}, when:'Now', pay:'card',
        track:0, orderNo:4800 + Math.floor(Math.random()*190), hasOrder:false,
        dashTab:'new', openOrder:2041,
        orders:[
          {id:2041, name:'Robert Fox',    items:['2× Chicken Burger','1× Hot Dog'], total:20.97, st:'new'},
          {id:2040, name:'Kristin Watson',items:['1× Margarita Pizza (Large)'],     total:8.99,  st:'new'},
          {id:2038, name:'Cody Fisher',   items:['1× BBQ Chicken'],                 total:10.99, st:'prep'},
          {id:2036, name:'Esther Howard', items:['2× Seafood Platter'],             total:25.98, st:'ready'}
        ] };
    },
    screens:{
      splash:{ label:'Splash', render:()=>`
        <div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;background:radial-gradient(80% 60% at 50% 100%,#1f7a45 0%,#04130a 55%,#000 100%)">
          <div style="width:74px;height:74px;border-radius:22px;background:var(--ui-acc);display:flex;align-items:center;justify-content:center;font-size:36px;animation:uiPop .6s cubic-bezier(.2,1.6,.4,1)">🍕</div>
          <div style="font-family:var(--font-display);font-size:34px;font-weight:700;margin-top:18px;letter-spacing:-.02em">Food App</div>
          <div class="ui-mute" style="margin-top:4px">Enjoy your food</div>
        </div>`,
        enter:(S,api)=>api.later(()=>api.go('home'),1700) },

      home:{ label:'Home', render:S=>`
        <div class="ui-pad">
          <div class="ui-between">
            <div class="ui-flex" style="min-width:0;flex:1"><div class="ui-av" style="background:#3b3b3b;width:38px;height:38px">JC</div>
              <div style="min-width:0"><b style="font-size:13.5px">Jane Cooper</b><div class="ui-mute ui-small ui-ell">4517 Washington Ave. Manchester</div></div></div>
            <div class="ui-flex" style="gap:8px">
              <button class="ui-iconbtn ui-white" data-go="cart" aria-label="Cart">${PM_ICON.cart}${count(S)?`<span class="ui-dotcount">${count(S)}</span>`:''}</button>
              <button class="ui-iconbtn ui-white" data-act="toast" data-v="No new notifications" aria-label="Notifications">${PM_ICON.bell}</button>
            </div>
          </div>
          <div class="ui-between" style="margin:18px 0 8px"><span></span><button class="ui-link" data-act="cat" data-v="All">See All</button></div>
          <button data-act="cat" data-v="Pizza" style="display:block;width:100%">${img('banner','Big pizza sale').replace('<img','<img class="ui-banner"')}</button>
          <div class="ui-dots"><i></i><i></i><i></i><i></i><i></i></div>
          <div class="ui-between ui-sec"><span class="ui-h2">Categories</span><button class="ui-link" data-act="cat" data-v="All">See All</button></div>
          <div class="ui-cats">${CATS.map(([c,k])=>`<button class="ui-cat" data-act="cat" data-v="${c}">${img(k,c)}${c}</button>`).join('')}</div>
          <div class="ui-between ui-sec"><span class="ui-h2">Popular Foods</span><button class="ui-link" data-act="cat" data-v="All">See All</button></div>
          <div class="ui-fgrid">${MENU.slice(0,4).map(m=>`
            <button class="ui-food" data-act="item" data-v="${m.id}">
              <div class="ui-img">${img(m.img,m.name)}<span class="ui-rate">${PM_ICON.star}${m.rate}</span></div>
              <b>${m.name}</b><div class="ui-mute" style="font-size:10.5px">${m.cat}</div>
              <div class="ui-small" style="margin-top:6px">${m.time}</div><div class="ui-acc ui-small" style="font-weight:600">${pmMoney(m.price)}</div>
            </button>`).join('')}</div>
        </div>${tabbar('home')}` },

      category:{ label:'Categories', render:S=>{
        const list = MENU.filter(m => S.cat==='All' || m.cat===S.cat);
        return `<div class="ui-pad">${top('Categories')}
          <div class="ui-chips">${['All',...CATS.map(c=>c[0])].map(c=>`<button class="ui-chip ${S.cat===c?'ui-on':''}" data-act="setcat" data-v="${c}">${c}</button>`).join('')}</div>
          ${list.map(m=>`<div class="ui-row">
              <button data-act="item" data-v="${m.id}" style="flex-shrink:0">${img(m.img,m.name)}</button>
              <button class="ui-grow" data-act="item" data-v="${m.id}" style="text-align:left">
                <b>${m.name}</b><div class="ui-mute" style="font-size:10.5px">${m.cat}</div>
                <div class="ui-small" style="margin-top:4px">${m.time}</div><div class="ui-acc ui-small" style="font-weight:600">${pmMoney(m.price)}</div>
              </button>
              <button class="ui-plus" data-act="quick" data-v="${m.id}" aria-label="Add ${m.name}">${PM_ICON.plus}</button>
            </div>`).join('')}
        </div>${tabbar('category')}`; } },

      detail:{ label:'Food details', render:S=>{
        const m = find(S.item), extra = SIZES.find(s=>s[0]===S.size)[1], each = m.price+extra;
        return `<div class="ui-pad" style="padding-top:0;padding-bottom:100px">
          <div class="ui-hero">${img(m.img,m.name)}
            <button class="ui-back" data-go="home" aria-label="Back">${PM_ICON.back}</button>
            <button class="ui-fav ${S.fav[m.id]?'ui-on':''}" data-act="fav" data-v="${m.id}" aria-label="Favourite">${S.fav[m.id]?PM_ICON.heartFill:PM_ICON.heart}</button>
          </div>
          <div class="ui-between" style="margin-top:6px;align-items:flex-start">
            <div><div class="ui-h1">${m.name}</div><div class="ui-mute">${m.cat}</div></div>
            <div class="ui-acc" style="font-size:18px;font-weight:800">${pmMoney(each)}</div>
          </div>
          <button class="ui-flex" data-go="reviews" style="gap:6px;margin-top:8px">${pmStars(m.rate)}<span class="ui-small">${m.rate}</span><span class="ui-small ui-acc" style="font-weight:600">(100 reviews)</span></button>
          <div class="ui-h2 ui-sec" style="margin-bottom:6px">Description</div>
          <p class="ui-mute" style="font-size:12.5px;line-height:1.6">${m.desc}</p>
          <div class="ui-h2 ui-sec" style="margin-bottom:6px">Ingredients</div>
          <ol class="ui-ol">${m.ing.map(i=>`<li>${i}</li>`).join('')}</ol>
          <div class="ui-h2 ui-sec">Size</div>
          <div class="ui-sizes">${SIZES.map(([s,p])=>`<button class="${S.size===s?'ui-on':''}" data-act="size" data-v="${s}">${s}${p?` +$${p}`:''}</button>`).join('')}</div>
          <div class="ui-between ui-sec"><span class="ui-h2">Quantity</span>
            <div class="ui-qty"><button data-act="qty" data-v="-1" aria-label="Less">−</button><b>${S.qty}</b><button data-act="qty" data-v="1" aria-label="More">+</button></div></div>
        </div>
        <div class="ui-bottom"><button class="ui-btn" data-act="add">${PM_ICON.cart.replace('<svg','<svg width="17" height="17"')}Add to cart · ${pmMoney(each*S.qty)}</button></div>`; } },

      reviews:{ label:'Reviews', render:S=>{
        const m = find(S.item);
        const R = [['Darrell Steward','DS','#6D5DFC',5,'Amazing! Crisp crust, fresh mozzarella and perfect sauce. Delicious!'],
                   ['Kristin Watson','KW','#F59E0B',4,'Arrived hot and on time. Portion was generous, will order again.'],
                   ['Cody Fisher','CF','#0EA5E9',5,'Best in town honestly. The live tracking is super accurate too.']];
        return `<div class="ui-pad">${top('Reviews','detail')}
          <div class="ui-card ui-flex" style="gap:16px"><div style="font-size:38px;font-weight:800;letter-spacing:-.03em">${m.rate}</div>
            <div>${pmStars(m.rate)}<div class="ui-mute ui-small" style="margin-top:4px">Based on 100 reviews · ${m.name}</div></div></div>
          ${R.map(([n,i,c,r,t])=>`<div class="ui-row" style="align-items:flex-start">
              <div class="ui-av" style="background:${c}">${i}</div>
              <div class="ui-grow"><div class="ui-between"><b>${n}</b>${pmStars(r)}</div><p class="ui-mute" style="font-size:12px;margin-top:4px">“${t}”</p></div>
            </div>`).join('')}
        </div>
        <div class="ui-bottom"><button class="ui-btn" data-act="toast" data-v="Thanks! Your review form opens here">Write a review</button></div>`; } },

      cart:{ label:'Cart', render:S=>{
        const items = Object.entries(S.cart);
        if(!items.length) return `<div class="ui-pad ui-center">${top('My Cart')}
            <div style="width:90px;height:90px;margin:70px auto 18px;border-radius:50%;background:var(--ui-card2);display:flex;align-items:center;justify-content:center;color:var(--ui-acc)">${PM_ICON.bag.replace('<svg','<svg width="38" height="38"')}</div>
            <div class="ui-h1">Your cart is empty</div><p class="ui-mute" style="margin-top:6px">Add something tasty to get started.</p>
            <div style="margin-top:24px"><button class="ui-btn" data-go="home">Browse menu</button></div></div>${tabbar('cart')}`;
        const s = sub(S);
        return `<div class="ui-pad" style="padding-bottom:170px">${top('My Cart')}
          ${items.map(([k,c])=>`<div class="ui-row">${img(c.img,c.name)}
              <div class="ui-grow"><b>${c.name}</b><div class="ui-mute ui-small">${c.size}</div><div class="ui-acc ui-small" style="font-weight:600;margin-top:3px">${pmMoney(c.p)}</div></div>
              <div class="ui-qty"><button data-act="cq" data-k="${k}" data-v="-1" aria-label="Less">−</button><b>${c.q}</b><button data-act="cq" data-k="${k}" data-v="1" aria-label="More">+</button></div>
            </div>`).join('')}
          <button class="ui-link" data-go="home" style="margin-top:14px;display:block">+ Add more items</button>
          <div class="ui-sum"><div><span class="ui-mute">Subtotal</span><span>${pmMoney(s)}</span></div>
            <div><span class="ui-mute">Delivery</span><span>${pmMoney(DELIVERY)}</span></div>
            <div class="ui-total"><span>Total</span><span>${pmMoney(s+DELIVERY)}</span></div></div>
        </div>
        <div class="ui-bottom" style="bottom:78px;padding-bottom:12px"><button class="ui-btn" data-go="checkout">Checkout · ${pmMoney(s+DELIVERY)}</button></div>${tabbar('cart')}`; } },

      checkout:{ label:'Checkout', render:S=>{
        const s = sub(S), empty = !count(S);
        return `<div class="ui-pad" style="padding-bottom:110px">${top('Checkout','cart')}
          <div class="ui-h2" style="margin-bottom:8px">Deliver to</div>
          <div class="ui-card ui-flex"><span class="ui-acc">${PM_ICON.pin.replace('<svg','<svg width="20" height="20"')}</span>
            <div class="ui-grow"><b>Home</b><div class="ui-mute ui-small">4517 Washington Ave. Manchester</div></div><button class="ui-link" data-act="toast" data-v="Address picker opens here">Change</button></div>
          <div class="ui-h2 ui-sec">Delivery time</div>
          <div class="ui-sizes">${['Now','In 30 min','In 1 hr'].map(w=>`<button class="${S.when===w?'ui-on':''}" data-act="when" data-v="${w}">${w}</button>`).join('')}</div>
          <div class="ui-h2 ui-sec" style="margin-bottom:0">Payment</div>
          ${[['card','💳','Card','Visa •••• 4242'],['wallet','📱','Mobile wallet','bKash / Apple Pay / Google Pay'],['cash','💵','Cash on delivery','Pay the rider']].map(([k,e,t,d])=>`
            <button class="ui-pick ${S.pay===k?'ui-on':''}" data-act="pay" data-v="${k}"><span style="font-size:20px">${e}</span><span><b style="display:block">${t}</b><span class="ui-mute ui-small">${d}</span></span><span class="ui-radio"></span></button>`).join('')}
          <div class="ui-sum"><div><span class="ui-mute">${count(S)} item${count(S)===1?'':'s'}</span><span>${pmMoney(s)}</span></div>
            <div><span class="ui-mute">Delivery</span><span>${pmMoney(empty?0:DELIVERY)}</span></div>
            <div class="ui-total"><span>Total</span><span>${pmMoney(empty?0:s+DELIVERY)}</span></div></div>
        </div>
        <div class="ui-bottom"><button class="ui-btn" data-act="place">${empty?'Add items to order':'Place order · '+pmMoney(s+DELIVERY)}</button></div>`; } },

      placed:{ label:'Order placed', render:S=>`
        <div class="ui-pad ui-center ui-nobar"><div class="ui-check">${PM_ICON.check}</div>
          <div class="ui-h1">Order placed!</div>
          <p class="ui-mute" style="margin-top:6px">Order #${S.orderNo} · ${S.when==='Now'?'Arriving in about 25 min':'Scheduled '+S.when.toLowerCase()}</p>
          <p class="ui-mute ui-small" style="margin:14px auto 0;max-width:220px;line-height:1.6">The restaurant just received your order. You'll get a notification at every step.</p>
        </div>
        <div class="ui-bottom" style="display:grid;gap:8px"><button class="ui-btn" data-go="tracking">Track order live</button><button class="ui-btn ui-outline" data-go="home">Back to home</button></div>` },

      tracking:{ label:'Live tracking', render:S=>{
        const steps = [['Order confirmed','The restaurant accepted your order'],['Preparing your food','The chef is on it'],['Out for delivery','Robert is on the way'],['Delivered','Enjoy your meal!']];
        const C = 2*Math.PI*64, pct = S.track/3, eta = [25,18,8,0][S.track];
        return `<div class="ui-pad">${top('Order #'+S.orderNo,'home','<span class="ui-pill ui-live">● LIVE</span>')}
          <div class="ui-ring"><svg width="150" height="150"><circle cx="75" cy="75" r="64" fill="none" stroke="var(--ui-card2)" stroke-width="10"/>
            <circle cx="75" cy="75" r="64" fill="none" stroke="var(--ui-acc)" stroke-width="10" stroke-linecap="round" stroke-dasharray="${C}" stroke-dashoffset="${C*(1-pct)}" style="transition:stroke-dashoffset .9s"/></svg>
            <div>${eta?`<b>${eta} min</b><span class="ui-mute ui-small">estimated</span>`:`<b>🎉</b><span class="ui-mute ui-small">delivered</span>`}</div></div>
          <div class="ui-steps">${steps.map(([t,d],i)=>`<div class="ui-step ${i<S.track||S.track===3?'ui-done':i===S.track?'ui-now':''}"><div class="ui-c">${i<S.track||S.track===3?PM_ICON.check:''}</div><div><b>${t}</b><span class="ui-mute ui-small">${d}</span></div></div>`).join('')}</div>
          ${S.track>=2?`<div class="ui-card ui-flex"><div class="ui-av" style="background:#3b3b3b">${PM_ICON.bike.replace('<svg','<svg width="20" height="20"')}</div><div class="ui-grow"><b>Robert Fox</b><div class="ui-mute ui-small">Your rider · Honda CB 150</div></div><button class="ui-plus" data-act="toast" data-v="Calling Robert…" aria-label="Call rider">${PM_ICON.phone}</button></div>`:''}
        </div>${tabbar('tracking')}`; },
        enter:(S,api)=>{ if(S.track<3) api.later(()=>{ S.track++; api.refresh(); }, 2600); } },

      dash:{ label:'Kitchen dashboard', render:S=>{
        const tabs = [['new','New'],['prep','Preparing'],['ready','Ready']];
        const list = S.orders.filter(o=>o.st===S.dashTab);
        return `<div class="ui-pad ui-nobar">
          <div class="ui-between"><div><div class="ui-mute ui-small">Food App · Manchester</div><div class="ui-h2" style="font-size:18px">Kitchen dashboard</div></div><span class="ui-pill ui-ready">● OPEN</span></div>
          <div class="ui-stats"><div><b>42</b><span class="ui-mute ui-small">Orders today</span></div><div><b>$684</b><span class="ui-mute ui-small">Revenue today</span></div>
            <div><b>11m</b><span class="ui-mute ui-small">Avg prep time</span></div><div><b>4.8★</b><span class="ui-mute ui-small">Rating</span></div></div>
          <div class="ui-chips" style="margin-top:16px">${tabs.map(([k,l])=>`<button class="ui-chip ${S.dashTab===k?'ui-on':''}" data-act="tab" data-v="${k}">${l} (${S.orders.filter(o=>o.st===k).length})</button>`).join('')}</div>
          ${list.length ? list.map(o=>`<div class="ui-card" style="margin-bottom:10px">
              <div class="ui-between"><b>#${o.id} · ${pmEsc(o.name)}</b><span class="ui-pill ui-${o.st}">${{new:'NEW',prep:'PREPARING',ready:'READY'}[o.st]}</span></div>
              <div class="ui-mute ui-small" style="margin:5px 0 10px">${o.items.join(', ')}</div>
              <div class="ui-between"><b>${pmMoney(o.total)}</b><span class="ui-flex" style="gap:6px">
                <button class="ui-mini ui-soft" data-act="openord" data-v="${o.id}">Details</button>
                ${o.st!=='ready'?`<button class="ui-mini" data-act="adv" data-v="${o.id}">${o.st==='new'?'Accept':'Mark ready'}</button>`:''}</span></div>
            </div>`).join('') : `<p class="ui-mute ui-center" style="margin-top:40px">No orders here right now 🎉</p>`}
        </div>`; } },

      order:{ label:'Order detail', render:S=>{
        const o = S.orders.find(x=>x.id===S.openOrder) || S.orders[0];
        return `<div class="ui-pad" style="padding-bottom:110px">${top('Order #'+o.id,'dash',`<span class="ui-pill ui-${o.st}">${{new:'NEW',prep:'PREPARING',ready:'READY'}[o.st]}</span>`)}
          <div class="ui-card ui-flex"><div class="ui-av" style="background:#3b3b3b">${pmEsc(o.name.split(' ').map(w=>w[0]).join('').slice(0,2))}</div>
            <div class="ui-grow"><b>${pmEsc(o.name)}</b><div class="ui-mute ui-small">Delivery · paid online</div></div></div>
          <div class="ui-h2 ui-sec">Items</div>
          ${o.items.map(i=>`<div class="ui-row" style="padding:9px 0">${i}</div>`).join('')}
          <div class="ui-h2 ui-sec">Note from customer</div><p class="ui-mute">Extra napkins please 🙏</p>
          <div class="ui-sum"><div class="ui-total" style="border:0;padding:0"><span>Total</span><span>${pmMoney(o.total)}</span></div></div>
        </div>
        <div class="ui-bottom">${o.st!=='ready'
          ? `<button class="ui-btn" data-act="adv" data-v="${o.id}" data-back="1">${o.st==='new'?'Accept order':'Mark as ready'}</button>`
          : `<button class="ui-btn ui-outline" data-go="dash">Back to orders</button>`}</div>`; } }
    },
    actions:{
      toast:(S,api,v)=>api.toast(v),
      cat:(S,api,v)=>{ S.cat=v; api.go('category'); },
      setcat:(S,api,v)=>{ S.cat=v; api.refresh(); },
      item:(S,api,v)=>{ S.item=v; S.size='Medium'; S.qty=1; api.go('detail'); },
      fav:(S,api,v)=>{ S.fav[v]=!S.fav[v]; api.refresh(); api.toast(S.fav[v]?'Saved to favourites':'Removed from favourites'); },
      size:(S,api,v)=>{ S.size=v; api.refresh(); },
      qty:(S,api,v)=>{ S.qty=Math.max(1,Math.min(20,S.qty+Number(v))); api.refresh(); },
      add:(S,api)=>{
        const m=find(S.item), extra=SIZES.find(s=>s[0]===S.size)[1], k=m.id+'|'+S.size;
        S.cart[k]=S.cart[k]||{name:m.name, img:m.img, size:S.size, p:m.price+extra, q:0};
        S.cart[k].q+=S.qty; api.go('home'); api.toast(`Added ${S.qty}× ${m.name}`);
      },
      quick:(S,api,v)=>{
        const m=find(v), k=m.id+'|Medium';
        S.cart[k]=S.cart[k]||{name:m.name, img:m.img, size:'Medium', p:m.price+1.5, q:0};
        S.cart[k].q+=1; api.toast(`Added ${m.name}`);
      },
      cq:(S,api,v,el)=>{ const c=S.cart[el.dataset.k]; if(!c) return; c.q+=Number(v); if(c.q<=0) delete S.cart[el.dataset.k]; api.refresh(); },
      when:(S,api,v)=>{ S.when=v; api.refresh(); },
      pay:(S,api,v)=>{ S.pay=v; api.refresh(); },
      place:(S,api)=>{
        if(!count(S)){ api.go('home'); api.toast('Your cart is empty'); return; }
        const items = Object.values(S.cart).map(c=>`${c.q}× ${c.name}${c.size!=='Medium'?` (${c.size})`:''}`);
        S.orderNo = S.orderNo + 1;
        S.orders = S.orders.filter(o=>!o.mine);
        S.orders.unshift({id:S.orderNo, name:'Jane Cooper', items, total:sub(S)+DELIVERY, st:'new', mine:true});
        S.cart={}; S.track=0; S.hasOrder=true; api.go('placed');
      },
      tab:(S,api,v)=>{ S.dashTab=v; api.refresh(); },
      openord:(S,api,v)=>{ S.openOrder=Number(v); api.go('order'); },
      adv:(S,api,v,el)=>{
        const o=S.orders.find(x=>x.id===Number(v)); if(!o) return;
        o.st = o.st==='new' ? 'prep' : 'ready';
        if(o.mine) S.track = Math.max(S.track, o.st==='prep'?1:2);
        api.toast(o.st==='prep'?'Order accepted · customer notified':'Marked ready · rider assigned');
        if(el.dataset.back) api.go('dash'); else api.refresh();
      }
    }
  };
})();

/* ---------------------------------- CHAT ---------------------------------- */
PROTOTYPES.chat = (() => {
  const PEOPLE = [
    ['Dianne Russell','10 technologies that will change your life','06:05 PM',1,'#F59E0B'],
    ['Kristin Watson',"It's time for all of us to do better",'06:35 PM',3,'#EC4899'],
    ['Devon Lane',"Today's Fortune 500 list is out",'7/11/19',0,'#0EA5E9'],
    ['Ralph Edwards','Which movie ?','4/21/12',0,'#8B5CF6'],
    ['Leslie Alexander','Learn what it takes to grow','10/28/12',1,'#EF4444'],
    ['Arlene McCoy','The key to surviving this new world','5/30/14',0,'#14B8A6'],
    ['Bessie Cooper','With so many technologies around','12/4/17',5,'#F97316'],
    ['Jane Cooper','Developments in previously unknown areas','7/27/13',1,'#6366F1'],
    ['Floyd Miles',"You've heard this before",'8/2/19',0,'#84CC16'],
    ['Ronald Richards','So, how do you create an app?','7/18/17',0,'#A855F7']
  ];
  const GROUPS = [['Family','👨‍👩‍👧','Mom: Dinner at 8 tonight?','5 members','#F59E0B'],['Design Team','🎨','Kristin: New mockups are up','4 members','#36B864'],['Football Sunday','⚽',"Devon: Who's bringing the ball?",'12 members','#0EA5E9']];
  const REPLIES = ['Haha nice 😄','Sounds good to me 👍','Wait, really?','Let me check and get back to you','Sending it now 🚀','Perfect, see you then!','🔥🔥🔥'];
  const initials = n => n.split(' ').map(w=>w[0]).join('').slice(0,2);
  const person = n => PEOPLE.find(p=>p[0]===n) || PEOPLE[3];
  const seed = n => n==='Ralph Edwards'
    ? [{me:0,t:"Hey! What's up",at:'03:45 PM'},{me:1,t:"I'm fine. And you ?",at:'03:50 PM'},{me:0,t:'What are you doing ?',at:'03:53 PM'},{me:1,t:'Watching a movie 🍿',at:'03:54 PM'},{me:0,t:'Which movie ?',at:'03:55 PM'}]
    : [{me:0,t:'Hey! Got a minute?',at:'05:58 PM'},{me:1,t:'Sure, what is it?',at:'06:01 PM'},{me:0,t:person(n)[1],at:person(n)[2].includes(':')?person(n)[2]:'06:05 PM'}];
  const nav = on => `<div class="ui-tabbar" style="background:#fff;border-top:1px solid #eee">
      <button class="ui-tab ${on==='chats'?'ui-on':''}" data-go="chats">${PM_ICON.send}${on==='chats'?'Chats':''}</button>
      <button class="ui-tab ${on==='groups'?'ui-on':''}" data-go="groups">${PM_ICON.users}${on==='groups'?'Groups':''}</button>
      <button class="ui-tab ${on==='profile'?'ui-on':''}" data-go="profile">${PM_ICON.user}${on==='profile'?'Profile':''}</button></div>`;
  const last = (S,n) => { const t=S.threads[n]; return t && t.length ? t[t.length-1] : null; };

  return {
    theme:{bg:'#F2F2F2', card:'#fff', card2:'#E9E9EB', ink:'#111', mute:'#6B7280', acc:'#36B864', line:'#E5E7EB', onAcc:'#fff'},
    light:false,
    start:'chats',
    flows:[
      {name:'Messaging', screens:['chats','convo']},
      {name:'Groups', screens:['groups','group']},
      {name:'Account', screens:['profile']}
    ],
    init(){ return { with:'Ralph Edwards', group:'Design Team', threads:{}, read:{}, q:'', searching:false, typing:false, notif:true, backup:true }; },
    screens:{
      chats:{ label:'Chats', render:S=>{
        const list = PEOPLE.filter(p=>p[0].toLowerCase().includes(S.q.toLowerCase()));
        return `<div class="ui-pad">
          <div class="ui-between" style="margin:6px 0 16px"><div class="ui-h1" style="font-size:24px">Chats App</div>
            <button class="ui-iconbtn" style="background:transparent" data-act="search" aria-label="Search">${PM_ICON.search}</button></div>
          ${S.searching?`<form class="ui-search" data-form="search"><span>${PM_ICON.search}</span><input class="ui-input" id="pmChatSearch" name="q" placeholder="Search people" value="${pmEsc(S.q)}" autocomplete="off"></form>`:''}
          ${list.map(([n,m,t,u,c])=>{ const l=last(S,n); const unread = !S.read[n] && u;
            return `<button class="ui-chat-row" data-act="open" data-v="${pmEsc(n)}">
              <div class="ui-av" style="background:${c}">${initials(n)}</div>
              <div class="ui-grow"><div class="ui-between"><b style="font-size:13.5px">${n}</b><span class="ui-mute" style="font-size:10px">${l?l.at:t}</span></div>
                <div class="ui-between"><span class="ui-mute ui-small ui-ell">${l?(l.me?'You: ':'')+pmEsc(l.t):m}</span>${unread?`<span class="ui-badge">${u}</span>`:''}</div></div>
            </button>`;}).join('') || `<p class="ui-mute ui-center" style="margin-top:30px">No one found for “${pmEsc(S.q)}”</p>`}
        </div>${nav('chats')}`; },
        enter:(S)=>{ if(S.searching){ const i=document.getElementById('pmChatSearch'); if(i){ i.focus({preventScroll:true}); const v=i.value; i.value=''; i.value=v; } } } },

      convo:{ label:'Conversation', light:true, render:S=>{
        const n=S.with, p=person(n); if(!S.threads[n]) S.threads[n]=seed(n);
        return `<div class="ui-greenhead"><button class="ui-back" data-go="chats" aria-label="Back">${PM_ICON.back}</button>
            <div class="ui-av" style="background:${p[4]};width:36px;height:36px;font-size:12px;border:2px solid #fff">${initials(n)}</div>
            <div class="ui-grow"><b style="font-size:14.5px">${n}</b><div style="font-size:11px;opacity:.9">${S.typing?'typing…':'Online'}</div></div>
            <button data-act="toast" data-v="Voice call with ${pmEsc(n)}…" aria-label="Call" style="color:#fff">${PM_ICON.phone.replace('<svg','<svg width="19" height="19"')}</button></div>
          <div class="ui-center ui-mute" style="font-size:10.5px;margin-top:12px;display:flex;align-items:center;justify-content:center;gap:5px">${PM_ICON.lock.replace('<svg','<svg width="11" height="11"')}Messages are end-to-end encrypted</div>
          <div class="ui-msgs">${S.threads[n].map((m,i)=>`<div class="ui-m ${m.me?'ui-me':'ui-them'} ${m.fresh?'ui-m-in':''}"><p>${pmEsc(m.t)}</p><small>${m.at}</small></div>`).join('')}
            ${S.typing?`<div class="ui-m ui-them ui-typing ui-m-in"><p><i></i><i></i><i></i></p></div>`:''}</div>
          <form class="ui-composer" data-form="send">
            <button type="button" class="ui-addbtn" data-act="toast" data-v="Pick a photo, file or location to share" aria-label="Attach">${PM_ICON.plus}</button>
            <div class="ui-field"><input class="ui-input" id="pmChatInput" name="msg" placeholder="Type your message" autocomplete="off" maxlength="200"></div>
            <button type="submit" class="ui-send" aria-label="Send">${PM_ICON.send}</button></form>`; },
        enter:(S,api)=>{ S.threads[S.with].forEach(m=>delete m.fresh); S.read[S.with]=true;
          if(S.typing){ const n=S.with; api.later(()=>{ S.typing=false; S.threads[n].push({me:0,t:REPLIES[Math.floor(Math.random()*REPLIES.length)],at:pmNowTime(),fresh:true}); api.refresh(); },1400); }
          const v=document.querySelector('.pm-screen .ui-view'); if(v) v.scrollTop=v.scrollHeight;
          const i=document.getElementById('pmChatInput'); if(i && matchMedia('(hover:hover)').matches) i.focus({preventScroll:true}); } },

      groups:{ label:'Groups', render:S=>`
        <div class="ui-pad">
          <div class="ui-between" style="margin:6px 0 16px"><div class="ui-h1" style="font-size:24px">Groups</div>
            <button class="ui-mini" data-act="toast" data-v="Pick members to start a new group">+ New</button></div>
          ${GROUPS.map(([n,e,m,c,col])=>`<button class="ui-chat-row" data-act="group" data-v="${n}">
              <div class="ui-av" style="background:${col}22;font-size:20px">${e}</div>
              <div class="ui-grow"><div class="ui-between"><b style="font-size:13.5px">${n}</b><span class="ui-mute" style="font-size:10px">${c}</span></div><div class="ui-mute ui-small ui-ell">${m}</div></div>
            </button>`).join('')}
        </div>${nav('groups')}` },

      group:{ label:'Group info', light:true, render:S=>{
        const g = GROUPS.find(x=>x[0]===S.group) || GROUPS[1];
        return `<div class="ui-greenhead" style="padding-bottom:20px"><button class="ui-back" data-go="groups" aria-label="Back">${PM_ICON.back}</button><b class="ui-grow" style="font-size:15px">Group info</b></div>
          <div class="ui-pad" style="padding-top:18px">
            <div class="ui-center"><div class="ui-av" style="width:78px;height:78px;margin:0 auto;font-size:36px;background:#fff;box-shadow:0 2px 8px rgba(0,0,0,.08)">${g[1]}</div>
              <div class="ui-h1" style="margin-top:10px">${g[0]}</div><div class="ui-mute ui-small">${g[3]} · created by you</div></div>
            <div class="ui-sec ui-mute ui-small" style="font-weight:700;letter-spacing:.06em">MEMBERS</div>
            ${PEOPLE.slice(0,4).map(([n,,,,c],i)=>`<div class="ui-chat-row" style="margin-bottom:6px"><div class="ui-av" style="background:${c};width:34px;height:34px;font-size:11px">${initials(n)}</div><b class="ui-grow">${n}</b>${i===0?'<span class="ui-pill ui-ready">Admin</span>':''}</div>`).join('')}
            <div class="ui-sec ui-mute ui-small" style="font-weight:700;letter-spacing:.06em">SHARED MEDIA</div>
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px">${['🖼️','📄','🎞️'].map(e=>`<div style="aspect-ratio:1;border-radius:12px;background:#fff;display:flex;align-items:center;justify-content:center;font-size:26px">${e}</div>`).join('')}</div>
            <button class="ui-btn ui-outline" style="margin-top:18px;color:#EF4444" data-act="toast" data-v="You'd leave ${g[0]} here">Leave group</button>
          </div>`; } },

      profile:{ label:'Profile & settings', render:S=>`
        <div class="ui-pad">
          <div class="ui-h1" style="font-size:24px;margin:6px 0 18px">Profile</div>
          <div class="ui-chat-row" style="padding:16px"><div class="ui-av" style="background:#36B864;width:52px;height:52px">RF</div>
            <div class="ui-grow"><b style="font-size:15px">Robert Fox</b><div class="ui-mute ui-small">Hey there! I'm using Chats App</div></div></div>
          ${[['notif','Notifications','Message & group alerts'],['backup','Chat backup','Daily, to your cloud drive']].map(([k,t,d])=>`
            <button class="ui-chat-row" data-act="flip" data-v="${k}"><div class="ui-grow"><b>${t}</b><div class="ui-mute ui-small">${d}</div></div><span class="ui-toggle ${S[k]?'ui-on':''}"></span></button>`).join('')}
          <div class="ui-chat-row"><span class="ui-acc">${PM_ICON.lock.replace('<svg','<svg width="18" height="18"')}</span><div class="ui-grow"><b>End-to-end encryption</b><div class="ui-mute ui-small">Always on for every chat</div></div></div>
        </div>${nav('profile')}` }
    },
    actions:{
      toast:(S,api,v)=>api.toast(v),
      open:(S,api,v)=>{ S.with=v; S.typing=false; api.go('convo'); },
      group:(S,api,v)=>{ S.group=v; api.go('group'); },
      search:(S,api)=>{ S.searching=!S.searching; if(!S.searching) S.q=''; api.refresh(); },
      flip:(S,api,v)=>{ S[v]=!S[v]; api.refresh(); }
    },
    forms:{
      send:(S,api,form)=>{
        const input=form.querySelector('input'); const t=(input.value||'').trim(); if(!t) return;
        const n=S.with; S.threads[n].push({me:1,t,at:pmNowTime(),fresh:true}); S.typing=true; api.refresh(); // reply is scheduled in convo.enter
      },
      search:(S,api,form)=>{ S.q=form.querySelector('input').value; api.refresh(); }
    },
    inputs:{ pmChatSearch:(S,api,el)=>{ S.q=el.value; api.refresh(); } }
  };
})();

/* ---------------------------------- AIR ---------------------------------- */
PROTOTYPES.air = (() => {
  const CITIES = [['Dubai','DXB'],['Bangladesh','DAC'],['London','LHR'],['Singapore','SIN'],['New York','JFK'],['Kuala Lumpur','KUL']];
  const CLASSES = [['Economy Class',0.55],['Business Class',1],['First Class',1.8]];
  const FLIGHTS = [
    {id:'ek', air:'Emirates', bg:'#D71921', fg:'#fff', dur:'4h 30m', dep:'12:30', price:1216.66},
    {id:'bg', air:'Biman Bangladesh', bg:'#fff', fg:'#D2232A', dur:'5h 10m', dep:'09:15', price:534.27},
    {id:'fz', air:'flydubai', bg:'#0B3C7C', fg:'#fff', dur:'4h 50m', dep:'18:45', price:689.40}
  ];
  const TAKEN = new Set(['A1','A2','B4','C7','D2','D5','E1','E4','F7','B9','E9','C11','A12','F12','D13']);
  const code = c => (CITIES.find(x=>x[0]===c)||CITIES[0])[1];
  const cls = S => CLASSES.find(c=>c[0]===S.cls) || CLASSES[1];
  const fl = S => FLIGHTS.find(f=>f.id===S.flight) || FLIGHTS[0];
  const fare = (S,f) => +(f.price*cls(S)[1]).toFixed(2);
  const pax = S => S.adults + S.kids;
  const dateOf = d => { const x=new Date(); x.setDate(x.getDate()+d); return x; };
  const dShort = d => dateOf(d).toLocaleDateString('en-GB',{weekday:'short',day:'numeric',month:'short'});
  const dLong = d => { const x=dateOf(d); return x.getDate()+' '+x.toLocaleDateString('en-GB',{month:'short'})+', '+x.getFullYear(); };
  const top = (t, back) => `<div class="ui-top"><button class="ui-back" data-go="${back}" aria-label="Back">${PM_ICON.back}</button><div class="ui-title">${t}</div></div>`;
  const badge = f => `<span class="ui-airline" style="background:${f.bg};color:${f.fg}">${f.air}</span>`;
  const route = (S,f) => `<div class="ui-route"><div><div class="ui-mute ui-small">${S.from}</div><div class="ui-code">${code(S.from)}</div></div>
      <div class="ui-line">${PM_ICON.plane}</div><div style="text-align:right"><div class="ui-mute ui-small">${S.to}</div><div class="ui-code">${code(S.to)}</div></div></div>`;
  const qr = (seed) => { // decorative QR-style code
    const N=25, cells=[]; let x=seed*9301+49297;
    const rnd=()=>{ x=(x*9301+49297)%233280; return x/233280; };
    const finder=(r,c)=>[[0,0],[0,N-7],[N-7,0]].some(([fr,fc])=>r>=fr&&r<fr+7&&c>=fc&&c<fc+7);
    const fOn=(r,c)=>{ for(const [fr,fc] of [[0,0],[0,N-7],[N-7,0]]){ if(r>=fr&&r<fr+7&&c>=fc&&c<fc+7){ const a=r-fr,b=c-fc; return a===0||a===6||b===0||b===6||(a>=2&&a<=4&&b>=2&&b<=4); } } return false; };
    for(let r=0;r<N;r++) for(let c=0;c<N;c++){ if(finder(r,c)? fOn(r,c) : rnd()>0.52) cells.push(`<rect x="${c}" y="${r}" width="1" height="1"/>`); }
    return `<svg viewBox="0 0 ${N} ${N}" shape-rendering="crispEdges" fill="#111" width="104" height="104">${cells.join('')}</svg>`;
  };
  const nav = on => `<div class="ui-tabbar">
      ${[['home','home','Home'],['results','compass','Explore'],['ticket','ticket','Tickets'],['me','user','Profile']].map(([id,ic,l])=>
      `<button class="ui-tab ${on===id?'ui-on':''}" ${id==='me'?'data-act="toast" data-v="Profile: Md Abir · 2 trips this year"':id==='ticket'?'data-act="mytix"':`data-go="${id}"`}>${PM_ICON[ic]}${on===id?l:''}</button>`).join('')}</div>`;

  return {
    theme:{bg:'#1B1C1E', card:'#26282B', card2:'#2F3236', ink:'#fff', mute:'#9CA3AF', acc:'#1E88E5', line:'#34373B', onAcc:'#fff'},
    light:true,
    start:'home',
    flows:[
      {name:'Search', screens:['home','results']},
      {name:'Booking', screens:['seats','ticket','done']}
    ],
    init(){ return { from:'Dubai', to:'Bangladesh', adults:3, kids:1, cls:'Business Class', dep:7, ret:8, flight:'ek', seats:[], booked:false, ref:'' }; },
    screens:{
      home:{ label:'Book flights', render:S=>`
        <div class="ui-map"></div>
        <div class="ui-pad" style="position:relative">
          <div class="ui-between"><div class="ui-flex"><div class="ui-av" style="background:#4B5563;width:34px;height:34px;font-size:12px">MA</div><b>Md Abir</b></div>
            <button class="ui-iconbtn" style="background:transparent" data-act="toast" data-v="Price alert: DXB → DAC dropped 8%" aria-label="Notifications">${PM_ICON.bell}</button></div>
          <div class="ui-h1" style="font-size:24px;margin:18px 0 16px">Book your<br>flights</div>
          <div class="ui-card" style="padding:4px 14px 16px">
            <div style="position:relative">
              <div class="ui-field-lbl">From</div>
              <button class="ui-fieldbox" data-act="city" data-v="from">${PM_ICON.plane}${S.from}<span class="ui-caret">${PM_ICON.caret}</span></button>
              <div class="ui-field-lbl">To</div>
              <button class="ui-fieldbox" data-act="city" data-v="to"><span style="transform:rotate(90deg)">${PM_ICON.plane}</span>${S.to}<span class="ui-caret">${PM_ICON.caret}</span></button>
              <button class="ui-swap" data-act="swap" aria-label="Swap cities" style="top:58%">${PM_ICON.swap}</button>
            </div>
            <div class="ui-field-lbl">Passengers</div>
            <div class="ui-fieldbox" style="padding:8px 10px">${PM_ICON.users}<span>Adults</span><span class="ui-step2"><button data-act="pax" data-v="adults|-1" aria-label="Fewer adults">−</button><b style="min-width:14px;text-align:center">${S.adults}</b><button data-act="pax" data-v="adults|1" aria-label="More adults">+</button></span></div>
            <div class="ui-fieldbox" style="padding:8px 10px;margin-top:8px">${PM_ICON.user}<span>Children</span><span class="ui-step2"><button data-act="pax" data-v="kids|-1" aria-label="Fewer children">−</button><b style="min-width:14px;text-align:center">${S.kids}</b><button data-act="pax" data-v="kids|1" aria-label="More children">+</button></span></div>
            <div class="ui-two">
              <div><div class="ui-field-lbl">Departure Date</div><button class="ui-fieldbox" data-act="toast" data-v="Calendar picker opens here">${PM_ICON.calendar}<span style="font-size:12px;white-space:nowrap">${dShort(S.dep)}</span></button></div>
              <div><div class="ui-field-lbl">Return Date</div><button class="ui-fieldbox" data-act="toast" data-v="Calendar picker opens here">${PM_ICON.calendar}<span style="font-size:12px;white-space:nowrap">${dShort(S.ret)}</span></button></div>
            </div>
            <div class="ui-field-lbl">Class</div>
            <button class="ui-fieldbox" data-act="cls">${PM_ICON.seat}${S.cls}<span class="ui-caret">${PM_ICON.caret}</span></button>
            <button class="ui-btn" style="margin:18px auto 0;width:60%;padding:11px" data-act="search">Search</button>
          </div>
        </div>${nav('home')}` },

      results:{ label:'Search results', render:S=>`
        <div class="ui-map"></div>
        <div class="ui-pad" style="position:relative">${top('Search Result','home')}
          <div class="ui-mute ui-small" style="margin:-6px 0 14px">${code(S.from)} → ${code(S.to)} · ${dShort(S.dep)} · ${pax(S)} passenger${pax(S)>1?'s':''} · ${S.cls.replace(' Class','')}</div>
          ${FLIGHTS.map(f=>`<button class="ui-ticket" data-act="pick" data-v="${f.id}">
              ${badge(f)}<div class="ui-center ui-acc" style="font-size:10.5px;font-weight:600">${f.dur} · departs ${f.dep}</div>
              ${route(S,f)}
              <div class="ui-tfoot"><span class="ui-flex" style="gap:8px;font-size:12px">${PM_ICON.seat.replace('<svg','<svg width="17" height="17"')}${S.cls}</span><span class="ui-price">${pmMoney(fare(S,f))}</span></div>
            </button>`).join('')}
        </div>${nav('results')}` },

      seats:{ label:'Choose seat', render:S=>{
        const f=fl(S), rows=[...Array(13)].map((_,i)=>i+1);
        const seat = id => `<button class="ui-seat ${TAKEN.has(id)?'ui-taken':S.seats.includes(id)?'ui-sel':''}" data-act="seat" data-v="${id}" ${TAKEN.has(id)?'disabled aria-disabled="true"':''} aria-label="Seat ${id}">${id}</button>`;
        return `<div class="ui-pad" style="padding-bottom:150px">${top('Choose Seat','results')}
          <div class="ui-mute ui-small" style="margin:-6px 0 14px">${f.air} · pick up to ${pax(S)} seat${pax(S)>1?'s':''}</div>
          <div class="ui-seats">${rows.map(r=>['A','B','C'].map(c=>seat(c+r)).join('')+'<span></span>'+['D','E','F'].map(c=>seat(c+r)).join('')).join('')}</div>
          <div class="ui-legend"><span><i></i>Available</span><span><i style="background:var(--ui-acc);border-color:var(--ui-acc)"></i>Selected</span><span><i style="background:#9CA3AF;border-color:#9CA3AF"></i>Unavailable</span></div>
        </div>
        <div class="ui-bottom">
          <div class="ui-between" style="margin-bottom:10px"><span class="ui-flex" style="gap:8px">${PM_ICON.seat.replace('<svg','<svg width="18" height="18"')}<span><span class="ui-small">${S.seats.length} Seat${S.seats.length===1?'':'s'} Selected</span><br><b>${S.seats.join(', ')||'—'}</b></span></span>
            <span class="ui-acc" style="font-weight:800;font-size:16px">${pmMoney(fare(S,f)*S.seats.length)}</span></div>
          <button class="ui-btn" style="width:60%;margin:0 auto;padding:11px" data-act="checkout">Checkout</button>
        </div>`; } },

      ticket:{ label:'Ticket detail', render:S=>{
        const f=fl(S), seats=S.seats.length?S.seats:['B2','A3','A4'];
        return `<div class="ui-pad" style="padding-bottom:110px">${top('Ticket Detail', S.booked?'home':'seats')}
          <div class="ui-ticket" style="cursor:default">
            ${badge(f)}<div class="ui-center ui-acc" style="font-size:10.5px;font-weight:600">${f.dur}</div>
            ${route(S,f)}
            <div class="ui-kv" style="border-top:1px dashed var(--ui-line)">
              <div><small>From</small><b>${S.from}</b></div><div><small>To</small><b>${S.to}</b></div>
              <div><small>Date</small><b>${dLong(S.dep)}</b></div><div><small>Time</small><b>${f.dep}</b></div>
              <div><small>Class</small><b>${S.cls}</b></div><div><small>Airline</small><b>${f.air}</b></div>
              <div><small>Seats</small><b>${seats.join(', ')}</b></div><div><small>Price</small><b>${pmMoney(fare(S,f)*seats.length)}</b></div>
            </div>
            <div class="ui-qr">${qr(seats.join('').length + f.price)}</div>
          </div>
        </div>
        <div class="ui-bottom">${S.booked
          ? `<button class="ui-btn ui-outline" data-act="toast" data-v="Ticket saved to your wallet">Add to wallet</button>`
          : `<button class="ui-btn" style="width:60%;margin:0 auto;padding:11px" data-act="confirm">Confirm ticket</button>`}</div>`; } },

      done:{ label:'Booking confirmed', render:S=>`
        <div class="ui-pad ui-center ui-nobar"><div class="ui-check">${PM_ICON.check}</div>
          <div class="ui-h1">You're all set!</div>
          <p class="ui-mute" style="margin-top:6px">Booking ref <b style="color:var(--ui-ink);letter-spacing:.06em">${S.ref||'XK7P2Q'}</b></p>
          <p class="ui-mute ui-small" style="margin:14px auto 0;max-width:230px;line-height:1.6">Your e-ticket for ${code(S.from)} → ${code(S.to)} was sent to your email. We'll remind you 24 hours before check-in.</p>
        </div>
        <div class="ui-bottom" style="display:grid;gap:8px"><button class="ui-btn" data-go="ticket">View ticket</button><button class="ui-btn ui-outline" data-act="again">Book another flight</button></div>` }
    },
    actions:{
      toast:(S,api,v)=>api.toast(v),
      city:(S,api,v)=>{
        const other = v==='from'?S.to:S.from; let i=CITIES.findIndex(c=>c[0]===S[v]);
        do{ i=(i+1)%CITIES.length; } while(CITIES[i][0]===other);
        S[v]=CITIES[i][0]; api.refresh();
      },
      swap:(S,api)=>{ [S.from,S.to]=[S.to,S.from]; api.refresh(); },
      pax:(S,api,v)=>{ const [k,d]=v.split('|'); const min=k==='adults'?1:0; S[k]=Math.max(min,Math.min(9,S[k]+Number(d))); if(S.seats.length>pax(S)) S.seats=S.seats.slice(0,pax(S)); api.refresh(); },
      cls:(S,api)=>{ const i=CLASSES.findIndex(c=>c[0]===S.cls); S.cls=CLASSES[(i+1)%CLASSES.length][0]; api.refresh(); },
      search:(S,api)=>api.go('results'),
      pick:(S,api,v)=>{ if(S.flight!==v){ S.seats=[]; } S.flight=v; S.booked=false; api.go('seats'); },
      seat:(S,api,v)=>{
        if(TAKEN.has(v)) return;
        if(S.seats.includes(v)) S.seats=S.seats.filter(x=>x!==v);
        else if(S.seats.length>=pax(S)){ api.toast(`You have ${pax(S)} passenger${pax(S)>1?'s':''}. Unselect a seat first.`); return; }
        else S.seats.push(v);
        api.refresh();
      },
      checkout:(S,api)=>{ if(!S.seats.length){ api.toast('Pick at least one seat'); return; } S.booked=false; api.go('ticket'); },
      confirm:(S,api)=>{ S.booked=true; S.ref=Math.random().toString(36).slice(2,8).toUpperCase(); api.go('done'); },
      mytix:(S,api)=>{ if(S.booked||S.seats.length) api.go('ticket'); else api.toast('No tickets yet. Search a flight first'); },
      again:(S,api)=>{ S.seats=[]; S.booked=false; api.go('home'); }
    }
  };
})();

/* ============================================================================
   POPUP ENGINE (no need to edit below this line)
   ============================================================================ */
(function(){
  const overlay = document.getElementById('pmOverlay');
  if(!overlay) return;
  const modal  = overlay.querySelector('.pm-modal');
  const intro  = document.getElementById('pmIntro');
  const screen = document.getElementById('pmScreen');
  const panel  = document.getElementById('pmPanel');
  const closeBtn = document.getElementById('pmClose');

  let demo=null, proto=null, S=null, cur=null, timers=[], lastFocus=null, toastT=null;
  const phoneWrap = document.getElementById('pmPhoneWrap');
  /* Fit the popup to any screen: on desktop the WHOLE popup scales together
     (like browser zoom), so the layout always keeps the same proportions. */
  const DESIGN_W = 1104, DESIGN_H = 680;     // smallest size the 3-column layout is designed for
  const ZOOM_OK = window.CSS && CSS.supports && CSS.supports('zoom','1');
  function fitPhone(){
    const setPhone = v => phoneWrap.style.setProperty('--pm-s', Math.max(0.55, Math.min(1, v)).toFixed(3));
    if(window.innerWidth <= 1020){                       // phones & small tablets: full-screen scroll layout
      modal.style.zoom=''; modal.style.width=''; modal.style.height='';
      setPhone((window.innerWidth-36)/300); return;
    }
    const availW = window.innerWidth-48, availH = window.innerHeight-48, padY = 78; // 72 padding + border + safety
    if(ZOOM_OK){
      const z = Math.min(1, availH/DESIGN_H, availW/DESIGN_W);
      const h = Math.min(800, availH/z);
      modal.style.zoom = z.toFixed(4);
      modal.style.width = Math.min(1220, availW/z)+'px';
      modal.style.height = h+'px';
      setPhone((h-padY)/620);
    } else {                                             // very old browsers: only shrink the phone
      setPhone((Math.min(800, availH)-padY)/620);
    }
  }
  window.addEventListener('resize', ()=>{ if(overlay.classList.contains('pm-show')) fitPhone(); });

  const isReady = d => d && (d.type==='prototype' ? !!PROTOTYPES[d.prototype] : !!(d.src && String(d.src).trim()));
  const screensOf = p => p.flows.flatMap(f=>f.screens);
  const later = (fn,ms) => { const t=setTimeout(()=>{ timers=timers.filter(x=>x!==t); fn(); },ms); timers.push(t); return t; };
  const clearTimers = () => { timers.forEach(clearTimeout); timers=[]; };
  const chrome = (light) => `<div class="pm-island"></div>
    <div class="pm-sbar ${light?'pm-light':''}"><span>9:41</span>
      <svg viewBox="0 0 54 12" fill="currentColor"><rect x="0" y="7" width="3" height="5" rx="1"/><rect x="5" y="5" width="3" height="7" rx="1"/><rect x="10" y="2.5" width="3" height="9.5" rx="1"/><rect x="15" y="0" width="3" height="12" rx="1"/><path d="M27 3.2a9 9 0 0 1 6.4 2.6l-1.3 1.3a7.2 7.2 0 0 0-10.2 0l-1.3-1.3A9 9 0 0 1 27 3.2zm0 3.6a5.4 5.4 0 0 1 3.8 1.6L27 12l-3.8-3.6A5.4 5.4 0 0 1 27 6.8z"/><rect x="37" y="1" width="15" height="10" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.2"/><rect x="39" y="3" width="10" height="6" rx="1.2"/></svg></span>
    </div>`;

  function toast(msg){
    const el = screen.querySelector('.pm-toast'); if(!el) return;
    el.textContent = msg; el.classList.add('pm-on');
    clearTimeout(toastT); toastT = setTimeout(()=>{ const e=screen.querySelector('.pm-toast'); if(e) e.classList.remove('pm-on'); }, 1900);
  }
  const api = { go, refresh:()=>render(true), later, toast };

  function applyTheme(t){
    const map = {bg:'--ui-bg',card:'--ui-card',card2:'--ui-card2',ink:'--ui-ink',mute:'--ui-mute',acc:'--ui-acc',line:'--ui-line',onAcc:'--ui-on-acc'};
    Object.keys(map).forEach(k=>screen.style.removeProperty(map[k]));
    if(t) Object.entries(t).forEach(([k,v])=>map[k] && screen.style.setProperty(map[k], v));
  }

  function go(id){
    if(!proto || !proto.screens[id]) return;
    cur = id; render(false);
  }
  function render(keep){
    clearTimers();
    const sc = proto.screens[cur];
    const old = screen.querySelector('.ui-view');
    const scrollTop = keep && old ? old.scrollTop : 0;
    const light = sc.light !== undefined ? sc.light : proto.light;
    const pendingToast = screen.querySelector('.pm-toast.pm-on');
    const toastText = keep && pendingToast ? pendingToast.textContent : '';
    screen.innerHTML = chrome(light) +
      `<div class="ui-view ${keep?'':'ui-enter'}">${sc.render(S)}</div>` +
      `<div class="pm-homebar ${light?'pm-light':''}"></div><div class="pm-toast" role="status" aria-live="polite"></div>`;
    const view = screen.querySelector('.ui-view');
    // bars that must stay pinned to the phone (not scroll with the content)
    view.querySelectorAll(':scope > .ui-tabbar, :scope > .ui-bottom, :scope > .ui-composer').forEach(el=>view.after(el));
    if(keep){ view.scrollTop = scrollTop; if(toastText){ const t=screen.querySelector('.pm-toast'); t.textContent=toastText; t.classList.add('pm-on'); } }
    if(sc.enter) sc.enter(S, api);
    panel.querySelectorAll('.pm-it[data-s]').forEach(b=>b.classList.toggle('pm-on', b.dataset.s===cur));
    if(proto.views){ // views: [label, startScreen, [screens that belong to this view]]
      const active = proto.views.find(v=>v[2] && v[2].includes(cur)) || proto.views[0];
      panel.querySelectorAll('[data-view]').forEach(b=>b.classList.toggle('pm-on', b.dataset.view===active[1]));
    }
    const list = panel.querySelector('.pm-list'), on = panel.querySelector('.pm-it.pm-on');
    if(list && on && list.scrollHeight > list.clientHeight){
      const t = on.offsetTop - list.offsetTop;
      if(t < list.scrollTop || t > list.scrollTop + list.clientHeight - 44) list.scrollTop = t - 60;
    }
  }

  /* clicks inside the phone */
  screen.addEventListener('click', e=>{
    if(!proto) return;
    const g = e.target.closest('[data-go]');
    if(g && screen.contains(g)){ e.preventDefault(); go(g.dataset.go); return; }
    const a = e.target.closest('[data-act]');
    if(a && screen.contains(a)){ e.preventDefault(); const fn = proto.actions && proto.actions[a.dataset.act]; if(fn) fn(S, api, a.dataset.v, a); }
  });
  screen.addEventListener('submit', e=>{
    if(!proto) return;
    e.preventDefault();
    const f = e.target.closest('[data-form]'); const fn = f && proto.forms && proto.forms[f.dataset.form];
    if(fn) fn(S, api, f);
  });
  screen.addEventListener('input', e=>{
    if(!proto || !proto.inputs) return;
    const fn = proto.inputs[e.target.id]; if(fn) fn(S, api, e.target);
  });

  /* ---------- builders ---------- */
  function buildIntro(d, card){
    const stack = card ? [...card.querySelectorAll('.proj-stack span')].map(s=>s.textContent.trim()).slice(0,2) : [];
    let meta = [];
    if(d.type==='prototype'){ const p=PROTOTYPES[d.prototype]; meta=[screensOf(p).length+' screens', p.flows.length+' flows', 'Clickable prototype']; }
    else if(d.type==='video') meta=['Video walkthrough'];
    else meta=['Interactive prototype'];
    if(stack.length) meta.push(stack.join(' · '));
    intro.innerHTML = `<div class="pm-logo" aria-hidden="true">${d.logo||'📱'}</div>
      <h3 class="pm-name" id="pmTitle">${d.name||''}</h3>
      ${d.tagline?`<div class="pm-tag">${d.tagline}</div>`:''}
      ${d.about?`<p class="pm-about">${d.about}</p>`:''}
      <div class="pm-meta">${meta.map(m=>`<span>${m}</span>`).join('')}</div>
      <div class="pm-ctas">
        ${d.repo?`<a class="pm-btn pm-ghost" href="${d.repo}" target="_blank" rel="noopener noreferrer">View on GitHub <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M7 17L17 7M17 7H8M17 7V16"/></svg></a>`:''}
        <a class="pm-btn pm-primary" href="${BOOK_CALL_URL}" target="_blank" rel="noopener noreferrer">Build an app like this →</a>
      </div>`;
  }
  const panelHead = (d, sub, btn) => `<div class="pm-ph"><div class="pm-row"><div class="pm-ic" aria-hidden="true">${d.logo||'📱'}</div>
      <div style="min-width:0"><b>${d.name||''}</b><small>${sub}</small></div>${btn||''}</div>`;

  function openPrototype(d){
    proto = PROTOTYPES[d.prototype]; S = proto.init();
    applyTheme(proto.theme);
    const all = screensOf(proto);
    panel.innerHTML = panelHead(d, 'Clickable prototype', '<button class="pm-restart" data-pm="restart">↻ Restart</button>') +
      `<p class="pm-hint">Tap through the phone like a real app, or jump to any screen below.</p>
      ${proto.views?`<div class="pm-seg"><span>View as</span><div>${proto.views.map(([l,s],i)=>`<button data-view="${s}" class="${i?'':'pm-on'}">${l}</button>`).join('')}</div></div>`:''}
      </div>
      <div class="pm-list">${proto.flows.map(f=>`<div class="pm-flow">${f.name}</div><div class="pm-items">${f.screens.map(s=>`<button class="pm-it" data-s="${s}"><em>${String(all.indexOf(s)+1).padStart(2,'0')}</em>${proto.screens[s].label}</button>`).join('')}</div>`).join('')}</div>
      <div class="pm-pf"><span><kbd>←</kbd> <kbd>→</kbd> step through screens</span><span><kbd>R</kbd> restart</span><span><kbd>Esc</kbd> close</span></div>`;
    go(proto.start);
  }

  function openVideo(d){
    proto = null; applyTheme(null);
    const ch = Array.isArray(d.chapters) ? d.chapters : [];
    screen.innerHTML = `<div class="pm-island"></div>
      <video class="pm-video" id="pmVideo" src="${d.src}" ${d.poster?`poster="${d.poster}"`:''} autoplay muted loop playsinline preload="metadata"></video>
      <div class="pm-homebar pm-light"></div>`;
    panel.innerHTML = panelHead(d, 'Video walkthrough', '<button class="pm-restart" data-pm="replay">↻ Replay</button>') +
      `<p class="pm-hint">Watch the real app in action${ch.length?'. Jump to any part of the flow below.':'.'}</p>
      <div class="pm-seg"><span>Sound</span><div><button data-mute="1" class="pm-on">Off</button><button data-mute="0">On</button></div></div></div>
      <div class="pm-list">${ch.length?`<div class="pm-flow">Chapters</div><div class="pm-items pm-one">${ch.map(([t,s],i)=>`<button class="pm-it ${i?'':'pm-on'}" data-t="${Number(s)||0}"><em>${Math.floor(s/60)}:${String(Math.floor(s%60)).padStart(2,'0')}</em>${t}</button>`).join('')}</div>`:''}</div>
      <div class="pm-pf"><span><kbd>Space</kbd> play / pause</span><span><kbd>Esc</kbd> close</span></div>`;
    const v = document.getElementById('pmVideo');
    v.addEventListener('error', ()=>{
      screen.insertAdjacentHTML('beforeend', `<div class="pm-msg"><b>Video not found</b><span>Check that this file is uploaded to your repo:</span><code>${pmEsc(d.src)}</code></div>`);
    });
    if(ch.length) v.addEventListener('timeupdate', ()=>{
      let a=0; ch.forEach(([,s],i)=>{ if(v.currentTime >= s) a=i; });
      panel.querySelectorAll('.pm-it[data-t]').forEach((b,i)=>b.classList.toggle('pm-on', i===a));
    });
    const p = v.play(); if(p && p.catch) p.catch(()=>{});
  }

  function embedUrl(src){
    try{
      const u = new URL(src, location.href);
      if(/(^|\.)figma\.com$/.test(u.hostname) && !u.pathname.startsWith('/embed')){
        if(/^\/proto\//.test(u.pathname)){
          if(!u.searchParams.has('hide-ui')) u.searchParams.set('hide-ui','1');
          if(!u.searchParams.has('scaling')) u.searchParams.set('scaling','contain');
        }
        return 'https://www.figma.com/embed?embed_host=share&url=' + encodeURIComponent(u.toString());
      }
      return u.toString();
    }catch(_){ return src; }
  }
  function openEmbed(d){
    proto = null; applyTheme(null);
    screen.innerHTML = `<iframe class="pm-iframe" src="${embedUrl(d.src)}" title="${pmEsc(d.name||'Prototype')}" allowfullscreen></iframe>`;
    panel.innerHTML = panelHead(d, 'Interactive prototype', '') +
      `<p class="pm-hint">Click and scroll inside the phone to try the app. It may take a few seconds to load.</p>
      <a class="pm-open-link" href="${d.src}" target="_blank" rel="noopener noreferrer">Open full screen ↗</a></div>
      <div class="pm-list"></div><div class="pm-pf"><span><kbd>Esc</kbd> close</span></div>`;
  }

  /* ---------- open / close ---------- */
  function open(d, card){
    demo = d; lastFocus = card || document.activeElement;
    modal.style.setProperty('--pm-accent', d.accent || '#00E5FF');
    buildIntro(d, card);
    if(d.type==='prototype') openPrototype(d);
    else if(d.type==='video') openVideo(d);
    else openEmbed(d);
    overlay.classList.add('pm-show'); overlay.setAttribute('aria-hidden','false');
    fitPhone();
    document.documentElement.style.overflow='hidden'; document.body.style.overflow='hidden';
    modal.scrollTop = 0;
    requestAnimationFrame(()=>{ overlay.classList.add('pm-in'); closeBtn.focus({preventScroll:true}); });
  }
  function close(){
    if(!overlay.classList.contains('pm-show')) return;
    clearTimers(); clearTimeout(toastT);
    overlay.classList.remove('pm-in'); overlay.setAttribute('aria-hidden','true');
    document.documentElement.style.overflow=''; document.body.style.overflow='';
    const v = document.getElementById('pmVideo'); if(v){ v.pause(); }
    setTimeout(()=>{ if(!overlay.classList.contains('pm-in')){ overlay.classList.remove('pm-show'); screen.innerHTML=''; proto=null; demo=null; } }, 320);
    if(lastFocus && lastFocus.focus) lastFocus.focus({preventScroll:true});
  }
  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', e=>{ if(e.target===overlay) close(); });

  /* side panel */
  panel.addEventListener('click', e=>{
    const it = e.target.closest('.pm-it');
    if(it && it.dataset.s){ go(it.dataset.s); return; }
    const v = document.getElementById('pmVideo');
    if(it && it.dataset.t !== undefined){ if(v){ v.currentTime = Number(it.dataset.t); v.play().catch(()=>{}); } panel.querySelectorAll('.pm-it[data-t]').forEach(b=>b.classList.toggle('pm-on', b===it)); return; }
    const b = e.target.closest('[data-pm]');
    if(b && b.dataset.pm==='restart' && proto){ S = proto.init(); go(proto.start); return; }
    if(b && b.dataset.pm==='replay' && v){ v.currentTime = 0; v.play().catch(()=>{}); return; }
    const view = e.target.closest('[data-view]'); if(view && proto){ go(view.dataset.view); return; }
    const mute = e.target.closest('[data-mute]');
    if(mute){ panel.querySelectorAll('[data-mute]').forEach(x=>x.classList.toggle('pm-on', x===mute)); if(v){ v.muted = mute.dataset.mute==='1'; if(!v.muted) v.play().catch(()=>{}); } }
  });

  /* keyboard */
  document.addEventListener('keydown', e=>{
    if(!overlay.classList.contains('pm-show')) return;
    if(e.key==='Escape'){ e.preventDefault(); close(); return; }
    const tag = (e.target.tagName||'').toLowerCase();
    if(tag==='input' || tag==='textarea' || e.target.isContentEditable) return;
    if(e.key==='Tab'){ // keep focus inside the popup
      const f = [...modal.querySelectorAll('a[href],button:not([disabled]),input,iframe,video,[tabindex]:not([tabindex="-1"])')].filter(x=>x.offsetParent!==null);
      if(f.length){ const first=f[0], last=f[f.length-1];
        if(e.shiftKey && document.activeElement===first){ e.preventDefault(); last.focus(); }
        else if(!e.shiftKey && document.activeElement===last){ e.preventDefault(); first.focus(); } }
      return;
    }
    if(proto){
      const all = screensOf(proto), i = all.indexOf(cur);
      if(e.key==='ArrowRight'){ e.preventDefault(); go(all[Math.min(all.length-1, i+1)]); }
      else if(e.key==='ArrowLeft'){ e.preventDefault(); go(all[Math.max(0, i-1)]); }
      else if(e.key==='r' || e.key==='R'){ if(e.metaKey||e.ctrlKey) return; S = proto.init(); go(proto.start); }
    } else if(e.key===' '){
      const v = document.getElementById('pmVideo');
      if(v){ e.preventDefault(); v.paused ? v.play().catch(()=>{}) : v.pause(); }
    }
  });

  /* ---------- hook up the project cards ---------- */
  document.querySelectorAll('.proj-card[data-demo]').forEach(card=>{
    const d = PROJECT_DEMOS[card.dataset.demo];
    if(!isReady(d)) return;
    const isVideo = d.type==='video';
    const label = isVideo ? 'Watch demo' : 'Try it live';
    card.classList.add('pm-has-demo');
    card.setAttribute('tabindex','0');
    card.setAttribute('role','button');
    card.setAttribute('aria-label', `${label}: ${d.name||'project'}`);
    const imgBox = card.querySelector('.project-image');
    if(imgBox){
      imgBox.insertAdjacentHTML('beforeend',
        `<span class="pm-badge ${isVideo?'pm-badge-video':''}"><i></i>${label}</span><span class="pm-play" aria-hidden="true"><span>${PM_ICON.play}</span></span>`);
    }
    const link = card.querySelector('.proj-link');
    if(link){
      const row = document.createElement('div'); row.className = 'pm-card-actions';
      link.parentNode.insertBefore(row, link);
      row.insertAdjacentHTML('beforeend', `<button type="button" class="pm-card-cta">${PM_ICON.play}${isVideo?'Watch demo':'Try prototype'}</button>`);
      row.appendChild(link);
    }
    card.addEventListener('click', e=>{ if(e.target.closest('a')) return; open(d, card); });
    card.addEventListener('keydown', e=>{ if((e.key==='Enter'||e.key===' ') && e.target===card){ e.preventDefault(); open(d, card); } });
  });
})();
