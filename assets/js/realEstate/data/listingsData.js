var listingsData = [
	{
		address: '20-34 grand ave',
		city: 'Ridgewood',
		state: 'NY',
		rooms: 3,
		price: 220000,
		floorSpace: 2000,
		elevator: true,
		pool: false,
		gym: true,
		elevator: true,
		finished_basement: false,
		// extras: ['elevator', 'gym'],
		homeType: 'Apartment',
		image:
			'http://media.equityapartments.com/images/c_crop,x_0,y_0,w_1920,h_1080/c_fill,w_1920,h_1080/q_80/4206-28/the-kelvin-apartments-exterior.jpg',
		agent_name: 'Nina Smith',
		agent_img:
			'https://d2787ndpv5cwhz.cloudfront.net/634954f558e7f955838c35b74cfd33a584a6c987/300x300.jpg'
	},
	{
		address: '3 universal st',
		city: 'Miami',
		state: 'FL',
		rooms: 2,
		price: 24666,
		floorSpace: 1430,
		// extras: ['elevator', 'gym'],
		pool: true,
		gym: true,
		elevator: true,
		finished_basement: false,
		homeType: 'Condo',
		image:
			'http://condo-blog.s3.amazonaws.com/blog/wp-content/uploads/2017/10/condo-apt-870x418.jpg',
		agent_name: 'Irene Sharp',
		agent_img:
			'https://d2787ndpv5cwhz.cloudfront.net/d02324fb7a5cf0b2627b6a00d321d5f110f36414/300x300.jpg'
	},
	{
		address: '2582 Elkview Drive',
		city: 'Miami',
		state: 'FL',
		rooms: 4,
		price: 90666,
		floorSpace: 1730,
		// extras: ['elevator', 'gym'],
		pool: true,
		gym: true,
		elevator: false,
		finished_basement: true,
		homeType: 'Multi Home',
		image:
			'https://www.sothebysrealty.com/extraordinary-living-blog/wp-content/uploads/2012/12/4374082-w-dilido-dr-miami-beach.jpg?w=550&h=412',
		agent_name: 'Jeff Miller',
		agent_img: 'https://www.bhsusa.com/bhsmedia/agents/Z49_p.jpg'
	},
	{
		address: '1 president plaza',
		city: 'Richmond',
		state: 'VA',
		rooms: 1,
		price: 345355,
		floorSpace: 2400,
		pool: true,
		gym: false,
		elevator: false,
		finished_basement: true,
		// extras: ['elevator', 'gym'],
		homeType: 'Single Home',
		image:
			'https://c.o0bg.com/rf/image_960w/Boston/2011-2020/2017/01/09/BostonGlobe.com/Lifestyle/Images/doherty_10names04_liv.jpg',
		agent_name: 'Alex Williams',
		agent_img:
			'https://d2787ndpv5cwhz.cloudfront.net/6436c2bda0e758aa1aa3e7437e14cb3449eea14f/300x300.jpg'
	},
	{
		address: '889 beemore st',
		city: 'Newark',
		state: 'NJ',
		rooms: 0,
		price: 80000,
		floorSpace: 1000,
		// extras: ['elevator', 'gym'],
		pool: false,
		gym: true,
		elevator: false,
		finished_basement: false,
		homeType: 'Studio',
		image:
			'http://media.equityapartments.com/images/q_50/f_auto/fl_lossy/685-28/oak-park-apartment-homes-kitchen',
		agent_name: 'Alexander Castro',
		agent_img:
			'https://d2787ndpv5cwhz.cloudfront.net/232a419a7b17e384a8e6d557e8728d31e21c6d74/300x300.jpg'
	},
	{
		address: '43 hollywood blvd',
		city: 'Los Angeles',
		state: 'CA',
		rooms: 3,
		price: 603000,
		floorSpace: 3000,
		// extras: ['elevator', 'gym'],
		pool: true,
		gym: true,
		elevator: true,
		finished_basement: false,
		homeType: 'Condo',
		image:
			'https://ds2.cityrealty.com/img/22e07e885fdfcb28f413f663ed673ba4ec6bc4d2+w+h+0+60/brooklyn-point-1-city-point-01.jpg',
		agent_name: 'Brittany Cartwright',
		agent_img:
			'https://d2787ndpv5cwhz.cloudfront.net/f9009c9dffb3e30103f24bffe531c048a99939b3/300x300.jpg'
	},
	{
		address: '2 main st',
		city: 'Bedstuy',
		state: 'NY',
		rooms: 2,
		price: 220000,
		floorSpace: 2000,
		// extras: ['gym', 'pool'],
		homeType: 'Multi Home',
		elevator: true,
		finished_basement: true,
		gym: false,
		pool: false,
		image:
			'https://www.marrano.com/wp-content/uploads/2016/04/2436-Hobblebush-1440px.jpg',
		agent_name: 'Angela Canete',
		agent_img:
			'https://d2787ndpv5cwhz.cloudfront.net/525b7f9ec5a25b08b22ba905657885ccf42adb18/300x300.jpg'
	},
	{
		address: '730 gates ave',
		city: 'Fort Wayne',
		state: 'IN',
		rooms: 1,
		price: 150000,
		floorSpace: 2000,
		pool: false,
		gym: true,
		elevator: false,
		finished_basement: false,
		// extras: ['finished_basement', 'gym'],
		homeType: 'Room',
		image:
			'https://www.regalhotel.com/uploads/rrh/accommodations/720x475/DeluxeSuite_FINAL_large.jpg',
		agent_name: 'Sara Arledge',
		agent_img:
			'https://d2787ndpv5cwhz.cloudfront.net/891771a922713fa400ef1a5edac551e65d230e89/300x300.jpg'
	},
	{
		address: '108 S Ewing Ave',
		city: 'Chicago',
		state: 'IL',
		rooms: 2,
		price: 220000,
		floorSpace: 2000,
		// extras: ['gym', 'pool'],
		homeType: 'Apartment',
		elevator: true,
		finished_basement: false,
		gym: false,
		pool: false,
		image:
			'http://www.theproserve.com/wp-content/uploads/2013/03/apartment-complex-insurance.jpg',
		agent_name: 'Matt James',
		agent_img:
			'https://d2787ndpv5cwhz.cloudfront.net/f75e4e7b717c194e0fea6db4ee7cb72598fa6c9b/300x300.jpg'
	}
];

export default listingsData;
