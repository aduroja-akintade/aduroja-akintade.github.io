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

  // Use clean evidence maps for systems whose raw captures are too wide for the portfolio card.
  swap('Cupid Intelligent Email Routing','assets/cupid-architecture.svg?v=20260903-1','Verified workflow map');
  swap('Lead Qualification & CRM Automation','assets/lead-architecture.svg?v=20260903-1','Verified routing map');

  // Make the WhatsApp implementation a full-width bridge between automation work and cloud work.
  document.querySelectorAll('.project h3').forEach(h=>{
    if(h.textContent.trim()==='WhatsApp AI Order Processor'){
      h.closest('.project')?.classList.add('full');
    }
  });

  // Link the AWS card to selected architecture evidence rather than exposing the repository as the primary recruiter path.
  document.querySelectorAll('.project h3').forEach(h=>{
    if(h.textContent.trim()!=='High-Availability 3-Tier AWS')return;
    const card=h.closest('.project');
    const link=card?.querySelector('.project-link');
    const badge=card?.querySelector('.badge');
    if(link){
      link.href='https://raw.githubusercontent.com/aduroja-akintade/aws-3tier-terraform-nextjs/main/ASSETS/vpc%20topography%201.PNG';
      link.target='_blank';
      link.rel='noreferrer';
      link.style.cursor='pointer';
      link.style.opacity='1';
      link.innerHTML='<span>Inspect architecture evidence</span><span>↗</span>';
    }
    if(badge)badge.textContent='Architecture evidence';
  });

  // Keep unfinished or weak repository surfaces out of the recruiter journey until they are portfolio-ready.
  document.querySelectorAll('.row-link').forEach(link=>{
    const title=link.querySelector('b')?.textContent.trim();
    if(title==='Automated Developer Onboarding') link.remove();
  });

  const style=document.createElement('style');
  style.textContent=`
    section[id]{scroll-margin-top:92px}
    .project.full{grid-column:span 12;display:grid;grid-template-columns:1.25fr .75fr;grid-template-rows:auto auto}
    .project.full .media{grid-row:1 / span 2;height:390px;border-right:1px solid var(--line)}
    .project.full .project-body{min-height:310px}
    .project.full .project-link{grid-column:2}
    .project.full h3{font-size:34px}
    .project-link{transition:background .2s,color .2s,padding .2s}
    .project-link:hover{padding-left:29px}
    .section-head{scroll-margin-top:100px}
    @media(max-width:930px){
      .project.full{display:flex;grid-column:span 12}
      .project.full .media{height:285px;border-right:0}
      .project.full .project-body{min-height:0}
    }
  `;
  document.head.appendChild(style);
})();