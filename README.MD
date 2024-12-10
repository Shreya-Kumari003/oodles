<body>
  <h1 style="color: #333;">React-Django Blog App</h1>
  <p>A full-stack web application for creating, editing, and managing blog posts. The frontend is built with React, and the backend is powered by Django REST Framework.</p>

  <h2 style="color: #555;">Features</h2>
  <ul>
    <li>User authentication (login, logout, registration)</li>
    <li>CRUD operations for blog posts</li>
    <li>Image upload and display</li>
    <li>Responsive design</li>
    <li>Pagination for blog posts</li>
  </ul>

  <h2 style="color: #555;">Technologies</h2>
  <h3>Frontend</h3>
  <ul>
    <li>React</li>
    <li>Axios (for API calls)</li>
    <li>React Router (for routing)</li>
  </ul>
  <h3>Backend</h3>
  <ul>
    <li>Django</li>
    <li>Django REST Framework</li>
  </ul>

  <h2 style="color: #555;">Setup</h2>
  <h3>Frontend</h3>
  <ol>
    <li>Navigate to the 'frontend' directory.</li>
    <li>Run <code>npm install</code> to install dependencies.</li>
    <li>Run <code>npm start</code> to start the development server.</li>
  </ol>
  <h3>Backend</h3>
  <ol>
    <li>Navigate to the 'backend' directory.</li>
    <li>Create a virtual environment: <code>python -m venv env</code></li>
    <li>Activate the virtual environment:</li>
    <ul>
      <li>Windows: <code>env\Scripts\activate</code></li>
      <li>macOS/Linux: <code>source env/bin/activate</code></li>
    </ul>
    <li>Install dependencies: <code>pip install -r requirements.txt</code></li>
    <li>Run migrations: <code>python manage.py migrate</code></li>
    <li>Start the server: <code>python manage.py runserver</code></li>
  </ol>

  <h2 style="color: #555;">API Endpoints</h2>
  <table border="1" cellspacing="0" cellpadding="5">
    <thead>
      <tr>
        <th>Method</th>
        <th>URL</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>GET</td>
        <td>/posts/</td>
        <td>Retrieve a list of all blog posts</td>
      </tr>
      <tr>
        <td>POST</td>
        <td>/posts/</td>
        <td>Create a new blog post</td>
      </tr>
      <tr>
        <td>GET</td>
        <td>/posts/&lt;post_id&gt;/</td>
        <td>Retrieve details of a specific blog post</td>
      </tr>
      <tr>
        <td>PUT</td>
        <td>/posts/&lt;post_id&gt;/</td>
        <td>Update an existing blog post</td>
      </tr>
      <tr>
        <td>DELETE</td>
        <td>/posts/&lt;post_id&gt;/</td>
        <td>Delete a blog post</td>
      </tr>
    </tbody>
  </table>

  <h2 style="color: #555;">Media</h2>
  <p><b>Upload Directory:</b> <code>media/</code></p>
  <p><b>URL Access:</b> <code>/media/</code></p>

  <h2 style="color: #555;">Deployment</h2>
  <h3>Frontend</h3>
  <p>Build and deploy the React app using services like Vercel, Netlify, or AWS.</p>
  <h3>Backend</h3>
  <p>Deploy the Django app using platforms like Heroku, AWS, or DigitalOcean.</p>

  <h2 style="color: #555;">Contact</h2>
  <p><b>Developer Name:</b> Your Name</p>
  <p><b>Email:</b> developer@example.com</p>
  <p><b>GitHub:</b> <a href="https://github.com/your-username/react-django-blog" target="_blank">https://github.com/your-username/react-django-blog</a></p>
</body>
