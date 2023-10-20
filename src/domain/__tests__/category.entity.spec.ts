import { Category } from "../category.entity";

describe("Category Unit Tests", () => {
	describe("constructor", () => {
		test("should create a category with default values", () => {
			const category = new Category({
				name: "Movie",
			});
			expect(category.category_id).toBe("");
			expect(category.name).toBe("Movie");
			expect(category.description).toBeNull();
			expect(category.is_active).toBeTruthy();
			expect(category.created_at).toBeInstanceOf(Date);
		});
		test("Should create a category with all values", () => {
			const created_at = new Date();
			const category = new Category({
				name: "Movie",
				description: "Movie Description",
				is_active: false,
				created_at: created_at,
			});

			expect(category.category_id).toBe("");
			expect(category.name).toBe("Movie");
			expect(category.description).toBe("Movie Description");
			expect(category.is_active).toBeFalsy();
			expect(category.created_at).toBe(created_at);
		});
	});
	describe("create command", () => {
		test("should create a category", () => {
			const category = Category.create({
				name: "Movie",
			});
			expect(category.category_id).toBe("");
			expect(category.name).toBe("Movie");
			expect(category.description).toBeNull();
			expect(category.is_active).toBeTruthy();
			expect(category.created_at).toBeInstanceOf(Date);
		});
		describe("Methods", () => {
			test("should change name", () => {
				const category = new Category({
					name: "Movie",
				});
				category.changeName("Other Name");
				expect(category.name).toBe("Other Name");
			});
			test("should change description", () => {
				const category = new Category({
					name: "Movie",
					description: "Movie Description",
				});
				category.changeDescription("Other Description");
				expect(category.description).toBe("Other Description");
			});

			test("should return activate", () => {
				const category = new Category({
					name: "Movie",
					is_active: false,
				});
				category.activate();
				expect(category.is_active).toBeTruthy();
			});
			test("should return deactivate", () => {
				const category = new Category({
					name: "Movie",
					is_active: true,
				});
				category.deactivate();
				expect(category.is_active).toBeFalsy();
			});
			test("should return json", () => {
				const created_at = new Date();
				const category = new Category({
					category_id: "2",
					name: "Movie",
					description: "Movie Description",
					is_active: false,
					created_at: created_at,
				});
				category.toJson();
				expect(category.toJson()).toEqual(category);
			});
		});
	});
});
