import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, p as validate_each_argument, v as validate_slots, q as assign, r as create_component, u as claim_component, w as mount_component, x as get_spread_update, y as get_spread_object, z as transition_in, A as transition_out, B as destroy_component, e as element, a as space, t as text, C as query_selector_all, c as claim_element, g as detach_dev, f as claim_space, b as children, h as claim_text, j as attr_dev, k as add_location, D as set_style, m as append_dev, l as insert_dev, G as check_outros, H as destroy_each, J as group_outros } from './client.de1b321b.js';
import { P as Project, p as projects } from './_projects.c95e328f.js';

/* src/routes/portfolio.svelte generated by Svelte v3.20.1 */
const file = "src/routes/portfolio.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[0] = list[i];
	return child_ctx;
}

// (41:16) {#each projects as project}
function create_each_block(ctx) {
	let current;
	const project_spread_levels = [/*project*/ ctx[0]];
	let project_props = {};

	for (let i = 0; i < project_spread_levels.length; i += 1) {
		project_props = assign(project_props, project_spread_levels[i]);
	}

	const project = new Project({ props: project_props, $$inline: true });

	const block = {
		c: function create() {
			create_component(project.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(project.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(project, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const project_changes = (dirty & /*projects*/ 0)
			? get_spread_update(project_spread_levels, [get_spread_object(/*project*/ ctx[0])])
			: {};

			project.$set(project_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(project.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(project.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(project, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(41:16) {#each projects as project}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let meta0;
	let meta1;
	let meta2;
	let meta3;
	let meta4;
	let meta5;
	let meta6;
	let meta7;
	let meta8;
	let meta9;
	let meta10;
	let meta11;
	let meta12;
	let meta13;
	let meta14;
	let t0;
	let header;
	let div1;
	let div0;
	let t1;
	let div2;
	let h1;
	let t2;
	let t3;
	let ul;
	let li0;
	let a;
	let t4;
	let t5;
	let li1;
	let t6;
	let t7;
	let section;
	let div5;
	let div4;
	let div3;
	let current;
	let each_value = projects;
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	const block = {
		c: function create() {
			meta0 = element("meta");
			meta1 = element("meta");
			meta2 = element("meta");
			meta3 = element("meta");
			meta4 = element("meta");
			meta5 = element("meta");
			meta6 = element("meta");
			meta7 = element("meta");
			meta8 = element("meta");
			meta9 = element("meta");
			meta10 = element("meta");
			meta11 = element("meta");
			meta12 = element("meta");
			meta13 = element("meta");
			meta14 = element("meta");
			t0 = space();
			header = element("header");
			div1 = element("div");
			div0 = element("div");
			t1 = space();
			div2 = element("div");
			h1 = element("h1");
			t2 = text("Portfolio");
			t3 = space();
			ul = element("ul");
			li0 = element("li");
			a = element("a");
			t4 = text("Home");
			t5 = space();
			li1 = element("li");
			t6 = text("Portfolio");
			t7 = space();
			section = element("section");
			div5 = element("div");
			div4 = element("div");
			div3 = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1jdqmhh\"]", document.head);
			meta0 = claim_element(head_nodes, "META", { name: true, content: true });
			meta1 = claim_element(head_nodes, "META", { property: true, content: true });
			meta2 = claim_element(head_nodes, "META", { property: true, content: true });
			meta3 = claim_element(head_nodes, "META", { property: true, content: true });
			meta4 = claim_element(head_nodes, "META", { property: true, content: true });
			meta5 = claim_element(head_nodes, "META", { property: true, content: true });
			meta6 = claim_element(head_nodes, "META", { property: true, content: true });
			meta7 = claim_element(head_nodes, "META", { property: true, content: true });
			meta8 = claim_element(head_nodes, "META", { property: true, content: true });
			meta9 = claim_element(head_nodes, "META", { property: true, content: true });
			meta10 = claim_element(head_nodes, "META", { name: true, content: true });
			meta11 = claim_element(head_nodes, "META", { name: true, content: true });
			meta12 = claim_element(head_nodes, "META", { name: true, content: true });
			meta13 = claim_element(head_nodes, "META", { name: true, content: true });
			meta14 = claim_element(head_nodes, "META", { name: true, content: true });
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			header = claim_element(nodes, "HEADER", { class: true });
			var header_nodes = children(header);
			div1 = claim_element(header_nodes, "DIV", { class: true, style: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			children(div0).forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t1 = claim_space(header_nodes);
			div2 = claim_element(header_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			h1 = claim_element(div2_nodes, "H1", {});
			var h1_nodes = children(h1);
			t2 = claim_text(h1_nodes, "Portfolio");
			h1_nodes.forEach(detach_dev);
			t3 = claim_space(div2_nodes);
			ul = claim_element(div2_nodes, "UL", { class: true });
			var ul_nodes = children(ul);
			li0 = claim_element(ul_nodes, "LI", { class: true });
			var li0_nodes = children(li0);
			a = claim_element(li0_nodes, "A", { href: true });
			var a_nodes = children(a);
			t4 = claim_text(a_nodes, "Home");
			a_nodes.forEach(detach_dev);
			li0_nodes.forEach(detach_dev);
			t5 = claim_space(ul_nodes);
			li1 = claim_element(ul_nodes, "LI", { class: true });
			var li1_nodes = children(li1);
			t6 = claim_text(li1_nodes, "Portfolio");
			li1_nodes.forEach(detach_dev);
			ul_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			header_nodes.forEach(detach_dev);
			t7 = claim_space(nodes);
			section = claim_element(nodes, "SECTION", { id: true });
			var section_nodes = children(section);
			div5 = claim_element(section_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div3 = claim_element(div4_nodes, "DIV", { id: true, class: true });
			var div3_nodes = children(div3);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div3_nodes);
			}

			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Nikolay Nikolaev - Portfolio";
			attr_dev(meta0, "name", "description");
			attr_dev(meta0, "content", "");
			add_location(meta0, file, 7, 1, 179);
			attr_dev(meta1, "property", "og:title");
			attr_dev(meta1, "content", "");
			add_location(meta1, file, 8, 1, 219);
			attr_dev(meta2, "property", "og:type");
			attr_dev(meta2, "content", "article");
			add_location(meta2, file, 9, 1, 260);
			attr_dev(meta3, "property", "og:url");
			attr_dev(meta3, "content", "https://nikolaynikolaev.com/portfolio");
			add_location(meta3, file, 10, 1, 307);
			attr_dev(meta4, "property", "og:image");
			attr_dev(meta4, "content", "img/nikolay-nikolaev.png");
			add_location(meta4, file, 11, 1, 383);
			attr_dev(meta5, "property", "og:image:width");
			attr_dev(meta5, "content", "300");
			add_location(meta5, file, 12, 1, 448);
			attr_dev(meta6, "property", "og:image:height");
			attr_dev(meta6, "content", "300");
			add_location(meta6, file, 13, 1, 498);
			attr_dev(meta7, "property", "og:description");
			attr_dev(meta7, "content", "");
			add_location(meta7, file, 14, 1, 549);
			attr_dev(meta8, "property", "og:site_name");
			attr_dev(meta8, "content", "Nikolay Nikolaev");
			add_location(meta8, file, 15, 1, 597);
			attr_dev(meta9, "property", "og:locale");
			attr_dev(meta9, "content", "en_US");
			add_location(meta9, file, 16, 1, 658);
			attr_dev(meta10, "name", "twitter:card");
			attr_dev(meta10, "content", "summary");
			add_location(meta10, file, 17, 1, 705);
			attr_dev(meta11, "name", "twitter:site");
			attr_dev(meta11, "content", "@nnikolaev12");
			add_location(meta11, file, 18, 1, 751);
			attr_dev(meta12, "name", "twitter:title");
			attr_dev(meta12, "content", "");
			add_location(meta12, file, 19, 1, 802);
			attr_dev(meta13, "name", "twitter:description");
			attr_dev(meta13, "content", "");
			add_location(meta13, file, 20, 1, 842);
			attr_dev(meta14, "name", "twitter:image");
			attr_dev(meta14, "content", "img/nikolay-nikolaev.png");
			add_location(meta14, file, 21, 1, 888);
			attr_dev(div0, "class", "overlay");
			add_location(div0, file, 26, 8, 1089);
			attr_dev(div1, "class", "background-image");
			set_style(div1, "background-image", "url(img/background.jpg)");
			add_location(div1, file, 25, 4, 1001);
			add_location(h1, file, 29, 8, 1166);
			attr_dev(a, "href", ".");
			add_location(a, file, 31, 40, 1257);
			attr_dev(li0, "class", "breadcrumb-item");
			add_location(li0, file, 31, 12, 1229);
			attr_dev(li1, "class", "breadcrumb-item");
			add_location(li1, file, 32, 12, 1295);
			attr_dev(ul, "class", "breadcrumb");
			add_location(ul, file, 30, 8, 1193);
			attr_dev(div2, "class", "header-text");
			add_location(div2, file, 28, 4, 1132);
			attr_dev(header, "class", "small-header");
			add_location(header, file, 24, 0, 967);
			attr_dev(div3, "id", "portfolio-grid");
			attr_dev(div3, "class", "two-columns");
			add_location(div3, file, 39, 12, 1464);
			attr_dev(div4, "class", "row");
			add_location(div4, file, 38, 8, 1434);
			attr_dev(div5, "class", "container");
			add_location(div5, file, 37, 4, 1402);
			attr_dev(section, "id", "portfolio");
			add_location(section, file, 36, 0, 1373);
		},
		m: function mount(target, anchor) {
			append_dev(document.head, meta0);
			append_dev(document.head, meta1);
			append_dev(document.head, meta2);
			append_dev(document.head, meta3);
			append_dev(document.head, meta4);
			append_dev(document.head, meta5);
			append_dev(document.head, meta6);
			append_dev(document.head, meta7);
			append_dev(document.head, meta8);
			append_dev(document.head, meta9);
			append_dev(document.head, meta10);
			append_dev(document.head, meta11);
			append_dev(document.head, meta12);
			append_dev(document.head, meta13);
			append_dev(document.head, meta14);
			insert_dev(target, t0, anchor);
			insert_dev(target, header, anchor);
			append_dev(header, div1);
			append_dev(div1, div0);
			append_dev(header, t1);
			append_dev(header, div2);
			append_dev(div2, h1);
			append_dev(h1, t2);
			append_dev(div2, t3);
			append_dev(div2, ul);
			append_dev(ul, li0);
			append_dev(li0, a);
			append_dev(a, t4);
			append_dev(ul, t5);
			append_dev(ul, li1);
			append_dev(li1, t6);
			insert_dev(target, t7, anchor);
			insert_dev(target, section, anchor);
			append_dev(section, div5);
			append_dev(div5, div4);
			append_dev(div4, div3);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div3, null);
			}

			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*projects*/ 0) {
				each_value = projects;
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(div3, null);
					}
				}

				group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			detach_dev(meta0);
			detach_dev(meta1);
			detach_dev(meta2);
			detach_dev(meta3);
			detach_dev(meta4);
			detach_dev(meta5);
			detach_dev(meta6);
			detach_dev(meta7);
			detach_dev(meta8);
			detach_dev(meta9);
			detach_dev(meta10);
			detach_dev(meta11);
			detach_dev(meta12);
			detach_dev(meta13);
			detach_dev(meta14);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(header);
			if (detaching) detach_dev(t7);
			if (detaching) detach_dev(section);
			destroy_each(each_blocks, detaching);
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
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Portfolio> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Portfolio", $$slots, []);
	$$self.$capture_state = () => ({ Project, projects });
	return [];
}

class Portfolio extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Portfolio",
			options,
			id: create_fragment.name
		});
	}
}

export default Portfolio;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9ydGZvbGlvLjQ4NWY4NDk3LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL3BvcnRmb2xpby5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgICBpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9qZWN0LnN2ZWx0ZVwiO1xuICAgIGltcG9ydCBwcm9qZWN0cyBmcm9tICcuL19wcm9qZWN0cy5qcyc7XG48L3NjcmlwdD5cblxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+Tmlrb2xheSBOaWtvbGFldiAtIFBvcnRmb2xpbzwvdGl0bGU+XG5cdDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJcIiAvPlxuXHQ8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIlwiIC8+XG5cdDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJhcnRpY2xlXCIgLz5cblx0PG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PVwiaHR0cHM6Ly9uaWtvbGF5bmlrb2xhZXYuY29tL3BvcnRmb2xpb1wiIC8+XG5cdDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PVwiaW1nL25pa29sYXktbmlrb2xhZXYucG5nXCIgLz5cblx0PG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTp3aWR0aFwiIGNvbnRlbnQ9XCIzMDBcIiAvPlxuXHQ8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlOmhlaWdodFwiIGNvbnRlbnQ9XCIzMDBcIiAvPlxuXHQ8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIlwiIC8+IFxuXHQ8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9XCJOaWtvbGF5IE5pa29sYWV2XCIgLz5cblx0PG1ldGEgcHJvcGVydHk9XCJvZzpsb2NhbGVcIiBjb250ZW50PVwiZW5fVVNcIiAvPlxuXHQ8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlcIj5cblx0PG1ldGEgbmFtZT1cInR3aXR0ZXI6c2l0ZVwiIGNvbnRlbnQ9XCJAbm5pa29sYWV2MTJcIj5cblx0PG1ldGEgbmFtZT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PVwiXCI+XG5cdDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIlwiPlxuXHQ8bWV0YSBuYW1lPVwidHdpdHRlcjppbWFnZVwiIGNvbnRlbnQ9XCJpbWcvbmlrb2xheS1uaWtvbGFldi5wbmdcIj5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxoZWFkZXIgY2xhc3M9XCJzbWFsbC1oZWFkZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiYmFja2dyb3VuZC1pbWFnZVwiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTp1cmwoaW1nL2JhY2tncm91bmQuanBnKVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwib3ZlcmxheVwiPjwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItdGV4dFwiPlxuICAgICAgICA8aDE+UG9ydGZvbGlvPC9oMT5cbiAgICAgICAgPHVsIGNsYXNzPVwiYnJlYWRjcnVtYlwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiYnJlYWRjcnVtYi1pdGVtXCI+PGEgaHJlZj1cIi5cIj5Ib21lPC9hPjwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJicmVhZGNydW1iLWl0ZW1cIj5Qb3J0Zm9saW88L2xpPlxuICAgICAgICA8L3VsPlxuICAgIDwvZGl2PlxuPC9oZWFkZXI+XG48c2VjdGlvbiBpZD1cInBvcnRmb2xpb1wiPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBpZD1cInBvcnRmb2xpby1ncmlkXCIgY2xhc3M9XCJ0d28tY29sdW1uc1wiPlxuICAgICAgICAgICAgICAgIHsjZWFjaCBwcm9qZWN0cyBhcyBwcm9qZWN0fVxuICAgICAgICAgICAgICAgICAgICA8UHJvamVjdCB7Li4ucHJvamVjdH0vPlxuICAgICAgICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvc2VjdGlvbj4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OzRDQXlDaUMsR0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2RUFBUCxHQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkFEakIsUUFBUTs7OztnQ0FBYixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQkFBQyxRQUFROzs7OytCQUFiLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBQUosTUFBSTs7Ozs7Ozs7OztrQ0FBSixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9