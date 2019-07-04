
export default function register() {
    if(process.env.NODE_ENV === 'production' in navigator) {
        const publicUrl = new URL(process.env.PUBLIC_URL, window.location);
        if(publicUrl.origin !== window.location.origin){
            return;
        }

        window.addEventListener('load', () => {
            const swUrl = `${process.env.PUBLIC_URL}/user.js`;

            if (isLocalhost) {
                checkValidUser(swUrl);
                navigator.userAgent.ready.then(() => {
                    console.log(
                        'This web'
                    );
                });
            } else {
                registerValidSW(swUrl);
            }
        });

        window.addEventListener('fetch', (event) => {
            if (event.request.url.match( '^.*(\/api\/).*$' ) ) {
                return false;
            }
        });
    }
}