// const tabs = document.querySelectorAll('.tab');
//         const tabContents = document.querySelectorAll('.tab-content');
//         let currentVideo = null;

//         function stopAllVideos() {
//             // Pause all YouTube videos by reloading them
//             document.querySelectorAll('iframe').forEach(iframe => {
//                 const src = iframe.src;
//                 iframe.src = src; // This effectively reloads the iframe, stopping the video.
//             });
//         }

//         tabs.forEach(tab => {
//             tab.addEventListener('click', () => {
//                 // Remove active class from all tabs and tab contents
//                 tabs.forEach(t => t.classList.remove('active'));
//                 tabContents.forEach(tc => tc.classList.remove('active'));

//                 // Add active class to the clicked tab and corresponding content
//                 tab.classList.add('active');
//                 const target = tab.getAttribute('data-tab');
//                 document.getElementById(target).classList.add('active');

//                 // Stop all videos
//                 stopAllVideos();
//             });
//         });