(()=>{
  const messages=["やっほー！","元気？","今日は何見る？","ゲームする？","ゆっくり見てってね！","気になる作品ある？","おつかれさま！","見つけた？"];
  const mount=()=>{
    if(document.querySelector('[data-mascot]')) return;
    const wrap=document.createElement('div'); wrap.className='mascot-wrap'; wrap.dataset.mascot='';
    const speech=document.createElement('div'); speech.className='mascot-speech'; speech.setAttribute('role','status'); speech.setAttribute('aria-live','polite');
    const btn=document.createElement('button'); btn.type='button'; btn.className='mascot-btn'; btn.setAttribute('aria-label','ミニキャラに話しかける');
    const img=document.createElement('img'); img.src='assets/images/mascot.png'; img.alt='';
    btn.append(img); wrap.append(speech,btn); document.body.append(wrap);
    let last=-1,timer;
    btn.addEventListener('click',()=>{btn.classList.remove('bounce'); void btn.offsetWidth; btn.classList.add('bounce'); setTimeout(()=>btn.classList.remove('bounce'),450); let i=Math.floor(Math.random()*messages.length); if(messages.length>1&&i===last)i=(i+1)%messages.length; last=i; speech.textContent=messages[i]; speech.classList.add('show'); clearTimeout(timer); timer=setTimeout(()=>speech.classList.remove('show'),3200);});
  };
  mount();
})();
