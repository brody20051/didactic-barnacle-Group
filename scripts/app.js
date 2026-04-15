const searchInput = document.getElementById('searchInput');
const appFilter = document.getElementById('appFilter');
const osFilter = document.getElementById('osFilter');
const results = document.getElementById('results');
const resultCount = document.getElementById('resultCount');

let shortcuts = [];

const normalize = (value) => value.toLowerCase().trim();

function render(items) {
  resultCount.textContent = `${items.length} shortcut${items.length === 1 ? '' : 's'} found`;

  results.innerHTML = items
    .map(
      (item) => `
      <li>
        <div class="shortcut">${item.shortcut}</div>
        <div>${item.action}</div>
        <div class="meta">${item.app} • ${item.os} • Submitted by ${item.submittedBy}</div>
      </li>
    `
    )
    .join('');
}

function applyFilters() {
  const search = normalize(searchInput.value);
  const selectedApp = appFilter.value;
  const selectedOs = osFilter.value;

  const filtered = shortcuts.filter((item) => {
    const searchable =
      `${item.shortcut} ${item.action} ${item.app} ${item.os} ${item.submittedBy}`.toLowerCase();

    return (
      (!search || searchable.includes(search)) &&
      (selectedApp === 'all' || item.app === selectedApp) &&
      (selectedOs === 'all' || item.os === selectedOs)
    );
  });

  render(filtered);
}

function populateAppOptions(items) {
  appFilter.innerHTML = `<option value="all">All apps/tools</option>`;

  const uniqueApps = [...new Set(items.map((item) => item.app))].sort();

  uniqueApps.forEach((appName) => {
    const option = document.createElement('option');
    option.value = appName;
    option.textContent = appName;
    appFilter.append(option);
  });
}

async function init() {
  try {
    // ✅ FIXED PATH (THIS WAS THE FINAL ISSUE BEFORE)
    const response = await fetch('./data/shortcuts.json');

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    shortcuts = await response.json();

    populateAppOptions(shortcuts);
    applyFilters();
  } catch (error) {
    console.error(error);
    resultCount.textContent = 'Failed to load shortcut data.';
    results.innerHTML = `<li>${error.message}</li>`;
  }
}

searchInput.addEventListener('input', applyFilters);
appFilter.addEventListener('change', applyFilters);
osFilter.addEventListener('change', applyFilters);

init();
