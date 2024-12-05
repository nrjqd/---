        fetch('./data/blog.json') 
            .then(response => response.json())
            .then(data => {
                const blogsContainer = document.getElementById('three-blogs-container');
                const blogs = data.blogs;

                const randomIndexes = getRandomIndexes(blogs.length, 3);

                randomIndexes.forEach(index => {
                    const blog = blogs[index]; // 隨機索引
                    const blogDiv = document.createElement('div');
                    blogDiv.className = 'blog';
                    blogDiv.innerHTML = `
                        <li>
                            <a href="getblogdata.html?index=${blog.id}">
                            <img src="${blog.blogImage.image1}" alt="Image placeholder" class="me-4 rounded">
                            <div class="text">
                                <h4>${blog.title}</h4>
                                <div class="post-meta">
                                <span class="mr-2">${blog.author.date}</span>
                                </div>
                            </div>
                            </a>
                        </li>
                    `;
                    blogsContainer.appendChild(blogDiv);
                });
            })
            .catch(error => {
                console.error('Error loading blogs:', error);
            });

        // 隨機索引
        function getRandomIndexes(total, count) {
            const indexes = [];
            while (indexes.length < count) {
                const randomIndex = Math.floor(Math.random() * total);
                if (!indexes.includes(randomIndex)) {
                    indexes.push(randomIndex);
                }
            }
            return indexes;
}
fetch('./data/blog.json') 
            .then(response => response.json())
            .then(data => {
                const blogsContainer = document.getElementById('three-blogs-container2');
                const blogs = data.blogs;

                const randomIndexes = getRandomIndexes(blogs.length, 3);

                randomIndexes.forEach(index => {
                    const blog = blogs[index]; // 隨機索引
                    const blogDiv = document.createElement('div');
                    blogDiv.className = 'blog';
                    blogDiv.innerHTML = `
                        <li>
                            <a href="getblogdata.html?index=${blog.id}">
                            <img src="${blog.blogImage.image1}" alt="Image placeholder" class="me-4 rounded">
                            <div class="text">
                                <h4>${blog.title}</h4>
                                <div class="post-meta">
                                <span class="mr-2">${blog.author.date}</span>
                                </div>
                            </div>
                            </a>
                        </li>
                    `;
                    blogsContainer.appendChild(blogDiv);
                });
            })
            .catch(error => {
                console.error('Error loading blogs:', error);
            });

        // 隨機索引
        function getRandomIndexes(total, count) {
            const indexes = [];
            while (indexes.length < count) {
                const randomIndex = Math.floor(Math.random() * total);
                if (!indexes.includes(randomIndex)) {
                    indexes.push(randomIndex);
                }
            }
            return indexes;
}

