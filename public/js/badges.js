function copyLink(path, alt) {
  navigator.clipboard.writeText(`http://localhost:3006${path}`);
  Toastify({
    text: `${alt} Link copied to clipboard!`,
    duration: 3000,
    gravity: "bottom",
    position: "left",
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    close: true,
  }).showToast();
}

function copyMarkdown(path, alt, link) {
  if (link && link != "undefined") {
    navigator.clipboard.writeText(
      `[![${alt}](http://localhost:3006${path})](${link})`
    );
  } else {
    navigator.clipboard.writeText(`![${alt}](http://localhost:3006${path})`);
  }

  Toastify({
    text: `${alt} Markdown copied to clipboard!`,
    duration: 3000,
    gravity: "bottom",
    position: "left",
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right, #0061b0, #00b0ad)",
    },
    close: true,
  }).showToast();
}

function copyHTML(path, alt, link) {
  if (link && link != "undefined") {
    navigator.clipboard.writeText(
      `<a href="${link}"><img src="http://localhost:3006${path}" alt="${alt}"></a>`
    );
  } else {
    navigator.clipboard.writeText(
      `<img src="http://localhost:3006${path}" alt="${alt}">`
    );
  }

  Toastify({
    text: `${alt} HTML copied to clipboard!`,
    duration: 3000,
    gravity: "bottom",
    position: "left",
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right, #1d00b0, #0061b0)",
    },
    close: true,
  }).showToast();
}
