function showCategory(categoryId) {
    // Hide all categories
    const categories = document.querySelectorAll('.category-content');
    categories.forEach(function (category) {
        category.style.display = 'none';
    });

    // Show the selected category
    const selectedCategory = document.getElementById(categoryId);
    if (selectedCategory) {
        selectedCategory.style.display = 'block';
    }

    // Remove the active class from all category links
    const categoryLinks = document.querySelectorAll('.category-bar ul li a');
    categoryLinks.forEach(function (link) {
        link.classList.remove('default-active', 'active-category');
    });

    // Add the active class to the clicked link
    const activeLink = document.querySelector(`.category-bar ul li a[onclick="showCategory('${categoryId}')"]`);
    if (activeLink) {
        activeLink.classList.add('active-category');
    }
}

// Automatically highlight the default active category
window.onload = function () {
    document.querySelector('.default-active').classList.add('active-category');
};
