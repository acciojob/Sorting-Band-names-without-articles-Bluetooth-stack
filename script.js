//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
function check(item){
	if(item.startsWith('The ')){
		return item.slice(4);
	}
	else if(item.startsWith('An ')){
		return item.slice(3);
	}
	else if(item.startsWith('A ')){
		return item.slice(2);
	}
	else{
		return item;
	}
}

touristSpots.sort(function (a, b) {
	a = check(a);
	b = check(b);
	return (a>b)?1:-1;
});

const list = document.querySelector('#bands');

function make(list , items) {
	list.innerHTML = items.map(item=>{
		return `<li>${item}</li>`
	}).join('');
}

make(list, touristSpots);



