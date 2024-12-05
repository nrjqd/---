//主題
// 容器id
const blogsCover = document.getElementById('blogs-conver');
fetch('./data/blog.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('.json not found');
    }
    return response.json();
  })
  .then(data => {
  // 確保有資料
  if (data.blogs && data.blogs.length > 0) {
    const blog = data.blogs[a]; // index
    const blogDiv = document.createElement('div');
    blogDiv.className = 'blog'; 
    blogDiv.innerHTML = `
    <div class="site-cover site-cover-sm same-height overlay single-page" style="background-image: url('${blog.backgroundImage}');">
      <div class="container">
        <div class="row same-height justify-content-center">
          <div class="col-md-6">
            <div class="post-entry text-center">
              <h1 class="mb-4">${blog.title}</h1>
              <div class="post-meta align-items-center text-center">
                <figure class="author-figure mb-0 me-3 d-inline-block"><img src="${blog.author.authorImage}" alt="Image" class="img-fluid"></figure>
                <span class="d-inline-block mt-1">By ${blog.author.authorName}</span>
                <span>&nbsp;-&nbsp; ${blog.author.date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
`;
    //插入圖片從檔案
    blogsCover.appendChild(blogDiv);
  } else {
    blogsCover.innerHTML = '<p>404</p>';
  }
})
.catch(error => {
  console.error('錯誤:', error);
  blogsCover.innerHTML = '<p>404</p>';
});




//主內容
const blogsContainer = document.getElementById('blogs-container');

fetch('./data/blog.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('.json not found');
    }
    return response.json();
  })
  .then(data => {
  if (data.blogs && data.blogs.length > 0) {
    const blog = data.blogs[a];
    const blogDiv = document.createElement('div');
    blogDiv.className = 'blog'; 
    blogDiv.innerHTML = `
          <div class="post-content-body">
            <p>${blog.blogWord.p1}</p>
            <p>${blog.blogWord.p2}</p>
            <p>${blog.blogWord.p3}</p>
            <div class="row my-4">
              <div class="col-md-12 mb-4">
                <img src="${blog.blogImage.image1}" alt="Image placeholder" class="img-fluid rounded">
              </div>
              <div class="col-md-6 mb-4">
                <img src="${blog.blogImage.image2}" alt="Image placeholder" class="img-fluid rounded">
              </div>
              <div class="col-md-6 mb-4">
                <img src="${blog.blogImage.image3}" alt="Image placeholder" class="img-fluid rounded">
              </div>
            </div>
            <p>${blog.blogWord.p4}</p>
            <p>${blog.blogWord.p5}</p>
            <p>${blog.blogWord.p6}</p>
            <p>${blog.blogWord.p7}</p>
            <p>${blog.blogWord.p8}</p>
            <div class="tags">
            <p3>標籤:</p3>
               ${blog.tags.map(tag => `<a href="category.html?tag=${tag}">${tag}</a>&nbsp;`).join('')}
            </div>
          </div>
`;
    blogsContainer.appendChild(blogDiv);
  } else {
    blogsContainer.innerHTML = '<p>404</p>';
  }
})
.catch(error => {
  console.error('錯誤:', error);
  blogsContainer.innerHTML = '<p>404</p>';
});

        const blogsComment = document.getElementById('blogs-comment');

        let commentsData = {};// 儲存 JSON 數據
        fetch('./data/posts.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('JSON 文件未找到');
                }
                return response.json();
            })
            .then(data => {
                commentsData = data.blogs; // 儲存 JSON 數據
                loadComments(a); // 索引 a 的評論
            })
            .catch(error => {
                console.error('錯誤:', error);
                blogsComment.innerHTML = '<p>無法載入評論。</p>';
            });

        // 載入指定索引的評論
        function loadComments(index) {
            if (commentsData[index] && commentsData[index].length > 0) {
                blogsComment.innerHTML = ''; // 清空確保不重複加入
                commentsData[index].forEach(comment => {
                    const blogDiv = document.createElement('div');
                    blogDiv.className = 'blog';
                    blogDiv.innerHTML = `
                        <div class="pt-5 comment-wr">
                            <ul class="comment-list">
                                <li class="comment">
                                    <div class="vcard">
                                        <img src="${comment.author.img}" alt="${comment.author.name}">
                                    </div>
                                    <div class="comment-body">
                                        <h3>${comment.author.name}</h3>
                                        <div class="meta">${comment.date}</div>
                                        <p>${comment.content}</p>
                                        <p><a href="#" class="reply rounded">回覆</a></p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    `;
                    blogsComment.appendChild(blogDiv);
                });
            } else {
                blogsComment.innerHTML = '<p>目前無可用評論。</p>';
            }
        }
        

