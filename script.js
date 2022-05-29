// lyle pizza

$(function () { 

	const pizza = {
		pie: [
			{
				title: 'Salvatore',
				price: '$$'
			},
			{
				title: 'Pizza Amano',
				price: '$$'
			},
			{
				title: 'Dominoes',
				price: '$'
			}
		],
		slice: [
			{
				title: 'Nayyas Pizza',
				price: '$$'
			},
			{
				title: 'Mathas II',
				price: '$$'
			},
			{
				title: 'Pizza Pizza',
				price: '$'
			},
			{
				title: 'Kennys',
				price: '$'
			}
		]
	};

	const randomResult = arr => {
		const randomNumber = Math.floor(Math.random() * arr.length);
		return arr[randomNumber];
	};

	
	$('form').on('submit', function (event) {
		event.preventDefault();
	
		const userSizeSelection = $("input[name=size]:checked").val();
		const userPriceSelection = $('input[name=price]:checked').val();

	
		const sizeOptions = pizza[userSizeSelection];

		
		const filteredOptions = sizeOptions.filter((restaurant) => {
			return (restaurant.price === userPriceSelection);
		});

		const theOne = randomResult(filteredOptions);

	
		const finalHTML = `<h2>You should go to <span class="restaurant">${theOne.title}</span></h2>`;
		$('.results').html(finalHTML);
	});
	
});