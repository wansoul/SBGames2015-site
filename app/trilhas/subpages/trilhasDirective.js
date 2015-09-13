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
})
.directive('copyrightFile', function(){
    'use strict';
    return{
        restrict: 'E',
        templateUrl: 'app/trilhas/subpages/copyrightTemplate.html'
    }
})
.directive('artesEDesignResultado', function(){
    'use strict';
    return{
        restrict: 'E',
        templateUrl: 'app/trilhas/subpages/resultados/artes-e-design/artes-e-design-resultadoTemplate.html'
    }
})
.directive('computacaoResultado', function(){
    'use strict';
    return{
        restrict: 'E',
        templateUrl: 'app/trilhas/subpages/resultados/computacao/computacao-resultadoTemplate.html'
    }
})
.directive('culturaResultado', function(){
    'use strict';
    return{
        restrict: 'E',
        templateUrl: 'app/trilhas/subpages/resultados/cultura/cultura-resultadoTemplate.html'
    }
})
.directive('industriaResultado', function(){
    'use strict';
    return{
        restrict: 'E',
        templateUrl: 'app/trilhas/subpages/resultados/industria/industria-resultadoTemplate.html'
    }
});