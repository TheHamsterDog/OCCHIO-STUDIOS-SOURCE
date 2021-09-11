<script>
	import Navbar from "./components/Navbar.svelte";
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
		<div class="md:flex  justify-between text-white items-center">
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

			<div
				class="md:w-5/12 md:flex m-24 mb-48 ml-24 mr-0 md:m-0 relative "
			>
				<input
					type="radio"
					id="a"
					name="center"
					class="hidden control1"
				/>
				<input
					type="radio"
					name="center"
					checked
					id="b"
					class="hidden control2"
				/>
				<input
					type="radio"
					name="center"
					id="c"
					class="hidden control3"
				/>
				<img class="image-instagram" src="instagram.png" />

				<label class="image1 mr-6" for="a">
					<img src="image1.png" class="image1-image" alt="" />
				</label>
				<label for="b" class="image2 mr-6">
					<img src="image2.png" class="image2-image" alt="" />
				</label>
				<label for="c" class="image3 mr-6">
					<img src="image3.png" class="image3-image" alt="" />
				</label>
			</div>
		</div>

		<h3 class="font-bold md:text-6xl mt-4 md:mb-0 mb-8 text-4xl md:w-7/12 font-sans">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit
		</h3>
		<div class="flex justify-between items-center">
			<img src="Untitled1.png" alt="logo" class="md:w-32 w-3/12 " />
			<img src="Untitled.png" alt="logo" class="w-7/12" />
		</div>
	</div>
</main>
