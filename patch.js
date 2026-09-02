(()=>{
  const swap=(title,src,label)=>{
    document.querySelectorAll('.project h3').forEach(h=>{
      if(h.textContent.trim()!==title)return;
      const card=h.closest('.project');
      const media=card?.querySelector('.media');
      const img=media?.querySelector('img');
      const badge=media?.querySelector('.badge');
      if(img){img.src=src;img.alt=title+' verified architecture';img.style.objectFit='contain';img.style.padding='14px';img.style.background='#e8e3d8';}
      if(media)media.classList.add('contain');
      if(badge){badge.textContent=label;badge.classList.remove('acid');badge.classList.add('blue');}
    });
  };
  swap('Cupid Intelligent Email Routing','assets/cupid-architecture.svg?v=20260902-6','Verified workflow map');
  swap('Lead Qualification & CRM Automation','assets/lead-architecture.svg?v=20260902-6','Verified routing map');

  // Temporarily prevent recruiters being sent into the AWS repo while a public credential is being remediated.
  document.querySelectorAll('.project h3').forEach(h=>{
    if(h.textContent.trim()!=='High-Availability 3-Tier AWS')return;
    const card=h.closest('.project');
    const link=card?.querySelector('.project-link');
    const badge=card?.querySelector('.badge');
    if(link){
      link.removeAttribute('href');
      link.removeAttribute('target');
      link.style.cursor='default';
      link.style.opacity='.72';
      link.textContent='Repository security cleanup in progress';
      link.addEventListener('click',e=>e.preventDefault());
    }
    if(badge)badge.textContent='Architecture evidence';
  });
})();