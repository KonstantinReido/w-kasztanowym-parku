function defaultFilename(src) {
  const urlParts = src.split('/')
  return urlParts[urlParts.length - 1]
}

function captionFilename(src) {
  var captionEl = document.getElementsByClassName('photoCaptionText ')[0]
  if (!captionEl || !captionEl.value) {
    return ''
  }

  const urlParts = src.split('.')
  const fileExt = urlParts[urlParts.length - 1]
  return [
    captionEl.value.replace(/\.+$/, ''),
    fileExt
  ].join('.')
}

function filename(src) {
  return captionFilename(src) || defaultFilename(src)
}

function photoEl() {
  return document.getElementsByClassName('photoImage')[0]
}

if (photoEl()) {
  const el = document.createElement("a")
  el.setAttribute("href", photoEl().src)
  el.setAttribute("download", filename(photoEl().src))
  document.body.appendChild(el)
  el.click()
  el.remove()
}
