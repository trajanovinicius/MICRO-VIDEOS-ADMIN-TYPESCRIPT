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
});
