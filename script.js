const productscontainer = document.querySelector('.products-container');
const projects = [
    {
        id: 1,
        title: "Corporate Dashboard System",
        description: "Pellentesque habitant morbi tristique senectus et netus.",
        category: "Web design",
        isFeatured: false,
        date: "2024",
        tags: ["HTML", "CSS", "JavaScript"],
        image: "https://bootstrapmade.com/content/demo/Orbit/assets/img/portfolio/portfolio-2.webp",
    },
    {
        id: 2,
        title: "Smart Finance Application",
        description: "Maecenas tempus tellus eget condimentum rhoncus.",
        category: "Mobile App",
        isFeatured: true,
        date: "2024",
        tags: ["Flutter", "Dart", "Firebase"],
        image: "https://bootstrapmade.com/content/demo/Orbit/assets/img/portfolio/portfolio-4.webp",
    },
    {
        id: 3,
        title: "Fashion Label Identity",
        description: "Donec quam felis ultricies nec pellentesque pretium.",
        category: "branding",
        isFeatured: false,
        date: "2023",
        tags: ["Photoshop", "Illustrator", "InDesign"],
        image: "https://bootstrapmade.com/content/demo/Orbit/assets/img/portfolio/portfolio-6.webp",
    },
];

projects.forEach((project) => {
    productscontainer.innerHTML += `
    <div class="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
        <div class="relative h-60 overflow-hidden">
            <img src="${project.image}" alt="Product Image" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500">
            <span class="absolute top-4 left-4 bg-white text-[#0ea5e9] px-4 py-2 rounded-full text-xs uppercase font-semibold shadow">${project.category}</span>
        </div>
        <div class="p-6 flex-1 flex flex-col justify-between">
            <div>
                <h3 class="text-xl font-bold text-[#1e293b] mb-2">${project.title}</h3>
                <p class="text-gray-600 text-sm">${project.description}</p>
            </div>
            
            <div class="flex items-center justify-between border-t border-gray-200 pt-4 mt-4">
                <div class="flex gap-1.5 items-center flex-wrap">
                    ${project.tags.map((tag) => `<span class="bg-gray-100 text-[#0ea5e9] px-2.5 py-1 rounded-full text-xs font-medium">${tag.toUpperCase()}</span>`).join('')}
                </div>
                <div class="text-sm font-bold text-gray-500">${project.date}</div>
            </div>
        </div>
    </div>`;
});