var imagens = ["https://occ-0-1548-185.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcBqjPR5IWtxD5pC9sJdCUP5dsSQgdatYYbGVqDJ59q4LOyJFrbKRlBPb7L0pZvX0N_jcvDXjIvU8CU2jkh6rAZ3_p8.webp?r=931]", "https://occ-0-1548-185.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRB8OiRe6zTf7kKZ8UGXHuWUDxXu1UE1qgR0-V63LW3Q8axklo6hPfnMsl3mGoL0aoURjsNVWLVAsZ2pIASL5VRU7lo.webp?r=acd", "https://occ-0-1548-185.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXKILm5CzUGs_mIt1KK7-sCjyxyAtHA14m-QPffh2WDwtGBdshqyeiAxGLN_Q_CUgXcKdPjWiSYOEwADm2OZok84poo.webp?r=f5b", "https://occ-0-1548-185.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABR0tj21W04Rq7rBlAXsjBKrOh7hJOZXfySoIFF3MHd833WzoYKqNS24dycG4r89zf3Z-a6tiTyHTqD0o8N3HkQC9SMs.webp?r=757" , "https://occ-0-1548-185.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbL7uXcLpmQ-pwD3flVXmP7a75nj9Hj3p9WyHwPt-CoAMutyBvALdRuZ4lQy_vu7WtDMFOtzFfRZX8agQ-lMr4EDMLc.webp?r=523", "https://cdn.culturagenial.com/imagens/um-sonho-de-liberdade-cke.jpg","https://flaviochaves.com.br/wp-content/uploads/2020/06/sociedade-poetas-mortos-cke.jpg"]
var trailers = ["https://www.youtube.com/watch?v=4rtWJ_JNkl0&ab_channel=Avocado", "https://www.youtube.com/watch?v=gbRDCWKqvEc&ab_channel=MovieclipsClassicTrailers" , "https://www.youtube.com/watch?v=zmNxNnuILjY&t=69s&ab_channel=NetflixBrasil", "https://www.youtube.com/watch?v=HKVve_VSz58&ab_channel=SonyPicturesBrasil" , "https://www.youtube.com/watch?v=6PSSxAGSiCY&ab_channel=MovieclipsClassicTrailers" , "https://www.youtube.com/watch?v=v1nZq1vfgSw&t=41s&ab_channel=CamClips", "https://www.youtube.com/watch?v=bOukvR5ZydQ&ab_channel=ArquivodeTrailers"]
var generos = [0,0,0,1,0,2,2]
var i = 0
var localFilme = document.getElementById("localFilme")
var localHumor = document.getElementById("localFilmeHumor")
var localHistoria = document.getElementById("localFilmeHistoria")

renderizar()

var genero = document.querySelector("select").value
function renderGenero(){
    genero = document.querySelector("select").value
    return genero
}

function addOnList(){
    var novaImagem = document.getElementById("inputImagem")
    var novoTrailer = document.getElementById("inputTrailer")
    if(novaImagem.value != "" & novoTrailer.value != ""){
        if(genero == "acao"){
            generos.push(0)
        }else if(genero == "humor"){
            generos.push(1)
        } else{
            generos.push(2)
        }
        imagens.push(novaImagem.value)
        trailers.push(novoTrailer.value)
        novaImagem.value = ""
        novoTrailer.value = ""
        renderizar()
    }
}

function renderizar(){
    for(i; i < imagens.length; i++){
        //localFilme.innerHTML += `<img class="poster" src="${imagens[i]}">`
        imagem = document.createElement("img")
        imagem.setAttribute("src", `${imagens[i]}`)
        botaoTrailer = document.createElement("button")
        //localFilme.appendChild(botaoTrailer)
        container = document.createElement("div")
        container.setAttribute("class", "container")
        container.appendChild(botaoTrailer)
        container.appendChild(imagem)
        localFilme.appendChild(container)// += container
        botaoTrailer.appendChild(document.createTextNode("Trailer"))
        botaoTrailer.setAttribute("class", "botao-trailer")
        botaoTrailer.setAttribute("onclick",`abrirTrailer("${trailers[i]}")`)
        if(generos[i] == 0){
            localFilme.appendChild(container)
        } else if(generos[i] == 1){
            localHumor.appendChild(container)
        } else {
            localHistoria.appendChild(container)
        }

    }
}

function abrirTrailer(trailer){
    var trailerPopUp = trailer.replace("watch?v=", "embed/")
    trailerPopUp = trailerPopUp.split("&")
    swal.fire({
        html: `<iframe width="560" height="315" src="${trailerPopUp[0]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        width: "fit-content",
        background: "#343a40",
        confirmButtonColor: "#dc3545",
    })
}