type Category = {
  id: number;
  name: string;
  slug: string;
  level: number;
  parent_id: number | null;
  children: Category[];
  product_count: number;
};

/**
 * Lấy thông tin category hiện tại + danh sách category cần hiển thị
 * @param categories Dữ liệu cây danh mục
 * @param slug Slug của danh mục hiện tại
 */
export function getCategoryDataBySlug(
  categories: Category[],
  slug?: string
): { current: Category | null; visible: Category[] } {
  if (!slug) {
    // Không có slug → hiển thị level 0
    return { current: null, visible: categories };
  }

  // Tìm category theo slug
  const findCategory = (list: Category[], slug: string): Category | null => {
    for (const item of list) {
      if (item.slug === slug) return item;
      const found = findCategory(item.children, slug);
      if (found) return found;
    }
    return null;
  };

  // Tìm parent theo id
  const findParent = (list: Category[], targetId: number): Category | null => {
    for (const item of list) {
      if (item.children.some((c) => c.id === targetId)) return item;
      const found = findParent(item.children, targetId);
      if (found) return found;
    }
    return null;
  };

  const currentCate = findCategory(categories, slug);
  if (!currentCate) return { current: null, visible: categories };

  // Nếu là level 0 → hiển thị children
  if (currentCate.level === 0) {
    return { current: currentCate, visible: currentCate.children };
  }

  // Nếu có children → hiển thị children
  if (currentCate.children && currentCate.children.length > 0) {
    return { current: currentCate, visible: currentCate.children };
  }

  // Nếu không có con → hiển thị cùng cấp
  const parent = findParent(categories, currentCate.id);
  if (parent) {
    return { current: currentCate, visible: parent.children };
  }

  // fallback
  return { current: currentCate, visible: categories };
}
