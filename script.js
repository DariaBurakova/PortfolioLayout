
'use strict'
const menu=document.querySelector('.headertab')
const panel=document.querySelector('.panel')
menu.addEventListener('click',()=>{
panel.style.display = panel.style.display === 'none' ? 'flex' : 'none'})