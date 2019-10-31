let stompClient = null;

$(document).ready(function() {
	console.log('Pronto');
	const socket = new SockJS('/son-socket');
	stompClient = Stomp.over(socket);
	stompClient.connect({}, function(stompCon) {
		console.log('Conectou....', stompCon);
		
		stompClient.send('/app/hello', {}, JSON.stringify({ message: 'a new connection...' }));
		
		stompClient.subscribe('/topic/public', function(data) {
			console.log('Data ->', data);
			console.log('Parse ->', JSON.parse(data.body));
		});		
	});
});