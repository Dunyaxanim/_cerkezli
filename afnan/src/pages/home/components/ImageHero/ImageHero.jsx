import React, { useEffect, useRef } from 'react';

const ImageHero = () => {
    const videoRef = useRef(null);
    
    useEffect(() => {
        // YouTube Iframe API'sini yükle
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        // API hazır olduğunda çalışacak fonksiyon
        const onYouTubeIframeAPIReady = () => {
            const player = new window.YT.Player(videoRef.current, {
                events: {
                    'onReady': (event) => {
                        event.target.playVideo(); // Videoyu otomatik olarak oynat
                    },
                    'onStateChange': (event) => {
                        if (event.data === window.YT.PlayerState.ENDED) {
                            event.target.playVideo(); // Yeniden oynat
                        }
                    }
                },
            });
        };

        // API yüklenene kadar bekle
        let checkInterval = setInterval(() => {
            if (window.YT && window.YT.Player) {
                clearInterval(checkInterval); // API yüklendiyse interval'i durdur
                onYouTubeIframeAPIReady(); // API hazır olduğunda çalıştır
            }
        }, 100);

        // Komponent kaldırıldığında temizlik yap
        return () => {
            clearInterval(checkInterval); // Interval'i temizle
        };
    }, []);



    return (
        <div id="shopify-section-1633345497438135b0" className="shopify-section">
            <section
                className="Section"
                id="section-1633345497438135b0"
                data-section-id="1633345497438135b0"
                data-section-type="background-video"
                data-section-settings='{
              "videoType": "youtube",
              "videoId": "pfHIE7JPmC8",
              "requestHost": "www.afnan.com"
            }'
            >
                <div className="ImageHero ImageHero--large">
                <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/YYHM38VvEN0?si=DRkYmFJoXvv6a4lk&controls=0&mute=1&disablekb=1"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
    ref={videoRef}
></iframe>

                </div>
            </section>
        </div>
    );
}

export default ImageHero;
