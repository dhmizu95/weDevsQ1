let allRead = true;

let notifications = [
	{ message: 'Lorem', read: true },
	{ message: 'Ipsum', read: true },
	{ message: 'Dolor', read: true },
	{ message: 'Sit', read: false },
	{ message: 'Amet', read: true },
];

if (notifications.find((notify) => notify.read == false)) {
	allRead = false;
}

console.log(allRead);
