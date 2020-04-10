import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, a as space, t as text, c as claim_element, b as children, f as claim_space, g as detach_dev, h as claim_text, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as set_data_dev, o as noop } from './client.80b11c16.js';

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
			a = claim_element(div3_nodes, "A", { class: true, href: true });
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
			add_location(i, file, 17, 46, 470);
			attr_dev(a, "class", "icon-btn");
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
		title: 'Ultimate Poker Coaching',
		link: 'https://ultimatepokercoaching.com',
		image_name: 'upc.webp',
		image_alt: 'Ultimate Poker Coaching website'
	},
	{
		title: 'Sleep Restfully - Blog',
		link: 'https://sleeprestfully.com/blog/',
		image_name: 'image.jpg',
		image_alt: 'Sleep Restfully blog website',
	},
	{
		title: 'Colin\'s Sash Windows',
		link: 'https://colinssashwindows.co.uk',
		image_name: 'image.jpg',
		image_alt: 'Colin\'s Sash Windows website',
	},
	{
		title: 'Natural Care 4 U - Blog',
		link: 'https://naturalcare4u.com/blog/',
		image_name: 'image.jpg',
		image_alt: 'Natural Care 4 U blog website',
	},
	{
		title: 'Termo Lider',
		link: 'https://termolider.bg/',
		image_name: 'image.jpg',
		image_alt: 'Termo Lider website',
	},
	{
		title: 'Poker Academy',
		link: 'https://pokeracademy.bg/',
		image_name: 'image.jpg',
		image_alt: 'Poker Academy website',
	},
	{
		title: 'Sematigo',
		link: 'https://sematigo.com/',
		image_name: 'image.jpg',
		image_alt: 'Sematigo website',
	},
	{
		title: 'Pontus Overseas',
		link: 'https://pontusoverseasltd.com/',
		image_name: 'image.jpg',
		image_alt: 'Pontus Overseas website',
	}
];

export { Project as P, projects as p };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX3Byb2plY3RzLjdjZmY4ZTM1LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0LnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvX3Byb2plY3RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gICAgZXhwb3J0IGxldCBpbWFnZV9uYW1lO1xuICAgIGV4cG9ydCBsZXQgaW1hZ2VfYWx0O1xuICAgIGV4cG9ydCBsZXQgdGl0bGU7XG4gICAgZXhwb3J0IGxldCBsaW5rO1xuPC9zY3JpcHQ+XG5cbjxkaXYgY2xhc3M9XCJ3b3JrXCI+XG4gICAgPGRpdiBjbGFzcz1cIndvcmstY29sXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3b3JrLWltZ1wiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvcHJvamVjdHMve2ltYWdlX25hbWV9XCIgYWx0PVwie2ltYWdlX2FsdH1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdmVybGF5XCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwid29yay10ZXh0XCI+XG4gICAgICAgICAgICA8aDM+e3RpdGxlfTwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwid29yay1saW5rXCI+XG4gICAgICAgICAgICA8YSBjbGFzcz1cImljb24tYnRuXCIgaHJlZj1cIntsaW5rfVwiPjxpIGNsYXNzPVwiZmEgZmEtbGlua1wiPjwvaT48L2E+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+IiwiY29uc3QgcHJvamVjdHMgPSBbXG5cdHtcblx0XHR0aXRsZTogJ1VsdGltYXRlIFBva2VyIENvYWNoaW5nJyxcblx0XHRsaW5rOiAnaHR0cHM6Ly91bHRpbWF0ZXBva2VyY29hY2hpbmcuY29tJyxcblx0XHRpbWFnZV9uYW1lOiAndXBjLndlYnAnLFxuXHRcdGltYWdlX2FsdDogJ1VsdGltYXRlIFBva2VyIENvYWNoaW5nIHdlYnNpdGUnXG5cdH0sXG5cdHtcblx0XHR0aXRsZTogJ1NsZWVwIFJlc3RmdWxseSAtIEJsb2cnLFxuXHRcdGxpbms6ICdodHRwczovL3NsZWVwcmVzdGZ1bGx5LmNvbS9ibG9nLycsXG5cdFx0aW1hZ2VfbmFtZTogJ2ltYWdlLmpwZycsXG5cdFx0aW1hZ2VfYWx0OiAnU2xlZXAgUmVzdGZ1bGx5IGJsb2cgd2Vic2l0ZScsXG5cdH0sXG5cdHtcblx0XHR0aXRsZTogJ0NvbGluXFwncyBTYXNoIFdpbmRvd3MnLFxuXHRcdGxpbms6ICdodHRwczovL2NvbGluc3Nhc2h3aW5kb3dzLmNvLnVrJyxcblx0XHRpbWFnZV9uYW1lOiAnaW1hZ2UuanBnJyxcblx0XHRpbWFnZV9hbHQ6ICdDb2xpblxcJ3MgU2FzaCBXaW5kb3dzIHdlYnNpdGUnLFxuXHR9LFxuXHR7XG5cdFx0dGl0bGU6ICdOYXR1cmFsIENhcmUgNCBVIC0gQmxvZycsXG5cdFx0bGluazogJ2h0dHBzOi8vbmF0dXJhbGNhcmU0dS5jb20vYmxvZy8nLFxuXHRcdGltYWdlX25hbWU6ICdpbWFnZS5qcGcnLFxuXHRcdGltYWdlX2FsdDogJ05hdHVyYWwgQ2FyZSA0IFUgYmxvZyB3ZWJzaXRlJyxcblx0fSxcblx0e1xuXHRcdHRpdGxlOiAnVGVybW8gTGlkZXInLFxuXHRcdGxpbms6ICdodHRwczovL3Rlcm1vbGlkZXIuYmcvJyxcblx0XHRpbWFnZV9uYW1lOiAnaW1hZ2UuanBnJyxcblx0XHRpbWFnZV9hbHQ6ICdUZXJtbyBMaWRlciB3ZWJzaXRlJyxcblx0fSxcblx0e1xuXHRcdHRpdGxlOiAnUG9rZXIgQWNhZGVteScsXG5cdFx0bGluazogJ2h0dHBzOi8vcG9rZXJhY2FkZW15LmJnLycsXG5cdFx0aW1hZ2VfbmFtZTogJ2ltYWdlLmpwZycsXG5cdFx0aW1hZ2VfYWx0OiAnUG9rZXIgQWNhZGVteSB3ZWJzaXRlJyxcblx0fSxcblx0e1xuXHRcdHRpdGxlOiAnU2VtYXRpZ28nLFxuXHRcdGxpbms6ICdodHRwczovL3NlbWF0aWdvLmNvbS8nLFxuXHRcdGltYWdlX25hbWU6ICdpbWFnZS5qcGcnLFxuXHRcdGltYWdlX2FsdDogJ1NlbWF0aWdvIHdlYnNpdGUnLFxuXHR9LFxuXHR7XG5cdFx0dGl0bGU6ICdQb250dXMgT3ZlcnNlYXMnLFxuXHRcdGxpbms6ICdodHRwczovL3BvbnR1c292ZXJzZWFzbHRkLmNvbS8nLFxuXHRcdGltYWdlX25hbWU6ICdpbWFnZS5qcGcnLFxuXHRcdGltYWdlX2FsdDogJ1BvbnR1cyBPdmVyc2VhcyB3ZWJzaXRlJyxcblx0fVxuXTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdHM7Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBY2lCLEdBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1Q0FBTCxHQUFLOzs7Ozs7Ozs7Ozs7Ozs7OztxRUFKYyxHQUFVO3NDQUFTLEdBQVM7Ozs7Ozs7Ozs7OztnQ0FPekIsR0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUdBUFAsR0FBVTs7Ozs7dUNBQVMsR0FBUzs7O3VEQUkvQyxHQUFLOzs7aUNBR2lCLEdBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FoQjVCLFVBQVU7T0FDVixTQUFTO09BQ1QsS0FBSztPQUNMLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSm5CLE1BQU0sUUFBUSxHQUFHO0FBQ2pCLENBQUM7QUFDRCxFQUFFLEtBQUssRUFBRSx5QkFBeUI7QUFDbEMsRUFBRSxJQUFJLEVBQUUsbUNBQW1DO0FBQzNDLEVBQUUsVUFBVSxFQUFFLFVBQVU7QUFDeEIsRUFBRSxTQUFTLEVBQUUsaUNBQWlDO0FBQzlDLEVBQUU7QUFDRixDQUFDO0FBQ0QsRUFBRSxLQUFLLEVBQUUsd0JBQXdCO0FBQ2pDLEVBQUUsSUFBSSxFQUFFLGtDQUFrQztBQUMxQyxFQUFFLFVBQVUsRUFBRSxXQUFXO0FBQ3pCLEVBQUUsU0FBUyxFQUFFLDhCQUE4QjtBQUMzQyxFQUFFO0FBQ0YsQ0FBQztBQUNELEVBQUUsS0FBSyxFQUFFLHVCQUF1QjtBQUNoQyxFQUFFLElBQUksRUFBRSxpQ0FBaUM7QUFDekMsRUFBRSxVQUFVLEVBQUUsV0FBVztBQUN6QixFQUFFLFNBQVMsRUFBRSwrQkFBK0I7QUFDNUMsRUFBRTtBQUNGLENBQUM7QUFDRCxFQUFFLEtBQUssRUFBRSx5QkFBeUI7QUFDbEMsRUFBRSxJQUFJLEVBQUUsaUNBQWlDO0FBQ3pDLEVBQUUsVUFBVSxFQUFFLFdBQVc7QUFDekIsRUFBRSxTQUFTLEVBQUUsK0JBQStCO0FBQzVDLEVBQUU7QUFDRixDQUFDO0FBQ0QsRUFBRSxLQUFLLEVBQUUsYUFBYTtBQUN0QixFQUFFLElBQUksRUFBRSx3QkFBd0I7QUFDaEMsRUFBRSxVQUFVLEVBQUUsV0FBVztBQUN6QixFQUFFLFNBQVMsRUFBRSxxQkFBcUI7QUFDbEMsRUFBRTtBQUNGLENBQUM7QUFDRCxFQUFFLEtBQUssRUFBRSxlQUFlO0FBQ3hCLEVBQUUsSUFBSSxFQUFFLDBCQUEwQjtBQUNsQyxFQUFFLFVBQVUsRUFBRSxXQUFXO0FBQ3pCLEVBQUUsU0FBUyxFQUFFLHVCQUF1QjtBQUNwQyxFQUFFO0FBQ0YsQ0FBQztBQUNELEVBQUUsS0FBSyxFQUFFLFVBQVU7QUFDbkIsRUFBRSxJQUFJLEVBQUUsdUJBQXVCO0FBQy9CLEVBQUUsVUFBVSxFQUFFLFdBQVc7QUFDekIsRUFBRSxTQUFTLEVBQUUsa0JBQWtCO0FBQy9CLEVBQUU7QUFDRixDQUFDO0FBQ0QsRUFBRSxLQUFLLEVBQUUsaUJBQWlCO0FBQzFCLEVBQUUsSUFBSSxFQUFFLGdDQUFnQztBQUN4QyxFQUFFLFVBQVUsRUFBRSxXQUFXO0FBQ3pCLEVBQUUsU0FBUyxFQUFFLHlCQUF5QjtBQUN0QyxFQUFFO0FBQ0YsQ0FBQyxDQUFDOzs7OyJ9
