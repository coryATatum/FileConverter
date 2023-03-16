const browseBtn = document.getElementById('browse-btn');
browseBtn.addEventListener('click', () => {
  const input = document.createElement('input');
  input.type = 'file';
  input.click();
});

const fileInput = document.getElementById('file-input');
const filePreview = document.getElementById('file-preview');

fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];
  const reader = new FileReader();
})

  reader.addEventListener('load', () => {
    const fileSize = (file.size / 1024 / 1024).toFixed(2);
    const fileName = file.name;

    const readyFileDiv = document.createElement('div');
    readyFileDiv.classList.add('ready-file');

    const fileNameDiv = document.createElement('div');
    fileNameDiv.classList.add('file-name');

    const fileNameP = document.createElement('p');
    fileNameP.innerText = fileName;
    fileNameDiv.appendChild(fileNameP); // Append the file name to the file-name div

    const convertingP = document.createElement('p');
    convertingP.classList.add('btn');
    convertingP.innerText = 'Converting...';

    const fileSizeDiv = document.createElement('div');
    fileSizeDiv.classList.add('file-size');

    const fileSizeP = document.createElement('p');
    fileSizeP.innerText = fileSize + ' mb';

    const fileSizeSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    fileSizeSvg.setAttribute('stroke', 'currentColor');
    fileSizeSvg.setAttribute('fill', 'currentColor');
    fileSizeSvg.setAttribute('stroke-width', '0');
    fileSizeSvg.setAttribute('viewBox', '0 0 16 16');
    fileSizeSvg.setAttribute('height', '1.5em');
    fileSizeSvg.setAttribute('width', '1.5em');

    const fileSizePath1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    fileSizePath1.setAttribute('fill-rule', 'evenodd');
    fileSizePath1.setAttribute('d', 'M.5 8a.5.5 0 01.5.5V12a1 1 0 001 1h12a1 1 0 001-1V8.5a.5.5 0 011 0V12a2 2 0 01-2 2H2a2 2 0 01-2-2V8.5A.5.5 0 01.5 8z');
    fileSizePath1.setAttribute('clip-rule', 'evenodd');

    const fileSizePath2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    fileSizePath2.setAttribute('fill-rule', 'evenodd');
    fileSizePath2.setAttribute('d', 'M5 7.5a.5.5 0 01.707 0L8 9.793 10.293 7.5a.5.5 0 11.707.707l-2.646 2.647a.5.5 0 01-.708 0L5 8.207A.5.5 0 015 7.5z');
    fileSizePath2.setAttribute('clip-rule', 'evenodd');

    const fileSizePath3 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    fileSizePath3.setAttribute('fill-rule', 'evenodd');
    fileSizePath3.setAttribute('d', 'M8 1a.5.5 0 01.5.5v8a.5.5 0 01-1 0v-8A.5.5 0 018 1z');
    fileSizePath3.setAttribute('clip-rule', 'evenodd');

    fileSizeSvg.appendChild(fileSizePath1);
  })





