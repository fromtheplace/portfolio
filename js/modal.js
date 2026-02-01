  document.addEventListener("DOMContentLoaded", function () {
      const modal = document.getElementById('project-modal');
      const modalTitle = document.getElementById('modal-title');
      const modalDescription = document.getElementById('modal-description');
	   const modalBody = document.getElementById('modal-body');
      const modalPrev = document.querySelector('.modal-prev');
      const modalNext = document.querySelector('.modal-next');
      const modalClose = document.querySelector('.modal-close');
      const imageContainer = document.getElementById('modalImageContainer');
// === Lightbox Setup ===
const lightboxOverlay = document.getElementById('image-lightbox-overlay');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');

// Close on overlay or X
lightboxOverlay.addEventListener('click', () => {
  lightboxOverlay.style.display = 'none';
});
lightboxClose.addEventListener('click', () => {
  lightboxOverlay.style.display = 'none';
});





const videos = [

];

const container = document.getElementById('yt-chip-container');
videos.forEach(video => {
  const a = document.createElement('a');
  a.className = 'yt-chip';
  a.href = `https://www.youtube.com/watch?v=${video.id}`;
  a.target = '_blank';

  const img = document.createElement('img');
  img.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
  img.alt = video.title;

  const span = document.createElement('span');
  span.textContent = video.title;

  a.appendChild(img);
  a.appendChild(span);
  container.appendChild(a);
});
   

 const projectData = {
  1: {
    title: 'Ōtepoti Hip Hop Hustle 24',
    youtube: 'AyBXBHIu_Vc', // Main embedded video
      playlist: 'PL2HwIIvWJIPHkofbvzfQy7apKM2vYth5k',
	chips: [ // Secondary YouTube links
      { id: 'J06W1MAzugI', title: 'Shorts/Reels', type: 'youtube'  },
	    { 	 url: 'https://www.odt.co.nz/news/dunedin/connecting-through-music', 
            title: 'Press Article #1', 
            type: 'url' 
        },
		{   url: '	https://www.odt.co.nz/news/arts-festival-dunedin/night-%E2%80%98boogieing%E2%80%99-hip-hop-event-hit', 
            title: 'Press Article #2', 
            type: 'url' 
        }
		 
		 
		 
		 ],
    images: ['images/Nook_banner.jpg', 'images/nook_poster.jpg'],
    description: 'Multicam live video production, live camera projection, live audio mastering, after film production, Long and short-form video publishing.',
    creditsHTML: `
      <div class="credit-list">
        <h2>Production Services</h2>
        <ul>
          <li>Multicam Live Video Production</li>
          <li>Live Camera Projection</li>
          <li>Live Audio Mastering</li>
          <li>After-Film Production</li>
          <li>Long-Form & Short-Form Video Publishing</li>
        </ul>
		     </div>    `
  },

        2: {
		youtube: 'Ct2avwGJqjA',
		startTime: 0, 
          title: 'Music for People',
	chips: [ // Secondary YouTube links
          { id: 'XvE0GewwNlI', title: 'St Pauls Cathedral show', type: 'youtube', startTime: 18806},
        { id: 'HWOwgh6AI5k', title: 'Starters Bar show', type: 'youtube', startTime: 6899},
        { url: 'https://www.odt.co.nz/entertainment/music/powerful-brew-something-new', 
            title: 'ODT Article #1', 
            type: 'url' 
        },
		
		{ 
            url: 'https://www.critic.co.nz/news/article/9500/the-spat-behind-music-for-the-peoples-relocation-f', 
            title: 'Critic/Te Ārohi Article ', 
            type: 'url' 
        },
		
		{ 
            url: 'https://www.odt.co.nz/entertainment/music/people-get-ready', 
            title: 'ODT Article #2', 
            type: 'url' 
        },
		{ 
            url: 'https://www.facebook.com/events/197513774778177', 
            title: 'Facebook Event', 
            type: 'url' 
        }
		],         
		 images: ['https://via.placeholder.com/600x400'],
          description: 'In February 2020, just before lockdowns, New New New hosted its largest and most ambitious line-up to date. Music for People featured 11 genre-spanning acts, from rap to rock and everything in between. The follow-up expanded to 32 acts across two distinct sessions: an afternoon in St Paul’s Cathedral and an evening at Starters Bar. <br/>  <strong><em>From the Place</em></strong>  led both the creative and technical direction, developing a cohesive visual identity and a multi-platform production workflow. This included multicam live video streaming for both sessions, real-time on-site camera projection, and live audio mastering for high-fidelity broadcast and archival delivery. All graphic assets—across print, digital, and motion—were designed in-house, along with a custom ecommerce and ticketing platform featuring artist profiles, schedules, and sales integration. The result was a seamless, hybrid production that bridged audiences across spaces and styles, delivering a unified experience in both physical and digital form.',
		    creditsHTML: `
		      <div class="credit-list">
      <h2>Production Services</h2>
      <ul>
        <li>Multicam Live Video Production</li>
        <li>Live Audio Mastering</li>
        <li>Graphic Design</li>
        <li>Ecommerce/Ticketing website</li>
		<li>Music Compostion/Teaser Video Production</li>
      </ul>

    </div>
`
},

3: {
  title: 'Nook & Cranny Music Fest',
  youtube: 'WImSgUXMGC0',
  
  description: 'Multicam live video production, live camera projection, live audio mastering, after film production, Long and short-form video publishing.',
   	chips: [			{ id: 'bs1pQGatwVw', title: 'View stream #1', type: 'youtube', startTime: 9178},
			{ id: 'ZjQX8IGXmkk', title: 'View stream #2', type: 'youtube', startTime: 3344},
			{ url: 'https://www.facebook.com/events/214469309799841/', 
            title: 'Facebook Event', 
            type: 'url',
			localImage: 'images/Nook_banner.jpg'  
			}
			],
  creditsHTML: `
    <div class="credit-list">
      <h2>Production Services</h2>
      <ul>
        <li>Multicam Live Video Production</li>
        <li>Live Camera Projection</li>
      </ul>
    </div>
  `,
   images: ['images/Nook_banner.jpg', 'images/nook_poster.jpg'],
},
4: {

  title: 'Project Four Placeholder',
  youtube: 'yxH2mg92doY',
  startTime: 4, 
  chips: [ // Secondary YouTube links
          { id: 'XvE0GewwNlI', title: 'St Pauls Cathedral show', type: 'youtube' },
        { id: 'HWOwgh6AI5k', title: 'Starters Bar show', type: 'youtube' },
        { 
            url: 'https://www.odt.co.nz/the-star/music-festival-organisers-taking-cautious-approach', 
            title: 'Press Article #1', 
            type: 'url' 
        },
		{ 
            url: 'https://www.odt.co.nz/entertainment/music/people-get-ready', 
            title: 'Press Article #2', 
            type: 'url'
					
        }, { 
            url: 'https://www.facebook.com/events/3369191529775528/', 
            title: 'Facebook Event', 
            type: 'url' 
        }
		
		
		
      ],       
  description: 'Description for project four. Brief summary of services and outcomes.',
  creditsHTML: `
    <div class="credit-list">
      <h2>Production Credits</h2>
      <ul>
        <li>Live Sound Recording</li>
        <li>Color Grading</li>
      </ul>
    </div>
  `
},
5: {
  youtube: 'iCHbYu7owBQ',
  title: 'Autumn Arena',
  description: 'Description for project five. Brief summary of services and highlights.',
  creditsHTML: `
    <div class="credit-list">
      <h2>Creative Roles</h2>
      <ul>
     <li>Video Production</li>
        <li>Composition (EXPJ - Bass Guitar)</li>
		<li>Graphic Design</li>
		<li>Event Management (Booking Administrator)</li>
      </ul>
    </div>
  `
},
6: {
  youtube: 'ox4QqeyNykQ',
  title: 'Ollie Crooks - Take you There',
  description: 'Description for project six. Event recap, highlights, and interviews.',
  creditsHTML: `
    <div class="credit-list">
      <h2>Technical Team</h2>
      <ul>
        <li>Lighting Design</li>
        <li>Stage Management</li>
      </ul>
    </div>
  `
},
7: {
  youtube: 'DPQRV7qTxT0',
  title: 'Fonterra - Infographic Video Production',
    description: 'Behind-the-scenes showcase of creative collaboration.',
  creditsHTML: `
    <div class="credit-list">
      <h2>Media Support</h2>
      <ul>
        <li>Video Production</li>
        <li>Music Composition</li>
		<li>Project management</li>
      </ul>
    </div>
  `
},
8: {
  youtube: 'PLACEHOLDER_ID_8',
  title: 'Project Eight Placeholder',
  description: 'Documentation of a multidisciplinary performance installation.',
  creditsHTML: `
    <div class="credit-list">
      <h2>Post-Production</h2>
      <ul>
        <li>Sound Design</li>
        <li>Color Correction</li>
      </ul>
    </div>
  `
},
9: {
  youtube: 'PLACEHOLDER_ID_9',
  title: 'Project Nine Placeholder',
  description: 'Short-form music promo with live elements.',
  creditsHTML: `
    <div class="credit-list">
      <h2>Credits</h2>
      <ul>
        <li>Camera Operator</li>
        <li>VFX & Titles</li>
      </ul>
    </div>
  `
}

		
      };

      let currentProjectId = null;

 function openModal(projectId) {
  const data = projectData[projectId];
  if (!data) return;

  currentProjectId = parseInt(projectId);

  // Title and description
  modalTitle.textContent = data.title || '';
  modalDescription.textContent = data.description || '';

  // Credits
  modalBody.innerHTML = data.creditsHTML || '';

 // Images with lightbox
let isDragging = false;
let startPos = { x: 0, y: 0 };
let currentTranslate = { x: 0, y: 0 };
let zoomLevel = 1;

imageContainer.innerHTML = '';
if (Array.isArray(data.images)) {
  data.images.forEach((src) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = data.title;
    img.classList.add('clickable-lightbox');
    imageContainer.appendChild(img);

    img.addEventListener('click', (e) => {
      e.stopPropagation();
      lightboxImg.src = src;
      resetLightboxState();
      lightboxOverlay.style.display = 'flex';
      lightboxOverlay.focus();
    });
  });
}

// Lightbox interactions
lightboxOverlay.addEventListener('click', (e) => {
  if (e.target === lightboxOverlay || e.target === lightboxClose) {
    lightboxOverlay.style.display = 'none';
  }
});

// Unified zoom and drag handlers
lightboxImg.addEventListener('click', handleImageClick);
lightboxOverlay.addEventListener('keydown', handleKeyDown);
lightboxImg.addEventListener('wheel', handleWheelZoom, { passive: false });
lightboxImg.addEventListener('mousedown', startDrag);
lightboxImg.addEventListener('touchstart', startDrag, { passive: false });
document.addEventListener('mousemove', dragImage);
document.addEventListener('touchmove', dragImage, { passive: false });
document.addEventListener('mouseup', endDrag);
document.addEventListener('touchend', endDrag);

// Helper functions
function resetLightboxState() {
  zoomLevel = 1;
  currentTranslate = { x: 0, y: 0 };
  updateTransform();
  lightboxImg.style.cursor = 'grab';
}

function updateTransform() {
  lightboxImg.style.transform = `
    scale(${zoomLevel}) 
    translate(${currentTranslate.x}px, ${currentTranslate.y}px)
  `;
}

function handleImageClick(e) {
  e.stopPropagation();
  
  if (zoomLevel === 1) {
    zoomLevel = 2;
  } else {
    resetLightboxState();
    return;
  }
  
  updateTransform();
}

function handleKeyDown(e) {
  if (e.key === 'Escape') {
    lightboxOverlay.style.display = 'none';
  }
}

function handleWheelZoom(e) {
  e.preventDefault();
  const delta = e.deltaY > 0 ? -0.2 : 0.2;
  zoomLevel = Math.max(1, Math.min(4, zoomLevel + delta));
  
  if (zoomLevel === 1) {
    resetLightboxState();
  } else {
    updateTransform();
  }
}

function startDrag(e) {
  if (zoomLevel <= 1) return;
  
  isDragging = true;
  const clientX = e.clientX || e.touches[0].clientX;
  const clientY = e.clientY || e.touches[0].clientY;
  
  startPos = { x: clientX - currentTranslate.x, y: clientY - currentTranslate.y };
  lightboxImg.style.cursor = 'grabbing';
  lightboxImg.style.transition = 'none';
  e.preventDefault();
}

function dragImage(e) {
  if (!isDragging) return;
  
  const clientX = e.clientX || e.touches[0].clientX;
  const clientY = e.clientY || e.touches[0].clientY;
  
  currentTranslate.x = clientX - startPos.x;
  currentTranslate.y = clientY - startPos.y;
  
  // Calculate boundaries
  const maxX = (lightboxImg.clientWidth * (zoomLevel - 1)) / 2;
  const maxY = (lightboxImg.clientHeight * (zoomLevel - 1)) / 2;
  
  currentTranslate.x = Math.max(-maxX, Math.min(maxX, currentTranslate.x));
  currentTranslate.y = Math.max(-maxY, Math.min(maxY, currentTranslate.y));
  
  updateTransform();
  e.preventDefault();
}

function endDrag() {
  if (isDragging) {
    isDragging = false;
    lightboxImg.style.cursor = zoomLevel > 1 ? 'grab' : 'zoom-in';
    lightboxImg.style.transition = 'transform 0.3s ease';
  }
}

  // Main YouTube video
  const videoContainer = document.getElementById('modalVideoContainer');
  videoContainer.innerHTML = '';
  
if (data.youtube) {
    const params = new URLSearchParams({
        autoplay: 1,
        controls: 0,
        modestbranding: 1,
        rel: 0,
        enablejsapi: 1,
        start: data.startTime || 0,  // Add this line (fallback to 0 if undefined)
    }).toString();

    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${data.youtube}?${params}`;
    iframe.frameBorder = '0';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    videoContainer.appendChild(iframe);
}
 const chipContainer = document.getElementById('yt-chip-container');
chipContainer.innerHTML = '';

const urlWrapper = document.createElement('div');
urlWrapper.className = 'url-chip-column';

if (Array.isArray(data.chips)) {
  data.chips.forEach((item) => {
    const chip = document.createElement('a');
    chip.target = '_blank';

    // YouTube chip
    if (item.type === 'youtube') {
      chip.className = 'yt-chip';
      const startTime = item.startTime || 0;
      chip.href = `https://www.youtube.com/watch?v=${item.id}&t=${startTime}s`;

      const thumb = document.createElement('img');
      thumb.src = `https://img.youtube.com/vi/${item.id}/hqdefault.jpg`;
      thumb.alt = item.title;

      const label = document.createElement('span');
      label.textContent = item.title;
      label.className = 'chip-label';

      chip.appendChild(thumb);
      chip.appendChild(label);
      chipContainer.appendChild(chip);

    // Dailymotion chip
    } else if (item.type === 'dailymotion') {
      chip.className = 'media-chip';
      chip.href = `https://www.dailymotion.com/video/${item.id}`;

      const thumb = document.createElement('img');
      thumb.src = `https://www.dailymotion.com/thumbnail/video/${item.id}`;
      thumb.alt = item.title;

      const label = document.createElement('span');
      label.textContent = item.title;
      label.className = 'chip-label';

      const dmLogo = document.createElement('span');
      dmLogo.className = 'platform-logo dm-logo';
      dmLogo.textContent = 'DM';

      chip.appendChild(thumb);
      chip.appendChild(dmLogo);
      chip.appendChild(label);
      chipContainer.appendChild(chip);

    // URL chip (stacked)
    } else if (item.type === 'url') {
      chip.className = 'url-chips';
      chip.href = item.url;

      const contentWrapper = document.createElement('div');
      contentWrapper.className = 'url-chip-content';

      if (item.localImage) {
        const img = document.createElement('img');
        img.src = item.localImage;
        img.alt = item.title;
        img.className = 'url-chip-image';
        contentWrapper.appendChild(img);
      }

      const icon = document.createElement('span');
      icon.className = 'url-icon';
      icon.innerHTML = '↗';
      contentWrapper.appendChild(icon);

      const label = document.createElement('span');
      label.className = 'chip-label';
      label.textContent = item.title;
      contentWrapper.appendChild(label);

      chip.appendChild(contentWrapper);
      urlWrapper.appendChild(chip);
    }
	
  });

  chipContainer.appendChild(urlWrapper);
}

// YouTube Playlist chip (unchanged)
if (data.playlist) {
  const playlistChip = document.createElement('a');
  playlistChip.href = `https://www.youtube.com/playlist?list=${data.playlist}`;
  playlistChip.target = '_blank';
  playlistChip.className = 'yt-chip';

  const thumb = document.createElement('img');
  thumb.src = `https://img.youtube.com/vi/${data.youtube || data.chips?.[0]?.id}/hqdefault.jpg`;
  thumb.alt = 'Playlist';

  const label = document.createElement('span');
  label.textContent = 'View Playlist';

  playlistChip.appendChild(thumb);
  playlistChip.appendChild(label);
  chipContainer.appendChild(playlistChip);
}

  // Show modal
  modal.setAttribute('aria-hidden', 'false');
  modal.style.display = 'flex';

  // Navigation arrows
  const ids = Object.keys(projectData).map(Number).sort((a, b) => a - b);
  modalPrev.style.display = currentProjectId === ids[0] ? 'none' : 'block';
  modalNext.style.display = currentProjectId === ids[ids.length - 1] ? 'none' : 'block';
}


function closeModal() {
  const modal = document.getElementById('project-modal');
  const videoContainer = document.getElementById('modalVideoContainer');

  modal.setAttribute('aria-hidden', 'true');
  modal.style.display = 'none';
  currentProjectId = null;

  // 🛑 Stop YouTube playback by removing the iframe
  videoContainer.innerHTML = '';
}

      function showNextProject() {
        const ids = Object.keys(projectData).map(Number).sort((a, b) => a - b);
        const index = ids.indexOf(currentProjectId);
        if (index < ids.length - 1) openModal(ids[index + 1]);
      }

      function showPrevProject() {
        const ids = Object.keys(projectData).map(Number).sort((a, b) => a - b);
        const index = ids.indexOf(currentProjectId);
        if (index > 0) openModal(ids[index - 1]);
      }

      document.querySelectorAll('.project').forEach(project => {
        project.addEventListener('click', () => {
          const id = project.getAttribute('data-project-id');
          if (id) openModal(id);
        });
      });

      modalClose.addEventListener('click', closeModal);
      modalNext.addEventListener('click', showNextProject);
      modalPrev.addEventListener('click', showPrevProject);

      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
      });

      window.addEventListener('keydown', (e) => {
        if (modal.style.display === 'flex') {
          if (e.key === 'Escape') closeModal();
          if (e.key === 'ArrowRight') showNextProject();
          if (e.key === 'ArrowLeft') showPrevProject();
        }
      });
    });
 
