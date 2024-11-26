const openBtn = document.getElementById("openButton")
const closeBtn = document.getElementById("closeButton")
const dialog = document.getElementById("modal")

openBtn.addEventListener('click', () => {
    dialog.showModal()
})

closeBtn.addEventListener('click', () => {
    dialog.close()
})  