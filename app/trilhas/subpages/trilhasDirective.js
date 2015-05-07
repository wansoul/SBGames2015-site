var app = angular.module('sbgamesApp');

app
.directive('trilhaArtesEDesign', function(){
    'use strict';
    return{
        restrict: 'E',
        templateUrl: 'app/trilhas/subpages/artes-e-designTemplate.html'
    }
})
.directive('trilhaComputacao', function(){
    'use strict';
    return{
        restrict: 'E',
        templateUrl: 'app/trilhas/subpages/computacaoTemplate.html'
    }
})
.directive('trilhaCultura', function(){
    'use strict';
    return{
        restrict: 'E',
        templateUrl: 'app/trilhas/subpages/culturaTemplate.html'
    }
})
.directive('trilhaIndustria', function(){
    'use strict';
    return{
        restrict: 'E',
        templateUrl: 'app/trilhas/subpages/industriaTemplate.html'
    }
})
.directive('datasImportantes', function(){
    'use strict';
    return{
        restrict: 'E',
        templateUrl: 'app/trilhas/subpages/datas-importantesTemplate.html'
    }
})
.directive('arquivos', function(){
    'use strict';
    return{
        restrict: 'E',
        templateUrl: 'app/trilhas/subpages/arquivosTemplate.html'
    }
});