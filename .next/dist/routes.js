'use strict';

var routes = require('next-routes')();

routes.add('/campaigns/new', '/campaigns/new').add('/campaigns/:address', '/campaigns/show').add('/campaigns/:address/requests', 'campaigns/requests/index').add('/campaigns/:address/requests/new', 'campaigns/requests/new');
module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFHQSxPQUNNLEFBRE4sSUFDVSxBQURWLGtCQUM0QixBQUQ1QixrQkFFTSxBQUZOLElBRVUsQUFGVix1QkFFaUMsQUFGakMsbUJBR00sQUFITixJQUdVLEFBSFYsZ0NBRzBDLEFBSDFDLDRCQUlNLEFBSk4sSUFJVSxBQUpWLG9DQUk4QyxBQUo5QztBQUtBLE9BQU8sQUFBUCxVQUFpQixBQUFqQiIsImZpbGUiOiJyb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbmlzaHVyaXNoYWJoL0RvY3VtZW50cy9raWNrU3RhcnRlciJ9