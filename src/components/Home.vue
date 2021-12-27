<template>
	<div id="home">

		<div class="left">
			<h1>Jordan Davis</h1>
			<p>Front End Engineer,</p>
			<p><a class="milkshake" href="https://milkshake.studio/" target="_blank">Milkshake Studio</a> 2019 - 2021</p>
      <p><a class="milkshake" href="https://www.simplehealth.com/" target="_blank">SimpleHealth</a> 2021 - PRESENT</p>

			<div class="links">
				<a href="https://github.com/jordantd5" target="_blank"><Github /></a>
				<a href="https://www.linkedin.com/in/jordantd/" target="_blank"><Linkedin /></a>
			</div>
		</div>
		
		<div class="right">
			<a href="https://www.1919.farm/" target="_blank">
				<p>Ancient Groves</p>
				<div class="technologies">
					<Shopify />
				</div>
			</a>
			<a href="https://chestertravels.com/" target="_blank">
				<p>Chester</p>
				<div class="technologies">
					<Wordpress />
				</div>
			</a>
			<a href="https://crunchtime.com/" target="_blank">
				<p>CrunchTime!</p>
				<div class="technologies">
					<Craft />
				</div>
			</a>
			<a href="https://iendorsebooker.com/" target="_blank">
				<p>I Endorse Booker</p>
				<div class="technologies">
					<React />
				</div>
			</a>
			<a href="https://koala.io/" target="_blank">
				<p>Koala</p>
				<div class="technologies">
					<Craft />
				</div>
			</a>
			<a href="https://www.figma.com/community/plugin/941336520474170939/Moodz" target="_blank">
				<p>Moodz</p>
				<div class="technologies">
					<Figma />
				</div>
			</a>
			<a href="https://www.myclean.com/" target="_blank">
				<p>MyClean</p>
				<div class="technologies">
					<Vue />
				</div>
			</a>
      <a href="https://niallknithouse.com/" target="_blank">
				<p>Niall Knithouse</p>
				<div class="technologies">
					<Shopify />
				</div>
			</a>
			<a href="https://www.olo.com/" target="_blank">
				<p>Olo</p>
				<div class="technologies">
					<Craft /><Gridsome />
				</div>
			</a>
			<a href="https://populum.com/" target="_blank">
				<p>Populum</p>
				<div class="technologies">
					<!-- threejs -->
					<Shopify /><Contentful />
				</div>
			</a>
			<a href="https://projectentrepreneur.org/" target="_blank">
				<p>Project Entrepreneur</p>
				<div class="technologies">
					<Wordpress />
				</div>
			</a>
			<a href="https://proplete.com/" target="_blank">
				<p>Proplete</p>
				<div class="technologies">
					<Craft />
				</div>
			</a>
			<a href="https://getstix.co/" target="_blank">
				<p>Stix</p>
				<div class="technologies">
					<Shopify />
				</div>
			</a>
			<a href="https://timeequities.com/" target="_blank">
				<p>Time Equities Inc.</p>
				<div class="technologies">
					<Craft />
				</div>
			</a>
			<a href="https://voymedia.com/" target="_blank">
				<p>Voy Media</p>
				<div class="technologies">
					<Wordpress />
				</div>
			</a>
			<a href="https://yellowgoatdesign.com/" target="_blank">
				<p>Yellow Goat Design</p>
				<div class="technologies">
					<Craft />
				</div>
			</a>
		</div>
	</div>
</template>

<script>
import Github from './svgs/github';
import Linkedin from './svgs/linkedin';
import React from './svgs/react';
import Vue from './svgs/vue';
// import GraphQL from './svgs/graphql';
import Contentful from './svgs/contentful';
import Gridsome from './svgs/gridsome';
import Craft from './svgs/craft';
import Shopify from './svgs/shopify';
import Wordpress from './svgs/wordpress';
import Figma from './svgs/figma';

export default {
	name: 'Home',
	components: {
		Github,
		Linkedin,
		React,
		Vue,
		// GraphQL,
		Contentful,
		Gridsome,
		Craft,
		Shopify,
		Wordpress,
		Figma
	},
}

</script>