document.getElementById('ytPreview').addEventListener('click', function () {
    const videoId = this.dataset.videoId;
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    this.innerHTML = ""; // очищаємо прев’ю
    this.appendChild(iframe);
});

// document.getElementById('ytPreview').addEventListener('click', function () {
//         const videoId = this.dataset.videoId;
//         const iframe = document.createElement('iframe');
//         iframe.width = "100%";
//         iframe.height = "100%";
//         iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
//         iframe.frameBorder = "0";
//         iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
//         iframe.allowFullscreen = true;
//         this.innerHTML = ""; // очищаємо прев’ю
//         this.appendChild(iframe);
//       });