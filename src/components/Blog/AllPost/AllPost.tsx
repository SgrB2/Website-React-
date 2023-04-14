import React, { useEffect, useState } from "react";

import styles from "./AllPost.module.css";

import ArticleMedium from "./ArticleMedium/ArticleMedium";
import ArticleSmall from "./ArticleSmall/ArticleSmall";
import Title from "components/Title/Title";
import Tabs from "components/Tabs/Tabs";

import pepeNaked from "../../Images/img/pepenaked.jpg";
import pepeClip from "../../Images/img/pepeclip.png";
import pepeDied from "../../Images/img/pepedied.jpg";
import pepeClown from "../../Images/img/pepeclown.jpg";


interface Posts {
  id: number;
  image: any;
  date: string;
  title: string;
  text?: string;
}

const postsMain: Posts[] = [
  {
    id: Math.random(),
    image: pepeClip,
    date: "01.04.2023",
    title:
      'NFT-коллекционер требует вернуть полмиллиона долларов за арт с "голым лягушонком Пепе"',
  },
  {
    id: Math.random(),
    image: pepeDied,
    date: "03.04.2023",
    title:
      "Лягушонок Пепе мертв. У его создателя не получилось вернуть мем обычным пользователям интернета",
  },
  {
    id: Math.random(),
    image: pepeNaked,
    date: "03.04.2023",
    title: "Пользователь Reddit сделал музыкальный клип про лягушек Пепе",
  },
  {
    id: Math.random(),
    image: pepeClip,
    date: "01.04.2023",
    title: "Как Пепе стал любимым мемом американских националистов",
  },
  {
    id: Math.random(),
    image: pepeClip,
    date: "12.04.2023",
    title: "Steam удалил смайлики с лягушонком Пепе",
  },
  {
    id: Math.random(),
    image: pepeNaked,
    date: "01.04.2023",
    title: "Лягушонок Пепе из старого мема стал символом протестов в Гонконге",
  },
];
const postsAside: Posts[] = [
  {
    id: Math.random(),
    image: pepeClown,
    date: "14.04.2023",
    title: "Создатель мема «Лягушонок Пепе» добился удаления NFT-проекта",
  },
  {
    id: Math.random(),
    image: pepeClown,
    date: "13.04.2023",
    title:
      "Как мужчины в мемах уезжают из России. На пикчах лягушонок Пепе и Фродо радуются переезду в Казахстан",
  },
  {
    id: Math.random(),
    image: pepeClown,
    date: "03.04.2023",
    title:
      "Что за мем с лягушонком Пепе, который упал, рассыпал фастфуд и плачет",
  },
  {
    id: Math.random(),
    image: pepeClown,
    date: "06.03.2023",
    title:
      "WePlay представила смайлики для Twitch в честь PGL Major Stockholm 2021 — на них изображен лягушонок Пепе",
  },
  {
    id: Math.random(),
    image: pepeClown,
    date: "31.03.2023",
    title: "Вышел трейлер документального фильма о лягушонке Пепе",
  },
];

const fakeRequest = (): Promise<Posts[]> => {
  return new Promise((res) => {
    setTimeout(() => res(postsMain), 2000);
  });
};

const AllPost = () => {
  const [post, setPost] = useState<Posts[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fakeRequest()
      .then((res) => {
        setPost(res);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Title title="Blog" />
      <Tabs />
      <div className={styles.blog_container}>
        <div className={styles.main}>
          <section className={styles.section_medium}>
            {loading ? (
              <p>Loading...</p>
            ) : (
              postsMain.map((post) => (
                <ArticleMedium
                  key={post.id}
                  image={post.image}
                  date={post.date}
                  title={post.title}
                />
              ))
            )}
          </section>
        </div>
        <aside className={styles.aside}>
          {postsAside.map((post) => (
            <ArticleSmall
              key={post.id}
              image={post.image}
              date={post.date}
              title={post.title}
            />
          ))}
        </aside>
      </div>
    </div>
  );
};

export default AllPost;
