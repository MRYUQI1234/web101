const heading = document.querySelector('h1')
const originalText = heading.textContent // เก็บข้อความตั้งต้นไว้

function changeTitle() {
  if (heading.textContent === originalText) {
    // ถ้าข้อความปัจจุบันคือข้อความตั้งต้น
    heading.textContent = 'You changed the title!'
  } else {
    // ถ้าข้อความปัจจุบันถูกเปลี่ยนไปแล้ว (คือ 'You changed the title!')
    heading.textContent = originalText
  }
}
