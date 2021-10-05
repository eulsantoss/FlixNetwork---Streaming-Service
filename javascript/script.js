{ //Área para configuração do menu lateral.
    let menuOpen = document.getElementById('menu-area')
    let menuOpened = document.getElementById('menu-opened')
    let menuClose = document.getElementById('close')

    menuOpen.addEventListener('click', ()=>{
        menuOpened.classList.add('menu-open')
    })

    menuClose.addEventListener('click', ()=>{
        menuOpened.classList.remove('menu-open')
    })
}

{
    let circles = document.querySelector('.circles')
    let quant = document.querySelectorAll('.slides .image')
    let actually = 0
    let image = document.getElementById('actually')
    let back = document.getElementById('back')
    let next = document.getElementById('next')
    
    for(let i = 0; i < quant.length; i++){
        let div = document.createElement('div')
        div.id = i
        circles.appendChild(div)
    }
    
    document.getElementById('0').classList.add('imgActually')
    
    let pos = document.querySelectorAll('.circles div')
    
    for(let i = 0; i < pos.length; i++){
        pos[i].addEventListener('click', ()=>{
            actually = pos[i].id
            slide()
        })
    }
    
    back.addEventListener('click', ()=>{
        actually--
        slide()
    })
    
    next.addEventListener('click', ()=>{
        actually++
        slide()
    })
    
    function slide(){
        if(actually >= quant.length){
            actually = 0
        }
        else if(actually < 0){
            actually = quant.length - 1
        }
        document.querySelector('.imgActually').classList.remove('imgActually')
        image.style.marginLeft = -1200 * actually + 'px'
        document.getElementById(actually).classList.add('imgActually')
    }
}

//Model Area

{
    let openMovieOne = document.getElementById('movie-1')
    let openMovieTwo = document.getElementById('movie-2')
    let openMovieThree = document.getElementById('movie-3')
    let openMovieFour = document.getElementById('movie-4')
    let openMovieFive = document.getElementById('movie-5')
    let openMovieSix = document.getElementById('movie-6')
    let openMovieSeven = document.getElementById('movie-7')
    let openMovieEight = document.getElementById('movie-8')
    let openMovieNine = document.getElementById('movie-9')
    let openMovieTen = document.getElementById('movie-10')
    let openMovieEleven = document.getElementById('movie-11')
    let openMovieTwelve = document.getElementById('movie-12')

    let changeImage = document.querySelector('#modal-image img')
    let changeTitle = document.querySelector('#modal-title h3')
    let changeDescription = document.querySelector('#modal-description p')

    //Trocar informações do Modal

    openMovieOne.addEventListener('click', ()=>{
        changeImage.src = 'images/movie-banner/avatar-2.png'
        changeTitle.innerHTML = '<h3>Avatar 2</h3>'
        changeDescription.innerHTML = 'Jake Sully e Neytiri formaram uma família e estão fazendo de tudo para ficarem juntos. No entanto, eles devem deixar sua casa e explorar as regiões de Pandora. Quando uma antiga ameaça ressurge, Jake deve lutar uma difícil guerra contra os humanos.'
    })

    openMovieTwo.addEventListener('click', ()=>{
        changeImage.src = 'images/movie-banner/venom-2.png'
        changeTitle.innerHTML = '<h3>Venom 2</h3>'
        changeDescription.innerHTML = 'Depois de encontrar um corpo hospedeiro no repórter investigativo Eddie Brock, o simbionte alienígena deve enfrentar um novo inimigo, Carnage, o alter ego do assassino em série Cletus Kasady.'
    })

    openMovieThree.addEventListener('click', ()=>{
        changeImage.src = 'images/movie-banner/free-guy.png'
        changeTitle.innerHTML = '<h3>Free Guy</h3>'
        changeDescription.innerHTML = 'Quando um caixa de banco descobre que é na verdade um jogador de fundo em um videogame de mundo aberto, ele decide se tornar o herói de sua própria história - uma que ele mesmo possa reescrever. Em um mundo onde não há limites, ele está determinado a salvar o dia antes que seja tarde demais, e talvez encontrar um pouco de romance com o codificador que o concebeu.'
    })

    openMovieFour.addEventListener('click', ()=>{
        changeImage.src = 'images/movie-banner/black-widow.png'
        changeTitle.innerHTML = '<h3>Viúva Negra</h3>'
        changeDescription.innerHTML = 'Natasha Romanoff, uma ex-espiã da KGB, fica chocada ao descobrir que seu ex-manipulador, General Dreykov, ainda está vivo. Enquanto evita ser capturada pelo Capataz, ela é forçada a enfrentar seu passado sombrio.'
    })

    openMovieFive.addEventListener('click', ()=>{
        changeImage.src = 'images/movie-banner/avengers-ultimato.png'
        changeTitle.innerHTML = '<h3>Vingadores - Ultimato</h3>'
        changeDescription.innerHTML = 'Depois que Thanos, um senhor da guerra intergaláctico, desintegra metade do universo, os Vingadores devem se reunir e se reunir novamente para revigorar seus aliados derrotados e restaurar o equilíbrio.'
    })

    openMovieSix.addEventListener('click', ()=>{
        changeImage.src = 'images/movie-banner/avengers-infinity-war.png'
        changeTitle.innerHTML = '<h3>Vingadores - Guerra Infinita</h3>'
        changeDescription.innerHTML = 'Os Vingadores devem impedir Thanos, um senhor da guerra intergaláctico, de colocar as mãos em todas as pedras do infinito. No entanto, Thanos está preparado para fazer qualquer coisa para realizar seu plano insano.'
    })

    openMovieSeven.addEventListener('click', ()=>{
        changeImage.src = 'images/movie-banner/avengers.png'
        changeTitle.innerHTML = '<h3>Os Vingadores</h3>'
        changeDescription.innerHTML = 'Os Vingadores da Marvel (classificados sob o nome Marvel Avengers Assemble no Reino Unido e Irlanda), ou simplesmente The Avengers, é um filme de super-heróis americano de 2012 baseado na equipe de super-heróis da Marvel Comics de mesmo nome.'
    })

    openMovieEight.addEventListener('click', ()=>{
        changeImage.src = 'images/movie-banner/i-am-legend.png'
        changeTitle.innerHTML = '<h3>Eu Sou a Lenda</h3>'
        changeDescription.innerHTML = 'Robert Neville, um cientista, é o último sobrevivente humano de uma praga em toda a cidade de Nova York. Ele tenta encontrar uma maneira de reverter os efeitos do vírus feito pelo homem usando seu próprio sangue imunológico.'
    })

    openMovieNine.addEventListener('click', ()=>{
        changeImage.src = 'images/serie-banner/shingeki-no-kyojin.png'
        changeTitle.innerHTML = '<h3>Shingeki no Kyojin</h3>'
        changeDescription.innerHTML = 'Attack on Titan (japonês: 進 撃 の 巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giants") é um mangá japonês escrito e ilustrado por Hajime Isayama. É ambientado em um mundo onde a humanidade vive dentro de cidades cercadas por três enormes paredes que os protegem dos gigantescos humanóides devoradores de homens chamados de Titãs; a história segue Eren Yeager, que jura exterminar os Titãs após um Titã causar a destruição de sua cidade natal e a morte de sua mãe. Ataque a Titã foi serializado na revista shōnen manga mensal da Kodansha, Bessatsu Shōnen Magazine, de setembro de 2009 a abril de 2021, com seus capítulos coletados em 34 volumes de tankōbon.'
    })

    openMovieTen.addEventListener('click', ()=>{
        changeImage.src = 'images/serie-banner/parasyte.png'
        changeTitle.innerHTML = '<h3>Parasyte</h3>'
        changeDescription.innerHTML = 'Parasyte é um mangá de terror de ficção científica japonês escrito e ilustrado por Hitoshi Iwaaki e publicado na revista Kodanshas Morning Open Zōkan e Monthly Afternoon de 1988 a 1995. O mangá foi publicado na América do Norte primeiro pela Tokyopop, depois pela Del Rey e, finalmente, pela Kodansha USA.'
    })

    openMovieEleven.addEventListener('click', ()=>{
        changeImage.src = 'images/serie-banner/rick-morty.png'
        changeTitle.innerHTML = '<h3>Rick e Morty</h3>'
        changeDescription.innerHTML = 'Depois de estar desaparecido por quase 20 anos, Rick Sanchez de repente chega à porta da filha Beth para ir morar com ela e sua família. Embora Beth dê as boas-vindas a Rick em sua casa, seu marido, Jerry, não está tão feliz com a reunião de família. Jerry está preocupado com Rick, um cientista sociopata, usando a garagem como seu laboratório pessoal. No laboratório, Rick trabalha em vários dispositivos de ficção científica, alguns dos quais podem ser considerados perigosos. Mas não é só isso que Rick faz no que diz respeito a Jerry. Ele também embarca em aventuras pelo universo que geralmente envolvem seus netos, Morty e Summer.'
    })

    openMovieTwelve.addEventListener('click', ()=>{
        changeImage.src = 'images/serie-banner/nanatsu-no-taizai.png'
        changeTitle.innerHTML = '<h3>Nanatsu no Taizai</h3>'
        changeDescription.innerHTML = 'The Seven Deadly Sins é uma série de mangás de fantasia japonesa escrita e ilustrada por Nakaba Suzuki. Foi serializado na revista Weekly Shōnen da Kodansha de outubro de 2012 a março de 2020, com os capítulos coletados em quarenta e um volumes de tankōbon.'
    })

    //Trocar imagem do filme

    // openMovieOne.addEventListener('mouseenter', ()=>{
        
    // })
}

{
    let divModal = document.querySelector('aside #modal-movie-id')
    
}

{
    //Abrir Modal
    let modal = document.getElementById('modal-movie-id')
    let openModal = document.querySelectorAll('img.openMenu')
    let overlay = document.getElementById('overlay-body')
    let changeToVideo = document.querySelectorAll('.content img')

    openModal.forEach((openModal) =>{
        openModal.addEventListener('click', ()=>{
            const modalSub = openModal.querySelector('.openMenu')
            modal.classList.remove('closeModal')
            modal.classList.add('modal-movie')
            modal.classList.add('modal-clicked')
            overlay.classList.add('overlay')
        })
    })

    


}

{
    //Fechar Modal
    let modalClose = document.getElementById('modal-close')
    let modal = document.querySelector('#modal-movie-id')
    let overlay = document.getElementById('overlay-body')
    
    modalClose.addEventListener('click', ()=>{
        modal.classList.remove('modal-clicked')
        overlay.classList.remove('overlay')
    })
}