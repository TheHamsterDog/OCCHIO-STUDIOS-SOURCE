<script lang="typescript">
	import Navbar from "./components/Navbar.svelte";
	const images = [
		{ link: "image1.png", position: 0 },
		{ link: "image2.png", position: 1 },
		{ link: "image3.png", position: 2 },
		{ link: "image1.png", position: 3 },
		{ link: "image2.png", position: 4 },
		{ link: "image3.png", position: 5 },
	];
	let clickHandler = (e) => {
		console.log(e.target);
		const element = document.getElementById(`${e.target.id}`);
		const element1 = document.getElementById(`0`); // extreme left
		const element2 = document.getElementById(`1`); //left
		const element3 = document.getElementById(`2`); //center
		const element4 = document.getElementById(`3`); //right
		const element5 = document.getElementById(`4`); //extreme right
		const element6 = document.getElementById(`5`); //back

		if (Number(e.target.id) === 0) {
			element.className = "image-center";
			element2.className = "image-right";
			element3.className = "image-rextend";
			element4.className = "image-back";

			element5.className = "image-lextend";
			element6.className = "image-left";
		}
		if (Number(e.target.id) === 1) {
			element.className = "image-center";
			element1.className = "image-left";
			element3.className = "image-right";
			element4.className = "image-rextend";
			element5.className = "image-back";
			element6.className = "image-lextend";
		}
		if (Number(e.target.id) === 2) {
			element.className = "image-center";
			element1.className = "image-lextend";
			element2.className = "image-left";
			element4.className = "image-right";
			element5.className = "image-rextend";
			element6.className = "image-back";
		}
		if (Number(e.target.id) === 3) {
			element.className = "image-center";
			element1.className = "image-back";
			element2.className = "image-lextend";
			element3.className = "image-left";
			element5.className = "image-right";
			element6.className = "image-rextend";
		}

		if (Number(e.target.id) === 4) {
			element.className = "image-center";
			element1.className = "image-rextend";
			element2.className = "image-back";
			element3.className = "image-lextend";
			element4.className = "image-left";
			element6.className = "image-right";
		}
		if (Number(e.target.id) === 5) {
			element.className = "image-center";
			element1.className = "image-right";
			element2.className = "image-rextend";
			element3.className = "image-back";
			element5.className = "image-left";
			element4.className = "image-lextend";
			// element6.className = "image-lextend";
		}
		console.log(element);
	};
</script>

<main class="bg-gray-100 w-full">
	<Navbar />
	<div class="h-4/5 mt-24 flex justify-center items-center ">
		<img src="favicon.png" alt="logo" class="w-8/12" />
	</div>
	<p
		class="font-sans text-center m-auto max-w-sm ui-sans-serif font-semibold mt-12 mb-24 text-2xl"
	>
		We are an interactive digital studio working at the edge of web design
		and interaction.
	</p>
	<div
		class="bg-black md:p-32 p-12 pr-4 pl-4 md:pb-0 pb-0 font-sans text-white relative w-full"
	>
		<button
			class="absolute flex items-center  extrabold transform top-0 left-1/2 uppercase	font-bold text-lg		 -translate-x-1/2 -translate-y-1/2 p-3 bg-white	text-black		"
			>request info

			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 ml-2 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M14 5l7 7m0 0l-7 7m7-7H3"
				/>
			</svg>
		</button>
		<div
			class="md:flex bg-black z-10	  justify-between text-white items-center"
		>
			<div class="md:w-5/12 ">
				<h2 class="font-bold text-xl">ABOUT OCCHIO</h2>
				<h1 class="font-extrabold text-4xl mt-4">
					TINCIDUNT AC NIBH VEL
				</h1>
				<p class=" mt-8 text-base	font-semibold	 ">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Pellentesque sapien nulla, tincidunt ac nibh vel, malesuada
					consequat sem. Aenean vehicula iaculis mollis. Integer
					suscipit, lorem eget finibus lobortis, arcu erat mattis
					velit, vitae laoreet justo neque vel dolor. Donec blandit
					nulla ex, ac ultricies nisl congue ut. Phasellus nec egestas
					lectus, eu eleifend arcu. Pellentesque accumsan libero
					lacus, vitae laoreet nisl tincidunt eu. Morbi vehicula arcu
					sit amet tellus mollis tincidunt.
				</p>
			</div>

			<div class="md:w-5/12 md:flex ml-24 mr-0 carousel md:m-0 relative ">
				<img class="image-instagram" alt="a" src="frame-phone.png" />
				{#each images as image}
					<label for="a">
						<img
							src={image.link}
							id={image.position.toString()}
							on:click={clickHandler}
							class={image.position === 0
								? "image-lextend"
								: image.position === 1
								? "image-left"
								: image.position === 2
								? "image-center"
								: image.position === 3
								? "image-right"
								: image.position === 4
								? "image-rextend"
								: "image-back"}
							alt=""
						/>
					</label>
				{/each}
			</div>
		</div>

		<h3
			class="font-bold md:text-6xl mt-4 md:mb-0 mb-8 text-4xl md:w-7/12 font-sans"
		>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit
		</h3>
		<div class="flex justify-between items-center">
			<img src="Untitled1.png" alt="logo" class="md:w-32 w-3/12 " />
			<img src="Untitled.png" alt="logo" class="w-7/12" />
		</div>
	</div>
</main>
