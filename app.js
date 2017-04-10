
function openForm(form) {
  var iframe = modal.querySelector('iframe'),
      src = form.getAttribute('data-target') + '?',
      inputs = form.querySelectorAll('input, textarea')

  for (var i = inputs.length - 1; i >= 0; i--) {
    var input = inputs[i],
        name = input.getAttribute('name'),
        value = input.value

    if( name && value ) src += name + '=' + value
  }

  iframe.setAttribute('src', src)
  modal.style.display = 'block'

  return false
}

function addClose(frame) {
  if( frame.getAttribute('src') ) {
    modal.querySelector('.inner').className += ' loaded'
  }
}

function closeForm() {
  var css_class = modal.querySelector('.inner').className

  modal.querySelector('.inner').className = css_class.replace('loaded', '').trim()
  modal.style.display = 'none'
  modal.querySelector('iframe').setAttribute('src', '')
}
