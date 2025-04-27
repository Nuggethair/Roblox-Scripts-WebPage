// Loading screen
window.onload = function() {
    setTimeout(() => {
      document.getElementById('loading-screen').style.display = 'none';
      document.getElementById('main-content').style.display = 'block';
    }, 1500);
  };
  
  // Switch between tabs
  function showTab(tabId) {
    document.querySelectorAll('.tab').forEach(tab => tab.style.display = 'none');
    document.getElementById(tabId).style.display = 'block';
  }
  
  // Copy script
  function copyScript(id) {
    const text = document.getElementById(id).innerText;
    navigator.clipboard.writeText(text).then(() => {
      alert('Script copied to clipboard!');
    });
  }
  
  // Search Scripts
  function searchScripts() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let scripts = document.querySelectorAll('.script');
    
    scripts.forEach(script => {
      if (script.innerText.toLowerCase().includes(input)) {
        script.style.display = "";
      } else {
        script.style.display = "none";
      }
    });
  }
  