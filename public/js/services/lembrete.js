angular.module('lembreteService', [])
	
	.factory('Lembrete', function($http){
		return {
			get : function() {
				return $http.get('/api/getLembretes');
			},
			create : function(lembreteData){
				return $http.post('/api/createLembrete', lembreteData);
			},
			edit : function(id, lembreteData){
				return $http.post('/api/editLembrete/' + id, lembreteData);
			},
			delete : function(id){
				return $http.post('/api/deleteLembrete/' + id);
			}

		}
	}
);