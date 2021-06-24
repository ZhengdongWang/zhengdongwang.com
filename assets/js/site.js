function dark_off() {
  document.documentElement.setAttribute('data-theme', 'light')
  localStorage.setItem('dark', 'off')
}

function dark_on() {
  document.documentElement.setAttribute('data-theme', 'dark')
  localStorage.setItem('dark', 'on')
}
async function particles() {
  // Particles only on homepage.
  if (!(window.location.pathname == '/' || window.location.pathname == 'zhengdongwang.com/')) {
    return
  }
  // Load if not already loaded.
  if (tsParticles.dom().length == 0) {
    let result = await tsParticles.loadJSON(
      'tsparticles', 'assets/json/particles.json')
  }
  // Correct particles theme.
  let options = tsParticles.domItem(0)._options
  if (localStorage.getItem('dark') == 'on') {
    options.particles.color.value = '#ffffff'
    options.particles.number.value = 50
    options.particles.links.enable = false
    options.particles.links.color.value = '#ffffff'
  } else {
    options.particles.color.value = '#000000'
    options.particles.number.value = 25
    options.particles.links.enable = true
    options.particles.links.color.value = '#000000'
  }
  tsParticles.domItem(0).refresh()
}

function toggle_dark() {
  if (localStorage.getItem('dark') == 'on') {
    dark_off()
  } else {
    dark_on()
  }
  particles()
}
// Default is dark.
// Cannot set boolean values in localStorage.
window.onload = function() {
  if (localStorage.getItem('dark') == null) {
    localStorage.setItem('dark', 'on')
  } else if (localStorage.getItem('dark') == 'off') {
    dark_off()
  }
  particles()
}
