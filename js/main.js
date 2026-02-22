// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;
    answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
  });
});

// Dynamic GitHub Download Button (Project-specific)
const downloadBtn = document.getElementById('download-btn');
if (downloadBtn) {
  const repoOwner = 'LogicFordge961';
  const repoName = 'LogicForge';

  // Extract project name from page (assumes <h2> contains project name)
  const projectTitle = document.querySelector('#project-details h2').textContent.trim();

  fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/releases/latest`)
    .then(res => res.json())
    .then(data => {
      if (data.assets && data.assets.length > 0) {
        // Look for asset with project name in its name
        const asset = data.assets.find(a => a.name.toLowerCase().includes(projectTitle.toLowerCase()));
        if (asset) downloadBtn.href = asset.browser_download_url;
      }
    })
    .catch(err => console.error('Error fetching release:', err));
}
