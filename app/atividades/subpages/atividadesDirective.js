var app = angular.module('sbgamesApp');

app
.directive('atividadeTutoriais', function(){
    'use strict';
    return{
        restrict: 'E',
        templateUrl: 'app/atividades/subpages/tutoriaisTemplate.html'
    }
})
.directive('atividadeMostraDeArtes', function(){
    'use strict';
    return{
        restrict: 'E',
        templateUrl: 'app/atividades/subpages/mostra-de-artesTemplate.html'
    }
})
.directive('atividadeFestivalDeJogos', function(){
    'use strict';
    return{
        restrict: 'E',
        templateUrl: 'app/atividades/subpages/festival-de-jogosTemplate.html'
    }
})
.directive('tutoriaisResultados', function(){
    'use strict';
    return{
        restrict: 'E',
        templateUrl: 'app/atividades/subpages/resultados/tutoriais/tutoriais-resultadoTemplate.html'
    }
});