// "use client"
import Image from 'next/image';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import styles from './Home.module.css';

async function getBlogs() {
  const blogDir = path.join(process.cwd(), 'blogs');
  const files = fs.readdirSync(blogDir);

  const blogs = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), 'utf-8');
    const { data: frontMatter } = matter(fileContent);
    return {
      meta: frontMatter,
      // slug: filename.replace('.mdx'),
    };
  });

  return blogs;
}

export default async function Home() {
  const blogs = await getBlogs();

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>BLOG PAGE</h1>
      <section className={styles.blogSection}>
        <div className={styles.blogList}>
          {blogs.map((blog) => (
            <article className={styles.blogItem} >
              
              <div>
                <Image src={blog.meta.image} alt={blog.meta.title} width={800} height={300} /><br/>
                <h3 className={styles.subTitle}>{blog.meta.title}</h3><br/>
                <p className={styles.description}>{blog.meta.firstdescription}</p><br/>
                <p className={styles.description}>{blog.meta.seconddescription}</p><br/>
                <Image src={blog.meta.images} alt={blog.meta.title} width={800} height={300} />
                <div className={styles.blogDate}>
                  <p>{blog.meta.date}</p>
                </div>
                <br/><br/>
                <h3 className={styles.description}>{blog.meta.subtitle}</h3><br/>
                <p className={styles.description}>{blog.meta.thirddescription}</p><br/>
                <p className={styles.description}>{blog.meta.fourthdescription}</p>
             
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
