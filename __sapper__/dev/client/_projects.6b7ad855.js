import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, a as space, t as text, c as claim_element, b as children, f as claim_space, g as detach_dev, h as claim_text, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as set_data_dev, o as noop } from './client.6b97bd40.js';

/* src/components/Project.svelte generated by Svelte v3.20.1 */

const file = "src/components/Project.svelte";

function create_fragment(ctx) {
	let div5;
	let div4;
	let div1;
	let img;
	let img_src_value;
	let t0;
	let div0;
	let t1;
	let div2;
	let h3;
	let t2;
	let t3;
	let div3;
	let a;
	let i;

	const block = {
		c: function create() {
			div5 = element("div");
			div4 = element("div");
			div1 = element("div");
			img = element("img");
			t0 = space();
			div0 = element("div");
			t1 = space();
			div2 = element("div");
			h3 = element("h3");
			t2 = text(/*title*/ ctx[2]);
			t3 = space();
			div3 = element("div");
			a = element("a");
			i = element("i");
			this.h();
		},
		l: function claim(nodes) {
			div5 = claim_element(nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div1 = claim_element(div4_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			img = claim_element(div1_nodes, "IMG", { src: true, alt: true });
			t0 = claim_space(div1_nodes);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			children(div0).forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t1 = claim_space(div4_nodes);
			div2 = claim_element(div4_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			h3 = claim_element(div2_nodes, "H3", {});
			var h3_nodes = children(h3);
			t2 = claim_text(h3_nodes, /*title*/ ctx[2]);
			h3_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t3 = claim_space(div4_nodes);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);

			a = claim_element(div3_nodes, "A", {
				class: true,
				rel: true,
				target: true,
				href: true
			});

			var a_nodes = children(a);
			i = claim_element(a_nodes, "I", { class: true });
			children(i).forEach(detach_dev);
			a_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = "img/projects/" + /*image_name*/ ctx[0])) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", /*image_alt*/ ctx[1]);
			add_location(img, file, 10, 12, 205);
			attr_dev(div0, "class", "overlay");
			add_location(div0, file, 11, 12, 273);
			attr_dev(div1, "class", "work-img");
			add_location(div1, file, 9, 8, 170);
			add_location(h3, file, 14, 12, 360);
			attr_dev(div2, "class", "work-text");
			add_location(div2, file, 13, 8, 324);
			attr_dev(i, "class", "fa fa-link");
			add_location(i, file, 17, 97, 521);
			attr_dev(a, "class", "icon-btn");
			attr_dev(a, "rel", "nofollow noopener noreferrer");
			attr_dev(a, "target", "_blank");
			attr_dev(a, "href", /*link*/ ctx[3]);
			add_location(a, file, 17, 12, 436);
			attr_dev(div3, "class", "work-link");
			add_location(div3, file, 16, 8, 400);
			attr_dev(div4, "class", "work-col");
			add_location(div4, file, 8, 4, 139);
			attr_dev(div5, "class", "work");
			add_location(div5, file, 7, 0, 116);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div5, anchor);
			append_dev(div5, div4);
			append_dev(div4, div1);
			append_dev(div1, img);
			append_dev(div1, t0);
			append_dev(div1, div0);
			append_dev(div4, t1);
			append_dev(div4, div2);
			append_dev(div2, h3);
			append_dev(h3, t2);
			append_dev(div4, t3);
			append_dev(div4, div3);
			append_dev(div3, a);
			append_dev(a, i);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*image_name*/ 1 && img.src !== (img_src_value = "img/projects/" + /*image_name*/ ctx[0])) {
				attr_dev(img, "src", img_src_value);
			}

			if (dirty & /*image_alt*/ 2) {
				attr_dev(img, "alt", /*image_alt*/ ctx[1]);
			}

			if (dirty & /*title*/ 4) set_data_dev(t2, /*title*/ ctx[2]);

			if (dirty & /*link*/ 8) {
				attr_dev(a, "href", /*link*/ ctx[3]);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div5);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { image_name } = $$props;
	let { image_alt } = $$props;
	let { title } = $$props;
	let { link } = $$props;
	const writable_props = ["image_name", "image_alt", "title", "link"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Project> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Project", $$slots, []);

	$$self.$set = $$props => {
		if ("image_name" in $$props) $$invalidate(0, image_name = $$props.image_name);
		if ("image_alt" in $$props) $$invalidate(1, image_alt = $$props.image_alt);
		if ("title" in $$props) $$invalidate(2, title = $$props.title);
		if ("link" in $$props) $$invalidate(3, link = $$props.link);
	};

	$$self.$capture_state = () => ({ image_name, image_alt, title, link });

	$$self.$inject_state = $$props => {
		if ("image_name" in $$props) $$invalidate(0, image_name = $$props.image_name);
		if ("image_alt" in $$props) $$invalidate(1, image_alt = $$props.image_alt);
		if ("title" in $$props) $$invalidate(2, title = $$props.title);
		if ("link" in $$props) $$invalidate(3, link = $$props.link);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [image_name, image_alt, title, link];
}

class Project extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance, create_fragment, safe_not_equal, {
			image_name: 0,
			image_alt: 1,
			title: 2,
			link: 3
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Project",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*image_name*/ ctx[0] === undefined && !("image_name" in props)) {
			console.warn("<Project> was created without expected prop 'image_name'");
		}

		if (/*image_alt*/ ctx[1] === undefined && !("image_alt" in props)) {
			console.warn("<Project> was created without expected prop 'image_alt'");
		}

		if (/*title*/ ctx[2] === undefined && !("title" in props)) {
			console.warn("<Project> was created without expected prop 'title'");
		}

		if (/*link*/ ctx[3] === undefined && !("link" in props)) {
			console.warn("<Project> was created without expected prop 'link'");
		}
	}

	get image_name() {
		throw new Error("<Project>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set image_name(value) {
		throw new Error("<Project>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get image_alt() {
		throw new Error("<Project>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set image_alt(value) {
		throw new Error("<Project>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get title() {
		throw new Error("<Project>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set title(value) {
		throw new Error("<Project>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get link() {
		throw new Error("<Project>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set link(value) {
		throw new Error("<Project>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

const projects = [
	{
		title: 'Sleep Restfully - Blog',
		link: 'https://sleeprestfully.com/blog/',
		image_name: 'sleeprestfully-blog.webp',
		image_alt: 'Sleep Restfully blog website',
	},
	{
		title: 'Colin\'s Sash Windows',
		link: 'https://colinssashwindows.co.uk/',
		image_name: 'colins-sash-windows-website.webp',
		image_alt: 'Colin\'s Sash Windows website',
	},
	{
		title: 'Natural Care 4 U - Blog',
		link: 'https://naturalcare4u.com/blog/',
		image_name: 'naturalcare4u-blog-website.webp',
		image_alt: 'Natural Care 4 U blog website',
	},
	{
		title: 'Ultimate Poker Coaching',
		link: 'https://ultimatepokercoaching.com/',
		image_name: 'ultimate-poker-coaching-website.webp',
		image_alt: 'Ultimate Poker Coaching website'
	},
	{
		title: 'Sematigo',
		link: 'https://sematigo.com/',
		image_name: 'sematigo-website.webp',
		image_alt: 'Sematigo website',
	},
	{
		title: 'Termo Lider',
		link: 'https://termolider.bg/',
		image_name: 'termo-lider-website.webp',
		image_alt: 'Termo Lider website',
	},
	{
		title: 'Poker Academy',
		link: 'https://pokeracademy.bg/',
		image_name: 'poker-academy-website.webp',
		image_alt: 'Poker Academy website',
	},
	{
		title: 'Pontus Overseas',
		link: 'https://pontusoverseasltd.com/',
		image_name: 'pontus-overseas-website.webp',
		image_alt: 'Pontus Overseas website',
	},
	{
		title: 'KMD Project',
		link: 'https://kmd-project.com/',
		image_name: 'kmd-project-website.webp',
		image_alt: 'KMD Project website',
	},
	
];

export { Project as P, projects as p };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX3Byb2plY3RzLjZiN2FkODU1LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0LnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvX3Byb2plY3RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gICAgZXhwb3J0IGxldCBpbWFnZV9uYW1lO1xuICAgIGV4cG9ydCBsZXQgaW1hZ2VfYWx0O1xuICAgIGV4cG9ydCBsZXQgdGl0bGU7XG4gICAgZXhwb3J0IGxldCBsaW5rO1xuPC9zY3JpcHQ+XG5cbjxkaXYgY2xhc3M9XCJ3b3JrXCI+XG4gICAgPGRpdiBjbGFzcz1cIndvcmstY29sXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3b3JrLWltZ1wiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvcHJvamVjdHMve2ltYWdlX25hbWV9XCIgYWx0PVwie2ltYWdlX2FsdH1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdmVybGF5XCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwid29yay10ZXh0XCI+XG4gICAgICAgICAgICA8aDM+e3RpdGxlfTwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwid29yay1saW5rXCI+XG4gICAgICAgICAgICA8YSBjbGFzcz1cImljb24tYnRuXCIgcmVsPVwibm9mb2xsb3cgbm9vcGVuZXIgbm9yZWZlcnJlclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJ7bGlua31cIj48aSBjbGFzcz1cImZhIGZhLWxpbmtcIj48L2k+PC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PiIsImNvbnN0IHByb2plY3RzID0gW1xuXHR7XG5cdFx0dGl0bGU6ICdTbGVlcCBSZXN0ZnVsbHkgLSBCbG9nJyxcblx0XHRsaW5rOiAnaHR0cHM6Ly9zbGVlcHJlc3RmdWxseS5jb20vYmxvZy8nLFxuXHRcdGltYWdlX25hbWU6ICdzbGVlcHJlc3RmdWxseS1ibG9nLndlYnAnLFxuXHRcdGltYWdlX2FsdDogJ1NsZWVwIFJlc3RmdWxseSBibG9nIHdlYnNpdGUnLFxuXHR9LFxuXHR7XG5cdFx0dGl0bGU6ICdDb2xpblxcJ3MgU2FzaCBXaW5kb3dzJyxcblx0XHRsaW5rOiAnaHR0cHM6Ly9jb2xpbnNzYXNod2luZG93cy5jby51ay8nLFxuXHRcdGltYWdlX25hbWU6ICdjb2xpbnMtc2FzaC13aW5kb3dzLXdlYnNpdGUud2VicCcsXG5cdFx0aW1hZ2VfYWx0OiAnQ29saW5cXCdzIFNhc2ggV2luZG93cyB3ZWJzaXRlJyxcblx0fSxcblx0e1xuXHRcdHRpdGxlOiAnTmF0dXJhbCBDYXJlIDQgVSAtIEJsb2cnLFxuXHRcdGxpbms6ICdodHRwczovL25hdHVyYWxjYXJlNHUuY29tL2Jsb2cvJyxcblx0XHRpbWFnZV9uYW1lOiAnbmF0dXJhbGNhcmU0dS1ibG9nLXdlYnNpdGUud2VicCcsXG5cdFx0aW1hZ2VfYWx0OiAnTmF0dXJhbCBDYXJlIDQgVSBibG9nIHdlYnNpdGUnLFxuXHR9LFxuXHR7XG5cdFx0dGl0bGU6ICdVbHRpbWF0ZSBQb2tlciBDb2FjaGluZycsXG5cdFx0bGluazogJ2h0dHBzOi8vdWx0aW1hdGVwb2tlcmNvYWNoaW5nLmNvbS8nLFxuXHRcdGltYWdlX25hbWU6ICd1bHRpbWF0ZS1wb2tlci1jb2FjaGluZy13ZWJzaXRlLndlYnAnLFxuXHRcdGltYWdlX2FsdDogJ1VsdGltYXRlIFBva2VyIENvYWNoaW5nIHdlYnNpdGUnXG5cdH0sXG5cdHtcblx0XHR0aXRsZTogJ1NlbWF0aWdvJyxcblx0XHRsaW5rOiAnaHR0cHM6Ly9zZW1hdGlnby5jb20vJyxcblx0XHRpbWFnZV9uYW1lOiAnc2VtYXRpZ28td2Vic2l0ZS53ZWJwJyxcblx0XHRpbWFnZV9hbHQ6ICdTZW1hdGlnbyB3ZWJzaXRlJyxcblx0fSxcblx0e1xuXHRcdHRpdGxlOiAnVGVybW8gTGlkZXInLFxuXHRcdGxpbms6ICdodHRwczovL3Rlcm1vbGlkZXIuYmcvJyxcblx0XHRpbWFnZV9uYW1lOiAndGVybW8tbGlkZXItd2Vic2l0ZS53ZWJwJyxcblx0XHRpbWFnZV9hbHQ6ICdUZXJtbyBMaWRlciB3ZWJzaXRlJyxcblx0fSxcblx0e1xuXHRcdHRpdGxlOiAnUG9rZXIgQWNhZGVteScsXG5cdFx0bGluazogJ2h0dHBzOi8vcG9rZXJhY2FkZW15LmJnLycsXG5cdFx0aW1hZ2VfbmFtZTogJ3Bva2VyLWFjYWRlbXktd2Vic2l0ZS53ZWJwJyxcblx0XHRpbWFnZV9hbHQ6ICdQb2tlciBBY2FkZW15IHdlYnNpdGUnLFxuXHR9LFxuXHR7XG5cdFx0dGl0bGU6ICdQb250dXMgT3ZlcnNlYXMnLFxuXHRcdGxpbms6ICdodHRwczovL3BvbnR1c292ZXJzZWFzbHRkLmNvbS8nLFxuXHRcdGltYWdlX25hbWU6ICdwb250dXMtb3ZlcnNlYXMtd2Vic2l0ZS53ZWJwJyxcblx0XHRpbWFnZV9hbHQ6ICdQb250dXMgT3ZlcnNlYXMgd2Vic2l0ZScsXG5cdH0sXG5cdHtcblx0XHR0aXRsZTogJ0tNRCBQcm9qZWN0Jyxcblx0XHRsaW5rOiAnaHR0cHM6Ly9rbWQtcHJvamVjdC5jb20vJyxcblx0XHRpbWFnZV9uYW1lOiAna21kLXByb2plY3Qtd2Vic2l0ZS53ZWJwJyxcblx0XHRpbWFnZV9hbHQ6ICdLTUQgUHJvamVjdCB3ZWJzaXRlJyxcblx0fSxcblx0XG5dO1xuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0czsiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFjaUIsR0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VDQUFMLEdBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxRUFKYyxHQUFVO3NDQUFTLEdBQVM7Ozs7Ozs7Ozs7Ozs7O2dDQU8wQixHQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpR0FQMUQsR0FBVTs7Ozs7dUNBQVMsR0FBUzs7O3VEQUkvQyxHQUFLOzs7aUNBR29FLEdBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FoQi9FLFVBQVU7T0FDVixTQUFTO09BQ1QsS0FBSztPQUNMLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSm5CLE1BQU0sUUFBUSxHQUFHO0FBQ2pCLENBQUM7QUFDRCxFQUFFLEtBQUssRUFBRSx3QkFBd0I7QUFDakMsRUFBRSxJQUFJLEVBQUUsa0NBQWtDO0FBQzFDLEVBQUUsVUFBVSxFQUFFLDBCQUEwQjtBQUN4QyxFQUFFLFNBQVMsRUFBRSw4QkFBOEI7QUFDM0MsRUFBRTtBQUNGLENBQUM7QUFDRCxFQUFFLEtBQUssRUFBRSx1QkFBdUI7QUFDaEMsRUFBRSxJQUFJLEVBQUUsa0NBQWtDO0FBQzFDLEVBQUUsVUFBVSxFQUFFLGtDQUFrQztBQUNoRCxFQUFFLFNBQVMsRUFBRSwrQkFBK0I7QUFDNUMsRUFBRTtBQUNGLENBQUM7QUFDRCxFQUFFLEtBQUssRUFBRSx5QkFBeUI7QUFDbEMsRUFBRSxJQUFJLEVBQUUsaUNBQWlDO0FBQ3pDLEVBQUUsVUFBVSxFQUFFLGlDQUFpQztBQUMvQyxFQUFFLFNBQVMsRUFBRSwrQkFBK0I7QUFDNUMsRUFBRTtBQUNGLENBQUM7QUFDRCxFQUFFLEtBQUssRUFBRSx5QkFBeUI7QUFDbEMsRUFBRSxJQUFJLEVBQUUsb0NBQW9DO0FBQzVDLEVBQUUsVUFBVSxFQUFFLHNDQUFzQztBQUNwRCxFQUFFLFNBQVMsRUFBRSxpQ0FBaUM7QUFDOUMsRUFBRTtBQUNGLENBQUM7QUFDRCxFQUFFLEtBQUssRUFBRSxVQUFVO0FBQ25CLEVBQUUsSUFBSSxFQUFFLHVCQUF1QjtBQUMvQixFQUFFLFVBQVUsRUFBRSx1QkFBdUI7QUFDckMsRUFBRSxTQUFTLEVBQUUsa0JBQWtCO0FBQy9CLEVBQUU7QUFDRixDQUFDO0FBQ0QsRUFBRSxLQUFLLEVBQUUsYUFBYTtBQUN0QixFQUFFLElBQUksRUFBRSx3QkFBd0I7QUFDaEMsRUFBRSxVQUFVLEVBQUUsMEJBQTBCO0FBQ3hDLEVBQUUsU0FBUyxFQUFFLHFCQUFxQjtBQUNsQyxFQUFFO0FBQ0YsQ0FBQztBQUNELEVBQUUsS0FBSyxFQUFFLGVBQWU7QUFDeEIsRUFBRSxJQUFJLEVBQUUsMEJBQTBCO0FBQ2xDLEVBQUUsVUFBVSxFQUFFLDRCQUE0QjtBQUMxQyxFQUFFLFNBQVMsRUFBRSx1QkFBdUI7QUFDcEMsRUFBRTtBQUNGLENBQUM7QUFDRCxFQUFFLEtBQUssRUFBRSxpQkFBaUI7QUFDMUIsRUFBRSxJQUFJLEVBQUUsZ0NBQWdDO0FBQ3hDLEVBQUUsVUFBVSxFQUFFLDhCQUE4QjtBQUM1QyxFQUFFLFNBQVMsRUFBRSx5QkFBeUI7QUFDdEMsRUFBRTtBQUNGLENBQUM7QUFDRCxFQUFFLEtBQUssRUFBRSxhQUFhO0FBQ3RCLEVBQUUsSUFBSSxFQUFFLDBCQUEwQjtBQUNsQyxFQUFFLFVBQVUsRUFBRSwwQkFBMEI7QUFDeEMsRUFBRSxTQUFTLEVBQUUscUJBQXFCO0FBQ2xDLEVBQUU7QUFDRjtBQUNBLENBQUMsQ0FBQzs7OzsifQ==
