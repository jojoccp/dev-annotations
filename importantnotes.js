let showLinkar = document.querySelector('#showLinkar')
let linkarNoMeta = document.querySelector('#linkarNoMeta')

let showSubirServicos = document.querySelector('#showSubirServicos')
let subirServicos = document.querySelector('#subirServicos')

let showRequisicoes = document.querySelector('#showRequisicoes')
let requisicoes = document.querySelector('#requisicoes')

let showQueryEmStage = document.querySelector('#showQueryEmStage')
let queryEmStage = document.querySelector('#queryEmStage')

let showConfigDbeaver = document.querySelector('#showConfigDbeaver')
let configDbeaver = document.querySelector('#configDbeaver')

let showChamadoInfra = document.querySelector('#showChamadoInfra')
let chamadoInfra = document.querySelector('#chamadoInfra')

subirServicos.style.display = 'none';
linkarNoMeta.style.display = 'none';
requisicoes.style.display = 'none';
queryEmStage.style.display = 'none';
configDbeaver.style.display = 'none';
chamadoInfra.style.display = 'none';

showLinkar.addEventListener('click', () => {
    if(linkarNoMeta.style.display === 'none'){
        linkarNoMeta.style.display = 'block';
        subirServicos.style.display = 'none';
        requisicoes.style.display = 'none';
        queryEmStage.style.display = 'none';
        configDbeaver.style.display = 'none';
        chamadoInfra.style.display = 'none';
    } else {
        linkarNoMeta.style.display = 'none';
    }
})

showSubirServicos.addEventListener('click', () => {
    if(subirServicos.style.display === 'none'){
        linkarNoMeta.style.display = 'none';
        subirServicos.style.display = 'block';
        requisicoes.style.display = 'none';
        queryEmStage.style.display = 'none';
        configDbeaver.style.display = 'none';
        chamadoInfra.style.display = 'none';
    } else {
        subirServicos.style.display = 'none';
    }
})

showRequisicoes.addEventListener('click', () => {
    if(subirServicos.style.display === 'none'){
        linkarNoMeta.style.display = 'none';
        subirServicos.style.display = 'none';
        requisicoes.style.display = 'block';
        queryEmStage.style.display = 'none';
        configDbeaver.style.display = 'none';
        chamadoInfra.style.display = 'none';
    } else {
        requisicoes.style.display = 'none';
    }
})

showQueryEmStage.addEventListener('click', () => {
    if(subirServicos.style.display === 'none'){
        linkarNoMeta.style.display = 'none';
        subirServicos.style.display = 'none';
        requisicoes.style.display = 'none';
        queryEmStage.style.display = 'block';
        configDbeaver.style.display = 'none';
        chamadoInfra.style.display = 'none';
    } else {
        queryEmStage.style.display = 'none';
    }
})

showConfigDbeaver.addEventListener('click', () => {
    if(subirServicos.style.display === 'none'){
        linkarNoMeta.style.display = 'none';
        subirServicos.style.display = 'none';
        requisicoes.style.display = 'none';
        queryEmStage.style.display = 'none';
        configDbeaver.style.display = 'block';
        chamadoInfra.style.display = 'none';
    } else {
        configDbeaver.style.display = 'none';
    }
})

showChamadoInfra.addEventListener('click', () => {
    if(subirServicos.style.display === 'none'){
        linkarNoMeta.style.display = 'none';
        subirServicos.style.display = 'none';
        requisicoes.style.display = 'none';
        queryEmStage.style.display = 'none';
        configDbeaver.style.display = 'none';
        chamadoInfra.style.display = 'block';
    } else {
        chamadoInfra.style.display = 'none';
    }
})


// .wraper = none

let arrayOfIds = []

// arrayOfIds.forEach(function(){
//     arrayOfIds.push(document.querySelector('.notesClass').id)
// })

arrayOfIds = document.querySelectorAll('div[id]')

console.log(arrayOfIds)


function activating(param) {
    
}

// let idElement 

// function activating(param) {
//     this.idElement = document.querySelector('#'+ param)
// }

// this.idElement.addEventListener('click', () => {

// })


