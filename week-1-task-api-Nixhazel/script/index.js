// const h1 = document.querySelector("h1").innerHTML = 'hello';
function main() {
	const images = [
		"https://www.shutterstock.com/image-photo/san-benedetto-del-tronto-italy-600w-236989837.jpg",
		"https://www.shutterstock.com/image-photo/rostovondon-russia-december-28-r2d2-600w-792066571.jpg",
		"https://www.shutterstock.com/image-photo/riyadh-saudi-arabia-december-5-600w-600639968.jpg",
		"https://www.shutterstock.com/image-photo/san-benedetto-del-tronto-italy-600w-279166433.jpg",
		"https://www.shutterstock.com/image-photo/united-kingdom-circa-2015-postage-600w-356423288.jpg",
		"https://www.shutterstock.com/image-photo/united-kingdom-circa-2015-postage-600w-330346859.jpg",
		"https://www.shutterstock.com/image-photo/assassin-deep-forest-600w-128459984.jpg",
		"https://www.shutterstock.com/image-photo/berlin-germany-oct-1-2017-600w-753241843.jpg",
		"https://www.shutterstock.com/image-photo/singapore-may-13-2022-storm-600w-2167647311.jpg",
		"https://www.shutterstock.com/image-photo/princess-leia-organa-han-solo-600w-558426067.jpg",
	];
	let i = 0;

	const displaybtn = document.querySelector("button");
	let mainContainer = document.getElementById("mainContainer");

	displaybtn.addEventListener("click", getJedi);

	function getJedi() {
		fetch("https://swapi.dev/api/people")
			.then((res) => res.json())
			.then((data) => {
				let starwars = data.results;
				mainContainer.innerHTML = starwars.map((e) => {
					i++;
					let figs = `<figure >
				                <img src= ${images[i - 1]} alt= "Character" >
                                <figcaption class="x names">NAME : ${e.name}
				                <figcaption class = "hideT">GENDER : ${e.gender}</figcaption>
                                <figcaption class = "hideT">HEIGTH : ${
																	e.height
																}</figcaption>
                                </figcaption>
				            </figure>`;
					return figs;
				});
				Array.from(mainContainer.querySelectorAll(".x")).forEach((node) => {
					node.addEventListener("click", (e) => {
						Array.from(e.target.children).forEach((child) => {
							child.classList.toggle("hideT");
						});
					});
				});
				i = 0;
			});
	}
	displaybtn.addEventListener("click", vanish);
	function vanish() {
		mainContainer.classList.toggle("hide");
	}
}
main();
module.exports = { main };
