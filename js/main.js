// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;
    answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
  });
});

// Dynamic GitHub Download Button
const downloadBtn = document.getElementById('download-btn');
if (downloadBtn) {
  const repoOwner = 'LogicFordge961';
  const repoName = 'LogicForge';
  fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/releases/latest`)
    .then(res => res.json())
    .then(data => {
      if (data.assets && data.assets.length > 0) {
        downloadBtn.href = data.assets[0].browser_download_url;
      }
    });
}

