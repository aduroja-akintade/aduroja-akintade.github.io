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
  swap('Cupid Intelligent Email Routing','assets/cupid-architecture.svg?v=20260902-5','Verified workflow map');
  swap('Lead Qualification & CRM Automation','assets/lead-architecture.svg?v=20260902-5','Verified routing map');
})();