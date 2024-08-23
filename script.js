class Main {
  
   run() {
     const li = document.createElement('li')
     li.innerText = 'Gabriel Ferreira Maranhão'
     const body = document.querySelector('ol')
     body.appendChild(li)
  }
}

new Main().run()
