document.addEventListener('DOMContentLoaded', async () => {
    const data = await fetch('js/data.json').then(response => response.json());
        
    const { title, content, createdAt, createdBy, hasImage, url_image } = data;
    const $title = document.querySelector('.news-title');
    const $bannerPost = document.getElementById('image-post')
    const $content = document.querySelector('.news-content');
    const $createdAt = document.querySelector('.news-createdAt');
    const $createdBy = document.querySelector('.news-createdBy');

 
    
    if (hasImage) {
        const pictureImage = document.createElement('picture')
        pictureImage.className = 'news-image rounded'
        
        const sourceImage = document.createElement('source')
        sourceImage.srcset = url_image
        sourceImage.type = 'image/webp'

        const image = document.createElement('img')
        image.src = url_image;
        image.alt = title;
        image.className = 'rounded'

        pictureImage.appendChild(sourceImage)
        pictureImage.appendChild(image)
        $bannerPost.appendChild(pictureImage)
    } 
   
    $title.textContent = title;
    $content.innerHTML = content;
    $createdAt.textContent = createdAt;
    $createdBy.textContent = createdBy;

});
