/* =====================================================================
   Md Sahiduzzaman Niloy — Portfolio
   Site interactions: loader, nav, effects, sliders, counters
   ===================================================================== */
document.getElementById('year').textContent = new Date().getFullYear();

/* ============ LOADER ============ */
const loaderDots = document.getElementById('loader-dots');
let dotCount = 0;
const dotTimer = setInterval(()=>{
  dotCount = (dotCount+1)%4;
  loaderDots.textContent = '.'.repeat(dotCount);
}, 300);

function dismissLoader(){
  const loaderEl = document.getElementById('loader');
  if(!loaderEl || loaderEl.dataset.dismissed) return;
  loaderEl.dataset.dismissed = 'true';
  loaderEl.classList.add('hidden');
  clearInterval(dotTimer);
}
// Each init wrapped independently so one failure can't block the rest or the loader dismissal.
function safeRun(fn, label){
  try{ fn(); } catch(err){ console.error('[init:'+label+']', err); }
}
function startExperience(){
  safeRun(initTyping, 'typing');
  safeRun(initConsole, 'console');
  safeRun(triggerReveal, 'reveal');
  dismissLoader();
}
// Primary path: wait for full load, but don't let it wait forever.
window.addEventListener('load', ()=>{ setTimeout(startExperience, 1200); });
// Hard fallback: guarantees the loader NEVER blocks scrolling/clicking, even if 'load' is slow,
// an asset fails, or a script error occurs upstream.
setTimeout(startExperience, 3200);

/* ============ NAV ============ */
const navToggle = document.getElementById('navToggle');
const navList = document.getElementById('navList');
function closeNavMenu(){
  navToggle.classList.remove('open');
  navList.classList.remove('open');
}
navToggle.addEventListener('click', ()=>{
  navToggle.classList.toggle('open');
  navList.classList.toggle('open');
});
navList.querySelectorAll('a').forEach(a=>a.addEventListener('click', closeNavMenu));
document.addEventListener('click', e=>{ if(navList.classList.contains('open') && !e.target.closest('header')) closeNavMenu(); });
document.addEventListener('keydown', e=>{ if(e.key==='Escape') closeNavMenu(); });

const headerEl = document.querySelector('header .nav-inner');
window.addEventListener('scroll', ()=>{
  if(window.scrollY > 40){
    headerEl.style.background = 'rgba(10,13,24,0.85)';
    headerEl.style.borderColor = 'rgba(234,242,255,0.16)';
  } else {
    headerEl.style.background = 'rgba(15,20,36,0.55)';
    headerEl.style.borderColor = 'rgba(234,242,255,0.09)';
  }
});

/* ============ CURSOR GLOW ============ */
const glow = document.getElementById('cursor-glow');
const isTouch = matchMedia('(hover: none)').matches;
if(!isTouch){
  window.addEventListener('pointermove', (e)=>{
    glow.style.setProperty('--mx', e.clientX+'px');
    glow.style.setProperty('--my', e.clientY+'px');
  });
}

/* ============ PARTICLES (react to mouse) ============ */
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let W,H, particles=[];
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

function resizeCanvas(){
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const PCOUNT = isTouch ? 34 : 62;
for(let i=0;i<PCOUNT;i++){
  particles.push({
    x: Math.random()*W, y: Math.random()*H,
    vx: (Math.random()-0.5)*0.25, vy:(Math.random()-0.5)*0.25,
    r: Math.random()*1.6+0.5,
    hue: Math.random()>0.7 ? 'violet' : 'cyan'
  });
}
let mouse = {x:-1000,y:-1000};
window.addEventListener('pointermove', e=>{ mouse.x=e.clientX; mouse.y=e.clientY; });

function animateParticles(){
  if(reduceMotion){ return; }
  ctx.clearRect(0,0,W,H);
  particles.forEach(p=>{
    p.x += p.vx; p.y += p.vy;
    const dx = mouse.x - p.x, dy = mouse.y - p.y;
    const dist = Math.sqrt(dx*dx+dy*dy);
    if(dist < 140){
      p.x -= dx/dist*0.6;
      p.y -= dy/dist*0.6;
    }
    if(p.x<0) p.x=W; if(p.x>W) p.x=0;
    if(p.y<0) p.y=H; if(p.y>H) p.y=0;

    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle = p.hue==='violet' ? 'rgba(124,108,255,0.5)' : 'rgba(0,229,255,0.45)';
    ctx.fill();
  });
  requestAnimationFrame(animateParticles);
}
if(!reduceMotion){ animateParticles(); }

/* ============ TYPING EFFECT ============ */
const roles = ['Android Developer','iOS Developer','Kotlin Expert','Firebase Specialist','UI/UX Enthusiast'];
const typedEl = document.getElementById('typed');
function initTyping(){
  let ri=0, ci=0, deleting=false;
  function tick(){
    const word = roles[ri];
    if(!deleting){
      ci++;
      typedEl.textContent = word.slice(0,ci);
      if(ci===word.length){ deleting=true; setTimeout(tick, 1400); return; }
    } else {
      ci--;
      typedEl.textContent = word.slice(0,ci);
      if(ci===0){ deleting=false; ri=(ri+1)%roles.length; setTimeout(tick, 300); return; }
    }
    setTimeout(tick, deleting?35:75);
  }
  tick();
}

/* ============ CONSOLE TYPE-OUT ============ */
const consoleLines = [
  '&gt; ./gradlew assembleRelease',
  'Building module <span class="path">:app</span>...',
  'Compiling Java sources <span class="ok">✓</span>',
  'Syncing Firebase config <span class="ok">✓</span>',
  'Running lint checks <span class="ok">✓</span>',
  '0 errors <span class="warn">·</span> 0 crashes',
  '<span class="ok">BUILD SUCCESSFUL in 4s</span>',
];
function initConsole(){
  const body = document.getElementById('consoleBody');
  body.innerHTML = '';
  let i = 0;
  function nextLine(){
    if(i >= consoleLines.length){
      setTimeout(()=>{ body.innerHTML=''; i=0; nextLine(); }, 3200);
      return;
    }
    const div = document.createElement('div');
    div.innerHTML = consoleLines[i] + (i===consoleLines.length-1 ? '<span class="console-caret"></span>' : '');
    body.appendChild(div);
    i++;
    setTimeout(nextLine, 420);
  }
  nextLine();
}

/* ============ PHONE SLIDE ROTATOR ============ */
const slides = document.querySelectorAll('.app-slide');
const dots = document.querySelectorAll('.dots-row i');
let slideIdx = 0;
setInterval(()=>{
  slides[slideIdx].classList.remove('active');
  dots[slideIdx].classList.remove('active');
  slideIdx = (slideIdx+1)%slides.length;
  slides[slideIdx].classList.add('active');
  dots[slideIdx].classList.add('active');
}, 3200);

/* ============ TICKER CONTENT ============ */
const tickerItems = ['ANDROID','IOS','KOTLIN','JAVA','FIREBASE','REST API','TENSORFLOW','SOCKET.IO','PLAY STORE READY','APP STORE READY','CLEAN ARCHITECTURE'];
const track = document.getElementById('tickerTrack');
const full = [...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems];
track.innerHTML = full.map(t=>`<span>${t}</span>`).join('');

/* ============ SCROLL REVEAL ============ */
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, {threshold:0.15, rootMargin:'0px 0px -40px 0px'});
function triggerReveal(){ revealEls.forEach(el=>io.observe(el)); }
// Observe immediately too (loader covers hero anyway)
triggerReveal();

/* ============ STATS COUNTER ============ */
const counters = document.querySelectorAll('.count');
let countersStarted = false;
const statsIO = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting && !countersStarted){
      countersStarted = true;
      counters.forEach(c=>{
        const target = parseInt(c.dataset.target,10);
        let cur = 0;
        const step = Math.max(1, Math.round(target/50));
        const timer = setInterval(()=>{
          cur += step;
          if(cur>=target){ cur=target; clearInterval(timer); }
          c.textContent = cur;
        }, 28);
      });
    }
  });
}, {threshold:0.4});
document.querySelectorAll('.stats-band').forEach(el=>statsIO.observe(el));

/* ============ TESTIMONIAL SLIDER ============ */
const testiTrack = document.getElementById('testiTrack');
const testiSlides = document.querySelectorAll('.testi-slide');
const testiDotsWrap = document.getElementById('testiDots');
let testiIdx = 0;
testiSlides.forEach((_,i)=>{
  const b = document.createElement('button');
  if(i===0) b.classList.add('active');
  b.addEventListener('click', ()=> goToTesti(i));
  testiDotsWrap.appendChild(b);
});
function goToTesti(i){
  testiIdx = i;
  testiTrack.style.transform = `translateX(-${i*100}%)`;
  testiDotsWrap.querySelectorAll('button').forEach((b,bi)=>b.classList.toggle('active', bi===i));
}
setInterval(()=>{
  goToTesti((testiIdx+1)%testiSlides.length);
}, 5000);

/* ============ MAGNETIC BUTTONS ============ */
if(!isTouch){
  document.querySelectorAll('.magnetic').forEach(btn=>{
    btn.addEventListener('pointermove', (e)=>{
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left - r.width/2;
      const y = e.clientY - r.top - r.height/2;
      btn.style.transform = `translate(${x*0.18}px, ${y*0.28}px)`;
    });
    btn.addEventListener('pointerleave', ()=>{
      btn.style.transform = '';
    });
  });
}

/* ============ 3D TILT: phone + project cards ============ */
if(!isTouch){
  function attachTilt(el, {max=10, scale=1} = {}){
    el.addEventListener('pointermove', (e)=>{
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left)/r.width;
      const py = (e.clientY - r.top)/r.height;
      const rx = (py-0.5) * -max;
      const ry = (px-0.5) * max;
      el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${scale})`;
    });
    el.addEventListener('pointerleave', ()=>{
      el.style.transform = '';
    });
  }
  document.querySelectorAll('.proj-card').forEach(c=>attachTilt(c, {max:8, scale:1.02}));
  const phoneEl = document.getElementById('phoneEl');
  phoneEl.addEventListener('pointermove', (e)=>{
    const r = phoneEl.getBoundingClientRect();
    const px = (e.clientX - r.left)/r.width;
    const py = (e.clientY - r.top)/r.height;
    const rx = (py-0.5) * -14;
    const ry = (px-0.5) * 14;
    phoneEl.style.animation = 'none';
    phoneEl.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
  });
  phoneEl.addEventListener('pointerleave', ()=>{
    phoneEl.style.animation = 'phoneFloat 6s ease-in-out infinite';
    phoneEl.style.transform = '';
  });
}
