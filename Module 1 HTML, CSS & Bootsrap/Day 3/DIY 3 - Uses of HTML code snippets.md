HTML Code Snippets
<head> Tag
The <head> tag contains meta-information about the HTML document, such as its title, character set, and links to stylesheets or scripts.

html
Copy code
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sample Page</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body> Tag
The <body> tag contains the content of the HTML document, including text, images, links, and other elements.

html
Copy code
<body>
  <h1>Welcome to My Website</h1>
  <p>This is a paragraph of text on my web page.</p>
</body>
<title> Tag
The <title> tag sets the title of the HTML document, which is displayed in the browser's title bar or tab.

html
Copy code
<title>Sample Page</title>
<meta> Tag
The <meta> tag provides metadata about the HTML document, such as the character set, viewport settings, and author information.

html
Copy code
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<img> Tag
The <img> tag is used to embed images in an HTML document.

html
Copy code
<img src="image.jpg" alt="Description of the image">
<div> Tag
The <div> tag is a container element used to group and organize content.

html
Copy code
<div class="container">
  <h2>Section Title</h2>
  <p>This is a section of content within a div.</p>
</div>
Sample HTML Page
Here is a complete sample HTML page incorporating all the mentioned tags to showcase their practical application in creating a coherent and structured web page.

html
Copy code
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="This is a sample web page to demonstrate HTML tags">
  <title>Sample Page</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <h1>Welcome to My Website</h1>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <section id="home">
      <div class="container">
        <h2>Home</h2>
        <p>This is the home section of the sample web page. Below is an example of an image embedded using the <img> tag.</p>
        <img src="image.jpg" alt="Description of the image">
      </div>
    </section>
    <section id="about">
      <div class="container">
        <h2>About</h2>
        <p>This is the about section. The <div> tag is used to group content within this section.</p>
      </div>
    </section>
    <section id="contact">
      <div class="container">
        <h2>Contact</h2>
        <form action="/submit" method="post">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name">
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  </main>
  <footer>
    <p>&copy; 2024 My Website</p>
  </footer>
</body>
</html>
Explanation
The <head> section includes meta-information, the document title, and a link to an external stylesheet.
The <body> section contains the main content of the page.
The <title> tag sets the title of the page, which appears in the browser tab.
The <meta> tags provide character encoding and viewport settings.
The <img> tag embeds an image within the home section.
The <div> tags are used to group content within each section, making the page more organized and easier to style
