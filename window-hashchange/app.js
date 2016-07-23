(function() {

    'use strict';

    window.addEventListener( 'hashchange', function() {

        if ( window.location.hash === '#/bookmark/1' ) {
            console.log( 'render page 1' );
        }

        if ( window.location.hash === '#/bookmark/2' ) {
            console.log( 'render page 2' );
        }

        if ( window.location.hash === '#/bookmark/3' ) {
            console.log( 'here\'s page 3');
        }

    } );

} )();
