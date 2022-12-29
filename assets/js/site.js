function dark_on() {
  console.log('Setting theme to dark.')
  localStorage.setItem('dark', 'dark')
  console.log('dark: '.concat(localStorage.getItem('dark')))
}

function dark_off() {
  console.log('Setting theme to light.')
  localStorage.setItem('dark', 'light')
  console.log('dark: '.concat(localStorage.getItem('dark')))
}

function sans_on() {
  console.log('Setting font to sans.')
  localStorage.setItem('sans', 'sans')
  console.log('sans: '.concat(localStorage.getItem('sans')))
}

function sans_off() {
  console.log('Setting font to serif.')
  localStorage.setItem('sans', 'serif')
  console.log('sans: '.concat(localStorage.getItem('sans')))
}
async function toggle_dark() {
  if (localStorage.getItem('dark') == 'light') {
    dark_on()
  } else {
    dark_off()
  }
  await set_theme_and_particles()
}
async function toggle_sans() {
  if (localStorage.getItem('sans') == 'serif') {
    sans_on()
  } else {
    sans_off()
  }
  await set_theme_and_particles(refresh = false)
}
async function set_theme_and_particles(refresh = true) {
  let dark = localStorage.getItem('dark')
  let sans = localStorage.getItem('sans')
  console.log('dark: '.concat(dark))
  console.log('sans: '.concat(sans))
  let data_theme = dark.concat(sans)
  document.documentElement.setAttribute('data-theme', data_theme)
  console.log(data_theme)
  await particles(refresh)
}
async function particles(refresh = true) {
  if (window.location.pathname != '/') {
    console.log('Not the homepage, skipping particles.')
    return
  }
  console.log('Loading particles.')
  if (tsParticles.dom().length == 0) {
    await tsParticles.loadJSON(
      'tsparticles', 'assets/json/particles.json')
  }
  console.log('Theming particles.')
  let options = tsParticles.domItem(0)._options
  if (localStorage.getItem('dark') == 'dark') {
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
  if (refresh) {
    tsParticles.domItem(0).refresh()
  }
  console.log('Loaded particles.')
}
window.onload = async function on_load() {
  if (localStorage.getItem('dark') == 'dark') {
    dark_on()
  } else {
    dark_off()
  }
  if (localStorage.getItem('sans') == 'sans') {
    sans_on()
  } else {
    sans_off()
  }
  await set_theme_and_particles()
}
