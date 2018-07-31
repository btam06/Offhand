// Require relevant packages
var conditioner = require("offhand-conditioner");
var camouflage  = require("offhand-camouflage");

var completeState = null;

// Bootstrap with default settings
var bootstrap = function() {
    if (completeState != document.readyState) {
        switch (document.readyState) {
            case 'interactive':
                camouflage();
                break;

            case 'complete':
                conditioner('body');
                break;
        }
        
        completeState = document.readyState;
    }
}

bootstrap();
document.addEventListener('readystatechange', bootstrap);
