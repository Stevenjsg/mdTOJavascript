document.addEventListener('DOMContentLoaded', async() =>{
    let $gallery = document.getElementById('addGallery');
    let $loading = document.getElementById('loading')

    $loading.style.display = 'block'

    const data = await fetch('https://fakestoreapi.com/products?limit=12')
    .then(response => {
        $loading.style.display = 'none'
        return response.json()
    }
    );
    
    data.forEach(item => {
        const img = document.createElement('img');
        img.className = 'gallery-image'
        img.src = item.image;
        img.alt = item.title;
        $gallery.appendChild(img);
    });
});