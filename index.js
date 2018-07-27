// Require relevant packages
var conditioner = require("offhand-conditioner");

// Bootstrap with default settings
var bootstrap = function() {
    conditioner('body');
}

if (document.readyState ==='complete') {
    bootstrap();
} else {
    document.addEventListener('DOMContentLoaded', bootstrap);
}
