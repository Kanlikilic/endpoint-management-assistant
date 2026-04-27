const repoOwner = "Kanlikilic";
const repoName = "endpoint-management-assistant";

async function getLatestRelease() {
  try {
    const res = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/releases/latest`);
    const data = await res.json();
    // EXE arayan kod:
    const exeAsset = data.assets.find(a => a.name.endsWith('.exe'));
    if (exeAsset) {
      document.getElementById('downloadLink').href = exeAsset.browser_download_url;
      document.getElementById('downloadLink').textContent = "Son Sürümü İndir (EXE)";
      document.getElementById('downloadCount').textContent = `İndirme Sayısı: ${exeAsset.download_count}`;
    } else {
      document.getElementById('downloadLink').textContent = "Henüz EXE dosyası eklenmedi";
      document.getElementById('downloadLink').href = "#";
      document.getElementById('downloadCount').textContent = "";
    }
  } catch (e) {
    document.getElementById('downloadCount').textContent = "İndirme verileri alınamadı.";
  }
}

document.addEventListener('DOMContentLoaded', getLatestRelease);