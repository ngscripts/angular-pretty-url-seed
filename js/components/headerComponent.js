/**
 * Created by ulhaq on 4/10/2017.
 */

function headerController($location) {

    var ctrl = this;

    ctrl.update = function () {
        ctrl.onUpdate( { newData: 'abc', oldData: 'xyz' } );
    };

    ctrl.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };

}

app.component('headerComponent', {
    templateUrl: 'assets/templates/header.html',
    controller: headerController,
    bindings: {
        data: '=',
        onUpdate: '&'
    }
});
