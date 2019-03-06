document.addEventListener('load', function() {
    const query = window.location.search
    const indexEqualSymbol = query.indexOf('=')
    const idVideo = query.slice(indexEqualSymbol + 1, query.length)
    const fuentes = videos[idVideo]

    const videoElemnt = document.getElementById('video-player')

    
}
)