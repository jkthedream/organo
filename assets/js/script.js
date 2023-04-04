const form = document.querySelector('.formAdd')

form.addEventListener('submit',function (ev){
    ev.preventDefault()
   

    let pessoa = receberValoresDaTabela(form)

    let imagemCodificada = converterParaBase64(pessoa.imagem)


    localStorage.setItem('imagem',imagemCodificada)
    let row 

    switch (pessoa.time) {
        case 'fullStack':
            row = document.querySelector('.fullStack')
            pessoa.corFundo = 'green'
            break
            case 'frontEnd':
                row = document.querySelector('.frontEnd')
                pessoa.corFundo = '#0275d8'
                break
                case 'backEnd':

                row = document.querySelector('.backEnd')
                pessoa.corFundo = '#f0ad4e'
                break
                case 'dataScience':
                row = document.querySelector('.dataScience')
                pessoa.corFundo = '#d9534f'
                break
                case 'mobile':
                row = document.querySelector('.mobile')
                pessoa.corFundo = '#333'
                break
                case 'uxEDesign':
                row = document.querySelector('.uxEDesign')
                pessoa.corFundo = '$5c0dbc'
                break
    }




    row.appendChild(montarCard(pessoa))

})

const receberValoresDaTabela = (form) =>{
    let pessoa = {
        nome: form.nome.value,
        cargo: form.cargo.value,
        imagem: form.imagem.value,
        time: form.time.value
    }
    return pessoa
}


function adicionarDescricao(pessoa){
    let nomeDescricao = document.createElement ('h4')
    nomeDescricao.textContent = pessoa.nome 
    nomeDescricao.style.color = pessoa.corFundo

    let cargoDescricao = document.createElement('p')
    cargoDescricao.textContent = pessoa.cargo
    cargoDescricao.style.color = pessoa.corFundo

    let figcaption = document.createElement('figcaption')
    figcaption.classList.add('text-center')
    figcaption.appendChild(nomeDescricao)
    figcaption.append(cargoDescricao)
    return figcaption
}

    function montarCard(pessoa){
        let foto = document.createElement('img')


        let figure = document.createElement('figure')
         figure.classList.add('card')
         figure.classList.add('ms-3')
         figure.classList.add('col-md-3')
         figure.style.backgroundImage = 'linear-gradient(to top, white 60%, '+ pessoa.corFundo +' 40%)'


         figure.appendChild(adicionarDescricao(pessoa))

         return figure
    }



    function converterParaBase64(imagem){
        return new Promise (resolve => {
            let reader = new FileReader ()
            reader.readAsDataURL(imagem)
            reader.onload = function (){
                let imagemCodificada = reader.result.split(',')[1]
                resolve(imagemCodificada)
            }
        })
    }